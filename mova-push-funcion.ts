// MOVA Learning Studio · Función "mova-push": envía las notificaciones pendientes.
// Supabase la llama cada 5 minutos (cron). No requiere cambios.
import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async (req) => {
  if (req.headers.get("x-mova-cron") !== Deno.env.get("MOVA_CRON_SECRET")) {
    return new Response("unauthorized", { status: 401 });
  }
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  webpush.setVapidDetails("mailto:hola@heymova.mx", Deno.env.get("VAPID_PUBLIC_KEY")!, Deno.env.get("VAPID_PRIVATE_KEY")!);

  const { data: rows, error } = await sb.rpc("push_due_batch");
  if (error) return new Response(JSON.stringify(error), { status: 500 });

  let sent = 0;
  for (const r of rows ?? []) {
    const { data: subs } = await sb.from("mova_push_subs").select("endpoint,p256dh,auth").eq("username", r.username);
    let ok = false;
    for (const s of subs ?? []) {
      try {
        await webpush.sendNotification(
          { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
          JSON.stringify({ title: r.title, body: r.body, url: r.url, tag: r.kind + "-" + r.id }),
          { TTL: 60 * 60 * 24 },
        );
        ok = true;
        await sb.from("mova_push_subs").update({ last_ok: new Date().toISOString() }).eq("endpoint", s.endpoint);
      } catch (e) {
        const code = (e as { statusCode?: number }).statusCode;
        if (code === 404 || code === 410) await sb.from("mova_push_subs").delete().eq("endpoint", s.endpoint);
      }
    }
    await sb.rpc("push_mark", { p_id: r.id, p_ok: ok });
    if (ok) sent++;
  }
  return new Response(JSON.stringify({ sent, total: (rows ?? []).length }), { headers: { "Content-Type": "application/json" } });
});
