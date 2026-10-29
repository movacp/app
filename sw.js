/* MOVA Learning Studio: permite abrir la app sin internet.
   Al publicar cambios, suba el número de versión para que todos reciban la actualización. */
const VERSION = "mova-v22";
const CORE = ["./", "index.html", "studio-plus.js", "studio-games.js", "studio-lote10.js", "studio-lote11.js", "toefl-bank.js", "mova-voice.js", "mova-auth.js", "manifest.json", "icon-192.png", "icon-512.png", "maskable-512.png",
  "juego-word-quest.html", "juego-mision-matematica.html", "juego-level-up.html", "juego-verb-memory.html", "juego-sentence-builder.html", "juego-locked-library.html",
  "juego-toefl-practice.html", "juego-sentence-scramble.html", "juego-word-forms.html",
  "juego-lee-con-mochi.html", "juego-sopa-de-letras.html", "juego-crucigrama.html", "aviso-privacidad.html",
  "mochi-hola.webp", "mochi-lee.webp", "mochi-piensa.webp", "mochi-salta.webp",
  "wf-cover.webp", "wf-sorter.webp", "wf-detective.webp", "wf-slot.webp", "wf-fix.webp"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const fresh = req.mode === "navigate" || (url.origin === location.origin && /\.(js|html)$/.test(url.pathname));
  if (fresh) {
    e.respondWith(fetch(req, { cache: "no-cache" }).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); } return res; }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok && (url.origin === location.origin || req.url.includes("fonts.g"))) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
    return res;
  })));
});
