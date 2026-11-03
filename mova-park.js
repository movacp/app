/* Sugar Town · 3 zonas, 18 atracciones, visitantes y niveles adaptativos (alumno y maestra) */
(function () {
  var VER = "3";
  /* Zonas: imagen de fondo (4:5) y lotes [centro x, centro y, ancho, alto] en % de la zona.
     El orden de los lotes es: fila de abajo (cerca de la entrada) primero, izquierda y luego derecha. */
  var ZONES = [
    { id: "food", name: "Food Street", short: "Food", bg: "park-zone1.webp", path: 45, gate: true,
      lots: [[21.6, 62.2, 24.2, 19.6], [77.5, 62.3, 24.1, 19.6], [23.0, 39.4, 23.1, 17.6], [76.3, 39.4, 22.8, 17.6], [24.2, 18.7, 22.2, 16.3], [75.0, 18.7, 21.9, 16.4]], k: 1.3 },
    { id: "games", name: "Game Alley", short: "Games", bg: "park-zone2.webp", path: 47,
      lots: [[25.3, 72.9, 22.3, 21.3], [74.4, 72.9, 21.8, 21.3], [26.7, 47.1, 21.1, 18.5], [74.2, 47.1, 20.6, 18.5], [29.4, 22.3, 20.9, 18.3], [72.7, 22.3, 20.9, 18.4]], k: 1.3 },
    { id: "rides", name: "Big Rides", short: "Rides", bg: "park-zone3.webp", path: 50,
      lots: [[24.4, 74.7, 28.3, 19.1], [75.3, 74.7, 27.5, 19.0], [25.5, 53.6, 26.7, 17.0], [74.5, 53.6, 26.0, 17.0], [26.8, 34.4, 25.7, 15.9], [73.9, 34.4, 24.5, 15.9]], k: 1.18 }
  ];
  var ATTR = [
    { id: "popcorn", name: "Popcorn Stand", price: 50, inc: 5 },
    { id: "cotton", name: "Cotton Candy", price: 80, inc: 7 },
    { id: "icecream", name: "Ice Cream", price: 120, inc: 10 },
    { id: "hotdog", name: "Hot Dogs", price: 170, inc: 14 },
    { id: "candy", name: "Candy Apples", price: 230, inc: 18 },
    { id: "lemonade", name: "Lemonade", price: 300, inc: 23 },
    { id: "prizes", name: "Prize Booth", price: 380, inc: 29 },
    { id: "ducks", name: "Duck Pond", price: 470, inc: 35 },
    { id: "rings", name: "Ring Toss", price: 570, inc: 42 },
    { id: "balloons", name: "Balloon Darts", price: 690, inc: 50 },
    { id: "haunted", name: "Haunted House", price: 830, inc: 60 },
    { id: "bumper", name: "Bumper Cars", price: 1000, inc: 72 },
    { id: "teacups", name: "Spinning Teacups", price: 1200, inc: 86 },
    { id: "carousel", name: "Carousel", price: 1450, inc: 104 },
    { id: "drop", name: "Drop Tower", price: 1750, inc: 125 },
    { id: "wheel", name: "Ferris Wheel", price: 2100, inc: 150 },
    { id: "castle", name: "MOVA Castle", price: 2550, inc: 180 },
    { id: "coaster", name: "Roller Coaster", price: 3100, inc: 215 }
  ];
  /* Dónde va cada atracción: zona y lote */
  var LOT = {};
  ATTR.forEach(function (a, i) { a.zone = Math.floor(i / 6); var z = ZONES[a.zone], L = z.lots[i % 6]; LOT[a.id] = { z: a.zone, x: L[0], y: L[1], w: L[2], h: L[3], k: z.k }; });
  function src(id) { return "park-" + id + ".webp?v=" + VER; }
  function art(id) { return '<img class="pk-art" src="' + src(id) + '" alt="" loading="lazy" decoding="async">'; }
  function own(items) { return (items || []).filter(function (id) { return LOT[id]; }); }
  function sprite(id, cls, k) {
    var L = LOT[id];
    return '<div class="pk-spr' + (cls ? " " + cls : "") + '" data-id="' + id + '" style="left:' + L.x + "%;top:" + (L.y + L.h * .5).toFixed(1) + "%;width:" + (L.w * L.k).toFixed(1) + "%;z-index:" + Math.round(L.y + L.h) + ";--d:" + ((k % 7) * .41).toFixed(2) + 's">' + art(id) + "</div>";
  }
  /* Visitantes: personajes de MOVA paseando por el camino de cada zona */
  var CH = {"beat": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M124 150 C126 168.0 130 178.0 129 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"132\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M66 112 C50 114 42 104 44 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M154 112 C166 112 174 106 178 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"178\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M112 48 C146 46 156 78 156 106 C156 138 136 152 110 152 C84 152 64 138 64 106 C64 74 80 50 112 48z\" fill=\"#C8EE4A\"/><circle cx=\"88\" cy=\"74\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M66 98 C56 28 164 24 154 98\" stroke=\"#1A1B2E\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"68\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"68\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"152\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"152\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M117 103 q5 5 10 0\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M30 128 L30 108 L38 105\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"26.5\" cy=\"128.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/><path d=\"M190 70 L190 52\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"186.5\" cy=\"70.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/></svg>", "bloom": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 138 C96 156.0 90 166.0 92 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 138 C124 156.0 128 166.0 127 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M80 98 C62 104 50 92 48 74\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"74\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M142 100 C152 104 160 102 168 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"86\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"110\" cy=\"92\" r=\"26\" fill=\"#9C8BFF\"/><circle cx=\"80\" cy=\"62\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M87 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M92 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M113 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M118 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M107 85 q3 -4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M94 106 Q110 122 126 106\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"84\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"136\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/></svg>", "nova": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 150 C124 168.0 128 178.0 127 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M110.0 40.0 L127.6 73.7 L165.2 80.1 L138.5 107.3 L144.1 144.9 L110.0 128.0 L75.9 144.9 L81.5 107.3 L54.8 80.1 L92.4 73.7Z\" fill=\"#FFD54A\" stroke=\"#FFD54A\" stroke-width=\"20\" stroke-linejoin=\"round\"/><circle cx=\"94\" cy=\"74\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><circle cx=\"122\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><path d=\"M107 93 q3 -2.4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"98\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><path d=\"M104 108 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M68 112 C64 124 72 132 82 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"82\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M152 112 C156 124 148 132 138 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"138\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><g transform=\"translate(110 136)\"><path d=\"M-30 -8 Q-15 -13 0 -6 L0 13 Q-15 6 -30 11z\" fill=\"#fff\"/><path d=\"M30 -8 Q15 -13 0 -6 L0 13 Q15 6 30 11z\" fill=\"#F3F0FF\"/><path d=\"M-30 -8 Q-15 -13 0 -6 Q15 -13 30 -8 L30 11 Q15 6 0 13 Q-15 6 -30 11z\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M0 -6 L0 13\" stroke=\"#1A1B2E\" stroke-width=\"1.8\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>", "tri": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 152 C96 170.0 90 180.0 92 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 152 C124 170.0 128 180.0 127 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M70 128 C56 130 46 120 46 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 128 C158 128 164 124 168 118\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"118\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M110 44 L168 146 L52 146Z\" fill=\"#FF9FCB\" stroke=\"#FF9FCB\" stroke-width=\"26\" stroke-linejoin=\"round\"/><circle cx=\"104\" cy=\"76\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M88 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M93 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M112 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M117 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M108 109 q2 -4 4 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 126 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(170 118) rotate(-35)\"><rect x=\"-4\" y=\"-30\" width=\"8\" height=\"30\" rx=\"2\" fill=\"#FFD54A\"/><rect x=\"-4\" y=\"-35\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#FF8FC8\"/><path d=\"M-4 0 L0 8 L4 0z\" fill=\"#F4E1C1\"/><path d=\"M-1.3 5.4 L0 8 L1.3 5.4z\" fill=\"#1A1B2E\"/></g></svg>", "echo": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 136 C96 155.8 90 166.8 92 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 136 C124 155.8 128 166.8 127 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M72 112 C56 114 46 104 46 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 114 C160 116 168 112 174 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"174\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"96\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"82\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"136\" cy=\"98\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"112\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"88\" cy=\"118\" r=\"22\" fill=\"#93A6FF\"/><circle cx=\"134\" cy=\"120\" r=\"22\" fill=\"#93A6FF\"/><path d=\"M84 134 L74 152 L100 138z\" fill=\"#93A6FF\"/><circle cx=\"96\" cy=\"72\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(148 30)\"><rect width=\"50\" height=\"30\" rx=\"15\" fill=\"#fff\"/><path d=\"M12 27 L9 38 L21 28z\" fill=\"#fff\"/><text x=\"25\" y=\"20.5\" font-family=\"Bricolage Grotesque,sans-serif\" font-weight=\"700\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1A1B2E\">Hi!</text></g></svg>"};
  var WHO = ["beat", "bloom", "nova", "tri", "echo", "mochi"];
  function walker(n, z, k) {
    var x = ZONES[z].path + (k % 2 ? -3.5 : 3.5), a = 18 + (k * 23) % 50, b = a + 30 + (k * 11) % 25, who = WHO[n % WHO.length];
    var face = who === "mochi" ? '<img src="mochi-salta.webp" alt="">' : CH[who];
    return '<div class="pk-vis" style="left:' + x + "%;--a:" + a + "%;--b:" + Math.min(96, b) + "%;animation-duration:" + (8 + (k * 3) % 6) + "s;animation-delay:-" + ((k * 1.7) % 7).toFixed(1) + 's">' + face + "</div>";
  }
  /* Mapa completo: 3 zonas apiladas (Rides arriba, Food abajo).
     o.small = vista compacta con las 3 zonas lado a lado. */
  function scene(items, o) {
    o = o || {}; items = own(items);
    var built = {}; items.forEach(function (id) { built[id] = 1; });
    var nVis = o.small ? 0 : Math.min(12, 2 + Math.ceil(items.length * .7)), perZone = [0, 0, 0];
    for (var v = 0; v < nVis; v++) {
      /* los visitantes van a las zonas que ya tienen atracciones */
      var zs = [0, 1, 2].filter(function (z) { return z === 0 || items.some(function (id) { return LOT[id].z === z; }); });
      perZone[zs[v % zs.length]]++;
    }
    var h = '<div class="pk-map' + (o.small ? " sm" : "") + '"' + (o.id ? ' id="' + o.id + '"' : "") + ">";
    var order = o.small ? [0, 1, 2] : [2, 1, 0], cnt = 0;
    order.forEach(function (z) {
      var Z = ZONES[z];
      h += '<div class="pk-zone" data-z="' + z + '" id="' + (o.id ? o.id + "-z" + z : "") + '" style="background-image:url(' + Z.bg + "?v=" + VER + ')">';
      if (!o.small) h += '<span class="pk-ztag">' + Z.name + "</span>";
      ATTR.forEach(function (a, i) {
        if (a.zone !== z) return;
        var L = LOT[a.id];
        if (built[a.id]) { h += sprite(a.id, a.id === o.newId ? "new" : "", i); return; }
        if (o.noLots) return;
        var can = o.coins != null && o.coins >= a.price;
        h += '<button type="button" class="pk-lot' + (can ? " can" : "") + '" data-id="' + a.id + '" aria-label="' + a.name + " · " + a.price + ' coins" style="left:' + (L.x - L.w / 2).toFixed(1) + "%;top:" + (L.y - L.h / 2).toFixed(1) + "%;width:" + L.w + "%;height:" + L.h + '%"' + (o.tap ? "" : " disabled") + ">" +
          '<span class="pk-tag">' + (can ? "Build" : coinSm + a.price.toLocaleString("es-MX")) + "</span></button>";
      });
      for (var j = 0; j < perZone[z]; j++) h += walker(cnt + z, z, cnt++);
      h += "</div>";
    });
    return h + "</div>";
  }
  function zoneEl(map, z) { return map && map.querySelector('.pk-zone[data-z="' + z + '"]'); }
  /* Monedas que salen de cada atracción al contestar bien */
  function rain(map, items, mult) {
    if (!map) return;
    var list = [["gate", BASE]].concat(own(items).map(function (id) { var a = find(id); return [id, a ? a.inc : 0]; }));
    list.forEach(function (it, k) {
      var z = 0, x = 45, y = 88;
      if (it[0] !== "gate") { var L = LOT[it[0]]; z = L.z; x = L.x; y = L.y - L.h * .45; }
      var host = zoneEl(map, z); if (!host) return;
      var f = document.createElement("div"); f.className = "pk-rain";
      f.style.left = x + "%"; f.style.top = y + "%"; f.style.animationDelay = (k * 60) + "ms";
      f.innerHTML = coinSm + "+" + Math.round(it[1] * (mult || 1));
      host.appendChild(f); setTimeout(function () { f.remove(); }, 1500 + k * 60);
    });
  }
  function burst(map, id) {
    var L = LOT[id], host = L && zoneEl(map, L.z); if (!host) return;
    var b = document.createElement("div"); b.className = "pk-burst";
    b.style.left = L.x + "%"; b.style.top = L.y + "%";
    b.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";
    host.appendChild(b); setTimeout(function () { b.remove(); }, 1300);
  }
  var coin = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#FCE38A" stroke="#E3C462" stroke-width="2"/><path d="m12 6.8 1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill="#E3A93A"/></svg>';
  var coinSm = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#FFD45C" stroke="#E0A21B" stroke-width="2"/><path d="m12 6.8 1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill="#E0A21B"/></svg>';
  var CATS = [
    { id: "vocab", name: "Vocabulary", sub: "Word Quest · Picture Race" },
    { id: "grammar", name: "Grammar", sub: "Present, past, perfect, passive…" },
    { id: "hora", name: "What time is it?", sub: "Kids & Children" },
    { id: "wforms", name: "Word Forms", sub: "Children & Teens" },
    { id: "toefl", name: "TOEFL", sub: "Teens & adults" },
    { id: "math", name: "Math", sub: "by each one's level" }
  ];
  /* Niveles adaptativos dentro de cada etapa */
  var TIERS = { kids: ["A1", "A2", "B1"], children: ["A1", "A2", "B1"], teens: ["A2", "B1", "B2"] };
  var TMULT = [1, 1.5, 2];
  function tierName(stage, t) { return (TIERS[stage] || TIERS.children)[t] || ""; }
  /* El nivel viaja con las atracciones como "@lv<máximo><actual>" */
  function lvTag(max, cur) { return "@lv" + max + cur; }
  function lvOf(items) { var t = (items || []).filter(function (x) { return typeof x === "string" && x.indexOf("@lv") === 0; })[0]; return t ? { max: +t.charAt(3) || 0, cur: +t.charAt(4) || 0 } : null; }
  var BASE = 20;
  function find(id) { return ATTR.find(function (x) { return x.id === id; }); }
  function income(items) { var s = BASE; own(items).forEach(function (id) { var a = find(id); if (a) s += a.inc; }); return s; }
  function value(coins, items) { var v = coins; own(items).forEach(function (id) { var a = find(id); if (a) v += a.price; }); return v; }
  window.MOVA_PARK = { ATTR: ATTR, ZONES: ZONES, art: art, coin: coin, CATS: CATS, BASE: BASE, income: income, value: value, scene: scene, rain: rain, burst: burst, LOT: LOT, own: own,
    TIERS: TIERS, TMULT: TMULT, tierName: tierName, lvTag: lvTag, lvOf: lvOf };
  try { if (!document.getElementById("mova-park-css")) { var st = document.createElement("style"); st.id = "mova-park-css"; st.textContent = ".pk-map{position:relative;width:100%;background:#8DBE45;isolation:isolate}\n.pk-zone{position:relative;width:100%;aspect-ratio:4/5;background:#8DBE45 center/cover no-repeat;overflow:visible}\n.pk-map:not(.sm) .pk-zone+.pk-zone::before{content:\"\";position:absolute;left:0;right:0;top:-14px;height:28px;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(141,190,69,0),rgba(141,190,69,.9) 45%,rgba(141,190,69,.9) 55%,rgba(141,190,69,0))}\n.pk-map.sm{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;border-radius:22px;overflow:hidden;background:#fff}\n.pk-map.sm .pk-zone{overflow:hidden}\n.pk-ztag{position:absolute;left:10px;top:10px;z-index:150;background:#15192B;color:#fff;font:800 13px/1 'Bricolage Grotesque','Plus Jakarta Sans',system-ui,sans-serif;padding:7px 12px;border-radius:999px;box-shadow:0 4px 10px rgba(0,0,0,.2);pointer-events:none}\n.pk-spr{position:absolute;translate:-50% -88%;pointer-events:none;transform-origin:50% 100%;filter:drop-shadow(0 5px 4px rgba(21,25,43,.22));animation:pkidle 3.6s ease-in-out var(--d,0s) infinite}\n.pk-spr img,.pk-art{width:100%;height:auto;display:block}\n.pk-spr.new{animation:pkdrop .95s cubic-bezier(.2,1.45,.35,1) both,pkidle 3.6s ease-in-out 1s infinite}\n@keyframes pkidle{0%,100%{transform:scale(1,1)}50%{transform:scale(1.012,.988)}}\n@keyframes pkdrop{0%{transform:translateY(-70%) scale(.35);opacity:0}55%{opacity:1}75%{transform:translateY(0) scale(1.08,.9)}100%{transform:none}}\n.pk-lot{position:absolute;border:2.5px dashed rgba(255,255,255,.85);border-radius:14px;background:rgba(255,255,255,.12);display:grid;place-items:center;padding:0;font:inherit;cursor:default;-webkit-tap-highlight-color:transparent;z-index:2}\n.pk-lot:disabled{opacity:1}\n.pk-tag{display:inline-flex;align-items:center;gap:4px;background:rgba(21,25,43,.82);color:#fff;font:800 11.5px/1 'Plus Jakarta Sans',system-ui,sans-serif;border-radius:999px;padding:5px 9px 5px 5px;white-space:nowrap}\n.pk-lot.can{border-color:#D3F36B;background:rgba(211,243,107,.22);cursor:pointer;box-shadow:0 0 18px 2px rgba(211,243,107,.75)}\n.pk-lot.can .pk-tag{background:#D3F36B;color:#15192B;padding:7px 12px;font-size:12.5px;box-shadow:0 3px 0 #9DBB2F;animation:pkcan 1.2s ease-in-out infinite}\n@keyframes pkcan{50%{transform:translateY(-3px) scale(1.06)}}\n.pk-map.sm .pk-lot{border-width:1.5px;border-radius:6px}.pk-map.sm .pk-tag{display:none}\n.pk-vis{position:absolute;width:9.5%;aspect-ratio:1;translate:-50% -90%;z-index:120;pointer-events:none;animation:pkwalk linear infinite alternate}\n.pk-vis svg,.pk-vis img{width:100%;height:100%;display:block;animation:pkbob .42s ease-in-out infinite alternate;filter:drop-shadow(0 2px 2px rgba(0,0,0,.25))}\n@keyframes pkwalk{from{top:var(--a)}to{top:var(--b)}}\n@keyframes pkbob{to{transform:translateY(-6%) rotate(4deg)}}\n.pk-rain{position:absolute;z-index:300;translate:-50% 0;display:flex;align-items:center;gap:3px;background:#fff;color:#15192B;font:800 12.5px/1 'Plus Jakarta Sans',system-ui,sans-serif;border-radius:999px;padding:4px 9px 4px 4px;box-shadow:0 3px 0 rgba(21,25,43,.18);opacity:0;animation:pkrain 1.25s cubic-bezier(.2,.8,.3,1) both;pointer-events:none}\n@keyframes pkrain{0%{opacity:0;transform:translateY(10px) scale(.6)}20%{opacity:1;transform:translateY(-6px) scale(1.05)}75%{opacity:1}100%{opacity:0;transform:translateY(-34px) scale(.95)}}\n.pk-burst{position:absolute;z-index:250;width:0;height:0;pointer-events:none}\n.pk-burst i{position:absolute;left:-7px;top:-7px;width:14px;height:14px;border-radius:50%;background:#D3F36B;animation:pkb 1.1s ease-out forwards}\n.pk-burst i:nth-child(2n){background:#FF8FC0}.pk-burst i:nth-child(3n){background:#C7B5FF}.pk-burst i:nth-child(4n){background:#FFD45C}\n.pk-burst i:nth-child(1){--x:0;--y:-70px}.pk-burst i:nth-child(2){--x:50px;--y:-50px}.pk-burst i:nth-child(3){--x:70px;--y:0}.pk-burst i:nth-child(4){--x:50px;--y:50px}.pk-burst i:nth-child(5){--x:0;--y:70px}.pk-burst i:nth-child(6){--x:-50px;--y:50px}.pk-burst i:nth-child(7){--x:-70px;--y:0}.pk-burst i:nth-child(8){--x:-50px;--y:-50px}\n@keyframes pkb{0%{transform:scale(.4)}100%{transform:translate(var(--x),var(--y)) scale(.2);opacity:0}}\n@media (prefers-reduced-motion: reduce){.pk-vis,.pk-vis svg,.pk-spr{animation:none!important}}\n"; (document.head || document.documentElement).appendChild(st); } } catch (e) {}
})();
