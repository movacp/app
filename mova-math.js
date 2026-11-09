/* MOVA Math · Fase 1
   Math Level Up adaptativo, Mi mapa matemático, Mi ruta, Aprende por habilidad y práctica con Comprueba.
   Archivo propio de matemáticas: no modifica ningún otro archivo de la app. */
(function () {
  "use strict";
  if (window.__movaMath) return; window.__movaMath = 1;

  /* ---------- Utilidades ---------- */
  var R = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); };
  var pick = function (a) { return a[Math.floor(Math.random() * a.length)]; };
  var shuf = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  var gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; };
  var lcm = function (a, b) { return Math.abs(a * b) / gcd(a, b); };
  var rnd = function (x, d) { var p = Math.pow(10, d == null ? 6 : d); return Math.round(x * p) / p; };
  var sn = function (n) { return n < 0 ? "\u2212" + Math.abs(n) : String(n); };
  var pn = function (n) { return n < 0 ? "(\u2212" + Math.abs(n) + ")" : String(n); };
  var dec = function (n) { return String(rnd(n, 4)); };
  var fr = function (n, d) { return '<span class="mm-fr"><span>' + n + "</span><span>" + d + "</span></span>"; };
  var money = function (n) { return "$" + n.toLocaleString("es-MX"); };
  var NAMES = ["Ana", "Luis", "Sofía", "Diego", "Valeria", "Mateo", "Camila", "Emilio", "Regina", "Santiago", "Paula", "Iker"];
  var nm = function () { return pick(NAMES); };
  function term(c, v, first) { if (c === 0) return ""; var s = c < 0 ? (first ? "\u2212" : " \u2212 ") : (first ? "" : " + "); var a = Math.abs(c); return s + (v ? (a === 1 ? "" : a) + v : a); }
  function lin(a, b) { return (term(a, "x", true) + term(b, "", !a)) || "0"; }
  function quad(a, b, c) { var s = term(a, "x\u00b2", true); s += term(b, "x", !s); s += term(c, "", !s); return s || "0"; }

  /* ---------- Constructores de preguntas ---------- */
  function MC(q, ok, wr, h, x) {
    var seen = {}; var o = [{ h: String(ok), ok: true }]; seen[String(ok)] = 1;
    wr.forEach(function (w) { var k = String(w[0]); if (!seen[k]) { seen[k] = 1; o.push({ h: k, e: w[1] || "" }); } });
    return Object.assign({ t: "mc", q: q, o: shuf(o.slice(0, 4)), h: h }, x || {});
  }
  function NUM(q, a, h, tr, x) { tr = tr || {}; delete tr[String(a)]; return Object.assign({ t: "num", q: q, a: a, h: h, tr: tr || {} }, x || {}); }
  function FRAC(q, n, d, h, tr, x) { tr = tr || {}; delete tr[n + "/" + d]; return Object.assign({ t: "frac", q: q, a: [n, d], h: h, tr: tr || {} }, x || {}); }

  /* ---------- Visuales (SVG) ---------- */
  var INK = "#15192B", C1 = "#C7B5FF", C2 = "#FF8FC0", C3 = "#D3F36B", C4 = "#93A6FF", C5 = "#FFE58A";
  function svg(w, h, body) { return '<svg class="mm-vis" viewBox="0 0 ' + w + " " + h + '" role="img" aria-hidden="true">' + body + "</svg>"; }
  function poly(n) { var p = []; for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; p.push((80 + 54 * Math.cos(a)).toFixed(1) + "," + (70 + 54 * Math.sin(a)).toFixed(1)); } return svg(160, 140, '<polygon points="' + p.join(" ") + '" fill="' + pick([C1, C2, C3, C4]) + '" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>'); }
  function bar(d, n, col) { var w = 280 / d, s = ""; for (var i = 0; i < d; i++) s += '<rect x="' + (10 + i * w) + '" y="10" width="' + w + '" height="50" fill="' + (i < n ? (col || C2) : "#fff") + '" stroke="' + INK + '" stroke-width="3"/>'; return svg(300, 70, s); }
  function grid(cols, rows, w, h) { var s = "", u = 26; for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) s += '<rect x="' + (6 + x * u) + '" y="' + (6 + y * u) + '" width="' + u + '" height="' + u + '" fill="' + (x < w && y < h ? C3 : "#fff") + '" stroke="#B9B6C9" stroke-width="1.5"/>'; return svg(cols * u + 12, rows * u + 12, s); }
  function dots(r, c) { var s = ""; for (var y = 0; y < r; y++) for (var x = 0; x < c; x++) s += '<circle cx="' + (22 + x * 34) + '" cy="' + (22 + y * 34) + '" r="12" fill="' + C1 + '" stroke="' + INK + '" stroke-width="2.5"/>'; return svg(c * 34 + 10, r * 34 + 10, s); }
  function clock(hh, mm) { var s = '<circle cx="80" cy="80" r="70" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'; for (var i = 1; i <= 12; i++) { var a = (i * 30 - 90) * Math.PI / 180; s += '<text x="' + (80 + 54 * Math.cos(a)).toFixed(1) + '" y="' + (86 + 54 * Math.sin(a)).toFixed(1) + '" text-anchor="middle" font-size="15" font-weight="800" fill="' + INK + '" font-family="Plus Jakarta Sans,sans-serif">' + i + "</text>"; }
    var ha = ((hh % 12) * 30 + mm / 2 - 90) * Math.PI / 180, ma = (mm * 6 - 90) * Math.PI / 180;
    s += '<line x1="80" y1="80" x2="' + (80 + 34 * Math.cos(ha)).toFixed(1) + '" y2="' + (80 + 34 * Math.sin(ha)).toFixed(1) + '" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/>';
    s += '<line x1="80" y1="80" x2="' + (80 + 52 * Math.cos(ma)).toFixed(1) + '" y2="' + (80 + 52 * Math.sin(ma)).toFixed(1) + '" stroke="' + C2 + '" stroke-width="4.5" stroke-linecap="round"/><circle cx="80" cy="80" r="6" fill="' + INK + '"/>';
    return svg(160, 160, s); }
  function lengths(L) { var s = ""; L.forEach(function (l, i) { s += '<text x="8" y="' + (34 + i * 40) + '" font-size="18" font-weight="800" fill="' + INK + '" font-family="Plus Jakarta Sans,sans-serif">' + "ABC"[i] + '</text><rect x="34" y="' + (16 + i * 40) + '" width="' + l + '" height="24" rx="12" fill="' + [C1, C2, C3][i] + '" stroke="' + INK + '" stroke-width="3"/>'; }); return svg(300, 130, s); }
  function picto(rows) { var s = ""; rows.forEach(function (r, i) { s += '<text x="4" y="' + (30 + i * 38) + '" font-size="15" font-weight="700" fill="' + INK + '" font-family="Plus Jakarta Sans,sans-serif">' + r[0] + "</text>"; for (var k = 0; k < r[1]; k++) s += '<circle cx="' + (110 + k * 26) + '" cy="' + (25 + i * 38) + '" r="10" fill="' + r[2] + '" stroke="' + INK + '" stroke-width="2"/>'; }); return svg(330, rows.length * 38 + 10, s); }
  function cart(px, py) { var s = "", u = 24; for (var i = 0; i <= 8; i++) { s += '<line x1="' + (24 + i * u) + '" y1="8" x2="' + (24 + i * u) + '" y2="200" stroke="#E4E0F0"/><line x1="24" y1="' + (200 - i * u) + '" x2="216" y2="' + (200 - i * u) + '" stroke="#E4E0F0"/>'; if (i) s += '<text x="' + (24 + i * u) + '" y="216" font-size="11" text-anchor="middle" fill="#6A6F85">' + i + '</text><text x="14" y="' + (204 - i * u) + '" font-size="11" text-anchor="middle" fill="#6A6F85">' + i + "</text>"; }
    s += '<line x1="24" y1="200" x2="220" y2="200" stroke="' + INK + '" stroke-width="2.5"/><line x1="24" y1="200" x2="24" y2="4" stroke="' + INK + '" stroke-width="2.5"/><circle cx="' + (24 + px * u) + '" cy="' + (200 - py * u) + '" r="8" fill="' + C2 + '" stroke="' + INK + '" stroke-width="2.5"/>';
    return svg(230, 224, s); }
  function rect(a, b, la, lb) { return svg(260, 150, '<rect x="40" y="20" width="180" height="100" rx="4" fill="' + C1 + '" stroke="' + INK + '" stroke-width="4"/><text x="130" y="142" text-anchor="middle" font-size="17" font-weight="800" fill="' + INK + '" font-family="Plus Jakarta Sans,sans-serif">' + (la || a) + '</text><text x="26" y="76" text-anchor="middle" font-size="17" font-weight="800" fill="' + INK + '" font-family="Plus Jakarta Sans,sans-serif">' + (lb || b) + "</text>"); }
  function tri(a, b, c) { return svg(260, 170, '<polygon points="40,140 220,140 40,30" fill="' + C3 + '" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/><rect x="40" y="124" width="16" height="16" fill="none" stroke="' + INK + '" stroke-width="2.5"/><text x="130" y="164" text-anchor="middle" font-size="17" font-weight="800" fill="' + INK + '" font-family="Plus Jakarta Sans,sans-serif">' + a + '</text><text x="22" y="90" text-anchor="middle" font-size="17" font-weight="800" fill="' + INK + '" font-family="Plus Jakarta Sans,sans-serif">' + b + '</text><text x="146" y="78" text-anchor="middle" font-size="17" font-weight="800" fill="' + INK + '" font-family="Plus Jakarta Sans,sans-serif">' + c + "</text>"); }
  function table(head, rows) { return '<table class="mm-tbl"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" + rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>"; }

  /* ---------- Ejes ---------- */
  var EJES = {
    N: { n: "Números y operaciones", c: "#FFE58A", g: "123" },
    F: { n: "Fracciones y decimales", c: "#FFB8DC", g: fr(1, 2) },
    E: { n: "Enteros y leyes de los signos", c: "#C7B5FF", g: "\u00b1" },
    J: { n: "Jerarquía de operaciones", c: "#D3F36B", g: "( )" },
    P: { n: "Proporcionalidad y porcentajes", c: "#93A6FF", g: "%" },
    A: { n: "Álgebra", c: "#BDF0D8", g: "x\u00b2" },
    G: { n: "Geometría y medición", c: "#FFB8DC", g: "\u25b3" },
    D: { n: "Datos y probabilidad", c: "#FFE58A", g: "\u25a5" }
  };
  var GRADES = [null,
    { n: "1° de primaria", s: "kids" }, { n: "2° de primaria", s: "kids" }, { n: "3° de primaria", s: "children" }, { n: "4° de primaria", s: "children" },
    { n: "5° de primaria", s: "children" }, { n: "6° de primaria", s: "children" }, { n: "1° de secundaria", s: "teens" }, { n: "2° de secundaria", s: "teens" },
    { n: "3° de secundaria", s: "teens" }, { n: "1er semestre de prepa", s: "teens" }];
  var STAGE = { kids: "MOVA Kids", children: "MOVA Children", teens: "MOVA Teens" };
  var DAYS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
  var MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  /* ---------- Mapa de habilidades (programa SEP 2022 + UANL) ----------
     g: grado (1–6 primaria, 7–9 secundaria, 10 prepa) · t: se ve al inicio del ciclo · p: prerrequisitos · w: problema razonado */
  var SK = [];
  function S(id, e, g, n, o, gen) { SK.push(Object.assign({ id: id, e: e, g: g, n: n, p: [], gen: gen }, o || {})); }

  /* ===== 1° de primaria ===== */
  S("n1a", "N", 1, "Contar y ordenar números hasta 100", { t: 1 }, function () {
    var x = R(11, 98); return pick([
      NUM("¿Qué número va <b>después</b> del " + x + "?", x + 1, "Después significa que cuentas uno más.", (function (o) { o[x - 1] = "Confundiste antes con después: después es el número que sigue."; return o; })({})),
      NUM("¿Qué número va <b>antes</b> del " + x + "?", x - 1, "Antes significa que cuentas uno menos.", (function (o) { o[x + 1] = "Confundiste antes con después: antes es el número anterior."; return o; })({}))]);
  });
  S("n1b", "N", 1, "Sumas hasta dos cifras", { t: 1 }, function () {
    var a = R(1, 8) * 10 + R(0, 5), b = R(1, 9 - (a % 10)); if (b < 1) b = 1;
    return NUM(a + " + " + b + " = ?", a + b, "Suma primero las unidades y después escribe las decenas.");
  });
  S("n1c", "N", 1, "Restas hasta dos cifras", { t: 1 }, function () {
    var a = R(2, 9) * 10 + R(4, 9), b = R(1, a % 10); var t = {}; t[a + b] = "Sumaste en lugar de restar.";
    return NUM(a + " \u2212 " + b + " = ?", a - b, "Restar es quitar: empieza en " + a + " y cuenta hacia atrás.", t);
  });
  S("n1d", "N", 1, "Problemas de agregar y quitar", { w: 1, p: ["n1b", "n1c"] }, function () {
    var a = R(6, 15), b = R(2, 9), n = nm(), add = Math.random() < .5, t = {};
    if (add) { t[a - b] = "La palabra «le regalan» significa que tiene más: es una suma."; return NUM(n + " tiene " + a + " canicas y le regalan " + b + " más. ¿Cuántas canicas tiene ahora?", a + b, "Si recibe más, el total aumenta.", t, { w: 1 }); }
    t[a + b] = "Si pierde canicas, le quedan menos: es una resta."; return NUM(n + " tiene " + a + " canicas y pierde " + b + ". ¿Cuántas le quedan?", a - b, "Si pierde, el total disminuye.", t, { w: 1 });
  });
  S("g1a", "G", 1, "Figuras: lados y vértices", { t: 1 }, function () {
    var k = pick([3, 4, 5, 6]); return NUM("¿Cuántos lados tiene esta figura?", k, "Cuenta cada lado poniendo tu dedo en una esquina y recorriendo la figura.", {}, { v: poly(k) });
  });
  S("g1b", "G", 1, "Comparar longitudes", {}, function () {
    var L = shuf([90, 170, 250]), big = Math.random() < .5, idx = L.indexOf(big ? 250 : 90);
    return MC("¿Cuál barra es la más " + (big ? "larga" : "corta") + "?", "ABC"[idx], ["A", "B", "C"].filter(function (x, i) { return i !== idx; }).map(function (x) { return [x, ""]; }), "Compara dónde termina cada barra: todas empiezan en el mismo lugar.", { v: lengths(L) });
  });
  S("g1c", "G", 1, "Los días de la semana", {}, function () {
    var i = R(0, 6); return MC("¿Qué día va después del <b>" + DAYS[i] + "</b>?", DAYS[(i + 1) % 7], [[DAYS[(i + 6) % 7], "Ese es el día anterior."], [DAYS[(i + 2) % 7], ""], [DAYS[(i + 3) % 7], ""]], "Recita los días en orden: lunes, martes, miércoles…");
  });
  S("d1a", "D", 1, "Leer pictogramas", {}, function () {
    var r = shuf([["Manzanas", R(2, 7), C2], ["Peras", R(2, 7), C3], ["Uvas", R(2, 7), C1]]); var k = R(0, 2);
    return NUM("¿Cuántas <b>" + r[k][0].toLowerCase() + "</b> hay?", r[k][1], "Cada círculo vale 1. Cuenta los de esa fila.", {}, { v: picto(r) });
  });

  /* ===== 2° de primaria ===== */
  S("n2a", "N", 2, "Valor posicional hasta 1000", { t: 1, p: ["n1a"] }, function () {
    var c = R(1, 9), d = R(0, 9), u = R(1, 9), t = {}; if (u !== c) t[u * 100 + d * 10 + c] = "Invertiste el orden: primero van las centenas, luego decenas y al final unidades.";
    return NUM("¿Qué número es <b>" + c + " centenas, " + d + " decenas y " + u + " unidades</b>?", c * 100 + d * 10 + u, "Escribe las centenas, después las decenas y al final las unidades.", t);
  });
  S("n2b", "N", 2, "Comparar números", { t: 1, p: ["n2a"] }, function () {
    var a = R(100, 999), b = Math.random() < .2 ? a : a + pick([-1, 1]) * R(1, 90); var ok = a > b ? ">" : a < b ? "<" : "=";
    return MC("Elige el signo correcto: <b>" + a + " ___ " + b + "</b>", ok, [">", "<", "="].filter(function (x) { return x !== ok; }).map(function (x) { return [x, "Revisa primero las centenas, después las decenas."]; }), "El signo siempre «abre la boca» hacia el número mayor.");
  });
  S("n2c", "N", 2, "Sumas con transformación", { t: 1, p: ["n1b"] }, function () {
    var au = R(2, 9), a = R(1, 6) * 10 + au, b = R(1, 2) * 10 + R(10 - au, 9); var t = {}; t[a + b - 10] = "Olvidaste llevar la decena que se forma al sumar las unidades.";
    return NUM(a + " + " + b + " = ?", a + b, "Si las unidades suman 10 o más, esa decena se lleva a la columna de las decenas.", t);
  });
  S("n2d", "N", 2, "Restas de hasta tres cifras", { p: ["n1c"] }, function () {
    var a = R(120, 980), b = R(11, 99); var su = String(a).split("").map(Number), sb = String(b).padStart(3, "0").split("").map(Number);
    var wrong = Number(su.map(function (x, i) { return Math.abs(x - sb[i]); }).join("")); var t = {}; if (wrong !== a - b) t[wrong] = "Restaste el número menor del mayor en cada columna. Cuando arriba hay menos, hay que pedir prestado.";
    return NUM(a + " \u2212 " + b + " = ?", a - b, "Si en una columna el número de arriba es menor, pide prestada una decena a la columna de la izquierda.", t);
  });
  S("n2e", "N", 2, "Multiplicación como suma repetida", { p: ["n2c"] }, function () {
    var r = R(2, 5), c = R(2, 6), t = {}; t[r + c] = "Sumaste filas y columnas. Para el total se multiplica: filas × columnas.";
    return NUM("Hay " + r + " filas con " + c + " círculos cada una. ¿Cuántos círculos hay en total?", r * c, "Suma " + c + " tantas veces como filas haya, o multiplica " + r + " × " + c + ".", t, { v: dots(r, c) });
  });
  S("n2f", "N", 2, "Repartos en partes iguales", {}, function () {
    var d = R(2, 9), q = R(2, 9), t = {}; t[d * q - d] = "Restaste. Repartir en partes iguales es dividir.";
    return NUM("Reparte " + d * q + " dulces entre " + d + " niños en partes iguales. ¿Cuántos le tocan a cada uno?", q, "Piensa: ¿qué número multiplicado por " + d + " da " + d * q + "?", t, { w: 1 });
  });
  S("n2g", "N", 2, "Problemas de suma y resta", { w: 1, p: ["n2c", "n2d"] }, function () {
    var a = R(40, 90), b = R(12, a - 5), A = nm(), B = nm(); while (B === A) B = nm(); var t = {}; t[a + b] = "La pregunta «¿cuántas más?» compara dos cantidades: es una resta.";
    return NUM(A + " tiene " + a + " estampas y " + B + " tiene " + b + ". ¿Cuántas estampas más tiene " + A + "?", a - b, "Para saber cuántas más, resta la cantidad menor a la mayor.", t, { w: 1 });
  });
  S("g2a", "G", 2, "Polígonos por número de lados", { p: ["g1a"] }, function () {
    var P = [[3, "Triángulo"], [4, "Cuadrilátero"], [5, "Pentágono"], [6, "Hexágono"], [8, "Octágono"]], k = pick(P);
    return MC("¿Cómo se llama esta figura?", k[1], P.filter(function (x) { return x !== k; }).map(function (x) { return [x[1], ""]; }), "Cuenta los lados: tri = 3, cuadri = 4, penta = 5, hexa = 6, octa = 8.", { v: poly(k[0]) });
  });
  S("g2b", "G", 2, "Los meses del año", { t: 1, p: ["g1c"] }, function () {
    var i = R(0, 11); return MC("¿Qué mes va después de <b>" + MONTHS[i] + "</b>?", MONTHS[(i + 1) % 12], [[MONTHS[(i + 11) % 12], "Ese es el mes anterior."], [MONTHS[(i + 2) % 12], ""], [MONTHS[(i + 6) % 12], ""]], "Recita los meses en orden desde enero.");
  });
  S("d2a", "D", 2, "Leer tablas de datos", { p: ["d1a"] }, function () {
    var s = shuf(["Futbol", "Natación", "Basquetbol", "Tenis"]).slice(0, 3), a = R(12, 20), b = R(3, a - 2), c = R(5, 18), v = [a, b, c];
    var t = {}; t[a + b] = "Sumaste los votos. «¿Cuántos más?» se resuelve con una resta.";
    return NUM("¿Cuántos votos más tuvo <b>" + s[0] + "</b> que <b>" + s[1] + "</b>?", a - b, "Busca los dos números en la tabla y réstalos.", t, { v: table(["Deporte", "Votos"], s.map(function (x, i) { return [x, v[i]]; })) });
  });

  /* ===== 3° de primaria ===== */
  S("n3a", "N", 3, "Números de cuatro cifras", { t: 1, p: ["n2a"] }, function () {
    var x = R(1000, 9999), s = String(x), i = R(0, 3), dgt = Number(s[i]); if (!dgt) { x += Math.pow(10, 3 - i); s = String(x); dgt = Number(s[i]); }
    var val = dgt * Math.pow(10, 3 - i), t = {}; if (val !== dgt) t[dgt] = "Ese es el dígito, pero su valor depende del lugar donde está.";
    return NUM("¿Qué <b>valor</b> tiene el " + dgt + " en el número <b>" + x.toLocaleString("es-MX") + "</b>?", val, "Unidades valen 1, decenas 10, centenas 100 y millares 1,000.", t);
  });
  S("n3b", "N", 3, "Sumas y restas de tres cifras", { t: 1, p: ["n2c", "n2d"] }, function () {
    var a = R(300, 899), b = R(120, 299); if (Math.random() < .5) { var t = {}; t[a + b - 10] = "Olvidaste llevar al pasar de una columna a otra."; return NUM(a + " + " + b + " = ?", a + b, "Suma columna por columna, empezando por las unidades.", t); }
    return NUM(a + " \u2212 " + b + " = ?", a - b, "Resta columna por columna; si arriba hay menos, pide prestado.");
  });
  S("n3c", "N", 3, "Tablas de multiplicar", { t: 1, p: ["n2e"] }, function () {
    var a = R(2, 9), b = R(2, 9), t = {}; t[a + b] = "Sumaste en lugar de multiplicar.";
    return NUM(a + " \u00d7 " + b + " = ?", a * b, "Multiplicar es sumar " + a + " veces el " + b + ".", t);
  });
  S("n3d", "N", 3, "Multiplicaciones de dos cifras por una", { p: ["n3c"] }, function () {
    var a = R(12, 49), b = R(3, 9), t = {}; t[(a % 10) * b + Math.floor(a / 10)] = "Multiplicaste solo las unidades. También hay que multiplicar las decenas.";
    return NUM(a + " \u00d7 " + b + " = ?", a * b, "Separa: " + Math.floor(a / 10) * 10 + " × " + b + " y " + (a % 10) + " × " + b + ", y suma los resultados.", t);
  });
  S("n3e", "N", 3, "Divisiones exactas", { p: ["n3c", "n2f"] }, function () {
    var b = R(2, 9), q = R(3, 12); return NUM(b * q + " \u00f7 " + b + " = ?", q, "¿Qué número multiplicado por " + b + " da " + b * q + "?");
  });
  S("n3f", "N", 3, "Problemas de multiplicación y división", { w: 1, p: ["n3c"] }, function () {
    var c = R(3, 9), k = R(4, 12), t = {}; t[c + k] = "Sumaste. Si cada caja tiene lo mismo, se multiplica.";
    return NUM("Hay " + c + " cajas y cada una tiene " + k + " lápices. ¿Cuántos lápices hay en total?", c * k, "Grupos iguales: número de cajas × lápices por caja.", t, { w: 1 });
  });
  S("f3a", "F", 3, "Medios, cuartos y octavos", { t: 1 }, function () {
    var d = pick([2, 4, 8]), n = R(1, d - 1), t = {}; t[n + "/" + (d - n)] = "Comparaste partes coloreadas con partes sin colorear. El denominador es el total de partes.";
    return FRAC("¿Qué fracción de la barra está coloreada?", n, d, "Abajo va el total de partes iguales y arriba las partes coloreadas.", t, { v: bar(d, n) });
  });
  S("f3b", "F", 3, "Comparar fracciones", { p: ["f3a"] }, function () {
    if (Math.random() < .5) { var d = pick([4, 5, 6, 8]), a = R(1, d - 1), b = R(1, d - 1); while (b === a) b = R(1, d - 1); var ok = a > b ? ">" : "<";
      return MC("Elige el signo: " + fr(a, d) + " ___ " + fr(b, d), ok, [[ok === ">" ? "<" : ">", "Con el mismo denominador, es mayor la que tiene más partes."], ["=", ""]], "Si el denominador es igual, compara los numeradores."); }
    var n = R(1, 3), x = pick([3, 4, 5]), y = x + R(2, 4), ok2 = ">";
    return MC("Elige el signo: " + fr(n, x) + " ___ " + fr(n, y), ok2, [["<", "Pensaste que un denominador más grande es más. Si el entero se parte en más pedazos, cada pedazo es más chico."], ["=", ""]], "Imagina una pizza partida en " + x + " y otra en " + y + ": ¿cuál pedazo es más grande?");
  });
  S("g3a", "G", 3, "Perímetro", { t: 1 }, function () {
    var a = R(4, 15), b = R(2, 9), t = {}; t[a * b] = "Multiplicaste los lados: eso es el área. El perímetro es la suma del contorno."; t[a + b] = "Sumaste solo dos lados. El rectángulo tiene cuatro.";
    return NUM("¿Cuál es el perímetro de este rectángulo? (en cm)", 2 * (a + b), "Perímetro = la suma de los cuatro lados.", t, { v: rect(a, b, a + " cm", b + " cm") });
  });
  S("g3b", "G", 3, "Área con cuadrícula", { p: ["n3c"] }, function () {
    var w = R(2, 6), h = R(2, 4), t = {}; t[2 * (w + h)] = "Contaste el contorno (perímetro). El área son los cuadritos de adentro.";
    return NUM("Cada cuadrito mide 1 cm². ¿Cuál es el área de la parte verde?", w * h, "Cuenta los cuadritos verdes o multiplica largo × ancho.", t, { v: grid(8, 5, w, h) });
  });
  S("g3c", "G", 3, "Leer el reloj", {}, function () {
    var h = R(1, 12), m = pick([0, 15, 30, 45]), f = function (H, M) { return H + ":" + String(M).padStart(2, "0"); };
    return MC("¿Qué hora marca el reloj?", f(h, m), [[f(m === 0 ? 12 : m / 5, h * 5 % 60), "Confundiste las manecillas: la corta marca la hora y la larga los minutos."], [f(h % 12 + 1, m), ""], [f(h, (m + 30) % 60), ""]], "La manecilla corta marca la hora; la larga, los minutos (cada número vale 5).", { v: clock(h, m) });
  });

  /* ===== 4° de primaria ===== */
  S("n4a", "N", 4, "Números de cinco cifras", { t: 1, p: ["n3a"] }, function () {
    var dm = R(1, 9), m = 0, c = R(1, 9), d = R(1, 9), u = R(0, 9), t = {}; t[Number("" + dm + c + d + u)] = "Faltó el cero de los millares: cada lugar necesita su dígito.";
    return NUM("Escribe el número: <b>" + dm + " decenas de millar, " + m + " millares, " + c + " centenas, " + d + " decenas y " + u + " unidades</b>", dm * 10000 + c * 100 + d * 10 + u, "Si un lugar no tiene nada, se escribe 0.", t);
  });
  S("n4b", "N", 4, "Multiplicaciones de tres por dos cifras", { t: 1, p: ["n3d"] }, function () {
    var a = R(102, 499), b = R(12, 39), t = {}; t[a * (b % 10) + a * Math.floor(b / 10)] = "No recorriste el segundo producto parcial: al multiplicar por las decenas, el resultado se escribe un lugar a la izquierda.";
    return NUM(a + " \u00d7 " + b + " = ?", a * b, "Multiplica por las unidades, luego por las decenas (deja un lugar) y suma.", t);
  });
  S("n4c", "N", 4, "División con residuo", { p: ["n3e"] }, function () {
    var b = R(3, 9), q = R(4, 15), r = R(1, b - 1), a = b * q + r, t = {};
    if (Math.random() < .5) { t[r] = "Ese es el residuo. El cociente es cuántas veces cabe el divisor."; return NUM("En la división " + a + " \u00f7 " + b + ", ¿cuál es el <b>cociente</b>?", q, "¿Cuántas veces cabe " + b + " en " + a + " sin pasarse?", t); }
    t[q] = "Ese es el cociente. El residuo es lo que sobra."; return NUM("En la división " + a + " \u00f7 " + b + ", ¿cuál es el <b>residuo</b>?", r, "Multiplica " + q + " × " + b + " y resta ese resultado a " + a + ".", t);
  });
  S("n4d", "N", 4, "Problemas de dos pasos", { w: 1, p: ["n3f", "n3b"] }, function () {
    var p = R(12, 35), k = R(2, 5), m = R(100, 300), n = nm(), t = {}; t[p * k] = "Resolviste solo el primer paso. Falta calcular el cambio."; t[m - p] = "Restaste el precio de un solo artículo; compró varios.";
    if (m < p * k) m = p * k + R(10, 80);
    return NUM(n + " compra " + k + " libretas de " + money(p) + " cada una y paga con " + money(m) + ". ¿Cuánto le dan de cambio?", m - p * k, "Primero calcula cuánto gastó; después réstalo de lo que pagó.", t, { w: 1 });
  });
  S("f4a", "F", 4, "Tercios, quintos, sextos y décimos", { t: 1, p: ["f3a"] }, function () {
    var d = pick([3, 5, 6, 10]), n = R(1, d - 1); return FRAC("¿Qué fracción de la barra está coloreada?", n, d, "Cuenta el total de partes iguales (denominador) y las coloreadas (numerador).", {}, { v: bar(d, n, C1) });
  });
  S("f4b", "F", 4, "Suma y resta de fracciones con diferente denominador", { p: ["f3b", "f4a"] }, function () {
    var a = pick([2, 3, 4, 5]), k = pick([2, 3]), b = a * k, n1 = R(1, a - 1), n2 = R(1, b - 2), N = n1 * k + n2, t = {}; t[(n1 + n2) + "/" + (a + b)] = "Sumaste numeradores y denominadores. Primero hay que convertir a un mismo denominador.";
    return FRAC(fr(n1, a) + " + " + fr(n2, b) + " = ?", N, b, "Convierte " + fr(n1, a) + " a " + b + "avos multiplicando arriba y abajo por " + k + ".", t);
  });
  S("f4c", "F", 4, "Decimales hasta centésimos", { p: ["n3a"] }, function () {
    var e = R(1, 9), c = R(11, 99), w = ["", "un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"][e];
    return MC("¿Cómo se escribe <b>" + w + " enteros y " + c + " centésimos</b>?", e + "." + c, [[e + ".0" + c, "Los centésimos ocupan dos lugares después del punto."], [String(e) + c, "Faltó el punto decimal que separa los enteros."], [e + "." + c + "0", ""]], "Los décimos van en el primer lugar después del punto y los centésimos en el segundo.");
  });
  S("f4d", "F", 4, "Suma y resta de decimales", { p: ["f4c"] }, function () {
    var a = R(11, 89) / 10, b = R(101, 499) / 100, t = {}; t[rnd((a * 10 + b * 100) / 100, 4)] = "No alineaste el punto decimal: hay que acomodar enteros con enteros y décimos con décimos.";
    return NUM(dec(a) + " + " + dec(b) + " = ?", rnd(a + b, 2), "Acomoda los números con el punto decimal en la misma columna.", t);
  });
  S("g4a", "G", 4, "Clasificación de cuadriláteros", { p: ["g2a"] }, function () {
    var Q = [["Cuadrado", "4 lados iguales y 4 ángulos rectos"], ["Rectángulo", "lados opuestos iguales y 4 ángulos rectos, pero no todos sus lados iguales"], ["Rombo", "4 lados iguales, pero sin ángulos rectos"], ["Trapecio", "solo un par de lados paralelos"]], k = pick(Q);
    return MC("¿Qué cuadrilátero tiene <b>" + k[1] + "</b>?", k[0], Q.filter(function (x) { return x !== k; }).map(function (x) { return [x[0], ""]; }), "Fíjate en dos cosas: si sus lados son iguales y si tiene ángulos rectos.");
  });
  S("g4b", "G", 4, "Equivalencias de tiempo", {}, function () {
    var h = R(1, 5), m = R(5, 55), t = {}; t[h * 100 + m] = "Una hora tiene 60 minutos, no 100.";
    return NUM("¿Cuántos minutos hay en <b>" + h + " horas y " + m + " minutos</b>?", h * 60 + m, "Multiplica las horas por 60 y suma los minutos.", t);
  });
  S("d4a", "D", 4, "La moda", { p: ["d2a"] }, function () {
    var m = R(2, 9), L = [m, m, m]; while (L.length < 7) { var x = R(1, 9); if (x !== m && L.filter(function (y) { return y === x; }).length < 2) L.push(x); }
    return NUM("¿Cuál es la <b>moda</b> de estos datos? " + shuf(L).join(", "), m, "La moda es el dato que más se repite.");
  });

  /* ===== 5° de primaria ===== */
  S("n5a", "N", 5, "División con cociente decimal", { t: 1, p: ["n4c"] }, function () {
    var b = pick([2, 4, 5, 8]), a = R(3, 20); while (a % b === 0) a++; var t = {}; t[Math.floor(a / b)] = "Ignoraste el residuo: se puede seguir dividiendo agregando punto decimal y ceros.";
    return NUM("Reparte " + a + " litros de agua en " + b + " jarras iguales. ¿Cuántos litros lleva cada jarra?", rnd(a / b, 3), "Cuando sobra, pon punto decimal en el cociente, agrega un cero y sigue dividiendo.", t, { w: 1 });
  });
  S("f5a", "F", 5, "Fracciones equivalentes y simplificación", { t: 1, p: ["f4a"] }, function () {
    var b = pick([3, 4, 5, 7, 9]), a = R(1, b - 1); while (gcd(a, b) > 1) a = R(1, b - 1); var k = pick([2, 3, 4, 5]);
    return FRAC("Simplifica a su mínima expresión: " + fr(a * k, b * k), a, b, "Divide el numerador y el denominador entre el mismo número, hasta que ya no se pueda.", {}, { exact: 1 });
  });
  S("f5b", "F", 5, "De fracción a decimal", { p: ["f4c"] }, function () {
    var P = [[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 8], [3, 10], [7, 10]], k = pick(P), t = {}; t[Number(k[0] + "." + k[1])] = "Escribiste numerador y denominador separados por un punto. Una fracción es una división.";
    return NUM("Escribe " + fr(k[0], k[1]) + " como número decimal.", rnd(k[0] / k[1], 4), "Divide el numerador entre el denominador: " + k[0] + " ÷ " + k[1] + ".", t);
  });
  S("f5c", "F", 5, "Fracción por un número natural", { p: ["f5a"] }, function () {
    var d = pick([3, 4, 5, 6, 8]), n = R(1, d - 1), k = R(2, 5), t = {}; t[(n * k) + "/" + (d * k)] = "Multiplicaste también el denominador. Solo se multiplica el numerador por el número natural.";
    return FRAC(fr(n, d) + " \u00d7 " + k + " = ?", n * k, d, "Multiplica solo el numerador: el tamaño de las partes no cambia.", t);
  });
  S("f5d", "F", 5, "Decimal por un número natural", { p: ["f4d"] }, function () {
    var a = R(11, 95) / 10, k = R(2, 9), t = {}; t[rnd(a * k * 10, 2)] = "Olvidaste el punto decimal en el resultado.";
    return NUM(dec(a) + " \u00d7 " + k + " = ?", rnd(a * k, 2), "Multiplica como si no hubiera punto y al final recorre el punto un lugar.", t);
  });
  S("p5a", "P", 5, "Valor faltante y valor unitario", { w: 1, p: ["n3c"] }, function () {
    var u = R(8, 25), a = R(2, 5), b = R(6, 12), n = nm(), t = {}; t[u * a + (b - a)] = "Sumaste la diferencia de artículos. Primero encuentra cuánto cuesta uno.";
    return NUM("Si " + a + " cuadernos cuestan " + money(u * a) + ", ¿cuánto cuestan " + b + " cuadernos?", u * b, "Calcula el precio de 1 cuaderno y multiplícalo por " + b + ".", t, { w: 1 });
  });
  S("p5b", "P", 5, "Porcentajes de 50%, 25%, 20% y 10%", { p: ["f5b"] }, function () {
    var P = [[50, 2], [25, 4], [20, 5], [10, 10]], k = pick(P), base = k[1] * R(4, 30), t = {}; t[base - k[0]] = "Restaste el porcentaje como si fuera una cantidad.";
    return NUM("¿Cuánto es el <b>" + k[0] + "%</b> de " + base + "?", base / k[1], k[0] + "% es lo mismo que " + fr(1, k[1]) + ": divide entre " + k[1] + ".", t);
  });
  S("g5a", "G", 5, "Área de triángulos y romboides", { p: ["g3b"] }, function () {
    var b = 2 * R(3, 9), h = R(3, 12), t = {}; t[b * h] = "Olvidaste dividir entre 2: el triángulo es la mitad de un rectángulo.";
    return NUM("Un triángulo tiene base de " + b + " cm y altura de " + h + " cm. ¿Cuál es su área en cm²?", b * h / 2, "Área del triángulo = base × altura ÷ 2.", t);
  });
  S("g5b", "G", 5, "Radio y diámetro", {}, function () {
    var r = R(3, 25), t = {}; if (Math.random() < .5) { t[r / 2] = "Dividiste. El diámetro es el doble del radio."; return NUM("Un círculo tiene radio de " + r + " cm. ¿Cuánto mide su diámetro?", 2 * r, "El diámetro atraviesa todo el círculo: mide dos radios.", t); }
    t[4 * r] = "Multiplicaste. El radio es la mitad del diámetro."; return NUM("Un círculo tiene diámetro de " + 2 * r + " cm. ¿Cuánto mide su radio?", r, "El radio va del centro a la orilla: es la mitad del diámetro.", t);
  });
  S("d5a", "D", 5, "Situaciones de azar", { t: 1 }, function () {
    var S2 = [["Sacar una canica roja de una bolsa que solo tiene canicas azules", "Imposible"], ["Que mañana salga el sol", "Seguro"], ["Sacar un número par al lanzar un dado", "Probable"]], k = pick(S2);
    return MC("¿Cómo es este evento? <b>" + k[0] + "</b>", k[1], ["Seguro", "Probable", "Imposible"].filter(function (x) { return x !== k[1]; }).map(function (x) { return [x, ""]; }), "Seguro: siempre pasa. Imposible: nunca pasa. Probable: puede pasar o no.");
  });

  /* ===== 6° de primaria ===== */
  S("n6a", "N", 6, "Múltiplos, divisores, MCM y MCD", { t: 1, p: ["n3c"] }, function () {
    var a = pick([4, 6, 8, 9, 10, 12, 15]), b = pick([6, 8, 9, 12, 14, 15, 18, 20]); while (b === a) b = pick([6, 8, 9, 12, 14, 15, 18, 20]);
    if (Math.random() < .5) { var t = {}; t[a * b] = "Multiplicaste los números. El mínimo común múltiplo es el menor múltiplo que comparten."; return NUM("¿Cuál es el <b>mínimo común múltiplo</b> de " + a + " y " + b + "?", lcm(a, b), "Escribe los múltiplos de cada número y busca el primero que se repite.", t); }
    return NUM("¿Cuál es el <b>máximo común divisor</b> de " + a + " y " + b + "?", gcd(a, b), "Escribe los divisores de cada número y elige el mayor que comparten.");
  });
  S("j6a", "J", 6, "Jerarquía de operaciones básica", { t: 1, p: ["n3c"] }, function () {
    var a = R(2, 15), b = R(2, 9), c = R(2, 9), t = {}; t[(a + b) * c] = "Resolviste de izquierda a derecha. Primero se resuelven multiplicaciones y divisiones.";
    return NUM(a + " + " + b + " \u00d7 " + c + " = ?", a + b * c, "Primero multiplica, después suma.", t);
  });
  S("f6a", "F", 6, "División de decimales entre naturales", { p: ["n5a", "f5d"] }, function () {
    var k = R(2, 8), q = R(11, 99) / 10, t = {}; t[rnd(q * 10, 2)] = "Olvidaste subir el punto decimal al cociente.";
    return NUM(dec(rnd(q * k, 2)) + " \u00f7 " + k + " = ?", q, "Divide normal y sube el punto decimal al cociente en el mismo lugar.", t);
  });
  S("f6b", "F", 6, "Multiplicación de fracciones", { t: 1, p: ["f5a", "f5c"] }, function () {
    var a = R(1, 4), b = R(a + 1, 7), c = R(1, 4), d = R(c + 1, 7), N = a * c, D = b * d, g = gcd(N, D), t = {}; t[(a * d) + "/" + (b * c)] = "Multiplicaste en cruz: eso es para dividir. Para multiplicar, se multiplica numerador por numerador y denominador por denominador.";
    return FRAC(fr(a, b) + " \u00d7 " + fr(c, d) + " = ?", N / g, D / g, "Multiplica numeradores entre sí y denominadores entre sí; luego simplifica.", t);
  });
  S("f6c", "F", 6, "División de fracciones", { p: ["f6b"] }, function () {
    var a = R(1, 5), b = R(2, 7), c = R(1, 5), d = R(2, 7), N = a * d, D = b * c, g = gcd(N, D), t = {}; t[(a * c) + "/" + (b * d)] = "Multiplicaste directo. Para dividir, multiplica por la fracción invertida.";
    return FRAC(fr(a, b) + " \u00f7 " + fr(c, d) + " = ?", N / g, D / g, "Invierte la segunda fracción y multiplica (o multiplica en cruz).", t);
  });
  S("p6a", "P", 6, "Tanto por ciento de una cantidad", { t: 1, p: ["p5b"] }, function () {
    var p = pick([5, 15, 30, 35, 40, 60, 75]), base = 20 * R(3, 30), t = {}; t[base - p] = "Restaste el porcentaje como si fuera una cantidad."; t[base * p] = "Multiplicaste sin dividir entre 100.";
    return NUM("¿Cuánto es el <b>" + p + "%</b> de " + base + "?", rnd(base * p / 100, 2), "Calcula el 1% (divide entre 100) y multiplícalo por " + p + ".", t);
  });
  S("p6b", "P", 6, "Qué porcentaje representa una cantidad", { p: ["p6a"] }, function () {
    var total = pick([20, 25, 40, 50, 80, 200]), p = pick([10, 20, 25, 40, 60, 75]), part = total * p / 100, t = {}; t[part] = "Esa es la cantidad, no el porcentaje.";
    return NUM("En un grupo de " + total + " alumnos, " + part + " usan lentes. ¿Qué porcentaje del grupo usa lentes?", p, "Divide la parte entre el total y multiplica por 100.", t, { w: 1 });
  });
  S("g6a", "G", 6, "Circunferencia y π", { p: ["g5b"] }, function () {
    var d = R(2, 20), t = {}; t[rnd(3.14 * d / 2, 2)] = "Usaste el radio. La fórmula de la circunferencia con diámetro es π × d.";
    return NUM("Un círculo tiene diámetro de " + d + " cm. ¿Cuánto mide su circunferencia? Usa π = 3.14.", rnd(3.14 * d, 2), "Circunferencia = π × diámetro.", t, { tol: .02 });
  });
  S("g6b", "G", 6, "Plano cartesiano", {}, function () {
    var x = R(1, 7), y = R(1, 7); while (y === x) y = R(1, 7);
    return MC("¿Cuáles son las coordenadas del punto rosa?", "(" + x + ", " + y + ")", [["(" + y + ", " + x + ")", "Invertiste las coordenadas: primero va x (horizontal) y después y (vertical)."], ["(" + x + ", " + (y + 1) + ")", ""], ["(" + (x - 1 || x + 1) + ", " + y + ")", ""]], "Primero avanza a la derecha (x) y después sube (y).", { v: cart(x, y) });
  });
  S("g6c", "G", 6, "Volumen de prismas con cubos", { p: ["g3b"] }, function () {
    var l = R(2, 6), w = R(2, 5), h = R(2, 5), t = {}; t[l * w] = "Calculaste solo la base. Falta multiplicar por la altura.";
    return NUM("Una caja se llena con cubos de 1 cm³: caben " + l + " de largo, " + w + " de ancho y " + h + " de alto. ¿Cuál es su volumen en cm³?", l * w * h, "Volumen = largo × ancho × alto.", t);
  });
  S("d6a", "D", 6, "Media aritmética y rango", { p: ["d4a"] }, function () {
    var m = R(5, 12), d = [R(1, 4), R(1, 4)], L = shuf([m - d[0], m + d[0], m - d[1], m + d[1], m]);
    if (Math.random() < .5) return NUM("¿Cuál es la <b>media</b> (promedio) de: " + L.join(", ") + "?", m, "Suma todos los datos y divide entre cuántos son.");
    var mx = Math.max.apply(null, L), mn = Math.min.apply(null, L), t = {}; t[mx] = "Ese es el dato mayor. El rango es la diferencia entre el mayor y el menor.";
    return NUM("¿Cuál es el <b>rango</b> de: " + L.join(", ") + "?", mx - mn, "Rango = dato mayor − dato menor.", t);
  });
  S("d6b", "D", 6, "Resultados posibles y diagramas de árbol", {}, function () {
    var a = R(2, 5), b = R(2, 5), t = {}; t[a + b] = "Sumaste. Cada playera se combina con cada pantalón: se multiplica.";
    return NUM("Tienes " + a + " playeras y " + b + " pantalones. ¿Cuántas combinaciones distintas puedes formar?", a * b, "Haz un diagrama de árbol: de cada playera salen " + b + " ramas.", t, { w: 1 });
  });

  /* ===== 1° de secundaria ===== */
  S("f7a", "F", 7, "Conversión entre fracciones y decimales", { t: 1, p: ["f5b", "f5a"] }, function () {
    var P = [[3, 4], [2, 5], [7, 8], [3, 20], [5, 8], [9, 25], [1, 8]], k = pick(P);
    if (Math.random() < .5) return FRAC("Escribe <b>" + dec(k[0] / k[1]) + "</b> como fracción en su mínima expresión.", k[0], k[1], "Escribe el decimal sobre 10, 100 o 1000 según sus cifras decimales y simplifica.", {}, { exact: 1 });
    var t = {}; t[Number(k[0] + "." + k[1])] = "Una fracción no se escribe juntando numerador y denominador: es una división.";
    return NUM("Escribe " + fr(k[0], k[1]) + " como número decimal.", rnd(k[0] / k[1], 4), "Divide " + k[0] + " ÷ " + k[1] + ".", t);
  });
  S("e7a", "E", 7, "Comparar y ordenar números con signo", { t: 1 }, function () {
    var a = R(2, 9), b = R(a + 1, 15);
    return MC("¿Cuál número es <b>mayor</b>?", sn(-a), [[sn(-b), "Entre negativos, es mayor el que está más cerca del cero. −" + b + " está más lejos."], ["Son iguales", ""]], "En la recta numérica, mayor es el que está más a la derecha.");
  });
  S("e7b", "E", 7, "Suma y resta con números con signo", { t: 1, p: ["e7a"] }, function () {
    var a = R(-15, 15) || 3, b = R(-15, 15) || -4, op = Math.random() < .5 ? "+" : "\u2212", res = op === "+" ? a + b : a - b, t = {};
    if (res !== 0) t[-res] = "Revisa el signo del resultado: queda del signo del número con mayor valor absoluto.";
    if (op === "\u2212" && b < 0) t[a + b] = "Restar un negativo es sumar: − (−" + Math.abs(b) + ") = +" + Math.abs(b) + ".";
    return NUM(pn(a) + " " + op + " " + pn(b) + " = ?", res, "Usa la recta numérica: sumar es avanzar a la derecha; restar un negativo también es avanzar.", t);
  });
  S("e7c", "E", 7, "Multiplicación y división con signo", { t: 1, p: ["e7b", "n3c"] }, function () {
    var a = R(2, 9) * pick([-1, 1]), b = R(2, 9) * pick([-1, 1]); if (a > 0 && b > 0) a = -a; var t = {};
    if (Math.random() < .5) { if (a < 0 && b < 0) t[-a * b] = "Aplicaste la regla de la suma (gana el signo del mayor). Al multiplicar, menos por menos da más."; else t[-a * b] = "Revisa el signo: signos diferentes dan negativo.";
      return NUM(pn(a) + " \u00d7 " + pn(b) + " = ?", a * b, "Signos iguales dan positivo; signos diferentes dan negativo.", t); }
    var p = a * b; t[-b] = "Revisa el signo del cociente: signos iguales dan positivo, diferentes dan negativo.";
    return NUM(pn(p) + " \u00f7 " + pn(a) + " = ?", b, "La regla de los signos es la misma que en la multiplicación.", t);
  });
  S("j7a", "J", 7, "Jerarquía de operaciones con signos de agrupación", { p: ["j6a", "e7c"] }, function () {
    var a = R(10, 30), b = R(2, 5), c = R(1, 6), d = R(1, 6), res = a - b * (c + d), t = {}; t[(a - b) * (c + d)] = "Resolviste de izquierda a derecha. El orden es: paréntesis, potencias, multiplicaciones y divisiones, sumas y restas.";
    t[a - b * c + d] = "Ignoraste el paréntesis: lo que está dentro se resuelve primero.";
    return NUM(a + " \u2212 " + b + " \u00d7 (" + c + " + " + d + ") = ?", res, "Primero el paréntesis, después la multiplicación y al final la resta.", t);
  });
  S("a7a", "A", 7, "Del lenguaje común al algebraico", { t: 1 }, function () {
    var k = R(2, 9), Q = pick([
      ["El doble de un número aumentado en " + k, "2x + " + k, [["2(x + " + k + ")", "Eso sería el doble de la suma completa."], ["x\u00b2 + " + k, "El doble es multiplicar por 2, no elevar al cuadrado."], ["2 + x + " + k, ""]]],
      ["El triple de un número disminuido en " + k, "3x \u2212 " + k, [["3(x \u2212 " + k + ")", "Eso sería el triple de la diferencia completa."], ["x\u00b3 \u2212 " + k, "El triple es multiplicar por 3, no elevar al cubo."], [k + " \u2212 3x", ""]]],
      ["La mitad de un número más " + k, "x/2 + " + k, [["(x + " + k + ")/2", "Eso sería la mitad de la suma completa."], ["2x + " + k, "La mitad es dividir entre 2."], ["x \u2212 " + k + "/2", ""]]]]);
    return MC("¿Qué expresión representa: <b>" + Q[0] + "</b>?", Q[1], Q[2], "Traduce por partes: primero lo que le pasa al número y luego lo que se agrega o se quita.");
  });
  S("a7b", "A", 7, "Ecuaciones de la forma Ax + B = C", { t: 1, p: ["e7b", "a7a"] }, function () {
    var a = R(2, 9), x = R(-6, 12), b = R(-15, 15) || 5, c = a * x + b, t = {}; if ((c + b) % a === 0) t[(c + b) / a] = "Al pasar el término al otro lado no cambiaste su signo.";
    return NUM("Resuelve: <b>" + lin(a, b) + " = " + sn(c) + "</b>. ¿Cuánto vale x?", x, "Lo que se hace de un lado de la igualdad se hace del otro: primero quita " + sn(b) + " y después divide entre " + a + ".", t);
  });
  S("a7c", "A", 7, "Ecuaciones con incógnita en ambos lados", { p: ["a7b"] }, function () {
    var a = R(4, 9), c = R(1, a - 1), x = R(-5, 10), b = R(-12, 12), d = (a - c) * x + b, t = {}; if ((d - b) % (a + c) === 0 && (d - b) / (a + c) !== x) t[(d - b) / (a + c)] = "Al pasar " + c + "x al otro lado no cambiaste su signo.";
    return NUM("Resuelve: <b>" + lin(a, b) + " = " + lin(c, d) + "</b>. ¿Cuánto vale x?", x, "Junta las x de un lado y los números del otro, cambiando el signo de lo que pasa.", t);
  });
  S("a7d", "A", 7, "Problemas que se resuelven con una ecuación", { w: 1, p: ["a7b"] }, function () {
    var x = R(4, 20), k = R(2, 4), b = R(3, 15), n = nm(), t = {}; t[k * x + b] = "Ese es el dato del problema; la pregunta es el número original.";
    return NUM("Si al " + (k === 2 ? "doble" : k === 3 ? "triple" : "cuádruple") + " de la edad de " + n + " le sumas " + b + ", obtienes " + (k * x + b) + ". ¿Qué edad tiene " + n + "?", x, "Plantea la ecuación: " + k + "x + " + b + " = " + (k * x + b) + ".", t, { w: 1 });
  });
  S("p7a", "P", 7, "Porcentajes en situaciones cotidianas", { t: 1, w: 1, p: ["p6a"] }, function () {
    var pr = 50 * R(4, 20), p = pick([10, 15, 20, 25, 30, 40]), off = pr * p / 100, t = {}; t[off] = "Calculaste el descuento, pero no lo restaste del precio.";
    return NUM("Una playera cuesta " + money(pr) + " y tiene " + p + "% de descuento. ¿Cuánto pagas?", pr - off, "Calcula el " + p + "% del precio y réstalo.", t, { w: 1 });
  });
  S("p7b", "P", 7, "Proporcionalidad directa", { p: ["p5a"] }, function () {
    var k = R(2, 9), a = R(2, 5), b = R(6, 12), t = {}; t[k * a + (b - a)] = "Sumaste la diferencia. En la proporcionalidad directa se multiplica por la misma constante.";
    return NUM("En una tabla de proporcionalidad directa, cuando x = " + a + ", y = " + k * a + ". ¿Cuánto vale y cuando x = " + b + "?", k * b, "Encuentra la constante: y ÷ x. Después multiplícala por " + b + ".", t, { v: table(["x", "y"], [[a, k * a], [b, "?"]]) });
  });
  S("g7a", "G", 7, "Ángulos entre rectas", { t: 1 }, function () {
    var a = R(20, 160); if (Math.random() < .5) { var t = {}; if (a < 90) t[90 - a] = "Confundiste suplementarios con complementarios: los suplementarios suman 180°.";
      return NUM("Dos ángulos son <b>suplementarios</b>. Si uno mide " + a + "°, ¿cuánto mide el otro?", 180 - a, "Los ángulos suplementarios suman 180°.", t); }
    return NUM("Dos rectas se cruzan y uno de los ángulos mide " + a + "°. ¿Cuánto mide el ángulo <b>opuesto por el vértice</b>?", a, "Los ángulos opuestos por el vértice miden lo mismo.");
  });
  S("g7b", "G", 7, "Área de polígonos y del círculo", { p: ["g6a", "g5a"] }, function () {
    var r = R(2, 10), t = {}; t[rnd(2 * 3.14 * r, 2)] = "Calculaste la circunferencia (2πr). El área es π × r².";
    return NUM("¿Cuál es el área de un círculo de radio " + r + " cm? Usa π = 3.14.", rnd(3.14 * r * r, 2), "Área del círculo = π × r × r.", t, { tol: .05 });
  });
  S("d7a", "D", 7, "Media, mediana y moda", { p: ["d6a"] }, function () {
    var L = [R(1, 5), R(4, 8), R(6, 10), R(9, 14), R(13, 20)].sort(function (a, b) { return a - b; }), med = L[2], mean = L.reduce(function (s, x) { return s + x; }, 0) / 5, t = {}; if (mean !== med) t[rnd(mean, 2)] = "Calculaste la media. La mediana es el dato de en medio cuando están ordenados.";
    return NUM("¿Cuál es la <b>mediana</b> de: " + shuf(L).join(", ") + "?", med, "Ordena los datos de menor a mayor y elige el de en medio.", t);
  });
  S("d7b", "D", 7, "Probabilidad clásica", { p: ["d6b"] }, function () {
    var r = R(2, 6), a = R(2, 6), v = R(1, 4), T = r + a + v, g = gcd(r, T), t = {}; t[r + "/" + (a + v)] = "Comparaste rojas contra las demás. La probabilidad es casos favorables entre casos totales.";
    return FRAC("En una bolsa hay " + r + " canicas rojas, " + a + " azules y " + v + " verdes. ¿Cuál es la probabilidad de sacar una <b>roja</b>?", r / g, T / g, "Probabilidad = casos favorables ÷ casos totales.", t);
  });

  /* ===== 2° de secundaria ===== */
  S("n8a", "N", 8, "Problemas con MCM y MCD", { t: 1, w: 1, p: ["n6a"] }, function () {
    var a = pick([6, 8, 10, 12, 15]), b = pick([9, 12, 18, 20, 25]); while (a === b) b = pick([9, 12, 18, 20, 25]); var t = {}; t[a * b] = "Multiplicaste los tiempos; el primer encuentro es el mínimo común múltiplo.";
    return NUM("Un camión sale cada " + a + " minutos y otro cada " + b + " minutos. Si salieron juntos, ¿en cuántos minutos vuelven a salir juntos?", lcm(a, b), "Busca el mínimo común múltiplo de " + a + " y " + b + ".", t, { w: 1 });
  });
  S("n8b", "N", 8, "Potencias y raíz cuadrada", { t: 1, p: ["e7c"] }, function () {
    var k = pick([1, 2, 3]), t = {};
    if (k === 1) { var b = R(2, 5), e = R(2, 4); t[b * e] = "Multiplicaste base por exponente. La potencia es multiplicar la base por sí misma."; return NUM(b + "<sup>" + e + "</sup> = ?", Math.pow(b, e), "Multiplica " + b + " por sí mismo " + e + " veces.", t); }
    if (k === 2) { var r = R(4, 15); t[r * r / 2] = "La raíz cuadrada no es la mitad."; return NUM("\u221a" + r * r + " = ?", r, "Busca el número que multiplicado por sí mismo da " + r * r + ".", t); }
    var n = R(2, 9); t[-n * n] = "Con paréntesis, el signo también se eleva: (−" + n + ")² = (−" + n + ") × (−" + n + ")."; return NUM("(\u2212" + n + ")<sup>2</sup> = ?", n * n, "Multiplica (−" + n + ") × (−" + n + "). Menos por menos da más.", t);
  });
  S("n8c", "N", 8, "Notación científica", { p: ["n8b"] }, function () {
    var m = R(11, 99), e = R(3, 7), num = m * Math.pow(10, e - 1), M = (m / 10).toFixed(1);
    return MC("¿Cómo se escribe <b>" + num.toLocaleString("es-MX") + "</b> en notación científica?", M + " \u00d7 10<sup>" + e + "</sup>", [[m + " \u00d7 10<sup>" + (e - 1) + "</sup>", "El primer número debe ser mayor o igual que 1 y menor que 10."], [M + " \u00d7 10<sup>" + (e - 1) + "</sup>", "Cuenta bien cuántos lugares recorriste el punto."], [M + " \u00d7 10<sup>" + (e + 1) + "</sup>", ""]], "Recorre el punto hasta dejar una sola cifra entera; el exponente es cuántos lugares lo moviste.");
  });
  S("a8a", "A", 8, "Leyes de los exponentes", { t: 1, p: ["n8b"] }, function () {
    var a = R(2, 6), b = R(2, 6);
    if (Math.random() < .5) return MC("Simplifica: x<sup>" + a + "</sup> \u00b7 x<sup>" + b + "</sup>", "x<sup>" + (a + b) + "</sup>", [["x<sup>" + a * b + "</sup>", "Multiplicaste los exponentes. Al multiplicar potencias de la misma base, los exponentes se suman."], ["2x<sup>" + (a + b) + "</sup>", ""], ["x<sup>" + Math.abs(a - b) + "</sup>", ""]], "Misma base que se multiplica: se suman los exponentes.");
    return MC("Simplifica: (x<sup>" + a + "</sup>)<sup>" + b + "</sup>", "x<sup>" + a * b + "</sup>", [["x<sup>" + (a + b) + "</sup>", "Sumaste los exponentes. En una potencia de potencia, los exponentes se multiplican."], ["x<sup>" + a + "</sup>" + b, ""], [b + "x<sup>" + a + "</sup>", ""]], "Potencia de una potencia: se multiplican los exponentes.");
  });
  S("a8b", "A", 8, "Suma y resta de polinomios", { p: ["e7b"] }, function () {
    var a = R(2, 8), b = R(1, 9), c = R(1, 5), d = R(1, 9);
    return MC("Simplifica: (" + lin(a, b) + ") \u2212 (" + lin(c, -d) + ")", lin(a - c, b + d), [[lin(a - c, b - d), "No repartiste el signo menos a todos los términos del segundo paréntesis."], [lin(a + c, b + d), ""], [lin(a - c, -b - d), ""]], "El signo menos antes del paréntesis cambia el signo de cada término de adentro.");
  });
  S("a8c", "A", 8, "Productos notables", { p: ["a8a", "e7c"] }, function () {
    var a = R(2, 9), sg = pick([1, -1]);
    return MC("Desarrolla: (x " + (sg > 0 ? "+" : "\u2212") + " " + a + ")<sup>2</sup>", quad(1, 2 * a * sg, a * a), [[quad(1, 0, a * a), "Elevaste cada término por separado. Falta el doble producto: 2 · x · " + a + "."], [quad(1, a * sg, a * a), "El término de en medio es el doble del producto."], [quad(1, 2 * a * sg, -a * a), "El último término es un cuadrado: siempre es positivo."]], "Binomio al cuadrado: el primero al cuadrado, más el doble del primero por el segundo, más el segundo al cuadrado.");
  });
  S("a8d", "A", 8, "Desigualdades", { p: ["a7b"] }, function () {
    var a = R(2, 6), x = R(-4, 8), b = R(-9, 9);
    if (Math.random() < .5) return MC("Resuelve: <b>" + lin(a, b) + " > " + sn(a * x + b) + "</b>", "x > " + sn(x), [["x < " + sn(x), "La desigualdad solo se invierte al multiplicar o dividir entre un negativo."], ["x > " + sn(x + 1), ""], ["x = " + sn(x), ""]], "Se resuelve como una ecuación, conservando el signo de desigualdad.");
    return MC("Resuelve: <b>" + lin(-a, b) + " < " + sn(-a * x + b) + "</b>", "x > " + sn(x), [["x < " + sn(x), "Al dividir entre un número negativo, el signo de la desigualdad se invierte."], ["x > " + sn(-x), ""], ["x = " + sn(x), ""]], "Ojo: al dividir entre −" + a + ", el signo < cambia a >.");
  });
  S("a8e", "A", 8, "Sistemas de dos ecuaciones lineales", { p: ["a7c"] }, function () {
    var x = R(2, 12), y = R(1, x - 1), t = {}; t[y] = "Ese es el valor de y.";
    return NUM("Resuelve el sistema: <b>x + y = " + (x + y) + "</b> y <b>x \u2212 y = " + (x - y) + "</b>. ¿Cuánto vale x?", x, "Suma las dos ecuaciones: la y se elimina.", t);
  });
  S("p8a", "P", 8, "Proporcionalidad inversa", { w: 1, p: ["p7b"] }, function () {
    var a = pick([2, 3, 4, 6]), d = pick([4, 6, 8, 12]), b = a * 2, t = {}; t[d * 2] = "Lo resolviste como proporcionalidad directa. Con más pintores, se tardan menos días.";
    return NUM(a + " pintores tardan " + d + " días en pintar una casa. ¿Cuántos días tardarán " + b + " pintores trabajando al mismo ritmo?", a * d / b, "Si se duplican los pintores, el tiempo se reduce a la mitad: pintores × días es constante.", t, { w: 1 });
  });
  S("g8a", "G", 8, "Ángulos interiores de polígonos", { t: 1, p: ["g7a"] }, function () {
    var n = pick([5, 6, 8, 10]), t = {}; t[180 * n] = "La fórmula es 180° × (n − 2): se resta 2 al número de lados.";
    return NUM("¿Cuánto suman los ángulos interiores de un polígono de " + n + " lados?", 180 * (n - 2), "Suma de ángulos interiores = 180° × (n − 2).", t);
  });
  S("g8b", "G", 8, "Conversión de unidades", {}, function () {
    var k = pick([1, 2, 3]), t = {};
    if (k === 1) { var km = R(12, 95) / 10; t[km * 100] = "Un kilómetro tiene 1,000 metros, no 100."; return NUM("Convierte " + dec(km) + " km a metros.", rnd(km * 1000, 2), "1 km = 1,000 m: multiplica por 1,000.", t); }
    if (k === 2) { var l = R(2, 9); t[l * 100] = "Un litro tiene 1,000 mililitros."; return NUM("¿Cuántos mililitros hay en " + l + " litros?", l * 1000, "1 L = 1,000 mL.", t); }
    var p = R(2, 12); return NUM("Una pulgada mide 2.54 cm. ¿Cuántos centímetros miden " + p + " pulgadas?", rnd(p * 2.54, 2), "Multiplica las pulgadas por 2.54.", {}, { tol: .02 });
  });
  S("g8c", "G", 8, "Área de figuras compuestas", { p: ["g5a"] }, function () {
    var a = R(6, 14), b = R(4, 9), h = 2 * R(2, 5), t = {}; t[a * b] = "Calculaste solo el rectángulo; falta sumar el triángulo.";
    return NUM("Una figura está formada por un rectángulo de " + a + " × " + b + " cm y, encima, un triángulo de base " + a + " cm y altura " + h + " cm. ¿Cuál es el área total en cm²?", a * b + a * h / 2, "Calcula cada área por separado y súmalas.", t);
  });
  S("d8a", "D", 8, "Medidas de dispersión", { p: ["d7a"] }, function () {
    var m = R(6, 12), d = R(1, 4), L = [m - 2 * d, m - d, m, m + d, m + 2 * d], dm = rnd((2 * d + d + 0 + d + 2 * d) / 5, 2);
    if (Math.random() < .5) { var t = {}; t[Math.max.apply(null, L)] = "Ese es el dato mayor; el rango es mayor − menor."; return NUM("¿Cuál es el rango de: " + shuf(L).join(", ") + "?", 4 * d, "Rango = dato mayor − dato menor.", t); }
    return NUM("La media de " + shuf(L).join(", ") + " es " + m + ". ¿Cuál es la <b>desviación media</b>?", dm, "Calcula qué tan lejos está cada dato de la media (sin signo), súmalo y divide entre 5.", {}, { tol: .02 });
  });
  S("d8b", "D", 8, "Probabilidad frecuencial y teórica", { p: ["d7b"] }, function () {
    var n = 100, f = R(40, 60), t = {}; t[f + "/" + n] = "Esa es la probabilidad frecuencial (lo que salió). La teórica depende de los resultados posibles.";
    return FRAC("Lanzas una moneda " + n + " veces y caen " + f + " águilas. ¿Cuál es la probabilidad <b>teórica</b> de que caiga águila?", 1, 2, "La teórica no depende del experimento: hay 1 caso favorable de 2 posibles.", t);
  });

  /* ===== 3° de secundaria ===== */
  S("a9a", "A", 9, "Factorización", { t: 1, p: ["a8c"] }, function () {
    if (Math.random() < .5) { var a = R(2, 9); return MC("Factoriza: x\u00b2 \u2212 " + a * a, "(x + " + a + ")(x \u2212 " + a + ")", [["(x \u2212 " + a + ")\u00b2", "Ese binomio al cuadrado tendría término en x. Es una diferencia de cuadrados."], ["(x + " + a + ")\u00b2", ""], ["x(x \u2212 " + a + ")", ""]], "Diferencia de cuadrados: a² − b² = (a + b)(a − b)."); }
    var m = R(1, 7), n = R(1, 7); while (n === m) n = R(1, 7); var s = pick([1, -1]);
    return MC("Factoriza: " + quad(1, s * (m + n), m * n), "(x " + (s > 0 ? "+ " : "\u2212 ") + m + ")(x " + (s > 0 ? "+ " : "\u2212 ") + n + ")", [["(x " + (s > 0 ? "+ " : "\u2212 ") + m * n + ")(x " + (s > 0 ? "+ " : "\u2212 ") + 1 + ")", "Esos números multiplican " + m * n + ", pero no suman " + (m + n) + "."], ["(x " + (s > 0 ? "\u2212 " : "+ ") + m + ")(x " + (s > 0 ? "\u2212 " : "+ ") + n + ")", "Revisa los signos: deben coincidir con el término de en medio."], ["(x + " + (m + n) + ")(x + " + m * n + ")", ""]], "Busca dos números que multiplicados den " + m * n + " y sumados den " + s * (m + n) + ".");
  });
  S("a9b", "A", 9, "Ecuaciones cuadráticas por factorización", { p: ["a9a"] }, function () {
    var m = R(1, 9), n = R(1, 9); while (n === m) n = R(1, 9); var t = {}; t[-Math.max(m, n)] = "Al igualar cada factor a cero, el signo cambia: si x − " + Math.max(m, n) + " = 0, entonces x = " + Math.max(m, n) + ".";
    return NUM("Resuelve: <b>" + quad(1, -(m + n), m * n) + " = 0</b>. ¿Cuál es la solución <b>mayor</b>?", Math.max(m, n), "Factoriza en (x − a)(x − b) = 0 e iguala cada factor a cero.", t);
  });
  S("a9c", "A", 9, "Fórmula general", { p: ["a9b", "n8b"] }, function () {
    var a = R(1, 3), b = R(-9, 9) || 5, c = R(-6, 6), D = b * b - 4 * a * c, t = {}; t[b * b + 4 * a * c] = "Revisa el signo: el discriminante es b² − 4ac."; t[-b * b - 4 * a * c] = "b² siempre es positivo, aunque b sea negativo.";
    return NUM("En la ecuación <b>" + quad(a, b, c) + " = 0</b>, ¿cuánto vale el discriminante b² − 4ac?", D, "Identifica a = " + a + ", b = " + sn(b) + ", c = " + sn(c) + " y sustituye con cuidado en los signos.", t);
  });
  S("a9d", "A", 9, "Despejes", { t: 1, p: ["a7b"] }, function () {
    var Q = pick([
      ["A = b \u00b7 h / 2", "h", "h = 2A / b", [["h = A / 2b", "Lo que divide pasa multiplicando: el 2 pasa multiplicando a A."], ["h = 2b / A", ""], ["h = A \u2212 b / 2", ""]]],
      ["P = 2l + 2a", "l", "l = (P \u2212 2a) / 2", [["l = P / 2 \u2212 2a", "Primero se resta 2a de todo P y luego se divide entre 2."], ["l = P \u2212 a", ""], ["l = 2(P \u2212 2a)", ""]]],
      ["v = d / t", "d", "d = v \u00b7 t", [["d = v / t", "t está dividiendo: pasa al otro lado multiplicando."], ["d = t / v", ""], ["d = v \u2212 t", ""]]]]);
    return MC("En la fórmula <b>" + Q[0] + "</b>, despeja <b>" + Q[1] + "</b>.", Q[2], Q[3], "Lo que suma pasa restando, lo que multiplica pasa dividiendo, y al revés.");
  });
  S("p9a", "P", 9, "Reparto proporcional", { w: 1, p: ["p7b"] }, function () {
    var a = R(1, 4), b = R(a + 1, 6), u = 50 * R(2, 10), T = u * (a + b), t = {}; t[T / 2] = "Repartiste en partes iguales; el reparto es proporcional a " + a + " y " + b + ".";
    return NUM("Dos socios se reparten " + money(T) + " en proporción " + a + ":" + b + ". ¿Cuánto le toca al que recibe <b>más</b>?", u * b, "Divide el total entre " + (a + b) + " partes y multiplica por " + b + ".", t, { w: 1 });
  });
  S("g9a", "G", 9, "Teorema de Pitágoras", { t: 1, p: ["n8b"] }, function () {
    var T = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]]), t = {}; t[T[0] + T[1]] = "Sumaste los catetos. Pitágoras dice que se suman sus cuadrados.";
    return NUM("Un triángulo rectángulo tiene catetos de " + T[0] + " y " + T[1] + " cm. ¿Cuánto mide la hipotenusa?", T[2], "c² = a² + b², y después saca la raíz cuadrada.", t, { v: tri(T[1] + " cm", T[0] + " cm", "?") });
  });
  S("g9b", "G", 9, "Semejanza de triángulos", { p: ["p7b"] }, function () {
    var a = R(2, 6), k = R(2, 4), b = R(3, 8), t = {}; t[b + (a * k - a)] = "Sumaste la diferencia. En figuras semejantes, los lados se multiplican por la misma razón.";
    return NUM("Dos triángulos son semejantes. Un lado de " + a + " cm corresponde a uno de " + a * k + " cm. ¿Cuánto mide el lado que corresponde a " + b + " cm?", b * k, "Encuentra la razón de semejanza (" + a * k + " ÷ " + a + ") y multiplica.", t);
  });
  S("g9c", "G", 9, "Razones trigonométricas", { p: ["g9a"] }, function () {
    var T = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17]]), r = pick(["seno", "coseno", "tangente"]), ok = r === "seno" ? fr(T[0], T[2]) : r === "coseno" ? fr(T[1], T[2]) : fr(T[0], T[1]);
    return MC("En un triángulo rectángulo, el cateto opuesto al ángulo A mide " + T[0] + ", el adyacente " + T[1] + " y la hipotenusa " + T[2] + ". ¿Cuál es el <b>" + r + "</b> de A?", ok, [[fr(T[0], T[2]), "Seno = opuesto ÷ hipotenusa."], [fr(T[1], T[2]), "Coseno = adyacente ÷ hipotenusa."], [fr(T[0], T[1]), "Tangente = opuesto ÷ adyacente."], [fr(T[1], T[0]), ""]].filter(function (w) { return w[0] !== ok; }), "SOH-CAH-TOA: Seno = Opuesto/Hipotenusa, Coseno = Adyacente/Hipotenusa, Tangente = Opuesto/Adyacente.");
  });
  S("g9d", "G", 9, "Volumen de prismas, cilindros y conos", { p: ["g7b", "g6c"] }, function () {
    var r = R(1, 5), h = R(3, 10), cyl = rnd(3.14 * r * r * h, 2);
    if (Math.random() < .5) { var t = {}; t[rnd(3.14 * 2 * r * h, 2)] = "Usaste el perímetro de la base. El volumen usa el área de la base: π × r²."; return NUM("¿Cuál es el volumen de un cilindro de radio " + r + " cm y altura " + h + " cm? Usa π = 3.14.", cyl, "Volumen = área de la base × altura = π × r² × h.", t, { tol: .1 }); }
    var t2 = {}; t2[cyl] = "Ese es el volumen del cilindro. El cono es la tercera parte.";
    return NUM("¿Cuál es el volumen de un cono de radio " + r + " cm y altura " + h + " cm? Usa π = 3.14.", rnd(cyl / 3, 2), "Volumen del cono = π × r² × h ÷ 3.", t2, { tol: .1 });
  });
  S("d9a", "D", 9, "Probabilidad de eventos independientes", { p: ["d8b"] }, function () {
    var t = {}; t["7/12"] = "Sumaste las probabilidades. Para eventos independientes que ocurren juntos, se multiplican.";
    return FRAC("Lanzas una moneda y un dado. ¿Cuál es la probabilidad de obtener <b>sol y un 6</b>?", 1, 12, "Multiplica las probabilidades: " + fr(1, 2) + " × " + fr(1, 6) + ".", t);
  });

  /* ===== 1er semestre de preparatoria (UANL) ===== */
  S("a10a", "A", 10, "Terminología algebraica", { t: 1, p: ["a7a"] }, function () {
    var e = R(3, 6), t = {}; t[e + 2] = "El grado no se suma: es el mayor exponente.";
    return NUM("¿Cuál es el grado del polinomio <b>" + R(2, 9) + "x<sup>" + e + "</sup> \u2212 " + R(2, 9) + "x<sup>2</sup> + " + R(1, 9) + "x \u2212 " + R(1, 9) + "</b>?", e, "El grado de un polinomio es el exponente más alto de la variable.", t);
  });
  S("a10b", "A", 10, "Operaciones con polinomios: adición y sustracción", { t: 1, p: ["a8b"] }, function () {
    var a = R(2, 7), b = R(-6, 6), c = R(1, 9), d = R(1, 5), e = R(-6, 6), f = R(1, 9);
    return MC("Simplifica: (" + quad(a, b, c) + ") \u2212 (" + quad(d, e, -f) + ")", quad(a - d, b - e, c + f), [[quad(a - d, b + e, c - f), "No cambiaste el signo de todos los términos del segundo polinomio."], [quad(a + d, b + e, c - f), ""], [quad(a - d, b - e, c - f), "El −" + f + " al restarse se convierte en +" + f + "."]], "Cambia el signo de cada término del polinomio que se resta y agrupa términos semejantes.");
  });
  S("a10c", "A", 10, "División algebraica", { t: 1, p: ["a8a"] }, function () {
    var k = R(2, 6), q = R(2, 5), m = R(4, 8), n = R(1, m - 1);
    return MC("Divide: " + k * q + "x<sup>" + m + "</sup> \u00f7 " + k + "x<sup>" + n + "</sup>", q + "x<sup>" + (m - n) + "</sup>", [[q + "x<sup>" + (m + n) + "</sup>", "Al dividir potencias de la misma base, los exponentes se restan."], [(k * q - k) + "x<sup>" + (m - n) + "</sup>", "Los coeficientes se dividen, no se restan."], [q + "x<sup>" + (m / n).toFixed(0) + "</sup>", ""]], "Divide los coeficientes y resta los exponentes.");
  });
  S("a10d", "A", 10, "Multiplicación algebraica", { p: ["a8a", "e7c"] }, function () {
    var a = R(2, 4), b = R(-7, 7) || 3, c = R(-7, 7) || -2;
    return MC("Multiplica: (" + lin(a, b) + ")(x " + (c < 0 ? "\u2212 " + -c : "+ " + c) + ")", quad(a, a * c + b, b * c), [[quad(a, 0, b * c), "Multiplicaste solo primeros con primeros y últimos con últimos. Faltan los productos cruzados."], [quad(a, a * c - b, b * c), "Revisa los signos de los términos de en medio."], [quad(a, a * c + b, -b * c), ""]], "Multiplica cada término del primer paréntesis por cada término del segundo.");
  });
  S("a10e", "A", 10, "Productos notables", { p: ["a10d"] }, function () {
    var a = R(2, 5), b = R(1, 9);
    if (Math.random() < .5) return MC("Desarrolla: (" + a + "x + " + b + ")(" + a + "x \u2212 " + b + ")", a * a + "x\u00b2 \u2212 " + b * b, [[a * a + "x\u00b2 + " + b * b, "En binomios conjugados el resultado es una diferencia de cuadrados."], [a + "x\u00b2 \u2212 " + b * b, "Elevaste solo la x; el coeficiente " + a + " también se eleva al cuadrado."], [quad(a * a, 2 * a * b, -b * b), ""]], "Binomios conjugados: (a + b)(a − b) = a² − b².");
    return MC("Desarrolla: (" + a + "x + " + b + ")<sup>2</sup>", quad(a * a, 2 * a * b, b * b), [[quad(a * a, 0, b * b), "Falta el doble producto: 2 · " + a + "x · " + b + "."], [quad(a, 2 * a * b, b * b), "El coeficiente " + a + " también se eleva al cuadrado."], [quad(a * a, a * b, b * b), ""]], "Binomio al cuadrado: a² + 2ab + b².");
  });
  S("a10f", "A", 10, "Factorización", { p: ["a10e", "a9a"] }, function () {
    var k = pick([1, 2, 3]);
    if (k === 1) { var g = R(2, 6), a = R(2, 5), b = R(1, 7); return MC("Factoriza (factor común): " + g * a + "x\u00b2 + " + g * b + "x", g + "x(" + a + "x + " + b + ")", [[g + "(" + a + "x\u00b2 + " + b + "x)", "Falta sacar también la x, que es común a ambos términos."], ["x(" + g * a + "x + " + g * b + ")", "Falta sacar el número " + g + ", que divide a ambos coeficientes."], [g + "x(" + a + "x + " + g * b + ")", ""]], "Busca el mayor número y la mayor potencia de x que dividen a todos los términos."); }
    if (k === 2) { var c = R(1, 5); return MC("Factoriza: x\u00b3 \u2212 " + c * c * c, "(x \u2212 " + c + ")(x\u00b2 + " + c + "x + " + c * c + ")", [["(x \u2212 " + c + ")(x\u00b2 \u2212 " + c + "x + " + c * c + ")", "En la diferencia de cubos, el término de en medio es positivo."], ["(x \u2212 " + c + ")\u00b3", "Un binomio al cubo tiene cuatro términos al desarrollarse."], ["(x + " + c + ")(x\u00b2 \u2212 " + c + "x + " + c * c + ")", ""]], "Diferencia de cubos: a³ − b³ = (a − b)(a² + ab + b²)."); }
    var a2 = R(2, 3), p = R(1, 5), q = R(2, 6); while (q === p) q = R(2, 6); return MC("Factoriza: " + quad(a2, a2 * q + p, p * q), "(" + a2 + "x + " + p + ")(x + " + q + ")", [["(" + a2 + "x + " + q + ")(x + " + p + ")", "Comprueba multiplicando: el término de en medio no coincide."], ["(" + a2 + "x + " + p * q + ")(x + 1)", ""], ["(x + " + p + ")(x + " + q + ")", "Falta el coeficiente " + a2 + " de x²."]], "Prueba factores y comprueba multiplicando hasta obtener el término de en medio.");
  });
  S("a10g", "A", 10, "Ecuación lineal en una variable", { t: 1, p: ["a7c"] }, function () {
    var a = R(2, 5), b = R(1, 6), c = R(1, a - 1) || 1, x = R(-4, 12), d = a * (x - b) - c * x, t = {}; var w = (d + b) / (a - c); if (Number.isInteger(w) && w !== x) t[w] = "No multiplicaste el " + a + " por los dos términos del paréntesis.";
    return NUM("Resuelve: <b>" + a + "(x \u2212 " + b + ") = " + lin(c, d) + "</b>", x, "Primero quita el paréntesis multiplicando " + a + " por cada término; luego junta las x.", t);
  });
  S("a10h", "A", 10, "Sistemas de ecuaciones 2×2", { p: ["a8e"] }, function () {
    var x = R(-5, 8), y = R(-5, 8), a = R(2, 4), b = R(1, 3), c = R(1, 3), d = R(1, 4); while (a * d === b * c) d++; var t = {}; t[y] = "Ese es el valor de y.";
    return NUM("Resuelve: <b>" + a + "x + " + b + "y = " + (a * x + b * y) + "</b> y <b>" + c + "x \u2212 " + d + "y = " + (c * x - d * y) + "</b>. ¿Cuánto vale x?", x, "Usa eliminación: multiplica las ecuaciones para igualar los coeficientes de y y súmalas.", t);
  });
  S("a10i", "A", 10, "Ecuaciones cuadráticas: factorización y fórmula general", { p: ["a9b", "a9c"] }, function () {
    var a = R(1, 2), m = R(-6, 6), n = R(-6, 6); while (n === m) n = R(-6, 6); var t = {}; t[-Math.max(m, n)] = "Revisa el signo al despejar cada factor.";
    return NUM("Resuelve: <b>" + quad(a, -a * (m + n), a * m * n) + " = 0</b>. ¿Cuál es la solución <b>mayor</b>?", Math.max(m, n), "Factoriza (o usa la fórmula general) e iguala cada factor a cero.", t);
  });
  S("a10j", "A", 10, "Modelos matemáticos con ecuaciones", { w: 1, p: ["a10g"] }, function () {
    var w = R(3, 15), k = R(2, 6), P = 2 * (w + w + k), t = {}; t[w + k] = "Ese es el largo. La pregunta es el ancho.";
    return NUM("El largo de un rectángulo mide " + k + " m más que el ancho y su perímetro es de " + P + " m. ¿Cuánto mide el ancho?", w, "Si el ancho es x, el largo es x + " + k + ": plantea 2x + 2(x + " + k + ") = " + P + ".", t, { w: 1 });
  });

  var TRI_DK = "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 152 C96 170.0 90 180.0 92 192\" stroke=\"#FFFFFF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#FFFFFF\"/><path d=\"M122 152 C124 170.0 128 180.0 127 192\" stroke=\"#FFFFFF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#FFFFFF\"/><path d=\"M70 128 C56 130 46 120 46 104\" stroke=\"#FFFFFF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"104\" r=\"3.6\" fill=\"#FFFFFF\"/><path d=\"M150 128 C158 128 164 124 168 118\" stroke=\"#FFFFFF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"118\" r=\"3.6\" fill=\"#FFFFFF\"/><path d=\"M110 44 L168 146 L52 146Z\" fill=\"#FF9FCB\" stroke=\"#FF9FCB\" stroke-width=\"26\" stroke-linejoin=\"round\"/><circle cx=\"104\" cy=\"76\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M88 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M93 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M112 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M117 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M108 109 q2 -4 4 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 126 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(170 118) rotate(-35)\"><rect x=\"-4\" y=\"-30\" width=\"8\" height=\"30\" rx=\"2\" fill=\"#FFD54A\"/><rect x=\"-4\" y=\"-35\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#FF8FC8\"/><path d=\"M-4 0 L0 8 L4 0z\" fill=\"#F4E1C1\"/><path d=\"M-1.3 5.4 L0 8 L1.3 5.4z\" fill=\"#1A1B2E\"/></g></svg>";
  var TRI_LT = "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 152 C96 170.0 90 180.0 92 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 152 C124 170.0 128 180.0 127 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M70 128 C56 130 46 120 46 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 128 C158 128 164 124 168 118\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"118\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M110 44 L168 146 L52 146Z\" fill=\"#FF9FCB\" stroke=\"#FF9FCB\" stroke-width=\"26\" stroke-linejoin=\"round\"/><circle cx=\"104\" cy=\"76\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M88 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M93 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M112 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M117 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M108 109 q2 -4 4 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 126 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(170 118) rotate(-35)\"><rect x=\"-4\" y=\"-30\" width=\"8\" height=\"30\" rx=\"2\" fill=\"#FFD54A\"/><rect x=\"-4\" y=\"-35\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#FF8FC8\"/><path d=\"M-4 0 L0 8 L4 0z\" fill=\"#F4E1C1\"/><path d=\"M-1.3 5.4 L0 8 L1.3 5.4z\" fill=\"#1A1B2E\"/></g></svg>";

  /* ---------- Guardado ---------- */
  var SKI = {}; SK.forEach(function (s) { SKI[s.id] = s; });
  function who() { try { var u = window.MovaAuth && window.MovaAuth.user(); return u ? u : null; } catch (e) { return null; } }
  function key() { var u = who(); return "mova_math_lu_" + (u && u.username ? u.username : "local"); }
  function load() { try { return JSON.parse(localStorage.getItem(key()) || "null"); } catch (e) { return null; } }
  function store(d) { try { localStorage.setItem(key(), JSON.stringify(d)); } catch (e) {} }
  /* Sincroniza el mapa con la nube: si el alumno presentó Math Level Up en otro dispositivo,
     se reconstruye aquí con su último resultado y las comprobaciones aprobadas después. */
  var syncing = false, synced = {};
  function syncCloud() {
    var u = who(); if (!u || !u.token || syncing || synced[u.username]) return;
    syncing = true;
    fetch("https://fclafxrkibvcjktrgznt.supabase.co/rest/v1/rpc/student_my_progress", { method: "POST", headers: { apikey: "sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6", "Content-Type": "application/json" }, body: JSON.stringify({ p_token: u.token }) })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (rows) {
        syncing = false; if (!Array.isArray(rows)) return; synced[u.username] = 1;
        var lus = rows.filter(function (r) { return r.activity === "math-level-up" && r.detail && r.detail.skills && r.detail.ejes; })
          .sort(function (a, b) { return new Date(b.created_at) - new Date(a.created_at); });
        if (!lus.length) return;
        var last = lus[0], cd = last.detail, local = load();
        if (local && new Date(local.date) >= new Date(last.created_at) - 60000) return;
        var G = +cd.grade || 1, res = cd.skills, done = {};
        rows.forEach(function (r) { if (r.activity === "math-comprueba" && r.detail && r.detail.pass && SKI[r.item] && new Date(r.created_at) > new Date(last.created_at)) { res[r.item] = "dom"; done[r.item] = 1; } });
        var d = { v: 1, date: last.created_at, next: cd.next || addMonths(last.created_at, 3).toISOString(), grade: G, stage: cd.stage || (GRADES[G] && GRADES[G].s), skills: res, ejes: cd.ejes, rz: cd.rz || null,
          errors: (cd.errors || []).map(function (x) { var id = Object.keys(SKI).filter(function (k) { return SKI[k].n === x.skill; })[0]; return id ? { s: id, t: x.txt } : null; }).filter(Boolean),
          pro: SK.filter(function (k) { return k.g === G && !k.t && !res[k.id]; }).map(function (k) { return k.id; }), done: done,
          history: lus.slice(1, 7).map(function (r) { return { date: r.created_at, grade: r.detail.grade, ejes: r.detail.ejes }; }).reverse() };
        recompute(d); store(d);
        if (/^#\/matematicas/.test(location.hash) && typeof router === "function") router();
      }).catch(function () { syncing = false; });
  }
  function addMonths(d, m) { var x = new Date(d); x.setMonth(x.getMonth() + m); return x; }
  function fdate(d) { d = new Date(d); return d.getDate() + " de " + MONTHS[d.getMonth()] + " de " + d.getFullYear(); }
  function fmonth(d) { d = new Date(d); return MONTHS[d.getMonth()] + " de " + d.getFullYear(); }
  function cloud(activity, item, score, total, detail) { try { if (window.MovaAuth && window.MovaAuth.user()) window.MovaAuth.save(activity, item, score, total, detail); } catch (e) {} }

  /* ---------- Revisión de respuestas ---------- */
  function parseNum(v) { v = String(v || "").trim().replace(/\u2212/g, "-").replace(/,/g, ".").replace(/\s+/g, ""); if (!/^-?\d*\.?\d+$/.test(v)) return null; return Number(v); }
  function check(q, ans) {
    if (q.t === "mc") { var o = q.o[ans]; return { ok: !!(o && o.ok), e: o && !o.ok ? o.e : "" }; }
    if (q.t === "num") { var v = parseNum(ans); if (v == null) return { ok: false, e: "" }; var tol = q.tol || 1e-6; if (Math.abs(v - q.a) <= tol) return { ok: true };
      for (var k in q.tr) if (Math.abs(Number(k) - v) <= Math.max(tol, 1e-6)) return { ok: false, e: q.tr[k] }; return { ok: false, e: "" }; }
    var n = parseInt(ans[0], 10), d = parseInt(ans[1], 10); if (!(d > 0) || isNaN(n)) return { ok: false, e: "" };
    var eq = n * q.a[1] === q.a[0] * d; if (eq && (!q.exact || (n === q.a[0] && d === q.a[1]))) return { ok: true };
    if (eq && q.exact) return { ok: false, e: "Es equivalente, pero todavía se puede simplificar." };
    return { ok: false, e: q.tr[n + "/" + d] || "" };
  }
  function showAns(q) { if (q.t === "mc") { for (var i = 0; i < q.o.length; i++) if (q.o[i].ok) return q.o[i].h; } if (q.t === "frac") return fr(q.a[0], q.a[1]); return sn(rnd(q.a, 4)); }

  /* ---------- Math Level Up adaptativo ---------- */
  var CAP = { kids: 20, children: 28, teens: 35 };
  function plan(G) {
    var set = SK.filter(function (s) { return G === 1 ? s.g === 1 : (s.g === G - 1 || (s.g === G && s.t)); });
    var by = {}; set.forEach(function (s) { (by[s.e] = by[s.e] || []).push(s); });
    var keys = Object.keys(by), out = [], more = true;
    while (more) { more = false; keys.forEach(function (k) { var x = by[k].shift(); if (x) { out.push({ s: x, d: 0 }); more = true; } }); }
    return out;
  }
  function Exam(G) {
    this.G = G; this.stage = GRADES[G].s; this.cap = CAP[this.stage]; this.queue = plan(G);
    this.res = {}; this.asked = 0; this.cur = null; this.ans = []; this.rz = { ok: 0, n: 0 }; this.errs = [];
  }
  Exam.prototype.next = function () {
    if (this.asked >= this.cap) { this.closeCur(); return null; }
    while (!this.cur) { var it = this.queue.shift(); if (!it) return null; if (this.res[it.s.id]) continue; this.cur = it; this.ans = []; }
    this.q = this.cur.s.gen(); this.t0 = Date.now(); return this.q;
  };
  Exam.prototype.answer = function (a) {
    var r = check(this.q, a), ms = Date.now() - this.t0, fast = r.ok && ms < (this.q.t === "mc" ? 1500 : 2500);
    this.asked++; this.ans.push({ ok: r.ok, fast: fast });
    if (this.q.w || this.cur.s.w) { this.rz.n++; if (r.ok) this.rz.ok++; }
    if (!r.ok && r.e && this.errs.length < 12 && !this.errs.some(function (x) { return x.t === r.e; })) this.errs.push({ s: this.cur.s.id, t: r.e });
    var n = this.ans.length, c = this.ans.filter(function (x) { return x.ok; }).length, unsure = this.ans.some(function (x) { return x.fast; });
    var st = null;
    if (n === 2) { if (c === 2 && !unsure) st = "dom"; else if (c === 0) st = "ref"; }
    if (n >= 3) st = c === 3 ? "dom" : c === 2 ? "des" : "ref";
    if (st) this.settle(st);
  };
  Exam.prototype.settle = function (st) {
    var s = this.cur.s, d = this.cur.d, self = this; this.res[s.id] = st; this.cur = null;
    if (st === "ref" && d < 2) s.p.slice().reverse().forEach(function (p) { if (!self.res[p] && SKI[p]) self.queue.unshift({ s: SKI[p], d: d + 1 }); });
  };
  Exam.prototype.closeCur = function () { if (!this.cur || !this.ans.length) { this.cur = null; return; } var c = this.ans.filter(function (x) { return x.ok; }).length / this.ans.length; this.settle(c >= .99 ? "des" : c >= .5 ? "des" : "ref"); };
  Exam.prototype.finish = function () {
    var G = this.G, res = this.res, ejes = {}, sc = { dom: 2, des: 1, ref: 0 }, acc = {};
    Object.keys(res).forEach(function (id) { var e = SKI[id].e; (acc[e] = acc[e] || []).push(sc[res[id]]); });
    Object.keys(acc).forEach(function (e) { var a = acc[e], m = a.reduce(function (x, y) { return x + y; }, 0) / a.length; ejes[e] = m >= 1.6 ? "dom" : m >= .8 ? "des" : "ref"; });
    var rz = this.rz.n ? (this.rz.ok / this.rz.n >= .75 ? "dom" : this.rz.ok / this.rz.n >= .4 ? "des" : "ref") : null;
    var now = new Date(), prev = load() || {};
    var d = { v: 1, date: now.toISOString(), next: addMonths(now, 3).toISOString(), grade: G, stage: this.stage, skills: res, ejes: ejes, rz: rz,
      errors: this.errs, pro: SK.filter(function (s) { return s.g === G && !s.t && !res[s.id]; }).map(function (s) { return s.id; }), done: {}, history: (prev.history || []).concat(prev.date ? [{ date: prev.date, grade: prev.grade, ejes: prev.ejes }] : []).slice(-6) };
    store(d);
    var nd = Object.keys(ejes).filter(function (e) { return ejes[e] === "dom"; }).length + (rz === "dom" ? 1 : 0), tot = Object.keys(ejes).length + (rz ? 1 : 0);
    cloud("math-level-up", "g" + G, nd, tot, { kind: "math-level-up", grade: G, gradeName: GRADES[G].n, stage: this.stage, ejes: ejes, rz: rz, skills: res, errors: this.errs.map(function (x) { return { skill: SKI[x.s].n, eje: SKI[x.s].e, txt: x.t }; }), asked: this.asked, next: d.next });
    return d;
  };
  function recompute(d) {
    var sc = { dom: 2, des: 1, ref: 0 }, acc = {};
    Object.keys(d.skills).forEach(function (id) { if (!SKI[id]) return; var e = SKI[id].e; (acc[e] = acc[e] || []).push(sc[d.skills[id]]); });
    Object.keys(acc).forEach(function (e) { var a = acc[e], m = a.reduce(function (x, y) { return x + y; }, 0) / a.length; d.ejes[e] = m >= 1.6 ? "dom" : m >= .8 ? "des" : "ref"; });
  }
  function route(d) {
    if (!d) return [];
    var gaps = Object.keys(d.skills).filter(function (id) { return SKI[id] && d.skills[id] !== "dom"; }).map(function (id) { return SKI[id]; })
      .sort(function (a, b) { var r = { ref: 0, des: 1 }; return a.g - b.g || r[d.skills[a.id]] - r[d.skills[b.id]]; });
    var fixed = Object.keys(d.done || {}).filter(function (id) { return SKI[id] && d.skills[id] === "dom"; }).map(function (id) { return SKI[id]; });
    var list = gaps.concat(fixed.filter(function (s) { return gaps.indexOf(s) < 0; })).sort(function (a, b) { return a.g - b.g; });
    var pro = (d.pro || []).map(function (id) { return SKI[id]; }).filter(Boolean).filter(function (s) { return list.indexOf(s) < 0; });
    return list.concat(pro);
  }

  /* ---------- Estilos ---------- */
  var CSS = [
  ".mm{padding-top:4px;color:#15192B}",
  ".mm-back{display:inline-flex;align-items:center;gap:6px;background:#fff;border-radius:999px;padding:8px 15px 8px 11px;font-weight:800;font-size:14px;color:#15192B;text-decoration:none;margin:2px 0 12px;box-shadow:0 6px 18px -14px rgba(54,40,120,.5)}",
  ".mm-back svg{width:17px;height:17px}",
  ".mm-hero{position:relative;overflow:hidden;background:var(--c,#C7B5FF);color:#15192B;border-radius:30px;padding:24px 22px 26px;min-height:190px;margin:4px 0 14px}",
  ".mm-hero h1{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(30px,8.4vw,44px);line-height:.98;letter-spacing:-.025em;margin:12px 0 10px;color:inherit}",
  ".mm-hero p{margin:0;font-size:14.5px;line-height:1.5;color:#2B2F45;max-width:34ch}",
  ".mm-hx{position:relative;z-index:2;max-width:62%}",
  ".mm-art{position:absolute;right:-8px;bottom:-14px;width:42%;max-width:200px;z-index:1;pointer-events:none}.mm-art svg{width:100%;height:auto;display:block}",
  ".mm-dot{position:absolute;border-radius:50%;background:#fff;opacity:.45}.mm-dot.a{width:110px;height:110px;right:-30px;top:-34px}.mm-dot.b{width:14px;height:14px;right:46%;top:26px;opacity:.8}",
  ".mm-k{display:inline-block;background:#fff;color:#15192B;border-radius:999px;padding:5px 12px;font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}",
  ".mm-dk{background:#15192B;color:#fff}.mm-dk p{color:#C9CCE0}.mm-dk .mm-k{background:#D3F36B}.mm-dk .mm-dot{background:#8A8FA8;opacity:.5}",
  ".mm-sh{margin:24px 4px 12px}.mm-sh b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:21px}.mm-sh small{display:block;font-size:13px;color:#6A6F85;margin-top:2px;line-height:1.4}",
  ".mm-lu{display:block;width:100%;background:#16274A;color:#fff;border-radius:28px;padding:20px;position:relative;overflow:hidden;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);margin:0 0 14px;text-decoration:none}",
  ".mm-lu small{font-size:11px;font-weight:800;color:#AEBBD6;letter-spacing:.08em;text-transform:uppercase}",
  ".mm-lu .t{display:block;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:34px;line-height:1;margin:8px 0;letter-spacing:-.5px;color:#fff}",
  ".mm-lu p{font-size:14px;color:#C9D3E6;margin:0;line-height:1.5;max-width:32ch}",
  ".mm-tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin:18px 0 16px}",
  ".mm-tiles span{aspect-ratio:1.35;border-radius:14px;background:rgba(255,255,255,.1);display:grid;place-items:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;color:#AEBBD6}",
  ".mm-tiles span.dom{background:#D3F36B;color:#16274A}.mm-tiles span.des{background:#C7B5FF;color:#16274A}.mm-tiles span.ref{background:#FF8FC0;color:#16274A}",
  ".mm-luft{display:flex;align-items:center;justify-content:space-between;gap:10px}",
  ".mm-pill{display:inline-flex;align-items:center;gap:8px;background:#D3F36B;color:#16274A;font-weight:800;font-size:14.5px;border-radius:999px;padding:12px 18px}",
  ".mm-pill svg{width:18px;height:18px}.mm-lu em{font-style:normal;font-size:12.5px;font-weight:700;color:#AEBBD6;text-align:right}",
  ".mm-card{background:#fff;border-radius:24px;padding:18px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45)}",
  ".mm-ruta{display:flex;gap:14px;align-items:center;background:#fff;border-radius:24px;padding:14px 16px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);text-decoration:none;color:#15192B}",
  ".mm-ruta .ring{width:62px;height:62px;flex:none}.mm-ruta small{display:block;font-size:12px;font-weight:700;color:#6A6F85}.mm-ruta b{display:block;font-size:16px;line-height:1.3;margin-top:2px}",
  ".mm-go{flex:none;width:44px;height:44px;border-radius:50%;background:#15192B;color:#fff;display:grid;place-items:center;margin-left:auto}.mm-go svg{width:20px;height:20px}",
  ".mm-lock{display:flex;gap:14px;align-items:center;background:#fff;border-radius:24px;padding:14px 16px;border:2px dashed #ECE9F3}",
  ".mm-lock .ic{flex:none;width:50px;height:50px;border-radius:16px;display:grid;place-items:center;background:#E6E2FF}.mm-lock .ic svg{width:22px;height:22px}",
  ".mm-lock b{display:block;font-size:15.5px}.mm-lock small{display:block;font-size:13px;color:#6A6F85;line-height:1.4;margin-top:2px}",
  ".mm-v{display:block;background:#fff;border-radius:28px;padding:8px 8px 18px;text-decoration:none;color:#15192B;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);margin:0 0 14px}",
  ".mm-th{display:block;position:relative;aspect-ratio:16/9;border-radius:22px;overflow:hidden}.mm-th img{width:100%;height:100%;object-fit:cover;display:block}",
  ".mm-vk{position:absolute;left:14px;top:14px;background:#15192B;color:#D3F36B;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:8px 14px;border-radius:999px;z-index:2}",
  ".mm-tx{display:block;padding:14px 12px 0}.mm-tx b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:28px;line-height:1.05;letter-spacing:-.02em}",
  ".mm-tx small{display:block;font-size:14.5px;color:#6A6F85;line-height:1.5;margin-top:6px}",
  ".mm-ft{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px}",
  ".mm-chips{display:flex;flex-wrap:wrap;gap:6px}.mm-chips em{font-style:normal;font-size:12.5px;font-weight:700;border-radius:999px;padding:6px 12px}",
  ".c1{background:#FFE1EA;color:#A3345C}.c2{background:#E6E2FF;color:#4B3BB0}.c3{background:#DCF4EA;color:#1F6E4E}.c4{background:#FFF1C2;color:#7A5A00}.c5{background:#ECE9F3;color:#4E5268}",
  ".mm-grid8{position:absolute;inset:0;background:#FFF1C2;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:58px 18px 18px}",
  ".mm-grid8 span{border-radius:18px;display:grid;place-items:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:22px;color:#15192B;box-shadow:0 6px 0 rgba(21,25,43,.08)}",
  ".mm-mini{display:flex;align-items:center;gap:14px;background:#fff;border-radius:24px;padding:14px 16px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);text-decoration:none;color:#15192B;margin:0 0 8px}",
  ".mm-mini .ic{flex:none;width:50px;height:50px;border-radius:16px;display:grid;place-items:center;background:#FFF1C2}.mm-mini .ic svg{width:24px;height:24px}",
  ".mm-mini b{display:block;font-size:16px}.mm-mini small{display:block;font-size:13px;color:#6A6F85;line-height:1.4;margin-top:2px}",
  ".mm-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid #ECE9F3;text-decoration:none;color:#15192B}.mm-row:last-child{border-bottom:0}",
  ".mm-row .t{font-size:14.5px;font-weight:600;line-height:1.35;display:flex;align-items:center;gap:12px}",
  ".mm-gl{width:40px;height:40px;border-radius:13px;display:grid;place-items:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;color:#15192B;flex:none}",
  ".mm-st{display:inline-block;font-size:12px;font-weight:800;padding:5px 11px;border-radius:999px;white-space:nowrap}",
  ".mm-st.dom{background:#DCF4EA;color:#1F6E4E}.mm-st.des{background:#E6E2FF;color:#4B3BB0}.mm-st.ref{background:#FFE1EA;color:#A3345C}.mm-st.pro{background:#ECE9F3;color:#4E5268}",
  ".mm-note{background:#fff;border-radius:24px;padding:18px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);font-size:14.5px;line-height:1.6}",
  ".mm-note .w{display:flex;align-items:center;gap:10px;margin-bottom:8px;font-weight:800;font-size:14px}.mm-note .w i{width:34px;height:34px;border-radius:50%;background:#FF8FC0;display:grid;place-items:center;font-style:normal;font-family:'Bricolage Grotesque',sans-serif}",
  ".mm-btn{display:block;width:100%;text-align:center;border:0;border-radius:999px;padding:15px;font:inherit;font-weight:800;font-size:15px;cursor:pointer;text-decoration:none}",
  ".mm-btn.dk{background:#15192B;color:#fff;box-shadow:0 3px 0 #D3F36B}.mm-btn.gh{background:#fff;color:#15192B;box-shadow:0 10px 30px -18px rgba(54,40,120,.45)}",
  ".mm-btn[disabled]{opacity:.4;cursor:default}",
  ".mm-stack{display:flex;flex-direction:column;gap:10px;margin-top:18px}",
  ".mm-gsec{font-family:'Bricolage Grotesque',sans-serif;font-size:17px;margin:18px 4px 8px;display:flex;align-items:center;gap:8px}.mm-gsec i{width:11px;height:11px;border-radius:50%}",
  ".mm-gr{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}",
  ".mm-gb{border:2px solid #ECE9F3;background:#fff;border-radius:18px;padding:14px 12px;font:inherit;font-weight:700;font-size:14px;color:#15192B;cursor:pointer;text-align:left}",
  ".mm-gb.on{border-color:#15192B;box-shadow:0 3px 0 #D3F36B}",
  ".mm-ul{padding-left:18px;margin:0}.mm-ul li{margin-bottom:9px;font-size:14.5px;line-height:1.55}",
  ".mm-prog{height:8px;border-radius:9px;background:#ECE9F3;overflow:hidden;margin:0 0 14px}.mm-prog i{display:block;height:100%;background:#15192B;border-radius:9px;transition:width .3s}",
  ".mm-q{font-size:16px;font-weight:600;line-height:1.55;margin:0 0 14px}",
  ".mm-vis{display:block;max-width:100%;height:auto;margin:6px auto 16px;max-height:230px}",
  ".mm-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}",
  ".mm-opt{background:#fff;border:2px solid #ECE9F3;border-radius:18px;min-height:64px;padding:12px;font:inherit;font-weight:700;font-size:16px;color:#15192B;cursor:pointer;line-height:1.35}",
  ".mm-opt.sel{border-color:#15192B;box-shadow:0 3px 0 #D3F36B}.mm-opt.ok{border-color:#3FA77A;background:#DCF4EA}.mm-opt.no{border-color:#E46A9B;background:#FFE1EA}",
  ".mm-in{width:100%;font:inherit;font-size:22px;font-weight:800;text-align:center;border:2px solid #ECE9F3;border-radius:16px;padding:14px;color:#15192B;background:#fff}",
  ".mm-in:focus{outline:none;border-color:#15192B}",
  ".mm-inrow{display:flex;gap:8px;align-items:center}.mm-sign{flex:none;width:58px;height:58px;border-radius:16px;border:2px solid #ECE9F3;background:#fff;font:inherit;font-weight:800;font-size:24px;cursor:pointer;color:#15192B}",
  ".mm-fin{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:150px;margin:0 auto}.mm-fin hr{width:100%;border:0;border-top:3px solid #15192B;margin:0}",
  ".mm-fr{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.05;margin:0 2px;font-weight:800}.mm-fr span:first-child{border-bottom:2px solid currentColor;padding:0 3px}.mm-fr span{padding:0 3px}",
  ".mm-fb{margin-top:14px;border-radius:18px;padding:14px 16px;font-size:14.5px;line-height:1.6}.mm-fb.ok{background:#DCF4EA}.mm-fb.no{background:#FFE1EA}",
  ".mm-rec{display:inline-flex;align-items:center;gap:8px;background:#FFF1C2;color:#5C4400;font:inherit;font-weight:800;font-size:14px;border:0;border-radius:999px;padding:11px 16px;margin-top:16px;cursor:pointer}.mm-rec svg{width:17px;height:17px}",
  ".mm-hint{margin-top:12px;background:#fff;border:2px dashed #E7C65A;border-radius:18px;padding:14px 16px;font-size:14.5px;line-height:1.6}",
  ".mm-path{list-style:none;margin:0;padding:0}.mm-path li a{display:flex;gap:14px;align-items:flex-start;padding:11px 0;text-decoration:none;color:#15192B}",
  ".mm-pd{width:36px;height:36px;border-radius:50%;flex:none;display:grid;place-items:center;font-weight:800;font-size:13px;background:#ECE9F3;color:#6A6F85}",
  ".mm-pd.done{background:#D3F36B;color:#15192B}.mm-pd.today{background:#15192B;color:#fff;box-shadow:0 3px 0 #D3F36B}",
  ".mm-path b{display:block;font-size:14.5px;line-height:1.35;margin-top:2px}.mm-path small{font-size:12.5px;color:#6A6F85}",
  ".mm-tbl{border-collapse:separate;border-spacing:0;margin:4px auto 16px;font-size:15px;min-width:200px}.mm-tbl th{background:#15192B;color:#fff;padding:8px 14px;font-weight:700}.mm-tbl th:first-child{border-radius:10px 0 0 0}.mm-tbl th:last-child{border-radius:0 10px 0 0}.mm-tbl td{padding:8px 14px;border-bottom:1px solid #ECE9F3;text-align:center;background:#fff}",
  ".mm-res{text-align:center;padding:10px 0}.mm-res .big{font-family:'Bricolage Grotesque',sans-serif;font-size:44px;font-weight:800;line-height:1}.mm-res p{font-size:15px;line-height:1.6;color:#3B3F57}"
  ].join("\n");
  function css() { if (document.getElementById("mova-math-css")) return; var s = document.createElement("style"); s.id = "mova-math-css"; s.textContent = CSS; document.head.appendChild(s); }

  /* ---------- Piezas de interfaz ---------- */
  var ARW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';
  var BKI = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
  var BULB = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>';
  var TREND = '<svg viewBox="0 0 24 24" fill="none" stroke="#4B3BB0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19l5-5 4 4 7-8"/><path d="M15 10h5v5"/></svg>';
  var PRINT = '<svg viewBox="0 0 24 24" fill="none" stroke="#15192B" stroke-width="2.2" stroke-linejoin="round"><path d="M7 8V3h10v5M7 17H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7h-3M7 14h10v7H7z"/></svg>';
  var STN = { dom: "Dominado", des: "En desarrollo", ref: "Por reforzar", pro: "Próximamente" };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  function back(href, txt) { return '<a class="mm-back" href="' + href + '">' + BKI + esc(txt) + "</a>"; }
  function hero(o) { return '<div class="mm-hero' + (o.dk ? " mm-dk" : "") + '" style="--c:' + (o.c || "#C7B5FF") + '"><span class="mm-dot a"></span><span class="mm-dot b"></span><div class="mm-hx"><span class="mm-k">' + o.k + "</span><h1>" + o.h + "</h1>" + (o.p ? "<p>" + o.p + "</p>" : "") + "</div>" + (o.art ? '<span class="mm-art">' + (o.dk ? TRI_DK : TRI_LT) + "</span>" : "") + "</div>"; }
  function st(k) { return '<span class="mm-st ' + k + '">' + STN[k] + "</span>"; }
  function level(g) { return g <= 3 ? "Base" : g <= 6 ? "Intermedio" : "Avanzado"; }
  function page(title, html, mount) { css(); return { title: title, html: '<section class="wrap mm">' + html + "</section>", mount: mount }; }
  function tiles(d) { return '<div class="mm-tiles">' + "NFEJPAGD".split("").map(function (e) { var s = d && d.ejes[e]; return '<span class="' + (s || "") + '">' + EJES[e].g + "</span>"; }).join("") + "</div>"; }
  function due(d) { return !d || new Date() >= new Date(d.next); }

  /* ---------- Inicio de Matemáticas ---------- */
  function vHome() {
    var d = load(), R0 = route(d), done = d ? R0.filter(function (s) { return d.done && d.done[s.id]; }).length : 0, today = d ? R0.filter(function (s) { return !(d.done && d.done[s.id]); })[0] : null;
    var lu = d
      ? '<a class="mm-lu" href="#/matematicas/mapa"><small>Tu diagnóstico</small><span class="t">Mi mapa matemático</span><p>Tus fortalezas y lo que vamos a trabajar este trimestre.</p>' + tiles(d) +
        '<span class="mm-luft"><span class="mm-pill">Ver mi mapa</span><em>' + (due(d) ? "Ya puedes presentar tu nuevo Math Level Up" : "Próximo Math Level Up: " + fmonth(d.next)) + "</em></span></a>"
      : '<a class="mm-lu" href="#/matematicas/levelup"><small>Examen adaptativo</small><span class="t">Math Level Up</span><p>Cada pregunta se adapta a tu respuesta anterior. Al terminar descubres tu mapa matemático.</p>' + tiles(null) +
        '<span class="mm-luft"><span class="mm-pill">Empezar ' + ARW + "</span><em>20 a 40 minutos</em></span></a>";
    var ruta = d && R0.length
      ? '<a class="mm-ruta" href="' + (today ? "#/matematicas/practica/" + today.id : "#/matematicas/ruta") + '"><svg class="ring" viewBox="0 0 62 62"><circle cx="31" cy="31" r="25" fill="none" stroke="#ECE9F3" stroke-width="8"/><circle cx="31" cy="31" r="25" fill="none" stroke="#D3F36B" stroke-width="8" stroke-linecap="round" stroke-dasharray="157" stroke-dashoffset="' + (157 - 157 * done / R0.length).toFixed(1) + '" transform="rotate(-90 31 31)"/><text x="31" y="36" text-anchor="middle" font-size="13" font-weight="800" fill="#15192B" font-family="Plus Jakarta Sans,sans-serif">' + done + " / " + R0.length + "</text></svg>" +
        "<span><small>" + (today ? "Sesión de hoy · " + EJES[today.e].n : "Ruta completada") + "</small><b>" + (today ? esc(today.n) : "¡Excelente trabajo! Revisa tu mapa.") + '</b></span><span class="mm-go">' + ARW + "</span></a>"
      : '<div class="mm-lock"><span class="ic">' + TREND + "</span><span><b>Tu ruta aparece aquí</b><small>Presenta Math Level Up y se arma sola con lo que necesitas practicar.</small></span></div>";
    var html = hero({ dk: 1, k: "MOVA Math", h: "Matemáticas", p: "Explicaciones claras, ejemplos paso a paso y ejercicios pensados para ti.", art: 1 }) + lu +
      '<div class="mm-sh"><b>Mi ruta</b><small>Lo que te toca practicar, en el orden correcto.</small></div>' + ruta +
      '<div class="mm-sh"><b>¿Qué quieres hacer hoy?</b><small>Elige cómo quieres practicar.</small></div>' +
      '<a class="mm-v" href="#/matematicas/habilidades"><span class="mm-th"><span class="mm-grid8">' + "NFEJPAGD".split("").map(function (e) { return '<span style="background:' + EJES[e].c + '">' + EJES[e].g + "</span>"; }).join("") + '</span><span class="mm-vk">Habilidades</span></span>' +
        '<span class="mm-tx"><b>Aprende por habilidad</b><small>Elige un tema y avanza de lo básico a lo avanzado, con práctica guiada y comprobación.</small><span class="mm-ft"><span class="mm-chips"><em class="c4">8 áreas</em><em class="c2">' + SK.length + ' temas</em></span><span class="mm-go">' + ARW + "</span></span></span></a>" +
      '<a class="mm-v" href="#/matematicas/practicas"><span class="mm-th" style="background:#E6E2FF"><img src="vitrina-practicas.webp" alt="" loading="lazy"><span class="mm-vk">Prácticas</span></span>' +
        '<span class="mm-tx"><b>Repaso para exámenes</b><small>Los temas de tu grado para prepararte antes de tu examen del colegio, con calificación y retroalimentación de tu maestra.</small><span class="mm-ft"><span class="mm-chips"><em class="c2">Por grado</em><em class="c3">Con calificación</em></span><span class="mm-go">' + ARW + "</span></span></span></a>" +
      '<a class="mm-v" href="#/matematicas/juegos"><span class="mm-th" style="background:#DCF4EA"><img src="vitrina-juegos.webp" alt="" loading="lazy"><span class="mm-vk">Juegos</span></span>' +
        '<span class="mm-tx"><b>Juegos</b><small>Aprende jugando, por nivel y a tu ritmo.</small><span class="mm-ft"><span class="mm-chips"><em class="c2">De primaria a prepa</em></span><span class="mm-go">' + ARW + "</span></span></span></a>" +
      '<a class="mm-mini" href="#/matematicas/imprimir"><span class="ic">' + PRINT + "</span><span><b>Hojas para imprimir</b><small>Genera hojas por grado y tema, con clave de respuestas.</small></span></a>";
    return page("Matemáticas", html);
  }

  /* ---------- Pregunta (examen y práctica) ---------- */
  function qHtml(q, mode) {
    var h = '<p class="mm-q">' + q.q + "</p>" + (q.v || "");
    if (q.t === "mc") h += '<div class="mm-opts">' + q.o.map(function (o, i) { return '<button type="button" class="mm-opt" data-o="' + i + '">' + o.h + "</button>"; }).join("") + "</div>";
    else if (q.t === "num") h += '<div class="mm-inrow"><button type="button" class="mm-sign" aria-label="Cambiar signo">\u00b1</button><input class="mm-in" data-in="a" inputmode="decimal" autocomplete="off" placeholder="Tu respuesta"></div>';
    else h += '<div class="mm-fin"><input class="mm-in" data-in="n" inputmode="numeric" autocomplete="off" aria-label="Numerador"><hr><input class="mm-in" data-in="d" inputmode="numeric" autocomplete="off" aria-label="Denominador"></div>';
    if (mode === "help") h += '<button type="button" class="mm-rec" data-rec>' + BULB + 'Recuerda</button><div class="mm-hint" data-hint hidden>' + q.h + "</div>";
    return h;
  }
  function wireQ(box, q, onReady) {
    var sel = null;
    box.querySelectorAll("[data-o]").forEach(function (b) { b.onclick = function () { box.querySelectorAll("[data-o]").forEach(function (x) { x.classList.remove("sel"); }); b.classList.add("sel"); sel = Number(b.dataset.o); onReady(true); }; });
    var ins = box.querySelectorAll("[data-in]"); ins.forEach(function (i) { i.oninput = function () { onReady(Array.prototype.every.call(ins, function (x) { return x.value.trim() !== ""; })); }; });
    var sg = box.querySelector(".mm-sign"); if (sg) sg.onclick = function () { var i = box.querySelector('[data-in="a"]'); i.value = i.value.charAt(0) === "-" ? i.value.slice(1) : "-" + i.value; i.oninput(); i.focus(); };
    var rc = box.querySelector("[data-rec]"); if (rc) rc.onclick = function () { var hn = box.querySelector("[data-hint]"); hn.hidden = !hn.hidden; };
    if (ins[0]) setTimeout(function () { try { ins[0].focus({ preventScroll: true }); } catch (e) {} }, 60);
    return function () { if (q.t === "mc") return sel; if (q.t === "num") return box.querySelector('[data-in="a"]').value; return [box.querySelector('[data-in="n"]').value, box.querySelector('[data-in="d"]').value]; };
  }

  /* ---------- Math Level Up ---------- */
  function vLevelUp() {
    var d = load(), g0 = d ? d.grade : 0;
    var groups = [["MOVA Kids", "#FF8FC0", [1, 2]], ["MOVA Children", "#C7B5FF", [3, 4, 5, 6]], ["MOVA Teens", "#D3F36B", [7, 8, 9, 10]]];
    var html = '<div id="mm-lu">' + hero({ dk: 1, k: "Examen adaptativo", h: "Math Level Up", p: "Elige tu grado escolar. El examen empieza en lo que ya deberías dominar y se adapta a cada respuesta." }) +
      '<div class="mm-card"><b style="font-family:\'Bricolage Grotesque\',sans-serif;font-size:18px">¿En qué grado estás?</b>' +
      groups.map(function (g) { return '<div class="mm-gsec"><i style="background:' + g[1] + '"></i>' + g[0] + '</div><div class="mm-gr">' + g[2].map(function (n) { return '<button type="button" class="mm-gb' + (n === g0 ? " on" : "") + '" data-g="' + n + '">' + GRADES[n].n + "</button>"; }).join("") + "</div>"; }).join("") + "</div>" +
      '<div class="mm-card" style="margin-top:12px"><b style="font-family:\'Bricolage Grotesque\',sans-serif;font-size:18px;display:block;margin-bottom:10px">Antes de empezar</b><ul class="mm-ul">' +
      "<li>Cada pregunta depende de cómo contestaste la anterior: si aciertas, avanzas; si no, el examen busca dónde reforzar.</li><li>Contesta con calma. Si adivinas, te dará preguntas que no son para ti.</li><li>Ten a la mano lápiz y una hoja para hacer tus operaciones.</li><li>No hay calificación: al terminar verás tu mapa matemático y tu ruta.</li>" +
      (d && !due(d) ? "<li>Tu próximo Math Level Up es en " + fmonth(d.next) + ". Si lo presentas antes, tu mapa actual se reemplaza.</li>" : "") +
      '</ul></div><div class="mm-stack"><button type="button" class="mm-btn dk" data-start' + (g0 ? "" : " disabled") + ">Empezar</button></div></div>";
    return page("Math Level Up", html, function (root) {
      var G = g0, box = root.querySelector("#mm-lu"), start = root.querySelector("[data-start]");
      root.querySelectorAll("[data-g]").forEach(function (b) { b.onclick = function () { root.querySelectorAll("[data-g]").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); G = Number(b.dataset.g); start.disabled = false; }; });
      start.onclick = function () { if (G) run(box, new Exam(G)); };
    });
  }
  function run(box, ex) {
    var q = ex.next(); if (!q) { ex.finish(); location.hash = "#/matematicas/mapa"; return; }
    box.innerHTML = '<div class="mm-prog"><i style="width:' + Math.min(100, Math.round(ex.asked / ex.cap * 100)) + '%"></i></div><div class="mm-sh" style="margin-top:0"><b>Pregunta ' + (ex.asked + 1) + "</b><small>" + GRADES[ex.G].n + " · Math Level Up</small></div>" +
      '<div class="mm-card" data-q>' + qHtml(q, "exam") + '</div><div class="mm-stack"><button type="button" class="mm-btn dk" data-next disabled>Siguiente</button></div>';
    var nx = box.querySelector("[data-next]"), get = wireQ(box.querySelector("[data-q]"), q, function (ok) { nx.disabled = !ok; });
    var go = function () { if (nx.disabled) return; ex.answer(get()); window.scrollTo(0, 0); run(box, ex); };
    nx.onclick = go; box.querySelectorAll(".mm-in").forEach(function (i) { i.onkeydown = function (e) { if (e.key === "Enter") go(); }; });
  }

  /* ---------- Mi mapa matemático ---------- */
  function voice(d) {
    var E = d.ejes, k = Object.keys(E), nm2 = function (e) { return "<b>" + EJES[e].n + "</b>"; };
    var good = k.filter(function (e) { return E[e] === "dom"; }).map(nm2), weak = k.filter(function (e) { return E[e] === "ref"; }).map(nm2);
    if (!weak.length && d.rz !== "ref" && good.length === k.length) return "¡Excelente trabajo! Dominas lo que corresponde a tu grado. En tu ruta seguimos con los temas nuevos del ciclo.";
    var s = good.length ? "Tienes bases sólidas en " + good[0] + (good[1] ? " y en " + good[1] : "") + (good.length > 2 ? ", entre otras áreas" : "") + ". " : "Vamos paso a paso. ";
    if (weak.length) s += "Primero vamos a fortalecer " + weak[0] + (weak[1] ? " y también " + weak[1] : "") + (weak.length > 2 ? "; después seguiremos con " + (weak.length - 2 === 1 ? "un área más" : (weak.length - 2) + " áreas más") : "") + ". Es lo que más te va a ayudar en los próximos tres meses.";
    else s += "Tus áreas en desarrollo van por buen camino; con tu ruta las vamos a consolidar.";
    if (d.rz === "ref") s += " También vamos a practicar la lectura de problemas: leer con calma y planear antes de operar.";
    return s;
  }
  function vMapa() {
    var d = load(); if (!d) { location.hash = "#/matematicas/levelup"; return page("Mi mapa matemático", ""); }
    var rows = Object.keys(d.ejes).map(function (e) { return '<a class="mm-row" href="#/matematicas/habilidades/' + e + '"><span class="t"><span class="mm-gl" style="background:' + EJES[e].c + '">' + EJES[e].g + "</span>" + EJES[e].n + "</span>" + st(d.ejes[e]) + "</a>"; }).join("");
    if (d.rz) rows += '<div class="mm-row"><span class="t"><span class="mm-gl" style="background:#FFF1C2">?</span>Razonamiento y resolución de problemas</span>' + st(d.rz) + "</div>";
    var pro = (d.pro || []).map(function (id) { return SKI[id]; }).filter(Boolean);
    if (pro.length) rows += '<div class="mm-row"><span class="t" style="display:block"><b style="display:block;margin-bottom:3px">Próximamente en tu ciclo</b><small style="color:#6A6F85;font-weight:500">' + pro.map(function (s) { return esc(s.n); }).join(" · ") + "</small></span>" + st("pro") + "</div>";
    var html = hero({ c: "#D3F36B", k: "Tu diagnóstico", h: "Mi mapa matemático", p: GRADES[d.grade].n + " · " + fdate(d.date) }) +
      '<div class="mm-note"><div class="w"><i>M</i>De tu maestra</div>' + voice(d) + "</div>" +
      '<div class="mm-sh"><b>Tus habilidades</b><small>Toca un área para practicar sus temas.</small></div><div class="mm-card" style="padding:4px 18px">' + rows + "</div>" +
      '<div class="mm-stack"><a class="mm-btn dk" href="#/matematicas/ruta">Ver mi ruta</a>' + (due(d) ? '<a class="mm-btn gh" href="#/matematicas/levelup">Presentar mi nuevo Math Level Up</a>' : '<p style="text-align:center;font-size:13.5px;color:#6A6F85;margin:4px 0 0">Tu próximo Math Level Up será en ' + fmonth(d.next) + ".</p>") + "</div>";
    return page("Mi mapa matemático", html);
  }

  /* ---------- Mi ruta ---------- */
  function vRuta() {
    var d = load(); if (!d) { location.hash = "#/matematicas/levelup"; return page("Mi ruta", ""); }
    var L = route(d), first = true;
    var items = L.map(function (s, i) { var dn = d.done && d.done[s.id], isPro = (d.pro || []).indexOf(s.id) >= 0 && !d.skills[s.id], cls = dn ? "done" : first ? "today" : ""; if (!dn && first) first = false;
      var sub = dn ? "Dominada" : cls === "today" ? "Sesión de hoy" : isPro ? "Tema nuevo de tu ciclo" : (d.skills[s.id] === "ref" ? "Por reforzar" : "En desarrollo");
      return '<li><a href="#/matematicas/practica/' + s.id + '"><span class="mm-pd ' + cls + '">' + (dn ? "\u2713" : i + 1) + "</span><span><b>" + esc(s.n) + "</b><small>" + EJES[s.e].n + " · " + sub + "</small></span></a></li>"; }).join("");
    var html = hero({ c: "#C7B5FF", k: "MOVA Math", h: "Mi ruta", p: "Se arma con tu Math Level Up y avanza cada vez que dominas un tema.", art: 1 }) +
      (L.length ? '<div class="mm-card"><ul class="mm-path">' + items + "</ul></div>" : '<div class="mm-note">¡Dominaste todo lo evaluado! Explora nuevos temas en Aprende por habilidad.</div>');
    return page("Mi ruta", html);
  }

  /* ---------- Aprende por habilidad ---------- */
  function vHab(e) {
    var d = load();
    if (!e || !EJES[e]) {
      var rows = "NFEJPAGD".split("").map(function (k) { return '<a class="mm-row" href="#/matematicas/habilidades/' + k + '"><span class="t"><span class="mm-gl" style="background:' + EJES[k].c + '">' + EJES[k].g + "</span>" + EJES[k].n + "</span>" + (d && d.ejes[k] ? st(d.ejes[k]) : '<span class="mm-go" style="width:36px;height:36px">' + ARW + "</span>") + "</a>"; }).join("");
      return page("Aprende por habilidad", hero({ c: "#FFE58A", k: "MOVA Math", h: "Aprende por habilidad", p: "Elige un área. Dentro avanzas de lo básico a lo avanzado.", art: 1 }) + '<div class="mm-card" style="padding:4px 18px">' + rows + "</div>");
    }
    var list = SK.filter(function (s) { return s.e === e; }).sort(function (a, b) { return a.g - b.g; }), html = hero({ c: EJES[e].c, k: "Habilidad", h: EJES[e].n, p: list.length + " temas en tres niveles.", art: 1 });
    [["Base", "#D3F36B"], ["Intermedio", "#C7B5FF"], ["Avanzado", "#FF8FC0"]].forEach(function (lv) {
      var it = list.filter(function (s) { return level(s.g) === lv[0]; }); if (!it.length) return;
      html += '<div class="mm-gsec"><i style="background:' + lv[1] + '"></i>' + lv[0] + '</div><div class="mm-card" style="padding:4px 18px">' + it.map(function (s) { return '<a class="mm-row" href="#/matematicas/practica/' + s.id + '"><span class="t">' + esc(s.n) + "</span>" + (d && d.skills[s.id] ? st(d.skills[s.id]) : '<span class="mm-go" style="width:36px;height:36px">' + ARW + "</span>") + "</a>"; }).join("") + "</div>";
    });
    return page(EJES[e].n, html);
  }

  /* ---------- Práctica con ayuda y Comprueba ---------- */
  function vPract(id) {
    var s = SKI[id]; if (!s) return null;
    var html = '<div class="mm-hero" style="--c:' + EJES[s.e].c + ';min-height:0;padding:20px 22px"><span class="mm-dot a"></span><div class="mm-hx" style="max-width:100%"><span class="mm-k">' + EJES[s.e].n + " · " + level(s.g) + '</span><h1 style="font-size:28px">' + esc(s.n) + '</h1></div></div><div id="mm-pr"></div>';
    return page(s.n, html, function (root) { var bx = root.querySelector("#mm-pr"); startSkill(bx, s); });
  }
  function lessonOf(s) { return window.MovaMathLessons && window.MovaMathLessons.get(s.id); }
  function startSkill(box, s) {
    if (lessonOf(s)) window.MovaMathLessons.render(box, s, function () { practice(box, s); }, cloud);
    else practice(box, s);
  }
  function practice(box, s) {
    var HELP = 6, CHK = 5, i = 0, phase = "help", ok = 0, wrongs = [], hok = 0, t0 = Date.now();
    function secs() { var x = Math.round((Date.now() - t0) / 1000); t0 = Date.now(); return Math.min(x, 3600); }
    function step() {
      if (phase === "help" && i >= HELP) { cloud("math-practica", s.id, hok, HELP, { kind: "math-practica", skill: s.n, eje: s.e, secs: secs() }); hok = 0;
        box.innerHTML = '<div class="mm-card mm-res"><div class="big">Comprueba</div><p>Ahora resuelve ' + CHK + " ejercicios sin pistas. Si aciertas " + (CHK - 1) + " o más, este tema sube a <b>Dominado</b> en tu mapa.</p></div>" + '<div class="mm-stack"><button type="button" class="mm-btn dk" data-go>Empezar</button><button type="button" class="mm-btn gh" data-more>Practicar un poco más</button></div>';
        box.querySelector("[data-go]").onclick = function () { phase = "check"; i = 0; ok = 0; wrongs = []; step(); }; box.querySelector("[data-more]").onclick = function () { i = 0; t0 = Date.now(); step(); }; return; }
      if (phase === "check" && i >= CHK) return finish();
      var q = s.gen(), tot = phase === "help" ? HELP : CHK;
      box.innerHTML = (phase === "help" && lessonOf(s) ? '<button type="button" class="ls-back" data-les><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h11a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3z"/></svg>Ver la lección</button>' : "") + '<div class="mm-prog"><i style="width:' + Math.round(i / tot * 100) + '%"></i></div><div class="mm-sh" style="margin-top:0"><b>' + (phase === "help" ? "Practica con ayuda" : "Comprueba") + "</b><small>Ejercicio " + (i + 1) + " de " + tot + "</small></div>" +
        '<div class="mm-card" data-q>' + qHtml(q, phase === "help" ? "help" : "check") + '<div data-fb></div></div><div class="mm-stack"><button type="button" class="mm-btn dk" data-next disabled>' + (phase === "help" ? "Revisar" : "Siguiente") + "</button></div>";
      var lb = box.querySelector("[data-les]"); if (lb) lb.onclick = function () { window.scrollTo(0, 0); window.MovaMathLessons.render(box, s, function () { step(); }, null); };
      var nx = box.querySelector("[data-next]"), card = box.querySelector("[data-q]"), get = wireQ(card, q, function (r) { nx.disabled = !r; }), revised = false;
      var go = function () {
        if (nx.disabled) return;
        if (phase === "check") { var r = check(q, get()); if (r.ok) ok++; else wrongs.push({ q: q, e: r.e }); i++; window.scrollTo(0, 0); return step(); }
        if (revised) { i++; window.scrollTo(0, 0); return step(); }
        var res = check(q, get()); revised = true; if (res.ok) hok++;
        card.querySelectorAll("input,button.mm-opt,.mm-sign,[data-rec]").forEach(function (x) { x.disabled = true; });
        if (q.t === "mc") card.querySelectorAll("[data-o]").forEach(function (b) { var o = q.o[Number(b.dataset.o)]; if (o.ok) b.classList.add("ok"); else if (b.classList.contains("sel")) b.classList.add("no"); });
        card.querySelector("[data-fb]").innerHTML = res.ok ? '<div class="mm-fb ok"><b>¡Exacto!</b> ' + q.h + "</div>" : '<div class="mm-fb no">' + (res.e ? res.e + " " : "") + "La respuesta correcta es <b>" + showAns(q) + "</b>.<br>" + q.h + "</div>";
        nx.textContent = i + 1 >= HELP ? "Continuar" : "Siguiente";
      };
      nx.onclick = go; card.querySelectorAll(".mm-in").forEach(function (x) { x.onkeydown = function (e) { if (e.key === "Enter") go(); }; });
    }
    function finish() {
      var pass = ok >= CHK - 1, d = load();
      if (pass && d) { d.skills[s.id] = "dom"; d.done = d.done || {}; d.done[s.id] = 1; recompute(d); store(d); }
      cloud("math-comprueba", s.id, ok, CHK, { kind: "math-comprueba", skill: s.n, eje: s.e, pass: pass, secs: secs() });
      var nextS = d ? route(d).filter(function (x) { return !(d.done && d.done[x.id]); })[0] : null;
      box.innerHTML = '<div class="mm-card mm-res"><div class="big">' + ok + " de " + CHK + "</div><p>" + (pass ? "¡Muy bien! Dominaste <b>" + esc(s.n) + "</b>." + (d ? " Tu mapa ya se actualizó." : "") : "Todavía no, pero vas avanzando. Revisa tus errores y vuelve a intentarlo: así se aprende.") + "</p></div>" +
        (wrongs.length ? '<div class="mm-sh"><b>Revisa estos ejercicios</b></div>' + wrongs.map(function (w) { return '<div class="mm-card" style="margin-bottom:10px"><p class="mm-q" style="margin-bottom:8px">' + w.q.q + '</p><div class="mm-fb no" style="margin-top:0">' + (w.e ? w.e + " " : "") + "Respuesta correcta: <b>" + showAns(w.q) + "</b>.<br>" + w.q.h + "</div></div>"; }).join("") : "") +
        '<div class="mm-stack">' + (pass && nextS ? '<a class="mm-btn dk" href="#/matematicas/practica/' + nextS.id + '">Siguiente tema: ' + esc(nextS.n) + "</a>" : "") + (!pass ? '<button type="button" class="mm-btn dk" data-again>Practicar de nuevo</button>' : "") + '<a class="mm-btn gh" href="#/matematicas/ruta">Volver a mi ruta</a></div>';
      var ag = box.querySelector("[data-again]"); if (ag) ag.onclick = function () { phase = "help"; i = 0; hok = 0; t0 = Date.now(); step(); };
      window.scrollTo(0, 0);
    }
    step();
  }

  /* ---------- Conexión con la app ---------- */
  var installed = false;
  function install() {
    if (installed) return true;
    if (typeof ROUTES !== "object" || !ROUTES || typeof ROUTES.matematicas !== "function") return false;
    var prev = ROUTES.matematicas;
    var w = function (p) {
      p = p || []; var k = p[0];
      try {
        syncCloud();
        if (!k) return vHome();
        if (k === "levelup") return vLevelUp();
        if (k === "mapa") return vMapa();
        if (k === "ruta") return vRuta();
        if (k === "habilidades") return vHab(p[1]);
        if (k === "practica") { var v = vPract(p[1]); if (v) return v; }
      } catch (e) { if (window.console) console.error("MOVA Math", e); }
      return prev(p);
    };
    for (var x in prev) if (Object.prototype.hasOwnProperty.call(prev, x)) w[x] = prev[x];
    w.__ms = true; delete w.__gate; ROUTES.matematicas = w; installed = true;
    if (/^#\/matematicas/.test(location.hash) && typeof router === "function") router();
    return true;
  }
  var tries = 0;
  function boot() { if (install() || ++tries > 60) return; setTimeout(boot, 250); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(boot, 0); }); else setTimeout(boot, 0);
  window.MovaMath = { skills: SK, ejes: EJES, grades: GRADES, stages: STAGE, ski: SKI, load: load, route: route, months: MONTHS };
})();
