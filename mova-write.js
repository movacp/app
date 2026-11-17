/* MOVA · Now write it (v120)
   Paso final de cada tema de Structures / My path: Write it, Fix the mistake y Transform.
   Contenido en write-data.js (window.MOVA_WRITE). Lo llama ruta.html al terminar el quiz. */
(function () {
  "use strict";
  var CSS = "" +
    ".nw-hero{position:relative;overflow:hidden;background:#15192B;color:#fff;border-radius:28px;padding:22px 20px;margin:0 0 14px;min-height:178px}" +
    ".nw-hero .k{display:inline-block;background:#D3F36B;color:#15192B;border-radius:999px;padding:6px 12px;font-weight:800;font-size:11px;letter-spacing:.1em}" +
    ".nw-hero h2{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(28px,8vw,38px);line-height:1;margin:12px 0 8px;color:#fff;max-width:62%;position:relative}.nw-hero h2 em{font-style:normal;color:#D3F36B}" +
    ".nw-hero p{margin:0;color:#C9CCE0;font-size:14px;line-height:1.5;max-width:60%;position:relative}" +
    ".nw-hero .ring{position:absolute;width:130px;height:130px;border-radius:50%;border:22px solid #262B45;right:-44px;top:-50px}" +
    ".nw-hero .bw{position:absolute;right:14px;top:50%;transform:translateY(-58%);width:31%;max-width:132px;aspect-ratio:1;border-radius:50%;background:#FFE6F2;display:grid;place-items:center}" +
    ".nw-hero .bw img{width:72%;height:auto;display:block;margin-top:6%}" +
    ".nw-list{display:grid;gap:8px;margin:0 0 4px}" +
    ".nw-list div{display:flex;align-items:center;gap:10px;background:var(--bg,#F5F3FA);border-radius:16px;padding:10px 12px;font-weight:700;font-size:14px}" +
    ".nw-list i{width:34px;height:34px;border-radius:11px;display:grid;place-items:center;font-style:normal;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:13px;color:#15192B;flex:none}" +
    ".nw-list small{display:block;font-weight:600;color:var(--muted,#5B6078);font-size:12px}" +
    ".nw-task{display:inline-block;background:#E6E2FF;color:#15192B;border-radius:10px;padding:4px 10px;font-size:13px;font-weight:800;margin:4px 0 0}" +
    ".nw-src{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;line-height:1.35;margin:10px 0 14px}" +
    ".nw-q{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;line-height:1.45;margin:8px 0 14px}" +
    ".nw-q .gap{display:inline-block;min-width:70px;border-bottom:4px solid #15192B;color:#3E5A07;margin:0 3px}" +
    ".nw-q .cue{color:#8A8DAA;font-weight:700}" +
    ".nw-w{display:flex;flex-wrap:wrap;gap:7px;margin:8px 0 12px}" +
    ".nw-w button{border:2px solid transparent;background:var(--bg,#F5F3FA);border-radius:12px;padding:9px 12px;font:800 17px 'Plus Jakarta Sans',sans-serif;color:#15192B;cursor:pointer}" +
    ".nw-w button.pick{border-color:#FF8FC0;background:#FFF0F6}.nw-w button.fixed{border-color:#8BC34A;background:#F3FCE0}.nw-w button.miss{animation:nwshake .4s}" +
    "@keyframes nwshake{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}" +
    ".nw-step{font-size:13px;font-weight:700;color:var(--muted,#5B6078);margin:0 0 10px}" +
    ".nw-in{text-align:left!important;font-size:18px!important}" +
    ".nw-hint{border:0;background:none;color:#6B57E8;font:800 13px 'Plus Jakarta Sans',sans-serif;cursor:pointer;padding:8px 0 0}" +
    ".nw-kid{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center;margin:10px 0 12px}" +
    ".nw-pic{width:104px;height:104px;border-radius:22px;background:#fff;border:2px solid #ECE9F4;display:grid;place-items:center}.nw-pic img{width:90%;height:90%;object-fit:contain}" +
    ".nw-say{display:flex;align-items:center;gap:10px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:21px;line-height:1.3}" +
    ".nw-spk{width:42px;height:42px;border-radius:50%;border:0;background:#15192B;color:#fff;display:grid;place-items:center;flex:none;cursor:pointer}" +
    ".nw-slots{display:flex;flex-wrap:wrap;gap:8px;min-height:62px;border:2.5px dashed #DCD8EC;border-radius:18px;padding:8px;align-items:center;margin:0 0 12px}" +
    ".nw-slots.good{border-color:#3FAF6C;background:#F3FCE0}.nw-slots.bad{border-color:#FF8FC0;background:#FFF2F7}" +
    ".nw-tiles{display:flex;flex-wrap:wrap;gap:9px;justify-content:center;margin:0 0 12px}" +
    ".nw-tile{min-width:54px;min-height:54px;padding:0 15px;border-radius:16px;border:0;background:#E6E2FF;color:#15192B;font:800 19px 'Plus Jakarta Sans',sans-serif;box-shadow:0 4px 0 #C3BBEA;cursor:pointer;display:inline-grid;place-items:center}" +
    ".nw-tile.l{padding:0;font-size:23px;text-transform:lowercase}.nw-tile:disabled{opacity:.25;box-shadow:none;cursor:default}" +
    ".nw-tile.on{background:#fff;box-shadow:0 0 0 2px #8B7CF6;opacity:1}" +
    ".nw-row{display:flex;gap:8px;align-items:center}.nw-row .cta{flex:1;margin-top:0}" +
    ".nw-undo{flex:none;min-height:50px;padding:0 18px;border:0;border-radius:999px;background:#EEECF6;font:800 15px 'Plus Jakarta Sans',sans-serif;color:#15192B;cursor:pointer}" +
    ".nw-q .gap.ok{color:#2F9A5C;border-color:#2F9A5C}" +
    ".nw-sum{display:flex;justify-content:center;gap:8px;margin:10px 0 0;flex-wrap:wrap}" +
    ".nw-sum span{background:rgba(255,255,255,.12);border-radius:999px;padding:6px 12px;font-size:13px;font-weight:700}";
  function css() { if (document.getElementById("nw-css")) return; var s = document.createElement("style"); s.id = "nw-css"; s.textContent = CSS; document.head.appendChild(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- revisión ---------- */
  var CT = [["won't", "will not"], ["can't", "cannot"], ["shan't", "shall not"], ["n't", " not"], ["i'm", "i am"], ["'re", " are"], ["'ve", " have"], ["'ll", " will"], ["'d", " would"],
    ["it's", "it is"], ["he's", "he is"], ["she's", "she is"], ["that's", "that is"], ["there's", "there is"], ["what's", "what is"], ["who's", "who is"], ["where's", "where is"], ["let's", "let us"]];
  function norm(s, had) {
    s = String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[‘’`´]/g, "'").replace(/[“”"]/g, "");
    s = s.replace(/\./g, "").replace(/[!?,;:]/g, " ").replace(/\s+/g, " ").trim();
    if (had) s = s.split("'d").join(" had");
    CT.forEach(function (p) { s = s.split(p[0]).join(p[1]); });
    return s.replace(/\bcan not\b/g, "cannot").replace(/\s+/g, " ").trim();
  }
  function lev(a, b) { var m = [], i, j; for (i = 0; i <= a.length; i++) m[i] = [i]; for (j = 0; j <= b.length; j++) m[0][j] = j; for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++) m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return m[a.length][b.length]; }
  function grade(v, ans) {
    var n = norm(v); if (!n) return "empty";
    var A = ans.map(function (a) { return norm(a); }), n2 = norm(v, 1), A2 = ans.map(function (a) { return norm(a, 1); });
    if (A.indexOf(n) >= 0 || A2.indexOf(n2) >= 0) return "ok";
    if (A.some(function (a) { var d = lev(a, n); return a.length >= 4 && (d === 1 || (a.length >= 14 && d === 2)); })) return "close";
    return "no";
  }

  /* ---------- pantalla ---------- */
  function run(app, items, ui, finish) {
    css();
    var i = 0, ok = 0, NAMES = { w: "WRITE IT", f: "FIX THE MISTAKE", t: "TRANSFORM", b: "BUILD IT", x: "FIX IT", s: "SPELL IT" }, KIDS = items.some(function (x) { return x[0] === "b" || x[0] === "x" || x[0] === "s"; });
    function frame(inner) { return ui.head() + ui.steps() + '<div class="card">' + inner + "</div>"; }
    function intro() {
      app.innerHTML = ui.head() + ui.steps() +
        '<div class="nw-hero"><span class="ring"></span><span class="bw"><img src="buddy-bella.webp" alt=""></span><span class="k">LAST STEP</span><h2>Now <em>write it</em></h2><p>' + (KIDS ? "Three fun challenges. Build, fix and spell with the tiles!" : "Three short challenges. Write, fix and change sentences on your own.") + '</p></div>' +
        '<div class="card"><div class="nw-list">' + (KIDS ?
        '<div><i style="background:#BDF0D8">Bu</i><span>Build it<small>Build the sentence with tiles</small></span></div>' +
        '<div><i style="background:#FFC7E2">Fx</i><span>Fix it<small>Find the wrong word and choose</small></span></div>' +
        '<div><i style="background:#E6E2FF">Sp</i><span>Spell it<small>Spell the missing word</small></span></div>' :
        '<div><i style="background:#E6E2FF">Wr</i><span>Write it<small>Type the missing word</small></span></div>' +
        '<div><i style="background:#FFC7E2">Fx</i><span>Fix the mistake<small>Find the wrong word and correct it</small></span></div>' +
        '<div><i style="background:#BFE3F8">Tr</i><span>Transform<small>Rewrite the whole sentence</small></span></div>') +
        '</div><button class="cta" id="nwgo">Start</button></div>';
      document.getElementById("nwgo").onclick = function () { i = 0; item(); };
    }
    function next(good, msg, show) {
      if (good) ok++;
      var fb = document.getElementById("nwfb");
      fb.innerHTML = '<div class="fb ' + (good ? "good" : "bad") + '"><b>' + (good ? "Great! That's right." : "Not yet.") + "</b>" + (show && !good ? 'The answer is: <strong>' + esc(show) + "</strong><br>" : "") + esc(msg) + "</div>" +
        '<button class="cta" id="nwn">' + (i < items.length - 1 ? "Next" : "See my result") + "</button>";
      document.getElementById("nwn").onclick = function () { i++; if (i < items.length) item(); else finish(ok, items.length); };
      try { if (good && ui.say) ui.say(show); } catch (e) {}
    }
    function typed(ans, why, full) {
      var inp = document.getElementById("nwin"), tries = 0, btn = document.getElementById("nwck");
      try { inp.focus(); } catch (e) {}
      var go = function () {
        var g = grade(inp.value, ans);
        if (g === "empty") return;
        if (g === "close" && tries < 1) { tries++; document.getElementById("nwfb").innerHTML = '<div class="fb bad"><b>Almost! Check your spelling.</b>Look at each letter and try again.</div>'; return; }
        inp.disabled = true; btn.remove(); inp.classList.add(g === "ok" ? "good" : "bad");
        next(g === "ok", why, full);
      };
      btn.onclick = go; inp.onkeydown = function (e) { if (e.key === "Enter") go(); };
    }
    function input(ph) { return '<input class="tin nw-in" id="nwin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + ph + '" aria-label="Your answer"><button class="cta" id="nwck" style="margin-top:10px">Check</button><div id="nwfb"></div>'; }
    function shuf(a) { a = a.slice(); for (var j = a.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)), t = a[j]; a[j] = a[r]; a[r] = t; } return a; }
    var SPK = '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    function speakBtn() { return '<button type="button" class="nw-spk" id="nwspk" aria-label="Listen">' + SPK + "</button>"; }
    function pic(src) { return src ? '<div class="nw-pic"><img src="' + esc(src) + '" alt=""></div>' : ""; }
    function kidNext(good, why, tellAns) {
      if (good) ok++;
      document.getElementById("nwfb").innerHTML = '<div class="fb ' + (good ? "good" : "bad") + '"><b>' + (good ? "Great job!" : "Let's look together.") + "</b>" + esc(why) + "</div>" +
        '<button class="cta" id="nwn">' + (i < items.length - 1 ? "Next" : "See my result") + "</button>";
      document.getElementById("nwn").onclick = function () { i++; if (i < items.length) item(); else finish(ok, items.length); };
      try { if (ui.say && tellAns) ui.say(tellAns); } catch (e) {}
    }
    function kidItem(it, kick) {
      var k = it[0];
      if (k === "b") {
        var list = shuf(it[2]), target = it[3], pick = [], tries = 0;
        app.innerHTML = frame(kick + '<div class="nw-kid">' + pic(it[5]) + '<div class="nw-say">' + speakBtn() + "<span>" + esc(it[1]) + '</span></div></div><div class="nw-slots" id="nwsl"></div><div class="nw-tiles" id="nwtl">' +
          list.map(function (t, j) { return '<button type="button" class="nw-tile" data-j="' + j + '">' + esc(t) + "</button>"; }).join("") +
          '</div><div class="nw-row"><button class="cta" id="nwck">Check</button><button class="nw-undo" id="nwun">Undo</button></div><div id="nwfb"></div>');
        var sl = document.getElementById("nwsl"), tl = document.getElementById("nwtl");
        var paint = function () { sl.innerHTML = pick.map(function (j) { return '<span class="nw-tile on">' + esc(list[j]) + "</span>"; }).join(""); };
        document.getElementById("nwspk").onclick = function () { if (ui.say) ui.say(it[1]); };
        [].forEach.call(tl.querySelectorAll(".nw-tile"), function (b) { b.onclick = function () { pick.push(+b.dataset.j); b.disabled = true; paint(); }; });
        document.getElementById("nwun").onclick = function () { var j = pick.pop(); if (j != null) tl.querySelector('[data-j="' + j + '"]').disabled = false; sl.className = "nw-slots"; paint(); };
        document.getElementById("nwck").onclick = function () {
          if (!pick.length) return;
          var got = pick.map(function (j) { return list[j]; }).join(" ");
          if (got === target) { sl.className = "nw-slots good"; done3(); kidNext(true, it[4], target.replace(/ ([.?!])/g, "$1")); return; }
          tries++; sl.className = "nw-slots bad";
          if (tries < 2) { document.getElementById("nwfb").innerHTML = '<div class="fb bad"><b>Almost! Try again.</b>Look at the picture and the words.</div>'; setTimeout(function () { pick.forEach(function (j) { tl.querySelector('[data-j="' + j + '"]').disabled = false; }); pick = []; sl.className = "nw-slots"; paint(); }, 700); }
          else { sl.innerHTML = target.split(" ").map(function (w) { return '<span class="nw-tile on">' + esc(w) + "</span>"; }).join(""); sl.className = "nw-slots good"; done3(); kidNext(false, it[4]); }
        };
        var done3 = function () { [].forEach.call(app.querySelectorAll("#nwtl .nw-tile,#nwck,#nwun"), function (x) { x.disabled = true; }); var c = document.getElementById("nwck"), u = document.getElementById("nwun"); if (c) c.remove(); if (u) u.remove(); };
      } else if (k === "x") {
        var parts = it[1].split("*"), toks = [];
        parts.forEach(function (p, n) { if (n % 2) toks.push([p, 1]); else p.split(/\s+/).filter(Boolean).forEach(function (w) { toks.push([w, 0]); }); });
        var opts = shuf(it[2]), right = it[2][0], tr = 0;
        app.innerHTML = frame(kick + '<div class="nw-kid">' + pic(it[4]) + '<div><div class="nw-say" style="margin-bottom:6px">' + speakBtn() + '<span style="font-size:15px;color:var(--muted,#5B6078)">Tap the wrong word</span></div><div class="nw-w">' +
          toks.map(function (w, n) { return '<button type="button" data-n="' + n + '">' + esc(w[0]) + "</button>"; }).join("") + '</div></div></div><p class="nw-step" id="nwst">One word is wrong. Find it!</p><div class="nw-tiles" id="nwtl" hidden>' +
          opts.map(function (o, n) { return '<button type="button" class="nw-tile" data-o="' + n + '">' + esc(o) + "</button>"; }).join("") + '</div><div id="nwfb"></div>');
        var full = function (w) { return toks.map(function (t) { return t[1] ? w : t[0]; }).join(" "); };
        document.getElementById("nwspk").onclick = function () { if (ui.say) ui.say(full(right)); };
        [].forEach.call(app.querySelectorAll(".nw-w button"), function (b) {
          b.onclick = function () {
            if (toks[+b.dataset.n][1]) { b.classList.add("pick"); [].forEach.call(app.querySelectorAll(".nw-w button"), function (x) { x.disabled = true; }); document.getElementById("nwst").textContent = "Good! Now choose the right word."; document.getElementById("nwtl").hidden = false; document.getElementById("nwfb").innerHTML = ""; }
            else { b.classList.add("miss"); setTimeout(function () { b.classList.remove("miss"); }, 420); document.getElementById("nwst").textContent = "That word is OK. Look again!"; }
          };
        });
        [].forEach.call(app.querySelectorAll("#nwtl .nw-tile"), function (t) {
          t.onclick = function () {
            var w = app.querySelector(".nw-w button.pick"), good = opts[+t.dataset.o] === right;
            if (good || ++tr >= 2) { w.textContent = right; w.classList.remove("pick"); w.classList.add("fixed"); [].forEach.call(app.querySelectorAll("#nwtl .nw-tile"), function (x) { x.disabled = true; }); kidNext(good, it[3], good ? full(right) : null); }
            else { t.disabled = true; document.getElementById("nwfb").innerHTML = '<div class="fb bad"><b>Almost! Try again.</b></div>'; }
          };
        });
      } else {
        var word = it[2], letters = shuf(word.split("").concat(it[3].split(""))), pk = [], ts = 0;
        var q = esc(it[1]).replace("___", '<span class="gap" id="nwg">&nbsp;</span>').replace(/\(([^)]*)\)/, '<span class="cue">($1)</span>');
        app.innerHTML = frame(kick + '<div class="nw-kid">' + pic(it[5]) + '<div class="nw-say">' + speakBtn() + '<span class="nw-q" style="margin:0">' + q + '</span></div></div><div class="nw-tiles" id="nwtl">' +
          letters.map(function (l, n) { return '<button type="button" class="nw-tile l" data-n="' + n + '">' + esc(l) + "</button>"; }).join("") +
          '</div><div class="nw-row"><button class="cta" id="nwck">Check</button><button class="nw-undo" id="nwun">Undo</button></div><div id="nwfb"></div>');
        var g = document.getElementById("nwg"), tl2 = document.getElementById("nwtl");
        var paint2 = function () { g.textContent = pk.map(function (n) { return letters[n]; }).join("") || " "; };
        document.getElementById("nwspk").onclick = function () { if (ui.say) ui.say(it[1].replace(/\s*\([^)]*\)/, "").replace("___", "...")); };
        [].forEach.call(tl2.querySelectorAll(".nw-tile"), function (b) { b.onclick = function () { pk.push(+b.dataset.n); b.disabled = true; paint2(); }; });
        document.getElementById("nwun").onclick = function () { var n = pk.pop(); if (n != null) tl2.querySelector('[data-n="' + n + '"]').disabled = false; paint2(); };
        var fin = function () { [].forEach.call(tl2.querySelectorAll(".nw-tile"), function (x) { x.disabled = true; }); document.getElementById("nwck").remove(); document.getElementById("nwun").remove(); g.textContent = word; };
        document.getElementById("nwck").onclick = function () {
          if (!pk.length) return;
          var got = pk.map(function (n) { return letters[n]; }).join("");
          if (got.toLowerCase() === word.toLowerCase()) { fin(); g.classList.add("ok"); kidNext(true, it[4], it[1].replace(/\s*\([^)]*\)/, "").replace("___", word)); return; }
          ts++;
          if (ts < 2) { document.getElementById("nwfb").innerHTML = '<div class="fb bad"><b>Almost! Try again.</b>Listen and spell it letter by letter.</div>'; setTimeout(function () { pk.forEach(function (n) { tl2.querySelector('[data-n="' + n + '"]').disabled = false; }); pk = []; paint2(); }, 700); }
          else { fin(); kidNext(false, it[4]); }
        };
      }
    }
    function item() {
      var it = items[i], kick = '<span class="kicker">' + ui.n + " · NOW WRITE IT · " + NAMES[it[0]] + " · " + (i + 1) + "/" + items.length + "</span>";
      if (it[0] === "b" || it[0] === "x" || it[0] === "s") return kidItem(it, kick);
      if (it[0] === "w") {
        var q = esc(it[1]).replace("___", '<span class="gap" id="nwg">&nbsp;</span>').replace(/\(([^)]*)\)/, '<span class="cue">($1)</span>');
        app.innerHTML = frame(kick + '<h2 style="font-size:20px">Type the missing word.</h2><div class="nw-q">' + q + "</div>" + input("Type here"));
        typed(it[2], it[3], it[2][0]);
        var inp = document.getElementById("nwin"), g0 = document.getElementById("nwg");
        inp.addEventListener("input", function () { g0.textContent = inp.value || " "; });
      } else if (it[0] === "f") {
        var parts = it[1].split("*"), toks = [];
        parts.forEach(function (p, k) { if (k % 2) toks.push([p, 1]); else p.split(/\s+/).filter(Boolean).forEach(function (w) { toks.push([w, 0]); }); });
        var ansTxt = it[2][0];
        app.innerHTML = frame(kick + '<h2 style="font-size:20px">Tap the wrong word.</h2><div class="nw-w">' + toks.map(function (w, k) { return '<button type="button" data-k="' + k + '">' + esc(w[0]) + "</button>"; }).join("") + '</div><p class="nw-step" id="nwst">One word is wrong. Can you find it?</p><div id="nwbox"></div><div id="nwfb"></div>');
        [].forEach.call(app.querySelectorAll(".nw-w button"), function (b) {
          b.onclick = function () {
            var k = +b.dataset.k;
            if (toks[k][1]) {
              b.classList.add("pick"); [].forEach.call(app.querySelectorAll(".nw-w button"), function (x) { x.disabled = true; });
              document.getElementById("nwst").textContent = "Good! Now write it correctly.";
              document.getElementById("nwbox").innerHTML = '<input class="tin nw-in" id="nwin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Write it correctly" aria-label="Correct word"><button class="cta" id="nwck" style="margin-top:10px">Check</button>';
              var fullOf = function () { return toks.map(function (w) { return w[1] ? ansTxt : w[0]; }).join(" ").replace(/\s+([.,?!])/g, "$1"); };
              var inp2 = document.getElementById("nwin"), tries = 0, btn = document.getElementById("nwck");
              try { inp2.focus(); } catch (e) {}
              var go = function () {
                var g = grade(inp2.value, it[2]);
                if (g === "empty") return;
                if (g === "close" && tries < 1) { tries++; document.getElementById("nwfb").innerHTML = '<div class="fb bad"><b>Almost! Check your spelling.</b>Look at each letter and try again.</div>'; return; }
                inp2.disabled = true; btn.remove(); inp2.classList.add(g === "ok" ? "good" : "bad");
                b.textContent = ansTxt; b.classList.remove("pick"); b.classList.add("fixed");
                next(g === "ok", it[3], fullOf());
              };
              btn.onclick = go; inp2.onkeydown = function (e) { if (e.key === "Enter") go(); };
            } else {
              b.classList.add("miss"); setTimeout(function () { b.classList.remove("miss"); }, 450);
              document.getElementById("nwst").textContent = "That word is OK. Look again!";
            }
          };
        });
      } else {
        app.innerHTML = frame(kick + '<span class="nw-task">' + esc(it[1]) + '</span><div class="nw-src">' + esc(it[2]) + "</div>" + input("Write the new sentence"));
        var ti = document.getElementById("nwin"); ti.setAttribute("autocapitalize", "sentences");
        typed(it[3], it[4], it[3][0]);
      }
    }
    intro();
  }
  window.MovaWrite = {
    items: function (id) { var W = window.MOVA_WRITE || {}; return W[id] && W[id].length ? W[id] : null; },
    run: run, grade: grade, norm: norm
  };
})();
