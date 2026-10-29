/* MOVA Bingo · temas, tarjetas y reglas compartidas (alumno y maestra) */
(function () {
  function W(list) { return list.split("|").map(function (w) { return { say: w, show: w }; }); }
  var NUMW = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  function numWord(n) { if (n === 100) return "one hundred"; if (n < 20) return NUMW[n]; return TENS[Math.floor(n / 10)] + (n % 10 ? "-" + NUMW[n % 10] : ""); }
  function P(list) { return list.split("|").map(function (p) { var a = p.split(">"); return { say: a[0], show: a[1] }; }); }
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
    { id: "days", g: "b", name: "Days of the week", words: W("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|today|tomorrow|yesterday|weekend|weekday") },
    { id: "months", g: "b", name: "Months of the year", words: W("January|February|March|April|May|June|July|August|September|October|November|December|spring|summer|fall|winter") },
    { id: "num20", g: "b", name: "Numbers 1–20", sub: "Escuchan la palabra y buscan el número", words: nums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]) },
    { id: "num100", g: "b", name: "Numbers 13–100", sub: "thirteen o thirty", words: nums([13, 30, 14, 40, 15, 50, 16, 60, 17, 70, 18, 80, 19, 90, 100, 21, 33, 45, 58, 62, 67, 74, 76, 82, 89, 95, 99]) },
    { id: "colors", g: "b", name: "Colors", sub: "con colores", kind: "color", words: COLORS.map(function (c) { return { say: c[0], show: c[0], hex: c[1] }; }) },
    { id: "shapes", g: "b", name: "Shapes", sub: "con figuras", kind: "shape", words: SHAPES.map(function (s) { return { say: s, show: s }; }) },
    { id: "animals", g: "v", name: "Animals", words: W("dog|cat|bird|fish|horse|cow|pig|sheep|duck|chicken|rabbit|mouse|lion|tiger|elephant|monkey|giraffe|zebra|bear|snake|frog|turtle|shark|whale|owl|bee|spider|butterfly") },
    { id: "food", g: "v", name: "Fruits & vegetables", words: W("apple|banana|orange|grapes|strawberry|pineapple|watermelon|mango|pear|peach|cherry|lemon|carrot|tomato|potato|onion|lettuce|corn|broccoli|cucumber|pepper|avocado|coconut|kiwi|beans|peas|melon") },
    { id: "body", g: "v", name: "Body parts", words: W("head|hair|eyes|ears|nose|mouth|teeth|tongue|neck|shoulders|arms|elbow|hands|fingers|chest|stomach|back|legs|knees|feet|toes|face|chin|lips|eyebrows|cheeks|thumb") },
    { id: "clothes", g: "v", name: "Clothes", words: W("shirt|T-shirt|pants|jeans|shorts|skirt|dress|jacket|coat|sweater|hat|cap|shoes|sneakers|boots|socks|scarf|gloves|belt|pajamas|uniform|tie") },
    { id: "school", g: "v", name: "School things", words: W("pencil|pen|eraser|ruler|notebook|book|backpack|scissors|glue|crayons|marker|desk|chair|board|teacher|classroom|computer|calculator|sharpener|paper|folder|map|clock|library|tablet|lunchbox|highlighter") },
    { id: "family", g: "v", name: "Family", words: W("mother|father|sister|brother|grandmother|grandfather|aunt|uncle|cousin|baby|son|daughter|parents|wife|husband|niece|nephew|grandson|granddaughter|twins") },
    { id: "feelings", g: "v", name: "Feelings", words: W("happy|sad|angry|tired|scared|excited|bored|surprised|hungry|thirsty|sleepy|nervous|proud|shy|worried|calm|sick|confused|silly|lonely") },
    { id: "weather", g: "v", name: "Weather & seasons", words: W("sunny|rainy|cloudy|windy|snowy|stormy|foggy|hot|cold|warm|cool|rainbow|thunder|lightning|spring|summer|fall|winter|umbrella|temperature") },
    { id: "jobs", g: "v", name: "Jobs", words: W("teacher|doctor|nurse|dentist|firefighter|police officer|farmer|chef|baker|pilot|driver|mechanic|vet|singer|dancer|artist|engineer|scientist|lawyer|cashier|waiter|plumber") },
    { id: "town", g: "v", name: "Places in town", words: W("school|hospital|bank|park|library|museum|supermarket|restaurant|bakery|pharmacy|post office|police station|fire station|airport|bus stop|zoo|cinema|church|gym|hotel|mall|stadium") },
    { id: "verbs", g: "g", name: "Irregular verbs", sub: "escuchan go, marcan went", hint: "You hear the verb, mark the past form", words: VERBS },
    { id: "alphabet", g: "b", name: "Alphabet", sub: "escuchan letter B, marcan B", words: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function (l) { return { say: "letter " + l, show: l }; }) },
    { id: "ordinals", g: "b", name: "Ordinal numbers", sub: "escuchan third, marcan 3rd", hint: "You hear third, mark 3rd", words: P("first>1st|second>2nd|third>3rd|fourth>4th|fifth>5th|sixth>6th|seventh>7th|eighth>8th|ninth>9th|tenth>10th|eleventh>11th|twelfth>12th|thirteenth>13th|fourteenth>14th|fifteenth>15th|sixteenth>16th|seventeenth>17th|eighteenth>18th|nineteenth>19th|twentieth>20th") },
    { id: "time", g: "b", name: "Telling time", sub: "escuchan half past two, marcan 2:30", hint: "Listen to the time and find the clock time", words: P("one o'clock>1:00|half past two>2:30|quarter past four>4:15|quarter to six>5:45|ten past seven>7:10|twenty to nine>8:40|five past eleven>11:05|twenty-five to twelve>11:35|three o'clock>3:00|half past six>6:30|quarter past nine>9:15|quarter to one>12:45|twenty past three>3:20|ten to four>3:50|five to ten>9:55|twenty-five past eight>8:25|half past twelve>12:30|seven o'clock>7:00|quarter to eleven>10:45|ten past two>2:10") },
    { id: "meals", g: "v", name: "Food & drinks", words: W("bread|rice|pasta|pizza|soup|salad|sandwich|hamburger|hot dog|eggs|cheese|milk|juice|water|soda|chicken|fish|meat|cereal|cookies|cake|ice cream|candy|chocolate|popcorn|yogurt|tacos") },
    { id: "house", g: "v", name: "House & furniture", words: W("kitchen|bedroom|bathroom|living room|garden|garage|sofa|bed|table|chair|lamp|fridge|stove|shower|mirror|window|door|stairs|closet|toilet|bathtub|carpet|curtains|shelf|pillow|blanket|clock") },
    { id: "toys", g: "v", name: "Toys", words: W("ball|doll|teddy bear|kite|yo-yo|puzzle|blocks|robot|toy car|train|bike|scooter|skateboard|video game|board game|marbles|jump rope|balloon|bubbles|slide|swing|dinosaur") },
    { id: "sports", g: "v", name: "Sports", words: W("soccer|basketball|baseball|tennis|volleyball|swimming|running|cycling|boxing|karate|gymnastics|golf|hockey|skating|skiing|surfing|dancing|bowling|football|ping-pong|yoga|climbing") },
    { id: "transport", g: "v", name: "Transportation", words: W("car|bus|train|plane|bike|motorcycle|boat|ship|taxi|truck|subway|helicopter|scooter|van|ambulance|fire truck|police car|rocket|tractor|sailboat|submarine|hot air balloon") },
    { id: "sea", g: "v", name: "Sea animals", words: W("fish|shark|whale|dolphin|octopus|crab|starfish|jellyfish|seahorse|turtle|seal|penguin|squid|shrimp|lobster|clam|coral|eel|stingray|walrus") },
    { id: "bugs", g: "v", name: "Bugs & insects", words: W("ant|bee|butterfly|ladybug|spider|fly|mosquito|worm|snail|caterpillar|grasshopper|dragonfly|beetle|cricket|moth|firefly|cockroach|scorpion") },
    { id: "music", g: "v", name: "Musical instruments", words: W("piano|guitar|violin|drums|flute|trumpet|saxophone|harp|cello|ukulele|xylophone|tambourine|maracas|triangle|harmonica|clarinet|trombone|keyboard|bass") },
    { id: "routines", g: "v", name: "Daily routines", words: W("wake up|get up|take a shower|brush my teeth|get dressed|have breakfast|go to school|have lunch|do homework|play outside|have dinner|take a bath|go to bed|comb my hair|wash my face|read a book|watch TV|walk the dog|make my bed|set the table") },
    { id: "countries", g: "v", name: "Countries & nationalities", sub: "escuchan Mexico, marcan Mexican", hint: "You hear the country, mark the nationality", words: P("Mexico>Mexican|United States>American|Canada>Canadian|Brazil>Brazilian|Argentina>Argentinian|Colombia>Colombian|Peru>Peruvian|Chile>Chilean|Spain>Spanish|France>French|Italy>Italian|Germany>German|England>English|Japan>Japanese|China>Chinese|Korea>Korean|India>Indian|Russia>Russian|Australia>Australian|Egypt>Egyptian|Greece>Greek|Portugal>Portuguese") },
    { id: "opposites", g: "g", name: "Opposites", sub: "escuchan big, marcan small", hint: "You hear a word, mark the opposite", words: P("big>small|hot>cold|tall>short|fast>slow|happy>sad|old>young|open>closed|full>empty|heavy>light|clean>dirty|rich>poor|early>late|strong>weak|loud>quiet|hard>soft|wet>dry|thick>thin|easy>difficult|day>night|up>down|in>out|push>pull|buy>sell|win>lose|always>never|cheap>expensive|first>last") },
    { id: "plurals", g: "g", name: "Irregular plurals", sub: "escuchan child, marcan children", hint: "You hear one, mark the plural", words: P("child>children|man>men|woman>women|person>people|foot>feet|tooth>teeth|mouse>mice|goose>geese|leaf>leaves|knife>knives|wolf>wolves|wife>wives|half>halves|box>boxes|baby>babies|city>cities|bus>buses|watch>watches|dish>dishes|potato>potatoes|tomato>tomatoes|story>stories|cactus>cacti|ox>oxen") },
    { id: "comparatives", g: "g", name: "Comparatives", sub: "escuchan good, marcan better", hint: "You hear the adjective, mark the comparative", words: P("big>bigger|small>smaller|good>better|bad>worse|far>farther|happy>happier|easy>easier|hot>hotter|thin>thinner|tall>taller|short>shorter|fast>faster|slow>slower|funny>funnier|busy>busier|beautiful>more beautiful|expensive>more expensive|interesting>more interesting|dangerous>more dangerous|heavy>heavier|early>earlier|old>older|young>younger|strong>stronger|pretty>prettier|cold>colder|famous>more famous") },
    { id: "participles", g: "g", name: "Past participles", sub: "escuchan write, marcan written", hint: "You hear the verb, mark the past participle", words: P("go>gone|eat>eaten|see>seen|take>taken|write>written|speak>spoken|break>broken|drive>driven|give>given|forget>forgotten|choose>chosen|fly>flown|know>known|grow>grown|draw>drawn|wear>worn|steal>stolen|begin>begun|swim>swum|sing>sung|drink>drunk|ring>rung|ride>ridden|hide>hidden|fall>fallen|be>been|do>done") },
    { id: "halloween", g: "f", name: "Halloween", words: W("pumpkin|witch|ghost|bat|spider|skeleton|candy|costume|mask|broom|cauldron|vampire|zombie|mummy|monster|black cat|moon|haunted house|trick or treat|candle|owl|spiderweb") },
    { id: "muertos", g: "f", name: "Day of the Dead", sub: "en inglés", words: W("altar|marigolds|candles|sugar skull|bread of the dead|papel picado|photos|offerings|skeleton|flowers|cemetery|family|memories|Catrina|incense|hot chocolate") },
    { id: "christmas", g: "f", name: "Christmas", words: W("Santa|Christmas tree|star|gift|snowman|reindeer|elf|sleigh|bells|candy cane|stocking|wreath|angel|cookies|chimney|snowflake|ornament|lights|mistletoe|gingerbread") }
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
  var GROUPS = [["b", "Básicos"], ["v", "Vocabulario"], ["g", "Gramática con truco"], ["f", "Fiestas"]];
  window.MOVA_BINGO = { GROUPS: GROUPS, TOPICS: TOPICS, SIZES: SIZES, PATTERNS: PATTERNS, topic: topic, sizesFor: sizesFor, hash: hash, callOrder: callOrder, card: card, lines: lines, tile: tile, chip: chip, star: star };
})();
