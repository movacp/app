/* MOVA · Flashcards library (v76)
   Sección Flashcards de Learn con el diseño de Grammar: vitrina, etapas con
   ilustración, filtro por nivel y buscador. Lee los 36 mazos de My path
   (ruta-data.js) y los mazos extra (fc-extra.js); cada mazo se abre en
   ruta.html con los modos Study, Match y Quiz y comparte el avance. */
(function () {
  var css = "" +
    ".fx{padding-top:4px}" +
    ".fx-hero{position:relative;overflow:hidden;background:#1A1B2E;color:#fff;border-radius:30px;margin:0 0 14px;min-height:230px}" +
    ".fx-hero img{position:absolute;right:-6%;top:0;height:100%;width:auto;max-width:none;display:block}" +
    ".fx-hero:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#1A1B2E 0,#1A1B2E 38%,rgba(26,27,46,.65) 60%,rgba(26,27,46,0) 80%)}" +
    ".fx-in{position:relative;z-index:2;padding:24px 22px 24px;max-width:62%}" +
    ".fx-hero .k{display:inline-block;background:#FF8FC0;color:#15192B;border-radius:999px;padding:5px 12px;font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}" +
    ".fx-hero h1{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(30px,8.4vw,46px);line-height:.95;letter-spacing:-.025em;margin:12px 0 10px;color:#fff}" +
    ".fx-hero h1 em{font-style:normal;color:#D3F36B}" +
    ".fx-hero p{margin:0;color:#C9CCE0;font-size:14px;line-height:1.5}" +
    ".fx-stats{display:flex;gap:6px;margin-top:14px;flex-wrap:wrap}" +
    ".fx-stats span{background:rgba(255,255,255,.1);border-radius:999px;padding:6px 11px;font-size:12px;font-weight:700;color:#E6E2FF;white-space:nowrap}.fx-stats b{color:#fff}" +
    "@media(max-width:420px){.fx-in{max-width:100%}.fx-hero:after{background:linear-gradient(180deg,rgba(26,27,46,0) 0,rgba(26,27,46,0) 30%,#1A1B2E 54%)}.fx-hero img{right:-20%;top:-2%;height:56%}.fx-in{padding-top:96px}}" +
    ".fx-st{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0 0 14px}" +
    ".fx-s{display:block;padding:0;border:3px solid transparent;border-radius:22px;background:#fff;overflow:hidden;font:inherit;color:#15192B;cursor:pointer;text-align:left;box-shadow:0 10px 26px -18px rgba(54,40,120,.45);transition:transform .15s}" +
    ".fx-s:active{transform:scale(.97)}" +
    ".fx-s img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}" +
    ".fx-s span{display:block;padding:8px 10px 10px}" +
    ".fx-s b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:15.5px;line-height:1.1}" +
    ".fx-s small{display:block;font-size:11.5px;color:#6A6F85;font-weight:700;margin-top:2px;white-space:nowrap}" +
    ".fx-s[aria-selected=true]{border-color:#15192B;background:#15192B;color:#fff}.fx-s[aria-selected=true] small{color:#C9CCE0}" +
    ".fx-d{display:flex;align-items:center;gap:12px;background:#fff;border-radius:20px;padding:12px 14px 12px 12px;text-decoration:none;color:#15192B;box-shadow:0 8px 24px -18px rgba(54,40,120,.45);transition:transform .15s}" +
    ".fx-d:active{transform:scale(.98)}" +
    ".fx-c{position:relative;flex:none;width:46px;height:50px}" +
    ".fx-c i{position:absolute;inset:0;border-radius:11px;background:var(--b)}" +
    ".fx-c i:nth-child(1){transform:rotate(-12deg) translate(-3px,1px);opacity:.55}.fx-c i:nth-child(2){transform:rotate(7deg) translate(3px,0);opacity:.8}" +
    ".fx-c i:nth-child(3){background:var(--a);display:grid;place-items:center;overflow:hidden;font-style:normal;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#15192B}" +
    ".fx-c i img{width:100%;height:100%;object-fit:cover}.fx-c i svg{width:22px;height:22px}" +
    ".fx-d.ok .fx-c i:nth-child(3){background:#D3F36B}" +
    ".fx-sc{flex:none;font-size:11.5px;font-weight:800;padding:5px 9px;border-radius:999px;background:#FFE58A;color:#15192B}.fx-d.ok .fx-sc{background:#E4F8B0}" +
    ".fx-bn{display:inline-block;margin-left:6px;vertical-align:2px;font-family:'Plus Jakarta Sans',sans-serif;font-size:10.5px;font-weight:800;letter-spacing:.04em;padding:3px 7px;border-radius:999px;background:#15192B;color:#D3F36B}" +
    ".fx-m{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:16px 0 0}" +
    ".fx-m div{background:#fff;border-radius:18px;padding:12px 10px;box-shadow:0 8px 24px -20px rgba(54,40,120,.45)}" +
    ".fx-m i{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;margin-bottom:6px;color:#15192B}.fx-m i svg{width:18px;height:18px}" +
    ".fx-m b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:15px}.fx-m small{display:block;font-size:11.5px;color:#6A6F85;line-height:1.3;margin-top:2px}";
  var st = document.createElement("style"); st.id = "mova-flashcards"; st.textContent = css; document.head.appendChild(st);

  var SV = function (p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"; };
  var I = {
    back: SV('<path d="M15 18l-6-6 6-6"/>'), chev: SV('<path d="M9 18l6-6-6-6"/>'), check: SV('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    search: SV('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
    path: SV('<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 000-6H9a3 3 0 010-6h6.5"/>'),
    study: SV('<rect x="7" y="3" width="13" height="15" rx="2.5"/><path d="M4 7v11a3 3 0 0 0 3 3h9"/>'),
    match: SV('<rect x="3" y="4" width="7" height="6" rx="2"/><rect x="14" y="14" width="7" height="6" rx="2"/><path d="M10 7h3a3 3 0 0 1 3 3v4"/>'),
    quiz: SV('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/>'),
    star: '<svg viewBox="0 0 24 24" fill="#15192B" aria-hidden="true"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6-4.5-4.2 6.1-.7z"/></svg>'
  };
  var STAGES = [["kids", "Kids", "Ages 6–8", "fc-kids.webp"], ["children", "Children", "Ages 9–12", "fc-children.webp"], ["teens", "Teens", "Ages 12–17", "fc-teens.webp"]];
  var COL = { kids: ["#FFE58A", "#FFC7E2"], children: ["#C9D2FF", "#FFC7E2"], teens: ["#D3F36B", "#C9D2FF"] };
  var KEY = "mova-flash-view";

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function data() { return window.MOVA_PATH || null; }
  function extra() { return window.MOVA_FC_EXTRA || []; }
  function scores() { try { return (JSON.parse(localStorage.getItem("mova_ruta_v1") || "{}").vocab) || {}; } catch (e) { return {}; } }
  function saved() { try { return JSON.parse(sessionStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function save(o) { try { sessionStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function defaultStage() {
    try { var o = JSON.parse(localStorage.getItem("mova_ruta_v1") || "{}"); if (o.stage) return o.stage; } catch (e) {}
    try { var u = window.MovaAuth && MovaAuth.user(); if (u && u.stage) { var s = String(u.stage).toLowerCase(); if (/kid/.test(s)) return "kids"; if (/child/.test(s)) return "children"; if (/teen/.test(s)) return "teens"; } } catch (e) {}
    return "children";
  }

  function decksOf(D, stage, level) {
    var L = D[stage][level], out = (L.vocab || []).map(function (v, i) {
      return { n: v.n, w: v.w, href: "ruta.html#/vocab/" + stage + "/" + encodeURIComponent(level) + "/" + i + "/f", key: stage + "|" + level + "|" + i };
    });
    extra().forEach(function (x) { if (x.stage === stage && x.level === level) out.push({ n: x.n, w: x.w, sub: x.sub, bonus: true, href: "ruta.html#/xv/" + x.id + "/f", key: "x|" + x.id }); });
    return out;
  }

  function view(stage, level) {
    var D = data();
    if (!D) return { title: "Flashcards", html: '<section class="wrap fx"><p class="gr-none">Loading…</p></section>' };
    var sv = saved();
    stage = D[stage] ? stage : (D[sv.stage] ? sv.stage : defaultStage());
    if (!D[stage]) stage = "children";
    var levels = Object.keys(D[stage]);
    level = level && D[stage][level] ? level : (sv.stage === stage && (sv.level === "all" || D[stage][sv.level]) ? sv.level : "all");
    save({ stage: stage, level: level });
    var nd = 0, nw = 0; Object.keys(D).forEach(function (s) { Object.keys(D[s]).forEach(function (l) { decksOf(D, s, l).forEach(function (d) { nd++; nw += d.w.length; }); }); });
    var sc = scores(), col = COL[stage];

    var html = '<section class="wrap gr fx">' +
      '<div class="fx-hero"><img src="thumb-learn-flashcards-hd.webp" alt="" aria-hidden="true"><div class="fx-in">' +
        '<span class="k">Flashcards</span><h1>Learn words, <em>card by card</em></h1>' +
        "<p>Flip the cards, listen to every word, match them and check what you know.</p>" +
        '<div class="fx-stats"><span><b>' + nd + "</b> decks</span><span><b>" + nw + "</b> words</span><span><b>3</b> stages</span></div></div></div>" +
      '<div class="fx-st" role="tablist">' + STAGES.map(function (s) {
        return '<button type="button" role="tab" class="fx-s" data-s="' + s[0] + '" aria-selected="' + (s[0] === stage) + '"><img src="' + s[3] + '" alt="" loading="lazy"><span><b>' + s[1] + "</b><small>" + s[2] + "</small></span></button>";
      }).join("") + "</div>" +
      '<div class="gr-lv" role="group" aria-label="Level">' +
        '<button type="button" data-l="all" aria-pressed="' + (level === "all") + '">All levels</button>' +
        levels.map(function (l) { return '<button type="button" data-l="' + esc(l) + '" aria-pressed="' + (l === level) + '">' + esc(l) + "</button>"; }).join("") +
      "</div>" +
      '<label class="gr-search">' + I.search + '<input type="search" id="fx-q" placeholder="Search a word or a deck, like animals" aria-label="Search flashcards"></label>' +
      '<div id="fx-out">' +
      (level === "all" ? levels : [level]).map(function (l) {
        var ds = decksOf(D, stage, l);
        if (!ds.length) return "";
        return '<div class="gr-sec"><div class="gr-h"><b>' + esc(l) + " · " + esc(D[stage][l].name) + "</b><small>" + ds.length + " decks</small></div>" +
          '<div class="gr-list">' + ds.map(function (d) {
            var s = sc[d.key], ok = s != null && s >= 8, img = d.w[0] && d.w[0][2];
            var face = ok ? I.check : img ? '<img src="' + esc(img) + '" alt="">' : esc(d.w[0][0].charAt(0).toUpperCase());
            var words = d.w.map(function (x) { return x[0]; });
            return '<a class="fx-d' + (ok ? " ok" : "") + '" href="' + d.href + '" data-q="' + esc((d.n + " " + l + " " + words.join(" ")).toLowerCase()) + '">' +
              '<span class="fx-c" style="--a:' + col[0] + ";--b:" + col[1] + '"><i></i><i></i><i>' + face + "</i></span>" +
              '<span class="gr-tx"><b>' + esc(d.n) + (d.bonus ? '<span class="fx-bn">BONUS</span>' : "") + "</b><small>" + d.w.length + " words · " + esc(d.sub || words.slice(0, 3).join(", ") + "…") + "</small></span>" +
              (s != null ? '<span class="fx-sc">' + s + "/10</span>" : '<span class="gr-go">' + I.chev + "</span>") + "</a>";
          }).join("") + "</div></div>";
      }).join("") +
      "</div>" +
      '<p class="gr-none" id="fx-none" hidden>No decks match your search. Try another word or choose All levels.</p>' +
      '<div class="fx-m"><div><i style="background:#FFC7E2">' + I.study + '</i><b>Study</b><small>Flip and listen</small></div><div><i style="background:#C9D2FF">' + I.match + '</i><b>Match</b><small>Pair words and meanings</small></div><div><i style="background:#D3F36B">' + I.quiz + "</i><b>Quiz</b><small>Score saved in My path</small></div></div>" +
      '<a class="gr-path" href="ruta.html"><i>' + I.path + '</i><span><b>Follow your level in My path</b><small>Grammar, vocabulary and a final check, in order</small></span></a>' +
      "</section>";

    return {
      title: "Flashcards",
      html: html,
      mount: function (root) {
        [].forEach.call(root.querySelectorAll(".fx-s"), function (b) { b.addEventListener("click", function () { save({ stage: b.dataset.s, level: "all" }); rerender(); }); });
        [].forEach.call(root.querySelectorAll(".gr-lv button"), function (b) { b.addEventListener("click", function () { save({ stage: stage, level: b.dataset.l }); rerender(); }); });
        var q = root.querySelector("#fx-q"), none = root.querySelector("#fx-none");
        q.addEventListener("input", function () {
          var v = q.value.trim().toLowerCase(), any = false;
          [].forEach.call(root.querySelectorAll(".gr-sec"), function (sec) {
            var vis = false;
            [].forEach.call(sec.querySelectorAll(".fx-d"), function (a) { var ok = !v || a.dataset.q.indexOf(v) >= 0; a.hidden = !ok; if (ok) vis = true; });
            sec.hidden = !vis; if (vis) any = true;
          });
          none.hidden = any;
        });
        var on = root.querySelector('.gr-lv [aria-pressed="true"]'); if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
      }
    };
  }

  function rerender() {
    if (/^#\/flashcards\/./.test(location.hash)) history.replaceState(null, "", "#/flashcards");
    if (typeof router === "function") router();
  }
  /* enlaces viejos a mazos (#/flashcards/irregular-verbs, etc.) */
  var OLD = { "irregular-verbs": "ruta.html#/xv/irregular-verbs/f", "phrasal-verbs": "ruta.html#/xv/phrasal-verbs/f", "academic-words": "ruta.html#/xv/academic-words/f",
    "first-words": "ruta.html#/vocab/kids/Pre-A1/0/f", "school-and-classroom": "ruta.html#/vocab/kids/A1/0/f", "feelings": "ruta.html#/vocab/kids/A1%2B/0/f" };
  function install() {
    if (typeof ROUTES !== "object") return false;
    if (ROUTES.flashcards && ROUTES.flashcards.__fx) return false;
    var fn = function (p) {
      p = p || [];
      var D = data();
      if (p[0] && OLD[p[0]]) { location.replace(OLD[p[0]]); return { title: "Flashcards", html: "" }; }
      if (p[0] && D && D[p[0]]) return view(p[0], p[1] ? decodeURIComponent(p[1]) : null);
      return view(null, null);
    };
    fn.__fx = true;
    ROUTES.flashcards = fn;
    return true;
  }
  function boot() { if (install() && /^#\/flashcards/.test(location.hash) && typeof router === "function") router(); }
  boot();
  window.addEventListener("load", function () { setTimeout(boot, 0); });
})();
