/* Sugar Town · Visitantes con pedidos, estrellas del parque y guardado en la nube (modo Solo) */
(function () {
  var V = "60";
  var PK = window.MOVA_PARK;
  var turn = 0;

  /* ---------- Productos de Food Street ---------- */
  var P = {
    "popcorn-small":          { stand: "popcorn",  price: 12, a: "a small popcorn", pl: "small popcorns", s: "small popcorn" },
    "popcorn-big":            { stand: "popcorn",  price: 18, a: "a large popcorn", pl: "large popcorns", s: "large popcorn" },
    "popcorn-caramel":        { stand: "popcorn",  price: 20, a: "a bag of caramel popcorn", pl: "bags of caramel popcorn", s: "caramel popcorn" },
    "cotton-pink":            { stand: "cotton",   price: 16, a: "a pink cotton candy", pl: "pink cotton candies", s: "pink cotton candy" },
    "cotton-blue":            { stand: "cotton",   price: 16, a: "a blue cotton candy", pl: "blue cotton candies", s: "blue cotton candy" },
    "icecream-strawberry":    { stand: "icecream", price: 22, a: "a strawberry ice cream cone", pl: "strawberry ice cream cones", s: "strawberry cone" },
    "icecream-chocolate":     { stand: "icecream", price: 22, a: "a chocolate ice cream cone", pl: "chocolate ice cream cones", s: "chocolate cone" },
    "icecream-mint-cherry":   { stand: "icecream", price: 26, a: "a mint ice cream cone with a cherry on top", pl: "mint ice cream cones with cherries on top", s: "mint cone with a cherry" },
    "icecream-vanilla-cup":   { stand: "icecream", price: 24, a: "a cup of vanilla ice cream with sprinkles", pl: "cups of vanilla ice cream with sprinkles", s: "vanilla cup with sprinkles" },
    "icecream-strawberry-cup":{ stand: "icecream", price: 24, a: "a cup of strawberry ice cream", pl: "cups of strawberry ice cream", s: "strawberry cup" },
    "hotdog-ketchup":         { stand: "hotdog",   price: 28, a: "a hot dog with ketchup", pl: "hot dogs with ketchup", s: "hot dog with ketchup" },
    "hotdog-mustard":         { stand: "hotdog",   price: 28, a: "a hot dog with mustard", pl: "hot dogs with mustard", s: "hot dog with mustard" },
    "candy-apple":            { stand: "candy",    price: 30, a: "a candy apple", pl: "candy apples", s: "candy apple" },
    "lemonade-small":         { stand: "lemonade", price: 14, a: "a small lemonade", pl: "small lemonades", s: "small lemonade" },
    "lemonade-pink-big":      { stand: "lemonade", price: 20, a: "a large pink lemonade", pl: "large pink lemonades", s: "large pink lemonade" },
    "water":                  { stand: "lemonade", price: 10, a: "a bottle of water", pl: "bottles of water", s: "bottle of water" }
  };
  var PIDS = Object.keys(P);
  function pimg(id) { return "st-p-" + id + ".webp?v=" + V; }

  /* ---------- Visitantes ---------- */
  var VIS = [
    { id: "balloon-girl", t: "kid", p: 1.5 }, { id: "cap-boy", t: "kid", p: 1.3 }, { id: "glasses-girl", t: "kid", p: 1.45 },
    { id: "dino-boy", t: "kid", p: 1.4 }, { id: "wheelchair-girl", t: "kid", p: 1.45 }, { id: "curly-boy", t: "kid", p: 1.3 },
    { id: "mom-son", t: "mom", p: 1.15 }, { id: "dad-stroller", t: "dad", p: .85 }, { id: "grandparents", t: "grand", p: .85, r: .82 },
    { id: "teen-girl", t: "teen", p: 1.15 }, { id: "teen-boy", t: "teen", p: .95 }, { id: "friends", t: "group", p: 1.3 }
  ];
  function vimg(v) { return "st-v-" + v.id + "-" + v.s + ".webp?v=" + V; }

  var NUM = ["", "one", "two", "three"];
  function R(a) { return a[Math.floor(Math.random() * a.length)]; }
  function np(id, q) { return q === 1 ? P[id].a : NUM[q] + " " + P[id].pl; }
  function joinAnd(a) { return a.length < 2 ? a[0] || "" : a.slice(0, -1).join(", ") + " and " + a[a.length - 1]; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ---------- Iconos ---------- */
  var I = {
    sound: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
    read: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h7a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H3zM21 5h-5a3 3 0 0 0-3 3v11a2 2 0 0 1 2-2h6z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="14" height="14"><path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="#FFC83D" stroke="#E0A21B" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    starOff: '<svg viewBox="0 0 24 24" width="14" height="14"><path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="#E6E2EE" stroke="#CFC8DC" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    lock: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',
    heart: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 4 4.5 7.3 4.5c2 0 3.5 1.1 4.7 2.7 1.2-1.6 2.7-2.7 4.7-2.7 3.3 0 5.7 3.1 4.5 6.6-1.7 4.8-9.2 9.4-9.2 9.4z" fill="#FF6FB5" stroke="#E04E98" stroke-width="1.4"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.1 4.5 4.5 0 0 0 7 18z" fill="#B9C3DA" stroke="#8E9AB8" stroke-width="1.4"/><path d="M9 20.5v1M12 20.5v1.6M15 20.5v1" stroke="#7FA3E0" stroke-width="1.8" stroke-linecap="round"/></svg>',
    x: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };
  function stars(n) { var h = ""; for (var i = 1; i <= 5; i++) h += n >= i - .25 ? I.star : I.starOff; return '<span class="so-stars">' + h + "</span>"; }

  /* ---------- Voz ---------- */
  var synth = window.speechSynthesis || null, voiceEN = null;
  function pickVoice() {
    if (!synth) return null; var vs = synth.getVoices().filter(function (v) { return /^en[-_]US/i.test(v.lang); });
    if (!vs.length) vs = synth.getVoices().filter(function (v) { return /^en/i.test(v.lang); });
    var pref = vs.find(function (v) { return /samantha|google us|aria|jenny|zira/i.test(v.name); });
    return pref || vs[0] || null;
  }
  if (synth) { voiceEN = pickVoice(); try { synth.addEventListener("voiceschanged", function () { voiceEN = pickVoice(); }); } catch (e) {} }
  function say(t, v, done) {
    if (!synth) { if (done) done(); return; }
    try {
      synth.cancel(); var u = new SpeechSynthesisUtterance(t); u.lang = "en-US"; if (voiceEN) u.voice = voiceEN;
      u.pitch = v ? v.p : 1.1; u.rate = (v && v.r) || .88; if (done) { u.onend = done; u.onerror = done; }
      synth.speak(u);
    } catch (e) { if (done) done(); }
  }

  /* ---------- Estado (estrellas, visitantes atendidos, álbum) ---------- */
  var ST = { served: 0, hist: [], album: {}, best: 0, ts: 0 }, KEY = null, PARKKEY = null, cloudT = null, pulled = false, TIMED = false;
  /* Retos y Live (carrera de 3 minutos): estado propio de la partida, no se guarda */
  function session() { TIMED = true; turn = 0; ST = { served: 0, hist: [], album: {}, best: 0, ts: 0 }; return ST; }
  function load(parkKey) {
    TIMED = false; turn = 0;
    PARKKEY = parkKey; KEY = parkKey.replace("mova-sugar-town:", "mova-sugar-st:");
    var d = null; try { d = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
    d = d || {};
    ST = { served: +d.served || 0, hist: Array.isArray(d.hist) ? d.hist.slice(-10) : [], album: d.album || {}, best: +d.best || 0, ts: +d.ts || 0 };
    return ST;
  }
  function save() { if (TIMED) return; ST.ts = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(ST)); } catch (e) {} cloudLater(); }
  function rating() { if (ST.hist.length < (TIMED ? 2 : 3)) return 0; var s = 0; ST.hist.forEach(function (x) { s += x; }); return Math.round(s / ST.hist.length * 10) / 10; }
  function ratingTxt() { var r = rating(); return r ? r.toFixed(1) : "New"; }

  /* Zonas que se abren con estrellas */
  var GATES_SOLO = [null, { r: 3.5, n: 8 }, { r: 4.0, n: 20 }], GATES_RACE = [null, { r: 3.0, n: 2 }, { r: 3.5, n: 5 }];
  function gates() { return TIMED ? GATES_RACE : GATES_SOLO; }
  function zoneOpen(z) { var g = gates()[z]; return !g || (ST.served >= g.n && rating() >= g.r); }
  function lockedAttr(a) { return a && !zoneOpen(a.zone); }
  function gateText(z) { var g = gates()[z]; return g ? g.r.toFixed(1) + "★ rating · serve " + g.n + " visitors" : ""; }

  /* ---------- Economía del modo Solo ---------- */
  function gain(items, mult) { var s = 0; PK.own(items).forEach(function (id) { var a = PK.ATTR.find(function (x) { return x.id === id; }); if (a) s += a.inc; }); return Math.round((10 + .06 * s) * (mult || 1) * (TIMED ? 2.5 : 1)); }
  function stands(items) { var o = {}; PK.own(items).forEach(function (id) { o[id] = 1; }); return o; }
  function menu(items) { var s = stands(items); return PIDS.filter(function (id) { return s[P[id].stand]; }); }
    function wantOrder(items) { turn++; var m = menu(items); return m.length >= 2 && turn % 3 === 0; }

  /* ---------- Generador de pedidos ---------- */
  function level(stage, tier) { var b = stage === "kids" ? 0 : stage === "teens" ? 2 : 1; return Math.min(3, b + (tier >= 2 ? 1 : 0)); }
  function pickVisitor(stage) {
    var pool = VIS.filter(function (v) { return stage === "kids" ? v.t === "kid" || v.t === "mom" || v.t === "dad" : stage === "teens" ? v.t !== "kid" || Math.random() < .3 : true; });
    var v = Object.assign({}, R(pool)); v.s = Math.random() < .5 ? "a" : "b"; return v;
  }
  function build(items, stage, tier) {
    var L = level(stage, tier), m = menu(items), v = pickVisitor(stage);
    var lines = L === 0 ? 1 : L === 1 ? (Math.random() < .55 ? 1 : 2) : L === 2 ? 2 : (Math.random() < .5 ? 2 : 3);
    lines = Math.min(lines, m.length);
    var group = v.t !== "kid" && v.t !== "teen", maxQ = L === 0 ? 1 : L === 3 ? 3 : 2;
    var pool = m.slice(), want = [];
    for (var i = 0; i < lines; i++) {
      var id = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      var q = maxQ === 1 ? 1 : Math.random() < (group ? .5 : .25) ? 2 + (maxQ > 2 && Math.random() < .4 ? 1 : 0) : 1;
      want.push([id, q]);
    }
    /* cambio de opinión (Teens): pide algo y luego lo cambia por otro del mismo puesto */
    var change = null;
    if (L >= 2 && Math.random() < (L === 3 ? .45 : .25)) {
      var first = want[0], alt = m.filter(function (id) { return P[id].stand === P[first[0]].stand && id !== first[0] && !want.some(function (w) { return w[0] === id; }); });
      if (alt.length) change = { from: R(alt) };
    }
    var parts = want.map(function (w) { return np(w[0], w[1]); });
    var t;
    if (change) {
      var rest = parts.slice(1);
      t = R(["Can I get " + np(change.from, want[0][1]) + "? Oh, no, wait. Make it " + parts[0] + ", please.",
             "I'll have " + np(change.from, want[0][1]) + "... Actually, can I change that to " + parts[0] + "?",
             "Could I get " + np(change.from, want[0][1]) + "? Hmm, no. I'd rather have " + parts[0] + "."]);
      if (rest.length) t += " " + R(["And ", "Oh, and ", "Also, "]) + joinAnd(rest) + ", please.";
    } else {
      var list = joinAnd(parts);
      if (v.t === "kid") t = L === 0 ? R(["Can I have " + list + ", please?", "I want " + list + ", please!", cap(list) + ", please!", "Hi! " + cap(list) + ", please."]) : R(["Hi! Can I have " + list + ", please?", "I would like " + list + ", please.", "Hello! " + cap(list) + ", please!"]);
      else if (v.t === "mom") t = R(["Hi! Can we have " + list + ", please?", "Hello! I'd like " + list + " for my son and me, please.", "Hi there! " + cap(list) + ", please."]);
      else if (v.t === "dad") t = R(["Hi there! I'd like " + list + ", please.", "Hello! Can I get " + list + ", please?", "Good afternoon! " + cap(list) + ", please."]);
      else if (v.t === "grand") t = R(["Good afternoon! We would like " + list + ", please.", "Hello, dear! Could we have " + list + ", please?", "Hi! Our granddaughter wants " + list + ", please."]);
      else if (v.t === "group") t = R(["Hey! Can we get " + list + ", please?", "Hi! We want " + list + ", please!", "Hello! " + cap(list) + " for us, please!"]);
      else t = R(["Hey! Can I get " + list + "?", "Hi! I'll have " + list + ", please.", "Hi! Could I get " + list + ", please?"]);
    }
    var price = 0; want.forEach(function (w) { price += P[w[0]].price * w[1]; });
    return { v: v, want: want, text: t, price: price, L: L };
  }

  /* ---------- Reconocimiento de voz (opcional) ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var SAYS = { kids: ["Here you go!", "Enjoy!", "Thank you!"], children: ["Here you go! Enjoy!", "Here is your order!", "Have a nice day!"], teens: ["Here's your order. Enjoy!", "Have a great day!", "Thanks for coming!"] };
  function norm(s) { return String(s || "").toLowerCase().replace(/[^a-z' ]/g, " ").replace(/here's/g, "here is").split(/\s+/).filter(Boolean); }
  function heard(target, got) { var t = norm(target), g = norm(got); if (!t.length) return false; var hit = t.filter(function (w) { return g.indexOf(w) >= 0; }).length; return hit / t.length >= .6; }

  /* ---------- Reseñas ---------- */
  var REV = {
    5: ["Amazing service!", "Yummy! I'll come back tomorrow!", "Best park in town!", "Super fast and friendly!", "Delicious! Thank you!"],
    4: ["Very good, thank you!", "Tasty! A little slow, but nice.", "Great food!", "Nice and friendly."],
    3: ["Good, but my order was wrong at first.", "It was OK.", "Not bad!"],
    1: ["That's not what I ordered!", "I waited too long.", "I left without my snack."]
  };
  var THANKS = ["Thank you!", "Yummy! Thanks!", "Perfect, thank you!", "Wow, thanks!", "Thank you so much!"];

  /* ---------- Pantalla del pedido ---------- */
  function serve(host, ctx) {
    var o = build(ctx.items, ctx.stage, ctx.tier), m = menu(ctx.items), tray = [], tries = 0, readIt = false, over = false;
    var patience = ({ kids: 50, children: 40, teens: 32 }[ctx.stage] || 40) * (TIMED ? .75 : 1), t0 = Date.now(), raf = 0, firstEnd = 0;
    showCust(ctx.map, o); window.MOVA_SUGAR._last = o; document.body.classList.add("so-on");
    host.innerHTML = '<div class="so">' +
      '<div class="so-top"><div class="so-vw"><img class="so-vis" src="' + vimg(o.v) + '" alt=""><span class="so-mood" id="so-mood"></span></div>' +
        '<div class="so-bub"><div class="so-txt" id="so-txt"><span class="so-dots"><i></i><i></i><i></i></span></div>' +
        '<div class="so-btns"><button type="button" class="so-b dark" id="so-l">' + I.sound + 'Listen</button><button type="button" class="so-b" id="so-r">' + I.read + 'Read</button></div></div></div>' +
      '<div class="so-pat" id="so-pat"><i></i></div>' +
      '<div class="so-tray"><div class="so-tl" id="so-tl"><span class="so-ph">Tap the food they ask for</span></div><button type="button" class="so-serve" id="so-go" disabled>Serve</button></div>' +
      '<div class="so-menu' + (m.length > 8 ? " many" : "") + '" id="so-menu">' + m.map(function (id) { return '<button type="button" class="so-p" data-id="' + id + '" aria-label="' + P[id].s + '"><img src="' + pimg(id) + '" alt=""></button>'; }).join("") + "</div>" +
    "</div>";
    var $ = function (s) { return host.querySelector(s); };
    function play() { say(o.text, o.v); }
    setTimeout(play, 350);
    $("#so-l").onclick = play;
    $("#so-r").onclick = function () { if (readIt) return; readIt = true; this.classList.add("used"); $("#so-txt").textContent = "“" + o.text + "”"; };
    $("#so-menu").onclick = function (e) {
      var b = e.target.closest(".so-p"); if (!b || over) return; var id = b.dataset.id;
      var line = tray.find(function (x) { return x[0] === id; });
      if (line) line[1] = Math.min(3, line[1] + 1); else tray.push([id, 1]);
      b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
      say(P[id].s, null); drawTray();
    };
    $("#so-tl").onclick = function (e) {
      var c = e.target.closest(".so-c"); if (!c || over) return; var id = c.dataset.id;
      var line = tray.find(function (x) { return x[0] === id; }); if (!line) return;
      if (--line[1] <= 0) tray = tray.filter(function (x) { return x !== line; });
      drawTray();
    };
    function drawTray() {
      var tl = $("#so-tl"), go = $("#so-go");
      tl.innerHTML = tray.length ? tray.map(function (x) { return '<button type="button" class="so-c" data-id="' + x[0] + '"><img src="' + pimg(x[0]) + '" alt="">' + (x[1] > 1 ? "<b>×" + x[1] + "</b>" : "") + '<span class="so-x">' + I.x + "</span></button>"; }).join("") : '<span class="so-ph">Tap the food they ask for</span>';
      go.disabled = !tray.length;
    }
    function same() {
      if (tray.length !== o.want.length) return false;
      return o.want.every(function (w) { var t = tray.find(function (x) { return x[0] === w[0]; }); return t && t[1] === w[1]; });
    }
    $("#so-go").onclick = function () {
      if (over || !tray.length) return;
      if (same()) return win();
      tries++;
      if (typeof sfx !== "undefined") sfx.bad();
      mood("sad"); host.querySelector(".so").classList.add("shake"); setTimeout(function () { var s = host.querySelector(".so"); if (s) s.classList.remove("shake"); }, 400);
      if (tries >= 2) return lose("wrong");
      tray = []; drawTray();
      say(R(["Hmm, that's not what I asked for.", "Oops! That's not my order.", "No, that's not right."]) + " " + o.text, o.v);
    };
    function mood(k) { var e = $("#so-mood"); if (!e) return; e.innerHTML = k === "happy" ? I.heart : k === "sad" ? I.cloud : ""; e.className = "so-mood " + k; }
    function tick() {
      if (over) return;
      if (!host.isConnected) { over = true; document.body.classList.remove("so-on"); try { synth && synth.cancel(); } catch (e) {} var c = document.getElementById("pkcust"); if (c) c.remove(); return; }
      var left = 1 - (Date.now() - t0) / (patience * 1000), bar = $("#so-pat");
      if (bar) { bar.firstChild.style.transform = "scaleX(" + Math.max(0, left) + ")"; bar.classList.toggle("low", left < .3); }
      if (left <= 0) return lose("time");
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    function score() { var fast = (Date.now() - t0) / (patience * 1000) < .5; if (tries) return 3; return !readIt && fast ? 5 : 4; }
    function record(sc) {
      ST.served += sc > 1 ? 1 : 0; ST.hist.push(sc); ST.hist = ST.hist.slice(-10);
      var k = o.v.id + "-" + o.v.s; if (sc > 1) ST.album[k] = (ST.album[k] || 0) + 1;
      save();
    }
    function win() {
      over = true; cancelAnimationFrame(raf);
      var sc = score(), tip = Math.round(o.price * { 5: .6, 4: .35, 3: .1 }[sc]), nRides = PK.own(ctx.items).filter(function (id) { var a = PK.ATTR.find(function (x) { return x.id === id; }); return a && a.zone > 0; }).length;
      var pay = Math.round(o.price * (1 + .06 * nRides) * (TIMED ? 1.5 : 1)); tip = Math.round(tip * (TIMED ? 1.5 : 1));
      record(sc); mood("happy");
      if (typeof sfx !== "undefined") sfx.ok();
      $("#so-txt").textContent = "“" + o.text + "”";
      say(R(THANKS), o.v);
      custHappy(ctx.map, true);
      var go = function (bonus) { bonus = bonus || 0; showPay(pay, tip + bonus, sc, function () { finish({ pay: pay, tip: tip + bonus, score: sc, ok: true, bonus: bonus }); }); };
      if (SR && !ctx.noSpeak && ST.served % 2 === 0) setTimeout(function () { speakTask(go); }, 900);
      else go(0);
    }
    function lose(why) {
      over = true; cancelAnimationFrame(raf); record(1); mood("sad"); custHappy(ctx.map, false);
      $("#so-txt").innerHTML = '<small class="so-k">' + (why === "time" ? "I waited too long! I wanted:" : "I wanted:") + "</small>“" + o.text + "”";
      host.querySelector(".so-tray").innerHTML = '<div class="so-ans">' + o.want.map(function (w) { return '<span><img src="' + pimg(w[0]) + '" alt="">' + (w[1] > 1 ? "<b>×" + w[1] + "</b>" : "") + "</span>"; }).join("") + '</div><button type="button" class="so-serve" id="so-next">Next</button>';
      host.querySelector(".so-menu").classList.add("off");
      say(why === "time" ? "I waited too long. Bye!" : "That's not what I ordered. Bye!", o.v);
      $("#so-next").onclick = function () { finish({ pay: 0, tip: 0, score: 1, ok: false }); };
    }
    function showPay(pay, tip, sc, then) {
      var tray0 = host.querySelector(".so-tray");
      tray0.innerHTML = '<div class="so-paid"><span class="so-coin">' + PK.coin + "+" + pay + "</span>" + (tip ? '<span class="so-tip">+' + tip + " tip</span>" : "") + stars(sc) + "</div>";
      host.querySelector(".so-menu").classList.add("off");
      setTimeout(then, 1500);
    }
    function speakTask(go) {
      var phrase = R(SAYS[ctx.stage] || SAYS.children), tries2 = 0;
      host.querySelector(".so-menu").classList.add("off");
      var tray0 = host.querySelector(".so-tray");
      tray0.innerHTML = '<div class="so-say"><small>Say it to your visitor</small><b>' + phrase + '</b><div class="so-sbtns"><button type="button" class="so-mic" id="so-mic">' + I.mic + 'Tap and speak</button><button type="button" class="so-skip" id="so-skip">Skip</button></div><span class="so-res" id="so-res"></span></div>';
      host.querySelector("#so-skip").onclick = function () { go(0); };
      host.querySelector("#so-mic").onclick = function () {
        var btn = this, res = host.querySelector("#so-res");
        try {
          var rec = new SR(); rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 3;
          btn.classList.add("rec"); btn.lastChild.textContent = "Listening…";
          var got = false;
          rec.onresult = function (e) {
            got = true; var alts = []; for (var i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
            if (alts.some(function (a) { return heard(phrase, a); })) {
              res.className = "so-res ok"; res.textContent = "Great English! +10 bonus"; if (typeof sfx !== "undefined") sfx.ok();
              setTimeout(function () { go(10); }, 1100);
            } else {
              tries2++; res.className = "so-res"; res.textContent = tries2 >= 2 ? "Good try! Keep practicing." : "I heard “" + alts[0] + "”. Try again!";
              if (tries2 >= 2) setTimeout(function () { go(0); }, 1300);
            }
          };
          rec.onerror = function () { res.textContent = "I couldn’t hear you. Try again or skip."; };
          rec.onend = function () { btn.classList.remove("rec"); btn.lastChild.textContent = "Tap and speak"; };
          try { synth && synth.cancel(); } catch (e2) {} rec.start();
        } catch (e) { go(0); }
      };
    }
    function finish(r) {
      var c = document.getElementById("pkcust"); if (c) c.remove(); document.body.classList.remove("so-on");
      if (r.score >= 4 && Math.random() < .45 || r.score <= 1 && Math.random() < .6 || r.score === 3 && Math.random() < .3) r.review = { s: r.score, t: R(REV[r.score] || REV[4]) };
      ctx.onDone(r);
    }
  }

  /* Visitante esperando junto al puesto en el mapa */
  function showCust(map, o) {
    var old = document.getElementById("pkcust"); if (old) old.remove();
    if (!map || !PK.LOT) return;
    var st = P[o.want[0][0]].stand, L = PK.LOT[st], z = map.querySelector('.pk-zone[data-z="0"]'); if (!L || !z) return;
    var d = document.createElement("div"); d.id = "pkcust"; d.className = "so-cust";
    d.style.left = Math.min(92, L.x + (L.x < 50 ? L.w * .62 : -L.w * .62)) + "%"; d.style.top = (L.y + L.h * .42) + "%";
    d.innerHTML = '<img src="' + vimg(o.v) + '" alt=""><span class="so-cb"><i></i><i></i><i></i></span>';
    z.appendChild(d);
    try { var land = document.getElementById("pkland"); if (land) { var top = z.offsetTop + z.offsetHeight * (L.y / 100) - land.clientHeight * .5; land.scrollTo({ top: Math.max(0, top), behavior: "smooth" }); } } catch (e) {}
  }
  function custHappy(map, ok) { var d = document.getElementById("pkcust"); if (!d) return; d.classList.add(ok ? "happy" : "sad"); d.querySelector(".so-cb").innerHTML = ok ? I.heart : I.cloud; }

  /* Candados en las zonas que aún no se abren */
  function decorate(root) {
    if (!root) return;
    [1, 2].forEach(function (z) {
      var open = zoneOpen(z);
      root.querySelectorAll('.pk-zone[data-z="' + z + '"] .pk-lot').forEach(function (l) {
        l.classList.toggle("so-lock", !open);
        if (!open) { l.classList.remove("can"); var g = gates()[z]; l.firstChild.innerHTML = I.lock + g.r.toFixed(1) + "★"; }
      });
    });
  }

  /* ---------- Nube (cuenta MOVA) ---------- */
  var SB_URL = "https://fclafxrkibvcjktrgznt.supabase.co", SB_KEY = "sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6";
  function U() { try { return window.MovaAuth && window.MovaAuth.user && window.MovaAuth.user(); } catch (e) { return null; } }
  function rpc(fn, args, keep) { return fetch(SB_URL + "/rest/v1/rpc/" + fn, { method: "POST", keepalive: !!keep, headers: { apikey: SB_KEY, "Content-Type": "application/json" }, body: JSON.stringify(args) }).then(function (r) { return r.ok ? r.json() : null; }); }
  function localPark() { try { return JSON.parse(localStorage.getItem(PARKKEY) || "null"); } catch (e) { return null; } }
  function localTs() { var p = localPark(); return Math.max(ST.ts || 0, (p && p.t) || 0); }
  function cloudPush(keep) {
    var u = U(); if (!u || !u.token || !PARKKEY) return; clearTimeout(cloudT);
    var ts = localTs(); if (!ts) return;
    rpc("game_save", { p_token: u.token, p_username: u.username || null, p_game: "sugar-town", p_data: { park: localPark(), st: ST }, p_ts: ts }, keep).catch(function () {});
  }
  function cloudLater() { clearTimeout(cloudT); cloudT = setTimeout(cloudPush, 2500); }
  function pull(cb) {
    var u = U(); if (pulled || !u || !u.token || !PARKKEY) return; pulled = true;
    rpc("game_load", { p_token: u.token, p_username: u.username || null, p_game: "sugar-town" }).then(function (r) {
      if (!r || r.ok === false) return;
      if (r.data && (r.ts || 0) > localTs()) {
        try { if (r.data.park) localStorage.setItem(PARKKEY, JSON.stringify(r.data.park)); if (r.data.st) localStorage.setItem(KEY, JSON.stringify(r.data.st)); } catch (e) {}
        load(PARKKEY); if (cb) cb();
      } else if (localTs() > (r.ts || 0)) cloudPush();
    }).catch(function () {});
  }
  addEventListener("pagehide", function () { cloudPush(true); });
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") cloudPush(true); });

  /* ---------- Estilos ---------- */
  var css = ".so{animation:soin .3s ease}.so.shake{animation:shk .35s}@keyframes soin{from{opacity:0;transform:translateY(8px)}}" +
    ".so-top{display:flex;gap:10px;align-items:flex-end}" +
    ".so-vw{position:relative;flex:none;width:76px;height:88px;display:flex;align-items:flex-end;justify-content:center}.so-vis{max-width:100%;max-height:100%;filter:drop-shadow(0 4px 6px rgba(21,25,43,.2));animation:sobob 1.6s ease-in-out infinite alternate}@keyframes sobob{to{transform:translateY(-3px)}}" +
    ".so-mood{position:absolute;top:-4px;right:-6px;animation:sopop .4s cubic-bezier(.2,1.6,.4,1)}.so-mood:empty{display:none}@keyframes sopop{from{transform:scale(.2)}}" +
    ".so-bub{flex:1;min-width:0;background:#FFF1F8;border-radius:20px 20px 20px 6px;padding:10px 12px;position:relative}" +
    ".so-txt{font:700 15px/1.35 'Plus Jakarta Sans',sans-serif;color:#15192B;min-height:22px}.so-k{display:block;font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#C2407F;margin-bottom:2px}" +
    ".so-dots{display:inline-flex;gap:5px;padding:4px 0}.so-dots i{width:8px;height:8px;border-radius:50%;background:#F3A6CC;animation:bl 1.2s infinite}.so-dots i:nth-child(2){animation-delay:.2s}.so-dots i:nth-child(3){animation-delay:.4s}" +
    ".so-btns{display:flex;gap:6px;margin-top:8px}.so-b{border:0;border-radius:999px;padding:7px 12px;font:800 13px 'Plus Jakarta Sans',sans-serif;display:inline-flex;align-items:center;gap:6px;background:#fff;color:#7A2A63;cursor:pointer}.so-b.dark{background:#15192B;color:#fff}.so-b.used{opacity:.45}" +
    ".so-pat{height:7px;border-radius:999px;background:#F1EDF6;overflow:hidden;margin:10px 0 8px}.so-pat i{display:block;height:100%;background:linear-gradient(90deg,#7FC8A9,#B9E08A);transform-origin:left;border-radius:999px}.so-pat.low i{background:#F08080}" +
    ".so-tray{display:flex;align-items:center;gap:8px;background:#F6F3FB;border-radius:18px;padding:6px 6px 6px 8px;min-height:58px}" +
    ".so-tl{flex:1;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;min-height:46px;align-items:center}.so-ph{font:700 12.5px 'Plus Jakarta Sans',sans-serif;color:#8B8FA3;padding-left:4px}" +
    ".so-c{position:relative;flex:none;width:46px;height:46px;border:0;border-radius:14px;background:#fff;padding:4px;box-shadow:0 2px 0 #E4DFEE;cursor:pointer}.so-c img{width:100%;height:100%;object-fit:contain}.so-c b{position:absolute;bottom:-4px;left:-4px;background:#15192B;color:#fff;font:800 11px/1 'Plus Jakarta Sans',sans-serif;border-radius:999px;padding:3px 6px}.so-x{position:absolute;top:-5px;right:-5px;width:18px;height:18px;border-radius:50%;background:#fff;color:#C2407F;display:grid;place-items:center;box-shadow:0 1px 3px rgba(0,0,0,.2)}" +
    ".so-serve{flex:none;border:0;border-radius:999px;background:linear-gradient(90deg,#FF8FC8,#FFB86B);color:#3A1F4A;font:800 15px 'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;padding:12px 18px;box-shadow:0 4px 0 #E06FA8;cursor:pointer}.so-serve:disabled{opacity:.4;box-shadow:none}" +
    ".so-menu{display:grid;grid-template-columns:repeat(auto-fill,minmax(58px,1fr));gap:7px;margin-top:10px;transition:opacity .3s}.so-menu.many{grid-template-columns:repeat(auto-fill,minmax(50px,1fr))}.so-menu.off{opacity:.35;pointer-events:none}" +
    ".so-p{aspect-ratio:1;border:2px solid #EFE9F6;background:#fff;border-radius:16px;padding:5px;box-shadow:0 3px 0 #EFE9F6;cursor:pointer}.so-p img{width:100%;height:100%;object-fit:contain}.so-p:active{transform:translateY(2px);box-shadow:none}.so-p.pop{animation:sotap .3s}@keyframes sotap{50%{transform:scale(.9)}}" +
    ".so-paid,.so-ans{flex:1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.so-coin{display:inline-flex;align-items:center;gap:4px;background:#FCE38A;color:#1B2A55;font:800 17px 'Bricolage Grotesque',sans-serif;border-radius:999px;padding:5px 12px 5px 6px;animation:sopop .4s cubic-bezier(.2,1.6,.4,1)}.so-tip{background:#E3F5EA;color:#2F7A55;font:800 13px 'Plus Jakarta Sans',sans-serif;border-radius:999px;padding:5px 10px}.so-stars{display:inline-flex;gap:1px;margin-left:auto}" +
    ".so-ans span{position:relative;width:44px;height:44px;background:#fff;border-radius:12px;padding:4px}.so-ans img{width:100%;height:100%;object-fit:contain}.so-ans b{position:absolute;bottom:-4px;left:-4px;background:#15192B;color:#fff;font:800 11px/1 'Plus Jakarta Sans',sans-serif;border-radius:999px;padding:3px 6px}" +
    ".so-say{flex:1;text-align:center;padding:4px}.so-say small{display:block;font:800 11px 'Plus Jakarta Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#7A2A63}.so-say>b{display:block;font:800 19px/1.25 'Bricolage Grotesque',sans-serif;color:#15192B;margin:3px 0 8px}" +
    ".so-sbtns{display:flex;gap:8px;justify-content:center}.so-mic{border:0;border-radius:999px;background:#15192B;color:#fff;font:800 14px 'Plus Jakarta Sans',sans-serif;padding:10px 16px;display:inline-flex;align-items:center;gap:7px;cursor:pointer}.so-mic.rec{background:#E04E98;animation:somic 1s infinite}@keyframes somic{50%{box-shadow:0 0 0 8px rgba(224,78,152,.18)}}.so-skip{border:0;background:none;font:700 13px 'Plus Jakarta Sans',sans-serif;color:#8B8FA3;text-decoration:underline;cursor:pointer}" +
    ".so-res{display:block;min-height:18px;margin-top:6px;font:700 13px 'Plus Jakarta Sans',sans-serif;color:#7A2A63}.so-res.ok{color:#2F7A55}" +
    ".so-cust{position:absolute;width:13%;translate:-50% -95%;z-index:300;pointer-events:none;animation:soin .4s ease}.so-cust img{width:100%;display:block;filter:drop-shadow(0 3px 3px rgba(0,0,0,.25))}" +
    ".so-cb{position:absolute;left:50%;top:-30px;translate:-50% 0;background:#fff;border-radius:14px;padding:5px 8px;display:flex;gap:3px;box-shadow:0 4px 10px rgba(21,25,43,.25)}.so-cb i{width:6px;height:6px;border-radius:50%;background:#F3A6CC;animation:bl 1.2s infinite}.so-cb i:nth-child(2){animation-delay:.2s}.so-cb i:nth-child(3){animation-delay:.4s}.so-cb svg{width:20px;height:20px}" +
    ".so-cust.happy{animation:sojump .5s 2}@keyframes sojump{50%{transform:translateY(-8px)}}.so-cust.sad{opacity:.75}" +
    ".pk-lot.so-lock{filter:grayscale(.6);opacity:.8}.pk-lot.so-lock .pk-tag{background:#15192B!important;color:#fff!important;display:inline-flex;align-items:center;gap:3px}" +
    ".pkrv{position:absolute;left:50%;top:calc(env(safe-area-inset-top,0px) + 104px);transform:translateX(-50%);z-index:421;background:#fff;color:#15192B;border-radius:18px;padding:9px 14px;font:700 14px/1.3 'Plus Jakarta Sans',sans-serif;text-align:center;box-shadow:0 10px 26px rgba(21,25,43,.3);max-width:86%;animation:pklv 3s ease both;pointer-events:none}.pkrv .so-stars{display:flex;justify-content:center;margin:0 0 3px}" +
    ".pkstar{display:inline-flex;align-items:center;gap:4px}" +
    "body.so-on .pkworld{height:calc(100vh - 430px);height:calc(100dvh - 430px);min-height:170px}@media (min-height:760px){body.so-on .pkworld{height:calc(100dvh - 400px)}}";
  try { var s = document.createElement("style"); s.id = "mova-sugar-css"; s.textContent = css; document.head.appendChild(s); } catch (e) {}

  window.MOVA_SUGAR = {
    P: P, VIS: VIS, load: load, save: save, rating: rating, ratingTxt: ratingTxt, stars: stars, star: I.star,
    zoneOpen: zoneOpen, lockedAttr: lockedAttr, gateText: gateText, gain: gain, menu: menu, wantOrder: wantOrder,
    serve: serve, session: session, timed: function () { return TIMED; }, decorate: decorate, pull: pull, push: cloudPush, later: cloudLater, state: function () { return ST; },
    vimg: function (id, s) { return "st-v-" + id + "-" + (s || "a") + ".webp?v=" + V; }
  };
})();
