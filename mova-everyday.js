/* MOVA Learning Studio · Everyday English (v119, nov 2026)
   Ruta #/everyday · situaciones de la vida real por etapa (Kids, Children, Teens).
   Cada situación: 1 Watch (diálogo con audio) · 2 Key phrases · 3 What do you say? · 4 Your turn (micrófono) → sello en el pasaporte.
   Contenido en ee-data.js · audios en ee-audio/<id>-<n>.mp3 (n = línea, desde 1). Progreso en localStorage "mova_ee_v1". */
(function () {
  "use strict";
  var KEY = "mova_ee_v1";
  var STAGES = [["kids", "Kids", "Ages 6–8"], ["children", "Children", "Ages 9–12"], ["teens", "Teens", "Ages 12–17"]];
  function D() { return window.EE_DATA || { cast: {}, stages: { kids: [], children: [], teens: [] } }; }
  function store() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function keep(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function rich(s) { return esc(s).replace(/&lt;(\/?)mark&gt;/g, "<$1mark>"); }
  function plain(s) { return String(s).replace(/<[^>]+>/g, ""); }
  function img(k) { return "buddy-" + k + ".webp"; }
  function cast(k) { return D().cast[k] || [k, "nova"]; }
  function find(id) { var S = D().stages; for (var st in S) for (var i = 0; i < S[st].length; i++) if (S[st][i].id === id) return { s: S[st][i], st: st }; return null; }
  function userStage() {
    var o = store(); if (o.stage) return o.stage;
    try { var r = JSON.parse(localStorage.getItem("mova_ruta_v1") || "{}"); if (/^(kids|children|teens)$/.test(r.stage)) return r.stage; } catch (e) {}
    try { var u = window.MovaAuth && MovaAuth.user(); if (u && u.stage) { var s = String(u.stage).toLowerCase(); if (/kid/.test(s)) return "kids"; if (/child/.test(s)) return "children"; if (/teen/.test(s)) return "teens"; } } catch (e) {}
    return "children";
  }

  var IC = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l12 7-12 7z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    spk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    chk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>'
  };

  var CSS = "" +
    ".ee{font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#15192B;max-width:620px;margin:0 auto;padding:4px 16px 120px}" +
    ".ee *{box-sizing:border-box}.ee button{font:inherit;color:inherit;cursor:pointer}" +
    ".ee h1,.ee h2,.ee h3{font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;margin:0}" +
    ".ee-hero{position:relative;overflow:hidden;background:#15192B;color:#fff;border-radius:30px;padding:22px 20px;min-height:200px;margin-bottom:14px}" +
    ".ee-hero .k{display:inline-block;background:#D3F36B;color:#15192B;border-radius:999px;padding:7px 13px;font-weight:800;font-size:11px;letter-spacing:.1em}" +
    ".ee-hero h1{font-size:clamp(30px,8.5vw,42px);line-height:.98;margin:12px 0 10px;max-width:62%;color:#fff}.ee-hero h1 em{font-style:normal;color:#D3F36B}" +
    ".ee-hero p{margin:0;color:#C9CCE0;font-size:14px;line-height:1.5;max-width:58%}" +
    ".ee-hero img{position:absolute;right:4px;bottom:-6px;width:36%;max-width:170px}" +
    ".ee-hero .ring{position:absolute;width:130px;height:130px;border-radius:50%;border:22px solid #262B45;right:-44px;top:-50px}" +
    ".ee-pass{display:flex;align-items:center;gap:14px;background:#fff;border-radius:22px;padding:14px 16px;margin:0 0 14px}" +
    ".ee-pass b{display:block;font-size:15px;font-family:'Bricolage Grotesque',sans-serif}.ee-pass small{color:#5B6078;font-size:12.5px}" +
    ".ee-pass .stamps{display:flex;gap:6px;flex-wrap:wrap;flex:1;justify-content:flex-end}" +
    ".ee-pass .st{width:28px;height:28px;border-radius:50%;border:2px dashed #C9C4DB}" +
    ".ee-pass .st.on{border:0;background:#FF8FC0;display:grid;place-items:center;color:#15192B}.ee-pass .st.on svg{width:15px;height:15px}" +
    ".ee-seg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;background:#fff;border-radius:999px;padding:4px;margin-bottom:14px}" +
    ".ee-seg button{border:0;background:transparent;height:42px;border-radius:999px;font-weight:700;font-size:14px}" +
    ".ee-seg button[aria-pressed=true]{background:#15192B;color:#fff;box-shadow:0 3px 0 #D3F36B}" +
    ".ee-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}" +
    ".ee-sit{position:relative;border-radius:24px;padding:14px;text-align:left;min-height:178px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;color:#15192B;text-decoration:none;transition:transform .15s}" +
    ".ee-sit:active{transform:scale(.98)}.ee-sit img{position:absolute;right:-4px;top:8px;width:52%;max-width:120px}" +
    ".ee-sit b{font-family:'Bricolage Grotesque',sans-serif;font-size:18px;line-height:1.1;position:relative}" +
    ".ee-sit small{display:block;font-size:12px;font-weight:600;opacity:.78;margin-top:3px;position:relative}" +
    ".ee-sit .done{position:absolute;left:12px;top:12px;background:#15192B;color:#D3F36B;border-radius:999px;padding:5px 10px;font-size:11px;font-weight:800}" +
    ".ee-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 0 10px}" +
    ".ee-top b{font-family:'Bricolage Grotesque',sans-serif;font-size:20px}.ee-top small{font-weight:700;font-size:12px;color:#5B6078}" +
    ".ee-steps{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;margin:0 0 14px}" +
    ".ee-steps span{height:6px;border-radius:99px;background:#E2DFEE}.ee-steps span.on{background:#15192B}" +
    ".ee-scene{position:relative;border-radius:26px;padding:16px;overflow:hidden;margin-bottom:12px;color:#15192B}" +
    ".ee-scene .lb{font-weight:800;font-size:11.5px;letter-spacing:.1em}" +
    ".ee-scene h2{font-size:24px;margin:4px 0 4px}.ee-scene p{margin:0;font-size:13.5px;color:#33384D;line-height:1.45}" +
    ".ee-cast{display:flex;justify-content:space-around;margin-top:10px}" +
    ".ee-cast div{text-align:center;font-size:12px;font-weight:800}" +
    ".ee-cast span{display:grid;place-items:center;width:104px;height:104px;border-radius:50%;background:rgba(255,255,255,.72);margin:0 auto 5px}" +
    ".ee-cast img{width:80px;height:80px;object-fit:contain;display:block}" +
    ".ee-chat{display:flex;flex-direction:column;gap:10px;margin:12px 0}" +
    ".ee-msg{display:flex;gap:8px;align-items:flex-end;max-width:90%}.ee-msg.r{align-self:flex-end;flex-direction:row-reverse}" +
    ".ee-msg img{width:38px;height:38px;object-fit:contain;flex:none}" +
    ".ee-bub{border:0;text-align:left;background:#fff;border-radius:18px 18px 18px 6px;padding:10px 13px;font-size:15px;line-height:1.4;font-weight:600;box-shadow:0 8px 20px -16px rgba(40,30,90,.5);transition:transform .2s,box-shadow .2s}" +
    ".ee-bub small{display:block;font-size:11px;font-weight:800;color:#6B6F94;margin-bottom:2px}" +
    ".ee-msg.r .ee-bub{border-radius:18px 18px 6px 18px;background:#E6E2FF}" +
    ".ee-bub.now{box-shadow:0 0 0 3px #D3F36B;transform:scale(1.02)}" +
    ".ee mark{background:#FFE58A;color:#15192B;border-radius:5px;padding:0 3px}" +
    ".ee-main{width:100%;min-height:52px;border:0;border-radius:16px;background:#15192B;color:#fff!important;font-weight:800;font-size:15.5px;box-shadow:0 3px 0 #D3F36B;display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none}" +
    ".ee-main svg{width:18px;height:18px}" +
    ".ee-ghost{width:100%;min-height:48px;border:1.5px solid #15192B;border-radius:16px;background:#fff;font-weight:800;font-size:15px;margin-top:10px}" +
    ".ee-lbl{font-weight:800;font-size:12.5px;letter-spacing:.08em;color:#5B6078;margin:6px 2px 10px}" +
    ".ee-ph{display:grid;grid-template-columns:44px 1fr;gap:12px;align-items:center;background:#fff;border-radius:20px;padding:12px 14px;margin-bottom:10px}" +
    ".ee-ph button{width:44px;height:44px;border-radius:14px;border:0;background:#E6E2FF;display:grid;place-items:center}.ee-ph button svg{width:18px;height:18px}" +
    ".ee-ph b{display:block;font-size:16px}.ee-ph small{color:#5B6078;font-size:13px}" +
    ".ee-q{background:#fff;border-radius:22px;padding:16px}" +
    ".ee-q .s2{display:flex;gap:12px;align-items:center;margin-bottom:12px}.ee-q .s2 img{width:62px;height:62px;object-fit:contain;flex:none}" +
    ".ee-q .s2 p{margin:0;font-weight:700;font-size:15.5px;line-height:1.4}" +
    ".ee-opt{display:block;width:100%;text-align:left;border:2px solid #ECE9F4;background:#fff;border-radius:16px;padding:13px 14px;font-weight:700;font-size:15px;margin-top:8px;min-height:48px}" +
    ".ee-opt.ok{border-color:#3FAF6C;background:#E4F7EC}.ee-opt.no{border-color:#E5484D;background:#FDE8EA}" +
    ".ee-fb{margin-top:10px;font-size:13.5px;font-weight:700;min-height:20px}" +
    ".ee-mic{width:96px;height:96px;border-radius:50%;border:0;background:#FF8FC0;color:#15192B;display:grid;place-items:center;margin:16px auto 8px;box-shadow:0 8px 0 #E46FA4}" +
    ".ee-mic svg{width:40px;height:40px}.ee-mic.on{animation:eepulse 1s infinite}" +
    "@keyframes eepulse{0%,100%{box-shadow:0 8px 0 #E46FA4,0 0 0 0 rgba(255,143,192,.6)}50%{box-shadow:0 8px 0 #E46FA4,0 0 0 18px rgba(255,143,192,0)}}" +
    ".ee-hint{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:8px}" +
    ".ee-hint span{background:#FFE58A;border-radius:999px;padding:6px 11px;font-weight:700;font-size:13px}" +
    ".ee-heard{text-align:center;font-size:14px;color:#5B6078;min-height:22px;margin-top:8px}" +
    ".ee-win{text-align:center;padding:10px 0}" +
    ".ee-stamp{width:176px;height:176px;margin:10px auto 4px;border-radius:50%;border:6px dashed #FF8FC0;display:grid;place-items:center;transform:rotate(-12deg);animation:eepop .6s cubic-bezier(.2,1.6,.4,1);background:#fff}" +
    ".ee-stamp div{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;color:#D23C82;font-size:21px;line-height:1.05}" +
    ".ee-stamp div small{display:block;font-size:11.5px;letter-spacing:.14em;margin-top:5px}" +
    "@keyframes eepop{0%{transform:rotate(-12deg) scale(2.2);opacity:0}100%{transform:rotate(-12deg) scale(1);opacity:1}}" +
    ".ee-win h2{font-size:28px;margin:14px 0 4px}.ee-win p{color:#5B6078;margin:0 0 16px}" +
    ".ee-tip{background:#fff;border-left:5px solid #FF8FC0;border-radius:16px;padding:12px 14px;font-size:13.5px;line-height:1.45;margin:12px 0}" +
    ".rh-card.ee-card{position:relative}.rh-card.ee-card .ee-new{position:absolute;right:12px;top:12px;font:800 11.5px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.06em;padding:8px 12px;border-radius:999px;background:#FF8FC0;color:#1A1B2E;z-index:2}" +
    ":root[data-theme=\"dark\"] .ee{color:#F5F3FA}" +
    ":root[data-theme=\"dark\"] .ee-pass,:root[data-theme=\"dark\"] .ee-seg,:root[data-theme=\"dark\"] .ee-ph,:root[data-theme=\"dark\"] .ee-q,:root[data-theme=\"dark\"] .ee-bub,:root[data-theme=\"dark\"] .ee-opt,:root[data-theme=\"dark\"] .ee-tip,:root[data-theme=\"dark\"] .ee-ghost{background:#23263A;color:#F5F3FA;border-color:#3A3F5C}" +
    ":root[data-theme=\"dark\"] .ee-msg.r .ee-bub{background:#3B3570}:root[data-theme=\"dark\"] .ee-bub small,:root[data-theme=\"dark\"] .ee-pass small,:root[data-theme=\"dark\"] .ee-ph small,:root[data-theme=\"dark\"] .ee-lbl,:root[data-theme=\"dark\"] .ee-top small,:root[data-theme=\"dark\"] .ee-win p,:root[data-theme=\"dark\"] .ee-heard{color:#A9ADC4}" +
    ":root[data-theme=\"dark\"] .ee-seg button[aria-pressed=true]{background:#D3F36B;color:#15192B}:root[data-theme=\"dark\"] .ee-opt.ok{background:#1E4A33}:root[data-theme=\"dark\"] .ee-opt.no{background:#4A1E24}" +
    ":root[data-theme=\"dark\"] .ee-main{background:#D3F36B;color:#15192B!important;box-shadow:none}";
  function css() { if (document.getElementById("ee-css")) return; var s = document.createElement("style"); s.id = "ee-css"; s.textContent = CSS; document.head.appendChild(s); }

  /* ---------- Audio ---------- */
  var AU = null, chain = 0;
  function stopAll() { chain++; if (AU) { try { AU.pause(); } catch (e) {} AU = null; } try { speechSynthesis.cancel(); } catch (e) {} }
  function speak(text, cb) {
    try { var u = new SpeechSynthesisUtterance(plain(text)); u.lang = "en-US"; u.rate = 0.92; if (cb) u.onend = cb; speechSynthesis.speak(u); }
    catch (e) { if (cb) setTimeout(cb, 1200); }
  }
  function playLine(s, i, cb) {
    stopAll(); var my = chain, done = false;
    var fin = function () { if (done || my !== chain) return; done = true; if (cb) cb(); };
    var a = new Audio("ee-audio/" + s.id + "-" + (i + 1) + ".mp3"); AU = a;
    a.onended = fin;
    a.onerror = function () { if (my !== chain || done) return; AU = null; speak(s.lines[i][1], fin); };
    var p = a.play(); if (p && p.catch) p.catch(function () { if (my !== chain || done) return; AU = null; speak(s.lines[i][1], fin); });
  }

  /* ---------- Home ---------- */
  var CUR = null;
  function homeView() {
    var st = CUR || userStage(); CUR = st;
    var list = D().stages[st] || [], done = store().done || {};
    var n = list.filter(function (s) { return done[s.id]; }).length;
    var h = '<div class="ee">' +
      '<section class="ee-hero"><span class="ring"></span><span class="k">ENGLISH FOR REAL LIFE</span><h1>Everyday <em>English</em></h1><p>Real situations. Real phrases. Say it like you mean it.</p><img src="' + img("pop") + '" alt=""></section>' +
      '<div class="ee-pass"><div><b>My passport</b><small>' + n + " of " + list.length + ' stamps</small></div><div class="stamps">' +
      list.map(function (s) { return '<span class="st' + (done[s.id] ? " on" : "") + '">' + (done[s.id] ? IC.chk : "") + "</span>"; }).join("") + "</div></div>" +
      '<div class="ee-seg" role="group" aria-label="Stage">' + STAGES.map(function (x) { return '<button type="button" data-stage="' + x[0] + '" aria-pressed="' + (st === x[0]) + '">' + x[1] + "</button>"; }).join("") + "</div>" +
      '<div class="ee-grid">' + list.map(function (s) {
        return '<a class="ee-sit" href="#/everyday/' + s.id + '" style="background:' + s.card + '">' + (done[s.id] ? '<span class="done">Stamped</span>' : "") +
          '<img src="' + img(s.hero) + '" alt="" loading="lazy"><b>' + esc(s.title) + "</b><small>" + esc(s.sub) + "</small></a>";
      }).join("") + "</div></div>";
    return { html: h, mount: function (root) {
      [].forEach.call(root.querySelectorAll("[data-stage]"), function (b) {
        b.onclick = function () { CUR = b.dataset.stage; var o = store(); o.stage = CUR; keep(o); var v = homeView(); root.innerHTML = v.html; v.mount(root); };
      });
    } };
  }

  /* ---------- Situación ---------- */
  function sitView(id) {
    var F = find(id); if (!F) return homeView();
    var s = F.s, who = s.who.map(cast), me = s.who.length - 1;
    var S = { step: 0, q: 0, ok: 0, r: 0 };
    function sideOf(spk) { return spk === me ? " r" : ""; }
    function steps() { return '<div class="ee-steps">' + [0, 1, 2, 3, 4].map(function (i) { return '<span class="' + (i <= S.step ? "on" : "") + '"></span>'; }).join("") + "</div>"; }
    function top() { return '<div class="ee-top"><b>' + esc(s.title) + "</b><small>" + (S.step < 4 ? "Step " + (S.step + 1) + " of 4" : "Done!") + "</small></div>" + steps(); }
    function html() {
      var h = top();
      if (S.step === 0) {
        h += '<div class="ee-scene" style="background:' + s.scene + '"><span class="lb">STEP 1 · WATCH</span><h2>' + esc(s.place) + "</h2><p>" + esc(s.intro) + '</p><div class="ee-cast">' +
          who.map(function (c) { return '<div><span><img src="' + img(c[1]) + '" alt=""></span>' + esc(c[0]) + "</div>"; }).join("") + "</div></div>" +
          '<button type="button" class="ee-main" data-all>' + IC.play + "<span>Play the conversation</span></button>" +
          '<div class="ee-chat">' + s.lines.map(function (l, i) {
            var c = who[l[0]];
            return '<div class="ee-msg' + sideOf(l[0]) + '"><img src="' + img(c[1]) + '" alt=""><button type="button" class="ee-bub" data-line="' + i + '"><small>' + esc(c[0]) + "</small>" + rich(l[1]) + "</button></div>";
          }).join("") + "</div>" +
          '<div class="ee-tip">Tap any bubble to hear it again. The <mark>yellow words</mark> are today’s key phrases.</div>' +
          '<button type="button" class="ee-main" data-next>Next: key phrases</button>';
      } else if (S.step === 1) {
        h += '<div class="ee-lbl">STEP 2 · KEY PHRASES</div>' + s.phrases.map(function (p) {
          return '<div class="ee-ph"><button type="button" data-line="' + p[2] + '" aria-label="Listen">' + IC.spk + "</button><div><b>" + esc(p[0]) + "</b><small>" + esc(p[1]) + "</small></div></div>";
        }).join("") + '<button type="button" class="ee-main" data-next>Practice</button>';
      } else if (S.step === 2) {
        var q = s.quiz[S.q];
        h += '<div class="ee-lbl">STEP 3 · WHAT DO YOU SAY? · ' + (S.q + 1) + " / " + s.quiz.length + '</div><div class="ee-q"><div class="s2"><img src="' + img(who[0][1]) + '" alt=""><p>' + esc(q[0]) + "</p></div>" +
          q[1].map(function (o, i) { return '<button type="button" class="ee-opt" data-opt="' + i + '">' + esc(o) + "</button>"; }).join("") + '<div class="ee-fb" aria-live="polite"></div></div>';
      } else if (S.step === 3) {
        var r = s.role[S.r], L = s.lines[r[0]], c = who[L[0]];
        h += '<div class="ee-lbl">STEP 4 · YOUR TURN · ' + (S.r + 1) + " / " + s.role.length + '</div><div class="ee-q" style="text-align:center">' +
          '<div class="ee-msg"><img src="' + img(c[1]) + '" alt=""><button type="button" class="ee-bub" data-line="' + r[0] + '"><small>' + esc(c[0]) + "</small>" + esc(plain(L[1])) + "</button></div>" +
          '<button type="button" class="ee-mic" data-mic aria-label="Speak">' + IC.mic + '</button><div style="font-weight:800">Tap the mic and answer ' + esc(c[0]) + '</div>' +
          '<div class="ee-hint">' + r[1].map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + '</div><div class="ee-heard" aria-live="polite"></div>' +
          '<button type="button" class="ee-ghost" data-skip>I can’t use the mic</button></div>';
      } else {
        var stamp = esc(s.stamp).split("\n").join("<br>");
        h += '<div class="ee-win"><div class="ee-stamp"><div>' + stamp + "<small>STAMPED</small></div></div><h2>Passport stamp!</h2><p>" +
          "What do you say? " + S.ok + " / " + s.quiz.length + " · Your turn " + s.role.length + " / " + s.role.length + "</p>" +
          '<a class="ee-main" href="#/everyday">Back to my passport</a><button type="button" class="ee-ghost" data-again>Practice again</button></div>';
      }
      return h;
    }
    function render(root) {
      stopAll(); root.innerHTML = html(); window.scrollTo(0, 0);
      var q = function (sel) { return root.querySelector(sel); };
      [].forEach.call(root.querySelectorAll("[data-line]"), function (b) {
        b.onclick = function () { [].forEach.call(root.querySelectorAll(".ee-bub"), function (x) { x.classList.remove("now"); }); if (b.classList.contains("ee-bub")) b.classList.add("now"); playLine(s, +b.dataset.line, function () { b.classList.remove("now"); }); };
      });
      var all = q("[data-all]");
      if (all) all.onclick = function () {
        if (all.dataset.on) { stopAll(); all.dataset.on = ""; all.innerHTML = IC.play + "<span>Play the conversation</span>"; [].forEach.call(root.querySelectorAll(".ee-bub"), function (x) { x.classList.remove("now"); }); return; }
        var bs = [].slice.call(root.querySelectorAll(".ee-chat .ee-bub")), i = 0;
        all.dataset.on = "1"; all.innerHTML = IC.stop + "<span>Stop</span>";
        (function nx() {
          bs.forEach(function (x) { x.classList.remove("now"); });
          if (i >= bs.length) { all.dataset.on = ""; all.innerHTML = IC.play + "<span>Play again</span>"; return; }
          bs[i].classList.add("now"); try { bs[i].scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {}
          var k = i; playLine(s, k, function () { i++; setTimeout(function () { if (all.dataset.on) nx(); }, 300); });
          all.dataset.on = "1";
        })();
      };
      var nxt = q("[data-next]"); if (nxt) nxt.onclick = function () { S.step++; render(root); };
      [].forEach.call(root.querySelectorAll("[data-opt]"), function (b) {
        b.onclick = function () {
          var it = s.quiz[S.q], ok = +b.dataset.opt === it[2], fb = q(".ee-fb"), ops = root.querySelectorAll(".ee-opt");
          [].forEach.call(ops, function (o) { o.disabled = true; });
          b.classList.add(ok ? "ok" : "no"); if (!ok) ops[it[2]].classList.add("ok");
          if (ok) S.ok++;
          fb.textContent = ok ? "Great! That sounds natural." : "Almost! Look at the green answer.";
          setTimeout(function () { S.q++; if (S.q >= s.quiz.length) S.step++; render(root); }, ok ? 1100 : 2000);
        };
      });
      var mic = q("[data-mic]"), skip = q("[data-skip]");
      if (mic) {
        setTimeout(function () { playLine(s, s.role[S.r][0]); }, 350);
        mic.onclick = function () { listen(root, mic); };
        skip.onclick = function () { nextRole(root, "Good job! Listen to the model answer."); };
      }
      var again = q("[data-again]"); if (again) again.onclick = function () { S = { step: 0, q: 0, ok: 0, r: 0 }; render(root); };
    }
    function nextRole(root, msg) {
      var hd = root.querySelector(".ee-heard"); if (hd) hd.innerHTML = "<b style='color:#2F9A5C'>" + msg + "</b>";
      [].forEach.call(root.querySelectorAll("[data-mic],[data-skip]"), function (b) { b.disabled = true; });
      var ans = s.role[S.r][0] + 1;
      var go = function () {
        S.r++;
        if (S.r >= s.role.length) { S.step = 4; finish(); }
        render(root);
      };
      if (ans < s.lines.length && s.lines[ans][0] === me) playLine(s, ans, function () { setTimeout(go, 350); }); else setTimeout(go, 1100);
    }
    function finish() {
      var o = store(); o.done = o.done || {}; o.done[s.id] = { q: S.ok, t: s.quiz.length, d: Date.now() }; keep(o);
      try { if (window.MovaAuth && MovaAuth.save) MovaAuth.save("everyday-english", s.id, S.ok, s.quiz.length, { stage: F.st, title: s.title, kind: "situation" }); } catch (e) {}
    }
    function listen(root, btn) {
      var SR = window.SpeechRecognition || window.webkitSpeechRecognition, hd = root.querySelector(".ee-heard");
      if (!SR) { hd.textContent = "The mic doesn’t work in this browser. Tap “I can’t use the mic”."; return; }
      stopAll();
      var r = new SR(), got = false; r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 3;
      btn.classList.add("on"); hd.textContent = "Listening…";
      r.onresult = function (ev) {
        got = true; btn.classList.remove("on");
        var alts = [].map.call(ev.results[0], function (x) { return x.transcript.toLowerCase().replace(/[’`]/g, "'"); });
        var keys = s.role[S.r][2];
        if (alts.some(function (t) { return keys.some(function (k) { return t.indexOf(k) >= 0; }); })) nextRole(root, "“" + esc(alts[0]) + "” · Perfect!");
        else hd.innerHTML = "I heard: “" + esc(alts[0]) + "”. Try again with the yellow words.";
      };
      r.onerror = function (e) { btn.classList.remove("on"); if (!got) hd.textContent = (e && e.error === "not-allowed") ? "Allow the microphone, or tap “I can’t use the mic”." : "Tap the mic and speak."; };
      r.onend = function () { btn.classList.remove("on"); if (!got && hd.textContent === "Listening…") hd.textContent = "Tap the mic and speak."; };
      try { r.start(); } catch (e) { btn.classList.remove("on"); }
    }
    return { html: '<div class="ee" id="ee-root"></div>', mount: function (root) { render(root.querySelector("#ee-root") || root); } };
  }

  /* ---------- Ruta ---------- */
  function fixBack(sit) {
    var a = document.querySelector(".mr-back a"); if (!a) return;
    var href = sit ? "#/everyday" : "#/learn", name = sit ? "Everyday English" : "Learn";
    a.setAttribute("href", href); a.setAttribute("aria-label", "Back to " + name);
    var b = a.querySelector("b"); if (b) b.textContent = name;
  }
  function route(p) {
    p = p || []; css();
    var sit = !!(p[0] && find(p[0])), v = sit ? sitView(p[0]) : homeView();
    return { title: "Everyday English", html: v.html, mount: function (root) {
      css(); v.mount(root); fixBack(sit); setTimeout(function () { fixBack(sit); }, 0); setTimeout(function () { fixBack(sit); }, 200); setTimeout(function () { fixBack(sit); }, 700);
    } };
  }
  route.__ee = true;
  window.addEventListener("hashchange", function () { if (!/^#\/everyday/.test(location.hash)) stopAll(); });

  /* ---------- Vitrinas: Learn y English · On my own ---------- */
  var CARD = '<a class="rh-card ee-card" href="#/everyday" data-c="peri"><span class="ee-new">New</span><div class="rh-art" aria-hidden="true"><img src="thumb-everyday.webp" srcset="thumb-everyday.webp 900w, thumb-everyday-hd.webp 1600w" sizes="(min-width:820px) 50vw, 100vw" alt="" loading="eager"><span class="rh-badge">Speaking</span></div><div class="rh-body"><h2>Everyday English</h2><p>Real situations: order at a café, ask for directions, talk to the doctor. Watch, learn the phrases and say them out loud.</p><div class="chips"><span class="chip">MOVA Kids · 6–8</span><span class="chip">MOVA Children · 9–12</span><span class="chip">MOVA Teens · 12–17</span></div><span class="rh-go">Get my passport →</span></div></a>';
  function decorate() {
    var h = location.hash;
    if (/^#\/learn\/?$/.test(h)) {
      var g = document.querySelector(".rh-grid");
      if (g && !g.querySelector(".ee-card")) {
        css();
        var ll = g.querySelector('a[href="#/listening"]');
        if (ll) ll.insertAdjacentHTML("afterend", CARD); else g.insertAdjacentHTML("afterbegin", CARD);
      }
    } else if (/^#\/english\/own/.test(h)) {
      var sp = document.querySelector('a.oo-wide[href="juego-speaking.html"]');
      if (sp && !document.querySelector('a.oo-wide[href="#/everyday"]')) {
        var c = sp.cloneNode(true); c.setAttribute("href", "#/everyday");
        var im = c.querySelector("img"); if (im) im.setAttribute("src", "thumb-everyday.webp");
        var b = c.querySelector("b"); if (b) b.textContent = "Everyday English";
        var sm = c.querySelector("small"); if (sm) sm.textContent = "Real situations. Watch, learn the phrases and say them.";
        sp.insertAdjacentElement("afterend", c);
      }
    }
  }
  function watch() {
    decorate();
    try { new MutationObserver(function () { decorate(); }).observe(document.getElementById("main") || document.body, { childList: true, subtree: true }); } catch (e) {}
    window.addEventListener("hashchange", function () { setTimeout(decorate, 0); setTimeout(decorate, 300); });
  }

  function install() {
    if (typeof ROUTES !== "object") return false;
    if (ROUTES.everyday && ROUTES.everyday.__ee) return false;
    ROUTES.everyday = route; return true;
  }
  function boot() { if (install() && /^#\/everyday/.test(location.hash) && typeof router === "function") router(); }
  boot();
  var tries = 0; (function loop() { if (!(typeof ROUTES === "object" && ROUTES.everyday && ROUTES.everyday.__ee)) { boot(); if (tries++ < 80) setTimeout(loop, 50); } })();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", watch); else watch();
  window.addEventListener("load", function () { setTimeout(boot, 0); setTimeout(decorate, 50); });
})();
