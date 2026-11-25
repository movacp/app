/* MOVA Math · Temas por grado
   Lista de temas por grado y unidad, igual que el índice de los libros «Matemáticas en Movimiento».
   Cada tema trae Aprende, Mira cómo se hace y Practica en tres niveles (Nivelación, Mi grado y Reto)
   con ejercicios variados: opción múltiple, operaciones en columna, colorear, recta numérica,
   ordenar, relacionar, clasificar, completar tablas y construir gráficas.
   Archivo propio: no modifica otros archivos. Los temas de cada grado viven en temas-gN.js
   y se cargan al abrir el grado. */
(function () {
  "use strict";
  if (window.MovaTemas) return;

  var INK = "#15192B", LIME = "#D3F36B", LAV = "#C7B5FF", PINK = "#FF9CC9", SKY = "#9FD8FF", BUT = "#FFE58A", MINT = "#9BE7C4", GRID = "#ECE9F3", MUTE = "#6A6F85", ROSE = "#FFE1EA";
  var UCOL = [LAV, LIME, PINK, SKY, BUT, MINT, "#FFB8DC", "#93A6FF", "#BDF0D8", "#FFD0A8"];

  var GRADES = [
    { g: 2, n: "2° de primaria", st: "MOVA Kids", c: "#FF8FC0" },
    { g: 3, n: "3° de primaria", st: "MOVA Children", c: LAV },
    { g: 4, n: "4° de primaria", st: "MOVA Children", c: LAV, f: "temas-g4.js" },
    { g: 7, n: "1° de secundaria", st: "MOVA Teens", c: LIME },
    { g: 8, n: "2° de secundaria", st: "MOVA Teens", c: LIME },
    { g: 9, n: "3° de secundaria", st: "MOVA Teens", c: LIME },
    { g: 10, n: "1er semestre de prepa", st: "MOVA Teens", c: LIME, f: "temas-g10.js" }
  ];
  var DATA = {}, LOADING = {};
  var LEVELS = [
    { k: "niv", n: "Nivelación", d: "Para repasar lo básico, con números pequeños y mucha ayuda visual.", c: "c3", N: 8 },
    { k: "gra", n: "Mi grado", d: "Lo que pide tu libro de este grado.", c: "c2", N: 10 },
    { k: "ret", n: "Reto", d: "Problemas y números más grandes para quien ya domina el tema.", c: "c1", N: 8 }
  ];

  /* ---------- Utilidades ---------- */
  var R = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); };
  var pick = function (a) { return a[Math.floor(Math.random() * a.length)]; };
  var shuf = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  var rnd = function (x, d) { var p = Math.pow(10, d == null ? 6 : d); return Math.round(x * p) / p; };
  var gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  function fmt(n, d) {
    var neg = n < 0; n = Math.abs(n);
    var s = d == null ? String(rnd(n, 6)) : n.toFixed(d), p = s.split("."), i = p[0], o = "";
    while (i.length > 3) { o = "," + i.slice(-3) + o; i = i.slice(0, -3); }
    return (neg ? "−" : "") + i + o + (p[1] ? "." + p[1] : "");
  }
  var money = function (n) { return "$" + fmt(n, Number.isInteger(n) ? null : 2); };
  var fr = function (n, d) { return '<span class="mt-fr"><span>' + n + "</span><span>" + d + "</span></span>"; };
  var NAMES = ["Ana", "Luis", "Sofía", "Diego", "Valeria", "Mateo", "Camila", "Emilio", "Regina", "Santiago", "Paula", "Iker", "Lucía", "Leo", "Renata", "Tomás"];
  var nm = function () { return pick(NAMES); };

  /* Números en palabras (hasta 999,999) */
  var U0 = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
  var D0 = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  var C0 = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
  function w99(n) { if (n < 30) return U0[n]; var d = Math.floor(n / 10), u = n % 10; return D0[d] + (u ? " y " + U0[u] : ""); }
  function w999(n) { if (n === 100) return "cien"; var c = Math.floor(n / 100), r = n % 100; return (c ? C0[c] : "") + (c && r ? " " : "") + (r || !c ? w99(r) : ""); }
  function apoc(s) { return s.replace(/veintiuno$/, "veintiún").replace(/uno$/, "un"); }
  function words(n) {
    if (n === 0) return "cero";
    var m = Math.floor(n / 1000), r = n % 1000, s = "";
    if (m) s = (m === 1 ? "mil" : apoc(w999(m)) + " mil");
    if (r) s += (s ? " " : "") + w999(r);
    return s;
  }
  function wordsDec(e, c, d) { /* e enteros y c centésimos (d=2) o décimos (d=1) */
    var se = (e === 1 ? "un entero" : apoc(words(e)) + " enteros");
    if (!c) return se;
    var unit = d === 1 ? (c === 1 ? "décimo" : "décimos") : (c === 1 ? "centésimo" : "centésimos");
    return se + " " + (c === 1 ? "un" : apoc(words(c))) + " " + unit;
  }

  /* ---------- Constructores de preguntas ---------- */
  function base(t, q, o) { o = o || {}; var x = { t: t, q: q }; for (var k in o) x[k] = o[k]; return x; }
  function MC(q, ok, wr, o) {
    var seen = {}, opts = [{ h: String(ok), ok: true }]; seen[String(ok)] = 1;
    (wr || []).forEach(function (w) { if (!Array.isArray(w)) w = [w, ""]; var k = String(w[0]); if (!seen[k]) { seen[k] = 1; opts.push({ h: k, e: w[1] || "" }); } });
    var x = base("mc", q, o); x.o = (o && o.keep) ? opts.slice(0, o.max || 4) : shuf(opts.slice(0, (o && o.max) || 4)); return x;
  }
  function TF(q, isTrue, o) { var x = base("mc", q, o); x.o = [{ h: "Verdadero", ok: !!isTrue, e: (o && o.ef) || "" }, { h: "Falso", ok: !isTrue, e: (o && o.et) || "" }]; x.keep = 1; return x; }
  function NUM(q, a, o) { var x = base("num", q, o); x.a = a; x.tr = (o && o.tr) || {}; delete x.tr[String(a)]; return x; }
  function FR(q, n, d, o) { var x = base("frac", q, o); x.a = [n, d]; x.tr = (o && o.tr) || {}; return x; }
  function FILL(q, lay, ans, o) { var x = base("fill", q, o); x.lay = lay; x.ans = ans; return x; }
  function COL(op, a, b, o) {
    o = o || {}; var d = o.dec || 0, res = op === "+" ? a + b : op === "−" ? a - b : a * b;
    var x = base("col", o.q || "Resuelve en columna.", o); x.op = op; x.A = a; x.B = b; x.d = d; x.a = rnd(res, d + 2); x.tr = o.tr || {}; delete x.tr[String(x.a)]; return x;
  }
  function SHADE(q, kind, n, k, o) { var x = base("shade", q, o); x.kind = kind; x.n = n; x.k = k; return x; }
  function ORDER(q, items, o) { var x = base("order", q, o); x.items = items; x.perm = shuf(items.map(function (_, i) { return i; })); if (x.perm.every(function (v, i) { return v === i; })) x.perm.reverse(); return x; }
  function LINE(q, ticks, ans, o) { var x = base("line", q, o); x.ticks = ticks; x.a = ans; return x; }
  function MATCH(q, pairs, o) { var x = base("match", q, o); x.pairs = pairs; x.rp = shuf(pairs.map(function (_, i) { return i; })); return x; }
  function SORT(q, buckets, items, o) { var x = base("sort", q, o); x.buckets = buckets; x.items = shuf(items); return x; }
  function BARS(q, cats, vals, max, o) { var x = base("bars", q, o); x.cats = cats; x.vals = vals; x.max = max; return x; }

  /* ---------- Dibujos (SVG) ---------- */
  function svg(w, h, body, cls) { return '<svg class="' + (cls || "mt-svg") + '" viewBox="0 0 ' + w + " " + h + '" role="img" xmlns="http://www.w3.org/2000/svg" font-family="Plus Jakarta Sans, sans-serif">' + body + "</svg>"; }
  function tx(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-size="' + (o.fs || 14) + '" font-weight="' + (o.fw || 800) + '" fill="' + (o.c || INK) + '">' + s + "</text>"; }
  var V = {};
  V.bar = function (n, k, c, o) { o = o || {}; var w = o.w || 280, h = o.h || 44, sw = w / n, s = ""; for (var i = 0; i < n; i++) s += '<rect x="' + (10 + i * sw) + '" y="6" width="' + sw + '" height="' + h + '" fill="' + (i < k ? (c || LAV) : "#fff") + '" stroke="' + INK + '" stroke-width="2"/>'; s += '<rect x="10" y="6" width="' + w + '" height="' + h + '" fill="none" stroke="' + INK + '" stroke-width="3" rx="4"/>'; if (o.lab) s += tx(w / 2 + 10, h + 30, o.lab, { fs: 14, fw: 700, c: MUTE }); return svg(w + 20, h + (o.lab ? 40 : 14), s); };
  V.bars = function (rows) { var s = "", H = rows.length * 54 + 4; rows.forEach(function (r, j) { var n = r[0], k = r[1], sw = 220 / n; for (var i = 0; i < n; i++) s += '<rect x="' + (10 + i * sw) + '" y="' + (6 + j * 54) + '" width="' + sw + '" height="38" fill="' + (i < k ? (r[2] || LAV) : "#fff") + '" stroke="' + INK + '" stroke-width="2"/>'; s += '<rect x="10" y="' + (6 + j * 54) + '" width="220" height="38" fill="none" stroke="' + INK + '" stroke-width="2.6" rx="4"/>'; if (r[3]) s += '<foreignObject x="236" y="' + (j * 54) + '" width="64" height="52"><div xmlns="http://www.w3.org/1999/xhtml" class="mt-fo">' + r[3] + "</div></foreignObject>"; }); return svg(300, H, s); };
  V.pie = function (n, k, c, o) { o = o || {}; var r = o.r || 70, cx = r + 8, cy = r + 8, s = ""; if (n === 1) s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + (k ? c || PINK : "#fff") + '" stroke="' + INK + '" stroke-width="2.5"/>'; else for (var i = 0; i < n; i++) { var a0 = -Math.PI / 2 + i * 2 * Math.PI / n, a1 = a0 + 2 * Math.PI / n; s += '<path d="M' + cx + " " + cy + " L" + (cx + r * Math.cos(a0)).toFixed(2) + " " + (cy + r * Math.sin(a0)).toFixed(2) + " A" + r + " " + r + " 0 0 1 " + (cx + r * Math.cos(a1)).toFixed(2) + " " + (cy + r * Math.sin(a1)).toFixed(2) + 'Z" fill="' + (i < k ? (c || PINK) : "#fff") + '" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/>'; } return svg(2 * r + 16, 2 * r + 16, s, "mt-svg sm"); };
  V.set = function (n, k, c, cols) { cols = cols || Math.min(n, 6); var rows = Math.ceil(n / cols), s = ""; for (var i = 0; i < n; i++) s += '<circle cx="' + (26 + (i % cols) * 44) + '" cy="' + (26 + Math.floor(i / cols) * 44) + '" r="16" fill="' + (i < k ? (c || SKY) : "#fff") + '" stroke="' + INK + '" stroke-width="2.4"/>'; return svg(cols * 44 + 8, rows * 44 + 8, s, "mt-svg sm"); };
  V.grid100 = function (k, c) { var s = ""; for (var i = 0; i < 100; i++) { var col = Math.floor(i / 10), row = i % 10; s += '<rect x="' + (6 + col * 18) + '" y="' + (6 + row * 18) + '" width="18" height="18" fill="' + (i < k ? (c || LIME) : "#fff") + '" stroke="#9BA0B8" stroke-width="1"/>'; } s += '<rect x="6" y="6" width="180" height="180" fill="none" stroke="' + INK + '" stroke-width="2.5"/>'; return svg(192, 192, s, "mt-svg sm"); };
  V.nl = function (a, b, step, o) {
    o = o || {}; var n = Math.round((b - a) / step), W = 320, x0 = 22, x1 = W - 22, sx = (x1 - x0) / n, y = 44, s = "";
    s += '<line x1="' + (x0 - 10) + '" y1="' + y + '" x2="' + (x1 + 10) + '" y2="' + y + '" stroke="' + INK + '" stroke-width="2.5"/>';
    for (var i = 0; i <= n; i++) { var v = rnd(a + i * step, 4), X = x0 + i * sx, lab = o.lab ? o.lab(v, i) : (o.every && i % o.every ? "" : fmt(v)); s += '<line x1="' + X + '" y1="' + (y - 8) + '" x2="' + X + '" y2="' + (y + 8) + '" stroke="' + INK + '" stroke-width="2"/>'; if (lab !== "" && lab != null) s += tx(X, y + 28, lab, { fs: o.fs || 12, fw: 700, c: "#3B3F57" }); }
    (o.marks || []).forEach(function (m) { var X = x0 + (m[0] - a) / step * sx; s += '<circle cx="' + X + '" cy="' + y + '" r="8" fill="' + (m[2] || PINK) + '" stroke="' + INK + '" stroke-width="2"/>' + (m[1] ? tx(X, y - 16, m[1], { fs: 14 }) : ""); });
    (o.hops || []).forEach(function (hp) { var xa = x0 + (hp[0] - a) / step * sx, xb = x0 + (hp[1] - a) / step * sx, mid = (xa + xb) / 2; s += '<path d="M' + xa + " " + (y - 6) + " Q" + mid + " " + (y - 40) + " " + xb + " " + (y - 6) + '" fill="none" stroke="#7A62E8" stroke-width="2.4"/>' + (hp[2] ? tx(mid, y - 30, hp[2], { fs: 12, c: "#7A62E8" }) : ""); });
    return svg(W, 80, s);
  };
  V.blocks = function (num) {
    var th = Math.floor(num / 1000) % 10, h = Math.floor(num / 100) % 10, t = Math.floor(num / 10) % 10, u = num % 10, s = "", x = 8;
    for (var i = 0; i < th; i++) { s += '<g transform="translate(' + x + ',14)"><path d="M0 12 L12 0 L48 0 L36 12Z" fill="#C9B8FF" stroke="' + INK + '" stroke-width="1.6"/><path d="M36 12 L48 0 L48 36 L36 48Z" fill="#A893F2" stroke="' + INK + '" stroke-width="1.6"/><rect x="0" y="12" width="36" height="36" fill="' + LAV + '" stroke="' + INK + '" stroke-width="1.6"/></g>'; x += 54; }
    if (th) x += 6;
    for (i = 0; i < h; i++) { s += '<rect x="' + x + '" y="14" width="34" height="34" fill="' + LIME + '" stroke="' + INK + '" stroke-width="1.6"/>'; for (var k = 1; k < 10; k++) s += '<line x1="' + (x + k * 3.4) + '" y1="14" x2="' + (x + k * 3.4) + '" y2="48" stroke="rgba(21,25,43,.35)" stroke-width=".8"/>'; x += 38; }
    if (h) x += 6;
    for (i = 0; i < t; i++) { s += '<rect x="' + x + '" y="2" width="8" height="58" fill="' + SKY + '" stroke="' + INK + '" stroke-width="1.4"/>'; x += 11; }
    if (t) x += 6;
    for (i = 0; i < u; i++) { s += '<rect x="' + x + '" y="' + (i % 2 ? 40 : 28) + '" width="9" height="9" fill="' + PINK + '" stroke="' + INK + '" stroke-width="1.4"/>'; x += i % 2 ? 12 : 0; }
    return svg(Math.max(120, x + 14), 66, s);
  };
  V.pv = function (num, heads, dec) {
    heads = heads || ["DM", "UM", "C", "D", "U"]; var s = String(num).replace(".", ""), digs = s.padStart(heads.length, " ").split("");
    var cols = ["#E6E2FF", "#FFE1EA", "#FFF1C2", "#DCF4EA", "#DDF0FF", "#FDE7D3", "#E6E2FF"];
    return '<table class="mt-pv"><tr>' + heads.map(function (h, i) { return '<th style="background:' + cols[i % cols.length] + '">' + h + "</th>"; }).join("") + "</tr><tr>" + digs.map(function (d) { return "<td>" + (d === " " ? "" : d) + "</td>"; }).join("") + "</tr></table>";
  };
  V.money = function (pesos, cent) {
    var bills = [500, 200, 100, 50, 20], coins = [10, 5, 2, 1], s = "", x = 6, y = 6, rest = pesos, bc = { 500: "#C7B5FF", 200: "#9BE7C4", 100: "#FF9CC9", 50: "#FFB8DC", 20: "#9FD8FF" };
    bills.forEach(function (b) { while (rest >= b) { if (x > 230) { x = 6; y += 50; } s += '<rect x="' + x + '" y="' + y + '" width="78" height="42" rx="6" fill="' + bc[b] + '" stroke="' + INK + '" stroke-width="2"/><circle cx="' + (x + 58) + '" cy="' + (y + 21) + '" r="11" fill="rgba(255,255,255,.55)"/>' + tx(x + 28, y + 27, "$" + b, { fs: 14 }); x += 84; rest -= b; } });
    if (x > 6) { x = 6; y += 50; }
    coins.forEach(function (c) { while (rest >= c) { if (x > 280) { x = 6; y += 40; } s += '<circle cx="' + (x + 17) + '" cy="' + (y + 17) + '" r="17" fill="' + (c >= 5 ? "#FFE58A" : "#E3E6EE") + '" stroke="' + INK + '" stroke-width="2"/>' + tx(x + 17, y + 22, "$" + c, { fs: 11 }); x += 40; rest -= c; } });
    if (cent) { var cs = [50, 20, 10], cr = cent; cs.forEach(function (c) { while (cr >= c) { if (x > 280) { x = 6; y += 40; } s += '<circle cx="' + (x + 14) + '" cy="' + (y + 17) + '" r="14" fill="#F3D9B1" stroke="' + INK + '" stroke-width="2"/>' + tx(x + 14, y + 21, c + "¢", { fs: 10 }); x += 34; cr -= c; } }); }
    return svg(330, y + 46, s);
  };
  V.clock = function (h, m) {
    var s = '<circle cx="80" cy="80" r="72" fill="#fff" stroke="' + INK + '" stroke-width="4"/>';
    for (var i = 1; i <= 12; i++) { var a = i * Math.PI / 6 - Math.PI / 2; s += tx((80 + 56 * Math.cos(a)).toFixed(1), (85 + 56 * Math.sin(a)).toFixed(1), i, { fs: 14 }); }
    for (i = 0; i < 60; i++) { var b = i * Math.PI / 30, r0 = i % 5 ? 67 : 63; s += '<line x1="' + (80 + r0 * Math.cos(b)).toFixed(1) + '" y1="' + (80 + r0 * Math.sin(b)).toFixed(1) + '" x2="' + (80 + 71 * Math.cos(b)).toFixed(1) + '" y2="' + (80 + 71 * Math.sin(b)).toFixed(1) + '" stroke="' + INK + '" stroke-width="' + (i % 5 ? 1 : 2.2) + '"/>'; }
    var ha = ((h % 12) + m / 60) * Math.PI / 6 - Math.PI / 2, ma = m * Math.PI / 30 - Math.PI / 2;
    s += '<line x1="80" y1="80" x2="' + (80 + 36 * Math.cos(ha)).toFixed(1) + '" y2="' + (80 + 36 * Math.sin(ha)).toFixed(1) + '" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/>';
    s += '<line x1="80" y1="80" x2="' + (80 + 56 * Math.cos(ma)).toFixed(1) + '" y2="' + (80 + 56 * Math.sin(ma)).toFixed(1) + '" stroke="#7A62E8" stroke-width="4" stroke-linecap="round"/><circle cx="80" cy="80" r="6" fill="' + INK + '"/>';
    return svg(160, 160, s, "mt-svg sm");
  };
  V.cal = function (name, start, days, mark) {
    var hd = ["L", "M", "M", "J", "V", "S", "D"], s = '<rect x="2" y="2" width="296" height="40" rx="12" fill="' + INK + '"/>' + tx(150, 28, name, { fs: 16, c: "#fff" });
    hd.forEach(function (d, i) { s += tx(24 + i * 42, 62, d, { fs: 12, c: MUTE }); });
    for (var d = 1; d <= days; d++) { var p = start + d - 1, cx = 24 + (p % 7) * 42, cy = 90 + Math.floor(p / 7) * 34, mk = mark && mark.indexOf(d) > -1; if (mk) s += '<circle cx="' + cx + '" cy="' + (cy - 5) + '" r="15" fill="' + PINK + '"/>'; s += tx(cx, cy, d, { fs: 13, fw: mk ? 800 : 600 }); }
    var rows = Math.ceil((start + days) / 7); return svg(300, 80 + rows * 34, s);
  };
  V.rect = function (w, h, la, lb, o) { o = o || {}; var sc = Math.min(200 / w, 110 / h), W = w * sc, H = h * sc, x = (300 - W) / 2, s = '<rect x="' + x + '" y="16" width="' + W + '" height="' + H + '" fill="' + (o.c || SKY) + '" stroke="' + INK + '" stroke-width="2.5" rx="3"/>'; if (la) s += tx(x + W / 2, 16 + H + 24, la, { fs: 15 }); if (lb) s += tx(x + W + 10, 16 + H / 2 + 5, lb, { fs: 15, a: "start" }); if (o.grid) { for (var i = 1; i < w; i++) s += '<line x1="' + (x + i * sc) + '" y1="16" x2="' + (x + i * sc) + '" y2="' + (16 + H) + '" stroke="rgba(21,25,43,.35)"/>'; for (i = 1; i < h; i++) s += '<line x1="' + x + '" y1="' + (16 + i * sc) + '" x2="' + (x + W) + '" y2="' + (16 + i * sc) + '" stroke="rgba(21,25,43,.35)"/>'; } return svg(300, H + 50, s); };
  V.tri = function (b, h, lb, lh) { var sc = Math.min(200 / b, 120 / h), W = b * sc, H = h * sc, x = (300 - W) / 2, top = x + W * .35, s = '<polygon points="' + x + "," + (16 + H) + " " + (x + W) + "," + (16 + H) + " " + top + ",16" + '" fill="' + PINK + '" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"/><line x1="' + top + '" y1="16" x2="' + top + '" y2="' + (16 + H) + '" stroke="' + INK + '" stroke-width="2" stroke-dasharray="6 5"/><rect x="' + top + '" y="' + (4 + H) + '" width="12" height="12" fill="none" stroke="' + INK + '" stroke-width="1.6"/>'; s += tx(x + W / 2, H + 40, lb, { fs: 15 }) + tx(top + 8, 16 + H / 2, lh, { fs: 15, a: "start" }); return svg(300, H + 50, s); };
  V.gfig = function (cells, o) { /* figura en cuadrícula: cells = [[x,y],...] */
    o = o || {}; var mx = 0, my = 0; cells.forEach(function (c) { mx = Math.max(mx, c[0]); my = Math.max(my, c[1]); }); var cw = Math.max(mx + 3, 8), ch = Math.max(my + 3, 5), u = Math.min(30, 300 / cw), s = "";
    for (var i = 0; i <= cw; i++) s += '<line x1="' + (i * u + 4) + '" y1="4" x2="' + (i * u + 4) + '" y2="' + (ch * u + 4) + '" stroke="' + GRID + '" stroke-width="1.3"/>';
    for (i = 0; i <= ch; i++) s += '<line x1="4" y1="' + (i * u + 4) + '" x2="' + (cw * u + 4) + '" y2="' + (i * u + 4) + '" stroke="' + GRID + '" stroke-width="1.3"/>';
    var set = {}; cells.forEach(function (c) { set[c[0] + "," + c[1]] = 1; s += '<rect x="' + ((c[0] + 1) * u + 4) + '" y="' + ((c[1] + 1) * u + 4) + '" width="' + u + '" height="' + u + '" fill="' + (o.c || LIME) + '" stroke="rgba(21,25,43,.25)"/>'; });
    cells.forEach(function (c) { var X = (c[0] + 1) * u + 4, Y = (c[1] + 1) * u + 4; if (!set[c[0] + "," + (c[1] - 1)]) s += '<line x1="' + X + '" y1="' + Y + '" x2="' + (X + u) + '" y2="' + Y + '" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>'; if (!set[c[0] + "," + (c[1] + 1)]) s += '<line x1="' + X + '" y1="' + (Y + u) + '" x2="' + (X + u) + '" y2="' + (Y + u) + '" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>'; if (!set[(c[0] - 1) + "," + c[1]]) s += '<line x1="' + X + '" y1="' + Y + '" x2="' + X + '" y2="' + (Y + u) + '" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>'; if (!set[(c[0] + 1) + "," + c[1]]) s += '<line x1="' + (X + u) + '" y1="' + Y + '" x2="' + (X + u) + '" y2="' + (Y + u) + '" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>'; });
    return svg(cw * u + 8, ch * u + 8, s);
  };
  V.poly = function (pts, labs, c) { var s = '<polygon points="' + pts.map(function (p) { return p.join(","); }).join(" ") + '" fill="' + (c || MINT) + '" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>'; var cx = 0, cy = 0; pts.forEach(function (p) { cx += p[0]; cy += p[1]; }); cx /= pts.length; cy /= pts.length;
    (labs || []).forEach(function (l, i) { if (!l) return; var a = pts[i], b = pts[(i + 1) % pts.length], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = mx - cx, dy = my - cy, L = Math.sqrt(dx * dx + dy * dy) || 1; s += tx((mx + dx / L * 20).toFixed(1), (my + dy / L * 20 + 5).toFixed(1), l, { fs: 14 }); }); return svg(300, 200, s); };
  V.chart = function (cats, vals, max, o) {
    o = o || {}; var n = cats.length, W = 320, x0 = 40, y0 = 190, H = 160, cw = (W - x0 - 10) / n, s = "", step = o.step || 1, cols = [LAV, PINK, SKY, LIME, BUT, MINT, "#FFB8DC"];
    for (var v = 0; v <= max; v += step) { var Y = y0 - v / max * H; s += '<line x1="' + x0 + '" y1="' + Y + '" x2="' + (W - 6) + '" y2="' + Y + '" stroke="' + GRID + '" stroke-width="1.3"/>' + tx(x0 - 8, Y + 4, v, { fs: 11, a: "end", fw: 700, c: MUTE }); }
    cats.forEach(function (c, i) { var h = vals[i] / max * H, X = x0 + i * cw + cw * .18; s += '<rect x="' + X + '" y="' + (y0 - h) + '" width="' + cw * .64 + '" height="' + h + '" rx="5" fill="' + cols[i % cols.length] + '" stroke="' + INK + '" stroke-width="2"/>' + tx(X + cw * .32, y0 + 18, c, { fs: 11, fw: 700 }); });
    s += '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + (W - 6) + '" y2="' + y0 + '" stroke="' + INK + '" stroke-width="2.4"/>' + (o.t ? tx(W / 2, 14, o.t, { fs: 13 }) : "");
    return svg(W, 206, s);
  };
  V.tally = function (n) { var s = "", x = 6; for (var g = 0; g < Math.ceil(n / 5); g++) { var k = Math.min(5, n - g * 5); for (var i = 0; i < Math.min(k, 4); i++) s += '<line x1="' + (x + i * 9) + '" y1="6" x2="' + (x + i * 9) + '" y2="34" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>'; if (k === 5) s += '<line x1="' + (x - 4) + '" y1="30" x2="' + (x + 31) + '" y2="10" stroke="#D2457A" stroke-width="3" stroke-linecap="round"/>'; x += 48; } return svg(Math.max(60, x), 40, s, "mt-svg tl"); };
  V.groups = function (g, per, c) { var s = "", cols = Math.min(g, 4), gw = 74; for (var i = 0; i < g; i++) { var gx = 6 + (i % cols) * gw, gy = 6 + Math.floor(i / cols) * 74; s += '<rect x="' + gx + '" y="' + gy + '" width="' + (gw - 8) + '" height="66" rx="16" fill="#F5F3FA" stroke="#C9C4DA" stroke-width="1.6"/>'; for (var k = 0; k < per; k++) s += '<circle cx="' + (gx + 13 + (k % 4) * 14) + '" cy="' + (gy + 14 + Math.floor(k / 4) * 14) + '" r="5.5" fill="' + (c || PINK) + '" stroke="' + INK + '" stroke-width="1.2"/>'; } return svg(cols * gw + 6, Math.ceil(g / cols) * 74 + 6, s); };
  V.arr = function (r, c, col) { var s = ""; for (var i = 0; i < r; i++) for (var j = 0; j < c; j++) s += '<circle cx="' + (16 + j * 24) + '" cy="' + (16 + i * 24) + '" r="8" fill="' + (col || SKY) + '" stroke="' + INK + '" stroke-width="1.6"/>'; return svg(c * 24 + 8, r * 24 + 8, s, "mt-svg sm"); };
  V.queue = function (n, hi, cols) { /* fila de niños; el primero está junto a la meta */
    var pal = [PINK, SKY, LIME, BUT, LAV, MINT, "#FFB8DC", "#93A6FF", "#FFD0A8", "#BDF0D8"], s = "", per = 10, rows = Math.ceil(n / per);
    for (var i = 0; i < n; i++) { var x = 44 + (i % per) * 27, y = 18 + Math.floor(i / per) * 66, c = (cols && cols[i]) || pal[i % pal.length];
      if (i === hi) s += '<path d="M' + (x + 11) + " " + (y - 14) + " l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" + '" fill="' + BUT + '" stroke="' + INK + '" stroke-width="1.2"/>';
      s += '<circle cx="' + (x + 11) + '" cy="' + (y + 8) + '" r="7" fill="#F6D2B6" stroke="' + INK + '" stroke-width="1.6"/><rect x="' + (x + 2) + '" y="' + (y + 17) + '" width="18" height="22" rx="7" fill="' + c + '" stroke="' + INK + '" stroke-width="1.6"/><rect x="' + (x + 5) + '" y="' + (y + 38) + '" width="5" height="8" fill="' + INK + '"/><rect x="' + (x + 12) + '" y="' + (y + 38) + '" width="5" height="8" fill="' + INK + '"/>'; }
    s += '<rect x="8" y="10" width="6" height="' + (rows * 66 - 18) + '" fill="' + INK + '"/><path d="M14 12 h24 l-6 8 6 8 h-24z" fill="#FF8FC0" stroke="' + INK + '" stroke-width="1.4"/>' + tx(26, rows * 66 + 4, "Meta", { fs: 11, c: MUTE });
    return svg(330, rows * 66 + 12, s);
  };
  V.solid = function (k, c) {
    c = c || LAV; var L = "stroke=\"" + INK + "\" stroke-width=\"2.4\" stroke-linejoin=\"round\"", D = "stroke=\"" + INK + "\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\" fill=\"none\"", s = "";
    if (k === "cubo") s = '<path d="M40 60 L90 30 L150 30 L100 60Z" fill="#E6E2FF" ' + L + '/><path d="M100 60 L150 30 L150 90 L100 120Z" fill="#B9A6F5" ' + L + '/><rect x="40" y="60" width="60" height="60" fill="' + c + '" ' + L + '/><path d="M40 120 L90 90 L150 90 M90 90 L90 30" ' + D + "/>";
    else if (k === "prisma") s = '<path d="M30 56 L70 30 L170 30 L130 56Z" fill="#E6F7EF" ' + L + '/><path d="M130 56 L170 30 L170 90 L130 116Z" fill="#7FD6AE" ' + L + '/><rect x="30" y="56" width="100" height="60" fill="' + MINT + '" ' + L + '/><path d="M30 116 L70 90 L170 90 M70 90 L70 30" ' + D + "/>";
    else if (k === "prismaT") s = '<path d="M40 120 L80 40 L120 120Z" fill="#FFD9E8" ' + L + '/><path d="M80 40 L160 30 L180 110 L120 120Z" fill="' + PINK + '" ' + L + '/><path d="M40 120 L100 110 L180 110 M100 110 L160 30" ' + D + "/>";
    else if (k === "piramide") s = '<path d="M40 110 L130 110 L100 20Z" fill="' + BUT + '" ' + L + '/><path d="M130 110 L165 90 L100 20Z" fill="#F2CD55" ' + L + '/><path d="M40 110 L75 90 L165 90 M75 90 L100 20" ' + D + "/>";
    else if (k === "piramideT") s = '<path d="M40 115 L140 115 L95 20Z" fill="#FFD0A8" ' + L + '/><path d="M140 115 L160 85 L95 20Z" fill="#F4AE79" ' + L + '/><path d="M40 115 L160 85" ' + D + "/>";
    else if (k === "cilindro") s = '<path d="M50 35 L50 110 A50 14 0 0 0 150 110 L150 35" fill="' + SKY + '" ' + L + '/><ellipse cx="100" cy="35" rx="50" ry="14" fill="#D4EEFF" ' + L + '/><path d="M50 110 A50 14 0 0 1 150 110" ' + D + "/>";
    else if (k === "cono") s = '<path d="M50 108 L100 18 L150 108 A50 14 0 0 1 50 108Z" fill="#FFB8DC" ' + L + '/><path d="M50 108 A50 14 0 0 1 150 108" ' + D + "/>";
    else if (k === "esfera") s = '<circle cx="100" cy="70" r="52" fill="' + LIME + '" ' + L + '/><ellipse cx="100" cy="70" rx="52" ry="14" fill="none" stroke="' + INK + '" stroke-width="1.6" stroke-dasharray="5 4"/><ellipse cx="82" cy="50" rx="12" ry="7" fill="rgba(255,255,255,.6)"/>';
    return svg(200, 136, s, "mt-svg sm");
  };
  V.comp = function (k) { /* figuras compuestas por piezas */
    var L = 'stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"', s = "";
    if (k === "hex6") { var cx = 150, cy = 95, r = 80, P = []; for (var i = 0; i < 6; i++) P.push([cx + r * Math.cos(i * Math.PI / 3), cy + r * Math.sin(i * Math.PI / 3)]); for (i = 0; i < 6; i++) { var a = P[i], b = P[(i + 1) % 6]; s += '<polygon points="' + cx + "," + cy + " " + a[0].toFixed(1) + "," + a[1].toFixed(1) + " " + b[0].toFixed(1) + "," + b[1].toFixed(1) + '" fill="' + (i % 2 ? BUT : "#F7DA6B") + '" ' + L + "/>"; } }
    else if (k === "hex3") { var cx2 = 150, cy2 = 95, r2 = 80, Q = []; for (var j = 0; j < 6; j++) Q.push([cx2 + r2 * Math.cos(j * Math.PI / 3), cy2 + r2 * Math.sin(j * Math.PI / 3)]); var pz = [[0, 1, 2], [2, 3, 4], [4, 5, 0]], cc = [PINK, SKY, LIME]; pz.forEach(function (z, i) { s += '<polygon points="' + cx2 + "," + cy2 + " " + z.map(function (m) { return Q[m][0].toFixed(1) + "," + Q[m][1].toFixed(1); }).join(" ") + '" fill="' + cc[i] + '" ' + L + "/>"; }); }
    else if (k === "sq4") s = '<polygon points="80,20 220,20 150,90" fill="' + PINK + '" ' + L + '/><polygon points="220,20 220,160 150,90" fill="' + SKY + '" ' + L + '/><polygon points="220,160 80,160 150,90" fill="' + LIME + '" ' + L + '/><polygon points="80,160 80,20 150,90" fill="' + BUT + '" ' + L + "/>";
    else if (k === "rect2") s = '<polygon points="50,40 250,40 50,150" fill="' + LAV + '" ' + L + '/><polygon points="250,40 250,150 50,150" fill="' + MINT + '" ' + L + "/>";
    else if (k === "trap3") s = '<polygon points="60,150 110,63 160,150" fill="' + PINK + '" ' + L + '/><polygon points="110,63 210,63 160,150" fill="' + BUT + '" ' + L + '/><polygon points="160,150 210,63 260,150" fill="' + SKY + '" ' + L + "/>";
    else if (k === "house") s = '<rect x="80" y="80" width="140" height="90" fill="' + SKY + '" ' + L + '/><polygon points="70,80 150,20 230,80" fill="' + PINK + '" ' + L + '/><rect x="135" y="120" width="30" height="50" fill="' + BUT + '" ' + L + "/>";
    else if (k === "rocket") s = '<rect x="120" y="60" width="60" height="90" fill="' + LAV + '" ' + L + '/><polygon points="120,60 150,14 180,60" fill="' + PINK + '" ' + L + '/><polygon points="120,110 92,150 120,150" fill="' + BUT + '" ' + L + '/><polygon points="180,110 208,150 180,150" fill="' + BUT + '" ' + L + '/><circle cx="150" cy="92" r="13" fill="#fff" ' + L + "/>";
    else if (k === "Lshape") s = '<polygon points="60,30 140,30 140,110 240,110 240,170 60,170" fill="' + MINT + '" ' + L + '/><line x1="60" y1="110" x2="140" y2="110" stroke="' + INK + '" stroke-width="2" stroke-dasharray="7 5"/>';
    return svg(300, 182, s);
  };
  V.ruler = function (cm, mark) { var s = '<rect x="6" y="6" width="' + (cm * 28 + 16) + '" height="40" rx="6" fill="#FFF1C2" stroke="' + INK + '" stroke-width="2"/>'; for (var i = 0; i <= cm; i++) { s += '<line x1="' + (14 + i * 28) + '" y1="6" x2="' + (14 + i * 28) + '" y2="24" stroke="' + INK + '" stroke-width="2"/>' + tx(14 + i * 28, 40, i, { fs: 11 }); if (i < cm) s += '<line x1="' + (28 + i * 28) + '" y1="6" x2="' + (28 + i * 28) + '" y2="16" stroke="' + INK + '" stroke-width="1.2"/>'; } if (mark) s += '<rect x="14" y="54" width="' + mark * 28 + '" height="14" rx="7" fill="' + PINK + '" stroke="' + INK + '" stroke-width="2"/>'; return svg(cm * 28 + 30, mark ? 76 : 52, s); };

  /* ---------- Estilos ---------- */
  var CSS = [
    ".mt{padding-top:4px;color:#15192B}",
    ".mt-back{display:inline-flex;align-items:center;gap:6px;background:#fff;border-radius:999px;padding:8px 15px 8px 11px;font-weight:800;font-size:14px;color:#15192B;text-decoration:none;margin:2px 0 12px;box-shadow:0 6px 18px -14px rgba(54,40,120,.5);border:0;font-family:inherit;cursor:pointer}.mt-back svg{width:17px;height:17px}",
    ".mt-hero{position:relative;overflow:hidden;background:var(--c,#C7B5FF);color:#15192B;border-radius:30px;padding:24px 22px 24px;margin:4px 0 14px}",
    ".mt-hero h1{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(30px,8.4vw,42px);line-height:1;letter-spacing:-.025em;margin:12px 0 10px;color:inherit;max-width:13ch}",
    ".mt-hero p{margin:0;font-size:14.5px;line-height:1.5;max-width:34ch;opacity:.86}",
    ".mt-hero .dot{position:absolute;border-radius:50%;background:#fff;opacity:.4;width:120px;height:120px;right:-34px;top:-38px}.mt-hero .dot2{position:absolute;border-radius:50%;background:#fff;opacity:.7;width:14px;height:14px;right:34%;top:24px}",
    ".mt-dk{background:#15192B;color:#fff}.mt-dk .mt-k{background:#D3F36B}.mt-dk .dot{background:#8A8FA8}",
    ".mt-k{display:inline-block;background:#fff;color:#15192B;border-radius:999px;padding:5px 12px;font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}",
    ".mt-glyphs{position:absolute;right:16px;bottom:16px;display:grid;grid-template-columns:repeat(3,34px);gap:6px;z-index:1}.mt-glyphs span{height:34px;border-radius:11px;display:grid;place-items:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:14px;color:#15192B}",
    ".mt-card{background:#fff;border-radius:24px;padding:18px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45)}",
    ".mt-sh{margin:22px 4px 10px}.mt-sh b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:20px}.mt-sh small{display:block;font-size:13px;color:#6A6F85;margin-top:2px;line-height:1.4}",
    ".mt-gr{display:grid;grid-template-columns:1fr 1fr;gap:10px}",
    ".mt-g{display:block;background:#fff;border-radius:22px;padding:16px 14px 14px;text-decoration:none;color:#15192B;box-shadow:inset 0 -6px 0 var(--c),0 10px 26px -18px rgba(54,40,120,.5)}.mt-g b{display:block;font-size:16px;line-height:1.25}.mt-g small{display:block;font-size:12.5px;color:#6A6F85;margin-top:4px}",
    ".mt-g.off{opacity:.55;box-shadow:inset 0 -6px 0 #ECE9F3,0 10px 26px -18px rgba(54,40,120,.3);pointer-events:none}",
    ".mt-u{background:#fff;border-radius:24px;padding:6px 16px 6px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);margin:0 0 12px}",
    ".mt-uh{display:flex;align-items:center;gap:12px;padding:12px 0 10px;border-bottom:1px solid #ECE9F3}.mt-un{flex:none;width:44px;height:44px;border-radius:14px;display:grid;place-items:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:18px}",
    ".mt-uh small{display:block;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#6A6F85}.mt-uh b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:18px;line-height:1.15}",
    ".mt-row{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #F1EFF6;text-decoration:none;color:#15192B}.mt-row:last-child{border-bottom:0}",
    ".mt-row .t{flex:1;font-size:14.5px;font-weight:650;line-height:1.35}.mt-row .n{flex:none;width:28px;height:28px;border-radius:50%;background:#F5F3FA;display:grid;place-items:center;font-size:12px;font-weight:800;color:#6A6F85}",
    ".mt-lv{display:flex;gap:4px;flex:none}.mt-lv i{width:9px;height:9px;border-radius:50%;background:#ECE9F3}.mt-lv i.on0{background:#9BE7C4}.mt-lv i.on1{background:#C7B5FF}.mt-lv i.on2{background:#FF8FC0}",
    ".mt-go{flex:none;width:34px;height:34px;border-radius:50%;background:#15192B;color:#fff;display:grid;place-items:center}.mt-go svg{width:16px;height:16px}",
    ".mt-prog{height:8px;border-radius:9px;background:#ECE9F3;overflow:hidden;margin:12px 0 4px}.mt-prog i{display:block;height:100%;background:#D3F36B;border-radius:9px;transition:width .3s}.mt-dk .mt-prog{background:rgba(255,255,255,.14)}",
    ".mt-tabs{display:grid;grid-template-columns:repeat(3,1fr);background:#fff;border-radius:999px;padding:5px;margin:0 0 14px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45)}",
    ".mt-tabs button{border:0;background:none;border-radius:999px;padding:11px 4px;font:inherit;font-weight:800;font-size:13px;color:#6A6F85;cursor:pointer;line-height:1.15}.mt-tabs button.on{background:#15192B;color:#fff}",
    ".mt-h{font-family:'Bricolage Grotesque',sans-serif;font-size:22px;line-height:1.15;margin:2px 0 8px;letter-spacing:-.01em}",
    ".mt-p{font-size:15px;line-height:1.6;margin:0 0 6px;color:#2B2F45}",
    ".mt-n{font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#6A6F85;margin:0 0 6px}",
    ".mt-vis{margin:12px 0 4px;display:flex;flex-direction:column;align-items:center;gap:10px;overflow-x:auto}",
    ".mt-svg{width:100%;max-width:340px;height:auto;display:block;margin:0 auto}.mt-svg.sm{max-width:190px}.mt-svg.tl{max-width:260px;width:auto;height:40px}",
    ".mt-key{margin-top:14px;background:#FBF8EE;border-radius:18px;padding:13px 16px;font-size:14.5px;line-height:1.55;font-weight:700;color:#3D3412;display:flex;gap:10px;align-items:flex-start}.mt-key svg{flex:none;width:20px;height:20px;margin-top:1px}",
    ".mt-ex{font-size:19px;font-weight:800;text-align:center;line-height:1.9;padding:10px 6px;background:#F5F3FA;border-radius:18px;width:100%}.mt-ex em{font-style:normal;color:#8A8EA5;margin:0 6px;font-weight:700;font-size:15px}.mt-ex mark{background:#D3F36B;border-radius:8px;padding:2px 7px;color:#15192B}",
    ".mt-steps{list-style:none;margin:14px 0 0;padding:0}.mt-steps li{display:flex;gap:12px;padding:0 0 14px;position:relative;animation:mtIn .35s ease both}",
    ".mt-steps li:before{content:'';position:absolute;left:14px;top:30px;bottom:2px;width:2px;background:#E6E1F2}.mt-steps li:last-child:before{display:none}",
    ".mt-steps li>b{flex:none;width:30px;height:30px;border-radius:50%;background:#15192B;color:#fff;display:grid;place-items:center;font-size:13px;position:relative;z-index:1}",
    ".mt-steps li>div{padding-top:4px}.mt-steps strong{display:block;font-size:14.5px;margin-bottom:2px}.mt-steps span{font-size:14.5px;line-height:1.6;color:#3B3F57}",
    ".mt-ans{margin-top:4px;background:#DCF4EA;border-radius:18px;padding:13px 16px;font-size:16px;font-weight:800;animation:mtIn .35s ease both}.mt-ans small{display:block;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#2E7A55;margin-bottom:3px}",
    ".mt-dots{display:flex;gap:6px;justify-content:center;margin:14px 0 0}.mt-dots i{width:8px;height:8px;border-radius:9px;background:#DAD6E6;transition:all .25s}.mt-dots i.on{width:22px;background:#15192B}",
    ".mt-btn{display:block;width:100%;text-align:center;border:0;border-radius:999px;padding:15px;font:inherit;font-weight:800;font-size:15px;cursor:pointer;text-decoration:none}",
    ".mt-btn.dk{background:#15192B;color:#fff;box-shadow:0 3px 0 #D3F36B}.mt-btn.gh{background:#fff;color:#15192B;box-shadow:0 10px 30px -18px rgba(54,40,120,.45)}.mt-btn[disabled]{opacity:.4;cursor:default}",
    ".mt-act{position:sticky;bottom:calc(env(safe-area-inset-bottom,0px) + 88px);z-index:25;margin-top:16px;padding-top:6px}.mt-act .mt-btn{box-shadow:0 3px 0 #D3F36B,0 12px 26px -10px rgba(21,25,43,.55)}",
    "@media (min-width:1400px){.mt-act{bottom:20px}}",
    ".mt-rowb{display:flex;gap:10px;margin-top:16px}.mt-rowb .mt-btn{flex:1}.mt-stack{display:flex;flex-direction:column;gap:10px;margin-top:18px}",
    ".mt-lvc{display:flex;gap:14px;align-items:center;background:#fff;border-radius:22px;padding:16px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);margin:0 0 10px;border:0;width:100%;text-align:left;font:inherit;color:#15192B;cursor:pointer}",
    ".mt-lvc .ic{flex:none;width:52px;height:52px;border-radius:16px;display:grid;place-items:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:20px}",
    ".mt-lvc b{display:block;font-size:16.5px}.mt-lvc small{display:block;font-size:13px;color:#6A6F85;line-height:1.4;margin-top:2px}.mt-lvc em{font-style:normal;display:inline-block;margin-top:6px;font-size:12px;font-weight:800;border-radius:999px;padding:4px 10px}",
    ".c1{background:#FFE1EA;color:#A3345C}.c2{background:#E6E2FF;color:#4B3BB0}.c3{background:#DCF4EA;color:#1F6E4E}.c4{background:#FFF1C2;color:#7A5A00}.c5{background:#ECE9F3;color:#4E5268}",
    ".mt-game{display:flex;gap:14px;align-items:center;background:#fff;border-radius:22px;padding:10px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);text-decoration:none;color:#15192B;margin-top:16px}",
    ".mt-game img{flex:none;width:92px;height:68px;border-radius:16px;object-fit:cover;background:#F5F3FA}.mt-game small{display:block;font-size:11.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#6A6F85}.mt-game b{display:block;font-size:16px;margin-top:2px}",
    ".mt-q{font-size:16.5px;font-weight:650;line-height:1.55;margin:0 0 12px}",
    ".mt-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px}.mt-opts.one{grid-template-columns:1fr}",
    ".mt-opt{background:#fff;border:2px solid #ECE9F3;border-radius:18px;min-height:60px;padding:12px;font:inherit;font-weight:750;font-size:16px;color:#15192B;cursor:pointer;line-height:1.35}.mt-opt .mt-svg{max-width:150px}",
    ".mt-opt.sel{border-color:#15192B;box-shadow:0 3px 0 #D3F36B}.mt-opt.ok{border-color:#3FA77A;background:#DCF4EA}.mt-opt.no{border-color:#E46A9B;background:#FFE1EA}",
    ".mt-in{width:100%;font:inherit;font-size:22px;font-weight:800;text-align:center;border:2px solid #ECE9F3;border-radius:16px;padding:13px;color:#15192B;background:#fff;-moz-appearance:textfield}.mt-in:focus{outline:none;border-color:#15192B;box-shadow:0 3px 0 #D3F36B}",
    ".mt-in.s{display:inline-block;width:auto;min-width:56px;max-width:88px;font-size:18px;padding:8px 6px;border-radius:12px;vertical-align:middle;margin:2px}",
    ".mt-in.ok{border-color:#3FA77A;background:#DCF4EA}.mt-in.no{border-color:#E46A9B;background:#FFE1EA}",
    ".mt-sgn{flex:none;width:58px;height:58px;border-radius:16px;border:2px solid #ECE9F3;background:#fff;font:inherit;font-weight:800;font-size:24px;cursor:pointer;color:#15192B}.mt-sgn.s{width:34px;height:40px;font-size:17px;border-radius:10px;vertical-align:middle;padding:0;margin-left:4px}",
    ".mt-unit{display:flex;gap:8px;align-items:center}.mt-unit span{font-weight:800;font-size:17px;color:#4E5268;flex:none}",
    ".mt-fin{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:140px;margin:0 auto}.mt-fin hr{width:100%;border:0;border-top:3px solid #15192B;margin:0}",
    ".mt-fr{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.05;margin:0 2px;font-weight:800}.mt-fr span:first-child{border-bottom:2px solid currentColor;padding:0 3px}.mt-fr span{padding:0 3px}",
    ".mt-fo{display:flex;height:100%;align-items:center;justify-content:center;font-size:17px;color:#15192B}",
    ".mt-lay{font-size:16px;font-weight:650;line-height:2.4;text-align:center}",
    ".mt-tbl{border-collapse:separate;border-spacing:0;margin:4px auto;font-size:15px}.mt-tbl th{background:#15192B;color:#fff;padding:8px 10px;font-weight:700}.mt-tbl th:first-child{border-radius:10px 0 0 0}.mt-tbl th:last-child{border-radius:0 10px 0 0}.mt-tbl td{padding:6px 8px;border-bottom:1px solid #ECE9F3;text-align:center;background:#fff;font-weight:700}",
    ".mt-pv{border-collapse:separate;border-spacing:4px;margin:0 auto}.mt-pv th{border-radius:10px;padding:7px 10px;font-size:13px;font-weight:800;min-width:34px}.mt-pv td{border:2px solid #ECE9F3;border-radius:10px;height:40px;text-align:center;font-size:22px;font-weight:800}",
    ".mt-col{display:inline-grid;gap:4px 3px;margin:6px auto 2px;font-family:'Plus Jakarta Sans',sans-serif;justify-content:center}",
    ".mt-col .d{width:38px;height:42px;display:grid;place-items:center;font-size:25px;font-weight:800}.mt-col .p{width:12px;height:42px;display:grid;place-items:end center;font-size:28px;font-weight:800;padding-bottom:2px}",
    ".mt-col .op{color:#7A62E8}.mt-col .ln{grid-column:1/-1;height:3px;background:#15192B;border-radius:3px}",
    ".mt-col input{width:38px;height:46px;border:2px solid #ECE9F3;border-radius:11px;text-align:center;font:inherit;font-size:24px;font-weight:800;color:#15192B;padding:0;background:#fff}.mt-col input:focus{outline:none;border-color:#15192B;box-shadow:0 3px 0 #D3F36B}",
    ".mt-col input.cy{width:26px;height:26px;font-size:14px;border-radius:8px;border-style:dashed;color:#7A62E8;justify-self:center;align-self:end}",
    ".mt-col input.ok{border-color:#3FA77A;background:#DCF4EA}.mt-col input.no{border-color:#E46A9B;background:#FFE1EA}",
    ".mt-colw{text-align:center}.mt-colw small{display:block;font-size:12.5px;color:#6A6F85;margin-top:6px}",
    ".mt-tap{cursor:pointer;transition:fill .15s}.mt-tap:hover{opacity:.9}",
    ".mt-chipx{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:6px 0}",
    ".mt-chip{position:relative;background:#fff;border:2px solid #ECE9F3;border-radius:16px;padding:10px 14px;font:inherit;font-weight:800;font-size:16px;color:#15192B;cursor:pointer;min-width:58px}",
    ".mt-chip.sel{border-color:#15192B;box-shadow:0 3px 0 #D3F36B}.mt-chip .bd{position:absolute;top:-10px;right:-8px;width:22px;height:22px;border-radius:50%;background:#15192B;color:#D3F36B;font-size:12px;display:grid;place-items:center}",
    ".mt-chip.used{background:#F5F3FA}.mt-chip.ok{border-color:#3FA77A;background:#DCF4EA}.mt-chip.no{border-color:#E46A9B;background:#FFE1EA}",
    ".mt-mini{background:none;border:0;font:inherit;font-weight:700;font-size:13.5px;color:#6A6F85;text-decoration:underline;cursor:pointer;display:block;margin:8px auto 0}",
    ".mt-match{display:grid;grid-template-columns:1fr 1fr;gap:8px 12px}.mt-match .mt-chip{width:100%;min-height:52px}",
    ".mt-bk{display:grid;gap:10px;margin-top:10px}.mt-bkt{border:2px dashed #C9C4DA;border-radius:18px;padding:10px;min-height:66px;cursor:pointer;background:#FBFAFE}.mt-bkt>b{display:block;font-size:13px;letter-spacing:.04em;text-transform:uppercase;color:#4E5268;margin-bottom:6px}",
    ".mt-bkt.hot{border-color:#15192B;background:#F2FBD9}.mt-bkt .mt-chipx{justify-content:flex-start;margin:0}",
    ".mt-rec{display:inline-flex;align-items:center;gap:8px;background:#FFF1C2;color:#5C4400;font:inherit;font-weight:800;font-size:14px;border:0;border-radius:999px;padding:11px 16px;margin-top:16px;cursor:pointer}.mt-rec svg{width:17px;height:17px}",
    ".mt-hint{margin-top:12px;background:#fff;border:2px dashed #E7C65A;border-radius:18px;padding:14px 16px;font-size:14.5px;line-height:1.6}",
    ".mt-fb{margin-top:14px;border-radius:18px;padding:14px 16px;font-size:14.5px;line-height:1.6;animation:mtIn .3s ease both}.mt-fb.ok{background:#DCF4EA}.mt-fb.no{background:#FFE1EA}.mt-fb b.hd{display:block;font-size:16px;margin-bottom:2px}",
    ".mt-top{display:flex;align-items:center;gap:10px;margin:0 0 10px}.mt-top .mt-prog{flex:1;margin:0}.mt-top small{font-weight:800;font-size:13px;color:#4E5268;flex:none}",
    ".mt-x{flex:none;width:38px;height:38px;border-radius:50%;border:0;background:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 6px 18px -14px rgba(54,40,120,.5)}.mt-x svg{width:16px;height:16px}",
    ".mt-res{text-align:center;padding:6px 0 4px}.mt-res .big{font-family:'Bricolage Grotesque',sans-serif;font-size:52px;font-weight:800;line-height:1}.mt-res .stars{display:flex;justify-content:center;gap:6px;margin:10px 0 4px}.mt-res .stars svg{width:34px;height:34px}",
    ".mt-note{background:#fff;border-radius:24px;padding:18px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);font-size:14.5px;line-height:1.65;margin-top:12px}",
    ".mt-note .w{display:flex;align-items:center;gap:10px;margin-bottom:8px;font-weight:800;font-size:14px}.mt-note .w i{width:36px;height:36px;border-radius:50%;background:#FF8FC0;display:grid;place-items:center;font-style:normal;font-family:'Bricolage Grotesque',sans-serif}",
    ".mt-note .sg{margin-top:10px;font-weight:800;font-size:13.5px}.mt-note .sg small{display:block;font-weight:600;color:#6A6F85}",
    ".mt-home{display:block;background:#fff;border-radius:28px;padding:8px 8px 18px;text-decoration:none;color:#15192B;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);margin:0 0 14px}",
    ".mt-hth{display:block;position:relative;aspect-ratio:16/9;border-radius:22px;overflow:hidden;background:#E6E2FF}",
    ".mt-hth .lst{position:absolute;left:18px;right:18px;top:58px;bottom:14px;display:flex;flex-direction:column;gap:7px}",
    ".mt-hth .lst span{flex:1;display:flex;align-items:center;gap:10px;background:#fff;border-radius:12px;padding:0 12px;font-size:12.5px;font-weight:800;color:#15192B;box-shadow:0 4px 0 rgba(21,25,43,.06)}.mt-hth .lst i{width:22px;height:22px;border-radius:7px;flex:none}",
    ".mt-hth .k{position:absolute;left:14px;top:14px;background:#15192B;color:#D3F36B;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:8px 14px;border-radius:999px}",
    ".mt-htx{display:block;padding:14px 12px 0}.mt-htx b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:28px;line-height:1.05;letter-spacing:-.02em}.mt-htx small{display:block;font-size:14.5px;color:#6A6F85;line-height:1.5;margin-top:6px}",
    ".mt-hft{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px}.mt-chips{display:flex;flex-wrap:wrap;gap:6px}.mt-chips em{font-style:normal;font-size:12.5px;font-weight:700;border-radius:999px;padding:6px 12px}",
    ".mt-hft .mt-go{width:44px;height:44px}.mt-hft .mt-go svg{width:20px;height:20px}",
    "@keyframes mtIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}",
    "@media (prefers-reduced-motion:reduce){.mt-steps li,.mt-ans,.mt-fb{animation:none}}",
    "html[data-theme=dark] .mt{color:#15192B}"
  ].join("\n");
  function css() { if (document.getElementById("mova-temas-css")) return; var s = document.createElement("style"); s.id = "mova-temas-css"; s.textContent = CSS; document.head.appendChild(s); }

  var ARW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';
  var BKI = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
  var XI = '<svg viewBox="0 0 24 24" fill="none" stroke="#15192B" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var BULB = '<svg viewBox="0 0 24 24" fill="none" stroke="#B08A1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/></svg>';
  var STAR = function (on) { return '<svg viewBox="0 0 24 24"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z" fill="' + (on ? "#FFD84D" : "#ECE9F3") + '" stroke="' + (on ? "#C99A00" : "#D7D3E3") + '" stroke-width="1.4" stroke-linejoin="round"/></svg>'; };

  /* ---------- Progreso ---------- */
  function who() { try { var u = window.MovaAuth && window.MovaAuth.user(); return u || null; } catch (e) { return null; } }
  function pkey() { var u = who(); return "mova_temas_" + (u && u.username ? u.username : "local"); }
  function pload() { try { return JSON.parse(localStorage.getItem(pkey()) || "{}") || {}; } catch (e) { return {}; } }
  function pstore(d) { try { localStorage.setItem(pkey(), JSON.stringify(d)); } catch (e) {} }
  function cloud(item, score, total, detail) { try { if (window.MovaAuth && window.MovaAuth.user()) window.MovaAuth.save("math-tema", item, score, total, detail); } catch (e) {} }
  function lvDots(p) { p = p || {}; return '<span class="mt-lv" aria-hidden="true">' + [0, 1, 2].map(function (i) { return '<i class="' + ((p[i] || 0) >= 80 ? "on" + i : "") + '"></i>'; }).join("") + "</span>"; }

  /* ---------- Revisión ---------- */
  function norm(s) { return String(s == null ? "" : s).toLowerCase().trim().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " "); }
  function parseNum(v) {
    v = String(v == null ? "" : v).trim().replace(/−/g, "-").replace(/\s+/g, "").replace(/^\$/, "").replace(/^\+/, "");
    if (/,/.test(v) && /\./.test(v)) v = v.replace(/,/g, "");
    else if (/^-?\d{1,3}(,\d{3})+$/.test(v)) v = v.replace(/,/g, "");
    else v = v.replace(/,/g, ".");
    if (!/^-?\d*\.?\d+$/.test(v)) return null; return Number(v);
  }
  function eqv(a, v) { if (typeof a === "number") { var n = parseNum(v); return n != null && Math.abs(n - a) < 1e-6; } var alts = String(a).split("|"); return alts.some(function (x) { return norm(x) === norm(v); }); }
  function showAns(q) {
    if (q.t === "mc") { for (var i = 0; i < q.o.length; i++) if (q.o[i].ok) return q.o[i].h; }
    if (q.t === "frac") return fr(q.a[0], q.a[1]);
    if (q.t === "num") return (q.pre || "") + fmt(q.a, q.dp) + (q.unit ? " " + q.unit : "");
    if (q.t === "col") return fmt(q.a, q.d || null);
    if (q.t === "fill") return q.ans.map(function (a) { return typeof a === "number" ? fmt(a) : String(a).split("|")[0]; }).join(" · ");
    if (q.t === "order") return q.items.join(" → ");
    if (q.t === "line") return q.al || q.ticks[q.a].l || fmt(q.ticks[q.a].v);
    if (q.t === "shade") return q.k + " de " + q.n + " partes";
    if (q.t === "bars") return q.cats.map(function (c, i) { return c + ": " + q.vals[i]; }).join(", ");
    return "";
  }

  /* ---------- Render y lectura de respuestas por tipo ---------- */
  function colHtml(q) {
    var d = q.d, f = function (n) { return d ? n.toFixed(d) : String(n); }, A = f(q.A), B = f(q.B), Rs = f(q.a);
    var W = Math.max(A.length, B.length + 0, Rs.length), cells = function (s) { var a = s.split(""); while (a.length < W) a.unshift(" "); return a; };
    var ca = cells(A), cb = cells(B), cr = cells(Rs), cols = ["auto"].concat(ca.map(function (c) { return c === "." ? "12px" : "38px"; })).join(" ");
    var carry = q.op === "+" || q.op === "×";
    var h = '<div class="mt-colw"><div class="mt-col" style="grid-template-columns:' + cols + '">';
    if (carry) { h += '<span></span>'; ca.forEach(function (c, i) { h += (c === "." ? "<span></span>" : (i < ca.length - 1 && i > 0 ? '<input class="cy" data-cy inputmode="numeric" maxlength="1" aria-label="Llevo">' : (i === 0 ? '<input class="cy" data-cy inputmode="numeric" maxlength="1" aria-label="Llevo">' : "<span></span>"))); }); }
    h += '<span class="d"></span>' + ca.map(function (c) { return c === "." ? '<span class="p">.</span>' : '<span class="d">' + (c === " " ? "" : c) + "</span>"; }).join("");
    h += '<span class="d op">' + q.op + "</span>" + cb.map(function (c) { return c === "." ? '<span class="p">.</span>' : '<span class="d">' + (c === " " ? "" : c) + "</span>"; }).join("");
    h += '<span class="ln"></span><span class="d"></span>';
    var idx = 0; cr.forEach(function (c, i) { if (c === ".") h += '<span class="p">.</span>'; else h += '<input data-dg="' + (idx++) + '" inputmode="numeric" maxlength="1" autocomplete="off" aria-label="Cifra del resultado">'; });
    h += "</div><small>" + (carry ? "Las casillas punteadas de arriba son para lo que llevas." : "Escribe una cifra en cada casilla, empezando por la derecha.") + "</small></div>";
    return h;
  }
  function shadeSvg(q) {
    var s = "", n = q.n, c = q.color || LAV;
    if (q.kind === "bar") { var w = 290, sw = w / n; for (var i = 0; i < n; i++) s += '<rect class="mt-tap" data-p="' + i + '" x="' + (8 + i * sw) + '" y="8" width="' + sw + '" height="62" fill="#fff" stroke="' + INK + '" stroke-width="2.4"/>'; s += '<rect x="8" y="8" width="' + w + '" height="62" fill="none" stroke="' + INK + '" stroke-width="3" rx="4" pointer-events="none"/>'; return svg(306, 78, s); }
    if (q.kind === "pie") { var r = 92, cx = 100, cy = 100; for (i = 0; i < n; i++) { var a0 = -Math.PI / 2 + i * 2 * Math.PI / n, a1 = a0 + 2 * Math.PI / n; s += '<path class="mt-tap" data-p="' + i + '" d="M' + cx + " " + cy + " L" + (cx + r * Math.cos(a0)).toFixed(2) + " " + (cy + r * Math.sin(a0)).toFixed(2) + " A" + r + " " + r + " 0 0 1 " + (cx + r * Math.cos(a1)).toFixed(2) + " " + (cy + r * Math.sin(a1)).toFixed(2) + 'Z" fill="#fff" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>'; } return svg(200, 200, s, "mt-svg md"); }
    if (q.kind === "set") { var cols = q.cols || Math.min(n, 6); for (i = 0; i < n; i++) s += '<circle class="mt-tap" data-p="' + i + '" cx="' + (30 + (i % cols) * 50) + '" cy="' + (30 + Math.floor(i / cols) * 50) + '" r="20" fill="#fff" stroke="' + INK + '" stroke-width="2.6"/>'; return svg(cols * 50 + 10, Math.ceil(n / cols) * 50 + 10, s); }
    if (q.kind === "grid") { var gc = q.cols || 10, gr = Math.ceil(n / gc), u = Math.min(30, 300 / gc); for (i = 0; i < n; i++) s += '<rect class="mt-tap" data-p="' + i + '" x="' + (5 + (i % gc) * u) + '" y="' + (5 + Math.floor(i / gc) * u) + '" width="' + u + '" height="' + u + '" fill="#fff" stroke="' + INK + '" stroke-width="1.6"/>'; return svg(gc * u + 10, gr * u + 10, s); }
    return "";
  }
  function lineSvg(q) {
    var T = q.ticks, n = T.length - 1, W = 330, x0 = 24, x1 = W - 24, sx = (x1 - x0) / n, y = 56, s = '<line x1="' + (x0 - 12) + '" y1="' + y + '" x2="' + (x1 + 12) + '" y2="' + y + '" stroke="' + INK + '" stroke-width="3"/>';
    T.forEach(function (t, i) { var X = x0 + i * sx; s += '<line x1="' + X + '" y1="' + (y - 10) + '" x2="' + X + '" y2="' + (y + 10) + '" stroke="' + INK + '" stroke-width="' + (t.big ? 3 : 2) + '"/>' + (t.show ? tx(X, y + 32, t.l || fmt(t.v), { fs: n > 12 ? 10.5 : 13, fw: 700, c: "#3B3F57" }) : "") + '<rect class="mt-tap" data-tk="' + i + '" x="' + (X - Math.max(9, sx / 2)) + '" y="' + (y - 34) + '" width="' + Math.max(18, sx) + '" height="56" fill="transparent"/>'; });
    s += '<g data-mk style="display:none" pointer-events="none"><path d="M0 -40 l-12 -18 h24z" fill="#FF8FC0" stroke="' + INK + '" stroke-width="2"/><circle cx="0" cy="0" r="8" fill="#FF8FC0" stroke="' + INK + '" stroke-width="2"/></g>';
    return svg(W, 100, s);
  }
  function barsSvg(q) {
    var n = q.cats.length, W = 320, x0 = 40, y0 = 214, H = 190, cw = (W - x0 - 8) / n, rh = H / q.max, s = "", cols = [LAV, PINK, SKY, LIME, BUT, MINT];
    for (var v = 0; v <= q.max; v++) { var Y = y0 - v * rh; s += '<line x1="' + x0 + '" y1="' + Y + '" x2="' + (W - 6) + '" y2="' + Y + '" stroke="' + GRID + '" stroke-width="1.2"/>' + tx(x0 - 8, Y + 4, v, { fs: 10.5, a: "end", fw: 700, c: MUTE }); }
    q.cats.forEach(function (c, i) { var X = x0 + i * cw; s += '<rect data-bar="' + i + '" x="' + (X + cw * .16) + '" y="' + y0 + '" width="' + cw * .68 + '" height="0" rx="4" fill="' + cols[i % cols.length] + '" stroke="' + INK + '" stroke-width="2" pointer-events="none"/>'; for (var k = 1; k <= q.max; k++) s += '<rect class="mt-tap" data-bc="' + i + "," + k + '" x="' + X + '" y="' + (y0 - k * rh) + '" width="' + cw + '" height="' + rh + '" fill="transparent"/>'; s += tx(X + cw / 2, y0 + 18, c, { fs: 11, fw: 700 }); });
    s += '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + (W - 6) + '" y2="' + y0 + '" stroke="' + INK + '" stroke-width="2.4"/>';
    return svg(W, 232, s);
  }
  function qHtml(q) {
    var h = '<p class="mt-q">' + q.q + "</p>" + (q.v ? '<div class="mt-vis">' + q.v + "</div>" : "");
    if (q.t === "mc") h += '<div class="mt-opts' + (q.one || q.o.some(function (o) { return String(o.h).length > 26; }) ? " one" : "") + '">' + q.o.map(function (o, i) { return '<button type="button" class="mt-opt" data-o="' + i + '">' + o.h + "</button>"; }).join("") + "</div>";
    else if (q.t === "num") h += '<div class="mt-unit">' + (q.pre ? "<span>" + q.pre + "</span>" : "") + '' + (q.sg ? '<button type="button" class="mt-sgn" data-sgn="in" aria-label="Cambiar signo">±</button>' : "") + '<input class="mt-in" data-in inputmode="decimal" autocomplete="off" placeholder="Tu respuesta">' + (q.unit ? "<span>" + q.unit + "</span>" : "") + "</div>";
    else if (q.t === "frac") h += '<div class="mt-fin"><input class="mt-in" data-fn inputmode="numeric" autocomplete="off" aria-label="Numerador"><hr><input class="mt-in" data-fd inputmode="numeric" autocomplete="off" aria-label="Denominador"></div>';
    else if (q.t === "fill") { var i = 0; h += '<div class="mt-lay">' + q.lay.replace(/\[\[(\d+)\]\]/g, function (_, k) { return (q.sg ? '<button type="button" class="mt-sgn s" data-sgn="' + k + '" aria-label="Cambiar signo">±</button>' : "") + '<input class="mt-in s" data-f="' + k + '" inputmode="' + (typeof q.ans[k] === "number" ? "decimal" : "text") + '" autocomplete="off" aria-label="Respuesta ' + (++i) + '">'; }) + "</div>"; }
    else if (q.t === "col") h += colHtml(q);
    else if (q.t === "shade") h += '<div class="mt-vis" data-sh>' + shadeSvg(q) + '</div><p style="text-align:center;margin:4px 0 0;font-weight:800;color:#4E5268;font-size:14px" data-shc>Coloreadas: 0</p>';
    else if (q.t === "order") h += '<div class="mt-chipx">' + q.perm.map(function (k) { return '<button type="button" class="mt-chip" data-it="' + k + '">' + q.items[k] + "</button>"; }).join("") + '</div><button type="button" class="mt-mini" data-clr>Borrar y empezar de nuevo</button>';
    else if (q.t === "line") h += '<div class="mt-vis">' + lineSvg(q) + "</div>";
    else if (q.t === "match") h += '<div class="mt-match">' + q.pairs.map(function (p, i) { return '<button type="button" class="mt-chip" data-ml="' + i + '">' + p[0] + '</button><button type="button" class="mt-chip" data-mr="' + q.rp[i] + '">' + q.pairs[q.rp[i]][1] + "</button>"; }).join("") + "</div>";
    else if (q.t === "sort") h += '<div class="mt-chipx" data-pool>' + q.items.map(function (it, i) { return '<button type="button" class="mt-chip" data-si="' + i + '">' + it[0] + "</button>"; }).join("") + '</div><div class="mt-bk">' + q.buckets.map(function (b, i) { return '<div class="mt-bkt" data-bk="' + i + '"><b>' + b + '</b><div class="mt-chipx"></div></div>'; }).join("") + "</div>";
    else if (q.t === "bars") h += '<div class="mt-vis">' + barsSvg(q) + '</div><p style="text-align:center;margin:2px 0 0;font-size:13px;color:#6A6F85;font-weight:700">Toca la altura de cada barra.</p>';
    h += '<button type="button" class="mt-rec" data-rec>' + BULB + 'Recuerda</button><div class="mt-hint" data-hint hidden>' + (q.h || "") + "</div>";
    return h;
  }
  var MCOL = ["#C7B5FF", "#FF9CC9", "#9FD8FF", "#D3F36B", "#FFE58A", "#9BE7C4"];
  function wire(box, q, ready) {
    var st = {};
    box.querySelectorAll("[data-sgn]").forEach(function (b) { b.onclick = function () { if (box.dataset.lk) return; var k = b.dataset.sgn, i = box.querySelector(k === "in" ? "[data-in]" : '[data-f="' + k + '"]'); if (!i || i.readOnly) return; var neg = /^[−-]/.test(i.value), v = i.value.replace(/^[+−-]/, ""); i.value = neg ? v : "-" + v; if (i.oninput) i.oninput(); i.focus(); }; });
    var rc = box.querySelector("[data-rec]"); if (rc) { if (!q.h) rc.style.display = "none"; rc.onclick = function () { var hn = box.querySelector("[data-hint]"); hn.hidden = !hn.hidden; }; }
    if (q.t === "mc") { box.querySelectorAll("[data-o]").forEach(function (b) { b.onclick = function () { if (box.dataset.lk) return; box.querySelectorAll("[data-o]").forEach(function (x) { x.classList.remove("sel"); }); b.classList.add("sel"); st.sel = +b.dataset.o; ready(true); }; }); return function () { return st.sel; }; }
    if (q.t === "num" || q.t === "frac" || q.t === "fill") {
      var ins = box.querySelectorAll("input"); ins.forEach(function (i) { i.oninput = function () { ready(Array.prototype.every.call(ins, function (x) { return x.value.trim() !== ""; })); }; });
      if (q.t !== "fill" && ins[0]) setTimeout(function () { try { ins[0].focus({ preventScroll: true }); } catch (e) {} }, 80);
      if (q.t === "num") return function () { return ins[0].value; };
      if (q.t === "frac") return function () { return [box.querySelector("[data-fn]").value, box.querySelector("[data-fd]").value]; };
      return function () { return Array.prototype.map.call(box.querySelectorAll("[data-f]"), function (x) { return x.value; }); };
    }
    if (q.t === "col") {
      var dg = Array.prototype.slice.call(box.querySelectorAll("[data-dg]"));
      dg.forEach(function (inp, i) {
        inp.oninput = function () { inp.value = inp.value.replace(/\D/g, "").slice(-1); if (inp.value && i > 0) dg[i - 1].focus(); ready(dg.some(function (x) { return x.value !== ""; })); };
        inp.onkeydown = function (e) { if (e.key === "Backspace" && !inp.value && i < dg.length - 1) { dg[i + 1].focus(); } };
      });
      box.querySelectorAll("[data-cy]").forEach(function (c) { c.oninput = function () { c.value = c.value.replace(/\D/g, "").slice(-1); }; });
      return function () { return dg.map(function (x) { return x.value; }); };
    }
    if (q.t === "shade") {
      st.on = {}; var cnt = box.querySelector("[data-shc]");
      box.querySelectorAll("[data-p]").forEach(function (p) { p.addEventListener("click", function () { if (box.dataset.lk) return; var k = p.getAttribute("data-p"); st.on[k] = !st.on[k]; p.setAttribute("fill", st.on[k] ? (q.color || LAV) : "#fff"); var c = Object.keys(st.on).filter(function (x) { return st.on[x]; }).length; cnt.textContent = "Coloreadas: " + c; ready(c > 0); }); });
      return function () { return Object.keys(st.on).filter(function (x) { return st.on[x]; }).length; };
    }
    if (q.t === "order") {
      st.seq = []; var chips = box.querySelectorAll("[data-it]");
      var paint = function () { chips.forEach(function (c) { var k = +c.dataset.it, pos = st.seq.indexOf(k); c.classList.toggle("used", pos > -1); var bd = c.querySelector(".bd"); if (bd) bd.remove(); if (pos > -1) { var s = document.createElement("span"); s.className = "bd"; s.textContent = pos + 1; c.appendChild(s); } }); ready(st.seq.length === q.items.length); };
      chips.forEach(function (c) { c.onclick = function () { if (box.dataset.lk) return; var k = +c.dataset.it, pos = st.seq.indexOf(k); if (pos > -1) st.seq.splice(pos, 1); else st.seq.push(k); paint(); }; });
      box.querySelector("[data-clr]").onclick = function () { if (box.dataset.lk) return; st.seq = []; paint(); };
      return function () { return st.seq.slice(); };
    }
    if (q.t === "line") {
      var mk = box.querySelector("[data-mk]"), T = q.ticks, n = T.length - 1, sx = (330 - 48) / n;
      box.querySelectorAll("[data-tk]").forEach(function (r) { r.addEventListener("click", function () { if (box.dataset.lk) return; st.sel = +r.getAttribute("data-tk"); mk.setAttribute("transform", "translate(" + (24 + st.sel * sx) + ",56)"); mk.style.display = ""; ready(true); }); });
      return function () { return st.sel; };
    }
    if (q.t === "match") {
      st.p = {}; st.cur = null;
      var L = box.querySelectorAll("[data-ml]"), Rr = box.querySelectorAll("[data-mr]");
      var paintM = function () { var used = {}; Object.keys(st.p).forEach(function (l, j) { used[st.p[l]] = l; });
        L.forEach(function (b) { var l = b.dataset.ml, on = st.p[l] != null; b.style.background = on ? MCOL[l % MCOL.length] : ""; b.style.borderColor = st.cur === l ? INK : ""; });
        Rr.forEach(function (b) { var r = b.dataset.mr, l = used[r]; b.style.background = l != null ? MCOL[l % MCOL.length] : ""; });
        ready(Object.keys(st.p).length === q.pairs.length); };
      L.forEach(function (b) { b.onclick = function () { if (box.dataset.lk) return; var l = b.dataset.ml; if (st.p[l] != null && st.cur !== l) { delete st.p[l]; } st.cur = st.cur === l ? null : l; paintM(); }; });
      Rr.forEach(function (b) { b.onclick = function () { if (box.dataset.lk) return; var r = b.dataset.mr; Object.keys(st.p).forEach(function (l) { if (st.p[l] === r) delete st.p[l]; }); if (st.cur != null) { st.p[st.cur] = r; st.cur = null; } paintM(); }; });
      return function () { return st.p; };
    }
    if (q.t === "sort") {
      st.a = {}; st.cur = null; var pool = box.querySelector("[data-pool]");
      var place = function () { box.querySelectorAll("[data-si]").forEach(function (c) { var i = c.dataset.si, b = st.a[i]; var dest = b == null ? pool : box.querySelector('[data-bk="' + b + '"] .mt-chipx'); if (c.parentNode !== dest) dest.appendChild(c); c.classList.toggle("sel", st.cur === i); }); box.querySelectorAll("[data-bk]").forEach(function (b) { b.classList.toggle("hot", st.cur != null); }); ready(Object.keys(st.a).length === q.items.length); };
      box.querySelectorAll("[data-si]").forEach(function (c) { c.onclick = function (e) { e.stopPropagation(); if (box.dataset.lk) return; var i = c.dataset.si; if (st.cur != null && st.cur !== i && st.a[i] != null) { st.a[st.cur] = st.a[i]; st.cur = null; } else if (st.a[i] != null) { delete st.a[i]; st.cur = i; } else st.cur = st.cur === i ? null : i; place(); }; });
      box.querySelectorAll("[data-bk]").forEach(function (b) { b.onclick = function () { if (st.lock || st.cur == null) return; st.a[st.cur] = +b.dataset.bk; st.cur = null; place(); }; });
      return function () { return st.a; };
    }
    if (q.t === "bars") {
      st.h = q.cats.map(function () { return 0; }); var y0 = 214, rh = 190 / q.max;
      box.querySelectorAll("[data-bc]").forEach(function (r) { r.addEventListener("click", function () { if (box.dataset.lk) return; var p = r.getAttribute("data-bc").split(","), i = +p[0], k = +p[1]; st.h[i] = st.h[i] === k ? k - 1 : k; var b = box.querySelector('[data-bar="' + i + '"]'); b.setAttribute("y", y0 - st.h[i] * rh); b.setAttribute("height", st.h[i] * rh); ready(true); }); });
      return function () { return st.h.slice(); };
    }
    return function () { return null; };
  }
  function check(q, ans, box) {
    var mark = function (sel, ok) { if (box) box.querySelectorAll(sel).forEach(function (x) { x.classList.add(ok ? "ok" : "no"); }); };
    if (q.t === "mc") { var o = q.o[ans]; if (box) { box.querySelectorAll("[data-o]").forEach(function (b, i) { if (q.o[i].ok) b.classList.add("ok"); else if (i === ans) b.classList.add("no"); }); } return { ok: !!(o && o.ok), e: o && !o.ok ? o.e : "" }; }
    if (q.t === "num") { var v = parseNum(ans); if (v == null) return { ok: false, e: "Escribe solo el número." }; if (Math.abs(v - q.a) <= (q.tol || 1e-6)) { mark("[data-in]", true); return { ok: true }; } mark("[data-in]", false); for (var k in q.tr) if (Math.abs(Number(k) - v) < 1e-6) return { ok: false, e: q.tr[k] }; return { ok: false, e: "" }; }
    if (q.t === "frac") { var n = parseInt(ans[0], 10), d = parseInt(ans[1], 10); if (!(d > 0) || isNaN(n)) return { ok: false, e: "" }; var eq = n * q.a[1] === q.a[0] * d; if (eq && (!q.exact || (n === q.a[0] && d === q.a[1]))) { mark("input", true); return { ok: true }; } mark("input", false); if (eq) return { ok: false, e: q.exact === "simp" ? "Es equivalente, pero todavía se puede simplificar." : "Es una fracción equivalente, pero aquí se pide con denominador " + q.a[1] + "." }; return { ok: false, e: q.tr[n + "/" + d] || "" }; }
    if (q.t === "fill") { var all = true, bad = -1, pool = q.unord ? q.ans.slice() : null; ans.forEach(function (a, i) { var ok; if (pool) { var j = -1; pool.forEach(function (x, k) { if (j < 0 && eqv(x, a)) j = k; }); ok = j > -1; if (ok) pool.splice(j, 1); } else ok = eqv(q.ans[i], a); if (!ok) { all = false; if (bad < 0) bad = i; } if (box) { var el = box.querySelector('[data-f="' + i + '"]'); if (el) el.classList.add(ok ? "ok" : "no"); } }); return { ok: all, e: !all && q.fe ? (typeof q.fe === "function" ? q.fe(bad, ans) : q.fe) : "" }; }
    if (q.t === "col") {
      var str = ans.map(function (x) { return x === "" ? " " : x; }).join(""), digits = str.replace(/^\s+/, "");
      if (/\s/.test(digits)) { mark("[data-dg]", false); return { ok: false, e: "Te faltó escribir alguna cifra del resultado." }; }
      var val = Number(digits) / Math.pow(10, q.d || 0), okc = Math.abs(val - q.a) < 1e-6;
      if (box) { var exp = (q.d ? q.a.toFixed(q.d).replace(".", "") : String(q.a)), dgs = box.querySelectorAll("[data-dg]"), off = dgs.length - exp.length; dgs.forEach(function (x, i) { var want = i - off >= 0 ? exp[i - off] : ""; x.classList.add((x.value || "") === want ? "ok" : "no"); }); }
      if (okc) return { ok: true };
      for (var t in q.tr) if (Math.abs(Number(t) - val) < 1e-6) return { ok: false, e: q.tr[t] };
      return { ok: false, e: "" };
    }
    if (q.t === "shade") { var okS = ans === q.k; return { ok: okS, e: okS ? "" : (ans === q.n - q.k ? "Coloreaste las partes que quedan, no las que se piden." : ans > q.k ? "Coloreaste de más: cuenta otra vez cuántas partes pide el numerador." : "Te faltaron partes por colorear: el numerador dice cuántas.") }; }
    if (q.t === "order") { var okO = ans.every(function (k, i) { return k === i; }); if (box) box.querySelectorAll("[data-it]").forEach(function (c) { var k = +c.dataset.it; c.classList.add(ans.indexOf(k) === k ? "ok" : "no"); }); return { ok: okO, e: okO ? "" : (q.oe || "") }; }
    if (q.t === "line") { var okL = ans === q.a; return { ok: okL, e: okL ? "" : (q.le ? q.le(ans) : "") }; }
    if (q.t === "match") { var okM = true; Object.keys(ans).forEach(function (l) { var g = String(ans[l]) === String(l); if (!g) okM = false; if (box) { box.querySelector('[data-ml="' + l + '"]').classList.add(g ? "ok" : "no"); } }); return { ok: okM, e: "" }; }
    if (q.t === "sort") { var okT = true; q.items.forEach(function (it, i) { var g = ans[i] === it[1]; if (!g) okT = false; if (box) box.querySelector('[data-si="' + i + '"]').classList.add(g ? "ok" : "no"); }); return { ok: okT, e: okT ? "" : (q.se || "") }; }
    if (q.t === "bars") { var okB = ans.every(function (h, i) { return h === q.vals[i]; }); return { ok: okB, e: okB ? "" : "Revisa la altura de cada barra con la tabla: cada renglón de la cuadrícula vale " + (q.unitv || 1) + "." }; }
    return { ok: false, e: "" };
  }
  function lock(box, q) { box.dataset.lk = "1"; box.querySelectorAll("input,button.mt-opt,button.mt-chip,button.mt-sgn").forEach(function (x) { if (x.tagName === "INPUT") x.readOnly = true; else x.disabled = true; }); var c = box.querySelector("[data-clr]"); if (c) c.style.display = "none"; }

  /* ---------- Carga de grados ---------- */
  function gradeInfo(g) { for (var i = 0; i < GRADES.length; i++) if (GRADES[i].g === g) return GRADES[i]; return null; }
  function need(g, cb) {
    if (DATA[g]) return cb(true); var gi = gradeInfo(g); if (!gi || !gi.f) return cb(false);
    (LOADING[g] = LOADING[g] || []).push(cb); if (LOADING[g].length > 1) return;
    var s = document.createElement("script"); s.src = gi.f + "?v=1"; s.onload = function () { var l = LOADING[g]; delete LOADING[g]; l.forEach(function (f) { f(!!DATA[g]); }); }; s.onerror = function () { var l = LOADING[g]; delete LOADING[g]; l.forEach(function (f) { f(false); }); }; document.head.appendChild(s);
  }
  function topicById(G, id) { var r = null; G.units.forEach(function (u, ui) { u.topics.forEach(function (t, ti) { if (t.id === id) r = { u: u, ui: ui, t: t, ti: ti }; }); }); return r; }
  function flat(G) { var a = []; G.units.forEach(function (u, ui) { u.topics.forEach(function (t) { a.push({ u: u, ui: ui, t: t }); }); }); return a; }

  /* ---------- Vistas ---------- */
  function page(title, html, mount) { css(); return { title: title, html: '<section class="wrap mt">' + html + "</section>", mount: mount }; }
  function back(href, t) { return '<a class="mt-back" href="' + href + '">' + BKI + esc(t) + "</a>"; }
  function hero(o) { return '<div class="mt-hero' + (o.dk ? " mt-dk" : "") + '" style="--c:' + (o.c || LAV) + '"><span class="dot"></span><span class="dot2"></span><span class="mt-k">' + o.k + "</span><h1>" + o.h + "</h1>" + (o.p ? "<p>" + o.p + "</p>" : "") + (o.extra || "") + "</div>"; }

  function vGrades() {
    var P = pload(), groups = [["MOVA Kids", [2]], ["MOVA Children", [3, 4]], ["MOVA Teens", [7, 8, 9, 10]]];
    var html = back("#/matematicas", "Matemáticas") + hero({ dk: 1, k: "MOVA Math", h: "Temas por grado", p: "Todos los temas de tu libro, en orden. Aprende, mira ejemplos resueltos y practica tema por tema." });
    groups.forEach(function (gr) {
      html += '<div class="mt-sh"><b>' + gr[0] + '</b></div><div class="mt-gr">' + gr[1].map(function (g) { var gi = gradeInfo(g); return '<a class="mt-g' + (gi.f ? "" : " off") + '" style="--c:' + gi.c + '" href="#/matematicas/temas/' + g + '"><b>' + gi.n + "</b><small>" + (gi.f ? "Ver temas" : "Muy pronto") + "</small></a>"; }).join("") + "</div>";
    });
    return page("Temas por grado", html);
  }
  function vLoading(g) { return page("Temas", back("#/matematicas/temas", "Grados") + '<div class="mt-card" style="text-align:center;padding:30px">Cargando temas…</div>', function () { need(g, function () { if (typeof router === "function") router(); }); }); }
  function vGrade(g) {
    var G = DATA[g], gi = gradeInfo(g); if (!G) return vLoading(g);
    var P = pload(), all = flat(G), done = all.filter(function (x) { var p = P[x.t.id] || {}; return (p[1] || 0) >= 80; }).length;
    var html = back("#/matematicas/temas", "Grados") + hero({ k: gi.st, h: gi.n, c: gi.c, p: G.book ? "Igual que tu libro <b>" + G.book + "</b>." : "", extra: '<div class="mt-prog" style="background:rgba(255,255,255,.55)"><i style="width:' + Math.round(done / all.length * 100) + '%;background:#15192B"></i></div><p style="font-size:13px;font-weight:800;margin-top:6px">' + done + " de " + all.length + " temas dominados en Mi grado</p>" });
    html += '<p style="font-size:12.5px;color:#6A6F85;margin:0 6px 12px;display:flex;gap:12px;flex-wrap:wrap;align-items:center"><span>' + lvDots({ 0: 100 }) + " Nivelación</span><span>" + lvDots({ 1: 100 }) + " Mi grado</span><span>" + lvDots({ 2: 100 }) + " Reto</span></p>";
    if (QUIZZES[g]) html += '<a class="mt-row" href="#/matematicas/temas/' + g + '/quiz" style="background:#15192B;color:#fff;margin-bottom:14px"><span class="n" style="background:#D3F36B;color:#15192B">Q</span><span class="t"><b style="color:#fff">' + esc(QUIZZES[g].n) + '</b><br><small style="color:#C9CCE0">' + QUIZZES[g].topics.length + ' preguntas · ' + esc(QUIZZES[g].sub) + '</small></span><span class="mt-go">' + ARW + '</span></a>';
    var num = 0;
    G.units.forEach(function (u, ui) {
      html += '<div class="mt-u"><div class="mt-uh"><span class="mt-un" style="background:' + UCOL[ui % UCOL.length] + '">' + (ui + 1) + "</span><span><small>Unidad " + (ui + 1) + "</small><b>" + esc(u.n) + "</b></span></div>" +
        u.topics.map(function (t) { num++; return '<a class="mt-row" href="#/matematicas/temas/' + g + "/" + t.id + '"><span class="n">' + num + '</span><span class="t">' + esc(t.n) + "</span>" + lvDots(P[t.id]) + '<span class="mt-go">' + ARW + "</span></a>"; }).join("") + "</div>";
    });
    return page(gi.n + " · Temas", html);
  }

  function vTopic(g, id, tab0) {
    var G = DATA[g]; if (!G) return vLoading(g);
    var f = topicById(G, id); if (!f) return vGrade(g);
    var T = f.t, gi = gradeInfo(g), all = flat(G), idx = all.map(function (x) { return x.t.id; }).indexOf(id), next = all[idx + 1];
    var html = back("#/matematicas/temas/" + g, gi.n) + hero({ k: "Unidad " + (f.ui + 1) + " · " + esc(f.u.n), h: esc(T.n), c: UCOL[f.ui % UCOL.length], p: T.d || "" }) + '<div id="mt-box"></div>';
    return page(T.n, html, function (root) { topicApp(root.querySelector("#mt-box"), g, G, T, next, tab0); });
  }

  function topicApp(box, g, G, T, next, tab0) {
    var tab = tab0 || "aprende", ai = 0, mi = 0, si = 0;
    var tabs = function () { return '<div class="mt-tabs" role="tablist">' + [["aprende", "Aprende"], ["mira", "Mira cómo<br>se hace"], ["practica", "Practica"]].map(function (t) { return '<button type="button" role="tab" data-t="' + t[0] + '" class="' + (tab === t[0] ? "on" : "") + '">' + t[1] + "</button>"; }).join("") + "</div>"; };
    function draw() {
      var h = tabs(), L = T.learn || [], M = T.mira || [];
      if (tab === "aprende" && L.length) {
        var A = L[ai];
        h += '<div class="mt-card"><p class="mt-n">Aprende · ' + (ai + 1) + " de " + L.length + '</p><h2 class="mt-h">' + A.h + '</h2><p class="mt-p">' + A.p + "</p>" + (A.v ? '<div class="mt-vis">' + A.v + "</div>" : "") + (A.k ? '<div class="mt-key">' + BULB + "<span>" + A.k + "</span></div>" : "") +
          '<div class="mt-dots">' + L.map(function (_, i) { return '<i class="' + (i === ai ? "on" : "") + '"></i>'; }).join("") + "</div></div>" +
          '<div class="mt-rowb">' + (ai > 0 ? '<button type="button" class="mt-btn gh" data-prev>Anterior</button>' : "") + '<button type="button" class="mt-btn dk" data-next>' + (ai < L.length - 1 ? "Siguiente" : "Mira cómo se hace") + "</button></div>";
      } else if (tab === "mira" && M.length) {
        var E = M[mi], last = si >= E.steps.length;
        h += '<div class="mt-card"><p class="mt-n">Ejemplo ' + (mi + 1) + " de " + M.length + '</p><p class="mt-q" style="font-weight:750">' + E.q + "</p>" + (E.v ? '<div class="mt-vis">' + E.v + "</div>" : "") +
          '<ol class="mt-steps">' + E.steps.slice(0, si).map(function (s, i) { return "<li><b>" + (i + 1) + "</b><div><strong>" + s[0] + "</strong><span>" + s[1] + "</span></div></li>"; }).join("") + "</ol>" +
          (last ? '<div class="mt-ans"><small>Respuesta</small>' + E.a + "</div>" : "") + "</div>" +
          '<div class="mt-rowb">' + (!last ? '<button type="button" class="mt-btn dk" data-step>' + (si === 0 ? "Ver el primer paso" : "Siguiente paso") + "</button>" :
            (mi < M.length - 1 ? '<button type="button" class="mt-btn gh" data-ex>Otro ejemplo</button>' : "") + '<button type="button" class="mt-btn dk" data-go>Ahora practica tú</button>') + "</div>";
      } else {
        tab = "practica"; h = tabs();
        var P = pload()[T.id] || {};
        h += LEVELS.map(function (L0, i) { var best = P[i]; return '<button type="button" class="mt-lvc" data-lv="' + i + '"><span class="ic ' + L0.c + '">' + (i + 1) + "</span><span style=\"flex:1\"><b>" + L0.n + "</b><small>" + L0.d + "</small>" + (best != null ? '<em class="' + (best >= 80 ? "c3" : "c4") + '">Tu mejor resultado: ' + best + "%</em>" : '<em class="c5">' + L0.N + " ejercicios</em>") + '</span><span class="mt-go">' + ARW + "</span></button>"; }).join("");
        if (T.game) { var gm = G.games && G.games[T.game] || { n: T.game }; h += '<a class="mt-game" href="juego-' + T.game + '.html"><img src="thumb-' + T.game + '.webp" alt="" loading="lazy" onerror="this.style.display=\'none\'"><span style="flex:1"><small>Juego recomendado</small><b>' + esc(gm.n) + '</b></span><span class="mt-go">' + ARW + "</span></a>"; }
      }
      box.innerHTML = h;
      box.querySelectorAll("[data-t]").forEach(function (b) { b.onclick = function () { tab = b.dataset.t; si = 0; draw(); }; });
      var on = function (s, fn) { var el = box.querySelector(s); if (el) el.onclick = fn; };
      on("[data-next]", function () { if (ai < (T.learn || []).length - 1) ai++; else { tab = "mira"; mi = 0; si = 0; } window.scrollTo(0, 0); draw(); });
      on("[data-prev]", function () { ai--; draw(); });
      on("[data-step]", function () { si++; draw(); var st = box.querySelectorAll(".mt-steps li"); if (st.length) st[st.length - 1].scrollIntoView({ block: "nearest", behavior: "smooth" }); });
      on("[data-ex]", function () { mi++; si = 0; window.scrollTo(0, 0); draw(); });
      on("[data-go]", function () { tab = "practica"; window.scrollTo(0, 0); draw(); });
      box.querySelectorAll("[data-lv]").forEach(function (b) { b.onclick = function () { runLevel(box, g, G, T, +b.dataset.lv, next, function () { tab = "practica"; draw(); }); }; });
    }
    draw();
  }

  function build(T, L) {
    var gens = (T.gen || []).filter(function (x) { return !x.lv || x.lv.indexOf(L) > -1; }), N = LEVELS[L].N, out = [], seen = {}, order = [];
    while (order.length < N) order = order.concat(shuf(gens));
    for (var i = 0; i < N; i++) {
      var q = null, tries = 0;
      do { q = order[i].f(L); tries++; } while (q && seen[q.q + "|" + (q.v || "") + "|" + (q.a != null ? q.a : "")] && tries < 12);
      if (q) { seen[q.q + "|" + (q.v || "") + "|" + (q.a != null ? q.a : "")] = 1; q._g = order[i].k || ""; out.push(q); }
    }
    return out;
  }
  var PRAISE = ["¡Muy bien!", "¡Exacto!", "¡Correcto!", "¡Así es!", "¡Excelente!", "¡Perfecto!"];
  function heroVis(on) { document.querySelectorAll(".mt > .mt-hero, .mt > .mt-back").forEach(function (x) { x.style.display = on ? "" : "none"; }); }
  function runLevel(box, g, G, T, L, next, onExit0) {
    var onExit = function () { heroVis(true); window.scrollTo(0, 0); onExit0(); }; heroVis(false);
    var Q = T._qs ? T._qs() : build(T, L), i = 0, score = 0, misses = [], t0 = Date.now();
    window.scrollTo(0, 0);
    function step() {
      if (i >= Q.length) return finish();
      var q = Q[i]; window.MovaTemas._q = q;
      box.innerHTML = '<div class="mt-top"><button type="button" class="mt-x" data-quit aria-label="Salir">' + XI + '</button><div class="mt-prog"><i style="width:' + Math.round(i / Q.length * 100) + '%"></i></div><small>' + (i + 1) + " / " + Q.length + "</small></div>" +
        '<div class="mt-card" data-q><p class="mt-n">' + (T._quiz ? esc(T.n) + (q._tn ? " · " + esc(q._tn) : "") : LEVELS[L].n + " · " + esc(T.n)) + "</p>" + qHtml(q) + '<div data-fbk></div></div><div class="mt-act"><button type="button" class="mt-btn dk" data-chk disabled>Comprobar</button></div>';
      var card = box.querySelector("[data-q]"), btn = box.querySelector("[data-chk]"), get = wire(card, q, function (ok) { btn.disabled = !ok; }), done = false;
      box.querySelector("[data-quit]").onclick = function () { onExit(); };
      var go = function () {
        if (btn.disabled) return;
        if (done) { i++; window.scrollTo(0, 0); step(); return; }
        var r = check(q, get(), card); done = true; lock(card, q);
        if (r.ok) score++; else misses.push({ tag: q.tag || T.n, e: r.e });
        card.querySelector("[data-fbk]").innerHTML = '<div class="mt-fb ' + (r.ok ? "ok" : "no") + '"><b class="hd">' + (r.ok ? pick(PRAISE) : "Casi. La respuesta correcta es " + showAns(q) + ".") + "</b>" + (r.ok ? (q.xo || "") : ((r.e ? r.e + " " : "") + (q.x || ""))) + "</div>";
        btn.textContent = i < Q.length - 1 ? "Siguiente" : "Ver mi resultado";
        card.querySelector("[data-fbk]").scrollIntoView({ block: "nearest", behavior: "smooth" });
      };
      btn.onclick = go;
      card.querySelectorAll("input").forEach(function (x) { x.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); }); });
    }
    function finish() {
      var pct = Math.round(score / Q.length * 100), P = pload(), cur = P[T.id] || {};
      if (cur[L] == null || pct > cur[L]) cur[L] = pct; P[T.id] = cur; pstore(P);
      var tags = {}; misses.forEach(function (m) { tags[m.tag] = (tags[m.tag] || 0) + 1; });
      var topTags = Object.keys(tags).sort(function (a, b) { return tags[b] - tags[a]; }).slice(0, 2);
      if (T._quiz) return quizEnd(box, T, score, Q.length, pct, misses, t0);
      cloud(T.id, score, Q.length, { kind: "math-tema", grade: g, topic: T.n, level: LEVELS[L].n, pct: pct, weak: topTags, secs: Math.min(3600, Math.round((Date.now() - t0) / 1000)) });
      var stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0, u = who(), first = u && (u.name || u.display_name) ? String(u.name || u.display_name).split(" ")[0] : "";
      var msg;
      if (pct >= 90) msg = (first ? first + ", ¡excelente trabajo! " : "¡Excelente trabajo! ") + "Dominas <b>" + esc(T.n.toLowerCase()) + "</b> en el nivel " + LEVELS[L].n + ".";
      else if (pct >= 70) msg = (first ? "Muy bien, " + first + ". " : "Muy bien. ") + "Ya entiendes <b>" + esc(T.n.toLowerCase()) + "</b>; solo falta afinar algunos detalles.";
      else msg = (first ? first + ", vas por buen camino. " : "Vas por buen camino. ") + "Este tema todavía necesita práctica, y es normal: así se aprende.";
      if (topTags.length) msg += " Lo que más te costó fue <b>" + topTags.join("</b> y <b>") + "</b>.";
      var tip = misses.filter(function (m) { return m.e; })[0]; if (tip && pct < 90) msg += " Recuerda: " + tip.e;
      if (pct < 70) msg += " Te recomiendo volver a ver <b>Aprende</b> y <b>Mira cómo se hace</b>, y después intentarlo otra vez" + (L > 0 ? " o empezar por <b>Nivelación</b>" : "") + ".";
      else if (L < 2) msg += " Cuando quieras, pasa al nivel <b>" + LEVELS[L + 1].n + "</b>.";
      else if (next) msg += " Ya puedes seguir con <b>" + esc(next.t.n) + "</b>.";
      if (T.game && pct >= 70) { var gm = G.games && G.games[T.game]; if (gm) msg += " Y para practicar jugando, te recomiendo <b>" + esc(gm.n) + "</b>."; }
      box.innerHTML = '<div class="mt-card"><div class="mt-res"><p class="mt-n">' + LEVELS[L].n + " · " + esc(T.n) + '</p><div class="big">' + score + " / " + Q.length + '</div><div class="stars">' + [0, 1, 2].map(function (k) { return STAR(k < stars); }).join("") + '</div><p style="margin:2px 0 0;font-weight:800;color:#4E5268">' + pct + "% de aciertos</p></div></div>" +
        '<div class="mt-note"><div class="w"><i>K</i>Comentario de tu maestra</div>' + msg + '<div class="sg">Miss Karla Rodríguez<small>Academic Coordinator</small></div></div>' +
        '<div class="mt-stack">' + (pct >= 80 && L < 2 ? '<button type="button" class="mt-btn dk" data-nl>Siguiente nivel: ' + LEVELS[L + 1].n + "</button>" : "") + (pct >= 80 && L === 2 && next ? '<a class="mt-btn dk" href="#/matematicas/temas/' + g + "/" + next.t.id + '">Siguiente tema</a>' : "") +
        '<button type="button" class="mt-btn ' + (pct >= 80 ? "gh" : "dk") + '" data-again>Practicar de nuevo</button>' + (T.game ? '<a class="mt-btn gh" href="juego-' + T.game + '.html">Jugar ' + esc((G.games && G.games[T.game] || { n: "" }).n) + "</a>" : "") + '<button type="button" class="mt-btn gh" data-out>Volver al tema</button></div>';
      window.scrollTo(0, 0);
      var on = function (s, fn) { var el = box.querySelector(s); if (el) el.onclick = fn; };
      on("[data-nl]", function () { runLevel(box, g, G, T, L + 1, next, onExit); });
      on("[data-again]", function () { runLevel(box, g, G, T, L, next, onExit); });
      on("[data-out]", onExit);
    }
    step();
  }

  /* ---------- Quiz mensual de matemáticas (una pregunta por tema, nivel Mi grado) ---------- */
  var QUIZZES = {
    4: { id: "quiz-nov-2026-4", n: "Quiz de noviembre", sub: "Matemáticas · 4° de primaria", units: "Unidades 1 a 4: números naturales, sumas y restas, multiplicación y división, y fracciones.",
      topics: ["lectura-numeros", "antecesor-sucesor", "numeros-decimales", "suma-transformaciones", "resta-transformaciones", "suma-decimales", "resta-decimales", "multiplicacion", "division-resta", "problemas-division", "doble-triple-mitad", "fraccion-todo", "equivalencia", "suma-fracciones", "resta-fracciones"] }
  };
  function quizQs(G, ids) {
    var out = [];
    ids.forEach(function (id) {
      var f = topicById(G, id); if (!f) return;
      var gens = (f.t.gen || []).filter(function (x) { return !x.lv || x.lv.indexOf(1) > -1; }); if (!gens.length) return;
      var q = null, k = 0; while (!q && k < 6) { try { q = pick(gens).f(1); } catch (e) { q = null; } k++; }
      if (q) { q._tn = f.t.n; q.tag = q.tag || f.t.n; out.push(q); }
    });
    return out;
  }
  function vQuiz(g) {
    var G = DATA[g]; if (!G) return vLoading(g);
    var Z = QUIZZES[g], gi = gradeInfo(g); if (!Z) return vGrade(g);
    var html = back("#/matematicas/temas/" + g, gi.n) + hero({ dk: 1, k: Z.sub, h: Z.n, p: Z.units }) + '<div id="mt-box"></div>';
    return page(Z.n, html, function (root) {
      var box = root.querySelector("#mt-box"), u = who();
      var T = { id: Z.id, n: Z.n, _quiz: Z, _qs: function () { return quizQs(G, Z.topics); } };
      box.innerHTML = '<div class="mt-card"><p class="mt-n">Antes de empezar</p><h2 class="mt-h">' + Z.topics.length + ' preguntas · unos 25 minutos</h2>' +
        '<p class="mt-p">Lee cada pregunta con calma, haz tus operaciones en tu hoja y después escribe o elige tu respuesta. Al final verás tu resultado.</p>' +
        (u ? "" : '<p class="mt-p" style="background:#FFE6F2;border-radius:14px;padding:10px 14px;font-size:13.5px">Inicia sesión con tu usuario MOVA para que tu maestra reciba tu calificación.</p>') +
        '</div><div class="mt-rowb"><button type="button" class="mt-btn dk" data-start>Empezar quiz</button></div>';
      box.querySelector("[data-start]").onclick = function () { runLevel(box, g, G, T, 1, null, function () { location.hash = "#/matematicas/temas/" + g; }); };
    });
  }
  function quizEnd(box, T, score, total, pct, misses, t0) {
    var Z = T._quiz, grade = Math.round(score / total * 100) / 10;
    var tags = {}; misses.forEach(function (m) { tags[m.tag] = (tags[m.tag] || 0) + 1; });
    var weak = Object.keys(tags).sort(function (a, b) { return tags[b] - tags[a]; }).slice(0, 3);
    try { if (window.MovaAuth && window.MovaAuth.user()) window.MovaAuth.save("math-tema", Z.n + " · " + Z.sub, score, total, { kind: "math-quiz", task: (function () { try { return new URLSearchParams(location.search).get("task") || undefined; } catch (e) { return undefined; } })(), grade: 4, topic: Z.n, level: "Mi grado", pct: pct, weak: weak, secs: Math.min(5400, Math.round((Date.now() - t0) / 1000)) }); } catch (e) {}
    var u = who(), first = u && (u.name || u.display_name) ? String(u.name || u.display_name).split(" ")[0] : "";
    var msg = (first ? first + ", terminaste" : "Terminaste") + " tu quiz. " + (pct >= 90 ? "¡Excelente trabajo!" : pct >= 70 ? "¡Muy buen trabajo!" : "Gracias por tu esfuerzo; vamos a seguir practicando juntos.") + (weak.length && pct < 100 ? " Lo que vamos a repasar: <b>" + weak.map(esc).join("</b>, <b>") + "</b>." : "");
    heroVis(true); window.scrollTo(0, 0);
    box.innerHTML = '<div class="mt-card"><div class="mt-res"><p class="mt-n">' + esc(Z.n) + " · " + esc(Z.sub) + '</p><div class="big">' + grade.toFixed(1) + '</div><p style="margin:2px 0 0;font-weight:800;color:#4E5268">' + score + " de " + total + " aciertos</p></div></div>" +
      '<div class="mt-note"><div class="w"><i>K</i>Comentario de tu maestra</div>' + msg + '<div class="sg">Miss Karla Rodríguez<small>Academic Coordinator</small></div></div>' +
      '<div class="mt-stack"><a class="mt-btn dk" href="#/matematicas/temas/4">Terminar</a></div>';
  }

  /* ---------- Tarjeta en el inicio de Matemáticas ---------- */
  function homeCard() {
    return '<a class="mt-home" href="#/matematicas/temas"><span class="mt-hth"><span class="k">Temas</span><span class="lst">' +
      [["#C7B5FF", "Números naturales"], ["#FF9CC9", "Fracciones"], ["#9FD8FF", "Figuras y cuerpos"]].map(function (x) { return '<span><i style="background:' + x[0] + '"></i>' + x[1] + "</span>"; }).join("") +
      '</span></span><span class="mt-htx"><b>Temas por grado</b><small>Todos los temas de tu libro, en orden: explicación, ejemplos resueltos y práctica en tres niveles.</small><span class="mt-hft"><span class="mt-chips"><em class="c2">Por grado</em><em class="c3">3 niveles</em></span><span class="mt-go">' + ARW + "</span></span></span></a>";
  }

  /* ---------- Conexión con la app ---------- */
  var installed = false, tries = 0;
  function install() {
    if (installed) return true;
    if (typeof ROUTES !== "object" || !ROUTES || typeof ROUTES.matematicas !== "function") return false;
    if (!ROUTES.matematicas.__ms && tries < 40) return false; /* espera a que cargue MOVA Math */
    var prev = ROUTES.matematicas;
    var w = function (p) {
      p = p || [];
      try {
        if (p[0] === "temas") {
          css();
          if (!p[1]) return vGrades();
          var g = parseInt(p[1], 10); if (!gradeInfo(g) || !gradeInfo(g).f) return vGrades();
          if (!p[2]) return vGrade(g);
          if (p[2] === "quiz") return vQuiz(g);
          return vTopic(g, p[2], p[3]);
        }
      } catch (e) { if (window.console) console.error("MOVA Temas", e); }
      var v = prev(p);
      try { if (!p[0] && v && typeof v.html === "string" && v.html.indexOf("mt-home") < 0) { css(); var mark = '<a class="mm-v" href="#/matematicas/habilidades"'; v.html = v.html.indexOf(mark) > -1 ? v.html.replace(mark, homeCard() + mark) : v.html.replace(/(<\/section>\s*)$/, homeCard() + "$1"); } } catch (e) {}
      return v;
    };
    for (var x in prev) if (Object.prototype.hasOwnProperty.call(prev, x)) w[x] = prev[x];
    w.__mt = true; ROUTES.matematicas = w; installed = true;
    if (/^#\/matematicas/.test(location.hash) && typeof router === "function") router();
    return true;
  }
  function boot() { if (install() || ++tries > 80) return; setTimeout(boot, 250); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(boot, 50); }); else setTimeout(boot, 50);

  window.MovaTemas = {
    add: function (g, data) { DATA[g] = data; },
    V: V, U: { R: R, pick: pick, shuf: shuf, rnd: rnd, gcd: gcd, fmt: fmt, money: money, fr: fr, nm: nm, words: words, wordsDec: wordsDec, esc: esc },
    Q: { MC: MC, TF: TF, NUM: NUM, FR: FR, FILL: FILL, COL: COL, SHADE: SHADE, ORDER: ORDER, LINE: LINE, MATCH: MATCH, SORT: SORT, BARS: BARS },
    C: { INK: INK, LIME: LIME, LAV: LAV, PINK: PINK, SKY: SKY, BUT: BUT, MINT: MINT },
    _check: check, _build: build, grades: GRADES
  };
})();
