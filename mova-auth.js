/* MOVA Learning Studio: inicio de sesión opcional para alumnos MOVA y registro de avance.
   La app sigue abierta para todos; si el alumno entra con su cuenta, se guarda su práctica. */
(function () {
  "use strict";
  var SB_URL = "https://fclafxrkibvcjktrgznt.supabase.co";
  var SB_KEY = "sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6";
  var K_USER = "mova_student", K_PEND = "mova_pending", K_QUEUE = "mova_queue";
  var NAMES = {
    "word-quest": "Word Quest", "mision-matematica": "Misión Matemática", "level-up": "Level Up",
    "verb-memory": "Verb Memory", "sentence-builder": "Sentence Builder", "locked-library": "Locked Library",
    "toefl-practice": "TOEFL Practice", "word-forms": "Word Forms", "sentence-scramble": "Sentence Scramble",
    "lee-con-mochi": "Aprende a leer con Mochi", "sopa-de-letras": "Sopa de letras", "crucigrama": "Crucigrama"
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

  /* Resultados que los juegos ya guardan en el dispositivo */
  function watchResults() {
    var slug = gameSlug(); if (!slug) return;
    var orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      var before = null;
      try { before = this.getItem(k); } catch (e) {}
      orig.apply(this, arguments);
      if (this !== window.localStorage || !user || v === before) return;
      try {
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
    chip.setAttribute("aria-label", user ? "Mi cuenta" : "Iniciar sesión de alumno MOVA");
  }
  function dots() {
    var pal = ["#F6D776", "#8EC9EE", "#9DDCC0", "#B9A6E8", "#E8846B", "#FFFFFF"], h = "";
    for (var i = 0; i < 12; i++) { var s = 7 + (i * 7) % 16; h += '<i style="width:' + s + "px;height:" + s + "px;left:" + ((i * 29) % 100) + "%;top:" + ((i * 41) % 90) + "%;background:" + pal[i % pal.length] + ';opacity:.6"></i>'; }
    return '<div class="mva-band" aria-hidden="true">' + h + "</div>";
  }
  function open(html) {
    close();
    var b = document.createElement("div"); b.className = "mva-back"; b.id = "mva-modal";
    b.innerHTML = '<div class="mva-card" role="dialog" aria-modal="true">' + dots() + '<button class="mva-x" aria-label="Cerrar">×</button>' + html + "</div>";
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
      '<button class="mva-btn" type="submit" id="mva-go">Entrar</button><div class="mva-err" id="mva-err"></div></form>');
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
          set(K_USER, user); renderChip(); close(); toast("¡Bienvenido, " + first(user.name) + "!"); flushQueue(); beginScreen();
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
  function showAccount() {
    var b = open('<div class="mva-badge">' + esc(initials(user.name)) + "</div><h2>" + esc(user.name) + "</h2>" +
      "<p>Tu práctica en los juegos se está guardando.</p>" +
      '<div class="mva-info"><div><span>Usuario</span><b>' + esc(user.username) + "</b></div>" +
      (user.stage ? "<div><span>Grupo</span><b>" + esc(user.stage) + "</b></div>" : "") + "</div>" +
      '<button class="mva-btn" id="mva-ok">Seguir practicando</button><button class="mva-btn soft" id="mva-out">Cerrar sesión</button>');
    b.querySelector("#mva-ok").onclick = close;
    b.querySelector("#mva-out").onclick = function () {
      var tok = user.token;
      tick(); flushPending(); cur = null;
      setTimeout(function () { rpc("student_logout", { p_token: tok }).catch(function () {}); }, 2500);
      user = null; set(K_USER, null); set(K_PEND, null); renderChip(); close(); toast("Sesión cerrada");
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

  /* ---------- Arranque ---------- */
  window.MovaAuth = { save: save, user: function () { return user; }, login: showLogin };
  function boot() {
    injectCss();
    flushQueue(); checkSession();
    watchResults();
    startTracking();
    if (!gameSlug()) mountChip();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
})();
