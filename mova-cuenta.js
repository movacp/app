/* MOVA Learning Studio · On my own / Por mi cuenta (v108, nov 2026)
   Inglés: nueva sección #/english con dos pestañas, My path (lo que evalúa la maestra)
   y On my own (#/english/own: juegos, vocabulario, lecturas, speaking y escape rooms).
   Matemáticas: pestañas Mi ruta (#/matematicas) y Por mi cuenta (#/matematicas/cuenta).
   El contenido libre se ordena según la etapa y el nivel del alumno. Nada aquí se califica;
   el reporte mensual ya lo muestra como "Practicó por su cuenta". */
(function () {
  "use strict";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  function get(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
  function isIn() { var u = get("mova_student"), t = get("mova_admin_session"); return !!((u && u.token) || (t && t.refresh)); }

  var CSS = "" +
    ".oo-hero{position:relative;overflow:hidden;background:#15192B;color:#fff;border-radius:30px;padding:24px 22px 26px;min-height:190px;margin:4px 0 14px}" +
    ".oo-hero .k{display:inline-block;background:#D3F36B;color:#15192B;border-radius:999px;padding:6px 12px;font-weight:800;font-size:11.5px;letter-spacing:.08em;text-transform:uppercase}" +
    ".oo-hero h1{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(32px,9vw,46px);line-height:.96;letter-spacing:-.025em;margin:12px 0 10px;color:#fff}" +
    ".oo-hero p{margin:0;font-size:14.5px;line-height:1.5;color:#C9CCE0;max-width:30ch;position:relative;z-index:2}" +
    ".oo-hero .hx{position:relative;z-index:2;max-width:64%}" +
    ".oo-hero img{position:absolute;right:-4px;bottom:-10px;width:42%;max-width:200px;z-index:1;filter:drop-shadow(0 14px 18px rgba(0,0,0,.3))}" +
    ".oo-hero .d1{position:absolute;width:120px;height:120px;border-radius:50%;border:22px solid #262B45;right:-40px;top:-46px}" +
    ".oo-hero .d2{position:absolute;width:12px;height:12px;border-radius:50%;background:#FF8FC0;right:46%;top:28px}" +
    ".oo-seg{margin-bottom:16px!important}" +
    ".oo-intro{display:flex;gap:12px;align-items:center;background:#fff;border-radius:22px;padding:14px 16px;margin:0 0 18px;box-shadow:0 10px 30px -20px rgba(54,40,120,.4)}" +
    ".oo-intro i{width:42px;height:42px;border-radius:14px;flex:none;display:grid;place-items:center;font-style:normal}" +
    ".oo-intro i svg{width:22px;height:22px}" +
    ".oo-intro b{display:block;font-size:15px;color:#15192B}.oo-intro small{display:block;color:#5B6078;font-size:13px;line-height:1.4;margin-top:2px}" +
    ".oo-sh{display:flex;align-items:baseline;gap:8px;margin:4px 4px 10px;flex-wrap:wrap}" +
    ".oo-sh b{font-family:'Bricolage Grotesque',sans-serif;font-size:20px;letter-spacing:-.01em;color:#15192B}" +
    ".oo-sh small{color:#6A6F85;font-size:13px;font-weight:600}" +
    ".oo-sh a{margin-left:auto;font-weight:800;font-size:13px;color:#4B3BB0;text-decoration:none}" +
    ".oo-rail{display:flex;gap:12px;overflow-x:auto;margin:0 0 22px;padding:2px 2px 12px;scroll-snap-type:x mandatory;scrollbar-width:none}" +
    ".oo-rail::-webkit-scrollbar{display:none}" +
    ".oo-c{flex:none;width:150px;scroll-snap-align:start;background:#fff;border-radius:20px;overflow:hidden;text-decoration:none;color:#15192B;box-shadow:0 10px 26px -18px rgba(54,40,120,.5)}" +
    ".oo-c .im{display:block;height:104px;background:var(--bg,#E6E2FF);position:relative;overflow:hidden}" +
    ".oo-c .im img{width:100%;height:100%;object-fit:cover;display:block}" +
    ".oo-c .im img.ch{object-fit:contain;padding:10px}" +
    ".oo-c .im .gl{position:absolute;inset:0;display:grid;place-items:center;font:800 34px/1 'Bricolage Grotesque',sans-serif;color:#15192B}" +
    ".oo-c .im .gl .fr{display:inline-flex;flex-direction:column;align-items:center;font-size:22px;line-height:1}.oo-c .im .gl .fr i{display:block;width:22px;height:3px;background:#15192B;border-radius:2px;margin:2px 0}" +
    ".oo-c .tx{display:block;padding:10px 12px 12px}" +
    ".oo-c b{display:block;font-size:14px;line-height:1.25}" +
    ".oo-c small{display:block;color:#6A6F85;font-size:12px;line-height:1.35;margin-top:3px}" +
    ".oo-wide{display:grid;grid-template-columns:96px 1fr auto;gap:14px;align-items:center;background:#fff;border-radius:22px;padding:12px;text-decoration:none;color:#15192B;margin:0 0 12px;box-shadow:0 10px 26px -18px rgba(54,40,120,.5)}" +
    ".oo-wide img{width:96px;height:76px;object-fit:cover;border-radius:14px;display:block}" +
    ".oo-wide b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:17px;line-height:1.15}" +
    ".oo-wide small{display:block;color:#6A6F85;font-size:13px;line-height:1.4;margin-top:3px}" +
    ".oo-wide .go{width:36px;height:36px;border-radius:50%;background:#15192B;color:#D3F36B;display:grid;place-items:center;margin-right:4px}" +
    ".oo-wide .go svg{width:16px;height:16px}" +
    ".oo-pc{display:block;background:#E6E2FF;border-radius:26px;padding:18px;text-decoration:none;color:#15192B;margin:0 0 14px;position:relative;overflow:hidden}" +
    ".oo-pc .tp{display:flex;gap:14px;align-items:center}" +
    ".oo-pc .rg{position:relative;width:64px;height:64px;flex:none}.oo-pc .rg svg{width:64px;height:64px;display:block}" +
    ".oo-pc .rg em{position:absolute;inset:0;display:grid;place-items:center;font:800 15px/1 'Bricolage Grotesque',sans-serif;font-style:normal}" +
    ".oo-pc small{display:block;font-weight:800;font-size:11.5px;letter-spacing:.08em;color:#4B3BB0}" +
    ".oo-pc b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:22px;line-height:1.1;margin-top:3px}" +
    ".oo-pc .nx{display:block;background:#fff;border-radius:16px;padding:11px 14px;margin-top:14px;font-weight:700;font-size:14px}" +
    ".oo-pc .cta{display:inline-flex;margin-top:12px;background:#15192B;color:#fff;border-radius:999px;padding:10px 16px;font-weight:800;font-size:14px;box-shadow:0 3px 0 #D3F36B}" +
    ".oo-note{margin:6px 4px 0;color:#6A6F85;font-size:13px;line-height:1.5}" +
    ".mm .oo-hidden{display:none!important}" +
    ":root[data-theme=\"dark\"] .oo-intro,:root[data-theme=\"dark\"] .oo-c,:root[data-theme=\"dark\"] .oo-wide{background:#23263A;color:#fff}" +
    ":root[data-theme=\"dark\"] .oo-intro b,:root[data-theme=\"dark\"] .oo-sh b{color:#fff}" +
    ":root[data-theme=\"dark\"] .oo-intro small,:root[data-theme=\"dark\"] .oo-c small,:root[data-theme=\"dark\"] .oo-wide small,:root[data-theme=\"dark\"] .oo-sh small{color:#A9ADC4}" +
    ":root[data-theme=\"dark\"] .oo-sh a{color:#C7B5FF}" +
    "@media(min-width:720px){.oo-c{width:170px}.oo-hero img{right:24px;max-width:220px}}";
  function css() { if (document.getElementById("mova-cuenta")) return; var s = document.createElement("style"); s.id = "mova-cuenta"; s.textContent = CSS; document.head.appendChild(s); }

  var GO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
  var SPARK = '<svg viewBox="0 0 24 24" fill="#15192B"><path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z"/></svg>';
  var PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="#15192B" stroke-width="2.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';

  /* ---------- Etapa y nivel del alumno ---------- */
  function stage() {
    var r = get("mova_ruta_v1"), u = get("mova_student");
    var s = (r && r.stage) || (u && u.stage) || "";
    s = String(s).toLowerCase();
    return /kid/.test(s) ? "kids" : /teen/.test(s) ? "teens" : "children";
  }
  function level() { var r = get("mova_ruta_v1"); return r && r.level ? r.level : ""; }
  var STN = { kids: "MOVA Kids", children: "MOVA Children", teens: "MOVA Teens" };

  function card(o) {
    var im = o.img
      ? '<img' + (o.ch ? ' class="ch"' : "") + ' src="' + o.img + '" alt="" loading="lazy">'
      : '<span class="gl">' + (o.gl || "") + "</span>";
    return '<a class="oo-c" href="' + o.href + '"><span class="im" style="--bg:' + (o.bg || "#E6E2FF") + '">' + im + '</span><span class="tx"><b>' + esc(o.t) + "</b>" + (o.s ? "<small>" + esc(o.s) + "</small>" : "") + "</span></a>";
  }
  function rail(title, sub, items, more) {
    if (!items.length) return "";
    return '<div class="oo-sh"><b>' + title + "</b>" + (sub ? "<small>" + sub + "</small>" : "") + (more ? '<a href="' + more[0] + '">' + more[1] + "</a>" : "") + '</div><div class="oo-rail">' + items.map(card).join("") + "</div>";
  }
  function wide(href, img, t, s) {
    return '<a class="oo-wide" href="' + href + '"><img src="' + img + '" alt="" loading="lazy"><span><b>' + esc(t) + "</b><small>" + esc(s) + '</small></span><span class="go">' + GO + "</span></a>";
  }
  function seg(a, b, on) {
    return '<nav class="ms-seg oo-seg" aria-label="Secciones">' +
      '<a href="' + a[0] + '"' + (on === 0 ? ' aria-current="page"' : "") + ">" + a[1] + "</a>" +
      '<a href="' + b[0] + '"' + (on === 1 ? ' aria-current="page"' : "") + ">" + b[1] + "</a></nav>";
  }
  function hero(k, h, p, img) {
    return '<div class="oo-hero"><span class="d1"></span><span class="d2"></span><div class="hx"><span class="k">' + k + "</span><h1>" + h + "</h1><p>" + p + "</p></div>" + (img ? '<img src="' + img + '" alt="">' : "") + "</div>";
  }
  function intro(bg, ic, t, s) { return '<div class="oo-intro"><i style="background:' + bg + '">' + ic + "</i><div><b>" + t + "</b><small>" + s + "</small></div></div>"; }

  /* ---------- Inglés ---------- */
  var EN_GAMES = [
    { f: "juego-word-quest.html", img: "thumb-word-quest.webp", t: "Word Quest", s: "Listen and find the word", st: "kids children" },
    { f: "#/games/memory", img: "thumb-memory-match.webp", t: "Memory Match", s: "Words and pictures", st: "kids children" },
    { f: "juego-likes-dislikes.html", img: "thumb-likes-dislikes.webp", t: "Likes & Dislikes", s: "Like / don’t like", st: "kids children" },
    { f: "juego-sentence-scramble.html", img: "thumb-sentence-scramble.webp", t: "Sentence Scramble", s: "Word order", st: "kids children teens" },
    { f: "juego-verb-memory.html", img: "thumb-verb-memory.webp", t: "Verb Memory", s: "Irregular verbs", st: "children teens" },
    { f: "juego-sentence-builder.html", img: "thumb-sentence-builder.webp", t: "Sentence Builder", s: "Build it in English", st: "children teens" },
    { f: "#/games/matching", img: "thumb-word-matching.webp", t: "Word Matching", s: "Word meanings", st: "children teens" },
    { f: "juego-crucigrama.html", img: "thumb-crucigrama.webp", t: "Crossword", s: "Vocabulary and spelling", st: "kids children teens" },
    { f: "juego-sopa-de-letras.html", img: "thumb-sopa-de-letras.webp", t: "WordSearch", s: "Find the words", st: "kids children teens" },
    { f: "juego-craftland.html", img: "buddy-pop.webp", ch: 1, bg: "#D3F36B", t: "CraftLand", s: "Build your island", st: "kids children teens" },
    { f: "juego-sugar-town.html", img: "buddy-bloom.webp", ch: 1, bg: "#FFC7E2", t: "Sugar Town", s: "Build your park", st: "kids children teens" }
  ];
  var EN_ESC = [
    ["juego-locked-library.html", "thumb-locked-library.webp", "The Locked Library", "Reading clues"],
    ["juego-lost-in-the-museum.html", "thumb-lost-in-the-museum.webp", "Lost in the Museum", "Reading"],
    ["juego-pirate-treasure-island.html", "thumb-pirate-treasure-island.webp", "Pirate Treasure Island", "Listening"],
    ["juego-space-station-rescue.html", "thumb-space-station-rescue.webp", "Space Station Rescue", "Spelling"],
    ["juego-the-detectives-case.html", "thumb-the-detectives-case.webp", "The Detective’s Case", "Reasoning"],
    ["juego-trapped-in-the-train.html", "thumb-trapped-in-the-train.webp", "Trapped in the Train", "Sentence building"],
    ["juego-haunted-mansion.html", "thumb-haunted-mansion.webp", "The Haunted Mansion", "Halloween"]
  ];
  var LV = ["Pre-A1", "A1", "A1+", "A2", "A2+", "B1", "B1+", "B2", "C1", "C2"];
  function readings(st, lv) {
    var R = []; try { R = (typeof READINGS !== "undefined" && READINGS) || []; } catch (e) {}
    var mine = R.filter(function (r) { return (r.stage || (LV.indexOf(r.level) <= 3 ? "kids" : "children")) === st; });
    if (lv) {
      var i = LV.indexOf(lv);
      var near = mine.filter(function (r) { var j = LV.indexOf(r.level); return j >= i - 1 && j <= i; });
      if (near.length >= 3) mine = near.concat(mine.filter(function (r) { return near.indexOf(r) < 0; }));
    }
    var done = (get("mova_state") || {}).completed || [];
    mine.sort(function (a, b) { return (done.indexOf(a.id) >= 0) - (done.indexOf(b.id) >= 0); });
    return mine.slice(0, 8).map(function (r) { return { href: "#/library/" + r.id, img: "thumb-r-" + r.id + ".webp", t: r.title, s: r.level + (r.topic ? " · " + r.topic : "") }; });
  }
  function pathCard(st) {
    var o = get("mova_ruta_v1") || {}, P = window.MOVA_PATH, lv = o.level, href = "ruta.html", label = "Choose your level", sub = "Your teacher will guide you in class.", pct = 0;
    if (P && P[st]) {
      if (!lv || !P[st][lv]) lv = Object.keys(P[st]).filter(function (k) { return P[st][k].topics.some(function (t) { return t.exp; }); })[0];
      var L = P[st][lv];
      if (L) {
        var ready = L.topics.filter(function (t) { return t.exp; }), done = ready.filter(function (t) { return o.done && o.done[t.id]; });
        var nxt = ready.filter(function (t) { return !(o.done && o.done[t.id]); })[0];
        pct = ready.length ? Math.round(done.length / ready.length * 100) : 0;
        label = lv + " · " + L.name; href = "ruta.html#/lv/" + st + "/" + encodeURIComponent(lv);
        sub = nxt ? "Up next · " + nxt.t : (ready.length ? "Level complete · Level check" : "Coming soon");
      }
    }
    var C = 163;
    return '<a class="oo-pc" href="' + href + '"><span class="tp"><span class="rg"><svg viewBox="0 0 62 62"><circle cx="31" cy="31" r="26" fill="none" stroke="#fff" stroke-width="8"/><circle cx="31" cy="31" r="26" fill="none" stroke="#15192B" stroke-width="8" stroke-linecap="round" stroke-dasharray="' + Math.round(C * pct / 100) + " " + C + '" transform="rotate(-90 31 31)"/></svg><em>' + pct + '%</em></span><span><small>MY PATH · ' + STN[st].toUpperCase() + "</small><b>" + esc(label) + '</b></span></span><span class="nx">' + esc(sub) + '</span><span class="cta">Continue my journey →</span></a>';
  }
  function vEnglish(p) {
    css();
    var st = stage(), own = p[0] === "own";
    var html = hero("MOVA English", "English", own ? "Practice anything you like, at your own pace." : "Your path, step by step with your teacher.", "buddy-nova.webp") +
      seg(["#/english", "My path"], ["#/english/own", "On my own"], own ? 1 : 0);
    if (!own) {
      html += '<div class="oo-sh"><b>My path</b><small>Your journey, in order</small></div>' + pathCard(st) +
        '<div class="oo-sh"><b>With your teacher</b><small>She reviews these</small></div>' +
        wide("juego-writing.html", "writing.webp", "Writing Lab", "Guided writing. Your teacher sends you comments.") +
        wide("juego-level-up.html", "thumb-level-up.webp", "Level Up", "Find your level on the CEFR scale.") +
        '<p class="oo-note">Want more practice? Open <a href="#/english/own" style="color:#4B3BB0;font-weight:800">On my own</a>.</p>';
    } else {
      var g = EN_GAMES.filter(function (x) { return x.st.indexOf(st) >= 0; }).map(function (x) { return { href: x.f, img: x.img, ch: x.ch, bg: x.bg, t: x.t, s: x.s }; });
      html += intro("#E6E2FF", SPARK, "Practice anything you like", "Games, words, stories and more. Just for fun, no grades.") +
        rail("Games", "Play with words", g, ["#/games", "See all"]) +
        rail("Words", "Flashcards and grammar", [
          { href: "#/flashcards", img: "thumb-learn-flashcards.webp", t: "Flashcards", s: "Study, match and quiz" },
          { href: "#/structures", img: "thumb-learn-structures.webp", t: "Grammar", s: "Explanations and a quick check" },
          { href: "#/games/quiz", img: "thumb-vocab-quiz.webp", t: "Vocab Quiz", s: "Eight quick questions" }
        ]) +
        rail("Read", "Stories at your level", readings(st, level()), ["#/library/en", "All readings"]) +
        '<div class="oo-sh"><b>Speak</b><small>Talk and record</small></div>' +
        wide("juego-speaking.html", "thumb-speaking.webp", "Speaking Lab", "Read sentences out loud and earn points.") +
        '<div style="height:10px"></div>' +
        rail("Escape rooms", "Solve it in English", EN_ESC.map(function (x) { return { href: x[0], img: x[1], t: x[2], s: x[3] }; }));
    }
    return { title: own ? "English · On my own" : "English · My path", html: '<section class="wrap ms">' + html + "</section>" };
  }

  /* ---------- Matemáticas ---------- */
  var M_GAMES = [
    ["la-tiendita", "La Tiendita", "Sumas, dinero y cambio", "kids"],
    ["que-hora-es", "¿Qué hora es?", "Leer el reloj", "kids"],
    ["detective-patrones", "Detective de patrones", "Patrones y secuencias", "kids"],
    ["mision-matematica", "Misión Matemática", "Operaciones hasta la Luna", "kids children"],
    ["pizzeria-fracciones", "Pizzería de fracciones", "Fracciones", "children"],
    ["lluvia-de-numeros", "Lluvia de números", "Cálculo mental", "children"],
    ["la-balanza", "La Balanza", "Ecuaciones", "teens"],
    ["la-boveda", "La Bóveda", "Jerarquía, signos y porcentajes", "teens"]
  ];
  function mStage() {
    try { var M = window.MovaMath, d = M && M.load(), g = d && (d.g || d.grade); if (g && M.grades[g] && M.grades[g].s) return M.grades[g].s; } catch (e) {}
    return stage();
  }
  function glyph(g) { return String(g).replace(/<[^>]*mm-fr[^>]*>/, ""); }
  function vCuentaMath() {
    var st = mStage(), M = window.MovaMath || {}, E = M.ejes || {};
    var mine = M_GAMES.filter(function (x) { return x[3].indexOf(st) >= 0; }), rest = M_GAMES.filter(function (x) { return x[3].indexOf(st) < 0; });
    var gm = function (x) { return { href: "juego-" + x[0] + ".html", img: "thumb-" + x[0] + ".webp", t: x[1], s: x[2] }; };
    var ejes = "NFEJPAGD".split("").filter(function (k) { return E[k]; }).map(function (k) {
      var gl = k === "F" ? '<span class="fr">1<i></i>2</span>' : esc(E[k].g);
      return { href: "#/matematicas/habilidades/" + k, gl: gl, bg: E[k].c, t: E[k].n, s: "De lo básico a lo avanzado" };
    });
    return intro("#BDF0D8", PLUS, "Practica lo que quieras", "Juegos y temas para ti. Aquí nada se califica.") +
      rail("Juegos", "Para " + (st === "kids" ? "1° y 2° de primaria" : st === "children" ? "3° a 6° de primaria" : "secundaria y prepa"), mine.map(gm)) +
      rail("Practica un tema", "Elige un área", ejes, ["#/matematicas/habilidades", "Ver todo"]) +
      rail("Más juegos", "De otros grados", rest.map(gm)) +
      wide("#/matematicas/imprimir", "vitrina-practicas.webp", "Hojas para imprimir", "Hojas por grado y tema, con clave de respuestas.");
  }
  function mathTabs(on) { return seg(["#/matematicas", "Mi ruta"], ["#/matematicas/cuenta", "Por mi cuenta"], on); }

  function shapeMath(v, cuenta) {
    css();
    var html = v.html || "";
    var i = html.indexOf('class="mm-hero'); if (i < 0) return v;
    var start = html.lastIndexOf("<div", i), end = html.indexOf('<a class="mm-lu"', start);
    if (end < 0) end = html.indexOf('<div class="mm-sh"', start);
    if (end < 0) return v;
    var head = html.slice(0, end), body = html.slice(end);
    if (cuenta) {
      var close = body.lastIndexOf("</section>");
      v.html = head + mathTabs(1) + vCuentaMath() + (close >= 0 ? body.slice(close) : "</section>");
      v.title = "Matemáticas · Por mi cuenta";
      return v;
    }
    /* Mi ruta: se queda Math Level Up, la ruta y Repaso para exámenes; lo libre pasa a Por mi cuenta */
    body = body.replace(/<div class="mm-sh"><b>¿Qué quieres hacer hoy\?<\/b><small>[^<]*<\/small><\/div>/, '<div class="mm-sh"><b>Con tu maestra</b><small>Repasa los temas de tu examen del colegio.</small></div>')
      .replace(/<a class="mm-v" href="#\/matematicas\/habilidades">[\s\S]*?<\/span><\/span><\/span><\/a>/, "")
      .replace(/<a class="mm-v" href="#\/matematicas\/juegos">[\s\S]*?<\/span><\/span><\/span><\/a>/, "")
      .replace(/<a class="mm-mini" href="#\/matematicas\/imprimir">[\s\S]*?<\/a>/, "");
    var close2 = body.lastIndexOf("</section>");
    var note = '<p class="oo-note">¿Quieres practicar más? Entra a <a href="#/matematicas/cuenta" style="color:#4B3BB0;font-weight:800">Por mi cuenta</a>.</p>';
    body = close2 >= 0 ? body.slice(0, close2) + note + body.slice(close2) : body + note;
    v.html = head + mathTabs(0) + body;
    return v;
  }

  /* ---------- Conexión con la app ---------- */
  var mDone = false, eDone = false;
  function install() {
    if (typeof ROUTES !== "object" || !ROUTES) return false;
    if (!eDone) {
      ROUTES.english = function (p) { p = p || []; if (!isIn()) return ROUTES.library(["en"]); return vEnglish(p); };
      ROUTES.english.__gate = true; ROUTES.english.__oo = true; eDone = true;
    }
    if (!mDone && typeof ROUTES.matematicas === "function" && window.MovaMath && (/vHome/.test(String(ROUTES.matematicas)) || (tries > 8 && probe()))) {
      var prev = ROUTES.matematicas;
      var w = function (p) {
        p = p || [];
        if (!isIn()) return prev(p);
        try {
          if (p[0] === "cuenta") return shapeMath(prev([]), true);
          if (!p[0]) return shapeMath(prev([]), false);
        } catch (e) { if (window.console) console.error("MOVA cuenta", e); }
        return prev(p);
      };
      for (var k in prev) if (Object.prototype.hasOwnProperty.call(prev, k)) w[k] = prev[k];
      w.__oo = true; w.__gate = true; w.__ms = true; ROUTES.matematicas = w; mDone = true;
    }
    if (mDone && eDone) {
      if (/^#\/(english|matematicas)(\/(own|cuenta))?$/.test(location.hash) && typeof router === "function") router();
      return true;
    }
    return false;
  }
  function probe() { try { return isIn() && /mm-hero/.test(ROUTES.matematicas([]).html || ""); } catch (e) { return false; } }
  /* El inicio lleva a la nueva sección de inglés */
  function relink() {
    document.querySelectorAll('.mr-home a[href="#/library/en"], .mr-find a[href="#/library/en"]').forEach(function (a) { a.setAttribute("href", "#/english"); });
  }
  var tries = 0;
  function boot() { var ok = install(); if (!ok && ++tries < 80) setTimeout(boot, 250); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(boot, 0); }); else setTimeout(boot, 0);
  window.addEventListener("hashchange", function () { setTimeout(relink, 0); });
  new MutationObserver(function () { relink(); }).observe(document.documentElement, { childList: true, subtree: true });
})();
