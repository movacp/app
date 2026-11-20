/* MOVA Math · Temas de 4° de primaria
   Mismo orden que el índice de «Matemáticas en Movimiento · Primaria, 4° grado».
   Cada tema: learn (Aprende), mira (Mira cómo se hace) y gen (generadores de ejercicios por nivel: 0 Nivelación, 1 Mi grado, 2 Reto). */
(function () {
  "use strict";
  var M = window.MovaTemas; if (!M) return;
  var Q = M.Q, V = M.V, U = M.U, C = M.C;
  var MC = Q.MC, TF = Q.TF, NUM = Q.NUM, FR = Q.FR, FILL = Q.FILL, COL = Q.COL, SHADE = Q.SHADE, ORDER = Q.ORDER, LINE = Q.LINE, MATCH = Q.MATCH, SORT = Q.SORT, BARS = Q.BARS;
  var R = U.R, pick = U.pick, shuf = U.shuf, rnd = U.rnd, fmt = U.fmt, fr = U.fr, nm = U.nm, words = U.words, wordsDec = U.wordsDec, money = U.money;
  var LAV = C.LAV, PINK = C.PINK, SKY = C.SKY, LIME = C.LIME, BUT = C.BUT, MINT = C.MINT;
  function G(k, f, lv) { return { k: k, f: f, lv: lv }; }
  function ex(s) { return '<div class="mt-ex">' + s + "</div>"; }
  function hl(s) { return "<mark>" + s + "</mark>"; }
  function tbl(head, rows) { return '<table class="mt-tbl"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" + rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>"; }
  function digits(n) { return String(n).split("").map(Number); }
  function noCarry(a, b) { var A = digits(a).reverse(), B = digits(b).reverse(), o = []; for (var i = 0; i < Math.max(A.length, B.length); i++) o.push(((A[i] || 0) + (B[i] || 0)) % 10); return Number(o.reverse().join("")); }
  function carries(a, b) { var A = digits(a).reverse(), B = digits(b).reverse(), c = 0, k = 0; for (var i = 0; i < Math.max(A.length, B.length); i++) { var s = (A[i] || 0) + (B[i] || 0) + c; c = s >= 10 ? 1 : 0; k += c; } return k; }
  function absDiff(a, b) { var A = digits(a).reverse(), B = digits(b).reverse(), o = []; for (var i = 0; i < A.length; i++) o.push(Math.abs(A[i] - (B[i] || 0))); return Number(o.reverse().join("")); }
  function borrows(a, b) { var A = digits(a).reverse(), B = digits(b).reverse(), c = 0, k = 0; for (var i = 0; i < A.length; i++) { var d = A[i] - (B[i] || 0) - c; c = d < 0 ? 1 : 0; k += c; } return k; }
  function mulNoCarry(a, m) { return Number(digits(a).map(function (d) { return (d * m) % 10; }).join("")); }
  function nDig(L) { return L === 0 ? R(1000, 9999) : L === 1 ? R(10000, 99999) : R(100000, 999999); }
  function withZero(L) { var s = String(nDig(L)).split(""); var i = R(1, s.length - 2); s[i] = "0"; if (L === 2) s[R(1, s.length - 1)] = "0"; return Number(s.join("")); }
  var PLACES = ["unidades", "decenas", "centenas", "unidades de millar", "decenas de millar", "centenas de millar"];
  var PSH = ["U", "D", "C", "UM", "DM", "CM"];
  var FN = { 2: ["medio", "medios"], 3: ["tercio", "tercios"], 4: ["cuarto", "cuartos"], 5: ["quinto", "quintos"], 6: ["sexto", "sextos"], 7: ["séptimo", "séptimos"], 8: ["octavo", "octavos"], 9: ["noveno", "novenos"], 10: ["décimo", "décimos"], 12: ["doceavo", "doceavos"] };
  var NW = ["cero", "un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once"];
  function fname(n, d) { return NW[n] + " " + FN[d][n === 1 ? 0 : 1]; }
  var ORD = ["primero", "segundo", "tercero", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno", "décimo", "undécimo", "duodécimo", "decimotercero", "decimocuarto", "decimoquinto", "decimosexto", "decimoséptimo", "decimoctavo", "decimonoveno", "vigésimo"];
  function frEq(a, b) { return fr(a[0], a[1]) + " = " + fr(b[0], b[1]); }
  function frBox(n, d) { return '<span class="mt-fr"><span>' + n + "</span><span>" + d + "</span></span>"; }
  function cbar(len, c) { return '<svg class="mt-svg" viewBox="0 0 300 40" style="max-width:150px"><rect x="4" y="6" width="' + len + '" height="28" rx="4" fill="' + (c || LAV) + '" stroke="#15192B" stroke-width="2.4"/></svg>'; }
  function fpie(n, k, c) { return V.pie(n, k, c, { r: 32 }); }

  var GAMES = { "mision-matematica": { n: "Misión Matemática" }, "la-tiendita": { n: "La Tiendita" }, "que-hora-es": { n: "¿Qué hora es?" }, "detective-patrones": { n: "Detective de patrones" }, "pizzeria-fracciones": { n: "Pizzería de fracciones" }, "lluvia-de-numeros": { n: "Lluvia de números" } };

  /* =====================================================================
     UNIDAD 1 · NÚMEROS NATURALES
     ===================================================================== */
  var t1 = { id: "lectura-numeros", n: "Lectura y escritura de números", d: "Leer y escribir números de hasta seis cifras.", game: "mision-matematica",
    learn: [
      { h: "Cada cifra vale según su lugar", p: "En un número, cada cifra ocupa un lugar: unidades, decenas, centenas, unidades de millar y decenas de millar. El mismo 4 vale distinto según dónde esté.", v: V.pv(47382) + ex("4 " + "<em>vale</em> " + hl("40,000") + "<em>·</em> 7 <em>vale</em> " + hl("7,000")), k: "Cuenta los lugares de derecha a izquierda: U, D, C, UM, DM." },
      { h: "Para leerlo, sepáralo en dos", p: "La coma separa los millares. Primero lees lo que está antes de la coma y dices «mil»; después lees lo que está después de la coma.", v: ex("47,382 <em>→</em> cuarenta y siete " + hl("mil") + " trescientos ochenta y dos"), k: "Lo de la izquierda de la coma son los miles." },
      { h: "El cero también ocupa un lugar", p: "Si un lugar no tiene nada, se escribe 0. Si lo olvidas, el número cambia por completo.", v: ex("treinta mil cuatrocientos cinco <em>→</em> 30,4" + hl("0") + "5"), k: "Después de la coma siempre van tres cifras." }
    ],
    mira: [
      { q: "Escribe con número: <b>sesenta y dos mil ochenta</b>", steps: [["Los miles", "«Sesenta y dos mil» son 62 millares: escribe 62 y la coma."], ["Las tres cifras de después", "«Ochenta» no tiene centenas: 0 centenas, 8 decenas y 0 unidades → 080."], ["Junta todo", "62 , 080."]], a: "62,080" },
      { q: "¿Qué valor tiene el 5 en 35,914?", v: V.pv(35914), steps: [["Busca su lugar", "El 5 está en las unidades de millar."], ["Calcula su valor", "5 unidades de millar = 5 × 1,000."]], a: "5,000" }
    ],
    gen: [
      G("w2n", function (L) { var n = L === 0 ? withZero(0) : withZero(L); var t = {}; var s = String(n), alt = Number(s.replace(/0/g, "")); if (alt !== n) t[alt] = "Olvidaste el cero: cada lugar necesita su cifra aunque no tenga nada."; return NUM("Escribe con número: <b>" + words(n) + "</b>", n, { tr: t, tag: "escribir números con cifras", h: "Primero escribe los miles y la coma; después, siempre tres cifras: centenas, decenas y unidades." }); }),
      G("n2w", function (L) { var n = nDig(L), s = String(n), sw = s.split(""); var i = R(0, s.length - 2); var t = sw[i]; sw[i] = sw[i + 1]; sw[i + 1] = t; var a = Number(sw.join("")); if (a === n) a = n + 1000; var b = n + (L === 0 ? 100 : 10000) * (R(0, 1) ? 1 : -1); if (b < 1000) b = n + 200; if (b > 999999) b = n - 10000; var c = Number(s.slice(0, -3) + "0" + s.slice(-2)); if (c === n) c = n + 10;
        return MC("¿Cómo se lee <b>" + fmt(n) + "</b>?", words(n), [[words(a), "Revisa el orden de las cifras."], [words(b), "Fíjate bien en la primera cifra."], [words(c), ""]], { tag: "leer números", h: "Lee primero lo que está antes de la coma y di «mil»." }); }),
      G("valor", function (L) { var n, s, p, d; do { n = nDig(L); s = String(n); p = R(0, s.length - 1); d = Number(s[s.length - 1 - p]); } while (!d || s.split(String(d)).length !== 2); var v = d * Math.pow(10, p);
        var w = [[fmt(d), "Ese es el dígito; su valor depende del lugar que ocupa."]]; if (p > 0) w.push([fmt(d * Math.pow(10, p - 1)), "Contaste un lugar de menos."]); w.push([fmt(d * Math.pow(10, p + 1)), "Contaste un lugar de más."]);
        return MC("¿Qué valor tiene el <b>" + d + "</b> en " + fmt(n) + "?", fmt(v), w, { v: V.pv(n, PSH.slice(0, s.length).reverse()), tag: "valor posicional", h: "Cuenta los lugares desde la derecha: unidades, decenas, centenas, unidades de millar…" }); }),
      G("desc", function (L) { var n = nDig(L), s = String(n), parts = [], ans = []; s.split("").forEach(function (c, i) { var v = Number(c) * Math.pow(10, s.length - 1 - i); if (v) { parts.push("[[" + ans.length + "]]"); ans.push(v); } });
        return FILL("Descompón el número.", fmt(n) + " = " + parts.join(" + "), ans, { tag: "descomponer números", h: "Cada cifra se escribe con su valor: el 4 de 47,382 vale 40,000.", fe: "Cada casilla lleva el valor de una cifra, en orden de izquierda a derecha." }); }),
      G("tabla", function (L) { var n = L === 0 ? withZero(0) : nDig(L), s = String(n), k = s.length, lay = [], ans = []; s.split("").forEach(function (c, i) { lay.push("[[" + i + "]] " + PLACES[k - 1 - i]); ans.push(Number(c)); });
        return FILL("Completa: ¿cuántas hay de cada una en <b>" + fmt(n) + "</b>?", lay.join(",<br>"), ans, { tag: "valor posicional", h: "Escribe la cifra que está en cada lugar, aunque sea 0." }); }, [0, 1]),
      G("bloques", function () { var n = R(1, 4) * 1000 + R(0, 6) * 100 + R(1, 8) * 10 + R(0, 9), t = {}; t[Number(String(n).split("").reverse().join(""))] = "Escribiste las cifras al revés: primero van los millares.";
        return NUM("¿Qué número forman los bloques?", n, { v: V.blocks(n) + '<p style="font-size:12.5px;color:#6A6F85;text-align:center;margin:6px 0 0">Cubo = 1,000 · placa = 100 · barra = 10 · cubito = 1</p>', tr: t, tag: "leer números con bloques", h: "Cuenta cada tipo de bloque: cubos (millares), placas (centenas), barras (decenas) y cubitos (unidades)." }); }, [0]),
      G("compone", function (L) { var dm = L === 2 ? R(1, 9) : 0, um = R(1, 9), c = 0, d = R(1, 9), u = R(0, 9), cm = L === 2 ? R(1, 9) : 0, n = cm * 100000 + dm * 10000 + um * 1000 + c * 100 + d * 10 + u, t = {}; t[Number(("" + (cm || "") + (dm || "") + um + d + u))] = "Faltó el cero de las centenas: si un lugar no tiene nada, se escribe 0.";
        return NUM("Escribe el número que tiene <b>" + (cm ? cm + " centenas de millar, " : "") + (L === 2 ? dm + " decenas de millar, " : "") + um + " unidades de millar, " + c + " centenas, " + d + " decenas y " + u + " unidades</b>.", n, { tr: t, tag: "escribir números con ceros", h: "Si un lugar no tiene nada, se escribe 0." }); }, [1, 2]),
      G("ord", function (L) { var b = nDig(L), s = String(b), set = {}, a = []; while (a.length < 4) { var t = s.split(""); var i = R(1, s.length - 1); t[i] = String(R(0, 9)); if (Math.random() < .5) { var j = R(1, s.length - 1); t[j] = String(R(0, 9)); } var k = Number(t.join("")); if (!set[k]) { set[k] = 1; a.push(k); } } a.sort(function (x, y) { return x - y; });
        return ORDER("Ordena de <b>menor a mayor</b>. Toca los números en orden.", a.map(fmt), { tag: "comparar números grandes", h: "Compara primero la cifra de la izquierda; si es igual, la siguiente.", oe: "Compara cifra por cifra empezando por la izquierda." }); }, [1, 2])
    ] };

  var t2 = { id: "antecesor-sucesor", n: "Antecesor y sucesor de un número", d: "El número que va antes y el que va después.", game: "mision-matematica",
    learn: [
      { h: "Antes y después", p: "El <b>antecesor</b> es el número que va justo antes: le restas 1. El <b>sucesor</b> es el que va justo después: le sumas 1.", v: V.nl(46, 50, 1, { marks: [[47, "antes", PINK], [48, "", LIME], [49, "después", SKY]] }), k: "Antecesor = número − 1. Sucesor = número + 1." },
      { h: "Cuidado con los nueves", p: "Cuando un número termina en 9, su sucesor cambia varias cifras: el 9 se vuelve 0 y se lleva uno a la izquierda.", v: ex("39,999 + 1 = " + hl("40,000")), k: "Igual con los ceros: el antecesor de 40,000 es 39,999." }
    ],
    mira: [
      { q: "¿Cuál es el sucesor de 59,999?", steps: [["Suma 1", "9 + 1 = 10: escribe 0 y lleva 1."], ["Sigue llevando", "Cada 9 se vuelve 0 hasta llegar al 5, que se vuelve 6."]], a: "60,000" },
      { q: "¿Cuál es el antecesor de 70,100?", steps: [["Resta 1", "No hay unidades: pide prestado a las decenas, que tampoco tienen; pide a las centenas."], ["Resultado", "El 1 de las centenas se vuelve 0 y quedan 9 decenas y 9 unidades."]], a: "70,099" }
    ],
    gen: [
      G("suc", function (L) { var n = L === 0 ? R(10, 99) * 100 - 1 : L === 1 ? R(1, 9) * 10000 + R(1, 9) * 1000 - 1 : R(10, 99) * 10000 - 1, t = {}; t[n - 1] = "Ese es el antecesor. El sucesor va después: suma 1."; t[n + 10] = "Sumaste 10. El sucesor es solo uno más.";
        return NUM("¿Cuál es el <b>sucesor</b> de " + fmt(n) + "?", n + 1, { tr: t, tag: "sucesor de números que terminan en 9", h: "Sucesor = número + 1. Si termina en 9, se vuelve 0 y llevas 1." }); }),
      G("ant", function (L) { var n = L === 0 ? R(2, 9) * 1000 : L === 1 ? R(2, 9) * 10000 + R(0, 1) * 100 : R(2, 9) * 100000, t = {}; t[n + 1] = "Ese es el sucesor. El antecesor va antes: resta 1."; t[n - 10] = "Restaste 10. El antecesor es solo uno menos.";
        return NUM("¿Cuál es el <b>antecesor</b> de " + fmt(n) + "?", n - 1, { tr: t, tag: "antecesor de números con ceros", h: "Antecesor = número − 1. Si termina en ceros, esos ceros se vuelven nueves." }); }),
      G("ambos", function (L) { var n = nDig(L); if (Math.random() < .5) n = Math.floor(n / 10) * 10 + 9;
        return FILL("Escribe el antecesor y el sucesor.", "[[0]] ← <b>" + fmt(n) + "</b> → [[1]]", [n - 1, n + 1], { tag: "antecesor y sucesor", h: "A la izquierda va el número − 1; a la derecha, el número + 1.", fe: "La primera casilla es el antecesor (uno menos) y la segunda el sucesor (uno más)." }); }),
      G("recta", function (L) { var b = L === 0 ? R(20, 90) : L === 1 ? R(1000, 9990) : R(10000, 99990), n = b + 3, ticks = []; for (var i = 0; i <= 6; i++) ticks.push({ v: b + i, show: i === 3 || i === 0 || i === 6 }); var suc = Math.random() < .5;
        return LINE("Toca en la recta el <b>" + (suc ? "sucesor" : "antecesor") + "</b> de " + fmt(n) + ".", ticks, suc ? 4 : 2, { tag: "antecesor y sucesor en la recta", h: "En la recta, los números crecen hacia la derecha. El sucesor está a la derecha y el antecesor a la izquierda.", le: function () { return suc ? "El sucesor está justo a la derecha." : "El antecesor está justo a la izquierda."; } }); }),
      G("tf", function (L) { var cases = [["El sucesor de 9,999 es 10,000.", true], ["El antecesor de 5,000 es 4,000.", false, "Restaste 1,000; el antecesor es 4,999."], ["El sucesor de 29,099 es 29,100.", true], ["El antecesor de 80,000 es 79,999.", true], ["El sucesor de 4,099 es 4,010.", false, "El sucesor de 4,099 es 4,100."], ["El antecesor de 10,000 es 9,000.", false, "El antecesor de 10,000 es 9,999."]], c = pick(cases);
        return TF(c[0], c[1], { tag: "antecesor y sucesor", et: c[2] || "", ef: "", h: "Comprueba sumando o restando 1." }); }),
      G("doble", function (L) { var n = nDig(L), up = Math.random() < .5;
        return NUM("¿Cuál es el " + (up ? "sucesor del sucesor" : "antecesor del antecesor") + " de " + fmt(n) + "?", up ? n + 2 : n - 2, { tag: "sucesor del sucesor", h: "Hazlo dos veces: " + (up ? "suma 1 y luego otra vez 1." : "resta 1 y luego otra vez 1.") }); }, [2]),
      G("entre", function (L) { var n = nDig(L);
        return MC("¿Qué número está <b>entre</b> " + fmt(n - 1) + " y " + fmt(n + 1) + "?", fmt(n), [fmt(n + 10), fmt(n - 10), fmt(n + 2)], { tag: "antecesor y sucesor", h: "El número de en medio es sucesor del primero y antecesor del segundo." }); }, [0, 1])
    ] };

  var t3 = { id: "ordinales", n: "Números ordinales hasta 20°", d: "Los números que dicen el lugar o la posición.", game: "mision-matematica",
    learn: [
      { h: "Los ordinales dicen el lugar", p: "Los números ordinales indican la posición de algo en una fila, una carrera o una lista: primero, segundo, tercero… Se escriben con un circulito: 1°, 2°, 3°.", v: V.queue(6, 2), k: "La niña de la estrella está en el 3° lugar: tercero." },
      { h: "Del 1° al 10°", p: "Primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno y décimo.", v: tbl(["1°", "2°", "3°", "4°", "5°"], [["primero", "segundo", "tercero", "cuarto", "quinto"]]) + tbl(["6°", "7°", "8°", "9°", "10°"], [["sexto", "séptimo", "octavo", "noveno", "décimo"]]) },
      { h: "Del 11° al 20°", p: "11° undécimo (o decimoprimero), 12° duodécimo (o decimosegundo), y después «decimo» + el ordinal: decimotercero, decimocuarto… hasta el 20°, vigésimo.", v: ex("13° " + hl("decimo") + "tercero <em>·</em> 18° " + hl("decimo") + "ctavo <em>·</em> 20° " + hl("vigésimo")), k: "Para una niña se dice primera, segunda, tercera…" }
    ],
    mira: [
      { q: "En una fila de 15 niños, Leo es el 6°. ¿Cuántos niños hay detrás de él?", v: V.queue(15, 5), steps: [["Delante y él", "Del 1° al 6° son 6 niños, contando a Leo."], ["Resta", "15 − 6 = 9 niños están detrás."]], a: "9 niños" },
      { q: "¿Cómo se escribe 17° con letra?", steps: [["Separa", "17 = 10 + 7: décimo + séptimo."], ["Junta", "Se escribe en una sola palabra."]], a: "decimoséptimo" }
    ],
    gen: [
      G("fila", function (L) { var n = L === 0 ? R(6, 10) : R(11, 20), hi = R(0, n - 1);
        return NUM("¿En qué lugar está el niño marcado con la estrella? Escribe el número.", hi + 1, { unit: "°", v: V.queue(n, hi), tag: "posición en una fila", h: "Empieza a contar desde la meta: el que está junto a la bandera es el 1°.", tr: (function () { var o = {}; o[n - hi] = "Contaste desde el final de la fila. Empieza desde la meta."; return o; })() }); }),
      G("aletra", function (L) { var k = L === 0 ? R(1, 10) : R(11, 20), wr = [ORD[(k % 20)] || ORD[0], ORD[k - 2] || ORD[3], ORD[(k + 4) % 20]].map(function (w) { return [w, ""]; });
        return MC("¿Cómo se escribe <b>" + k + "°</b> con letra?", ORD[k - 1], wr, { tag: "escribir ordinales con letra", h: "Del 13° al 19° se dice «decimo» y luego el ordinal: decimotercero, decimocuarto…" }); }),
      G("anum", function (L) { var k = L === 0 ? R(2, 10) : R(11, 20);
        return MC("¿Qué número es <b>" + ORD[k - 1] + "</b>?", k + "°", [(k > 10 ? k - 10 : k + 10) + "°", (k + 1) + "°", (k - 1) + "°"], { tag: "leer ordinales", h: "«Decimo» quiere decir 10 más: decimoquinto = 10 + 5 = 15°." }); }),
      G("match", function (L) { var ks = shuf(L === 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]).slice(0, 4);
        return MATCH("Relaciona cada número con su nombre. Toca uno de la izquierda y luego su pareja.", ks.map(function (k) { return [k + "°", ORD[k - 1]]; }), { tag: "nombres de los ordinales", h: "Recuerda: séptimo 7°, octavo 8°, noveno 9°, décimo 10°, vigésimo 20°." }); }),
      G("orden", function (L) { var ks = shuf(L === 0 ? [2, 4, 5, 7, 9] : [11, 13, 15, 16, 18, 20]).slice(0, 4).sort(function (a, b) { return a - b; });
        return ORDER("Ordena del primer lugar al último.", ks.map(function (k) { return ORD[k - 1]; }), { tag: "orden de los ordinales", h: "Piensa en el número de cada uno: decimoctavo es 18°.", oe: "Convierte cada palabra a número y ordénalos." }); }),
      G("detras", function (L) { var n = R(12, 20), k = R(3, n - 3), nme = nm(), back = Math.random() < .5;
        return NUM("En una carrera de " + n + " corredores, " + nme + " llegó en " + k + "° lugar. ¿Cuántos corredores llegaron " + (back ? "después" : "antes") + " que " + (nme === "Ana" || /a$/.test(nme) ? "ella" : "él") + "?", back ? n - k : k - 1, { tag: "problemas con ordinales", h: back ? "Resta su lugar al total: los que llegaron después son total − lugar." : "Antes que el " + k + "° llegaron del 1° al " + (k - 1) + "°.", tr: (function () { var o = {}; o[back ? n - k + 1 : k] = "Contaste también a " + nme + "."; return o; })() }); }, [1, 2]),
      G("final", function () { var n = R(12, 20), k = R(2, n - 1);
        return NUM("En una fila de " + n + " personas, Sofía está en el lugar " + k + "° contando desde el principio. ¿Qué lugar ocupa contando <b>desde el final</b>?", n - k + 1, { unit: "°", tag: "posición desde el final", h: "Desde el final: total − lugar + 1.", tr: (function () { var o = {}; o[n - k] = "Casi: también cuenta el lugar de Sofía, suma 1."; return o; })() }); }, [2])
    ] };

  var t4 = { id: "numeros-decimales", n: "Números decimales", d: "Décimos y centésimos: partes de un entero.", game: "la-tiendita",
    learn: [
      { h: "Un entero partido en 10", p: "Si partes un entero en 10 partes iguales, cada parte es un <b>décimo</b>. Se escribe 0.1. Siete décimos son 0.7.", v: V.bar(10, 7, LIME, { lab: "7 décimos = 0.7" }), k: "El primer lugar después del punto son los décimos." },
      { h: "Un entero partido en 100", p: "Si lo partes en 100 partes iguales, cada una es un <b>centésimo</b>: 0.01. Treinta y cinco centésimos son 0.35.", v: V.grid100(35, SKY), k: "El segundo lugar después del punto son los centésimos." },
      { h: "Los decimales en el dinero", p: "Un peso tiene 100 centavos. Por eso $3.50 son 3 pesos y 50 centavos.", v: ex("$3" + hl(".50") + " <em>=</em> 3 pesos y 50 centavos"), k: "0.5 y 0.50 valen lo mismo: medio." }
    ],
    mira: [
      { q: "¿Qué número decimal representa la parte coloreada?", v: V.grid100(42, LAV), steps: [["Cuenta las columnas llenas", "Hay 4 columnas completas: 4 décimos."], ["Cuenta los cuadritos sueltos", "Hay 2 cuadritos más: 2 centésimos."], ["Escríbelo", "4 décimos y 2 centésimos = 42 centésimos."]], a: "0.42" },
      { q: "Escribe " + fr(7, 10) + " como decimal.", steps: [["Lee la fracción", "Siete décimos."], ["Décimos van en el primer lugar", "Después del punto escribe el 7."]], a: "0.7" }
    ],
    gen: [
      G("pinta", function (L) { var k = R(1, 9);
        return SHADE("Colorea <b>" + (L === 0 ? fname(k, 10) : "0." + k) + "</b> de la tira.", "bar", 10, k, { color: LIME, tag: "representar décimos", h: "La tira está partida en 10: cada parte es un décimo (0.1)." }); }, [0, 1]),
      G("grid", function (L) { var k = L === 0 ? R(1, 9) * 10 : R(11, 99); if (k % 10 === 0 && L > 0) k += 3; var s = (k < 10 ? "0.0" : "0.") + k, alt = "0." + Math.floor(k / 10);
        return MC("¿Qué número decimal representa la parte coloreada?", L === 0 ? "0." + (k / 10) : s, [[String(k), "Faltó el punto decimal: es una parte del entero."], [L === 0 ? "0.0" + k / 10 : alt, "Cuenta también los cuadritos sueltos."], [L === 0 ? String(k / 10) : "0.0" + k % 10, ""]], { v: V.grid100(k, SKY), tag: "leer centésimos", h: "Cada columna completa es un décimo (0.1) y cada cuadrito es un centésimo (0.01)." }); }),
      G("dinero", function (L) { var p = R(L === 0 ? 3 : 20, L === 0 ? 30 : 150), c = pick([10, 20, 50, 60, 70, 80]), t = {}; t[p + c] = "Los centavos van después del punto: no se suman a los pesos.";
        return NUM("¿Cuánto dinero hay? Escribe la cantidad con punto decimal.", rnd(p + c / 100, 2), { pre: "$", v: V.money(p, c), tr: t, tag: "decimales con dinero", h: "Primero cuenta los pesos; después los centavos, que van después del punto.", dp: 2 }); }),
      G("recta", function (L) { var k = R(1, 9), ticks = []; for (var i = 0; i <= 10; i++) ticks.push({ v: i / 10, show: i === 0 || i === 10 || (L === 0 && i === 5), l: i === 0 ? "0" : i === 10 ? "1" : "0." + i });
        return LINE("Toca en la recta dónde está <b>0." + k + "</b>.", ticks, k, { tag: "decimales en la recta", h: "Entre 0 y 1 hay 10 saltos: cada salto es un décimo.", le: function (a) { return "Señalaste 0." + a + ". Cuenta los saltos desde el 0."; } }); }, [0, 1]),
      G("frac", function (L) { var cen = L === 2 || Math.random() < .4, k = cen ? R(11, 99) : R(1, 9), d = cen ? 100 : 10, s = cen ? "0." + k : "0." + k;
        return MC("¿Cómo se escribe " + fr(k, d) + " como decimal?", s, cen ? [["0.0" + k, "Los centésimos ocupan dos lugares después del punto, no tres."], [k + ".100", "No se escribe el denominador; se usan los lugares después del punto."], [String(k), "Faltó el punto decimal."]] : [["0.0" + k, "Los décimos van en el primer lugar después del punto."], [k + ".10", "No se escribe el denominador."], [String(k), "Faltó el punto decimal."]], { tag: "fracciones decimales", h: "Décimos → un lugar después del punto. Centésimos → dos lugares." }); }),
      G("comp", function (L) { var P = pick([["0.5", "0.50", "="], ["0.3", "0.25", ">"], ["0.07", "0.7", "<"], ["1.2", "1.15", ">"], ["0.40", "0.4", "="], ["2.09", "2.1", "<"], ["0.8", "0.75", ">"]]);
        return MC("Elige el signo correcto: <b>" + P[0] + " ___ " + P[1] + "</b>", P[2], [">", "<", "="].filter(function (x) { return x !== P[2]; }).map(function (x) { return [x, "Agrega ceros para que los dos tengan las mismas cifras después del punto y compara."]; }), { tag: "comparar decimales", h: "Completa con ceros: 0.3 = 0.30. Ahora compara 30 centésimos con 25 centésimos." }); }, [1, 2]),
      G("tf", function () { var c = pick([["0.5 es lo mismo que 0.50.", true], ["0.25 es mayor que 0.3.", false, "0.3 = 0.30, que es mayor que 0.25."], ["$2.05 son dos pesos y cinco centavos.", true], ["0.9 es mayor que 1.", false, "0.9 es menos que un entero."], ["Un décimo es más grande que un centésimo.", true]]);
        return TF(c[0], c[1], { et: c[2] || "", tag: "comparar decimales", h: "Escribe los dos con el mismo número de cifras después del punto." }); })
    ] };

  var t5 = { id: "lectura-decimales", n: "Lectura y escritura de cantidades con punto decimal hasta centésimos", d: "Leer y escribir decimales con enteros, décimos y centésimos.", game: "la-tiendita",
    learn: [
      { h: "El punto separa", p: "A la izquierda del punto están los enteros; a la derecha, las partes: primero los décimos y luego los centésimos.", v: V.pv("24.67", ["D", "U", "•", "d", "c"]).replace("<td>.</td>", "<td>•</td>") + ex("24.67 <em>→</em> 24 enteros, 6 décimos, 7 centésimos"), k: "U = unidades · d = décimos · c = centésimos." },
      { h: "Cómo se lee", p: "Primero los enteros y después todo lo que está después del punto, con el nombre del último lugar.", v: ex("3.45 <em>→</em> tres enteros " + hl("cuarenta y cinco centésimos")), k: "Si hay dos cifras después del punto, se dice «centésimos»." },
      { h: "El cero que no se puede olvidar", p: "Cinco centésimos se escribe 0.05: el 5 tiene que quedar en el segundo lugar.", v: ex("siete enteros cinco centésimos <em>→</em> 7." + hl("0") + "5") }
    ],
    mira: [
      { q: "Escribe con número: <b>doce enteros ocho centésimos</b>", steps: [["Los enteros", "12 y el punto."], ["Los centésimos", "Ocho centésimos ocupan el segundo lugar: 0 décimos y 8 centésimos."]], a: "12.08" },
      { q: "¿Cómo se lee 6.3?", steps: [["Enteros", "seis enteros"], ["Después del punto", "Hay una cifra: son décimos → tres décimos."]], a: "seis enteros tres décimos" }
    ],
    gen: [
      G("leer", function (L) { var e = L === 0 ? R(1, 9) : R(2, 60), c = R(11, 99); if (c % 10 === 0) c++; var cd = Math.floor(c / 10), cu = c % 10;
        return MC("¿Cómo se lee <b>" + e + "." + c + "</b>?", wordsDec(e, c, 2), [[wordsDec(e, c, 1).replace("décimos", "décimos"), "Hay dos cifras después del punto: son centésimos."], [U.words(Number(e + "" + c)), "Faltó leer el punto: primero van los enteros."], [wordsDec(e, cd, 1) + " " + U.words(cu) + " centésimos", ""]], { one: 1, tag: "leer decimales", h: "Lee los enteros, di «enteros», y lee lo de después del punto con el nombre del último lugar." }); }),
      G("escribir", function (L) { var e = R(1, L === 0 ? 9 : 80), cen = L > 0 && Math.random() < .6, c = cen ? R(1, 9) : R(11, 99), d = 2, ans = rnd(e + c / 100, 2), t = {}; if (c < 10) t[rnd(e + c / 10, 2)] = "Los centésimos van en el segundo lugar: escribe un 0 en los décimos.";
        return NUM("Escribe con número: <b>" + wordsDec(e, c, d) + "</b>", ans, { tr: t, dp: 2, tag: "escribir decimales con cifras", h: "Los centésimos ocupan dos lugares después del punto. Si hay menos de 10 centésimos, pon un 0 en los décimos." }); }),
      G("decimo", function () { var e = R(1, 40), k = R(1, 9);
        return NUM("Escribe con número: <b>" + wordsDec(e, k, 1) + "</b>", rnd(e + k / 10, 1), { tr: (function () { var o = {}; o[rnd(e + k / 100, 2)] = "Los décimos van en el primer lugar después del punto."; return o; })(), tag: "escribir decimales con cifras", h: "Los décimos van en el primer lugar después del punto." }); }, [0, 1]),
      G("lugar", function (L) { var dg = shuf([1, 2, 3, 4, 5, 6, 7, 8, 9]), e = dg[0] * 10 + dg[1], a = dg[2], b = dg[3], which = R(0, 3), dig = [a, b, dg[1], dg[0]][which], ans = ["décimos", "centésimos", "unidades", "decenas"][which], n = e + "." + a + b;
        return MC("En <b>" + n + "</b>, ¿qué lugar ocupa el <b>" + dig + "</b>?", ans, ["décimos", "centésimos", "unidades", "decenas"].filter(function (x) { return x !== ans; }).map(function (x) { return [x, "Cuenta los lugares desde el punto."]; }), { tag: "lugares de los decimales", h: "Después del punto: primero décimos y luego centésimos. Antes del punto: unidades y decenas." }); }),
      G("desc", function (L) { var e = R(1, L === 0 ? 9 : 99), a = R(0, 9), b = R(1, 9);
        return FILL("Completa.", "<b>" + e + "." + a + b + "</b> = [[0]] enteros, [[1]] décimos y [[2]] centésimos", [e, a, b], { tag: "lugares de los decimales", h: "Lo que está antes del punto son enteros; la primera cifra después del punto, décimos; la segunda, centésimos." }); }),
      G("orden", function (L) { var e = R(1, 9), s = shuf([e + ".5", e + ".05", e + ".45", e + ".54", e + ".4"]).slice(0, 4).sort(function (x, y) { return Number(x) - Number(y); });
        return ORDER("Ordena de <b>menor a mayor</b>.", s, { tag: "comparar decimales", h: "Escribe todos con dos cifras después del punto: 5.5 = 5.50. Luego compara.", oe: "Completa con ceros para que todos tengan dos cifras después del punto." }); }, [1, 2]),
      G("match", function () { var e = R(2, 9), cs = shuf([5, 50, 25, 52]).slice(0, 3);
        return MATCH("Relaciona cada número con cómo se lee.", cs.map(function (c) { var v = c < 10 ? "0" + c : String(c); return [e + "." + (c === 50 ? "5" : v), c === 50 ? wordsDec(e, 5, 1) : wordsDec(e, c, 2)]; }), { tag: "leer decimales", h: "Si hay una sola cifra después del punto son décimos; si hay dos, centésimos." }); }, [1, 2])
    ] };

  /* =====================================================================
     UNIDAD 2 · SUMAS Y RESTAS
     ===================================================================== */
  function genAdd(L) { var a, b, k = 0; do { if (L === 0) { a = R(1000, 6999); b = R(100, 2999); } else { a = R(10000, 59999); b = R(10000, 39999); } k = carries(a, b); } while (k < (L === 0 ? 1 : 2)); return [a, b]; }
  function genSub(L) { var a, b; do { if (L === 0) { a = R(2000, 9999); b = R(100, a - 500); } else if (L === 1) { a = R(30000, 99999); b = R(10000, a - 5000); } else { a = R(2, 9) * 10000 + pick([0, R(1, 9) * 100]); b = R(10000, a - 1000); } } while (borrows(a, b) < (L === 0 ? 1 : 2)); return [a, b]; }

  var t6 = { id: "suma-transformaciones", n: "Algoritmo convencional de la suma con transformaciones (5 cifras)", d: "Sumar en columna llevando.", game: "lluvia-de-numeros",
    learn: [
      { h: "Acomoda por lugares", p: "Escribe un número debajo del otro, con unidades bajo unidades, decenas bajo decenas, y así. Empieza a sumar por la derecha.", v: ex("&nbsp;&nbsp;36,4" + hl("7") + "8<br>+ 25,3" + hl("6") + "5"), k: "Siempre se empieza por las unidades." },
      { h: "Transformar: 10 unidades = 1 decena", p: "Si en una columna la suma da 10 o más, escribes las unidades y <b>llevas</b> la decena a la columna de la izquierda.", v: ex("8 + 5 = 13 <em>→</em> escribo " + hl("3") + " y llevo " + hl("1")), k: "Lo que llevas se suma en la siguiente columna." }
    ],
    mira: [
      { q: "Resuelve 36,478 + 25,365", steps: [["Unidades", "8 + 5 = 13: escribo 3 y llevo 1."], ["Decenas", "1 + 7 + 6 = 14: escribo 4 y llevo 1."], ["Centenas", "1 + 4 + 3 = 8: escribo 8."], ["Millares", "6 + 5 = 11: escribo 1 y llevo 1."], ["Decenas de millar", "1 + 3 + 2 = 6."]], a: "61,843" },
      { q: "Una escuela juntó 12,750 tapitas en marzo y 9,486 en abril. ¿Cuántas juntó en total?", steps: [["¿Qué operación?", "«En total» = juntar: suma."], ["Suma en columna", "12,750 + 9,486, llevando cuando la columna pase de 9."]], a: "22,236 tapitas" }
    ],
    gen: [
      G("col", function (L) { var p = genAdd(L), t = {}; t[noCarry(p[0], p[1])] = "Olvidaste llevar: cuando una columna da 10 o más, se escribe la unidad y se lleva 1.";
        return COL("+", p[0], p[1], { q: "Resuelve la suma en columna.", tr: t, tag: "llevar en la suma", h: "Empieza por la derecha. Si la columna suma 10 o más, escribe las unidades y lleva 1 a la siguiente." }); }),
      G("col2", function (L) { var p = genAdd(L); return COL("+", p[0], p[1], { q: "Suma. Usa las casillas de arriba para lo que llevas.", tr: (function () { var o = {}; o[noCarry(p[0], p[1])] = "Te faltó sumar lo que llevabas."; return o; })(), tag: "llevar en la suma", h: "Lo que llevas se escribe arriba de la siguiente columna y se suma con ella." }); }),
      G("prob", function (L) { var p = genAdd(L), ctx = pick([["Una escuela juntó " + fmt(p[0]) + " tapitas en marzo y " + fmt(p[1]) + " en abril. ¿Cuántas juntó en total?", "tapitas"], ["Un estadio vendió " + fmt(p[0]) + " boletos el sábado y " + fmt(p[1]) + " el domingo. ¿Cuántos boletos vendió en los dos días?", "boletos"], ["Una fábrica hizo " + fmt(p[0]) + " lápices en una semana y " + fmt(p[1]) + " la siguiente. ¿Cuántos lápices hizo en total?", "lápices"]]), t = {}; t[Math.abs(p[0] - p[1])] = "Restaste. «En total» significa juntar: es una suma.";
        return NUM(ctx[0], p[0] + p[1], { unit: ctx[1], tr: t, tag: "problemas de suma", h: "«En total», «juntos» y «en los dos días» son pistas de suma." }); }),
      G("err", function (L) { var p = genAdd(L), wrong = noCarry(p[0], p[1]), ok = Math.random() < .4, shown = ok ? p[0] + p[1] : wrong;
        return TF(nm() + " resolvió <b>" + fmt(p[0]) + " + " + fmt(p[1]) + " = " + fmt(shown) + "</b>. ¿Está bien?", ok, { et: "Se le olvidó llevar. El resultado correcto es " + fmt(p[0] + p[1]) + ".", ef: "Sí estaba bien: " + fmt(p[0] + p[1]) + ".", tag: "revisar sumas", h: "Haz tú la suma en tu cuaderno y compara." }); }),
      G("tres", function () { var a = R(10000, 40000), b = R(5000, 30000), c = R(1000, 9999);
        return NUM("Suma: <b>" + fmt(a) + " + " + fmt(b) + " + " + fmt(c) + "</b>", a + b + c, { tag: "sumas de tres números", h: "Suma los dos primeros y al resultado súmale el tercero; o acomoda los tres en columna." }); }, [2]),
      G("falta", function (L) { var p = genAdd(L), s = p[0] + p[1];
        return NUM("¿Qué número falta? <b>" + fmt(p[0]) + " + ____ = " + fmt(s) + "</b>", p[1], { tr: (function () { var o = {}; o[s + p[0]] = "Sumaste. Para encontrar el sumando que falta, resta: total − el que conoces."; return o; })(), tag: "sumando desconocido", h: "El número que falta es el total menos el sumando que ya conoces." }); }, [2]),
      G("est", function (L) { var p = genAdd(L), s = p[0] + p[1], r = Math.round(s / 1000) * 1000;
        return MC("Sin hacer la suma exacta, ¿cuál es el resultado <b>más cercano</b> a " + fmt(p[0]) + " + " + fmt(p[1]) + "?", fmt(r), [[fmt(r + 10000), "Redondea cada número a los millares y suma."], [fmt(Math.max(1000, r - 10000)), "Redondea cada número a los millares y suma."], [fmt(r * 10), ""]], { tag: "estimar sumas", h: "Redondea: 36,478 es casi 36,000. Suma los redondeos." }); }, [1, 2])
    ] };

  var t7 = { id: "resta-transformaciones", n: "Algoritmo convencional de la resta con transformaciones (5 cifras)", d: "Restar en columna pidiendo prestado.", game: "lluvia-de-numeros",
    learn: [
      { h: "Arriba el mayor", p: "En la resta, el número mayor va arriba. Acomoda por lugares y empieza por las unidades.", v: ex("&nbsp;&nbsp;52,304<br>− 18,57" + hl("9")), k: "Siempre se resta el de abajo al de arriba." },
      { h: "Transformar: 1 decena = 10 unidades", p: "Si arriba hay menos que abajo, pides prestado a la columna de la izquierda: ella tiene uno menos y tú ganas 10.", v: ex("4 − 9 <em>no se puede →</em> " + hl("14") + " − 9 = 5"), k: "El número que prestó queda con uno menos. ¡No lo olvides!" },
      { h: "Cuando hay ceros", p: "Si la columna de al lado tiene 0, sigue pidiendo a la izquierda hasta encontrar un número; los ceros se vuelven 9.", v: ex("40,000 − 1 <em>→</em> 39,999") }
    ],
    mira: [
      { q: "Resuelve 52,304 − 18,579", steps: [["Unidades", "4 − 9 no se puede. Las decenas son 0, así que pido a las centenas: 3 → 2, las decenas quedan 9 y las unidades 14. 14 − 9 = 5."], ["Decenas", "9 − 7 = 2."], ["Centenas", "2 − 5 no se puede: pido al 2 de los millares (queda 1). 12 − 5 = 7."], ["Millares", "1 − 8 no se puede: pido al 5 (queda 4). 11 − 8 = 3."], ["Decenas de millar", "4 − 1 = 3."]], a: "33,725" },
      { q: "Comprueba: 33,725 + 18,579", steps: [["La suma comprueba la resta", "Si sumas el resultado con lo que restaste, debes obtener el número de arriba."]], a: "52,304 ✓" }
    ],
    gen: [
      G("col", function (L) { var p = genSub(L), t = {}; t[absDiff(p[0], p[1])] = "Restaste el número menor del mayor en cada columna. Cuando arriba hay menos, hay que pedir prestado.";
        return COL("−", p[0], p[1], { q: "Resuelve la resta en columna.", tr: t, tag: "pedir prestado en la resta", h: "Si arriba hay menos que abajo, pide prestado a la izquierda: tú ganas 10 y ella queda con uno menos." }); }),
      G("prob", function (L) { var p = genSub(L), c = pick([["Un parque tenía " + fmt(p[0]) + " árboles y se cayeron " + fmt(p[1]) + " con una tormenta. ¿Cuántos quedan?", "árboles"], ["Una ciudad necesita " + fmt(p[0]) + " vacunas y ya tiene " + fmt(p[1]) + ". ¿Cuántas le faltan?", "vacunas"], ["Un videojuego tiene " + fmt(p[0]) + " puntos de récord y " + nm() + " lleva " + fmt(p[1]) + ". ¿Cuántos le faltan para igualarlo?", "puntos"]]), t = {}; t[p[0] + p[1]] = "Sumaste. «Quedan» y «faltan» son pistas de resta.";
        return NUM(c[0], p[0] - p[1], { unit: c[1], tr: t, tag: "problemas de resta", h: "«Quedan», «faltan» y «cuántos más» se resuelven con una resta." }); }),
      G("err", function (L) { var p = genSub(L), w = absDiff(p[0], p[1]), ok = Math.random() < .4;
        return TF(nm() + " resolvió <b>" + fmt(p[0]) + " − " + fmt(p[1]) + " = " + fmt(ok ? p[0] - p[1] : w) + "</b>. ¿Está bien?", ok, { et: "Restó el menor del mayor en cada columna sin pedir prestado. Lo correcto es " + fmt(p[0] - p[1]) + ".", tag: "revisar restas", h: "Comprueba: el resultado + lo que restaste debe dar el número de arriba." }); }),
      G("comp", function (L) { var p = genSub(L), r = p[0] - p[1];
        return MC("Si <b>" + fmt(p[0]) + " − " + fmt(p[1]) + " = " + fmt(r) + "</b>, ¿qué operación lo comprueba?", fmt(r) + " + " + fmt(p[1]) + " = " + fmt(p[0]), [[fmt(p[0]) + " + " + fmt(p[1]) + " = " + fmt(r), "Esa suma no da ese resultado."], [fmt(r) + " − " + fmt(p[1]) + " = " + fmt(p[0]), "La resta se comprueba con una suma."]], { one: 1, tag: "comprobar restas", h: "Resultado + lo que se quitó = lo que había." }); }),
      G("ceros", function () { var a = R(2, 9) * 10000, b = R(10000, a - 1000), t = {}; t[absDiff(a, b)] = "Con ceros arriba hay que pedir prestado hasta el primer número: los ceros se vuelven 9.";
        return COL("−", a, b, { q: "Resta con ceros. ¡Cuidado al pedir prestado!", tr: t, tag: "restas con ceros", h: "Pide prestado al primer número distinto de cero; los ceros que pasan se vuelven 9 y las unidades 10." }); }, [1, 2]),
      G("cuantos", function () { var a = R(30000, 90000), b = R(10000, a - 2000), n1 = nm(), n2 = nm();
        return NUM("La colección de " + n1 + " tiene " + fmt(a) + " estampas y la de " + (n2 === n1 ? "su primo" : n2) + ", " + fmt(b) + ". ¿Cuántas estampas <b>más</b> tiene " + n1 + "?", a - b, { unit: "estampas", tag: "problemas de comparación", h: "«¿Cuántos más?» se resuelve restando el mayor menos el menor." }); }, [2])
    ] };

  var t8 = { id: "suma-orden", n: "Suma y orden", d: "El orden de los sumandos no cambia el resultado.", game: "lluvia-de-numeros",
    learn: [
      { h: "Cambia el orden, mismo resultado", p: "En la suma puedes cambiar el orden de los sumandos y el resultado es el mismo. Se llama propiedad <b>conmutativa</b>.", v: ex("25 + 17 = " + hl("42") + "<br>17 + 25 = " + hl("42")), k: "a + b = b + a" },
      { h: "Agrupa como te convenga", p: "Si sumas tres números, puedes juntar primero los que te sean más fáciles. Se llama propiedad <b>asociativa</b>.", v: ex("38 + 45 + 62 <em>→</em> (" + hl("38 + 62") + ") + 45 = 100 + 45 = 145"), k: "Busca parejas que den 10, 100 o 1,000." },
      { h: "Comparar sumas", p: "Para saber qué suma es mayor, puedes resolverlas o fijarte en los sumandos: si uno crece y el otro queda igual, la suma crece.", v: ex("340 + 125 " + hl("&lt;") + " 340 + 152") }
    ],
    mira: [
      { q: "Suma mentalmente 27 + 46 + 73", steps: [["Busca parejas", "27 + 73 = 100, ¡redondo!"], ["Suma lo que queda", "100 + 46 = 146."]], a: "146" },
      { q: "¿Qué número falta? 1,250 + ___ = 385 + 1,250", steps: [["Mira los dos lados", "Los dos tienen 1,250."], ["Conmutativa", "Solo cambió el orden: el número que falta es 385."]], a: "385" }
    ],
    gen: [
      G("falta", function (L) { var a = L === 0 ? R(20, 99) : R(1000, 9999), b = L === 0 ? R(10, 99) : R(100, 999);
        return NUM("¿Qué número falta? <b>" + fmt(a) + " + ____ = " + fmt(b) + " + " + fmt(a) + "</b>", b, { tr: (function () { var o = {}; o[a + b] = "No hace falta sumar: los dos lados tienen los mismos sumandos en distinto orden."; return o; })(), tag: "propiedad conmutativa", h: "Si cambias el orden de los sumandos, el resultado es el mismo." }); }),
      G("tf", function (L) { var a = R(12, 99), b = R(12, 99), c = R(12, 99), cs = [[a + " + " + b + " = " + b + " + " + a, true], ["(" + a + " + " + b + ") + " + c + " = " + a + " + (" + b + " + " + c + ")", true], [a + " + " + b + " = " + a + " + " + (b + 1), false, "Los sumandos no son los mismos: cambió uno."], [a + " + " + b + " + " + c + " = " + c + " + " + a + " + " + b, true], [a + " + " + b + " = " + (a + b + 10), false, "Haz la suma: " + a + " + " + b + " = " + (a + b) + "."]], k = pick(cs);
        return TF("<b>" + k[0] + "</b>", k[1], { et: k[2] || "", ef: "Sí es verdadero: los sumandos son los mismos.", tag: "propiedades de la suma", h: "Si los sumandos son los mismos, aunque estén en otro orden o agrupados distinto, el resultado es igual." }); }),
      G("grupo", function (L) { var m = L === 2 ? 1000 : 100, a = L === 2 ? R(101, 899) : R(11, 89), c = m - a, b = L === 2 ? R(101, 899) : R(11, 89); var items = shuf([a, b, c]);
        return MC("Para sumar <b>" + items.join(" + ") + "</b> mentalmente, ¿qué conviene sumar primero?", a + " + " + c, [[a + " + " + b, "Busca dos números que juntos den un número redondo."], [b + " + " + c, "Busca dos números que juntos den un número redondo."]], { tag: "agrupar para sumar fácil", h: "Busca una pareja que dé " + m + " exacto.", x: a + " + " + c + " = " + m + ", y después solo sumas " + b + "." }); }),
      G("mental", function (L) { var m = L === 0 ? 10 : L === 1 ? 100 : 1000, a = L === 0 ? R(1, 9) : L === 1 ? R(11, 89) : R(101, 899), c = m - a, b = L === 0 ? R(11, 29) : L === 1 ? R(11, 89) : R(101, 899);
        return NUM("Suma agrupando: <b>" + shuf([a, b, c]).join(" + ") + "</b>", a + b + c, { tag: "agrupar para sumar fácil", h: "Primero junta " + a + " + " + c + " = " + m + "." }); }),
      G("comp", function (L) { var a = L === 0 ? R(100, 900) : R(1000, 9000), b = R(100, 900), d = R(1, 9) * (L === 0 ? 1 : 10), x = a + b, y = a + b + (pick([-1, 1]) * d), sg = x > y ? ">" : "<", show2 = y - a;
        return MC("Elige el signo: <b>" + fmt(a) + " + " + fmt(b) + " ___ " + fmt(a) + " + " + fmt(show2) + "</b>", sg, [[sg === ">" ? "<" : ">", "Los dos tienen " + fmt(a) + "; compara solo el otro sumando."], ["=", "Los sumandos no son iguales."]], { tag: "comparar sumas", h: "Si un sumando es igual en los dos lados, gana el lado con el otro sumando mayor." }); }),
      G("match", function () { var ps = [1, 2, 3].map(function () { var a = R(11, 99), b = R(11, 99); return [a + " + " + b, b + " + " + a]; });
        return MATCH("Relaciona cada suma con la que da el mismo resultado.", ps, { tag: "propiedad conmutativa", h: "Busca los mismos sumandos en distinto orden." }); }, [0, 1]),
      G("ordenar", function (L) { var b = R(200, 800), xs = shuf([1, 2, 3, 4]).slice(0, 3).map(function (k) { return [b + k * R(7, 19), R(100, 400)]; }).map(function (p) { return [p[0] + " + " + p[1], p[0] + p[1]]; }).sort(function (x, y) { return x[1] - y[1]; });
        if (xs[0][1] === xs[1][1] || xs[1][1] === xs[2][1]) xs[2] = [xs[2][0].split(" + ")[0] + " + " + (Number(xs[2][0].split(" + ")[1]) + 5), xs[2][1] + 5];
        return ORDER("Ordena las sumas de <b>menor a mayor</b> resultado.", xs.map(function (x) { return x[0]; }), { tag: "comparar sumas", h: "Resuelve cada suma en tu cuaderno y luego ordénalas.", oe: "Resuelve cada suma y compara los resultados." }); }, [2])
    ] };

  var t9 = { id: "resta-orden", n: "Resta y orden", d: "En la resta el orden sí importa.", game: "lluvia-de-numeros",
    learn: [
      { h: "En la resta el orden importa", p: "A diferencia de la suma, en la resta no puedes cambiar el orden: 50 − 20 = 30, pero 20 − 50 no se puede resolver con números naturales.", v: ex("50 − 20 = 30 <em>≠</em> 20 − 50"), k: "Primero va lo que tienes; después, lo que quitas." },
      { h: "Suma y resta son familia", p: "Con tres números puedes escribir una suma y dos restas. Por eso una resta se comprueba con una suma.", v: ex("35 + 15 = 50 <em>→</em> 50 − 15 = 35 <em>y</em> 50 − 35 = 15"), k: "Lo que queda + lo que quitaste = lo que tenías." }
    ],
    mira: [
      { q: "¿Qué número falta? ____ − 245 = 380", steps: [["¿Qué buscamos?", "El número de arriba: lo que había antes de quitar 245."], ["Usa la suma", "380 + 245 = 625."]], a: "625" },
      { q: "¿Qué número falta? 900 − ____ = 640", steps: [["¿Qué buscamos?", "Lo que se quitó."], ["Resta", "900 − 640 = 260. Comprueba: 900 − 260 = 640 ✓"]], a: "260" }
    ],
    gen: [
      G("tf", function (L) { var a = R(30, 99), b = R(10, a - 5), cs = [[a + " − " + b + " = " + b + " − " + a, false, "En la resta el orden importa: no se pueden cambiar de lugar."], [a + " − " + b + " = " + (a - b), true], [(a - b) + " + " + b + " = " + a, true], [a + " − " + b + " = " + (a - b + 10), false, "Haz la resta: " + a + " − " + b + " = " + (a - b) + "."]], k = pick(cs);
        return TF("<b>" + k[0] + "</b>", k[1], { et: k[2] || "", tag: "el orden en la resta", h: "En la resta primero va lo que tienes y después lo que quitas." }); }),
      G("minu", function (L) { var b = L === 0 ? R(10, 99) : R(100, 999), c = L === 0 ? R(10, 99) : R(100, 999);
        return NUM("¿Qué número falta? <b>____ − " + fmt(b) + " = " + fmt(c) + "</b>", b + c, { tr: (function () { var o = {}; o[Math.abs(c - b)] = "Restaste. El número que falta es lo que había: súmale lo que se quitó."; return o; })(), tag: "minuendo desconocido", h: "Lo que había = lo que quedó + lo que se quitó." }); }),
      G("sust", function (L) { var a = L === 0 ? R(50, 99) : R(500, 999), c = R(10, a - 20);
        return NUM("¿Qué número falta? <b>" + fmt(a) + " − ____ = " + fmt(c) + "</b>", a - c, { tr: (function () { var o = {}; o[a + c] = "Sumaste. Para saber cuánto se quitó, resta: " + fmt(a) + " − " + fmt(c) + "."; return o; })(), tag: "sustraendo desconocido", h: "Lo que se quitó = lo que había − lo que quedó." }); }),
      G("fam", function (L) { var a = L === 0 ? R(20, 60) : R(200, 900), b = L === 0 ? R(10, 40) : R(100, 500), s = a + b;
        return FILL("Completa la familia de operaciones.", fmt(a) + " + " + fmt(b) + " = [[0]]<br>[[1]] − " + fmt(b) + " = " + fmt(a) + "<br>" + fmt(s) + " − [[2]] = " + fmt(b), [s, s, a], { tag: "relación entre suma y resta", h: "Con los mismos tres números se arma una suma y dos restas." }); }),
      G("comp", function (L) { var a = R(100, 900), b = R(10, 90), c = b + R(5, 40);
        return MC("¿Qué resta da un resultado <b>mayor</b>?", fmt(a) + " − " + b, [[fmt(a) + " − " + c, "Si quitas más, te queda menos."], ["Dan lo mismo", "Se quita distinta cantidad."]], { tag: "comparar restas", h: "Si empiezas con lo mismo, queda más cuando quitas menos." }); }),
      G("ordenar", function (L) { var a = R(500, 999), q = shuf([R(10, 99), R(100, 199), R(200, 299), R(300, 399)]).slice(0, 3).sort(function (x, y) { return y - x; });
        return ORDER("Ordena las restas de <b>menor a mayor</b> resultado.", q.map(function (k) { return fmt(a) + " − " + k; }), { tag: "comparar restas", h: "Todas empiezan con " + fmt(a) + ": la que quita más da el resultado menor.", oe: "La que quita más da el resultado más pequeño." }); }, [1, 2]),
      G("prob", function () { var a = R(1500, 9000), c = R(200, a - 300);
        return NUM("Después de gastar, a " + nm() + " le quedaron $" + fmt(c) + " de sus ahorros. Si tenía $" + fmt(a) + ", ¿cuánto gastó?", a - c, { pre: "$", tag: "sustraendo desconocido", h: "Gastó = lo que tenía − lo que le quedó." }); }, [2])
    ] };

  var t10 = { id: "suma-decimales", n: "Algoritmo de la suma hasta centésimos", d: "Sumar números con punto decimal.", game: "la-tiendita",
    learn: [
      { h: "Punto bajo punto", p: "Para sumar decimales, acomoda los números con el punto decimal en la misma columna: enteros con enteros, décimos con décimos y centésimos con centésimos.", v: ex("&nbsp;&nbsp;12" + hl(".") + "45<br>+ &nbsp;3" + hl(".") + "80"), k: "El punto del resultado baja en la misma columna." },
      { h: "Completa con ceros", p: "Si un número tiene menos cifras después del punto, agrégale ceros. No cambia su valor.", v: ex("4.5 + 2.35 <em>→</em> 4.5" + hl("0") + " + 2.35 = 6.85"), k: "4.5 y 4.50 valen lo mismo." }
    ],
    mira: [
      { q: "Resuelve 24.75 + 8.6", steps: [["Completa con ceros", "8.6 = 8.60."], ["Centésimos", "5 + 0 = 5."], ["Décimos", "7 + 6 = 13: escribo 3 y llevo 1."], ["Enteros", "1 + 24 + 8 = 33. Baja el punto."]], a: "33.35" },
      { q: "Compraste un jugo de $18.50 y unas galletas de $12.75. ¿Cuánto pagaste?", steps: [["Suma los precios", "18.50 + 12.75."], ["En columna", "Centésimos 0 + 5 = 5; décimos 5 + 7 = 12, llevo 1; enteros 1 + 18 + 12 = 31."]], a: "$31.25" }
    ],
    gen: [
      G("col", function (L) { var d = L === 0 ? 1 : 2, a = rnd(R(L === 0 ? 11 : 105, L === 0 ? 99 : 9999) / Math.pow(10, d), d), b = rnd(R(L === 0 ? 11 : 105, L === 0 ? 89 : 4999) / Math.pow(10, d), d);
        return COL("+", a, b, { dec: d, q: "Suma en columna. El punto ya está en su lugar.", tag: "sumar decimales en columna", h: "Suma como siempre, empezando por la derecha. El punto del resultado va en la misma columna." }); }),
      G("dinero", function (L) { var a = rnd(R(1050, 9999) / 100, 2), b = rnd(R(550, 4999) / 100, 2), it = shuf(["un cuaderno", "una mochila chica", "un juego de colores", "un libro", "una lonchera", "unos audífonos"]).slice(0, 2), t = {}; t[rnd(a + b - 1, 2)] = "Revisa lo que llevas al pasar de los décimos a los enteros.";
        return NUM(nm() + " compró " + it[0] + " de " + money(a) + " y " + it[1] + " de " + money(b) + ". ¿Cuánto pagó?", rnd(a + b, 2), { pre: "$", tr: t, dp: 2, tag: "sumar dinero", h: "Acomoda los precios con el punto en la misma columna y suma." }); }),
      G("alinea", function (L) { var e1 = R(2, 9), d1 = R(1, 9), e2 = R(1, 9), c2 = R(11, 99), a = rnd(e1 + d1 / 10, 1), b = rnd(e2 + c2 / 100, 2), ok = rnd(a + b, 2), bad = rnd(e1 + d1 / 100 + b, 2);
        return MC("¿Cuánto es <b>" + a + " + " + b + "</b>?", String(ok), [[String(bad), "Acomodaste " + a + " como si fuera " + e1 + ".0" + d1 + ". Primero completa con cero: " + a + "0."], [String(rnd(ok + 1, 2)), "Revisa lo que llevas."], [String(rnd(ok * 10, 1)), "El punto se movió de lugar."]], { tag: "alinear el punto decimal", h: "Escribe " + a + " como " + a + "0 para que los dos tengan dos cifras después del punto." }); }),
      G("medida", function (L) { var a = rnd(R(105, 480) / 100, 2), b = rnd(R(55, 320) / 100, 2);
        return NUM("Una cinta azul mide " + a + " m y una roja " + b + " m. Si las pones una después de la otra, ¿cuánto miden juntas?", rnd(a + b, 2), { unit: "m", dp: 2, tag: "sumar medidas", h: "«Juntas» significa sumar. Acomoda el punto en la misma columna." }); }),
      G("fill", function (L) { var a = rnd(R(1000, 9999) / 100, 2), b = rnd(R(100, 999) / 100, 2);
        return FILL("Resuelve.", "$" + a.toFixed(2) + " + $" + b.toFixed(2) + " = $[[0]]", [rnd(a + b, 2)], { tag: "sumar dinero", h: "Suma centavos con centavos y pesos con pesos." }); }, [0, 1]),
      G("tres", function () { var a = rnd(R(105, 999) / 100, 2), b = rnd(R(11, 99) / 10, 1), c = rnd(R(105, 999) / 100, 2);
        return NUM("Suma: <b>" + a + " + " + b + " + " + c + "</b>", rnd(a + b + c, 2), { dp: 2, tag: "sumar decimales en columna", h: "Completa con ceros: " + b + " = " + b.toFixed(2) + ". Luego suma los tres en columna." }); }, [2])
    ] };

  var t11 = { id: "resta-decimales", n: "Problemas de resta de números decimales asociados a contextos de dinero y medición", d: "Cambio, diferencias y lo que falta, con decimales.", game: "la-tiendita",
    learn: [
      { h: "Igual que en la suma: punto bajo punto", p: "Para restar decimales, acomoda el punto en la misma columna y completa con ceros si hace falta. Después resta como siempre, pidiendo prestado.", v: ex("&nbsp;&nbsp;5.0" + hl("0") + "<br>− 2.35"), k: "Si arriba no hay cifras, escribe ceros." },
      { h: "El cambio", p: "Cuando pagas con un billete, el cambio es lo que pagaste menos lo que costó.", v: V.money(100) + ex("$100 − $63.50 = " + hl("$36.50")), k: "Cambio = lo que pagas − el precio." },
      { h: "Medidas", p: "Con metros y centímetros también usamos decimales: 1.35 m es 1 metro y 35 centímetros.", v: ex("1.42 m − 1.28 m = " + hl("0.14 m") + " <em>=</em> 14 cm") }
    ],
    mira: [
      { q: "Pagaste con un billete de $200 una compra de $134.50. ¿Cuánto te dan de cambio?", steps: [["Plantea", "200.00 − 134.50."], ["Pide prestado", "Los ceros de arriba se vuelven 9 y el último 10."], ["Resta", "200.00 − 134.50 = 65.50."]], a: "$65.50" },
      { q: "Tenías 3.5 m de listón y usaste 1.75 m. ¿Cuánto te queda?", steps: [["Completa con ceros", "3.5 = 3.50."], ["Resta", "3.50 − 1.75 = 1.75."]], a: "1.75 m" }
    ],
    gen: [
      G("cambio", function (L) { var bill = pick(L === 0 ? [20, 50, 100] : [100, 200, 500]), p = rnd(R(Math.round(bill * 30), bill * 95) / 100, 2), t = {}; t[rnd(bill + p, 2)] = "Sumaste. El cambio es lo que pagas menos el precio.";
        return NUM("Pagaste con un billete de $" + bill + " algo que cuesta " + money(p) + ". ¿Cuánto te dan de cambio?", rnd(bill - p, 2), { pre: "$", v: V.money(bill), tr: t, dp: 2, tag: "calcular el cambio", h: "Cambio = billete − precio. Escribe el billete como " + bill + ".00." }); }),
      G("col", function (L) { var d = L === 0 ? 1 : 2, a = rnd(R(L === 0 ? 50 : 1000, L === 0 ? 99 : 9999) / Math.pow(10, d), d), b = rnd(R(11, Math.round(a * Math.pow(10, d)) - 5) / Math.pow(10, d), d);
        return COL("−", a, b, { dec: d, q: "Resta en columna.", tag: "restar decimales en columna", h: "El punto ya está en su lugar. Resta como siempre y pide prestado cuando haga falta." }); }),
      G("liston", function (L) { var a = rnd(R(25, 60) / 10, 1), b = rnd(R(105, Math.round(a * 100) - 20) / 100, 2), t = {}; t[rnd(a * 10 - b, 2)] = "Acomoda bien el punto: " + a + " es " + a.toFixed(2) + ".";
        return NUM("Tenías " + a + " m de listón y usaste " + b + " m para un moño. ¿Cuánto listón te queda?", rnd(a - b, 2), { unit: "m", dp: 2, tr: t, tag: "restar medidas", h: "Escribe " + a + " como " + a.toFixed(2) + " y resta." }); }),
      G("altura", function () { var a = rnd(R(135, 165) / 100, 2), b = rnd(R(110, Math.round(a * 100) - 5) / 100, 2), n1 = nm();
        return NUM(n1 + " mide " + a.toFixed(2) + " m y su hermano " + b.toFixed(2) + " m. ¿Cuánto más alto es " + n1 + "?", rnd(a - b, 2), { unit: "m", dp: 2, tag: "comparar medidas", h: "«¿Cuánto más?» se resuelve con una resta: el mayor menos el menor." }); }),
      G("op", function () { var c = pick([["Tenías $85.50 y gastaste $32.75. ¿Cuánto te quedó?", "Resta"], ["Compraste algo de $45.50 y otra cosa de $12.25. ¿Cuánto gastaste?", "Suma"], ["Una tabla mide 2.40 m y cortas 0.85 m. ¿Cuánto mide lo que sobra?", "Resta"], ["Ahorraste $120.50 y tu abuela te dio $50. ¿Cuánto tienes ahora?", "Suma"]]);
        return MC("¿Qué operación resuelve el problema?<br><i>" + c[0] + "</i>", c[1], [c[1] === "Resta" ? ["Suma", "Si algo se gasta, se corta o se quita, es resta."] : ["Resta", "Si se junta o se agrega, es suma."], ["Multiplicación", ""]], { tag: "elegir la operación", h: "Quitar, gastar o cortar → resta. Juntar o agregar → suma." }); }),
      G("falta", function () { var p = rnd(R(25000, 89900) / 100, 2), t = rnd(R(5000, Math.round(p * 100) - 1000) / 100, 2);
        return NUM("Unos tenis cuestan " + money(p) + ". " + nm() + " tiene ahorrado " + money(t) + ". ¿Cuánto le falta?", rnd(p - t, 2), { pre: "$", dp: 2, tag: "calcular lo que falta", h: "Lo que falta = el precio − lo que ya tiene." }); }, [1, 2]),
      G("dos", function () { var bill = 500, a = rnd(R(9000, 18000) / 100, 2), b = rnd(R(5000, 15000) / 100, 2);
        return NUM("Con un billete de $500 compras una playera de " + money(a) + " y un short de " + money(b) + ". ¿Cuánto te dan de cambio?", rnd(bill - a - b, 2), { pre: "$", dp: 2, tag: "problemas de dos pasos", h: "Primero suma lo que gastaste; después réstalo de $500.", tr: (function () { var o = {}; o[rnd(bill - a, 2)] = "Solo restaste la playera. Primero suma las dos cosas."; return o; })() }); }, [2])
    ] };

  /* =====================================================================
     UNIDAD 3 · MULTIPLICACIONES Y DIVISIONES
     ===================================================================== */
  var t12 = { id: "calculo-mental", n: "Cálculo mental, múltiplos de 10", d: "Multiplicar y dividir entre 10, 100 y 1,000 sin hacer la cuenta.", game: "lluvia-de-numeros",
    learn: [
      { h: "Por 10, 100 y 1,000", p: "Al multiplicar por 10 agregas un cero; por 100, dos ceros; por 1,000, tres ceros. Cada cifra se recorre a un lugar más grande.", v: ex("23 × 10 = 23" + hl("0") + "<br>23 × 100 = 23" + hl("00") + "<br>23 × 1,000 = 23," + hl("000")), k: "Cuenta los ceros y agrégalos." },
      { h: "Números redondos", p: "Para 40 × 6, multiplica 4 × 6 = 24 y luego agrega el cero: 240. Para 300 × 20, multiplica 3 × 2 = 6 y agrega los tres ceros: 6,000.", v: ex("4" + hl("0") + " × 6 = 24" + hl("0")), k: "Multiplica las cifras sin ceros y al final pon todos los ceros." },
      { h: "Entre 10 y 100", p: "Al dividir entre 10 quitas un cero; entre 100, dos ceros.", v: ex("4,500 ÷ 10 = 450 <em>·</em> 4,500 ÷ 100 = 45") }
    ],
    mira: [
      { q: "Calcula 50 × 80 mentalmente.", steps: [["Sin ceros", "5 × 8 = 40."], ["Cuenta los ceros", "50 tiene uno y 80 tiene uno: son dos ceros."], ["Agrégalos", "40 con dos ceros más → 4,000."]], a: "4,000" },
      { q: "Calcula 7,200 ÷ 100.", steps: [["Entre 100", "Quita dos ceros."], ["Resultado", "7,200 → 72."]], a: "72" }
    ],
    gen: [
      G("por10", function (L) { var m = pick(L === 0 ? [10, 100] : [10, 100, 1000]), a = L === 0 ? R(2, 99) : R(12, 999), t = {}; t[a + m] = "Sumaste " + fmt(m) + ". Multiplicar por " + fmt(m) + " es agregar " + (String(m).length - 1) + (m === 10 ? " cero." : " ceros."); t[a * m * 10] = "Agregaste un cero de más.";
        return NUM("<b>" + fmt(a) + " × " + fmt(m) + " =</b>", a * m, { tr: t, tag: "multiplicar por 10, 100 y 1,000", h: "Agrega tantos ceros como tiene el " + fmt(m) + "." }); }),
      G("redondo", function (L) { var a = R(2, 9), b = R(2, 9), za = L === 0 ? 1 : R(1, 2), zb = L === 2 ? 1 : 0, A = a * Math.pow(10, za), B = b * Math.pow(10, zb), t = {}; t[a * b * Math.pow(10, za + zb - 1) || -1] = "Te faltó un cero: cuenta los ceros de los dos números.";
        return NUM("<b>" + fmt(A) + " × " + fmt(B) + " =</b>", A * B, { tr: t, tag: "multiplicar números redondos", h: "Multiplica " + a + " × " + b + " y luego agrega todos los ceros." }); }),
      G("div10", function (L) { var m = pick(L === 0 ? [10] : [10, 100]), a = R(2, 99) * (m === 100 ? 100 : 10) * (L === 2 ? 10 : 1), t = {}; t[a * m] = "Multiplicaste. Dividir entre " + m + " es quitar ceros.";
        return NUM("<b>" + fmt(a) + " ÷ " + m + " =</b>", a / m, { tr: t, tag: "dividir entre 10 y 100", h: "Quita tantos ceros como tiene el " + m + "." }); }),
      G("patron", function (L) { var a = R(2, 9) * (L === 2 ? 11 : 1);
        return FILL("Completa el patrón.", a + " × 1 = " + a + "<br>" + a + " × 10 = [[0]]<br>" + a + " × 100 = [[1]]<br>" + a + " × 1,000 = [[2]]", [a * 10, a * 100, a * 1000], { tag: "multiplicar por 10, 100 y 1,000", h: "Cada vez se agrega un cero más." }); }, [0, 1]),
      G("match", function (L) { var ps = shuf([[3, 10], [3, 100], [30, 100], [300, 10], [4, 50], [40, 5]]).slice(0, 4), seen = {}, out = []; ps.forEach(function (p) { var r = p[0] * p[1]; if (!seen[r]) { seen[r] = 1; out.push([fmt(p[0]) + " × " + fmt(p[1]), fmt(r)]); } });
        return MATCH("Relaciona cada multiplicación con su resultado.", out, { tag: "multiplicar números redondos", h: "Multiplica las cifras sin ceros y después agrega los ceros." }); }),
      G("est", function () { var a = R(2, 9), b = R(2, 9), A = a * 10, B = b * 100, r = A * B;
        return MC("¿Cuál es el resultado de <b>" + fmt(A) + " × " + fmt(B) + "</b>?", fmt(r), [[fmt(r / 10), "Faltó un cero: " + fmt(A) + " tiene uno y " + fmt(B) + " tiene dos."], [fmt(r * 10), "Pusiste un cero de más."], [fmt(a * b), "Faltaron todos los ceros."]], { tag: "multiplicar números redondos", h: "Cuenta los ceros de los dos números: son tres." }); }, [1, 2]),
      G("prob", function (L) { var p = pick([10, 20, 50, 100]), n = R(L === 2 ? 30 : 3, L === 2 ? 90 : 9) * (L === 2 ? 10 : 1);
        return NUM("Cada paquete tiene " + p + " estampas. ¿Cuántas estampas hay en " + fmt(n) + " paquetes?", p * n, { unit: "estampas", tag: "problemas de cálculo mental", h: "Multiplica sin ceros y luego agrega los ceros." }); })
    ] };

  var t13 = { id: "multiplicacion", n: "Multiplicación de hasta 3 cifras", d: "Multiplicar números de 2 y 3 cifras.", game: "lluvia-de-numeros",
    learn: [
      { h: "Multiplicar es sumar grupos iguales", p: "4 × 6 son 4 filas de 6. Es más rápido que sumar 6 + 6 + 6 + 6.", v: V.arr(4, 6) + ex("4 × 6 = 24") },
      { h: "En columna, de derecha a izquierda", p: "Multiplica el número de abajo por cada cifra de arriba, empezando por las unidades. Si te da 10 o más, escribe las unidades y lleva las decenas.", v: ex("&nbsp;&nbsp;&nbsp;24" + hl("7") + "<br>× &nbsp;&nbsp;&nbsp;&nbsp;3<br>7 × 3 = 21 <em>→</em> escribo 1, llevo 2"), k: "Lo que llevas se suma después de multiplicar la siguiente cifra." },
      { h: "Por un número de dos cifras", p: "Multiplica primero por las unidades; después por las decenas, empezando un lugar a la izquierda (deja un espacio o pon un 0). Al final suma los dos resultados.", v: ex("124 × 23 = 124 × 3 + 124 × 20 = 372 + 2,480 = " + hl("2,852")) }
    ],
    mira: [
      { q: "Resuelve 247 × 3", steps: [["Unidades", "7 × 3 = 21: escribo 1, llevo 2."], ["Decenas", "4 × 3 = 12, más 2 que llevaba = 14: escribo 4, llevo 1."], ["Centenas", "2 × 3 = 6, más 1 = 7."]], a: "741" },
      { q: "Resuelve 135 × 24", steps: [["Por las unidades", "135 × 4 = 540."], ["Por las decenas", "135 × 2 = 270; como es 20, va un lugar a la izquierda: 2,700."], ["Suma", "540 + 2,700 = 3,240."]], a: "3,240" }
    ],
    gen: [
      G("col1", function (L) { var a = L === 0 ? R(12, 98) : R(102, 989), m = R(3, 9), t = {}; t[mulNoCarry(a, m)] = "Olvidaste sumar lo que llevabas.";
        return COL("×", a, m, { q: "Multiplica en columna.", tr: t, tag: "multiplicar llevando", h: "Multiplica de derecha a izquierda. Lo que llevas se suma después de multiplicar la siguiente cifra." }); }),
      G("col2", function (L) { var a = L === 1 ? R(21, 99) : R(102, 499), m = R(12, 39), t = {}; t[a * (m % 10) + a * Math.floor(m / 10)] = "No recorriste el segundo resultado: al multiplicar por las decenas se escribe un lugar a la izquierda.";
        return COL("×", a, m, { q: "Multiplica. Haz las multiplicaciones parciales en tu cuaderno y escribe aquí el resultado final.", tr: t, tag: "multiplicar por dos cifras", h: "Multiplica por las unidades, luego por las decenas (un lugar a la izquierda) y suma." }); }, [1, 2]),
      G("arr", function () { var r = R(2, 6), c = R(3, 8);
        return MC("¿Qué multiplicación representa el dibujo?", r + " × " + c, [[r + " + " + c, "Eso suma filas y columnas. El total se calcula multiplicando."], [(r + 1) + " × " + c, "Cuenta otra vez las filas."], [r + " × " + (c - 1), "Cuenta otra vez cuántos hay en cada fila."]], { v: V.arr(r, c), tag: "entender la multiplicación", h: "Cuenta las filas y cuántos hay en cada fila." }); }, [0]),
      G("desc", function (L) { var d = R(1, 9) * 10, u = R(1, 9), m = R(3, 9), a = d + u;
        return FILL("Descompón para multiplicar.", a + " × " + m + " = (" + d + " × " + m + ") + (" + u + " × " + m + ") = [[0]] + [[1]] = [[2]]", [d * m, u * m, a * m], { tag: "multiplicar descomponiendo", h: "Multiplica las decenas y las unidades por separado y luego suma." }); }, [0, 1]),
      G("prob", function (L) { var c = pick([["Cada caja trae {a} lápices. ¿Cuántos lápices hay en {m} cajas?", "lápices"], ["Un autobús lleva {a} pasajeros por viaje. ¿Cuántos pasajeros lleva en {m} viajes?", "pasajeros"], ["Un boleto de cine cuesta ${a}. ¿Cuánto cuestan {m} boletos?", "pesos"], ["En un auditorio hay {m} filas con {a} butacas cada una. ¿Cuántas butacas hay?", "butacas"]]), a = L === 0 ? R(12, 48) : R(24, 150), m = L === 0 ? R(3, 9) : L === 1 ? R(12, 35) : R(105, 260), t = {}; t[a + m] = "Sumaste. Son grupos iguales: se multiplica.";
        return NUM(c[0].replace("{a}", a).replace("{m}", m), a * m, { unit: c[1], tr: t, tag: "problemas de multiplicación", h: "«Cada», «por» y «grupos iguales» son pistas de multiplicación." }); }),
      G("est", function () { var a = R(180, 420), m = R(3, 9), r = a * m, lo = Math.floor(a / 100) * 100 * m, hi = Math.ceil(a / 100) * 100 * m;
        return MC("¿Entre qué números está el resultado de <b>" + a + " × " + m + "</b>?", "entre " + fmt(lo) + " y " + fmt(hi), [["entre " + fmt(lo * 10) + " y " + fmt(hi * 10), "Redondea " + a + " a las centenas y multiplica."], ["entre " + fmt(Math.max(1, lo / 10)) + " y " + fmt(hi / 10), "Redondea " + a + " a las centenas y multiplica."]], { one: 1, tag: "estimar productos", h: a + " está entre " + Math.floor(a / 100) * 100 + " y " + Math.ceil(a / 100) * 100 + ". Multiplica cada uno por " + m + "." }); }, [1, 2]),
      G("match", function () { var ps = shuf([[12, 4], [25, 4], [15, 6], [21, 5], [32, 3], [14, 7]]).slice(0, 3);
        return MATCH("Relaciona cada multiplicación con su resultado.", ps.map(function (p) { return [p[0] + " × " + p[1], fmt(p[0] * p[1])]; }), { tag: "multiplicar llevando", h: "Resuelve cada una en tu cuaderno." }); }, [0, 1])
    ] };

  var t14 = { id: "division-resta", n: "División con resta", d: "Repartir y ver cuánto sobra: cociente y residuo.", game: "lluvia-de-numeros",
    learn: [
      { h: "Dividir es repartir en partes iguales", p: "23 ÷ 5 pregunta cuántas veces cabe el 5 en el 23. Puedes ir restando 5 hasta que ya no se pueda: 23 − 5 − 5 − 5 − 5 = 3. Restaste 4 veces y sobraron 3.", v: V.groups(4, 5) + ex("23 ÷ 5 = " + hl("4") + " y sobran " + hl("3")), k: "Las veces que restaste es el cociente; lo que sobra es el residuo." },
      { h: "Las partes de la división", p: "Dividendo: lo que repartes. Divisor: entre cuántos. Cociente: cuánto le toca a cada uno. Residuo: lo que sobra.", v: ex("23 ÷ 5 → cociente 4, residuo 3"), k: "El residuo siempre es menor que el divisor." },
      { h: "Comprueba", p: "Divisor × cociente + residuo = dividendo.", v: ex("5 × 4 + 3 = " + hl("23") + " ✓") }
    ],
    mira: [
      { q: "Resuelve 47 ÷ 6 restando.", steps: [["Resta 6 varias veces", "47 − 6 = 41, − 6 = 35, − 6 = 29, − 6 = 23, − 6 = 17, − 6 = 11, − 6 = 5."], ["Cuenta", "Restaste 7 veces y quedaron 5, que ya es menos que 6."], ["Comprueba", "6 × 7 + 5 = 47 ✓"]], a: "Cociente 7, residuo 5" },
      { q: "Resuelve 158 ÷ 7.", steps: [["¿Cuántas veces cabe 7 en 15?", "2 veces (14). Sobra 1; baja el 8: 18."], ["¿Cuántas veces cabe 7 en 18?", "2 veces (14). Sobran 4."], ["Comprueba", "7 × 22 + 4 = 158 ✓"]], a: "Cociente 22, residuo 4" }
    ],
    gen: [
      G("cr", function (L) { var d = L === 0 ? R(2, 5) : L === 1 ? R(3, 9) : R(12, 25), q = L === 0 ? R(3, 9) : L === 1 ? R(12, 99) : R(11, 45), r = R(1, d - 1), n = d * q + r;
        return FILL("Divide.", fmt(n) + " ÷ " + d + " = [[0]] y sobran [[1]]", [q, r], { tag: "cociente y residuo", h: "Busca cuántas veces cabe el " + d + " en " + fmt(n) + "; lo que sobra es el residuo (menor que " + d + ").", fe: function (i) { return i === 1 ? "Recuerda: el residuo es lo que sobra y debe ser menor que " + d + "." : "Revisa cuántas veces cabe el " + d + "."; } }); }),
      G("restas", function (L) { var d = R(3, 6), q = R(3, 6), r = R(1, d - 1), n = d * q + r;
        return NUM("Empieza en <b>" + n + "</b> y resta <b>" + d + "</b> una y otra vez hasta que quede menos de " + d + ". ¿Cuántas veces pudiste restar?", q, { v: V.nl(0, Math.ceil(n / 5) * 5, 1, { every: 5, hops: (function () { var h = []; for (var i = 0; i < q; i++) h.push([n - i * d, n - (i + 1) * d]); return h; })(), marks: [[n, String(n), PINK], [r, String(r), LIME]] }), tr: (function () { var o = {}; o[r] = "Ese es el número que sobró (el residuo). La pregunta es cuántas veces restaste."; return o; })(), tag: "dividir con restas sucesivas", h: "Cuenta los saltos: cada salto es restar " + d + "." }); }, [0, 1]),
      G("reparto", function (L) { var d = R(3, 6), q = R(3, 7), r = R(1, d - 1), n = d * q + r, obj = pick(["canicas", "galletas", "estampas", "dulces"]);
        return NUM("Se reparten " + n + " " + obj + " en partes iguales entre " + d + " niños. ¿Cuántas le tocan a cada uno?", q, { v: V.groups(d, q), tr: (function () { var o = {}; o[r] = "Ese es el residuo, lo que sobra."; o[q + 1] = "No alcanza para dar " + (q + 1) + " a cada uno."; return o; })(), tag: "repartir en partes iguales", h: "Busca qué número por " + d + " se acerca más a " + n + " sin pasarse." }); }, [0, 1]),
      G("comp", function (L) { var d = R(3, 9), q = R(5, 30), r = R(1, d - 1), n = d * q + r;
        return MC("¿Qué operación comprueba que <b>" + n + " ÷ " + d + " = " + q + "</b> y sobran <b>" + r + "</b>?", d + " × " + q + " + " + r + " = " + n, [[d + " × " + q + " − " + r + " = " + n, "El residuo se suma, no se resta."], [n + " × " + d + " + " + r, "Se multiplica el divisor por el cociente."], [d + " + " + q + " + " + r + " = " + n, "Se multiplica divisor por cociente y después se suma el residuo."]], { one: 1, tag: "comprobar la división", h: "Divisor × cociente + residuo = dividendo." }); }),
      G("tf", function () { var d = R(4, 9), cs = [["En una división entre " + d + ", el residuo puede ser " + (d + 1) + ".", false, "Si sobran " + (d + 1) + ", todavía cabe otra vez el " + d + ". El residuo siempre es menor que el divisor."], ["En una división entre " + d + ", el residuo puede ser " + (d - 1) + ".", true], ["Si el residuo es 0, la división es exacta.", true], ["El residuo puede ser igual al divisor.", false, "Si es igual, cabe una vez más."]], k = pick(cs);
        return TF(k[0], k[1], { et: k[2] || "", tag: "el residuo", h: "El residuo siempre es menor que el divisor." }); }),
      G("larga", function (L) { var d = L === 2 ? R(12, 25) : R(4, 9), q = L === 2 ? R(12, 40) : R(21, 99), r = R(0, d - 1), n = d * q + r;
        return NUM("¿Cuál es el <b>residuo</b> de " + fmt(n) + " ÷ " + d + "?", r, { tr: (function () { var o = {}; o[q] = "Ese es el cociente. La pregunta es lo que sobra."; return o; })(), tag: "cociente y residuo", h: "Haz la división en tu cuaderno; el residuo es lo que queda al final." }); }, [1, 2])
    ] };

  var t15 = { id: "problemas-division", n: "Problemas de división", d: "Repartir, agrupar y decidir qué hacer con lo que sobra.", game: "lluvia-de-numeros",
    learn: [
      { h: "¿Cuándo se divide?", p: "Se divide cuando repartes algo en partes iguales o cuando quieres saber cuántos grupos iguales se pueden hacer.", v: ex("«reparte», «a cada uno», «cuántos grupos», «cuánto cuesta cada uno»"), k: "Partes iguales → división." },
      { h: "¿Y lo que sobra?", p: "Lee bien la pregunta. A veces lo que sobra no importa; otras veces necesitas uno más para que nadie se quede fuera.", v: ex("50 niños, 8 por camioneta <em>→</em> 50 ÷ 8 = 6 y sobran 2 <em>→</em> se necesitan " + hl("7") + " camionetas"), k: "Si nadie se puede quedar fuera, se agrega uno más." }
    ],
    mira: [
      { q: "5 cuadernos cuestan $175. ¿Cuánto cuesta uno?", steps: [["Reparte el precio", "175 ÷ 5."], ["Divide", "17 ÷ 5 = 3, sobran 2; baja el 5: 25 ÷ 5 = 5."]], a: "$35" },
      { q: "Van 50 niños de excursión y en cada camioneta caben 8. ¿Cuántas camionetas se necesitan?", steps: [["Divide", "50 ÷ 8 = 6 y sobran 2."], ["Piensa en lo que sobra", "Con 6 camionetas, 2 niños se quedarían sin lugar."], ["Agrega una", "Se necesitan 7 camionetas."]], a: "7 camionetas" }
    ],
    gen: [
      G("exacta", function (L) { var d = L === 0 ? R(2, 5) : R(3, 9), q = L === 0 ? R(4, 12) : R(12, 85), c = pick([["Se reparten {n} canicas en {d} bolsas iguales. ¿Cuántas canicas van en cada bolsa?", "canicas"], ["{d} amigos ganaron ${n} y se los reparten igual. ¿Cuánto le toca a cada uno?", "pesos"], ["Una cuerda de {n} m se corta en {d} partes iguales. ¿Cuánto mide cada parte?", "m"]]), t = {}; t[q * d * d] = "Multiplicaste. Repartir en partes iguales es dividir.";
        return NUM(c[0].replace("{n}", fmt(q * d)).replace("{d}", d), q, { unit: c[1], tr: t, tag: "problemas de reparto", h: "Repartir en partes iguales se resuelve con una división." }); }),
      G("techo", function (L) { var d = R(4, 9), q = R(3, 9), r = R(1, d - 1), n = d * q + r, t = {}; t[q] = "Con " + q + " se quedarían " + r + " sin lugar. Hace falta una más.";
        var c = pick([["Van " + n + " niños de excursión y en cada camioneta caben " + d + ". ¿Cuántas camionetas se necesitan?", "camionetas"], ["Hay que guardar " + n + " libros en cajas donde caben " + d + ". ¿Cuántas cajas se necesitan?", "cajas"], ["Para una fiesta llegan " + n + " invitados y en cada mesa caben " + d + ". ¿Cuántas mesas se necesitan?", "mesas"]]);
        return NUM(c[0], q + 1, { unit: c[1], tr: t, tag: "qué hacer con el residuo", h: "Divide. Si sobra algo, piensa: ¿alguien se queda fuera?" }); }),
      G("sobran", function (L) { var d = R(3, 9), q = R(4, 15), r = R(1, d - 1), n = d * q + r;
        return NUM("Se empacan " + n + " huevos en cajas de " + d + ". ¿Cuántos huevos <b>sobran</b> sin caja?", r, { unit: "huevos", tr: (function () { var o = {}; o[q] = "Esas son las cajas que se llenan. La pregunta es cuántos sobran."; return o; })(), tag: "el residuo en problemas", h: "Lo que sobra es el residuo de la división." }); }),
      G("reparto", function (L) { var d = R(3, 8), q = R(4, L === 0 ? 9 : 25), r = R(1, d - 1), n = d * q + r, obj = pick(["dulces", "estampas", "galletas", "lápices"]);
        return FILL("Se reparten " + n + " " + obj + " entre " + d + " niños, en partes iguales.", "A cada niño le tocan [[0]] " + obj + " y sobran [[1]].", [q, r], { tag: "el residuo en problemas", h: "Divide " + n + " ÷ " + d + ": el cociente es lo que le toca a cada uno y el residuo, lo que sobra.", fe: function (i) { return i === 1 ? "Lo que sobra tiene que ser menor que " + d + "." : "Busca cuántas veces cabe " + d + " en " + n + "."; } }); }),
      G("op", function () { var c = pick([["Hay 6 bolsas con 24 dulces cada una. ¿Cuántos dulces hay?", "Multiplicación"], ["Se reparten 144 dulces en 6 bolsas iguales. ¿Cuántos van en cada bolsa?", "División"], ["Un paquete de 8 jugos cuesta $96. ¿Cuánto cuesta cada jugo?", "División"], ["Un jugo cuesta $12. ¿Cuánto cuestan 8 jugos?", "Multiplicación"]]);
        return MC("¿Qué operación resuelve el problema?<br><i>" + c[0] + "</i>", c[1], [c[1] === "División" ? ["Multiplicación", "Se busca cuánto le toca a cada uno: es repartir."] : ["División", "Se juntan grupos iguales: es multiplicar."], ["Resta", ""]], { tag: "elegir la operación", h: "Juntar grupos iguales → multiplicación. Repartir en partes iguales → división." }); }),
      G("precio", function (L) { var n = R(3, 9), p = R(L === 0 ? 5 : 12, L === 0 ? 20 : 95);
        return NUM(n + " helados cuestan $" + fmt(n * p) + ". ¿Cuánto cuesta un helado?", p, { pre: "$", tag: "problemas de reparto", h: "Divide el total entre el número de helados." }); }),
      G("dos", function () { var d = R(4, 8), q = R(12, 30), extra = R(10, 40), n = d * q;
        return NUM("Una maestra tiene " + (n + extra) + " hojas. Guarda " + extra + " y reparte las demás entre " + d + " equipos por igual. ¿Cuántas hojas le tocan a cada equipo?", q, { tr: (function () { var o = {}; o[Math.floor((n + extra) / d)] = "Antes de repartir, quita las " + extra + " hojas que guardó."; return o; })(), tag: "problemas de dos pasos", h: "Primero resta lo que guarda; después divide." }); }, [2]),
      G("grupos", function (L) { var d = R(4, 12), q = R(5, 25);
        return NUM("En una competencia hay " + (d * q) + " alumnos y se forman equipos de " + d + ". ¿Cuántos equipos se forman?", q, { unit: "equipos", tag: "formar grupos", h: "¿Cuántas veces cabe el " + d + " en " + (d * q) + "? Divide." }); }, [1, 2])
    ] };

  var t16 = { id: "operaciones-inversas", n: "Multiplicación y división, su relación como operaciones inversas", d: "Una deshace lo que hace la otra.", game: "lluvia-de-numeros",
    learn: [
      { h: "Una deshace a la otra", p: "Si 6 × 7 = 42, entonces 42 ÷ 7 = 6 y 42 ÷ 6 = 7. La división deshace la multiplicación.", v: ex("6 × 7 = 42 <em>⇄</em> 42 ÷ 7 = 6"), k: "Con una multiplicación puedes escribir dos divisiones." },
      { h: "Para encontrar el número que falta", p: "Si no sabes qué número por 8 da 56, divide: 56 ÷ 8 = 7.", v: ex("___ × 8 = 56 <em>→</em> 56 ÷ 8 = " + hl("7")), k: "El factor que falta = producto ÷ el factor que conoces." }
    ],
    mira: [
      { q: "¿Qué número falta? ___ × 9 = 72", steps: [["Usa la inversa", "72 ÷ 9."], ["Resuelve", "9 × 8 = 72, así que el número es 8."]], a: "8" },
      { q: "Pensé un número, lo multipliqué por 6 y obtuve 84. ¿Qué número pensé?", steps: [["Deshaz la multiplicación", "84 ÷ 6."], ["Divide", "84 ÷ 6 = 14. Comprueba: 14 × 6 = 84 ✓"]], a: "14" }
    ],
    gen: [
      G("fam", function (L) { var a = R(3, 9), b = L === 0 ? R(2, 9) : R(6, 25), c = a * b;
        return FILL("Completa.", a + " × " + b + " = " + c + "<br>" + c + " ÷ " + a + " = [[0]]<br>" + c + " ÷ " + b + " = [[1]]", [b, a], { tag: "familia de multiplicación y división", h: "Con los mismos tres números: si a × b = c, entonces c ÷ a = b y c ÷ b = a." }); }),
      G("falta", function (L) { var a = R(3, 9), b = L === 0 ? R(2, 9) : R(6, 15), left = Math.random() < .5, t = {}; t[a * b * a] = "Multiplicaste. Para encontrar el factor que falta, divide.";
        return NUM("¿Qué número falta? <b>" + (left ? "____ × " + a : a + " × ____") + " = " + (a * b) + "</b>", b, { tr: t, tag: "factor desconocido", h: "Divide el resultado entre el número que sí conoces: " + (a * b) + " ÷ " + a + "." }); }),
      G("comp", function (L) { var a = R(3, 9), b = R(4, 12), c = a * b;
        return MC("¿Qué multiplicación comprueba que <b>" + c + " ÷ " + a + " = " + b + "</b>?", b + " × " + a + " = " + c, [[c + " × " + a + " = " + b, "Se multiplica el resultado por el divisor."], [b + " + " + a + " = " + c, "La inversa de dividir es multiplicar, no sumar."], [c + " × " + b + " = " + a, ""]], { tag: "comprobar divisiones", h: "Cociente × divisor = dividendo." }); }),
      G("match", function () { var ps = shuf([[6, 7], [8, 4], [9, 5], [7, 3], [6, 8]]).slice(0, 3);
        return MATCH("Relaciona cada multiplicación con la división que la deshace.", ps.map(function (p) { return [p[0] + " × " + p[1] + " = " + p[0] * p[1], (p[0] * p[1]) + " ÷ " + p[1] + " = " + p[0]]; }), { tag: "familia de multiplicación y división", h: "Busca la división con los mismos tres números." }); }),
      G("tf", function () { var a = R(3, 9), b = R(3, 9), c = a * b, cs = [["Si " + a + " × " + b + " = " + c + ", entonces " + c + " ÷ " + a + " = " + b + ".", true], ["Si " + a + " × " + b + " = " + c + ", entonces " + c + " ÷ " + b + " = " + c + ".", false, c + " ÷ " + b + " = " + a + "."], ["Si " + c + " ÷ " + a + " = " + b + ", entonces " + a + " × " + b + " = " + c + ".", true]], k = pick(cs);
        return TF(k[0], k[1], { et: k[2] || "", tag: "operaciones inversas", h: "La división deshace la multiplicación." }); }, [0, 1]),
      G("pense", function (L) { var m = R(3, 9), x = L === 2 ? R(12, 45) : R(4, 12);
        return NUM("Pensé un número, lo multipliqué por " + m + " y obtuve " + (m * x) + ". ¿Qué número pensé?", x, { tr: (function () { var o = {}; o[m * x * m] = "Multiplicaste otra vez. Para regresar, divide."; return o; })(), tag: "factor desconocido", h: "Deshaz la multiplicación dividiendo entre " + m + "." }); }, [1, 2]),
      G("pense2", function () { var m = R(3, 6), x = R(6, 20), s = R(5, 20);
        return NUM("Pensé un número, lo multipliqué por " + m + " y luego le sumé " + s + ". Obtuve " + (m * x + s) + ". ¿Qué número pensé?", x, { tag: "operaciones inversas en dos pasos", h: "Deshaz de atrás hacia adelante: primero resta " + s + ", luego divide entre " + m + "." }); }, [2])
    ] };

  var t17 = { id: "doble-triple-mitad", n: "El doble, el triple y la mitad", d: "Multiplicar por 2, por 3 y dividir entre 2.", game: "lluvia-de-numeros",
    learn: [
      { h: "Doble y triple", p: "El <b>doble</b> es dos veces un número: × 2. El <b>triple</b> es tres veces: × 3.", v: V.groups(3, 4, SKY) + ex("triple de 4 = 4 + 4 + 4 = " + hl("12")), k: "Doble = × 2. Triple = × 3." },
      { h: "La mitad", p: "La <b>mitad</b> es partir en dos partes iguales: ÷ 2. La mitad de 30 es 15, porque 15 + 15 = 30.", v: ex("mitad de 30 = 30 ÷ 2 = " + hl("15")), k: "La mitad deshace el doble." },
      { h: "Más palabras", p: "El <b>cuádruple</b> es × 4 y la <b>tercera parte</b> es ÷ 3.", v: ex("cuádruple de 5 = 20 <em>·</em> tercera parte de 21 = 7") }
    ],
    mira: [
      { q: "Ana tiene 14 años y su papá tiene el triple. ¿Cuántos años tiene su papá?", steps: [["Triple", "14 × 3."], ["Multiplica", "10 × 3 = 30 y 4 × 3 = 12; 30 + 12 = 42."]], a: "42 años" },
      { q: "La mitad de un número es 36. ¿Cuál es el número?", steps: [["Piensa al revés", "Si la mitad es 36, el número entero es el doble."], ["Doble", "36 × 2 = 72."]], a: "72" }
    ],
    gen: [
      G("calc", function (L) { var k = pick(["doble", "triple", "mitad"]), n = L === 0 ? R(4, 30) : L === 1 ? R(25, 250) : R(150, 2500); if (k === "mitad" && n % 2) n++; var a = k === "doble" ? n * 2 : k === "triple" ? n * 3 : n / 2, t = {}; if (k !== "doble") t[n * 2] = "Calculaste el doble."; if (k !== "triple") t[n * 3] = "Calculaste el triple."; if (k !== "mitad") t[n / 2] = "Calculaste la mitad.";
        return NUM("¿Cuál es " + (k === "mitad" ? "la" : "el") + " <b>" + k + "</b> de " + fmt(n) + "?", a, { tr: t, tag: k === "mitad" ? "calcular la mitad" : "calcular el " + k, h: "Doble = × 2 · Triple = × 3 · Mitad = ÷ 2." }); }),
      G("tabla", function (L) { var n = (L === 0 ? R(3, 20) : R(12, 120)) * 2;
        return FILL("Completa la tabla.", tbl(["Número", "Doble", "Triple", "Mitad"], [[n, "[[0]]", "[[1]]", "[[2]]"]]), [n * 2, n * 3, n / 2], { tag: "doble, triple y mitad", h: "Doble = × 2 · Triple = × 3 · Mitad = ÷ 2." }); }),
      G("visual", function () { var k = R(3, 7), tri = Math.random() < .5;
        return MC("Cada grupo tiene " + k + " pelotas. ¿Cuántas son el <b>" + (tri ? "triple" : "doble") + "</b> de " + k + "?", String(k * (tri ? 3 : 2)), [[String(k * (tri ? 2 : 3)), tri ? "Ese es el doble." : "Ese es el triple."], [String(k + (tri ? 3 : 2)), "Sumaste en lugar de multiplicar."], [String(k * 4), ""]], { v: V.groups(tri ? 3 : 2, k, SKY), tag: "doble y triple", h: "Cuenta todas las pelotas de los grupos." }); }, [0]),
      G("prob", function (L) { var c = pick([["{n} tiene {a} años y su papá el triple. ¿Cuántos años tiene su papá?", 3, "años"], ["Un libro cuesta ${a} y una mochila el doble. ¿Cuánto cuesta la mochila?", 2, "pesos"], ["Un camión llevaba {a} cajas y dejó la mitad en una tienda. ¿Cuántas cajas dejó?", .5, "cajas"], ["En la mañana {n} caminó {a} m y en la tarde el triple. ¿Cuánto caminó en la tarde?", 3, "m"]]), a = c[1] === .5 ? R(10, 120) * 2 : R(8, L === 0 ? 20 : 60);
        return NUM(c[0].replace("{n}", nm()).replace("{a}", fmt(a)), a * c[1], { unit: c[2], tag: "problemas de doble, triple y mitad", h: "Doble × 2, triple × 3, mitad ÷ 2." }); }),
      G("match", function () { var n = R(6, 20) * 2;
        return MATCH("Relaciona.", [["doble de " + n, String(n * 2)], ["triple de " + n, String(n * 3)], ["mitad de " + n, String(n / 2)], ["cuádruple de " + n, String(n * 4)]], { tag: "doble, triple y mitad", h: "Doble × 2, triple × 3, mitad ÷ 2, cuádruple × 4." }); }, [1, 2]),
      G("inversa", function (L) { var k = pick(["mitad", "doble", "triple"]), x = R(12, 90), shown = k === "mitad" ? x / 1 : k === "doble" ? x * 2 : x * 3, ans = k === "mitad" ? x * 2 : x;
        if (k === "mitad") return NUM("La mitad de un número es " + x + ". ¿Cuál es el número?", x * 2, { tr: (function () { var o = {}; o[x / 2] = "Sacaste la mitad otra vez. Si " + x + " es la mitad, el número es el doble."; return o; })(), tag: "pensar al revés", h: "Si conoces la mitad, el número completo es el doble." });
        return NUM("El " + k + " de un número es " + shown + ". ¿Cuál es el número?", x, { tag: "pensar al revés", h: "Deshaz: divide entre " + (k === "doble" ? 2 : 3) + "." }); }, [2]),
      G("tercera", function () { var n = R(5, 40) * 3, c = Math.random() < .5;
        return NUM("¿Cuál es " + (c ? "el <b>cuádruple</b>" : "la <b>tercera parte</b>") + " de " + n + "?", c ? n * 4 : n / 3, { tag: c ? "el cuádruple" : "la tercera parte", h: c ? "Cuádruple = × 4." : "Tercera parte = ÷ 3." }); }, [2])
    ] };

  /* =====================================================================
     UNIDAD 4 · FRACCIONES
     ===================================================================== */
  function rf(L) { var d = L === 0 ? pick([2, 3, 4]) : pick([3, 4, 5, 6, 8]), n = R(1, d - 1); return [n, d]; }

  var t18 = { id: "fraccion-todo", n: "La fracción como parte de un todo", d: "Partes iguales de un entero o de un conjunto.", game: "pizzeria-fracciones",
    learn: [
      { h: "Partes iguales", p: "Una fracción dice cuántas partes iguales tomas de un entero. El entero tiene que estar partido en partes <b>iguales</b>.", v: V.pie(4, 3, PINK) + ex(fr(3, 4) + " <em>→</em> tres cuartos"), k: "Si las partes no son iguales, no es una fracción." },
      { h: "Numerador y denominador", p: "El número de abajo (<b>denominador</b>) dice en cuántas partes iguales se partió. El de arriba (<b>numerador</b>) dice cuántas tomaste.", v: V.bar(5, 2, LAV) + ex(fr(hl("2"), "5") + " <em>2 tomadas de 5</em>") },
      { h: "Cómo se leen", p: "Medios, tercios, cuartos, quintos, sextos, séptimos, octavos, novenos y décimos.", v: ex(fr(5, 6) + " cinco sextos <em>·</em> " + fr(1, 8) + " un octavo"), k: "El denominador da el nombre." }
    ],
    mira: [
      { q: "¿Qué fracción está coloreada?", v: V.pie(6, 4, SKY), steps: [["Cuenta las partes", "El círculo tiene 6 partes iguales: el denominador es 6."], ["Cuenta las coloreadas", "Hay 4 coloreadas: el numerador es 4."]], a: fr(4, 6) + " (cuatro sextos)" },
      { q: "De 12 canicas, 5 son rojas. ¿Qué fracción son rojas?", steps: [["El total", "12 canicas: denominador 12."], ["Las rojas", "5: numerador 5."]], a: fr(5, 12) }
    ],
    gen: [
      G("pinta", function (L) { var f = rf(L), kind = f[1] <= 8 && Math.random() < .5 ? "pie" : "bar";
        return SHADE("Colorea " + fr(f[0], f[1]) + " de la figura.", kind, f[1], f[0], { color: PINK, tag: "representar fracciones", h: "La figura tiene " + f[1] + " partes iguales. Colorea " + f[0] + "." }); }),
      G("lee", function (L) { var f = rf(L), t = {}; t[f[1] + "/" + f[0]] = "Invertiste: abajo va el total de partes y arriba las coloreadas."; t[f[0] + "/" + (f[1] - f[0])] = "Abajo va el total de partes, no las que quedan sin color.";
        return FR("¿Qué fracción está coloreada?", f[0], f[1], { exact: 1, v: Math.random() < .5 ? V.pie(f[1], f[0], LAV) : V.bar(f[1], f[0], LAV), tr: t, tag: "leer fracciones en dibujos", h: "Abajo: cuántas partes hay en total. Arriba: cuántas están coloreadas." }); }),
      G("nombre", function (L) { var f = rf(L), od = f[1] === 3 ? 4 : 3, w = [[NW[f[0]] + " " + NW[f[1]], "El denominador se lee como medios, tercios, cuartos…"], [fname(f[0], od), "El denominador es " + f[1] + ": son " + FN[f[1]][1] + "."]]; if (FN[f[0]] && f[0] > 1) w.unshift([NW[f[1]] + " " + FN[f[0]][1], "Invertiste: primero se lee el numerador."]);
        return MC("¿Cómo se lee " + fr(f[0], f[1]) + "?", fname(f[0], f[1]), w, { tag: "leer fracciones", h: "Primero el numerador; luego el nombre del denominador (cuartos, quintos…)." }); }),
      G("conj", function (L) { var n = pick([6, 8, 10, 12]), k = R(1, n - 1);
        return FR("¿Qué fracción de los círculos está coloreada?", k, n, { exact: 1, v: V.set(n, k, SKY), tr: (function () { var o = {}; o[(n - k) + "/" + n] = "Esa es la fracción de los que NO están coloreados."; return o; })(), tag: "fracciones de un conjunto", h: "El total de círculos es el denominador; los coloreados, el numerador." }); }),
      G("no", function (L) { var f = rf(L);
        return FR("¿Qué fracción <b>NO</b> está coloreada?", f[1] - f[0], f[1], { exact: 1, v: V.bar(f[1], f[0], LIME), tr: (function () { var o = {}; o[f[0] + "/" + f[1]] = "Esa es la parte coloreada. Pregunta por la blanca."; return o; })(), tag: "la parte que falta", h: "Cuenta las partes blancas." }); }, [1, 2]),
      G("match", function (L) { var fs = shuf([[1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [3, 8], [7, 10]]).slice(0, 4);
        return MATCH("Relaciona cada fracción con su nombre.", fs.map(function (f) { return [f[0] + "/" + f[1], fname(f[0], f[1])]; }), { tag: "leer fracciones", h: "El denominador da el nombre: 2 medios, 3 tercios, 4 cuartos…" }); }),
      G("iguales", function () { var c = pick([["Un pastel partido en 4 pedazos de distinto tamaño, y uno está pintado. ¿Es " + fr(1, 4) + "?", false, "Para que sea un cuarto, los 4 pedazos tienen que ser iguales."], ["Una barra partida en 5 partes iguales con 2 coloreadas representa " + fr(2, 5) + ".", true], ["En " + fr(3, 7) + ", el 7 dice cuántas partes se tomaron.", false, "El 7 (denominador) dice en cuántas partes iguales se partió el entero."]]);
        return TF(c[0], c[1], { et: c[2] || "", tag: "qué es una fracción", h: "Las partes deben ser iguales. Abajo: partes en total; arriba: partes tomadas." }); }, [1, 2])
    ] };

  var t19 = { id: "unidad-referencia", n: "La unidad de referencia", d: "Una fracción siempre es parte de un entero: ¿de cuál?", game: "pizzeria-fracciones",
    learn: [
      { h: "¿Mitad de qué?", p: "La mitad de una pizza grande no es igual a la mitad de una pizza chica. Para comparar fracciones, el entero (la <b>unidad de referencia</b>) tiene que ser el mismo.", v: '<div style="display:flex;gap:14px;align-items:center;justify-content:center">' + V.pie(2, 1, PINK, { r: 60 }) + V.pie(2, 1, PINK, { r: 32 }) + "</div>", k: "Antes de comparar fracciones, mira de qué entero son." },
      { h: "Del pedazo al entero", p: "Si un pedazo es " + fr(1, 4) + " del chocolate, el chocolate completo son 4 pedazos como ese.", v: '<div style="display:grid;gap:6px;justify-items:center">' + cbar(60, LIME) + cbar(240, LIME) + "</div>" + ex(fr(1, 4) + " × 4 = el entero"), k: "Si conoces " + fr(1, "n") + ", repítelo n veces." }
    ],
    mira: [
      { q: fr(1, 3) + " de una cinta mide 5 cm. ¿Cuánto mide la cinta completa?", v: V.bar(3, 1, SKY, { lab: "1 de 3 partes = 5 cm" }), steps: [["El entero tiene 3 tercios", "Cada tercio mide 5 cm."], ["Multiplica", "5 × 3 = 15."]], a: "15 cm" },
      { q: fr(3, 4) + " de una cinta miden 12 cm. ¿Cuánto mide la cinta completa?", steps: [["Un cuarto", "3 cuartos = 12 cm, así que 1 cuarto = 12 ÷ 3 = 4 cm."], ["Los cuatro cuartos", "4 × 4 = 16."]], a: "16 cm" }
    ],
    gen: [
      G("unidad", function (L) { var d = pick([2, 3, 4]), u = 50, opts = [[d, true], [d === 2 ? 3 : 2, false], [d === 4 ? 3 : d + 1, false]];
        return MC("Esta barra es " + fr(1, d) + " de la unidad. ¿Cuál es la unidad completa?", cbar(u * d), [[cbar(u * opts[1][0]), "Repite el pedazo tantas veces como dice el denominador: " + d + "."], [cbar(u * opts[2][0]), "Repite el pedazo " + d + " veces."], [cbar(u), "Esa es la misma barra; el entero es más largo."]], { v: cbar(u), tag: "encontrar el entero", h: "Si el pedazo es " + fr(1, d) + ", el entero son " + d + " pedazos iguales." }); }, [0, 1]),
      G("cinta", function (L) { var d = pick([2, 3, 4, 5, 6]), n = L === 2 ? R(2, d - 1) : 1, part = R(2, 9), mide = part * n, t = {}; t[mide * d] = "Multiplicaste " + mide + " por " + d + ", pero " + mide + " cm son " + n + " partes, no una.";
        return NUM(fr(n, d) + " de una cinta " + (n === 1 ? "mide" : "miden") + " " + mide + " cm. ¿Cuánto mide la cinta completa?", part * d, { unit: "cm", tr: n > 1 ? t : {}, tag: "del pedazo al entero", h: n === 1 ? "La cinta completa son " + d + " pedazos de " + mide + " cm." : "Primero calcula cuánto mide " + fr(1, d) + ": " + mide + " ÷ " + n + ". Después multiplica por " + d + "." }); }),
      G("tf", function () { var c = pick([[fr(1, 2) + " de una pizza grande es lo mismo que " + fr(1, 2) + " de una pizza chica.", false, "Las dos son mitades, pero de enteros de distinto tamaño."], [fr(1, 4) + " de una barra de 20 cm mide lo mismo que " + fr(1, 4) + " de otra barra de 20 cm.", true], ["Si dos niños comen " + fr(1, 3) + " de pasteles diferentes, comieron lo mismo.", false, "Depende del tamaño de cada pastel."]]);
        return TF(c[0], c[1], { et: c[2] || "", ef: "", tag: "comparar con el mismo entero", h: "Para comparar fracciones, el entero tiene que ser igual." }); }),
      G("cuadritos", function (L) { var d = pick([2, 3, 4, 6]), tot = d * R(2, 4), n = L === 0 ? 1 : R(1, d - 1);
        return NUM("La unidad es esta tira de " + tot + " cuadritos. ¿Cuántos cuadritos son " + fr(n, d) + " de la tira?", tot / d * n, { v: SHADE_STATIC(tot), unit: "cuadritos", tag: "fracción de una unidad", h: "Divide los " + tot + " cuadritos en " + d + " grupos iguales y toma " + n + "." }); }),
      G("canicas", function (L) { var d = pick([3, 4, 5]), k = R(2, 6), n = L === 2 ? R(2, d - 1) : 1;
        return NUM(k * n + " canicas son " + fr(n, d) + " de las canicas de una bolsa. ¿Cuántas canicas hay en la bolsa?", k * d, { unit: "canicas", tag: "del pedazo al entero", h: n === 1 ? "La bolsa completa son " + d + " grupos de " + k + "." : "Primero encuentra " + fr(1, d) + ": " + (k * n) + " ÷ " + n + " = " + k + "." }); }, [1, 2]),
      G("mayor", function () { var A = R(4, 8), B = A + R(2, 6);
        return MC(nm() + " comió " + fr(1, 2) + " de un pastel de " + A + " rebanadas y " + nm() + " comió " + fr(1, 2) + " de un pastel de " + B + " rebanadas del mismo tamaño. ¿Quién comió más rebanadas?", "El del pastel de " + B + " rebanadas", [["El del pastel de " + A + " rebanadas", "La mitad de " + B + " es más que la mitad de " + A + "."], ["Comieron lo mismo", "Son mitades de pasteles diferentes."]], { one: 1, tag: "comparar con el mismo entero", h: "Calcula la mitad de cada pastel." }); }, [2])
    ] };
  function SHADE_STATIC(n) { var s = ""; for (var i = 0; i < n; i++) s += '<rect x="' + (6 + i * Math.min(26, 300 / n)) + '" y="6" width="' + Math.min(26, 300 / n) + '" height="30" fill="#fff" stroke="#15192B" stroke-width="1.8"/>'; return '<svg class="mt-svg" viewBox="0 0 ' + (n * Math.min(26, 300 / n) + 12) + ' 42">' + s + "</svg>"; }

  var t20 = { id: "fraccionamiento-longitudes", n: "Fraccionamiento de longitudes para introducir nuevas fracciones (tercios, quintos y sextos)", d: "Partir rectas y tiras en partes iguales.", game: "pizzeria-fracciones",
    learn: [
      { h: "Partir una tira", p: "Si una tira se parte en 3 partes iguales, cada parte es un tercio; en 5, un quinto; en 6, un sexto.", v: V.bars([[3, 1, SKY, fr(1, 3)], [5, 1, LIME, fr(1, 5)], [6, 1, PINK, fr(1, 6)]]), k: "Mientras más partes, más pequeña es cada una." },
      { h: "Fracciones en la recta", p: "Entre 0 y 1 la recta se parte en partes iguales. Cada salto es una fracción.", v: V.nl(0, 1, 1 / 3, { lab: function (v, i) { return i === 0 ? "0" : i === 3 ? "1" : fr(i, 3); }, marks: [[2 / 3, "", PINK]] }), k: "El punto rosa está en " + fr(2, 3) + ": dos saltos de un tercio." }
    ],
    mira: [
      { q: "Una cinta de 30 cm se divide en quintos. ¿Cuánto mide cada parte?", steps: [["Quintos = 5 partes", "Divide 30 entre 5."], ["Resultado", "30 ÷ 5 = 6."]], a: "6 cm" },
      { q: "¿Dónde va " + fr(4, 6) + " en la recta?", v: V.nl(0, 1, 1 / 6, { lab: function (v, i) { return i === 0 ? "0" : i === 6 ? "1" : ""; } }), steps: [["Cuenta las partes", "De 0 a 1 hay 6 partes: sextos."], ["Avanza", "Cuenta 4 saltos desde el 0."]], a: "En la cuarta marca después del 0" }
    ],
    gen: [
      G("recta", function (L) { var d = pick(L === 0 ? [2, 3, 4] : [3, 5, 6]), n = R(1, d - 1), ticks = []; for (var i = 0; i <= d; i++) ticks.push({ v: i / d, show: i === 0 || i === d, l: i === 0 ? "0" : i === d ? "1" : "" });
        return LINE("Toca en la recta dónde está " + fr(n, d) + ".", ticks, n, { al: fr(n, d), tag: "fracciones en la recta", h: "De 0 a 1 hay " + d + " saltos iguales. Avanza " + n + ".", le: function (a) { return "Marcaste " + a + "/" + d + ". Cuenta los saltos desde el 0."; } }); }),
      G("recta2", function () { var d = pick([3, 4, 5]), n = R(d + 1, 2 * d - 1), ticks = []; for (var i = 0; i <= 2 * d; i++) ticks.push({ v: i / d, show: i % d === 0, l: String(i / d), big: i % d === 0 });
        return LINE("Toca en la recta dónde está " + fr(n, d) + ".", ticks, n, { al: fr(n, d), tag: "fracciones mayores que 1", h: "Cada entero tiene " + d + " saltos. " + fr(n, d) + " son " + n + " saltos desde el 0: pasa del 1.", le: function (a) { return "Marcaste " + a + "/" + d + "."; } }); }, [2]),
      G("cinta", function (L) { var d = pick([3, 5, 6]), p = R(2, L === 0 ? 6 : 15), n = L === 2 ? R(2, d - 1) : 1;
        return NUM("Una cinta de " + (p * d) + " cm se divide en " + FN[d][1] + ". ¿Cuánto mide" + (n > 1 ? "n " + fr(n, d) : " cada parte") + "?", p * n, { unit: "cm", tr: (function () { var o = {}; o[p * d * d] = "Multiplicaste. Partir es dividir."; return o; })(), tag: "partir una longitud", h: FN[d][1].charAt(0).toUpperCase() + FN[d][1].slice(1) + " = " + d + " partes iguales. Divide " + (p * d) + " entre " + d + (n > 1 ? " y toma " + n + " partes." : ".") }); }),
      G("cuantas", function () { var d = pick([3, 5, 6]);
        return MC("La recta de 0 a 1 está partida en partes iguales. ¿Cómo se llama cada parte?", FN[d][1], [[FN[d === 3 ? 4 : d - 1][1], "Cuenta los espacios entre marcas, no las marcas."], [FN[d === 6 ? 8 : d + 1][1], "Cuenta los espacios entre marcas, no las marcas."], [FN[2][1], ""]], { v: V.nl(0, 1, 1 / d, { lab: function (v, i) { return i === 0 ? "0" : i === d ? "1" : ""; } }), tag: "contar las partes", h: "Cuenta los espacios (saltos) entre el 0 y el 1." }); }),
      G("lee", function (L) { var d = pick([3, 5, 6]), n = R(1, d - 1);
        return FR("¿Qué fracción marca el punto rosa?", n, d, { exact: 1, v: V.nl(0, 1, 1 / d, { lab: function (v, i) { return i === 0 ? "0" : i === d ? "1" : ""; }, marks: [[n / d, "", PINK]] }), tr: (function () { var o = {}; o[n + "/" + (d + 1)] = "Contaste las marcas. Cuenta los espacios entre marcas: son " + d + "."; return o; })(), tag: "fracciones en la recta", h: "Abajo: cuántos saltos hay de 0 a 1. Arriba: cuántos saltos hasta el punto." }); }),
      G("regla", function () { var d = pick([3, 5, 6]), cm = d * R(1, 2);
        return NUM("Una tira mide " + cm + " cm. ¿Cuántos centímetros son " + fr(1, d) + " de la tira?", cm / d, { unit: "cm", v: V.ruler(cm, cm / d), tag: "partir una longitud", h: "Divide " + cm + " entre " + d + "." }); }, [0, 1])
    ] };

  var t21 = { id: "equivalencia", n: "Equivalencia de fracciones", d: "Fracciones distintas que ocupan lo mismo.", game: "pizzeria-fracciones",
    learn: [
      { h: "Mismo tamaño, distinto nombre", p: "Si pintas la mitad de una tira, y luego partes cada parte en dos, tienes 2 de 4. " + fr(1, 2) + " y " + fr(2, 4) + " ocupan lo mismo: son <b>equivalentes</b>.", v: V.bars([[2, 1, LAV, fr(1, 2)], [4, 2, LAV, fr(2, 4)], [8, 4, LAV, fr(4, 8)]]), k: fr(1, 2) + " = " + fr(2, 4) + " = " + fr(4, 8) },
      { h: "Multiplica arriba y abajo", p: "Si multiplicas el numerador y el denominador por el mismo número, obtienes una fracción equivalente.", v: ex(fr(2, 3) + " <em>× 2 →</em> " + fr(4, 6)), k: "Lo que haces arriba, lo haces abajo." }
    ],
    mira: [
      { q: "Completa: " + fr(3, 4) + " = " + fr("?", 8), steps: [["¿Qué pasó abajo?", "4 × 2 = 8."], ["Haz lo mismo arriba", "3 × 2 = 6."]], a: fr(6, 8) },
      { q: "¿Son equivalentes " + fr(2, 3) + " y " + fr(3, 4) + "?", v: V.bars([[3, 2, PINK, fr(2, 3)], [4, 3, SKY, fr(3, 4)]]), steps: [["Compara las barras", "Las partes pintadas no miden lo mismo."]], a: "No son equivalentes" }
    ],
    gen: [
      G("visual", function (L) { var eq = Math.random() < .55, a = [1, 2], k = 2; var f1 = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4]]), m = pick([2, 3]), f2 = eq ? [f1[0] * m, f1[1] * m] : [f1[0] * m + 1, f1[1] * m];
        if (f2[1] > 12) { m = 2; f2 = eq ? [f1[0] * 2, f1[1] * 2] : [f1[0] * 2 + 1, f1[1] * 2]; }
        return TF("¿Son equivalentes " + fr(f1[0], f1[1]) + " y " + fr(f2[0], f2[1]) + "?", eq, { v: V.bars([[f1[1], f1[0], LAV, fr(f1[0], f1[1])], [f2[1], f2[0], PINK, fr(f2[0], f2[1])]]), et: "Las partes coloreadas no miden lo mismo.", ef: "Sí lo son: las partes coloreadas miden lo mismo.", tag: "reconocer fracciones equivalentes", h: "Mira si lo coloreado llega al mismo lugar en las dos barras." }); }),
      G("falta", function (L) { var f = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [1, 5]]), m = pick(L === 0 ? [2] : [2, 3, 4]), D = f[1] * m;
        return FILL("Completa la fracción equivalente.", fr(f[0], f[1]) + " = " + '<span class="mt-fr"><span>[[0]]</span><span>' + D + "</span></span>", [f[0] * m], { tag: "completar fracciones equivalentes", h: "¿Por cuánto se multiplicó " + f[1] + " para llegar a " + D + "? Haz lo mismo arriba.", fe: f[1] + " × " + m + " = " + D + ". Arriba: " + f[0] + " × " + m + "." }); }),
      G("cual", function (L) { var f = pick([[1, 2], [2, 3], [3, 4], [1, 3], [2, 5]]), m = pick([2, 3]);
        return MC("¿Qué fracción es equivalente a " + fr(f[0], f[1]) + "?", fr(f[0] * m, f[1] * m), [[fr(f[0] + m, f[1] + m), "Sumar el mismo número no da una fracción equivalente; hay que multiplicar."], [fr(f[0] * m, f[1]), "Multiplicaste solo arriba."], [fr(f[1], f[0]), "Invertiste la fracción."]], { tag: "reconocer fracciones equivalentes", h: "Multiplica arriba y abajo por el mismo número." }); }),
      G("pinta", function (L) { var f = pick([[1, 2], [3, 4], [1, 4]]), n = 8;
        return SHADE("Colorea los octavos que equivalen a " + fr(f[0], f[1]) + ".", "bar", n, f[0] * n / f[1], { color: SKY, tag: "fracciones equivalentes con dibujos", h: fr(f[0], f[1]) + " = " + fr("?", 8) + ". Multiplica arriba y abajo por " + (n / f[1]) + "." }); }),
      G("match", function () { return MATCH("Relaciona cada fracción con su equivalente.", shuf([[[1, 2], [3, 6]], [[1, 3], [2, 6]], [[3, 4], [6, 8]], [[2, 5], [4, 10]], [[2, 3], [8, 12]]]).slice(0, 3).map(function (p) { return [p[0][0] + "/" + p[0][1], p[1][0] + "/" + p[1][1]]; }), { tag: "reconocer fracciones equivalentes", h: "Busca el número que multiplica arriba y abajo." }); }, [1, 2]),
      G("simp", function () { var f = pick([[1, 2], [2, 3], [3, 4], [1, 3], [2, 5], [3, 5]]), m = pick([2, 3, 4]);
        return FR("Escribe " + fr(f[0] * m, f[1] * m) + " con los números más pequeños posibles.", f[0], f[1], { exact: "simp", tag: "simplificar fracciones", h: "Divide arriba y abajo entre el mismo número hasta que ya no se pueda." }); }, [2])
    ] };

  var t22 = { id: "representacion-fracciones", n: "Representación de fracciones", d: "La misma fracción en dibujos, rectas, conjuntos y palabras.", game: "pizzeria-fracciones",
    learn: [
      { h: "Una fracción, muchas formas", p: fr(2, 5) + " puede ser una barra, un círculo, un grupo de objetos o un punto en la recta.", v: '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:center">' + V.pie(5, 2, LIME, { r: 34 }) + V.set(5, 2, PINK) + "</div>" + V.nl(0, 1, .2, { lab: function (v, i) { return i === 0 ? "0" : i === 5 ? "1" : ""; }, marks: [[.4, "", LIME]] }) },
      { h: "Fracción de una cantidad", p: "Para saber cuánto es " + fr(3, 4) + " de 12 canicas, divide 12 en 4 grupos iguales (3 en cada uno) y toma 3 grupos: 9.", v: V.set(12, 9, SKY, 6) + ex(fr(3, 4) + " de 12 = 12 ÷ 4 × 3 = " + hl("9")), k: "Divide entre el denominador y multiplica por el numerador." }
    ],
    mira: [
      { q: "De 20 alumnos, " + fr(2, 5) + " usan lentes. ¿Cuántos usan lentes?", steps: [["Un quinto", "20 ÷ 5 = 4 alumnos."], ["Dos quintos", "4 × 2 = 8."]], a: "8 alumnos" },
      { q: "¿" + fr(3, 8) + " es más o menos que la mitad?", steps: [["La mitad en octavos", fr(1, 2) + " = " + fr(4, 8) + "."], ["Compara", "3 octavos es menos que 4 octavos."]], a: "Menos que la mitad" }
    ],
    gen: [
      G("dibujo", function (L) { var f = rf(L), opt = function (n, k) { return Math.random() < .5 ? V.pie(n, k, PINK, { r: 30 }) : V.pie(n, k, PINK, { r: 30 }); };
        return MC("¿Qué dibujo representa " + fr(f[0], f[1]) + "?", opt(f[1], f[0]), [[opt(f[1], f[1] - f[0] === f[0] ? Math.max(1, f[0] - 1) : f[1] - f[0]), "Cuenta las partes coloreadas: deben ser " + f[0] + "."], [opt(f[1] + 1, f[0]), "Cuenta el total de partes: deben ser " + f[1] + "."], [opt(f[0] + 1 === f[1] ? f[1] + 2 : f[0] + 1, 1), ""]], { tag: "fracciones en dibujos", h: "Busca el que tenga " + f[1] + " partes iguales con " + f[0] + " coloreadas." }); }),
      G("cantidad", function (L) { var d = pick([2, 3, 4, 5]), n = L === 0 ? 1 : R(1, d - 1), k = R(2, L === 2 ? 15 : 6), tot = d * k, obj = pick(["canicas", "alumnos", "manzanas", "estampas", "libros"]);
        return NUM("De " + tot + " " + obj + ", " + fr(n, d) + " son " + pick(["azules", "nuevos", "rojas", "de animales"]) + ". ¿Cuántos son?", k * n, { v: tot <= 18 ? V.set(tot, 0, SKY, 6) : "", tr: (function () { var o = {}; o[k] = n > 1 ? "Ese es solo " + fr(1, d) + ". Multiplica por " + n + "." : ""; return o; })(), tag: "fracción de una cantidad", h: "Divide " + tot + " entre " + d + " y multiplica por " + n + "." }); }),
      G("pinta", function (L) { var d = pick([3, 4, 6]), n = R(1, d - 1), tot = 12;
        return SHADE("Colorea " + fr(n, d) + " de las pelotas.", "set", tot, tot / d * n, { color: PINK, cols: 6, tag: "fracción de una cantidad", h: "Divide las 12 pelotas en " + d + " grupos iguales de " + (tot / d) + " y colorea " + n + " grupos." }); }),
      G("palabras", function (L) { var f = rf(L);
        return FR("Escribe la fracción: «" + fname(f[0], f[1]) + "».", f[0], f[1], { exact: 1, tr: (function () { var o = {}; o[f[1] + "/" + f[0]] = "Invertiste: el nombre (" + FN[f[1]][1] + ") es el denominador."; return o; })(), tag: "escribir fracciones", h: "El nombre (" + FN[f[1]][1] + ") va abajo; el número de partes, arriba." }); }, [0, 1]),
      G("mitad", function () { var items = [[[1, 4], 0], [[3, 8], 0], [[2, 4], 1], [[3, 6], 1], [[4, 5], 2], [[5, 8], 2], [[2, 3], 2], [[1, 3], 0]];
        return SORT("Clasifica cada fracción. Toca una fracción y luego su grupo.", ["Menos de la mitad", "La mitad", "Más de la mitad"], shuf(items).slice(0, 6).map(function (it) { return [fr(it[0][0], it[0][1]), it[1]]; }), { tag: "comparar con la mitad", h: "La mitad es cuando el numerador es exactamente la mitad del denominador: " + fr(3, 6) + ".", se: "Compara el numerador con la mitad del denominador." }); }, [1, 2]),
      G("recta", function (L) { var d = pick([4, 5, 8]), n = R(1, d - 1), ticks = []; for (var i = 0; i <= d; i++) ticks.push({ v: i / d, show: i === 0 || i === d, l: i === 0 ? "0" : i === d ? "1" : "" });
        return LINE("Toca en la recta dónde está " + fr(n, d) + ".", ticks, n, { al: fr(n, d), tag: "fracciones en la recta", h: "Cuenta " + n + " saltos desde el 0." }); }, [0, 1]),
      G("cuanto", function () { var d = pick([3, 4, 5, 6]), n = R(2, d - 1), k = R(3, 9);
        return NUM(nm() + " leyó " + fr(n, d) + " de un libro de " + (d * k * 10) + " páginas. ¿Cuántas páginas le faltan por leer?", d * k * 10 - k * 10 * n, { unit: "páginas", tag: "problemas con fracciones", h: "Calcula " + fr(n, d) + " de " + (d * k * 10) + " y réstalo del total." }); }, [2])
    ] };

  function sumFr(L) { var d = L === 0 ? pick([4, 5, 6]) : pick([5, 6, 8, 9, 10, 12]), a = R(1, d - 2), b = R(1, L === 2 ? d : d - 1 - a); if (b < 1) b = 1; return [a, b, d]; }
  var t23 = { id: "suma-fracciones", n: "Algoritmo convencional de la suma de fracciones con igual denominador", d: "Sumar partes del mismo tamaño.", game: "pizzeria-fracciones",
    learn: [
      { h: "Mismas partes: se suman los de arriba", p: "Si las fracciones tienen el mismo denominador, las partes son del mismo tamaño. Solo sumas los numeradores y el denominador se queda igual.", v: V.bars([[8, 3, PINK, fr(3, 8)], [8, 2, SKY, fr(2, 8)]]) + ex(fr(3, 8) + " + " + fr(2, 8) + " = " + fr(hl("5"), 8)), k: "El denominador NO se suma: sigue siendo octavos." },
      { h: "El error más común", p: "Si sumas también los denominadores, el resultado sale más pequeño, ¡y eso no puede ser si estás juntando!", v: ex(fr(1, 4) + " + " + fr(1, 4) + " ≠ " + fr(2, 8) + " <em>→</em> " + fr(1, 4) + " + " + fr(1, 4) + " = " + fr(hl("2"), 4)) }
    ],
    mira: [
      { q: "Ana comió " + fr(2, 8) + " de una pizza y Luis " + fr(3, 8) + ". ¿Qué fracción comieron entre los dos?", v: V.pie(8, 5, PINK), steps: [["Mismo denominador", "Los dos son octavos."], ["Suma los numeradores", "2 + 3 = 5."]], a: fr(5, 8) + " de la pizza" },
      { q: "Resuelve " + fr(4, 6) + " + " + fr(5, 6), steps: [["Suma arriba", "4 + 5 = 9."], ["El denominador queda", fr(9, 6) + ": es más que un entero (6/6 = 1)."]], a: fr(9, 6) + " = 1 entero y " + fr(3, 6) }
    ],
    gen: [
      G("suma", function (L) { var s = sumFr(L), t = {}; t[(s[0] + s[1]) + "/" + (2 * s[2])] = "Sumaste también los denominadores. El denominador se queda igual: son " + FN[s[2]][1] + ".";
        return FR("Resuelve: " + fr(s[0], s[2]) + " + " + fr(s[1], s[2]) + " =", s[0] + s[1], s[2], { exact: 1, tr: t, v: L === 0 ? V.bars([[s[2], s[0], PINK, fr(s[0], s[2])], [s[2], s[1], SKY, fr(s[1], s[2])]]) : "", tag: "sumar fracciones", h: "Suma solo los numeradores; el denominador se queda igual." }); }),
      G("prob", function (L) { var s = sumFr(L), c = pick([["{a} comió {x} de una pizza y {b} comió {y}. ¿Qué fracción de la pizza comieron entre los dos?"], ["{a} pintó {x} de una barda en la mañana y {y} en la tarde. ¿Qué fracción pintó en total?"], ["Una jarra tenía {x} de agua y le agregaron {y}. ¿Qué fracción de la jarra tiene ahora?"]])[0];
        return FR(c.replace("{a}", nm()).replace("{b}", nm()).replace("{x}", fr(s[0], s[2])).replace("{y}", fr(s[1], s[2])), s[0] + s[1], s[2], { exact: 1, tr: (function () { var o = {}; o[(s[0] + s[1]) + "/" + (2 * s[2])] = "El denominador no se suma."; return o; })(), tag: "problemas de suma de fracciones", h: "«Entre los dos» y «en total» son suma. Suma los numeradores." }); }),
      G("falta", function (L) { var s = sumFr(L);
        return FILL("¿Qué numerador falta?", fr(s[0], s[2]) + " + " + '<span class="mt-fr"><span>[[0]]</span><span>' + s[2] + "</span></span> = " + fr(s[0] + s[1], s[2]), [s[1]], { tag: "sumar fracciones", h: "¿Cuánto le falta a " + s[0] + " para llegar a " + (s[0] + s[1]) + "?" }); }),
      G("tf", function (L) { var s = sumFr(L), ok = Math.random() < .5;
        return TF(fr(s[0], s[2]) + " + " + fr(s[1], s[2]) + " = " + (ok ? fr(s[0] + s[1], s[2]) : fr(s[0] + s[1], 2 * s[2])), ok, { et: "No se suman los denominadores. Lo correcto es " + fr(s[0] + s[1], s[2]) + ".", tag: "sumar fracciones", h: "El denominador se queda igual." }); }),
      G("visual", function () { var d = pick([4, 6, 8]), a = R(1, d - 3), b = R(1, d - 1 - a);
        return MC("¿Qué suma representa el dibujo?", fr(a, d) + " + " + fr(b, d) + " = " + fr(a + b, d), [[fr(a, d) + " + " + fr(b, d) + " = " + fr(a + b, 2 * d), "El denominador no se suma."], [fr(a, d) + " + " + fr(b, d) + " = " + fr(a * b, d), "Se suman los numeradores, no se multiplican."]], { one: 1, v: V.bars([[d, a, PINK, fr(a, d)], [d, b, SKY, fr(b, d)], [d, a + b, LIME, "?"]]), tag: "sumar fracciones con dibujos", h: "Cuenta todas las partes coloreadas: siguen siendo " + FN[d][1] + "." }); }, [0, 1]),
      G("tres", function () { var d = pick([5, 6, 8, 10]), a = R(1, 3), b = R(1, 3), c = R(1, 4);
        return FR("Resuelve: " + fr(a, d) + " + " + fr(b, d) + " + " + fr(c, d) + " =", a + b + c, d, { exact: 1, tag: "sumar varias fracciones", h: "Suma los tres numeradores; el denominador queda." }); }, [2]),
      G("entero", function () { var d = pick([4, 5, 6, 8]), a = R(1, d - 1);
        return FILL("¿Cuánto le falta a " + fr(a, d) + " para ser un entero?", fr(a, d) + " + " + '<span class="mt-fr"><span>[[0]]</span><span>' + d + "</span></span> = " + fr(d, d) + " = 1", [d - a], { tag: "completar el entero", h: "Un entero son " + d + " " + FN[d][1] + "." }); }, [1, 2])
    ] };

  var t24 = { id: "resta-fracciones", n: "Algoritmo convencional de la resta de fracciones con igual denominador", d: "Quitar partes del mismo tamaño.", game: "pizzeria-fracciones",
    learn: [
      { h: "Se restan los de arriba", p: "Con el mismo denominador, solo restas los numeradores. El denominador se queda igual.", v: V.bar(6, 5, PINK, { lab: "Había " + "5/6 y se comieron 2/6" }) + ex(fr(5, 6) + " − " + fr(2, 6) + " = " + fr(hl("3"), 6)), k: "El denominador no se resta." },
      { h: "Desde el entero", p: "Un entero completo es " + fr(4, 4) + ", " + fr(6, 6) + " o " + fr(8, 8) + ". Para restar a un entero, escríbelo con el mismo denominador.", v: ex("1 − " + fr(3, 8) + " = " + fr(8, 8) + " − " + fr(3, 8) + " = " + fr(hl("5"), 8)) }
    ],
    mira: [
      { q: "Había " + fr(7, 8) + " de pastel y se comieron " + fr(3, 8) + ". ¿Cuánto queda?", steps: [["Mismo denominador", "Octavos."], ["Resta arriba", "7 − 3 = 4."]], a: fr(4, 8) + " del pastel" },
      { q: "Resuelve 1 − " + fr(2, 5), steps: [["Escribe el entero en quintos", "1 = " + fr(5, 5) + "."], ["Resta", "5 − 2 = 3."]], a: fr(3, 5) }
    ],
    gen: [
      G("resta", function (L) { var d = L === 0 ? pick([4, 5, 6]) : pick([6, 8, 9, 10, 12]), a = R(3, d - 1), b = R(1, a - 1), t = {}; t[(a - b) + "/0"] = "El denominador no se resta."; t[(a + b) + "/" + d] = "Sumaste. La pregunta es una resta.";
        return FR("Resuelve: " + fr(a, d) + " − " + fr(b, d) + " =", a - b, d, { exact: 1, tr: t, v: L === 0 ? V.bar(d, a, PINK) : "", tag: "restar fracciones", h: "Resta solo los numeradores; el denominador se queda igual." }); }),
      G("entero", function (L) { var d = pick([3, 4, 5, 6, 8]), b = R(1, d - 1), t = {}; t[(1 - b) + "/" + d] = "Escribe el 1 como " + d + "/" + d + " antes de restar.";
        return FR("Resuelve: 1 − " + fr(b, d) + " =", d - b, d, { exact: 1, tr: t, tag: "restar a un entero", h: "1 = " + fr(d, d) + ". Después resta los numeradores." }); }),
      G("prob", function (L) { var d = pick([6, 8, 10]), a = R(4, d), b = R(1, a - 1), c = pick(["Había {x} de un pastel y se comieron {y}. ¿Qué fracción del pastel queda?", "Un tinaco tenía {x} de agua y se usaron {y}. ¿Qué fracción del tinaco queda con agua?", "{n} ya leyó {y} de un libro y su hermano {x}. ¿Qué fracción más leyó su hermano?"]);
        return FR(c.replace("{x}", fr(a, d)).replace("{y}", fr(b, d)).replace("{n}", nm()), a - b, d, { exact: 1, tag: "problemas de resta de fracciones", h: "«Queda» y «cuánto más» son resta. Resta los numeradores." }); }),
      G("falta", function (L) { var d = pick([5, 6, 8]), a = R(4, d - 1), b = R(1, a - 1);
        return FILL("¿Qué numerador falta?", fr(a, d) + " − " + '<span class="mt-fr"><span>[[0]]</span><span>' + d + "</span></span> = " + fr(a - b, d), [b], { tag: "restar fracciones", h: "¿Cuánto le quitaste a " + a + " para que queden " + (a - b) + "?" }); }, [1, 2]),
      G("tf", function () { var d = pick([5, 7, 9]), a = R(3, d - 1), b = R(1, a - 1), ok = Math.random() < .5;
        return TF(fr(a, d) + " − " + fr(b, d) + " = " + (ok ? fr(a - b, d) : fr(a - b, 0)), ok, { et: "El denominador se queda igual: " + fr(a - b, d) + ".", tag: "restar fracciones", h: "No se restan los denominadores." }); }, [0, 1]),
      G("pinta", function () { var d = pick([6, 8]), a = R(4, d - 1), b = R(1, a - 2);
        return SHADE("Colorea el resultado de " + fr(a, d) + " − " + fr(b, d) + ".", "bar", d, a - b, { color: LIME, tag: "restar fracciones con dibujos", h: "Resta los numeradores: " + a + " − " + b + "." }); }, [0, 1]),
      G("dos", function () { var d = pick([8, 10, 12]), a = R(2, 4), b = R(2, 4);
        return FR("De una pizza, " + nm() + " comió " + fr(a, d) + " y su hermana " + fr(b, d) + ". ¿Qué fracción de la pizza sobró?", d - a - b, d, { exact: 1, tag: "problemas de dos pasos", h: "Primero suma lo que comieron; después réstalo del entero " + fr(d, d) + "." }); }, [2])
    ] };

  /* =====================================================================
     UNIDAD 5 · FIGURAS Y CUERPOS GEOMÉTRICOS
     ===================================================================== */
  var t25 = { id: "composicion-figuras", n: "Composición y descomposición de figuras geométricas", d: "Armar y desarmar figuras con otras más pequeñas.", game: "mision-matematica",
    learn: [
      { h: "Figuras hechas de figuras", p: "Muchas figuras se pueden armar juntando otras. Un hexágono se forma con 6 triángulos iguales.", v: V.comp("hex6"), k: "Componer = juntar. Descomponer = separar en piezas." },
      { h: "Dos triángulos, un rectángulo", p: "Si cortas un rectángulo por la diagonal, obtienes dos triángulos iguales. Si los juntas, vuelve a ser rectángulo.", v: V.comp("rect2") },
      { h: "Busca las piezas", p: "Para descomponer una figura, busca líneas que la dividan en figuras que conozcas: triángulos, cuadrados, rectángulos.", v: V.comp("Lshape"), k: "Esta figura en forma de L son dos rectángulos." }
    ],
    mira: [
      { q: "¿Cuántos triángulos forman el trapecio?", v: V.comp("trap3"), steps: [["Cuenta las piezas", "Hay un triángulo rosa, uno amarillo y uno azul."]], a: "3 triángulos" },
      { q: "¿Cuántos triángulos hay en total en el cuadrado (pequeños y grandes)?", v: V.comp("sq4"), steps: [["Pequeños", "Hay 4 triángulos de colores."], ["Grandes", "Juntando dos de al lado se forma un triángulo grande (la mitad del cuadrado): hay 4 así."], ["Total", "4 + 4 = 8."]], a: "8 triángulos" }
    ],
    gen: [
      G("cuenta", function (L) { var c = pick([["hex6", 6, "triángulos", "el hexágono"], ["sq4", 4, "triángulos", "el cuadrado"], ["rect2", 2, "triángulos", "el rectángulo"], ["trap3", 3, "triángulos", "el trapecio"], ["hex3", 3, "rombos", "el hexágono"]]);
        return NUM("¿Cuántos " + c[2] + " forman " + c[3] + "?", c[1], { unit: c[2], v: V.comp(c[0]), tag: "descomponer figuras", h: "Cuenta cada pieza de color." }); }),
      G("forma", function () { var c = pick([["rect2", "Un rectángulo", [["Un cuadrado", "Los lados no son todos iguales."], ["Un triángulo grande", "Al juntarlos se forma una figura de 4 lados."]]], ["hex6", "Un hexágono", [["Un pentágono", "Cuenta los lados de la figura: son 6."], ["Un octágono", "Cuenta los lados de la figura: son 6."]]], ["trap3", "Un trapecio", [["Un rectángulo", "Los lados de los costados están inclinados."], ["Un rombo", "Solo tiene un par de lados paralelos."]]]]);
        return MC("¿Qué figura se forma al juntar estas piezas?", c[1], c[2], { v: V.comp(c[0]), tag: "componer figuras", h: "Ignora las líneas de adentro y mira solo el contorno." }); }),
      G("piezas", function () { var c = pick([["house", "Dos rectángulos y un triángulo", [["Tres triángulos", "La pared y la puerta tienen 4 lados."], ["Un cuadrado y un círculo", "No hay círculos en la casa."]]], ["rocket", "Un rectángulo, tres triángulos y un círculo", [["Dos rectángulos y un triángulo", "Cuenta la punta y las dos aletas: son triángulos."], ["Un rectángulo y dos círculos", "Solo hay una ventanita redonda."]]]]);
        return MC("¿Con qué figuras está hecho el dibujo?", c[1], c[2], { one: 1, v: V.comp(c[0]), tag: "descomponer figuras", h: "Cuenta cada figura por separado." }); }),
      G("total", function () { return NUM("¿Cuántos triángulos hay en <b>total</b> en el cuadrado? Cuenta pequeños y grandes.", 8, { v: V.comp("sq4"), tr: { 4: "Esos son los pequeños. Juntando dos vecinos se forman triángulos grandes." }, tag: "contar figuras escondidas", h: "Cuenta los 4 pequeños y luego los que se forman juntando dos de al lado." }); }, [2]),
      G("cuadros", function (L) { var w = R(2, 5), h = R(2, 4), cells = []; for (var x = 0; x < w; x++) for (var y = 0; y < h; y++) cells.push([x, y]); if (L > 0) { var ex = R(1, w - 1); for (var k = 0; k < ex; k++) cells.push([w + k, h - 1]); }
        return NUM("¿Cuántos cuadritos forman la figura?", cells.length, { v: V.gfig(cells), tag: "componer con cuadrados", h: "Cuenta fila por fila." }); }),
      G("lshape", function () { var a = R(3, 6), b = R(2, 4), c = R(2, 5), d = R(2, 3);
        return MC("La figura se puede separar en dos rectángulos con la línea punteada. ¿Qué forma tiene la figura completa?", "Forma de L", [["Un rectángulo", "Tiene una esquina que entra: no es un rectángulo."], ["Un triángulo", "Tiene 6 lados."]], { v: V.comp("Lshape"), tag: "descomponer figuras", h: "Mira el contorno: tiene 6 lados." }); }, [0, 1]),
      G("tf", function () { var c = pick([["Con dos triángulos iguales se puede formar un rectángulo.", true], ["Un hexágono se puede formar con 6 triángulos iguales.", true], ["Con dos cuadrados iguales se forma un triángulo.", false, "Dos cuadrados juntos forman un rectángulo."], ["Un cuadrado se puede partir en 2 triángulos iguales.", true]]);
        return TF(c[0], c[1], { et: c[2] || "", tag: "componer figuras", h: "Imagina las piezas y júntalas en tu cuaderno." }); })
    ] };

  var SOL = { cubo: ["Cubo", 6, 8, 12, 0], prisma: ["Prisma rectangular", 6, 8, 12, 0], prismaT: ["Prisma triangular", 5, 6, 9, 0], piramide: ["Pirámide cuadrangular", 5, 5, 8, 0], piramideT: ["Pirámide triangular", 4, 4, 6, 0], cilindro: ["Cilindro", 0, 0, 0, 1], cono: ["Cono", 0, 1, 0, 1], esfera: ["Esfera", 0, 0, 0, 1] };
  var t26 = { id: "cuerpos-geometricos", n: "Clasificación de cuerpos geométricos", d: "Poliedros y cuerpos redondos: caras, vértices y aristas.", game: "mision-matematica",
    learn: [
      { h: "Cuerpos con volumen", p: "Los cuerpos geométricos ocupan lugar: tienen largo, ancho y alto. Se dividen en <b>poliedros</b> (todas sus caras son planas) y <b>cuerpos redondos</b> (tienen alguna superficie curva).", v: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">' + V.solid("prisma") + V.solid("cilindro") + "</div>", k: "Si rueda, es cuerpo redondo." },
      { h: "Caras, vértices y aristas", p: "Las <b>caras</b> son las superficies planas. Las <b>aristas</b> son las orillas donde se juntan dos caras. Los <b>vértices</b> son las esquinas.", v: V.solid("cubo") + ex("Cubo: 6 caras, 12 aristas, 8 vértices") },
      { h: "Prismas y pirámides", p: "Un <b>prisma</b> tiene dos bases iguales y sus lados son rectángulos. Una <b>pirámide</b> tiene una base y sus lados son triángulos que se juntan en un punto.", v: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">' + V.solid("prismaT") + V.solid("piramide") + "</div>", k: "La base da el apellido: prisma triangular, pirámide cuadrangular." }
    ],
    mira: [
      { q: "¿Cuántas caras, vértices y aristas tiene una pirámide cuadrangular?", v: V.solid("piramide"), steps: [["Caras", "1 base cuadrada + 4 triángulos = 5 caras."], ["Vértices", "4 de la base + 1 de la punta = 5."], ["Aristas", "4 de la base + 4 que suben a la punta = 8."]], a: "5 caras, 5 vértices y 8 aristas" },
      { q: "¿Una lata de refresco es poliedro o cuerpo redondo?", steps: [["¿Tiene superficie curva?", "Sí, su costado es curvo: puede rodar."], ["Nombre", "Tiene forma de cilindro."]], a: "Cuerpo redondo (cilindro)" }
    ],
    gen: [
      G("nombre", function (L) { var k = pick(Object.keys(SOL)), others = shuf(Object.keys(SOL).filter(function (x) { return x !== k; })).slice(0, 3);
        return MC("¿Cómo se llama este cuerpo geométrico?", SOL[k][0], others.map(function (o) { return [SOL[o][0], ""]; }), { v: V.solid(k), tag: "nombres de los cuerpos", h: "¿Tiene superficies curvas? ¿Su base es un triángulo o un rectángulo? ¿Termina en punta?" }); }),
      G("cvra", function (L) { var k = pick(["cubo", "prisma", "prismaT", "piramide", "piramideT"]), w = R(0, 2), lab = ["caras", "vértices", "aristas"][w], t = {};
        return NUM("¿Cuántas <b>" + lab + "</b> tiene " + (/ámide/.test(SOL[k][0]) ? "la " : "el ") + SOL[k][0].toLowerCase() + "?", SOL[k][1 + w], { v: V.solid(k), unit: lab, tag: "caras, vértices y aristas", h: "Caras: superficies planas. Vértices: esquinas. Aristas: orillas. Cuenta también las que están atrás (líneas punteadas)." }); }),
      G("sort", function () { var ks = shuf(Object.keys(SOL)).slice(0, 6);
        return SORT("Clasifica cada cuerpo. Toca uno y luego su grupo.", ["Poliedros", "Cuerpos redondos"], ks.map(function (k) { return [SOL[k][0], SOL[k][4]]; }), { tag: "poliedros y cuerpos redondos", h: "Si tiene alguna parte curva y puede rodar, es cuerpo redondo.", se: "Los poliedros solo tienen caras planas." }); }),
      G("desc", function () { var c = pick([["Tiene 5 caras: 2 triángulos y 3 rectángulos.", "Prisma triangular"], ["Tiene 6 caras cuadradas iguales.", "Cubo"], ["Tiene una base cuadrada y 4 caras triangulares.", "Pirámide cuadrangular"], ["Tiene dos bases circulares y una superficie curva.", "Cilindro"], ["Tiene una base circular y termina en punta.", "Cono"]]);
        return MC("¿Qué cuerpo es? <i>" + c[0] + "</i>", c[1], shuf(Object.keys(SOL).map(function (k) { return SOL[k][0]; }).filter(function (n) { return n !== c[1]; })).slice(0, 3).map(function (n) { return [n, ""]; }), { tag: "describir cuerpos", h: "Imagina cada cuerpo y cuenta sus caras." }); }, [1, 2]),
      G("objeto", function () { return MATCH("Relaciona cada objeto con su forma.", shuf([["Dado", "Cubo"], ["Lata", "Cilindro"], ["Balón", "Esfera"], ["Cono de helado", "Cono"], ["Caja de cereal", "Prisma rectangular"]]).slice(0, 4), { tag: "cuerpos en objetos", h: "Piensa en la forma de cada objeto." }); }),
      G("tf", function () { var c = pick([["La esfera tiene caras planas.", false, "La esfera solo tiene superficie curva."], ["El cono tiene un vértice.", true], ["El cubo tiene 8 vértices.", true], ["Una pirámide tiene dos bases.", false, "La pirámide tiene una base; el prisma tiene dos."], ["Todos los poliedros pueden rodar.", false, "Los poliedros tienen solo caras planas: no ruedan."]]);
        return TF(c[0], c[1], { et: c[2] || "", tag: "propiedades de los cuerpos", h: "Recuerda cuáles cuerpos tienen superficies curvas." }); }),
      G("comp", function () { return MC("¿Qué cuerpo tiene <b>más aristas</b>?", "Prisma rectangular", [["Pirámide cuadrangular", "La pirámide tiene 8 aristas; el prisma, 12."], ["Prisma triangular", "El prisma triangular tiene 9 aristas; el rectangular, 12."]], { tag: "caras, vértices y aristas", h: "Cuenta las aristas de cada uno." }); }, [2])
    ] };

  /* =====================================================================
     UNIDAD 6 · LONGITUDES Y ÁREAS
     ===================================================================== */
  function lFig() { var w = R(3, 6), h = R(3, 4), cw = R(1, w - 1), ch = R(1, h - 1), cells = []; for (var x = 0; x < w; x++) for (var y = 0; y < h; y++) if (!(x >= w - cw && y < ch)) cells.push([x, y]); return { cells: cells, P: 2 * (w + h), A: cells.length }; }
  var t27 = { id: "perimetro", n: "Perímetro", d: "La medida del contorno de una figura.", game: "mision-matematica",
    learn: [
      { h: "El contorno", p: "El <b>perímetro</b> es lo que mide el borde de una figura. Se calcula sumando todos sus lados.", v: V.rect(8, 5, "8 cm", "5 cm") + ex("8 + 5 + 8 + 5 = " + hl("26 cm")), k: "Perímetro = suma de todos los lados." },
      { h: "Atajos", p: "En un rectángulo, los lados opuestos miden lo mismo: (largo + ancho) × 2. En un cuadrado o figura regular, lado × número de lados.", v: ex("cuadrado de 7 cm <em>→</em> 7 × 4 = " + hl("28 cm")) },
      { h: "En cuadrícula", p: "Si cada cuadrito mide 1 cm, cuenta los lados de los cuadritos que están en el borde.", v: V.gfig([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2]]), k: "Cuenta las rayitas del borde, no los cuadritos." }
    ],
    mira: [
      { q: "¿Cuál es el perímetro de un rectángulo de 12 cm de largo y 7 cm de ancho?", steps: [["Suma largo y ancho", "12 + 7 = 19."], ["Por dos", "Hay dos largos y dos anchos: 19 × 2 = 38."]], a: "38 cm" },
      { q: "El perímetro de un rectángulo es 30 cm y el largo mide 9 cm. ¿Cuánto mide el ancho?", steps: [["Los dos largos", "9 + 9 = 18 cm."], ["Lo que queda", "30 − 18 = 12 cm para los dos anchos."], ["Un ancho", "12 ÷ 2 = 6."]], a: "6 cm" }
    ],
    gen: [
      G("rect", function (L) { var w = R(L === 0 ? 3 : 8, L === 0 ? 9 : 35), h = R(2, w - 1), t = {}; t[w * h] = "Calculaste el área (largo × ancho). El perímetro es la suma de los lados."; t[w + h] = "Sumaste solo dos lados; el rectángulo tiene cuatro.";
        return NUM("¿Cuál es el perímetro del rectángulo?", 2 * (w + h), { unit: "cm", v: V.rect(w, h, w + " cm", h + " cm"), tr: t, tag: "perímetro del rectángulo", h: "Suma los cuatro lados: largo + ancho + largo + ancho." }); }),
      G("grid", function (L) { var f = lFig(), t = {}; t[f.A] = "Contaste cuadritos (eso es el área). Cuenta las rayitas del borde.";
        return NUM("Cada cuadrito mide 1 cm por lado. ¿Cuál es el perímetro de la figura?", f.P, { unit: "cm", v: V.gfig(f.cells), tr: t, tag: "perímetro en cuadrícula", h: "Recorre el borde con el dedo y cuenta cada rayita." }); }),
      G("regular", function (L) { var P = pick([[3, "triángulo equilátero"], [4, "cuadrado"], [5, "pentágono regular"], [6, "hexágono regular"], [8, "octágono regular"]]), s = R(3, L === 0 ? 9 : 25), t = {}; t[s * s] = "Multiplicaste el lado por sí mismo. Multiplica por el número de lados (" + P[0] + ")."; t[s + P[0]] = "Sumaste el número de lados; hay que multiplicar.";
        return NUM("Un " + P[1] + " tiene lados de " + s + " cm. ¿Cuál es su perímetro?", s * P[0], { unit: "cm", tr: t, tag: "perímetro de figuras regulares", h: "Todos sus lados miden lo mismo: lado × número de lados." }); }),
      G("tri", function () { var a = R(5, 15), b = R(5, 15), c = R(Math.abs(a - b) + 2, a + b - 2);
        return NUM("¿Cuál es el perímetro del triángulo?", a + b + c, { unit: "cm", v: V.poly([[40, 170], [260, 170], [150, 30]], [a + " cm", b + " cm", c + " cm"], PINK), tag: "perímetro de polígonos", h: "Suma los tres lados." }); }, [0, 1]),
      G("falta", function () { var w = R(6, 20), h = R(3, w - 1), P = 2 * (w + h), t = {}; t[P - w] = "Restaste solo un largo; el rectángulo tiene dos."; t[P - 2 * w] = "Esos son los dos anchos juntos. Divide entre 2.";
        return NUM("El perímetro de un rectángulo es " + P + " cm y el largo mide " + w + " cm. ¿Cuánto mide el ancho?", h, { unit: "cm", tr: t, tag: "lado desconocido", h: "Quita los dos largos al perímetro y reparte lo que queda entre los dos anchos." }); }, [2]),
      G("lado", function () { var s = R(4, 25);
        return NUM("El perímetro de un cuadrado es " + (4 * s) + " cm. ¿Cuánto mide cada lado?", s, { unit: "cm", tr: (function () { var o = {}; o[2 * s] = "El cuadrado tiene 4 lados, no 2."; return o; })(), tag: "lado desconocido", h: "Reparte el perímetro entre los 4 lados." }); }, [1, 2]),
      G("pasos", function (L) { var w = R(4, 30), h = R(2, w - 1);
        return FILL("Calcula el perímetro de un rectángulo de " + w + " cm de largo y " + h + " cm de ancho.", "P = (" + w + " + " + h + ") × 2 = [[0]] × 2 = [[1]] cm", [w + h, 2 * (w + h)], { tag: "perímetro del rectángulo", h: "Primero suma largo + ancho; después multiplica por 2 porque hay dos de cada uno." }); }),
      G("compara", function (L) { var a = R(3, 9), b = R(2, 8), c = R(3, 9), d = R(2, 8); while (a + b === c + d) d++; var pa = 2 * (a + b), pb = 2 * (c + d), big = pa > pb ? "A" : "B";
        return MC("El rectángulo A mide " + a + " cm × " + b + " cm y el B mide " + c + " cm × " + d + " cm. ¿Cuál tiene <b>mayor perímetro</b>?", "Rectángulo " + big, [["Rectángulo " + (big === "A" ? "B" : "A"), "Calcula los dos perímetros: A = " + pa + " cm y B = " + pb + " cm."], ["Tienen el mismo perímetro", "Calcula (largo + ancho) × 2 de cada uno."]], { tag: "comparar perímetros", h: "Calcula (largo + ancho) × 2 de cada rectángulo." }); }, [1, 2]),
      G("cerca", function (L) { var w = R(10, 40), h = R(6, 25);
        return NUM("Quieren poner malla alrededor de un jardín rectangular de " + w + " m de largo y " + h + " m de ancho. ¿Cuántos metros de malla necesitan?", 2 * (w + h), { unit: "m", tr: (function () { var o = {}; o[w * h] = "Calculaste el área. La malla va alrededor: es el perímetro."; return o; })(), tag: "problemas de perímetro", h: "«Alrededor» = perímetro." }); }, [1, 2])
    ] };

  var t28 = { id: "formulas-area", n: "Fórmulas del área del rectángulo, cuadrado y triángulo", d: "Calcular cuánto espacio ocupa una figura.", game: "mision-matematica",
    learn: [
      { h: "El área es lo de adentro", p: "El <b>área</b> es cuántos cuadritos caben dentro de una figura. Se mide en cm² (centímetros cuadrados) o m².", v: V.rect(6, 4, "6 cm", "4 cm", { grid: 1, c: LIME }) + ex("6 × 4 = " + hl("24 cm²")), k: "Perímetro: el borde. Área: lo de adentro." },
      { h: "Rectángulo y cuadrado", p: "Rectángulo: largo × ancho. Cuadrado: lado × lado.", v: ex("A = b × h <em>·</em> A = l × l") },
      { h: "Triángulo: la mitad", p: "Un triángulo es la mitad de un rectángulo. Por eso su área es base × altura ÷ 2.", v: V.tri(8, 5, "base 8 cm", "altura 5 cm") + ex("8 × 5 ÷ 2 = " + hl("20 cm²")), k: "No olvides dividir entre 2." }
    ],
    mira: [
      { q: "¿Cuál es el área de un cuadrado de 9 cm de lado?", steps: [["Fórmula", "lado × lado."], ["Multiplica", "9 × 9 = 81."]], a: "81 cm²" },
      { q: "¿Cuál es el área de un triángulo de base 10 cm y altura 7 cm?", steps: [["Base × altura", "10 × 7 = 70."], ["Entre 2", "70 ÷ 2 = 35."]], a: "35 cm²" }
    ],
    gen: [
      G("rect", function (L) { var w = R(L === 0 ? 2 : 6, L === 0 ? 8 : 25), h = R(2, L === 0 ? 6 : 15), t = {}; t[2 * (w + h)] = "Calculaste el perímetro. El área es largo × ancho."; t[w + h] = "Sumaste. El área se calcula multiplicando.";
        return NUM("¿Cuál es el área del rectángulo?", w * h, { unit: "cm²", v: V.rect(w, h, w + " cm", h + " cm", { grid: L === 0, c: LIME }), tr: t, tag: "área del rectángulo", h: "Área del rectángulo = largo × ancho." }); }),
      G("cuad", function (L) { var s = R(L === 0 ? 2 : 5, L === 0 ? 9 : 20), t = {}; t[4 * s] = "Calculaste el perímetro (lado × 4). El área es lado × lado."; t[2 * s] = "Es lado × lado, no lado × 2.";
        return NUM("¿Cuál es el área de un cuadrado de " + s + " cm de lado?", s * s, { unit: "cm²", v: V.rect(s, s, s + " cm", s + " cm", { c: SKY, grid: L === 0 }), tr: t, tag: "área del cuadrado", h: "Área del cuadrado = lado × lado." }); }),
      G("tri", function (L) { var b = R(3, 12) * 2, h = R(3, 15), t = {}; t[b * h] = "Te faltó dividir entre 2: el triángulo es la mitad del rectángulo.";
        return NUM("¿Cuál es el área del triángulo?", b * h / 2, { unit: "cm²", v: V.tri(b, h, "base " + b + " cm", "altura " + h + " cm"), tr: t, tag: "área del triángulo", h: "Área del triángulo = base × altura ÷ 2." }); }, [1, 2]),
      G("formula", function () { var c = pick([["triángulo", "base × altura ÷ 2", [["base × altura", "Esa es la del rectángulo; al triángulo le falta dividir entre 2."], ["lado × 3", "Eso se parece al perímetro."]]], ["cuadrado", "lado × lado", [["lado × 4", "Esa es la fórmula del perímetro."], ["lado + lado", "El área se calcula multiplicando."]]], ["rectángulo", "largo × ancho", [["(largo + ancho) × 2", "Esa es la del perímetro."], ["largo × ancho ÷ 2", "Esa es la del triángulo."]]]]);
        return MC("¿Cuál es la fórmula del área del <b>" + c[0] + "</b>?", c[1], c[2], { tag: "fórmulas de área", h: "Rectángulo: largo × ancho. Cuadrado: lado × lado. Triángulo: base × altura ÷ 2." }); }),
      G("match", function () { return MATCH("Relaciona cada figura con la fórmula de su área.", [["Rectángulo", "largo × ancho"], ["Cuadrado", "lado × lado"], ["Triángulo", "base × altura ÷ 2"]], { tag: "fórmulas de área", h: "El triángulo es la mitad de un rectángulo." }); }, [0, 1]),
      G("cuenta", function () { var w = R(3, 7), h = R(2, 5);
        return NUM("Cada cuadrito mide 1 cm². ¿Cuál es el área?", w * h, { unit: "cm²", v: V.rect(w, h, "", "", { grid: 1, c: LIME }), tr: (function () { var o = {}; o[2 * (w + h)] = "Contaste el borde. El área son los cuadritos de adentro."; return o; })(), tag: "área en cuadrícula", h: "Cuenta los cuadritos o multiplica filas × columnas." }); }, [0]),
      G("falta", function () { var w = R(4, 15), h = R(3, 12), A = w * h;
        return NUM("Un rectángulo tiene " + A + " cm² de área y " + w + " cm de largo. ¿Cuánto mide de ancho?", h, { unit: "cm", tag: "lado desconocido", h: "Área = largo × ancho. Divide el área entre el largo." }); }, [2])
    ] };

  var t29 = { id: "problemas-superficies", n: "Problemas que impliquen la medición de superficies con el centímetro y el metro cuadrado", d: "Elegir cm² o m² y resolver problemas reales.", game: "mision-matematica",
    learn: [
      { h: "cm² y m²", p: "Un <b>centímetro cuadrado</b> (cm²) es un cuadrito de 1 cm por lado: como una uña. Un <b>metro cuadrado</b> (m²) es un cuadrado de 1 m por lado: cabe un niño acostado encogido.", v: ex("estampa, cuaderno <em>→</em> cm² &nbsp;&nbsp; salón, cancha <em>→</em> m²"), k: "Cosas chicas en cm²; espacios grandes en m²." },
      { h: "Cómo resolver", p: "Lee el problema, dibuja la figura, escribe sus medidas y usa la fórmula del área.", v: V.rect(8, 6, "8 m", "6 m", { c: MINT }) + ex("salón: 8 × 6 = " + hl("48 m²")) }
    ],
    mira: [
      { q: "Un salón mide 8 m de largo y 6 m de ancho. Cada m² de piso cuesta $250. ¿Cuánto cuesta el piso?", steps: [["Área", "8 × 6 = 48 m²."], ["Costo", "48 × 250 = 12,000."]], a: "$12,000" },
      { q: "¿Cuántas losetas de 1 m² caben en un patio de 5 m × 4 m?", steps: [["Área del patio", "5 × 4 = 20 m²."], ["Cada loseta mide 1 m²", "Caben 20."]], a: "20 losetas" }
    ],
    gen: [
      G("unidad", function () { var c = pick([["la superficie de una estampa", "cm²"], ["el piso de un salón de clases", "m²"], ["una hoja de cuaderno", "cm²"], ["una cancha de futbol", "m²"], ["la pantalla de un celular", "cm²"], ["el terreno de una casa", "m²"], ["un billete", "cm²"], ["el patio de la escuela", "m²"]]);
        return MC("¿Qué unidad usarías para medir el área de <b>" + c[0] + "</b>?", c[1], [[c[1] === "cm²" ? "m²" : "cm²", c[1] === "cm²" ? "Es algo pequeño: se mide en centímetros cuadrados." : "Es un espacio grande: se mide en metros cuadrados."], [c[1] === "cm²" ? "m" : "cm", "Para área se usan unidades cuadradas."]], { tag: "elegir cm² o m²", h: "Cosas pequeñas → cm². Espacios grandes → m²." }); }),
      G("sort", function () { var it = shuf([["Estampa", 0], ["Libro", 0], ["Recámara", 1], ["Alberca", 1], ["Credencial", 0], ["Estacionamiento", 1], ["Servilleta", 0], ["Jardín", 1]]).slice(0, 6);
        return SORT("¿Con qué unidad medirías su área? Toca uno y luego su grupo.", ["cm²", "m²"], it, { tag: "elegir cm² o m²", h: "Lo que cabe en tu mano: cm². Donde caminas: m²." }); }, [0, 1]),
      G("salon", function (L) { var w = R(4, 15), h = R(3, 12), c = pick(["Un salón", "Un jardín", "Una recámara", "Un patio"]), t = {}; t[2 * (w + h)] = "Calculaste el perímetro. Para el piso se necesita el área.";
        return NUM(c + " mide " + w + " m de largo y " + h + " m de ancho. ¿Cuál es su área?", w * h, { unit: "m²", tr: t, tag: "área en m²", h: "Largo × ancho." }); }),
      G("estampa", function (L) { var w = R(4, 12), h = R(3, 9);
        return NUM("Una estampa rectangular mide " + w + " cm por " + h + " cm. ¿Cuántos cm² de papel ocupa?", w * h, { unit: "cm²", tag: "área en cm²", h: "Largo × ancho." }); }, [0, 1]),
      G("figura", function () { var f = lFig();
        return NUM("Cada cuadrito es de 1 cm². ¿Cuál es el área de la figura?", f.A, { unit: "cm²", v: V.gfig(f.cells, { c: MINT }), tr: (function () { var o = {}; o[f.P] = "Contaste el borde (perímetro). Cuenta los cuadritos."; return o; })(), tag: "área de figuras irregulares", h: "Cuenta los cuadritos coloreados, o pártela en rectángulos." }); }),
      G("comp", function () { var a = [R(5, 12), R(4, 10)], b = [R(5, 12), R(4, 10)]; while (a[0] * a[1] === b[0] * b[1]) b[0]++;
        var big = a[0] * a[1] > b[0] * b[1] ? "A" : "B";
        return MC("¿Qué terreno tiene mayor área? A mide " + a[0] + " m × " + a[1] + " m y B mide " + b[0] + " m × " + b[1] + " m.", "Terreno " + big, [["Terreno " + (big === "A" ? "B" : "A"), "Calcula el área de cada uno: A = " + a[0] * a[1] + " m², B = " + b[0] * b[1] + " m²."], ["Tienen la misma área", "Multiplica las medidas de cada uno."]], { tag: "comparar áreas", h: "Calcula largo × ancho de cada terreno." }); }, [1, 2]),
      G("costo", function () { var w = R(4, 10), h = R(3, 8), p = pick([50, 80, 120, 150, 200, 250]);
        return NUM("Una pared mide " + w + " m de largo y " + h + " m de alto. Pintar cada m² cuesta $" + p + ". ¿Cuánto cuesta pintar la pared?", w * h * p, { pre: "$", tr: (function () { var o = {}; o[w * h] = "Ese es el área. Ahora multiplica por el precio de cada m²."; return o; })(), tag: "problemas de área y costo", h: "Primero el área; después multiplica por $" + p + "." }); }, [2]),
      G("losetas", function () { var w = R(3, 9), h = R(2, 7);
        return NUM("¿Cuántas losetas cuadradas de 1 m² caben en un patio de " + w + " m × " + h + " m?", w * h, { unit: "losetas", tag: "área en m²", h: "Cada loseta ocupa 1 m²: calcula el área del patio." }); }, [1, 2])
    ] };

  /* =====================================================================
     UNIDAD 7 · TIEMPO
     ===================================================================== */
  var MESES = [["enero", 31], ["febrero", 28], ["marzo", 31], ["abril", 30], ["mayo", 31], ["junio", 30], ["julio", 31], ["agosto", 31], ["septiembre", 30], ["octubre", 31], ["noviembre", 30], ["diciembre", 31]];
  var DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
  function hhmm(h, m) { return h + ":" + String(m).padStart(2, "0"); }
  var t30 = { id: "reloj-calendario", n: "Uso del reloj y del calendario", d: "Leer la hora, calcular duraciones y usar el calendario.", game: "que-hora-es",
    learn: [
      { h: "Las manecillas", p: "La manecilla <b>corta</b> marca la hora. La <b>larga</b> marca los minutos: cada número vale 5 minutos.", v: V.clock(3, 40) + ex("3:40 <em>→</em> la larga en el 8: 8 × 5 = 40 min"), k: "1 hora = 60 minutos." },
      { h: "Calcular cuánto dura", p: "Para saber a qué hora termina algo, suma primero las horas y después los minutos. Si los minutos pasan de 60, se forma una hora más.", v: ex("4:15 + 1 h 30 min = " + hl("5:45")), k: "60 minutos = 1 hora; 30 minutos = media hora." },
      { h: "El calendario", p: "Un año tiene 12 meses, 52 semanas y 365 días. Una semana tiene 7 días. Los meses tienen 30 o 31 días, menos febrero, que tiene 28 (o 29).", v: V.cal("Noviembre", 6, 30, [19]), k: "Para avanzar una semana, suma 7 al día." }
    ],
    mira: [
      { q: "Una película empieza a las 4:15 y dura 1 hora 50 minutos. ¿A qué hora termina?", steps: [["Suma la hora", "4:15 + 1 h = 5:15."], ["Suma los minutos", "15 + 50 = 65 minutos."], ["Convierte", "65 min = 1 h 5 min → 6:05."]], a: "6:05" },
      { q: "Hoy es martes 12. ¿Qué día de la semana será el 26?", steps: [["Diferencia", "26 − 12 = 14 días."], ["En semanas", "14 días son 2 semanas exactas."]], a: "Martes" }
    ],
    gen: [
      G("lee", function (L) { var h = R(1, 12), m = L === 0 ? pick([0, 15, 30, 45]) : R(1, 11) * 5;
        return MC("¿Qué hora marca el reloj?", hhmm(h, m), [[hhmm(m === 0 ? 12 : m / 5, (h * 5) % 60), "Confundiste las manecillas: la corta marca la hora y la larga los minutos."], [hhmm(h % 12 + 1, m), "Si la manecilla corta está entre dos números, se lee el menor."], [hhmm(h, (m + 30) % 60), ""]], { v: V.clock(h, m), tag: "leer el reloj", h: "La manecilla corta marca la hora. Cada número de la larga vale 5 minutos." }); }),
      G("dura", function (L) { var h = R(1, 9), m = R(0, 11) * 5, dh = R(0, 2), dm = R(1, 11) * 5, tm = m + dm, H = h + dh + Math.floor(tm / 60), Mi = tm % 60, w1 = hhmm(h + dh, tm > 59 ? tm - 60 : tm), act = pick(["Una película", "Un partido", "Una clase de natación", "Un concierto"]);
        return MC(act + " empieza a las " + hhmm(h, m) + " y dura " + (dh ? dh + " h " : "") + dm + " min. ¿A qué hora termina?", hhmm(H, Mi), [[w1 !== hhmm(H, Mi) ? w1 : hhmm(H + 1, Mi), "Cuando los minutos pasan de 60 se forma una hora más."], [hhmm(h + dh, m), "Te faltó sumar los minutos."], [hhmm(H + 1, Mi), ""]], { tag: "calcular cuánto dura", h: "Suma horas con horas y minutos con minutos. 60 minutos = 1 hora." }); }, [1, 2]),
      G("diasem", function (L) { var s = R(0, 6), mo = pick(MESES.slice(0)), d = R(1, mo[1]);
        return MC("¿Qué día de la semana es el <b>" + d + " de " + mo[0] + "</b>?", DIAS[(s + d - 1) % 7], [[DIAS[(s + d) % 7], "Busca el número en el calendario y sube a la columna."], [DIAS[(s + d + 5) % 7], ""], [DIAS[(s + d + 2) % 7], ""]], { v: V.cal(mo[0].charAt(0).toUpperCase() + mo[0].slice(1), s, mo[1], [d]), tag: "leer el calendario", h: "Busca el día marcado y sube hasta la letra de la columna: L, M, M, J, V, S, D." }); }),
      G("faltan", function () { var a = R(1, 15), b = R(a + 3, 30);
        return NUM("Hoy es " + a + " de junio. ¿Cuántos días faltan para el " + b + " de junio?", b - a, { unit: "días", tr: (function () { var o = {}; o[b - a + 1] = "Contaste también el día de hoy."; return o; })(), tag: "contar días", h: "Resta: " + b + " − " + a + "." }); }),
      G("conv", function (L) { var c = pick([["horas", "minutos", 60], ["semanas", "días", 7], ["años", "meses", 12], ["días", "horas", 24], ["minutos", "segundos", 60]]), n = R(2, L === 2 ? 12 : 5), t = {}; t[n + c[2]] = "Sumaste; hay que multiplicar."; t[n * 100] = "Una " + c[0].slice(0, -1) + " no tiene 100 " + c[1] + ".";
        return NUM("¿Cuántos " + c[1] + " hay en " + n + " " + c[0] + "?", n * c[2], { unit: c[1], tr: t, tag: "equivalencias de tiempo", h: "1 hora = 60 min · 1 semana = 7 días · 1 año = 12 meses · 1 día = 24 horas." }); }),
      G("hmin", function (L) { var h = R(1, L === 2 ? 5 : 3), m = R(1, 11) * 5;
        return FILL("Convierte a horas y minutos.", (h * 60 + m) + " minutos = [[0]] h [[1]] min", [h, m], { tag: "equivalencias de tiempo", h: "Cada 60 minutos forman 1 hora. Resta de 60 en 60." }); }, [1, 2]),
      G("meses", function () { var m = pick(MESES);
        return MC("¿Cuántos días tiene <b>" + m[0] + "</b>?", String(m[1]), ["28", "29", "30", "31"].filter(function (x) { return x !== String(m[1]); }).slice(0, 2).map(function (x) { return [x, ""]; }), { tag: "días de cada mes", h: "Truco de los nudillos: los meses en los nudillos tienen 31 días; en los huecos, 30 (febrero 28)." }); }, [0, 1]),
      G("salto", function () { var s = R(0, 6), d = R(1, 12), k = pick([7, 14, 21, 10, 3]);
        return MC("Hoy es " + DIAS[s] + " " + d + ". ¿Qué día de la semana será el " + (d + k) + "?", DIAS[(s + k) % 7], [[DIAS[(s + k + 1) % 7], "Cuenta: cada 7 días se repite el mismo día de la semana."], [DIAS[(s + k + 6) % 7], ""], [DIAS[(s + 3) % 7], ""]], { tag: "calcular fechas", h: "Cada 7 días se repite el día. Calcula cuántos días pasan y quita semanas completas." }); }, [2])
    ] };

  /* =====================================================================
     UNIDAD 8 · TRATAMIENTO DE LA INFORMACIÓN
     ===================================================================== */
  var FRUT = ["Mango", "Fresa", "Uva", "Pera", "Sandía"], DEP = ["Futbol", "Natación", "Basquet", "Tenis", "Beisbol"], SAB = ["Vainilla", "Chocolate", "Fresa", "Limón"];
  function dataSet(cats, n) { var vals = cats.map(function () { return R(1, 8); }); while (new Set(vals).size < vals.length) vals = cats.map(function () { return R(1, 8); }); return vals; }
  var t31 = { id: "tablas-frecuencia", n: "Representación de información en tablas de frecuencia", d: "Contar y organizar datos con rayitas.", game: "detective-patrones",
    learn: [
      { h: "Datos ordenados", p: "Una <b>tabla de frecuencia</b> organiza datos: en una columna van las opciones y en otra cuántas veces aparece cada una (su <b>frecuencia</b>).", v: tbl(["Fruta", "Conteo", "Frecuencia"], [["Mango", "<span style=\"letter-spacing:2px\">||||</span>", "4"], ["Fresa", "<span style=\"letter-spacing:2px\">||</span>", "2"], ["Uva", "<span style=\"letter-spacing:2px\">|||||| </span>", "6"]]), k: "Frecuencia = cuántas veces aparece." },
      { h: "Contar con rayitas", p: "Para no perderte, haz una rayita por cada dato. Cada quinta rayita cruza las otras cuatro: así cuentas de 5 en 5.", v: V.tally(12) + ex("dos grupos de 5 + 2 = " + hl("12")), k: "Un grupo cruzado = 5." }
    ],
    mira: [
      { q: "Los alumnos votaron su sabor favorito: Fresa, Chocolate, Fresa, Vainilla, Chocolate, Fresa. ¿Cuál es la frecuencia de Fresa?", steps: [["Cuenta cada voto de Fresa", "1.° voto, 3.° voto y 6.° voto."], ["Total", "3 votos."]], a: "3" },
      { q: "En la tabla: Futbol 8, Natación 5, Tenis 3. ¿Cuántos alumnos votaron en total?", steps: [["Suma las frecuencias", "8 + 5 + 3 = 16."]], a: "16 alumnos" }
    ],
    gen: [
      G("llena", function (L) { var cats = shuf(FRUT).slice(0, L === 0 ? 3 : 4), vals = dataSet(cats), data = []; cats.forEach(function (c, i) { for (var k = 0; k < vals[i]; k++) data.push(c); }); data = shuf(data);
        return FILL("Las frutas favoritas del grupo son:<br><span style=\"font-size:14px;font-weight:600;color:#4E5268\">" + data.join(", ") + "</span><br>Completa la tabla de frecuencia.", tbl(["Fruta", "Frecuencia"], cats.map(function (c, i) { return [c, "[[" + i + "]]"]; })), vals, { tag: "hacer una tabla de frecuencia", h: "Tacha cada dato mientras lo cuentas para no repetir.", fe: "Cuenta otra vez, tachando cada fruta mientras la cuentas." }); }),
      G("rayas", function (L) { var n = R(L === 0 ? 3 : 8, L === 0 ? 9 : 23);
        return NUM("¿Qué número representan las rayitas?", n, { v: V.tally(n), tag: "conteo con rayitas", h: "Cada grupo cruzado vale 5. Cuenta de 5 en 5 y suma las sueltas." }); }),
      G("mas", function (L) { var cats = shuf(DEP).slice(0, 4), vals = dataSet(cats), mx = vals.indexOf(Math.max.apply(null, vals)), mn = vals.indexOf(Math.min.apply(null, vals)), most = Math.random() < .6;
        return MC("¿Qué deporte tiene " + (most ? "<b>mayor</b>" : "<b>menor</b>") + " frecuencia?", cats[most ? mx : mn], cats.filter(function (c, i) { return i !== (most ? mx : mn); }).map(function (c) { return [c, "Compara los números de la columna de frecuencia."]; }), { v: tbl(["Deporte", "Frecuencia"], cats.map(function (c, i) { return [c, vals[i]]; })), tag: "leer tablas de frecuencia", h: "Busca el número " + (most ? "más grande" : "más pequeño") + " en la columna de frecuencia." }); }),
      G("total", function (L) { var cats = shuf(SAB).slice(0, L === 0 ? 3 : 4), vals = cats.map(function () { return R(3, 15); });
        return NUM("¿Cuántas personas votaron en total?", vals.reduce(function (a, b) { return a + b; }, 0), { v: tbl(["Sabor", "Votos"], cats.map(function (c, i) { return [c, vals[i]]; })), tag: "leer tablas de frecuencia", h: "Suma todas las frecuencias." }); }),
      G("dif", function (L) { var cats = shuf(DEP).slice(0, 3), vals = dataSet(cats).map(function (v) { return v + R(2, 8); }), a = vals[0] > vals[1] ? 0 : 1, b = 1 - a;
        return NUM("¿Cuántos votos <b>más</b> tiene " + cats[a] + " que " + cats[b] + "?", vals[a] - vals[b], { v: tbl(["Deporte", "Votos"], cats.map(function (c, i) { return [c, vals[i]]; })), tr: (function () { var o = {}; o[vals[a] + vals[b]] = "Sumaste. «¿Cuántos más?» es una resta."; return o; })(), tag: "comparar datos", h: "Resta: el mayor menos el menor." }); }, [1, 2]),
      G("rayatbl", function () { var cats = shuf(FRUT).slice(0, 3), vals = cats.map(function () { return R(4, 14); });
        return FILL("Escribe la frecuencia de cada fruta según las rayitas.", cats.map(function (c, i) { return '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;border-bottom:1px solid #ECE9F3;padding:4px 0"><b style="width:70px;text-align:left">' + c + "</b>" + V.tally(vals[i]) + "[[" + i + "]]</div>"; }).join(""), vals, { tag: "conteo con rayitas", h: "Cada grupo cruzado vale 5." }); }, [1, 2])
    ] };

  var t32 = { id: "graficas-barras", n: "Representación de información en gráficas de barras", d: "Leer y construir gráficas de barras.", game: "detective-patrones",
    learn: [
      { h: "Una barra por cada opción", p: "En una <b>gráfica de barras</b>, cada opción tiene una barra. Mientras más alta, más veces aparece.", v: V.chart(["Futbol", "Natación", "Basquet", "Tenis"], [7, 4, 5, 2], 8, { t: "Deporte favorito" }), k: "Lee la altura de cada barra en el eje de los números." },
      { h: "De la tabla a la gráfica", p: "Para construirla, dibuja una barra por cada fila de la tabla hasta el número de su frecuencia.", v: tbl(["Sabor", "Votos"], [["Vainilla", 3], ["Chocolate", 6], ["Fresa", 4]]) }
    ],
    mira: [
      { q: "Según la gráfica, ¿cuántos alumnos más prefieren futbol que tenis?", v: V.chart(["Futbol", "Natación", "Basquet", "Tenis"], [7, 4, 5, 2], 8), steps: [["Lee las barras", "Futbol llega al 7 y tenis al 2."], ["Resta", "7 − 2 = 5."]], a: "5 alumnos" },
      { q: "¿Cuántos alumnos votaron en total?", v: V.chart(["Futbol", "Natación", "Basquet", "Tenis"], [7, 4, 5, 2], 8), steps: [["Suma todas las barras", "7 + 4 + 5 + 2 = 18."]], a: "18 alumnos" }
    ],
    gen: [
      G("lee", function (L) { var cats = shuf(DEP).slice(0, 4), vals = dataSet(cats), k = R(0, 3);
        return NUM("¿Cuántos alumnos eligieron <b>" + cats[k] + "</b>?", vals[k], { v: V.chart(cats, vals, 8, { t: "Deporte favorito" }), tag: "leer gráficas de barras", h: "Sigue la parte de arriba de la barra hasta el eje de los números." }); }),
      G("mas", function (L) { var cats = shuf(FRUT).slice(0, 4), vals = dataSet(cats), most = Math.random() < .5, i = vals.indexOf((most ? Math.max : Math.min).apply(null, vals));
        return MC("¿Qué fruta fue la " + (most ? "<b>más</b>" : "<b>menos</b>") + " elegida?", cats[i], cats.filter(function (c, j) { return j !== i; }).map(function (c) { return [c, "Busca la barra " + (most ? "más alta" : "más baja") + "."]; }), { v: V.chart(cats, vals, 8, { t: "Fruta favorita" }), tag: "leer gráficas de barras", h: "La barra más alta es la más elegida." }); }),
      G("dif", function (L) { var cats = shuf(SAB).slice(0, 4), vals = dataSet(cats), a = 0, b = 1; if (vals[a] < vals[b]) { a = 1; b = 0; }
        return NUM("¿Cuántos votos <b>más</b> tiene " + cats[a] + " que " + cats[b] + "?", vals[a] - vals[b], { v: V.chart(cats, vals, 8, { t: "Sabor de helado" }), tr: (function () { var o = {}; o[vals[a] + vals[b]] = "Sumaste. «¿Cuántos más?» se resuelve restando."; return o; })(), tag: "comparar datos de una gráfica", h: "Lee las dos barras y resta." }); }, [1, 2]),
      G("total", function (L) { var cats = shuf(DEP).slice(0, L === 0 ? 3 : 4), vals = dataSet(cats);
        return NUM("¿Cuántos alumnos votaron en total?", vals.reduce(function (a, b) { return a + b; }, 0), { v: V.chart(cats, vals, 8), tag: "leer gráficas de barras", h: "Suma la altura de todas las barras." }); }),
      G("construye", function (L) { var cats = shuf(SAB).slice(0, L === 0 ? 3 : 4), vals = dataSet(cats);
        return BARS("Construye la gráfica con los datos de la tabla.", cats, vals, 8, { v: tbl(["Sabor", "Votos"], cats.map(function (c, i) { return [c, vals[i]]; })), tag: "construir gráficas de barras", h: "Toca el cuadro de cada columna que corresponde a su número de votos." }); }),
      G("tf", function () { var cats = shuf(DEP).slice(0, 4), vals = dataSet(cats), i = R(0, 3), j = (i + 1) % 4, ok = Math.random() < .5, st = ok ? cats[i] + " tiene " + vals[i] + " votos." : cats[i] + " tiene " + (vals[i] + 1) + " votos.";
        return TF(st, ok, { v: V.chart(cats, vals, 9), et: cats[i] + " tiene " + vals[i] + " votos.", tag: "leer gráficas de barras", h: "Lee con cuidado la altura de la barra." }); }),
      G("tabla", function () { var cats = shuf(FRUT).slice(0, 3), vals = dataSet(cats);
        return FILL("Pasa los datos de la gráfica a la tabla.", tbl(["Fruta", "Votos"], cats.map(function (c, i) { return [c, "[[" + i + "]]"]; })), vals, { v: V.chart(cats, vals, 8), tag: "leer gráficas de barras", h: "Lee la altura de cada barra." }); }, [1, 2])
    ] };

  M.add(4, {
    book: "Matemáticas en Movimiento · Primaria, 4° grado",
    games: GAMES,
    units: [
      { n: "Números naturales", topics: [t1, t2, t3, t4, t5] },
      { n: "Sumas y restas", topics: [t6, t7, t8, t9, t10, t11] },
      { n: "Multiplicaciones y divisiones", topics: [t12, t13, t14, t15, t16, t17] },
      { n: "Fracciones", topics: [t18, t19, t20, t21, t22, t23, t24] },
      { n: "Figuras y cuerpos geométricos", topics: [t25, t26] },
      { n: "Longitudes y áreas", topics: [t27, t28, t29] },
      { n: "Tiempo", topics: [t30] },
      { n: "Tratamiento de la información", topics: [t31, t32] }
    ]
  });
})();
