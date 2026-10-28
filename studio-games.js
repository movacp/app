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

/* ---------- Miniaturas ilustradas de los juegos anteriores y del área Learn ---------- */
(function () {
  const OLD = {
    "juego-word-quest.html": "thumb-word-quest.webp", "juego-level-up.html": "thumb-level-up.webp",
    "juego-verb-memory.html": "thumb-verb-memory.webp", "juego-sentence-builder.html": "thumb-sentence-builder.webp",
    "juego-locked-library.html": "thumb-locked-library.webp", "juego-toefl-practice.html": "thumb-toefl-practice.webp",
    "juego-sentence-scramble.html": "thumb-sentence-scramble.webp", "juego-mision-matematica.html": "thumb-mision-matematica.webp",
    "juego-lee-con-mochi.html": "thumb-lee-con-mochi.webp", "juego-sopa-de-letras.html": "thumb-sopa-de-letras.webp",
    "juego-crucigrama.html": "thumb-crucigrama.webp"
  };
  const art = (img) => scene("#F4ECE0", photo(IMG_DIR + img));
  const setArt = () => { if (typeof GAME_ART === "object") Object.entries(OLD).forEach(([f, img]) => { GAME_ART[f] = art(img); }); };
  const isArt = (svg) => { const vb = (svg.getAttribute("viewBox") || "").split(/[\s,]+/).map(Number); return vb.length === 4 && vb[2] >= 200; };
  const put = () => {
    Object.entries(OLD).forEach(([f, img]) => document.querySelectorAll(`a[href="${f}"]`).forEach((a) => {
      const card = a.closest("article, .item, .card, li") || a;
      if (card.hasAttribute("data-old-art") || card.hasAttribute("data-hm") || card.closest('[aria-labelledby="h-play"]')) return;
      const svg = [...card.querySelectorAll("svg")].find(isArt); if (!svg) return;
      card.setAttribute("data-old-art", "1"); svg.outerHTML = art(img);
    }));
    document.querySelectorAll('a.area[href="#/learn"] .thumb').forEach((t) => {
      if (t.hasAttribute("data-old-art")) return;
      t.setAttribute("data-old-art", "1"); t.innerHTML = scene("#DBE9F5", photo(IMG_DIR + "area-learn.webp"));
    });
  };
  setArt(); window.addEventListener("load", setArt);
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
if (nav) nav.innerHTML = [["", "Home"], ["library", "Reading Library"], ["learn", "Learn"], ["resources", "Print &amp; Learn"], ["games", "Games"], ["shop", "Shop"], ["mova", "MOVA"]]
  .map(([k, l]) => `<a href="#/${k}" data-nav="${k}">${l}</a>`).join("");
const ul = document.querySelector(".tabbar ul");
if (ul && ROUTES.learn) ul.innerHTML = [["", "home", "Home"], ["library", "book", "Read"], ["learn", "learn", "Learn"], ["resources", "teach", "Print"], ["games", "play", "Play"], ["mova", "mova", "MOVA"]]
  .map(([k, i, l]) => `<li><a href="#/${k}" data-nav="${k}">${ico(i, 23)}<span>${l}</span></a></li>`).join("");


/* =====================================================================
   READ: dos entradas grandes (English Readings / Lecturas en español),
   ajustes de idioma y Structures bilingüe (Kids y Children en español,
   Teens en inglés). Octubre 2026, v34.
   ===================================================================== */
(function () {
  const CSS = `<style>
.rh-grid{display:grid;gap:18px}
@media (min-width:820px){.rh-grid{grid-template-columns:1fr 1fr}}
.rh-card{display:grid;border-radius:26px;overflow:hidden;background:var(--surface);border:1px solid var(--line);text-decoration:none;color:inherit;box-shadow:var(--shadow);transition:transform .15s ease}
.rh-card:hover{transform:translateY(-2px)}
.rh-card:active{transform:translateY(1px)}
.rh-art svg{display:block;width:100%;height:auto}
.rh-body{display:grid;gap:8px;padding:18px 20px 20px}
.rh-kicker{font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}
.rh-body h2{font-size:26px;line-height:1.1}
.rh-body p{color:var(--ink-2);font-size:15px;line-height:1.5}
.rh-body .chips{margin-top:4px}
.rh-go{display:inline-flex;align-items:center;gap:8px;justify-self:start;margin-top:6px;padding:11px 18px;border-radius:999px;font-weight:700;font-size:15px;color:#fff}
.rh-card[data-c="sky"] .rh-go{background:#1E3A5F}
.rh-card[data-c="coral"] .rh-go{background:#C9654D}
.rh-card[data-c="sky"]{border-top:6px solid var(--chalk-sky,#6FA8D6)}
.rh-card[data-c="coral"]{border-top:6px solid var(--chalk-coral,#E8846B)}
.st-lang{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:16px;max-width:520px}
.st-lang button{display:grid;gap:2px;text-align:left;padding:12px 14px;border-radius:16px;border:1.5px solid var(--line);background:var(--surface);font-family:inherit;color:inherit;cursor:pointer}
.st-lang b{font-size:14.5px}
.st-lang small{font-size:12.5px;color:var(--ink-3);font-weight:500}
.st-lang button[aria-pressed="true"][data-l="es"]{background:var(--coral-soft);border-color:var(--coral)}
.st-lang button[aria-pressed="true"][data-l="en"]{background:var(--mint-soft);border-color:var(--mint)}
</style>`;
  document.head.insertAdjacentHTML("beforeend", CSS);

  /* ---------- Ilustraciones de los banners (provisionales) ---------- */
  const book = (cx, by) => `
    <path d="M${cx} ${by} C${cx - 40} ${by - 22} ${cx - 100} ${by - 24} ${cx - 140} ${by - 8} V${by - 112} C${cx - 100} ${by - 128} ${cx - 40} ${by - 126} ${cx} ${by - 102}Z" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="4" stroke-linejoin="round"/>
    <path d="M${cx} ${by} C${cx + 40} ${by - 22} ${cx + 100} ${by - 24} ${cx + 140} ${by - 8} V${by - 112} C${cx + 100} ${by - 128} ${cx + 40} ${by - 126} ${cx} ${by - 102}Z" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="4" stroke-linejoin="round"/>
    <path d="M${cx} ${by - 102}V${by}" stroke="#1E3A5F" stroke-width="4"/>
    ${[0, 1, 2, 3].map((i) => `<path d="M${cx - 118} ${by - 88 + i * 18}q48 -12 100 6" stroke="#C9D6E4" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M${cx + 18} ${by - 82 + i * 18}q52 -18 100 -6" stroke="#C9D6E4" stroke-width="5" fill="none" stroke-linecap="round"/>`).join("")}`;
  const bubble = (x, y, r, c, t) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="#1E3A5F" stroke-width="3"/><text x="${x}" y="${y + r * .36}" text-anchor="middle" font-family="Poppins,sans-serif" font-weight="800" font-size="${r}" fill="#1E3A5F">${t}</text>`;

  const ART_EN = `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="English Readings">
    <defs><linearGradient id="rhEn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFDAF1"/><stop offset="1" stop-color="#E8F2FB"/></linearGradient></defs>
    <rect width="640" height="300" fill="url(#rhEn)"/>
    <circle cx="560" cy="62" r="30" fill="#F6D27A"/>
    <g fill="#FFFFFF" opacity=".95"><ellipse cx="110" cy="58" rx="44" ry="15"/><ellipse cx="140" cy="46" rx="28" ry="16"/><ellipse cx="420" cy="40" rx="36" ry="12"/><ellipse cx="444" cy="31" rx="22" ry="12"/></g>
    <g fill="#A9C6E2"><rect x="44" y="110" width="30" height="140"/><path d="M40 112 59 78 78 112z"/><rect x="88" y="150" width="44" height="100"/><rect x="520" y="140" width="50" height="110"/><rect x="580" y="166" width="40" height="84"/></g>
    <circle cx="59" cy="132" r="10" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="2.5"/><path d="M59 132V125M59 132l5 3" stroke="#1E3A5F" stroke-width="2" stroke-linecap="round"/>
    <rect x="0" y="248" width="640" height="52" fill="#9FCBB5"/><rect x="0" y="262" width="640" height="16" fill="#86B9A1"/>
    <g transform="translate(456 196)"><rect width="120" height="56" rx="10" fill="#E8846B" stroke="#1E3A5F" stroke-width="3"/><rect x="0" y="27" width="120" height="4" fill="#C9654D"/>${[10, 38, 66, 94].map((x) => `<rect x="${x}" y="8" width="20" height="14" rx="3" fill="#FFFDFA"/><rect x="${x}" y="36" width="20" height="12" rx="3" fill="#FFFDFA"/>`).join("")}<circle cx="26" cy="58" r="9" fill="#1E3A5F"/><circle cx="94" cy="58" r="9" fill="#1E3A5F"/></g>
    <ellipse cx="320" cy="262" rx="170" ry="14" fill="#1E3A5F" opacity=".12"/>
    ${book(320, 254)}
    ${bubble(236, 96, 22, "#F2C94C", "A")}${bubble(320, 70, 26, "#F2A08A", "B")}${bubble(404, 96, 22, "#9FD7BE", "C")}
    <path d="M172 60l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#F2C94C"/><path d="M470 120l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#FFFDFA"/>
  </svg>`;

  const flags = ["#E8846B", "#E0B04A", "#6FA8D6", "#7FB89E", "#B59AE0", "#F2A08A", "#E0B04A", "#6FA8D6", "#E8846B", "#7FB89E"];
  const ART_ES = `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lecturas en español">
    <defs><linearGradient id="rhEs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FCDCC8"/><stop offset="1" stop-color="#FFF4EA"/></linearGradient></defs>
    <rect width="640" height="300" fill="url(#rhEs)"/>
    <circle cx="560" cy="96" r="32" fill="#F6C65B"/>
    <path d="M0 22Q320 52 640 22" stroke="#1E3A5F" stroke-width="2.5" fill="none"/>
    ${flags.map((c, i) => { const x = 8 + i * 64, y = 22 + Math.sin((i + .5) / flags.length * Math.PI) * 26; return `<g transform="translate(${x} ${y})"><path d="M0 0H52V40L46 46 40 40 34 46 28 40 22 46 16 40 10 46 4 40 0 44Z" fill="${c}"/><circle cx="16" cy="16" r="4" fill="#FFF4EA"/><circle cx="36" cy="16" r="4" fill="#FFF4EA"/><path d="M20 28h12" stroke="#FFF4EA" stroke-width="4" stroke-linecap="round"/></g>`; }).join("")}
    <rect x="0" y="248" width="640" height="52" fill="#E9C7A2"/><rect x="0" y="248" width="640" height="8" fill="#D9AE85"/>
    <g transform="translate(70 168)"><path d="M6 44h56l-8 38H14z" fill="#D9825F" stroke="#1E3A5F" stroke-width="3" stroke-linejoin="round"/><rect x="2" y="38" width="64" height="10" rx="3" fill="#C9654D" stroke="#1E3A5F" stroke-width="3"/><path d="M34 38V-8a12 12 0 0 1 24 0v18" fill="#7FB89E" stroke="#1E3A5F" stroke-width="3"/><path d="M34 38V2a10 10 0 0 0-20 0v14" fill="#7FB89E" stroke="#1E3A5F" stroke-width="3"/><circle cx="46" cy="-20" r="7" fill="#F2A08A" stroke="#1E3A5F" stroke-width="2.5"/></g>
    <g transform="translate(480 196)"><rect width="110" height="18" rx="4" fill="#6FA8D6" stroke="#1E3A5F" stroke-width="3"/><rect x="8" y="-18" width="96" height="18" rx="4" fill="#E0B04A" stroke="#1E3A5F" stroke-width="3"/><rect x="0" y="-36" width="104" height="18" rx="4" fill="#7FB89E" stroke="#1E3A5F" stroke-width="3"/><rect x="0" y="18" width="116" height="20" rx="4" fill="#E8846B" stroke="#1E3A5F" stroke-width="3"/></g>
    <ellipse cx="320" cy="262" rx="170" ry="14" fill="#1E3A5F" opacity=".12"/>
    ${book(320, 254)}
    ${bubble(240, 102, 22, "#F2C94C", "a")}${bubble(320, 82, 26, "#9FD7BE", "ñ")}${bubble(400, 102, 22, "#BCD8EF", "é")}
  </svg>`;

  /* ---------- Vista Read ---------- */
  const count = (fn) => { try { return fn(); } catch (e) { return 0; } };
  function viewReadHub() {
    const nEn = count(() => READINGS.length);
    const nEs = count(() => LECTURAS.length);
    return {
      title: "Read",
      html: `
      <section class="page-head wrap">
        <p class="kicker">Reading Library</p>
        <h1>What would you like to read?</h1>
        <p class="lead">Choose a language, then your stage and your level.</p>
      </section>
      <section class="wrap"><div class="rh-grid">
        <a class="rh-card" href="#/library/en" data-c="sky">
          <div class="rh-art" aria-hidden="true">${ART_EN}</div>
          <div class="rh-body">
            <span class="rh-kicker">English</span>
            <h2>English Readings</h2>
            <p>Stories and articles for every MOVA stage, from Pre-A1 to C2 with vocabulary and comprehension questions.</p>
            <div class="chips"><span class="chip">MOVA Kids · 6–8</span><span class="chip">MOVA Children · 9–12</span><span class="chip">MOVA Teens · 12–17</span></div>
            <span class="rh-go">${nEn ? nEn + " readings · " : ""}Start reading →</span>
          </div>
        </a>
        <a class="rh-card" href="#/lecturas" data-c="coral">
          <div class="rh-art" aria-hidden="true">${ART_ES}</div>
          <div class="rh-body">
            <span class="rh-kicker">Español</span>
            <h2>Lecturas en español</h2>
            <p>Textos de comprensión lectora de 1° a 6° de primaria, con preguntas y lectura en voz alta.</p>
            <div class="chips"><span class="chip">1° y 2°</span><span class="chip">3° y 4°</span><span class="chip">5° y 6°</span></div>
            <span class="rh-go">${nEs ? nEs + " lecturas · " : ""}Empezar a leer →</span>
          </div>
        </a>
      </div></section>`
    };
  }

  function installRead() {
    if (typeof ROUTES !== "object" || !ROUTES.library || ROUTES.library.__hub) return false;
    const prev = ROUTES.library;
    const hub = (p) => { p = p || []; if (p[0] === "en") return prev(p.slice(1)); if (p[0]) return prev(p); return viewReadHub(); };
    hub.__hub = true;
    ROUTES.library = hub;
    return true;
  }

  /* ---------- Learn (en inglés) ---------- */
  function viewLearnEN() {
    return {
      title: "Learn",
      html: `
      <section class="page-head wrap">
        <p class="kicker">Learn</p>
        <h1>Understand it, then practice it</h1>
        <p class="lead">Clear explanations of every grammar topic, and cards to review vocabulary.</p>
      </section>
      <section class="wrap"><div class="hub">
        <a href="#/structures" data-c="sky"><span class="hub-mark">${ico("rule", 26)}</span><h2>Structures</h2><p>Present Simple, Past Continuous, Present Perfect, Adverbs of Frequency and more. In Spanish for Kids and Children, in English for Teens.</p></a>
        <a href="#/flashcards" data-c="coral"><span class="hub-mark">${ico("cards", 26)}</span><h2>Flashcards</h2><p>Cards to review vocabulary by stage: flip, listen and practice.</p></a>
      </div></section>`
    };
  }

  /* ---------- Structures bilingüe ---------- */
  const S = [
    { id: "present-simple", title: "Present Simple", level: "A1", c: "sky",
      examples: ["I live in Monterrey.", "My mom works at a school.", "We don’t watch TV in the morning.", "Do you speak English?"],
      keywords: ["every day", "always", "usually", "on Mondays", "at night"],
      check: [["My brother ___ to school by bus.", ["goes", "go", "going"]], ["They ___ like vegetables.", ["don’t", "doesn’t", "aren’t"]], ["___ your dad cook?", ["Does", "Do", "Is"]]],
      rel: [["#/resources/present-simple-routines", "w", "Present Simple, Daily Routines"], ["#/resources/adverbs-of-frequency", "w", "Adverbs of Frequency"], ["juego-sentence-builder.html", "g", "Sentence Builder"]],
      es: { summary: "Para hábitos, rutinas y cosas que siempre son verdad.",
        uses: ["Rutinas y hábitos: I brush my teeth every morning.", "Hechos y verdades generales: Water boils at 100 °C.", "Gustos y preferencias: She likes pizza."],
        forms: [["Afirmativa", "Sujeto + verbo (+s / es con he, she, it)", "He plays soccer."], ["Negativa", "Sujeto + don’t / doesn’t + verbo", "He doesn’t play soccer."], ["Pregunta", "Do / Does + sujeto + verbo?", "Does he play soccer?"]],
        tip: "Con he, she e it el verbo lleva -s: she plays, he watches. Pero después de doesn’t el verbo regresa a su forma base: she doesn’t play (no “doesn’t plays”)." },
      en: { summary: "For habits, routines and things that are always true.",
        uses: ["Routines and habits: I brush my teeth every morning.", "Facts and general truths: Water boils at 100 °C.", "Likes and preferences: She likes pizza."],
        forms: [["Affirmative", "Subject + verb (+s / es with he, she, it)", "He plays soccer."], ["Negative", "Subject + don’t / doesn’t + verb", "He doesn’t play soccer."], ["Question", "Do / Does + subject + verb?", "Does he play soccer?"]],
        tip: "With he, she and it, the verb takes -s: she plays, he watches. But after doesn’t, the verb goes back to its base form: she doesn’t play (not “doesn’t plays”)." } },
    { id: "present-continuous", title: "Present Continuous", level: "A1", c: "mint",
      examples: ["The baby is sleeping.", "We are learning English.", "They aren’t playing outside.", "What are you doing?"],
      keywords: ["now", "right now", "at the moment", "Look!", "Listen!"],
      check: [["Look! The dog ___ the ball.", ["is chasing", "chases", "chasing"]], ["I ___ watching TV right now.", ["am not", "don’t", "isn’t"]], ["___ you listening to me?", ["Are", "Do", "Is"]]],
      rel: [["#/resources/present-continuous-now", "w", "Present Continuous, Right Now"], ["#/resources/spelling-ing-rules", "w", "Spelling Rules, Adding -ing"], ["juego-sentence-builder.html", "g", "Sentence Builder"]],
      es: { summary: "Para lo que está pasando en este momento.",
        uses: ["Acciones en este momento: I am reading now.", "Situaciones temporales: She is living with her grandma this month.", "Planes ya organizados: We are visiting Mexico City next week."],
        forms: [["Afirmativa", "Sujeto + am / is / are + verbo-ing", "She is dancing."], ["Negativa", "Sujeto + am / is / are + not + verbo-ing", "She isn’t dancing."], ["Pregunta", "Am / Is / Are + sujeto + verbo-ing?", "Is she dancing?"]],
        tip: "No se usa con verbos de estado como like, know, want o need: I want a cookie (no “I am wanting”)." },
      en: { summary: "For things that are happening right now.",
        uses: ["Actions happening now: I am reading now.", "Temporary situations: She is living with her grandma this month.", "Fixed plans: We are visiting Mexico City next week."],
        forms: [["Affirmative", "Subject + am / is / are + verb-ing", "She is dancing."], ["Negative", "Subject + am / is / are + not + verb-ing", "She isn’t dancing."], ["Question", "Am / Is / Are + subject + verb-ing?", "Is she dancing?"]],
        tip: "We don’t use it with state verbs like like, know, want or need: I want a cookie (not “I am wanting”)." } },
    { id: "past-simple", title: "Past Simple", level: "A2", c: "mustard",
      examples: ["We traveled to Saltillo last summer.", "I ate tacos for dinner.", "He didn’t finish his homework.", "Did you see the game?"],
      keywords: ["yesterday", "last week", "two days ago", "in 2020", "when I was a child"],
      check: [["Yesterday we ___ to the museum.", ["went", "go", "goed"]], ["She ___ call me last night.", ["didn’t", "doesn’t", "wasn’t"]], ["Did you ___ the movie?", ["like", "liked", "likes"]]],
      rel: [["#/resources/past-simple-weekend", "w", "Past Simple, My Weekend"], ["juego-verb-memory.html", "g", "Verb Memory (irregular verbs)"], ["#/resources/write-about-your-weekend", "w", "Write About Your Weekend"]],
      es: { summary: "Para acciones terminadas en un momento del pasado.",
        uses: ["Acciones terminadas: I visited my grandma yesterday.", "Series de acciones en una historia: He opened the door, looked around and left.", "Hábitos del pasado: We played outside every afternoon."],
        forms: [["Afirmativa", "Sujeto + verbo en pasado (-ed o irregular)", "She watched a movie. / She went home."], ["Negativa", "Sujeto + didn’t + verbo base", "She didn’t go home."], ["Pregunta", "Did + sujeto + verbo base?", "Did she go home?"]],
        tip: "Después de didn’t el verbo va en forma base: I didn’t go (no “didn’t went”)." },
      en: { summary: "For finished actions at a specific time in the past.",
        uses: ["Finished actions: I visited my grandma yesterday.", "A series of actions in a story: He opened the door, looked around and left.", "Past habits: We played outside every afternoon."],
        forms: [["Affirmative", "Subject + past verb (-ed or irregular)", "She watched a movie. / She went home."], ["Negative", "Subject + didn’t + base verb", "She didn’t go home."], ["Question", "Did + subject + base verb?", "Did she go home?"]],
        tip: "After didn’t, use the base form of the verb: I didn’t go (not “didn’t went”)." } },
    { id: "past-continuous", title: "Past Continuous", level: "A2", c: "coral",
      examples: ["I was sleeping when you called.", "We were watching a movie at nine.", "It wasn’t raining in the morning.", "What were you doing?"],
      keywords: ["while", "when", "at 7 o’clock yesterday", "all morning"],
      check: [["I ___ reading when the phone rang.", ["was", "were", "did"]], ["They ___ playing soccer at 5 p.m.", ["were", "was", "are"]], ["She was cooking ___ he was cleaning.", ["while", "when", "because"]]],
      rel: [["#/resources/past-continuous-when-while", "w", "Past Continuous, When and While"], ["#/structures/past-simple", "s", "Past Simple"]],
      es: { summary: "Para lo que estaba pasando en un momento del pasado.",
        uses: ["Una acción en progreso en el pasado: At 8 p.m. I was having dinner.", "Una acción larga interrumpida por otra corta: I was walking home when it started to rain.", "Dos acciones al mismo tiempo: She was cooking while he was cleaning."],
        forms: [["Afirmativa", "Sujeto + was / were + verbo-ing", "They were playing."], ["Negativa", "Sujeto + wasn’t / weren’t + verbo-ing", "They weren’t playing."], ["Pregunta", "Was / Were + sujeto + verbo-ing?", "Were they playing?"]],
        tip: "Usa was con I, he, she, it y were con you, we, they. La acción larga va en Past Continuous y la corta en Past Simple." },
      en: { summary: "For things that were happening at a moment in the past.",
        uses: ["An action in progress in the past: At 8 p.m. I was having dinner.", "A long action interrupted by a short one: I was walking home when it started to rain.", "Two actions at the same time: She was cooking while he was cleaning."],
        forms: [["Affirmative", "Subject + was / were + verb-ing", "They were playing."], ["Negative", "Subject + wasn’t / weren’t + verb-ing", "They weren’t playing."], ["Question", "Was / Were + subject + verb-ing?", "Were they playing?"]],
        tip: "Use was with I, he, she, it and were with you, we, they. The long action goes in the Past Continuous and the short one in the Past Simple." } },
    { id: "present-perfect", title: "Present Perfect", level: "B1", c: "sky",
      examples: ["Have you ever eaten sushi?", "We have known each other since 2019.", "She hasn’t seen the movie yet.", "I have just arrived."],
      keywords: ["ever", "never", "already", "yet", "just", "for", "since"],
      check: [["I ___ never been to Europe.", ["have", "has", "am"]], ["She has lived here ___ 2018.", ["since", "for", "ago"]], ["___ you ever tried mole?", ["Have", "Did", "Are"]]],
      rel: [["#/resources/present-perfect-experiences", "w", "Present Perfect, Experiences"], ["juego-verb-memory.html", "g", "Verb Memory (past participles)"], ["juego-sentence-builder.html", "g", "Sentence Builder"]],
      es: { summary: "Para experiencias y acciones que conectan el pasado con el presente.",
        uses: ["Experiencias de vida (sin decir cuándo): I have visited Cancún.", "Acciones que empezaron en el pasado y siguen: She has lived here for five years.", "Acciones recientes con resultado ahora: I have lost my keys."],
        forms: [["Afirmativa", "Sujeto + have / has + participio", "He has finished."], ["Negativa", "Sujeto + haven’t / hasn’t + participio", "He hasn’t finished."], ["Pregunta", "Have / Has + sujeto + participio?", "Has he finished?"]],
        tip: "For va con un periodo (for three years) y since con un punto de inicio (since 2020). Si dices cuándo pasó (yesterday, last year), usa Past Simple." },
      en: { summary: "For experiences and actions that connect the past with the present.",
        uses: ["Life experiences (without saying when): I have visited Cancún.", "Actions that started in the past and continue: She has lived here for five years.", "Recent actions with a result now: I have lost my keys."],
        forms: [["Affirmative", "Subject + have / has + past participle", "He has finished."], ["Negative", "Subject + haven’t / hasn’t + past participle", "He hasn’t finished."], ["Question", "Have / Has + subject + past participle?", "Has he finished?"]],
        tip: "For goes with a period of time (for three years) and since with a starting point (since 2020). If you say when it happened (yesterday, last year), use the Past Simple." } },
    { id: "past-perfect", title: "Past Perfect", level: "B1", c: "mint",
      examples: ["The bus had left when we got to the stop.", "I had never seen snow before that trip.", "He was hungry because he hadn’t eaten breakfast.", "Had you finished your homework before dinner?"],
      keywords: ["before", "after", "by the time", "already", "when"],
      check: [["When we arrived, the class ___ started.", ["had", "has", "was"]], ["She was sad because she ___ her phone.", ["had lost", "has lost", "loses"]], ["By the time I woke up, my mom ___ to work.", ["had gone", "went", "has gone"]]],
      rel: [["#/structures/present-perfect", "s", "Present Perfect"], ["juego-verb-memory.html", "g", "Verb Memory (past participles)"]],
      es: { summary: "Para una acción que pasó antes de otra acción en el pasado.",
        uses: ["La acción más antigua de dos en el pasado: When I arrived, the movie had started.", "Explicar causas en una historia: She was tired because she had worked all day."],
        forms: [["Afirmativa", "Sujeto + had + participio", "They had left."], ["Negativa", "Sujeto + hadn’t + participio", "They hadn’t left."], ["Pregunta", "Had + sujeto + participio?", "Had they left?"]],
        tip: "Piensa en una línea del tiempo: la acción que pasó primero va en Past Perfect (had + participio) y la segunda en Past Simple." },
      en: { summary: "For an action that happened before another action in the past.",
        uses: ["The earlier of two past actions: When I arrived, the movie had started.", "Explaining causes in a story: She was tired because she had worked all day."],
        forms: [["Affirmative", "Subject + had + past participle", "They had left."], ["Negative", "Subject + hadn’t + past participle", "They hadn’t left."], ["Question", "Had + subject + past participle?", "Had they left?"]],
        tip: "Think of a timeline: the action that happened first goes in the Past Perfect (had + past participle) and the second one in the Past Simple." } },
    { id: "future-will-going-to", title: "Future: will and going to", level: "A2", c: "mustard",
      examples: ["I’m going to visit my cousins on Saturday.", "It’s cold. I’ll close the window.", "She won’t be late, I promise.", "Are you going to play tomorrow?"],
      keywords: ["tomorrow", "next week", "soon", "I think", "probably"],
      check: [["The phone is ringing. I ___ answer it.", ["’ll", "am going to", "will to"]], ["We ___ going to visit Grandma on Sunday.", ["are", "will", "is"]], ["Look at the sky! It ___ rain.", ["is going to", "will to", "goes"]]],
      rel: [["juego-sentence-builder.html", "g", "Sentence Builder"]],
      es: { summary: "Dos formas de hablar del futuro: decisiones del momento y planes.",
        uses: ["Going to: planes e intenciones ya decididas. I’m going to study medicine.", "Going to: predicciones con evidencia. Look at those clouds! It’s going to rain.", "Will: decisiones en el momento, promesas y predicciones. I’ll help you. I think you will pass."],
        forms: [["Going to", "am / is / are + going to + verbo", "We are going to travel."], ["Will", "will + verbo (negativa: won’t)", "I will call you. / I won’t forget."], ["Pregunta", "Are you going to…? / Will you…?", "Will you help me?"]],
        tip: "Si la decisión ya estaba tomada, usa going to. Si la tomas en ese momento, usa will." },
      en: { summary: "Two ways to talk about the future: decisions in the moment and plans.",
        uses: ["Going to: plans and intentions already decided. I’m going to study medicine.", "Going to: predictions with evidence. Look at those clouds! It’s going to rain.", "Will: decisions in the moment, promises and predictions. I’ll help you. I think you will pass."],
        forms: [["Going to", "am / is / are + going to + verb", "We are going to travel."], ["Will", "will + verb (negative: won’t)", "I will call you. / I won’t forget."], ["Question", "Are you going to…? / Will you…?", "Will you help me?"]],
        tip: "If the decision was already made, use going to. If you make it at that moment, use will." } },
    { id: "adverbs-of-frequency", title: "Adverbs of Frequency", level: "A1", c: "coral",
      examples: ["I always eat breakfast.", "My sister sometimes reads comics.", "We are usually at home on Sundays.", "He never drinks coffee."],
      keywords: ["always", "usually", "often", "sometimes", "rarely", "never", "How often…?"],
      check: [["Choose the correct order:", ["She always drinks milk.", "She drinks always milk.", "Always she drinks milk."]], ["He is ___ late. He arrives on time every day.", ["never", "always", "usually"]], ["___ often do you play soccer?", ["How", "What", "When"]]],
      rel: [["#/resources/adverbs-of-frequency", "w", "Adverbs of Frequency"], ["#/structures/present-simple", "s", "Present Simple"]],
      es: { summary: "Palabras que dicen qué tan seguido hacemos algo.",
        uses: ["always (100 %) · usually · often · sometimes · rarely · never (0 %)", "Van antes del verbo principal: I usually walk to school.", "Van después del verbo to be: She is always happy."],
        forms: [["Con verbos", "Sujeto + adverbio + verbo", "He often plays chess."], ["Con to be", "Sujeto + am / is / are + adverbio", "They are never late."], ["Pregunta", "How often + do / does + sujeto + verbo?", "How often do you exercise?"]],
        tip: "Never ya es negativo: I never eat fish (no “I don’t never eat fish”)." },
      en: { summary: "Words that say how often we do something.",
        uses: ["always (100 %) · usually · often · sometimes · rarely · never (0 %)", "They go before the main verb: I usually walk to school.", "They go after the verb to be: She is always happy."],
        forms: [["With verbs", "Subject + adverb + verb", "He often plays chess."], ["With to be", "Subject + am / is / are + adverb", "They are never late."], ["Question", "How often + do / does + subject + verb?", "How often do you exercise?"]],
        tip: "Never is already negative: I never eat fish (not “I don’t never eat fish”)." } }
  ];
  const LKEY = "mova-structures-lang";
  const getL = () => { try { return localStorage.getItem(LKEY) === "en" ? "en" : "es"; } catch (e) { return "es"; } };
  const setL = (l) => { try { localStorage.setItem(LKEY, l); } catch (e) {} };
  const langSwitch = (l) => `<div class="st-lang" role="group" aria-label="Explanation language">
    <button type="button" data-l="es" aria-pressed="${l === "es"}"><b>Kids &amp; Children</b><small>Explicación en español</small></button>
    <button type="button" data-l="en" aria-pressed="${l === "en"}"><b>Teens</b><small>Explanation in English</small></button></div>`;
  const bindSwitch = (root) => $$(".st-lang button", root).forEach((b) => b.addEventListener("click", () => { setL(b.dataset.l); router(); }));
  const REL = { es: { w: "Hoja", g: "Juego", s: "Estructura" }, en: { w: "Worksheet", g: "Game", s: "Structure" } };
  const stF = { q: "" };

  function viewStructuresBi() {
    const l = getL();
    return {
      title: "Structures",
      html: `
      <section class="page-head wrap">
        <a class="back" href="#/learn">${ico("back", 18)} Learn</a>
        <h1>Structures</h1>
        <p class="lead">${l === "es" ? "Cada tema con su explicación, la fórmula, ejemplos, el error más común y práctica rápida." : "Each topic with its explanation, the formula, examples, the most common mistake and quick practice."}</p>
        ${langSwitch(l)}
      </section>
      <section class="wrap filters">${searchField("st-q", "Search a topic, like adverbs", stF.q)}</section>
      <section class="wrap"><div class="grid cols" id="st-results"></div></section>`,
      mount(root) {
        bindSwitch(root);
        const out = $("#st-results", root);
        const update = () => {
          const list = S.filter((s) => matchesQuery(stF.q, [s.title, s[l].summary, s.keywords.join(" "), s.level]));
          out.innerHTML = list.length ? list.map((s) => `<article class="st-card" data-c="${s.c}"><div class="chips">${lvlChip(s.level)}</div><h3 class="item-title"><a class="stretch" href="#/structures/${s.id}">${esc(s.title)}</a></h3><p>${esc(s[l].summary)}</p></article>`).join("") : emptyState("No topics match your search.", "Try present, past, future or adverbs.");
        };
        $("#st-q", root).addEventListener("input", (e) => { stF.q = e.target.value; update(); });
        update();
      }
    };
  }
  function viewStructureBi(id) {
    const s = S.find((x) => x.id === id);
    if (!s) return viewNotFound("We couldn’t find that topic.", "#/structures", "See all structures");
    const l = getL(), d = s[l];
    const qs = s.check.map(([q, o], i) => ({ q, correct: o[0], opts: shuffle(o, seeded(hashStr(s.id + i))) }));
    return {
      title: s.title,
      html: `
      <article class="narrow">
        <div class="reading-head">
          <a class="back" href="#/structures">${ico("back", 18)} Structures</a>
          <div class="chips">${lvlChip(s.level)}</div>
          <h1>${esc(s.title)}</h1>
          <p class="lead">${esc(d.summary)}</p>
          ${langSwitch(l)}
        </div>
        <section class="block"><h2>When do we use it?</h2><ul class="st-uses">${d.uses.map((u) => `<li>${esc(u)}</li>`).join("")}</ul></section>
        <section class="block"><h2>Structure</h2>
          <table class="form-table"><thead><tr><th>Form</th><th>Formula and example</th></tr></thead>
          <tbody>${d.forms.map(([f, rule, ex]) => `<tr><td>${esc(f)}</td><td>${esc(rule)}<br><em>${esc(ex)}</em></td></tr>`).join("")}</tbody></table>
        </section>
        <section class="block"><h2>Examples</h2><ul class="ex-list">${s.examples.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></section>
        <section class="block"><h2>Key words</h2><div class="chips" style="margin-top:10px">${s.keywords.map((k) => `<span class="chip">${esc(k)}</span>`).join("")}</div>
          <div class="tip"><strong>Common mistake</strong>${esc(d.tip)}</div></section>
        <section class="block"><h2>Practice</h2><p class="hint">Choose the correct answer.</p>
          <div class="mini-q">${qs.map((q, qi) => `<fieldset class="rq" data-q="${qi}"><legend><span>${qi + 1}.</span>${esc(q.q)}</legend><div class="rq-opts">${q.opts.map((o) => `<label class="opt"><input type="radio" name="sq${qi}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join("")}</div></fieldset>`).join("")}</div>
        </section>
        <section class="block"><h2>Keep practicing</h2><div class="rel">${s.rel.map(([h, k, t]) => `<a href="${h}">${ico(k === "g" ? "play" : k === "s" ? "rule" : "file", 20)}<span>${REL[l][k]}: ${esc(t)}</span></a>`).join("")}</div></section>
      </article>`,
      mount(root) {
        bindSwitch(root);
        $$(".rq", root).forEach((f, qi) => f.addEventListener("change", (e) => {
          const chosen = e.target.value, correct = qs[qi].correct;
          $$(".opt", f).forEach((lb) => { const inp = $("input", lb); inp.disabled = true; if (inp.value === correct) lb.classList.add("is-correct"); else if (inp.value === chosen) lb.classList.add("is-wrong"); });
          if (chosen !== correct) f.insertAdjacentHTML("beforeend", `<p class="rq-note">Correct answer: ${esc(correct)}</p>`);
        }));
      }
    };
  }

  /* ---------- Textos de juegos en inglés ---------- */
  function fixGames() {
    if (typeof MOVA_GAMES === "undefined") return;
    const g = (f) => MOVA_GAMES.find((x) => x.file === f);
    const lu = g("juego-level-up.html"); if (lu) { lu.tag = "All stages"; lu.skill = "Placement test"; }
    const wq = g("juego-word-quest.html"); if (wq && /\ba\b/.test(wq.tag || "")) wq.tag = wq.tag.replace(/\ba\b/, "to");
  }

  /* ---------- Ajustes en pantalla ---------- */
  const AGES = { "6 a 8 años": "Ages 6–8", "9 a 12 años": "Ages 9–12", "12 a 17 años": "Ages 12–17" };
  function patch() {
    const h = location.hash;
    if (/^#\/library\/en/.test(h)) {
      document.querySelectorAll(".stage-tab small").forEach((s) => { if (AGES[s.textContent.trim()]) s.textContent = AGES[s.textContent.trim()]; });
      const head = document.querySelector(".page-head");
      if (head && !head.hasAttribute("data-rh")) {
        head.setAttribute("data-rh", "1");
        const lead = head.querySelector(".lead");
        if (lead) { const m = lead.textContent.match(/(\d+)\s+de\s+(\d+)/); if (/Elige|etapa/.test(lead.textContent)) lead.textContent = "Choose your MOVA stage, then your level." + (m ? ` You have completed ${m[1]} of ${m[2]} readings.` : ""); }
        head.insertAdjacentHTML("afterbegin", `<a class="back" href="#/library">${ico("back", 18)} Read</a>`);
      }
    }
    if (!/^#\/(lecturas|library\/?$)/.test(h) && h !== "#/library") {
      document.querySelectorAll('a.back[href="#/library"]').forEach((a) => { if (!/^#\/library\/en/.test(h)) a.setAttribute("href", "#/library/en"); });
    }
    document.querySelectorAll('a.area[href="#/library"]').forEach((a) => a.setAttribute("href", "#/library/en"));
  }

  function install() {
    fixGames();
    if (typeof ROUTES === "object") {
      ROUTES.learn = () => viewLearnEN();
      ROUTES.structures = (p) => (p && p[0] ? viewStructureBi(p[0]) : viewStructuresBi());
    }
    return installRead();
  }
  install();
  window.addEventListener("load", () => {
    const changed = install();
    if (changed || /^#\/(learn|structures|library)/.test(location.hash)) router();
    patch();
  });
  new MutationObserver(patch).observe(document.body, { childList: true, subtree: true });
})();

router();
})();
