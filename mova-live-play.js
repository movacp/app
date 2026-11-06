/* MOVA · Live leaderboard en cualquier juego (v84)
   Se carga en juego-*.html cuando llega ?live=CODIGO desde Game On. Muestra una barra con
   el tiempo y los puntos, suma cada ronda terminada al ranking de la clase y, al acabar
   el tiempo, regresa a Game On para ver el podio. */
(function () {
  "use strict";
  var code = (location.search.match(/[?&]live=(\d{4})/) || [])[1]; if (!code) return;
  var u = null; try { u = JSON.parse(localStorage.getItem("mova_student") || "null"); } catch (e) {}
  if (!u || !u.token) return;
  var SB_URL = "https://fclafxrkibvcjktrgznt.supabase.co", SB_KEY = "sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6";
  var slug = (location.pathname.match(/juego-([a-z0-9-]+)\.html$/) || [])[1] || "game";
  var live = null, offset = 0, round = 0, st = { pts: 0, ok: 0, bad: 0 }, over = false;
  function rpc(fn, args) {
    args = args || {}; args.p_token = u.token; var t0 = Date.now();
    return fetch(SB_URL + "/rest/v1/rpc/" + fn, { method: "POST", headers: { apikey: SB_KEY, "Content-Type": "application/json" }, body: JSON.stringify(args) })
      .then(function (r) { return r.json().catch(function () { return null; }).then(function (j) { if (!r.ok || (j && j.ok === false)) throw j || {}; if (j && j.now) offset = j.now - (t0 + Date.now()) / 2; return j; }); });
  }
  function now() { return Date.now() + offset; }
  function key() { return "mlp-st-" + code + "-" + round; }
  function load() { try { var o = JSON.parse(sessionStorage.getItem(key()) || "null"); if (o) st = o; else st = { pts: 0, ok: 0, bad: 0 }; } catch (e) {} }
  function keep() { try { sessionStorage.setItem(key(), JSON.stringify(st)); } catch (e) {} }

  var css = ".mlp{position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 8px);transform:translateX(-50%);z-index:2147483600;display:flex;align-items:center;gap:10px;background:#15192B;color:#fff;border-radius:999px;padding:7px 8px 7px 14px;font:800 13px 'Plus Jakarta Sans',system-ui,sans-serif;box-shadow:0 10px 26px rgba(21,25,43,.35)}" +
    ".mlp .k{background:#FF8FC0;color:#15192B;font-size:10.5px;letter-spacing:.06em;padding:4px 8px;border-radius:999px}.mlp .t{font-variant-numeric:tabular-nums;min-width:40px}.mlp .p{background:#D3F36B;color:#15192B;padding:6px 11px;border-radius:999px}" +
    ".mlp-end{position:fixed;inset:0;z-index:2147483601;background:rgba(21,25,43,.72);display:grid;place-items:center;padding:20px}.mlp-end .c{background:#fff;color:#15192B;border-radius:28px;padding:26px 22px;max-width:360px;width:100%;text-align:center;font-family:'Plus Jakarta Sans',system-ui,sans-serif}" +
    ".mlp-end h2{font:800 30px/1.05 'Bricolage Grotesque',sans-serif;margin:0 0 8px}.mlp-end p{color:#5A5F75;font-weight:600;margin:0 0 18px}.mlp-end a{display:block;background:#15192B;color:#fff;border-radius:999px;padding:15px;font-weight:800;text-decoration:none}";
  var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
  var bar = document.createElement("div"); bar.className = "mlp"; bar.innerHTML = '<span class="k">LIVE</span><span class="t">--:--</span><span class="p">0 pts</span>';
  function mount() { if (document.body && !bar.parentNode) document.body.appendChild(bar); }
  function paint() {
    mount(); if (!live) return;
    var left = Math.max(0, (live.ends_at - now()) / 1000), pre = live.start_at - now();
    bar.querySelector(".t").textContent = pre > 0 ? "0:" + ("0" + Math.ceil(pre / 1000)).slice(-2) : Math.floor(left / 60) + ":" + ("0" + Math.floor(left % 60)).slice(-2);
    bar.querySelector(".p").textContent = st.pts.toLocaleString("en-US") + " pts";
    if (live.status === "playing" && left <= 0) finish();
  }
  function finish() {
    if (over) return; over = true; push();
    var d = document.createElement("div"); d.className = "mlp-end";
    d.innerHTML = '<div class="c"><h2>Time’s up!</h2><p>You earned ' + st.pts.toLocaleString("en-US") + " points. Let’s see the class ranking.</p><a href=\"juego-retos.html?live=" + code + '">See results</a></div>';
    document.body.appendChild(d);
    setTimeout(function () { location.href = "juego-retos.html?live=" + code; }, 6000);
  }
  function push() { if (!round) return Promise.resolve(); return rpc("live_push", { p_code: code, p_round: round, p_value: st.pts, p_coins: 0, p_correct: st.ok, p_wrong: st.bad, p_items: { game: slug } }).catch(function () {}); }
  function poll() {
    rpc("live_state", { p_code: code }).then(function (r) {
      if (!r || !r.live) return; live = r.live;
      if (live.status === "closed") { location.href = "juego-retos.html"; return; }
      if (live.round !== round) { round = live.round; over = false; load(); }
      if (live.status === "ended") finish();
      paint();
    }).catch(function (e) { if (e && (e.error === "kicked" || e.error === "notfound")) location.href = "juego-retos.html"; });
  }
  /* cada resultado que el juego guarda suma puntos */
  window.__movaLiveHook = function (activity, item, score, total, detail) {
    if (over || !live || live.status !== "playing") return;
    var k = detail && detail.kind;
    if (score != null && total) { st.pts += Math.round(score) * 10 + (score >= total ? 20 : 0); st.ok += Math.round(score); st.bad += Math.max(0, Math.round(total - score)); }
    else if (k && k !== "time") st.pts += 50;
    else return;
    keep(); paint(); push();
  };
  poll(); setInterval(poll, 3000); setInterval(paint, 500);
})();
