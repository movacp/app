/* MOVA · Resultados en juegos de matemáticas y escape rooms (v128)
   Cada juego llama MovaResults.start() al empezar y MovaResults.finish({...}) al terminar.
   - Guarda la calificación con MovaAuth.save (tareas, reporte mensual y Live).
   - Muestra "Guardado en tu progreso" y, si vino de una tarea, "Tarea completada".
   - En los escape rooms: Escape clock durante el juego y certificado al final. */
(function () {
  "use strict";
  var slug = (location.pathname.match(/juego-([a-z0-9-]+)\.html$/) || [])[1] || "juego";
  var es = (document.documentElement.lang || "es").slice(0, 2) === "es";
  var t0 = 0, clockEl = null, timer = null, isEscape = false;
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>';
  var CLOCK = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/></svg>';
  var CSS = "" +
    ".mr-box{display:grid;gap:8px;margin:12px auto 4px;max-width:420px;text-align:left}" +
    ".mr-saved{display:flex;gap:10px;align-items:center;background:#E9F8EF;color:#15192B;border-radius:16px;padding:10px 12px;font:700 14px/1.35 'Plus Jakarta Sans',system-ui,sans-serif}" +
    ".mr-saved i{width:28px;height:28px;border-radius:50%;background:#2F9A5C;display:grid;place-items:center;flex:none}.mr-saved i svg{width:15px;height:15px}" +
    ".mr-saved small{display:block;font-weight:600;color:#4D5468;font-size:12.5px}" +
    ".mr-saved.off{background:#F1EEF8}.mr-saved.off i{background:#8A8DAA}" +
    ".mr-task{display:flex;gap:10px;align-items:center;background:#E6E2FF;color:#15192B;border-radius:16px;padding:10px 12px;font:700 14px/1.35 'Plus Jakarta Sans',system-ui,sans-serif}" +
    ".mr-task b{width:28px;height:28px;border-radius:50%;background:#fff;display:grid;place-items:center;font-size:11px;flex:none}" +
    ".mr-clock{display:inline-flex;gap:5px;align-items:center;flex:none;background:#15192B;color:#fff;border-radius:999px;padding:4px 5px 4px 9px;font:800 12.5px 'Plus Jakarta Sans',system-ui,sans-serif;white-space:nowrap}" +
    ".mr-clock b{background:#D3F36B;color:#15192B;border-radius:999px;padding:3px 8px;font-variant-numeric:tabular-nums}" +
    ".mr-cert{background:linear-gradient(160deg,#2A2250,#15192B);color:#fff;border-radius:24px;padding:18px 16px;text-align:center;margin:12px auto 4px;max-width:420px}" +
    ".mr-cert .seal{width:88px;height:88px;border-radius:50%;border:4px dashed #FF8FC0;display:grid;place-items:center;margin:2px auto 8px;transform:rotate(-10deg);font:800 15px/1 'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;color:#FF8FC0}" +
    ".mr-cert h3{font:800 22px/1.1 'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;margin:0;color:#fff}" +
    ".mr-cert p{color:#C9CCE0;margin:4px 0 12px;font:600 13.5px 'Plus Jakarta Sans',sans-serif}" +
    ".mr-cg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}" +
    ".mr-cg div{background:#262B45;border-radius:14px;padding:8px 4px}.mr-cg b{display:block;font:800 20px 'Bricolage Grotesque',sans-serif;color:#D3F36B;font-variant-numeric:tabular-nums}" +
    ".mr-cg span{font:600 11.5px 'Plus Jakarta Sans',sans-serif;color:#C9CCE0}";
  function css() { if (document.getElementById("mr-css")) return; var s = document.createElement("style"); s.id = "mr-css"; s.textContent = CSS; document.head.appendChild(s); }
  function mmss(sec) { sec = Math.max(0, Math.round(sec)); return Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function user() { try { return JSON.parse(localStorage.getItem("mova_student") || "null"); } catch (e) { return null; } }
  function taskInfo() {
    var id = (location.search.match(/[?&]task=([^&]+)/) || [])[1] || window.__movaTaskId;
    return id ? decodeURIComponent(id) : null;
  }
  function start(opts) {
    opts = opts || {}; css(); isEscape = !!opts.escape; t0 = Date.now();
    clearInterval(timer);
    if (isEscape) {
      var hud = document.querySelector("#s-game .hud");
      if (hud && !clockEl) { clockEl = document.createElement("span"); clockEl.className = "mr-clock"; clockEl.setAttribute("aria-label", "Escape clock"); hud.insertBefore(clockEl, hud.querySelector("#score")); }
      var paint = function () { if (clockEl) clockEl.innerHTML = CLOCK + "<b>" + mmss((Date.now() - t0) / 1000) + "</b>"; };
      paint(); timer = setInterval(paint, 1000);
    }
  }
  /* r = { ok, total, points, stars, level, title } */
  function finish(r) {
    css(); clearInterval(timer);
    var secs = r.seconds != null ? Math.round(r.seconds) : t0 ? Math.round((Date.now() - t0) / 1000) : null, pct = r.total ? Math.round(r.ok / r.total * 100) : 0;
    var title = r.title || (document.title || "").split("·")[0].trim();
    var item = title + " · " + (r.level || "");
    var detail = { kind: "score", level: r.level || null, points: r.points || 0, stars: r.stars || 0, seconds: secs };
    if (r.escape != null) isEscape = !!r.escape;
    if (isEscape) detail.escape = true;
    var u = user(), saved = false;
    try { if (window.MovaAuth && u && u.token) { window.MovaAuth.save(slug, item, r.ok, r.total, detail); saved = true; } } catch (e) {}
    if (r.escape != null) isEscape = !!r.escape;
    var end = r.anchor ? r.anchor.parentNode : document.getElementById("s-end"); if (!end) return;
    var old = end.querySelector(".mr-wrap"); if (old) old.remove();
    var wrap = document.createElement("div"); wrap.className = "mr-wrap";
    var h = "";
    if (isEscape && r.cert !== false) {
      h += '<div class="mr-cert"><div class="seal">' + (r.ok >= Math.ceil(r.total * .5) ? "YOU<br>ESCAPED" : "TRY<br>AGAIN") + "</div><h3>" + esc(title) + "</h3><p>" + esc(r.level || "") + " · Escape certificate</p>" +
        '<div class="mr-cg"><div><b>' + r.ok + "/" + r.total + "</b><span>keys first try</span></div><div><b>" + (secs != null ? mmss(secs) : "–") + "</b><span>escape time</span></div><div><b>" + (r.stars || 0) + "</b><span>stars</span></div></div></div>";
    }
    h += '<div class="mr-box">';
    if (saved) h += '<div class="mr-saved"><i>' + CHECK + "</i><span>" + (es ? "Guardado en tu progreso" : "Saved to your progress") + "<small>" + esc(item) + " · " + r.ok + "/" + r.total + " (" + pct + "%)" + (isEscape && secs != null ? " · " + mmss(secs) : "") + "</small></span></div>";
    else h += '<div class="mr-saved off"><i>' + CHECK + "</i><span>" + (es ? "Inicia sesión para guardar tu resultado" : "Sign in to save your result") + "</span></div>";
    if (saved && taskInfo()) h += '<div class="mr-task"><b>✓</b><span>' + (es ? "Tarea completada" : "Assignment completed") + "</span></div>";
    h += "</div>";
    wrap.innerHTML = h;
    var anchor = r.anchor || end.querySelector(".sumrow") || end.querySelector(".summary") || end.querySelector("#final");
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(wrap, anchor.nextSibling); else end.appendChild(wrap);
  }
  window.MovaResults = { start: start, finish: finish };
})();
