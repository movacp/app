/* MOVA · Quiz mensual de Lectoescritura (digital).
   Ruta: #/lecto-quiz/<nivel>   (index.html?task=<id>#/lecto-quiz/<nivel> cuando lo asigna la maestra)
   Niveles: silabas-aeio (Bloques 1–4), silabas-u (sílabas con u, b·d·p·q), enunciados (frases y lectura).
   Guarda el resultado como actividad "lecto-quiz" con detail.kind = "lecto-quiz" y detail.nivel. */
(function () {
  "use strict";
  var INK = "#15192B", LIME = "#D3F36B", LAV = "#E6E2FF", PINK = "#FFE1EE", SKY = "#D9EEFF", BUT = "#FFF1C9";
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuf(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function img(n) { return n === "dado" ? '<svg viewBox="0 0 64 64" class="lq-im"><rect x="6" y="6" width="52" height="52" rx="10" fill="#fff" stroke="#15192B" stroke-width="3"/><circle cx="20" cy="20" r="5" fill="#15192B"/><circle cx="32" cy="32" r="5" fill="#15192B"/><circle cx="44" cy="44" r="5" fill="#15192B"/></svg>' : '<img class="lq-im" src="' + n + '.webp" alt="">'; }

  /* Tipos: pic (lee la palabra/oración → elige dibujo), word (mira dibujo → elige palabra), syl (sílaba que falta),
     spell (palabra bien escrita), fill (completa la oración), read (lectura + pregunta), order (ordena la oración) */
  var LEVELS = {
    "silabas-aeio": { n: "Quiz de Lectoescritura", sub: "Sílabas con a, e, i, o · Bloques 1 a 4", qs: [
      { t: "pic", w: "casa", o: ["house", "table", "bed"], a: 0 },
      { t: "pic", w: "pera", o: ["apple", "pear", "banana"], a: 1 },
      { t: "pic", w: "sol", o: ["moon", "tree", "sun"], a: 2 },
      { t: "word", i: "table", o: ["mesa", "masa", "misa"], a: 0 },
      { t: "word", i: "duck", o: ["pelo", "pato", "pino"], a: 1 },
      { t: "word", i: "boots", o: ["bota", "bate", "dona"], a: 0 },
      { t: "syl", i: "tomato", w: "__mate", o: ["ta", "to", "ti"], a: 1 },
      { t: "syl", i: "book", w: "__bro", o: ["li", "la", "lo"], a: 0 },
      { t: "syl", i: "milk", w: "__che", o: ["la", "lo", "le"], a: 2 },
      { t: "read", x: "Lola tiene un gato. El gato come pescado. Lola y el gato miran el sol.", q: "¿Qué tiene Lola?", o: ["un pato", "un gato", "una dona"], a: 1 },
      { t: "read", x: "Lola tiene un gato. El gato come pescado. Lola y el gato miran el sol.", q: "¿Qué miran Lola y el gato?", o: ["el sol", "la mesa", "la casa"], a: 0 },
      { t: "order", w: ["El", "pato", "come", "pan."] }
    ] },
    "silabas-u": { n: "Quiz de Lectoescritura", sub: "Sílabas con a, e, i, o, u · b, d, p, q", qs: [
      { t: "pic", w: "luna", o: ["sun", "moon", "tree"], a: 1 },
      { t: "pic", w: "uvas", o: ["grapes", "apple", "pear"], a: 0 },
      { t: "word", i: "rabbit", o: ["conejo", "cometa", "camino"], a: 0 },
      { t: "syl", i: "moon", w: "__na", o: ["la", "lu", "lo"], a: 1 },
      { t: "syl", i: "grapes", w: "__vas", o: ["o", "a", "u"], a: 2 },
      { t: "syl", i: "frog", w: "ra__", o: ["na", "ma", "pa"], a: 0 },
      { t: "spell", i: "duck", o: ["qato", "pato", "dato"], a: 1 },
      { t: "spell", i: "cheese", o: ["queso", "pueso", "bueso"], a: 0 },
      { t: "spell", i: "dado", o: ["babo", "dado", "pado"], a: 1 },
      { t: "read", x: "Lupita tiene un conejo blanco. Se llama Copito. A Copito le gustan las uvas.", q: "¿Cómo se llama el conejo?", o: ["Lupita", "Copito", "Toto"], a: 1 },
      { t: "read", x: "Lupita tiene un conejo blanco. Se llama Copito. A Copito le gustan las uvas.", q: "¿Qué le gusta comer a Copito?", o: ["las uvas", "la sopa", "el queso"], a: 0 },
      { t: "order", w: ["La", "luna", "es", "bonita."] }
    ] },
    "enunciados": { n: "Quiz de Lectoescritura", sub: "Frases y enunciados · Comprensión lectora", qs: [
      { t: "pic", w: "El perro duerme en su cama.", o: ["cat", "dog", "bird"], a: 1 },
      { t: "pic", w: "La niña come una manzana.", o: ["banana", "cookie", "apple"], a: 2 },
      { t: "pic", w: "El pez nada en el agua.", o: ["fish", "duck", "frog"], a: 0 },
      { t: "fill", s: "Hace frío, me pongo mis ___.", o: ["botas", "uvas", "sopas"], a: 0 },
      { t: "fill", s: "En la noche sale la ___.", o: ["mesa", "luna", "pera"], a: 1 },
      { t: "fill", s: "El ___ salta en el pasto.", o: ["queso", "pastel", "conejo"], a: 2 },
      { t: "spell", i: "baby", o: ["dedé", "bebé", "pepé"], a: 1 },
      { t: "spell", i: "cheese", o: ["queso", "pueso", "dueso"], a: 0 },
      { t: "read", x: "Sofía hizo una fiesta por su cumpleaños. Invitó a sus amigos del salón. Comieron pastel de chocolate y jugaron con globos. Al final, Sofía abrió sus regalos. ¡Fue un día muy feliz!", q: "¿Por qué hizo Sofía una fiesta?", o: ["por su cumpleaños", "por Navidad", "por la escuela"], a: 0 },
      { t: "read", x: "Sofía hizo una fiesta por su cumpleaños. Invitó a sus amigos del salón. Comieron pastel de chocolate y jugaron con globos. Al final, Sofía abrió sus regalos. ¡Fue un día muy feliz!", q: "¿De qué era el pastel?", o: ["de fresa", "de vainilla", "de chocolate"], a: 2 },
      { t: "read", x: "Sofía hizo una fiesta por su cumpleaños. Invitó a sus amigos del salón. Comieron pastel de chocolate y jugaron con globos. Al final, Sofía abrió sus regalos. ¡Fue un día muy feliz!", q: "¿Qué hizo Sofía al final?", o: ["se durmió", "abrió sus regalos", "fue al parque"], a: 1 },
      { t: "order", w: ["Mi", "gato", "duerme", "en", "el", "sillón."] }
    ] }
  };

  var CSS = '.lq{max-width:720px;margin:0 auto;padding:18px 16px 60px;font-family:Poppins,system-ui,sans-serif;color:' + INK + '}' +
    '.lq-hero{background:' + INK + ';color:#fff;border-radius:26px;padding:20px 22px;display:flex;gap:16px;align-items:center;position:relative;overflow:hidden}' +
    '.lq-hero img{height:84px}.lq-hero small{display:block;color:' + LIME + ';font-weight:700;letter-spacing:.08em;font-size:12px}.lq-hero h1{margin:2px 0 4px;font-size:26px;line-height:1.1;color:#fff}.lq-hero p{margin:0;color:#C9CCE0;font-size:14px}' +
    '.lq-card{background:#fff;border:1.5px solid #ECE9F4;border-radius:24px;padding:20px;margin-top:16px;box-shadow:0 6px 20px rgba(21,25,43,.06)}' +
    '.lq-bar{height:10px;border-radius:9px;background:#EEEAF6;overflow:hidden;margin:14px 0 4px}.lq-bar i{display:block;height:100%;background:' + LIME + ';border-radius:9px;transition:width .3s}' +
    '.lq-n{font-size:12.5px;font-weight:700;color:#6A6F85;letter-spacing:.06em;text-transform:uppercase}' +
    '.lq-ins{font-size:17px;font-weight:700;margin:8px 0 12px}' +
    '.lq-w{font-size:34px;font-weight:800;text-align:center;margin:8px 0 14px;letter-spacing:.02em}.lq-w.s{font-size:24px;line-height:1.35}' +
    '.lq-im{height:96px;width:auto;max-width:100%;display:block;margin:0 auto}' +
    '.lq-big{display:flex;justify-content:center;margin:4px 0 12px}.lq-big .lq-im{height:120px}' +
    '.lq-o{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}' +
    '.lq-o button{font:inherit;background:#fff;border:2px solid #E3DFEE;border-radius:20px;padding:14px 8px;cursor:pointer;font-size:24px;font-weight:700;color:' + INK + ';transition:transform .1s,border-color .15s;min-height:64px}' +
    '.lq-o.t button{font-size:18px}.lq-o button:active{transform:scale(.97)}' +
    '.lq-o button.ok{border-color:#7BC86C;background:#EEF9E6}.lq-o button.no{border-color:#FF8FB0;background:#FFEFF4}' +
    '.lq-rd{background:' + SKY + ';border-radius:18px;padding:14px 16px;font-size:19px;line-height:1.6;margin-bottom:12px;display:flex;gap:12px;align-items:center}.lq-rd img{height:64px}' +
    '.lq-sl{display:flex;flex-wrap:wrap;gap:8px;min-height:58px;border:2px dashed #C9C4D9;border-radius:18px;padding:10px;margin-bottom:12px;align-items:center}' +
    '.lq-ch{font:inherit;font-size:21px;font-weight:700;border:2px solid #E3DFEE;background:#fff;border-radius:14px;padding:8px 14px;cursor:pointer;color:' + INK + '}' +
    '.lq-ch.u{background:' + LAV + ';border-color:' + LAV + '}' +
    '.lq-pool{display:flex;flex-wrap:wrap;gap:8px}' +
    '.lq-fb{margin-top:12px;font-weight:700;font-size:16px;min-height:22px}' +
    '.lq-btn{font:inherit;font-weight:800;font-size:17px;border:0;border-radius:999px;padding:14px 26px;background:' + INK + ';color:#fff;cursor:pointer;display:inline-block;text-decoration:none}' +
    '.lq-btn.g{background:#EEEAF6;color:' + INK + '}.lq-row{display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap}' +
    '.lq-res{text-align:center}.lq-res .big{font-size:64px;font-weight:800;line-height:1}.lq-res img{height:110px}' +
    '.lq-note{background:' + BUT + ';border-radius:18px;padding:14px 16px;margin-top:14px;font-size:15.5px;line-height:1.5}' +
    '@media (max-width:520px){.lq-o{gap:8px}.lq-o button{font-size:20px;padding:10px 4px}.lq-im{height:76px}.lq-w{font-size:28px}}';
  function css() { if (document.getElementById("lq-css")) return; var s = document.createElement("style"); s.id = "lq-css"; s.textContent = CSS; document.head.appendChild(s); }

  function who() { try { return window.MovaAuth && window.MovaAuth.user ? window.MovaAuth.user() : null; } catch (e) { return null; } }
  function taskId() { try { return new URLSearchParams(location.search).get("task") || undefined; } catch (e) { return undefined; } }

  function qHtml(q) {
    var o = q.o ? shuf(q.o.map(function (x, i) { return { x: x, ok: i === q.a }; })) : []; q._o = o;
    if (q.t === "pic") return '<p class="lq-ins">Lee y toca el dibujo correcto.</p><div class="lq-w' + (q.w.length > 12 ? " s" : "") + '">' + esc(q.w) + '</div><div class="lq-o">' + o.map(function (c, i) { return '<button type="button" data-i="' + i + '">' + img(c.x) + '</button>'; }).join("") + "</div>";
    if (q.t === "word") return '<p class="lq-ins">¿Cómo se llama? Toca la palabra.</p><div class="lq-big">' + img(q.i) + '</div><div class="lq-o">' + o.map(function (c, i) { return '<button type="button" data-i="' + i + '">' + esc(c.x) + '</button>'; }).join("") + "</div>";
    if (q.t === "syl") return '<p class="lq-ins">¿Qué sílaba falta?</p><div class="lq-big">' + img(q.i) + '</div><div class="lq-w">' + esc(q.w).replace("__", '<span style="display:inline-block;min-width:56px;border-bottom:4px solid ' + INK + '">&nbsp;</span>') + '</div><div class="lq-o">' + o.map(function (c, i) { return '<button type="button" data-i="' + i + '">' + esc(c.x) + '</button>'; }).join("") + "</div>";
    if (q.t === "spell") return '<p class="lq-ins">Toca la palabra bien escrita.</p><div class="lq-big">' + img(q.i) + '</div><div class="lq-o">' + o.map(function (c, i) { return '<button type="button" data-i="' + i + '">' + esc(c.x) + '</button>'; }).join("") + "</div>";
    if (q.t === "fill") return '<p class="lq-ins">Completa la oración.</p><div class="lq-w s">' + esc(q.s).replace("___", '<span style="display:inline-block;min-width:80px;border-bottom:3px solid ' + INK + '">&nbsp;</span>') + '</div><div class="lq-o t">' + o.map(function (c, i) { return '<button type="button" data-i="' + i + '">' + esc(c.x) + '</button>'; }).join("") + "</div>";
    if (q.t === "read") return '<p class="lq-ins">Lee con atención y contesta.</p><div class="lq-rd"><img src="mochi-lee.webp" alt=""><div>' + esc(q.x) + '</div></div><div class="lq-w s" style="font-size:21px">' + esc(q.q) + '</div><div class="lq-o t">' + o.map(function (c, i) { return '<button type="button" data-i="' + i + '">' + esc(c.x) + '</button>'; }).join("") + "</div>";
    if (q.t === "order") { q._p = shuf(q.w.map(function (x, i) { return { x: x, k: i }; })); return '<p class="lq-ins">Toca las palabras en orden para formar la oración.</p><div class="lq-sl" data-sl></div><div class="lq-pool" data-pool>' + q._p.map(function (c, i) { return '<button type="button" class="lq-ch" data-p="' + i + '">' + esc(c.x) + '</button>'; }).join("") + '</div><div class="lq-row"><button type="button" class="lq-btn g" data-clr>Borrar</button><button type="button" class="lq-btn" data-ok disabled>Revisar</button></div>'; }
    return "";
  }

  function run(box, L, key) {
    var Q = L.qs.map(function (q) { return JSON.parse(JSON.stringify(q)); }), i = 0, score = 0, misses = [], t0 = Date.now(), done = false;
    function show() {
      var q = Q[i];
      box.innerHTML = '<div class="lq-card"><div class="lq-n">Pregunta ' + (i + 1) + " de " + Q.length + '</div><div class="lq-bar"><i style="width:' + Math.round(i / Q.length * 100) + '%"></i></div>' + qHtml(q) + '<div class="lq-fb" data-fb></div></div>';
      var card = box.querySelector(".lq-card"), fb = card.querySelector("[data-fb]"), locked = false;
      function next(ok) { locked = true; if (ok) score++; else misses.push(q.t); fb.innerHTML = ok ? '<span style="color:#3E8E32">¡Muy bien!</span>' : '<span style="color:#C2366A">Sigamos adelante.</span>'; setTimeout(function () { i++; if (i < Q.length) show(); else end(); }, ok ? 800 : 1300); }
      if (q.t === "order") {
        var sl = card.querySelector("[data-sl]"), pool = card.querySelector("[data-pool]"), okb = card.querySelector("[data-ok]"), seq = [];
        function upd() { sl.innerHTML = seq.map(function (k) { return '<span class="lq-ch u">' + esc(q._p[k].x) + "</span>"; }).join(""); pool.querySelectorAll("[data-p]").forEach(function (b) { b.style.visibility = seq.indexOf(+b.dataset.p) > -1 ? "hidden" : ""; }); okb.disabled = seq.length !== q.w.length; }
        pool.addEventListener("click", function (e) { var b = e.target.closest("[data-p]"); if (!b || locked) return; seq.push(+b.dataset.p); upd(); });
        card.querySelector("[data-clr]").onclick = function () { if (locked) return; seq = []; upd(); };
        okb.onclick = function () { if (locked) return; var ok = seq.every(function (k, j) { return q._p[k].k === j; }); if (!ok) sl.insertAdjacentHTML("beforeend", '<div style="width:100%;font-size:15px;color:#4E5268;margin-top:6px">Correcta: <b>' + esc(q.w.join(" ")) + "</b></div>"); next(ok); };
        return;
      }
      card.querySelectorAll(".lq-o [data-i]").forEach(function (b) {
        b.onclick = function () { if (locked) return; var c = q._o[+b.dataset.i]; b.classList.add(c.ok ? "ok" : "no"); if (!c.ok) card.querySelectorAll(".lq-o [data-i]").forEach(function (x) { if (q._o[+x.dataset.i].ok) x.classList.add("ok"); }); next(c.ok); };
      });
    }
    function end() {
      if (done) return; done = true;
      var total = Q.length, grade = Math.round(score / total * 100) / 10, pct = Math.round(score / total * 100);
      try { if (who()) window.MovaAuth.save("lecto-quiz", L.n + " · " + L.sub, score, total, { kind: "lecto-quiz", nivel: key, task: taskId(), pct: pct, weak: misses, secs: Math.min(5400, Math.round((Date.now() - t0) / 1000)) }); } catch (e) {}
      var u = who(), first = u && (u.name || u.display_name) ? String(u.name || u.display_name).split(" ")[0] : "";
      box.innerHTML = '<div class="lq-card lq-res"><img src="' + (pct >= 70 ? "mochi-salta.webp" : "mochi-hola.webp") + '" alt=""><div class="lq-n" style="margin-top:8px">' + esc(L.sub) + '</div><div class="big">' + grade.toFixed(1) + '</div><p style="margin:4px 0 0;font-weight:800;color:#4E5268">' + score + " de " + total + ' aciertos</p>' +
        '<div class="lq-note">' + (first ? esc(first) + ", terminaste" : "Terminaste") + " tu quiz. " + (pct >= 90 ? "¡Excelente lectura!" : pct >= 70 ? "¡Muy buen trabajo!" : "Gracias por tu esfuerzo; vamos a seguir practicando juntos.") + '</div><div class="lq-row"><a class="lq-btn" href="#/">Terminar</a></div></div>';
      window.scrollTo(0, 0);
    }
    show();
  }

  function view(p) {
    css();
    var key = p && p[0], L = LEVELS[key];
    if (!L) return { title: "Quiz de Lectoescritura", html: '<section class="lq"><div class="lq-card"><p>Este quiz no existe. Pídele a tu maestra el enlace correcto.</p><a class="lq-btn" href="#/">Ir al inicio</a></div></section>' };
    var html = '<section class="lq"><div class="lq-hero"><img src="mochi-lee.webp" alt=""><div><small>QUIZ MENSUAL</small><h1>' + esc(L.n) + "</h1><p>" + esc(L.sub) + '</p></div></div><div id="lq-box"></div></section>';
    return { title: L.n, html: html, mount: function (root) {
      var box = root.querySelector("#lq-box");
      box.innerHTML = '<div class="lq-card"><div class="lq-ins" style="font-size:20px">' + L.qs.length + ' preguntas</div><p style="margin:0;font-size:16px;line-height:1.5">Lee cada pregunta con calma y toca tu respuesta. Al final verás tu resultado.</p>' +
        (who() ? "" : '<p style="background:' + PINK + ';border-radius:14px;padding:10px 14px;font-size:14px">Inicia sesión con tu usuario MOVA para que tu maestra reciba tu calificación.</p>') +
        '<div class="lq-row"><button type="button" class="lq-btn" data-go>Empezar quiz</button></div></div>';
      box.querySelector("[data-go]").onclick = function () { run(box, L, key); };
    } };
  }

  window.MovaLectoQuiz = { LEVELS: LEVELS };
  var tries = 0;
  function install() {
    try { if (typeof ROUTES === "undefined") return false; } catch (e) { return false; }
    ROUTES["lecto-quiz"] = view;
    if (/^#\/lecto-quiz/.test(location.hash) && typeof router === "function") router();
    return true;
  }
  function boot() { if (install() || ++tries > 80) return; setTimeout(boot, 250); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(boot, 50); }); else setTimeout(boot, 50);
})();
