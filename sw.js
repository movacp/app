/* MOVA Learning Studio: permite abrir la app sin internet.
   Al publicar cambios, suba el número de versión para que todos reciban la actualización. */
const VERSION = "mova-v2";
const CORE = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "maskable-512.png",
  "juego-word-quest.html", "juego-mision-matematica.html", "juego-verb-memory.html", "juego-sentence-builder.html"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); } return res; }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok && (new URL(req.url).origin === location.origin || req.url.includes("fonts.g"))) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
    return res;
  })));
});
