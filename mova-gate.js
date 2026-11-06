/* MOVA · Acceso exclusivo para alumnos (v82)
   Sin sesión de alumno (ni dispositivo de maestra activado), la app muestra una vitrina:
   inicio con candados, cifras reales, About us / programas y aviso de privacidad abiertos.
   Todo lo demás pide iniciar sesión con usuario y contraseña de MOVA.
   En las páginas sueltas (juegos, ruta.html) redirige al inicio si no hay sesión. */
(function () {
  "use strict";
  function isIn() {
    try {
      if (localStorage.getItem("mova_teacher_device") === "1") return true;
      var u = JSON.parse(localStorage.getItem("mova_student") || "null");
      return !!(u && u.token);
    } catch (e) { return false; }
  }
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  var IS_INDEX = page === "" || page === "index.html";
  if (!IS_INDEX) {
    if (!isIn()) { try { document.documentElement.style.visibility = "hidden"; } catch (e) {} location.replace("index.html#/"); }
    return;
  }

  var WA = "https://wa.me/528123426038?text=" + encodeURIComponent("Hola, me interesa recibir información sobre los programas de MOVA.");
  var OPEN_ROUTES = { "": 1, "mova": 1 };
  var LOCK = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  var LOCK_BIG = LOCK.replace('width="13" height="13"', 'width="30" height="30"').replace('2.6', '2.4');

  var css = "" +
    "body.mg-vis .vlk{position:relative;overflow:hidden}" +
    "body.mg-vis .vlk::after{content:'';position:absolute;inset:0;border-radius:inherit;background:rgba(21,25,43,.14);pointer-events:none}" +
    ".vpill{position:absolute;top:10px;right:10px;z-index:3;display:inline-flex;align-items:center;gap:5px;background:#15192B;color:#D3F36B;font:800 10.5px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.05em;padding:6px 9px;border-radius:999px;box-shadow:0 4px 12px rgba(21,25,43,.25)}" +
    ".mr-qk .vpill{top:7px;right:7px;padding:6px;font-size:0;gap:0}" +
    ".vstats{display:grid;grid-template-columns:1fr 1fr;gap:8px}" +
    "@media (min-width:860px){.vstats{grid-template-columns:repeat(4,1fr)}}" +
    ".vstats div{border-radius:20px;padding:14px;box-shadow:0 10px 26px -18px rgba(54,40,120,.45)}" +
    ".vstats b{display:block;font:800 30px/1 'Bricolage Grotesque',sans-serif;color:#15192B}.vstats small{display:block;margin-top:4px;font:700 12.5px/1.35 'Plus Jakarta Sans',sans-serif;color:#4E5268}" +
    ".vstats div:nth-child(1){background:#D3F36B}.vstats div:nth-child(2){background:#E6E2FF}.vstats div:nth-child(3){background:#FFC7E2}.vstats div:nth-child(4){background:#FFE58A}" +
    ".vbtns{display:flex;gap:8px;flex-wrap:wrap;position:relative;z-index:1}.vbtns a,.vbtns button{display:inline-flex;align-items:center;gap:7px;padding:11px 16px;border-radius:999px;font:800 13.5px 'Plus Jakarta Sans',sans-serif;text-decoration:none;cursor:pointer;border:2px solid #15192B}" +
    ".vbtns .p{background:#15192B;color:#fff}.vbtns .s{background:#fff;color:#15192B}" +
    ".vmod{position:fixed;inset:0;z-index:9999;background:rgba(21,25,43,.55);display:flex;align-items:flex-end;justify-content:center;animation:vmf .2s}" +
    "@media (min-width:860px){.vmod{align-items:center}.vmod .c{border-radius:30px!important;max-width:420px}}" +
    ".vmod .c{background:#fff;width:100%;max-width:560px;border-radius:30px 30px 0 0;padding:26px 22px calc(env(safe-area-inset-bottom,0px) + 28px);text-align:center;animation:vmu .25s}" +
    ".vmod .ic{width:64px;height:64px;border-radius:20px;background:#D3F36B;display:grid;place-items:center;margin:0 auto 14px;color:#15192B}" +
    ".vmod h3{font:800 25px/1.05 'Bricolage Grotesque',sans-serif;margin:0 0 8px;color:#15192B}.vmod p{margin:0 auto 18px;color:#5A5F75;font:600 14.5px/1.5 'Plus Jakarta Sans',sans-serif;max-width:310px}" +
    ".vmod a,.vmod button{display:block;width:100%;box-sizing:border-box;padding:15px;border-radius:999px;font:800 15px 'Plus Jakarta Sans',sans-serif;text-decoration:none;margin-top:8px;border:0;cursor:pointer}" +
    ".vmod .p{background:#15192B;color:#fff}.vmod .s{background:#F5F3FA;color:#15192B}.vmod .x{background:none;color:#6A6F85;font-size:13.5px;padding:10px}" +
    "@keyframes vmf{from{opacity:0}}@keyframes vmu{from{transform:translateY(40px)}}" +
    ".vlock-page{max-width:520px;margin:0 auto;padding:40px 18px;text-align:center}" +
    ".vlock-page .ic{width:76px;height:76px;border-radius:24px;background:#D3F36B;display:grid;place-items:center;margin:0 auto 16px;color:#15192B}" +
    ".vlock-page h1{font:800 32px/1.02 'Bricolage Grotesque',sans-serif;color:#15192B;margin:0 0 10px}.vlock-page p{color:#5A5F75;font:600 15px/1.55 'Plus Jakarta Sans',sans-serif;margin:0 auto 20px;max-width:340px}" +
    ".vlock-page .vbtns{justify-content:center}";
  var st = document.createElement("style"); st.id = "mova-gate"; st.textContent = css; document.head.appendChild(st);

  function login() { closeSheet(); try { if (window.MovaAuth && MovaAuth.login) MovaAuth.login(); } catch (e) {} }
  function closeSheet() { var m = document.querySelector(".vmod"); if (m) m.remove(); }
  function sheet() {
    if (document.querySelector(".vmod")) return;
    var m = document.createElement("div"); m.className = "vmod"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
    m.innerHTML = '<div class="c"><div class="ic">' + LOCK_BIG + '</div><h3>Exclusive for MOVA students</h3>' +
      '<p>This content is part of the MOVA programs. Log in with your MOVA username and password to continue.</p>' +
      '<button class="p" type="button" data-g="login">Log in</button><a class="s" href="' + WA + '" target="_blank" rel="noopener">Request information</a>' +
      '<button class="x" type="button" data-g="close">Not now</button></div>';
    m.addEventListener("click", function (e) {
      if (e.target === m || e.target.closest('[data-g="close"]')) return closeSheet();
      if (e.target.closest('[data-g="login"]')) login();
    });
    document.body.appendChild(m);
  }
  function lockedView() {
    return { title: "Exclusive for MOVA students", html: '<section class="vlock-page"><div class="ic">' + LOCK_BIG + '</div><h1>Exclusive for MOVA students</h1>' +
      '<p>MOVA Studio is the private learning platform of MOVA Centro Pedagógico. Log in with your MOVA username and password to continue.</p>' +
      '<div class="vbtns"><button class="p" type="button" data-g="login">Student log in</button><a class="s" href="#/mova">Our programs</a></div></section>',
      mount: function (root) { var b = root.querySelector('[data-g="login"]'); if (b) b.onclick = login; } };
  }

  /* rutas: cualquier ruta cerrada muestra la página de acceso */
  function routeKey() { return (location.hash.replace(/^#\/?/, "").split("/")[0] || ""); }
  function wrapRoutes() {
    if (typeof ROUTES !== "object") return;
    Object.keys(ROUTES).forEach(function (k) {
      var f = ROUTES[k]; if (typeof f !== "function" || f.__gate || OPEN_ROUTES[k]) return;
      var g = function () { return isIn() ? f.apply(this, arguments) : lockedView(); };
      g.__gate = true; ROUTES[k] = g;
    });
  }

  /* clics: lo cerrado abre la ventana de acceso */
  document.addEventListener("click", function (e) {
    if (isIn()) return;
    var t = e.target;
    if (t.closest(".vmod")) return;
    if (t.closest('[data-g="login"]')) { e.preventDefault(); return login(); }
    if (t.closest('[data-mr="me"], .mr-login, .mva-chip')) return;
    if (t.closest(".mr-gon")) { e.preventDefault(); e.stopPropagation(); return sheet(); }
    var a = t.closest("a[href]"); if (!a) return;
    var h = a.getAttribute("href") || "";
    if (/^(https?:|mailto:|tel:)/.test(h) && !/heymova\.mx/.test(h)) return;
    if (/aviso-privacidad/.test(h)) return;
    var k = h.indexOf("#/") === 0 ? h.slice(2).split("/")[0] : (h === "#" || h === "" ? null : "x");
    if (k === null || OPEN_ROUTES[k]) return;
    e.preventDefault(); e.stopPropagation(); sheet();
  }, true);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeSheet(); });

  /* vitrina del inicio */
  function decorate() {
    if (isIn()) { document.body.classList.remove("mg-vis"); return; }
    document.body.classList.add("mg-vis");
    var home = document.querySelector(".mr-home"); if (!home || home.__vis) return;
    home.__vis = true;
    var hero = home.querySelector(".mr-hero");
    if (hero) {
      var p = hero.querySelector("p"); if (p) p.textContent = "The private learning platform of MOVA Centro Pedagógico, exclusive for our students.";
      var pill = hero.querySelector(".mr-pill");
      if (pill) { var d = document.createElement("div"); d.className = "vbtns"; d.innerHTML = '<button class="p" type="button" data-g="login">' + LOCK + ' Student log in</button><a class="s" href="#/mova">Our programs</a>'; pill.replaceWith(d); }
    }
    var lk = function (el) { if (!el || el.classList.contains("vlk")) return; el.classList.add("vlk"); var s = document.createElement("span"); s.className = "vpill"; s.innerHTML = LOCK + " STUDENTS"; el.appendChild(s); };
    lk(home.querySelector(".mr-gon"));
    home.querySelectorAll(".mr-qk > *, .mr-tiles > *").forEach(lk);
    document.querySelectorAll(".pv-card, .mab-fam").forEach(lk);
    var g2 = home.querySelector(".mr-grid2");
    if (g2 && !home.querySelector(".vstats")) {
      var sec = document.createElement("div"); sec.className = "mr-sec";
      sec.innerHTML = "<h2>Inside MOVA Studio</h2><div class=\"vstats\"><div><b>144</b><small>grammar lessons with visual guides</small></div><div><b>140+</b><small>readings from Kids to C2</small></div><div><b>39</b><small>flashcard decks with audio</small></div><div><b>20+</b><small>games, escape rooms and live challenges</small></div></div>";
      g2.after(sec);
    }
  }
  var mo = new MutationObserver(function () { if (!isIn()) decorate(); });
  function start() {
    wrapRoutes();
    mo.observe(document.body, { childList: true, subtree: true });
    if (!isIn()) { decorate(); if (!OPEN_ROUTES[routeKey()] && typeof router === "function") router(); }
  }
  if (document.readyState === "complete") setTimeout(start, 50); else window.addEventListener("load", function () { setTimeout(start, 50); });
  setInterval(wrapRoutes, 2000);

  /* al iniciar o cerrar sesión, volver a dibujar */
  var was = isIn();
  setInterval(function () {
    var now = isIn(); if (now === was) return; was = now; closeSheet();
    if (!now) document.body.classList.add("mg-vis"); else document.body.classList.remove("mg-vis");
    if (typeof router === "function") router();
  }, 800);
})();
