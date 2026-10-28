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
    const mc = g("juego-lee-con-mochi.html"); if (mc) { mc.title = "Aprende a leer con Mochi"; mc.desc = "Un mapa de islas, una por cada vocal: sílabas, palabras, las palabras de Mochi, carrera de lectura y un cuento en cada isla."; }
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


/* =====================================================================
   PORTADAS ILUSTRADAS DE LAS LECTURAS (v35)
   Cada portada se dibuja según el título, la descripción y el tema de
   la lectura: un escenario + el objeto o animal principal de la historia.
   Las lecturas que ya tienen imagen propia (p. ej. Halloween) se respetan.
   ===================================================================== */
(function () {
  const N = "#1E3A5F";
  const S = `stroke="${N}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"`;
  const S2 = `stroke="${N}" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"`;
  const C = { coral: "#E8846B", mustard: "#E0B04A", sky: "#6FA8D6", mint: "#7FB89E", lilac: "#B59AE0", pink: "#F2A08A", cream: "#FFFDFA", gold: "#F2C94C" };
  const SKIN = ["#F1C7A5", "#E2A87E", "#C98B5E", "#9A6440"];
  const HAIR = ["#3B2A20", "#7A4A2E", "#1E1A18", "#B7743E", "#4A3426"];
  const SHIRT = [C.coral, C.sky, C.mint, C.mustard, C.lilac, C.pink];
  const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
  const g = (x, y, s, inner) => `<g transform="translate(${x} ${y}) scale(${s})">${inner}</g>`;
  const cloud = (x, y, s) => g(x, y, s, `<ellipse cx="0" cy="0" rx="22" ry="9" fill="#fff"/><ellipse cx="12" cy="-6" rx="13" ry="9" fill="#fff"/><ellipse cx="-8" cy="-4" rx="10" ry="7" fill="#fff"/>`);

  /* ---------- Escenarios ---------- */
  const SCENES = {
    park: (h) => `<rect width="320" height="180" fill="#CFE6F5"/><circle cx="${270 - h % 40}" cy="34" r="16" fill="#F6D27A"/>${cloud(60 + h % 50, 32, 1)}${cloud(200, 22, .7)}<path d="M0 132 Q70 98 150 124 T320 112 V180 H0Z" fill="#B7DCC4"/><rect y="140" width="320" height="40" fill="#9FCBB5"/><path d="M0 150h320" stroke="#8CBDA6" stroke-width="5"/>`,
    city: (h, mty) => `<rect width="320" height="180" fill="#D6E6F5"/>${cloud(70, 28, .9)}${mty ? `<path d="M0 118 L60 70 L95 92 L120 58 L150 96 L190 76 L240 110 L320 90 V140 H0Z" fill="#A8BFA9"/>` : ""}<g fill="#A9C6E2">${[[8, 82, 34], [46, 64, 30], [80, 92, 26], [222, 70, 32], [258, 86, 28], [290, 60, 30]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${140 - y}" rx="2"/>`).join("")}</g><g fill="#FFFDFA" opacity=".8">${[[14, 92], [24, 92], [52, 74], [62, 74], [52, 90], [230, 80], [240, 80], [296, 70], [306, 70], [296, 86]].map(([x, y]) => `<rect x="${x}" y="${y}" width="6" height="7" rx="1"/>`).join("")}</g><rect y="140" width="320" height="40" fill="#C9D3DF"/><path d="M0 160h320" stroke="#FFFDFA" stroke-width="3" stroke-dasharray="14 12"/>`,
    home: (h) => `<rect width="320" height="180" fill="#F4E6D3"/><rect x="${22 + h % 30}" y="26" width="62" height="56" rx="5" fill="#BFDAF1" ${S}/><path d="M${53 + h % 30} 26v56M${22 + h % 30} 54h62" ${S}/><rect x="250" y="36" width="44" height="34" rx="3" fill="${C.mustard}" ${S2}/><rect x="256" y="42" width="32" height="22" fill="#FFFDFA" opacity=".7"/><rect y="140" width="320" height="40" fill="#D9B48A"/><rect y="140" width="320" height="4" fill="#C79E72"/>`,
    school: () => `<rect width="320" height="180" fill="#E3EEDF"/><rect x="34" y="20" width="160" height="78" rx="5" fill="#2F5D50" stroke="#8C6A4A" stroke-width="5"/><path d="M48 40q20-8 40 0M48 56h70M48 72q30 6 60-2" stroke="#FFFDFA" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".85"/><path d="M140 46l10 10M150 46l-10 10" stroke="${C.gold}" stroke-width="2.4" stroke-linecap="round"/><circle cx="270" cy="38" r="15" fill="#FFFDFA" ${S2}/><path d="M270 38v-8M270 38l6 4" ${S2}/><rect y="140" width="320" height="40" fill="#D9B48A"/><rect y="140" width="320" height="4" fill="#C79E72"/>`,
    beach: (h) => `<rect width="320" height="180" fill="#CDE7F5"/><circle cx="${250 + h % 40}" cy="34" r="17" fill="#F6D27A"/>${cloud(70, 30, .9)}<rect y="96" width="320" height="40" fill="#6FC3D6"/><path d="M0 104q20-6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#FFFDFA" stroke-width="2.5" fill="none" opacity=".7"/><path d="M0 132 Q160 118 320 134 V180 H0Z" fill="#F2D9A6"/>`,
    space: (h) => `<rect width="320" height="180" fill="#1E2A55"/>${Array.from({ length: 26 }, (_, i) => `<circle cx="${(h >>> (i % 13)) % 320 * 0 + (i * 53 + h) % 320}" cy="${(i * 37 + (h % 97)) % 170}" r="${i % 3 ? 1.2 : 2}" fill="#FFFDFA" opacity="${i % 2 ? .9 : .5}"/>`).join("")}<circle cx="48" cy="140" r="54" fill="#B59AE0" opacity=".55"/><circle cx="280" cy="36" r="14" fill="${C.mustard}"/><ellipse cx="280" cy="36" rx="24" ry="6" fill="none" stroke="${C.pink}" stroke-width="2.5"/>`,
    forest: (h) => `<rect width="320" height="180" fill="#DDEFE4"/><circle cx="60" cy="34" r="15" fill="#F6D27A"/><path d="M0 120 L60 70 L110 110 L170 60 L240 110 L290 80 L320 100 V180 H0Z" fill="#A9CDB5"/>${[[20, 1], [56, .8], [262, 1], [298, .85]].map(([x, s]) => g(x, 140, s, `<rect x="-3" y="-14" width="6" height="14" fill="#8C6A4A"/><path d="M0 -60 L18 -14 H-18Z" fill="#5E9E82" ${S2}/>`)).join("")}<rect y="140" width="320" height="40" fill="#A7BE8A"/>`,
    mountain: (h) => `<rect width="320" height="180" fill="#FBE2C3"/><circle cx="262" cy="36" r="17" fill="#F6C65B"/><path d="M0 130 L50 82 L96 110 L150 52 L204 104 L250 70 L320 116 V180 H0Z" fill="#D7BFA0" ${S2}/><path d="M150 52 L136 74 L150 70 L162 78Z" fill="#FFFDFA" opacity=".8"/><rect y="140" width="320" height="40" fill="#E3C79A"/>`,
    kitchen: () => `<rect width="320" height="180" fill="#FFF1DE"/><g stroke="#F2DDC0" stroke-width="2">${Array.from({ length: 9 }, (_, i) => `<path d="M${i * 40} 0v120"/>`).join("")}${Array.from({ length: 3 }, (_, i) => `<path d="M0 ${i * 40}h320"/>`).join("")}</g><rect y="120" width="320" height="60" fill="#E8B48F"/><rect y="120" width="320" height="8" fill="#C9654D"/>`,
    night: (h) => `<rect width="320" height="180" fill="#2B3A6B"/>${Array.from({ length: 18 }, (_, i) => `<circle cx="${(i * 61 + h) % 320}" cy="${(i * 29 + h % 50) % 110}" r="${i % 3 ? 1.2 : 2}" fill="#FFFDFA" opacity=".85"/>`).join("")}<circle cx="262" cy="40" r="20" fill="#F6E3A8"/><circle cx="272" cy="34" r="17" fill="#2B3A6B"/><path d="M0 140 Q160 120 320 140 V180 H0Z" fill="#3E5A7C"/>`,
    lab: () => `<rect width="320" height="180" fill="#E4EAF7"/><g stroke="#C6D2EA" stroke-width="3" fill="none"><path d="M0 40h60l20 20h60"/><path d="M320 60h-50l-20-20h-40"/><circle cx="80" cy="60" r="4" fill="#C6D2EA"/><circle cx="250" cy="40" r="4" fill="#C6D2EA"/></g><rect y="132" width="320" height="48" fill="#C9D3E8"/><rect y="132" width="320" height="5" fill="#AEBCDB"/>`,
    snow: (h) => `<rect width="320" height="180" fill="#DCE8F2"/>${Array.from({ length: 22 }, (_, i) => `<circle cx="${(i * 47 + h) % 320}" cy="${(i * 31) % 130}" r="2" fill="#FFFFFF"/>`).join("")}<path d="M0 126 Q90 104 180 124 T320 118 V180 H0Z" fill="#FFFFFF"/><rect y="146" width="320" height="34" fill="#F1F5FA"/>`,
    halloween: (h) => `<rect width="320" height="180" fill="#3A2E55"/><circle cx="262" cy="42" r="22" fill="#F6C65B"/>${Array.from({ length: 12 }, (_, i) => `<circle cx="${(i * 67 + h) % 320}" cy="${(i * 23) % 100}" r="1.4" fill="#FFFDFA" opacity=".8"/>`).join("")}<path d="M0 140 Q160 118 320 140 V180 H0Z" fill="#5A4675"/>`,
    sky: (h) => `<rect width="320" height="180" fill="#CDE4F6"/>${cloud(50, 40, 1.1)}${cloud(250, 60, .9)}${cloud(150, 140, 1.3)}<circle cx="276" cy="28" r="14" fill="#F6D27A"/>`,
    soft: (h) => `<rect width="320" height="180" fill="#F7EFE3"/>${Array.from({ length: 14 }, (_, i) => `<circle cx="${(i % 7) * 50 + (i > 6 ? 25 : 0) + 12}" cy="${i > 6 ? 130 : 46}" r="7" fill="${[C.coral, C.sky, C.mustard, C.mint][i % 4]}" opacity=".35"/>`).join("")}`
  };

  /* ---------- Personaje ---------- */
  const kid = (x, y, h, s = 1) => {
    const skin = SKIN[h % 4], hair = HAIR[(h >>> 3) % 5], shirt = SHIRT[(h >>> 5) % 6], pants = [N, "#5C6F8C", "#8C6A4A"][(h >>> 7) % 3];
    const long = (h >>> 9) % 2;
    return g(x, y, s, `<path d="M-8 30 L-11 54 M8 30 L11 54" stroke="${pants}" stroke-width="9" stroke-linecap="round"/><path d="M-14 56h8M8 56h8" stroke="${N}" stroke-width="5" stroke-linecap="round"/><path d="M-16 8 Q-28 18 -24 30 M16 8 Q30 -2 30 -14" stroke="${skin}" stroke-width="6" stroke-linecap="round" fill="none"/><rect x="-16" y="0" width="32" height="34" rx="11" fill="${shirt}" ${S2}/>${long ? `<path d="M-16 -18 Q-20 6 -10 8 H10 Q20 6 16 -18Z" fill="${hair}"/>` : ""}<circle cx="0" cy="-16" r="15" fill="${skin}" ${S2}/><path d="M-15 -18 Q-14 -34 0 -33 Q15 -33 15 -18 Q8 -26 -4 -24 Q-10 -24 -15 -18Z" fill="${hair}"/><circle cx="-5" cy="-14" r="1.8" fill="${N}"/><circle cx="5" cy="-14" r="1.8" fill="${N}"/><path d="M-4 -8 Q0 -5 4 -8" stroke="${N}" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="-9" cy="-10" r="2.4" fill="${C.pink}" opacity=".7"/><circle cx="9" cy="-10" r="2.4" fill="${C.pink}" opacity=".7"/>`);
  };

  /* ---------- Objetos y animales ---------- */
  const M = {
    cat: () => `<path d="M24 22 Q44 10 38 -8" stroke="#E0A060" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="6" cy="18" rx="24" ry="16" fill="#E0A060" ${S}/><path d="M-26 -14 L-24 -32 L-12 -22Z M2 -22 L8 -34 L12 -16Z" fill="#E0A060" ${S}/><circle cx="-10" cy="-8" r="18" fill="#E0A060" ${S}/><circle cx="-16" cy="-10" r="2.2" fill="${N}"/><circle cx="-4" cy="-10" r="2.2" fill="${N}"/><path d="M-12 -3 l2 2 2 -2" ${S2} fill="none"/><path d="M-30 -4h-10M-30 0h-9M10 -4h10M10 0h9" stroke="${N}" stroke-width="1.2"/>`,
    dog: () => `<path d="M30 6 Q42 -4 38 -14" stroke="#B7743E" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="8" cy="16" rx="26" ry="15" fill="#C98B4E" ${S}/><path d="M-10 26v14M24 26v14" stroke="#C98B4E" stroke-width="8" stroke-linecap="round"/><circle cx="-14" cy="-8" r="17" fill="#C98B4E" ${S}/><path d="M-28 -16 Q-36 4 -26 8 Q-22 -6 -22 -16Z" fill="#7A4A2E" ${S2}/><ellipse cx="-26" cy="-2" rx="9" ry="7" fill="#E6C29A" ${S2}/><circle cx="-31" cy="-4" r="3" fill="${N}"/><circle cx="-12" cy="-12" r="2.2" fill="${N}"/><path d="M-4 0 q6 6 0 10" stroke="${C.coral}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    bird: () => `<path d="M-40 30 Q0 22 40 30" stroke="#8C6A4A" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="6" rx="20" ry="18" fill="${C.sky}" ${S}/><path d="M-4 4 Q8 -2 16 12 Q2 16 -4 4Z" fill="#4E86B8" ${S2}/><circle cx="-8" cy="-2" r="2.4" fill="${N}"/><path d="M-20 0 l-10 4 10 3Z" fill="${C.mustard}" ${S2}/><path d="M-4 24v6M4 24v6" ${S2}/>`,
    owl: () => `<path d="M-40 34 Q0 26 40 34" stroke="#8C6A4A" stroke-width="5" fill="none"/><ellipse cx="0" cy="4" rx="24" ry="28" fill="#B7743E" ${S}/><path d="M-20 -18 L-18 -32 L-8 -22Z M20 -18 L18 -32 L8 -22Z" fill="#B7743E" ${S2}/><circle cx="-9" cy="-6" r="9" fill="#FFFDFA" ${S2}/><circle cx="9" cy="-6" r="9" fill="#FFFDFA" ${S2}/><circle cx="-8" cy="-5" r="3.5" fill="${N}"/><circle cx="8" cy="-5" r="3.5" fill="${N}"/><path d="M-3 4 l3 5 3 -5Z" fill="${C.mustard}"/><ellipse cx="0" cy="18" rx="13" ry="10" fill="#E6C29A"/>`,
    fish: () => `<path d="M24 0 L42 -14 L42 14Z" fill="${C.coral}" ${S}/><ellipse cx="0" cy="0" rx="28" ry="18" fill="${C.coral}" ${S}/><path d="M-4 -16 Q4 0 -4 16" stroke="${N}" stroke-width="1.8" fill="none"/><circle cx="-14" cy="-4" r="3" fill="${N}"/><circle cx="-36" cy="-22" r="4" fill="none" stroke="#FFFDFA" stroke-width="2"/><circle cx="-44" cy="-34" r="3" fill="none" stroke="#FFFDFA" stroke-width="2"/>`,
    whale: () => `<path d="M-46 4 Q-40 -26 0 -24 Q36 -22 40 4 Q40 22 0 22 Q-40 22 -46 4Z" fill="${C.sky}" ${S}/><path d="M38 -2 L58 -20 L52 0 L58 18Z" fill="${C.sky}" ${S}/><path d="M-40 10 Q0 22 36 8" stroke="#FFFDFA" stroke-width="3" fill="none" opacity=".7"/><circle cx="-28" cy="-6" r="2.8" fill="${N}"/><path d="M-10 -26 Q-14 -40 -22 -42 M-10 -26 Q-6 -40 2 -42" stroke="#FFFDFA" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    bee: () => `<ellipse cx="-6" cy="-18" rx="12" ry="16" fill="#FFFDFA" opacity=".9" ${S2}/><ellipse cx="10" cy="-16" rx="10" ry="14" fill="#FFFDFA" opacity=".9" ${S2}/><ellipse cx="0" cy="4" rx="26" ry="18" fill="${C.gold}" ${S}/><path d="M-8 -12v32M6 -13v34" stroke="${N}" stroke-width="6"/><circle cx="-18" cy="0" r="2.6" fill="${N}"/><path d="M26 4l8 0" ${S}/>${g(48, 30, .6, `<circle r="10" fill="${C.pink}"/><circle r="4" fill="${C.gold}"/>`)}`,
    butterfly: () => `<path d="M0 0 Q-34 -40 -40 -6 Q-36 12 0 4Z" fill="${C.lilac}" ${S}/><path d="M0 0 Q34 -40 40 -6 Q36 12 0 4Z" fill="${C.coral}" ${S}/><path d="M0 4 Q-26 30 -18 36 Q-6 32 0 8Z" fill="${C.mustard}" ${S2}/><path d="M0 4 Q26 30 18 36 Q6 32 0 8Z" fill="${C.mint}" ${S2}/><path d="M0 -12v34" stroke="${N}" stroke-width="5" stroke-linecap="round"/><path d="M0 -12 q-6 -12 -12 -14 M0 -12 q6 -12 12 -14" ${S2} fill="none"/>`,
    turtle: () => `<ellipse cx="-30" cy="6" rx="10" ry="8" fill="${C.mint}" ${S}/><path d="M-26 22v8M20 22v8" stroke="${C.mint}" stroke-width="8" stroke-linecap="round"/><path d="M-26 18 Q-24 -24 2 -24 Q30 -24 32 18Z" fill="#5E9E82" ${S}/><path d="M-10 -14 L2 0 L18 -14M2 0v18" ${S2} fill="none"/><circle cx="-34" cy="4" r="2" fill="${N}"/>`,
    rabbit: () => `<path d="M-14 -24 Q-22 -60 -8 -58 Q0 -40 -6 -22Z M2 -24 Q4 -62 16 -56 Q16 -38 8 -22Z" fill="#F4F0EA" ${S}/><ellipse cx="4" cy="18" rx="24" ry="20" fill="#F4F0EA" ${S}/><circle cx="-2" cy="-12" r="16" fill="#F4F0EA" ${S}/><circle cx="-8" cy="-14" r="2.2" fill="${N}"/><circle cx="4" cy="-14" r="2.2" fill="${N}"/><circle cx="-2" cy="-7" r="2.4" fill="${C.pink}"/><circle cx="28" cy="22" r="6" fill="#FFFFFF" ${S2}/>`,
    elephant: () => `<ellipse cx="8" cy="10" rx="34" ry="24" fill="#A8B4C8" ${S}/><path d="M-14 26v14M24 26v14" stroke="#A8B4C8" stroke-width="11" stroke-linecap="round"/><circle cx="-22" cy="-8" r="18" fill="#A8B4C8" ${S}/><path d="M-36 -6 Q-46 14 -38 28" stroke="#A8B4C8" stroke-width="9" fill="none" stroke-linecap="round"/><ellipse cx="-8" cy="-6" rx="11" ry="15" fill="#C6CFDC" ${S2}/><circle cx="-26" cy="-12" r="2.4" fill="${N}"/>`,
    cow: () => `<ellipse cx="6" cy="10" rx="32" ry="20" fill="#FFFDFA" ${S}/><path d="M-6 0 q10 -8 16 4 q-8 8 -16 -4Z M20 14 q10 -4 12 6 q-8 6 -12 -6Z" fill="${N}"/><path d="M-14 26v12M24 26v12" stroke="#FFFDFA" stroke-width="8" stroke-linecap="round"/><path d="M-14 26v12M24 26v12" ${S2}/><circle cx="-26" cy="-6" r="15" fill="#FFFDFA" ${S}/><ellipse cx="-30" cy="2" rx="10" ry="7" fill="${C.pink}" ${S2}/><circle cx="-22" cy="-12" r="2" fill="${N}"/><path d="M-34 -18l-6 -6M-18 -18l4 -7" ${S}/>`,
    flower: () => `<path d="M0 40V0" stroke="#5E9E82" stroke-width="5"/><path d="M0 26 Q-18 16 -22 26 Q-10 34 0 26Z" fill="${C.mint}" ${S2}/>${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="0" cy="-14" rx="9" ry="14" fill="${C.pink}" transform="rotate(${a})" ${S2}/>`).join("")}<circle r="9" fill="${C.gold}" ${S2}/>${g(-36, 30, .55, `<path d="M0 20V0" stroke="#5E9E82" stroke-width="5"/>${[0, 90, 180, 270].map((a) => `<ellipse cx="0" cy="-12" rx="8" ry="12" fill="${C.lilac}" transform="rotate(${a})"/>`).join("")}<circle r="7" fill="${C.gold}"/>`)}`,
    tree: () => `<rect x="-7" y="0" width="14" height="40" rx="3" fill="#8C6A4A" ${S2}/><circle cx="0" cy="-20" r="30" fill="#7FB89E" ${S}/><circle cx="-18" cy="-4" r="18" fill="#6FAA90" ${S2}/><circle cx="18" cy="-6" r="18" fill="#6FAA90" ${S2}/><circle cx="-8" cy="-26" r="4" fill="${C.coral}"/><circle cx="12" cy="-14" r="4" fill="${C.coral}"/>`,
    sun: () => `${Array.from({ length: 10 }, (_, i) => `<path d="M0 -30 V-42" stroke="${C.mustard}" stroke-width="5" stroke-linecap="round" transform="rotate(${i * 36})"/>`).join("")}<circle r="24" fill="${C.gold}" ${S}/><circle cx="-8" cy="-4" r="2.4" fill="${N}"/><circle cx="8" cy="-4" r="2.4" fill="${N}"/><path d="M-8 6 Q0 13 8 6" ${S2} fill="none"/>`,
    umbrella: () => `<path d="M-36 -2 Q-34 -38 0 -40 Q34 -38 36 -2 Q27 -10 18 -2 Q9 -10 0 -2 Q-9 -10 -18 -2 Q-27 -10 -36 -2Z" fill="${C.coral}" ${S}/><path d="M0 -40v-6M0 -2v38 q0 8 -8 8 q-7 0 -7 -7" ${S} fill="none"/>${[[-40, -60], [-12, -70], [24, -62], [46, -48], [-50, -30]].map(([x, y]) => `<path d="M${x} ${y} q-4 8 0 12 q4 -4 0 -12z" fill="${C.sky}"/>`).join("")}`,
    rainbow: () => `${[C.coral, C.mustard, C.mint, C.sky].map((c, i) => `<path d="M${-50 + i * 9} 20 a${50 - i * 9} ${50 - i * 9} 0 0 1 ${100 - i * 18} 0" stroke="${c}" stroke-width="9" fill="none"/>`).join("")}${cloud(-50, 20, .8)}${cloud(50, 20, .8)}`,
    snowman: () => `<circle cy="22" r="22" fill="#FFFFFF" ${S}/><circle cy="-12" r="16" fill="#FFFFFF" ${S}/><path d="M-14 -24h28M-9 -24v-14h18v14" fill="${N}" ${S2}/><circle cx="-5" cy="-14" r="2" fill="${N}"/><circle cx="5" cy="-14" r="2" fill="${N}"/><path d="M0 -10 l10 3 -10 2Z" fill="${C.coral}"/><path d="M-14 0 Q0 6 14 0 L16 8 L8 6" fill="${C.coral}" ${S2}/><path d="M-20 14 L-38 2M20 14 L38 0" stroke="#8C6A4A" stroke-width="3" stroke-linecap="round"/>`,
    moon: () => `<path d="M8 -29 A30 30 0 1 0 29 10 A22 22 0 1 1 8 -29Z" fill="#F6E3A8" ${S}/><circle cx="-14" cy="10" r="4" fill="#E8D08A"/><path d="M30 -30l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="${C.gold}"/>`,
    rocket: () => `<path d="M0 -50 Q22 -24 18 18 H-18 Q-22 -24 0 -50Z" fill="#FFFDFA" ${S}/><circle cy="-14" r="9" fill="${C.sky}" ${S}/><path d="M-18 4 L-32 26 L-18 20Z M18 4 L32 26 L18 20Z" fill="${C.coral}" ${S}/><path d="M-10 18 Q0 46 10 18Z" fill="${C.gold}" ${S2}/><path d="M-6 18 Q0 34 6 18Z" fill="${C.coral}"/>`,
    cake: () => `<rect x="-36" y="-2" width="72" height="34" rx="6" fill="${C.pink}" ${S}/><rect x="-28" y="-26" width="56" height="26" rx="5" fill="#FFFDFA" ${S}/><path d="M-36 8 q9 8 18 0 t18 0 t18 0 t18 0" stroke="#FFFDFA" stroke-width="4" fill="none"/>${[-14, 0, 14].map((x) => `<rect x="${x - 2}" y="-40" width="4" height="14" fill="${C.sky}"/><path d="M${x} -48 q4 4 0 8 q-4 -4 0 -8z" fill="${C.gold}"/>`).join("")}<rect x="-44" y="32" width="88" height="6" rx="3" fill="#C9D3DF" ${S2}/>`,
    gift: () => `<rect x="-30" y="-10" width="60" height="44" rx="4" fill="${C.sky}" ${S}/><rect x="-34" y="-22" width="68" height="14" rx="3" fill="#4E86B8" ${S}/><path d="M0 -22v56" stroke="${C.coral}" stroke-width="8"/><path d="M0 -22 Q-20 -40 -16 -24 Q-12 -20 0 -22 Q12 -20 16 -24 Q20 -40 0 -22Z" fill="${C.coral}" ${S2}/>`,
    pumpkin: () => `<ellipse cx="-14" cy="6" rx="18" ry="26" fill="#E8846B" ${S}/><ellipse cx="14" cy="6" rx="18" ry="26" fill="#E8846B" ${S}/><ellipse cx="0" cy="6" rx="16" ry="27" fill="#F0955F" ${S}/><path d="M0 -20 q2 -10 8 -12" stroke="#5E9E82" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-12 0l5 -7 5 7Z M2 0l5 -7 5 7Z" fill="${N}"/><path d="M-12 14 q12 10 24 0 l-4 4 -4 -3 -4 3 -4 -3 -4 3Z" fill="${N}"/>`,
    skull: () => `<path d="M-26 0 Q-28 -34 0 -36 Q28 -34 26 0 Q24 12 14 14 V24 H-14 V14 Q-24 12 -26 0Z" fill="#FFFDFA" ${S}/><circle cx="-10" cy="-8" r="8" fill="${C.sky}" ${S2}/><circle cx="10" cy="-8" r="8" fill="${C.pink}" ${S2}/><path d="M0 2 l-3 6h6Z" fill="${N}"/><path d="M-8 18v6M0 18v6M8 18v6" ${S2}/>${[[-16, -24, C.mustard], [0, -28, C.coral], [16, -24, C.mint]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="4" fill="${c}"/>`).join("")}${g(-40, 26, .6, `${[0, 60, 120, 180, 240, 300].map((a) => `<circle cx="0" cy="-8" r="7" fill="#F2A33A" transform="rotate(${a})"/>`).join("")}<circle r="6" fill="#E0B04A"/>`)}${g(40, 26, .5, `${[0, 60, 120, 180, 240, 300].map((a) => `<circle cx="0" cy="-8" r="7" fill="#F2A33A" transform="rotate(${a})"/>`).join("")}<circle r="6" fill="#E0B04A"/>`)}`,
    pizza: () => `<path d="M-34 -20 Q0 -34 34 -20 L0 40Z" fill="#F6D27A" ${S}/><path d="M-34 -20 Q0 -34 34 -20 L30 -12 Q0 -24 -30 -12Z" fill="#D9A15F" ${S2}/>${[[-12, -6], [10, -4], [0, 14]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="${C.coral}" ${S2}/>`).join("")}<circle cx="-2" cy="2" r="2.5" fill="${C.mint}"/>`,
    food: () => `<ellipse cx="0" cy="18" rx="44" ry="10" fill="#FFFDFA" ${S}/><path d="M-30 14 Q-30 -22 0 -22 Q30 -22 30 14Z" fill="#F6D27A" ${S}/><path d="M-26 8 Q-20 -6 -10 2 Q0 -10 10 2 Q20 -6 26 8" stroke="${C.mint}" stroke-width="5" fill="none" stroke-linecap="round"/>${[[-14, -6, C.coral], [6, -12, C.coral], [14, 0, "#8C6A4A"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="4" fill="${c}"/>`).join("")}<path d="M-8 -30 q-4 -8 0 -14 M4 -30 q-4 -8 0 -14" stroke="#C9D3DF" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    apple: () => `<path d="M0 -14 Q-30 -26 -30 4 Q-28 32 0 30 Q28 32 30 4 Q30 -26 0 -14Z" fill="#E86B5B" ${S}/><path d="M0 -14 Q2 -26 8 -32" ${S} fill="none"/><path d="M4 -24 Q18 -34 22 -22 Q10 -16 4 -24Z" fill="${C.mint}" ${S2}/><ellipse cx="-14" cy="-2" rx="4" ry="7" fill="#FFFDFA" opacity=".55"/>${g(40, 18, .55, `<path d="M0 -14 Q-30 -26 -30 4 Q-28 32 0 30 Q28 32 30 4 Q30 -26 0 -14Z" fill="#A8D06E" ${S}/>`)}`,
    icecream: () => `<path d="M-16 4 L0 44 L16 4Z" fill="#E6B87A" ${S}/><path d="M-10 12l14 14M2 8l10 10M-6 4l14 14" stroke="#C99A5A" stroke-width="2"/><circle cx="-8" cy="-6" r="13" fill="${C.pink}" ${S}/><circle cx="8" cy="-6" r="13" fill="#F6E3A8" ${S}/><circle cx="0" cy="-20" r="13" fill="${C.mint}" ${S}/><circle cx="0" cy="-35" r="4" fill="${C.coral}"/>`,
    ball: () => `<circle r="26" fill="#FFFDFA" ${S}/><path d="M0 -9 L9 -3 L6 8 H-6 L-9 -3Z" fill="${N}"/><path d="M0 -9V-26M9 -3L24 -9M6 8L15 21M-6 8L-15 21M-9 -3L-24 -9" ${S2}/><path d="M-30 30h60" stroke="#8CBDA6" stroke-width="4" stroke-linecap="round"/>`,
    basketball: () => `<circle r="26" fill="#E8846B" ${S}/><path d="M-26 0h52M0 -26v52M-18 -18 Q0 0 -18 18M18 -18 Q0 0 18 18" ${S2} fill="none"/>`,
    bike: () => `<circle cx="-26" cy="16" r="18" fill="none" ${S}/><circle cx="26" cy="16" r="18" fill="none" ${S}/><path d="M-26 16 L-6 -14 H18 L26 16 M-6 -14 L2 16 L18 -14 M-10 -22h10M18 -14 l-4 -12 h10" stroke="${C.coral}" stroke-width="4.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/><circle cx="2" cy="16" r="4" fill="${N}"/>`,
    guitar: () => `<path d="M14 -16 L44 -46" stroke="#8C6A4A" stroke-width="7" stroke-linecap="round"/><rect x="40" y="-56" width="14" height="10" rx="3" transform="rotate(45 47 -51)" fill="${N}"/><path d="M-6 -24 Q10 -30 16 -14 Q24 4 10 12 Q6 30 -14 28 Q-34 26 -32 6 Q-30 -10 -18 -12 Q-16 -22 -6 -24Z" fill="${C.mustard}" ${S}/><circle cx="-8" cy="4" r="6" fill="${N}"/><path d="M-18 14 L18 -18" stroke="#FFFDFA" stroke-width="1.2"/><path d="M36 10 v-18 l12 -4 v18" ${S2} fill="none"/><circle cx="33" cy="10" r="4" fill="${N}"/><circle cx="45" cy="6" r="4" fill="${N}"/>`,
    palette: () => `<path d="M0 -30 Q34 -30 36 -2 Q38 18 18 16 Q8 16 10 26 Q10 34 -2 32 Q-36 28 -36 -2 Q-34 -30 0 -30Z" fill="#F4E1C1" ${S}/>${[[-20, -12, C.coral], [-4, -20, C.mustard], [14, -16, C.sky], [22, 0, C.mint], [-22, 8, C.lilac]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="6" fill="${c}"/>`).join("")}<circle cx="0" cy="12" r="5" fill="#FFFDFA" ${S2}/><path d="M30 34 L54 -10" stroke="#8C6A4A" stroke-width="5" stroke-linecap="round"/><path d="M54 -10 l4 -10 4 6Z" fill="${C.coral}" ${S2}/>`,
    camera: () => `<rect x="-34" y="-18" width="68" height="44" rx="8" fill="${N}"/><rect x="-14" y="-28" width="28" height="12" rx="3" fill="${N}"/><circle cy="4" r="15" fill="#A9C6E2" stroke="#FFFDFA" stroke-width="4"/><circle cx="-4" cy="0" r="4" fill="#FFFDFA" opacity=".8"/><circle cx="24" cy="-10" r="3" fill="${C.coral}"/>`,
    phone: () => `<rect x="-20" y="-36" width="40" height="72" rx="8" fill="${N}"/><rect x="-16" y="-28" width="32" height="54" rx="3" fill="#BFDAF1"/><rect x="-12" y="-22" width="18" height="10" rx="3" fill="${C.coral}"/><rect x="-6" y="-6" width="18" height="10" rx="3" fill="#FFFDFA"/><path d="M-10 14 Q-4 20 2 14 Q6 10 10 16" stroke="${C.mint}" stroke-width="3" fill="none"/><path d="M26 -20 q8 -8 16 0 q-8 10 -16 0Z" fill="${C.pink}"/>`,
    robot: () => `<path d="M0 -40v-10" ${S}/><circle cy="-52" r="4" fill="${C.coral}"/><rect x="-26" y="-40" width="52" height="38" rx="10" fill="#C6D2EA" ${S}/><circle cx="-10" cy="-22" r="6" fill="${C.sky}" ${S2}/><circle cx="10" cy="-22" r="6" fill="${C.sky}" ${S2}/><path d="M-8 -10h16" ${S2}/><rect x="-22" y="2" width="44" height="34" rx="8" fill="#A9B8D8" ${S}/><circle cy="18" r="6" fill="${C.gold}"/><path d="M-22 10 L-36 24M22 10 L36 24" ${S}/>`,
    laptop: () => `<rect x="-32" y="-30" width="64" height="40" rx="4" fill="${N}"/><rect x="-27" y="-25" width="54" height="30" fill="#BFDAF1"/><path d="M-20 -16h20M-20 -8h30M-20 0h14" stroke="#FFFDFA" stroke-width="3" stroke-linecap="round"/><path d="M-40 10 H40 L34 18 H-34Z" fill="#A9B8D8" ${S}/>`,
    book: () => `<path d="M0 26 C-14 18 -32 18 -44 24 V-20 C-32 -26 -14 -26 0 -18Z" fill="#FFFDFA" ${S}/><path d="M0 26 C14 18 32 18 44 24 V-20 C32 -26 14 -26 0 -18Z" fill="#FFFDFA" ${S}/><path d="M0 -18V26" ${S}/>${[0, 1, 2].map((i) => `<path d="M-36 ${-10 + i * 9}q16 -4 30 2" stroke="#C9D6E4" stroke-width="2.6" fill="none"/><path d="M6 ${-8 + i * 9}q16 -6 30 -2" stroke="#C9D6E4" stroke-width="2.6" fill="none"/>`).join("")}<path d="M20 -36l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill="${C.gold}"/>`,
    backpack: () => `<path d="M-12 -30 Q0 -44 12 -30" stroke="${N}" stroke-width="4" fill="none"/><rect x="-26" y="-30" width="52" height="64" rx="16" fill="${C.coral}" ${S}/><rect x="-18" y="6" width="36" height="22" rx="6" fill="#F2A08A" ${S2}/><path d="M-18 14h36" ${S2}/><path d="M-26 -6h52" stroke="#C9654D" stroke-width="3"/>${g(40, 14, .7, `<rect x="-4" y="-30" width="8" height="50" fill="${C.mustard}" ${S2}/><path d="M-4 20 L0 30 L4 20Z" fill="#F3CFA8" ${S2}/>`)}`,
    tent: () => `<path d="M-44 30 L0 -34 L44 30Z" fill="${C.coral}" ${S}/><path d="M0 -34 L-12 30 H12Z" fill="#C9654D" ${S2}/><path d="M0 -34 V-44" ${S}/><path d="M0 -44 l12 4 -12 4" fill="${C.mustard}"/>${g(58, 26, .6, `<path d="M-14 6 L14 -2 M-14 -2 L14 6" stroke="#8C6A4A" stroke-width="5"/><path d="M0 -4 Q-10 -18 0 -30 Q10 -18 0 -4Z" fill="${C.mustard}"/><path d="M0 -6 Q-5 -14 0 -20 Q5 -14 0 -6Z" fill="${C.coral}"/>`)}`,
    plane: () => `<path d="M-46 4 Q-46 -6 -30 -6 H34 Q46 -6 48 4 Q46 12 34 12 H-30 Q-46 12 -46 4Z" fill="#FFFDFA" ${S}/><path d="M-4 -6 L-20 -32 H-8 L14 -6Z M-4 12 L-18 34 H-6 L14 12Z" fill="${C.sky}" ${S}/><path d="M-40 -6 L-48 -22 H-38 L-30 -6Z" fill="${C.coral}" ${S2}/>${[0, 1, 2, 3].map((i) => `<circle cx="${18 - i * 12}" cy="2" r="3" fill="${C.sky}"/>`).join("")}`,
    bus: () => `<rect x="-48" y="-30" width="96" height="50" rx="9" fill="${C.mustard}" ${S}/>${[0, 1, 2, 3].map((i) => `<rect x="${-40 + i * 20}" y="-22" width="15" height="16" rx="3" fill="#FFFDFA" ${S2}/>`).join("")}<rect x="38" y="-22" width="8" height="30" rx="2" fill="#BFDAF1" ${S2}/><path d="M-48 4h96" stroke="#C99A3A" stroke-width="3"/><circle cx="-26" cy="22" r="9" fill="${N}"/><circle cx="26" cy="22" r="9" fill="${N}"/><circle cx="-26" cy="22" r="3" fill="#C9D3DF"/><circle cx="26" cy="22" r="3" fill="#C9D3DF"/>`,
    car: () => `<path d="M-44 10 V-2 Q-42 -10 -30 -12 L-18 -28 H18 L30 -12 Q44 -10 44 0 V10Z" fill="${C.sky}" ${S}/><path d="M-14 -24 H-2 V-12 H-24Z M2 -24 H14 L22 -12 H2Z" fill="#FFFDFA" ${S2}/><circle cx="-24" cy="12" r="10" fill="${N}"/><circle cx="24" cy="12" r="10" fill="${N}"/><circle cx="-24" cy="12" r="4" fill="#C9D3DF"/><circle cx="24" cy="12" r="4" fill="#C9D3DF"/>`,
    house: () => `<path d="M-40 -6 L0 -40 L40 -6Z" fill="${C.coral}" ${S}/><rect x="-32" y="-6" width="64" height="44" fill="#FFFDFA" ${S}/><rect x="-8" y="12" width="16" height="26" rx="2" fill="${C.sky}" ${S2}/><rect x="-26" y="2" width="14" height="12" fill="#BFDAF1" ${S2}/><rect x="12" y="2" width="14" height="12" fill="#BFDAF1" ${S2}/><path d="M20 -26v-12h8v18" fill="#8C6A4A" ${S2}/><path d="M0 -20 a5 5 0 0 1 8 -2 a5 5 0 0 1 8 2 L8 -10Z" fill="${C.pink}" transform="translate(-8 -2)"/>`,
    heart: () => `<path d="M0 26 C-40 0 -34 -34 -12 -30 C-4 -28 0 -20 0 -16 C0 -20 4 -28 12 -30 C34 -34 40 0 0 26Z" fill="${C.coral}" ${S}/><ellipse cx="-14" cy="-14" rx="5" ry="7" fill="#FFFDFA" opacity=".5"/>${g(38, -26, .4, `<path d="M0 26 C-40 0 -34 -34 -12 -30 C-4 -28 0 -20 0 -16 C0 -20 4 -28 12 -30 C34 -34 40 0 0 26Z" fill="${C.pink}"/>`)}`,
    globe: () => `<circle r="32" fill="${C.sky}" ${S}/><path d="M-24 -12 Q-10 -20 -6 -8 Q-12 4 -2 10 Q-6 22 -18 18 Q-30 6 -24 -12Z M8 -26 Q22 -24 26 -10 Q16 -6 12 4 Q4 -6 8 -26Z M10 14 Q20 10 24 18 Q16 26 10 14Z" fill="${C.mint}" ${S2}/>${g(30, 26, .5, `<path d="M0 -26 Q28 -26 26 0 Q14 24 0 30 Q-4 8 0 -26Z" fill="#7FB89E" ${S}/><path d="M0 -26 Q10 0 0 30" ${S} fill="none"/>`)}`,
    drop: () => `<path d="M0 -40 Q30 0 26 14 Q20 34 0 34 Q-20 34 -26 14 Q-30 0 0 -40Z" fill="${C.sky}" ${S}/><path d="M-12 6 Q-14 18 -4 24" stroke="#FFFDFA" stroke-width="4" fill="none" stroke-linecap="round"/>${g(36, 22, .45, `<path d="M0 -40 Q30 0 26 14 Q20 34 0 34 Q-20 34 -26 14 Q-30 0 0 -40Z" fill="#9CC9EA" ${S}/>`)}`,
    coins: () => `<rect x="-30" y="-6" width="40" height="40" rx="14" fill="${C.pink}" ${S}/><path d="M-14 -6 V-12 H-6 V-6" fill="${N}"/><circle cx="-18" cy="10" r="2.5" fill="${N}"/><ellipse cx="-30" cy="18" rx="5" ry="7" fill="${C.pink}" ${S2}/>${[0, 1, 2].map((i) => `<ellipse cx="30" cy="${26 - i * 8}" rx="16" ry="6" fill="${C.gold}" ${S2}/>`).join("")}<circle cx="30" cy="-6" r="12" fill="${C.gold}" ${S}/><path d="M30 -12v12M26 -9h7a3 3 0 0 1 0 6h-6" ${S2} fill="none"/>`,
    clock: () => `<circle r="32" fill="#FFFDFA" ${S}/><circle r="32" fill="none" stroke="${C.coral}" stroke-width="6"/>${Array.from({ length: 12 }, (_, i) => `<path d="M0 -24v4" stroke="${N}" stroke-width="2.5" transform="rotate(${i * 30})"/>`).join("")}<path d="M0 0V-18M0 0l12 6" ${S}/><circle r="3" fill="${N}"/>`,
    bulb: () => `<path d="M0 -38 Q26 -38 26 -12 Q26 4 12 14 V22 H-12 V14 Q-26 4 -26 -12 Q-26 -38 0 -38Z" fill="${C.gold}" ${S}/><rect x="-12" y="22" width="24" height="12" rx="3" fill="#A9B8D8" ${S2}/><path d="M-6 0 l6 -10 6 10" ${S2} fill="none"/>${[[-44, -20], [44, -20], [-36, -48], [36, -48], [0, -58]].map(([x, y]) => `<path d="M${x * .8} ${y * .8} L${x} ${y}" stroke="${C.mustard}" stroke-width="4" stroke-linecap="round"/>`).join("")}`,
    trophy: () => `<path d="M-22 -30 H22 V-6 Q22 16 0 18 Q-22 16 -22 -6Z" fill="${C.gold}" ${S}/><path d="M-22 -22 Q-38 -22 -34 -6 Q-30 4 -20 2 M22 -22 Q38 -22 34 -6 Q30 4 20 2" ${S} fill="none"/><rect x="-5" y="18" width="10" height="10" fill="${C.gold}" ${S2}/><rect x="-18" y="28" width="36" height="10" rx="2" fill="#8C6A4A" ${S2}/><path d="M0 -20l3 6 6 1 -4.5 4 1 6 -5.5 -3 -5.5 3 1 -6 -4.5 -4 6 -1z" fill="#FFFDFA"/>`,
    map: () => `<path d="M-44 -28 L-14 -36 L16 -28 L44 -36 V28 L16 36 L-14 28 L-44 36Z" fill="#F4E1C1" ${S}/><path d="M-14 -36V28M16 -28V36" ${S2}/><path d="M-34 14 Q-20 0 -4 8 T26 -6" stroke="${C.coral}" stroke-width="3" stroke-dasharray="5 5" fill="none"/><path d="M28 -14 Q28 -26 36 -26 Q44 -26 44 -14 Q44 -6 36 4 Q28 -6 28 -14Z" transform="translate(-6 0)" fill="${C.coral}" ${S2}/>`,
    brain: () => `<path d="M-4 -30 Q-22 -34 -28 -18 Q-40 -12 -34 4 Q-38 20 -20 24 Q-10 34 -2 26Z" fill="${C.pink}" ${S}/><path d="M4 -30 Q22 -34 28 -18 Q40 -12 34 4 Q38 20 20 24 Q10 34 2 26Z" fill="${C.pink}" ${S}/><path d="M-20 -14 q8 4 4 12 M-24 8 q10 -2 12 8 M20 -14 q-8 4 -4 12 M24 8 q-10 -2 -12 8" ${S2} fill="none"/>`,
    star: () => `<path d="M0 -36 L10 -12 L36 -10 L16 6 L22 32 L0 18 L-22 32 L-16 6 L-36 -10 L-10 -12Z" fill="${C.gold}" ${S}/>`
  };

  /* ---------- Palabras clave → objeto principal y escenario ---------- */
  const RULES = [
    [/halloween|ghost|fantasma|witch|bruja|pumpkin|calabaza|monster|monstru/, "pumpkin", "halloween"],
    [/muertos|calavera|ofrenda|catrina|cempas[uú]/, "skull", "halloween"],
    [/rainbow|arco ?[ií]ris/, "rainbow", "park"],
    [/\brain|umbrella|storm|lluvi|llover|paraguas|tormenta/, "umbrella", "park"],
    [/snow|winter|freez|nieve|invierno/, "snowman", "snow"],
    [/climate|environment|recycl|plastic|pollution|fashion|t-shirt|clima|ambiente|recicl|pl[aá]stico|contamina|basura/, "globe", "park"],
    [/space|planet|astronaut|rocket|\bmars\b|galax|espacio|planeta|astronaut|cohete|galaxia/, "rocket", "space"],
    [/climb|potrero|hiking|\bhike|camping|campamento|escal|excursi/, "tent", "mountain"],
    [/mountain|monta[ñn]a|volcan|volc[aá]n|desert|desierto/, "tent", "mountain"],
    [/\bcats?\b|kitten|\bgat[oa]s?\b|\bmichi/, "cat", "home"],
    [/\bdogs?\b|pupp|\bperr[oa]s?\b|perrit|cachorr/, "dog", "park"],
    [/\bowl|b[uú]ho|tecolote/, "owl", "night"],
    [/bird|parrot|eagle|hummingbird|p[aá]jar|\baves?\b|loro|[aá]guila|colibr/, "bird", "park"],
    [/whale|dolphin|ballena|delf[ií]n/, "whale", "beach"],
    [/turtle|tortuga/, "turtle", "beach"],
    [/\bfish|shark|ocean|\bsea\b|coral reef|\bpez\b|peces|tibur|oc[eé]ano|\bmar\b/, "fish", "beach"],
    [/beach|playa/, "sun", "beach"],
    [/\bbees?\b|honey|abeja|miel/, "bee", "park"],
    [/butterfl|mariposa|monarc/, "butterfly", "park"],
    [/rabbit|bunny|conej/, "rabbit", "park"],
    [/elephant|\bzoo\b|\blion|giraffe|elefante|zool[oó]gico|\ble[oó]n\b|jirafa/, "elephant", "park"],
    [/\bfarm|\bcows?\b|horse|granja|\bvaca|caballo/, "cow", "park"],
    [/birthday|party|celebrat|cumplea|fiesta/, "cake", "home"],
    [/christmas|gift|present\b|navidad|regalo/, "gift", "home"],
    [/pizza/, "pizza", "kitchen"],
    [/ice cream|helado/, "icecream", "park"],
    [/\bapples?\b|fruit|vegetable|healthy|manzana|fruta|verdura|saludable/, "apple", "kitchen"],
    [/taco|tamal|\bmole\b|food|\bcook|recipe|kitchen|breakfast|lunch|dinner|restaurant|comida|cocin|receta|desayun|cena\b|restaurante/, "food", "kitchen"],
    [/soccer|football|f[uú]tbol|\bgoal|\bgol\b/, "ball", "park"],
    [/basketball|b[aá]squet|baloncesto/, "basketball", "park"],
    [/\bbikes?\b|bicycle|bicicleta|\bbici/, "bike", "park"],
    [/music|\bsongs?\b|guitar|\bband\b|concert|piano|singer|m[uú]sica|canci[oó]n|guitarra|concierto|cantar/, "guitar", "home"],
    [/\bart\b|artist|paint|draw|museum|frida|mural|pintar|pintur|dibuj|museo|arte\b/, "palette", "home"],
    [/photo|camera|c[aá]mara|fotograf/, "camera", "park"],
    [/robot|artificial intelligence|\bai\b|chatbot|inteligencia artificial/, "robot", "lab"],
    [/phone|social media|internet|online|screen|video ?game|celular|redes sociales|pantalla|videojuego/, "phone", "home"],
    [/computer|technology|coding|program|tecnolog|computadora/, "laptop", "lab"],
    [/brain|memory|sleep science|neuro|cerebro|memoria/, "brain", "lab"],
    [/science|experiment|invent|idea|discover|ciencia|experimento|invent|descubr/, "bulb", "lab"],
    [/\bmoon|night|\bstars?\b|sleep|dream|\bluna\b|noche|estrella|dormir|sue[ñn]o/, "moon", "night"],
    [/travel|\btrip\b|airport|plane|vacation|viaje|aeropuerto|avi[oó]n|vacaciones/, "plane", "sky"],
    [/\bmaps?\b|treasure|explor|mapa|tesoro|explorador/, "map", "forest"],
    [/water|drought|river|\blake|\bagua\b|sequ[ií]a|\br[ií]o\b|lago/, "drop", "park"],
    [/garden|plant|flower|seed|spring|jard[ií]n|planta|\bflor|semilla|huerto|primavera/, "flower", "park"],
    [/\btrees?\b|forest|jungle|bosque|[aá]rbol|selva/, "tree", "forest"],
    [/money|\bshop|store|\bbuy|market|\bsave\b|saving|dinero|tienda|comprar|mercado|ahorr/, "coins", "city"],
    [/\btime\b|clock|\blate\b|routine|reloj|\bhora|rutina|temprano/, "clock", "home"],
    [/school|class|teacher|\bexam|\btest\b|homework|student|escuela|\bclase|maestr|examen|tarea|sal[oó]n|alumn/, "backpack", "school"],
    [/library|\bbooks?\b|\bread(ing|s)?\b|\bstor(y|ies)\b|novel|biblioteca|libro|\bleer|cuento|lectura/, "book", "home"],
    [/sport|\bteam|\bwin\b|trophy|\brace\b|olymp|champion|deporte|equipo|carrera|ganar|campe[oó]n/, "trophy", "park"],
    [/\bcars?\b|traffic|\broad|coche|\bcarro|tr[aá]fico/, "car", "city"],
    [/monterrey|\bcity|\btown|street|neighbo|\bbus\b|ciudad|\bcalle|colonia|cami[oó]n/, "bus", "city"],
    [/\bsun\b|\bhot\b|summer|\bsol\b|calor|verano/, "sun", "park"],
    [/family|\bmom\b|\bdad\b|grandm|grandp|grandpa|brother|sister|\bhome\b|\bhouse|familia|mam[aá]|pap[aá]|abuel|herman|\bcasa\b/, "house", "home"],
    [/friend|helping|\blove\b|amig|ayud|amor|cari[ñn]o/, "heart", "park"]
  ];
  const TOPIC_SCENE = { weather: "park", school: "school", family: "home", food: "kitchen", animals: "park", sports: "park", environment: "park", science: "lab", art: "home", travel: "city", technology: "lab", health: "park", music: "home", history: "city", culture: "city", nature: "forest", space: "space", city: "city", holidays: "home", hobbies: "home", friends: "park", feelings: "home", jobs: "city", work: "city" };
  const NO_KID = { rocket: 1, whale: 1, skull: 1, pumpkin: 0, bus: 1, plane: 1, globe: 0, moon: 0 };

  function compose(key, title, text, topic) {
    const h = hash(key + title);
    const low = (title + " · " + (topic || "") + " · " + text).toLowerCase();
    const head = (title + " · " + (topic || "")).toLowerCase();
    const hits = [];
    const scan = (str) => RULES.forEach((r) => { if (r[0].test(str) && !hits.some((x) => x[1] === r[1])) hits.push(r); });
    scan(head); scan(low);
    const main = hits[0], second = hits[1];
    const sceneKey = (main && main[2]) || TOPIC_SCENE[(topic || "").toLowerCase()] || "soft";
    const mty = /monterrey|cerro de la silla|nuevo le[oó]n/.test(low);
    let body = (SCENES[sceneKey] || SCENES.soft)(h, mty);
    const motif = main ? main[1] : ["book", "star", "heart"][h % 3];
    const withKid = !NO_KID[motif] && (h % 10) < 7;
    const flip = (h >>> 4) % 2;
    const kx = flip ? 238 : 84, mx = withKid ? (flip ? 112 : 206) : 160;
    if (second && second[1] !== motif) {
      const sx = withKid ? (flip ? 280 : 40) : (flip ? 64 : 258);
      body += g(sx, 60, .48, M[second[1]]());
    }
    body += g(mx, 98, withKid ? 1 : 1.18, M[motif]());
    if (withKid) body += kid(kx, 96, h, .96);
    return `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${body}</svg>`;
  }
  window.MOVA_COVER = compose;

  /* ---------- Lecturas en inglés ---------- */
  const keepOwn = (art) => typeof art === "string" && /<image\b/.test(art);
  function applyEnglish() {
    if (typeof READINGS === "undefined" || typeof READING_ART !== "object") return;
    READINGS.forEach((r) => {
      if (keepOwn(READING_ART[r.id])) return;
      READING_ART[r.id] = compose(r.id, r.title || "", (r.description || "") + " " + (r.text ? r.text.slice(0, 2).join(" ") : ""), r.topic || "");
    });
  }
  applyEnglish();
  window.addEventListener("load", applyEnglish);

  /* ---------- Lecturas en español (se ilustran en pantalla) ---------- */
  function applySpanish() {
    if (!/^#\/lecturas/.test(location.hash)) return;
    document.querySelectorAll("article").forEach((card) => {
      if (card.hasAttribute("data-cover")) return;
      const a = card.querySelector('a[href^="#/lecturas/"]'); if (!a) return;
      const svg = [...card.querySelectorAll("svg")].find((s) => { const vb = (s.getAttribute("viewBox") || "").split(/[\s,]+/).map(Number); return vb.length === 4 && vb[2] >= 200; });
      if (!svg || /<image\b/.test(svg.outerHTML)) { card.setAttribute("data-cover", "0"); return; }
      card.setAttribute("data-cover", "1");
      const id = a.getAttribute("href").split("/").pop();
      const title = a.textContent.trim();
      const desc = [...card.querySelectorAll("p")].map((p) => p.textContent).join(" ");
      const art = compose(id, title, desc, "");
      const box = svg.parentNode;
      svg.outerHTML = art;
      const ns = box.querySelector("svg"); if (ns) { ns.style.width = "100%"; ns.style.height = "100%"; ns.style.display = "block"; }
    });
  }
  new MutationObserver(applySpanish).observe(document.body, { childList: true, subtree: true });
  window.addEventListener("hashchange", () => setTimeout(applySpanish, 0));
})();

router();
})();
