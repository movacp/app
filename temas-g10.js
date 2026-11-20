/* MOVA Math · Temas de 1er semestre de prepa
   Mismo orden que el índice de «Álgebra en Movimiento · Desarrollo del pensamiento algebraico».
   Cada tema: learn (Aprende), mira (Mira cómo se hace) y gen (ejercicios por nivel: 0 Nivelación, 1 Mi grado, 2 Reto). */
(function () {
  "use strict";
  var M = window.MovaTemas; if (!M) return;
  var Q = M.Q, U = M.U, C = M.C;
  var MC = Q.MC, TF = Q.TF, NUM = Q.NUM, FILL = Q.FILL, ORDER = Q.ORDER, MATCH = Q.MATCH, SORT = Q.SORT;
  var R = U.R, pick = U.pick, shuf = U.shuf, fr = U.fr, nm = U.nm;
  var INK = "#15192B", LAV = C.LAV, PINK = C.PINK, SKY = C.SKY, LIME = C.LIME, BUT = C.BUT, MINT = C.MINT;
  function G(k, f, lv) { return { k: k, f: f, lv: lv }; }
  function ex(s) { return '<div class="mt-ex">' + s + "</div>"; }
  function hl(s) { return "<mark>" + s + "</mark>"; }
  function nz(a, b) { var v; do { v = R(a, b); } while (v === 0); return v; }

  /* ---------- Álgebra: formato y operaciones ---------- */
  var SUP = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  function sup(n) { return n === 1 ? "" : String(n).split("").map(function (d) { return SUP[d]; }).join(""); }
  function sn(n) { return n < 0 ? "−" + Math.abs(n) : String(n); }
  function pn(n) { return n < 0 ? "(−" + Math.abs(n) + ")" : String(n); }
  /* polinomio en x: a[i] = coeficiente de x^i */
  function pf(a, v) { v = v || "x"; var s = ""; for (var i = a.length - 1; i >= 0; i--) { var c = a[i]; if (!c) continue; var ab = Math.abs(c), body = i === 0 ? String(ab) : (ab === 1 ? "" : ab) + v + sup(i); if (s === "") s = (c < 0 ? "−" : "") + body; else s += (c < 0 ? " − " : " + ") + body; } return s || "0"; }
  function padd(a, b) { var o = []; for (var i = 0; i < Math.max(a.length, b.length); i++) o.push((a[i] || 0) + (b[i] || 0)); return o; }
  function psc(a, k) { return a.map(function (c) { return c * k; }); }
  function pmul(a, b) { var o = []; for (var i = 0; i < a.length; i++) for (var j = 0; j < b.length; j++) o[i + j] = (o[i + j] || 0) + a[i] * b[j]; for (var k = 0; k < o.length; k++) o[k] = o[k] || 0; return o; }
  function rpoly(deg, lo, hi) { var a = []; for (var i = 0; i <= deg; i++) a.push(R(lo, hi)); a[deg] = nz(lo, hi); return a; }
  /* monomio con varias letras: mono(-5, {x:2, y:1}) */
  function mono(c, lits) { var ab = Math.abs(c), l = ""; Object.keys(lits).forEach(function (k) { if (lits[k]) l += k + sup(lits[k]); }); return (c < 0 ? "−" : "") + (ab === 1 && l ? "" : ab) + l; }
  /* binomio (ax + b) */
  function bin(a, b, v) { return pf([b, a], v); }
  function lin2(a, b, c) { var s = pf([0, a], "x"); s += (b < 0 ? " − " : " + ") + (Math.abs(b) === 1 ? "" : Math.abs(b)) + "y"; return s + " = " + sn(c); }

  /* ---------- Dibujos ---------- */
  function svg(w, h, body) { return '<svg class="mt-svg" viewBox="0 0 ' + w + " " + h + '" xmlns="http://www.w3.org/2000/svg" font-family="Plus Jakarta Sans, sans-serif">' + body + "</svg>"; }
  function tx(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-size="' + (o.fs || 14) + '" font-weight="' + (o.fw || 800) + '" fill="' + (o.c || INK) + '">' + s + "</text>"; }
  /* modelo de área: filas y columnas con etiquetas y celdas */
  function area(top, left, cells, cols) {
    var cw = 70, ch = 46, x0 = 70, y0 = 34, s = "", pal = cols || [LAV, PINK, SKY, LIME, BUT, MINT];
    top.forEach(function (t, j) { s += tx(x0 + j * cw + cw / 2, 24, t, { fs: 15 }); });
    left.forEach(function (l, i) { s += tx(x0 - 12, y0 + i * ch + ch / 2 + 5, l, { fs: 15, a: "end" }); top.forEach(function (_, j) { s += '<rect x="' + (x0 + j * cw) + '" y="' + (y0 + i * ch) + '" width="' + cw + '" height="' + ch + '" fill="' + pal[(i * top.length + j) % pal.length] + '" stroke="' + INK + '" stroke-width="2"/>' + tx(x0 + j * cw + cw / 2, y0 + i * ch + ch / 2 + 5, cells[i][j], { fs: 13.5 }); }); });
    return svg(x0 + top.length * cw + 10, y0 + left.length * ch + 8, s);
  }
  /* plano cartesiano con rectas y = mx + b */
  function plane(lines, pts) {
    var N = 7, u = 21, c = 160, s = "", cols = ["#7A62E8", "#E0518A", "#2E9E6E"];
    for (var i = -N; i <= N; i++) { var p = c + i * u; s += '<line x1="' + p + '" y1="' + (c - N * u) + '" x2="' + p + '" y2="' + (c + N * u) + '" stroke="' + (i ? "#ECE9F3" : INK) + '" stroke-width="' + (i ? 1 : 2) + '"/><line x1="' + (c - N * u) + '" y1="' + p + '" x2="' + (c + N * u) + '" y2="' + p + '" stroke="' + (i ? "#ECE9F3" : INK) + '" stroke-width="' + (i ? 1 : 2) + '"/>'; if (i && i % 2 === 0) s += tx(p, c + 15, i, { fs: 9.5, fw: 700, c: "#6A6F85" }) + tx(c - 8, c - i * u + 3, i, { fs: 9.5, fw: 700, c: "#6A6F85", a: "end" }); }
    s += '<clipPath id="pl"><rect x="' + (c - N * u) + '" y="' + (c - N * u) + '" width="' + 2 * N * u + '" height="' + 2 * N * u + '"/></clipPath><g clip-path="url(#pl)">';
    lines.forEach(function (L, k) { var X1 = -N - 1, X2 = N + 1, f = function (x) { return L.v != null ? null : L.m * x + L.b; }; if (L.v != null) s += '<line x1="' + (c + L.v * u) + '" y1="0" x2="' + (c + L.v * u) + '" y2="320" stroke="' + cols[k] + '" stroke-width="3"/>'; else s += '<line x1="' + (c + X1 * u) + '" y1="' + (c - f(X1) * u) + '" x2="' + (c + X2 * u) + '" y2="' + (c - f(X2) * u) + '" stroke="' + cols[k] + '" stroke-width="3"' + (L.dash ? ' stroke-dasharray="8 6"' : "") + "/>"; });
    s += "</g>";
    (pts || []).forEach(function (P) { s += '<circle cx="' + (c + P[0] * u) + '" cy="' + (c - P[1] * u) + '" r="6" fill="' + BUT + '" stroke="' + INK + '" stroke-width="2"/>'; });
    lines.forEach(function (L, k) { if (L.t) s += '<rect x="' + (8 + k * 150) + '" y="326" width="14" height="14" rx="4" fill="' + cols[k] + '"/>' + tx(28 + k * 150, 338, L.t, { fs: 12, a: "start" }); });
    return svg(320, lines.some(function (L) { return L.t; }) ? 346 : 320, s);
  }
  function parab(a, b, c, roots) {
    var N = 7, u = 21, cc = 160, s = "", d = "";
    for (var i = -N; i <= N; i++) { var p = cc + i * u; s += '<line x1="' + p + '" y1="' + (cc - N * u) + '" x2="' + p + '" y2="' + (cc + N * u) + '" stroke="' + (i ? "#ECE9F3" : INK) + '" stroke-width="' + (i ? 1 : 2) + '"/><line x1="' + (cc - N * u) + '" y1="' + p + '" x2="' + (cc + N * u) + '" y2="' + p + '" stroke="' + (i ? "#ECE9F3" : INK) + '" stroke-width="' + (i ? 1 : 2) + '"/>'; if (i && i % 2 === 0) s += tx(p, cc + 15, i, { fs: 9.5, fw: 700, c: "#6A6F85" }); }
    for (var x = -N; x <= N; x += .1) { var y = a * x * x + b * x + c; d += (d ? " L" : "M") + (cc + x * u).toFixed(1) + " " + (cc - y * u).toFixed(1); }
    s += '<clipPath id="pb"><rect x="' + (cc - N * u) + '" y="' + (cc - N * u) + '" width="' + 2 * N * u + '" height="' + 2 * N * u + '"/></clipPath><path d="' + d + '" fill="none" stroke="#E0518A" stroke-width="3" clip-path="url(#pb)"/>';
    (roots || []).forEach(function (r) { s += '<circle cx="' + (cc + r * u) + '" cy="' + cc + '" r="6" fill="' + BUT + '" stroke="' + INK + '" stroke-width="2"/>'; });
    return svg(320, 320, s);
  }
  function rectLbl(w, h, c) { return svg(300, 150, '<rect x="70" y="16" width="160" height="96" rx="4" fill="' + (c || SKY) + '" stroke="' + INK + '" stroke-width="2.5"/>' + tx(150, 136, w, { fs: 15 }) + tx(240, 70, h, { fs: 15, a: "start" })); }

  var GAMES = { "la-balanza": { n: "La Balanza" }, "la-boveda": { n: "La Bóveda" }, "mision-matematica": { n: "Misión Matemática" } };

  /* =====================================================================
     UNIDAD 1 · OPERACIONES CON POLINOMIOS
     ===================================================================== */
  var LET = ["x", "y", "a", "b", "m", "n"];
  function rmono(L) { var c = nz(-9, 9), v = shuf(LET.slice(0, 4)).slice(0, L === 0 ? 1 : 2), lits = {}; v.forEach(function (k) { lits[k] = R(1, 4); }); return { c: c, lits: lits, deg: v.reduce(function (s, k) { return s + lits[k]; }, 0), s: mono(c, lits) }; }

  var t1 = { id: "terminologia", n: "Terminología algebraica", d: "Términos, coeficientes, grado y tipos de expresiones.", game: "mision-matematica",
    learn: [
      { h: "Las partes de un término", p: "Un término algebraico tiene <b>signo</b>, <b>coeficiente</b> (el número), <b>parte literal</b> (las letras) y <b>exponentes</b>.", v: ex(hl("−7") + "x" + hl("³") + "y <em>→ coeficiente −7 · literal x³y · grado 3 + 1 = 4</em>"), k: "Si no se ve número, el coeficiente es 1. Si no se ve exponente, es 1." },
      { h: "Grado", p: "El grado de un término es la suma de los exponentes de sus letras. El grado de un polinomio es el del término de mayor grado.", v: ex("4x²y³ <em>→</em> grado " + hl("5") + "<br>3x⁴ − 2x + 7 <em>→</em> grado " + hl("4")) },
      { h: "Por número de términos", p: "<b>Monomio</b>: 1 término. <b>Binomio</b>: 2. <b>Trinomio</b>: 3. <b>Polinomio</b>: más de 3. Los términos se separan con + o −.", v: ex("5ab <em>monomio</em> · x² − 9 <em>binomio</em> · x² + 5x + 6 <em>trinomio</em>") },
      { h: "Términos semejantes", p: "Son los que tienen exactamente la misma parte literal, con los mismos exponentes. Solo esos se pueden sumar o restar.", v: ex("3x²y y −8x²y " + hl("sí") + " <em>·</em> 3x²y y 3xy² " + hl("no")), k: "Compara letras y exponentes; el coeficiente no importa." }
    ],
    mira: [
      { q: "Identifica las partes de −x⁵y²", steps: [["Signo y coeficiente", "Hay un − y no se ve número: el coeficiente es −1."], ["Parte literal", "x⁵y²."], ["Grado", "5 + 2 = 7."]], a: "Coeficiente −1, literal x⁵y², grado 7" },
      { q: "¿Qué tipo de expresión es 4a²b − 3ab + 2b − 1 y cuál es su grado?", steps: [["Cuenta los términos", "4a²b, −3ab, 2b y −1: son 4 → polinomio."], ["Grado de cada término", "4a²b: 3 · −3ab: 2 · 2b: 1 · −1: 0."], ["El mayor", "3."]], a: "Polinomio de grado 3" }
    ],
    gen: [
      G("coef", function (L) { var m = rmono(L); if (L > 0 && Math.random() < .3) m = { c: pick([1, -1]), lits: { x: R(2, 5), y: R(1, 3) } }, m.s = mono(m.c, m.lits);
        return NUM("¿Cuál es el <b>coeficiente</b> del término <b>" + m.s + "</b>?", m.c, { sg: 1, tag: "identificar el coeficiente", h: "Es el número con su signo. Si no se ve número, vale 1 (o −1).", tr: (function () { var o = {}; o[-m.c] = "Cuida el signo: también es parte del coeficiente."; return o; })() }); }),
      G("grado", function (L) { var m = rmono(L === 0 ? 1 : L), ks = Object.keys(m.lits), t = {}; t[m.lits[ks[0]]] = "Ese es solo el exponente de " + ks[0] + ". Suma todos los exponentes."; t[Math.abs(m.c)] = "El coeficiente no cuenta para el grado.";
        return NUM("¿Cuál es el <b>grado</b> del término <b>" + m.s + "</b>?", m.deg, { tr: t, tag: "grado de un término", h: "Suma los exponentes de todas las letras. Si una letra no tiene exponente, vale 1." }); }),
      G("tipo", function (L) { var n = R(1, 4), terms = []; for (var i = 0; i < n; i++) { var m = rmono(1); terms.push(m.s); } var s = terms[0]; for (i = 1; i < n; i++) s += (terms[i].charAt(0) === "−" ? " − " + terms[i].slice(1) : " + " + terms[i]); var ans = ["Monomio", "Binomio", "Trinomio", "Polinomio"][n - 1];
        return MC("¿Qué tipo de expresión es <b>" + s + "</b>?", ans, ["Monomio", "Binomio", "Trinomio", "Polinomio"].filter(function (x) { return x !== ans; }).map(function (x) { return [x, "Cuenta los términos: se separan con + o −."]; }), { tag: "clasificar expresiones", h: "Monomio 1 término, binomio 2, trinomio 3, polinomio más de 3." }); }),
      G("semej", function (L) { var base = { x: R(1, 3), y: R(1, 3) }, items = [], k; for (k = 0; k < 3; k++) items.push([mono(nz(-9, 9), base), 0]); var alt = [{ x: base.y, y: base.x }, { x: base.x + 1, y: base.y }, { x: base.x }, { y: base.y }, { x: base.x, y: base.y, z: 1 }]; alt.forEach(function (a) { if (a.x !== base.x || a.y !== base.y || a.z) items.push([mono(nz(-9, 9), a), 1]); });
        var seen = {}; items = items.filter(function (it) { if (seen[it[0]]) return false; seen[it[0]] = 1; return true; }).slice(0, 6);
        return SORT("¿Cuáles son semejantes a <b>" + mono(1, base) + "</b>? Toca cada término y luego su grupo.", ["Semejantes", "No semejantes"], items, { tag: "términos semejantes", h: "Semejantes = mismas letras con los mismos exponentes. El coeficiente puede cambiar.", se: "Fíjate en los exponentes de cada letra, no en el coeficiente." }); }),
      G("gpol", function (L) { var a = rpoly(R(3, 6), -9, 9), d = a.length - 1, t = {}; t[a.filter(function (c) { return c; }).length] = "Contaste los términos. El grado es el exponente mayor.";
        return NUM("¿Cuál es el <b>grado</b> del polinomio <b>" + pf(a) + "</b>?", d, { tr: t, tag: "grado de un polinomio", h: "Busca el término con el exponente más grande." }); }, [0, 1]),
      G("match", function () { var m; do { m = { c: nz(-9, 9), lits: { a: R(2, 4), b: R(1, 3) } }; } while (m.c === m.lits.a || m.c === m.lits.a + m.lits.b); m.s = mono(m.c, m.lits);
        return MATCH("En el término <b>" + m.s + "</b>, relaciona cada parte.", [["Coeficiente", sn(m.c)], ["Parte literal", mono(1, m.lits)], ["Grado", String(m.lits.a + m.lits.b)], ["Exponente de a", String(m.lits.a)]], { tag: "partes de un término", h: "Coeficiente: el número. Literal: las letras. Grado: suma de exponentes." }); }, [1, 2]),
      G("reduce", function (L) { var c1 = nz(-9, 9), c2 = nz(-9, 9), c3 = nz(-6, 6); while (c1 + c2 === 0) c2 = nz(-9, 9); var e = R(2, 3), s = pf([0, 0].concat([])); var expr = mono(c1, { x: e }) + (c2 < 0 ? " − " + mono(-c2, { x: e }) : " + " + mono(c2, { x: e })) + (c3 < 0 ? " − " + mono(-c3, { x: 1 }) : " + " + mono(c3, { x: 1 }));
        return MC("Reduce los términos semejantes: <b>" + expr + "</b>", mono(c1 + c2, { x: e }) + (c3 < 0 ? " − " : " + ") + mono(Math.abs(c3), { x: 1 }), [[mono(c1 + c2 + c3, { x: e }), "x" + sup(e) + " y x no son semejantes: no se juntan."], [mono(c1 + c2, { x: 2 * e }) + (c3 < 0 ? " − " : " + ") + mono(Math.abs(c3), { x: 1 }), "Al sumar semejantes los exponentes no cambian."], [mono(c1 - c2, { x: e }) + (c3 < 0 ? " − " : " + ") + mono(Math.abs(c3), { x: 1 }), "Revisa los signos al sumar los coeficientes."]], { tag: "reducir términos semejantes", h: "Suma solo los coeficientes de los términos semejantes; la parte literal se queda igual." }); }, [1, 2])
    ] };

  function pAddGen(L) { var d = L === 0 ? 2 : R(2, 3); return [rpoly(d, -9, 9), rpoly(d, -9, 9)]; }
  function coefFill(res, lead) { var lay = [], ans = [], d = res.length - 1; for (var i = d; i >= 0; i--) { lay.push("[[" + ans.length + "]]" + (i ? "x" + sup(i) : "")); ans.push(res[i]); } return { lay: lay.join(" + "), ans: ans }; }

  var t2 = { id: "adicion-polinomios", n: "Adición de polinomios", d: "Sumar polinomios juntando términos semejantes.", game: "mision-matematica",
    learn: [
      { h: "Se juntan los semejantes", p: "Para sumar polinomios, quita los paréntesis (en la suma no cambia ningún signo) y suma los coeficientes de los términos semejantes.", v: ex("(3x² + 2x − 5) + (x² − 6x + 1)<br>= " + hl("4x²") + " " + hl("− 4x") + " " + hl("− 4")), k: "Los exponentes NO se suman: x² + x² = 2x², no x⁴." },
      { h: "En columna", p: "Puedes acomodar un polinomio debajo del otro, con los términos semejantes en la misma columna. Si falta un término, deja el espacio vacío.", v: ex("&nbsp;&nbsp;3x² + 2x − 5<br>+ &nbsp;x² − 6x + 1<br>= 4x² − 4x − 4") }
    ],
    mira: [
      { q: "Suma (5x³ − 2x + 4) + (−3x³ + x² + 7x − 9)", steps: [["Ordena por grado", "x³: 5 − 3 · x²: 1 · x: −2 + 7 · números: 4 − 9."], ["Suma coeficientes", "2x³ + x² + 5x − 5."]], a: "2x³ + x² + 5x − 5" },
      { q: "Los lados de un triángulo miden 2x + 3, x − 1 y 4x + 5. ¿Cuál es su perímetro?", steps: [["Suma los tres lados", "(2x + 3) + (x − 1) + (4x + 5)."], ["x con x y números con números", "7x + 7."]], a: "7x + 7" }
    ],
    gen: [
      G("mc", function (L) { var p = pAddGen(L), r = padd(p[0], p[1]), w1 = r.map(function (c, i) { return i === 2 ? c : c; }); var bad = padd(p[0], psc(p[1], -1));
        return MC("Suma: <b>(" + pf(p[0]) + ") + (" + pf(p[1]) + ")</b>", pf(r), [[pf(bad), "Restaste el segundo polinomio. En la suma los signos no cambian."], [pf(r.map(function (c, i) { return i === 1 ? c + 2 : c; })), "Revisa los términos en x."], [pf(r).replace(/x²/g, "x⁴"), "Al sumar, los exponentes no cambian."]], { one: 1, tag: "sumar polinomios", h: "Junta los términos semejantes: x² con x², x con x y números con números." }); }),
      G("fill", function (L) { var p = pAddGen(L), r = padd(p[0], p[1]), cf = coefFill(r);
        return FILL("Suma y escribe cada coeficiente (con su signo).", "(" + pf(p[0]) + ") + (" + pf(p[1]) + ")<br>= " + cf.lay, cf.ans, { sg: 1, tag: "sumar polinomios", h: "Para cada potencia de x, suma los coeficientes con su signo. Si da 0, escribe 0." }); }),
      G("coef", function (L) { var p = pAddGen(L), k = R(0, p[0].length - 1), r = padd(p[0], p[1]);
        return NUM("En la suma <b>(" + pf(p[0]) + ") + (" + pf(p[1]) + ")</b>, ¿cuál es el coeficiente " + (k ? "de <b>x" + sup(k) + "</b>" : "del <b>término independiente</b> (el número solo)") + "?", r[k], { sg: 1, tag: "sumar polinomios", h: "Busca ese término en los dos polinomios y suma sus coeficientes." }); }),
      G("perim", function (L) { var s = [[R(1, 5), R(-5, 8)], [R(1, 5), R(-5, 8)], [R(1, 5), R(-5, 8)]], r = s.reduce(function (o, x) { return [o[0] + x[1], o[1] + x[0]]; }, [0, 0]);
        return MC("Los lados de un triángulo miden <b>" + s.map(function (x) { return bin(x[0], x[1]); }).join("</b>, <b>") + "</b>. ¿Cuál es su perímetro?", pf(r), [[pf([r[0] + 2, r[1]]), "Revisa los números con su signo."], [pf([r[0], r[1] - 1]), "Revisa los términos en x."], [pf([0, r[1] + r[0]]), "Los números y las x no son semejantes: no se juntan."]], { v: '<svg class="mt-svg" viewBox="0 0 300 150"><polygon points="40,130 260,130 120,20" fill="#FFB8DC" stroke="#15192B" stroke-width="2.5"/></svg>', tag: "problemas con polinomios", h: "El perímetro es la suma de los tres lados." }); }, [1, 2]),
      G("tf", function () { var e = R(2, 4), a = nz(2, 7), b = nz(2, 7), c = pick([[mono(a, { x: e }) + " + " + mono(b, { x: e }) + " = " + mono(a + b, { x: 2 * e }), false, "Al sumar semejantes el exponente se queda igual: " + mono(a + b, { x: e }) + "."], [mono(a, { x: e }) + " + " + mono(b, { x: e }) + " = " + mono(a + b, { x: e }), true], [mono(a, { x: e }) + " + " + mono(b, { x: 1 }) + " = " + mono(a + b, { x: e + 1 }), false, "x" + sup(e) + " y x no son semejantes: el resultado se queda como " + mono(a, { x: e }) + " + " + mono(b, { x: 1 }) + "."]]);
        return TF("<b>" + c[0] + "</b>", c[1], { et: c[2] || "", tag: "sumar términos semejantes", h: "Solo se suman coeficientes de términos semejantes; los exponentes no cambian." }); }),
      G("tres", function () { var a = rpoly(2, -6, 6), b = rpoly(2, -6, 6), c = rpoly(1, -6, 6), r = padd(padd(a, b), c);
        return MC("Suma: <b>(" + pf(a) + ") + (" + pf(b) + ") + (" + pf(c) + ")</b>", pf(r), [[pf(r.map(function (x, i) { return i === 0 ? x + 3 : x; })), "Revisa los números solos."], [pf(r.map(function (x, i) { return i === 1 ? -x : x; })), "Revisa los signos de los términos en x."], [pf(r.map(function (x, i) { return i === 2 ? x - 1 : x; })), ""]], { one: 1, tag: "sumar polinomios", h: "Ordena por columnas: x², x y números." }); }, [2])
    ] };

  var t3 = { id: "sustraccion-polinomios", n: "Sustracción de polinomios", d: "Restar polinomios cambiando los signos del sustraendo.", game: "mision-matematica",
    learn: [
      { h: "El signo − cambia todo lo de adentro", p: "Para restar, quita el paréntesis del segundo polinomio <b>cambiando el signo de todos sus términos</b>. Después junta los semejantes.", v: ex("(4x² + 3x − 2) " + hl("−") + " (x² − 5x + 6)<br>= 4x² + 3x − 2 " + hl("− x² + 5x − 6") + "<br>= 3x² + 8x − 8"), k: "El error más común: cambiar solo el primer signo." },
      { h: "Restar es sumar el opuesto", p: "A − B es lo mismo que A + (−B). El opuesto de un polinomio tiene todos los signos cambiados.", v: ex("opuesto de x² − 5x + 6 <em>→</em> −x² + 5x − 6") }
    ],
    mira: [
      { q: "Resta (6x³ − 2x + 1) − (4x³ + x² − 7x + 3)", steps: [["Cambia signos del segundo", "−4x³ − x² + 7x − 3."], ["Junta", "x³: 6 − 4 = 2 · x²: −1 · x: −2 + 7 = 5 · números: 1 − 3 = −2."]], a: "2x³ − x² + 5x − 2" },
      { q: "De 5a − 3b resta 2a − 7b", steps: [["Ojo con el orden", "«De A resta B» = A − B: (5a − 3b) − (2a − 7b)."], ["Cambia signos y junta", "5a − 3b − 2a + 7b = 3a + 4b."]], a: "3a + 4b" }
    ],
    gen: [
      G("mc", function (L) { var p = pAddGen(L), r = padd(p[0], psc(p[1], -1)), bad = p[0].map(function (c, i) { return i === p[1].length - 1 ? c - p[1][i] : c + p[1][i]; });
        return MC("Resta: <b>(" + pf(p[0]) + ") − (" + pf(p[1]) + ")</b>", pf(r), [[pf(bad), "Cambiaste solo el signo del primer término. El − cambia TODOS los términos del paréntesis."], [pf(padd(p[0], p[1])), "Sumaste. Hay que cambiar los signos del segundo polinomio."], [pf(padd(psc(p[0], -1), p[1])), "Restaste al revés."]], { one: 1, tag: "restar polinomios", h: "Cambia el signo de todos los términos del segundo paréntesis y junta semejantes." }); }),
      G("fill", function (L) { var p = pAddGen(L), r = padd(p[0], psc(p[1], -1)), cf = coefFill(r);
        return FILL("Resta y escribe cada coeficiente (con su signo).", "(" + pf(p[0]) + ") − (" + pf(p[1]) + ")<br>= " + cf.lay, cf.ans, { sg: 1, tag: "restar polinomios", h: "Primero cambia los signos del segundo polinomio; luego suma coeficientes." }); }),
      G("opuesto", function (L) { var a = rpoly(R(2, 3), -9, 9);
        return MC("¿Cuál es el <b>opuesto</b> de <b>" + pf(a) + "</b>?", pf(psc(a, -1)), [[pf(a.map(function (c, i) { return i === a.length - 1 ? -c : c; })), "Hay que cambiar el signo de todos los términos, no solo del primero."], [pf(a.map(function (c, i) { return i === 0 ? -c : c; })), "Hay que cambiar el signo de todos los términos."], [pf(a), "Ese es el mismo polinomio."]], { one: 1, tag: "opuesto de un polinomio", h: "El opuesto tiene todos los signos cambiados." }); }, [0, 1]),
      G("de", function (L) { var A = [nz(-9, 9), nz(-9, 9)], B = [nz(-9, 9), nz(-9, 9)], r = [A[0] - B[0], A[1] - B[1]];
        var f = function (p) { var s = mono(p[0], { a: 1 }); if (p[1]) s += (p[1] < 0 ? " − " : " + ") + mono(Math.abs(p[1]), { b: 1 }); return p[0] ? s : (p[1] ? mono(p[1], { b: 1 }) : "0"); };
        return MC("<b>De</b> " + f(A) + " <b>resta</b> " + f(B) + ".", f(r), [[f([B[0] - A[0], B[1] - A[1]]), "«De A resta B» es A − B: el primero que se menciona va primero."], [f([A[0] + B[0], A[1] + B[1]]), "Sumaste en lugar de restar."], [f([A[0] - B[0], A[1] + B[1]]), "Cambia el signo de todos los términos del sustraendo."]], { tag: "restar polinomios", h: "«De A resta B» se escribe A − B." }); }, [1, 2]),
      G("coef", function (L) { var p = pAddGen(L), k = R(0, p[0].length - 1), r = padd(p[0], psc(p[1], -1)), t = {}; t[p[0][k] + p[1][k]] = "Sumaste. En la resta se cambia el signo del segundo.";
        return NUM("En <b>(" + pf(p[0]) + ") − (" + pf(p[1]) + ")</b>, ¿cuál es el coeficiente " + (k ? "de <b>x" + sup(k) + "</b>" : "del <b>término independiente</b>") + "?", r[k], { sg: 1, tr: t, tag: "restar polinomios", h: "Coeficiente del primero − coeficiente del segundo." }); }),
      G("falta", function () { var a = rpoly(2, -9, 9), b = rpoly(2, -9, 9), s = padd(a, b);
        return MC("¿Qué polinomio hay que sumarle a <b>" + pf(a) + "</b> para obtener <b>" + pf(s) + "</b>?", pf(b), [[pf(psc(b, -1)), "Comprueba sumando: debe darte el resultado."], [pf(padd(s, a)), "Resta: resultado − el que tienes."], [pf(padd(a, psc(s, -1))), "Restaste al revés."]], { one: 1, tag: "restar polinomios", h: "Lo que falta = resultado − lo que ya tienes." }); }, [2])
    ] };

  var t4 = { id: "division-algebraica", n: "División algebraica", d: "Dividir monomios y polinomios.", game: "mision-matematica",
    learn: [
      { h: "Monomio entre monomio", p: "Divide los coeficientes y <b>resta los exponentes</b> de la misma letra (ley de los exponentes).", v: ex("12x⁵y³ ÷ 4x²y = " + hl("3x³y²")), k: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Los signos siguen la ley de los signos." },
      { h: "Polinomio entre monomio", p: "Divide <b>cada término</b> del polinomio entre el monomio.", v: ex("(6x³ − 9x² + 3x) ÷ 3x = " + hl("2x² − 3x + 1")), k: "Un término entre sí mismo da 1, no 0." },
      { h: "Polinomio entre binomio", p: "Se hace como la división larga: divide el primer término, multiplica, resta y baja el siguiente.", v: ex("(x² + 5x + 6) ÷ (x + 2) = " + hl("x + 3")) }
    ],
    mira: [
      { q: "Divide −20a⁴b² ÷ 5a³b²", steps: [["Coeficientes", "−20 ÷ 5 = −4."], ["Letra a", "a⁴ ÷ a³ = a¹."], ["Letra b", "b² ÷ b² = b⁰ = 1."]], a: "−4a" },
      { q: "Divide (x² + 7x + 10) ÷ (x + 2)", steps: [["Primer término", "x² ÷ x = x."], ["Multiplica y resta", "x(x + 2) = x² + 2x. Resta: queda 5x + 10."], ["Repite", "5x ÷ x = 5; 5(x + 2) = 5x + 10. Residuo 0."]], a: "x + 5" }
    ],
    gen: [
      G("mono", function (L) { var q = nz(-6, 6), d = nz(-5, 5), e1 = R(1, 4), e2 = R(1, 3), f1 = L === 0 ? 0 : R(0, 2), f2 = L === 0 ? 0 : R(1, 3), A = mono(q * d, { x: e1 + e2, y: f1 + f2 }), B = mono(d, { x: e2, y: f2 }), ok = mono(q, { x: e1, y: f1 });
        return MC("Divide: <b>" + A + " ÷ " + B + "</b>", ok, [[mono(q, { x: (e1 + e2) / e2 % 1 ? e1 + 2 * e2 : (e1 + e2) / e2, y: f1 }), "Los exponentes no se dividen: se restan."], [mono(-q, { x: e1, y: f1 }), "Revisa la ley de los signos."], [mono(q * d * d, { x: e1, y: f1 }), "Los coeficientes se dividen."]], { tag: "dividir monomios", h: "Divide coeficientes (con signo) y resta exponentes de la misma letra." }); }),
      G("exp", function (L) { var a = R(4, 12), b = R(1, a - 1), t = {}; t[a + b] = "Sumaste. En la división los exponentes se restan."; t[Math.round(a / b)] = "Los exponentes no se dividen: se restan.";
        return NUM("¿Qué exponente queda? <b>x" + sup(a) + " ÷ x" + sup(b) + " = x<sup>?</sup></b>", a - b, { tr: t, tag: "ley de los exponentes", h: "En la división de potencias con la misma base, los exponentes se restan." }); }, [0, 1]),
      G("polmon", function (L) { var k = nz(2, 5) * (L === 2 && Math.random() < .5 ? -1 : 1), e = 1, qq = rpoly(2, -6, 6), num = pmul(qq, [0, k]);
        var cf = coefFill(qq);
        return FILL("Divide cada término.", "(" + pf(num) + ") ÷ " + pf([0, k]) + "<br>= " + cf.lay, cf.ans, { sg: 1, tag: "dividir un polinomio entre un monomio", h: "Divide cada término entre " + pf([0, k]) + ": coeficiente entre " + k + " y resta 1 al exponente de x." }); }),
      G("polbin", function (L) { var r = nz(-6, 6), s = nz(-6, 6), num = pmul([r, 1], [s, 1]);
        return MC("Divide: <b>(" + pf(num) + ") ÷ (" + bin(1, r) + ")</b>", bin(1, s), [[bin(1, -s), "Comprueba multiplicando: el resultado × divisor debe dar el dividendo."], [bin(1, r), "Ese es el divisor."], [bin(1, s + r), ""]], { tag: "dividir entre un binomio", h: "x² ÷ x = x; multiplica, resta y repite con el término que queda." }); }, [1, 2]),
      G("residuo", function () { var r = nz(-5, 5), a = rpoly(2, -6, 6); a[2] = 1; var val = a[0] + a[1] * (-r) + a[2] * r * r;
        return NUM("¿Cuál es el <b>residuo</b> de dividir <b>" + pf(a) + "</b> entre <b>" + bin(1, -r) + "</b>?", val, { sg: 1, tag: "residuo de la división", h: "Teorema del residuo: sustituye x = " + r + " en el dividendo." }); }, [2]),
      G("tf", function () { var c = pick([["x⁶ ÷ x² = x³", false, "Los exponentes se restan: x⁶ ÷ x² = x⁴."], ["5x² ÷ 5x² = 1", true], ["8a³ ÷ 2a = 4a²", true], ["(4x² + 2x) ÷ 2x = 2x", false, "Hay que dividir cada término: 2x + 1."], ["−12y⁴ ÷ 3y = −4y³", true]]);
        return TF("<b>" + c[0] + "</b>", c[1], { et: c[2] || "", tag: "dividir monomios", h: "Coeficientes se dividen y exponentes se restan." }); })
    ] };

  /* =====================================================================
     UNIDAD 2 · MULTIPLICACIÓN Y FACTORIZACIÓN
     ===================================================================== */
  var t5 = { id: "multiplicacion-algebraica", n: "Multiplicación algebraica", d: "Multiplicar monomios, polinomios y binomios.", game: "mision-matematica",
    learn: [
      { h: "Monomio por monomio", p: "Multiplica los coeficientes y <b>suma los exponentes</b> de la misma letra.", v: ex("(3x²y)(−4x³y²) = " + hl("−12x⁵y³")), k: "aᵐ · aⁿ = aᵐ⁺ⁿ" },
      { h: "Monomio por polinomio", p: "Multiplica el monomio por <b>cada término</b> del polinomio (propiedad distributiva).", v: ex("2x(3x² − 5x + 1) = " + hl("6x³ − 10x² + 2x")) },
      { h: "Binomio por binomio", p: "Cada término del primero multiplica a cada término del segundo. El modelo de área ayuda a no olvidar ninguno.", v: area(["x", "+4"], ["x", "+3"], [["x²", "4x"], ["3x", "12"]]) + ex("(x + 3)(x + 4) = x² + 7x + 12") }
    ],
    mira: [
      { q: "Multiplica (2x − 5)(3x + 4)", v: area(["3x", "+4"], ["2x", "−5"], [["6x²", "8x"], ["−15x", "−20"]]), steps: [["Los cuatro productos", "6x², 8x, −15x y −20."], ["Junta semejantes", "8x − 15x = −7x."]], a: "6x² − 7x − 20" },
      { q: "Multiplica −3a²(2a³ − a + 4)", steps: [["Primer término", "−3a² · 2a³ = −6a⁵."], ["Segundo", "−3a² · (−a) = +3a³."], ["Tercero", "−3a² · 4 = −12a²."]], a: "−6a⁵ + 3a³ − 12a²" }
    ],
    gen: [
      G("mono", function (L) { var a = nz(-7, 7), b = nz(-7, 7), e1 = R(1, 4), e2 = R(1, 4), f1 = L ? R(0, 3) : 0, f2 = L ? R(1, 3) : 0, ok = mono(a * b, { x: e1 + e2, y: f1 + f2 });
        return MC("Multiplica: <b>(" + mono(a, { x: e1, y: f1 }) + ")(" + mono(b, { x: e2, y: f2 }) + ")</b>", ok, [[mono(a * b, { x: e1 * e2, y: f1 * f2 || f1 + f2 }), "Los exponentes no se multiplican: se suman."], [mono(-a * b, { x: e1 + e2, y: f1 + f2 }), "Revisa la ley de los signos."], [mono(a + b || 1, { x: e1 + e2, y: f1 + f2 }), "Los coeficientes se multiplican, no se suman."]], { tag: "multiplicar monomios", h: "Multiplica coeficientes (con signo) y suma exponentes de la misma letra." }); }),
      G("exp", function () { var a = R(2, 7), b = R(2, 6), t = {}; t[a * b] = "Los exponentes se suman al multiplicar.";
        return NUM("¿Qué exponente queda? <b>x" + sup(a) + " · x" + sup(b) + " = x<sup>?</sup></b>", a + b, { tr: t, tag: "ley de los exponentes", h: "Misma base: se suman los exponentes." }); }, [0]),
      G("monpol", function (L) { var k = nz(-5, 5), p = rpoly(2, -6, 6), r = pmul([0, k], p), cf = coefFill(r);
        return FILL("Multiplica y escribe cada coeficiente.", pf([0, k]) + "(" + pf(p) + ")<br>= " + cf.lay, cf.ans, { sg: 1, tag: "propiedad distributiva", h: "Multiplica " + pf([0, k]) + " por cada término: el exponente de x sube en 1 y el coeficiente se multiplica por " + k + "." }); }),
      G("binbin", function (L) { var a = L === 2 ? R(2, 4) : 1, b = nz(-9, 9), c = L === 2 ? R(1, 3) : 1, d = nz(-9, 9), r = pmul([b, a], [d, c]);
        return FILL("Multiplica los binomios.", "(" + bin(a, b) + ")(" + bin(c, d) + ") = [[0]]x² + [[1]]x + [[2]]", [r[2], r[1], r[0]], { sg: 1, v: area([pf([0, c]), sn(d).replace(/^(\d)/, "+$1")], [pf([0, a]), sn(b).replace(/^(\d)/, "+$1")], [[pf([0, 0, a * c]), pf([0, a * d])], [pf([0, b * c]), sn(b * d)]]), tag: "multiplicar binomios", h: "Usa el modelo de área: los cuatro productos y luego junta los términos en x." }); }),
      G("binmc", function (L) { var b = nz(-9, 9), d = nz(-9, 9), r = pmul([b, 1], [d, 1]);
        return MC("Multiplica: <b>(" + bin(1, b) + ")(" + bin(1, d) + ")</b>", pf(r), [[pf([b * d, 0, 1]), "Faltaron los productos cruzados (el término en x)."], [pf([b + d, b * d, 1]), "Intercambiaste: el término en x es la suma y el número es el producto."], [pf([-b * d, b + d, 1]), "Revisa el signo del último término."]], { one: 1, tag: "multiplicar binomios", h: "Primero × primero, primero × segundo, segundo × primero, segundo × segundo." }); }),
      G("area", function () { var w = R(2, 5), h = R(1, 6);
        return MC("Un rectángulo mide <b>" + bin(1, w) + "</b> de largo y <b>" + bin(1, h) + "</b> de ancho. ¿Cuál es su área?", pf(pmul([w, 1], [h, 1])), [[pf([w + h, 2]), "Eso es la suma de los lados. El área es largo × ancho."], [pf([w * h, 0, 1]), "Faltaron los productos cruzados."], [pf(padd(psc([w, 1], 2), psc([h, 1], 2))), "Eso es el perímetro."]], { v: rectLbl(bin(1, w), bin(1, h), MINT), tag: "problemas de multiplicación", h: "Área = largo × ancho: multiplica los dos binomios." }); }, [1, 2])
    ] };

  var t6 = { id: "productos-notables", n: "Productos notables", d: "Multiplicaciones que se resuelven con una regla.", game: "mision-matematica",
    learn: [
      { h: "Binomio al cuadrado", p: "(a + b)² = a² + 2ab + b². El cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo.", v: area(["a", "b"], ["a", "b"], [["a²", "ab"], ["ab", "b²"]]) + ex("(x + 5)² = x² + " + hl("10x") + " + 25"), k: "¡No olvides el término de en medio! (x + 5)² ≠ x² + 25" },
      { h: "Binomios conjugados", p: "(a + b)(a − b) = a² − b². Los términos de en medio se cancelan.", v: ex("(x + 7)(x − 7) = x² − 49") },
      { h: "Binomios con término común", p: "(x + a)(x + b) = x² + (a + b)x + ab.", v: ex("(x + 3)(x − 8) = x² " + hl("− 5x") + " " + hl("− 24")) },
      { h: "Binomio al cubo", p: "(a + b)³ = a³ + 3a²b + 3ab² + b³.", v: ex("(x + 2)³ = x³ + 6x² + 12x + 8") }
    ],
    mira: [
      { q: "Desarrolla (3x − 4)²", steps: [["Cuadrado del primero", "(3x)² = 9x²."], ["Doble producto", "2(3x)(−4) = −24x."], ["Cuadrado del segundo", "(−4)² = 16."]], a: "9x² − 24x + 16" },
      { q: "Desarrolla (2a + 5)(2a − 5)", steps: [["Son conjugados", "Mismos términos, signo distinto en medio."], ["Diferencia de cuadrados", "(2a)² − 5² = 4a² − 25."]], a: "4a² − 25" }
    ],
    gen: [
      G("cuad", function (L) { var a = L === 0 ? 1 : R(1, 3), b = nz(-9, 9), r = pmul([b, a], [b, a]);
        return FILL("Desarrolla el binomio al cuadrado.", "(" + bin(a, b) + ")² = [[0]]x² + [[1]]x + [[2]]", [r[2], r[1], r[0]], { sg: 1, tag: "binomio al cuadrado", h: "Cuadrado del primero + doble del primero por el segundo + cuadrado del segundo.", fe: function (i) { return i === 1 ? "El término de en medio es el doble producto: 2 · " + pf([0, a]) + " · " + pn(b) + "." : i === 2 ? "El cuadrado del segundo siempre es positivo." : ""; } }); }),
      G("cuadmc", function (L) { var b = nz(-9, 9), r = pmul([b, 1], [b, 1]);
        return MC("Desarrolla <b>(" + bin(1, b) + ")²</b>", pf(r), [[pf([b * b, 0, 1]), "Falta el doble producto (el término de en medio)."], [pf([-b * b, 2 * b, 1]), "El cuadrado del segundo término siempre es positivo."], [pf([b * b, b, 1]), "El término de en medio es el DOBLE del producto."]], { tag: "binomio al cuadrado", h: "(a + b)² = a² + 2ab + b²" }); }),
      G("conj", function (L) { var a = L === 0 ? 1 : R(1, 4), b = R(1, 12);
        return MC("Desarrolla <b>(" + bin(a, b) + ")(" + bin(a, -b) + ")</b>", pf([-b * b, 0, a * a]), [[pf([b * b, 0, a * a]), "Es una diferencia: el segundo término queda negativo."], [pf([-b * b, 2 * a * b, a * a]), "En los conjugados los términos de en medio se cancelan."], [pf([-b * b, 0, a]), "El primer término también se eleva al cuadrado."]], { tag: "binomios conjugados", h: "(a + b)(a − b) = a² − b²" }); }),
      G("comun", function (L) { var a = nz(-9, 9), b = nz(-9, 9); while (a + b === 0) b = nz(-9, 9);
        return FILL("Desarrolla.", "(" + bin(1, a) + ")(" + bin(1, b) + ") = x² + [[0]]x + [[1]]", [a + b, a * b], { sg: 1, tag: "binomios con término común", h: "El término en x es la SUMA de los números; el último, su PRODUCTO." }); }),
      G("match", function () { var a = R(2, 6), b = R(2, 6); while (b === a) b = R(2, 6);
        return MATCH("Relaciona cada producto con su desarrollo.", [["(x + " + a + ")²", pf(pmul([a, 1], [a, 1]))], ["(x + " + a + ")(x − " + a + ")", pf([-a * a, 0, 1])], ["(x − " + a + ")²", pf(pmul([-a, 1], [-a, 1]))], ["(x + " + a + ")(x + " + b + ")", pf(pmul([a, 1], [b, 1]))]], { tag: "reconocer productos notables", h: "Cuadrado: tres términos con 2ab. Conjugados: dos términos." }); }, [1, 2]),
      G("tf", function () { var b = R(2, 9), c = pick([["(x + " + b + ")² = x² + " + b * b, false, "Falta el término de en medio: x² + " + 2 * b + "x + " + b * b + "."], ["(x − " + b + ")² = x² − " + 2 * b + "x + " + b * b, true], ["(x + " + b + ")(x − " + b + ") = x² − " + b * b, true], ["(x − " + b + ")² = x² − " + b * b, false, "(x − " + b + ")² = x² − " + 2 * b + "x + " + b * b + "."]]);
        return TF("<b>" + c[0] + "</b>", c[1], { et: c[2] || "", tag: "binomio al cuadrado", h: "No confundas (a + b)² con a² + b²." }); }),
      G("cubo", function () { var b = nz(-4, 4), r = pmul(pmul([b, 1], [b, 1]), [b, 1]);
        return MC("Desarrolla <b>(" + bin(1, b) + ")³</b>", pf(r), [[pf([b * b * b, 0, 0, 1]), "Faltan los términos de en medio: 3a²b y 3ab²."], [pf([b * b * b, b * b, b, 1]), "Los términos de en medio llevan un 3."], [pf([b * b * b, 3 * b * b, 3 * b, 1].map(function (c, i) { return i === 0 ? -c : c; })), "Revisa el signo del último término: b³."]], { one: 1, tag: "binomio al cubo", h: "(a + b)³ = a³ + 3a²b + 3ab² + b³" }); }, [2])
    ] };

  var t7 = { id: "factor-comun", n: "Factorización: factor común", d: "Sacar lo que se repite en todos los términos.", game: "mision-matematica",
    learn: [
      { h: "Factorizar es multiplicar al revés", p: "Factorizar es escribir una expresión como multiplicación. El primer caso es buscar lo que todos los términos tienen en común.", v: ex("6x² + 9x = " + hl("3x") + "(2x + 3)"), k: "Siempre revisa primero si hay factor común." },
      { h: "Cómo encontrarlo", p: "Del número: el MCD de los coeficientes. De las letras: las que están en todos los términos, con el exponente <b>más pequeño</b>.", v: ex("12a³b² − 18a²b³ <em>→</em> MCD(12, 18) = 6 · a² · b² <em>→</em> " + hl("6a²b²") + "(2a − 3b)") },
      { h: "Comprueba", p: "Multiplica el factor por el paréntesis: debe darte la expresión original.", v: ex("3x(2x + 3) = 6x² + 9x ✓") }
    ],
    mira: [
      { q: "Factoriza 15x³ − 10x² + 5x", steps: [["MCD", "MCD(15, 10, 5) = 5."], ["Letras", "x está en todos; el menor exponente es 1."], ["Divide cada término entre 5x", "3x² − 2x + 1."]], a: "5x(3x² − 2x + 1)" },
      { q: "Factoriza 8a²b + 12ab²", steps: [["MCD", "MCD(8, 12) = 4."], ["Letras comunes", "a¹ y b¹."], ["Divide", "8a²b ÷ 4ab = 2a; 12ab² ÷ 4ab = 3b."]], a: "4ab(2a + 3b)" }
    ],
    gen: [
      G("mc", function (L) { var k = R(2, 6), e = L === 0 ? 1 : R(1, 2), inner, g; do { inner = L === 0 ? [nz(-7, 7), R(1, 7)] : [nz(-7, 7), nz(-7, 7), R(1, 7)]; g = inner.reduce(function (s, c) { var x = Math.abs(s), y = Math.abs(c); while (y) { var t = y; y = x % y; x = t; } return x; }, 0); } while (g > 1);
        var xe = []; for (var i = 0; i < e; i++) xe.push(0); var F = pf(xe.concat([k])), full = pmul(inner, xe.concat([k])), xin = pmul(inner, [0, 1]);
        return MC("Factoriza: <b>" + pf(full) + "</b>", F + "(" + pf(inner) + ")", [[String(k) + "(" + pf(pmul(inner, xe.concat([1]))) + ")", "Todavía queda x en común dentro del paréntesis."], [F + "(" + pf(xin) + ")", "Comprueba multiplicando: los exponentes no coinciden."], [F + "(" + pf(inner.map(function (c, i) { return i === 0 ? c * k : c; })) + ")", "Divide cada término entre el factor común, también el último."]], { one: 1, tag: "encontrar el factor común", h: "Busca el MCD de los coeficientes y la x con el exponente más pequeño." }); }),
      G("mcd", function (L) { var g = R(2, 9), a = g * R(2, 7), b = g * R(2, 7), c = g * R(1, 5); var G0 = function (x, y) { while (y) { var t = y; y = x % y; x = t; } return x; }, real = G0(G0(a, b), c);
        return NUM("¿Cuál es el <b>número</b> del factor común de <b>" + a + "x³ + " + b + "x² − " + c + "x</b>?", real, { tag: "MCD de los coeficientes", h: "Busca el número más grande que divide exactamente a " + a + ", " + b + " y " + c + "." }); }, [0, 1]),
      G("fill", function (L) { var k = R(2, 7), p = nz(1, 8), q = nz(-8, 8); var G0 = function (x, y) { x = Math.abs(x); y = Math.abs(y); while (y) { var t = y; y = x % y; x = t; } return x; }; while (G0(p, q) > 1) q += 1; if (q === 0) q = 1;
        return FILL("Completa la factorización.", pf([0, k * q, k * p]) + " = [[0]]x([[1]]x + [[2]])", [k, p, q], { sg: 1, tag: "sacar factor común", h: "El factor común es " + k + "x. Divide cada término entre " + k + "x." }); }),
      G("dos", function (L) { var k = R(2, 6), a = R(2, 3), b = R(1, 2), p = nz(2, 5), q = nz(-5, 5);
        return MC("Factoriza: <b>" + mono(k * p, { a: a + 1, b: b }) + (k * q < 0 ? " − " : " + ") + mono(Math.abs(k * q), { a: a, b: b + 1 }) + "</b>", mono(k, { a: a, b: b }) + "(" + mono(p, { a: 1 }) + (q < 0 ? " − " : " + ") + mono(Math.abs(q), { b: 1 }) + ")", [[mono(k, { a: a + 1, b: b + 1 }) + "(" + p + (q < 0 ? " − " : " + ") + Math.abs(q) + ")", "Se toma el exponente MÁS PEQUEÑO de cada letra."], [mono(k, { a: 1, b: 1 }) + "(" + mono(p, { a: a, b: b - 1 || 0 }) + (q < 0 ? " − " : " + ") + mono(Math.abs(q), { a: a - 1, b: b }) + ")", "Todavía queda algo en común adentro."], [mono(k * 2, { a: a, b: b }) + "(" + mono(p, { a: 1 }) + (q < 0 ? " − " : " + ") + mono(Math.abs(q), { b: 1 }) + ")", "Revisa el MCD de los coeficientes."]], { one: 1, tag: "factor común con varias letras", h: "Número: MCD. Letras: las que se repiten, con el menor exponente." }); }, [1, 2]),
      G("tf", function () { var c = pick([["4x² + 8x = 4x(x + 2)", true], ["4x² + 8x = 4(x² + 8x)", false, "El 8x también se divide entre 4: 4(x² + 2x), y todavía queda x en común: 4x(x + 2)."], ["9a³ − 3a = 3a(3a² − 1)", true], ["9a³ − 3a = 3a(3a²)", false, "3a ÷ 3a = 1: no desaparece. Queda 3a(3a² − 1)."]]);
        return TF("<b>" + c[0] + "</b>", c[1], { et: c[2] || "", tag: "sacar factor común", h: "Comprueba multiplicando." }); }),
      G("agrup", function () { var a = nz(-6, 6), b = nz(-6, 6), r = pmul([a, 1], [b, 0, 1]);
        return MC("Factoriza por agrupación: <b>x³ " + (a < 0 ? "− " + -a : "+ " + a) + "x² " + (b < 0 ? "− " + -b : "+ " + b) + "x " + (a * b < 0 ? "− " + -(a * b) : "+ " + a * b) + "</b>", "(" + bin(1, a) + ")(" + pf([b, 0, 1]) + ")", [["(" + bin(1, b) + ")(" + pf([a, 0, 1]) + ")", "Agrupa los dos primeros y los dos últimos y saca factor común de cada pareja."], ["x(" + pf([b, a, 1]) + ")", "Ese factor común no sirve para el último término."], ["(" + bin(1, -a) + ")(" + pf([b, 0, 1]) + ")", "Revisa el signo."]], { one: 1, tag: "factorizar por agrupación", h: "x²(x + a) + b(x + a) = (x + a)(x² + b)." }); }, [2])
    ] };

  var t8 = { id: "diferencia-cuadrados", n: "Factorización: diferencia de cuadrados", d: "a² − b² = (a + b)(a − b).", game: "mision-matematica",
    learn: [
      { h: "Reconócela", p: "Una diferencia de cuadrados tiene <b>dos términos</b>, separados por un <b>menos</b>, y los dos tienen raíz cuadrada exacta.", v: ex("x² − 49 <em>·</em> 9a² − 25 <em>·</em> 16 − y²"), k: "x² + 49 NO se puede factorizar así: es una suma." },
      { h: "Se factoriza en conjugados", p: "Saca la raíz de cada término y escribe dos paréntesis: uno con + y otro con −.", v: ex("9a² − 25 <em>→</em> √9a² = 3a, √25 = 5 <em>→</em> " + hl("(3a + 5)(3a − 5)")) }
    ],
    mira: [
      { q: "Factoriza 4x² − 81", steps: [["Raíces", "√4x² = 2x · √81 = 9."], ["Conjugados", "(2x + 9)(2x − 9)."], ["Comprueba", "(2x)² − 9² = 4x² − 81 ✓"]], a: "(2x + 9)(2x − 9)" },
      { q: "Factoriza 3x² − 75", steps: [["Primero factor común", "3(x² − 25)."], ["Diferencia de cuadrados", "x² − 25 = (x + 5)(x − 5)."]], a: "3(x + 5)(x − 5)" }
    ],
    gen: [
      G("fill", function (L) { var b = R(2, 15);
        return FILL("Factoriza.", "x² − " + b * b + " = (x + [[0]])(x − [[1]])", [b, b], { tag: "diferencia de cuadrados", h: "Saca la raíz cuadrada de " + b * b + "." }); }, [0, 1]),
      G("mc", function (L) { var a = L === 0 ? 1 : R(2, 6), b = R(1, 12), A = a * a;
        return MC("Factoriza: <b>" + pf([-b * b, 0, A]) + "</b>", "(" + bin(a, b) + ")(" + bin(a, -b) + ")", [["(" + bin(a, -b) + ")²", "Ese desarrollo tendría un término en x."], ["(" + bin(A, b) + ")(" + bin(A, -b) + ")", "Saca la raíz también del coeficiente: √" + A + " = " + a + "."], ["(" + bin(a, b * b) + ")(" + bin(a, -1) + ")", "Saca la raíz de " + b * b + "."]], { one: 1, tag: "diferencia de cuadrados", h: "Raíz del primero y raíz del segundo, en dos paréntesis: uno con + y otro con −." }); }),
      G("sort", function () { var items = [["x² − 36", 0], ["4a² − 9", 0], ["y² − 1", 0], ["x² + 25", 1], ["x² − 10", 1], ["x³ − 16", 1], ["49 − m²", 0], ["x² − 8x", 1]];
        return SORT("¿Cuáles son diferencia de cuadrados?", ["Sí", "No"], shuf(items).slice(0, 6), { tag: "reconocer diferencias de cuadrados", h: "Dos términos, un menos en medio y raíz exacta en los dos.", se: "Revisa: tiene que ser resta y los dos términos deben tener raíz exacta." }); }),
      G("raiz", function () { var a = R(2, 9), b = R(2, 12);
        return NUM("En <b>" + a * a + "x² − " + b * b + "</b>, ¿cuál es la raíz cuadrada de " + a * a + "x²? Escribe solo el coeficiente de x.", a, { tr: (function () { var o = {}; o[a * a / 2] = "La raíz no es la mitad."; return o; })(), tag: "raíces cuadradas", h: "¿Qué número por sí mismo da " + a * a + "?" }); }, [0]),
      G("fc", function () { var k = R(2, 5), b = R(2, 9);
        return MC("Factoriza completamente: <b>" + pf([-k * b * b, 0, k]) + "</b>", k + "(" + bin(1, b) + ")(" + bin(1, -b) + ")", [["(" + bin(k, b) + ")(" + bin(k, -b) + ")", "Primero saca el factor común " + k + "."], [k + "(" + pf([-b * b, 0, 1]) + ")", "Todavía se puede factorizar lo de adentro."], ["(" + bin(1, k * b) + ")(" + bin(1, -k * b) + ")", "Comprueba multiplicando."]], { one: 1, tag: "factorizar completamente", h: "Primero factor común; luego la diferencia de cuadrados." }); }, [2]),
      G("tf", function () { var b = R(2, 9), c = pick([["x² + " + b * b + " = (x + " + b + ")(x − " + b + ")", false, "Es una SUMA de cuadrados: no se factoriza así."], ["x² − " + b * b + " = (x + " + b + ")(x − " + b + ")", true], ["x² − " + b * b + " = (x − " + b + ")²", false, "(x − " + b + ")² tiene un término en x."]]);
        return TF("<b>" + c[0] + "</b>", c[1], { et: c[2] || "", tag: "diferencia de cuadrados", h: "Solo las diferencias (con −) se factorizan en conjugados." }); }, [1, 2])
    ] };

  function rr() { var a = nz(-9, 9), b = nz(-9, 9); return [a, b]; }
  var t9 = { id: "trinomios", n: "Factorización: trinomios de segundo grado", d: "x² + bx + c y ax² + bx + c.", game: "la-boveda",
    learn: [
      { h: "x² + bx + c", p: "Busca dos números que <b>multiplicados den c</b> y <b>sumados den b</b>. Esos números van en los paréntesis.", v: ex("x² + 7x + 12 <em>→</em> 3 · 4 = 12 y 3 + 4 = 7 <em>→</em> " + hl("(x + 3)(x + 4)")), k: "Si c es negativo, los números tienen signos distintos." },
      { h: "Los signos", p: "c positivo y b positivo → los dos +. c positivo y b negativo → los dos −. c negativo → uno + y uno −; el mayor lleva el signo de b.", v: ex("x² − x − 20 <em>→</em> −5 · 4 = −20, −5 + 4 = −1 <em>→</em> (x − 5)(x + 4)") },
      { h: "Trinomio cuadrado perfecto", p: "Si el primero y el último son cuadrados y el de en medio es su doble producto, es un binomio al cuadrado.", v: ex("x² + 10x + 25 = (x + 5)²") },
      { h: "ax² + bx + c", p: "Multiplica a · c y busca dos números que den ese producto y sumen b. Separa el término de en medio con ellos y factoriza por agrupación.", v: ex("2x² + 7x + 3 <em>→</em> a·c = 6: 6 y 1 <em>→</em> 2x² + 6x + x + 3 = (x + 3)(2x + 1)") }
    ],
    mira: [
      { q: "Factoriza x² − 2x − 15", steps: [["Producto −15, suma −2", "Pares de −15: (−5, 3), (5, −3), (−15, 1)…"], ["El que suma −2", "−5 + 3 = −2 ✓"]], a: "(x − 5)(x + 3)" },
      { q: "Factoriza 3x² + 10x + 8", steps: [["a · c", "3 · 8 = 24. Números que den 24 y sumen 10: 6 y 4."], ["Separa", "3x² + 6x + 4x + 8."], ["Agrupa", "3x(x + 2) + 4(x + 2) = (x + 2)(3x + 4)."]], a: "(x + 2)(3x + 4)" }
    ],
    gen: [
      G("nums", function (L) { var p = rr();
        return FILL("Para factorizar <b>" + pf(pmul([p[0], 1], [p[1], 1])) + "</b>, ¿qué dos números multiplicados dan <b>" + p[0] * p[1] + "</b> y sumados dan <b>" + (p[0] + p[1]) + "</b>?", "[[0]] y [[1]]", [p[0], p[1]], { sg: 1, unord: 1, tag: "buscar los dos números", h: "Prueba con las parejas de factores de " + Math.abs(p[0] * p[1]) + " y fíjate en los signos." }); }),
      G("mc", function (L) { var p = rr(), t = pmul([p[0], 1], [p[1], 1]);
        return MC("Factoriza: <b>" + pf(t) + "</b>", "(" + bin(1, p[0]) + ")(" + bin(1, p[1]) + ")", [["(" + bin(1, -p[0]) + ")(" + bin(1, -p[1]) + ")", "Los signos están al revés: comprueba la suma."], ["(" + bin(1, p[0] + p[1]) + ")(" + bin(1, 1) + ")", "Los dos números deben multiplicarse para dar " + p[0] * p[1] + "."], ["(" + bin(1, -p[0]) + ")(" + bin(1, p[1]) + ")", "Comprueba multiplicando."]], { one: 1, tag: "factorizar trinomios", h: "Dos números: producto = " + p[0] * p[1] + ", suma = " + (p[0] + p[1]) + "." }); }),
      G("tcp", function (L) { var b = nz(-9, 9);
        return MC("Factoriza: <b>" + pf(pmul([b, 1], [b, 1])) + "</b>", "(" + bin(1, b) + ")²", [["(" + bin(1, -b) + ")²", "El signo del binomio es el del término de en medio."], ["(" + bin(1, b) + ")(" + bin(1, -b) + ")", "Eso daría una diferencia de cuadrados."], ["(" + bin(1, b * b) + ")²", "Saca la raíz del último término."]], { tag: "trinomio cuadrado perfecto", h: "Si el último es un cuadrado y el de en medio es su doble, es (x ± raíz)²." }); }),
      G("ax", function () { var a = R(2, 5), m = nz(-6, 6), n = nz(-6, 6), t = pmul([m, a], [n, 1]);
        return MC("Factoriza: <b>" + pf(t) + "</b>", "(" + bin(a, m) + ")(" + bin(1, n) + ")", [["(" + bin(a, n) + ")(" + bin(1, m) + ")", "Comprueba multiplicando: el término de en medio no coincide."], ["(" + bin(1, m) + ")(" + bin(1, n) + ")", "Falta el coeficiente " + a + "."], ["(" + bin(a, -m) + ")(" + bin(1, -n) + ")", "Revisa los signos."]], { one: 1, tag: "trinomios de la forma ax² + bx + c", h: "Multiplica a · c, busca dos números y factoriza por agrupación." }); }, [2]),
      G("sort", function () { var items = []; var b = nz(-8, 8); items.push([pf(pmul([b, 1], [b, 1])), 0]); var c = nz(-8, 8); items.push([pf(pmul([c, 1], [c, 1])), 0]); var p = rr(); while (p[0] === p[1]) p = rr(); items.push([pf(pmul([p[0], 1], [p[1], 1])), 1]); var q = rr(); while (q[0] === q[1]) q = rr(); items.push([pf(pmul([q[0], 1], [q[1], 1])), 1]);
        var seen = {}; items = items.filter(function (it) { if (seen[it[0]]) return false; seen[it[0]] = 1; return true; });
        return SORT("Clasifica cada trinomio.", ["Cuadrado perfecto", "No es cuadrado perfecto"], items, { tag: "trinomio cuadrado perfecto", h: "Es cuadrado perfecto si el último es un cuadrado y el de en medio es el doble de su raíz.", se: "Revisa: el de en medio debe ser 2 × la raíz del último." }); }, [1, 2]),
      G("cual", function () { var p = rr(), t = pmul([p[0], 1], [p[1], 1]);
        return NUM("Uno de los factores de <b>" + pf(t) + "</b> es <b>(" + bin(1, p[0]) + ")</b>. ¿Qué número va en el otro factor (x + ?)?", p[1], { sg: 1, tag: "buscar los dos números", h: "Los dos números multiplicados dan " + p[0] * p[1] + ": divide " + p[0] * p[1] + " ÷ " + pn(p[0]) + "." }); }, [0, 1])
    ] };

  var t10 = { id: "cubos", n: "Factorización: suma o diferencia de dos cubos", d: "a³ + b³ y a³ − b³.", game: "mision-matematica",
    learn: [
      { h: "Las fórmulas", p: "a³ + b³ = (a + b)(a² − ab + b²)<br>a³ − b³ = (a − b)(a² + ab + b²)", v: ex("x³ + 8 = (x + 2)(x² − 2x + 4)"), k: "El signo del binomio es el mismo; en el trinomio, el de en medio es el contrario y el último siempre +." },
      { h: "Cubos que debes reconocer", p: "1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. Y con letras: x³, 8a³ = (2a)³, 27y³ = (3y)³.", v: ex("∛64 = 4 <em>·</em> ∛125x³ = 5x") }
    ],
    mira: [
      { q: "Factoriza x³ − 27", steps: [["Raíces cúbicas", "∛x³ = x · ∛27 = 3."], ["Binomio", "(x − 3)."], ["Trinomio", "x² + 3x + 9 (el de en medio con signo contrario, el último +)."]], a: "(x − 3)(x² + 3x + 9)" },
      { q: "Factoriza 8a³ + 125", steps: [["Raíces", "2a y 5."], ["Fórmula de suma", "(2a + 5)(4a² − 10a + 25)."]], a: "(2a + 5)(4a² − 10a + 25)" }
    ],
    gen: [
      G("raiz", function (L) { var b = R(2, 10);
        return NUM("¿Cuál es la raíz cúbica de <b>" + b * b * b + "</b>?", b, { tr: (function () { var o = {}; o[Math.round(b * b * b / 3)] = "La raíz cúbica no es dividir entre 3."; return o; })(), tag: "raíces cúbicas", h: "¿Qué número multiplicado 3 veces por sí mismo da " + b * b * b + "?" }); }, [0, 1]),
      G("fill", function (L) { var b = R(1, 6), plus = Math.random() < .5;
        return FILL("Completa la factorización.", "x³ " + (plus ? "+" : "−") + " " + b * b * b + " = (x " + (plus ? "+" : "−") + " [[0]])(x² " + (plus ? "−" : "+") + " [[1]]x + [[2]])", [b, b, b * b], { tag: plus ? "suma de cubos" : "diferencia de cubos", h: "Raíz cúbica de " + b * b * b + " = " + b + ". En el trinomio: x², " + b + "x y " + b + "²." }); }),
      G("mc", function (L) { var a = L === 2 ? R(2, 3) : 1, b = R(1, 6), plus = Math.random() < .5, A = a * a * a, s = plus ? 1 : -1;
        var ok = "(" + bin(a, s * b) + ")(" + pf([b * b, -s * a * b, a * a]) + ")";
        return MC("Factoriza: <b>" + pf([s * b * b * b, 0, 0, A]) + "</b>", ok, [["(" + bin(a, s * b) + ")(" + pf([b * b, s * a * b, a * a]) + ")", "En el trinomio, el término de en medio lleva el signo CONTRARIO al del binomio."], ["(" + bin(a, -s * b) + ")(" + pf([b * b, -s * a * b, a * a]) + ")", "El binomio lleva el mismo signo que la expresión original."], ["(" + bin(a, s * b) + ")(" + pf([-b * b, -s * a * b, a * a]) + ")", "El último término del trinomio siempre es positivo."]], { one: 1, tag: plus ? "suma de cubos" : "diferencia de cubos", h: "a³ ± b³ = (a ± b)(a² ∓ ab + b²)" }); }),
      G("sort", function () { var items = [["x³ + 27", 0], ["x³ − 64", 1], ["8a³ + 1", 0], ["y³ − 125", 1], ["x² − 9", 2], ["27m³ − 8", 1], ["x² + 6x + 9", 2]];
        return SORT("Clasifica cada expresión.", ["Suma de cubos", "Diferencia de cubos", "Otro caso"], shuf(items).slice(0, 6), { tag: "reconocer casos de factorización", h: "Busca exponentes 3 y raíces cúbicas exactas; mira el signo." }); }),
      G("tf", function () { var c = pick([["x³ + 8 = (x + 2)(x² − 2x + 4)", true], ["x³ − 1 = (x − 1)(x² + x + 1)", true], ["x³ + 27 = (x + 3)³", false, "(x + 3)³ = x³ + 9x² + 27x + 27. Lo correcto: (x + 3)(x² − 3x + 9)."], ["x³ − 8 = (x − 2)(x² − 2x + 4)", false, "En la diferencia, el término de en medio del trinomio es +: x² + 2x + 4."]]);
        return TF("<b>" + c[0] + "</b>", c[1], { et: c[2] || "", tag: "suma y diferencia de cubos", h: "Recuerda el signo del término de en medio del trinomio." }); }, [1, 2])
    ] };

  /* =====================================================================
     UNIDAD 3 · ECUACIONES LINEALES EN UNA Y DOS VARIABLES
     ===================================================================== */
  function eqLin(L) { var x = R(-8, 12), a, b, c, d, s, rhs; if (L === 0) { a = nz(2, 9); b = nz(-15, 15); return { s: pf([b, a]) + " = " + (a * x + b), x: x }; } if (L === 1) { a = nz(2, 9); c = nz(-6, 6); while (c === a) c = nz(-6, 6); b = R(-12, 12); d = (a - c) * x + b; return { s: pf([b, a]) + " = " + pf([d, c]), x: x }; } a = R(2, 5); b = nz(-6, 6); c = nz(-4, 4); while (c === a) c = nz(-4, 4); d = a * (x + b) - c * x; return { s: a + "(" + bin(1, b) + ") = " + pf([d, c]), x: x }; }
  var t11 = { id: "ecuacion-lineal", n: "Ecuación lineal en una variable", d: "Encontrar el valor de x que hace verdadera la igualdad.", game: "la-balanza",
    learn: [
      { h: "Una balanza en equilibrio", p: "Una ecuación es una balanza: lo que hagas de un lado, hazlo del otro. Así se mantiene la igualdad.", v: ex("3x + 5 = 20 <em>→ − 5 →</em> 3x = 15 <em>→ ÷ 3 →</em> x = 5"), k: "Primero quita lo que suma o resta; después lo que multiplica." },
      { h: "x en los dos lados", p: "Junta las x de un lado y los números del otro. Lo que suma pasa restando y lo que resta pasa sumando.", v: ex("5x − 4 = 2x + 11 <em>→</em> 3x = 15 <em>→</em> x = 5") },
      { h: "Con paréntesis", p: "Primero quita los paréntesis multiplicando (propiedad distributiva). Después resuelve como siempre.", v: ex("3(x − 2) = x + 8 <em>→</em> 3x − 6 = x + 8 <em>→</em> 2x = 14 <em>→</em> x = 7"), k: "Comprueba sustituyendo tu resultado." }
    ],
    mira: [
      { q: "Resuelve 7x − 3 = 4x + 18", steps: [["Las x a la izquierda", "7x − 4x = 3x."], ["Los números a la derecha", "18 + 3 = 21."], ["Divide", "3x = 21 → x = 7."], ["Comprueba", "7(7) − 3 = 46 y 4(7) + 18 = 46 ✓"]], a: "x = 7" },
      { q: "Resuelve 2(x + 5) = 5x − 8", steps: [["Distributiva", "2x + 10 = 5x − 8."], ["Junta", "10 + 8 = 5x − 2x → 18 = 3x."], ["Divide", "x = 6."]], a: "x = 6" }
    ],
    gen: [
      G("res", function (L) { var e = eqLin(L), t = {}; t[-e.x] = "Revisa el signo al pasar los términos de un lado al otro.";
        return NUM("Resuelve: <b>" + e.s + "</b><br>x =", e.x, { sg: 1, tr: t, tag: L === 2 ? "ecuaciones con paréntesis" : L === 1 ? "ecuaciones con x en los dos lados" : "ecuaciones de un paso", h: L === 2 ? "Quita el paréntesis multiplicando; luego junta las x de un lado." : "Lo que suma pasa restando; lo que multiplica pasa dividiendo." }); }),
      G("paso", function (L) { var a = nz(2, 9), b = R(1, 15), x = R(1, 10);
        return MC("¿Cuál es el primer paso más conveniente para resolver <b>" + a + "x + " + b + " = " + (a * x + b) + "</b>?", "Restar " + b + " en los dos lados", [["Dividir entre " + a + " solo el lado izquierdo", "Lo que haces de un lado, hazlo del otro."], ["Sumar " + b + " en los dos lados", "Para quitar un +" + b + " se resta."], ["Restar " + a + " en los dos lados", "El " + a + " multiplica a la x: se quita dividiendo, al final."]], { one: 1, tag: "despejar paso a paso", h: "Primero quita lo que suma o resta a la x." }); }, [0, 1]),
      G("comp", function (L) { var e = eqLin(L), cand = Math.random() < .5 ? e.x : e.x + pick([-2, -1, 1, 2]);
        return TF("¿x = " + sn(cand) + " es solución de <b>" + e.s + "</b>?", cand === e.x, { et: "Sustituye x = " + sn(cand) + ": los dos lados no dan lo mismo. La solución es x = " + sn(e.x) + ".", ef: "Sí: al sustituir, los dos lados dan lo mismo.", tag: "comprobar soluciones", h: "Sustituye el valor en los dos lados y compara." }); }),
      G("orden", function () { var a = R(2, 6), b = R(1, 9), c = R(1, 4), x = R(1, 8), r = a * (x + b) - c * x;
        return ORDER("Ordena los pasos para resolver <b>" + a + "(x + " + b + ") = " + pf([r, c]) + "</b>.", [pf([a * b, a]) + " = " + pf([r, c]), pf([a * b, a - c]) + " = " + r, (a - c) + "x = " + (r - a * b), "x = " + x], { tag: "despejar paso a paso", h: "Primero quita el paréntesis, luego junta las x, luego los números y al final divide.", oe: "El último paso siempre es dejar sola la x." }); }, [1, 2]),
      G("frac", function () { var d = pick([2, 3, 4, 5]), x = d * R(-4, 6), b = nz(-9, 9), c = x / d + b;
        return NUM("Resuelve: <b>" + fr("x", d) + " " + (b < 0 ? "− " + -b : "+ " + b) + " = " + sn(c) + "</b><br>x =", x, { sg: 1, tag: "ecuaciones con fracciones", h: "Primero quita el " + sn(b) + "; luego multiplica por " + d + " para quitar la fracción." }); }, [2]),
      G("fill", function (L) { var a = nz(2, 9), x = R(-6, 9), b = R(-10, 10), c = a * x + b;
        return FILL("Completa los pasos.", pf([b, a]) + " = " + c + "<br>" + a + "x = [[0]]<br>x = [[1]]", [c - b, x], { sg: 1, tag: "despejar paso a paso", h: "Pasa el " + sn(b) + " al otro lado con la operación contraria; luego divide entre " + a + "." }); }, [0, 1])
    ] };

  var t12 = { id: "modelos-lineales", n: "Modelos matemáticos mediante ecuaciones lineales en una variable", d: "Plantear y resolver problemas con una ecuación.", game: "la-balanza",
    learn: [
      { h: "Del problema a la ecuación", p: "1) ¿Qué no sé? Llámalo x. 2) Escribe lo demás usando x. 3) Busca la frase que dice qué es igual a qué.", v: ex("«El doble de un número más 7 es 31» <em>→</em> 2x + 7 = 31"), k: "La ecuación es el problema escrito en idioma matemático." },
      { h: "Frases comunes", p: "«El doble» 2x · «la mitad» x/2 · «tres más que» x + 3 · «consecutivos» x, x + 1, x + 2 · «el perímetro» suma de lados.", v: ex("tres números consecutivos que suman 48 <em>→</em> x + (x + 1) + (x + 2) = 48") }
    ],
    mira: [
      { q: "La suma de tres números consecutivos es 72. ¿Cuáles son?", steps: [["Plantea", "x + (x + 1) + (x + 2) = 72."], ["Simplifica", "3x + 3 = 72 → 3x = 69 → x = 23."], ["Responde", "Los números son 23, 24 y 25."]], a: "23, 24 y 25" },
      { q: "El largo de un rectángulo mide 4 cm más que el ancho y su perímetro es 44 cm. ¿Cuánto mide el ancho?", steps: [["Ancho x, largo x + 4", "2x + 2(x + 4) = 44."], ["Resuelve", "4x + 8 = 44 → 4x = 36 → x = 9."]], a: "9 cm" }
    ],
    gen: [
      G("traduce", function (L) { var a = R(2, 5), b = R(2, 20), c = R(20, 80), opts = [["El " + ["", "", "doble", "triple", "cuádruple", "quíntuple"][a] + " de un número más " + b + " es " + c + ".", a + "x + " + b + " = " + c]];
        return MC("¿Qué ecuación representa la frase? <i>" + opts[0][0] + "</i>", opts[0][1], [["x + " + a + " + " + b + " = " + c, "«El " + ["", "", "doble", "triple", "cuádruple", "quíntuple"][a] + "» es multiplicar por " + a + "."], [a + "(x + " + b + ") = " + c, "Solo el número se multiplica; después se suma " + b + "."], [a + "x = " + b + " + " + c, ""]], { one: 1, tag: "traducir al lenguaje algebraico", h: "Traduce por partes, de izquierda a derecha." }); }, [0, 1]),
      G("consec", function (L) { var n = R(3, 4), x = R(5, 60), s = 0; for (var i = 0; i < n; i++) s += x + i;
        return NUM("La suma de " + n + " números consecutivos es " + s + ". ¿Cuál es el <b>menor</b>?", x, { tr: (function () { var o = {}; o[Math.round(s / n)] = "Ese es el promedio. Plantea x + (x + 1) + …"; return o; })(), tag: "problemas de números consecutivos", h: "Llama x al menor: x + (x + 1) + … = " + s + "." }); }),
      G("rect", function (L) { var w = R(3, 20), k = R(2, 10), P = 2 * (2 * w + k), t = {}; t[w + k] = "Ese es el largo. La pregunta es el ancho.";
        return NUM("El largo de un rectángulo mide " + k + " cm más que el ancho y su perímetro es " + P + " cm. ¿Cuánto mide el ancho?", w, { unit: "cm", tr: t, tag: "problemas de perímetro", h: "Ancho x, largo x + " + k + ": 2x + 2(x + " + k + ") = " + P + "." }); }),
      G("edad", function (L) { var h = R(5, 15), k = R(2, 3), y = R(3, 10), p = k * h, s = p + y + h + y;
        return NUM("Un papá tiene " + ["", "", "el doble", "el triple"][k] + " de la edad de su hijo. Dentro de " + y + " años, la suma de sus edades será " + s + ". ¿Cuántos años tiene hoy el hijo?", h, { unit: "años", tag: "problemas de edades", h: "Hijo x, papá " + k + "x. En " + y + " años: (x + " + y + ") + (" + k + "x + " + y + ") = " + s + "." }); }, [1, 2]),
      G("dinero", function () { var p = R(15, 60), n = R(3, 8), e = R(20, 90), T = n * p + e;
        return NUM(nm() + " compró " + n + " cuadernos iguales y una calculadora de $" + e + ". Pagó $" + T + " en total. ¿Cuánto costó cada cuaderno?", p, { pre: "$", tag: "problemas de dinero", h: n + "x + " + e + " = " + T + "." }); }),
      G("cual", function () { var w = R(3, 12), k = R(2, 6), P = 2 * (2 * w + k);
        return MC("El largo de un rectángulo mide " + k + " más que el ancho y el perímetro es " + P + ". Si el ancho es x, ¿qué ecuación lo resuelve?", "2x + 2(x + " + k + ") = " + P, [["x + (x + " + k + ") = " + P, "El perímetro suma los cuatro lados."], ["x(x + " + k + ") = " + P, "Eso sería el área."], ["2x + " + k + " = " + P, "Faltan los dos largos completos."]], { one: 1, tag: "plantear ecuaciones", h: "Perímetro = 2 × ancho + 2 × largo." }); }, [1, 2])
    ] };

  function sys(L) { var x = R(-5, 8), y = R(-5, 8), a1, b1, a2, b2; do { a1 = nz(-5, 5); b1 = nz(-5, 5); a2 = nz(-5, 5); b2 = nz(-5, 5); if (L === 0) { a1 = 1; b1 = 1; a2 = 1; b2 = -1; } } while (a1 * b2 - a2 * b1 === 0); return { x: x, y: y, e1: lin2(a1, b1, a1 * x + b1 * y), e2: lin2(a2, b2, a2 * x + b2 * y), c: [a1, b1, a2, b2] }; }
  var t13 = { id: "sistemas-grafico", n: "Sistemas de ecuaciones 2×2: método gráfico", d: "La solución es el punto donde se cruzan las rectas.", game: "la-balanza",
    learn: [
      { h: "Dos ecuaciones, dos rectas", p: "Cada ecuación lineal con x y y es una recta. La solución del sistema es el punto donde las dos rectas se <b>cruzan</b>: cumple las dos ecuaciones.", v: plane([{ m: 1, b: 1, t: "y = x + 1" }, { m: -1, b: 5, t: "y = −x + 5" }], [[2, 3]]), k: "La solución es una pareja (x, y)." },
      { h: "Para graficar", p: "Despeja y, o busca dos puntos: da un valor a x y calcula y. Une los puntos con una recta.", v: ex("y = 2x − 1 <em>→</em> x = 0, y = −1 · x = 2, y = 3") },
      { h: "Tres casos", p: "Si se cruzan: <b>una solución</b>. Si son paralelas (misma inclinación): <b>ninguna</b>. Si son la misma recta: <b>infinitas</b>.", v: plane([{ m: .5, b: 2 }, { m: .5, b: -2, dash: 1 }]) }
    ],
    mira: [
      { q: "Resuelve gráficamente: y = 2x − 1 y y = −x + 5", v: plane([{ m: 2, b: -1, t: "y = 2x − 1" }, { m: -1, b: 5, t: "y = −x + 5" }], [[2, 3]]), steps: [["Grafica las dos rectas", "Cada una con dos puntos."], ["Busca el cruce", "Se cruzan en x = 2, y = 3."], ["Comprueba", "2(2) − 1 = 3 ✓ y −2 + 5 = 3 ✓"]], a: "(2, 3)" }
    ],
    gen: [
      G("lee", function (L) { var x = R(-4, 4), y = R(-4, 4), m1 = pick([-2, -1, 1, 2, 3]), m2 = pick([-3, -2, -1, 1, 2]); while (m2 === m1) m2 = pick([-3, -2, -1, 1, 2]);
        return FILL("¿Cuál es la solución del sistema? Lee el punto donde se cruzan las rectas.", "(x, y) = ( [[0]] , [[1]] )", [x, y], { sg: 1, v: plane([{ m: m1, b: y - m1 * x }, { m: m2, b: y - m2 * x }]), tag: "leer la solución en la gráfica", h: "Primero lee x (horizontal) y luego y (vertical) del punto de cruce.", fe: function (i) { return "Recuerda el orden: primero x (horizontal), después y (vertical)."; } }); }),
      G("casos", function () { var k = R(0, 2), m = pick([-2, -1, 1, 2, .5]), b = R(-3, 3), L2 = k === 0 ? { m: -m || 1, b: b + 2 } : k === 1 ? { m: m, b: b + pick([-4, 4]), dash: 1 } : { m: m, b: b, dash: 1 }, ans = ["Una solución", "Ninguna solución", "Infinitas soluciones"][k];
        return MC("¿Cuántas soluciones tiene el sistema que muestra la gráfica?", ans, ["Una solución", "Ninguna solución", "Infinitas soluciones"].filter(function (x) { return x !== ans; }).map(function (x) { return [x, "Se cruzan → una. Paralelas → ninguna. Encimadas → infinitas."]; }), { v: plane([{ m: m, b: b }, L2]), tag: "tipos de sistemas", h: "¿Se cruzan, son paralelas o son la misma recta?" }); }),
      G("punto", function (L) { var s = sys(1), ok = Math.random() < .5, px = ok ? s.x : s.x + 1, py = ok ? s.y : s.y;
        return TF("¿El punto <b>(" + sn(px) + ", " + sn(py) + ")</b> es solución del sistema?<br><b>" + s.e1 + "</b><br><b>" + s.e2 + "</b>", ok, { et: "Sustitúyelo: no cumple las dos ecuaciones. La solución es (" + sn(s.x) + ", " + sn(s.y) + ").", tag: "comprobar soluciones de sistemas", h: "Sustituye x y y en LAS DOS ecuaciones." }); }),
      G("tabla", function () { var m = nz(-3, 3), b = R(-4, 4), xs = [-1, 0, 2];
        return FILL("Completa la tabla de <b>y = " + pf([b, m]) + "</b> para poder graficarla.", '<table class="mt-tbl"><tr><th>x</th>' + xs.map(function (x) { return "<td>" + sn(x) + "</td>"; }).join("") + "</tr><tr><th>y</th>" + xs.map(function (_, i) { return "<td>[[" + i + "]]</td>"; }).join("") + "</tr></table>", xs.map(function (x) { return m * x + b; }), { sg: 1, tag: "tabular para graficar", h: "Sustituye cada x en la ecuación: y = " + pf([b, m]) + "." }); }, [0, 1]),
      G("cruce", function () { var x = R(-3, 3), y = R(-3, 4), m1 = pick([1, 2]), m2 = pick([-1, -2]), b1 = y - m1 * x, b2 = y - m2 * x;
        return MC("¿Dónde se cruzan <b>y = " + pf([b1, m1]) + "</b> y <b>y = " + pf([b2, m2]) + "</b>?", "(" + sn(x) + ", " + sn(y) + ")", [["(" + sn(y) + ", " + sn(x) + ")", "Invertiste el orden: primero va x."], ["(" + sn(x + 1) + ", " + sn(y) + ")", "Sustituye en las dos ecuaciones para comprobar."], ["(0, " + sn(b1) + ")", "Ese punto solo está en la primera recta."]], { v: plane([{ m: m1, b: b1 }, { m: m2, b: b2 }]), tag: "leer la solución en la gráfica", h: "Busca el punto de cruce o iguala las dos ecuaciones." }); }, [1, 2])
    ] };

  var t14 = { id: "sistemas-analiticos", n: "Sistemas de ecuaciones 2×2: métodos analíticos", d: "Suma y resta, sustitución e igualación.", game: "la-balanza",
    learn: [
      { h: "Suma y resta (eliminación)", p: "Multiplica las ecuaciones para que una letra tenga coeficientes opuestos. Al sumarlas, esa letra se elimina.", v: ex("x + y = 10<br>x − y = 4<br>sumando: 2x = 14 <em>→</em> x = 7, y = 3"), k: "Busca coeficientes iguales con signo contrario." },
      { h: "Sustitución", p: "Despeja una letra en una ecuación y sustitúyela en la otra.", v: ex("y = 2x − 1 y 3x + y = 9 <em>→</em> 3x + (2x − 1) = 9 <em>→</em> x = 2, y = 3") },
      { h: "Igualación", p: "Despeja la misma letra en las dos ecuaciones e iguala.", v: ex("y = 2x + 1 y y = −x + 7 <em>→</em> 2x + 1 = −x + 7 <em>→</em> x = 2") }
    ],
    mira: [
      { q: "Resuelve: 2x + 3y = 12 y 4x − 3y = 6", steps: [["Las y ya son opuestas", "+3y y −3y."], ["Suma", "6x = 18 → x = 3."], ["Sustituye", "2(3) + 3y = 12 → 3y = 6 → y = 2."]], a: "x = 3, y = 2" },
      { q: "Resuelve: 3x + 2y = 7 y x + y = 3", steps: [["Despeja x en la segunda", "x = 3 − y."], ["Sustituye", "3(3 − y) + 2y = 7 → 9 − y = 7 → y = 2."], ["Regresa", "x = 3 − 2 = 1."]], a: "x = 1, y = 2" }
    ],
    gen: [
      G("ambos", function (L) { var s = sys(L);
        return FILL("Resuelve el sistema.<br><b>" + s.e1 + "</b><br><b>" + s.e2 + "</b>", "x = [[0]] &nbsp;&nbsp; y = [[1]]", [s.x, s.y], { sg: 1, tag: "resolver sistemas 2×2", h: "Elimina una letra (suma y resta) o despeja y sustituye. Comprueba en las dos ecuaciones." }); }),
      G("x", function (L) { var s = sys(L), t = {}; t[s.y] = "Ese es el valor de y.";
        return NUM("Resuelve el sistema y escribe el valor de <b>x</b>.<br><b>" + s.e1 + "</b><br><b>" + s.e2 + "</b>", s.x, { sg: 1, tr: t, tag: "resolver sistemas 2×2", h: "Elimina la y: multiplica para que sus coeficientes sean opuestos y suma." }); }),
      G("elim", function () { var a1 = R(1, 5), b1 = R(2, 5), a2 = R(1, 5), b2 = R(2, 5); while (b1 === b2) b2 = R(2, 5); var x = R(-3, 6), y = R(-3, 6);
        return MC("Para eliminar la <b>y</b> en<br><b>" + lin2(a1, b1, a1 * x + b1 * y) + "</b><br><b>" + lin2(a2, -b2, a2 * x - b2 * y) + "</b><br>¿por cuánto conviene multiplicar cada ecuación?", "La primera por " + b2 + " y la segunda por " + b1, [["La primera por " + b1 + " y la segunda por " + b2, "Así los coeficientes de y no quedan iguales."], ["Las dos por " + (b1 * b2), "Así no cambia la proporción entre ellas."], ["La primera por " + a2 + " y la segunda por " + a1, "Eso elimina la x, no la y."]], { one: 1, tag: "método de eliminación", h: "Cruza los coeficientes de y: la primera ecuación por el de la segunda y viceversa." }); }, [1, 2]),
      G("sust", function () { var x = R(-4, 6), m = nz(-3, 3), b = R(-5, 5), y = m * x + b, a = nz(1, 4), c = nz(-3, 3), r = a * x + c * y;
        return MC("Si sustituyes <b>y = " + pf([b, m]) + "</b> en <b>" + lin2(a, c, r) + "</b>, ¿qué ecuación obtienes?", pf([0, a]) + " " + (c < 0 ? "−" : "+") + " " + (Math.abs(c) === 1 ? "" : Math.abs(c)) + "(" + pf([b, m]) + ") = " + sn(r), [[pf([0, a]) + " " + (c < 0 ? "−" : "+") + " " + pf([b, m]) + " = " + sn(r), "La y está multiplicada por " + c + ": el paréntesis completo se multiplica."], ["(" + pf([b, m]) + ") " + (c < 0 ? "−" : "+") + " " + Math.abs(c) + "y = " + sn(r), "Se sustituye la y, no la x."]], { one: 1, tag: "método de sustitución", h: "Cambia cada y por (" + pf([b, m]) + ") entre paréntesis." }); }, [1, 2]),
      G("orden", function () { return ORDER("Ordena los pasos del método de sustitución.", ["Despejar una letra en una ecuación", "Sustituirla en la otra ecuación", "Resolver la ecuación de una incógnita", "Encontrar la otra letra", "Comprobar en las dos ecuaciones"], { tag: "método de sustitución", h: "Despejar → sustituir → resolver → regresar → comprobar." }); }, [0])
    ] };

  var t15 = { id: "modelos-sistemas", n: "Modelos matemáticos mediante sistemas de dos ecuaciones lineales", d: "Problemas con dos incógnitas.", game: "la-balanza",
    learn: [
      { h: "Dos incógnitas, dos ecuaciones", p: "Si un problema tiene dos cantidades que no conoces, llámalas x y y, y busca dos datos para escribir dos ecuaciones.", v: ex("Boletos: adultos x, niños y<br>Total de boletos: x + y = 50<br>Dinero: 80x + 50y = 3,100"), k: "Una ecuación suele contar cosas y la otra, dinero o medidas." }
    ],
    mira: [
      { q: "En el cine se vendieron 50 boletos: de adulto a $80 y de niño a $50. Se juntaron $3,100. ¿Cuántos de cada uno?", steps: [["Plantea", "x + y = 50 · 80x + 50y = 3,100."], ["Despeja y = 50 − x y sustituye", "80x + 50(50 − x) = 3,100 → 30x = 600 → x = 20."], ["La otra", "y = 30."]], a: "20 de adulto y 30 de niño" }
    ],
    gen: [
      G("boletos", function (L) { var pa = pick([60, 70, 80, 90, 100]), pk = pick([30, 40, 50]), x = R(5, 40), y = R(5, 40);
        return FILL("Se vendieron " + (x + y) + " boletos: de adulto a $" + pa + " y de niño a $" + pk + ". Se juntaron $" + (pa * x + pk * y).toLocaleString("es-MX") + ". ¿Cuántos de cada uno?", "Adultos: [[0]] &nbsp; Niños: [[1]]", [x, y], { tag: "problemas de dos incógnitas", h: "x + y = " + (x + y) + " y " + pa + "x + " + pk + "y = " + (pa * x + pk * y) + "." }); }),
      G("plantea", function () { var pa = pick([25, 30, 35]), pb = pick([10, 12, 15]), x = R(3, 15), y = R(3, 15);
        return MC("Una tienda vende tortas a $" + pa + " y aguas a $" + pb + ". Un día vendió " + (x + y) + " productos y juntó $" + (pa * x + pb * y) + ". Si x son tortas y y aguas, ¿qué sistema lo representa?", "x + y = " + (x + y) + " · " + pa + "x + " + pb + "y = " + (pa * x + pb * y), [["x + y = " + (pa * x + pb * y) + " · " + pa + "x + " + pb + "y = " + (x + y), "Intercambiaste: la cantidad de productos va con x + y."], [pa + "x + y = " + (x + y) + " · x + " + pb + "y = " + (pa * x + pb * y), "Cada precio multiplica a su producto en la misma ecuación."], ["x − y = " + (x + y) + " · " + pa + "x − " + pb + "y = " + (pa * x + pb * y), "Se juntan los productos: es suma."]], { one: 1, tag: "plantear sistemas", h: "Una ecuación cuenta productos; la otra, dinero." }); }),
      G("sumdif", function (L) { var a = R(10, 60), b = R(5, a - 2);
        return FILL("Dos números suman " + (a + b) + " y su diferencia es " + (a - b) + ". ¿Cuáles son?", "Mayor: [[0]] &nbsp; Menor: [[1]]", [a, b], { tag: "problemas de dos incógnitas", h: "x + y = " + (a + b) + " y x − y = " + (a - b) + ". Suma las ecuaciones." }); }),
      G("monedas", function () { var x = R(3, 20), y = R(3, 20);
        return NUM("En una alcancía hay " + (x + y) + " monedas de $5 y de $10, que suman $" + (5 * x + 10 * y) + ". ¿Cuántas monedas de <b>$10</b> hay?", y, { tr: (function () { var o = {}; o[x] = "Esas son las de $5."; return o; })(), tag: "problemas de dos incógnitas", h: "x + y = " + (x + y) + " y 5x + 10y = " + (5 * x + 10 * y) + "." }); }, [1, 2]),
      G("rect", function () { var w = R(3, 15), l = w + R(2, 10);
        return FILL("El perímetro de un rectángulo es " + 2 * (w + l) + " cm y el largo mide " + (l - w) + " cm más que el ancho. ¿Cuánto mide cada lado?", "Largo: [[0]] cm &nbsp; Ancho: [[1]] cm", [l, w], { tag: "problemas de dos incógnitas", h: "2l + 2a = " + 2 * (w + l) + " y l = a + " + (l - w) + "." }); }, [2])
    ] };

  /* =====================================================================
     UNIDAD 4 · ECUACIONES CUADRÁTICAS
     ===================================================================== */
  function quadR(L) { var a = L === 2 && Math.random() < .5 ? R(2, 3) : 1, r1 = R(-9, 9), r2 = R(-9, 9); if (r1 === r2 && L < 2) r2 = r1 + R(1, 4); var p = psc(pmul([-r1, 1], [-r2, 1]), a); return { a: a, r: [r1, r2], p: p, s: pf(p) + " = 0" }; }
  var t16 = { id: "cuadraticas-factorizacion", n: "Ecuaciones cuadráticas: resolución por factorización", d: "Si un producto es cero, uno de los factores es cero.", game: "la-boveda",
    learn: [
      { h: "Forma general", p: "Una ecuación cuadrática tiene x² y se escribe ax² + bx + c = 0. Puede tener dos, una o ninguna solución real.", v: ex("x² − 5x + 6 = 0"), k: "Siempre iguala a cero antes de factorizar." },
      { h: "Producto cero", p: "Si A · B = 0, entonces A = 0 o B = 0. Factoriza y luego iguala cada factor a cero.", v: ex("(x − 2)(x − 3) = 0 <em>→</em> x = " + hl("2") + " o x = " + hl("3")), k: "Ojo con el signo: (x + 4) = 0 da x = −4." },
      { h: "Incompletas", p: "ax² + bx = 0 → saca factor común x. ax² + c = 0 → despeja x² y saca raíz (dos soluciones: ±).", v: ex("x² − 7x = 0 <em>→</em> x(x − 7) = 0 <em>→</em> x = 0, x = 7<br>x² − 49 = 0 <em>→</em> x = ±7") }
    ],
    mira: [
      { q: "Resuelve x² + 2x − 15 = 0", steps: [["Factoriza", "Dos números: producto −15, suma 2 → 5 y −3: (x + 5)(x − 3) = 0."], ["Iguala a cero", "x + 5 = 0 → x = −5 · x − 3 = 0 → x = 3."]], a: "x = −5 y x = 3" },
      { q: "Resuelve x² = 4x + 12", steps: [["Iguala a cero", "x² − 4x − 12 = 0."], ["Factoriza", "(x − 6)(x + 2) = 0."], ["Soluciones", "x = 6 y x = −2."]], a: "x = 6 y x = −2" }
    ],
    gen: [
      G("sols", function (L) { var q = quadR(L === 2 ? 1 : L);
        return FILL("Resuelve: <b>" + q.s + "</b>", "x₁ = [[0]] &nbsp;&nbsp; x₂ = [[1]]", [q.r[0], q.r[1]], { sg: 1, unord: 1, tag: "resolver cuadráticas factorizando", h: "Factoriza (x − ?)(x − ?) = 0 y despeja cada factor. Cuidado: el signo cambia.", fe: "Al igualar (x + n) = 0, la solución es −n." }); }),
      G("signo", function () { var a = nz(-9, 9), b = nz(-9, 9);
        return MC("Resuelve: <b>(" + bin(1, a) + ")(" + bin(1, b) + ") = 0</b>", "x = " + sn(-a) + " y x = " + sn(-b), [["x = " + sn(a) + " y x = " + sn(b), "Al despejar, el número cambia de signo: x " + (a < 0 ? "−" : "+") + " " + Math.abs(a) + " = 0 → x = " + sn(-a) + "."], ["x = " + sn(a * b), "Iguala cada factor a cero por separado."], ["x = " + sn(-a - b), ""]], { one: 1, tag: "producto cero", h: "Iguala cada paréntesis a cero y despeja x." }); }, [0, 1]),
      G("incomp", function (L) { var k = R(1, 12), t = pick(["dif", "fc"]);
        if (t === "dif") return FILL("Resuelve: <b>x² − " + k * k + " = 0</b>", "x₁ = [[0]] &nbsp;&nbsp; x₂ = [[1]]", [k, -k], { sg: 1, unord: 1, tag: "cuadráticas incompletas", h: "Despeja x² = " + k * k + " y saca raíz: hay una positiva y una negativa." });
        return FILL("Resuelve: <b>x² " + (k > 6 ? "− " + k : "+ " + k) + "x = 0</b>", "x₁ = [[0]] &nbsp;&nbsp; x₂ = [[1]]", [0, k > 6 ? k : -k], { sg: 1, unord: 1, tag: "cuadráticas incompletas", h: "Saca factor común x: x(x " + (k > 6 ? "− " : "+ ") + k + ") = 0. Una solución siempre es 0." }); }),
      G("tf", function (L) { var q = quadR(1), ok = Math.random() < .5, v = ok ? q.r[0] : q.r[0] + pick([-1, 1]);
        return TF("¿x = " + sn(v) + " es solución de <b>" + q.s + "</b>?", ok || v === q.r[1], { et: "Sustituye: no da 0. Las soluciones son " + sn(q.r[0]) + " y " + sn(q.r[1]) + ".", tag: "comprobar soluciones", h: "Sustituye x y revisa si el resultado es 0." }); }),
      G("igual0", function () { var r1 = R(-6, 8), r2 = R(-6, 8); while (r2 === r1) r2 = R(-6, 8); var b = -(r1 + r2), c = r1 * r2;
        return FILL("Resuelve: <b>x² = " + pf([-c, -b]) + "</b>", "x₁ = [[0]] &nbsp;&nbsp; x₂ = [[1]]", [r1, r2], { sg: 1, unord: 1, tag: "igualar a cero", h: "Primero pasa todo al lado izquierdo: x² " + (b < 0 ? "− " + -b : "+ " + b) + "x " + (c < 0 ? "− " + -c : "+ " + c) + " = 0." }); }, [1, 2]),
      G("ax2", function () { var q = quadR(2); q.a = 2; var p = psc(pmul([-q.r[0], 1], [-q.r[1], 1]), 2);
        return FILL("Resuelve: <b>" + pf(p) + " = 0</b>", "x₁ = [[0]] &nbsp;&nbsp; x₂ = [[1]]", [q.r[0], q.r[1]], { sg: 1, unord: 1, tag: "cuadráticas con a ≠ 1", h: "Primero saca factor común 2 (o divide todo entre 2) y luego factoriza." }); }, [2])
    ] };

  var t17 = { id: "formula-general", n: "Ecuaciones cuadráticas: la fórmula general", d: "Resolver cualquier cuadrática con a, b y c.", game: "la-boveda",
    learn: [
      { h: "La fórmula", p: "Para ax² + bx + c = 0:", v: ex("x = " + fr("−b ± √(b² − 4ac)", "2a")), k: "Identifica a, b y c con su signo antes de sustituir." },
      { h: "El discriminante", p: "Lo de adentro de la raíz, <b>Δ = b² − 4ac</b>, dice cuántas soluciones hay: Δ > 0 dos · Δ = 0 una · Δ < 0 ninguna real.", v: parab(1, -2, -3, [-1, 3]), k: "Las soluciones son donde la parábola cruza el eje x." }
    ],
    mira: [
      { q: "Resuelve 2x² − 7x + 3 = 0", steps: [["Identifica", "a = 2, b = −7, c = 3."], ["Discriminante", "(−7)² − 4(2)(3) = 49 − 24 = 25."], ["Sustituye", "x = (7 ± 5) / 4."], ["Dos soluciones", "x = 12/4 = 3 · x = 2/4 = 1/2."]], a: "x = 3 y x = 1/2" },
      { q: "¿Cuántas soluciones tiene x² + 4x + 5 = 0?", steps: [["Δ", "4² − 4(1)(5) = 16 − 20 = −4."], ["Interpreta", "Δ < 0: la raíz de un negativo no es real."]], a: "Ninguna solución real" }
    ],
    gen: [
      G("abc", function (L) { var a = nz(-5, 5), b = R(-9, 9), c = R(-9, 9);
        return FILL("Identifica los coeficientes de <b>" + pf([c, b, a]) + " = 0</b>", "a = [[0]] &nbsp; b = [[1]] &nbsp; c = [[2]]", [a, b, c], { sg: 1, tag: "identificar a, b y c", h: "a acompaña a x², b a x y c es el número solo. Si falta un término, vale 0. ¡Con su signo!" }); }, [0, 1]),
      G("disc", function (L) { var a = nz(-4, 4), b = R(-9, 9), c = R(-9, 9), t = {}; t[b * b + 4 * a * c] = "Cuida el signo: es b² MENOS 4ac."; t[-b * b - 4 * a * c] = "b² siempre es positivo, aunque b sea negativo.";
        return NUM("Calcula el discriminante de <b>" + pf([c, b, a]) + " = 0</b><br>Δ = b² − 4ac =", b * b - 4 * a * c, { sg: 1, tr: t, tag: "el discriminante", h: "Sustituye con paréntesis: (" + sn(b) + ")² − 4(" + sn(a) + ")(" + sn(c) + ")." }); }),
      G("cuantas", function () { var k = R(0, 2), a = 1, b, c; if (k === 0) { var r1 = R(-5, 5), r2 = r1 + R(1, 5); b = -(r1 + r2); c = r1 * r2; } else if (k === 1) { var r = R(-5, 5); b = -2 * r; c = r * r; } else { b = R(-4, 4); c = Math.floor(b * b / 4) + R(1, 6); } var ans = ["Dos soluciones", "Una solución", "Ninguna solución real"][k];
        return MC("¿Cuántas soluciones reales tiene <b>" + pf([c, b, a]) + " = 0</b>?", ans, ["Dos soluciones", "Una solución", "Ninguna solución real"].filter(function (x) { return x !== ans; }).map(function (x) { return [x, "Calcula Δ = b² − 4ac: positivo dos, cero una, negativo ninguna."]; }), { tag: "interpretar el discriminante", h: "Calcula Δ = b² − 4ac y fíjate en su signo." }); }),
      G("sols", function (L) { var q = quadR(L === 2 ? 2 : 1);
        return FILL("Resuelve con la fórmula general: <b>" + q.s + "</b>", "x₁ = [[0]] &nbsp;&nbsp; x₂ = [[1]]", [q.r[0], q.r[1]], { sg: 1, unord: 1, tag: "usar la fórmula general", h: "a = " + q.p[2] + ", b = " + q.p[1] + ", c = " + q.p[0] + ". Δ = " + (q.p[1] * q.p[1] - 4 * q.p[2] * q.p[0]) + "." }); }),
      G("frac", function () { var p = pick([[2, 1, 1], [2, -1, 3], [3, 1, 2], [2, 3, -1], [3, -2, 1]]), a = p[0], s1 = p[1], r = p[2], poly = pmul([-s1, a], [-r, 1]);
        return MC("Resuelve: <b>" + pf(poly) + " = 0</b>", "x = " + sn(r) + " y x = " + (s1 < 0 ? "−" : "") + Math.abs(s1) + "/" + a, [["x = " + sn(-r) + " y x = " + (s1 < 0 ? "" : "−") + Math.abs(s1) + "/" + a, "Revisa el −b de la fórmula."], ["x = " + sn(r) + " y x = " + sn(s1), "El denominador es 2a = " + 2 * a + "."], ["x = " + sn(2 * r) + " y x = " + sn(s1), ""]], { one: 1, tag: "usar la fórmula general", h: "Usa la fórmula con a = " + poly[2] + ", b = " + poly[1] + ", c = " + poly[0] + "." }); }, [2]),
      G("graf", function () { var r1 = R(-5, 2), r2 = r1 + R(2, 5);
        return FILL("La gráfica es de una ecuación cuadrática. ¿Cuáles son sus soluciones?", "x₁ = [[0]] &nbsp;&nbsp; x₂ = [[1]]", [r1, r2], { sg: 1, unord: 1, v: parab(.5, -.5 * (r1 + r2), .5 * r1 * r2, [r1, r2]), tag: "soluciones en la gráfica", h: "Las soluciones son los puntos donde la parábola cruza el eje x." }); }, [0, 1])
    ] };

  var t18 = { id: "modelos-cuadraticos", n: "Modelos matemáticos mediante ecuaciones cuadráticas", d: "Problemas de áreas, números y movimiento.", game: "la-boveda",
    learn: [
      { h: "Cuándo aparece una cuadrática", p: "Cuando multiplicas la incógnita por sí misma: áreas (x por algo con x), productos de números, caída de objetos.", v: ex("Un rectángulo mide x de ancho y x + 3 de largo; su área es 40 <em>→</em> x(x + 3) = 40"), k: "Si una solución no tiene sentido (una medida negativa), se descarta." }
    ],
    mira: [
      { q: "El largo de un rectángulo mide 3 cm más que el ancho y su área es 40 cm². ¿Cuánto mide el ancho?", steps: [["Plantea", "x(x + 3) = 40 → x² + 3x − 40 = 0."], ["Factoriza", "(x + 8)(x − 5) = 0 → x = −8 o x = 5."], ["Descarta", "Una medida no puede ser negativa."]], a: "5 cm" },
      { q: "El producto de dos números consecutivos es 132. ¿Cuáles son (positivos)?", steps: [["Plantea", "x(x + 1) = 132 → x² + x − 132 = 0."], ["Factoriza", "(x + 12)(x − 11) = 0."]], a: "11 y 12" }
    ],
    gen: [
      G("rect", function (L) { var w = R(3, 15), k = R(1, 8), t = {}; t[w + k] = "Ese es el largo. La pregunta es el ancho."; t[-(w + k)] = "Una medida no puede ser negativa.";
        return NUM("El largo de un rectángulo mide " + k + " cm más que el ancho y su área es " + w * (w + k) + " cm². ¿Cuánto mide el ancho?", w, { unit: "cm", tr: t, tag: "problemas de área", h: "x(x + " + k + ") = " + w * (w + k) + " → iguala a cero y factoriza." }); }),
      G("consec", function () { var x = R(4, 20), par = Math.random() < .5, s = par ? 2 : 1, x2 = par ? 2 * x : x;
        return NUM("El producto de dos números " + (par ? "pares " : "") + "consecutivos positivos es " + x2 * (x2 + s) + ". ¿Cuál es el <b>menor</b>?", x2, { tag: "problemas de números", h: "x(x + " + s + ") = " + x2 * (x2 + s) + "." }); }),
      G("plantea", function () { var w = R(3, 12), k = R(2, 6), A = w * (w + k);
        return MC("Un terreno rectangular mide " + k + " m más de largo que de ancho y tiene " + A + " m² de área. Si x es el ancho, ¿qué ecuación lo resuelve?", "x² + " + k + "x − " + A + " = 0", [["2x + 2(x + " + k + ") = " + A, "Eso es el perímetro, no el área."], ["x² + " + k + " = " + A, "x(x + " + k + ") = x² + " + k + "x: multiplica a los dos términos."], ["x² − " + k + "x − " + A + " = 0", "Revisa el signo del término en x."]], { one: 1, tag: "plantear cuadráticas", h: "Área = ancho × largo = x(x + " + k + ")." }); }),
      G("cuadrado", function () { var s = R(4, 15), k = R(1, 4), t = {}; t[s + k] = "Ese es el lado nuevo. La pregunta es el original.";
        return NUM("Si al lado de un cuadrado se le aumentan " + k + " m, su área queda en " + (s + k) * (s + k) + " m². ¿Cuánto medía el lado original?", s, { unit: "m", tr: t, tag: "problemas de área", h: "(x + " + k + ")² = " + (s + k) * (s + k) + ". Saca raíz: x + " + k + " = " + (s + k) + "." }); }, [1, 2]),
      G("pelota", function () { var v = pick([10, 15, 20, 25, 30]), T = v * 2 / 10;
        return NUM("Una pelota se lanza hacia arriba y su altura es <b>h = " + v + "t − 5t²</b> (metros, segundos). ¿En cuántos segundos vuelve al suelo?", T, { unit: "s", tr: { 0: "En t = 0 apenas sale. Busca la otra solución." }, tag: "problemas de movimiento", h: "En el suelo h = 0: " + v + "t − 5t² = 0 → t(" + v + " − 5t) = 0." }); }, [2]),
      G("descarta", function () { var w = R(3, 12), k = R(2, 6);
        return MC("Al resolver un problema de área obtuviste <b>x = " + w + "</b> y <b>x = −" + (w + k) + "</b>. Si x es el ancho de un terreno, ¿cuál es la respuesta?", w + " m", [["−" + (w + k) + " m", "Una medida no puede ser negativa."], ["Las dos", "Una de ellas no tiene sentido en el problema."]], { tag: "interpretar soluciones", h: "Las medidas siempre son positivas." }); }, [0, 1])
    ] };

  M.add(10, {
    book: "Álgebra en Movimiento · Desarrollo del pensamiento algebraico",
    games: GAMES,
    units: [
      { n: "Operaciones con polinomios", topics: [t1, t2, t3, t4] },
      { n: "Multiplicación y factorización de polinomios", topics: [t5, t6, t7, t8, t9, t10] },
      { n: "Ecuaciones lineales en una y dos variables", topics: [t11, t12, t13, t14, t15] },
      { n: "Ecuaciones cuadráticas", topics: [t16, t17, t18] }
    ]
  });
})();
