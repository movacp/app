/* MOVA · carga el tema 2026 en los juegos (tipografía, colores y botón Home) */
(function(){ try{ if(window.__movaThemeLoader || !/juego-|mova-live/.test(location.pathname)) return; window.__movaThemeLoader = 1;
  var s = document.createElement('script'); s.src = 'mova-theme.js?v=27'; (document.head || document.documentElement).appendChild(s); }catch(e){} })();
/* MOVA Learning Studio: inicio de sesión opcional para alumnos MOVA y registro de avance.
   La app sigue abierta para todos; si el alumno entra con su cuenta, se guarda su práctica. */
(function () {
  "use strict";
  /* Voces naturales (ElevenLabs) en todos los juegos que usan mova-auth.js */
  try {
    if (!window.__movaVoice && !document.querySelector('script[src*="mova-voice.js"]')) {
      var vs = document.createElement("script"); vs.src = "mova-voice.js"; (document.head || document.documentElement).appendChild(vs);
    }
  } catch (e) {}
  var SB_URL = "https://fclafxrkibvcjktrgznt.supabase.co";
  var SB_KEY = "sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6";
  var K_USER = "mova_student", K_PEND = "mova_pending", K_QUEUE = "mova_queue";
  var NAMES = {
    "word-quest": "Word Quest", "mision-matematica": "Misión Matemática", "level-up": "Level Up",
    "verb-memory": "Verb Memory", "sentence-builder": "Sentence Builder", "locked-library": "Locked Library",
    "toefl-practice": "TOEFL Practice", "word-forms": "Word Forms", "sentence-scramble": "Sentence Scramble",
    "lee-con-mochi": "Aprende a leer con Mochi", "sopa-de-letras": "Sopa de letras", "crucigrama": "Crucigrama", "retos": "Retos multijugador"
  };

  function get(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
  function set(k, v) { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function rpc(fn, args, keepalive) {
    return fetch(SB_URL + "/rest/v1/rpc/" + fn, {
      method: "POST", keepalive: !!keepalive,
      headers: { "apikey": SB_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(args || {})
    }).then(function (r) { return r.json().catch(function () { return null; }).then(function (j) { if (!r.ok) throw j || {}; return j; }); });
  }

  var user = get(K_USER);

  /* ---------- Avance ---------- */
  function save(activity, item, score, total, detail) {
    if (!user) return Promise.resolve(false);
    var row = { p_token: user.token, p_activity: activity, p_item: item || null,
      p_score: score == null ? null : Math.round(score), p_total: total == null ? null : Math.round(total), p_detail: detail || {} };
    row.p_detail.uid = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    if (window.__movaTaskId && (gameSlug() ? activity === gameSlug() : /^app-(library|lecturas)$/.test(activity) && detail && detail.kind === "done")) {
      if (score != null || (detail && detail.kind && detail.kind !== "time")) {
        if (row.p_detail.task == null) row.p_detail.task = window.__movaTaskId;
        window.__movaTaskMark();
      }
    }
    return rpc("save_progress", row, true).then(function (ok) {
      if (ok === false) { checkSession(); }
      return ok;
    }).catch(function () {
      var q = get(K_QUEUE) || []; q.push(row); set(K_QUEUE, q.slice(-100)); return false;
    });
  }
  function flushQueue() {
    var q = get(K_QUEUE); if (!user || !q || !q.length) return;
    set(K_QUEUE, null);
    q.forEach(function (row) { row.p_token = user.token; rpc("save_progress", row).catch(function () {
      var again = get(K_QUEUE) || []; again.push(row); set(K_QUEUE, again);
    }); });
  }
  function flushPending() {
    var p = get(K_PEND); if (!p) return;
    set(K_PEND, null);
    if (!user || p.u !== user.username) return;
    var secs = Math.round(((p.end || p.start) - p.start) / 1000);
    if (secs < 15) return;
    save(p.a, p.i || null, null, null, { seconds: secs, kind: "time" });
  }

  /* Rutas de la pantalla principal → tipo de actividad */
  var ROUTE_NAMES = {
    library: "Lectura", lecturas: "Lectura", resources: "Recurso", games: "Juego", flashcards: "Flashcards",
    wordsearch: "Sopa de letras", coloring: "Para colorear", holidays: "Festividades", learn: "Aprende",
    lectoescritura: "Lectoescritura", matematicas: "Matemáticas", familias: "Familias", shop: "Tienda", mova: "MOVA"
  };
  function gameSlug() {
    var m = location.pathname.match(/juego-([a-z0-9-]+)\.html$/);
    return m ? m[1] : null;
  }
  function screenInfo() {
    var slug = gameSlug();
    if (slug) return { a: slug, i: (document.title || "").split("·")[0].trim() || NAMES[slug] || slug };
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    var key = parts[0] || "";
    if (!ROUTE_NAMES[key]) return null;
    var h1 = document.querySelector("#main h1");
    var title = h1 ? h1.textContent.replace(/\s+/g, " ").trim() : "";
    if (!parts[1]) title = title ? "Explorando: " + title : "Explorando";
    return { a: "app-" + key, i: (ROUTE_NAMES[key] + (title ? " · " + title : "")).slice(0, 120) };
  }
  var cur = null;
  function beginScreen() {
    flushPending(); cur = null;
    if (!user) return;
    var s = screenInfo(); if (!s) return;
    cur = { a: s.a, i: s.i, u: user.username, start: Date.now(), end: Date.now() };
    set(K_PEND, cur);
  }
  function tick() {
    if (!cur) return;
    var p = get(K_PEND);
    if (p && p.start === cur.start) { p.end = Date.now(); set(K_PEND, p); }
  }
  function startTracking() {
    setInterval(function () { if (document.visibilityState === "visible") tick(); }, 10000);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") tick(); else beginScreen();
    });
    window.addEventListener("pagehide", tick);
    window.addEventListener("pageshow", function (e) { if (e.persisted) { flushQueue(); beginScreen(); } });
    if (!gameSlug()) window.addEventListener("hashchange", function () { tick(); setTimeout(beginScreen, 350); });
    setTimeout(beginScreen, 350);
  }

  /* Resultados que los juegos y la app ya guardan en el dispositivo */
  var K_APP = "mova-learning-studio:v1";
  function onAppStore(before, v) {
    var a = [], b = [];
    try { a = (JSON.parse(before || "{}") || {}).completed || []; } catch (e) {}
    try { b = (JSON.parse(v || "{}") || {}).completed || []; } catch (e) {}
    b.forEach(function (id) {
      if (a.indexOf(id) >= 0) return;
      var s = screenInfo(), ok = s && /^app-(library|lecturas)$/.test(s.a) && !/Explorando/.test(s.i);
      save(ok ? s.a : "app-library", ok ? s.i : "Lectura · " + id, null, null, { kind: "done", id: id });
    });
  }
  function watchResults() {
    var slug = gameSlug();
    var orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      var before = null;
      try { before = this.getItem(k); } catch (e) {}
      orig.apply(this, arguments);
      if (this !== window.localStorage || !user || v === before) return;
      try {
        if (!slug) { if (k === K_APP) onAppStore(before, v); return; }
        if (k === "mova-levelup") {
          var arr = JSON.parse(v), last = arr[arr.length - 1];
          if (last) save("level-up", "Resultado del examen: nivel " + last.l, last.r, last.t, { level: last.l, stage: last.s, folio: last.f });
        } else if (/^(mova-wq2-|mova-ss-|mova-mm-best-|mova-mochi-best|wf_sort_best)/.test(k)) {
          var n = Number(String(v).replace(/[^0-9.-]/g, ""));
          if (!isNaN(n)) save(slug, "Nuevo récord", n, null, { key: k });
        }
      } catch (e) {}
    };
  }

  function checkSession() {
    if (!user) return;
    rpc("student_me", { p_token: user.token }).then(function (r) {
      if (r && r.ok === false) { user = null; set(K_USER, null); renderChip(); }
    }).catch(function () {});
  }

  /* ---------- Interfaz (solo en la pantalla principal) ---------- */
  var css = "" +
    ".mva-chip{display:inline-flex;align-items:center;gap:7px;border:1.5px solid var(--line,#DAD4CA);background:var(--surface,#FFFDFA);color:var(--ink,#16181D);" +
    "border-radius:999px;padding:6px 12px 6px 7px;font:600 13px/1 var(--font-ui,Poppins,system-ui,sans-serif);cursor:pointer;white-space:nowrap}" +
    ".mva-chip .mva-dot{width:24px;height:24px;border-radius:50%;background:var(--navy,#1E3A5F);color:#fff;display:grid;place-items:center;font-size:11px;font-weight:700}" +
    ".mva-chip svg{width:14px;height:14px}" +
    ".mva-chip,.topbar .theme-btn,.topbar .saved-link{flex:none}" +
    "@media(max-width:520px){.mva-chip .mva-lbl{display:none}.mva-chip{padding:4px}.topbar .wrap{gap:8px}}" +
    "@media(max-width:400px){.topbar .logo i{display:none}.topbar .logo span{font-size:12px}}" +
    ".mva-back{position:fixed;inset:0;z-index:2147483640;background:rgba(15,22,45,.5);display:flex;align-items:center;justify-content:center;padding:20px}" +
    ".mva-card{position:relative;overflow:hidden;width:100%;max-width:380px;background:#fff;color:#16181D;border-radius:24px;padding:30px 24px 24px;" +
    "font-family:Poppins,'Century Gothic',system-ui,sans-serif;box-shadow:0 24px 60px rgba(10,16,40,.35);animation:mvaUp .22s ease-out}" +
    "@keyframes mvaUp{from{transform:translateY(16px);opacity:0}to{transform:none;opacity:1}}" +
    "@media (prefers-reduced-motion:reduce){.mva-card{animation:none}}" +
    ".mva-band{position:absolute;inset:0 0 auto;height:84px;background:#1E3A5F;overflow:hidden}" +
    ".mva-band i{position:absolute;border-radius:50%}" +
    ".mva-badge{position:relative;width:58px;height:58px;border-radius:18px;background:#fff;color:#1E3A5F;display:grid;place-items:center;font-weight:800;font-size:24px;" +
    "box-shadow:0 6px 0 #E8846B;margin:12px 0 18px}" +
    ".mva-badge.logo{width:64px;height:64px;padding:4px;box-sizing:border-box;box-shadow:0 6px 0 #E8846B,0 8px 18px rgba(10,16,40,.18)}" +
    ".mva-badge.logo img{display:block;width:100%;height:100%;border-radius:14px}" +
    ".mva-card h2{margin:0 0 4px;font-size:22px;font-weight:700;color:#1E3A5F}" +
    ".mva-card p{margin:0 0 18px;font-size:14px;color:#4A4D55;line-height:1.45}" +
    ".mva-card label{display:block;font-size:13px;font-weight:600;margin:12px 0 6px}" +
    ".mva-card input{width:100%;box-sizing:border-box;border:1.5px solid #DAD4CA;border-radius:12px;padding:12px 14px;font:inherit;font-size:16px;background:#fff;color:#16181D}" +
    ".mva-card input:focus{outline:none;border-color:#1E3A5F}" +
    ".mva-btn{width:100%;border:0;border-radius:12px;padding:13px;margin-top:20px;font:inherit;font-weight:600;font-size:15px;background:#1E3A5F;color:#fff;cursor:pointer}" +
    ".mva-btn.soft{background:#EEF1F7;color:#1E3A5F;margin-top:10px}" +
    ".mva-btn:disabled{opacity:.6}" +
    ".mva-err{color:#B03C2E;font-size:13.5px;margin-top:10px;min-height:1em}" +
    ".mva-x{position:absolute;top:12px;right:12px;width:34px;height:34px;border:0;border-radius:10px;background:rgba(255,255,255,.18);color:#fff;font-size:20px;cursor:pointer;z-index:2}" +
    ".mva-info{background:#F3EFE8;border-radius:14px;padding:12px 14px;font-size:14px;margin-top:4px}" +
    ".mva-info div{display:flex;justify-content:space-between;gap:10px;padding:3px 0}.mva-info span{color:#7A7D84}" +
    ".mva-legal{font-size:12.5px;color:#6B7591;text-align:center;margin:14px 0 0;line-height:1.4}.mva-legal a{color:#1E3A5F;font-weight:600}" +
    ".mva-priv{display:flex;justify-content:center;margin:34px 0 10px}" +
    ".mva-priv a{display:inline-flex;align-items:center;gap:8px;color:var(--muted,#6B7591);font:500 13px var(--font-ui,Poppins,system-ui,sans-serif);text-decoration:none;padding:8px 14px;border-radius:999px;border:1px solid var(--line,#DAD4CA)}" +
    ".mva-priv svg{width:15px;height:15px}" +
    ".mva-card.wide{max-width:440px;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px);overflow-y:auto;-webkit-overflow-scrolling:touch;padding-bottom:18px}" +
    ".mvp-top{position:relative;display:flex;align-items:flex-start;gap:14px;margin-bottom:18px}.mvp-top .mva-badge{margin:12px 0 0;flex:none}" +
    ".mvp-who{padding-top:64px;min-width:0}.mvp-who span{position:absolute;top:2px;left:72px;color:#fff;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;opacity:.9}" +
    ".mvp-who h2{margin:0;font-size:20px;line-height:1.2}.mvp-who em{display:inline-block;font-style:normal;font-size:12px;font-weight:600;background:#E2F1FB;color:#1E3A5F;border-radius:999px;padding:3px 10px;margin-top:5px}" +
    ".mvp-load,.mvp-empty{text-align:center;color:#6B7591;font-size:14px;margin:18px 0}" +
    ".mvp-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}" +
    ".mvp-tile{border-radius:18px;padding:14px;display:flex;flex-direction:column;gap:2px}" +
    ".mvp-ti{width:34px;height:34px;border-radius:11px;display:grid;place-items:center;color:#fff;margin-bottom:8px}" +
    ".mvp-tile b{font-size:28px;line-height:1;color:#1E3A5F;font-weight:800}.mvp-tile small{font-size:12.5px;color:#4A4D55;font-weight:500}" +
    ".mvp-level{margin-top:12px;border-radius:18px;padding:14px 16px;background:linear-gradient(135deg,#1E3A5F,#2E5482);color:#fff;display:flex;align-items:center;justify-content:space-between;gap:12px}" +
    ".mvp-lk{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:600;opacity:.95}.mvp-level b{display:block;text-align:right;font-size:26px;line-height:1;font-weight:800;color:#F6D776}" +
    ".mvp-level small{display:block;text-align:right;font-size:12px;opacity:.85;margin-top:3px}.mvp-level .mvp-cta{text-align:right;max-width:190px;line-height:1.35}" +
    ".mvp-h{display:flex;justify-content:space-between;align-items:baseline;margin:20px 0 10px;font-size:15px;color:#1E3A5F;font-weight:700}.mvp-h span{font-size:12.5px;color:#6B7591;font-weight:600}" +
    ".mvp-badges{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}" +
    ".mvp-b{background:#FBF8F3;border:1px solid #EFE9DF;border-radius:16px;padding:12px 6px 10px;text-align:center}" +
    ".mvp-bi{width:46px;height:46px;border-radius:50%;margin:0 auto 7px;display:grid;place-items:center;color:#fff;box-shadow:inset 0 -3px 0 rgba(0,0,0,.12)}" +
    ".mvp-b b{display:block;font-size:12px;color:#1E3A5F;line-height:1.2}.mvp-b small{display:block;font-size:10.5px;color:#7A7D84;line-height:1.25;margin-top:2px}" +
    ".mvp-b.off .mvp-bi{background:#E9E5DE;color:#A9A49B;box-shadow:none}.mvp-b.off b{color:#9A968F}" +
    ".mvp-list{background:#FBF8F3;border:1px solid #EFE9DF;border-radius:16px;padding:4px 14px}" +
    ".mvp-list div{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 0;font-size:13.5px;border-bottom:1px solid #EFE9DF}.mvp-list div:last-child{border:0}" +
    ".mvp-list span{display:flex;align-items:center;gap:8px;color:#16181D;min-width:0}.mvp-list span svg{flex:none;color:#E8846B}.mvp-list b{color:#1E3A5F}" +
    ".mva-toast{position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 14px);transform:translateX(-50%);z-index:2147483641;background:#1E3A5F;color:#fff;" +
    "padding:10px 16px;border-radius:12px;font:500 14px Poppins,system-ui,sans-serif;box-shadow:0 10px 24px rgba(0,0,0,.2)}";

  function injectCss() { var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function first(n) { return String(n || "").split(/\s+/)[0]; }
  function initials(n) { return String(n || "").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase(); }
  function toast(t) { var d = document.createElement("div"); d.className = "mva-toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2600); }

  var chip;
  function renderChip() {
    if (!chip) return;
    chip.innerHTML = user
      ? '<span class="mva-dot">' + esc(initials(user.name)) + '</span><span class="mva-lbl">' + esc(first(user.name)) + "</span>"
      : '<span class="mva-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg></span><span class="mva-lbl">Alumnos MOVA</span>';
    chip.setAttribute("aria-label", user ? "My Progress" : "Iniciar sesión de alumno MOVA");
  }
  function dots() {
    var pal = ["#F6D776", "#8EC9EE", "#9DDCC0", "#B9A6E8", "#E8846B", "#FFFFFF"], h = "";
    for (var i = 0; i < 12; i++) { var s = 7 + (i * 7) % 16; h += '<i style="width:' + s + "px;height:" + s + "px;left:" + ((i * 29) % 100) + "%;top:" + ((i * 41) % 90) + "%;background:" + pal[i % pal.length] + ';opacity:.6"></i>'; }
    return '<div class="mva-band" aria-hidden="true">' + h + "</div>";
  }
  function open(html, cls) {
    close();
    var b = document.createElement("div"); b.className = "mva-back"; b.id = "mva-modal";
    b.innerHTML = '<div class="mva-card' + (cls ? " " + cls : "") + '" role="dialog" aria-modal="true">' + dots() + '<button class="mva-x" aria-label="Cerrar">×</button>' + html + "</div>";
    b.addEventListener("click", function (e) { if (e.target === b) close(); });
    document.body.appendChild(b);
    b.querySelector(".mva-x").onclick = close;
    return b;
  }
  function close() { var m = document.getElementById("mva-modal"); if (m) m.remove(); }

  function showLogin() {
    var b = open('<div class="mva-badge logo"><img src="icon-192.png" alt="MOVA"></div><h2>Hola, alumno MOVA</h2>' +
      "<p>Entra con el usuario y la contraseña que te dio tu maestra para guardar tu avance.</p>" +
      '<form id="mva-form" autocomplete="on"><label for="mva-u">Usuario</label>' +
      '<input id="mva-u" autocapitalize="none" autocorrect="off" spellcheck="false" autocomplete="username" placeholder="ejemplo: luciae.m">' +
      '<label for="mva-p">Contraseña</label><input id="mva-p" type="password" autocomplete="current-password">' +
      '<button class="mva-btn" type="submit" id="mva-go">Entrar</button><div class="mva-err" id="mva-err"></div></form>' +
      '<p class="mva-legal">Al entrar, aceptas el <a href="aviso-privacidad.html">aviso de privacidad</a>.</p>');
    b.querySelector("#mva-u").focus();
    b.querySelector("#mva-form").onsubmit = function (e) {
      e.preventDefault();
      var u = b.querySelector("#mva-u").value.trim().toLowerCase(), p = b.querySelector("#mva-p").value, err = b.querySelector("#mva-err"), go = b.querySelector("#mva-go");
      err.textContent = "";
      if (!u || !p) { err.textContent = "Escribe tu usuario y tu contraseña."; return; }
      go.disabled = true; go.textContent = "Entrando…";
      rpc("student_login", { p_username: u, p_password: p }).then(function (r) {
        if (r && r.ok) {
          user = { token: r.token, name: r.name, stage: r.stage, username: r.username };
          set(K_USER, user); renderChip(); close(); toast("¡Bienvenido, " + first(user.name) + "!"); flushQueue(); beginScreen(); taskShown = false; setTimeout(checkTasks, 1200);
        } else {
          var e2 = r && r.error;
          err.textContent = e2 === "locked" ? "Demasiados intentos. Espera 15 minutos e inténtalo de nuevo."
            : e2 === "inactive" ? "Tu cuenta está pausada. Pregunta a tu maestra."
            : "Usuario o contraseña incorrectos.";
        }
      }).catch(function () { err.textContent = "Sin conexión. Revisa tu internet e inténtalo de nuevo."; })
        .then(function () { go.disabled = false; go.textContent = "Entrar"; });
    };
  }
  /* ---------- My Progress ---------- */
  var K_PROG = "mova_progress_cache";
  var IC = {
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16M9 8h7M9 11.5h5"/>',
    flame: '<path d="M12 3c1 3.2 5 5.2 5 10a5 5 0 0 1-10 0c0-2.2 1-3.8 2.2-4.8.1 2 1 3.1 2.3 3.3-.3-3.1-.6-5.6.5-8.5z"/>',
    game: '<rect x="2.5" y="7" width="19" height="11" rx="5.5"/><path d="M7.5 10.3v4.4M5.3 12.5h4.4"/><circle cx="15.3" cy="11.3" r="1.1" fill="currentColor"/><circle cx="17.8" cy="13.8" r="1.1" fill="currentColor"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.3 2"/>',
    trophy: '<path d="M8 4h8v5.5a4 4 0 0 1-8 0z"/><path d="M8 6.2H5.2a3 3 0 0 0 3 4.3M16 6.2h2.8a3 3 0 0 1-3 4.3M12 13.5V17M8.5 20.5h7M9.5 17h5v3.5h-5z"/>',
    bars: '<path d="M5 20v-6M10 20V10M15 20V7M20 20V4"/>',
    leaf: '<path d="M12 21v-8.5"/><path d="M12 12.5c0-4.2 3-7.5 7.5-7.5 0 4.3-3.1 7.5-7.5 7.5zM12 15c0-3.3-2.3-5.6-6.5-5.6 0 3.3 2.3 5.6 6.5 5.6z"/>',
    star: '<path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>'
  };
  function ico(n, sz) { return '<svg viewBox="0 0 24 24" width="' + (sz || 20) + '" height="' + (sz || 20) + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + "</svg>"; }
  function dayKey(d) { var x = new Date(d); return x.getFullYear() + "-" + ("0" + (x.getMonth() + 1)).slice(-2) + "-" + ("0" + x.getDate()).slice(-2); }
  function prettySlug(a) { return NAMES[a] || String(a).replace(/-/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); }); }

  function computeProgress(rows) {
    rows = rows || [];
    var reads = {}, days = {}, games = {}, gameNames = {}, plays = 0, secsWeek = 0, secsAll = 0, records = {}, lvl = null;
    var weekAgo = Date.now() - 7 * 864e5;
    rows.forEach(function (r) {
      var d = r.detail || {}, secs = d.kind === "time" ? (d.seconds || 0) : 0, t = new Date(r.created_at).getTime();
      days[dayKey(r.created_at)] = 1;
      secsAll += secs; if (t >= weekAgo) secsWeek += secs;
      if ((r.activity === "app-library" || r.activity === "app-lecturas") && r.item && !/Explorando/.test(r.item)) {
        var k = r.item, e = reads[k] || (reads[k] = { s: 0, done: false, t: 0 });
        e.s += secs; if (d.kind === "done") e.done = true; if (t > e.t) e.t = t;
      } else if (r.activity === "level-up" && d.level && !lvl) {
        lvl = { level: d.level, score: r.score, total: r.total, at: r.created_at };
      } else if (!/^app-/.test(r.activity)) {
        if (secs) { games[r.activity] = 1; plays++; if (r.item && r.item !== "Nuevo récord") gameNames[r.activity] = r.item; }
        if (r.item === "Nuevo récord" && r.score != null) records[r.activity] = Math.max(records[r.activity] || 0, r.score);
      }
    });
    var readList = Object.keys(reads).filter(function (k) { return reads[k].done || reads[k].s >= 60; })
      .sort(function (x, y) { return reads[y].t - reads[x].t; });
    var dayList = Object.keys(days).sort(), streak = 0, best = 0, run = 0, prev = null;
    dayList.forEach(function (k) {
      var t = new Date(k + "T12:00:00").getTime();
      run = prev !== null && Math.round((t - prev) / 864e5) === 1 ? run + 1 : 1;
      best = Math.max(best, run); prev = t;
    });
    var c = new Date(); c.setHours(12, 0, 0, 0);
    if (!days[dayKey(c)]) c.setDate(c.getDate() - 1);
    while (days[dayKey(c)]) { streak++; c.setDate(c.getDate() - 1); }
    var recList = Object.keys(records).map(function (a) { return { name: gameNames[a] || prettySlug(a), best: records[a] }; })
      .sort(function (x, y) { return y.best - x.best; });
    var p = { readings: readList.length, readList: readList.slice(0, 3).map(function (k) { return k.replace(/^Lectura\s*·\s*/, ""); }),
      streak: streak, bestStreak: best, games: Object.keys(games).length, plays: plays,
      minWeek: Math.round(secsWeek / 60), minAll: Math.round(secsAll / 60), records: recList, level: lvl, any: rows.length > 0, days: dayList.length };
    p.badges = [
      ["leaf", "First Step", "Do your first activity", p.any, "#9DDCC0"],
      ["book", "First Story", "Read 1 story", p.readings >= 1, "#8EC9EE"],
      ["book", "Bookworm", "Read 5 stories", p.readings >= 5, "#E8846B"],
      ["star", "Super Reader", "Read 15 stories", p.readings >= 15, "#B9A6E8"],
      ["flame", "On Fire", "3 days in a row", p.bestStreak >= 3, "#E8846B"],
      ["flame", "Unstoppable", "7 days in a row", p.bestStreak >= 7, "#F6D776"],
      ["game", "Game Explorer", "Play 5 different games", p.games >= 5, "#B9A6E8"],
      ["trophy", "Record Breaker", "Set a new record", recList.length > 0, "#F6D776"],
      ["bars", "Level Up", "Finish the Level Up test", !!lvl, "#9DDCC0"],
      ["clock", "Hour of Practice", "Practice 60 minutes", p.minAll >= 60, "#8EC9EE"],
      ["star", "Busy Week", "Practice on 5 different days", p.days >= 5, "#E8846B"],
      ["trophy", "MOVA Star", "Practice 5 hours", p.minAll >= 300, "#B9A6E8"]
    ];
    p.earned = p.badges.filter(function (x) { return x[3]; }).length;
    return p;
  }

  function progressHtml(p, pageMode) {
    function tile(icon, num, label, bg, fg) {
      return '<div class="mvp-tile" style="background:' + bg + '"><span class="mvp-ti" style="background:' + fg + '">' + ico(icon, 18) + "</span><b>" + num + "</b><small>" + label + "</small></div>";
    }
    var h = pageMode ? "" : '<div class="mvp-grid">' +
      tile("book", p.readings, p.readings === 1 ? "story read" : "stories read", "#E2F1FB", "#8EC9EE") +
      tile("flame", p.streak, p.streak === 1 ? "day streak" : "day streak", "#FBE3DC", "#E8846B") +
      tile("game", p.games, p.games === 1 ? "game played" : "games played", "#EEE8FA", "#B9A6E8") +
      tile("clock", p.minWeek, "minutes this week", "#FDF4D6", "#E9C24F") + "</div>";
    if (!pageMode || !p.level) h += '<div class="mvp-level">' + (p.level
      ? '<span class="mvp-lk">' + ico("bars", 18) + " Level Up</span><div><b>" + esc(p.level.level) + "</b><small>" +
        (p.level.total ? esc(p.level.score) + " / " + esc(p.level.total) + " correct" : "Your English level") + "</small></div>"
      : '<span class="mvp-lk">' + ico("bars", 18) + " Level Up</span><div><small class=\"mvp-cta\">Take the Level Up test to discover your English level.</small></div>") + "</div>";
    h += '<h3 class="mvp-h">Badges <span>' + p.earned + " of " + p.badges.length + "</span></h3><div class=\"mvp-badges\">" +
      p.badges.map(function (b) {
        return '<div class="mvp-b' + (b[3] ? "" : " off") + '"><span class="mvp-bi" style="' + (b[3] ? "background:" + b[4] : "") + '">' + ico(b[3] ? b[0] : "lock", 22) +
          "</span><b>" + esc(b[1]) + "</b><small>" + esc(b[2]) + "</small></div>";
      }).join("") + "</div>";
    if (p.records.length) {
      h += '<h3 class="mvp-h">My records</h3><div class="mvp-list">' + p.records.slice(0, 6).map(function (r) {
        return '<div><span>' + ico("trophy", 16) + esc(r.name) + "</span><b>" + esc(r.best) + "</b></div>";
      }).join("") + "</div>";
    }
    if (p.readList.length) {
      h += '<h3 class="mvp-h">Latest stories</h3><div class="mvp-list">' + p.readList.map(function (t) {
        return '<div><span>' + ico("book", 16) + esc(t) + "</span></div>";
      }).join("") + "</div>";
    }
    if (!p.any) h += '<p class="mvp-empty">Your progress starts today. Read a story or play a game, and it will appear here.</p>';
    return h;
  }

  var BLOOM = '<svg class="mvp-bloom" viewBox="0 0 220 220" aria-hidden="true"><path d="M98 138 C96 156.0 90 166.0 92 178" stroke="#1A1B2E" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="89" cy="180" rx="6.2" ry="4" fill="#1A1B2E"/><path d="M122 138 C124 156.0 128 166.0 127 178" stroke="#1A1B2E" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="130" cy="180" rx="6.2" ry="4" fill="#1A1B2E"/><path d="M80 98 C62 104 50 92 48 74" stroke="#1A1B2E" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="48" cy="74" r="3.6" fill="#1A1B2E"/><path d="M142 100 C152 104 160 102 168 96" stroke="#1A1B2E" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="168" cy="96" r="3.6" fill="#1A1B2E"/><circle cx="86" cy="68" r="30" fill="#9C8BFF"/><circle cx="134" cy="68" r="30" fill="#9C8BFF"/><circle cx="86" cy="116" r="30" fill="#9C8BFF"/><circle cx="134" cy="116" r="30" fill="#9C8BFF"/><circle cx="110" cy="92" r="26" fill="#9C8BFF"/><circle cx="80" cy="62" r="7" fill="#fff" opacity=".28"/><path d="M94 106 Q110 122 126 106" stroke="#1A1B2E" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="84" cy="100" rx="5" ry="3" fill="#FF8FC0" opacity=".55"/><ellipse cx="136" cy="100" rx="5" ry="3" fill="#FF8FC0" opacity=".55"/><ellipse cx="97" cy="88" rx="4.2" ry="5.2" fill="#1A1B2E"/><ellipse cx="123" cy="88" rx="4.2" ry="5.2" fill="#1A1B2E"/><circle cx="98.4" cy="86.2" r="1.4" fill="#fff"/><circle cx="124.4" cy="86.2" r="1.4" fill="#fff"/></svg>';
  var BLOOM_LT = '<svg viewBox="0 0 220 220" aria-hidden="true"><path d="M98 138 C96 156.0 90 166.0 92 178" stroke="#E6E2FF" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="89" cy="180" rx="6.2" ry="4" fill="#E6E2FF"/><path d="M122 138 C124 156.0 128 166.0 127 178" stroke="#E6E2FF" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="130" cy="180" rx="6.2" ry="4" fill="#E6E2FF"/><path d="M80 98 C62 104 50 92 48 74" stroke="#E6E2FF" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="48" cy="74" r="3.6" fill="#E6E2FF"/><path d="M142 100 C152 104 160 102 168 96" stroke="#E6E2FF" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="168" cy="96" r="3.6" fill="#E6E2FF"/><circle cx="86" cy="68" r="30" fill="#9C8BFF"/><circle cx="134" cy="68" r="30" fill="#9C8BFF"/><circle cx="86" cy="116" r="30" fill="#9C8BFF"/><circle cx="134" cy="116" r="30" fill="#9C8BFF"/><circle cx="110" cy="92" r="26" fill="#9C8BFF"/><circle cx="80" cy="62" r="7" fill="#fff" opacity=".28"/><path d="M93 90 q5 5 10 0" stroke="#1A1B2E" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M117 90 q5 5 10 0" stroke="#1A1B2E" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M93 104 Q110 122 127 104" stroke="#1A1B2E" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="84" cy="100" rx="5" ry="3" fill="#FF8FC0" opacity=".55"/><ellipse cx="136" cy="100" rx="5" ry="3" fill="#FF8FC0" opacity=".55"/></svg>';
  var PAGE_CSS = "#mvp-page{position:fixed;inset:0;z-index:2147483600;background:#F5F3FA;overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#15192B;padding:env(safe-area-inset-top,0px) 0 calc(28px + env(safe-area-inset-bottom,0px));animation:mvpIn .28s ease}" +
    "@keyframes mvpIn{from{opacity:0;transform:translateY(14px)}}" +
    "#mvp-page .in{max-width:520px;margin:0 auto;padding:0 16px}" +
    "#mvp-page .bk{display:flex;align-items:center;gap:10px;padding:18px 2px 10px}" +
    "#mvp-page .back{width:42px;height:42px;border-radius:50%;background:#fff;border:1.6px solid #15192B;display:grid;place-items:center;flex:none;cursor:pointer;color:#15192B;padding:0}" +
    "#mvp-page .back svg{width:18px;height:18px}" +
    "#mvp-page .tt small{display:block;font-size:11px;color:#6A6F85;font-weight:600}" +
    "#mvp-page .tt b{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;letter-spacing:-.5px;line-height:1}" +
    "#mvp-page .prof{background:#15192B;color:#fff;border-radius:28px;padding:18px;position:relative;overflow:hidden}" +
    "#mvp-page .prof .row{display:flex;align-items:center;gap:10px}#mvp-page .prof .row>div{flex:1;min-width:0}" +
    "#mvp-page .prof .big{width:58px;height:58px;border-radius:50%;background:#7B5CF0;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:20px;letter-spacing:.5px;border:3px solid #D3F36B;flex:none;box-sizing:border-box}" +
    "#mvp-page .prof .row b{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px;letter-spacing:-.4px;display:block;line-height:1.1}" +
    "#mvp-page .prof small{font-size:12px;color:#B8BCD0;font-weight:600}" +
    "#mvp-page .prof .bl{width:92px;flex:none;margin:-14px -10px -14px -18px}#mvp-page .prof .bl svg{width:100%;height:auto;display:block}" +
    "#mvp-page .prof .st{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:16px}" +
    "#mvp-page .prof .st div{background:rgba(255,255,255,.07);border-radius:16px;padding:10px;text-align:center}" +
    "#mvp-page .prof .st b{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;color:#D3F36B;display:block}#mvp-page .prof .st span{font-size:10.5px;color:#B8BCD0;font-weight:700;letter-spacing:.04em}" +
    "#mvp-page .sk{background:#fff;border-radius:24px;padding:14px 16px;margin-top:10px}" +
    "#mvp-page h4{margin:0 0 10px;font-family:'Bricolage Grotesque',sans-serif;font-size:17px;display:flex;justify-content:space-between;align-items:baseline}#mvp-page h4 span{font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;color:#6A6F85;font-weight:700}" +
    "#mvp-page .sk .r{display:grid;grid-template-columns:96px 1fr 50px;align-items:center;gap:8px;font-size:12.5px;font-weight:700;margin:9px 0}" +
    "#mvp-page .sk .r span:last-child{text-align:right;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:14px}" +
    "#mvp-page .sk .bar{height:9px;border-radius:9px;background:#EEECF4;overflow:hidden}#mvp-page .sk .bar i{display:block;height:100%;border-radius:9px}" +
    "#mvp-page .sk .none{margin:2px 0 4px;font-size:13px;color:#6A6F85;line-height:1.5}" +
    "#mvp-page .bdg{display:flex;gap:8px;margin-top:10px}#mvp-page .bdg span{flex:1;background:#fff;border-radius:18px;padding:10px 6px;text-align:center;font-size:10.5px;font-weight:700;line-height:1.3}" +
    "#mvp-page .bdg span i{display:grid;place-items:center;width:40px;height:40px;border-radius:50%;margin:0 auto 6px;font-style:normal;font-weight:800;font-size:13px}#mvp-page .bdg svg{width:20px;height:20px}" +
    "#mvp-page .bdg .off{opacity:.55}" +
    "#mvp-page .more{margin-top:14px}#mvp-page .more .mvp-h{margin:18px 2px 10px}" +
    "#mvp-page .acts{display:flex;flex-direction:column;gap:10px;margin-top:20px}" +
    "#mvp-page .acts button{border:0;border-radius:999px;padding:14px;font:800 15px 'Plus Jakarta Sans',sans-serif;cursor:pointer}" +
    "#mvp-page .acts .p{background:#15192B;color:#fff;box-shadow:0 4px 0 #D3F36B}#mvp-page .acts .s{background:#fff;color:#15192B}" +
    "#mvp-page .usr{text-align:center;font-size:12px;color:#8A8EA5;margin-top:12px}";
  var AREAS = [["Reading", "#9C8BFF"], ["Games", "#FF9FCB"], ["Exams", "#FFD54A"], ["Math & Spanish", "#5CC9B5"]];
  var MATH = /^(mision-matematica|la-tiendita|la-balanza|la-boveda|lluvia-de-numeros|detective-patrones|pizzeria-fracciones|que-hora-es|lee-con-mochi)$/;
  function monthAreas(rows) {
    var now = new Date(), m = {}, n = {};
    (rows || []).forEach(function (r) {
      var t = new Date(r.created_at); if (t.getFullYear() !== now.getFullYear() || t.getMonth() !== now.getMonth()) return;
      var a = r.activity || "", d = r.detail || {}, k = null;
      if (/^app-(library|lecturas)$/.test(a)) { if (!r.item || /Explorando/.test(r.item)) return; k = "Reading"; }
      else if (/^(level-up|toefl-practice|word-forms)$/.test(a)) k = "Exams";
      else if (MATH.test(a)) k = "Math & Spanish";
      else if (!/^app-/.test(a)) k = "Games";
      if (!k) return;
      m[k] = (m[k] || 0) + (d.kind === "time" ? (d.seconds || 0) : 0); n[k] = (n[k] || 0) + 1;
    });
    var max = Math.max.apply(null, [60].concat(AREAS.map(function (x) { return m[x[0]] || 0; })));
    var any = AREAS.some(function (x) { return n[x[0]]; });
    if (!any) return '<p class="none">Nothing yet this month. Read a story or play a game and your progress will appear here.</p>';
    return AREAS.map(function (x) {
      var s = m[x[0]] || 0, mins = Math.round(s / 60);
      return '<div class="r"><span>' + x[0] + '</span><span class="bar"><i style="width:' + (s ? Math.max(6, Math.round(s / max * 100)) : (n[x[0]] ? 6 : 0)) + "%;background:" + x[1] + '"></i></span><span>' + (mins ? mins + " min" : (n[x[0]] ? "<1 min" : "—")) + "</span></div>";
    }).join("");
  }
  function pageBody(p, rows) {
    var acts = p.readings + p.plays;
    var earned = p.badges.filter(function (b) { return b[3] && !(p.level && b[1] === "Level Up"); }).slice(-3).reverse();
    var chips = earned.map(function (b) { return '<span><i style="background:' + b[4] + '">' + ico(b[0], 20) + "</i>" + esc(b[1]) + "</span>"; });
    if (p.level) chips.unshift('<span><i style="background:#E3DBFF">' + esc(p.level.level) + "</i>Level Up</span>");
    chips = chips.slice(0, 3);
    while (chips.length < 3) { var nx = p.badges.filter(function (b) { return !b[3]; })[chips.length - earned.length] || p.badges[chips.length]; chips.push('<span class="off"><i style="background:#ECE9F3">' + ico("lock", 18) + "</i>" + esc(nx[1]) + "</span>"); }
    var full = progressHtml(p, true);
    return { stats: '<div><b>' + p.streak + "</b><span>DAY STREAK</span></div><div><b>" + acts + "</b><span>ACTIVITIES</span></div><div><b>" + p.earned + "</b><span>BADGES</span></div>",
      month: monthAreas(rows), chips: chips.join(""), more: full };
  }
  function closePage() { var pg = document.getElementById("mvp-page"); if (pg) { pg.remove(); document.documentElement.style.overflow = ""; } }
  function showAccount() {
    close(); closePage();
    if (!document.getElementById("mvp-page-css")) { var st = document.createElement("style"); st.id = "mvp-page-css"; st.textContent = PAGE_CSS; document.head.appendChild(st); }
    var pg = document.createElement("div"); pg.id = "mvp-page"; pg.setAttribute("role", "dialog"); pg.setAttribute("aria-label", "My Progress");
    pg.innerHTML = '<div class="in"><div class="bk"><button class="back" type="button" aria-label="Back to Home"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button><div class="tt"><small>Home</small><b>My Progress</b></div></div>' +
      '<div class="prof"><div class="row"><span class="big">' + esc(initials(user.name)) + '</span><div><b>' + esc(user.name) + "</b><small>" + esc(user.stage || "MOVA Student") + '</small></div><span class="bl">' + BLOOM_LT + '</span></div><div class="st" id="mvp-st"><div><b>–</b><span>DAY STREAK</span></div><div><b>–</b><span>ACTIVITIES</span></div><div><b>–</b><span>BADGES</span></div></div></div>' +
      '<div class="sk"><h4>This month <span>' + new Date().toLocaleDateString("en-US", { month: "long" }) + '</span></h4><div id="mvp-month"><p class="none">Loading your progress…</p></div></div>' +
      '<div class="bdg" id="mvp-chips"></div><div class="more" id="mvp-body"></div>' +
      '<div class="acts"><button class="p" type="button" id="mvp-ok">Keep practicing</button><button class="s" type="button" id="mvp-out">Log out</button></div>' +
      '<p class="usr">User: ' + esc(user.username) + "</p></div>";
    document.body.appendChild(pg); document.documentElement.style.overflow = "hidden";
    function paint(rows) {
      var d = pageBody(computeProgress(rows), rows);
      pg.querySelector("#mvp-st").innerHTML = d.stats; pg.querySelector("#mvp-month").innerHTML = d.month;
      pg.querySelector("#mvp-chips").innerHTML = d.chips; pg.querySelector("#mvp-body").innerHTML = d.more;
    }
    var cache = get(K_PROG);
    if (cache && cache.u === user.username) paint(cache.rows);
    tick(); flushPending(); setTimeout(beginScreen, 50);
    var tok = user.token, uname = user.username;
    setTimeout(function () {
      rpc("student_my_progress", { p_token: tok }).then(function (rows) {
        if (!Array.isArray(rows)) throw 0;
        set(K_PROG, { u: uname, rows: rows.slice(0, 1500) });
        if (document.body.contains(pg)) paint(rows);
      }).catch(function () {
        if (!cache || cache.u !== uname) pg.querySelector("#mvp-month").innerHTML = '<p class="none">We could not load your progress right now. Check your internet and try again.</p>';
      });
    }, 400);
    pg.querySelector(".back").onclick = closePage;
    pg.querySelector("#mvp-ok").onclick = closePage;
    pg.querySelector("#mvp-out").onclick = function () {
      var tok2 = user.token;
      tick(); flushPending(); cur = null;
      setTimeout(function () { rpc("student_logout", { p_token: tok2 }).catch(function () {}); }, 2500);
      user = null; set(K_USER, null); set(K_PEND, null); set(K_PROG, null); renderChip(); closePage(); toast("Sesión cerrada");
    };
  }

  function mountChip() {
    var wrap = document.querySelector(".topbar .wrap"); if (!wrap) return;
    chip = document.createElement("button"); chip.type = "button"; chip.className = "mva-chip";
    var anchor = document.getElementById("theme-btn");
    anchor ? wrap.insertBefore(chip, anchor) : wrap.appendChild(chip);
    chip.onclick = function () { user ? showAccount() : showLogin(); };
    renderChip();
  }

  function privacyLink() {
    if (gameSlug() || !/^#\/?mova\/?$/.test(location.hash)) return;
    var main = document.getElementById("main"); if (!main || main.querySelector(".mva-priv")) return;
    var d = document.createElement("div"); d.className = "mva-priv wrap";
    d.innerHTML = '<a href="aviso-privacidad.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="10" width="14" height="10" rx="2.5"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/></svg>Aviso de privacidad</a>';
    main.appendChild(d);
  }


  /* ---------- Visitas anónimas (sin datos personales) ---------- */
  function logVisit() {
    try {
      if (sessionStorage.getItem("mova_visit")) return;
      sessionStorage.setItem("mova_visit", "1");
      var id = localStorage.getItem("mova_device");
      if (!id) { id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : (Date.now().toString(36) + Math.random().toString(36).slice(2, 12)); localStorage.setItem("mova_device", id); }
      var ua = navigator.userAgent || "", plat = /android/i.test(ua) ? "android" : (/iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) ? "iphone" : /windows|macintosh|linux|cros/i.test(ua) ? "computadora" : "otro";
      var inst = !!((window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone);
      rpc("log_visit", { p_device: id, p_installed: inst, p_platform: plat, p_student: !!user }).catch(function () {});
    } catch (e) {}
  }


  /* ---------- Retos multijugador (Fase 1) ---------- */
  var RETO_GAMES = ["verb-memory", "word-quest", "sentence-scramble", "mision-matematica", "sopa-de-letras", "que-hora-es", "word-forms", "toefl-practice"];
  var USERS_IC = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 14c2.7.2 4.6 2.2 5 5"/></svg>';
  var retoCss = ".mva-mode{display:grid;grid-template-columns:1fr 1fr;gap:6px;background:var(--track,#EEF1F8);border-radius:999px;padding:5px;margin:14px auto 4px;max-width:420px;font-family:Poppins,'Century Gothic',system-ui,sans-serif}" +
    ".mva-mode>*{display:flex;align-items:center;justify-content:center;gap:6px;border-radius:999px;padding:9px 8px;font-weight:700;font-size:13.5px;text-decoration:none;line-height:1.15;text-align:center}" +
    ".mva-mode .on{background:var(--ink,#1B2A55);color:var(--card,#fff)}" +
    ".mva-mode a{color:var(--ink,#1B2A55)}.mva-mode a:hover{background:rgba(255,255,255,.6)}" +
    ".mva-retos{display:flex;align-items:center;gap:14px;background:#1B2A55;color:#fff;border-radius:22px;padding:16px 18px;text-decoration:none;position:relative;overflow:hidden;margin-top:6px;" +
    "background-image:radial-gradient(circle,#FF8FB1 5px,transparent 6px),radial-gradient(circle,#FCE38A 5px,transparent 6px),radial-gradient(circle,#4FD1A5 5px,transparent 6px);background-size:120px 120px;background-position:90% 10px,70% 80px,98% 60px}" +
    ".mva-retos .ic{width:50px;height:50px;border-radius:16px;background:#FCE38A;color:#1B2A55;display:grid;place-items:center;flex:none}" +
    ".mva-retos .ic svg{width:26px;height:26px}" +
    ".mva-retos b{display:block;font-size:18px;font-weight:700}.mva-retos span{display:block;font-size:13.5px;opacity:.85;margin-top:2px}" +
    ".mva-retos em{margin-left:auto;font-style:normal;background:#fff;color:#1B2A55;border-radius:999px;padding:8px 14px;font-weight:700;font-size:13px;white-space:nowrap}" +
    "@media(max-width:520px){.mva-retos em{display:none}}";
  function retoToggle() {
    var slug = gameSlug(); if (RETO_GAMES.indexOf(slug) < 0) return;
    var usedH1 = false;
    var anchor = function () {
      var mh = document.querySelector(".mv-hero"); if (mh) return mh;
      var st = document.getElementById("s-start"); if (st) return st.querySelector(".lead");
      var vh = document.getElementById("v-home"); if (vh) return vh.querySelector(".lead") || vh.querySelector(".hero");
      var l = document.querySelector(".cover + .lead"); if (l) return l;
      if (usedH1) return null;
      var h = document.querySelector("h1"); if (!h) return null;
      usedH1 = true; var n = h.nextElementSibling; return n && n.tagName === "P" ? n : h;
    };
    var place = function () {
      var a = anchor(); if (!a || !a.parentNode) return;
      var sib = a.nextElementSibling; if (sib && sib.classList.contains("mva-mode")) return;
      var d = document.createElement("div"); d.className = "mva-mode";
      d.innerHTML = '<span class="on">Práctica individual</span><a href="juego-retos.html?juego=' + slug + '">' + USERS_IC + "Reto multijugador</a>";
      a.parentNode.insertBefore(d, a.nextSibling);
    };
    place(); setInterval(place, 1200);
  }
  function retoBanner() {
    if (!/^#\/games\/?$/.test(location.hash)) return;
    var main = document.getElementById("main"); if (!main || main.querySelector(".mva-retos")) return;
    var head = main.querySelector(".page-head"); if (!head) return;
    var w = document.createElement("section"); w.className = "wrap";
    w.innerHTML = '<a class="mva-retos" href="juego-retos.html"><span class="ic">' + USERS_IC + '</span><span><b>Game On</b><span>Play live against your classmates from your phone</span></span><em>Jugar</em></a>';
    head.parentNode.insertBefore(w, head.nextSibling);
  }


  /* ---------- Tareas asignadas por la maestra ---------- */
  var taskShown = false;
  function taskUrl(t) {
    var q = "?task=" + encodeURIComponent(t.id);
    if (t.task === "toefl-sim") return "juego-toefl-practice.html" + q + "#sim";
    if (t.task === "lectura") return "index.html" + q + "#/library";
    return "juego-" + t.task + ".html" + q;
  }
  function taskRowMatch(t, r) {
    if (r.detail && r.detail.task != null && String(r.detail.task) === String(t.id)) return true;
    if (r.created_at && new Date(r.created_at).getTime() < new Date(t.created_at).getTime()) return false;
    if (t.task === "toefl-sim") return !!(r.detail && r.detail.kind === "toefl-sim");
    if (t.task === "lectura") return /^app-(library|lecturas)$/.test(r.activity) && r.item && !/Explorando/.test(r.item);
    if (r.activity !== t.task) return false;
    var d = r.detail || {};
    return r.total != null || (d.kind === "time" && (d.seconds || 0) >= 60) || (!!d.kind && d.kind !== "time");
  }
  function checkTasks() {
    if (!user || gameSlug() || taskShown) return;
    var me = user.username;
    rpc("student_tasks", { p_username: me }).then(function (tasks) {
      if (!Array.isArray(tasks) || !tasks.length || !user || user.username !== me) return;
      return rpc("student_my_progress", { p_token: user.token }).catch(function () { return []; }).then(function (rows) {
        rows = Array.isArray(rows) ? rows : [];
        var pend = tasks.filter(function (t) {
          if (get("mova-task-done-" + t.id)) return false;
          return !rows.some(function (r) { return taskRowMatch(t, r); });
        });
        if (pend.length) showTask(pend);
      });
    }).catch(function () {});
  }
  var TASK_SUB = { "toefl-sim": "4 parts · 25 questions · 18 minutes. Find a quiet place and use headphones for the Listening part.",
    "level-up": "A placement test to see your English level. Take your time.", lectura: "Choose a story in the Reading Library and finish it." };
  function showTask(list) {
    var t = list[0];
    if (taskShown || document.getElementById("mva-task")) return; taskShown = true;
    var st = document.createElement("style");
    st.textContent = "#mva-task{position:fixed;left:50%;bottom:calc(86px + env(safe-area-inset-bottom));transform:translateX(-50%);width:min(440px,calc(100% - 28px));z-index:2147483630;" +
      "background:#15192B;color:#fff;border-radius:24px;padding:18px 18px 16px;box-shadow:0 18px 40px rgba(21,25,43,.35);font-family:'Plus Jakarta Sans',Poppins,system-ui,sans-serif;animation:mvtk .4s ease}" +
      "@keyframes mvtk{from{opacity:0;transform:translate(-50%,16px)}}" +
      "#mva-task .k{display:inline-block;background:#FF8FC8;color:#15192B;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;border-radius:999px;padding:4px 10px}" +
      "#mva-task b{display:block;font-family:'Bricolage Grotesque',Poppins,sans-serif;font-size:21px;line-height:1.1;margin:10px 0 4px}" +
      "#mva-task p{margin:0;font-size:14px;line-height:1.5;color:#C9CCE0}" +
      "#mva-task .r{display:flex;gap:10px;margin-top:14px;align-items:center}" +
      "#mva-task a{background:#D3F36B;color:#15192B;font-weight:800;font-size:15px;border-radius:999px;padding:11px 20px;text-decoration:none}" +
      "#mva-task button{background:none;border:0;color:#C9CCE0;font:600 14px inherit;padding:10px;cursor:pointer}" +
      "#mva-task .m{margin-left:auto;font-size:12px;font-weight:700;color:#B9A6FF}";
    document.head.appendChild(st);
    var d = document.createElement("div"); d.id = "mva-task";
    d.innerHTML = '<span class="k">Assigned by your teacher</span><b>' + String(t.title || "Activity").replace(/[<>&]/g, "") + "</b>" +
      "<p>" + (TASK_SUB[t.task] || "Your teacher assigned you this activity. Complete it when you can.") + "</p>" +
      '<div class="r"><a href="' + taskUrl(t) + '">Start now</a><button type="button">Later</button>' +
      (list.length > 1 ? '<span class="m">+' + (list.length - 1) + " more</span>" : "") + "</div>";
    d.querySelector("button").onclick = function () { d.remove(); };
    document.body.appendChild(d);
  }
  /* Marca la tarea como hecha en este dispositivo cuando la alumna la trabaja */
  function taskContext() {
    var id = new URLSearchParams(location.search).get("task");
    if (!id) return;
    var mark = function () { set("mova-task-done-" + id, 1); };
    if (gameSlug()) setTimeout(mark, 60000);
    window.__movaTaskId = id; window.__movaTaskMark = mark;
  }
  /* ---------- Arranque ---------- */
  window.MovaAuth = { save: save, user: function () { return user; }, login: showLogin };
  function boot() {
    injectCss();
    var rs = document.createElement("style"); rs.textContent = retoCss; document.head.appendChild(rs);
    retoToggle();
    taskContext();
    flushQueue(); checkSession();
    watchResults();
    startTracking();
    if (!gameSlug()) {
      logVisit();
      mountChip();
      window.addEventListener("hashchange", function () { setTimeout(privacyLink, 400); setTimeout(retoBanner, 120); setTimeout(retoBanner, 600); });
      setTimeout(privacyLink, 400); setTimeout(retoBanner, 150); setTimeout(retoBanner, 900);
      setTimeout(checkTasks, 1500);
    }
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
})();
