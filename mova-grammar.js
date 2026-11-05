/* MOVA · Grammar library (v72)
   La sección Grammar de Learn lee los mismos temas de My path (ruta-data.js):
   pestañas Kids / Children / Teens, filtro por nivel, buscador y cada tema
   abre la lección completa en ruta.html (explicación, Sentence Builder y quiz). */
(function () {
  var css = "" +
    ".gr{padding-top:4px}" +
    ".gr-back{display:inline-flex;align-items:center;gap:6px;background:#fff;border-radius:999px;padding:8px 14px 8px 10px;font-weight:800;font-size:14px;color:#15192B;text-decoration:none;margin:2px 0 12px;box-shadow:0 6px 18px -14px rgba(54,40,120,.5)}" +
    ".gr-back svg{width:18px;height:18px}" +
    ".gr-hero{position:relative;overflow:hidden;background:#15192B;color:#fff;border-radius:30px;padding:24px 22px 26px;margin:0 0 14px}" +
    ".gr-hero .k{display:inline-block;background:#D3F36B;color:#15192B;border-radius:999px;padding:5px 12px;font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}" +
    ".gr-hero h1{position:relative;z-index:2;font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(32px,9vw,46px);line-height:.95;letter-spacing:-.025em;margin:12px 0 10px;color:#fff;max-width:11ch}" +
    ".gr-hero h1 em{font-style:normal;color:#D3F36B}" +
    ".gr-hero p{position:relative;z-index:2;margin:0;color:#C9CCE0;font-size:14.5px;line-height:1.5;max-width:30ch}" +
    ".gr-ring{position:absolute;right:-60px;top:-70px;width:220px;height:220px;border-radius:50%;border:44px solid #2A2E52}" +
    ".gr-d{position:absolute;border-radius:50%}.gr-d.a{width:14px;height:14px;background:#FF8FC8;right:34px;top:150px}.gr-d.b{width:10px;height:10px;background:#FFE58A;right:120px;top:40px}" +
    ".gr-aa{position:absolute;right:22px;bottom:16px;z-index:1;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:64px;line-height:1;color:#B9A6FF;opacity:.9;transform:rotate(-8deg)}" +
    ".gr-stats{display:flex;gap:8px;margin-top:16px;position:relative;z-index:2;flex-wrap:wrap}" +
    ".gr-stats span{background:rgba(255,255,255,.08);border-radius:999px;padding:6px 12px;font-size:12.5px;font-weight:700;color:#E6E2FF}" +
    ".gr-stats b{color:#fff}" +
    ".gr-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;background:#fff;border-radius:24px;padding:7px;margin:0 0 14px;box-shadow:0 10px 30px -18px rgba(54,40,120,.35)}" +
    ".gr-tab{display:flex;flex-direction:column;align-items:flex-start;gap:2px;padding:10px 10px 11px;border-radius:18px;border:0;background:none;font:inherit;color:#15192B;cursor:pointer;text-align:left;min-width:0}" +
    ".gr-tab i{width:34px;height:34px;border-radius:12px;display:grid;place-items:center;margin-bottom:6px;font-style:normal;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:15px;color:#15192B}" +
    ".gr-tab b{font-family:'Bricolage Grotesque',sans-serif;font-size:16px;line-height:1.1}" +
    ".gr-tab small{font-size:11.5px;color:#6A6F85;font-weight:600;white-space:nowrap}" +
    ".gr-tab[aria-selected=true]{background:#15192B;color:#fff}.gr-tab[aria-selected=true] small{color:#C9CCE0}" +
    ".gr-lv{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 10px;margin:0 -2px 4px;scrollbar-width:none}.gr-lv::-webkit-scrollbar{display:none}" +
    ".gr-lv button{flex:none;border:2px solid #ECE9F3;background:#fff;border-radius:999px;padding:8px 14px;font:inherit;font-weight:800;font-size:13.5px;color:#15192B;cursor:pointer}" +
    ".gr-lv button[aria-pressed=true]{background:#15192B;border-color:#15192B;color:#fff}" +
    ".gr-search{display:flex;align-items:center;gap:10px;background:#fff;border:2px solid #ECE9F3;border-radius:999px;padding:0 16px;margin:0 0 6px;color:#6A6F85}" +
    ".gr-search svg{width:19px;height:19px;flex:none}" +
    ".gr-search input{flex:1;border:0;outline:0;background:none;font:inherit;font-size:15.5px;padding:13px 0;color:#15192B;min-width:0}" +
    ".gr-search:focus-within{border-color:#B9A6FF}" +
    ".gr-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin:20px 4px 10px}" +
    ".gr-h b{font-family:'Bricolage Grotesque',sans-serif;font-size:20px;letter-spacing:-.01em;color:#15192B}" +
    ".gr-h small{font-size:12.5px;font-weight:700;color:#6A6F85}" +
    ".gr-list{display:grid;gap:10px}" +
    "@media(min-width:720px){.gr-list{grid-template-columns:repeat(2,minmax(0,1fr))}}" +
    ".gr-t{display:flex;align-items:center;gap:12px;background:#fff;border-radius:20px;padding:12px 14px 12px 12px;text-decoration:none;color:#15192B;box-shadow:0 8px 24px -18px rgba(54,40,120,.45);transition:transform .15s}" +
    ".gr-t:active{transform:scale(.98)}" +
    ".gr-n{flex:none;width:40px;height:40px;border-radius:14px;display:grid;place-items:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;background:var(--c);color:#15192B}" +
    ".gr-n svg{width:20px;height:20px}" +
    ".gr-t.ok .gr-n{background:#D3F36B}" +
    ".gr-tx{flex:1;min-width:0}" +
    ".gr-tx b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:16.5px;line-height:1.15;letter-spacing:-.01em}" +
    ".gr-tx small{display:block;margin-top:3px;font-size:13px;color:#6A6F85;line-height:1.3}" +
    ".gr-go{flex:none;color:#B5B8C8}.gr-go svg{width:20px;height:20px;display:block}" +
    ".gr-path{display:flex;align-items:center;gap:12px;background:#E6E2FF;border-radius:22px;padding:14px 16px;margin:16px 0 0;text-decoration:none;color:#15192B}" +
    ".gr-path b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:16.5px}" +
    ".gr-path small{display:block;font-size:13px;color:#4E5268}" +
    ".gr-path i{flex:none;width:40px;height:40px;border-radius:14px;background:#15192B;display:grid;place-items:center;color:#D3F36B}.gr-path i svg{width:20px;height:20px}" +
    ".gr-none{text-align:center;color:#6A6F85;margin:28px 0}";
  var st = document.createElement("style"); st.id = "mova-grammar"; st.textContent = css; document.head.appendChild(st);

  var SV = function (p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"; };
  var I = {
    back: SV('<path d="M15 18l-6-6 6-6"/>'),
    chev: SV('<path d="M9 18l6-6-6-6"/>'),
    check: SV('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    search: SV('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
    path: SV('<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 000-6H9a3 3 0 010-6h6.5"/>')
  };
  var STAGES = [["kids", "Kids", "Ages 6–8", "#FFC7E2", "K"], ["children", "Children", "Ages 9–12", "#C9D2FF", "C"], ["teens", "Teens", "Ages 12–17", "#D3F36B", "T"]];
  var COLOR = { kids: "#FFE1EF", children: "#E3E7FF", teens: "#EEF9C8" };
  var KEY = "mova-grammar-view";

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function data() { return window.MOVA_PATH || null; }
  function done() { try { return (JSON.parse(localStorage.getItem("mova_ruta_v1") || "{}").done) || {}; } catch (e) { return {}; } }
  function saved() { try { return JSON.parse(sessionStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function save(o) { try { sessionStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function defaultStage() {
    try { var o = JSON.parse(localStorage.getItem("mova_ruta_v1") || "{}"); if (o.stage) return o.stage; } catch (e) {}
    try { var u = window.MovaAuth && MovaAuth.user(); if (u && u.stage) { var s = String(u.stage).toLowerCase(); if (/kid/.test(s)) return "kids"; if (/child/.test(s)) return "children"; if (/teen/.test(s)) return "teens"; } } catch (e) {}
    return "children";
  }

  function view(stage, level) {
    var D = data();
    if (!D) return { title: "Grammar", html: '<section class="wrap gr"><p class="gr-none">Loading…</p></section>' };
    var sv = saved();
    stage = D[stage] ? stage : (D[sv.stage] ? sv.stage : defaultStage());
    if (!D[stage]) stage = "children";
    var levels = Object.keys(D[stage]);
    level = level && D[stage][level] ? level : (sv.stage === stage && (sv.level === "all" || D[stage][sv.level]) ? sv.level : "all");
    save({ stage: stage, level: level });
    var total = 0; Object.keys(D).forEach(function (s) { Object.keys(D[s]).forEach(function (l) { total += D[s][l].topics.length; }); });
    var dn = done();

    var html = '<section class="wrap gr">' +
            '<div class="gr-hero"><span class="gr-ring"></span><span class="gr-d a"></span><span class="gr-d b"></span>' +
        '<span class="k">Grammar</span><h1>Every rule, <em>step by step</em></h1>' +
        "<p>Read the explanation, look at the examples, build sentences and check what you know.</p>" +
        '<div class="gr-stats"><span><b>' + total + "</b> topics</span><span><b>3</b> stages</span><span><b>18</b> levels</span></div></div>" +
      '<div class="gr-tabs" role="tablist">' + STAGES.map(function (s) {
        return '<button type="button" role="tab" class="gr-tab" data-s="' + s[0] + '" aria-selected="' + (s[0] === stage) + '"><i style="background:' + s[3] + '">' + s[4] + "</i><b>" + s[1] + "</b><small>" + s[2] + "</small></button>";
      }).join("") + "</div>" +
      '<div class="gr-lv" role="group" aria-label="Level">' +
        '<button type="button" data-l="all" aria-pressed="' + (level === "all") + '">All levels</button>' +
        levels.map(function (l) { return '<button type="button" data-l="' + esc(l) + '" aria-pressed="' + (l === level) + '">' + esc(l) + "</button>"; }).join("") +
      "</div>" +
      '<label class="gr-search">' + I.search + '<input type="search" id="gr-q" placeholder="Search a topic, like past simple" aria-label="Search a grammar topic"></label>' +
      '<div id="gr-out">' +
      (level === "all" ? levels : [level]).map(function (l) {
        var L = D[stage][l], ts = L.topics.filter(function (t) { return t.exp; });
        if (!ts.length) return "";
        var nd = ts.filter(function (t) { return dn[t.id]; }).length;
        return '<div class="gr-sec"><div class="gr-h"><b>' + esc(l) + " · " + esc(L.name) + "</b><small>" + (nd ? nd + " of " : "") + ts.length + " topics</small></div>" +
          '<div class="gr-list">' + ts.map(function (t, i) {
            var ok = !!dn[t.id];
            return '<a class="gr-t' + (ok ? " ok" : "") + '" href="ruta.html#/t/' + encodeURIComponent(t.id) + '/g" data-q="' + esc((t.t + " " + (t.s || "") + " " + l).toLowerCase()) + '">' +
              '<span class="gr-n" style="--c:' + COLOR[stage] + '">' + (ok ? I.check : i + 1) + "</span>" +
              '<span class="gr-tx"><b>' + esc(t.t) + "</b><small>" + esc(t.s || "") + "</small></span>" +
              '<span class="gr-go">' + I.chev + "</span></a>";
          }).join("") + "</div></div>";
      }).join("") +
      "</div>" +
      '<p class="gr-none" id="gr-none" hidden>No topics match your search. Try another word or choose All levels.</p>' +
      '<a class="gr-path" href="ruta.html"><i>' + I.path + '</i><span><b>Follow your level in My path</b><small>Your topics in order, with badges and a final check</small></span></a>' +
      "</section>";

    return {
      title: "Grammar",
      html: html,
      mount: function (root) {
        [].forEach.call(root.querySelectorAll(".gr-tab"), function (b) {
          b.addEventListener("click", function () { save({ stage: b.dataset.s, level: "all" }); rerender(); });
        });
        [].forEach.call(root.querySelectorAll(".gr-lv button"), function (b) {
          b.addEventListener("click", function () { save({ stage: stage, level: b.dataset.l }); rerender(); });
        });
        var q = root.querySelector("#gr-q"), none = root.querySelector("#gr-none");
        q.addEventListener("input", function () {
          var v = q.value.trim().toLowerCase(), any = false;
          [].forEach.call(root.querySelectorAll(".gr-sec"), function (sec) {
            var vis = false;
            [].forEach.call(sec.querySelectorAll(".gr-t"), function (a) { var ok = !v || a.dataset.q.indexOf(v) >= 0; a.hidden = !ok; if (ok) vis = true; });
            sec.hidden = !vis; if (vis) any = true;
          });
          none.hidden = any;
        });
        var on = root.querySelector('.gr-lv [aria-pressed="true"]'); if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
      }
    };
  }

  function rerender() {
    if (/^#\/structures\/./.test(location.hash)) { history.replaceState(null, "", "#/structures"); }
    if (typeof router === "function") router();
  }
  var prev = null;
  function install() {
    if (typeof ROUTES !== "object") return false;
    if (ROUTES.structures && ROUTES.structures.__gr) return false;
    prev = ROUTES.structures;
    var fn = function (p) {
      p = p || [];
      var D = data();
      if (p[0] && D && !D[p[0]] && typeof prev === "function") return prev(p); /* enlaces viejos a una estructura */
      return view(p[0], p[1] ? decodeURIComponent(p[1]) : null);
    };
    fn.__gr = true;
    ROUTES.structures = fn;
    return true;
  }
  function boot() { if (install() && /^#\/structures/.test(location.hash) && typeof router === "function") router(); }
  boot();
  window.addEventListener("load", function () { setTimeout(boot, 0); });
})();
