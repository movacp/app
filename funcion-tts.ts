// MOVA Learning Studio · función "tts"
// Convierte texto en voz con ElevenLabs y guarda cada audio en Supabase (bucket "tts").
// La clave de ElevenLabs vive en el secreto ELEVENLABS_API_KEY; nunca se publica.
import { createClient } from "jsr:@supabase/supabase-js@2";

const VERSION = "v1";
// Mismo modelo que las muestras aprobadas (Multilingual v2) para inglés y español.
const MODELS: Record<string, { model: string; language_code?: string }> = {
  en: { model: "eleven_multilingual_v2" },
  es: { model: "eleven_multilingual_v2" },
};
const VOICES: Record<string, string | undefined> = {
  f: "XrExE9yKIg1WjnnlVkGX", // Matilda · profesional y educativa
  m: "QZA1myOcnbLYY9uuhixV", // Dean · tranquilo y claro
  k: "1u9q7vX1Lcx74yAcFPt7", // Luisa · narradora cálida, español latino (lecturas en español)
};
const ORIGINS = ["https://movacp.github.io", "http://localhost", "http://127.0.0.1"];

const cors = (origin: string) => ({
  "Access-Control-Allow-Origin": origin || "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});
const json = (body: unknown, status: number, origin: string) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors(origin), "Content-Type": "application/json" } });

async function sha256(s: string) {
  const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(h)).map((x) => x.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin") || "";
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors(origin) });
  if (req.method !== "POST") return json({ error: "method" }, 405, origin);
  if (!ORIGINS.some((o) => origin.startsWith(o))) return json({ error: "origin" }, 403, origin);

  let body: { text?: string; voice?: string; speed?: string; lang?: string };
  try { body = await req.json(); } catch { return json({ error: "json" }, 400, origin); }

  const text = String(body.text || "").replace(/\s+/g, " ").trim();
  const voice = String(body.voice || "f");
  const speed = String(body.speed || "1.00");
  const sp = parseFloat(speed);
  const lang = String(body.lang || "en");
  const M = MODELS[lang];
  if (!M) return json({ error: "lang" }, 400, origin);
  if (!text || text.length > 800) return json({ error: "text" }, 400, origin);
  if (!VOICES[voice]) return json({ error: "voice" }, 400, origin);
  if (!/^\d\.\d\d$/.test(speed) || sp < 0.85 || sp > 1.1) return json({ error: "speed" }, 400, origin);

  const path = (await sha256(`${VERSION}|${lang}|${voice}|${speed}|${text}`)) + ".mp3";
  const supa = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const url = supa.storage.from("tts").getPublicUrl(path).data.publicUrl;

  const head = await fetch(url, { method: "HEAD" });
  if (head.ok) return json({ url, cached: true }, 200, origin);

  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICES[voice]}?output_format=mp3_44100_64`, {
    method: "POST",
    headers: { "xi-api-key": Deno.env.get("ELEVENLABS_API_KEY")!, "Content-Type": "application/json", Accept: "audio/mpeg" },
    body: JSON.stringify({
      text,
      model_id: M.model,
      ...(M.language_code ? { language_code: M.language_code } : {}),
      voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0, use_speaker_boost: true, speed: sp },
    }),
  });
  if (!r.ok) return json({ error: "elevenlabs", status: r.status, detail: (await r.text()).slice(0, 300) }, 502, origin);

  const audio = new Uint8Array(await r.arrayBuffer());
  const up = await supa.storage.from("tts").upload(path, audio, { contentType: "audio/mpeg", upsert: true, cacheControl: "31536000" });
  if (up.error) return json({ error: "storage", detail: up.error.message }, 500, origin);
  return json({ url, cached: false }, 200, origin);
});
