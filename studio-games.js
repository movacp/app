/* =====================================================================
   MOVA Learning Studio — JUEGOS (octubre 2026, lote 9)
   TOEFL Practice, Sentence Scramble y Word Quest por etapas.
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
