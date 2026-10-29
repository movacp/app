/* MOVA Bingo · temas, tarjetas y reglas compartidas (alumno y maestra) */
(function () {
  function W(list) { return list.split("|").map(function (w) { return { say: w, show: w }; }); }
  var NUMW = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  function numWord(n) { if (n === 100) return "one hundred"; if (n < 20) return NUMW[n]; return TENS[Math.floor(n / 10)] + (n % 10 ? "-" + NUMW[n % 10] : ""); }
  function nums(list) { return list.map(function (n) { return { say: numWord(n), show: String(n) }; }); }
  var COLORS = [["red", "#E5484D"], ["blue", "#3B7DD8"], ["yellow", "#F5D13A"], ["green", "#3EA65F"], ["orange", "#F28C28"], ["purple", "#8E5CC9"], ["pink", "#F28DB8"], ["brown", "#8B5A2B"], ["black", "#1E1E1E"], ["white", "#FFFFFF"], ["gray", "#9AA0A6"], ["gold", "#D4A72C"], ["silver", "#C9CED6"], ["light blue", "#9CD4F5"]];
  var SHAPES = ["circle", "square", "triangle", "rectangle", "star", "heart", "oval", "diamond", "pentagon", "hexagon", "octagon", "crescent", "arrow", "cross"];
  function poly(n, r, rot) { var p = []; for (var i = 0; i < n; i++) { var a = (rot || -90) * Math.PI / 180 + i * 2 * Math.PI / n; p.push((50 + r * Math.cos(a)).toFixed(1) + "," + (52 + r * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(" ") + '"/>'; }
  var SHP = {
    circle: '<circle cx="50" cy="50" r="34"/>', square: '<rect x="18" y="18" width="64" height="64" rx="6"/>', triangle: poly(3, 40), rectangle: '<rect x="10" y="28" width="80" height="46" rx="6"/>',
    star: '<polygon points="50,12 61,38 89,40 67,58 74,86 50,71 26,86 33,58 11,40 39,38"/>', heart: '<path d="M50 84C20 62 12 46 12 34a19 19 0 0 1 38-6 19 19 0 0 1 38 6c0 12-8 28-38 50z"/>',
    oval: '<ellipse cx="50" cy="50" rx="40" ry="26"/>', diamond: '<polygon points="50,10 84,50 50,90 16,50"/>', pentagon: poly(5, 38), hexagon: poly(6, 38, 0), octagon: poly(8, 38, 22.5),
    crescent: '<path d="M62 14a38 38 0 1 0 0 72 30 30 0 1 1 0-72z"/>', arrow: '<polygon points="10,40 56,40 56,22 90,50 56,78 56,60 10,60"/>', cross: '<polygon points="38,12 62,12 62,38 88,38 88,62 62,62 62,88 38,88 38,62 12,62 12,38 38,38"/>'
  };
  var SHC = ["#E8846B", "#8EC5E8", "#7FC8A9", "#B9A6E8", "#F7A8C4", "#E3C462"];
  var VERBS = "go-went|eat-ate|see-saw|have-had|make-made|take-took|come-came|give-gave|get-got|buy-bought|write-wrote|run-ran|drink-drank|swim-swam|sing-sang|sleep-slept|speak-spoke|find-found|tell-told|think-thought|bring-brought|teach-taught|begin-began|drive-drove|fly-flew|break-broke|know-knew|leave-left|meet-met|wear-wore".split("|").map(function (p) { var a = p.split("-"); return { say: a[0], show: a[1] }; });
  var TOPICS = [
    { id: "days", name: "Days of the week", words: W("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|today|tomorrow|yesterday|weekend|weekday") },
    { id: "months", name: "Months of the year", words: W("January|February|March|April|May|June|July|August|September|October|November|December|spring|summer|fall|winter") },
    { id: "num20", name: "Numbers 1–20", sub: "Escuchan la palabra y buscan el número", words: nums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]) },
    { id: "num100", name: "Numbers 13–100", sub: "thirteen o thirty", words: nums([13, 30, 14, 40, 15, 50, 16, 60, 17, 70, 18, 80, 19, 90, 100, 21, 33, 45, 58, 62, 67, 74, 76, 82, 89, 95, 99]) },
    { id: "colors", name: "Colors", sub: "con colores", kind: "color", words: COLORS.map(function (c) { return { say: c[0], show: c[0], hex: c[1] }; }) },
    { id: "shapes", name: "Shapes", sub: "con figuras", kind: "shape", words: SHAPES.map(function (s) { return { say: s, show: s }; }) },
    { id: "animals", name: "Animals", words: W("dog|cat|bird|fish|horse|cow|pig|sheep|duck|chicken|rabbit|mouse|lion|tiger|elephant|monkey|giraffe|zebra|bear|snake|frog|turtle|shark|whale|owl|bee|spider|butterfly") },
    { id: "food", name: "Fruits & vegetables", words: W("apple|banana|orange|grapes|strawberry|pineapple|watermelon|mango|pear|peach|cherry|lemon|carrot|tomato|potato|onion|lettuce|corn|broccoli|cucumber|pepper|avocado|coconut|kiwi|beans|peas|melon") },
    { id: "body", name: "Body parts", words: W("head|hair|eyes|ears|nose|mouth|teeth|tongue|neck|shoulders|arms|elbow|hands|fingers|chest|stomach|back|legs|knees|feet|toes|face|chin|lips|eyebrows|cheeks|thumb") },
    { id: "clothes", name: "Clothes", words: W("shirt|T-shirt|pants|jeans|shorts|skirt|dress|jacket|coat|sweater|hat|cap|shoes|sneakers|boots|socks|scarf|gloves|belt|pajamas|uniform|tie") },
    { id: "school", name: "School things", words: W("pencil|pen|eraser|ruler|notebook|book|backpack|scissors|glue|crayons|marker|desk|chair|board|teacher|classroom|computer|calculator|sharpener|paper|folder|map|clock|library|tablet|lunchbox|highlighter") },
    { id: "family", name: "Family", words: W("mother|father|sister|brother|grandmother|grandfather|aunt|uncle|cousin|baby|son|daughter|parents|wife|husband|niece|nephew|grandson|granddaughter|twins") },
    { id: "feelings", name: "Feelings", words: W("happy|sad|angry|tired|scared|excited|bored|surprised|hungry|thirsty|sleepy|nervous|proud|shy|worried|calm|sick|confused|silly|lonely") },
    { id: "weather", name: "Weather & seasons", words: W("sunny|rainy|cloudy|windy|snowy|stormy|foggy|hot|cold|warm|cool|rainbow|thunder|lightning|spring|summer|fall|winter|umbrella|temperature") },
    { id: "jobs", name: "Jobs", words: W("teacher|doctor|nurse|dentist|firefighter|police officer|farmer|chef|baker|pilot|driver|mechanic|vet|singer|dancer|artist|engineer|scientist|lawyer|cashier|waiter|plumber") },
    { id: "town", name: "Places in town", words: W("school|hospital|bank|park|library|museum|supermarket|restaurant|bakery|pharmacy|post office|police station|fire station|airport|bus stop|zoo|cinema|church|gym|hotel|mall|stadium") },
    { id: "verbs", name: "Irregular verbs", sub: "escuchan go, marcan went", words: VERBS }
  ];
  var SIZES = { 3: { cells: 9, free: false, need: 12 }, 4: { cells: 16, free: false, need: 19 }, 5: { cells: 25, free: true, need: 27 } };
  var PATTERNS = [
    { id: "line", name: "Línea", en: "Any line", sub: "fila, columna o diagonal" },
    { id: "diag", name: "Diagonal", en: "Diagonal", sub: "de esquina a esquina" },
    { id: "corners", name: "4 esquinas", en: "4 corners", sub: "las cuatro puntas" },
    { id: "x", name: "Letra X", en: "Letter X", sub: "las dos diagonales" },
    { id: "full", name: "Cartón lleno", en: "Full card", sub: "todas las casillas" }
  ];
  function topic(id) { return TOPICS.find(function (t) { return t.id === id; }) || TOPICS[0]; }
  function sizesFor(id) { var n = topic(id).words.length; return [3, 4, 5].filter(function (s) { return n >= SIZES[s].need; }); }
  function hash(str) { var h = 2166136261 >>> 0; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h; }
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuf(arr, r) { var b = arr.slice(); for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; } return b; }
  /* Orden de las palabras cantadas: igual para todos (misma semilla). */
  function callOrder(s, key) { var t = topic(s.topic); return shuf(t.words.map(function (w, i) { return i; }), rng(hash("call|" + key))); }
  /* Tarjeta de cada alumno: índices de palabras (o -1 para la casilla libre). */
  function card(s, key, sid) {
    var t = topic(s.topic), size = Number(s.size) || 3, sz = SIZES[size], idx = shuf(t.words.map(function (w, i) { return i; }), rng(hash("card|" + key + "|" + sid)));
    var need = sz.cells - (sz.free ? 1 : 0), pick = idx.slice(0, need), out = [];
    for (var c = 0, k = 0; c < sz.cells; c++) { if (sz.free && c === Math.floor(sz.cells / 2)) out.push(-1); else out.push(pick[k++]); }
    return out;
  }
  /* Grupos de casillas que forman la jugada. */
  function lines(size, pat) {
    var L = [], i, r, c, d1 = [], d2 = [];
    for (i = 0; i < size; i++) { d1.push(i * size + i); d2.push(i * size + (size - 1 - i)); }
    if (pat === "diag") return [d1, d2];
    if (pat === "x") return [d1.concat(d2.filter(function (x) { return d1.indexOf(x) < 0; }))];
    if (pat === "corners") return [[0, size - 1, size * (size - 1), size * size - 1]];
    if (pat === "full") { var all = []; for (i = 0; i < size * size; i++) all.push(i); return [all]; }
    for (r = 0; r < size; r++) { var row = []; for (c = 0; c < size; c++) row.push(r * size + c); L.push(row); }
    for (c = 0; c < size; c++) { var col = []; for (r = 0; r < size; r++) col.push(r * size + c); L.push(col); }
    return L.concat([d1, d2]);
  }
  function tile(w, t) {
    if (!w) return "";
    if (t.kind === "color") return '<span class="bsw" style="background:' + w.hex + '"></span>';
    if (t.kind === "shape") { var c = SHC[t.words.indexOf(w) % SHC.length]; return '<svg viewBox="0 0 100 100" class="bshp" aria-hidden="true"><g fill="' + c + '" stroke="#1B2A55" stroke-width="3" stroke-linejoin="round">' + SHP[w.say] + "</g></svg>"; }
    return '<span class="btx' + (/^\d+$/.test(w.show) ? " num" : "") + (w.show.length > 7 ? " sm" : "") + (w.show.length > 10 ? " xs" : "") + '">' + w.show.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</span>";
  }
  var chip = '<svg viewBox="0 0 40 40" class="bchip" aria-hidden="true"><circle cx="20" cy="21" r="17" fill="#E3C462"/><circle cx="20" cy="19" r="17" fill="#FCE38A"/><circle cx="20" cy="19" r="12" fill="none" stroke="#E3C462" stroke-width="2.5"/><path d="m20 11.5 2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" fill="#E3A93A"/></svg>';
  var star = '<svg viewBox="0 0 40 40" class="bfree" aria-hidden="true"><path d="m20 6 4.1 8.5 9.4 1.3-6.8 6.6 1.6 9.3L20 27.3l-8.3 4.4 1.6-9.3-6.8-6.6 9.4-1.3z" fill="#FCE38A" stroke="#1B2A55" stroke-width="2" stroke-linejoin="round"/></svg>';
  window.MOVA_BINGO = { TOPICS: TOPICS, SIZES: SIZES, PATTERNS: PATTERNS, topic: topic, sizesFor: sizesFor, hash: hash, callOrder: callOrder, card: card, lines: lines, tile: tile, chip: chip, star: star };
})();
