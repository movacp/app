/* MOVA Lectoescritura · portada nueva (nov 2026)
   Vitrina "Leo y escribo, sílaba por sílaba", pestañas Mi Ruta Lectora / Por mi cuenta,
   Mi Ruta Lectora con los 8 niveles según el diagnóstico de entrada, y la vista "Ver mi ruta".
   El diagnóstico lo asigna la maestra desde el panel (tarea "diagnostico-lectura").
   Se carga después de mova-secciones.js y solo cambia la portada (#/lectoescritura),
   la ruta (#/lectoescritura/ruta) y la lista de dictados (#/lectoescritura/dictado).
   Fluidez y cada dictado siguen igual. */
(function () {
  "use strict";
  var SB_URL = "https://fclafxrkibvcjktrgznt.supabase.co", SB_KEY = "sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6";
  var LV = [
    { n: "Sonidos y vocales", m: "a e", kid: "Escuchas los sonidos de las palabras y conoces las cinco vocales." },
    { n: "Primeras sílabas", m: "ma", kid: "Juntas m, p, s y l con las vocales para leer tus primeras palabras." },
    { n: "Sílabas directas", m: "sol", kid: "Lees sílabas con todas las letras, como fo, ñu, che, y tus primeros textos." },
    { n: "Sílabas inversas y mixtas", m: "al", kid: "Lees sílabas como al, es, in y palabras como sol, pan y papel." },
    { n: "Sílabas trabadas y diptongos", m: "pla", kid: "Lees palabras con dos consonantes juntas, como plato y flor, y con dos vocales, como piano." },
    { n: "Casos especiales", m: "qu", kid: "Aprendes las letras que cambian: qu, gu, ce, ge, r y rr, y la h que no suena." },
    { n: "Oraciones y fluidez", m: "Aa.", kid: "Lees oraciones completas con ritmo y con la voz de las preguntas y exclamaciones." },
    { n: "Textos y comprensión", m: "", kid: "Lees textos más largos, entiendes lo que pasa y explicas por qué." }
  ];
  var PRACT = { 1: "juego-lee-con-mochi.html", 2: "juego-lee-con-mochi.html", 3: "juego-lee-con-mochi.html", 4: "#/lectoescritura/dictado/palabras",
    5: "#/lectoescritura/dictado/trabadas", 6: "#/lectoescritura/dictado/ortografia", 7: "#/lectoescritura/fluidez", 8: "#/lectoescritura/fluidez" };
  var DT = [
    { id: "silabas", name: "Sílabas", c: "#FFC7E2" }, { id: "palabras", name: "Palabras sencillas", c: "#FFE58A" },
    { id: "trabadas", name: "Trabadas y letras difíciles", c: "#C9D2FF" }, { id: "oraciones", name: "Oraciones cortas", c: "#BDF0D8" },
    { id: "ortografia", name: "Oraciones con ortografía", c: "#E6E2FF" }, { id: "parrafo", name: "Oraciones largas", c: "#FFD9C2" }
  ];
  var TILES = [
    ["Sílabas", "Escucha y escribe sílabas", "ma", "#B9A6FF", "#1A1B2E", "#/lectoescritura/dictado/silabas"],
    ["Palabras", "Forma palabras nuevas", "sol", "#FF8FC8", "#1A1B2E", "#/lectoescritura/dictado/palabras"],
    ["Lecturas", "Lee y vuelve a leer", "Aa", "#1A1B2E", "#D3F36B", "#/lectoescritura/fluidez"],
    ["Dictado", "Escucha y escribe", "ñ", "#16274A", "#FF8FC8", "#/lectoescritura/dictado"],
    ["Islas de Mochi", "Aprende a leer con Mochi", "M", "#ECE7FF", "#1A1B2E", "juego-lee-con-mochi.html"],
    ["La Feria de Mochi", "Juega y practica", "a", "#D3F36B", "#1A1B2E", "juego-feria-mochi.html"]
  ];

  var css = [
    ".lx{max-width:760px;margin:0 auto;padding:4px 0 8px;display:flex;flex-direction:column;gap:14px;font-family:'Plus Jakarta Sans','Century Gothic',sans-serif;color:#1A1B2E}",
    ".lx h1,.lx h2,.lx h3{font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;letter-spacing:-.02em}",
    ".lx-hero{background:#1A1B2E;color:#fff;border-radius:30px;padding:20px;position:relative;overflow:hidden;min-height:236px}",
    ".lx-hero .ci{position:absolute;right:-34px;top:-34px;width:120px;height:120px;border-radius:50%;background:#2A2C44}",
    ".lx-hero .d{position:absolute;border-radius:50%}",
    ".lx-hero .mo{position:absolute;right:36px;top:18px;width:84px;height:103px;object-fit:contain}",
    ".lx-hero .hi{margin:0;font-size:13px;color:#C6C9DA;position:relative}",
    ".lx-pill{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.06em;padding:6px 12px;border-radius:999px;background:#FF8FC8;color:#1A1B2E;position:relative;margin-top:10px}",
    ".lx-hero h1{position:relative;margin:14px 0 0;font-size:29px;font-weight:800;line-height:1.02;color:#fff}",
    ".lx-hero h1 span{color:#D3F36B;white-space:nowrap}",
    ".lx-hero p.s{position:relative;margin:10px 0 0;font-size:13px;line-height:1.45;color:#C6C9DA;max-width:330px}",
    ".lx-tabs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;background:#fff;border:1.5px solid #E4E0EE;border-radius:999px;padding:5px}",
    ".lx-tabs button{font-family:'Plus Jakarta Sans',sans-serif;border:0;cursor:pointer;border-radius:999px;padding:12px 6px;font-size:14px;min-height:46px;font-weight:600;background:transparent;color:#6B6E85}",
    ".lx-tabs button[aria-selected=true]{font-weight:800;background:#1A1B2E;color:#D3F36B}",
    ".lx-ruta{background:#16274A;color:#fff;border-radius:30px;padding:20px;display:flex;flex-direction:column;gap:12px}",
    ".lx-ruta .hd{display:flex;align-items:center;justify-content:space-between;gap:10px}",
    ".lx-tag{background:#D3F36B;color:#1A1B2E;font-size:11px;font-weight:800;letter-spacing:.06em;padding:5px 11px;border-radius:999px}",
    ".lx-ruta .nv{font-size:12px;color:#C9D3E6}",
    ".lx-ruta h2{margin:0;font-size:26px;font-weight:800;line-height:1.05;color:#fff}",
    ".lx-ruta p{margin:0;font-size:13px;line-height:1.45;color:#C9D3E6}",
    ".lx-lv{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}",
    "@media(min-width:640px){.lx-lv{grid-template-columns:repeat(8,minmax(0,1fr))}}",
    ".lx-lv div{height:58px;border-radius:18px;display:flex;align-items:center;justify-content:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:18px;background:#24375C;color:#C9D3E6}",
    ".lx-lv div.done{background:#D3F36B;color:#1A1B2E}.lx-lv div.now{background:#B9A6FF;color:#1A1B2E}",
    ".lx-lv img{width:52px;height:46px;object-fit:contain}",
    ".lx-btns{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:2px}",
    ".lx-btns a{font-weight:800;font-size:14px;padding:13px 20px;border-radius:999px;text-decoration:none;color:#1A1B2E}",
    ".lx-btns .p{background:#FF8FC8}.lx-btns .g{background:#D3F36B}",
    ".lx-diag{background:#fff;border-radius:22px;padding:14px 16px;display:flex;align-items:center;gap:12px;color:#1A1B2E}",
    ".lx-diag img{width:54px;height:66px;object-fit:contain;flex:0 0 auto}",
    ".lx-diag b{display:block;font-size:15px}.lx-diag span{font-size:12.5px;color:#6B6E85;line-height:1.4}",
    ".lx-diag a{margin-left:auto;flex:0 0 auto;background:#FF8FC8;color:#1A1B2E;font-weight:800;font-size:13px;padding:11px 16px;border-radius:999px;text-decoration:none}",
    ".lx-tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}",
    "@media(min-width:640px){.lx-tiles{grid-template-columns:repeat(3,minmax(0,1fr))}}",
    ".lx-tiles a{background:#fff;border:1.5px solid #E4E0EE;border-radius:24px;overflow:hidden;text-decoration:none;color:#1A1B2E;display:flex;flex-direction:column}",
    ".lx-tiles .tp{height:92px;display:flex;align-items:center;justify-content:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:30px}",
    ".lx-tiles .tx{padding:10px 12px 12px;display:flex;flex-direction:column;gap:2px}",
    ".lx-tiles b{font-family:'Bricolage Grotesque',sans-serif;font-size:16px;font-weight:800;line-height:1.1}",
    ".lx-tiles small{font-size:11.5px;color:#6B6E85;line-height:1.3}",
    ".lx-back{display:inline-flex;align-items:center;gap:6px;align-self:flex-start;background:#fff;border-radius:999px;padding:8px 15px 8px 11px;font-weight:800;font-size:14px;color:#15192B;text-decoration:none}",
    ".lx-list{display:flex;flex-direction:column;gap:10px}",
    ".lx-row{background:#fff;border:1.5px solid #E4E0EE;border-radius:24px;padding:14px;display:flex;gap:14px;align-items:flex-start}",
    ".lx-row.now{border:2px solid #1A1B2E}",
    ".lx-row .t{width:58px;height:58px;border-radius:18px;flex:0 0 auto;display:flex;align-items:center;justify-content:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:18px;background:#EEEAF6;color:#6B6E85}",
    ".lx-row.done .t{background:#D3F36B;color:#1A1B2E}.lx-row.now .t{background:#B9A6FF;color:#1A1B2E}",
    ".lx-row .t img{width:46px;height:40px;object-fit:contain}",
    ".lx-row .c{flex:1;display:flex;flex-direction:column;gap:4px}",
    ".lx-row .c em{font-style:normal;font-size:11px;font-weight:800;color:#6B6E85}",
    ".lx-row .c b{font-family:'Bricolage Grotesque',sans-serif;font-size:17px;line-height:1.15}",
    ".lx-row .c span{font-size:13px;line-height:1.45;color:#3D3F5C}",
    ".lx-st{align-self:flex-start;font-size:11px;font-weight:800;padding:4px 10px;border-radius:999px;background:#F1EEF8;color:#6B6E85}",
    ".lx-row.done .lx-st{background:#F1FAD0;color:#3E4A12}.lx-row.now .lx-st{background:#FF8FC8;color:#1A1B2E}",
    ".lx-note{background:#ECE7FF;border-radius:18px;padding:12px 14px;font-size:13px;line-height:1.45}",
    "html[data-theme=dark] .lx{color:#F1F2F8}html[data-theme=dark] .lx-tiles a,html[data-theme=dark] .lx-row,html[data-theme=dark] .lx-diag,html[data-theme=dark] .lx-tabs{background:#23253A;border-color:#33354D;color:#F1F2F8}",
    "html[data-theme=dark] .lx-row .c span,html[data-theme=dark] .lx-tiles small,html[data-theme=dark] .lx-diag span{color:#C6C9DA}"
  ].join("\n");
  var st = document.createElement("style"); st.id = "mova-lecto"; st.textContent = css; document.head.appendChild(st);

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function get(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
  function user() { var u = get("mova_student"); return u && u.token ? u : null; }
  function first(n) { return String(n || "").trim().split(/\s+/)[0] || ""; }
  function rpc(fn, args) {
    return fetch(SB_URL + "/rest/v1/rpc/" + fn, { method: "POST", headers: { apikey: SB_KEY, "Content-Type": "application/json" }, body: JSON.stringify(args || {}) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw j; return j; }); });
  }
  var BACK = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';

  /* ---------- Estado del alumno: diagnóstico guardado y tarea pendiente ---------- */
  var ST = { diag: null, task: null, u: null };
  function cached() {
    var u = user(); ST.u = u ? u.username : null;
    var c = u ? get("mova_lecto_state_" + u.username) : null;
    var local = u ? get("mova_lecto_diag_" + u.username) : null;
    ST.diag = (c && c.diag) || (local && local.nivel_lectura ? local : null);
    ST.task = c ? c.task : null;
  }
  function refresh() {
    var u = user(); if (!u) return;
    Promise.all([
      rpc("student_my_progress", { p_token: u.token }).catch(function () { return null; }),
      rpc("student_tasks", { p_username: u.username }).catch(function () { return null; })
    ]).then(function (res) {
      if (!user() || user().username !== u.username) return;
      var rows = Array.isArray(res[0]) ? res[0] : null, tasks = Array.isArray(res[1]) ? res[1] : null;
      var diag = ST.diag, task = ST.task;
      if (rows) {
        var d = rows.filter(function (r) { return r.activity === "diagnostico-lectura" && r.detail && r.detail.nivel_lectura; })
          .sort(function (a, b) { return new Date(b.created_at) - new Date(a.created_at); })[0];
        if (d) diag = Object.assign({ fecha: new Date(d.created_at).getTime() }, d.detail);
      }
      if (tasks) {
        var after = diag ? diag.fecha || 0 : 0;
        var t = tasks.filter(function (x) { return String(x.task || "").split("~")[0] === "diagnostico-lectura" && new Date(x.created_at).getTime() > after; })[0];
        task = t ? { id: t.id } : null;
      }
      var ch = JSON.stringify([diag && diag.nivel_lectura, diag && diag.fecha, task && task.id]) !== JSON.stringify([ST.diag && ST.diag.nivel_lectura, ST.diag && ST.diag.fecha, ST.task && ST.task.id]);
      ST.diag = diag; ST.task = task;
      try { localStorage.setItem("mova_lecto_state_" + u.username, JSON.stringify({ diag: diag ? { nivel_lectura: diag.nivel_lectura, nivel_escritura: diag.nivel_escritura, fecha: diag.fecha } : null, task: task })); } catch (e) {}
      if (ch && /^#\/lectoescritura(\/ruta)?\/?$/.test(location.hash) && typeof router === "function") router();
    });
  }
  function level() { var n = ST.diag && +ST.diag.nivel_lectura; return n ? Math.min(9, Math.max(1, n)) : 0; }
  function stateOf(i) { var L = level(); if (!L) return "next"; return i + 1 < L ? "done" : i + 1 === L ? "now" : "next"; }
  function mark(i) { return i === 7 ? '<img src="le-libro.webp" alt="">' : esc(LV[i].m); }

  /* ---------- Portada ---------- */
  var tab = "ruta";
  function dots() {
    return [[142, 20, 9, "#D3F36B"], [150, 66, 7, "#8FA2FF"], [18, 16, 6, "#FF8FC8"], [24, 168, 17, "#FF8FC8"], [96, 200, 11, "#B9A6FF"], [58, 212, 7, "#8CCBAE"], [132, 134, 6, "#D3F36B"]]
      .map(function (d) { return '<span class="d" style="right:' + d[0] + "px;top:" + d[1] + "px;width:" + d[2] + "px;height:" + d[2] + "px;background:" + d[3] + '"></span>'; }).join("");
  }
  function rutaCard() {
    var L = level(), u = user();
    var tiles = LV.map(function (x, i) { var s = stateOf(i); return '<div class="' + s + '" aria-label="Nivel ' + (i + 1) + ": " + esc(x.n) + (s === "done" ? ", logrado" : s === "now" ? ", en práctica" : "") + '">' + mark(i) + "</div>"; }).join("");
    var diag = ST.task ? '<div class="lx-diag"><img src="mochi-hola.webp" alt=""><div><b>Tu diagnóstico de entrada</b><span>Hazlo con tu maestra en clase.</span></div><a href="juego-diagnostico-lectura.html?task=' + encodeURIComponent(ST.task.id) + '">Empezar</a></div>' : "";
    var txt = !u ? "Inicia sesión para ver tu ruta." : L > 8 ? "Ya lograste los 8 niveles. ¡Qué gran lector!" : L ? "Estás practicando " + LV[L - 1].n.toLowerCase() + "." : "Tu ruta se abre después de tu diagnóstico de entrada con tu maestra.";
    return '<div class="lx-ruta"><div class="hd"><span class="lx-tag">CON TU MAESTRA</span><span class="nv">' + (L ? (L > 8 ? "8 de 8 logrados" : "Nivel " + L + " de 8") : "Por empezar") + "</span></div>" +
      "<h2>Mi Ruta Lectora</h2><p>" + txt + '</p><div class="lx-lv">' + tiles + "</div>" + diag +
      (L ? '<div class="lx-btns"><a class="p" href="' + (PRACT[Math.min(8, L)]) + '">Practicar ahora</a><a class="g" href="#/lectoescritura/ruta">Ver mi ruta</a></div>'
        : '<div class="lx-btns"><a class="g" href="#/lectoescritura/ruta">Ver mi ruta</a></div>') + "</div>";
  }
  function cuenta() {
    return '<div class="lx-tiles">' + TILES.map(function (t) {
      return '<a href="' + t[5] + '"><span class="tp" style="background:' + t[3] + ";color:" + t[4] + '">' + esc(t[2]) + '</span><span class="tx"><b>' + esc(t[0]) + "</b><small>" + esc(t[1]) + "</small></span></a>";
    }).join("") + "</div>";
  }
  function home() {
    cached(); setTimeout(refresh, 30);
    var u = user(), nm = u ? first(u.name || u.username) : "";
    return {
      title: "Lectoescritura",
      html: '<section class="wrap"><div class="lx">' +
        '<div class="lx-hero"><div class="ci"></div>' + dots() + '<img class="mo" src="mochi-lee.webp" alt="Mochi leyendo un libro">' +
        (nm ? '<p class="hi">Hola, ' + esc(nm) + "</p>" : "") + '<span class="lx-pill">LECTOESCRITURA</span>' +
        '<h1>Leo y escribo,<br><span>sílaba por sílaba</span></h1><p class="s">Escucha, arma, lee y escribe con Mochi.</p></div>' +
        '<div class="lx-tabs" role="tablist" aria-label="Secciones de lectoescritura"><button type="button" role="tab" data-lx="ruta" aria-selected="' + (tab === "ruta") + '">Mi Ruta Lectora</button><button type="button" role="tab" data-lx="cuenta" aria-selected="' + (tab === "cuenta") + '">Por mi cuenta</button></div>' +
        '<div id="lx-pane">' + (tab === "ruta" ? rutaCard() : cuenta()) + "</div></div></section>"
    };
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-lx]"); if (!b) return;
    tab = b.getAttribute("data-lx");
    document.querySelectorAll("[data-lx]").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
    var p = document.getElementById("lx-pane"); if (p) p.innerHTML = tab === "ruta" ? rutaCard() : cuenta();
  });

  /* ---------- Ver mi ruta ---------- */
  function ruta() {
    cached(); setTimeout(refresh, 30);
    var L = level(), u = user();
    var intro = !u ? "Inicia sesión para ver tu ruta." : L ? "Cada nivel se logra cuando lo lees y lo escribes bien frente a tu maestra. Lo que practicas en casa te ayuda a llegar listo." : "Tu maestra te hará un diagnóstico en clase. Con él sabremos desde qué nivel empiezas.";
    return {
      title: "Mi Ruta Lectora",
      html: '<section class="wrap"><div class="lx">' +
        '<div class="lx-ruta"><div class="hd"><span class="lx-tag">MI RUTA LECTORA</span><span class="nv">' + (L ? (L > 8 ? "8 de 8 logrados" : "Nivel " + L + " de 8") : "Por empezar") + "</span></div>" +
        "<h2>" + (u ? "La ruta de " + esc(first(u.name || u.username)) : "Mi Ruta Lectora") + "</h2><p>" + intro + "</p></div>" +
        '<div class="lx-list">' + LV.map(function (x, i) {
          var s = stateOf(i), lab = s === "done" ? "Logrado" : s === "now" ? "En práctica" : "Por iniciar";
          return '<div class="lx-row ' + s + '"><div class="t">' + mark(i) + '</div><div class="c"><em>NIVEL ' + (i + 1) + "</em><b>" + esc(x.n) + "</b><span>" + esc(x.kid) + '</span><span class="lx-st">' + lab + "</span></div></div>";
        }).join("") + "</div>" +
        (L && L <= 8 ? '<div class="lx-btns"><a class="p" style="background:#FF8FC8" href="' + PRACT[L] + '">Practicar mi nivel</a></div>' : "") + "</div></section>"
    };
  }

  /* ---------- Dictado (lista) ---------- */
  function dictados() {
    return {
      title: "Dictado",
      html: '<section class="wrap"><div class="lx">' +
        '<div class="lx-ruta" style="background:#1A1B2E"><span class="lx-tag" style="align-self:flex-start;background:#FF8FC8">DICTADO</span><h2>Escucha y escribe</h2><p>Escucha a Mochi, escribe lo que oyes y revisa tus respuestas.</p></div>' +
        '<div class="mp-grid">' + DT.map(function (d) {
          return '<a class="mp-card" href="#/lectoescritura/dictado/' + d.id + '"><span class="mp-th"><img src="le-' + d.id + '.webp" alt="" loading="lazy" width="800" height="450"></span><span class="mp-tx"><b>' + esc(d.name) + '</b><span class="mp-chips ms-chips"><em class="c4">10 por ronda</em></span></span></a>';
        }).join("") + "</div></div></section>"
    };
  }

  /* ---------- Instalación ---------- */
  function install() {
    if (typeof ROUTES !== "object" || !ROUTES.__ms || !ROUTES.lectoescritura || ROUTES.lectoescritura.__lx) return false;
    var prev = ROUTES.lectoescritura;
    var w = function (p) {
      p = p || [];
      try {
        if (!p[0]) return home();
        if (p[0] === "ruta") return ruta();
        if (p[0] === "dictado" && !p[1]) return dictados();
      } catch (e) { if (window.console) console.error(e); }
      return prev(p);
    };
    for (var k in prev) if (Object.prototype.hasOwnProperty.call(prev, k)) w[k] = prev[k];
    w.__lx = true; w.__ms = true; ROUTES.lectoescritura = w;
    return true;
  }
  function boot() { if (install() && typeof router === "function" && /^#\/lectoescritura/.test(location.hash)) router(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  setTimeout(boot, 800);
})();
