/* =====================================================================
   MOVA Learning Studio — JUEGOS (octubre 2026, lote 9)
   TOEFL Practice, Sentence Scramble, Word Quest por etapas y Matemáticas Fases 1, 2 y 3.
   Se carga después de studio-plus.js.
   ===================================================================== */
(function () {
"use strict";
const byFile = (f) => MOVA_GAMES.find((g) => g.file === f);
const insertAfter = (file, game) => {
  if (byFile(game.file)) return;
  const i = MOVA_GAMES.findIndex((g) => g.file === file);
  if (i < 0) MOVA_GAMES.push(game); else MOVA_GAMES.splice(i + 1, 0, game);
};

/* ---------- Word Quest: ahora con tres etapas ---------- */
const wq = byFile("juego-word-quest.html");
if (wq) { wq.tag = "Kids · Children · Teens"; wq.skill = "Vocabulary and grammar"; wq.description = "Three stages and 23 worlds: from animals and colors to past participles, passive voice and conditionals."; }

/* ---------- Juegos nuevos ---------- */
insertAfter("juego-sentence-builder.html", {
  file: "juego-sentence-scramble.html", title: "Sentence Scramble", color: "sky", tag: "Kids · Children · Teens", skill: "Word order",
  description: "Drag the words into the right order: present, past, passive voice, conditionals and more."
});
insertAfter("juego-word-quest.html", {
  file: "juego-toefl-practice.html", title: "TOEFL Practice", color: "mustard", tag: "MOVA Teens", skill: "TOEFL ITP strategies",
  description: "Short practice sets for Structure, Written Expression, Reading and Listening, with an explanation for every answer."
});


/* ---------- Matemáticas · MOVA Kids (Fase 1) ---------- */
insertAfter("juego-mision-matematica.html", {
  file: "juego-la-tiendita.html", title: "La Tiendita", color: "coral", tag: "MOVA Kids · Matemáticas", skill: "Sumas, dinero y cambio",
  description: "Atiende a los clientes de la tiendita: suma los precios, cobra con monedas y billetes, y da el cambio exacto."
});
insertAfter("juego-la-tiendita.html", {
  file: "juego-que-hora-es.html", title: "¿Qué hora es?", color: "sky", tag: "MOVA Kids · Matemáticas", skill: "Leer el reloj",
  description: "Con el búho maestro: lee la hora y mueve las manecillas. En punto, y media, cuartos y de 5 en 5 minutos."
});
insertAfter("juego-que-hora-es.html", {
  file: "juego-detective-patrones.html", title: "Detective de patrones", color: "mustard", tag: "MOVA Kids · Matemáticas", skill: "Patrones y secuencias",
  description: "Resuelve cada caso: descubre qué color, figura o número sigue en el patrón."
});
const IMG_DIR = "";
const photo = (src) => `<image href="${/\.webp$/.test(src) ? src : "data:image/webp;base64," + src}" x="0" y="0" width="320" height="180" preserveAspectRatio="xMidYMid slice"/>`;
GAME_ART["juego-la-tiendita.html"] = scene("#F3E3CC", photo(IMG_DIR + "thumb-la-tiendita.webp"));
GAME_ART["juego-que-hora-es.html"] = scene("#BFE6F7", photo(IMG_DIR + "thumb-que-hora-es.webp"));
GAME_ART["juego-detective-patrones.html"] = scene("#FFB3A8", photo(IMG_DIR + "thumb-detective-patrones.webp"));

/* ---------- Matemáticas · MOVA Children (Fase 2) ---------- */
insertAfter("juego-detective-patrones.html", {
  file: "juego-pizzeria-fracciones.html", title: "Pizzería de fracciones", color: "coral", tag: "MOVA Children · Matemáticas", skill: "Fracciones",
  description: "Arma cada pizza con las fracciones exactas que pide el cliente antes de que se desespere: medios, cuartos, tercios, octavos y más."
});
insertAfter("juego-pizzeria-fracciones.html", {
  file: "juego-lluvia-de-numeros.html", title: "Lluvia de números", color: "sky", tag: "MOVA Children · Matemáticas", skill: "Cálculo mental",
  description: "Toca las operaciones que den el número objetivo antes de que lleguen al suelo: sumas, restas, tablas y divisiones."
});
GAME_ART["juego-pizzeria-fracciones.html"] = scene("#F3C9B0", photo(IMG_DIR + "thumb-pizzeria-fracciones.webp"));
GAME_ART["juego-lluvia-de-numeros.html"] = scene("#F6C6B4", photo(IMG_DIR + "thumb-lluvia-de-numeros.webp"));

/* ---------- Matemáticas · MOVA Teens (Fase 3) ---------- */
insertAfter("juego-lluvia-de-numeros.html", {
  file: "juego-la-balanza.html", title: "La Balanza", color: "coral", tag: "MOVA Teens · Matemáticas", skill: "Ecuaciones",
  description: "Resuelve ecuaciones manteniendo la balanza en equilibrio: de un paso, de dos pasos y con x en ambos lados."
});
insertAfter("juego-la-balanza.html", {
  file: "juego-la-boveda.html", title: "La Bóveda", color: "mustard", tag: "MOVA Teens · Matemáticas", skill: "Jerarquía, signos y porcentajes",
  description: "Escape room: abre los candados con el código correcto y entra a la bóveda del tesoro."
});
GAME_ART["juego-la-balanza.html"] = scene("#D9DDF5", photo(IMG_DIR + "thumb-la-balanza.webp"));
GAME_ART["juego-la-boveda.html"] = scene("#24305A", photo(IMG_DIR + "thumb-la-boveda.webp"));

/* ---------- Escape rooms · The Haunted Mansion (Halloween) ---------- */
insertAfter("juego-locked-library.html", {
  file: "juego-haunted-mansion.html", title: "The Haunted Mansion", color: "coral", tag: "Kids · Children · Teens", skill: "Escape room · Halloween",
  description: "Escape from the haunted mansion: answer the ghosts’ riddles, collect the keys and find the treasure."
});
GAME_ART["juego-haunted-mansion.html"] = scene("#2A2440", photo(IMG_DIR + "thumb-haunted-mansion.webp"));
/* También aparece en la vitrina de temporada (sección Play de Halloween) */
(function () {
  const add = () => {
    const h = document.getElementById("h-play"); if (!h) return;
    const sec = h.closest("section"), grid = sec && sec.querySelector(".grid");
    if (!grid || grid.querySelector("[data-hm]") || !grid.firstElementChild) return;
    const c = grid.firstElementChild.cloneNode(true); c.setAttribute("data-hm", "1");
    const a = c.matches("a") ? c : c.querySelector("a"); if (a) a.setAttribute("href", "juego-haunted-mansion.html");
    const art = c.querySelector("svg"); if (art) art.outerHTML = GAME_ART["juego-haunted-mansion.html"];
    const chips = c.querySelectorAll(".chip"); ["Halloween", "Escape room", "Kids · Children · Teens"].forEach((t, i) => { if (chips[i]) chips[i].textContent = t; });
    const t = c.querySelector("h3, h2"); if (t) t.textContent = "The Haunted Mansion";
    const d = [...c.querySelectorAll("p")].find((p) => !p.closest(".chips")); if (d) d.textContent = "Answer the ghosts’ riddles, collect the keys and find the treasure.";
    grid.prepend(c);
  };
  new MutationObserver(add).observe(document.body, { childList: true, subtree: true });
  add();
})();

/* ---------- Escape rooms · Lost in the Museum ---------- */
insertAfter("juego-haunted-mansion.html", {
  file: "juego-lost-in-the-museum.html", title: "Lost in the Museum", color: "sky", tag: "Kids · Children · Teens", skill: "Escape room · Reading",
  description: "Locked in the museum after closing time! Read the plaques, crack the codes room by room and find your way out."
});
GAME_ART["juego-lost-in-the-museum.html"] = scene("#1B2A55", photo(IMG_DIR + "thumb-lost-in-the-museum.webp"));

/* ---------- Escape rooms · Pirate Treasure Island ---------- */
insertAfter("juego-lost-in-the-museum.html", {
  file: "juego-pirate-treasure-island.html", title: "Pirate Treasure Island", color: "mustard", tag: "Kids · Children · Teens", skill: "Escape room · Listening",
  description: "Sail with Captain Ruby: answer the clues, listen to the parrot, complete the treasure map and open the chest."
});
GAME_ART["juego-pirate-treasure-island.html"] = scene("#7FD3F0", photo(IMG_DIR + "thumb-pirate-treasure-island.webp"));

/* ---------- Escape rooms · Space Station Rescue ---------- */
insertAfter("juego-pirate-treasure-island.html", {
  file: "juego-space-station-rescue.html", title: "Space Station Rescue", color: "sky", tag: "Kids · Children · Teens", skill: "Escape room · Spelling",
  description: "Red alert! Help Commander Nova and Bolt the robot repair four modules, crack the codes and escape through the airlock."
});
GAME_ART["juego-space-station-rescue.html"] = scene("#141C3D", photo(IMG_DIR + "thumb-space-station-rescue.webp"));

/* ---------- Escape rooms · The Detective's Case ---------- */
insertAfter("juego-space-station-rescue.html", {
  file: "juego-the-detectives-case.html", title: "The Detective’s Case", color: "coral", tag: "Kids · Children · Teens", skill: "Escape room · Reasoning",
  description: "Someone took the birthday cake! Find the clues, interview the suspects and solve the mystery with Detective Lily."
});
GAME_ART["juego-the-detectives-case.html"] = scene("#F3E7D3", photo(IMG_DIR + "thumb-the-detectives-case.webp"));

/* ---------- Escape rooms · Trapped in the Train ---------- */
insertAfter("juego-the-detectives-case.html", {
  file: "juego-trapped-in-the-train.html", title: "Trapped in the Train", color: "mustard", tag: "Kids · Children · Teens", skill: "Escape room · Sentence building",
  description: "All the doors are locked! Travel car by car with Conductor Clara, punch your ticket and pull the emergency brake."
});
GAME_ART["juego-trapped-in-the-train.html"] = scene("#2A1E16", photo(IMG_DIR + "thumb-trapped-in-the-train.webp"));

/* ---------- Vitrina de temporada · imagen principal de Halloween ---------- */
(function () {
  const IMG = photo(IMG_DIR + "banner-halloween.webp");
  const isArt = (svg) => { const vb = (svg.getAttribute("viewBox") || "").split(/[\s,]+/).map(Number); return vb.length === 4 && vb[2] >= 200; };
  const put = () => {
    /* Página de la vitrina */
    document.querySelectorAll(".hol-hero").forEach((h) => {
      if (h.hasAttribute("data-hero-img")) return;
      h.setAttribute("data-hero-img", "1"); h.innerHTML = scene("#2A2440", IMG);
    });
    /* Tarjeta "This season" de Home y cualquier tarjeta titulada Halloween */
    const boxes = new Set();
    document.querySelectorAll("h2, h3").forEach((t) => {
      const txt = t.textContent.trim().toLowerCase();
      if (txt === "this season") { const sec = t.closest("section") || t.parentElement; if (sec) boxes.add(sec); }
      if (txt === "halloween") { const card = t.closest("a, article, .card, li"); if (card && !card.closest(".hol-hero")) boxes.add(card); }
    });
    boxes.forEach((b) => {
      if (b.hasAttribute("data-hero-img")) return;
      const svg = [...b.querySelectorAll("svg")].find(isArt); if (!svg) return;
      b.setAttribute("data-hero-img", "1"); svg.outerHTML = scene("#2A2440", IMG);
    });
  };
  new MutationObserver(put).observe(document.body, { childList: true, subtree: true });
  put();
})();

/* ---------- Home · imagen de la tarjeta "For families" ---------- */
(function () {
  const IMG = photo(IMG_DIR + "banner-familias.webp");
  const isArt = (svg) => { const vb = (svg.getAttribute("viewBox") || "").split(/[\s,]+/).map(Number); return vb.length === 4 && vb[2] >= 200; };
  const put = () => {
    const boxes = new Set();
    document.querySelectorAll("h2, h3").forEach((t) => {
      const txt = t.textContent.trim().toLowerCase();
      if (txt === "for families") { const sec = t.closest("section") || t.parentElement; if (sec) boxes.add(sec); }
      if (txt.startsWith("aprender jugando")) { const card = t.closest("a, article, .card, li"); if (card) boxes.add(card); }
    });
    boxes.forEach((b) => {
      if (b.hasAttribute("data-fam-img")) return;
      const svg = [...b.querySelectorAll("svg")].find(isArt); if (!svg) return;
      b.setAttribute("data-fam-img", "1"); svg.outerHTML = scene("#DCEFE6", IMG);
    });
  };
  new MutationObserver(put).observe(document.body, { childList: true, subtree: true });
  put();
})();

/* ---------- Ilustraciones ---------- */
GAME_ART["juego-toefl-practice.html"] = scene("#1E3A5F", `
  <g transform="rotate(-5 160 92)">
    ${card(96, 22, 128, 150, "#FFFDFA")}
    <rect x="110" y="38" width="62" height="9" rx="4.5" fill="#1E3A5F"/>
    <rect x="110" y="54" width="94" height="6" rx="3" fill="#E1DBD0"/>
    ${["A", "B", "C", "D"].map((l, i) => { const y = 80 + i * 22, on = i === 1; return `<circle cx="118" cy="${y}" r="8" fill="${on ? "#E0B04A" : "none"}" stroke="#1E3A5F" stroke-width="2"/>` + T(118, y, l, 9, "#1E3A5F", 700) + `<rect x="134" y="${y - 3}" width="${[64, 52, 70, 44][i]}" height="6" rx="3" fill="${on ? "#E0B04A" : "#E1DBD0"}"/>`; }).join("")}
  </g>
  <g transform="rotate(36 238 120)"><rect x="232" y="64" width="14" height="88" rx="3" fill="#E8846B"/><rect x="232" y="64" width="14" height="12" rx="3" fill="#F6E9C6"/><path d="M232 152h14l-7 16z" fill="#F3CFA8"/><path d="M236.5 162h5l-2.5 6z" fill="#1E3A5F"/></g>
  <g transform="translate(48 116)"><path d="M-14 10v-6a14 14 0 0 1 28 0v6" stroke="#7FB89E" stroke-width="4" fill="none"/><rect x="-18" y="6" width="9" height="16" rx="4" fill="#7FB89E"/><rect x="9" y="6" width="9" height="16" rx="4" fill="#7FB89E"/></g>
  <path d="${starPath(270, 34, 9, 4)}" fill="#F2C94C"/>`, "#FFFFFF", 0.12);

GAME_ART["juego-sentence-scramble.html"] = scene("#DCEAF6", `
  ${[["I", 28, 34, 34, "#E8846B", -8], ["have", 74, 22, 62, "#6FA8D6", 5], ["seen", 150, 30, 60, "#E0B04A", -4], ["it", 224, 20, 40, "#7FB89E", 7]].map(([w, x, y, wd, c, r]) => `<g transform="rotate(${r} ${x + wd / 2} ${y + 17})"><rect x="${x}" y="${y}" width="${wd}" height="34" rx="10" fill="${c}"/>${T(x + wd / 2, y + 17, w, 15, "#FFFDFA", 700)}</g>`).join("")}
  <rect x="34" y="104" width="252" height="50" rx="14" fill="#FFFDFA" stroke="#9DBDDD" stroke-width="2" stroke-dasharray="6 6"/>
  ${[["I", 46, 30], ["have", 84, 50], ["seen", 142, 50]].map(([w, x, wd]) => `<rect x="${x}" y="114" width="${wd}" height="30" rx="9" fill="#FFFDFA" stroke="#5E9E82" stroke-width="2"/>${T(x + wd / 2, 129, w, 13, "#1E3A5F", 700)}`).join("")}
  <rect x="200" y="112" width="4" height="34" rx="2" fill="#6FA8D6"/>
  <path d="M246 70l16 24-10-1-4 10z" fill="#1E3A5F" stroke="#FFFDFA" stroke-width="2" stroke-linejoin="round"/>`);

/* ---------- Navegación: Learn + pestaña MOVA ---------- */
const nav = document.querySelector(".nav");
if (nav) nav.innerHTML = [["", "Home"], ["library", "Reading Library"], ["learn", "Learn"], ["resources", "Print &amp; Learn"], ["games", "Games"], ["shop", "Shop"], ["mova", "Nosotros"]]
  .map(([k, l]) => `<a href="#/${k}" data-nav="${k}">${l}</a>`).join("");
const ul = document.querySelector(".tabbar ul");
if (ul && ROUTES.learn) ul.innerHTML = [["", "home", "Home"], ["library", "book", "Read"], ["learn", "learn", "Learn"], ["resources", "teach", "Print"], ["games", "play", "Play"], ["mova", "mova", "MOVA"]]
  .map(([k, i, l]) => `<li><a href="#/${k}" data-nav="${k}">${ico(i, 23)}<span>${l}</span></a></li>`).join("");

router();
})();
