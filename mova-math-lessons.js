/* MOVA Math · Lecciones visuales
   "Aprende" (de lo concreto a lo pictórico y a lo abstracto, método Singapur) y
   "Mira cómo se hace" (ejemplos resueltos paso a paso) antes de practicar.
   mova-math.js llama a MovaMathLessons.render(caja, habilidad, alTerminar, guardar). */
(function () {
  "use strict";
  var INK = "#15192B", LAV = "#C7B5FF", LIME = "#D3F36B", PINK = "#FF9CC9", SKY = "#9FD8FF", BUT = "#FFE58A", MINT = "#9BE7C4", GRID = "#ECE9F3";
  function fr(a, b) { return '<span class="mm-fr"><span>' + a + "</span><span>" + b + "</span></span>"; }
  function svg(w, h, body) { return '<svg class="ls-svg" viewBox="0 0 ' + w + " " + h + '" role="img" xmlns="http://www.w3.org/2000/svg" font-family="Plus Jakarta Sans, sans-serif">' + body + "</svg>"; }
  function t(x, y, s, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-size="' + (o.fs || 14) + '" font-weight="' + (o.fw || 800) + '" fill="' + (o.c || INK) + '">' + s + "</text>"; }

  /* Barra de fracción: n partes, k sombreadas */
  function barRow(y, n, k, c, lab, w) {
    w = w || 250; var x0 = 10, sw = w / n, s = "";
    for (var i = 0; i < n; i++) s += '<rect x="' + (x0 + i * sw) + '" y="' + y + '" width="' + sw + '" height="34" fill="' + (i < k ? c : "#fff") + '" stroke="' + INK + '" stroke-width="2"/>';
    s += '<rect x="' + x0 + '" y="' + y + '" width="' + w + '" height="34" fill="none" stroke="' + INK + '" stroke-width="2.5" rx="6"/>';
    if (lab) { var m = /<span>([^<]*)<\/span><span>([^<]*)<\/span>/.exec(lab), lx = x0 + w + 30;
      if (m) s += t(lx, y + 13, m[1], { fs: 15 }) + '<line x1="' + (lx - 11) + '" y1="' + (y + 18) + '" x2="' + (lx + 11) + '" y2="' + (y + 18) + '" stroke="' + INK + '" stroke-width="2"/>' + t(lx, y + 33, m[2], { fs: 15 });
      else s += t(lx, y + 23, lab, { fs: 16 }); }
    return s;
  }
  function bars(rows, w) { var h = rows.length * 48 + 6, s = ""; rows.forEach(function (r, i) { s += barRow(6 + i * 48, r[0], r[1], r[2] || LAV, r[3], w); }); return svg(310, h, s); }

  /* Recta numérica con saltos */
  function nline(a, b, o) {
    o = o || {}; var W = 310, x0 = 18, x1 = W - 18, n = b - a, sx = (x1 - x0) / n, X = function (v) { return x0 + (v - a) * sx; }, y = o.hops ? 96 : 50, s = "";
    s += '<line x1="' + (x0 - 8) + '" y1="' + y + '" x2="' + (x1 + 8) + '" y2="' + y + '" stroke="' + INK + '" stroke-width="2.5"/>';
    s += '<path d="M' + (x1 + 12) + " " + y + " l-8 -5 v10z" + '" fill="' + INK + '"/><path d="M' + (x0 - 12) + " " + y + " l8 -5 v10z" + '" fill="' + INK + '"/>';
    for (var v = a; v <= b; v++) { s += '<line x1="' + X(v) + '" y1="' + (y - 7) + '" x2="' + X(v) + '" y2="' + (y + 7) + '" stroke="' + INK + '" stroke-width="2"/>';
      if (n <= 14 || v % 2 === 0) s += t(X(v), y + 26, v < 0 ? "−" + (-v) : v, { fs: 12.5, fw: v === 0 ? 800 : 600, c: v === 0 ? INK : "#5A5F75" }); }
    if (o.zero !== false && a < 0 && b > 0) s += '<circle cx="' + X(0) + '" cy="' + y + '" r="4" fill="' + INK + '"/>';
    (o.hops || []).forEach(function (h, i) { var xa = X(h[0]), xb = X(h[1]), up = 26 + Math.min(40, Math.abs(xb - xa) * .35), mid = (xa + xb) / 2;
      s += '<path d="M' + xa + " " + (y - 8) + " Q " + mid + " " + (y - 8 - up * 1.4) + " " + xb + " " + (y - 8) + '" fill="none" stroke="' + (h[2] || LAV) + '" stroke-width="3.5" stroke-linecap="round"/>';
      s += '<path d="M' + xb + " " + (y - 8) + " l" + (xb > xa ? "-9 -4" : "9 -4") + " l" + (xb > xa ? "3 9" : "-3 9") + 'z" fill="' + (h[2] || LAV) + '"/>';
      if (h[3]) s += '<rect x="' + (mid - 24) + '" y="' + (y - 14 - up * .95 - 14) + '" width="48" height="22" rx="11" fill="#fff" stroke="' + (h[2] || LAV) + '" stroke-width="2"/>' + t(mid, y - 14 - up * .95 + 2, h[3], { fs: 12.5 }); });
    (o.pts || []).forEach(function (p) { s += '<circle cx="' + X(p[0]) + '" cy="' + y + '" r="9" fill="' + (p[1] || LIME) + '" stroke="' + INK + '" stroke-width="2"/>'; if (p[2]) s += t(X(p[0]), y - 16, p[2], { fs: 12.5 }); });
    return svg(W, y + 40, s);
  }

  /* Balanza: fichas "x" (lavanda) y unidades (lima) */
  function balance(L, R, note) {
    var s = "", W = 320;
    s += '<path d="M150 150 h20 l-10 -96z" fill="' + INK + '"/><rect x="118" y="150" width="84" height="10" rx="5" fill="' + INK + '"/>';
    s += '<rect x="22" y="50" width="276" height="8" rx="4" fill="' + INK + '"/><circle cx="160" cy="54" r="7" fill="' + LIME + '" stroke="' + INK + '" stroke-width="2.5"/>';
    function pan(cx, items) { var out = '<line x1="' + (cx - 52) + '" y1="58" x2="' + (cx - 60) + '" y2="112" stroke="' + INK + '" stroke-width="2"/><line x1="' + (cx + 52) + '" y1="58" x2="' + (cx + 60) + '" y2="112" stroke="' + INK + '" stroke-width="2"/>' +
      '<path d="M' + (cx - 66) + " 112 h132 a14 14 0 0 1 -14 14 h-104 a14 14 0 0 1 -14 -14z" + '" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>';
      var per = 5, sz = 22, gap = 3, rows = [];
      for (var k = 0; k < items.length; k += per) rows.push(items.slice(k, k + per));
      rows.forEach(function (rw, ri) { var tw = rw.length * (sz + gap) - gap, x = cx - tw / 2, yy = 110 - sz - ri * (sz + gap);
        rw.forEach(function (it, i) { var xx = x + i * (sz + gap), isx = /x/.test(it), col = isx ? LAV : (/^−/.test(it) ? PINK : LIME);
          out += isx ? '<rect x="' + xx + '" y="' + yy + '" width="' + sz + '" height="' + sz + '" rx="6" fill="' + col + '" stroke="' + INK + '" stroke-width="2"/>' : '<circle cx="' + (xx + sz / 2) + '" cy="' + (yy + sz / 2) + '" r="' + (sz / 2) + '" fill="' + col + '" stroke="' + INK + '" stroke-width="2"/>';
          out += t(xx + sz / 2, yy + sz / 2 + 4.5, it, { fs: it.length > 2 ? 9.5 : 12 }); }); });
      return out; }
    s += pan(82, L) + pan(238, R);
    if (note) s += t(160, 180, note, { fs: 13, fw: 700, c: "#5A5F75" });
    return svg(W, note ? 190 : 168, s);
  }

  /* Modelo de área para multiplicar y factorizar */
  function area(top, left, cells, colors) {
    var tw = top.map(function (x) { return x[1]; }), lw = left.map(function (x) { return x[1]; }), W = 230, H = 150, sx = W / tw.reduce(function (a, b) { return a + b; }), sy = H / lw.reduce(function (a, b) { return a + b; }), x0 = 60, y0 = 34, s = "", cx = x0;
    top.forEach(function (c, i) { s += t(cx + c[1] * sx / 2, 24, c[0], { fs: 15 }); cx += c[1] * sx; });
    var cy = y0;
    left.forEach(function (r, j) { s += t(40, cy + r[1] * sy / 2 + 5, r[0], { fs: 15, a: "end" }); var xx = x0;
      top.forEach(function (c, i) { var col = (colors && colors[j] && colors[j][i]) || [LAV, BUT, MINT, PINK][(i + j * 2) % 4];
        s += '<rect x="' + xx + '" y="' + cy + '" width="' + c[1] * sx + '" height="' + r[1] * sy + '" fill="' + col + '" stroke="' + INK + '" stroke-width="2.5"/>' + t(xx + c[1] * sx / 2, cy + r[1] * sy / 2 + 5, cells[j][i], { fs: 15 }); xx += c[1] * sx; });
      cy += r[1] * sy; });
    return svg(310, y0 + H + 10, s);
  }

  /* Tabla de signos */
  function signs() {
    function c(a, b, r) { return '<div class="ls-sg"><span class="' + (a === "+" ? "p" : "n") + '">' + a + '</span><i>×</i><span class="' + (b === "+" ? "p" : "n") + '">' + b + '</span><i>=</i><span class="' + (r === "+" ? "p" : "n") + ' r">' + r + "</span></div>"; }
    return '<div class="ls-sgs">' + c("+", "+", "+") + c("−", "−", "+") + c("+", "−", "−") + c("−", "+", "−") + "</div>";
  }
  /* Expresión con la parte que se resuelve resaltada */
  function ex(html) { return '<div class="ls-ex">' + html + "</div>"; }
  function hl(x, c) { return '<mark style="background:' + (c || LIME) + '">' + x + "</mark>"; }
  function order(list) { return '<ol class="ls-ord">' + list.map(function (x, i) { return '<li><b>' + (i + 1) + "</b><span>" + x + "</span></li>"; }).join("") + "</ol>"; }

  /* ---------- Contenido ---------- */
  var L = {};
  L.f3a = { aprende: [
      { h: "Una fracción es una parte de un entero", p: "Imagina una barra de chocolate. Si la partes en partes <b>iguales</b>, cada pedazo es una fracción del entero.", v: bars([[2, 1, BUT, fr(1, 2)], [4, 1, MINT, fr(1, 4)], [8, 1, LAV, fr(1, 8)]]), k: "Mientras más partes iguales, más pequeño es cada pedazo." },
      { h: "Qué significa cada número", p: "El número de abajo, el <b>denominador</b>, dice en cuántas partes iguales se dividió el entero. El de arriba, el <b>numerador</b>, dice cuántas partes tomamos.", v: bars([[4, 3, MINT, fr(3, 4)], [8, 5, LAV, fr(5, 8)]]), k: fr(3, 4) + " significa: dividí en 4 partes iguales y tomé 3." } ],
    mira: [
      { q: "¿Qué fracción de la barra está pintada?", v: bars([[8, 3, LAV]]), steps: [["Cuenta todas las partes", "La barra tiene 8 partes iguales: ese es el denominador."], ["Cuenta las partes pintadas", "Hay 3 partes pintadas: ese es el numerador."], ["Escribe la fracción", "Arriba lo que tomamos, abajo el total: " + fr(3, 8) + "."]], a: fr(3, 8) },
      { q: "Pinta " + fr(1, 2) + " de una barra dividida en 4 partes.", steps: [["Piensa en la mitad", "La mitad de 4 partes son 2 partes."], ["Pinta 2 de 4", "Eso es " + fr(2, 4) + ", que ocupa lo mismo que " + fr(1, 2) + "."]], v2: bars([[2, 1, BUT, fr(1, 2)], [4, 2, MINT, fr(2, 4)]]), a: fr(1, 2) + " = " + fr(2, 4) } ] };
  L.f3b = { aprende: [
      { h: "Mismo denominador: gana el numerador más grande", p: "Si las barras están partidas igual, compara cuántas partes tomaste.", v: bars([[5, 2, LAV, fr(2, 5)], [5, 4, MINT, fr(4, 5)]]), k: fr(4, 5) + " &gt; " + fr(2, 5) + " porque 4 partes son más que 2 del mismo tamaño." },
      { h: "Mismo numerador: gana el denominador más pequeño", p: "Si tomas el mismo número de partes, gana la barra con pedazos más grandes, o sea, la partida en menos partes.", v: bars([[3, 1, BUT, fr(1, 3)], [6, 1, PINK, fr(1, 6)]]), k: fr(1, 3) + " &gt; " + fr(1, 6) + ": un tercio es un pedazo más grande que un sexto." } ],
    mira: [
      { q: "¿Cuál es mayor: " + fr(3, 8) + " o " + fr(5, 8) + "?", steps: [["Revisa los denominadores", "Los dos son octavos: las partes son del mismo tamaño."], ["Compara los numeradores", "5 octavos son más que 3 octavos."]], a: fr(5, 8) + " &gt; " + fr(3, 8) },
      { q: "¿Cuál es mayor: " + fr(2, 3) + " o " + fr(2, 5) + "?", v: bars([[3, 2, MINT, fr(2, 3)], [5, 2, LAV, fr(2, 5)]]), steps: [["Revisa los numeradores", "En los dos tomamos 2 partes."], ["Compara el tamaño de las partes", "Un tercio es más grande que un quinto, así que 2 tercios ocupan más."]], a: fr(2, 3) + " &gt; " + fr(2, 5) } ] };
  L.f4b = { aprende: [
      { h: "Solo se suman partes del mismo tamaño", p: "No podemos juntar tercios con cuartos directamente: son pedazos de distinto tamaño. Primero los partimos en pedazos iguales.", v: bars([[3, 1, LAV, fr(1, 3)], [4, 1, MINT, fr(1, 4)]]), k: "Buscamos un denominador común: un número en el que caben 3 y 4." },
      { h: "Partir en doceavos", p: "12 sirve para los dos. " + fr(1, 3) + " se vuelve " + fr(4, 12) + " y " + fr(1, 4) + " se vuelve " + fr(3, 12) + ". Ahora sí son partes iguales.", v: bars([[12, 4, LAV, fr(4, 12)], [12, 3, MINT, fr(3, 12)], [12, 7, BUT, fr(7, 12)]]), k: fr(1, 3) + " + " + fr(1, 4) + " = " + fr(4, 12) + " + " + fr(3, 12) + " = " + fr(7, 12) } ],
    mira: [
      { q: "Resuelve " + fr(2, 3) + " + " + fr(1, 6), steps: [["Busca el denominador común", "6 es múltiplo de 3, así que usamos sextos."], ["Convierte", fr(2, 3) + " = " + fr(4, 6) + " (multiplicamos arriba y abajo por 2)."], ["Suma los numeradores", fr(4, 6) + " + " + fr(1, 6) + " = " + fr(5, 6) + ". El denominador no se suma."]], a: fr(5, 6) },
      { q: "Resuelve " + fr(3, 4) + " − " + fr(2, 5), steps: [["Denominador común", "4 × 5 = 20. Usamos veinteavos."], ["Convierte las dos", fr(3, 4) + " = " + fr(15, 20) + " y " + fr(2, 5) + " = " + fr(8, 20) + "."], ["Resta los numeradores", "15 − 8 = 7."]], a: fr(7, 20) } ] };
  L.f5a = { aprende: [
      { h: "Fracciones que ocupan lo mismo", p: "Estas barras están partidas distinto, pero la parte pintada mide exactamente lo mismo. Son fracciones <b>equivalentes</b>.", v: bars([[2, 1, BUT, fr(1, 2)], [4, 2, MINT, fr(2, 4)], [8, 4, LAV, fr(4, 8)]]), k: "Si multiplicas o divides arriba y abajo por el mismo número, la fracción no cambia." },
      { h: "Simplificar es partir en pedazos más grandes", p: "Para simplificar, divide el numerador y el denominador entre el mismo número, hasta que ya no se pueda.", v: ex("<span>" + fr(6, 8) + "</span><em>÷ 2</em><span>" + fr(3, 4) + "</span>"), k: "Una fracción está simplificada cuando arriba y abajo ya no tienen un divisor común." } ],
    mira: [
      { q: "Simplifica " + fr(12, 18), steps: [["Busca un divisor común", "12 y 18 se pueden dividir entre 6."], ["Divide arriba y abajo", "12 ÷ 6 = 2 y 18 ÷ 6 = 3."], ["Revisa", "2 y 3 ya no tienen divisor común: terminamos."]], a: fr(2, 3) },
      { q: "Completa: " + fr(3, 5) + " = " + fr("?", 20), steps: [["¿Qué le pasó al denominador?", "5 se convirtió en 20: se multiplicó por 4."], ["Haz lo mismo arriba", "3 × 4 = 12."]], a: fr(3, 5) + " = " + fr(12, 20) } ] };
  L.f6b = { aprende: [
      { h: "Multiplicar es tomar una parte de una parte", p: fr(1, 2) + " × " + fr(1, 3) + " significa: la mitad de un tercio. Pintamos un tercio y luego tomamos la mitad de esa parte.", v: area([["1/3", 1], ["", 1], ["", 1]], [["1/2", 1], ["", 1]], [["", "", ""], ["", "", ""]], [[LIME, "#fff", "#fff"], [LAV, "#fff", "#fff"]]), k: "La columna pintada es un tercio y la parte verde es la mitad de ese tercio: 1 de 6 cuadritos. " + fr(1, 2) + " × " + fr(1, 3) + " = " + fr(1, 6) + "." },
      { h: "La regla", p: "Se multiplica numerador por numerador y denominador por denominador. Al final, simplifica si se puede.", v: ex(fr("a", "b") + "<em>×</em>" + fr("c", "d") + "<em>=</em>" + fr("a × c", "b × d")), k: "En la multiplicación no hace falta buscar denominador común." } ],
    mira: [
      { q: "Resuelve " + fr(2, 3) + " × " + fr(3, 4), steps: [["Multiplica arriba", "2 × 3 = 6."], ["Multiplica abajo", "3 × 4 = 12."], ["Simplifica", fr(6, 12) + " ÷ 6 = " + fr(1, 2) + "."]], a: fr(1, 2) },
      { q: "Resuelve 4 × " + fr(2, 5), steps: [["Escribe el entero como fracción", "4 = " + fr(4, 1) + "."], ["Multiplica", "4 × 2 = 8 arriba, 1 × 5 = 5 abajo."], ["Convierte si quieres", fr(8, 5) + " es lo mismo que 1 entero y " + fr(3, 5) + "."]], a: fr(8, 5) } ] };
  L.f6c = { aprende: [
      { h: "Dividir es preguntar cuántas caben", p: "3 ÷ " + fr(1, 2) + " pregunta: ¿cuántas mitades caben en 3 enteros? En cada entero caben 2 mitades.", v: bars([[2, 2, LAV], [2, 2, MINT], [2, 2, BUT]], 230), k: "Caben 6 mitades: 3 ÷ " + fr(1, 2) + " = 6." },
      { h: "La regla: multiplicar por el recíproco", p: "Dividir entre una fracción es lo mismo que multiplicar por la fracción volteada.", v: ex(fr("a", "b") + "<em>÷</em>" + fr("c", "d") + "<em>=</em>" + fr("a", "b") + "<em>×</em>" + fr("d", "c")), k: "La primera fracción se queda igual; solo se voltea la segunda." } ],
    mira: [
      { q: "Resuelve " + fr(3, 4) + " ÷ " + fr(1, 2), steps: [["Voltea la segunda", fr(1, 2) + " se vuelve " + fr(2, 1) + "."], ["Cambia ÷ por ×", fr(3, 4) + " × " + fr(2, 1) + " = " + fr(6, 4) + "."], ["Simplifica", fr(6, 4) + " = " + fr(3, 2) + "."]], a: fr(3, 2) },
      { q: "Resuelve " + fr(2, 5) + " ÷ " + fr(4, 15), steps: [["Voltea la segunda", fr(4, 15) + " se vuelve " + fr(15, 4) + "."], ["Multiplica", "2 × 15 = 30 arriba y 5 × 4 = 20 abajo."], ["Simplifica", fr(30, 20) + " ÷ 10 = " + fr(3, 2) + "."]], a: fr(3, 2) } ] };
  L.e7a = { aprende: [
      { h: "Los números con signo viven en la recta", p: "A la derecha del cero están los positivos y a la izquierda los negativos. Piensa en un termómetro acostado.", v: nline(-6, 6, { pts: [[-4, PINK, "−4"], [3, LIME, "3"]] }), k: "Siempre es mayor el número que está más a la derecha." },
      { h: "Cuidado con los negativos", p: "−2 es mayor que −5, aunque 5 sea más grande que 2. −2 está más cerca del cero, más a la derecha.", v: nline(-6, 1, { pts: [[-5, PINK, "−5"], [-2, LIME, "−2"]] }), k: "Entre dos negativos, es mayor el que está más cerca del cero." } ],
    mira: [
      { q: "Ordena de menor a mayor: 3, −7, 0, −2", steps: [["Ubica los negativos", "−7 está más a la izquierda que −2."], ["Luego el cero", "El cero está entre negativos y positivos."], ["Al final los positivos", "Solo queda el 3."]], a: "−7, −2, 0, 3" },
      { q: "¿Qué es mayor: −8 o −3?", v: nline(-9, 0, { pts: [[-8, PINK, "−8"], [-3, LIME, "−3"]] }), steps: [["Ubícalos en la recta", "−3 queda a la derecha de −8."], ["Concluye", "El que está más a la derecha es el mayor."]], a: "−3 &gt; −8" } ] };
  L.e7b = { aprende: [
      { h: "Sumar es moverse en la recta", p: "Empieza en el primer número. Si sumas un positivo, avanzas a la derecha. Si sumas un negativo, retrocedes a la izquierda.", v: nline(-5, 5, { pts: [[-3, PINK, ""], [2, LIME, ""]], hops: [[-3, 2, LAV, "+5"]] }), k: "−3 + 5 = 2: empezamos en −3 y avanzamos 5." },
      { h: "Restar es sumar el contrario", p: "Para restar, cambia la resta por suma y cambia el signo del número que restas.", v: ex("5 − (−3) <em>=</em> 5 " + hl("+ 3") + " <em>=</em> 8"), k: "Restar un negativo es lo mismo que sumar un positivo." } ],
    mira: [
      { q: "Resuelve −4 + (−3)", v: nline(-8, 1, { pts: [[-4, PINK, ""], [-7, LIME, ""]], hops: [[-4, -7, PINK, "−3"]] }), steps: [["Empieza en −4", "Ese es tu punto de partida."], ["Suma −3", "Sumar un negativo es retroceder 3 lugares."], ["Llegas a −7", "Si los dos signos son iguales, sumas y conservas el signo."]], a: "−7" },
      { q: "Resuelve 2 − 9", steps: [["Cambia a suma", "2 − 9 = 2 + (−9)."], ["Signos distintos: resta", "9 − 2 = 7."], ["Pon el signo del más grande", "El 9 era negativo, así que el resultado es negativo."]], a: "−7" } ] };
  L.e7c = { aprende: [
      { h: "La ley de los signos", p: "Al multiplicar o dividir, primero resuelve los números como siempre. Después decide el signo con esta tabla.", v: signs(), k: "Signos iguales dan positivo. Signos diferentes dan negativo." },
      { h: "Con varios factores, cuenta los negativos", p: "Si hay una cantidad <b>par</b> de signos negativos, el resultado es positivo. Si es <b>impar</b>, es negativo.", v: ex("(−2)(−3)(−1) <em>→</em> 3 negativos <em>→</em> " + hl("−6", PINK)), k: "Dos negativos se cancelan; uno solo se queda." } ],
    mira: [
      { q: "Resuelve (−6) × 4", steps: [["Multiplica los números", "6 × 4 = 24."], ["Decide el signo", "− por + es −: signos diferentes."]], a: "−24" },
      { q: "Resuelve (−36) ÷ (−9)", steps: [["Divide los números", "36 ÷ 9 = 4."], ["Decide el signo", "− entre − es +: signos iguales."]], a: "4" } ] };
  L.j6a = { aprende: [
      { h: "Hay un orden para resolver", p: "Si resuelves en otro orden, el resultado cambia. Por eso todos seguimos la misma regla.", v: order(["Paréntesis", "Potencias y raíces", "Multiplicaciones y divisiones, de izquierda a derecha", "Sumas y restas, de izquierda a derecha"]), k: "Multiplicar y dividir va antes que sumar y restar." },
      { h: "Mira por qué importa", p: "En 3 + 4 × 2, si sumas primero obtienes 14, pero lo correcto es multiplicar primero.", v: ex("3 + " + hl("4 × 2") + " <em>=</em> 3 + 8 <em>=</em> 11"), k: "Resuelve una parte a la vez y vuelve a escribir la expresión." } ],
    mira: [
      { q: "Resuelve 20 − 12 ÷ 4 + 3", steps: [["Primero la división", "20 − " + hl("12 ÷ 4") + " + 3 → 20 − 3 + 3."], ["Luego de izquierda a derecha", hl("20 − 3") + " + 3 → 17 + 3."], ["Termina", "17 + 3 = 20."]], a: "20" },
      { q: "Resuelve 5 × (6 − 2) − 8", steps: [["Primero el paréntesis", "5 × " + hl("(6 − 2)") + " − 8 → 5 × 4 − 8."], ["Luego la multiplicación", hl("5 × 4") + " − 8 → 20 − 8."], ["Al final la resta", "20 − 8 = 12."]], a: "12" } ] };
  L.j7a = { aprende: [
      { h: "De adentro hacia afuera", p: "Cuando hay paréntesis ( ), corchetes [ ] y llaves { }, se resuelve primero lo que está más adentro.", v: ex('<span class="ls-br">{</span> 2 + <span class="ls-br">[</span> 3 × ' + hl("(5 − 1)") + ' <span class="ls-br">]</span> <span class="ls-br">}</span>'), k: "Paréntesis, luego corchetes, luego llaves." },
      { h: "Dentro de cada uno, el orden de siempre", p: "Dentro de cada signo de agrupación también se respeta: potencias, luego multiplicación y división, luego suma y resta.", v: order(["( ) paréntesis", "[ ] corchetes", "{ } llaves", "Lo que queda afuera"]), k: "Cuida los signos: un − antes de un paréntesis cambia todo lo de adentro." } ],
    mira: [
      { q: "Resuelve 2 + [3 × (5 − 1)]", steps: [["Paréntesis", "5 − 1 = 4 → 2 + [3 × 4]."], ["Corchetes", "3 × 4 = 12 → 2 + 12."], ["Lo de afuera", "2 + 12 = 14."]], a: "14" },
      { q: "Resuelve 18 − {4 + [2 × (7 − 3)]}", steps: [["Paréntesis", "7 − 3 = 4 → 18 − {4 + [2 × 4]}."], ["Corchetes", "2 × 4 = 8 → 18 − {4 + 8}."], ["Llaves", "4 + 8 = 12 → 18 − 12."], ["Al final", "18 − 12 = 6."]], a: "6" } ] };
  L.a7b = { aprende: [
      { h: "Una ecuación es una balanza en equilibrio", p: "Lo que está de un lado pesa lo mismo que lo del otro. La caja <b>x</b> esconde un número que queremos descubrir.", v: balance(["x", "x", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1"], "2x + 3 = 9"), k: "Para que siga en equilibrio, lo que hagas de un lado lo haces del otro." },
      { h: "Quita y reparte", p: "Quitamos 3 de cada lado: 2x = 6. Luego repartimos en dos grupos iguales: x = 3.", v: balance(["x", "x"], ["1", "1", "1", "1", "1", "1"], "2x = 6  →  x = 3"), k: "Primero quita lo que suma o resta. Después divide entre el número que acompaña a la x." } ],
    mira: [
      { q: "Resuelve 4x + 5 = 29", steps: [["Quita el 5 de los dos lados", "4x + 5 − 5 = 29 − 5 → 4x = 24."], ["Divide los dos lados entre 4", "x = 24 ÷ 4."], ["Comprueba", "4(6) + 5 = 24 + 5 = 29. ✓"]], a: "x = 6" },
      { q: "Resuelve 3x − 7 = 11", steps: [["Suma 7 de los dos lados", "3x − 7 + 7 = 11 + 7 → 3x = 18."], ["Divide entre 3", "x = 18 ÷ 3 = 6."], ["Comprueba", "3(6) − 7 = 18 − 7 = 11. ✓"]], a: "x = 6" } ] };
  L.a7c = { aprende: [
      { h: "Cuando hay x en los dos lados", p: "Primero junta todas las x en un mismo lado, quitando la misma cantidad de x de los dos lados.", v: balance(["x", "x", "x", "x", "x", "1", "1"], ["x", "x", "1", "1", "1", "1", "1", "1", "1", "1"], "5x + 2 = 2x + 8"), k: "Quitamos 2x de cada lado: 3x + 2 = 8." },
      { h: "Ya es una ecuación conocida", p: "Ahora quitamos 2 de cada lado: 3x = 6. Y repartimos en 3: x = 2.", v: balance(["x", "x", "x"], ["1", "1", "1", "1", "1", "1"], "3x = 6  →  x = 2"), k: "Las x a un lado, los números al otro." } ],
    mira: [
      { q: "Resuelve 7x − 4 = 3x + 12", steps: [["Pasa las x a la izquierda", "Restamos 3x de los dos lados: 4x − 4 = 12."], ["Pasa los números a la derecha", "Sumamos 4 de los dos lados: 4x = 16."], ["Divide entre 4", "x = 4."], ["Comprueba", "7(4) − 4 = 24 y 3(4) + 12 = 24. ✓"]], a: "x = 4" },
      { q: "Resuelve 2(x + 3) = x + 10", steps: [["Quita el paréntesis", "2x + 6 = x + 10."], ["Junta las x", "Restamos x: x + 6 = 10."], ["Despeja", "Restamos 6: x = 4."]], a: "x = 4" } ] };
  L.a7d = { aprende: [
      { h: "Del problema a la ecuación", p: "Lee con calma y responde tres preguntas antes de hacer cuentas.", v: order(["¿Qué no sé? Eso es la x.", "¿Qué dice el problema sobre la x? Escríbelo con símbolos.", "Resuelve y revisa que tenga sentido."]), k: "La ecuación es el problema escrito en el idioma de las matemáticas." },
      { h: "Palabras que se vuelven símbolos", p: "El doble de un número es <b>2x</b>. Cinco más que un número es <b>x + 5</b>. Un número disminuido en 3 es <b>x − 3</b>. «Es», «da» o «resulta» se escriben <b>=</b>.", v: ex("el doble de un número más 5 es 17 <em>→</em> " + hl("2x + 5 = 17")), k: "Traduce por partes, de izquierda a derecha." } ],
    mira: [
      { q: "Ana tiene 3 años más que el doble de la edad de su primo. Si Ana tiene 15, ¿cuántos años tiene su primo?", steps: [["Define la x", "x = edad del primo."], ["Escribe la ecuación", "El doble de x más 3 es 15: 2x + 3 = 15."], ["Resuelve", "2x = 12 → x = 6."], ["Revisa", "2(6) + 3 = 15. ✓ Tiene sentido."]], a: "El primo tiene 6 años." },
      { q: "Un boleto de cine cuesta $85 y unas palomitas $60. Con $400, ¿cuántos boletos se pueden comprar si se compran unas palomitas?", steps: [["Define la x", "x = número de boletos."], ["Escribe la ecuación", "85x + 60 = 400."], ["Resuelve", "85x = 340 → x = 4."], ["Revisa", "4 × 85 + 60 = 400. ✓"]], a: "4 boletos." } ] };
  L.a9a = { aprende: [
      { h: "Factorizar es multiplicar al revés", p: "Multiplicar convierte factores en un resultado. Factorizar parte del resultado y encuentra los factores. El modelo de área lo muestra: el rectángulo completo es x² + 5x + 6 y sus lados son los factores.", v: area([["x", 3], ["3", 1.4]], [["x", 3], ["2", 1.1]], [["x²", "3x"], ["2x", "6"]], [[LAV, BUT], [MINT, PINK]]), k: "x² + 5x + 6 = (x + 2)(x + 3)" },
      { h: "Primero busca el factor común", p: "Si todos los términos comparten algo, sácalo. Luego revisa qué tipo de expresión te quedó.", v: order(["Factor común: 6x + 9 = 3(2x + 3)", "Diferencia de cuadrados: a² − b² = (a + b)(a − b)", "Trinomio x² + bx + c: busca dos números que multiplicados den c y sumados den b"]), k: "Siempre puedes comprobar multiplicando los factores." } ],
    mira: [
      { q: "Factoriza x² + 7x + 12", steps: [["Busca dos números", "Que multiplicados den 12 y sumados den 7."], ["Prueba parejas", "1 y 12 suman 13; 2 y 6 suman 8; 3 y 4 suman 7. ✓"], ["Escribe los factores", "(x + 3)(x + 4)."], ["Comprueba", "x² + 4x + 3x + 12 = x² + 7x + 12. ✓"]], a: "(x + 3)(x + 4)" },
      { q: "Factoriza x² − 49", steps: [["Reconoce el caso", "Es una resta de dos cuadrados: x² y 49 = 7²."], ["Aplica la regla", "a² − b² = (a + b)(a − b)."]], a: "(x + 7)(x − 7)" },
      { q: "Factoriza x² − 2x − 15", steps: [["Busca dos números", "Que multiplicados den −15 y sumados den −2."], ["Cuida los signos", "−15 negativo: los números tienen signos distintos. −5 y 3: (−5)(3) = −15 y −5 + 3 = −2. ✓"], ["Escribe los factores", "(x − 5)(x + 3)."]], a: "(x − 5)(x + 3)" } ] };
  L.a8c = { aprende: [
      { h: "El cuadrado de un binomio", p: "(a + b)² es el área de un cuadrado de lado a + b. Se forma con un cuadrado a², otro b² y dos rectángulos ab.", v: area([["a", 3], ["b", 1.5]], [["a", 3], ["b", 1.5]], [["a²", "ab"], ["ab", "b²"]], [[LAV, BUT], [BUT, MINT]]), k: "(a + b)² = a² + 2ab + b². ¡No olvides el término de en medio!" },
      { h: "Binomios conjugados", p: "Cuando multiplicas la suma por la resta de los mismos términos, los términos de en medio se cancelan.", v: ex("(a + b)(a − b) <em>=</em> a² " + hl("− ab + ab", "#ECE9F3") + " − b² <em>=</em> a² − b²"), k: "(a + b)(a − b) = a² − b²" } ],
    mira: [
      { q: "Desarrolla (x + 5)²", steps: [["Cuadrado del primero", "x²."], ["Doble del primero por el segundo", "2 · x · 5 = 10x."], ["Cuadrado del segundo", "5² = 25."]], a: "x² + 10x + 25" },
      { q: "Desarrolla (2x − 3)(2x + 3)", steps: [["Reconoce el caso", "Son binomios conjugados: misma pareja, un + y un −."], ["Cuadrado del primero menos cuadrado del segundo", "(2x)² − 3² = 4x² − 9."]], a: "4x² − 9" } ] };
  L.a9d = { aprende: [
      { h: "Despejar es dejar sola una letra", p: "Es lo mismo que resolver una ecuación, pero el resultado es una fórmula. Deshaz las operaciones en orden contrario.", v: ex("A = b · h <em>→</em> " + hl("h = A ÷ b")), k: "Lo que suma pasa restando; lo que multiplica pasa dividiendo." } ],
    mira: [
      { q: "Despeja x en y = 3x + 6", steps: [["Quita el 6", "y − 6 = 3x."], ["Divide entre 3", "x = (y − 6) ÷ 3."]], a: "x = " + fr("y − 6", "3") },
      { q: "Despeja r en A = πr²", steps: [["Divide entre π", "A ÷ π = r²."], ["Saca raíz cuadrada", "r = √(A ÷ π)."]], a: "r = √" + fr("A", "π") } ] };
  /* Habilidades equivalentes de otros grados comparten lección */
  var ALIAS = { a10g: "a7c", a10f: "a9a", a10e: "a8c", a9b: "a9a", a10j: "a7d", j7b: "j7a" };

  /* ---------- Estilos ---------- */
  var CSS = [
    ".ls-tabs{display:grid;grid-template-columns:1fr 1fr;background:#fff;border-radius:999px;padding:5px;margin:0 0 14px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45)}",
    ".ls-tabs button{border:0;background:none;border-radius:999px;padding:11px 8px;font:inherit;font-weight:800;font-size:14px;color:#6A6F85;cursor:pointer}.ls-tabs button.on{background:#15192B;color:#fff}",
    ".ls-dots{display:flex;gap:6px;justify-content:center;margin:14px 0 0}.ls-dots i{width:8px;height:8px;border-radius:9px;background:#DAD6E6;transition:all .25s}.ls-dots i.on{width:22px;background:#15192B}",
    ".ls-h{font-family:'Bricolage Grotesque',sans-serif;font-size:22px;line-height:1.15;margin:2px 0 8px;letter-spacing:-.01em}",
    ".ls-p{font-size:15px;line-height:1.6;margin:0 0 6px;color:#2B2F45}",
    ".ls-vis{margin:14px 0 4px;display:flex;justify-content:center}.ls-svg{width:100%;max-width:340px;height:auto;display:block}",
    ".ls-key{margin-top:14px;background:#FBF8EE;border-radius:18px;padding:13px 16px;font-size:14.5px;line-height:1.55;font-weight:700;color:#3D3412;display:flex;gap:10px;align-items:flex-start}",
    ".ls-key svg{flex:none;width:20px;height:20px;margin-top:1px}",
    ".ls-ex{font-size:19px;font-weight:800;text-align:center;line-height:2;padding:10px 6px;background:#F5F3FA;border-radius:18px;width:100%}.ls-ex em{font-style:normal;color:#8A8EA5;margin:0 8px;font-weight:700;font-size:15px}",
    ".ls-ex mark{border-radius:8px;padding:2px 7px;color:#15192B}.ls-br{color:#7A62E8;font-weight:800}",
    ".ls-ord{list-style:none;margin:0;padding:0;width:100%}.ls-ord li{display:flex;gap:12px;align-items:center;padding:9px 0;border-bottom:1px dashed #E6E1F2;font-size:14.5px;font-weight:700;line-height:1.4}.ls-ord li:last-child{border:0}",
    ".ls-ord b{flex:none;width:28px;height:28px;border-radius:50%;background:#D3F36B;display:grid;place-items:center;font-size:13px}",
    ".ls-sgs{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%}.ls-sg{display:flex;align-items:center;justify-content:center;gap:4px;background:#F5F3FA;border-radius:16px;padding:10px 4px;font-size:17px;font-weight:800;min-width:0}",
    ".ls-sg span{width:28px;height:28px;flex:none;border-radius:50%;display:grid;place-items:center;border:2px solid #15192B}.ls-sg .p{background:#D3F36B}.ls-sg .n{background:#FF9CC9}.ls-sg i{font-style:normal;color:#8A8EA5;font-size:13px}.ls-sg .r{border-width:3px}",
    ".ls-q{font-size:16.5px;font-weight:700;line-height:1.55;margin:0 0 4px}",
    ".ls-steps{list-style:none;margin:14px 0 0;padding:0}.ls-steps li{display:flex;gap:12px;padding:0 0 14px;position:relative;animation:lsIn .35s ease both}",
    ".ls-steps li:before{content:'';position:absolute;left:14px;top:30px;bottom:2px;width:2px;background:#E6E1F2}.ls-steps li:last-child:before{display:none}",
    ".ls-steps li>b{flex:none;width:30px;height:30px;border-radius:50%;background:#15192B;color:#fff;display:grid;place-items:center;font-size:13px;position:relative;z-index:1}",
    ".ls-steps li>div{padding-top:4px}.ls-steps strong{display:block;font-size:14.5px;margin-bottom:2px}.ls-steps span{font-size:14.5px;line-height:1.6;color:#3B3F57}",
    ".ls-steps mark{border-radius:6px;padding:0 5px;color:#15192B}",
    ".ls-ans{margin-top:4px;background:#DCF4EA;border-radius:18px;padding:13px 16px;font-size:16px;font-weight:800;animation:lsIn .35s ease both}.ls-ans small{display:block;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#2E7A55;margin-bottom:3px}",
    ".ls-n{font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#6A6F85;margin:0 0 6px}",
    ".ls-row{display:flex;gap:10px;margin-top:16px}.ls-row .mm-btn{flex:1}",
    ".ls-skip{display:block;margin:12px auto 0;background:none;border:0;font:inherit;font-weight:700;font-size:13.5px;color:#6A6F85;text-decoration:underline;cursor:pointer}",
    ".ls-back{display:inline-flex;align-items:center;gap:6px;background:#fff;border:0;border-radius:999px;padding:9px 14px;font:inherit;font-weight:800;font-size:13px;color:#15192B;cursor:pointer;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);margin:0 0 12px}",
    "@keyframes lsIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}",
    "@media (prefers-reduced-motion:reduce){.ls-steps li,.ls-ans{animation:none}}"
  ].join("\n");
  function css() { if (document.getElementById("mm-ls-css")) return; var st = document.createElement("style"); st.id = "mm-ls-css"; st.textContent = CSS; document.head.appendChild(st); }
  var BULB = '<svg viewBox="0 0 24 24" fill="none" stroke="#B08A1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/></svg>';

  /* ---------- Pantallas ---------- */
  function get(id) { return L[id] || L[ALIAS[id]] || null; }
  function render(box, s, done, save) {
    var Ls = get(s.id); if (!Ls) return done();
    css();
    var tab = "aprende", ai = 0, mi = 0, si = 0, t0 = Date.now(), saved = false;
    function finish() { if (!saved && save) { saved = true; save("math-leccion", s.id, null, null, { kind: "math-leccion", skill: s.n, eje: s.e, secs: Math.min(3600, Math.round((Date.now() - t0) / 1000)) }); } window.scrollTo(0, 0); done(); }
    function tabs() { return '<div class="ls-tabs" role="tablist"><button type="button" role="tab" data-t="aprende" class="' + (tab === "aprende" ? "on" : "") + '">Aprende</button><button type="button" role="tab" data-t="mira" class="' + (tab === "mira" ? "on" : "") + '">Mira cómo se hace</button></div>'; }
    function draw() {
      var h = tabs();
      if (tab === "aprende") {
        var A = Ls.aprende[ai];
        h += '<div class="mm-card"><p class="ls-n">Aprende · ' + (ai + 1) + " de " + Ls.aprende.length + '</p><h2 class="ls-h">' + A.h + '</h2><p class="ls-p">' + A.p + "</p>" + (A.v ? '<div class="ls-vis">' + A.v + "</div>" : "") + (A.k ? '<div class="ls-key">' + BULB + "<span>" + A.k + "</span></div>" : "") +
          '<div class="ls-dots">' + Ls.aprende.map(function (_, i) { return '<i class="' + (i === ai ? "on" : "") + '"></i>'; }).join("") + "</div></div>" +
          '<div class="ls-row">' + (ai > 0 ? '<button type="button" class="mm-btn gh" data-prev>Anterior</button>' : "") + '<button type="button" class="mm-btn dk" data-next>' + (ai < Ls.aprende.length - 1 ? "Siguiente" : "Mira cómo se hace") + "</button></div>";
      } else {
        var E = Ls.mira[mi], last = si >= E.steps.length;
        h += '<div class="mm-card"><p class="ls-n">Ejemplo ' + (mi + 1) + " de " + Ls.mira.length + '</p><p class="ls-q">' + E.q + "</p>" + (E.v ? '<div class="ls-vis">' + E.v + "</div>" : "") +
          '<ol class="ls-steps">' + E.steps.slice(0, si).map(function (st, i) { return "<li><b>" + (i + 1) + "</b><div><strong>" + st[0] + "</strong><span>" + st[1] + "</span></div></li>"; }).join("") + "</ol>" +
          (last && E.v2 ? '<div class="ls-vis">' + E.v2 + "</div>" : "") + (last ? '<div class="ls-ans"><small>Respuesta</small>' + E.a + "</div>" : "") + "</div>" +
          '<div class="ls-row">' + (!last ? '<button type="button" class="mm-btn dk" data-step>' + (si === 0 ? "Ver el primer paso" : "Siguiente paso") + "</button>" :
            (mi < Ls.mira.length - 1 ? '<button type="button" class="mm-btn gh" data-ex>Otro ejemplo</button>' : "") + '<button type="button" class="mm-btn dk" data-go>Ahora practica tú</button>') + "</div>";
      }
      h += '<button type="button" class="ls-skip" data-skip>Ya lo sé, quiero practicar</button>';
      box.innerHTML = h;
      box.querySelectorAll("[data-t]").forEach(function (b) { b.onclick = function () { tab = b.dataset.t; if (tab === "mira") si = 0; draw(); }; });
      var q = function (sel, fn) { var el = box.querySelector(sel); if (el) el.onclick = fn; };
      q("[data-next]", function () { if (ai < Ls.aprende.length - 1) ai++; else { tab = "mira"; mi = 0; si = 0; } window.scrollTo(0, 0); draw(); });
      q("[data-prev]", function () { ai--; draw(); });
      q("[data-step]", function () { si++; draw(); var st = box.querySelectorAll(".ls-steps li"); if (st.length) st[st.length - 1].scrollIntoView({ block: "nearest", behavior: "smooth" }); });
      q("[data-ex]", function () { mi++; si = 0; window.scrollTo(0, 0); draw(); });
      q("[data-go]", finish); q("[data-skip]", finish);
    }
    draw();
  }
  window.MovaMathLessons = { get: get, render: render, ids: function () { return Object.keys(L).concat(Object.keys(ALIAS)); } };
})();
