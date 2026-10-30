/* =====================================================================
   MOVA Learning Studio — LOTE 11 (octubre 2026)
   Flashcards completas con ilustraciones, Matemáticas (práctica y hojas
   imprimibles), Dictado y Lecturas de fluidez.
   Se carga después de studio-lote10.js.
   ===================================================================== */
(function () {
"use strict";

const N = "#1E3A5F", CO = "#E8846B", SK = "#6FA8D6", MU = "#E0B04A", MI = "#7FB89E", LI = "#B59AE0", W = "#FFFDFA";
const pic = (bg, inner) => `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="64" height="64" rx="14" fill="${bg}"/>${inner}</svg>`;
const st2 = `stroke="${N}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;

/* ---------- Ilustraciones: escuela ---------- */
const SCHOOL = {
  pencil: pic("#F6E9C6", `<g transform="rotate(-35 32 32)"><rect x="14" y="26" width="30" height="12" fill="${MU}" ${st2}/><path d="M44 26l10 6-10 6z" fill="#F3CFA8" ${st2}/><path d="M51 30.5l3 1.5-3 1.5z" fill="${N}"/><rect x="8" y="26" width="6" height="12" rx="2" fill="${CO}" ${st2}/></g>`),
  eraser: pic("#F8E1D9", `<g transform="rotate(-15 32 32)"><rect x="12" y="22" width="40" height="20" rx="4" fill="#F4B6C2" ${st2}/><rect x="12" y="22" width="16" height="20" rx="4" fill="${SK}" ${st2}/></g><path d="M18 50h10M34 52h6" stroke="${N}" stroke-width="2" stroke-linecap="round" opacity=".4"/>`),
  ruler: pic("#DDEEE5", `<g transform="rotate(-20 32 32)"><rect x="6" y="24" width="52" height="16" rx="3" fill="${MU}" ${st2}/>${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<path d="M${11 + i * 5.3} 24v${i % 2 ? 4 : 7}" stroke="${N}" stroke-width="1.6"/>`).join("")}</g>`),
  scissors: pic("#DCEAF6", `<path d="M22 20l24 22M42 20L18 42" stroke="${N}" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="46" r="6" fill="none" stroke="${CO}" stroke-width="4"/><circle cx="48" cy="46" r="6" fill="none" stroke="${CO}" stroke-width="4"/><circle cx="32" cy="31" r="2" fill="${N}"/>`),
  backpack: pic("#F8E1D9", `<path d="M24 16c0-5 16-5 16 0" fill="none" stroke="${N}" stroke-width="2.4"/><rect x="16" y="16" width="32" height="38" rx="10" fill="${CO}" ${st2}/><rect x="22" y="34" width="20" height="14" rx="4" fill="#F4B6C2" ${st2}/><path d="M22 26h20" stroke="${N}" stroke-width="2"/>`),
  crayons: pic("#F6E9C6", [[18, CO], [27, SK], [36, MI], [45, LI]].map(([x, c]) => `<rect x="${x - 3.5}" y="22" width="7" height="30" rx="2" fill="${c}" ${st2}/><path d="M${x - 3.5} 22l3.5-8 3.5 8z" fill="${c}" ${st2}/><path d="M${x - 3.5} 30h7M${x - 3.5} 44h7" stroke="${N}" stroke-width="1.4"/>`).join("")),
  glue: pic("#DDEEE5", `<rect x="22" y="22" width="20" height="32" rx="6" fill="${W}" ${st2}/><rect x="22" y="32" width="20" height="12" fill="${SK}"/><rect x="22" y="22" width="20" height="32" rx="6" fill="none" ${st2}/><path d="M27 22v-6h10v6M30 16l2-6 2 6" fill="${CO}" ${st2}/>`),
  notebook: pic("#E5DEF5", `<rect x="16" y="12" width="34" height="42" rx="4" fill="${LI}" ${st2}/><rect x="22" y="12" width="28" height="42" rx="3" fill="${W}" ${st2}/><path d="M28 24h16M28 31h16M28 38h12" stroke="${SK}" stroke-width="2" stroke-linecap="round"/>${[18, 26, 34, 42, 50].map((y) => `<circle cx="19" cy="${y}" r="1.8" fill="${N}"/>`).join("")}`),
  desk: pic("#F6E9C6", `<rect x="8" y="26" width="48" height="7" rx="2" fill="#C9845F" ${st2}/><path d="M12 33v20M52 33v20" stroke="${N}" stroke-width="3" stroke-linecap="round"/><rect x="34" y="35" width="16" height="10" rx="2" fill="#E0B04A" ${st2}/><rect x="16" y="18" width="14" height="8" rx="1.5" fill="${SK}" ${st2}/>`),
  chair: pic("#DCEAF6", `<rect x="20" y="10" width="24" height="22" rx="5" fill="${CO}" ${st2}/><rect x="16" y="32" width="32" height="7" rx="3" fill="${CO}" ${st2}/><path d="M20 39v15M44 39v15" stroke="${N}" stroke-width="3" stroke-linecap="round"/>`),
  clock: pic("#F8E1D9", `<circle cx="32" cy="32" r="21" fill="${W}" stroke="${N}" stroke-width="2.4"/>${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => `<rect x="31" y="13" width="2" height="4" fill="${N}" transform="rotate(${a} 32 32)"/>`).join("")}<path d="M32 32V20M32 32l9 5" stroke="${CO}" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="32" r="2.4" fill="${N}"/>`),
  board: pic("#DDEEE5", `<rect x="8" y="12" width="48" height="32" rx="3" fill="#2F5D50" stroke="#8A6A5C" stroke-width="3"/><text x="16" y="31" font-family="Poppins,sans-serif" font-size="11" font-weight="700" fill="${W}">ABC</text><path d="M38 24l4 4 7-8" stroke="${MU}" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M20 44l-4 10M44 44l4 10" stroke="${N}" stroke-width="2.4" stroke-linecap="round"/>`),
  teacher: pic("#E5DEF5", `<circle cx="32" cy="24" r="10" fill="#F3CFA8" ${st2}/><path d="M22 22c0-10 20-10 20 0-3-4-6-5-10-5s-7 1-10 5z" fill="#8A5A3C"/><rect x="24" y="21" width="7" height="5" rx="2" fill="none" stroke="${N}" stroke-width="1.6"/><rect x="33" y="21" width="7" height="5" rx="2" fill="none" stroke="${N}" stroke-width="1.6"/><path d="M14 56c0-10 8-18 18-18s18 8 18 18z" fill="${SK}" ${st2}/><path d="M28 30q4 3 8 0" stroke="${N}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`),
  computer: pic("#DCEAF6", `<rect x="10" y="14" width="44" height="28" rx="3" fill="${N}"/><rect x="13" y="17" width="38" height="22" rx="2" fill="${SK}"/><path d="M18 30l6-6 6 6 5-4 9 8" stroke="${W}" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M26 42l-2 8h16l-2-8" fill="#C7D3E0" ${st2}/><rect x="18" y="50" width="28" height="4" rx="2" fill="${N}"/>`),
  calculator: pic("#F6E9C6", `<rect x="16" y="8" width="32" height="48" rx="6" fill="${N}"/><rect x="21" y="13" width="22" height="10" rx="2" fill="#DDEEE5"/>${[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => `<rect x="${21 + c * 8}" y="${28 + r * 8}" width="6" height="6" rx="1.5" fill="${c === 2 ? CO : W}"/>`)).join("")}`),
  paint: pic("#F8E1D9", `<path d="M14 40c-4-14 8-28 22-26 12 2 18 12 14 20-3 6-10 2-12 7-2 6 4 10-4 11-10 2-17-3-20-12z" fill="${W}" ${st2}/>${[[24, 24, CO], [34, 21, MU], [43, 27, SK], [22, 36, MI]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="4" fill="${c}"/>`).join("")}`)
};

/* ---------- Ilustraciones: emociones (caras) ---------- */
function face(bg, skin, o) {
  const eyes = o.eyes || `<circle cx="25" cy="30" r="2.6" fill="${N}"/><circle cx="39" cy="30" r="2.6" fill="${N}"/>`;
  return pic(bg, `<circle cx="32" cy="34" r="20" fill="${skin}" ${st2}/>${o.brows || ""}${eyes}${o.mouth}${o.cheeks === false ? "" : `<circle cx="21" cy="38" r="2.8" fill="${CO}" opacity=".35"/><circle cx="43" cy="38" r="2.8" fill="${CO}" opacity=".35"/>`}${o.extra || ""}`);
}
const SKIN = "#F3CFA8", SKIN2 = "#D9A57C";
const mouth = (d, fill) => `<path d="${d}" fill="${fill || "none"}" stroke="${N}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
const FEEL = {
  happy: face("#F6E9C6", SKIN, { mouth: mouth("M24 39q8 9 16 0z", W) }),
  sad: face("#DCEAF6", SKIN, { mouth: mouth("M25 45q7-6 14 0"), brows: mouth("M21 24l7 3M43 24l-7 3"), extra: `<path d="M24 34q-2 5 0 6 2-1 0-6z" fill="${SK}"/>` }),
  angry: face("#F8E1D9", "#F0A98F", { mouth: mouth("M25 44q7-4 14 0"), brows: mouth("M20 23l9 4M44 23l-9 4"), cheeks: false }),
  scared: face("#E5DEF5", SKIN, { eyes: `<circle cx="25" cy="30" r="4" fill="${W}" stroke="${N}" stroke-width="2"/><circle cx="39" cy="30" r="4" fill="${W}" stroke="${N}" stroke-width="2"/><circle cx="25" cy="30" r="1.6" fill="${N}"/><circle cx="39" cy="30" r="1.6" fill="${N}"/>`, mouth: mouth("M26 45q3-4 6 0t6 0", "none"), brows: mouth("M21 22q4-3 7 0M36 22q4-3 7 0"), cheeks: false }),
  surprised: face("#DDEEE5", SKIN, { eyes: `<circle cx="25" cy="29" r="3.4" fill="${N}"/><circle cx="39" cy="29" r="3.4" fill="${N}"/>`, mouth: `<ellipse cx="32" cy="43" rx="4" ry="5" fill="${N}"/>`, brows: mouth("M21 21q4-4 8 0M35 21q4-4 8 0") }),
  tired: face("#E5DEF5", SKIN, { eyes: mouth("M21 31q4 3 8 0M35 31q4 3 8 0"), mouth: mouth("M27 43h10"), extra: `<text x="46" y="18" font-family="Poppins,sans-serif" font-size="9" font-weight="800" fill="${LI}">z</text><text x="51" y="11" font-family="Poppins,sans-serif" font-size="7" font-weight="800" fill="${LI}">z</text>` }),
  bored: face("#F3EFE8", SKIN2, { eyes: `<path d="M21 30h8M35 30h8" stroke="${N}" stroke-width="2.4" stroke-linecap="round"/><circle cx="26" cy="32" r="2" fill="${N}"/><circle cx="40" cy="32" r="2" fill="${N}"/>`, mouth: mouth("M26 43q6-2 12 1") }),
  excited: face("#FBE3EC", SKIN, { eyes: `<path d="M25 25l1.4 3 3.2.4-2.4 2.2.7 3.2-2.9-1.6-2.9 1.6.7-3.2-2.4-2.2 3.2-.4zM39 25l1.4 3 3.2.4-2.4 2.2.7 3.2-2.9-1.6-2.9 1.6.7-3.2-2.4-2.2 3.2-.4z" fill="${MU}" stroke="${N}" stroke-width="1"/>`, mouth: mouth("M23 38q9 12 18 0z", W) }),
  worried: face("#DCEAF6", SKIN2, { mouth: mouth("M25 44q3-3 7 0t7 0"), brows: mouth("M21 25l7-3M43 25l-7-3"), extra: `<path d="M48 22q2 4 0 6-2-2 0-6z" fill="${SK}"/>` }),
  proud: face("#F6E9C6", SKIN2, { eyes: mouth("M21 30q4-3 8 0M35 30q4-3 8 0"), mouth: mouth("M25 40q7 6 14 0"), extra: `<circle cx="32" cy="58" r="5" fill="${MU}" stroke="${N}" stroke-width="1.6"/><path d="M29 52l3 3 3-3" stroke="${CO}" stroke-width="2" fill="none"/>` }),
  shy: face("#FBE3EC", SKIN, { eyes: mouth("M22 32q3 2 6 0M36 32q3 2 6 0"), mouth: mouth("M29 42q3 2 6 0"), extra: `<circle cx="21" cy="38" r="4.5" fill="${CO}" opacity=".55"/><circle cx="43" cy="38" r="4.5" fill="${CO}" opacity=".55"/>`, cheeks: false }),
  confused: face("#DDEEE5", SKIN, { mouth: mouth("M25 44q4-3 7 0t7-2"), brows: mouth("M21 24l7 1M36 22l7-2"), extra: `<text x="46" y="20" font-family="Poppins,sans-serif" font-size="14" font-weight="800" fill="${SK}">?</text>` }),
  calm: face("#DDEEE5", SKIN2, { eyes: mouth("M21 31q4 3 8 0M35 31q4 3 8 0"), mouth: mouth("M27 41q5 4 10 0"), extra: `<path d="M6 54q6-4 12 0M46 54q6-4 12 0" stroke="${MI}" stroke-width="2.4" fill="none" stroke-linecap="round"/>` }),
  sick: face("#E3F1EA", "#CFE3C8", { eyes: mouth("M21 29l6 3M43 29l-6 3"), mouth: mouth("M26 44q6-3 12 0"), cheeks: false, extra: `<rect x="40" y="40" width="18" height="5" rx="2.5" fill="${W}" stroke="${N}" stroke-width="1.6" transform="rotate(-30 49 42)"/><path d="M42 47l-3 2" stroke="${CO}" stroke-width="2.4" stroke-linecap="round"/>` }),
  hungry: face("#F6E9C6", SKIN, { mouth: `<ellipse cx="32" cy="43" rx="6" ry="4" fill="${N}"/><path d="M29 41h6" stroke="${W}" stroke-width="1.6"/>`, extra: `<path d="M54 30c0 6-4 8-4 8M50 22v8M54 22v8M58 22v8" stroke="${N}" stroke-width="2" fill="none" stroke-linecap="round"/>` }),
  thirsty: face("#DCEAF6", SKIN, { mouth: mouth("M26 42q6 4 12 0", "none") + `<path d="M34 44q2 5 4 5" stroke="#E8846B" stroke-width="2.4" stroke-linecap="round"/>`, extra: `<path d="M52 18q4 6 4 9a4 4 0 0 1-8 0q0-3 4-9z" fill="${SK}" stroke="${N}" stroke-width="1.6"/>` })
};

/* ---------- Ilustraciones: verbos ---------- */
const VERB = {
  go: pic("#DDEEE5", `<path d="M10 54L28 14h8l18 40z" fill="#C7D3E0"/><path d="M32 18v6M32 30v6M32 42v8" stroke="${W}" stroke-width="3" stroke-linecap="round"/><path d="M44 14h10l-2 5 2 5H44z" fill="${CO}" ${st2}/><path d="M44 14v22" stroke="${N}" stroke-width="2"/>`),
  eat: pic("#F8E1D9", `<circle cx="32" cy="34" r="18" fill="${W}" ${st2}/><circle cx="32" cy="34" r="11" fill="#F6E9C6" ${st2}/><circle cx="28" cy="32" r="3" fill="${CO}"/><circle cx="36" cy="36" r="3" fill="${MI}"/><path d="M8 16v12a3 3 0 0 0 6 0V16M11 16v38M56 16c-4 0-5 8-5 14h5v24" stroke="${N}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`),
  drink: pic("#DCEAF6", `<path d="M20 18h24l-3 36H23z" fill="${W}" ${st2}/><path d="M21.5 30h21l-2 24H23.5z" fill="#F0A98F"/><path d="M20 18h24l-3 36H23z" fill="none" ${st2}/><path d="M36 22l6-16h6" stroke="${CO}" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="30" cy="40" r="2" fill="${W}" opacity=".7"/>`),
  see: pic("#E5DEF5", `<path d="M6 32q26-26 52 0-26 26-52 0z" fill="${W}" ${st2}/><circle cx="32" cy="32" r="11" fill="${SK}" stroke="${N}" stroke-width="2"/><circle cx="32" cy="32" r="5" fill="${N}"/><circle cx="35" cy="29" r="2" fill="${W}"/>`),
  write: pic("#F6E9C6", `<rect x="10" y="10" width="34" height="44" rx="3" fill="${W}" ${st2}/><path d="M16 20h20M16 27h20M16 34h12" stroke="${SK}" stroke-width="2" stroke-linecap="round"/><g transform="rotate(40 44 38)"><rect x="40" y="16" width="8" height="30" fill="${MU}" ${st2}/><path d="M40 46l4 8 4-8z" fill="#F3CFA8" ${st2}/></g>`),
  read: SCHOOL.notebook.replace("#E5DEF5", "#DDEEE5"),
  swim: pic("#DCEAF6", `<circle cx="26" cy="26" r="8" fill="#F3CFA8" ${st2}/><path d="M18 24q8-8 16 0z" fill="${CO}"/><path d="M34 30l14-8" stroke="#F3CFA8" stroke-width="5" stroke-linecap="round"/><path d="M4 38q7-6 14 0t14 0 14 0 14 0" stroke="${SK}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M4 48q7-6 14 0t14 0 14 0 14 0" stroke="#3E7DB4" stroke-width="4" fill="none" stroke-linecap="round"/>`),
  run: pic("#F8E1D9", `<path d="M10 40c0-8 6-12 14-12 4 0 6 4 12 6l16 4c4 1 4 10 0 10H14c-3 0-4-4-4-8z" fill="${CO}" ${st2}/><path d="M10 48h44" stroke="${N}" stroke-width="3" stroke-linecap="round"/><path d="M22 30l4 6M28 31l3 5" stroke="${W}" stroke-width="2" stroke-linecap="round"/><path d="M6 22h10M2 30h8" stroke="${N}" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>`),
  sleep: pic(N, `<path d="M38 14a18 18 0 1 0 12 30 15 15 0 0 1-12-30z" fill="#F6E9C6"/><text x="12" y="26" font-family="Poppins,sans-serif" font-size="12" font-weight="800" fill="${LI}">Z</text><text x="20" y="16" font-family="Poppins,sans-serif" font-size="8" font-weight="800" fill="${LI}">z</text>`),
  buy: pic("#FBE3EC", `<path d="M14 22h36l-3 32H17z" fill="${CO}" ${st2}/><path d="M24 26v-6a8 8 0 0 1 16 0v6" stroke="${N}" stroke-width="2.4" fill="none"/><circle cx="32" cy="38" r="7" fill="${W}"/><text x="32" y="42" text-anchor="middle" font-family="Poppins,sans-serif" font-size="10" font-weight="800" fill="${N}">$</text>`),
  make: pic("#F6E9C6", `<rect x="14" y="30" width="36" height="20" rx="4" fill="#F4B6C2" ${st2}/><rect x="18" y="20" width="28" height="12" rx="4" fill="${W}" ${st2}/><path d="M14 40h36" stroke="${N}" stroke-width="2"/><rect x="31" y="10" width="2.6" height="10" fill="${SK}"/><path d="M32.3 6q3 3 0 5-3-2 0-5z" fill="${MU}"/>`),
  take: pic("#DCEAF6", `<rect x="10" y="20" width="44" height="30" rx="6" fill="${N}"/><rect x="22" y="14" width="14" height="8" rx="3" fill="${N}"/><circle cx="32" cy="35" r="10" fill="${SK}" stroke="${W}" stroke-width="3"/><circle cx="32" cy="35" r="4" fill="${N}"/><circle cx="47" cy="26" r="2.4" fill="${MU}"/>`),
  give: pic("#E5DEF5", `<rect x="12" y="26" width="40" height="28" rx="3" fill="${LI}" ${st2}/><rect x="10" y="20" width="44" height="9" rx="2" fill="${CO}" ${st2}/><path d="M32 20v34" stroke="${MU}" stroke-width="5"/><path d="M32 20c-6-10-14-8-12-2 1 3 7 3 12 2zM32 20c6-10 14-8 12-2-1 3-7 3-12 2z" fill="${MU}" ${st2}/>`),
  speak: pic("#DDEEE5", `<rect x="8" y="12" width="36" height="26" rx="9" fill="${MI}" ${st2}/><path d="M18 38l-4 10 12-10z" fill="${MI}" ${st2}/><path d="M16 22h20M16 29h12" stroke="${W}" stroke-width="2.6" stroke-linecap="round"/><rect x="34" y="34" width="22" height="16" rx="6" fill="${W}" ${st2}/><circle cx="40" cy="42" r="1.6" fill="${N}"/><circle cx="45" cy="42" r="1.6" fill="${N}"/><circle cx="50" cy="42" r="1.6" fill="${N}"/>`),
  drive: pic("#F8E1D9", `<path d="M8 40v-8l6-12h28l10 12 4 2v6z" fill="${CO}" ${st2}/><path d="M18 22h10v10H14zM32 22h8l7 10H32z" fill="#DCEAF6" ${st2}/><circle cx="18" cy="42" r="6" fill="${N}"/><circle cx="46" cy="42" r="6" fill="${N}"/><circle cx="18" cy="42" r="2.4" fill="${W}"/><circle cx="46" cy="42" r="2.4" fill="${W}"/>`),
  fly: pic("#DCEAF6", `<path d="M8 36l40-12c6-2 10 2 6 5L14 42z" fill="${W}" ${st2}/><path d="M26 30l-6-14h6l12 10M28 38l-4 12h6l10-14" fill="${SK}" ${st2}/><path d="M8 36l-2-10h5l5 8" fill="${CO}" ${st2}/><circle cx="12" cy="14" r="5" fill="${W}"/><circle cx="18" cy="12" r="6" fill="${W}"/>`),
  sing: pic("#FBE3EC", `<path d="M22 44V16l26-6v28" stroke="${N}" stroke-width="3" fill="none" stroke-linejoin="round"/><ellipse cx="17" cy="45" rx="7" ry="5" fill="${CO}"/><ellipse cx="43" cy="39" rx="7" ry="5" fill="${LI}"/><path d="M22 22l26-6" stroke="${N}" stroke-width="3"/>`),
  break: pic("#F3EFE8", `<path d="M10 30h20l-3 6 4 4-3 6H14c-2-6-4-10-4-16z" fill="${SK}" ${st2}/><path d="M34 30h20c0 6-2 10-4 16H36l3-6-4-4z" fill="${SK}" ${st2}/><path d="M28 18l2 6M36 16l-1 7M20 20l4 5" stroke="${CO}" stroke-width="2.4" stroke-linecap="round"/>`),
  find: pic("#F6E9C6", `<circle cx="27" cy="27" r="14" fill="#DCEAF6" stroke="${N}" stroke-width="3"/><path d="M37 37l14 14" stroke="${N}" stroke-width="6" stroke-linecap="round"/><path d="M20 24q3-6 9-6" stroke="${W}" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M44 12l1.6 3.4 3.6.4-2.7 2.4.8 3.6-3.3-1.9-3.3 1.9.8-3.6-2.7-2.4 3.6-.4z" fill="${MU}"/>`),
  sit: SCHOOL.chair.replace("#DCEAF6", "#E5DEF5"),
  come: pic("#DDEEE5", `<rect x="16" y="10" width="32" height="44" rx="2" fill="#C9845F" ${st2}/><rect x="16" y="10" width="20" height="44" fill="${W}" ${st2}/><circle cx="31" cy="34" r="2" fill="${N}"/><path d="M42 34H56M50 28l-6 6 6 6" stroke="${CO}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  think: pic("#E5DEF5", `<circle cx="22" cy="40" r="10" fill="#F3CFA8" ${st2}/><circle cx="26" cy="38" r="1.6" fill="${N}"/><circle cx="36" cy="26" r="3" fill="${W}" stroke="${N}" stroke-width="1.6"/><path d="M38 20c-4-10 10-14 12-8 6-4 12 4 6 8 4 6-4 10-8 6-4 4-12 0-10-6z" fill="${W}" ${st2}/><path d="M46 13a4 4 0 0 1 4 5" stroke="${MU}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`)
};

/* ---------- Ilustraciones: direcciones (phrasal verbs) ---------- */
const arrow = (bg, d, c) => pic(bg, `<path d="${d}" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);
const PART = {
  up: arrow("#DDEEE5", "M32 50V14M20 26l12-12 12 12", MI),
  down: arrow("#DCEAF6", "M32 14v36M20 38l12 12 12-12", SK),
  out: pic("#F8E1D9", `<rect x="10" y="20" width="26" height="28" rx="4" fill="none" stroke="${N}" stroke-width="2.6" stroke-dasharray="5 4"/><path d="M24 34h30M46 26l8 8-8 8" stroke="${CO}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  on: pic("#F6E9C6", `<rect x="14" y="22" width="36" height="20" rx="10" fill="${MU}" ${st2}/><circle cx="40" cy="32" r="7" fill="${W}" ${st2}/><text x="22" y="36" font-family="Poppins,sans-serif" font-size="9" font-weight="800" fill="${N}">ON</text>`),
  off: pic("#F3EFE8", `<rect x="14" y="22" width="36" height="20" rx="10" fill="#C7D3E0" ${st2}/><circle cx="24" cy="32" r="7" fill="${W}" ${st2}/><text x="33" y="36" font-family="Poppins,sans-serif" font-size="9" font-weight="800" fill="${N}">OFF</text>`),
  back: arrow("#E5DEF5", "M46 44V30a10 10 0 0 0-10-10H18M26 12l-8 8 8 8", LI),
  over: arrow("#DDEEE5", "M10 46q22-40 44 0M46 38l8 8 2-11", MI),
  away: pic("#DCEAF6", `<circle cx="16" cy="32" r="6" fill="${N}"/><path d="M26 32h28M46 24l8 8-8 8" stroke="${SK}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 22h8M28 42h8" stroke="${SK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>`),
  in: pic("#F8E1D9", `<rect x="28" y="20" width="26" height="28" rx="4" fill="none" stroke="${N}" stroke-width="2.6" stroke-dasharray="5 4"/><path d="M10 34h32M34 26l8 8-8 8" stroke="${CO}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  after: pic("#F6E9C6", `<circle cx="20" cy="32" r="7" fill="${MU}" ${st2}/><circle cx="44" cy="32" r="7" fill="${CO}" ${st2}/><path d="M29 32h6" stroke="${N}" stroke-width="2.4" stroke-dasharray="2 3" stroke-linecap="round"/>`)
};

/* ---------- Mazos ---------- */
const STAGE_NAME = { kids: "MOVA Kids", children: "MOVA Children", teens: "MOVA Teens" };
const DECKS = [
  { id: "first-words", title: "First Words", stage: "kids", level: "Pre-A1", c: "coral", kind: "pic",
    sub: "Eight first words with pictures.",
    cards: [["cat", "gato"], ["sun", "sol"], ["apple", "manzana"], ["book", "libro"], ["fish", "pez"], ["star", "estrella"], ["tree", "árbol"], ["house", "casa"]].map(([w, es]) => ({ w, es, art: () => (typeof ILLUSTRATIONS !== "undefined" && ILLUSTRATIONS[w]) || "" })) },
  { id: "school-and-classroom", title: "School and Classroom", stage: "kids", level: "A1", c: "sky", kind: "pic",
    sub: "Everything in your classroom.",
    cards: [["pencil", "lápiz"], ["eraser", "goma"], ["ruler", "regla"], ["scissors", "tijeras"], ["backpack", "mochila"], ["crayons", "crayolas"], ["glue", "pegamento"], ["notebook", "cuaderno"], ["desk", "escritorio / pupitre"], ["chair", "silla"], ["clock", "reloj"], ["board", "pizarrón"], ["teacher", "maestra / maestro"], ["computer", "computadora"], ["calculator", "calculadora"], ["paint", "pintura"]].map(([w, es]) => ({ w, es, art: () => SCHOOL[w] })) },
  { id: "feelings", title: "Feelings and Emotions", stage: "children", level: "A1", c: "coral", kind: "pic",
    sub: "How do you feel today?",
    cards: [["happy", "feliz"], ["sad", "triste"], ["angry", "enojado"], ["scared", "asustado"], ["surprised", "sorprendido"], ["tired", "cansado"], ["bored", "aburrido"], ["excited", "emocionado"], ["worried", "preocupado"], ["proud", "orgulloso"], ["shy", "tímido"], ["confused", "confundido"], ["calm", "tranquilo"], ["sick", "enfermo"], ["hungry", "con hambre"], ["thirsty", "con sed"]].map(([w, es]) => ({ w, es, art: () => FEEL[w], ex: `I feel ${w}.` })) },
  { id: "irregular-verbs", title: "Irregular Verbs", stage: "children", level: "A2", c: "mustard", kind: "verb",
    sub: "Base form, past and past participle.",
    cards: [["go", "went", "gone", "ir"], ["eat", "ate", "eaten", "comer"], ["drink", "drank", "drunk", "beber"], ["see", "saw", "seen", "ver"], ["write", "wrote", "written", "escribir"], ["read", "read", "read", "leer"], ["swim", "swam", "swum", "nadar"], ["run", "ran", "run", "correr"], ["sleep", "slept", "slept", "dormir"], ["buy", "bought", "bought", "comprar"], ["make", "made", "made", "hacer"], ["take", "took", "taken", "tomar"], ["give", "gave", "given", "dar"], ["speak", "spoke", "spoken", "hablar"], ["drive", "drove", "driven", "manejar"], ["fly", "flew", "flown", "volar"], ["sing", "sang", "sung", "cantar"], ["break", "broke", "broken", "romper"], ["find", "found", "found", "encontrar"], ["sit", "sat", "sat", "sentarse"], ["come", "came", "come", "venir"], ["think", "thought", "thought", "pensar"]].map(([w, past, pp, es]) => ({ w, es, past, pp, art: () => VERB[w] })) },
  { id: "phrasal-verbs", title: "Phrasal Verbs", stage: "teens", level: "B1", c: "mint", kind: "phrasal",
    sub: "The most common phrasal verbs, with examples.",
    cards: [
      ["wake up", "up", "stop sleeping", "despertarse", "I wake up at 6:30 every day."],
      ["give up", "up", "stop trying", "rendirse", "Don’t give up, you’re almost there."],
      ["look up", "up", "search for information", "buscar (en un diccionario o internet)", "Look up the word in the dictionary."],
      ["sit down", "down", "take a seat", "sentarse", "Please sit down and open your books."],
      ["calm down", "down", "relax, become less upset", "calmarse", "Calm down, it’s only a test."],
      ["find out", "out", "discover information", "averiguar, enterarse", "I found out the truth yesterday."],
      ["work out", "out", "exercise; solve", "hacer ejercicio; resolver", "She works out three times a week."],
      ["turn on", "on", "start a machine or light", "encender, prender", "Turn on the lights, please."],
      ["go on", "on", "continue", "continuar", "Go on, I’m listening."],
      ["turn off", "off", "stop a machine or light", "apagar", "Turn off your phone during the exam."],
      ["take off", "off", "remove clothes; leave the ground", "quitarse; despegar", "The plane took off on time."],
      ["come back", "back", "return", "regresar", "Come back before dark."],
      ["give back", "back", "return something", "devolver", "Give back the book when you finish."],
      ["get over", "over", "recover from", "superar, recuperarse de", "It took her weeks to get over the flu."],
      ["run away", "away", "escape", "huir, escaparse", "The dog ran away from home."],
      ["fill in", "in", "complete a form", "llenar (un formulario)", "Fill in your name and address."],
      ["look after", "after", "take care of", "cuidar", "He looks after his little sister."],
      ["get up", "up", "leave your bed", "levantarse", "What time do you get up?"]
    ].map(([w, p, meaning, es, ex]) => ({ w, es, meaning, ex, art: () => PART[p] })) },
  { id: "academic-words", title: "Academic Words", stage: "teens", level: "B2", c: "sky", kind: "word",
    sub: "Key words for exams, essays and the TOEFL.",
    cards: [
      ["analyze", "verb", "examine something in detail", "analizar", "We need to analyze the results carefully."],
      ["evidence", "noun", "facts that show something is true", "evidencia, pruebas", "There is strong evidence for this theory."],
      ["significant", "adjective", "important or large enough to notice", "significativo", "There was a significant change in temperature."],
      ["approach", "noun", "a way of dealing with something", "enfoque", "Her approach to the problem was creative."],
      ["assume", "verb", "believe something without proof", "suponer", "Don’t assume the answer is easy."],
      ["concept", "noun", "an idea", "concepto", "Gravity is a difficult concept for children."],
      ["consistent", "adjective", "always the same", "constante, coherente", "His results were consistent across all tests."],
      ["derive", "verb", "get something from a source", "derivar, obtener", "Many English words derive from Latin."],
      ["establish", "verb", "start or create something permanent", "establecer", "The university was established in 1943."],
      ["factor", "noun", "something that influences a result", "factor", "Sleep is an important factor in learning."],
      ["indicate", "verb", "show or suggest", "indicar", "The data indicate a clear trend."],
      ["interpret", "verb", "explain the meaning of something", "interpretar", "How do you interpret this poem?"],
      ["method", "noun", "a way of doing something", "método", "This method is faster and cheaper."],
      ["occur", "verb", "happen", "ocurrir", "Earthquakes occur frequently in this region."],
      ["require", "verb", "need", "requerir", "The course requires a lot of reading."],
      ["source", "noun", "where something comes from", "fuente", "Always cite your sources in an essay."],
      ["specific", "adjective", "exact and clear", "específico", "Give a specific example to support your idea."],
      ["consequence", "noun", "a result of an action", "consecuencia", "Pollution is a consequence of rapid growth."]
    ].map(([w, pos, meaning, es, ex]) => ({ w, es, pos, meaning, ex })) }
];

/* ---------- Estilos ---------- */
document.head.insertAdjacentHTML("beforeend", `<style>
.dk-art{height:120px;border-radius:16px;display:flex;align-items:center;justify-content:center;gap:0;position:relative;overflow:hidden}
.dk-art[data-c="coral"]{background:var(--coral-soft)}.dk-art[data-c="sky"]{background:var(--sky-soft)}.dk-art[data-c="mustard"]{background:var(--mustard-soft)}.dk-art[data-c="mint"]{background:var(--mint-soft)}
.dk-art .cd{width:64px;height:84px;border-radius:12px;background:var(--surface);box-shadow:0 6px 16px rgba(30,58,95,.14);display:grid;place-items:center;padding:6px;margin:0 -8px}
.dk-art .cd:nth-child(1){transform:rotate(-10deg) translateY(6px)}.dk-art .cd:nth-child(3){transform:rotate(10deg) translateY(6px)}.dk-art .cd:nth-child(2){position:relative;z-index:1}
.dk-art .cd svg{width:52px;height:52px}
.dk-art .cd b{font-family:Poppins,sans-serif;font-size:11px;color:var(--navy);text-align:center;line-height:1.1}
.fcx-stage{display:grid;place-items:center;margin:18px 0 10px}
.fcx{width:min(330px,86vw);aspect-ratio:3/4;perspective:1200px;border:0;background:none;padding:0;cursor:pointer}
.fcx-inner{position:relative;display:block;width:100%;height:100%;transition:transform .55s cubic-bezier(.2,.7,.2,1);transform-style:preserve-3d}
.fcx.is-flipped .fcx-inner{transform:rotateY(180deg)}
.fcx-face{position:absolute;inset:0;border-radius:26px;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:26px 22px;background:var(--surface);box-shadow:0 8px 0 var(--fc-c,#E8846B),0 22px 44px rgba(30,58,95,.16);text-align:center}
.fcx-face .pic svg{width:min(220px,60vw);height:auto;display:block}
.fcx-face .word{font-family:Poppins,sans-serif;font-weight:800;font-size:clamp(28px,8vw,38px);color:var(--navy);line-height:1.05}
.fcx-face .pos{font-size:13px;font-weight:700;color:var(--fc-d,#C95F45);background:color-mix(in srgb,var(--fc-c) 20%,transparent);padding:4px 12px;border-radius:999px}
.fcx-face .ex{font-size:15.5px;line-height:1.5;color:var(--ink-2);max-width:26ch}
.fcx-face .ex mark{background:none;color:var(--fc-d);font-weight:700}
.fcx-face .tap{position:absolute;bottom:16px;font-size:12px;color:var(--ink-3);font-weight:600}
.fcx-back{transform:rotateY(180deg);background:var(--navy);color:#F6F1E8;box-shadow:0 8px 0 var(--fc-c),0 22px 44px rgba(30,58,95,.2)}
.fcx-back .word{color:#fff}
.fcx-back .es{font-size:19px;font-weight:600;color:var(--fc-c)}
.fcx-back .mean{font-size:16px;line-height:1.5;opacity:.92;max-width:26ch}
.fcx-back .ex{color:#DCE4EF}
.vforms{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%}
.vforms div{background:rgba(255,255,255,.1);border-radius:14px;padding:10px 6px}
.vforms small{display:block;font-size:10.5px;letter-spacing:.02em;opacity:.75;margin-bottom:4px}
.vforms b{font-size:19px;color:#fff}
.fcx-prog{height:8px;border-radius:999px;background:var(--surface-2);overflow:hidden;margin:6px 0 0}
.fcx-prog i{display:block;height:100%;background:var(--fc-c);transition:width .3s ease}
.fcx-done{text-align:center;padding:30px 20px;border-radius:24px;background:var(--surface);box-shadow:var(--shadow)}
.fcx-done h2{margin:0 0 6px}
</style>`);

const COLORS = { coral: ["#E8846B", "#C95F45"], sky: ["#6FA8D6", "#3E7DB4"], mustard: ["#E0B04A", "#A97A0B"], mint: ["#7FB89E", "#3F8F6A"] };
const artOf = (c) => (c.art ? c.art() : "");
const markEx = (ex, w) => esc(ex).replace(new RegExp("(" + w.split(" ")[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\w*(?:\\s\\w+)?)", "i"), "<mark>$1</mark>");

function deckTile(d) {
  const sample = d.cards.slice(0, 3);
  const mini = sample.map((c) => `<span class="cd">${c.art ? artOf(c) : `<b>${esc(c.w)}</b>`}</span>`).join("");
  return `<article class="item">
    <div class="dk-art" data-c="${d.c}" aria-hidden="true">${mini}</div>
    <div class="item-top"><span class="chip">${esc(STAGE_NAME[d.stage])}</span>${lvlChip(d.level)}</div>
    <h3 class="item-title"><a class="stretch" href="#/flashcards/${d.id}">${esc(d.title)}</a></h3>
    <div class="item-meta">${d.cards.length} cards · ${esc(d.sub)}</div>
  </article>`;
}
function viewDecks() {
  return {
    title: "Flashcards",
    html: `
    <section class="page-head wrap">
      <a class="back" href="#/learn">${ico("back", 18)} Learn</a>
      <h1>Flashcards</h1>
      <p class="lead">Toca la tarjeta para voltearla y escuchar la palabra. Marca las que ya sabes y repite las que te faltan.</p>
    </section>
    <section class="wrap"><div class="grid cols">${DECKS.map(deckTile).join("")}</div></section>`
  };
}
function faces(d, c) {
  if (d.kind === "pic") return [
    `<span class="pic">${artOf(c)}</span><span class="tap">Tap to see the word</span>`,
    `<span class="word">${esc(c.w)}</span><span class="es">${esc(c.es)}</span>${c.ex ? `<span class="ex">${esc(c.ex)}</span>` : ""}`];
  if (d.kind === "verb") return [
    `<span class="pic">${artOf(c)}</span><span class="word">${esc(c.w)}</span><span class="tap">Tap to see the past forms</span>`,
    `<span class="word">${esc(c.w)}</span><span class="es">${esc(c.es)}</span><span class="vforms"><div><small>Base</small><b>${esc(c.w)}</b></div><div><small>Past</small><b>${esc(c.past)}</b></div><div><small>Participle</small><b>${esc(c.pp)}</b></div></span>`];
  if (d.kind === "phrasal") return [
    `<span class="pic">${artOf(c)}</span><span class="word">${esc(c.w)}</span><span class="ex">${markEx(c.ex, c.w)}</span><span class="tap">Tap to see the meaning</span>`,
    `<span class="word">${esc(c.w)}</span><span class="mean">${esc(c.meaning)}</span><span class="es">${esc(c.es)}</span>`];
  return [
    `<span class="pos">${esc(c.pos)}</span><span class="word">${esc(c.w)}</span><span class="ex">${markEx(c.ex, c.w)}</span><span class="tap">Tap to see the meaning</span>`,
    `<span class="word">${esc(c.w)}</span><span class="mean">${esc(c.meaning)}</span><span class="es">${esc(c.es)}</span>`];
}
function viewDeckX(id) {
  const d = DECKS.find((x) => x.id === id);
  if (!d) return viewNotFound("We couldn’t find that deck.", "#/flashcards", "See all decks");
  const [c1, c2] = COLORS[d.c];
  return {
    title: d.title,
    html: `
    <section class="narrow" style="--fc-c:${c1};--fc-d:${c2}">
      <div class="game-head"><a class="back" href="#/flashcards">${ico("back", 18)} Flashcards</a><h1>${esc(d.title)}</h1></div>
      <div class="stats"><div class="stat"><small>Card</small><b id="fc-n">1/${d.cards.length}</b></div><div class="stat"><small>I knew it</small><b id="fc-ok">0</b></div></div>
      <div class="fcx-prog"><i id="fc-bar" style="width:0"></i></div>
      <div id="fc-area">
        <div class="fcx-stage"><button class="fcx" id="fc" type="button" aria-label="Flip the card"><span class="fcx-inner"><span class="fcx-face" id="fc-front"></span><span class="fcx-face fcx-back" id="fc-back"></span></span></button></div>
        <div class="game-controls" style="justify-content:center"><button class="btn btn-ghost" type="button" id="fc-again">Practice again</button><button class="btn btn-primary" type="button" id="fc-knew">I knew it</button></div>
      </div>
    </section>`,
    mount(root) {
      let queue = shuffle(d.cards), i = 0, ok = 0, total = d.cards.length;
      const card = $("#fc", root);
      const speak = (w) => { try { const u = new SpeechSynthesisUtterance(w); u.lang = "en-US"; u.rate = .85; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} };
      const render = () => {
        const c = queue[i], [f, b] = faces(d, c);
        card.classList.remove("is-flipped");
        $("#fc-front", root).innerHTML = f; $("#fc-back", root).innerHTML = b;
        $("#fc-n", root).textContent = `${Math.min(ok + 1, total)}/${total}`;
        $("#fc-bar", root).style.width = `${(ok / total) * 100}%`;
      };
      card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
        const c = queue[i];
        if (card.classList.contains("is-flipped")) speak(d.kind === "verb" ? `${c.w}, ${c.past}, ${c.pp}` : c.w);
      });
      const next = (knew) => {
        if (knew) { ok++; $("#fc-ok", root).textContent = ok; } else queue.push(queue[i]);
        i++;
        if (ok >= total) {
          $("#fc-bar", root).style.width = "100%";
          $("#fc-area", root).innerHTML = `<div class="fcx-done"><h2>Deck complete</h2><p>You know all ${total} cards in ${esc(d.title)}.</p><div class="game-controls" style="justify-content:center"><a class="btn btn-ghost" href="#/flashcards">Other decks</a><button class="btn btn-primary" type="button" id="fc-restart">Practice again</button></div></div>`;
          $("#fc-restart", root).addEventListener("click", () => router());
          return;
        }
        render();
      };
      $("#fc-knew", root).addEventListener("click", () => next(true));
      $("#fc-again", root).addEventListener("click", () => next(false));
      render();
    }
  };
}
ROUTES.flashcards = (p) => (p[0] ? viewDeckX(p[0]) : viewDecks());

/* =====================================================================
   MATEMÁTICAS — práctica por tema y nivel, y hojas imprimibles
   Cada generador devuelve { q, opts: [correcta, d1, d2, d3], steps: [] , art? , open? }
   ===================================================================== */
const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const P = (a) => a[Math.floor(Math.random() * a.length)];
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
const simp = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return [n / g, d / g]; };
const fr = (n, d) => (d === 1 ? `${n}` : `<span class="mfr"><i>${n}</i><i>${d}</i></span>`);
const frT = (n, d) => (d === 1 ? `${n}` : `${n}/${d}`);
const sg = (x) => (x < 0 ? `(${x})` : `${x}`);
const sgP = (x) => (x < 0 ? `(−${-x})` : `(+${x})`);
const minus = (s) => String(s).replace(/-/g, "−");
const uniq = (arr) => { const out = []; arr.forEach((x) => { const k = String(x).replace(/<[^>]+>/g, "|"); if (!out.some((y) => String(y).replace(/<[^>]+>/g, "|") === k)) out.push(x); }); return out; };
function opts4(correct, cands, fallback) {
  let o = uniq([correct, ...cands]);
  let guard = 0;
  while (o.length < 4 && guard++ < 40) o = uniq([...o, fallback()]);
  return o.slice(0, 4);
}
const near = (x, spread) => () => { let y = x; while (y === x || (x >= 0 && y < 0)) y = x + R(-spread, spread); return y; };
const fracNear = (n, d) => () => { const a = simp(Math.max(1, n + R(-2, 2)), Math.max(2, d + P([0, 0, 1, -1, 2]))); return fr(a[0], a[1]); };

/* ---------- Ilustraciones ---------- */
function pie(n, d, color) {
  const cx = 60, cy = 60, r = 48; let s = "";
  for (let i = 0; i < d; i++) {
    const a0 = (i / d) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / d) * 2 * Math.PI - Math.PI / 2;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    s += `<path d="M${cx} ${cy}L${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${d === 1 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}Z" fill="${i < n ? color || "#E8846B" : "#FFFDFA"}" stroke="#1E3A5F" stroke-width="2.2" stroke-linejoin="round"/>`;
  }
  return `<svg viewBox="0 0 120 120" class="mart" aria-hidden="true">${s}</svg>`;
}
function bar(n, d, color) {
  const w = 220 / d; let s = "";
  for (let i = 0; i < d; i++) s += `<rect x="${10 + i * w}" y="20" width="${w}" height="40" fill="${i < n ? color || "#6FA8D6" : "#FFFDFA"}" stroke="#1E3A5F" stroke-width="2.2"/>`;
  return `<svg viewBox="0 0 240 80" class="mart wide" aria-hidden="true">${s}</svg>`;
}
const lbl = (x, y, t, a) => `<text x="${x}" y="${y}" text-anchor="${a || "middle"}" font-family="Poppins,sans-serif" font-size="13" font-weight="700" fill="#1E3A5F">${t}</text>`;
function rectArt(w, h, unit) {
  const k = Math.min(160 / w, 90 / h), W = w * k, H = h * k, x = (240 - W) / 2, y = (130 - H) / 2;
  return `<svg viewBox="0 0 240 140" class="mart wide" aria-hidden="true"><rect x="${x}" y="${y}" width="${W}" height="${H}" rx="3" fill="#DCEAF6" stroke="#1E3A5F" stroke-width="2.4"/>${lbl(120, y - 6, `${w} ${unit}`)}${lbl(x + W + 6, y + H / 2 + 4, `${h} ${unit}`, "start")}</svg>`;
}
function triArt(b, h, unit) {
  return `<svg viewBox="0 0 240 140" class="mart wide" aria-hidden="true"><path d="M50 118H190L120 24Z" fill="#F6E9C6" stroke="#1E3A5F" stroke-width="2.4" stroke-linejoin="round"/><path d="M120 24V118" stroke="#E8846B" stroke-width="2" stroke-dasharray="5 4"/><path d="M120 108h10v10" fill="none" stroke="#E8846B" stroke-width="1.6"/>${lbl(120, 134, `${b} ${unit}`)}${lbl(126, 74, `${h} ${unit}`, "start")}</svg>`;
}
function circArt(r, unit) {
  return `<svg viewBox="0 0 240 140" class="mart wide" aria-hidden="true"><circle cx="120" cy="70" r="56" fill="#DDEEE5" stroke="#1E3A5F" stroke-width="2.4"/><path d="M120 70H176" stroke="#E8846B" stroke-width="2.4"/><circle cx="120" cy="70" r="3" fill="#1E3A5F"/>${lbl(148, 64, `r = ${r} ${unit}`)}</svg>`;
}
function rightTri(a, b, c, unit, hide) {
  const L = (v, k) => (k === hide ? "?" : `${v} ${unit}`);
  return `<svg viewBox="0 0 240 150" class="mart wide" aria-hidden="true"><path d="M50 126H190V30Z" fill="#E5DEF5" stroke="#1E3A5F" stroke-width="2.4" stroke-linejoin="round"/><path d="M178 126v-12h12" fill="none" stroke="#1E3A5F" stroke-width="1.6"/>${lbl(120, 143, L(a, "a"))}${lbl(196, 82, L(b, "b"), "start")}${lbl(108, 72, L(c, "c"), "end")}</svg>`;
}
function triAngles(a, b) {
  return `<svg viewBox="0 0 240 140" class="mart wide" aria-hidden="true"><path d="M40 118H200L90 26Z" fill="#F8E1D9" stroke="#1E3A5F" stroke-width="2.4" stroke-linejoin="round"/>${lbl(62, 110, `${a}°`)}${lbl(170, 110, `${b}°`)}${lbl(92, 52, "?")}</svg>`;
}
function prismArt(l, w, h, unit) {
  return `<svg viewBox="0 0 240 150" class="mart wide" aria-hidden="true"><path d="M50 60h110v70H50z" fill="#DCEAF6" stroke="#1E3A5F" stroke-width="2.2"/><path d="M50 60l30-28h110l-30 28z" fill="#EAF2FA" stroke="#1E3A5F" stroke-width="2.2" stroke-linejoin="round"/><path d="M160 60l30-28v70l-30 28z" fill="#BCD8EF" stroke="#1E3A5F" stroke-width="2.2" stroke-linejoin="round"/>${lbl(105, 146, `${l} ${unit}`)}${lbl(196, 72, `${h} ${unit}`, "start")}${lbl(62, 44, `${w} ${unit}`, "end")}</svg>`;
}

/* ---------- Fracciones ---------- */
const FRAC = {
  1: [
    () => { const d = P([2, 3, 4, 5, 6, 8]), n = R(1, d - 1); return { art: pie(n, d), q: "¿Qué fracción del círculo está coloreada?", opts: opts4(fr(n, d), [fr(d, n), fr(d - n, d), fr(n, d + 1)], fracNear(n, d)), steps: [`El círculo está dividido en ${d} partes iguales: ese es el denominador (abajo).`, `Hay ${n} partes coloreadas: ese es el numerador (arriba).`, `La fracción es ${frT(n, d)}.`] }; },
    () => { const d = P([4, 5, 6, 8, 10]), n = R(1, d - 1); return { art: bar(n, d), q: "¿Qué fracción de la barra está coloreada?", opts: opts4(fr(n, d), [fr(d - n, d), fr(n, d - n), fr(d, n)], fracNear(n, d)), steps: [`La barra tiene ${d} partes iguales.`, `${n} están coloreadas.`, `Respuesta: ${frT(n, d)}.`] }; },
    () => { const d = P([4, 5, 6, 7, 8, 9]), a = R(1, d - 2), b = R(1, d - a - 1); return { q: `Suma: ${fr(a, d)} + ${fr(b, d)} =`, opts: opts4(fr(a + b, d), [fr(a + b, d + d), fr(a * b, d), fr(a + b + 1, d)], near(0, 2)), steps: ["Cuando los denominadores son iguales, se queda el mismo denominador.", `Solo se suman los numeradores: ${a} + ${b} = ${a + b}.`, `Resultado: ${frT(a + b, d)}. ¡No se suman los denominadores!`] }; },
    () => { const d = P([2, 3, 4, 5]), k = P([2, 3, 4, 5]), total = d * k, n = R(1, d - 1); return { q: `¿Cuánto es ${fr(n, d)} de ${total} manzanas?`, opts: opts4(`${n * k}`, [`${k}`, `${total - n * k}`, `${n * k + k}`], near(n * k, 5)), steps: [`Primero divide entre el denominador: ${total} ÷ ${d} = ${k}.`, `Luego multiplica por el numerador: ${k} × ${n} = ${n * k}.`, `${frT(n, d)} de ${total} es ${n * k}.`] }; }
  ],
  2: [
    () => { const a = R(1, 5), b = R(a + 1, 9), k = R(2, 5); return { q: `Completa la fracción equivalente: ${fr(a, b)} = ${fr("?", b * k)}`, opts: opts4(`${a * k}`, [`${a + k}`, `${b * k - a}`, `${a * k + 1}`], near(a * k, 4)), steps: [`El denominador se multiplicó por ${k}: ${b} × ${k} = ${b * k}.`, `Al numerador le hacemos lo mismo: ${a} × ${k} = ${a * k}.`, `${frT(a, b)} = ${frT(a * k, b * k)}.`] }; },
    () => { const [a, b] = simp(R(1, 6), R(2, 9)); const k = R(2, 6); const [n, d] = [a * k, b * k]; if (a >= b) return FRAC[2][1](); const g = gcd(n, d); let sp = 2; while (sp < g && g % sp) sp++; return { q: `Simplifica: ${fr(n, d)}`, opts: opts4(fr(a, b), [sp < g ? fr(n / sp, d / sp) : fr(a + 1, b), fr(b, a), fr(n - 1 > 0 ? n - 1 : n + 1, d - 1)], fracNear(a, b)), steps: [`Busca el número más grande que divide a ${n} y a ${d}: es ${gcd(n, d)}.`, `${n} ÷ ${gcd(n, d)} = ${a} y ${d} ÷ ${gcd(n, d)} = ${b}.`, `${frT(n, d)} = ${frT(a, b)}.`] }; },
    () => { const pairs = [[2, 3], [2, 4], [3, 4], [2, 5], [3, 6], [4, 6], [2, 6], [3, 5]]; const [b, d] = P(pairs), a = 1, c = R(1, d - 1); const m = lcm(b, d), num = a * (m / b) + c * (m / d); const [rn, rd] = simp(num, m); return { q: `Suma: ${fr(a, b)} + ${fr(c, d)} =`, opts: opts4(fr(rn, rd), [fr(a + c, b + d), fr(a + c, m), fr(num + 1, m)], fracNear(rn, rd)), steps: [`Los denominadores son distintos. Buscamos un denominador común: ${m}.`, `${frT(a, b)} = ${frT(a * (m / b), m)} y ${frT(c, d)} = ${frT(c * (m / d), m)}.`, `Sumamos numeradores: ${a * (m / b)} + ${c * (m / d)} = ${num}. Resultado: ${frT(num, m)}${rd !== m ? ` = ${frT(rn, rd)}` : ""}.`] }; },
    () => { const d = P([5, 6, 7, 8, 9, 10]), a = R(Math.ceil(d / 2), d - 1), b = R(1, a - 1); const [rn, rd] = simp(a - b, d); return { q: `Resta: ${fr(a, d)} − ${fr(b, d)} =`, opts: opts4(fr(rn, rd), [fr(a - b, 0 + d * 2), fr(a + b, d), fr(Math.max(1, a - b - 1), d)], fracNear(rn, rd)), steps: ["Mismo denominador: se queda igual.", `Restamos numeradores: ${a} − ${b} = ${a - b}.`, `Resultado: ${frT(a - b, d)}${rd !== d ? ` = ${frT(rn, rd)}` : ""}.`] }; },
    () => { const items = [["una pizza", 8], ["una pastel", 12]]; const d = P([3, 4, 5, 6, 8]), n = R(2, d - 1), m = R(1, n - 1); return { q: `Mateo comió ${fr(m, d)} de una pizza y Sofía comió ${fr(n - m, d)}. ¿Qué fracción de la pizza comieron entre los dos?`, opts: opts4(fr(...simp(n, d)), [fr(n, d * 2), fr(d - n, d), fr(n + 1, d)], fracNear(n, d)), steps: ["“Entre los dos” significa sumar.", `${frT(m, d)} + ${frT(n - m, d)} = ${frT(n, d)}.`, simp(n, d)[1] !== d ? `Simplificado: ${frT(...simp(n, d))}.` : "No se puede simplificar más."] }; }
  ],
  3: [
    () => { const a = R(1, 7), b = R(2, 9), c = R(1, 7), d = R(2, 9); const [rn, rd] = simp(a * c, b * d); return { q: `Multiplica: ${fr(a, b)} × ${fr(c, d)} =`, opts: opts4(fr(rn, rd), [fr(...simp(a * d, b * c)), fr(a + c, b + d), fr(a * c, b + d)], fracNear(rn, rd)), steps: ["Para multiplicar fracciones se multiplica en línea recta.", `Numeradores: ${a} × ${c} = ${a * c}. Denominadores: ${b} × ${d} = ${b * d}.`, `${frT(a * c, b * d)}${rd !== b * d ? ` = ${frT(rn, rd)}` : ""}.`] }; },
    () => { const a = R(1, 7), b = R(2, 9), c = R(1, 7), d = R(2, 9); const [rn, rd] = simp(a * d, b * c); return { q: `Divide: ${fr(a, b)} ÷ ${fr(c, d)} =`, opts: opts4(fr(rn, rd), [fr(...simp(a * c, b * d)), fr(...simp(b * c, a * d)), fr(a + d, b + c)], fracNear(rn, rd)), steps: ["Para dividir fracciones se multiplica en cruz (o se invierte la segunda y se multiplica).", `${a} × ${d} = ${a * d} arriba, ${b} × ${c} = ${b * c} abajo.`, `${frT(a * d, b * c)}${rd !== b * c || rn !== a * d ? ` = ${frT(rn, rd)}` : ""}.`] }; },
    () => { const w = R(1, 5), d = R(2, 8), n = R(1, d - 1); return { q: `Convierte el número mixto a fracción impropia: ${w}${fr(n, d)}`, opts: opts4(fr(w * d + n, d), [fr(w + n, d), fr(w * n + d, d), fr(w * d + n, n)], fracNear(w * d + n, d)), steps: [`Multiplica el entero por el denominador: ${w} × ${d} = ${w * d}.`, `Súmale el numerador: ${w * d} + ${n} = ${w * d + n}.`, `El denominador se queda igual: ${frT(w * d + n, d)}.`] }; },
    () => { const pairs = [[3, 4], [2, 3], [5, 6], [3, 8], [4, 5], [5, 12]]; const [x, y] = P(pairs), [u, v] = P(pairs); const m = lcm(y, v), num = x * (m / y) - u * (m / v); const [rn, rd] = simp(num, m); return { q: `Resta: ${fr(x, y)} − ${fr(u, v)} =`, opts: opts4(minus(fr(rn, rd)), [minus(fr(x - u, Math.abs(y - v) || 1)), minus(fr(x - u, m)), minus(fr(num + 1, m))], () => minus(fracNear(Math.abs(rn) + 1, rd)())), steps: [`Denominador común: ${m}.`, `${frT(x, y)} = ${frT(x * (m / y), m)} y ${frT(u, v)} = ${frT(u * (m / v), m)}.`, minus(`${x * (m / y)} − ${u * (m / v)} = ${num}. Resultado: ${frT(num, m)}${rd !== m ? ` = ${frT(rn, rd)}` : ""}.`)] }; }
  ],
  4: [
    () => { const a = 1, b = P([2, 3, 4]), c = 1, d = P([3, 4, 6]), e = R(2, 5), f = R(2, 7); const m = lcm(b, d), s = a * (m / b) + c * (m / d); const [rn, rd] = simp(s * e, m * f); return { q: `Resuelve: (${fr(a, b)} + ${fr(c, d)}) × ${fr(e, f)} =`, opts: opts4(fr(rn, rd), [fr(...simp(a * e + c, b * f + d)), fr(...simp(s, m)), fr(...simp(s * f, m * e))], fracNear(rn, rd)), steps: [`Primero el paréntesis: ${frT(a, b)} + ${frT(c, d)} = ${frT(s, m)}.`, `Luego multiplica: ${frT(s, m)} × ${frT(e, f)} = ${frT(s * e, m * f)}.`, `Simplificado: ${frT(rn, rd)}.`] }; },
    () => { const n = R(2, 9), d = R(n + 1, 12), x = R(2, 6); const [rn, rd] = simp(n * x, d); return { q: `Resuelve la ecuación: x ÷ ${x} = ${fr(n, d)}. ¿Cuánto vale x?`, opts: opts4(fr(rn, rd), [fr(...simp(n, d * x)), fr(...simp(n + x, d)), fr(...simp(d * x, n))], fracNear(rn, rd)), steps: [`Para despejar x, multiplicamos ambos lados por ${x}.`, `x = ${frT(n, d)} × ${x} = ${frT(n * x, d)}.`, `Simplificado: ${frT(rn, rd)}.`] }; },
    () => { const b = P([2, 3, 4, 5]), d = P([3, 4, 5, 6]), a = R(1, b - 1), c = R(1, d - 1); const L = a / b, Rr = c / d; if (L === Rr) return FRAC[4][2](); return { q: `¿Cuál es mayor: ${fr(a, b)} o ${fr(c, d)}?`, opts: opts4(L > Rr ? fr(a, b) : fr(c, d), [L > Rr ? fr(c, d) : fr(a, b), "Son iguales", "No se puede saber"], () => "Son iguales"), steps: [`Multiplica en cruz: ${a} × ${d} = ${a * d} y ${c} × ${b} = ${c * b}.`, `El producto mayor corresponde a la fracción mayor.`, `Mayor: ${L > Rr ? frT(a, b) : frT(c, d)}.`] }; }
  ]
};

/* ---------- Leyes de los signos ---------- */
const SIGN = {
  3: [
    () => { const a = R(-15, 15) || 3, b = R(-15, 15) || -4; return { q: `Suma: ${sgP(a)} + ${sgP(b)} =`, opts: opts4(minus(a + b), [minus(-(a + b)), minus(a - b), minus(Math.abs(a) + Math.abs(b))], () => minus(a + b + R(-4, 4) || 1)), steps: a * b >= 0 ? ["Signos iguales: se suman los números y se conserva el signo.", minus(`${Math.abs(a)} + ${Math.abs(b)} = ${Math.abs(a + b)}, con signo ${a + b < 0 ? "negativo" : "positivo"}.`), minus(`Resultado: ${a + b}.`)] : ["Signos diferentes: se restan los números y se conserva el signo del número más grande.", `${Math.max(Math.abs(a), Math.abs(b))} − ${Math.min(Math.abs(a), Math.abs(b))} = ${Math.abs(a + b)}.`, minus(`El número más grande es ${Math.abs(a) > Math.abs(b) ? a : b}, así que el resultado es ${a + b}.`)] }; },
    () => { const a = R(-12, 12) || 5, b = R(-12, 12) || -6; return { q: `Resta: ${sgP(a)} − ${sgP(b)} =`, opts: opts4(minus(a - b), [minus(a + b), minus(b - a), minus(-(a - b) + (a - b === 0 ? 2 : 0))], () => minus(a - b + (R(-4, 4) || 2))), steps: ["Restar es sumar el opuesto: cambia el signo del segundo número.", minus(`${sgP(a)} − ${sgP(b)} = ${sgP(a)} + ${sgP(-b)}.`), minus(`Resultado: ${a - b}.`)] }; },
    () => { const a = R(2, 12) * P([1, -1]), b = R(2, 12) * P([1, -1]); return { q: minus(`Multiplica: ${sg(a)} × ${sg(b)} =`), opts: opts4(minus(a * b), [minus(-a * b), minus(a + b), minus(Math.abs(a) * Math.abs(b) + 1)], () => minus(a * b + R(-6, 6) || 1)), steps: ["Ley de los signos: (+)(+) = +, (−)(−) = +, (+)(−) = −, (−)(+) = −.", `${Math.abs(a)} × ${Math.abs(b)} = ${Math.abs(a * b)}.`, minus(`Los signos son ${a * b > 0 ? "iguales, el resultado es positivo" : "diferentes, el resultado es negativo"}: ${a * b}.`)] }; },
    () => { const b = R(2, 9) * P([1, -1]), q = R(2, 9) * P([1, -1]), a = b * q; return { q: minus(`Divide: ${sg(a)} ÷ ${sg(b)} =`), opts: opts4(minus(q), [minus(-q), minus(a - b), minus(q * 2)], () => minus(q + (R(-3, 3) || 1))), steps: ["En la división se usa la misma ley de los signos que en la multiplicación.", `${Math.abs(a)} ÷ ${Math.abs(b)} = ${Math.abs(q)}.`, minus(`Signos ${q > 0 ? "iguales: positivo" : "diferentes: negativo"}. Resultado: ${q}.`)] }; }
  ],
  4: [
    () => { const b = R(-5, -2), e = P([2, 3, 4]); const v = b ** e; return { q: minus(`Calcula: (${b})<sup>${e}</sup> =`), opts: opts4(minus(v), [minus(-v), minus(b * e), minus(-(Math.abs(b) ** e))], () => minus(v + R(-5, 5) || 3)), steps: [minus(`(${b})<sup>${e}</sup> significa multiplicar ${b} por sí mismo ${e} veces.`), `Un negativo elevado a una potencia ${e % 2 ? "impar da resultado negativo" : "par da resultado positivo"}.`, minus(`Resultado: ${v}.`)] }; },
    () => { const a = R(2, 6) * -1, b = R(2, 6) * -1, c = R(2, 5) * -2, d = 2; const v = a * b - c / d; return { q: minus(`Resuelve: (${a})(${b}) − (${c}) ÷ ${d} =`), opts: opts4(minus(v), [minus(a * b + c / d), minus((a * b - c) / d), minus(-a * b - c / d)], () => minus(v + (R(-4, 4) || 2))), steps: [minus(`Primero multiplicaciones y divisiones: (${a})(${b}) = ${a * b} y (${c}) ÷ ${d} = ${c / d}.`), minus(`Luego la resta: ${a * b} − (${c / d}) = ${a * b} + ${-c / d}.`), minus(`Resultado: ${v}.`)] }; },
    () => { const a = R(-9, -2), b = R(2, 9), c = R(-9, -2); const v = a - b - c; return { q: minus(`Resuelve: ${a} − ${b} − (${c}) =`), opts: opts4(minus(v), [minus(a - b + c), minus(a + b - c), minus(-v)], () => minus(v + (R(-3, 3) || 1))), steps: [minus(`Menos por menos es más: − (${c}) = + ${-c}.`), minus(`${a} − ${b} = ${a - b}.`), minus(`${a - b} + ${-c} = ${v}.`)] }; }
  ]
};

/* ---------- Jerarquía de operaciones ---------- */
const PEMDAS = "Orden: 1) paréntesis, 2) potencias, 3) multiplicaciones y divisiones de izquierda a derecha, 4) sumas y restas de izquierda a derecha.";
const HIER = {
  2: [
    () => { const a = R(2, 20), b = R(2, 9), c = R(2, 9); return { q: `Resuelve: ${a} + ${b} × ${c} =`, opts: opts4(`${a + b * c}`, [`${(a + b) * c}`, `${a * b + c}`, `${a + b + c}`], near(a + b * c, 6)), steps: [PEMDAS, `Primero la multiplicación: ${b} × ${c} = ${b * c}.`, `Luego la suma: ${a} + ${b * c} = ${a + b * c}.`] }; },
    () => { const d = R(2, 6), q = R(2, 9), a = R(2, 9), b = R(2, 9); const c = d * q; return { q: `Resuelve: ${a} × ${b} − ${c} ÷ ${d} =`, opts: opts4(`${a * b - q}`, [`${(a * b - c) / d}`, `${a * (b - c) / d}`, `${a * b + q}`].map((x) => (Number.isInteger(+x) ? x : `${a * b - q + 3}`)), near(a * b - q, 6)), steps: [PEMDAS, `${a} × ${b} = ${a * b} y ${c} ÷ ${d} = ${q}.`, `${a * b} − ${q} = ${a * b - q}.`] }; },
    () => { const a = R(10, 40), b = R(2, 9), c = R(2, 5), d = R(1, 9); return { q: `Resuelve: ${a} − ${b} × ${c} + ${d} =`, opts: opts4(`${a - b * c + d}`, [`${(a - b) * c + d}`, `${a - b * (c + d)}`, `${a - b * c - d}`], near(a - b * c + d, 6)), steps: [PEMDAS, `Primero ${b} × ${c} = ${b * c}.`, `De izquierda a derecha: ${a} − ${b * c} = ${a - b * c}, y ${a - b * c} + ${d} = ${a - b * c + d}.`] }; }
  ],
  3: [
    () => { const a = R(2, 9), b = R(2, 9), c = R(2, 6), d = R(1, 20); return { q: `Resuelve: (${a} + ${b}) × ${c} − ${d} =`, opts: opts4(`${(a + b) * c - d}`, [`${a + b * c - d}`, `${(a + b) * (c - d)}`, `${(a + b) * c + d}`], near((a + b) * c - d, 6)), steps: [PEMDAS, `Paréntesis: ${a} + ${b} = ${a + b}.`, `${a + b} × ${c} = ${(a + b) * c}; ${(a + b) * c} − ${d} = ${(a + b) * c - d}.`] }; },
    () => { const a = R(2, 6), b = R(2, 5), c = R(2, 9); return { q: `Resuelve: ${c} + ${a}<sup>2</sup> × ${b} =`, opts: opts4(`${c + a * a * b}`, [`${(c + a * a) * b}`, `${c + a * 2 * b}`, `${(c + a) ** 2 * b}`], near(c + a * a * b, 8)), steps: [PEMDAS, `Potencia: ${a}<sup>2</sup> = ${a * a}.`, `${a * a} × ${b} = ${a * a * b}; ${c} + ${a * a * b} = ${c + a * a * b}.`] }; },
    () => { const a = R(2, 5), b = R(1, 4), c = R(2, 4), d = R(2, 9); const v = d * (a + b) ** 2 / 1 - c * d; return { q: `Resuelve: ${d} × (${a} + ${b})<sup>2</sup> − ${c} × ${d} =`, opts: opts4(`${v}`, [`${d * (a * a + b * b) - c * d}`, `${(d * (a + b)) ** 2 - c * d}`, `${d * (a + b) * 2 - c * d}`], near(v, 10)), steps: [PEMDAS, `Paréntesis: ${a} + ${b} = ${a + b}; potencia: ${a + b}<sup>2</sup> = ${(a + b) ** 2}.`, `${d} × ${(a + b) ** 2} = ${d * (a + b) ** 2}; ${c} × ${d} = ${c * d}; ${d * (a + b) ** 2} − ${c * d} = ${v}.`] }; }
  ],
  4: [
    () => { const a = R(2, 9), b = R(2, 5), c = R(1, 4), d = R(c + 2, c + 6); const inner = c - d; const v = -a + b * inner * inner; return { q: minus(`Resuelve: −${a} + ${b} × (${c} − ${d})<sup>2</sup> =`), opts: opts4(minus(v), [minus(-a + b * inner * 2), minus((-a + b) * inner * inner), minus(-a - b * inner * inner)], () => minus(v + (R(-5, 5) || 2))), steps: [PEMDAS, minus(`Paréntesis: ${c} − ${d} = ${inner}; potencia: (${inner})<sup>2</sup> = ${inner * inner} (negativo al cuadrado es positivo).`), minus(`${b} × ${inner * inner} = ${b * inner * inner}; −${a} + ${b * inner * inner} = ${v}.`)] }; },
    () => { const a = R(2, 6), b = R(2, 6), c = R(1, 5); const v = (a * a - b * b) / (a - b === 0 ? 1 : 1) ; const x = a + b + 1, y = R(2, 4); const val = (x * y + c) - (x - c) * 2; return { q: `Resuelve: [${x} × ${y} + ${c}] − 2(${x} − ${c}) =`, opts: opts4(`${val}`, [`${x * y + c - x - c}`, `${(x * y + c - 2) * (x - c)}`, `${x * y + c - 2 * x - c}`], near(val, 8)), steps: [PEMDAS, `Corchete: ${x} × ${y} + ${c} = ${x * y + c}. Paréntesis: ${x} − ${c} = ${x - c}.`, `${x * y + c} − 2 × ${x - c} = ${x * y + c} − ${2 * (x - c)} = ${val}.`] }; }
  ]
};

/* ---------- Geometría ---------- */
const GEO = {
  1: [
    () => { const w = R(3, 12), h = R(2, 9); return { art: rectArt(w, h, "cm"), q: "¿Cuál es el perímetro del rectángulo?", opts: opts4(`${2 * (w + h)} cm`, [`${w + h} cm`, `${w * h} cm`, `${2 * w + h} cm`], () => `${2 * (w + h) + (R(-4, 4) || 2)} cm`), steps: ["El perímetro es la suma de todos los lados.", `${w} + ${h} + ${w} + ${h}.`, `= ${2 * (w + h)} cm.`] }; },
    () => { const s = R(2, 12); return { art: rectArt(s, s, "m"), q: "¿Cuál es el perímetro del cuadrado?", opts: opts4(`${4 * s} m`, [`${s * s} m`, `${2 * s} m`, `${3 * s} m`], () => `${4 * s + (R(-3, 3) || 1)} m`), steps: ["El cuadrado tiene 4 lados iguales.", `${s} × 4.`, `= ${4 * s} m.`] }; },
    () => { const sh = P([["triángulo", 3], ["cuadrado", 4], ["pentágono", 5], ["hexágono", 6], ["octágono", 8]]); return { q: `¿Cuántos lados tiene un ${sh[0]}?`, opts: opts4(`${sh[1]}`, [`${sh[1] + 1}`, `${sh[1] - 1}`, `${sh[1] + 2}`], near(sh[1], 3)), steps: [`El ${sh[0]} tiene ${sh[1]} lados.`] }; }
  ],
  2: [
    () => { const w = R(3, 14), h = R(2, 10); return { art: rectArt(w, h, "cm"), q: "¿Cuál es el área del rectángulo?", opts: opts4(`${w * h} cm²`, [`${2 * (w + h)} cm²`, `${w + h} cm²`, `${w * h / 2} cm²`], () => `${w * h + (R(-6, 6) || 3)} cm²`), steps: ["Área del rectángulo = base × altura.", `${w} × ${h}.`, `= ${w * h} cm².`] }; },
    () => { const b = R(2, 10) * 2, h = R(3, 12); return { art: triArt(b, h, "cm"), q: "¿Cuál es el área del triángulo?", opts: opts4(`${(b * h) / 2} cm²`, [`${b * h} cm²`, `${b + h} cm²`, `${(b + h) * 2} cm²`], () => `${(b * h) / 2 + (R(-5, 5) || 2)} cm²`), steps: ["Área del triángulo = (base × altura) ÷ 2.", `${b} × ${h} = ${b * h}.`, `${b * h} ÷ 2 = ${(b * h) / 2} cm².`] }; },
    () => { const a = R(30, 80), b = R(30, 150 - a - 10); const c = 180 - a - b; return { art: triAngles(a, b), q: "¿Cuánto mide el ángulo que falta?", opts: opts4(`${c}°`, [`${360 - a - b}°`, `${a + b}°`, `${90 - Math.min(a, b) > 0 ? 90 - Math.min(a, b) : c + 10}°`], () => `${c + (R(-10, 10) || 5)}°`), steps: ["Los ángulos interiores de un triángulo suman 180°.", `${a}° + ${b}° = ${a + b}°.`, `180° − ${a + b}° = ${c}°.`] }; }
  ],
  3: [
    () => { const r = R(2, 10); const A = +(3.14 * r * r).toFixed(2); return { art: circArt(r, "cm"), q: "¿Cuál es el área del círculo? (usa π = 3.14)", opts: opts4(`${A} cm²`, [`${+(2 * 3.14 * r).toFixed(2)} cm²`, `${+(3.14 * r * 2).toFixed(2) * 2} cm²`, `${+(3.14 * r).toFixed(2)} cm²`], () => `${+(A + R(1, 9)).toFixed(2)} cm²`), steps: ["Área del círculo = π × r².", `r² = ${r} × ${r} = ${r * r}.`, `3.14 × ${r * r} = ${A} cm².`] }; },
    () => { const l = R(2, 9), w = R(2, 6), h = R(2, 8); return { art: prismArt(l, w, h, "cm"), q: "¿Cuál es el volumen del prisma rectangular?", opts: opts4(`${l * w * h} cm³`, [`${l + w + h} cm³`, `${2 * (l * w + l * h + w * h)} cm³`, `${l * w} cm³`], () => `${l * w * h + (R(-8, 8) || 4)} cm³`), steps: ["Volumen = largo × ancho × alto.", `${l} × ${w} = ${l * w}.`, `${l * w} × ${h} = ${l * w * h} cm³.`] }; },
    () => { const [a, b, c] = P([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]]); return { art: rightTri(a, b, "?", "cm", "c"), q: "Usa el teorema de Pitágoras: ¿cuánto mide la hipotenusa?", opts: opts4(`${c} cm`, [`${a + b} cm`, `${a * a + b * b} cm`, `${c + 1} cm`], () => `${c + (R(-3, 3) || 2)} cm`), steps: ["c² = a² + b².", `${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c}.`, `c = √${c * c} = ${c} cm.`] }; },
    () => { const r = R(2, 12); const C = +(2 * 3.14 * r).toFixed(2); return { art: circArt(r, "m"), q: "¿Cuál es el perímetro (circunferencia) del círculo? (π = 3.14)", opts: opts4(`${C} m`, [`${+(3.14 * r * r).toFixed(2)} m`, `${+(3.14 * r).toFixed(2)} m`, `${+(C + 3.14).toFixed(2)} m`], () => `${+(C + R(1, 6)).toFixed(2)} m`), steps: ["Circunferencia = 2 × π × r (o π × diámetro).", `2 × 3.14 × ${r}.`, `= ${C} m.`] }; }
  ],
  4: [
    () => { const [a, b, c] = P([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [7, 24, 25]]); return { art: rightTri(a, b, c, "cm", "b"), q: "¿Cuánto mide el cateto que falta?", opts: opts4(`${b} cm`, [`${c - a} cm`, `${c + a} cm`, `${b + 2} cm`], () => `${b + (R(-3, 3) || 1)} cm`), steps: ["b² = c² − a².", `${c}² − ${a}² = ${c * c} − ${a * a} = ${b * b}.`, `b = √${b * b} = ${b} cm.`] }; },
    () => { const B = R(8, 16), b = R(3, B - 2), h = R(3, 10) * 2 / 2; const A = ((B + b) * h) / 2; return { q: `Un trapecio tiene base mayor ${B} cm, base menor ${b} cm y altura ${h} cm. ¿Cuál es su área?`, opts: opts4(`${A} cm²`, [`${(B + b) * h} cm²`, `${B * b * h / 2} cm²`, `${(B + b + h)} cm²`], () => `${A + (R(-6, 6) || 3)} cm²`), steps: ["Área del trapecio = (B + b) × h ÷ 2.", `(${B} + ${b}) × ${h} = ${(B + b) * h}.`, `${(B + b) * h} ÷ 2 = ${A} cm².`] }; },
    () => { const n = P([5, 6, 8, 10, 12]); const s = (n - 2) * 180; return { q: `¿Cuánto suman los ángulos interiores de un polígono de ${n} lados?`, opts: opts4(`${s}°`, [`${n * 180}°`, `${360}°`, `${(n - 1) * 180}°`], () => `${s + 180}°`), steps: ["Suma de ángulos interiores = (n − 2) × 180°.", `(${n} − 2) × 180° = ${n - 2} × 180°.`, `= ${s}°.`] }; }
  ]
};

/* ---------- Problemas razonados ---------- */
const NAMES = ["Valeria", "Mateo", "Sofía", "Santiago", "Regina", "Emilio", "Camila", "Diego", "Ximena", "Leonardo"];
const PROB = {
  1: [
    () => { const n = P(NAMES), a = R(8, 40), b = R(3, 25); return { q: `${n} tiene ${a} estampas y su tía le regala ${b} más. ¿Cuántas estampas tiene ahora?`, opts: opts4(`${a + b}`, [`${a - b}`, `${a + b + 10}`, `${a + b - 1}`], near(a + b, 5)), steps: ["“Le regalan más” significa que tiene más: es una suma.", `${a} + ${b}.`, `= ${a + b} estampas.`] }; },
    () => { const n = P(NAMES), a = R(20, 60), b = R(5, a - 5); return { q: `En la biblioteca había ${a} libros. ${n} se llevó ${b} libros prestados para su grupo. ¿Cuántos quedaron?`, opts: opts4(`${a - b}`, [`${a + b}`, `${a - b + 10}`, `${b}`], near(a - b, 5)), steps: ["“Se llevó” significa que quedaron menos: es una resta.", `${a} − ${b}.`, `= ${a - b} libros.`] }; },
    () => { const k = R(2, 6), e = R(3, 8); return { q: `Hay ${k} cajas y cada caja tiene ${e} crayolas. ¿Cuántas crayolas hay en total?`, opts: opts4(`${k * e}`, [`${k + e}`, `${k * e + e}`, `${k * e - k}`], near(k * e, 5)), steps: ["Grupos iguales: es una multiplicación (o suma repetida).", `${k} × ${e}.`, `= ${k * e} crayolas.`] }; }
  ],
  2: [
    () => { const n = P(NAMES), p = R(12, 45), k = R(3, 9); return { q: `${n} compra ${k} cuadernos de $${p} cada uno. ¿Cuánto paga en total?`, opts: opts4(`$${p * k}`, [`$${p + k}`, `$${p * (k - 1)}`, `$${p * k + p}`], () => `$${p * k + (R(-20, 20) || 10)}`), steps: ["Mismo precio varias veces: multiplicación.", `${k} × $${p}.`, `= $${p * k}.`] }; },
    () => { const g = R(3, 8), each = R(4, 12), extra = R(1, g - 1); const total = g * each + extra; return { q: `La maestra tiene ${total} dulces y los reparte en partes iguales entre ${g} niños. ¿Cuántos le tocan a cada uno y cuántos sobran?`, opts: opts4(`${each} y sobran ${extra}`, [`${each + 1} y sobran 0`, `${each} y sobran ${extra + 1}`, `${each - 1} y sobran ${extra + g}`], () => `${each + 2} y sobran ${extra}`), steps: ["Repartir en partes iguales es dividir.", `${total} ÷ ${g} = ${each}, porque ${g} × ${each} = ${g * each}.`, `${total} − ${g * each} = ${extra}: sobran ${extra}.`] }; },
    () => { const n = P(NAMES), pay = P([200, 500]), a = R(35, 90), b = R(20, 80); const ch = pay - a - b; return { q: `${n} paga con un billete de $${pay} una playera de $${a} y una gorra de $${b}. ¿Cuánto le dan de cambio?`, opts: opts4(`$${ch}`, [`$${a + b}`, `$${pay - a}`, `$${ch + 10}`], () => `$${ch + (R(-15, 15) || 5)}`), steps: [`Primero suma lo que compró: $${a} + $${b} = $${a + b}.`, `Luego resta del billete: $${pay} − $${a + b}.`, `Cambio: $${ch}.`] }; }
  ],
  3: [
    () => { const p = P([200, 350, 480, 600, 800, 1200]), d = P([10, 15, 20, 25, 30, 40]); const off = (p * d) / 100; return { q: `Unos tenis cuestan $${p} y tienen ${d}% de descuento. ¿Cuánto se paga?`, opts: opts4(`$${p - off}`, [`$${off}`, `$${p - d}`, `$${p + off}`], () => `$${p - off + (R(-20, 20) || 10)}`), steps: [`${d}% de $${p} = ${p} × ${d} ÷ 100 = $${off}.`, "El descuento se resta del precio.", `$${p} − $${off} = $${p - off}.`] }; },
    () => { const a = R(2, 6), pa = R(15, 40), b = R(7, 15); return { q: `Si ${a} kg de manzanas cuestan $${pa * a}, ¿cuánto cuestan ${b} kg?`, opts: opts4(`$${pa * b}`, [`$${pa * a + b}`, `$${pa * a * b}`, `$${pa * (b - a)}`], () => `$${pa * b + (R(-20, 20) || 10)}`), steps: [`Regla de tres: primero el precio de 1 kg: $${pa * a} ÷ ${a} = $${pa}.`, `Luego multiplica por ${b} kg.`, `$${pa} × ${b} = $${pa * b}.`] }; },
    () => { const v = P([60, 80, 90, 100, 120]), t = P([2, 3, 4, 5]); return { q: `Un autobús va a ${v} km/h. ¿Qué distancia recorre en ${t} horas?`, opts: opts4(`${v * t} km`, [`${v + t} km`, `${v / t} km`, `${v * (t + 1)} km`], () => `${v * t + (R(-30, 30) || 20)} km`), steps: ["Distancia = velocidad × tiempo.", `${v} × ${t}.`, `= ${v * t} km.`] }; },
    () => { const total = P([20, 25, 30, 40]), part = R(3, total - 3); const pct = (part / total) * 100; if (!Number.isInteger(pct)) return PROB[3][3](); return { q: `En un grupo de ${total} alumnos, ${part} usan lentes. ¿Qué porcentaje usa lentes?`, opts: opts4(`${pct}%`, [`${part}%`, `${100 - pct}%`, `${pct + 5}%`], () => `${pct + (R(-10, 10) || 5)}%`), steps: ["Porcentaje = parte ÷ total × 100.", `${part} ÷ ${total} = ${part / total}.`, `${part / total} × 100 = ${pct}%.`] }; }
  ],
  4: [
    () => { const x = R(3, 20), a = R(2, 5), b = R(1, 15); return { q: `${a === 2 ? "El doble" : a === 3 ? "El triple" : a + " veces"} de un número más ${b} es ${a * x + b}. ¿Cuál es el número?`, opts: opts4(`${x}`, [`${(a * x + b) / a}`.includes(".") ? `${x + 1}` : `${(a * x + b) / a}`, `${a * x}`, `${x + b}`], near(x, 4)), steps: [`Plantea la ecuación: ${a}x + ${b} = ${a * x + b}.`, `Resta ${b} en ambos lados: ${a}x = ${a * x}.`, `Divide entre ${a}: x = ${x}.`] }; },
    () => { const x = R(5, 30), y = R(5, 30); return { q: `La suma de dos números es ${x + y} y su diferencia es ${Math.abs(x - y)}. ¿Cuál es el número mayor?`, opts: opts4(`${Math.max(x, y)}`, [`${Math.min(x, y)}`, `${x + y}`, `${Math.max(x, y) + 1}`], near(Math.max(x, y), 4)), steps: ["Sistema: a + b = " + (x + y) + " y a − b = " + Math.abs(x - y) + ".", `Suma las ecuaciones: 2a = ${x + y + Math.abs(x - y)}.`, `a = ${Math.max(x, y)}.`] }; },
    () => { const c = P([1000, 2000, 5000, 10000]), r = P([5, 8, 10, 12]), t = P([2, 3]); const i = (c * r * t) / 100; return { q: `Se invierten $${c} con interés simple del ${r}% anual. ¿Cuánto interés se gana en ${t} años?`, opts: opts4(`$${i}`, [`$${(c * r) / 100}`, `$${c + i}`, `$${i * 2}`], () => `$${i + (R(-50, 50) || 25)}`), steps: ["Interés simple = capital × tasa × tiempo.", `${c} × ${r / 100} × ${t}.`, `= $${i}.`] }; }
  ]
};

const MATH_TOPICS = [
  { id: "fracciones", name: "Fracciones", desc: "Partes de un entero, equivalencias, suma, resta, multiplicación y división.", c: "coral", gen: FRAC, levels: [1, 2, 3, 4] },
  { id: "signos", name: "Leyes de los signos", desc: "Suma, resta, multiplicación y división con números positivos y negativos.", c: "sky", gen: SIGN, levels: [3, 4] },
  { id: "jerarquia", name: "Jerarquía de operaciones", desc: "Qué se resuelve primero: paréntesis, potencias, multiplicaciones y sumas.", c: "mustard", gen: HIER, levels: [2, 3, 4] },
  { id: "geometria", name: "Geometría", desc: "Perímetro, área, volumen, ángulos y teorema de Pitágoras.", c: "mint", gen: GEO, levels: [1, 2, 3, 4] },
  { id: "problemas", name: "Problemas razonados", desc: "Leer, entender y resolver: compras, repartos, porcentajes y ecuaciones.", c: "lilac", gen: PROB, levels: [1, 2, 3, 4] }
];
const MATH_LEVELS = { 1: "Primaria 1° a 3°", 2: "Primaria 4° a 6°", 3: "Secundaria", 4: "Preparatoria" };
const GRADES = [
  ["1p", "1° primaria", 1], ["2p", "2° primaria", 1], ["3p", "3° primaria", 1], ["4p", "4° primaria", 2], ["5p", "5° primaria", 2], ["6p", "6° primaria", 2],
  ["1s", "1° secundaria", 3], ["2s", "2° secundaria", 3], ["3s", "3° secundaria", 3], ["prepa", "Preparatoria", 4]
];
function mathItem(topic, level) {
  const list = topic.gen[level];
  for (let t = 0; t < 10; t++) { try { const it = P(list)(); if (it && it.opts && it.opts.length === 4) return it; } catch (e) {} }
  return P(list)();
}

document.head.insertAdjacentHTML("beforeend", `<style>
.hub a[data-c="mustard"] .hub-mark{background:var(--mustard-soft);color:var(--mustard)}
.mfr{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.05;margin:0 3px;font-style:normal}
.mfr i{font-style:normal;padding:0 3px}
.mfr i:first-child{border-bottom:2px solid currentColor}
.mtopics{display:grid;gap:14px}
@media (min-width:720px){.mtopics{grid-template-columns:repeat(2,1fr)}}
.mtopic{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start;padding:18px;border-radius:22px;background:var(--surface);border:1px solid var(--line);text-decoration:none;color:inherit}
.mtopic:hover{border-color:var(--ink-3)}
.mtopic .mk{width:56px;height:56px;border-radius:18px;display:grid;place-items:center;background:var(--c2);color:var(--c1)}
.mtopic h3{margin:0 0 4px;font-size:17px}.mtopic p{margin:0;color:var(--ink-2);font-size:14px;line-height:1.45}
.mtopic .lv{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.mtopic .lv span{font-size:12px;font-weight:700;padding:4px 9px;border-radius:99px;background:var(--c2);color:var(--c1)}
.mtabs{display:flex;gap:8px;margin:6px 0 18px}
.mtabs a{flex:1;text-align:center;padding:11px 12px;border-radius:14px;font-weight:700;text-decoration:none;color:var(--ink-2);background:var(--surface);border:1px solid var(--line)}
.mtabs a[aria-current="page"]{background:var(--navy);color:#fff;border-color:var(--navy)}
.mlevels{display:grid;gap:10px}
.mlevels button{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:16px 18px;border-radius:18px;border:1px solid var(--line);background:var(--surface);font:inherit;font-weight:700;font-size:16px;color:var(--ink);cursor:pointer;text-align:left}
.mlevels button:hover{border-color:var(--c1)}
.mlevels small{font-weight:600;color:var(--ink-3);font-size:13px}
.mq{background:var(--surface);border:1px solid var(--line);border-radius:24px;padding:20px;margin-top:6px}
.mq .mprog{height:8px;border-radius:9px;background:var(--line);overflow:hidden;margin-bottom:16px}
.mq .mprog i{display:block;height:100%;background:var(--c1);transition:width .3s}
.mq .mmeta{display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:var(--ink-3);margin-bottom:10px}
.mq .mtext{font-size:20px;font-weight:700;line-height:1.5;margin:6px 0 14px}
.mq .mtext sup{font-size:.65em}
.mart{display:block;width:120px;height:120px;margin:0 auto 10px}
.mart.wide{width:100%;max-width:300px;height:auto}
.mopts{display:grid;gap:10px}
@media (min-width:560px){.mopts{grid-template-columns:1fr 1fr}}
.mopts button{padding:14px 16px;border-radius:16px;border:2px solid var(--line);background:var(--bg);font:inherit;font-size:18px;font-weight:700;color:var(--ink);cursor:pointer;min-height:58px}
.mopts button:hover:not([disabled]){border-color:var(--c1)}
.mopts button.ok{background:var(--ok-soft);border-color:#3E9B6B}
.mopts button.bad{background:var(--bad-soft);border-color:#D2614E}
.msteps{margin-top:16px;padding:16px 18px;border-radius:18px;background:var(--c2)}
.msteps b{display:block;margin-bottom:6px}
.msteps ol{margin:0;padding-left:20px;display:grid;gap:6px;line-height:1.5}
.mnext{margin-top:14px;width:100%}
.mdone{text-align:center;padding:26px 18px}
.mdone .big{font-size:52px;font-weight:800;color:var(--c1);line-height:1}
.mdone p{color:var(--ink-2)}
.mprint-form{display:grid;gap:14px;background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:20px}
.mprint-form label{display:grid;gap:6px;font-weight:700;font-size:14px}
.mprint-form select{font:inherit;padding:12px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--ink)}
.mchk{display:flex;flex-wrap:wrap;gap:8px}
.mchk label{display:flex;gap:6px;align-items:center;font-weight:600;padding:8px 12px;border-radius:12px;border:1px solid var(--line);background:var(--bg)}
#mprint-root{display:none}
@media print{
  body.mprinting > *:not(#mprint-root){display:none!important}
  body.mprinting #mprint-root{display:block}
  #mprint-root .page{page-break-after:always;color:#1E3A5F;font-family:Poppins,system-ui,sans-serif;padding:0}
  #mprint-root .page:last-child{page-break-after:auto}
  #mprint-root .hd{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid #E8846B;padding-bottom:8px;margin-bottom:10px}
  #mprint-root .hd h1{margin:0;font-size:20pt}
  #mprint-root .hd small{font-size:10pt;color:#555}
  #mprint-root .fields{display:flex;gap:18px;font-size:11pt;margin:6px 0 14px}
  #mprint-root .fields span{flex:1;border-bottom:1px solid #999;padding-bottom:2px}
  #mprint-root .grid2{display:grid;grid-template-columns:1fr 1fr;gap:4px 22px}
  #mprint-root .ex{break-inside:avoid;font-size:11.5pt;line-height:1.45;padding:4px 0}
  #mprint-root .ex .n{font-weight:800;color:#E8846B;margin-right:6px}
  #mprint-root .ex .ans{border-bottom:1px solid #999;height:22px;margin-top:4px}
  #mprint-root .mart{width:70px;height:70px;margin:2px 0}
  #mprint-root .mart.wide{width:140px;height:auto;margin:2px 0}
  #mprint-root .key li{margin:4px 0;font-size:11pt}
  #mprint-root .ft{margin-top:12px;font-size:9pt;color:#777;text-align:center}
  @page{size:letter;margin:14mm}
}
</style>`);

const MCOL = { coral: ["var(--coral)", "var(--coral-soft)"], sky: ["var(--sky)", "var(--sky-soft)"], mustard: ["var(--mustard)", "var(--mustard-soft)"], mint: ["var(--mint)", "var(--mint-soft)"], navy: ["var(--navy)", "var(--navy-soft)"] };
MATH_TOPICS.find((t) => t.id === "problemas").c = "navy";
const MICON = {
  fracciones: `<svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><circle cx="16" cy="16" r="12"/><path d="M16 4v12h12" /><path d="M16 16 L28 16 A12 12 0 0 0 16 4Z" fill="currentColor" stroke="none" opacity=".45"/></svg>`,
  signos: `<svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M9 6v10M4 11h10M18 24h10"/><path d="M22 6 10 26" stroke-width="1.6" opacity=".5"/></svg>`,
  jerarquia: `<svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 5C5 9 5 23 9 27M23 5c4 4 4 18 0 22"/><path d="M13 13l6 6M19 13l-6 6"/></svg>`,
  geometria: `<svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M5 27h22L16 6Z"/><rect x="18" y="16" width="10" height="11" opacity=".5"/></svg>`,
  problemas: `<svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5h20v16H14l-6 6v-6H6z"/><path d="M13 11a3 3 0 1 1 3 3v2"/><circle cx="16" cy="19" r=".6" fill="currentColor"/></svg>`
};
const mBest = (id, lv) => { try { return JSON.parse(localStorage.getItem("mova-math") || "{}")[`${id}-${lv}`]; } catch (e) { return null; } };
const mSaveBest = (id, lv, s) => { try { const o = JSON.parse(localStorage.getItem("mova-math") || "{}"); if (!o[`${id}-${lv}`] || s > o[`${id}-${lv}`]) o[`${id}-${lv}`] = s; localStorage.setItem("mova-math", JSON.stringify(o)); } catch (e) {} };
const styleC = (t) => `--c1:${MCOL[t.c][0]};--c2:${MCOL[t.c][1]}`;
const mTabs = (cur) => `<nav class="mtabs" aria-label="Matemáticas"><a href="#/matematicas" ${cur === "p" ? 'aria-current="page"' : ""}>Practicar</a><a href="#/matematicas/imprimir" ${cur === "i" ? 'aria-current="page"' : ""}>Imprimir hojas</a></nav>`;

function viewMath() {
  return {
    title: "Matemáticas",
    html: `
    <section class="page-head wrap">
      <a class="back" href="#/">${ico("back", 18)} Inicio</a>
      <h1>Matemáticas</h1>
      <p class="lead">Práctica alineada al programa de la SEP en los temas que más cuestan: fracciones, signos, jerarquía de operaciones, geometría y problemas razonados. Cada respuesta trae su explicación paso a paso.</p>
    </section>
    <section class="wrap">${mTabs("p")}
      <div class="mtopics">${MATH_TOPICS.map((t) => `<a class="mtopic" href="#/matematicas/${t.id}" style="${styleC(t)}"><span class="mk">${MICON[t.id]}</span><span><h3>${t.name}</h3><p>${t.desc}</p><span class="lv">${t.levels.map((l) => `<span>${MATH_LEVELS[l]}</span>`).join("")}</span></span></a>`).join("")}</div>
    </section>`
  };
}

function viewMathTopic(id) {
  const t = MATH_TOPICS.find((x) => x.id === id);
  if (!t) return viewNotFound("No encontramos ese tema.", "#/matematicas", "Ver temas");
  return {
    title: t.name,
    html: `
    <section class="page-head wrap">
      <a class="back" href="#/matematicas">${ico("back", 18)} Matemáticas</a>
      <h1>${t.name}</h1>
      <p class="lead">${t.desc} Elige tu nivel: son 10 ejercicios nuevos cada vez.</p>
    </section>
    <section class="wrap" style="${styleC(t)}"><div id="mstage"><div class="mlevels">${t.levels.map((l) => { const b = mBest(t.id, l); return `<button type="button" data-lv="${l}"><span>${MATH_LEVELS[l]}</span><small>${b != null ? `Mejor: ${b}/10` : "Empezar"}</small></button>`; }).join("")}</div></div></section>`,
    mount(root) {
      const stage = $("#mstage", root);
      const levelsHTML = stage.innerHTML;
      const start = (lv) => {
        const N = 10; let i = 0, score = 0, item;
        const show = () => {
          item = mathItem(t, lv);
          const correct = item.opts[0];
          const order = [...item.opts].sort(() => Math.random() - 0.5);
          stage.innerHTML = `<div class="mq">
            <div class="mmeta"><span>${MATH_LEVELS[lv]}</span><span>${i + 1} / ${N}</span></div>
            <div class="mprog"><i style="width:${(i / N) * 100}%"></i></div>
            ${item.art || ""}<div class="mtext">${item.q}</div>
            <div class="mopts">${order.map((o, k) => `<button type="button" data-k="${k}">${o}</button>`).join("")}</div>
            <div id="mexp"></div></div>`;
          $$(".mopts button", stage).forEach((btn) => btn.addEventListener("click", () => {
            const pick = order[+btn.dataset.k], good = pick === correct;
            if (good) score++;
            $$(".mopts button", stage).forEach((b) => { b.disabled = true; if (order[+b.dataset.k] === correct) b.classList.add("ok"); });
            if (!good) btn.classList.add("bad");
            $("#mexp", stage).innerHTML = `<div class="msteps"><b>${good ? "¡Correcto!" : "Casi. Así se resuelve:"}</b><ol>${item.steps.map((s) => `<li>${s}</li>`).join("")}</ol></div>
              <button type="button" class="btn btn-primary mnext">${i + 1 < N ? "Siguiente" : "Ver resultado"}</button>`;
            $(".mnext", stage).addEventListener("click", () => { i++; i < N ? show() : finish(); });
            $(".mnext", stage).focus();
          }));
        };
        const finish = () => {
          mSaveBest(t.id, lv, score);
          const msg = score >= 9 ? "¡Excelente! Dominas este nivel." : score >= 7 ? "¡Muy bien! Un poco más de práctica y lo dominas." : score >= 5 ? "Vas por buen camino. Revisa las explicaciones y vuelve a intentarlo." : "Sigue practicando: cada intento te deja algo nuevo.";
          stage.innerHTML = `<div class="mq mdone"><div class="big">${score}/10</div><h2>${t.name}, ${MATH_LEVELS[lv]}</h2><p>${msg}</p>
            <div style="display:grid;gap:10px;margin-top:16px"><button type="button" class="btn btn-primary" id="m-again">Otros 10 ejercicios</button><button type="button" class="btn btn-ghost" id="m-levels">Cambiar de nivel</button>
            <a class="btn btn-ghost" href="#/matematicas/imprimir">Imprimir una hoja de este tema</a></div></div>`;
          $("#m-again", stage).addEventListener("click", () => start(lv));
          $("#m-levels", stage).addEventListener("click", () => { stage.innerHTML = levelsHTML; bind(); });
        };
        show();
      };
      const bind = () => $$(".mlevels button", stage).forEach((b) => b.addEventListener("click", () => start(+b.dataset.lv)));
      bind();
    }
  };
}

function buildSheet(grade, topicIds, count) {
  const g = GRADES.find((x) => x[0] === grade), lv = g[2];
  const topics = MATH_TOPICS.filter((t) => topicIds.includes(t.id) && t.gen[lv]);
  const items = [];
  for (let k = 0; k < count; k++) { const t = topics[k % topics.length]; items.push({ t, it: mathItem(t, lv) }); }
  const plain = (s) => String(s).replace(/<span class="mfr"><i>([^<]*)<\/i><i>([^<]*)<\/i><\/span>/g, "$1/$2");
  const head = (sub) => `<div class="hd"><div><h1>Matemáticas · ${g[1]}</h1><small>${topics.map((t) => t.name).join(" · ")}${sub ? ` — ${sub}` : ""}</small></div><small>MOVA Learning Studio</small></div>`;
  const ex = items.map(({ it }, n) => `<div class="ex"><span class="n">${n + 1}.</span>${it.q.replace(/^(Suma|Resta|Multiplica|Divide|Resuelve|Calcula|Simplifica)(:)?/, "$1$2")}${it.art || ""}<div class="ans"></div></div>`).join("");
  const key = items.map(({ it }, n) => `<li><b>${n + 1}.</b> ${plain(it.opts[0])}</li>`).join("");
  return `<div class="page">${head()}<div class="fields"><span>Nombre:</span><span style="flex:.5">Fecha:</span><span style="flex:.4">Aciertos:&nbsp;&nbsp;&nbsp;/${count}</span></div>
    <p style="font-size:11pt;margin:0 0 10px">Resuelve cada ejercicio y escribe tu respuesta en la línea. Muestra tus operaciones.</p>
    <div class="grid2">${ex}</div><p class="ft">movacp.github.io/app · Av. Constituyentes de N.L. #111, Col. Lindavista · WhatsApp 812 342 6038</p></div>
    <div class="page key">${head("Clave de respuestas")}<ol style="list-style:none;padding:0;columns:2">${key}</ol><p class="ft">Para el maestro o padre de familia. Cada hoja se genera con ejercicios nuevos.</p></div>`;
}

function viewMathPrint() {
  return {
    title: "Hojas de matemáticas",
    html: `
    <section class="page-head wrap">
      <a class="back" href="#/matematicas">${ico("back", 18)} Matemáticas</a>
      <h1>Hojas para imprimir</h1>
      <p class="lead">Elige el grado y los temas. Cada hoja sale con ejercicios nuevos, espacio para resolver y clave de respuestas en la segunda página.</p>
    </section>
    <section class="wrap">${mTabs("i")}
      <div class="mprint-form">
        <label>Grado<select id="mp-grade">${GRADES.map((g) => `<option value="${g[0]}">${g[1]}</option>`).join("")}</select></label>
        <div><b style="font-size:14px">Temas</b><div class="mchk" id="mp-topics" style="margin-top:6px"></div></div>
        <label>Número de ejercicios<select id="mp-count"><option>10</option><option selected>12</option><option>16</option><option>20</option></select></label>
        <button type="button" class="btn btn-primary" id="mp-go">${ico("print", 18)} Imprimir hoja</button>
        <p class="hint" style="margin:0;color:var(--ink-3);font-size:13px">Consejo: en la ventana de impresión puedes elegir “Guardar como PDF”.</p>
      </div>
    </section>`,
    mount(root) {
      const gSel = $("#mp-grade", root), box = $("#mp-topics", root);
      const paint = () => {
        const lv = GRADES.find((g) => g[0] === gSel.value)[2];
        box.innerHTML = MATH_TOPICS.filter((t) => t.gen[lv]).map((t) => `<label><input type="checkbox" value="${t.id}" checked> ${t.name}</label>`).join("");
      };
      gSel.addEventListener("change", paint); paint();
      $("#mp-go", root).addEventListener("click", () => {
        const ids = $$("input:checked", box).map((x) => x.value);
        if (!ids.length) { alert("Elige al menos un tema."); return; }
        let host = document.getElementById("mprint-root");
        if (!host) { host = document.createElement("div"); host.id = "mprint-root"; document.body.appendChild(host); }
        host.innerHTML = buildSheet(gSel.value, ids, +$("#mp-count", root).value);
        document.body.classList.add("mprinting");
        const done = () => { document.body.classList.remove("mprinting"); window.removeEventListener("afterprint", done); };
        window.addEventListener("afterprint", done);
        setTimeout(() => { window.print(); setTimeout(done, 1500); }, 60);
      });
    }
  };
}

ROUTES.matematicas = (p) => (!p[0] ? viewMath() : p[0] === "imprimir" ? viewMathPrint() : viewMathTopic(p[0]));

/* ---------- Accesos: Inicio, Learn y Print & Learn ---------- */
(function () {
  const prevH = window.viewHome;
  window.viewHome = function () {
    const v = prevH();
    v.html = v.html.replace('<div class="areas">', `<div class="areas"><a class="area" href="#/matematicas" data-c="mustard"><span class="thumb" aria-hidden="true"><svg viewBox="0 0 120 90" width="100%" height="100%"><rect x="14" y="12" width="92" height="66" rx="12" fill="#F5E7C5"/><text x="36" y="56" font-family="Poppins,sans-serif" font-size="30" font-weight="800" fill="#E8846B">½</text><text x="62" y="56" font-family="Poppins,sans-serif" font-size="26" font-weight="800" fill="#1E3A5F">+−</text></svg></span><h3>Matemáticas</h3><p>Fracciones, signos, geometría y problemas, de primaria a prepa.</p></a>`);
    return v;
  };
  const prevL = ROUTES.learn;
  ROUTES.learn = (p) => { const v = prevL(p); v.html = v.html.replace(/<\/div><\/section>\s*$/, `<a href="#/matematicas" data-c="mustard"><span class="hub-mark">${MICON.fracciones}</span><h2>Matemáticas</h2><p>Práctica por tema y nivel, con explicación paso a paso de cada respuesta.</p></a></div></section>`); return v; };
  const prevR = ROUTES.resources;
  ROUTES.resources = (p) => { const v = prevR(p); if (!p || !p[0]) v.html = v.html.replace('<section class="wrap filters"', `<section class="wrap"><a class="es-banner" href="#/matematicas/imprimir" style="margin-top:0;margin-bottom:6px"><span class="mark" style="background:var(--mustard-soft);color:var(--mustard)">½</span><span><b>Hojas de matemáticas</b><small>Genera hojas nuevas por grado y tema, con clave de respuestas.</small></span><span>${ico("print", 20)}</span></a></section><section class="wrap filters"`); return v; };
})();

/* ---------- Mochi y las ilustraciones de Lectoescritura ---------- */
document.head.insertAdjacentHTML("beforeend", `<style>
.mochi{display:block;width:100%;height:auto;overflow:visible}
.mochi.happy{animation:mhop .6s ease}
.mochi.sad{animation:mwob .5s ease}
@keyframes mhop{0%,100%{transform:translateY(0)}35%{transform:translateY(-14px) scale(1.04)}65%{transform:translateY(0) scale(.98,1.02)}}
@keyframes mwob{0%,100%{transform:rotate(0)}25%{transform:rotate(-6deg)}75%{transform:rotate(6deg)}}
.mochi .lid{transform-origin:center;transform-box:fill-box;animation:mblink 4.5s infinite}
@keyframes mblink{0%,94%,100%{transform:scaleY(0)}96%,98%{transform:scaleY(1)}}
.mfloat{animation:mfl 3.2s ease-in-out infinite}
@keyframes mfl{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.lehero{position:relative;display:grid;grid-template-columns:112px 1fr;gap:12px;align-items:center;padding:18px 18px 16px;border-radius:26px;margin-bottom:18px;overflow:hidden;background:#FFFDF8;border:1px solid var(--line);
  background-image:radial-gradient(circle at 12px 12px,#F7DDD4 5px,transparent 6px),radial-gradient(circle at 42px 34px,#DBE9F5 5px,transparent 6px),radial-gradient(circle at 72px 14px,#F5E7C5 5px,transparent 6px),radial-gradient(circle at 26px 52px,#DDEEE5 5px,transparent 6px);background-size:84px 64px}
:root[data-theme="dark"] .lehero{background-color:var(--surface);background-image:none}
.bubble{position:relative;background:#fff;color:#1E3A5F;border:2.5px solid #1E3A5F;border-radius:20px;padding:12px 15px;font-weight:700;font-size:16px;line-height:1.35;box-shadow:0 4px 0 #1E3A5F}
.bubble:before{content:"";position:absolute;left:-12px;top:22px;border:8px solid transparent;border-right:12px solid #1E3A5F;border-left:0}
.bubble:after{content:"";position:absolute;left:-7px;top:24px;border:6px solid transparent;border-right:9px solid #fff;border-left:0}
.bubble small{display:block;font-weight:600;font-size:13px;color:#4A5A72;margin-top:3px}
.mguide{display:grid;grid-template-columns:78px 1fr;gap:12px;align-items:center;margin-bottom:12px}
.stars{display:flex;gap:4px;justify-content:center;margin:2px 0 14px;flex-wrap:wrap}
.stars svg{width:22px;height:22px}
.stars.big svg{width:44px;height:44px}
.dlv .pic{width:64px;height:64px;border-radius:18px;background:var(--c2);display:grid;place-items:center;overflow:hidden}
.dlv .pic svg{width:58px;height:58px}
.dlv a{grid-template-columns:auto 1fr}
.fart{display:block;width:100%;max-width:340px;height:auto;margin:0 auto 6px}
.ftop{display:grid;place-items:center;padding:10px 0 4px}
.confetti{position:fixed;inset:0;pointer-events:none;z-index:60;overflow:hidden}
.confetti i{position:absolute;top:-14px;width:10px;height:14px;border-radius:3px;animation:cf 1.9s ease-in forwards}
@keyframes cf{to{transform:translateY(105vh) rotate(540deg);opacity:.9}}
.medal{width:120px;margin:0 auto 4px;position:relative}
</style>`);

function mochiSVG(acc) {
  const hp = acc === "phones" ? `<g stroke="#1B2A55" stroke-width="3" stroke-linecap="round"><path d="M27 58 C24 30 40 14 60 14 C80 14 96 30 93 58" fill="none"/><rect x="18" y="52" width="16" height="24" rx="7" fill="#E8846B"/><rect x="86" y="52" width="16" height="24" rx="7" fill="#E8846B"/></g>` : "";
  const book = acc === "book" ? `<g stroke="#1B2A55" stroke-width="2.6" stroke-linejoin="round"><path d="M34 86 L60 80 L86 86 L86 108 L60 102 L34 108Z" fill="#fff"/><path d="M60 80V102"/><path d="M40 90l14-3M40 96l14-3M66 87l14 3M66 93l14 3" stroke-width="1.6"/><path d="M34 86 L60 80 L60 102 L34 108Z" fill="#F5E7C5"/></g>` : "";
  const pencil = acc === "pencil" ? `<g stroke="#1B2A55" stroke-width="2.6" stroke-linejoin="round" transform="rotate(-35 98 82)"><rect x="90" y="66" width="12" height="34" rx="2" fill="#F2C14E"/><path d="M90 100 L96 112 L102 100Z" fill="#F7DDB4"/><rect x="90" y="62" width="12" height="7" fill="#E8846B"/></g>` : "";
  const medal = acc === "medal" ? `<g stroke="#1B2A55" stroke-width="2.6" stroke-linejoin="round"><path d="M50 78 L46 96 M70 78 L74 96" stroke="#E8846B" stroke-width="5"/><circle cx="60" cy="98" r="11" fill="#F2C14E"/><path d="M60 92l2 4 4.5.6-3.2 3 .8 4.4-4.1-2.2-4.1 2.2.8-4.4-3.2-3 4.5-.6z" fill="#fff" stroke-width="1.4"/></g>` : "";
  return `<svg class="mochi" viewBox="0 0 120 120" aria-hidden="true">
  <g stroke="#1B2A55" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <path d="M36 31 L27 7 L49 22Z" fill="#3F86D9"/><path d="M84 31 L93 7 L71 22Z" fill="#3F86D9"/>
    <path d="M31 74 C22 72 15 66 17 54" fill="none"/><path d="M89 74 C98 72 105 66 103 54" fill="none"/>
    <path d="M31 104 L31 56 C31 31 45 19 60 19 C75 19 89 31 89 56 L89 104 C83 99 77 99 71 103 C65 108 55 108 49 103 C43 99 37 99 31 104Z" fill="#5BA8F0"/>
    <circle cx="48" cy="52" r="10" fill="#fff"/><circle cx="72" cy="52" r="10" fill="#fff"/>
  </g>
  <circle cx="50" cy="54" r="5.5" fill="#1B2A55"/><circle cx="74" cy="54" r="5.5" fill="#1B2A55"/>
  <circle cx="51.8" cy="52" r="1.9" fill="#fff"/><circle cx="75.8" cy="52" r="1.9" fill="#fff"/>
  <rect class="lid" x="36.5" y="40.5" width="23" height="23" rx="11.5" fill="#5BA8F0" stroke="#1B2A55" stroke-width="3"/>
  <rect class="lid" x="60.5" y="40.5" width="23" height="23" rx="11.5" fill="#5BA8F0" stroke="#1B2A55" stroke-width="3"/>
  <circle cx="38" cy="67" r="5" fill="#FF8FB1"/><circle cx="82" cy="67" r="5" fill="#FF8FB1"/>
  <g stroke="#1B2A55" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">
    <path d="M53.5 74 L56 80.5 L58.5 75.8Z" fill="#fff"/><path d="M61.5 75.8 L64 80.5 L66.5 74Z" fill="#fff"/><path d="M49 70 Q60 80 71 70" fill="none"/>
  </g>${hp}${book}${pencil}${medal}</svg>`;
}
const reactM = (el, cls) => { const m = el && el.querySelector(".mochi"); if (!m) return; m.classList.remove("happy", "sad"); void m.getBoundingClientRect(); m.classList.add(cls); };
const STAR = (on) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="${on ? "#F2C14E" : "none"}" stroke="${on ? "#C8961E" : "var(--ink-3)"}" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
const starRow = (marks) => `<div class="stars">${marks.map((m) => STAR(m === 1)).join("")}</div>`;
function confetti() {
  const box = document.createElement("div"); box.className = "confetti";
  const cols = ["#E8846B", "#6FA8D6", "#F2C14E", "#7CC2A0", "#1E3A5F"];
  box.innerHTML = Array.from({ length: 46 }, (_, i) => `<i style="left:${Math.random() * 100}%;background:${cols[i % 5]};animation-delay:${Math.random() * 0.6}s;animation-duration:${1.5 + Math.random()}s"></i>`).join("");
  document.body.appendChild(box); setTimeout(() => box.remove(), 3200);
}
const PRAISE = ["¡Excelente!", "¡Muy bien escrito!", "¡Eso es!", "¡Perfecto!", "¡Qué buena letra!", "¡Lo lograste!"];
const CHEER = ["¡Casi! Mira cómo se escribe.", "No pasa nada, así aprendemos.", "Escuchemos con más calma la próxima."];

/* Ilustraciones de cada lectura (viewBox 0 0 120 80) */
const S = 'stroke="#1E3A5F" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"';
const FART = {
  lolo: `<rect x="0" y="62" width="120" height="18" fill="#DDEEE5"/><g ${S}><ellipse cx="54" cy="50" rx="24" ry="13" fill="#C98A5B"/><path d="M36 58v10M46 60v9M62 60v9M72 58v10" /><circle cx="78" cy="36" r="13" fill="#C98A5B"/><path d="M70 26c-6 2-8 12-4 18" fill="#8A5A38"/><path d="M86 26c5 2 7 10 4 16" fill="#8A5A38"/><path d="M30 44c-6-4-8-10-6-14"/></g><circle cx="75" cy="34" r="2" fill="#1E3A5F"/><circle cx="83" cy="34" r="2" fill="#1E3A5F"/><circle cx="80" cy="40" r="2.6" fill="#1E3A5F"/><circle cx="100" cy="62" r="8" fill="#E8846B" ${S}/>`,
  lluvia: `<g ${S}><path d="M28 34a12 12 0 0 1 22-8 14 14 0 0 1 26 4 10 10 0 0 1 0 20H30a8 8 0 0 1-2-16z" fill="#C9D3DE"/></g><g stroke="#6FA8D6" stroke-width="3" stroke-linecap="round"><path d="M36 56l-3 6M50 58l-3 6M64 56l-3 6M78 58l-3 6M44 66l-2 4M70 66l-2 4"/></g><g ${S}><path d="M84 60a14 14 0 0 1 28 0z" fill="#F2C14E"/><path d="M98 60v14a3 3 0 0 1-6 0"/></g>`,
  mercado: `<g ${S}><rect x="16" y="34" width="88" height="34" rx="4" fill="#FFFDFA"/><path d="M12 34h96l-6-16H18z" fill="#E8846B"/></g><g fill="#fff"><path d="M30 18h12l-2 16h-12zM54 18h12l-1 16h-12zM78 18h12l1 16h-12z" opacity=".85"/></g><g ${S}><circle cx="34" cy="54" r="8" fill="#F2A33A"/><circle cx="50" cy="56" r="7" fill="#7CC2A0"/><path d="M62 50c6 10 18 10 22 0z" fill="#E8846B"/><path d="M90 48c4 2 8 8 6 14" fill="#F2C14E"/></g>`,
  frijol: `<g ${S}><path d="M44 46h32l-4 26H48z" fill="#DBE9F5"/><path d="M60 46c0-12 0-18 2-26" fill="none" stroke="#3E9B6B"/><path d="M62 28c8-8 18-6 20 0-6 6-14 6-20 0z" fill="#7CC2A0"/><path d="M60 34c-8-8-18-6-20 0 6 6 14 6 20 0z" fill="#7CC2A0"/><ellipse cx="58" cy="52" rx="6" ry="4" fill="#8A5A38"/></g><circle cx="98" cy="18" r="9" fill="#F2C14E"/>`,
  colibri: `<g ${S}><path d="M28 70c0-14 6-24 14-30" fill="none" stroke="#3E9B6B"/><path d="M42 40c-6-8-2-16 6-14 2 8-2 12-6 14zM42 40c8-6 16-2 14 6-8 2-12-2-14-6zM42 40c6 8 2 16-6 14-2-8 2-12 6-14zM42 40c-8 6-16 2-14-6 8-2 12 2 14 6z" fill="#F08FB4"/><circle cx="42" cy="40" r="3" fill="#F2C14E"/><ellipse cx="80" cy="36" rx="14" ry="8" fill="#3EAE86" transform="rotate(-18 80 36)"/><circle cx="92" cy="28" r="6" fill="#3EAE86"/><path d="M96 27l18-4"/><path d="M76 32c-4-14 6-22 14-22-2 10-6 18-14 22z" fill="#9BD8BE"/><path d="M68 40l-10 8 12-2z" fill="#1E3A5F"/></g><circle cx="93" cy="27" r="1.6" fill="#1E3A5F"/>`,
  abuela: `<g ${S}><rect x="28" y="44" width="64" height="26" rx="5" fill="#F7DDD4"/><rect x="36" y="28" width="48" height="18" rx="4" fill="#FFFDFA"/><path d="M28 54c8 4 12-4 20 0s12 4 20 0 12-4 24 0" fill="none" stroke="#E8846B"/><path d="M46 28v-8M60 28v-10M74 28v-8"/></g><g fill="#F2C14E"><path d="M46 16c-3 3 0 6 0 6s3-3 0-6zM60 13c-3 3 0 6 0 6s3-3 0-6zM74 16c-3 3 0 6 0 6s3-3 0-6z"/></g><g fill="#6FA8D6"><circle cx="18" cy="20" r="3"/><circle cx="104" cy="26" r="3"/></g><g fill="#7CC2A0"><circle cx="102" cy="12" r="2.5"/><circle cx="14" cy="40" r="2.5"/></g>`,
  silla: `<circle cx="96" cy="18" r="9" fill="#F2C14E"/><g ${S}><path d="M4 72 L34 22 L50 42 Q60 50 70 40 L86 18 L116 72Z" fill="#8FA9C4"/><path d="M28 36l6-10 6 8M80 28l6-10 6 10" fill="#fff" stroke-width="1.8"/></g><rect x="0" y="66" width="120" height="14" fill="#DDEEE5"/><g fill="#3E9B6B"><path d="M14 66l4-10 4 10zM100 66l4-12 4 12zM26 68l3-7 3 7z"/></g>`,
  volcanes: `<g ${S}><path d="M10 74 L44 26 L58 26 L96 74Z" fill="#B48A6E"/><path d="M44 26 L58 26 L54 34 L48 32Z" fill="#E8846B"/><path d="M50 30c-4 10 2 14-2 22" fill="none" stroke="#E8846B" stroke-width="3"/></g><g fill="#C9D3DE" ${S}><circle cx="52" cy="16" r="7"/><circle cx="62" cy="10" r="6"/><circle cx="72" cy="12" r="5"/></g><g ${S}><path d="M80 74 L98 46 L118 74Z" fill="#8FA9C4"/></g>`,
  ballena: `<rect x="0" y="50" width="120" height="30" fill="#BFDDF2"/><g ${S}><path d="M18 50c4-18 30-26 56-20 14 3 22 12 24 20-20 10-60 12-80 0z" fill="#8FA9C4"/><path d="M96 46c6-10 14-12 20-10-4 4-6 8-8 14 4 2 6 6 4 10-6 0-12-6-16-14z" fill="#8FA9C4"/><path d="M30 34c-2-8 0-14 4-18M30 34c-6-6-12-6-16-4"/></g><circle cx="36" cy="44" r="2.2" fill="#1E3A5F"/><path d="M40 52c10 3 24 3 34 0" stroke="#1E3A5F" stroke-width="2" fill="none"/><g stroke="#6FA8D6" stroke-width="2.4" fill="none" stroke-linecap="round"><path d="M6 66c6-4 10 4 16 0M60 70c6-4 10 4 16 0"/></g>`,
  huerto: `<g ${S}><rect x="10" y="50" width="46" height="22" rx="3" fill="#C98A5B"/><rect x="64" y="50" width="46" height="22" rx="3" fill="#C98A5B"/><path d="M22 50c-6-10-2-16 4-16 2 6 0 12-4 16zM22 50c6-10 14-10 14-4-4 4-8 4-14 4zM40 50c-4-8 0-14 6-12 0 6-2 10-6 12z" fill="#7CC2A0"/><path d="M80 50c0-10 4-14 4-20M94 50c0-8 2-12 2-16" stroke="#3E9B6B" fill="none"/><circle cx="84" cy="30" r="6" fill="#E8846B"/><circle cx="96" cy="34" r="5" fill="#E8846B"/></g><circle cx="102" cy="14" r="8" fill="#F2C14E"/>`,
  abejas: `<g ${S}><path d="M26 74c0-12 2-20 8-26" fill="none" stroke="#3E9B6B"/><path d="M34 48c-8-6-6-16 2-16 4 6 2 12-2 16zM34 48c8-6 16-2 14 6-6 2-12 0-14-6zM34 48c-2 8-10 12-14 6 2-6 8-8 14-6z" fill="#F7C6D6"/><circle cx="34" cy="46" r="4" fill="#F2C14E"/><ellipse cx="78" cy="38" rx="18" ry="13" fill="#F2C14E"/><path d="M70 26v24M80 25v26" stroke-width="5"/><ellipse cx="72" cy="20" rx="9" ry="7" fill="#fff" opacity=".9"/><ellipse cx="86" cy="20" rx="9" ry="7" fill="#fff" opacity=".9"/><path d="M96 38l8 0"/></g><g stroke="#1E3A5F" stroke-width="1.8" stroke-dasharray="3 4" fill="none"><path d="M40 40c10-10 18-16 22-12"/></g><circle cx="64" cy="35" r="1.8" fill="#1E3A5F"/>`,
  valentina: `<g ${S}><rect x="12" y="40" width="96" height="30" rx="4" fill="#FFFDFA"/></g><g fill="#1E3A5F"><rect x="22" y="40" width="5" height="17"/><rect x="34" y="40" width="5" height="17"/><rect x="52" y="40" width="5" height="17"/><rect x="64" y="40" width="5" height="17"/><rect x="76" y="40" width="5" height="17"/><rect x="94" y="40" width="5" height="17"/></g><g stroke="#1E3A5F" stroke-width="1.6"><path d="M24 57v13M36 57v13M48 40v30M60 57v13M72 57v13M84 57v13M96 57v13"/></g><g fill="#E8846B" stroke="#1E3A5F" stroke-width="2"><ellipse cx="34" cy="26" rx="5" ry="4"/><ellipse cx="80" cy="20" rx="5" ry="4"/></g><g stroke="#1E3A5F" stroke-width="2.2" fill="none"><path d="M39 26V10l10 3M85 20V6"/></g><circle cx="58" cy="16" r="3" fill="#6FA8D6"/><circle cx="100" cy="28" r="2.5" fill="#F2C14E"/>`
};
const fArt = (id, cls) => `<svg viewBox="0 0 120 80" class="${cls || ""}" aria-hidden="true">${FART[id] || ""}</svg>`;

/* Ilustraciones de cada nivel de dictado */
const DART = {
  silabas: `<g ${S}><rect x="14" y="18" width="40" height="44" rx="10" fill="#F7DDD4"/><rect x="66" y="18" width="40" height="44" rx="10" fill="#DBE9F5"/></g><text x="34" y="49" text-anchor="middle" font-family="Poppins,sans-serif" font-size="22" font-weight="800" fill="#E8846B">ma</text><text x="86" y="49" text-anchor="middle" font-family="Poppins,sans-serif" font-size="22" font-weight="800" fill="#3F86D9">pa</text>`,
  palabras: `<g ${S}><path d="M28 66V36l32-20 32 20v30z" fill="#F5E7C5"/><rect x="52" y="46" width="16" height="20" fill="#E8846B"/><path d="M22 38l38-26 38 26" fill="none"/></g><circle cx="98" cy="16" r="7" fill="#F2C14E"/>`,
  trabadas: `<g ${S}><path d="M60 64c-2-14 2-26 0-36" fill="none" stroke="#3E9B6B"/><circle cx="60" cy="24" r="8" fill="#F2C14E"/><path d="M60 16c-4-8 4-12 6-6M68 24c8-4 12 4 6 6M60 32c4 8-4 12-6 6M52 24c-8 4-12-4-6-6" fill="#E8846B"/><path d="M60 50c8-8 16-6 18-2-6 4-12 4-18 2z" fill="#7CC2A0"/></g><text x="22" y="40" font-family="Poppins,sans-serif" font-size="16" font-weight="800" fill="#3F86D9">fl</text><text x="88" y="64" font-family="Poppins,sans-serif" font-size="16" font-weight="800" fill="#E8846B">tr</text>`,
  oraciones: `<g ${S}><rect x="16" y="14" width="88" height="52" rx="8" fill="#FFFDFA"/><path d="M26 30h56M26 42h68M26 54h40" stroke="#7CC2A0" stroke-width="4"/></g><circle cx="94" cy="54" r="4" fill="#E8846B"/>`,
  ortografia: `<g ${S}><rect x="14" y="18" width="40" height="44" rx="10" fill="#DCE5EF"/><rect x="66" y="18" width="40" height="44" rx="10" fill="#F5E7C5"/></g><text x="34" y="49" text-anchor="middle" font-family="Poppins,sans-serif" font-size="26" font-weight="800" fill="#1E3A5F">b</text><text x="86" y="49" text-anchor="middle" font-family="Poppins,sans-serif" font-size="26" font-weight="800" fill="#C8961E">v</text>`,
  parrafo: `<g ${S}><path d="M24 14h56l16 16v38H24z" fill="#FFFDFA"/><path d="M80 14v16h16" fill="#F7DDD4"/><path d="M34 34h36M34 44h50M34 54h44" stroke="#E8846B" stroke-width="3"/></g><g ${S} transform="rotate(30 96 56)"><rect x="92" y="34" width="9" height="30" rx="2" fill="#F2C14E"/><path d="M92 64l4.5 9 4.5-9z" fill="#F7DDB4"/></g>`
};
const dArt = (id) => `<svg viewBox="0 0 120 80" aria-hidden="true">${DART[id] || ""}</svg>`;

/* =====================================================================
   LECTOESCRITURA — dictado con audio y lecturas de fluidez
   ===================================================================== */
const DICTADO = [
  { id: "silabas", name: "Sílabas", grade: "1° primaria", c: "coral", items: ["ma", "me", "mi", "mo", "mu", "pa", "pe", "pi", "po", "pu", "sa", "se", "si", "so", "su", "la", "le", "li", "lo", "lu", "ta", "te", "ti", "to", "tu", "na", "ne", "ni", "no", "nu", "da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ra", "re", "ri", "ro", "ru", "ba", "be", "bi", "bo", "bu", "ca", "co", "cu", "ga", "go", "gu", "ja", "je", "ji", "jo", "ju", "va", "ve", "vi", "vo", "ya", "yo", "cha", "che", "chi", "cho", "llu", "lla"] },
  { id: "palabras", name: "Palabras sencillas", grade: "1° primaria", c: "mustard", items: ["mamá", "papá", "casa", "mesa", "sopa", "luna", "pato", "gato", "dedo", "nido", "foca", "vaca", "rosa", "sapo", "lobo", "pelota", "paleta", "tomate", "camino", "conejo", "maleta", "pepino", "sala", "dado", "mono", "rana", "loro", "taza", "pala", "nube", "bota", "fideo", "jugo", "lima", "moneda", "cama", "cuna", "goma", "pino", "ola"] },
  { id: "trabadas", name: "Trabadas y letras difíciles", grade: "2° primaria", c: "sky", items: ["plato", "blusa", "flor", "globo", "clavo", "tren", "brazo", "cruz", "fresa", "grande", "prado", "queso", "guitarra", "perro", "carro", "gente", "jirafa", "chocolate", "llave", "zapato", "cielo", "cereza", "hielo", "huevo", "pluma", "bruja", "trompo", "dragón", "tigre", "cuaderno", "pájaro", "árbol", "guerra", "manguera", "girasol", "lápiz", "mariposa", "estrella", "planeta", "bicicleta"] },
  { id: "oraciones", name: "Oraciones cortas", grade: "1° y 2° primaria", c: "mint", items: ["Mi mamá me ama.", "El gato toma leche.", "La luna es blanca.", "Mi perro se llama Lolo.", "Tengo una pelota roja.", "El sapo salta en el lodo.", "Papá lava la taza.", "La nube es gris.", "Me gusta comer fresas.", "El tren va muy rápido.", "Mi casa es grande.", "La niña come sopa.", "El pato nada en el lago.", "Hoy hace mucho calor.", "Mi abuela hace tortillas.", "El sol sale temprano.", "Veo un pájaro azul.", "La flor es amarilla.", "Mi hermano juega futbol.", "Ana pinta un dibujo.", "El globo se fue al cielo.", "Tomo agua con hielo.", "La vaca da leche.", "Leo un libro bonito.", "Mi maestra es amable."] },
  { id: "ortografia", name: "Oraciones con ortografía", grade: "3° y 4° primaria", c: "navy", items: ["Ayer vimos una ballena en el mar.", "Mi abuelo vive en Monterrey.", "El jueves iremos al museo.", "La jirafa tiene el cuello muy largo.", "Hace frío, ponte el suéter.", "El zorro cruzó el bosque de noche.", "Valeria guardó sus lápices en la mochila.", "¿Quieres jugar conmigo en el recreo?", "Hoy hicimos un experimento con hielo.", "Los niños cantaron en el festival.", "Mi hermana menor ya sabe leer.", "El cielo se llenó de estrellas.", "Gabriel ganó la carrera de bicicletas.", "¡Qué rico huele el pan recién hecho!", "La gente esperaba el camión en la esquina.", "Él dibujó un volcán con lava roja.", "Guardé el cuaderno en el cajón.", "El búho abrió sus ojos amarillos.", "Mañana visitaremos a mi tía Elena.", "Hay que cuidar el agua todos los días."] },
  { id: "parrafo", name: "Oraciones largas", grade: "5° y 6° primaria", c: "coral", items: ["Durante las vacaciones, mi familia y yo viajamos a la sierra para acampar junto al río.", "El científico explicó que las abejas son esenciales para la polinización de muchas plantas.", "Aunque llovía con fuerza, el equipo decidió continuar el partido hasta el final.", "En la biblioteca encontré un libro antiguo sobre la historia de nuestra ciudad.", "Los volcanes se forman cuando el magma sube desde el interior de la Tierra.", "Mi bisabuela recordaba con cariño las canciones que escuchaba en la radio.", "Después de revisar el examen, la maestra felicitó a todo el grupo por su esfuerzo.", "El colibrí puede volar hacia atrás gracias al movimiento veloz de sus alas.", "¿Sabías que el ajolote es capaz de regenerar partes de su cuerpo?", "Es importante reciclar el papel, el vidrio y el plástico para proteger el medio ambiente.", "La exposición sobre los dinosaurios atrajo a cientos de visitantes curiosos.", "Cuando el sol se ocultó, el cielo se pintó de naranja, rosa y violeta.", "El jurado eligió el cuento más original y lo publicó en el periódico escolar.", "Valentina practicó el piano todas las tardes hasta dominar la melodía.", "Hacia el norte del país, el clima es seco y las temperaturas cambian mucho."] }
];

const FLUIDEZ = [
  { id: "lolo", grade: 1, title: "Mi perro Lolo", text: "Tengo un perro. Se llama Lolo. Lolo es café y tiene orejas largas. Le gusta correr en el patio y jugar con su pelota roja. Cuando llego de la escuela, Lolo mueve la cola y salta de gusto. Yo le doy agua fresca y lo abrazo. Lolo es mi mejor amigo." },
  { id: "lluvia", grade: 1, title: "Hoy llueve", text: "Hoy llueve mucho. Las nubes son grises y el cielo hace ruido. Mi mamá saca el paraguas amarillo. Mi hermano y yo vemos las gotas por la ventana. Una gota corre rápido y otra va despacio. Cuando para la lluvia, salimos a ver los charcos. ¡Qué bonito huele la tierra mojada!" },
  { id: "mercado", grade: 2, title: "El mercado del domingo", text: "Todos los domingos voy al mercado con mi abuela. Ella lleva una bolsa de tela muy grande. Primero compramos naranjas, plátanos y una sandía. Después vamos al puesto de don Pepe, que vende pan dulce. Mi favorito es la concha de chocolate. Al final, mi abuela compra flores para la mesa. Regresamos a casa cansadas, pero muy contentas. Me gusta el mercado porque hay muchos colores, olores y sonidos." },
  { id: "frijol", grade: 2, title: "La semilla de frijol", text: "En la escuela, la maestra nos dio una semilla de frijol. La pusimos en un vaso con algodón mojado y la dejamos junto a la ventana. Cada mañana le poníamos un poco de agua. Al tercer día, la semilla se abrió y salió una raíz blanca. Luego apareció un tallo verde con dos hojitas. Aprendimos que las plantas necesitan agua, luz y aire para crecer. Ahora quiero sembrar un frijol en mi casa." },
  { id: "colibri", grade: 3, title: "Los colibríes", text: "Los colibríes son las aves más pequeñas del mundo. Algunos pesan menos que una moneda. Sus alas se mueven tan rápido que casi no podemos verlas, y por eso hacen un zumbido parecido al de una abeja. Son las únicas aves que pueden volar hacia atrás y quedarse quietas en el aire. Se alimentan del néctar de las flores, y mientras comen, llevan polen de una flor a otra. Así ayudan a que nazcan nuevas plantas. En México viven muchas especies de colibríes, y en invierno algunos llegan desde muy lejos." },
  { id: "abuela", grade: 3, title: "El cumpleaños de la abuela", text: "El sábado fue el cumpleaños número ochenta de mi abuela Rosa. Toda la familia se reunió en su casa desde temprano. Mis tíos colgaron papel picado en el patio y mi mamá preparó mole con arroz. Mis primos y yo hicimos una tarjeta con dibujos y una carta muy larga. Cuando llegó la hora del pastel, todos cantamos las mañanitas. Mi abuela sonrió y nos dijo que su mejor regalo era vernos juntos. Esa noche me quedé pensando en todas las historias que ella nos cuenta. Quiero recordarlas siempre." },
  { id: "silla", grade: 4, title: "El Cerro de la Silla", text: "Cuando miramos hacia el oriente de Monterrey, aparece una montaña con una forma muy especial: el Cerro de la Silla. Su nombre viene de la curva que se forma entre sus picos, que recuerda a la silla de montar de un caballo. Este cerro es el símbolo de la ciudad y aparece en escudos, logotipos y canciones. Además de ser bonito, es un área natural protegida. En sus laderas viven venados, zorras, tlacuaches y muchas aves. También crecen encinos, palmas y plantas del desierto. Muchas personas suben sus senderos los fines de semana, pero es importante hacerlo con agua, buen calzado y sin dejar basura. Cuidar el cerro es cuidar nuestra casa." },
  { id: "volcanes", grade: 4, title: "Los volcanes de México", text: "México es un país con muchos volcanes. La mayoría se encuentra en una franja que cruza el centro del país, desde el océano Pacífico hasta el golfo de México. Un volcán es una abertura en la superficie de la Tierra por donde salen lava, gases y ceniza. La lava es roca derretida que viene de lo más profundo del planeta. Algunos volcanes están dormidos y otros siguen activos, como el Popocatépetl, al que los habitantes cercanos llaman con cariño don Goyo. Los científicos lo observan día y noche con aparatos especiales para avisar a la población si hay peligro. Aunque pueden ser peligrosos, los volcanes también forman tierras muy fértiles para la agricultura." },
  { id: "ballena", grade: 5, title: "El largo viaje de la ballena gris", text: "Cada año, la ballena gris realiza uno de los viajes más largos del reino animal. Durante el verano se alimenta en las aguas frías del norte, cerca de Alaska, donde abundan pequeños crustáceos. Cuando llega el otoño, comienza a nadar hacia el sur, siguiendo la costa del océano Pacífico durante miles de kilómetros. Su destino son las lagunas tranquilas y tibias de Baja California. Ahí, entre enero y marzo, las hembras dan a luz a sus crías y les enseñan a nadar y a respirar en la superficie. Las crías crecen rápido gracias a la leche de su madre, que es muy rica en grasa. En primavera, madres y crías emprenden juntas el regreso al norte. Hace algunas décadas, la caza puso a esta especie en peligro, pero gracias a su protección, hoy podemos volver a verla en nuestros mares." },
  { id: "huerto", grade: 5, title: "El huerto de la escuela", text: "Al inicio del ciclo escolar, nuestro grupo propuso convertir un rincón olvidado del patio en un huerto. Al principio parecía imposible: la tierra estaba dura y llena de piedras. Con ayuda de algunos papás, limpiamos el terreno, preparamos composta con cáscaras de fruta y construimos cajones de madera. Luego elegimos qué sembrar: lechugas, rábanos, cilantro y jitomates. Nos organizamos en equipos para regar, quitar la hierba y anotar en una bitácora cuánto crecía cada planta. Descubrimos que los rábanos crecen muy rápido y que el jitomate necesita paciencia. Cuando cosechamos las primeras lechugas, preparamos una ensalada para toda la escuela. Ese día entendimos que el trabajo en equipo puede transformar cualquier lugar." },
  { id: "abejas", grade: 6, title: "Las guardianas de las flores", text: "Cuando pensamos en las abejas, casi siempre imaginamos miel. Sin embargo, su trabajo más valioso es otro: la polinización. Al visitar las flores para recoger néctar, las abejas transportan granos de polen que permiten que las plantas produzcan frutos y semillas. Gracias a ellas existen muchas de las frutas, verduras y semillas que comemos a diario, como las manzanas, los aguacates, las calabazas y las almendras. En los últimos años, los científicos han observado que las poblaciones de abejas están disminuyendo en varias partes del mundo. Entre las causas se encuentran el uso excesivo de pesticidas, la pérdida de los espacios naturales donde viven y los cambios en el clima. Proteger a las abejas está en nuestras manos: podemos sembrar plantas con flores, evitar los venenos en jardines y apoyar a los apicultores locales. Cuidar de ellas es, en realidad, cuidar de nuestra propia alimentación." },
  { id: "valentina", grade: 6, title: "La primera función", text: "Valentina llevaba tres meses ensayando para el concierto de fin de año. Todas las tardes, después de hacer la tarea, se sentaba frente al piano de su abuelo y repetía la misma pieza hasta que los dedos le dolían. Había partes que le salían perfectas, pero en el último compás siempre se equivocaba. La noche de la función, el auditorio estaba lleno. Cuando dijeron su nombre, sintió que el corazón le latía en los oídos. Respiró hondo, miró a su abuelo en la primera fila y comenzó a tocar. Las notas fluyeron una tras otra, como si conocieran el camino de memoria. Al llegar al último compás, sus manos dudaron un instante, pero esta vez no se detuvieron. El público aplaudió de pie. Valentina comprendió entonces que la práctica no busca la perfección, sino la confianza para seguir adelante aun cuando tenemos miedo." }
];

/* Estándares nacionales de habilidad lectora (SEP), palabras por minuto */
const PPM_STD = {
  1: [15, 35, 60], 2: [35, 60, 85], 3: [60, 85, 100], 4: [75, 100, 115], 5: [85, 115, 125], 6: [95, 125, 135]
};
const PPM_LABEL = ["Requiere apoyo", "Se acerca al estándar", "Estándar", "Avanzado"];
const ppmLevel = (grade, ppm) => { const s = PPM_STD[grade]; return ppm < s[0] ? 0 : ppm < s[1] ? 1 : ppm < s[2] ? 2 : 3; };

document.head.insertAdjacentHTML("beforeend", `<style>
.dlv{display:grid;gap:12px}
@media (min-width:720px){.dlv{grid-template-columns:repeat(2,1fr)}}
.dlv a{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:center;padding:16px 18px;border-radius:20px;background:var(--surface);border:1px solid var(--line);text-decoration:none;color:inherit}
.dlv a:hover{border-color:var(--c1)}
.dlv .mk{width:52px;height:52px;border-radius:16px;display:grid;place-items:center;background:var(--c2);color:var(--c1);font-weight:800;font-size:15px}
.dlv b{display:block;font-size:16.5px}.dlv small{color:var(--ink-2);font-size:13.5px}
.dmode{display:flex;gap:8px;margin-bottom:14px}
.dmode button{flex:1;padding:10px;border-radius:12px;border:1px solid var(--line);background:var(--surface);font:inherit;font-weight:700;font-size:14px;color:var(--ink-2);cursor:pointer}
.dmode button[aria-pressed="true"]{background:var(--c1);color:#fff;border-color:var(--c1)}
.dplay{display:flex;gap:10px;justify-content:center;margin:6px 0 18px}
.dplay button svg{flex:none;width:22px;height:22px}
.dplay button{display:flex;align-items:center;gap:8px;padding:14px 20px;border-radius:99px;border:0;font:inherit;font-weight:700;font-size:16px;cursor:pointer}
.dplay .big{background:var(--c1);color:#fff;padding:18px 28px;font-size:18px}
.dplay .slow{background:var(--c2);color:var(--c1)}
.dinput{width:100%;box-sizing:border-box;font:inherit;font-size:24px;font-weight:600;padding:16px 18px;border-radius:16px;border:2px solid var(--line);background:var(--bg);color:var(--ink);text-align:center}
.dinput:focus{outline:none;border-color:var(--c1)}
.dfb{margin-top:14px;padding:16px 18px;border-radius:18px;line-height:1.55}
.dfb.ok{background:var(--ok-soft)}.dfb.almost{background:var(--mustard-soft)}.dfb.no{background:var(--bad-soft)}
.dfb .ans{font-size:22px;font-weight:700;margin-top:6px}
.dfb .ans .w{border-radius:6px;padding:0 3px}.dfb .ans .w.x{background:#F3B7A9;color:#7A2414}
.dpaper{list-style:none;padding:0;margin:0;display:grid;gap:8px}
.dpaper li{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:14px;background:var(--bg);font-size:18px;font-weight:600}
.dpaper li .n{color:var(--c1);font-weight:800;min-width:24px}
.dpaper li button svg{width:20px;height:20px}
.dpaper li button{margin-left:auto;border:0;background:var(--c2);color:var(--c1);border-radius:99px;width:38px;height:38px;cursor:pointer;display:grid;place-items:center}
.fgr{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}
.fgr button{padding:9px 14px;border-radius:99px;border:1px solid var(--line);background:var(--surface);font:inherit;font-weight:700;font-size:14px;color:var(--ink-2);cursor:pointer}
.fgr button[aria-pressed="true"]{background:var(--navy);color:#fff;border-color:var(--navy)}
.ftext{font-size:var(--fs,22px);line-height:1.95;padding:22px 20px;border-radius:22px;background:var(--surface);border:1px solid var(--line);transition:filter .3s}
.ftext.hide{filter:blur(7px);user-select:none;pointer-events:none}
.ftext .w{border-radius:6px;padding:1px 2px;cursor:default}
.ftext.pick .w,.ftext.mark .w{cursor:pointer}
.ftext.pick .w:hover{background:var(--sky-soft)}
.ftext .w.err{background:#F3B7A9;color:#7A2414;text-decoration:line-through}
.ftext .w.after{opacity:.35}
.ftext .w.last{background:var(--navy);color:#fff}
.fbar{position:sticky;top:64px;z-index:5;display:flex;align-items:center;gap:12px;justify-content:space-between;padding:12px 14px;margin-bottom:12px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:0 6px 18px rgba(0,0,0,.06)}
.fbar .clock{font-size:30px;font-weight:800;font-variant-numeric:tabular-nums;color:var(--navy);min-width:86px}
.fbar .msg{font-size:14px;color:var(--ink-2);flex:1;line-height:1.35}
.fres{display:grid;gap:12px;margin-top:14px}
.fres .ppm{text-align:center;padding:22px;border-radius:22px;background:var(--surface);border:1px solid var(--line)}
.fres .ppm b{display:block;font-size:56px;line-height:1;color:var(--navy)}
.fres .ppm span{color:var(--ink-2);font-weight:600}
.fstats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.fstats div{padding:12px 6px;border-radius:16px;background:var(--surface);border:1px solid var(--line);text-align:center}
.fstats b{display:block;font-size:20px}.fstats small{font-size:12px;color:var(--ink-3);font-weight:600}
.fscale{padding:16px;border-radius:20px;background:var(--surface);border:1px solid var(--line)}
.fscale .bands{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin:10px 0 6px}
.fscale .bands i{height:12px;border-radius:6px;opacity:.3}
.fscale .bands i.on{opacity:1;outline:2px solid var(--ink);outline-offset:2px}
.fscale .names{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;font-size:11.5px;font-weight:700;color:var(--ink-2);text-align:center}
.fsave{display:flex;gap:8px}
.fsave input{flex:1;font:inherit;padding:12px 14px;border-radius:14px;border:1px solid var(--line);background:var(--bg);color:var(--ink)}
.fhist{width:100%;border-collapse:collapse;font-size:14px;margin-top:8px}
.fhist th,.fhist td{text-align:left;padding:9px 6px;border-bottom:1px solid var(--line)}
.fhist th{font-size:12px;color:var(--ink-3)}
</style>`);

const BANDC = ["#D2614E", "#E3A93B", "#3E9B6B", "#1E3A5F"];
const sayEs = (t, rate) => { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = "es-MX"; u.movaGender = "f"; u.rate = rate || 0.85; speechSynthesis.speak(u); } catch (e) {} };
const IC_PLAY = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
const leTabs = (cur) => `<nav class="mtabs" aria-label="Lectoescritura"><a href="#/lectoescritura" ${cur === "d" ? 'aria-current="page"' : ""}>Dictado</a><a href="#/lectoescritura/fluidez" ${cur === "f" ? 'aria-current="page"' : ""}>Fluidez lectora</a></nav>`;
const leHead = (back, backTxt, title, lead) => `<section class="page-head wrap"><a class="back" href="${back}">${ico("back", 18)} ${backTxt}</a><h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ""}</section>`;
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const DMARK = { silabas: "ma", palabras: "Aa", trabadas: "bl", oraciones: "Ab.", ortografia: "b/v", parrafo: "¶" };

/* ---------- Dictado ---------- */
function viewDictadoHome() {
  return {
    title: "Lectoescritura",
    html: `${leHead("#/", "Inicio", "Lectoescritura", "Dictado con audio para practicar la escritura y lecturas cronometradas para medir la fluidez lectora.")}
    <section class="wrap">${leTabs("d")}
      <div class="lehero"><div class="mfloat">${mochiSVG("phones")}</div><div class="bubble">¡Hola! Soy Mochi. Yo te dicto y tú escribes.<small>Elige un nivel para empezar.</small></div></div>
      <div class="dlv">${DICTADO.map((d) => `<a href="#/lectoescritura/dictado/${d.id}" style="${styleC(d)}"><span class="pic">${dArt(d.id)}</span><span><b>${d.name}</b><small>${d.grade} · 10 dictados por sesión</small></span></a>`).join("")}</div>
    </section>`
  };
}
const normSp = (s) => s.replace(/\s+/g, " ").trim();
const bare = (s) => normSp(s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[¡!¿?.,;:]/g, "").toLowerCase());
const noAcc = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function gradeDict(target, typed, sentence) {
  const t = normSp(typed);
  if (!t) return { k: "no", hints: ["No escribiste nada todavía."] };
  const exact = sentence ? t === target : t.toLowerCase() === target.toLowerCase();
  if (exact) return { k: "ok" };
  if (bare(t) === bare(target)) {
    const hints = [];
    const a = normSp(t.replace(/[¡!¿?.,;:]/g, "")).toLowerCase(), b = normSp(target.replace(/[¡!¿?.,;:]/g, "")).toLowerCase();
    if (a !== b) hints.push(noAcc(a) === noAcc(b) ? "Revisa los acentos." : "Revisa las letras.");
    if (sentence && t[0] !== target[0] && t[0].toLowerCase() === target[0].toLowerCase()) hints.push("Las oraciones empiezan con mayúscula.");
    if (sentence && t.replace(/[^¡!¿?.,;:]/g, "") !== target.replace(/[^¡!¿?.,;:]/g, "")) hints.push("Revisa los signos de puntuación (punto, coma, ¿? o ¡!).");
    if (sentence) { const tw = t.split(" "), gw = target.split(" "); if (tw.some((w, i) => gw[i] && w !== gw[i] && w.toLowerCase() === gw[i].toLowerCase() && i > 0)) hints.push("Revisa las mayúsculas: los nombres propios llevan mayúscula."); }
    return { k: "almost", hints: hints.length ? hints : ["Revisa los detalles."] };
  }
  return { k: "no", hints: [] };
}
function diffWords(target, typed) {
  const tw = bare(typed).split(" ");
  return target.split(" ").map((w, i) => `<span class="w ${bare(w) !== tw[i] ? "x" : ""}">${w}</span>`).join(" ");
}
function viewDictado(id) {
  const d = DICTADO.find((x) => x.id === id);
  if (!d) return viewNotFound("No encontramos ese dictado.", "#/lectoescritura", "Ver dictados");
  const sentence = ["oraciones", "ortografia", "parrafo"].includes(d.id);
  return {
    title: `Dictado: ${d.name}`,
    html: `${leHead("#/lectoescritura", "Lectoescritura", d.name, `${d.grade}. Escucha con atención y escribe lo que oyes. Puedes repetirlo las veces que necesites.`)}
    <section class="wrap" style="${styleC(d)}">
      <div class="dmode" role="group" aria-label="Modo"><button type="button" data-m="t" aria-pressed="true">Escribir aquí</button><button type="button" data-m="p" aria-pressed="false">Escribir en papel</button></div>
      <div id="dstage"></div>
    </section>`,
    mount(root) {
      const stage = $("#dstage", root);
      let mode = "t";
      const run = () => {
        const N = 10, list = shuffle(d.items).slice(0, N);
        let i = 0, score = 0; const marks = Array(N).fill(0);
        if (mode === "p") {
          const paper = () => {
            stage.innerHTML = `<div class="mq"><div class="mmeta"><span>Dictado en papel</span><span>${i + 1} / ${N}</span></div><div class="mprog"><i style="width:${(i / N) * 100}%"></i></div>
              <div class="mguide"><div>${mochiSVG("pencil")}</div><div class="bubble">Escribe el número ${i + 1} en tu cuaderno y lo que escuches.</div></div>
              <div class="dplay"><button class="big" id="d-play">${IC_PLAY} Escuchar</button><button class="slow" id="d-slow">Más despacio</button></div>
              <button type="button" class="btn btn-primary mnext" id="d-next">${i + 1 < N ? "Siguiente" : "Ver respuestas para revisar"}</button></div>`;
            const it = list[i];
            $("#d-play", stage).onclick = () => sayEs(it); $("#d-slow", stage).onclick = () => sayEs(it, 0.6);
            later(() => sayEs(it), 350);
            $("#d-next", stage).onclick = () => { i++; i < N ? paper() : reveal(); };
          };
          const reveal = () => {
            stage.innerHTML = `<div class="mq"><div class="mguide"><div>${mochiSVG("medal")}</div><div class="bubble">¡Terminamos! Ahora revisa tu cuaderno.</div></div><h2 style="margin:0 0 4px">Para revisar</h2><p style="margin:0 0 14px;color:var(--ink-2)">Compara con tu cuaderno y marca con una palomita las que escribiste bien.</p>
              <ol class="dpaper">${list.map((w, k) => `<li><span class="n">${k + 1}.</span><span>${w}</span><button type="button" data-k="${k}" aria-label="Escuchar">${IC_PLAY}</button></li>`).join("")}</ol>
              <div style="display:grid;gap:10px;margin-top:16px"><button type="button" class="btn btn-primary" id="d-again">Otro dictado</button></div></div>`;
            $$(".dpaper button", stage).forEach((b) => (b.onclick = () => sayEs(list[+b.dataset.k])));
            $("#d-again", stage).onclick = run;
          };
          return paper();
        }
        const show = () => {
          const it = list[i];
          stage.innerHTML = `<div class="mq"><div class="mmeta"><span>${d.grade}</span><span>${i + 1} / ${N}</span></div>${starRow(marks)}
            <div class="mguide" id="d-guide"><div>${mochiSVG("phones")}</div><div class="bubble" id="d-say">Escucha lo que digo y escríbelo.</div></div>
            <div class="dplay"><button class="big" id="d-play">${IC_PLAY} Escuchar</button><button class="slow" id="d-slow">Más despacio</button></div>
            <input class="dinput" id="d-in" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="Escribe lo que escuchaste" placeholder="Escribe aquí">
            <button type="button" class="btn btn-primary mnext" id="d-check">Comprobar</button><div id="d-fb"></div></div>`;
          const inp = $("#d-in", stage);
          $("#d-play", stage).onclick = () => { sayEs(it); inp.focus(); }; $("#d-slow", stage).onclick = () => { sayEs(it, 0.6); inp.focus(); };
          later(() => sayEs(it), 350);
          let tries = 0;
          const check = () => {
            const r = gradeDict(it, inp.value, sentence);
            if (r.k === "almost" && tries === 0) { tries++; $("#d-fb", stage).innerHTML = `<div class="dfb almost"><b>¡Casi!</b> ${r.hints.join(" ")} Corrige y vuelve a comprobar.</div>`; inp.focus(); return; }
            if (r.k === "no" && !inp.value.trim()) { $("#d-fb", stage).innerHTML = `<div class="dfb almost">${r.hints[0]}</div>`; return; }
            if (r.k === "ok") score++;
            marks[i] = r.k === "ok" ? 1 : 2;
            $(".stars", stage).outerHTML = starRow(marks);
            reactM($("#d-guide", stage), r.k === "ok" ? "happy" : "sad");
            $("#d-say", stage).textContent = r.k === "ok" ? P(PRAISE) : P(CHEER);
            inp.disabled = true;
            $("#d-check", stage).remove();
            $("#d-fb", stage).innerHTML = `<div class="dfb ${r.k === "ok" ? "ok" : "no"}"><b>${r.k === "ok" ? "¡Muy bien escrito!" : "Así se escribe:"}</b><div class="ans">${r.k === "ok" ? it : diffWords(it, inp.value)}</div>${r.k !== "ok" && r.hints.length ? `<div style="margin-top:6px">${r.hints.join(" ")}</div>` : ""}</div>
              <button type="button" class="btn btn-primary mnext" id="d-next">${i + 1 < N ? "Siguiente" : "Ver resultado"}</button>`;
            const nx = $("#d-next", stage); nx.focus();
            nx.onclick = () => { i++; i < N ? show() : finish(); };
          };
          $("#d-check", stage).onclick = check;
          inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && $("#d-check", stage)) check(); });
          setTimeout(() => inp.focus(), 100);
        };
        const finish = () => {
          const msg = score >= 9 ? "¡Excelente escritura!" : score >= 7 ? "¡Muy bien! Ya casi todo está perfecto." : score >= 5 ? "Vas avanzando. Escucha con calma y fíjate en cada sonido." : "Sigue practicando: escuchar despacio ayuda mucho.";
          const st = score >= 9 ? 3 : score >= 6 ? 2 : 1;
          stage.innerHTML = `<div class="mq mdone"><div class="medal" id="d-medal">${mochiSVG("medal")}</div><div class="stars big">${[1, 2, 3].map((k) => STAR(k <= st)).join("")}</div><div class="big">${score}/10</div><h2>${d.name}</h2><p>${msg}</p><div style="display:grid;gap:10px;margin-top:16px"><button type="button" class="btn btn-primary" id="d-again">Otro dictado</button><a class="btn btn-ghost" href="#/lectoescritura">Cambiar de nivel</a></div></div>`;
          $("#d-again", stage).onclick = run;
          setTimeout(() => reactM($("#d-medal", stage), "happy"), 100); if (score >= 7) confetti();
        };
        show();
      };
      $$(".dmode button", root).forEach((b) => (b.onclick = () => { mode = b.dataset.m; $$(".dmode button", root).forEach((x) => x.setAttribute("aria-pressed", x === b)); speechSynthesis.cancel(); run(); }));
      run();
    }
  };
}

/* ---------- Fluidez lectora ---------- */
const FKEY = "mova-fluidez";
const fHist = () => { try { return JSON.parse(localStorage.getItem(FKEY) || "[]"); } catch (e) { return []; } };
const fSave = (h) => { try { localStorage.setItem(FKEY, JSON.stringify(h.slice(-60))); } catch (e) {} };
const wc = (t) => t.split(/\s+/).filter(Boolean).length;
let fGrade = 0;
function viewFluidez() {
  return {
    title: "Fluidez lectora",
    html: `${leHead("#/", "Inicio", "Lectoescritura", "Lecturas cronometradas para medir cuántas palabras por minuto lee el alumno, con referencia a los estándares de la SEP.")}
    <section class="wrap">${leTabs("f")}
      <div class="lehero"><div class="mfloat">${mochiSVG("book")}</div><div class="bubble">¡A leer en voz alta! Yo te tomo el tiempo.<small>Lee claro, sin prisa y con buena entonación.</small></div></div>
      <div class="fgr" role="group" aria-label="Grado"><button type="button" data-g="0">Todos</button>${[1, 2, 3, 4, 5, 6].map((g) => `<button type="button" data-g="${g}">${g}° primaria</button>`).join("")}</div>
      <div class="dlv" id="f-list"></div>
      <div id="f-hist" style="margin-top:26px"></div>
    </section>`,
    mount(root) {
      const paint = () => {
        $$(".fgr button", root).forEach((b) => b.setAttribute("aria-pressed", +b.dataset.g === fGrade));
        $("#f-list", root).innerHTML = FLUIDEZ.filter((f) => !fGrade || f.grade === fGrade).map((f) => `<a href="#/lectoescritura/fluidez/${f.id}" style="${styleC({ c: ["coral", "mustard", "sky", "mint", "navy", "coral"][f.grade - 1] })}"><span class="pic">${fArt(f.id)}</span><span><b>${f.title}</b><small>${f.grade}° primaria · ${wc(f.text)} palabras</small></span></a>`).join("");
      };
      $$(".fgr button", root).forEach((b) => (b.onclick = () => { fGrade = +b.dataset.g; paint(); }));
      paint();
      const hist = () => {
        const h = fHist().slice().reverse();
        $("#f-hist", root).innerHTML = !h.length ? "" : `<h2 style="font-size:19px;margin:0">Historial de lecturas</h2>
          <div style="overflow-x:auto"><table class="fhist"><thead><tr><th>Alumno</th><th>Lectura</th><th>PPM</th><th>Nivel</th><th>Fecha</th></tr></thead><tbody>${h.map((r) => `<tr><td>${esc(r.n || "—")}</td><td>${esc(r.t)}</td><td><b>${r.p}</b></td><td><span style="color:${BANDC[r.l]};font-weight:700">${PPM_LABEL[r.l]}</span></td><td>${new Date(r.d).toLocaleDateString("es-MX", { day: "numeric", month: "short" })}</td></tr>`).join("")}</tbody></table></div>
          <button type="button" class="btn btn-ghost" id="f-clear" style="margin-top:10px">Borrar historial</button>`;
        const c = $("#f-clear", root); if (c) c.onclick = () => { if (confirm("¿Borrar todo el historial de lecturas?")) { fSave([]); hist(); } };
      };
      hist();
    }
  };
}

function viewFluidezRead(id) {
  const f = FLUIDEZ.find((x) => x.id === id);
  if (!f) return viewNotFound("No encontramos esa lectura.", "#/lectoescritura/fluidez", "Ver lecturas");
  const words = f.text.split(/\s+/).filter(Boolean);
  const fs = [30, 27, 24, 22, 21, 20][f.grade - 1];
  return {
    title: f.title,
    html: `${leHead("#/lectoescritura/fluidez", "Fluidez lectora", f.title, `${f.grade}° primaria · ${words.length} palabras`)}
    <section class="wrap">
      <div class="dmode" role="group" aria-label="Modo" style="--c1:var(--navy)"><button type="button" data-m="full" aria-pressed="true">Lectura completa</button><button type="button" data-m="min" aria-pressed="false">Un minuto</button></div>
      <div class="fbar" id="f-bar"><span class="clock" id="f-clock">0:00</span><span class="msg" id="f-msg">El texto se descubre al presionar Empezar. El alumno lee en voz alta.</span><button type="button" class="btn btn-primary" id="f-btn">Empezar</button></div>
      <div class="ftop">${fArt(f.id, "fart")}</div>
      <div class="ftext hide" id="f-text" style="--fs:${fs}px"><h2 style="font-size:1.05em;margin:0 0 8px">${esc(f.title)}</h2>${words.map((w, i) => `<span class="w" data-i="${i}">${esc(w)}</span>`).join(" ")}</div>
      <div id="f-res"></div>
    </section>`,
    mount(root) {
      let mode = "full", t0 = 0, secs = 0, tick = null, last = words.length - 1, phase = "idle";
      const bar = { clock: $("#f-clock", root), msg: $("#f-msg", root), btn: $("#f-btn", root) }, txt = $("#f-text", root), res = $("#f-res", root);
      const spans = $$(".w", txt);
      const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
      const reset = () => {
        clearInterval(tick); phase = "idle"; secs = 0; last = words.length - 1;
        txt.className = "ftext hide"; spans.forEach((s) => (s.className = "w")); res.innerHTML = "";
        bar.clock.textContent = mode === "min" ? "1:00" : "0:00";
        bar.msg.textContent = mode === "min" ? "Tendrá un minuto para leer. Al terminar, toca la última palabra que leyó." : "El texto se descubre al presionar Empezar. El alumno lee en voz alta.";
        bar.btn.textContent = "Empezar"; bar.btn.style.display = ""; $("#f-bar", root).style.display = "";
      };
      $$(".dmode button", root).forEach((b) => (b.onclick = () => { if (phase === "run") return; mode = b.dataset.m; $$(".dmode button", root).forEach((x) => x.setAttribute("aria-pressed", x === b)); reset(); }));
      const stop = () => {
        clearInterval(tick);
        if (mode === "full") { secs = (Date.now() - t0) / 1000; return marking(); }
        secs = 60; phase = "pick"; txt.className = "ftext pick";
        bar.clock.textContent = "0:00"; bar.msg.textContent = "¡Tiempo! Toca la última palabra que leyó el alumno."; bar.btn.style.display = "none";
        try { navigator.vibrate && navigator.vibrate(300); } catch (e) {}
      };
      const marking = () => {
        phase = "mark"; txt.className = "ftext mark";
        spans.forEach((s, i) => { if (i > last) s.classList.add("after"); });
        bar.clock.textContent = fmt(secs);
        bar.msg.textContent = "Opcional: toca las palabras que leyó con error para descontarlas.";
        bar.btn.style.display = ""; bar.btn.textContent = "Ver resultado";
      };
      txt.addEventListener("click", (e) => {
        const w = e.target.closest(".w"); if (!w) return; const i = +w.dataset.i;
        if (phase === "pick") { last = i; w.classList.add("last"); setTimeout(() => { w.classList.remove("last"); marking(); }, 250); }
        else if (phase === "mark" && i <= last) w.classList.toggle("err");
      });
      bar.btn.onclick = () => {
        if (phase === "idle") {
          phase = "run"; txt.className = "ftext"; t0 = Date.now(); bar.btn.textContent = mode === "min" ? "Detener" : "Terminé";
          bar.msg.textContent = mode === "min" ? "Lee en voz alta, claro y a buen ritmo." : "Presiona Terminé cuando lea la última palabra.";
          tick = setInterval(() => { const s = (Date.now() - t0) / 1000; if (mode === "min") { bar.clock.textContent = fmt(Math.max(0, 60 - s)); if (s >= 60) stop(); } else bar.clock.textContent = fmt(s); }, 200);
          timers.push(tick);
        } else if (phase === "run") {
          if (mode === "min") { secs = (Date.now() - t0) / 1000; clearInterval(tick); phase = "pick"; txt.className = "ftext pick"; bar.msg.textContent = "Toca la última palabra que leyó el alumno."; bar.btn.style.display = "none"; }
          else stop();
        } else if (phase === "mark") result();
      };
      const result = () => {
        phase = "done"; $("#f-bar", root).style.display = "none"; txt.className = "ftext";
        const read = last + 1, errs = spans.filter((s) => s.classList.contains("err")).length, ok = read - errs;
        const min = Math.max(secs, 1) / 60, ppm = Math.round(ok / min), acc = Math.round((ok / read) * 100), lv = ppmLevel(f.grade, ppm);
        bar.msg.textContent = "Resultado listo.";
        const std = PPM_STD[f.grade];
        const fmsg = ["¡Sigue practicando! Leer un poquito cada día hace la diferencia.", "¡Vas muy bien! Ya casi llegas a la meta de tu grado.", "¡Excelente! Lees al ritmo esperado para tu grado.", "¡Increíble! Lees por arriba de lo esperado para tu grado."][lv];
        res.innerHTML = `<div class="fres">
          <div class="lehero" style="margin:0"><div id="f-medal">${mochiSVG("medal")}</div><div class="bubble">${fmsg}</div></div>
          <div class="stars big" style="margin:0">${[0, 1, 2, 3].map((k) => STAR(k <= lv)).join("")}</div>
          <div class="ppm"><b>${ppm}</b><span>palabras correctas por minuto</span></div>
          <div class="fstats"><div><b>${read}</b><small>Leídas</small></div><div><b>${errs}</b><small>Errores</small></div><div><b>${acc}%</b><small>Precisión</small></div><div><b>${fmt(secs)}</b><small>Tiempo</small></div></div>
          <div class="fscale"><b>Nivel para ${f.grade}° de primaria: <span style="color:${BANDC[lv]}">${PPM_LABEL[lv]}</span></b>
            <div class="bands">${BANDC.map((c, k) => `<i style="background:${c}" class="${k === lv ? "on" : ""}"></i>`).join("")}</div>
            <div class="names"><span>Menos de ${std[0]}</span><span>${std[0]}–${std[1] - 1}</span><span>${std[1]}–${std[2] - 1}</span><span>${std[2]} o más</span></div>
            <p style="margin:10px 0 0;font-size:13px;color:var(--ink-3)">Referencia: estándares nacionales de velocidad lectora de la SEP.</p></div>
          <div class="fsave"><input id="f-name" placeholder="Nombre del alumno (opcional)" aria-label="Nombre del alumno"><button type="button" class="btn btn-primary" id="f-save">Guardar</button></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><button type="button" class="btn btn-ghost" id="f-again">Leer de nuevo</button><a class="btn btn-ghost" href="#/lectoescritura/fluidez">Otra lectura</a></div></div>`;
        $("#f-save", res).onclick = () => { const h = fHist(); h.push({ n: $("#f-name", res).value.trim(), t: f.title, g: f.grade, p: ppm, l: lv, d: Date.now() }); fSave(h); $("#f-save", res).textContent = "Guardado"; $("#f-save", res).disabled = true; };
        $("#f-again", res).onclick = () => { reset(); window.scrollTo({ top: 0, behavior: "smooth" }); };
        res.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => reactM($("#f-medal", res), "happy"), 400); if (lv >= 2) confetti();
      };
      reset();
    }
  };
}

ROUTES.lectoescritura = (p) => (!p[0] ? viewDictadoHome() : p[0] === "dictado" ? viewDictado(p[1]) : p[0] === "fluidez" ? (p[1] ? viewFluidezRead(p[1]) : viewFluidez()) : viewNotFound());

/* ---------- Accesos ---------- */
(function () {
  const prevH = window.viewHome;
  window.viewHome = function () {
    const v = prevH();
    v.html = v.html.replace('<div class="areas">', `<div class="areas"><a class="area" href="#/lectoescritura" data-c="mint"><span class="thumb" aria-hidden="true"><svg viewBox="0 0 120 90" width="100%" height="100%"><rect x="14" y="12" width="92" height="66" rx="12" fill="#DDEEE5"/><path d="M30 60c8-16 14-16 18 0s10 16 18 0 14-16 18 0" fill="none" stroke="#1E3A5F" stroke-width="4" stroke-linecap="round"/><text x="34" y="44" font-family="Poppins,sans-serif" font-size="20" font-weight="800" fill="#E8846B">Aa</text><circle cx="88" cy="34" r="9" fill="none" stroke="#1E3A5F" stroke-width="3"/><path d="M88 29v5l3 2" stroke="#1E3A5F" stroke-width="2.4" stroke-linecap="round"/></svg></span><h3>Lectoescritura</h3><p>Dictado con audio y lecturas de fluidez con palabras por minuto.</p></a>`);
    return v;
  };
  const prevLe = ROUTES.lecturas;
  ROUTES.lecturas = (p) => { const v = prevLe(p); if (!p || !p[0]) v.html = v.html.replace(/(<\/section>)/, `$1<section class="wrap"><a class="es-banner" href="#/lectoescritura/fluidez" style="margin-top:0"><span class="mark" style="background:var(--mint-soft);color:var(--mint)">PPM</span><span><b>Fluidez lectora</b><small>Lecturas cronometradas de 1° a 6° con palabras por minuto y referencia SEP.</small></span><span>${ico("clock", 20)}</span></a></section>`); return v; };
})();

/* =====================================================================
   FASE 5 — Lecturas en inglés: MOVA Kids hasta 6 por nivel
   ===================================================================== */
READINGS.push(
  /* ---------- Pre-A1 ---------- */
  {
    id: "kids-my-family", level: "Pre-A1", stage: "kids", topic: "Family", title: "My Family",
    description: "Meet Nico and the people in his family.",
    text: [
      "Hi! My name is Nico. I am six.",
      "This is my mom. She is tall. This is my dad. He is funny.",
      "I have a sister. Her name is Ana. She is two.",
      "I have a grandma, too. She makes cookies.",
      "We have a dog. His name is Max.",
      "I love my family!"
    ],
    vocab: [["mom", "your mother"], ["dad", "your father"], ["sister", "a girl in your family, like you"], ["tall", "big from the floor to the head"], ["funny", "he makes you laugh"]],
    questions: [
      ["How old is Nico?", ["six", "two", "ten"]],
      ["What is Dad like?", ["funny", "tall", "sad"]],
      ["Who is Ana?", ["his sister", "his mom", "his grandma"]],
      ["What does Grandma make?", ["cookies", "pizza", "a cake"]],
      ["What is the dog’s name?", ["Max", "Nico", "Pip"]]
    ]
  },
  {
    id: "kids-on-the-farm", level: "Pre-A1", stage: "kids", topic: "Animals", title: "On the Farm",
    description: "Look at the animals on Uncle Joe’s farm.",
    text: [
      "This is Uncle Joe’s farm. It is big and green.",
      "Look! A cow. The cow is black and white. It says “moo.”",
      "Look! A duck. The duck is in the water. It says “quack.”",
      "Look! Three pigs. They are pink and fat.",
      "Look! A horse. It is brown. I can ride the horse!",
      "I like the farm."
    ],
    vocab: [["farm", "a place with animals and plants"], ["cow", "an animal that gives milk"], ["duck", "a bird that swims"], ["pig", "a pink animal with a short tail"], ["horse", "a big animal you can ride"]],
    questions: [
      ["Whose farm is it?", ["Uncle Joe’s", "Grandma’s", "Nico’s"]],
      ["What color is the cow?", ["black and white", "brown", "pink"]],
      ["Where is the duck?", ["in the water", "on the horse", "in the house"]],
      ["How many pigs are there?", ["three", "one", "five"]],
      ["What animal can the child ride?", ["the horse", "the cow", "the pig"]]
    ]
  },
  {
    id: "kids-my-lunch-box", level: "Pre-A1", stage: "kids", topic: "Food", title: "My Lunch Box",
    description: "What is in Sofi’s lunch box today?",
    text: [
      "This is my lunch box. It is blue.",
      "What is in my lunch box?",
      "A sandwich. I like sandwiches!",
      "An apple. It is red.",
      "Two carrots. They are orange.",
      "And water in a bottle.",
      "I eat my lunch at school with my friend Leo. Yum!"
    ],
    vocab: [["lunch box", "a box for your food"], ["sandwich", "bread with food in the middle"], ["apple", "a round red or green fruit"], ["carrot", "a long orange vegetable"], ["bottle", "you put water in it"]],
    questions: [
      ["What color is the lunch box?", ["blue", "red", "orange"]],
      ["What color is the apple?", ["red", "green", "yellow"]],
      ["How many carrots are there?", ["two", "one", "three"]],
      ["What is the drink?", ["water", "milk", "juice"]],
      ["Who eats with the child?", ["Leo", "Mom", "Max"]]
    ]
  },
  {
    id: "kids-my-toy-box", level: "Pre-A1", stage: "kids", topic: "Toys", title: "My Toy Box",
    description: "Open the toy box and see what is inside.",
    text: [
      "I have a big toy box. Let’s open it!",
      "Here is my teddy bear. He is soft and brown.",
      "Here is my car. It is small and fast.",
      "Here are my blocks. They are red, blue and yellow.",
      "Here is my doll. She has a pink dress.",
      "I play with my toys every day. Then I put them in the box."
    ],
    vocab: [["toy", "a thing you play with"], ["teddy bear", "a soft toy bear"], ["soft", "nice to touch, not hard"], ["blocks", "toys you put on top of each other"], ["doll", "a toy that looks like a person"]],
    questions: [
      ["Is the toy box big or small?", ["big", "small", "pink"]],
      ["What is the teddy bear like?", ["soft and brown", "small and fast", "red and blue"]],
      ["What is small and fast?", ["the car", "the doll", "the box"]],
      ["What does the doll have?", ["a pink dress", "a red hat", "blue shoes"]],
      ["Where do the toys go after playing?", ["in the box", "on the bed", "in the garden"]]
    ]
  },

  /* ---------- A1 ---------- */
  {
    id: "kids-sams-birthday", level: "A1", stage: "kids", topic: "Celebrations", title: "Sam’s Birthday Party",
    description: "Today is Sam’s birthday. Who comes to his party?",
    text: [
      "Today is Saturday and it is Sam’s birthday. He is seven years old!",
      "There are balloons in the garden. They are green and yellow, Sam’s favorite colors. His mom makes a big chocolate cake.",
      "At four o’clock, his friends arrive. Lucy has a present with a red bow. Tom has a card with a dinosaur on it.",
      "The children play games and dance to music. Then it is time for the cake. Everybody sings “Happy Birthday.” Sam closes his eyes, makes a wish and blows out the candles.",
      "What is the wish? It’s a secret!"
    ],
    vocab: [["birthday", "the day you were born, every year"], ["balloon", "a colorful ball full of air"], ["present", "a gift"], ["wish", "something you want to happen"], ["candle", "it gives light and goes on a cake"]],
    questions: [
      ["How old is Sam today?", ["seven", "six", "eight"]],
      ["What are Sam’s favorite colors?", ["green and yellow", "red and blue", "black and white"]],
      ["What kind of cake does Mom make?", ["chocolate", "strawberry", "lemon"]],
      ["What is on Tom’s card?", ["a dinosaur", "a cat", "a car"]],
      ["What is Sam’s wish?", ["It’s a secret.", "a new bike", "a puppy"]]
    ]
  },
  {
    id: "kids-at-the-zoo", level: "A1", stage: "kids", topic: "Animals", title: "A Day at the Zoo",
    description: "Emma visits the zoo with her class. Which animal is her favorite?",
    text: [
      "Emma’s class goes to the zoo today. The children are very excited.",
      "First, they see the elephants. Elephants are very big and gray. They have long noses called trunks.",
      "Next, they see the monkeys. The monkeys jump from tree to tree. They are noisy and funny.",
      "Then they visit the giraffes. Giraffes have very long necks. They eat leaves from the top of the trees.",
      "Last, they see a tiger. It is orange with black stripes. It is sleeping on a rock.",
      "“What is your favorite animal?” asks the teacher. “The giraffe!” says Emma. “I want a long neck, too!”"
    ],
    vocab: [["zoo", "a place where you can see wild animals"], ["trunk", "an elephant’s long nose"], ["noisy", "making a lot of sound"], ["neck", "the part between your head and body"], ["stripes", "long lines of color"]],
    questions: [
      ["Who goes to the zoo with Emma?", ["her class", "her grandma", "her dog"]],
      ["What do elephants have?", ["long noses called trunks", "black stripes", "long necks"]],
      ["What do the monkeys do?", ["They jump from tree to tree.", "They sleep on a rock.", "They eat leaves."]],
      ["What is the tiger doing?", ["sleeping on a rock", "eating leaves", "jumping"]],
      ["What is Emma’s favorite animal?", ["the giraffe", "the tiger", "the monkey"]]
    ]
  },
  {
    id: "kids-pancakes-with-grandpa", level: "A1", stage: "kids", topic: "Food", title: "Pancakes with Grandpa",
    description: "Every Sunday, Mateo cooks breakfast with his grandpa.",
    text: [
      "Every Sunday, Mateo makes pancakes with his grandpa. It is their special breakfast.",
      "First, they put flour, milk and two eggs in a big bowl. Mateo mixes everything with a spoon. Grandpa adds a little sugar.",
      "Next, Grandpa heats the pan. He is careful because the pan is very hot. Mateo watches.",
      "Grandpa makes the pancakes round and flat. When there are bubbles on top, he turns them over. Mateo counts: “One, two, three… ten pancakes!”",
      "They put honey and bananas on the pancakes. Grandma comes to the kitchen. “Mmm, it smells delicious!” she says."
    ],
    vocab: [["flour", "white powder for making bread and cakes"], ["bowl", "a round dish for food"], ["mix", "to put things together and move them"], ["pan", "a flat pot for cooking"], ["delicious", "very, very good to eat"]],
    questions: [
      ["When do they make pancakes?", ["every Sunday", "every Monday", "on birthdays"]],
      ["How many eggs do they use?", ["two", "one", "ten"]],
      ["Why is Grandpa careful?", ["The pan is very hot.", "The eggs are small.", "Mateo is sleeping."]],
      ["How many pancakes does Mateo count?", ["ten", "three", "seven"]],
      ["What do they put on the pancakes?", ["honey and bananas", "chocolate and nuts", "cheese"]]
    ]
  },
  {
    id: "kids-lucy-can-swim", level: "A1", stage: "kids", topic: "Sports", title: "Lucy Can Swim",
    description: "Lucy can’t swim at the start of the summer. Can she swim at the end?",
    text: [
      "Lucy is eight. She can run fast and she can ride a bike, but she can’t swim.",
      "This summer, Lucy goes to swimming lessons. Her teacher’s name is Coach Rita. She is kind and patient.",
      "On Monday, Lucy is scared of the water. She holds the side of the pool. On Wednesday, she can put her face in the water and blow bubbles.",
      "On Friday, she can kick her legs and float on her back. Coach Rita says, “Great job, Lucy!”",
      "At the end of the summer, Lucy can swim from one side of the pool to the other. Her family claps and cheers. Lucy is very proud."
    ],
    vocab: [["swim", "to move in the water with your arms and legs"], ["lesson", "a class where you learn something"], ["patient", "calm, not angry when you wait"], ["float", "to stay on top of the water"], ["proud", "happy because you did something well"]],
    questions: [
      ["What can’t Lucy do at first?", ["swim", "run fast", "ride a bike"]],
      ["Who is Coach Rita?", ["her swimming teacher", "her sister", "her friend"]],
      ["How does Lucy feel on Monday?", ["scared", "proud", "tired"]],
      ["What can Lucy do on Wednesday?", ["put her face in the water", "float on her back", "swim across the pool"]],
      ["How does Lucy feel at the end?", ["very proud", "sad", "scared"]]
    ]
  },
  {
    id: "kids-our-new-puppy", level: "A1", stage: "kids", topic: "Animals", title: "Our New Puppy",
    description: "The Torres family has a new puppy. What do they call her?",
    text: [
      "The Torres family has a new puppy. She is small and white with one black ear.",
      "The children want to give her a name. Diego says, “Snowball!” Paula says, “Cookie!” Dad says, “Let’s wait and see.”",
      "The puppy runs everywhere. She plays with socks and shoes. She sleeps in a little basket next to Paula’s bed.",
      "Every morning, Diego gives her food and fresh water. In the afternoon, Paula takes her for a short walk.",
      "One day, the puppy finds a bag of cookies under the table and eats one! Everybody laughs. “That’s her name,” says Dad. “Cookie!”"
    ],
    vocab: [["puppy", "a baby dog"], ["everywhere", "in all places"], ["basket", "a container made of thin sticks"], ["fresh", "new and clean"], ["walk", "a short trip on your feet"]],
    questions: [
      ["What color is the puppy?", ["white with one black ear", "all black", "brown"]],
      ["What name does Diego want?", ["Snowball", "Cookie", "Max"]],
      ["Where does the puppy sleep?", ["in a basket next to Paula’s bed", "in the garden", "under the table"]],
      ["Who takes the puppy for a walk?", ["Paula", "Diego", "Mom"]],
      ["Why is her name Cookie?", ["She eats a cookie.", "She is brown like a cookie.", "Diego likes cookies."]]
    ]
  },

  /* ---------- A1+ ---------- */
  {
    id: "kids-lost-teddy", level: "A1+", stage: "kids", topic: "Family", title: "Where Is Mr. Buttons?",
    description: "Olivia can’t sleep without her teddy bear. Where did he go?",
    text: [
      "Last night, Olivia couldn’t sleep. Her teddy bear, Mr. Buttons, wasn’t on her bed.",
      "“Mom! Mr. Buttons is lost!” she shouted. Mom came to her room and they looked everywhere. They looked under the bed, in the closet and behind the door. He wasn’t there.",
      "Then Olivia remembered something. In the afternoon, she played tea party in the garden with her brother, Leo.",
      "Mom and Olivia took a flashlight and went outside. It was dark and a little cold. Next to the little table, there was Mr. Buttons! He was sitting on a chair with a cup in front of him.",
      "Olivia hugged him and laughed. “Sorry, Mr. Buttons. The party finished a long time ago!” Five minutes later, they were both asleep."
    ],
    vocab: [["lost", "you can’t find it"], ["closet", "a small room for clothes"], ["remember", "to think of something again"], ["flashlight", "a small light you hold in your hand"], ["hug", "to put your arms around someone"]],
    questions: [
      ["Who is Mr. Buttons?", ["Olivia’s teddy bear", "her brother", "her dog"]],
      ["Where did they look first?", ["under the bed", "in the garden", "in the kitchen"]],
      ["What did Olivia play in the afternoon?", ["tea party", "football", "hide and seek"]],
      ["Where was Mr. Buttons?", ["on a chair in the garden", "in the closet", "behind the door"]],
      ["What happened five minutes later?", ["They were both asleep.", "Leo came home.", "It started to rain."]]
    ]
  },
  {
    id: "kids-picnic-day", level: "A1+", stage: "kids", topic: "Places", title: "The Picnic and the Ants",
    description: "A sunny day, a delicious picnic and some very small visitors.",
    text: [
      "On Sunday, the weather was sunny and warm, so Carla’s family went to the park for a picnic.",
      "Dad carried the big basket and Mom brought a blanket. Inside the basket there were sandwiches, watermelon, juice and some cookies.",
      "They found a nice place under a big tree and sat on the blanket. Carla and her brother played with a frisbee before lunch.",
      "When they came back, Carla saw a long black line on the blanket. “Ants!” she said. The ants were carrying little pieces of cookie to their home.",
      "At first, Carla was angry. Then she watched them carefully. The ants worked together and carried pieces bigger than their bodies! “They are very strong,” she said. In the end, they shared one cookie with the ants."
    ],
    vocab: [["picnic", "a meal you eat outside"], ["blanket", "a big piece of soft cloth"], ["frisbee", "a flat round toy you throw"], ["ant", "a very small insect that lives in big groups"], ["share", "to give part of something to others"]],
    questions: [
      ["What was the weather like?", ["sunny and warm", "rainy", "cold"]],
      ["Who carried the basket?", ["Dad", "Mom", "Carla"]],
      ["What did Carla and her brother play?", ["frisbee", "football", "tag"]],
      ["What were the ants carrying?", ["little pieces of cookie", "watermelon", "bread"]],
      ["What did Carla learn about ants?", ["They are very strong and work together.", "They are dangerous.", "They like juice."]]
    ]
  },
  {
    id: "kids-first-bike-ride", level: "A1+", stage: "kids", topic: "Sports", title: "My First Bike Ride",
    description: "Andrés learned to ride a bike without training wheels. It wasn’t easy!",
    text: [
      "For my birthday, I got a new blue bike. It was beautiful, but it didn’t have training wheels.",
      "On Saturday morning, my dad and I went to the park. I put on my helmet and sat on the bike. My legs were shaking!",
      "Dad held the back of the seat. “Look ahead, not down,” he said. I started to pedal. One, two, three… I fell! I hurt my knee a little, but I didn’t cry.",
      "I tried again and again. On the fifth try, I pedaled very fast. I looked back and Dad wasn’t holding the seat. I was riding alone!",
      "I rode around the park two times. Dad clapped and shouted, “You did it!” Now I ride my bike every weekend."
    ],
    vocab: [["training wheels", "small wheels that help you ride a bike"], ["helmet", "a hard hat that protects your head"], ["pedal", "to push with your feet to move a bike"], ["knee", "the middle part of your leg"], ["alone", "with nobody else"]],
    questions: [
      ["What did Andrés get for his birthday?", ["a new blue bike", "a helmet", "a skateboard"]],
      ["Why were his legs shaking?", ["He was nervous.", "It was cold.", "He was tired."]],
      ["What did Dad say?", ["“Look ahead, not down.”", "“Go home.”", "“Close your eyes.”"]],
      ["On which try did he ride alone?", ["the fifth", "the first", "the second"]],
      ["How often does he ride now?", ["every weekend", "every morning", "once a year"]]
    ]
  },
  {
    id: "kids-mia-and-the-butterfly", level: "A1+", stage: "kids", topic: "Science", title: "Mia and the Caterpillar",
    description: "Mia finds a hungry caterpillar. What happens to it?",
    text: [
      "One day in spring, Mia found a little green caterpillar on a leaf in her garden. It was eating and eating.",
      "Mia put the caterpillar in a big jar with some leaves and a stick. Every day she gave it fresh leaves. The caterpillar ate a lot and got bigger.",
      "After two weeks, the caterpillar climbed up the stick and stopped moving. It made a hard green case around its body. “Is it sleeping?” Mia asked her mom. “It’s changing,” Mom said. “Wait and see.”",
      "Mia waited for ten days. One morning, the case opened and something came out. It had wet wings, orange and black.",
      "It was a butterfly! Mia opened the jar in the garden. The butterfly opened its wings and flew away into the blue sky. Mia waved goodbye."
    ],
    vocab: [["caterpillar", "a small animal like a worm that becomes a butterfly"], ["jar", "a glass container"], ["climb", "to go up"], ["case", "a cover that protects something"], ["wings", "a butterfly uses them to fly"]],
    questions: [
      ["Where did Mia find the caterpillar?", ["on a leaf in her garden", "at school", "in the kitchen"]],
      ["What did Mia give it every day?", ["fresh leaves", "milk", "flowers"]],
      ["What did the caterpillar make?", ["a hard green case", "a nest", "a hole"]],
      ["What came out of the case?", ["a butterfly", "a bird", "a bee"]],
      ["What did Mia do at the end?", ["She let the butterfly go.", "She kept it in the jar.", "She gave it to her teacher."]]
    ]
  },
  {
    id: "kids-the-school-play", level: "A1+", stage: "kids", topic: "School", title: "The School Play",
    description: "Pablo was the lion in the school play, but he forgot his words.",
    text: [
      "Last Friday, Pablo’s class did a play for the parents. The play was about animals in the jungle. Pablo was the lion!",
      "He practiced his words every day for three weeks. His costume was yellow and orange, with a big brown mane.",
      "On the day of the play, the room was full of people. Pablo saw his parents and his grandma in the first row. Suddenly, he felt nervous and forgot his words!",
      "He looked at his friend Sara, the parrot. She whispered, “I am the king of the jungle!” Pablo smiled, stood tall and roared, “I AM THE KING OF THE JUNGLE!”",
      "Everybody laughed and clapped. After the play, Grandma gave him a big hug. “You were the best lion in the world,” she said."
    ],
    vocab: [["play", "a story that people act on a stage"], ["practice", "to do something many times to get better"], ["costume", "special clothes for a play or party"], ["whisper", "to speak very quietly"], ["roar", "the loud sound a lion makes"]],
    questions: [
      ["Who watched the play?", ["the parents", "other schools", "the teachers only"]],
      ["How long did Pablo practice?", ["three weeks", "one day", "two months"]],
      ["Why did Pablo forget his words?", ["He felt nervous.", "He was sick.", "He didn’t practice."]],
      ["Who helped him?", ["Sara, the parrot", "his grandma", "the teacher"]],
      ["What did Grandma say?", ["“You were the best lion in the world.”", "“Practice more.”", "“Let’s go home.”"]]
    ]
  }
);

READINGS.push(
  /* ---------- A2 ---------- */
  {
    id: "kids-treasure-map", level: "A2", stage: "kids", topic: "Adventure", title: "The Treasure Map",
    description: "Two cousins find an old map in Grandpa’s house. Where does it take them?",
    text: [
      "During the summer holidays, Rosa and her cousin Iván stayed at their grandpa’s house in the country. One rainy afternoon, they were exploring the attic when they found an old wooden box.",
      "Inside the box there was a piece of yellow paper. It was a map! It showed the house, a big tree, a well and a red X next to some rocks.",
      "The next morning, the sun was shining, so they followed the map. They walked twenty steps from the big tree to the old well. Then they turned left and walked to the rocks.",
      "Iván dug with a small shovel. After a few minutes, he hit something hard. It was a metal can! Inside there were marbles, a toy car, a photo and a note.",
      "The note said: “This is my treasure. I hope you enjoy it. — Pedro, 1972.” Pedro was their grandpa! That night, Grandpa told them stories about when he was a boy."
    ],
    vocab: [["attic", "a room at the top of a house, under the roof"], ["map", "a drawing that shows where places are"], ["well", "a deep hole where people get water"], ["dig", "to make a hole in the ground"], ["marbles", "small glass balls for playing games"]],
    questions: [
      ["Where did they find the box?", ["in the attic", "in the garden", "under the bed"]],
      ["What was the X next to?", ["some rocks", "the well", "the house"]],
      ["What did Iván use to dig?", ["a small shovel", "his hands", "a stick"]],
      ["What was inside the metal can?", ["marbles, a toy car, a photo and a note", "gold coins", "old books"]],
      ["Who was Pedro?", ["their grandpa", "a pirate", "a neighbor"]]
    ]
  },
  {
    id: "kids-night-under-stars", level: "A2", stage: "kids", topic: "Adventure", title: "A Night Under the Stars",
    description: "Sofía goes camping for the first time. What does she hear at night?",
    text: [
      "Sofía was very excited. It was her first time camping! Her family drove to a forest near the mountains. They put up a green tent next to a small lake.",
      "In the evening, Dad made a campfire and they cooked sausages and marshmallows. The marshmallows were sticky and sweet. Then they turned off their flashlights and looked up.",
      "The sky was full of stars. In the city, Sofía could only see a few stars, but here there were thousands! Mom showed her a group of stars that looked like a big spoon.",
      "Later, inside the tent, Sofía heard strange noises: “Hoo, hoo!” She was a little scared. “What is that?” she whispered. “It’s an owl,” said Dad. “It’s saying good night.”",
      "Sofía smiled and closed her eyes. The next morning, she woke up early and saw two deer drinking water from the lake. It was the best trip ever."
    ],
    vocab: [["tent", "a small house made of cloth for camping"], ["campfire", "a fire outside when you camp"], ["sticky", "it stays on your fingers"], ["owl", "a bird that is awake at night"], ["deer", "a wild animal with long legs; some have antlers"]],
    questions: [
      ["Where did they put the tent?", ["next to a small lake", "in the city", "on the mountain top"]],
      ["What did they cook?", ["sausages and marshmallows", "pizza", "fish"]],
      ["Why could Sofía see more stars?", ["She was far from the city.", "She had a telescope.", "It was her birthday."]],
      ["What made the noise “Hoo, hoo”?", ["an owl", "a deer", "her brother"]],
      ["What did she see in the morning?", ["two deer drinking water", "a bear", "a rainbow"]]
    ]
  },
  {
    id: "kids-quiet-lion", level: "A2", stage: "kids", topic: "Animals", title: "The Lion Who Couldn’t Roar",
    description: "Leo is a young lion with a very small voice. Can he still be brave?",
    text: [
      "Leo was a young lion who lived on the savanna with his family. All the lions had big, loud roars, but when Leo tried to roar, only a tiny “meow” came out.",
      "The other animals laughed at him. “You sound like a kitten!” said the monkeys. Leo felt sad and walked away to the river.",
      "At the river, he heard someone crying. A baby elephant was stuck in the mud. Her mother was far away and couldn’t hear her.",
      "Leo had an idea. He ran to the tall grass and found the mother elephant. He couldn’t roar, but he could run very fast. He showed her the way to the river.",
      "The mother pulled her baby out of the mud with her trunk. “Thank you, Leo,” she said. “You don’t need a big roar to have a big heart.” From that day, nobody laughed at Leo again."
    ],
    vocab: [["savanna", "a large, flat place with grass and few trees"], ["loud", "making a strong sound"], ["stuck", "unable to move"], ["mud", "wet, soft earth"], ["brave", "not afraid to do something difficult"]],
    questions: [
      ["What was Leo’s problem?", ["He couldn’t roar.", "He couldn’t run.", "He was very small."]],
      ["Who laughed at him?", ["the monkeys", "the elephants", "his family"]],
      ["Why was the baby elephant crying?", ["She was stuck in the mud.", "She was hungry.", "She lost her toy."]],
      ["How did Leo help?", ["He ran and found the mother elephant.", "He roared very loud.", "He pulled the baby out."]],
      ["What is the message of the story?", ["You don’t need a big roar to have a big heart.", "Lions are better than elephants.", "Don’t go to the river."]]
    ]
  },
  {
    id: "kids-grandmas-recipe", level: "A2", stage: "kids", topic: "Food", title: "Grandma’s Secret Recipe",
    description: "Everybody loves Grandma Lupita’s tamales. What is her secret?",
    text: [
      "Every December, the whole family goes to Grandma Lupita’s house to make tamales. It is a big, noisy and happy day.",
      "The adults prepare the corn dough and the fillings: red chicken, green pork and sweet tamales with raisins. The children wash the corn husks and put them in water so they get soft.",
      "This year, Daniela asked, “Grandma, why are your tamales the best in the world? What is your secret?” Grandma laughed. “I’ll tell you at the end of the day.”",
      "They worked for hours. They spread the dough on the husks, added the filling and folded them carefully. Then they put more than two hundred tamales in a giant pot to cook.",
      "In the evening, everybody sat at the long table to eat. Grandma looked at all her children and grandchildren and said, “Here is my secret: we make them together.”"
    ],
    vocab: [["recipe", "instructions for cooking something"], ["dough", "a soft mix of flour or corn and water"], ["filling", "the food you put inside something"], ["corn husk", "the leaves that cover an ear of corn"], ["fold", "to bend something over itself"]],
    questions: [
      ["When does the family make tamales?", ["every December", "every Sunday", "on birthdays"]],
      ["What do the children do?", ["wash the corn husks", "cook the chicken", "buy the corn"]],
      ["Which tamales have raisins?", ["the sweet ones", "the green ones", "the red ones"]],
      ["How many tamales did they make?", ["more than two hundred", "twenty", "fifty"]],
      ["What is Grandma’s secret?", ["They make them together.", "a special chili", "a lot of sugar"]]
    ]
  },
  {
    id: "kids-lights-went-out", level: "A2", stage: "kids", topic: "Family", title: "The Night the Lights Went Out",
    description: "A storm turns off the electricity. Is it a bad night or a good one?",
    text: [
      "It was a stormy night. The wind was blowing hard and the rain was hitting the windows. Suddenly, all the lights went out. The TV stopped and the house was completely dark.",
      "“I can’t see anything!” cried little Tomás. Mom found some candles in a drawer and Dad brought a flashlight. Soon the living room had a warm, yellow light.",
      "There was no TV, no tablet and no internet. At first, Tomás and his sister Valeria were bored. Then Dad had an idea. He put his hands in front of the flashlight and made shadow animals on the wall: a dog, a bird and a rabbit.",
      "Everybody tried. Valeria made a crocodile and Tomás made a very strange snail. They laughed so much! Then Mom told a story about a ghost who was afraid of children.",
      "Two hours later, the lights came back on. “Oh no!” said Tomás. “Can we turn them off again?”"
    ],
    vocab: [["storm", "very bad weather with wind and rain"], ["drawer", "a box in a table that you pull out"], ["bored", "not interested; with nothing to do"], ["shadow", "a dark shape made when something blocks light"], ["ghost", "a spirit in scary stories"]],
    questions: [
      ["Why did the lights go out?", ["There was a storm.", "Dad turned them off.", "It was late."]],
      ["Where did Mom find candles?", ["in a drawer", "in the car", "in the garden"]],
      ["What did Dad make on the wall?", ["shadow animals", "a drawing", "a map"]],
      ["What did Valeria make?", ["a crocodile", "a snail", "a rabbit"]],
      ["How did Tomás feel when the lights came back?", ["He wanted to turn them off again.", "He was very happy.", "He was scared."]]
    ]
  },

  /* ---------- A2+ ---------- */
  {
    id: "kids-lemonade-stand", level: "A2+", stage: "kids", topic: "Money", title: "The Lemonade Stand",
    description: "Carmen and Luis want to buy a gift for their mom. Can they earn the money?",
    text: [
      "Mother’s Day was in two weeks, and Carmen and her brother Luis wanted to buy their mom a special present: a plant with purple flowers that cost two hundred pesos. They only had forty pesos in their piggy bank.",
      "“We need to earn money,” said Carmen. “Let’s sell lemonade!” Their dad helped them buy lemons, sugar and paper cups. They made a sign with colored markers: “Fresh Lemonade — 10 pesos.”",
      "On Saturday, they set up a small table in front of the house. The first hour was slow. Only two neighbors stopped. Luis was disappointed. “Maybe nobody likes lemonade,” he said.",
      "Carmen had an idea. They moved the table to the corner near the park, where many people walked their dogs. They also offered free water for the dogs! Soon, there was a line of thirsty people and happy dogs.",
      "By the end of the weekend, they had one hundred and ninety pesos. With the money from the piggy bank, it was enough. On Mother’s Day, their mom cried when she saw the plant. “The best gift,” she said, “is that you worked together.”"
    ],
    vocab: [["earn", "to get money for work"], ["piggy bank", "a small box, often a pig, to save coins"], ["sign", "a board with words that gives information"], ["disappointed", "sad because something wasn’t as good as you hoped"], ["thirsty", "wanting to drink"]],
    questions: [
      ["Why did they need money?", ["to buy a present for their mom", "to buy toys", "to go to the park"]],
      ["How much did the plant cost?", ["two hundred pesos", "forty pesos", "ten pesos"]],
      ["Why was Luis disappointed?", ["Only two neighbors stopped.", "The lemonade was bad.", "It started to rain."]],
      ["What was Carmen’s idea?", ["Move the table near the park and offer water for dogs.", "Make the lemonade cheaper.", "Sell cookies too."]],
      ["How much money did they earn in the weekend?", ["190 pesos", "200 pesos", "40 pesos"]]
    ]
  },
  {
    id: "kids-monarch-journey", level: "A2+", stage: "kids", topic: "Science", title: "The Monarchs Come Home",
    description: "Every fall, millions of butterflies fly to the forests of Mexico. How do they do it?",
    text: [
      "Every year, something amazing happens in the forests of Michoacán and the State of Mexico. Millions of orange and black butterflies arrive and cover the trees. They are monarch butterflies.",
      "These butterflies travel from Canada and the United States, sometimes more than four thousand kilometers. That is like crossing Mexico from one side to the other two times! They fly south because the winter in the north is too cold for them.",
      "The monarchs arrive at the beginning of November, around the Day of the Dead. For this reason, some people in Mexico have a special belief: they say the butterflies are the souls of loved ones who come to visit.",
      "During the winter, the butterflies rest in big groups on fir trees. When spring comes, they start the trip north again. They lay eggs on milkweed plants, and their children and grandchildren continue the journey.",
      "Today, monarchs need our help. They need forests and milkweed plants to survive. Planting milkweed in gardens is one way to protect these little travelers."
    ],
    vocab: [["amazing", "very surprising and wonderful"], ["kilometer", "a distance of one thousand meters"], ["belief", "an idea that people think is true"], ["lay eggs", "to put eggs out of the body, like birds and insects do"], ["survive", "to stay alive"]],
    questions: [
      ["Where do the monarchs go in Mexico?", ["the forests of Michoacán and the State of Mexico", "the beaches of Cancún", "the desert of Sonora"]],
      ["Why do they fly south?", ["The winter in the north is too cold.", "They like Mexican food.", "They follow the birds."]],
      ["When do they arrive?", ["at the beginning of November", "in July", "in March"]],
      ["What do some people believe about them?", ["They are the souls of loved ones.", "They bring rain.", "They are bad luck."]],
      ["How can people help monarchs?", ["by planting milkweed", "by catching them", "by cutting trees"]]
    ]
  },
  {
    id: "kids-missing-cookies", level: "A2+", stage: "kids", topic: "Mystery", title: "The Case of the Missing Cookies",
    description: "Somebody took the cookies from the kitchen. Detective Ema finds the clues.",
    text: [
      "On Saturday afternoon, Mom baked chocolate chip cookies and left them on a plate in the kitchen to cool down. When she came back, the plate was empty!",
      "“Who took the cookies?” she asked. Ema, who was eight and loved detective stories, took her magnifying glass. “Don’t worry, Mom. I’ll solve this case.”",
      "First, she looked for clues. On the floor, there were some crumbs going toward the back door. Next to the door, she found small muddy footprints. They were too small for a person.",
      "Ema followed the footprints into the garden. Behind the bushes, she found her dog, Bruno. He was lying on the grass with chocolate on his nose and a very guilty face.",
      "“Case closed!” said Ema. But Mom looked worried. “Chocolate is dangerous for dogs,” she explained. They called the vet, who said Bruno only ate a little and would be fine. That night, Mom baked new cookies and put them on a very high shelf."
    ],
    vocab: [["bake", "to cook in an oven"], ["magnifying glass", "a glass that makes small things look big"], ["clue", "something that helps you find an answer"], ["crumbs", "very small pieces of bread or cookie"], ["guilty", "feeling bad because you did something wrong"]],
    questions: [
      ["Where did Mom leave the cookies?", ["on a plate in the kitchen", "in the garden", "in a box"]],
      ["What did Ema use?", ["a magnifying glass", "a camera", "a flashlight"]],
      ["Why weren’t the footprints from a person?", ["They were too small.", "They were too big.", "They were blue."]],
      ["Who took the cookies?", ["Bruno, the dog", "Ema’s brother", "a neighbor"]],
      ["Why was Mom worried?", ["Chocolate is dangerous for dogs.", "There were no more cookies.", "Bruno was lost."]]
    ]
  },
  {
    id: "kids-first-swim-race", level: "A2+", stage: "kids", topic: "Sports", title: "The Big Race",
    description: "Martín trained for months for his first swimming race. Did he win?",
    text: [
      "Martín had trained for three months for his first swimming competition. Every Tuesday and Thursday after school, he swam lap after lap while his coach timed him.",
      "On the day of the race, the pool was full of people. There were six swimmers in his race, and some of them were older and taller than him. His stomach felt funny.",
      "When the whistle blew, Martín jumped into the water. He swam as fast as he could. At the halfway point, he was in fourth place. He remembered what his coach always said: “Breathe, kick, and don’t look at the others.”",
      "He kicked harder and passed one swimmer, then another. When he touched the wall, he looked up at the board. He was second! He was only half a second behind the winner.",
      "At first, Martín felt a little sad because he didn’t win. But then he saw his time: it was his best time ever. His coach shook his hand. “You didn’t beat everybody,” she said, “but you beat yourself. That’s what matters.”"
    ],
    vocab: [["train", "to practice a sport to get better"], ["lap", "one time from one end of the pool to the other"], ["whistle", "a small object that makes a high sound when you blow"], ["halfway", "in the middle"], ["beat", "to win against someone"]],
    questions: [
      ["How long did Martín train?", ["three months", "two weeks", "one year"]],
      ["How did he feel before the race?", ["nervous", "bored", "angry"]],
      ["What was his position at the halfway point?", ["fourth", "first", "sixth"]],
      ["In what place did he finish?", ["second", "first", "third"]],
      ["Why was the coach proud?", ["He swam his best time ever.", "He won the race.", "He was the tallest."]]
    ]
  },
  {
    id: "kids-rainforest-adventure", level: "A2+", stage: "kids", topic: "Nature", title: "Layers of the Rainforest",
    description: "A rainforest is like a building with many floors. Who lives on each one?",
    text: [
      "A rainforest is a forest where it rains almost every day. It is hot, wet and full of life. In fact, more than half of all the kinds of plants and animals in the world live in rainforests. Mexico has rainforests too, in the south, in states like Chiapas.",
      "You can imagine a rainforest like a tall building with different floors. At the bottom is the forest floor. It is dark there, because the leaves above block the sun. Ants, beetles and big cats like the jaguar live here.",
      "The next floor is the understory. Small trees and bushes grow here, and you can find frogs, snakes and colorful insects.",
      "Above that is the canopy, a thick roof of leaves and branches. This is the busiest floor! Monkeys, toucans and parrots live here and eat fruit all day.",
      "At the very top, a few giant trees grow higher than the canopy. Eagles build their nests there and look for food. Every floor is important, and all the animals and plants depend on each other."
    ],
    vocab: [["rainforest", "a thick forest where it rains a lot"], ["block", "to stop something from passing"], ["jaguar", "a big wild cat with spots"], ["canopy", "the top part of a forest, made of leaves and branches"], ["depend on", "to need someone or something"]],
    questions: [
      ["What is a rainforest like?", ["hot, wet and full of life", "cold and dry", "empty and quiet"]],
      ["Why is the forest floor dark?", ["The leaves above block the sun.", "It is always night.", "There are no trees."]],
      ["Which animal lives on the forest floor?", ["the jaguar", "the toucan", "the eagle"]],
      ["Which is the busiest floor?", ["the canopy", "the forest floor", "the understory"]],
      ["Where do eagles build their nests?", ["in the giant trees at the top", "on the ground", "in the bushes"]]
    ]
  },

  /* ---------- B1 ---------- */
  {
    id: "kids-penguins-warm", level: "B1", stage: "kids", topic: "Science", title: "How Do Penguins Stay Warm?",
    description: "Antarctica is the coldest place on Earth. How do emperor penguins survive there?",
    text: [
      "Antarctica is the coldest place on our planet. In winter, the temperature can drop below minus forty degrees Celsius, and strong winds blow across the ice. Most animals could never survive there, but emperor penguins spend the whole winter on the ice. How do they do it?",
      "First, penguins have a thick layer of fat under their skin. This fat works like a warm blanket that keeps the heat inside their bodies. On top of the fat, they have several layers of short feathers that overlap like the tiles on a roof. These feathers are so tight that the wind and the water can’t get through.",
      "Second, penguins work as a team. When the weather is very bad, thousands of them stand close together in a big group called a huddle. The penguins in the middle stay warm, while the ones on the outside get cold. But they don’t stay in the same place: they slowly move, so every penguin gets a turn in the warm center.",
      "Finally, emperor penguin fathers have a very special job. The mother lays one egg and goes to the ocean to find food. The father keeps the egg on top of his feet, under a warm fold of skin, for about two months, without eating! When the chick hatches, the mother returns, and the family is together again."
    ],
    vocab: [["temperature", "how hot or cold something is"], ["layer", "one level of something that covers another"], ["overlap", "to cover part of something else"], ["huddle", "a tight group standing close together"], ["hatch", "to come out of an egg"]],
    questions: [
      ["What protects penguins like a blanket?", ["a thick layer of fat", "their eggs", "the snow"]],
      ["Why can’t wind and water get through the feathers?", ["They are very tight and overlap.", "They are very long.", "They are wet."]],
      ["What is a huddle?", ["a big group of penguins standing close together", "a penguin’s nest", "a kind of fish"]],
      ["How do all penguins get warm in the huddle?", ["They slowly move and take turns in the center.", "The biggest stay in the middle.", "They sleep in the water."]],
      ["What does the father do with the egg?", ["He keeps it on his feet for about two months.", "He buries it in the snow.", "He gives it to another penguin."]]
    ]
  },
  {
    id: "kids-moon-phases", level: "B1", stage: "kids", topic: "Space", title: "Why Does the Moon Change Shape?",
    description: "Sometimes the Moon is round, sometimes it is thin like a smile. Why?",
    text: [
      "Have you noticed that the Moon looks different on different nights? Sometimes it is a big, bright circle. Other times it is only a thin line, like a smile in the sky. And some nights you can’t see it at all. Does the Moon really change its shape?",
      "The answer is no. The Moon is always a round ball of rock. It doesn’t make its own light, like the Sun or a lamp. We can see it because sunlight hits it and bounces back to our eyes, just like light reflects on a mirror.",
      "The Sun always lights up one half of the Moon. At the same time, the Moon travels around the Earth. This trip takes about twenty-nine and a half days, almost one month. As the Moon moves, we see different amounts of its bright half. These different shapes are called phases.",
      "When the Moon is between the Earth and the Sun, the bright side faces away from us, so we see nothing. This is the new moon. Little by little, we see a thin crescent, then a half moon, and finally the full moon, when the whole bright side faces us. Then the shapes get smaller again, and the cycle starts once more.",
      "Long ago, people used the phases of the Moon as a calendar. In fact, the word “month” comes from the word “moon.”"
    ],
    vocab: [["notice", "to see or become aware of something"], ["bounce", "to hit something and come back"], ["reflect", "to send light back, like a mirror"], ["phase", "one of the shapes the Moon has"], ["crescent", "a thin, curved shape, like a banana"]],
    questions: [
      ["Does the Moon really change its shape?", ["No, it is always round.", "Yes, every night.", "Only in winter."]],
      ["Why can we see the Moon?", ["Sunlight bounces off it.", "It makes its own light.", "It is made of fire."]],
      ["How long does the Moon take to go around the Earth?", ["about twenty-nine and a half days", "one day", "one year"]],
      ["What do we see during the new moon?", ["nothing", "a full circle", "a half moon"]],
      ["Where does the word “month” come from?", ["from the word “moon”", "from the word “sun”", "from the word “Monday”"]]
    ]
  },
  {
    id: "kids-volcano-cornfield", level: "B1", stage: "kids", topic: "Mexico", title: "The Volcano in the Cornfield",
    description: "In 1943, a farmer in Michoacán saw a volcano being born in his field.",
    text: [
      "On the afternoon of February 20, 1943, a farmer called Dionisio Pulido was working in his cornfield near the village of Parícutin, in Michoacán. Suddenly, he heard a loud noise like thunder, and the ground started to shake.",
      "Then Dionisio saw something incredible. A long crack opened in the middle of his field, and smoke and gray ash came out of it. The air smelled like rotten eggs. Frightened, he ran to the village to tell everybody what he had seen.",
      "The next morning, there was a small hill of hot rocks where the crack had been. It was growing very fast! After one week, it was as tall as a five-story building. After one year, it was more than three hundred meters high. A new volcano had been born, and people named it Parícutin.",
      "For nine years, the volcano threw out lava, rocks and ash. The lava slowly covered the villages of Parícutin and San Juan Parangaricutiro. Fortunately, the people had time to leave, and no one died because of the lava.",
      "Today, you can visit the area and see something unforgettable: the tower of the old church of San Juan, still standing in the middle of a sea of black volcanic rock. Scientists from all over the world studied Parícutin, because it was the first time they could watch a volcano from the day it was born."
    ],
    vocab: [["crack", "a long, thin opening in something"], ["ash", "gray powder left after something burns"], ["frightened", "very scared"], ["lava", "hot, liquid rock from a volcano"], ["unforgettable", "so special that you always remember it"]],
    questions: [
      ["What was Dionisio doing when it started?", ["working in his cornfield", "sleeping at home", "walking to school"]],
      ["What came out of the crack?", ["smoke and gray ash", "water", "gold"]],
      ["How tall was the volcano after one year?", ["more than three hundred meters", "as tall as a house", "five meters"]],
      ["What happened to the villages?", ["The lava covered them.", "Nothing happened.", "They became bigger."]],
      ["Why did scientists study Parícutin?", ["They could watch a volcano from the day it was born.", "It was the biggest volcano in the world.", "It had gold inside."]]
    ]
  },
  {
    id: "kids-dinosaur-detectives", level: "B1", stage: "kids", topic: "Science", title: "Dinosaur Detectives",
    description: "Nobody has ever seen a living dinosaur. So how do we know so much about them?",
    text: [
      "Dinosaurs lived on Earth for more than one hundred and fifty million years and disappeared about sixty-six million years ago, long before the first humans. Nobody has ever seen a living dinosaur. So how do we know what they looked like, what they ate and how they moved?",
      "The answer is fossils. When a dinosaur died, sometimes its body was covered by mud or sand. Over millions of years, the bones slowly turned into stone. Scientists who study fossils are called paleontologists, and they work like detectives.",
      "Paleontologists dig very carefully with small tools and brushes. When they find bones, they put them together like a giant puzzle. The shape of the teeth tells them what the dinosaur ate: sharp, pointed teeth were for eating meat, while flat teeth were for eating plants.",
      "Bones are not the only clues. Fossil footprints show how fast a dinosaur walked and if it lived in groups. Fossil eggs and nests show how dinosaurs took care of their babies. Some fossils even show that certain dinosaurs had feathers!",
      "Mexico has important fossils too. In Coahuila, paleontologists have found many dinosaur bones, including a duck-billed dinosaur called Velafrons. Who knows? Maybe one day you will be the detective who discovers a new species."
    ],
    vocab: [["disappear", "to stop existing or being seen"], ["fossil", "the remains of an ancient animal or plant turned into stone"], ["paleontologist", "a scientist who studies fossils"], ["clue", "a piece of information that helps solve a mystery"], ["species", "a group of animals or plants of the same kind"]],
    questions: [
      ["When did dinosaurs disappear?", ["about sixty-six million years ago", "one thousand years ago", "when humans arrived"]],
      ["What is a paleontologist?", ["a scientist who studies fossils", "a doctor for animals", "a person who builds museums"]],
      ["What did flat teeth tell scientists?", ["The dinosaur ate plants.", "The dinosaur ate meat.", "The dinosaur was a baby."]],
      ["What can footprints show?", ["how fast dinosaurs walked and if they lived in groups", "the color of dinosaurs", "what dinosaurs ate"]],
      ["Where in Mexico were many dinosaur bones found?", ["Coahuila", "Yucatán", "Mexico City"]]
    ]
  },
  {
    id: "kids-girl-who-loved-stars", level: "B1", stage: "kids", topic: "Science", title: "The Girl Who Counted Stars",
    description: "Elena wanted to be an astronomer. Everyone said it was impossible, except her grandmother.",
    text: [
      "When Elena was seven, she spent every clear night on the roof of her house in a small town in Sonora, counting stars. She made drawings of the constellations in a notebook and gave names to the brightest stars.",
      "“What do you want to be when you grow up?” her teacher asked one day. “An astronomer,” Elena answered. Some of her classmates laughed. “That’s impossible,” one boy said. “There are no astronomers in our town.”",
      "That night, Elena told her grandmother what happened. Her grandmother was quiet for a moment. Then she went to her room and came back with an old pair of binoculars. “These were your grandfather’s,” she said. “He used them to watch birds. Now you can use them to watch the sky. Nothing is impossible if you are curious and you work hard.”",
      "With the binoculars, Elena discovered things she had never seen: the craters of the Moon, the four bright moons of Jupiter and a fuzzy spot that her library book said was a galaxy, millions of light-years away.",
      "Elena studied hard for many years. Today, she works at an observatory in the mountains and studies distant stars. On her desk, next to her computer, there is an old pair of binoculars."
    ],
    vocab: [["constellation", "a group of stars that forms a shape"], ["astronomer", "a scientist who studies stars and planets"], ["binoculars", "a tool with two lenses to see far things"], ["crater", "a big round hole on a surface, like on the Moon"], ["observatory", "a building with big telescopes to study the sky"]],
    questions: [
      ["What did Elena do on clear nights?", ["She counted stars on the roof.", "She watched TV.", "She read comics."]],
      ["Why did her classmates laugh?", ["They thought her dream was impossible.", "She said something funny.", "She drew a bad picture."]],
      ["Whose binoculars were they?", ["her grandfather’s", "her teacher’s", "her father’s"]],
      ["What did Elena see with the binoculars?", ["the craters of the Moon and moons of Jupiter", "birds in the trees", "other houses"]],
      ["What is Elena’s job today?", ["She works at an observatory.", "She is a teacher.", "She sells binoculars."]]
    ]
  },

  /* ---------- B2 ---------- */
  {
    id: "kids-deep-ocean", level: "B2", stage: "kids", topic: "Science", title: "Life in the Deep, Dark Ocean",
    description: "Thousands of meters below the surface, there is no sunlight. Yet strange creatures live there.",
    text: [
      "Imagine diving down into the ocean. Near the surface, the water is bright, blue and full of fish. But as you go deeper, the light starts to fade. At about one thousand meters, sunlight disappears completely, and everything is as dark as the darkest night. Scientists call this the deep sea, and it covers most of our planet.",
      "Life down there is extremely difficult. The water is close to freezing, food is hard to find, and the pressure is enormous. The weight of all the water above would crush a human instantly. For a long time, people believed that nothing could survive in such a place.",
      "They were wrong. The deep sea is home to some of the strangest creatures on Earth. Many of them produce their own light, an ability called bioluminescence. The anglerfish, for example, has a glowing lure that hangs in front of its huge mouth. Small fish swim toward the light, thinking it is food, and the anglerfish swallows them in a second.",
      "Other animals have adapted in different ways. Some have enormous eyes to catch the tiniest bit of light, while others have no eyes at all and use touch and smell instead. The giant squid, which can grow longer than a school bus, has the largest eyes of any animal.",
      "Surprisingly, we have better maps of the Moon and Mars than of the bottom of our own oceans. Every year, scientists using robots and special submarines discover new species. The deep ocean remains one of the last great mysteries on Earth."
    ],
    vocab: [["fade", "to slowly become weaker or less bright"], ["pressure", "the force of something pushing on something else"], ["crush", "to press something so hard that it breaks"], ["bioluminescence", "light produced by a living thing"], ["adapt", "to change in order to survive in a new situation"]],
    questions: [
      ["At about what depth does sunlight disappear?", ["one thousand meters", "ten meters", "one hundred meters"]],
      ["Which is NOT a problem in the deep sea?", ["too much sunlight", "very cold water", "enormous pressure"]],
      ["How does the anglerfish catch food?", ["It uses a glowing lure to attract fish.", "It chases fish very fast.", "It eats plants."]],
      ["What is special about the giant squid?", ["It has the largest eyes of any animal.", "It has no eyes.", "It lives near the surface."]],
      ["What surprising fact does the text mention?", ["We have better maps of the Moon than of the ocean floor.", "The deep sea is very small.", "No new species have been found."]]
    ]
  },
  {
    id: "kids-raindrop-journey", level: "B2", stage: "kids", topic: "Science", title: "The Endless Journey of a Raindrop",
    description: "The water you drink today may once have been in a cloud, a glacier, or a dinosaur’s lake.",
    text: [
      "Here is an incredible thought: the water in your glass today may be millions of years old. A dinosaur could have drunk it, it could have floated in a cloud over the Pacific Ocean, or it could have been frozen inside a glacier for centuries. This is possible because the water on Earth is constantly moving in a never-ending circle called the water cycle.",
      "The journey usually begins in the ocean. When the sun heats the surface of the sea, some of the water turns into an invisible gas called water vapor. This process is called evaporation. The warm vapor rises high into the sky, where the air is much colder.",
      "Up there, the vapor cools down and turns back into tiny drops of liquid water. This is called condensation. Millions of these tiny drops join together and form clouds. When the drops become too heavy to float, they fall to the ground as rain, or as snow and hail if it is cold enough. This stage is called precipitation.",
      "Once on the ground, the water continues its trip. Some of it flows into rivers and lakes and eventually returns to the sea. Some soaks into the soil and becomes groundwater, which plants absorb through their roots. Plants then release water vapor through their leaves, and the cycle continues.",
      "Although most of our planet is covered in water, only a very small part of it is fresh water that people can drink. That is why every drop matters, and why taking care of rivers, lakes and forests is so important for the future."
    ],
    vocab: [["constantly", "all the time, without stopping"], ["evaporation", "when liquid turns into gas because of heat"], ["condensation", "when gas cools and turns into liquid"], ["precipitation", "rain, snow or hail that falls from clouds"], ["soak", "to go into something and make it completely wet"]],
    questions: [
      ["Why could your water be millions of years old?", ["Water on Earth moves in a never-ending cycle.", "Water never moves.", "Water is made in factories."]],
      ["What is evaporation?", ["when water turns into vapor because of heat", "when rain falls", "when water freezes"]],
      ["How do clouds form?", ["Tiny drops of water join together.", "Smoke goes up into the sky.", "The wind makes them."]],
      ["What do plants do with groundwater?", ["They absorb it through their roots.", "They turn it into clouds directly.", "They send it to the sea."]],
      ["What is the main message of the last paragraph?", ["Fresh water is limited, so every drop matters.", "There is too much water on Earth.", "People should not drink rain."]]
    ]
  },
  {
    id: "kids-animals-winter", level: "B2", stage: "kids", topic: "Nature", title: "How Animals Prepare for Winter",
    description: "When the days get colder and food disappears, animals use clever strategies to survive.",
    text: [
      "When autumn arrives in many parts of the world, the days become shorter, the temperature drops, and food starts to disappear. For wild animals, winter is the most difficult season of the year. Over millions of years, however, they have developed three clever strategies to survive it: they leave, they sleep, or they adapt.",
      "The first strategy is migration. Many birds, whales and even butterflies travel thousands of kilometers to warmer places where food is easier to find. Every autumn, for instance, millions of birds fly from Canada and the United States to Mexico and Central America, and they return in spring.",
      "The second strategy is hibernation, a kind of very deep sleep. Animals such as some bats and ground squirrels eat a lot during the summer to build up fat. When winter comes, they find a safe place and fall into a state where their body temperature drops and their heart beats much more slowly. This helps them save energy, so they can survive for months without eating. Bears do something similar, although their sleep is lighter, and mothers even give birth during the winter.",
      "The third strategy is adaptation. Some animals stay active and change their bodies or behavior. The arctic fox grows a thick white coat that keeps it warm and helps it hide in the snow. Squirrels, on the other hand, spend the autumn burying nuts in hundreds of hiding places. Scientists have discovered that they are surprisingly good at remembering where most of them are.",
      "Whether they leave, sleep or adapt, all these animals share the same goal: to make it through the cold months and welcome the spring."
    ],
    vocab: [["strategy", "a plan to achieve something"], ["migration", "traveling from one region to another, usually each year"], ["hibernation", "a very deep sleep some animals have in winter"], ["behavior", "the way an animal or person acts"], ["bury", "to put something under the ground"]],
    questions: [
      ["What are the three strategies?", ["leave, sleep or adapt", "eat, run or fight", "swim, fly or dig"]],
      ["Where do many birds from Canada fly in autumn?", ["to Mexico and Central America", "to the Arctic", "to Europe"]],
      ["What happens to an animal’s body during hibernation?", ["Its temperature drops and its heart beats slowly.", "It grows white fur.", "It becomes more active."]],
      ["How does the arctic fox adapt?", ["It grows a thick white coat.", "It flies south.", "It sleeps all winter."]],
      ["What surprised scientists about squirrels?", ["They remember where most of their nuts are.", "They sleep for six months.", "They migrate to Mexico."]]
    ]
  },
  {
    id: "kids-chocolate-gift", level: "B2", stage: "kids", topic: "Mexico", title: "Chocolate: A Gift from Ancient Mexico",
    description: "Before it was a candy bar, chocolate was a bitter drink for kings and a kind of money.",
    text: [
      "Today you can find chocolate in almost every store in the world: in candy bars, cakes, ice cream and hot drinks. But few people know that the story of chocolate began thousands of years ago in Mesoamerica, the region that includes the south of Mexico and part of Central America.",
      "Chocolate comes from the seeds of the cacao tree, which grows in hot, humid places. The seeds grow inside large fruits called pods. Ancient peoples such as the Olmecs and later the Maya discovered that if they fermented, dried and roasted the seeds, and then ground them into a paste, they could prepare a delicious drink.",
      "However, this drink was very different from the hot chocolate we know. It had no sugar and no milk. It was bitter and often mixed with water, chili, vanilla or flowers, and people poured it from one cup to another to make foam on top. For the Maya and the Aztecs, it was a sacred drink, used in ceremonies and enjoyed by kings and warriors.",
      "Cacao seeds were so valuable that the Aztecs used them as money. With a few seeds, a person could buy a tomato, an avocado or even a small rabbit at the market.",
      "When the Spanish arrived in the sixteenth century, they took cacao to Europe. There, people started adding sugar and cinnamon, and over time chocolate became sweeter. Centuries later, new machines made it possible to produce solid chocolate bars. So the next time you eat a piece of chocolate, remember that you are enjoying an ancient Mexican treasure."
    ],
    vocab: [["seed", "the small part of a plant from which a new plant grows"], ["humid", "with a lot of water in the air"], ["roast", "to cook something with dry heat"], ["sacred", "very special and connected to religion"], ["valuable", "worth a lot"]],
    questions: [
      ["Where did the story of chocolate begin?", ["in Mesoamerica", "in Switzerland", "in Spain"]],
      ["Where do the cacao seeds grow?", ["inside large fruits called pods", "under the ground", "on flowers"]],
      ["How was the ancient drink different?", ["It had no sugar or milk and was bitter.", "It was very sweet.", "It was always cold and solid."]],
      ["What did the Aztecs use cacao seeds for?", ["as money", "as decorations", "to make clothes"]],
      ["What did Europeans add to chocolate?", ["sugar and cinnamon", "chili and salt", "corn"]]
    ]
  },
  {
    id: "kids-robots-helpers", level: "B2", stage: "kids", topic: "Technology", title: "Robots That Help People",
    description: "Robots are not only in movies. Today they help doctors, farmers and rescue teams.",
    text: [
      "When we hear the word “robot,” many of us imagine a metal machine with arms and legs that talks like a person, just like in the movies. In reality, most robots look very different, and they are already helping people in amazing ways.",
      "A robot is a machine that can sense what is around it, make simple decisions and move to complete a task. Some robots work in factories, where they build cars or pack products faster and more precisely than humans. Others clean floors in our homes, finding their way around furniture with special sensors.",
      "In hospitals, surgical robots help doctors perform very delicate operations. The doctor controls the robot’s tiny arms from a screen, and the robot can make movements that are smaller and steadier than a human hand. This means patients often recover more quickly.",
      "Robots can also go where it is too dangerous for people. After an earthquake, small robots shaped like snakes can crawl through broken buildings to look for survivors. Other robots explore the bottom of the ocean, or travel across the surface of Mars, sending photos and information back to scientists on Earth.",
      "Even so, robots cannot do everything. They are excellent at repeating tasks and following instructions, but they don’t have feelings, imagination or common sense the way people do. That is why the future probably won’t be about robots replacing humans, but about humans and robots working together. Who knows? Maybe one day you will design a robot that solves a problem nobody has solved before."
    ],
    vocab: [["sense", "to notice something using sensors or the senses"], ["precisely", "in an exact and careful way"], ["delicate", "easy to damage; needing great care"], ["survivor", "a person who stays alive after something terrible"], ["common sense", "the natural ability to make good, practical decisions"]],
    questions: [
      ["What can a robot do, according to the text?", ["sense, make simple decisions and move", "feel emotions", "imagine new stories"]],
      ["How do surgical robots help doctors?", ["They make smaller, steadier movements.", "They talk to patients.", "They replace the doctor completely."]],
      ["Why are snake robots useful after earthquakes?", ["They can crawl through broken buildings.", "They can fly.", "They can build new houses."]],
      ["What can’t robots do well?", ["have feelings and common sense", "repeat tasks", "follow instructions"]],
      ["What does the text say about the future?", ["Humans and robots will probably work together.", "Robots will replace all humans.", "Robots will disappear."]]
    ]
  }
);

/* ---------- Ilustraciones de las lecturas nuevas de Kids ---------- */
const kP = (x, y, skin, shirt, s = 1, hair) => `<g transform="translate(${x} ${y}) scale(${s})">${hair ? `<circle cx="0" cy="-29" r="11" fill="${hair}"/>` : ""}<circle cx="0" cy="-26" r="10" fill="${skin}"/><rect x="-10" y="-16" width="20" height="28" rx="9" fill="${shirt}"/><rect x="-8" y="10" width="6" height="14" rx="3" fill="#1E3A5F"/><rect x="2" y="10" width="6" height="14" rx="3" fill="#1E3A5F"/></g>`;
const kC = (x, y, s = 1, c = "#FFFDFA") => `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}"><circle cx="0" cy="0" r="14"/><circle cx="16" cy="-6" r="17"/><circle cx="34" cy="2" r="12"/><rect x="-6" y="0" width="44" height="12" rx="6"/></g>`;
const kSun = (x, y, r = 18) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#E0B04A"/>`;
const kGround = (c = "#9FCBB5", y = 138) => `<path d="M0 180V${y}q80-24 160-8t160-4v54z" fill="${c}"/>`;
const kTree = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-5" y="-6" width="10" height="34" rx="3" fill="#A9774F"/><circle cx="0" cy="-22" r="24" fill="#7FB89E"/><circle cx="-14" cy="-10" r="14" fill="#6BA88B"/><circle cx="14" cy="-12" r="15" fill="#6BA88B"/></g>`;
const kStars = (pts, c = "#FFFDFA") => pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r || 2}" fill="${c}"/>`).join("");

Object.assign(READING_ART, {
  /* Pre-A1 */
  "kids-my-family": scene("#F7DDD4", `${kGround("#F0C9BC", 146)}${kP(90, 140, "#F1C7A5", "#E8846B", 1.5, "#5A3A2A")}${kP(140, 140, "#E7B48F", "#1E3A5F", 1.6)}${kP(186, 146, "#F1C7A5", "#6FA8D6", 1.05, "#3A2A20")}${kP(222, 150, "#F1C7A5", "#E0B04A", .8, "#5A3A2A")}
    <g transform="translate(262 150)"><ellipse cx="0" cy="0" rx="20" ry="10" fill="#C98A5B"/><circle cx="18" cy="-10" r="9" fill="#C98A5B"/><path d="M12 -18l-4 -8 8 4z" fill="#8A5A38"/><rect x="-14" y="6" width="5" height="10" rx="2" fill="#8A5A38"/><rect x="8" y="6" width="5" height="10" rx="2" fill="#8A5A38"/></g>
    <path d="M150 44c-8-14-30-6-18 10l18 16 18-16c12-16-10-24-18-10z" fill="#E8846B"/>`, "#FFFFFF", .5),
  "kids-on-the-farm": scene("#DCEAF6", `${kC(30, 34)}${kC(220, 26, .8)}${kGround("#9FCBB5", 120)}
    <path d="M40 128V84l34-24 34 24v44z" fill="#E8846B"/><path d="M34 86l40-30 40 30" stroke="#1E3A5F" stroke-width="4" fill="none" stroke-linejoin="round"/><rect x="62" y="98" width="24" height="30" fill="#FFFDFA"/><path d="M62 98l24 30M86 98l-24 30" stroke="#E8846B" stroke-width="3"/>
    <g transform="translate(176 136)"><rect x="-30" y="-20" width="60" height="30" rx="14" fill="#FFFDFA"/><circle cx="-12" cy="-8" r="7" fill="#1E3A5F"/><circle cx="12" cy="0" r="6" fill="#1E3A5F"/><rect x="26" y="-30" width="22" height="20" rx="8" fill="#FFFDFA"/><circle cx="42" cy="-22" r="2.4" fill="#1E3A5F"/><rect x="-24" y="8" width="7" height="14" fill="#1E3A5F"/><rect x="16" y="8" width="7" height="14" fill="#1E3A5F"/></g>
    <g transform="translate(262 150)"><ellipse cx="0" cy="0" rx="20" ry="13" fill="#F3B7C7"/><circle cx="18" cy="-4" r="9" fill="#F3B7C7"/><ellipse cx="24" cy="-3" rx="4" ry="3" fill="#E79AAE"/><rect x="-12" y="9" width="6" height="9" fill="#E79AAE"/><rect x="6" y="9" width="6" height="9" fill="#E79AAE"/></g>`),
  "kids-my-lunch-box": scene("#DBE9F5", `<rect x="70" y="58" width="180" height="96" rx="16" fill="#6FA8D6"/><rect x="82" y="70" width="156" height="72" rx="10" fill="#FFFDFA"/><path d="M130 58v-14a8 8 0 0 1 8-8h44a8 8 0 0 1 8 8v14" stroke="#1E3A5F" stroke-width="6" fill="none"/>
    <path d="M94 128l36-40 36 40z" fill="#E0B04A"/><path d="M100 128l30-33 30 33z" fill="#F6E1A6"/><circle cx="186" cy="104" r="16" fill="#E8846B"/><path d="M186 88q4-8 10-8" stroke="#7FB89E" stroke-width="4" fill="none"/>
    <g transform="rotate(-20 222 116)"><path d="M210 100l12 36 12-36z" fill="#F2A33A"/><path d="M216 98l6-10 6 10" fill="#7FB89E"/></g>`),
  "kids-my-toy-box": scene("#F6EBD6", `<rect x="60" y="88" width="200" height="72" rx="10" fill="#E8846B"/><rect x="54" y="78" width="212" height="18" rx="6" fill="#D9725A"/>
    <g transform="translate(110 70)"><circle cx="0" cy="0" r="22" fill="#C98A5B"/><circle cx="-16" cy="-18" r="8" fill="#C98A5B"/><circle cx="16" cy="-18" r="8" fill="#C98A5B"/><ellipse cx="0" cy="6" rx="9" ry="7" fill="#E8C3A0"/><circle cx="-7" cy="-4" r="2.6" fill="#1E3A5F"/><circle cx="7" cy="-4" r="2.6" fill="#1E3A5F"/></g>
    <rect x="150" y="54" width="24" height="24" rx="4" fill="#6FA8D6"/><rect x="176" y="54" width="24" height="24" rx="4" fill="#E0B04A"/><rect x="163" y="30" width="24" height="24" rx="4" fill="#7FB89E"/>
    <g transform="translate(232 72)"><rect x="-22" y="-8" width="44" height="14" rx="6" fill="#1E3A5F"/><path d="M-14 -8l6-10h18l6 10z" fill="#1E3A5F"/><circle cx="-12" cy="8" r="6" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="3"/><circle cx="12" cy="8" r="6" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="3"/></g>`),

  /* A1 */
  "kids-sams-birthday": scene("#DDEEE5", `${kGround("#9FCBB5", 140)}${[[40, 60, "#7FB89E"], [70, 40, "#E0B04A"], [250, 50, "#7FB89E"], [282, 34, "#E0B04A"]].map(([x, y, c]) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="17" fill="${c}"/><path d="M${x} ${y + 17}q-4 20 4 40" stroke="#1E3A5F" stroke-width="1.5" fill="none"/>`).join("")}
    <rect x="118" y="96" width="84" height="44" rx="8" fill="#8A5A38"/><rect x="128" y="70" width="64" height="28" rx="6" fill="#A9774F"/><path d="M118 108c10 6 18-4 28 0s18 6 28 0 18-4 28 0" stroke="#FFFDFA" stroke-width="4" fill="none"/>
    ${[142, 160, 178].map((x) => `<rect x="${x - 2}" y="54" width="4" height="16" fill="#6FA8D6"/><path d="M${x} 44q-5 6 0 10q5-4 0-10z" fill="#E0B04A"/>`).join("")}${kP(90, 150, "#F1C7A5", "#E0B04A", 1.1, "#3A2A20")}${kP(232, 150, "#E7B48F", "#E8846B", 1.1, "#5A3A2A")}`),
  "kids-at-the-zoo": scene("#F6EBD6", `${kGround("#E2CC9B", 140)}${kTree(272, 108, 1.2)}
    <g transform="translate(90 120)"><ellipse cx="0" cy="0" rx="44" ry="30" fill="#A9B4C2"/><circle cx="40" cy="-16" r="22" fill="#A9B4C2"/><ellipse cx="28" cy="-20" rx="14" ry="18" fill="#93A0B0"/><path d="M58 -10q10 20 0 40" stroke="#A9B4C2" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="46" cy="-22" r="3" fill="#1E3A5F"/>${[-30, -12, 10, 26].map((x) => `<rect x="${x}" y="18" width="12" height="24" rx="4" fill="#93A0B0"/>`).join("")}</g>
    <g transform="translate(200 150)"><rect x="-6" y="-100" width="12" height="80" rx="6" fill="#E0B04A"/><ellipse cx="0" cy="-10" rx="26" ry="16" fill="#E0B04A"/><ellipse cx="6" cy="-104" rx="14" ry="9" fill="#E0B04A"/><circle cx="10" cy="-106" r="2.4" fill="#1E3A5F"/>${[[-4, -80], [2, -60], [-10, -12], [10, -6]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#B8862C"/>`).join("")}<rect x="-18" y="2" width="6" height="22" fill="#C99A3A"/><rect x="12" y="2" width="6" height="22" fill="#C99A3A"/></g>`),
  "kids-pancakes-with-grandpa": scene("#F7DDD4", `<rect x="0" y="130" width="320" height="50" fill="#E9B9A9"/>
    ${[0, 1, 2, 3].map((i) => `<ellipse cx="160" cy="${132 - i * 14}" rx="58" ry="12" fill="${i % 2 ? "#E0B04A" : "#D9A040"}"/>`).join("")}<ellipse cx="160" cy="80" rx="54" ry="10" fill="#E8B65A"/><path d="M128 80q32 -10 64 0q-10 30 -12 40q-20-6-40 0q-2-12-12-40z" fill="#C8862C" opacity=".75"/>
    <rect x="148" y="62" width="24" height="10" rx="4" fill="#FFFDFA"/>${[[132, 70], [190, 74]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="5" fill="#F6E1A6"/>`).join("")}
    <g transform="translate(262 90) rotate(20)"><rect x="-6" y="-40" width="12" height="60" rx="4" fill="#A9774F"/><ellipse cx="0" cy="-48" rx="16" ry="12" fill="#A9774F"/></g>`),
  "kids-lucy-can-swim": scene("#DBE9F5", `<rect x="0" y="80" width="320" height="100" fill="#6FA8D6"/>${[100, 124, 148].map((y) => `<path d="M0 ${y}q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#BFDDF2" stroke-width="3" fill="none"/>`).join("")}
    <rect x="0" y="74" width="320" height="10" fill="#FFFDFA"/>${[40, 120, 200, 280].map((x) => `<rect x="${x}" y="80" width="4" height="100" fill="#E8846B" opacity=".6"/>`).join("")}
    <g transform="translate(150 110)"><circle cx="0" cy="0" r="12" fill="#F1C7A5"/><path d="M-12 -4a12 12 0 0 1 24 0z" fill="#E8846B"/><rect x="-60" y="4" width="54" height="12" rx="6" fill="#F1C7A5"/><rect x="8" y="-2" width="40" height="10" rx="5" fill="#F1C7A5" transform="rotate(-20 8 0)"/></g>
    ${[[190, 104], [204, 96], [214, 108]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#FFFDFA" opacity=".8"/>`).join("")}${kSun(274, 36)}`),
  "kids-our-new-puppy": scene("#F6EBD6", `<rect x="0" y="132" width="320" height="48" fill="#E2CC9B"/><path d="M200 100h90v40h-90z" fill="#A9774F"/><ellipse cx="245" cy="104" rx="50" ry="10" fill="#C99A6E"/>
    <g transform="translate(130 120)"><ellipse cx="0" cy="0" rx="34" ry="20" fill="#FFFDFA"/><circle cx="32" cy="-16" r="18" fill="#FFFDFA"/><ellipse cx="22" cy="-28" rx="7" ry="12" fill="#1E3A5F" transform="rotate(-20 22 -28)"/><ellipse cx="44" cy="-26" rx="7" ry="12" fill="#FFFDFA" stroke="#E2CC9B" stroke-width="2" transform="rotate(20 44 -26)"/><circle cx="30" cy="-18" r="2.6" fill="#1E3A5F"/><circle cx="40" cy="-18" r="2.6" fill="#1E3A5F"/><circle cx="38" cy="-10" r="3" fill="#1E3A5F"/>${[-24, -10, 12, 24].map((x) => `<rect x="${x}" y="12" width="8" height="18" rx="3" fill="#FFFDFA"/>`).join("")}<path d="M-34 -6q-12-10-8-22" stroke="#FFFDFA" stroke-width="6" fill="none" stroke-linecap="round"/></g>
    <circle cx="70" cy="150" r="10" fill="#B8865A"/><circle cx="67" cy="147" r="1.8" fill="#5A3A2A"/><circle cx="73" cy="152" r="1.8" fill="#5A3A2A"/>`),

  /* A1+ */
  "kids-lost-teddy": scene("#1E3A5F", `${kStars([[30, 26], [80, 46, 1.6], [130, 20], [250, 30, 1.6], [290, 60], [210, 50, 1.4]])}<circle cx="270" cy="34" r="16" fill="#F6E1A6"/>${kGround("#2E5A4A", 132)}
    <path d="M60 150l60-50 30 50z" fill="#F6E1A6" opacity=".55"/>${kP(54, 156, "#F1C7A5", "#E8846B", 1.1, "#3A2A20")}
    <rect x="170" y="128" width="70" height="8" rx="3" fill="#A9774F"/><rect x="176" y="136" width="5" height="22" fill="#A9774F"/><rect x="230" y="136" width="5" height="22" fill="#A9774F"/>
    <rect x="240" y="108" width="34" height="6" rx="2" fill="#E0B04A"/><rect x="268" y="80" width="6" height="34" fill="#E0B04A"/><rect x="242" y="114" width="5" height="40" fill="#E0B04A"/>
    <g transform="translate(256 98)"><circle cx="0" cy="0" r="12" fill="#C98A5B"/><circle cx="-9" cy="-10" r="5" fill="#C98A5B"/><circle cx="9" cy="-10" r="5" fill="#C98A5B"/><circle cx="-4" cy="-2" r="1.8" fill="#1E3A5F"/><circle cx="4" cy="-2" r="1.8" fill="#1E3A5F"/><ellipse cx="0" cy="16" rx="12" ry="9" fill="#C98A5B"/></g><rect x="200" y="120" width="12" height="9" rx="2" fill="#FFFDFA"/>`, "#FFFFFF", .12),
  "kids-picnic-day": scene("#DCEAF6", `${kSun(280, 34)}${kC(40, 36)}${kGround("#9FCBB5", 110)}${kTree(64, 112, 1.3)}
    <path d="M110 150l90-20 90 20-90 22z" fill="#E8846B"/><path d="M155 140l45 32M245 140l-45 32M110 150h180" stroke="#FFFDFA" stroke-width="3" opacity=".7"/>
    <path d="M170 140a22 22 0 0 1 44 0z" fill="#E0B04A"/><path d="M178 140l14-12 14 12z" fill="#7FB89E"/><path d="M230 146a14 14 0 0 1 28 0z" fill="#E8846B"/><path d="M233 146a11 11 0 0 1 22 0z" fill="#F7DDD4"/>
    ${[[124, 160], [134, 158], [144, 161], [154, 159], [164, 162]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="3.4" ry="2.2" fill="#1E3A5F"/>`).join("")}`),
  "kids-first-bike-ride": scene("#DCEAF6", `${kC(200, 30, .9)}${kGround("#9FCBB5", 128)}<path d="M0 162h320" stroke="#C9D3DE" stroke-width="16"/>
    <g transform="translate(150 132)"><circle cx="-34" cy="16" r="20" fill="none" stroke="#1E3A5F" stroke-width="5"/><circle cx="34" cy="16" r="20" fill="none" stroke="#1E3A5F" stroke-width="5"/><path d="M-34 16L-6 -10H24L34 16M-6 -10L4 16L24 -10M24 -10l-4-14h10" stroke="#6FA8D6" stroke-width="5" fill="none" stroke-linejoin="round"/><rect x="-14" y="-16" width="16" height="6" rx="3" fill="#1E3A5F"/></g>
    ${kP(148, 112, "#E7B48F", "#E0B04A", 1.05)}<path d="M136 80a12 12 0 0 1 24 0z" fill="#E8846B"/>${kP(80, 150, "#F1C7A5", "#1E3A5F", 1.3, "#3A2A20")}<path d="M88 130l40-10" stroke="#F1C7A5" stroke-width="6" stroke-linecap="round"/>`),
  "kids-mia-and-the-butterfly": scene("#DDEEE5", `<rect x="100" y="44" width="120" height="120" rx="20" fill="#FFFDFA" opacity=".7"/><rect x="96" y="34" width="128" height="16" rx="6" fill="#A9774F"/><path d="M160 160V70" stroke="#7FB89E" stroke-width="5"/><path d="M160 120q-30-10-36-30 26 0 36 30zM160 100q30-10 36-28-26 0-36 28z" fill="#7FB89E"/>
    <g transform="translate(250 66) rotate(-12)"><path d="M0 0c-10-26-44-22-34 4 6 14 26 10 34-4z" fill="#E8846B"/><path d="M0 0c10-26 44-22 34 4-6 14-26 10-34-4z" fill="#E8846B"/><path d="M0 2c-8 14-28 22-24 6M0 2c8 14 28 22 24 6" fill="#E0B04A"/><rect x="-2" y="-12" width="4" height="26" rx="2" fill="#1E3A5F"/>${[[-22, -6], [-14, -14], [22, -6], [14, -14]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#1E3A5F"/>`).join("")}</g>
    <g transform="translate(60 140)">${[0, 8, 16, 24].map((x) => `<circle cx="${x}" cy="0" r="7" fill="#7FB89E"/>`).join("")}<circle cx="32" cy="-4" r="8" fill="#6BA88B"/><circle cx="34" cy="-6" r="1.6" fill="#1E3A5F"/></g>`),
  "kids-the-school-play": scene("#E5DEF5", `<rect x="0" y="0" width="60" height="180" fill="#E8846B"/><rect x="260" y="0" width="60" height="180" fill="#E8846B"/><path d="M0 0h320v24q-40 14-80 0t-80 0-80 0-80 0z" fill="#D9725A"/><rect x="0" y="140" width="320" height="40" fill="#A9774F"/>
    ${[90, 230].map((x) => `<path d="M${x} 0l-40 140h80z" fill="#FFF4C8" opacity=".35"/>`).join("")}
    <g transform="translate(160 110)"><circle cx="0" cy="0" r="34" fill="#C98A5B"/>${Array.from({ length: 12 }, (_, i) => { const a = (i / 12) * Math.PI * 2; return `<circle cx="${(Math.cos(a) * 30).toFixed(1)}" cy="${(Math.sin(a) * 30).toFixed(1)}" r="12" fill="#A9693E"/>`; }).join("")}<circle cx="0" cy="0" r="24" fill="#E0B04A"/><circle cx="-8" cy="-4" r="3" fill="#1E3A5F"/><circle cx="8" cy="-4" r="3" fill="#1E3A5F"/><ellipse cx="0" cy="10" rx="9" ry="7" fill="#1E3A5F"/></g>
    <g transform="translate(222 120)"><ellipse cx="0" cy="0" rx="14" ry="20" fill="#7FB89E"/><circle cx="0" cy="-22" r="10" fill="#E8846B"/><path d="M8 -22l10 4-10 4z" fill="#E0B04A"/></g>`),

  /* A2 */
  "kids-treasure-map": scene("#F6EBD6", `<g transform="rotate(-4 160 90)"><path d="M40 30h240v120H40z" fill="#EBD3A0"/><path d="M40 30q-14 60 0 120M280 30q14 60 0 120" stroke="#C99A3A" stroke-width="4" fill="none"/>
    <path d="M70 120q40-60 90-30t80-40" stroke="#8A5A38" stroke-width="3" stroke-dasharray="8 7" fill="none"/>${kTree(80, 96, .6)}<circle cx="160" cy="92" r="10" fill="#6FA8D6"/><circle cx="160" cy="92" r="5" fill="#1E3A5F"/>
    <path d="M236 40l16 16M252 40l-16 16" stroke="#E8846B" stroke-width="6" stroke-linecap="round"/><ellipse cx="226" cy="70" rx="12" ry="8" fill="#A9B4C2"/><ellipse cx="258" cy="72" rx="9" ry="6" fill="#A9B4C2"/>
    <g transform="translate(250 124)"><circle r="14" fill="none" stroke="#1E3A5F" stroke-width="2"/><path d="M0 -12l3 12-3 12-3-12z" fill="#E8846B"/></g></g>`, "#FFFFFF", .4),
  "kids-night-under-stars": scene("#1E3A5F", `${kStars([[20, 20], [50, 50, 1.6], [90, 24], [120, 60, 1.4], [150, 18], [190, 40], [230, 22, 1.6], [262, 54], [300, 26], [70, 80, 1.4], [210, 76, 1.4]])}
    ${[[200, 30], [214, 34], [228, 34], [242, 30], [246, 46], [232, 52], [214, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#E0B04A"/>`).join("")}<path d="M200 30L214 34L228 34L242 30M228 34L232 52L214 50L214 34" stroke="#E0B04A" stroke-width="1" opacity=".6" fill="none"/>
    <path d="M0 180V130l70-50 60 40 60-56 70 60 60-30v86z" fill="#2E4A6A"/><rect x="0" y="150" width="320" height="30" fill="#2E5A4A"/><path d="M90 158l40-50 40 50z" fill="#7FB89E"/><path d="M130 108v50" stroke="#1E3A5F" stroke-width="2"/>
    <path d="M210 158l10-14 10 14z" fill="#E8846B"/><path d="M214 150q6-14 0-22q10 8 6 22z" fill="#E0B04A"/>`, "#FFFFFF", .1),
  "kids-quiet-lion": scene("#F6E1A6", `${kSun(270, 36, 24)}${kGround("#E2CC9B", 120)}<path d="M20 120l14-30 14 30z" fill="#C99A3A"/>
    <g transform="translate(110 118)"><ellipse cx="10" cy="14" rx="32" ry="18" fill="#E0B04A"/>${Array.from({ length: 10 }, (_, i) => { const a = (i / 10) * Math.PI * 2; return `<circle cx="${(-20 + Math.cos(a) * 18).toFixed(1)}" cy="${(-8 + Math.sin(a) * 18).toFixed(1)}" r="9" fill="#C8862C"/>`; }).join("")}<circle cx="-20" cy="-8" r="15" fill="#E0B04A"/><circle cx="-25" cy="-12" r="2.2" fill="#1E3A5F"/><circle cx="-15" cy="-12" r="2.2" fill="#1E3A5F"/><ellipse cx="-20" cy="-3" rx="4" ry="3" fill="#1E3A5F"/></g>
    <g transform="translate(232 128)"><ellipse cx="0" cy="0" rx="26" ry="18" fill="#A9B4C2"/><circle cx="-22" cy="-10" r="14" fill="#A9B4C2"/><path d="M-34 -4q-6 16 4 22" stroke="#A9B4C2" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="-24" cy="-14" r="2.2" fill="#1E3A5F"/></g><ellipse cx="232" cy="150" rx="44" ry="8" fill="#8A5A38" opacity=".7"/>
    <text x="60" y="66" font-family="Poppins,sans-serif" font-size="16" font-weight="700" fill="#1E3A5F">meow?</text>`),
  "kids-grandmas-recipe": scene("#F7DDD4", `<rect x="0" y="128" width="320" height="52" fill="#E9B9A9"/><path d="M120 78h80l-6 60h-68z" fill="#A9B4C2"/><ellipse cx="160" cy="78" rx="44" ry="10" fill="#C9D3DE"/><path d="M144 66q-6-14 2-26M160 64q-6-16 2-30M176 66q-6-14 2-26" stroke="#FFFDFA" stroke-width="3" fill="none" opacity=".8"/>
    ${[[52, 142], [80, 148], [240, 144], [268, 150]].map(([x, y]) => `<g transform="translate(${x} ${y}) rotate(-10)"><path d="M-16 0q16-22 32 0q-16 10-32 0z" fill="#E8D49A"/><path d="M-10 0q10-12 20 0" stroke="#C99A3A" stroke-width="2" fill="none"/></g>`).join("")}
    ${kP(56, 118, "#E7B48F", "#E8846B", 1.1, "#B8B8B8")}<path d="M44 82h24" stroke="#FFFDFA" stroke-width="3"/>`),
  "kids-lights-went-out": scene("#2E3A55", `<rect x="0" y="130" width="320" height="50" fill="#3E4A66"/><path d="M30 30h70v60H30z" fill="#4E6A8E"/><path d="M65 30v60M30 60h70" stroke="#2E3A55" stroke-width="4"/>${[[46, 44], [80, 70], [56, 76]].map(([x, y]) => `<path d="M${x} ${y}l-3 6" stroke="#9FC3E0" stroke-width="2"/>`).join("")}
    <path d="M150 140l120-110v110z" fill="#F6E1A6" opacity=".25"/><g transform="translate(222 70)"><ellipse cx="0" cy="0" rx="22" ry="16" fill="#1E3A5F" opacity=".75"/><path d="M-16 -10l-10-14 14 6zM16 -10l10-14-14 6z" fill="#1E3A5F" opacity=".75"/><path d="M20 4l16 4" stroke="#1E3A5F" stroke-width="6" opacity=".75"/></g>
    <rect x="140" y="128" width="20" height="12" rx="3" fill="#E0B04A"/><rect x="132" y="130" width="10" height="8" rx="2" fill="#C99A3A"/>
    <rect x="100" y="110" width="10" height="24" rx="2" fill="#FFFDFA"/><path d="M105 96q-7 8 0 14q7-6 0-14z" fill="#E0B04A"/><circle cx="105" cy="104" r="16" fill="#F6E1A6" opacity=".2"/>${kP(70, 150, "#F1C7A5", "#E8846B", 1, "#3A2A20")}`, "#FFFFFF", .08),

  /* A2+ */
  "kids-lemonade-stand": scene("#F6E1A6", `${kSun(280, 30)}${kGround("#9FCBB5", 132)}<rect x="80" y="74" width="160" height="70" rx="6" fill="#FFFDFA"/><rect x="80" y="74" width="160" height="16" fill="#E0B04A"/>
    <path d="M70 74l10-34h160l10 34z" fill="#E8846B"/>${[100, 140, 180, 220].map((x) => `<path d="M${x - 10} 40l-6 34h20l6-34z" fill="#FFFDFA" opacity=".85"/>`).join("")}
    <text x="160" y="118" text-anchor="middle" font-family="Poppins,sans-serif" font-size="16" font-weight="800" fill="#1E3A5F">LEMONADE</text><text x="160" y="136" text-anchor="middle" font-family="Poppins,sans-serif" font-size="11" font-weight="700" fill="#E8846B">10 pesos</text>
    <path d="M106 66l4-16h14l4 16z" fill="#F6E1A6"/><path d="M198 66l4-16h14l4 16z" fill="#F6E1A6"/><circle cx="160" cy="62" r="8" fill="#E0B04A"/><circle cx="160" cy="62" r="5" fill="#F6E1A6"/>
    <g transform="translate(276 150)"><ellipse cx="0" cy="0" rx="16" ry="10" fill="#C98A5B"/><circle cx="-14" cy="-8" r="8" fill="#C98A5B"/></g><ellipse cx="252" cy="160" rx="10" ry="4" fill="#6FA8D6"/>`),
  "kids-monarch-journey": scene("#DDEEE5", `<path d="M0 180V110l60-40 50 30 50-50 60 40 50-30 50 40v80z" fill="#7FB89E"/>${[40, 100, 160, 220, 280].map((x, i) => `<path d="M${x} ${168 - (i % 2) * 10}l18-58 18 58z" fill="#3E7A62"/>`).join("")}
    ${[[60, 40, -10], [110, 28, 12], [170, 46, -6], [220, 22, 10], [260, 54, -14], [140, 76, 6], [90, 70, 18], [240, 90, -8]].map(([x, y, r]) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(.7)"><path d="M0 0c-8-20-34-16-26 4 4 10 20 8 26-4zM0 0c8-20 34-16 26 4-4 10-20 8-26-4z" fill="#E8846B"/><path d="M0 2c-6 10-20 16-18 4M0 2c6 10 20 16 18 4" fill="#D9725A"/><rect x="-1.5" y="-10" width="3" height="20" fill="#1E3A5F"/></g>`).join("")}`),
  "kids-missing-cookies": scene("#DCEAF6", `<rect x="0" y="140" width="320" height="40" fill="#C9D3DE"/>${[[70, 158], [100, 152], [130, 158], [160, 152], [190, 158]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle r="4" fill="#8A5A38"/><circle cx="-5" cy="-6" r="2" fill="#8A5A38"/><circle cx="0" cy="-8" r="2" fill="#8A5A38"/><circle cx="5" cy="-6" r="2" fill="#8A5A38"/></g>`).join("")}
    <g transform="translate(250 120)"><ellipse cx="0" cy="0" rx="28" ry="18" fill="#C98A5B"/><circle cx="-26" cy="-12" r="16" fill="#C98A5B"/><ellipse cx="-38" cy="-8" rx="6" ry="4" fill="#5A3A2A"/><path d="M-32 -26l-6-10 10 4z" fill="#8A5A38"/><circle cx="-28" cy="-16" r="2.4" fill="#1E3A5F"/>${[[-40, -4], [-34, -2]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#5A3A2A"/>`).join("")}</g>
    <g transform="translate(70 70)"><circle r="26" fill="#FFFDFA" fill-opacity=".5" stroke="#1E3A5F" stroke-width="6"/><path d="M18 18l28 28" stroke="#1E3A5F" stroke-width="10" stroke-linecap="round"/></g>
    <circle cx="170" cy="60" r="18" fill="#D9A040"/>${[[164, 54], [176, 58], [168, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#5A3A2A"/>`).join("")}<path d="M178 46l10-8" stroke="#DCEAF6" stroke-width="10"/>`),
  "kids-first-swim-race": scene("#DBE9F5", `<rect x="0" y="70" width="320" height="110" fill="#6FA8D6"/>${[96, 124, 152].map((y) => `<path d="M0 ${y}h320" stroke="#FFFDFA" stroke-width="3" stroke-dasharray="10 8"/>`).join("")}<rect x="0" y="60" width="320" height="12" fill="#FFFDFA"/>
    ${[[110, 84], [180, 110], [130, 138]].map(([x, y], i) => `<g transform="translate(${x} ${y})"><circle cx="0" cy="0" r="9" fill="${["#E8846B", "#E0B04A", "#7FB89E"][i]}"/><rect x="-46" y="-3" width="40" height="8" rx="4" fill="#F1C7A5"/><path d="M6 -6q20-14 34 0" stroke="#F1C7A5" stroke-width="6" fill="none" stroke-linecap="round"/></g>`).join("")}
    <rect x="270" y="14" width="36" height="40" rx="4" fill="#1E3A5F"/><text x="288" y="42" text-anchor="middle" font-family="Poppins,sans-serif" font-size="20" font-weight="800" fill="#E0B04A">2</text>`),
  "kids-rainforest-adventure": scene("#DDEEE5", `<rect x="0" y="150" width="320" height="30" fill="#6B5240"/>${[[40, 150, 1.6], [120, 150, 1.4], [200, 150, 1.7], [280, 150, 1.5]].map(([x, y, s]) => kTree(x, y - 30 * s, s)).join("")}
    <rect x="150" y="0" width="14" height="150" fill="#8A6A50"/><circle cx="157" cy="10" r="40" fill="#3E7A62"/>
    <g transform="translate(96 66)"><ellipse cx="0" cy="0" rx="12" ry="16" fill="#1E3A5F"/><path d="M4 -12q18-6 22 4-10 2-22-4z" fill="#F2A33A"/><circle cx="2" cy="-8" r="3" fill="#FFFDFA"/></g>
    <g transform="translate(232 72)"><circle cx="0" cy="0" r="12" fill="#8A5A38"/><circle cx="0" cy="2" r="7" fill="#E8C3A0"/><path d="M8 10q14 20 0 34" stroke="#8A5A38" stroke-width="4" fill="none"/></g>
    <g transform="translate(70 162)"><ellipse rx="30" ry="9" fill="#E0B04A"/>${[[-14, -2], [0, 2], [14, -2]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#1E3A5F"/>`).join("")}</g>`),

  /* B1 */
  "kids-penguins-warm": scene("#DBE9F5", `${kC(40, 30, .8)}${kC(230, 40, .7)}<path d="M0 180V130q80-20 160 0t160-6v56z" fill="#FFFDFA"/>
    ${[[110, 134, 1], [150, 126, 1.15], [190, 132, 1], [132, 146, .9], [172, 146, .95]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="16" ry="26" fill="#1E3A5F"/><ellipse cx="0" cy="4" rx="11" ry="20" fill="#FFFDFA"/><circle cx="0" cy="-24" r="11" fill="#1E3A5F"/><ellipse cx="-6" cy="-20" rx="4" ry="5" fill="#E0B04A"/><circle cx="3" cy="-26" r="2" fill="#FFFDFA"/><path d="M8 -22l7 2-7 2z" fill="#E8846B"/></g>`).join("")}
    <g transform="translate(262 150)"><ellipse cx="0" cy="0" rx="14" ry="8" fill="#FFFDFA" stroke="#C9D3DE" stroke-width="2"/></g>`),
  "kids-moon-phases": scene("#1E3A5F", `${kStars([[20, 24], [70, 150, 1.6], [130, 30], [200, 160, 1.4], [300, 30], [290, 150]])}
    ${[[40, "new"], [100, "cres"], [160, "half"], [220, "gib"], [280, "full"]].map(([x, t]) => `<g transform="translate(${x} 90)"><circle r="22" fill="#33507A"/>${t === "full" ? `<circle r="22" fill="#F6E1A6"/>` : t === "half" ? `<path d="M0 -22a22 22 0 0 1 0 44z" fill="#F6E1A6"/>` : t === "cres" ? `<path d="M0 -22a22 22 0 0 1 0 44a12 22 0 0 0 0-44z" fill="#F6E1A6"/>` : t === "gib" ? `<path d="M0 -22a22 22 0 0 1 0 44a12 22 0 0 1 0-44z" fill="#F6E1A6"/>` : ""}</g>`).join("")}
    <path d="M40 130h240" stroke="#6FA8D6" stroke-width="2" stroke-dasharray="4 6"/>`, "#FFFFFF", .08),
  "kids-volcano-cornfield": scene("#F6EBD6", `${kC(150, 22, .9, "#C9D3DE")}${kC(186, 10, .7, "#A9B4C2")}<path d="M90 140l60-90h20l60 90z" fill="#6B5240"/><path d="M150 50h20l-4 10h-12z" fill="#E8846B"/><path d="M156 60q-10 30 -2 50q4 12-8 30" stroke="#E8846B" stroke-width="5" fill="none"/>
    <rect x="0" y="140" width="320" height="40" fill="#C9A86A"/>${Array.from({ length: 16 }, (_, i) => `<g transform="translate(${10 + i * 20} 150)"><path d="M0 22V-10" stroke="#7FB89E" stroke-width="3"/><path d="M0 0q-10-6-12-14M0 -4q10-6 12-14" stroke="#7FB89E" stroke-width="3" fill="none"/><ellipse cx="3" cy="-12" rx="2.6" ry="6" fill="#E0B04A"/></g>`).join("")}`),
  "kids-dinosaur-detectives": scene("#F6EBD6", `<rect x="0" y="120" width="320" height="60" fill="#D9B98A"/><path d="M0 120q80-10 160 0t160 0" fill="#C9A86A"/>
    <g fill="#FFFDFA"><rect x="70" y="140" width="110" height="8" rx="4"/>${[84, 100, 116, 132, 148, 164].map((x) => `<rect x="${x}" y="128" width="6" height="30" rx="3"/>`).join("")}<ellipse cx="200" cy="138" rx="22" ry="12"/><path d="M60 144l-30 10" stroke="#FFFDFA" stroke-width="7" stroke-linecap="round"/></g><circle cx="206" cy="134" r="4" fill="#D9B98A"/>
    ${kP(254, 120, "#E7B48F", "#7FB89E", 1.2)}<path d="M240 82a14 8 0 0 1 28 0h4v4h-36v-4z" fill="#E0B04A"/><path d="M262 116l18 24" stroke="#8A5A38" stroke-width="4"/><path d="M276 136l10 4-4 6z" fill="#A9B4C2"/>
    ${kSun(40, 36)}`),
  "kids-girl-who-loved-stars": scene("#1E3A5F", `${kStars([[30, 30], [60, 70, 1.6], [110, 20], [150, 50, 1.4], [200, 24], [250, 60, 1.6], [290, 30], [180, 90, 1.4], [90, 100]])}<path d="M150 50L200 24L250 60L290 30" stroke="#E0B04A" stroke-width="1.4" opacity=".6"/>
    <path d="M0 180V140l70-20 70 20v40z" fill="#2E4A6A"/><path d="M40 140l30-22 30 22z" fill="#E8846B"/>${kP(70, 136, "#E7B48F", "#E0B04A", .9, "#3A2A20")}<rect x="56" y="98" width="28" height="12" rx="5" fill="#1E3A5F" stroke="#A9B4C2" stroke-width="2" transform="rotate(-30 70 104)"/>
    <path d="M230 180v-60a40 40 0 0 1 80 0v60z" fill="#C9D3DE"/><path d="M262 92l38-24 6 10-38 24z" fill="#A9B4C2"/>`, "#FFFFFF", .1),

  /* B2 */
  "kids-deep-ocean": scene("#14304E", `${[[40, 40], [100, 120], [180, 30], [260, 140], [290, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2" fill="#6FA8D6" opacity=".6"/>`).join("")}
    <g transform="translate(150 100)"><ellipse cx="0" cy="0" rx="46" ry="34" fill="#3A4E66"/><path d="M-44 -6l-30-20v52z" fill="#3A4E66"/><path d="M20 10q24 2 26 -6" stroke="#14304E" stroke-width="3" fill="none"/>${[22, 30, 38].map((x) => `<path d="M${x} 10l3 8 3-8" fill="#FFFDFA"/>`).join("")}<circle cx="16" cy="-12" r="7" fill="#FFFDFA"/><circle cx="18" cy="-12" r="3.4" fill="#14304E"/><path d="M0 -32q20-40 52-30" stroke="#3A4E66" stroke-width="4" fill="none"/><circle cx="54" cy="-62" r="9" fill="#F6E1A6"/><circle cx="54" cy="-62" r="20" fill="#F6E1A6" opacity=".2"/></g>
    ${[[250, 110], [266, 104]].map(([x, y]) => `<g transform="translate(${x} ${y})"><path d="M0 0q8-6 14 0q-6 6-14 0z" fill="#6FA8D6"/></g>`).join("")}`, "#FFFFFF", .05),
  "kids-raindrop-journey": scene("#DCEAF6", `${kSun(40, 36, 20)}<path d="M0 180V146q80-10 160 0t160 0v34z" fill="#6FA8D6"/>${kC(170, 40, 1.1, "#C9D3DE")}${kC(224, 34, .9, "#C9D3DE")}
    ${[[188, 76], [204, 88], [220, 74], [236, 90]].map(([x, y]) => `<path d="M${x} ${y}q-5 10 0 14q5-4 0-14z" fill="#6FA8D6"/>`).join("")}
    <path d="M70 140q-10-40 10-80" stroke="#E8846B" stroke-width="3" fill="none" stroke-dasharray="6 6"/><path d="M76 62l4-8 4 9z" fill="#E8846B"/><path d="M290 70q20 30 0 70" stroke="#1E3A5F" stroke-width="3" fill="none" stroke-dasharray="6 6"/>
    <path d="M200 146l30-50 30 50z" fill="#A9B4C2"/><path d="M222 110l8-14 8 14z" fill="#FFFDFA"/>`),
  "kids-animals-winter": scene("#E5EDF5", `${kStars([[30, 30, 3], [80, 60, 2.4], [140, 24, 3], [210, 50, 2.6], [280, 26, 3], [250, 80, 2.2], [110, 90, 2.4]])}<path d="M0 180V130q80-24 160-6t160-8v64z" fill="#FFFDFA"/>
    <g transform="translate(110 136)"><ellipse cx="0" cy="0" rx="34" ry="16" fill="#FFFDFA" stroke="#C9D3DE" stroke-width="2"/><circle cx="30" cy="-10" r="12" fill="#FFFDFA" stroke="#C9D3DE" stroke-width="2"/><path d="M24 -20l4-10 6 8zM34 -20l6-8 2 10z" fill="#FFFDFA" stroke="#C9D3DE" stroke-width="2"/><circle cx="34" cy="-11" r="2" fill="#1E3A5F"/><circle cx="41" cy="-8" r="2" fill="#1E3A5F"/><path d="M-32 0q-24 -10 -16 -22" stroke="#FFFDFA" stroke-width="12" fill="none" stroke-linecap="round"/></g>
    ${[[210, 40], [232, 30], [254, 42], [276, 32]].map(([x, y]) => `<path d="M${x} ${y}q6-6 12 0q6-6 12 0" stroke="#1E3A5F" stroke-width="2.4" fill="none"/>`).join("")}
    <path d="M220 150a30 22 0 0 1 60 0z" fill="#8A6A50"/><ellipse cx="250" cy="146" rx="14" ry="10" fill="#C98A5B"/>`),
  "kids-chocolate-gift": scene("#F6EBD6", `<g transform="translate(90 92) rotate(-20)"><ellipse rx="34" ry="54" fill="#E8846B"/>${[-20, -8, 4, 16].map((x) => `<path d="M${x} -50q4 50 0 100" stroke="#D9725A" stroke-width="3" fill="none"/>`).join("")}</g>
    ${[[150, 140], [166, 132], [178, 146]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="6" fill="#8A5A38"/>`).join("")}
    <path d="M204 70h64l-8 80h-48z" fill="#E0B04A"/><path d="M204 70h64" stroke="#C99A3A" stroke-width="4"/>${[218, 236, 254].map((x) => `<path d="M${x} 96l6 10-6 10" stroke="#E8846B" stroke-width="3" fill="none"/>`).join("")}<ellipse cx="236" cy="70" rx="30" ry="6" fill="#6B4430"/><path d="M226 58q-4-12 4-20M244 58q-4-12 4-20" stroke="#A9774F" stroke-width="3" fill="none"/>`),
  "kids-robots-helpers": scene("#DDEEE5", `<rect x="0" y="140" width="320" height="40" fill="#BFD8CB"/>
    <g transform="translate(160 96)"><rect x="-30" y="-40" width="60" height="44" rx="12" fill="#6FA8D6"/><rect x="-20" y="-30" width="40" height="22" rx="8" fill="#1E3A5F"/><circle cx="-9" cy="-19" r="4" fill="#7FB89E"/><circle cx="9" cy="-19" r="4" fill="#7FB89E"/><path d="M0 -40v-12" stroke="#1E3A5F" stroke-width="3"/><circle cx="0" cy="-54" r="4" fill="#E8846B"/><rect x="-26" y="6" width="52" height="38" rx="10" fill="#A9B4C2"/><rect x="-10" y="16" width="20" height="10" rx="3" fill="#E0B04A"/><path d="M-26 16q-24 4-30 -16M26 16q24 4 30 -16" stroke="#A9B4C2" stroke-width="8" fill="none" stroke-linecap="round"/><rect x="-20" y="44" width="12" height="10" rx="3" fill="#1E3A5F"/><rect x="8" y="44" width="12" height="10" rx="3" fill="#1E3A5F"/></g>
    <g transform="translate(260 140)">${[0, 12, 24, 36].map((x) => `<circle cx="${x}" cy="${Math.sin(x) * 3}" r="7" fill="#E0B04A"/>`).join("")}<circle cx="46" cy="-4" r="8" fill="#E8846B"/><circle cx="49" cy="-6" r="2" fill="#1E3A5F"/></g>${kP(60, 150, "#F1C7A5", "#FFFDFA", 1.15, "#3A2A20")}`)
});

/* =====================================================================
   FASE 5 — Lecturas en inglés: MOVA Children hasta 6 por nivel
   ===================================================================== */
READINGS.push(
  /* ---------- Pre-A1 ---------- */
  {
    id: "children-my-bedroom", level: "Pre-A1", stage: "children", topic: "Home", title: "My Bedroom",
    description: "Come and see Emma’s favorite room in the house.",
    text: [
      "Hello! I am Emma. I am nine. This is my bedroom.",
      "My bedroom is small, but I love it. The walls are blue.",
      "There is a bed next to the window. On my bed, there is a big teddy bear.",
      "There is a desk, too. I do my homework at my desk.",
      "I have a lot of books. They are on a shelf.",
      "My cat sleeps on my bed every night!"
    ],
    vocab: [["bedroom", "the room where you sleep"], ["wall", "the side of a room"], ["window", "you look outside through it"], ["desk", "a table for studying"], ["shelf", "a long board on the wall for books"]],
    questions: [
      ["How old is Emma?", ["nine", "six", "twelve"]],
      ["What color are the walls?", ["blue", "pink", "green"]],
      ["Where is the bed?", ["next to the window", "next to the door", "under the desk"]],
      ["Where are the books?", ["on a shelf", "on the bed", "in a box"]],
      ["Who sleeps on Emma’s bed?", ["her cat", "her dog", "her sister"]]
    ]
  },
  {
    id: "children-my-best-friend", level: "Pre-A1", stage: "children", topic: "Friends", title: "My Best Friend",
    description: "Tomás tells us about his best friend, Leo.",
    text: [
      "My name is Tomás. My best friend is Leo.",
      "Leo is ten. He has short black hair and brown eyes.",
      "We are in the same class at school.",
      "Leo is very good at math. I am good at drawing.",
      "After school, we play soccer in the park.",
      "On Saturday, we watch movies and eat popcorn.",
      "Leo is kind and funny. He is a great friend!"
    ],
    vocab: [["best friend", "your favorite friend"], ["hair", "it grows on your head"], ["class", "a group of students"], ["drawing", "making pictures with a pencil"], ["kind", "nice to other people"]],
    questions: [
      ["Who is Tomás’s best friend?", ["Leo", "Max", "Emma"]],
      ["What color is Leo’s hair?", ["black", "brown", "red"]],
      ["What is Leo good at?", ["math", "drawing", "music"]],
      ["Where do they play soccer?", ["in the park", "at home", "at the beach"]],
      ["What do they eat on Saturday?", ["popcorn", "pizza", "ice cream"]]
    ]
  },
  {
    id: "children-whats-the-weather", level: "Pre-A1", stage: "children", topic: "Weather", title: "What’s the Weather Like?",
    description: "Sun, rain, wind and snow: weather around the world.",
    text: [
      "Today it is sunny in Monterrey. It is very hot!",
      "I wear a T-shirt and a cap.",
      "In London, it is rainy. People have umbrellas.",
      "In Chicago, it is windy and cold. People wear jackets.",
      "In Canada, it is snowy. Children make a snowman!",
      "What’s the weather like in your city today?"
    ],
    vocab: [["sunny", "with a lot of sun"], ["rainy", "with water falling from the sky"], ["windy", "with a lot of wind"], ["snowy", "with white snow on the ground"], ["umbrella", "it keeps you dry in the rain"]],
    questions: [
      ["What is the weather like in Monterrey?", ["sunny", "rainy", "snowy"]],
      ["What does the child wear?", ["a T-shirt and a cap", "a coat and a hat", "a jacket and boots"]],
      ["What do people have in London?", ["umbrellas", "snowmen", "kites"]],
      ["How is the weather in Chicago?", ["windy and cold", "hot and sunny", "rainy and warm"]],
      ["What do children make in Canada?", ["a snowman", "a sandcastle", "a cake"]]
    ]
  },
  {
    id: "children-at-the-zoo", level: "Pre-A1", stage: "children", topic: "Animals", title: "A Trip to the Zoo",
    description: "Mía’s class visits the zoo. Which animal is her favorite?",
    text: [
      "Today my class is at the zoo. It is fun!",
      "Look at the giraffe. It is very tall. It has a long neck.",
      "The elephant is big and gray. It has big ears.",
      "The monkeys are funny. They jump and climb.",
      "The lion is sleeping. Shh!",
      "My favorite animal is the penguin. It is black and white, and it can swim."
    ],
    vocab: [["zoo", "a place where you see wild animals"], ["neck", "it is between your head and your body"], ["ears", "you hear with them"], ["climb", "to go up a tree"], ["penguin", "a black and white bird that swims"]],
    questions: [
      ["Where is the class?", ["at the zoo", "at the park", "at the farm"]],
      ["Which animal has a long neck?", ["the giraffe", "the lion", "the monkey"]],
      ["What color is the elephant?", ["gray", "brown", "black"]],
      ["What is the lion doing?", ["sleeping", "eating", "running"]],
      ["What is Mía’s favorite animal?", ["the penguin", "the elephant", "the monkey"]]
    ]
  },
  {
    id: "children-my-week", level: "Pre-A1", stage: "children", topic: "Daily Life", title: "My Busy Week",
    description: "Every day of the week, Daniel does something different.",
    text: [
      "I am Daniel. My week is very busy!",
      "On Monday and Wednesday, I have English class.",
      "On Tuesday, I play basketball.",
      "On Thursday, I go to swimming lessons.",
      "On Friday, I visit my grandma. She makes enchiladas.",
      "On Saturday and Sunday, I rest and play with my brother.",
      "What is your favorite day?"
    ],
    vocab: [["week", "seven days"], ["busy", "with many things to do"], ["lesson", "a class"], ["visit", "to go and see someone"], ["rest", "to relax and not work"]],
    questions: [
      ["When does Daniel have English class?", ["Monday and Wednesday", "Tuesday and Thursday", "Saturday"]],
      ["What does he do on Tuesday?", ["He plays basketball.", "He swims.", "He visits Grandma."]],
      ["When does he go swimming?", ["on Thursday", "on Friday", "on Sunday"]],
      ["What does Grandma make?", ["enchiladas", "cookies", "soup"]],
      ["Who does he play with on the weekend?", ["his brother", "his cousin", "his teacher"]]
    ]
  },

  /* ---------- A1 ---------- */
  {
    id: "children-taco-friday", level: "A1", stage: "children", topic: "Food", title: "Taco Friday",
    description: "Every Friday, Sofía’s family makes tacos together.",
    text: [
      "In my house, Friday is a special day. It is Taco Friday!",
      "After school, my mom and I go to the market. We buy tortillas, tomatoes, onions, avocados and meat.",
      "At home, everybody helps. My dad cooks the meat. My little brother washes the tomatoes. I make the guacamole. I am very good at it!",
      "My grandpa makes the salsa. His salsa is very spicy, so I only eat a little.",
      "At seven o’clock, we sit at the table. We put music on and we talk about our week.",
      "I like Taco Friday because we are all together and the food is delicious."
    ],
    vocab: [["market", "a place where people sell food"], ["avocado", "a green fruit for guacamole"], ["cook", "to make food hot on a stove"], ["spicy", "it burns a little in your mouth"], ["delicious", "very, very good to eat"]],
    questions: [
      ["Where do Sofía and her mom go after school?", ["to the market", "to the park", "to a restaurant"]],
      ["What does Sofía make?", ["the guacamole", "the salsa", "the meat"]],
      ["Who makes the salsa?", ["her grandpa", "her dad", "her brother"]],
      ["Why does Sofía eat only a little salsa?", ["It is very spicy.", "It is cold.", "She doesn’t like tomatoes."]],
      ["Why does Sofía like Taco Friday?", ["The family is together and the food is great.", "She doesn’t go to school.", "She watches TV all night."]]
    ]
  },
  {
    id: "children-diegos-new-bike", level: "A1", stage: "children", topic: "Hobbies", title: "Diego’s New Bike",
    description: "Diego has a new bike, but there is one problem.",
    text: [
      "It is Diego’s birthday. He is ten today. His parents give him a big present. It is a new red bike!",
      "Diego is very happy, but there is a problem. He can’t ride a bike.",
      "“Don’t worry,” says his older sister, Paula. “I can help you.”",
      "Every afternoon, they go to the park. Paula holds the bike and Diego pedals. He falls three times, but he doesn’t stop.",
      "On Saturday, Paula lets go of the bike. Diego doesn’t know. He rides alone to the end of the park!",
      "“I can do it!” he shouts. Now Diego rides his bike every day."
    ],
    vocab: [["present", "something you give for a birthday"], ["ride", "to move on a bike or a horse"], ["pedal", "to move the bike with your feet"], ["fall", "to go down to the ground"], ["alone", "with no other person"]],
    questions: [
      ["How old is Diego today?", ["ten", "nine", "eleven"]],
      ["What color is the bike?", ["red", "blue", "black"]],
      ["What is Diego’s problem?", ["He can’t ride a bike.", "The bike is broken.", "He doesn’t like red."]],
      ["Who helps Diego?", ["his sister Paula", "his dad", "his friend"]],
      ["What happens on Saturday?", ["He rides alone.", "He falls again.", "He sells the bike."]]
    ]
  },
  {
    id: "children-library-day", level: "A1", stage: "children", topic: "School", title: "Library Day",
    description: "Thursday is library day at Valeria’s school.",
    text: [
      "At my school, Thursday is library day. My class goes to the library at ten o’clock.",
      "The library is big and quiet. There are thousands of books, comfortable cushions and big windows.",
      "Mrs. Ramos is the librarian. She is very nice. She always helps us find good books.",
      "I love adventure stories. My friend Ana likes books about animals. Carlos only reads comics!",
      "We can take two books home for one week. This week, I have a book about pirates and a book about space.",
      "At night, I read in bed for twenty minutes. Reading is my favorite hobby."
    ],
    vocab: [["library", "a place with many books to borrow"], ["quiet", "with very little noise"], ["librarian", "a person who works in a library"], ["comic", "a story with pictures and speech bubbles"], ["hobby", "something you like doing in your free time"]],
    questions: [
      ["When is library day?", ["Thursday", "Monday", "Friday"]],
      ["Who is Mrs. Ramos?", ["the librarian", "the principal", "Valeria’s mom"]],
      ["What does Carlos read?", ["comics", "animal books", "adventure stories"]],
      ["How many books can students take home?", ["two", "one", "five"]],
      ["How long does Valeria read at night?", ["twenty minutes", "one hour", "five minutes"]]
    ]
  },
  {
    id: "children-shelly-the-turtle", level: "A1", stage: "children", topic: "Animals", title: "Shelly the Turtle",
    description: "Ian’s pet is slow, quiet and very special.",
    text: [
      "I have a pet turtle. Her name is Shelly. She is five years old.",
      "Shelly is green and brown. She has a hard shell on her back. When she is scared, she puts her head inside her shell.",
      "Shelly lives in a big tank with water and rocks. She likes swimming, and she also likes sitting on a rock under a warm lamp.",
      "I feed her every morning before school. She eats special turtle food, lettuce and sometimes small pieces of fruit.",
      "Every Saturday, I clean her tank with my dad.",
      "Turtles can live for more than thirty years. Shelly and I can be friends for a long time!"
    ],
    vocab: [["pet", "an animal that lives with you"], ["shell", "the hard part on a turtle’s back"], ["scared", "afraid"], ["tank", "a glass box with water for animals"], ["feed", "to give food to"]],
    questions: [
      ["How old is Shelly?", ["five", "thirty", "ten"]],
      ["What does Shelly do when she is scared?", ["She puts her head in her shell.", "She swims fast.", "She jumps."]],
      ["Where does Shelly sit to get warm?", ["on a rock under a lamp", "in Ian’s bed", "in the garden"]],
      ["When does Ian feed Shelly?", ["every morning", "every night", "on Saturdays"]],
      ["How long can turtles live?", ["more than thirty years", "about five years", "one year"]]
    ]
  },

  /* ---------- A1+ ---------- */
  {
    id: "children-surprise-party", level: "A1+", stage: "children", topic: "Celebrations", title: "The Surprise Party",
    description: "Can the class keep a big secret from their teacher?",
    text: [
      "Next Friday is Miss Laura’s birthday. She is our teacher, and everybody loves her. So our class has a plan: a surprise party!",
      "It is not easy to keep a secret. On Monday, we make a big card and everyone signs it. We hide it in Marco’s backpack.",
      "On Wednesday, Miss Laura asks, “Why are you all smiling?” Fernanda almost tells her, but Marco says, “We’re just happy, Miss!”",
      "On Friday morning, the principal asks Miss Laura to go to the office. We have only ten minutes. We put balloons on the walls and a chocolate cake on her desk.",
      "When she comes back, we shout, “SURPRISE!” Miss Laura is so surprised that she drops her coffee. Then she laughs and hugs everyone.",
      "It is the best day of the school year."
    ],
    vocab: [["surprise", "something you don’t know is coming"], ["secret", "something you don’t tell other people"], ["sign", "to write your name"], ["hide", "to put something where people can’t see it"], ["principal", "the head of a school"]],
    questions: [
      ["Who is the party for?", ["Miss Laura", "Marco", "the principal"]],
      ["Where do they hide the card?", ["in Marco’s backpack", "in the teacher’s desk", "in the office"]],
      ["Who almost tells the secret?", ["Fernanda", "Marco", "the principal"]],
      ["How much time do they have to prepare the room?", ["ten minutes", "one hour", "all day"]],
      ["What does Miss Laura drop?", ["her coffee", "the cake", "her bag"]]
    ]
  },
  {
    id: "children-swimming-lesson", level: "A1+", stage: "children", topic: "Sports", title: "Afraid of the Deep End",
    description: "Regina loves swimming, but the deep water is a different story.",
    text: [
      "Regina takes swimming lessons every Tuesday and Thursday. She can swim very well in the shallow end of the pool, where her feet touch the bottom.",
      "But the deep end scares her. The water is dark blue, and it is three meters deep.",
      "One day, her coach, Pedro, says, “Today we’re going to swim in the deep end.” Regina’s heart beats fast.",
      "“Remember,” says Pedro, “the water is the same. You already know how to swim. Breathe slowly and kick your legs.”",
      "Regina closes her eyes for a second. Then she jumps in. She goes under the water, kicks her legs and comes up again. She is floating!",
      "Now the deep end is her favorite part of the pool."
    ],
    vocab: [["shallow", "not deep"], ["deep", "it goes a long way down"], ["coach", "a person who teaches a sport"], ["kick", "to move your legs strongly"], ["float", "to stay on top of the water"]],
    questions: [
      ["When are Regina’s lessons?", ["Tuesday and Thursday", "Monday and Friday", "every weekend"]],
      ["Why does the deep end scare her?", ["It is very deep.", "It is very cold.", "There are fish."]],
      ["Who is Pedro?", ["her swimming coach", "her brother", "a lifeguard"]],
      ["What advice does Pedro give?", ["Breathe slowly and kick your legs.", "Don’t look at the water.", "Swim very fast."]],
      ["How does Regina feel about the deep end now?", ["It is her favorite part.", "She still hates it.", "She never goes there."]]
    ]
  },
  {
    id: "children-weekend-at-the-ranch", level: "A1+", stage: "children", topic: "Family", title: "A Weekend at the Ranch",
    description: "No video games, no internet… just Grandpa’s ranch.",
    text: [
      "Every year, Santiago spends a long weekend at his grandpa’s ranch near Linares. There is no internet there, and at first, Santiago doesn’t like that.",
      "But the ranch is full of things to do. In the morning, he helps Grandpa feed the chickens and milk the cow. The milk is warm!",
      "In the afternoon, they ride horses by the river. Santiago’s horse is called Canela. She is calm and gentle.",
      "At night, the sky is very dark, and Santiago can see hundreds of stars. Grandpa tells him the names of some of them.",
      "On Sunday, it is time to go home. Santiago is a little sad.",
      "“Can I come back for the summer?” he asks. Grandpa smiles. “Of course!”"
    ],
    vocab: [["ranch", "a big farm with animals"], ["milk", "to take milk from a cow"], ["river", "a long line of water that moves"], ["gentle", "calm and soft, not rough"], ["hundreds", "many, more than one hundred"]],
    questions: [
      ["Where is Grandpa’s ranch?", ["near Linares", "in Monterrey", "near the beach"]],
      ["Why doesn’t Santiago like the ranch at first?", ["There is no internet.", "There are no animals.", "It is too cold."]],
      ["What is the name of his horse?", ["Canela", "Luna", "Paloma"]],
      ["What can he see at night?", ["hundreds of stars", "city lights", "a big moon only"]],
      ["What does Santiago ask at the end?", ["if he can come back in summer", "if he can go home early", "if he can take the horse home"]]
    ]
  },
  {
    id: "children-science-fair", level: "A1+", stage: "children", topic: "Science", title: "The Science Fair Volcano",
    description: "Andrés and Valentina’s project is a little too exciting.",
    text: [
      "Andrés and Valentina are partners for the school science fair. Their project is a volcano.",
      "They make the volcano with clay and paint it brown and green. Inside, there is a small bottle. When you put baking soda and vinegar in the bottle, red foam comes out, like lava.",
      "On the day of the fair, the judges come to their table. Valentina explains the science: the baking soda and the vinegar make a gas, and the gas pushes the foam up.",
      "Then Andrés adds the vinegar. But he is nervous, and he adds too much! The red foam goes everywhere, even on the judge’s shoes.",
      "Everyone laughs, including the judge. “That is a very real volcano,” she says.",
      "They don’t win first place, but they win the prize for “Most Exciting Project.”"
    ],
    vocab: [["partner", "a person who works with you"], ["clay", "soft earth you can make shapes with"], ["foam", "many tiny bubbles together"], ["judge", "a person who decides who wins"], ["prize", "something you win"]],
    questions: [
      ["What is their project?", ["a volcano", "a robot", "a plant"]],
      ["What is the volcano made of?", ["clay", "paper", "wood"]],
      ["What makes the gas?", ["baking soda and vinegar", "water and salt", "paint and soap"]],
      ["What is Andrés’s mistake?", ["He adds too much vinegar.", "He forgets the bottle.", "He drops the volcano."]],
      ["What prize do they win?", ["Most Exciting Project", "First place", "Best Painting"]]
    ]
  },
  {
    id: "children-day-of-the-dead", level: "A1+", stage: "children", topic: "Culture", title: "Our Day of the Dead Altar",
    description: "Lucía’s family remembers Great-Grandma Rosa with a beautiful altar.",
    text: [
      "Every year at the beginning of November, my family makes an altar for the Day of the Dead. This year, it is for my great-grandma Rosa.",
      "First, we put a table in the living room and cover it with a white cloth. Then we put her photo at the top.",
      "We decorate the altar with orange cempasúchil flowers, candles and colorful papel picado. My little cousins draw sugar skulls.",
      "We also put her favorite things on the altar: hot chocolate, pan de muerto and a small radio, because she loved music.",
      "In the evening, my grandma tells us stories about Great-Grandma Rosa. She was funny, and she danced at every party.",
      "The Day of the Dead is not a sad day. It is a day to remember the people we love."
    ],
    vocab: [["altar", "a special table to remember someone"], ["great-grandma", "your grandma’s mother"], ["cloth", "a piece of fabric"], ["candle", "it gives light with a small fire"], ["remember", "to think about someone from the past"]],
    questions: [
      ["When does the family make the altar?", ["at the beginning of November", "in December", "on her birthday"]],
      ["Who is the altar for?", ["Great-Grandma Rosa", "Grandpa", "a famous singer"]],
      ["What color are the cempasúchil flowers?", ["orange", "white", "purple"]],
      ["Why is there a radio on the altar?", ["She loved music.", "It is a decoration.", "Grandma wants to listen."]],
      ["How does Lucía describe the Day of the Dead?", ["a day to remember people we love", "a very sad day", "a day for scary costumes"]]
    ]
  }
);

/* ---------- Ilustraciones Children Pre-A1 a A1+ ---------- */
Object.assign(READING_ART, {
  "children-my-bedroom": scene("#E3EEF9", `<rect x="0" y="132" width="320" height="48" fill="#E8D6BF"/>
    <rect x="26" y="34" width="84" height="66" rx="6" fill="#FFFDFA"/><rect x="30" y="38" width="76" height="58" fill="#BFDDF2"/>${kC(42, 64, .6)}<path d="M68 38v58M30 67h76" stroke="#FFFDFA" stroke-width="4"/>
    <rect x="24" y="104" width="140" height="34" rx="8" fill="#6FA8D6"/><rect x="24" y="96" width="140" height="16" rx="8" fill="#FFFDFA"/><rect x="18" y="88" width="14" height="56" rx="5" fill="#1E3A5F"/>
    <g transform="translate(130 92)"><circle cx="0" cy="0" r="13" fill="#C98A5B"/><circle cx="-10" cy="-11" r="5" fill="#C98A5B"/><circle cx="10" cy="-11" r="5" fill="#C98A5B"/><circle cx="0" cy="3" r="5" fill="#F0C9A0"/><circle cx="-4" cy="-3" r="1.6" fill="#1E3A5F"/><circle cx="4" cy="-3" r="1.6" fill="#1E3A5F"/></g>
    <rect x="200" y="40" width="96" height="6" rx="3" fill="#A9774F"/>${["#E8846B", "#E0B04A", "#4FA88A", "#6FA8D6", "#A98BE8"].map((c, i) => `<rect x="${206 + i * 13}" y="${18 + (i % 2) * 4}" width="10" height="${22 - (i % 2) * 4}" rx="2" fill="${c}"/>`).join("")}
    <rect x="200" y="96" width="96" height="8" rx="3" fill="#A9774F"/><rect x="206" y="104" width="7" height="34" fill="#A9774F"/><rect x="283" y="104" width="7" height="34" fill="#A9774F"/><rect x="226" y="80" width="40" height="16" rx="2" fill="#1E3A5F"/><circle cx="220" cy="88" r="6" fill="#E0B04A"/>
    <g transform="translate(86 104)"><ellipse cx="0" cy="0" rx="14" ry="7" fill="#9AA6B8"/><circle cx="-12" cy="-4" r="6" fill="#9AA6B8"/><path d="M-16 -9l2-6 3 5zM-9 -9l1-6 3 5z" fill="#9AA6B8"/></g>`),
  "children-my-best-friend": scene("#DCEFE6", `${kTree(46, 112, 1.1)}${kTree(280, 116, .9)}${kGround("#9FCBB5", 124)}
    ${kP(128, 148, "#F1C7A5", "#E8846B", 1.6, "#3A2A20")}${kP(192, 148, "#C98E6A", "#6FA8D6", 1.65, "#1E1A18")}
    <g transform="translate(160 160)"><circle r="12" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="2"/><path d="M0 -5l5 3-2 6h-6l-2-6z" fill="#1E3A5F"/></g>
    <path d="M160 40c-6-12-26-6-16 9l16 14 16-14c10-15-10-21-16-9z" fill="#E8846B"/>`),
  "children-whats-the-weather": scene("#FFF4DE", `<rect x="0" y="0" width="80" height="180" fill="#FCE3A6"/><rect x="80" y="0" width="80" height="180" fill="#D6E2EE"/><rect x="160" y="0" width="80" height="180" fill="#E3EEF9"/><rect x="240" y="0" width="80" height="180" fill="#EEF4FA"/>
    ${kSun(40, 50, 20)}${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<path d="M${40 + 26 * Math.cos(a * Math.PI / 180)} ${50 + 26 * Math.sin(a * Math.PI / 180)}L${40 + 34 * Math.cos(a * Math.PI / 180)} ${50 + 34 * Math.sin(a * Math.PI / 180)}" stroke="#E0B04A" stroke-width="4" stroke-linecap="round"/>`).join("")}
    ${kC(96, 42, .9, "#9AA6B8")}${[100, 112, 124, 136].map((x, i) => `<path d="M${x} ${70 + (i % 2) * 8}l-4 10" stroke="#6FA8D6" stroke-width="3" stroke-linecap="round"/>`).join("")}
    <path d="M176 44q20-8 40 0M172 60q24-8 48 0M180 76q18-6 34 0" stroke="#6FA8D6" stroke-width="4" fill="none" stroke-linecap="round"/>
    ${kStars([[256, 30, 3], [280, 50, 3], [300, 26, 2.5], [266, 70, 2.5], [296, 78, 3]], "#9AB8D6")}
    <g transform="translate(280 130)"><circle cx="0" cy="0" r="18" fill="#FFFDFA"/><circle cx="0" cy="-26" r="12" fill="#FFFDFA"/><path d="M0 -26l10 3-10 3z" fill="#E8846B"/><circle cx="-4" cy="-29" r="1.6" fill="#1E3A5F"/><circle cx="4" cy="-29" r="1.6" fill="#1E3A5F"/></g>
    ${kP(40, 152, "#C98E6A", "#E8846B", 1.25, "#1E1A18")}<path d="M28 116h24l-4-8h-18z" fill="#1E3A5F"/>
    <g transform="translate(120 132)"><path d="M-22 0a22 18 0 0 1 44 0z" fill="#E8846B"/><path d="M0 0v22q0 6-6 6" stroke="#1E3A5F" stroke-width="3" fill="none"/></g>
    ${kP(200, 154, "#F1C7A5", "#4FA88A", 1.25, "#5A3A2A")}`),
  "children-at-the-zoo": scene("#FCEFD2", `${kGround("#B9D8A7", 132)}${kTree(30, 110, .9)}
    <g transform="translate(78 136)"><rect x="-4" y="-80" width="10" height="60" rx="4" fill="#E0B04A"/><ellipse cx="0" cy="-10" rx="22" ry="16" fill="#E0B04A"/><ellipse cx="6" cy="-84" rx="10" ry="7" fill="#E0B04A"/><circle cx="8" cy="-86" r="1.6" fill="#1E3A5F"/>${[[-8, -14], [6, -4], [-2, -40], [2, -60], [10, -16]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="#B57A2F"/>`).join("")}<rect x="-16" y="2" width="5" height="18" fill="#C9902F"/><rect x="10" y="2" width="5" height="18" fill="#C9902F"/></g>
    <g transform="translate(160 132)"><ellipse cx="0" cy="-10" rx="30" ry="22" fill="#A9B4C2"/><circle cx="-28" cy="-18" r="14" fill="#A9B4C2"/><ellipse cx="-20" cy="-20" rx="10" ry="13" fill="#9AA6B8"/><path d="M-38 -12q-6 18 4 22" stroke="#A9B4C2" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="-32" cy="-22" r="1.6" fill="#1E3A5F"/>${[-18, -4, 10, 22].map((x) => `<rect x="${x}" y="4" width="8" height="14" rx="3" fill="#9AA6B8"/>`).join("")}</g>
    <g transform="translate(250 138)"><ellipse cx="0" cy="-16" rx="16" ry="24" fill="#1E3A5F"/><ellipse cx="0" cy="-12" rx="10" ry="18" fill="#FFFDFA"/><circle cx="0" cy="-42" r="12" fill="#1E3A5F"/><circle cx="-4" cy="-44" r="2" fill="#FFFDFA"/><circle cx="4" cy="-44" r="2" fill="#FFFDFA"/><path d="M-3 -38h6l-3 5z" fill="#E0B04A"/><path d="M-8 8h7M1 8h7" stroke="#E0B04A" stroke-width="4" stroke-linecap="round"/></g>
    ${kP(296, 156, "#F1C7A5", "#E8846B", 1.1, "#3A2A20")}`),
  "children-my-week": scene("#EEF0FB", `<rect x="24" y="22" width="272" height="136" rx="12" fill="#FFFDFA"/><rect x="24" y="22" width="272" height="26" rx="12" fill="#1E3A5F"/><rect x="24" y="36" width="272" height="12" fill="#1E3A5F"/>
    ${["M", "T", "W", "T", "F", "S", "S"].map((d, i) => `${T(48 + i * 37.5, 35, d, 12, "#FFFDFA")}<rect x="${32 + i * 37.5}" y="56" width="32" height="92" rx="7" fill="${["#DCEAF6", "#FBE3DC", "#DCEAF6", "#E2F2EA", "#FCEFD2", "#EDE6FA", "#EDE6FA"][i]}"/>`).join("")}
    <g transform="translate(48 102)"><rect x="-10" y="-8" width="20" height="16" rx="2" fill="#6FA8D6"/><path d="M0 -8v16" stroke="#FFFDFA" stroke-width="2"/></g>
    <g transform="translate(86 102)"><circle r="10" fill="#E8846B"/><path d="M-10 0h20M0 -10v20" stroke="#1E3A5F" stroke-width="1.5"/></g>
    <g transform="translate(123 102)"><rect x="-10" y="-8" width="20" height="16" rx="2" fill="#6FA8D6"/><path d="M0 -8v16" stroke="#FFFDFA" stroke-width="2"/></g>
    <path d="M150 104q6-6 12 0t12 0" stroke="#4FA88A" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M150 112q6-6 12 0t12 0" stroke="#4FA88A" stroke-width="4" fill="none" stroke-linecap="round"/>
    <g transform="translate(198 102)"><path d="M-12 4h24l-3-12h-18z" fill="#E0B04A"/><path d="M-8 -10q8-8 16 0" stroke="#E8846B" stroke-width="3" fill="none"/></g>
    ${kStars([[236, 96, 4], [248, 108, 3], [276, 96, 4], [286, 110, 3]], "#A98BE8")}`)
});
Object.assign(READING_ART, {
  "children-taco-friday": scene("#FBE3DC", `<rect x="0" y="118" width="320" height="62" fill="#E8C7A8"/><ellipse cx="160" cy="124" rx="140" ry="14" fill="#C98A5B"/>
    ${[[80, 112], [140, 114], [200, 112]].map(([x, y]) => `<g transform="translate(${x} ${y})"><path d="M-22 4a22 22 0 0 1 44 0z" fill="#F2D49B"/><path d="M-18 2q8-10 18-6t18 4" stroke="#4FA88A" stroke-width="5" fill="none"/><circle cx="-6" cy="-2" r="3.5" fill="#E8846B"/><circle cx="8" cy="-1" r="3" fill="#E8846B"/></g>`).join("")}
    <g transform="translate(258 108)"><ellipse cx="0" cy="8" rx="22" ry="10" fill="#E8846B"/><ellipse cx="0" cy="2" rx="18" ry="6" fill="#7FB89E"/>${[-8, 0, 8].map((x) => `<circle cx="${x}" cy="1" r="2" fill="#4FA88A"/>`).join("")}</g>
    <g transform="translate(36 96)"><path d="M-12 12h24l-4-26h-16z" fill="#E8846B"/><rect x="-6" y="-20" width="12" height="6" rx="2" fill="#1E3A5F"/></g>
    ${["#E8846B", "#E0B04A", "#4FA88A", "#6FA8D6", "#A98BE8", "#E8846B"].map((c, i) => `<path d="M${18 + i * 50} 20h40l-4 22-8-6-8 6-8-6-8 6z" fill="${c}"/>`).join("")}<path d="M10 20h300" stroke="#1E3A5F" stroke-width="2"/>`),
  "children-diegos-new-bike": scene("#DCEAF6", `${kC(40, 40)}${kC(230, 30, .8)}${kGround("#9FCBB5", 130)}${kTree(286, 112, .9)}
    <g transform="translate(150 140)" stroke="#E8846B" stroke-width="5" fill="none" stroke-linecap="round"><circle cx="-40" cy="0" r="22" stroke="#1E3A5F"/><circle cx="40" cy="0" r="22" stroke="#1E3A5F"/><path d="M-40 0l24-34h44l12 34M-16 -34l24 34 32-34M-22 -42h14M28 -34l-4-12h12"/></g>
    ${kP(146, 104, "#C98E6A", "#6FA8D6", 1.3, "#1E1A18")}${kP(70, 148, "#C98E6A", "#E0B04A", 1.5, "#1E1A18")}
    <path d="M200 60l6 12 13 2-10 9 3 13-12-7-12 7 3-13-10-9 13-2z" fill="#E0B04A"/>`),
  "children-library-day": scene("#EDE6FA", `<rect x="0" y="138" width="320" height="42" fill="#D9C7B0"/>
    ${[18, 118, 218].map((x) => `<rect x="${x}" y="20" width="84" height="118" rx="6" fill="#A9774F"/>${[34, 70, 106].map((y) => `<rect x="${x + 6}" y="${y}" width="72" height="4" fill="#8A5A38"/>${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${x + 8 + i * 12}" y="${y - 12 + (i % 3)}" width="9" height="${12 - (i % 3)}" rx="1.5" fill="${["#E8846B", "#E0B04A", "#4FA88A", "#6FA8D6", "#A98BE8", "#FFFDFA"][(i + y) % 6]}"/>`).join("")}`).join("")}`).join("")}
    <ellipse cx="160" cy="160" rx="40" ry="10" fill="#E8846B"/>${kP(160, 156, "#F1C7A5", "#4FA88A", 1.3, "#5A3A2A")}
    <g transform="translate(160 140)"><path d="M-16 -6l16 4 16-4v14l-16 4-16-4z" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="1.5"/></g>`),
  "children-shelly-the-turtle": scene("#DFF0EC", `<rect x="30" y="34" width="260" height="120" rx="10" fill="#BFE3EA" stroke="#FFFDFA" stroke-width="6"/><rect x="30" y="112" width="260" height="42" fill="#8FC9D6"/>
    <path d="M190 44h60" stroke="#E0B04A" stroke-width="10" stroke-linecap="round"/><path d="M200 50l-12 26M240 50l12 26" stroke="#FCE3A6" stroke-width="10" opacity=".7"/>
    <ellipse cx="220" cy="118" rx="40" ry="14" fill="#A9B4C2"/><ellipse cx="80" cy="140" rx="26" ry="8" fill="#A9B4C2"/>
    <g transform="translate(214 98)"><ellipse cx="0" cy="0" rx="28" ry="18" fill="#6BA88B"/><path d="M-14 -10l8 8-8 8M6 -14l6 12-6 10" stroke="#4A7F66" stroke-width="2" fill="none"/><ellipse cx="30" cy="4" rx="10" ry="7" fill="#9FCB8A"/><circle cx="34" cy="2" r="1.6" fill="#1E3A5F"/>${[-18, 14].map((x) => `<ellipse cx="${x}" cy="14" rx="7" ry="4" fill="#9FCB8A"/>`).join("")}</g>
    ${[[60, 70], [74, 90], [62, 104]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="none" stroke="#FFFDFA" stroke-width="2"/>`).join("")}
    <path d="M110 154q-4-30 6-44M124 154q2-24-6-36" stroke="#4FA88A" stroke-width="5" fill="none" stroke-linecap="round"/>`),
  "children-surprise-party": scene("#FCEFD2", `${[["#E8846B", 40, 50], ["#6FA8D6", 76, 36], ["#4FA88A", 256, 44], ["#A98BE8", 290, 58], ["#E0B04A", 222, 30]].map(([c, x, y]) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="17" fill="${c}"/><path d="M${x} ${y + 17}q-4 16 4 30" stroke="#1E3A5F" stroke-width="1.5" fill="none"/>`).join("")}
    <rect x="0" y="130" width="320" height="50" fill="#E8C7A8"/><rect x="110" y="120" width="100" height="10" rx="3" fill="#A9774F"/>
    <g transform="translate(160 96)"><rect x="-30" y="0" width="60" height="24" rx="4" fill="#8A5A38"/><rect x="-30" y="0" width="60" height="7" rx="3" fill="#FFFDFA"/><rect x="-2" y="-14" width="4" height="14" fill="#6FA8D6"/><path d="M0 -22q4 4 0 8q-4-4 0-8z" fill="#E0B04A"/></g>
    ${kP(60, 160, "#F1C7A5", "#A98BE8", 1.35, "#5A3A2A")}${kP(260, 160, "#C98E6A", "#E8846B", 1.35, "#1E1A18")}
    ${[[110, 70, "#E8846B"], [200, 64, "#4FA88A"], [130, 40, "#E0B04A"], [180, 30, "#6FA8D6"], [150, 70, "#A98BE8"]].map(([x, y, c]) => `<rect x="${x}" y="${y}" width="6" height="3" fill="${c}" transform="rotate(30 ${x} ${y})"/>`).join("")}`),
  "children-swimming-lesson": scene("#DCEFF7", `<rect x="0" y="70" width="320" height="110" fill="#6FC1D9"/><rect x="0" y="70" width="320" height="8" fill="#FFFDFA"/>
    ${[100, 150].map((y) => `<path d="M0 ${y}${Array.from({ length: 16 }, () => "q10-6 20 0").join("")}" stroke="#FFFDFA" stroke-width="2" fill="none" opacity=".6"/>`).join("")}
    ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<circle cx="${20 + i * 40}" cy="124" r="4" fill="${i % 2 ? "#E8846B" : "#FFFDFA"}"/>`).join("")}
    <g transform="translate(170 104)"><circle cx="0" cy="-8" r="11" fill="#C98E6A"/><path d="M-11 -10a11 11 0 0 1 22 0z" fill="#E8846B"/><rect x="-7" y="-12" width="14" height="5" rx="2" fill="#1E3A5F" opacity=".8"/><path d="M-30 4q14-12 30-4t30-4" stroke="#C98E6A" stroke-width="7" fill="none" stroke-linecap="round"/></g>
    <rect x="260" y="20" width="10" height="50" fill="#A9B4C2"/><rect x="240" y="20" width="44" height="8" rx="3" fill="#FFFDFA"/>
    ${kP(46, 64, "#F1C7A5", "#1E3A5F", 1.2, "#3A2A20")}<circle cx="58" cy="44" r="3" fill="#E0B04A"/>`),
  "children-weekend-at-the-ranch": scene("#1E3A5F", `${kStars([[30, 24, 2], [70, 40, 1.6], [110, 18, 2.2], [150, 36, 1.6], [190, 20, 2], [230, 44, 1.8], [270, 22, 2.2], [300, 46, 1.6], [90, 64, 1.5], [250, 66, 1.5]], "#FCE3A6")}<circle cx="260" cy="40" r="14" fill="#FCE3A6"/><circle cx="266" cy="36" r="13" fill="#1E3A5F"/>
    <path d="M0 180V112q60-30 120-10t110-6 90 2v82z" fill="#3E5C7E"/><path d="M0 180v-40q80-20 160-6t160-8v54z" fill="#4F6E57"/>
    <g transform="translate(110 132)"><ellipse cx="0" cy="0" rx="30" ry="14" fill="#C98A5B"/><path d="M22 -6l16-26 10 4-8 26z" fill="#C98A5B"/><circle cx="44" cy="-30" r="8" fill="#C98A5B"/><path d="M30 -24q-10-6-8-14" stroke="#8A5A38" stroke-width="5" fill="none"/>${[-22, -10, 12, 22].map((x) => `<rect x="${x}" y="8" width="5" height="22" rx="2" fill="#A9774F"/>`).join("")}</g>
    <g transform="translate(220 120)"><path d="M-30 30V0l30-20 30 20v30z" fill="#E8846B"/><path d="M-34 2l34-24 34 24" stroke="#FCE3A6" stroke-width="3" fill="none"/><rect x="-6" y="10" width="12" height="20" fill="#FCE3A6"/></g>
    ${kP(76, 150, "#F1C7A5", "#E0B04A", 1.1, "#3A2A20")}${kP(52, 152, "#E7B48F", "#6FA8D6", 1.3)}`, "#FFFFFF", .15),
  "children-science-fair": scene("#E2F2EA", `<rect x="0" y="130" width="320" height="50" fill="#D9C7B0"/><rect x="40" y="118" width="240" height="14" rx="4" fill="#FFFDFA"/>
    <path d="M110 118l40-64h20l40 64z" fill="#A9774F"/><path d="M128 118l26-42h12l26 42z" fill="#7FB89E" opacity=".6"/>
    <path d="M150 54q-14-10-10-24q6 8 10 0q4-12 14-6q-2 8 8 4q8 8-4 26z" fill="#E8846B"/>${[[132, 30], [186, 26], [176, 14], [146, 12]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#E8846B"/>`).join("")}
    <path d="M150 54q-8 30-30 62M170 54q12 28 34 62" stroke="#E8846B" stroke-width="7" fill="none" stroke-linecap="round"/>
    <g transform="translate(260 82)"><rect x="-22" y="-26" width="44" height="40" rx="4" fill="#E0B04A"/><circle cx="0" cy="-8" r="10" fill="#FFFDFA"/><path d="M-6 -8l4 4 8-8" stroke="#4FA88A" stroke-width="3" fill="none"/><path d="M-10 14l-6 18M10 14l6 18" stroke="#E8846B" stroke-width="5"/></g>
    ${kP(56, 158, "#C98E6A", "#6FA8D6", 1.25, "#1E1A18")}${kP(84, 160, "#F1C7A5", "#E8846B", 1.2, "#5A3A2A")}`),
  "children-day-of-the-dead": scene("#3A2A4F", `${["#E8846B", "#E0B04A", "#4FA88A", "#6FA8D6", "#A98BE8", "#F47FB0"].map((c, i) => `<path d="M${10 + i * 52} 14h46l-4 24-7-5-8 5-8-5-8 5-7-5z" fill="${c}"/>`).join("")}<path d="M4 14h312" stroke="#FCE3A6" stroke-width="2"/>
    <rect x="70" y="112" width="180" height="56" fill="#FFFDFA"/><rect x="96" y="88" width="128" height="26" fill="#F2E8D8"/><rect x="128" y="50" width="64" height="40" rx="4" fill="#A9774F"/><rect x="134" y="56" width="52" height="28" fill="#DCEAF6"/><circle cx="160" cy="66" r="7" fill="#C98E6A"/><path d="M148 84a12 10 0 0 1 24 0z" fill="#A98BE8"/>
    ${[78, 102, 218, 242].map((x) => `<rect x="${x - 4}" y="96" width="8" height="16" fill="#FCE3A6"/><path d="M${x} 86q4 5 0 10q-4-5 0-10z" fill="#E0B04A"/>`).join("")}
    ${[[60, 158], [84, 146], [260, 158], [236, 146], [52, 136], [270, 136]].map(([x, y]) => `<g>${petals(x, y, 7, 6, "#F29A2E", 8)}<circle cx="${x}" cy="${y}" r="5" fill="#E8846B"/></g>`).join("")}
    <g transform="translate(130 138)"><circle r="12" fill="#FFFDFA" stroke="#A98BE8" stroke-width="2"/><circle cx="-4" cy="-2" r="3" fill="#6FA8D6"/><circle cx="4" cy="-2" r="3" fill="#E8846B"/><path d="M-5 6h10" stroke="#1E3A5F" stroke-width="1.5"/></g>
    <g transform="translate(190 140)"><ellipse cx="0" cy="0" rx="14" ry="10" fill="#E0B04A"/><path d="M-8 -4l16 8M8 -4l-16 8" stroke="#C9902F" stroke-width="2"/></g>`, "#FFFFFF", .12)
});

READINGS.push(
  /* ---------- A2 ---------- */
  {
    id: "children-first-camping-trip", level: "A2", stage: "children", topic: "Adventure", title: "Our First Camping Trip",
    description: "A tent, a forest and a strange noise in the night.",
    text: [
      "Last summer, my family went camping for the first time. We drove to a forest in the mountains near Santiago, Nuevo León.",
      "When we arrived, my dad tried to put up the tent. It took him almost an hour because he didn’t read the instructions! My mom and I collected wood for the campfire while my little brother looked for interesting rocks.",
      "In the evening, we cooked sausages and made s’mores with marshmallows and chocolate. Then we sat around the fire and told stories.",
      "At midnight, I woke up because I heard a strange noise outside the tent. Something was moving near our food. My heart was beating very fast. I woke up my dad, and he turned on his flashlight.",
      "It was a raccoon! It was trying to open our bag of bread. When it saw the light, it ran away into the trees.",
      "The next morning, we laughed about it. Now we always keep our food in the car."
    ],
    vocab: [["tent", "a small house made of fabric for camping"], ["instructions", "information that tells you how to do something"], ["campfire", "a fire you make outside when you camp"], ["flashlight", "a small light you hold in your hand"], ["raccoon", "a small gray animal with a black mask on its face"]],
    questions: [
      ["Where did the family go camping?", ["in the mountains near Santiago", "at the beach", "in a park in Monterrey"]],
      ["Why did it take Dad a long time to put up the tent?", ["He didn’t read the instructions.", "It was raining.", "The tent was broken."]],
      ["What did they make with marshmallows?", ["s’mores", "a cake", "hot chocolate"]],
      ["What woke the narrator up?", ["a strange noise", "the rain", "her brother"]],
      ["What do they do now with their food?", ["keep it in the car", "eat it all at night", "hang it in a tree"]]
    ]
  },
  {
    id: "children-letter-from-canada", level: "A2", stage: "children", topic: "Friends", title: "A Letter from Canada",
    description: "Isabela has a pen pal who lives in a very different place.",
    text: [
      "Dear Isabela,",
      "Thank you for your letter and the photos of Monterrey! The mountains are amazing. Here in Winnipeg, the land is very flat, so I can see the sky everywhere.",
      "Right now it is winter, and it is minus twenty-five degrees. Can you believe it? My nose freezes when I walk to school! We wear snow pants, big boots, gloves and two hats.",
      "But winter is also fun. On weekends, my brother and I go ice skating on the river. Last Saturday, we built a snow fort in our backyard and had a snowball fight with our neighbors.",
      "You wrote that you never saw snow. That’s so interesting! I never ate a real taco. Maybe one day you can visit me in winter, and I can visit you in the summer.",
      "Please tell me more about your school. Do you have a uniform? What do you eat for lunch?",
      "Your friend,",
      "Hannah"
    ],
    vocab: [["pen pal", "a friend you write letters to in another place"], ["flat", "with no hills or mountains"], ["freeze", "to become very, very cold, like ice"], ["gloves", "you wear them on your hands"], ["snow fort", "a small house or wall made of snow"]],
    questions: [
      ["Where does Hannah live?", ["Winnipeg, Canada", "Monterrey", "New York"]],
      ["What does Hannah say about the land where she lives?", ["It is very flat.", "It has many mountains.", "It is near the ocean."]],
      ["What do Hannah and her brother do on weekends?", ["go ice skating", "go swimming", "go to the movies"]],
      ["What has Isabela never seen?", ["snow", "mountains", "a river"]],
      ["What does Hannah want to know?", ["about Isabela’s school", "about Isabela’s pets", "about Mexican music"]]
    ]
  },
  {
    id: "children-the-school-play", level: "A2", stage: "children", topic: "School", title: "The School Play",
    description: "Martín gets a small part in the play… but then something happens.",
    text: [
      "Every year, our school performs a play for the parents. This year, it was “Alice in Wonderland.” I really wanted to be the Mad Hatter, but my teacher gave the part to my friend Rodrigo. I was a tree. A tree with no words!",
      "I was disappointed, but I decided to be the best tree in the history of the school. I practiced standing very still and moving my branches slowly, like in the wind.",
      "On the night of the play, the auditorium was full. Ten minutes before the show, Rodrigo’s mom called the teacher. Rodrigo had a fever and couldn’t come!",
      "My teacher looked at me. “Martín, you came to every rehearsal. Do you know the Mad Hatter’s lines?” Of course I knew them. I listened to Rodrigo every day.",
      "I put on the big hat and walked on the stage. My legs were shaking, but I didn’t forget a single word. At the end, everybody clapped.",
      "Being a tree taught me something: always be ready."
    ],
    vocab: [["perform", "to act or sing for an audience"], ["disappointed", "sad because something was not what you wanted"], ["still", "not moving"], ["rehearsal", "a practice before a show"], ["lines", "the words an actor says"]],
    questions: [
      ["What play did the school perform?", ["Alice in Wonderland", "Peter Pan", "The Lion King"]],
      ["What part did Martín get first?", ["a tree", "the Mad Hatter", "Alice"]],
      ["Why couldn’t Rodrigo come?", ["He had a fever.", "He forgot.", "He was on a trip."]],
      ["How did Martín know the Mad Hatter’s lines?", ["He listened to Rodrigo at every rehearsal.", "He read the book at home.", "The teacher gave him the lines that day."]],
      ["What lesson did Martín learn?", ["Always be ready.", "Never be a tree.", "Plays are boring."]]
    ]
  },
  {
    id: "children-the-fun-run", level: "A2", stage: "children", topic: "Sports", title: "The Fun Run",
    description: "Five kilometers is a long way when you are eleven.",
    text: [
      "Last October, my school organized a five-kilometer fun run in Parque Fundidora. The money from the tickets was for a children’s hospital, so my mom and I signed up together.",
      "We trained for six weeks. Three times a week, we ran around our neighborhood after dinner. The first time, I could only run for five minutes before I needed to walk. By the end, I could run for thirty minutes without stopping.",
      "On the day of the race, there were more than six hundred people. Some of them were wearing funny costumes. I saw a dinosaur, two superheroes and a man dressed like a giant taco!",
      "The first three kilometers were easy. But in the fourth kilometer, my legs felt heavy and I wanted to stop. My mom held my hand and said, “Just one more kilometer. We can do it.”",
      "We crossed the finish line together in thirty-four minutes. We didn’t win, but we got medals, and our school raised eighty thousand pesos for the hospital."
    ],
    vocab: [["sign up", "to put your name on a list to participate"], ["train", "to practice a sport to get better"], ["costume", "special clothes to look like someone else"], ["finish line", "the end of a race"], ["raise money", "to collect money for a good cause"]],
    questions: [
      ["Where was the fun run?", ["Parque Fundidora", "at the school", "in Santiago"]],
      ["Who was the money for?", ["a children’s hospital", "the school", "the winners"]],
      ["How long did they train?", ["six weeks", "two weeks", "six months"]],
      ["When was the race most difficult?", ["in the fourth kilometer", "at the start", "in the first kilometer"]],
      ["How much money did the school raise?", ["eighty thousand pesos", "eight thousand pesos", "six hundred pesos"]]
    ]
  },
  {
    id: "children-a-week-without-screens", level: "A2", stage: "children", topic: "Wellbeing", title: "A Week Without Screens",
    description: "Can a family live for seven days without phones, TV and video games?",
    text: [
      "One evening, my dad looked around the living room. My mom was on her phone, my sister was watching videos, and I was playing video games. Nobody was talking.",
      "“Let’s try something,” Dad said. “One week with no screens after school. For everyone, including me.”",
      "The first two days were terrible. I was bored, and I kept looking at the place where my tablet usually was. My sister complained all the time.",
      "But on Wednesday, something changed. We found an old board game in the closet and played it after dinner. Mom laughed so much that she cried.",
      "On Thursday, I finished a book about a dragon. On Friday, my sister and I baked cookies with Grandma. On Saturday, we went to the park and flew a kite.",
      "When the week ended, we didn’t go back to screens all the time. Now we have a rule: no phones at dinner, and Saturday afternoon is family time."
    ],
    vocab: [["screen", "the glass part of a phone, TV or computer"], ["bored", "with nothing interesting to do"], ["complain", "to say you are not happy about something"], ["board game", "a game you play on a table, like chess"], ["rule", "something you must or must not do"]],
    questions: [
      ["Why did Dad suggest the idea?", ["Nobody in the family was talking.", "The TV was broken.", "The kids had bad grades."]],
      ["How were the first two days?", ["terrible", "easy", "exciting"]],
      ["What did they find on Wednesday?", ["an old board game", "a new phone", "a dragon book"]],
      ["What did the narrator do on Friday?", ["baked cookies with Grandma", "flew a kite", "played soccer"]],
      ["What is the family rule now?", ["no phones at dinner", "no TV ever", "games only on Monday"]]
    ]
  },

  /* ---------- A2+ ---------- */
  {
    id: "children-amazing-axolotl", level: "A2+", stage: "children", topic: "Science", title: "The Amazing Axolotl",
    description: "Meet the smiling Mexican animal that can grow new legs.",
    text: [
      "The axolotl is a small animal that lives only in one place in the world: the canals and lakes of Xochimilco, in Mexico City. It looks like a fish, but it is actually an amphibian, like a frog.",
      "Axolotls have a wide head, small eyes and a mouth that looks like a smile. On each side of the head, they have three feathery gills. These gills help them breathe underwater.",
      "Their most incredible ability is regeneration. If an axolotl loses a leg, it can grow a completely new one in a few weeks. It can even repair parts of its heart and brain! Scientists all over the world study axolotls to understand how this works.",
      "Sadly, wild axolotls are in serious danger. The water in Xochimilco is polluted, and other fish eat their eggs. Today there are very few axolotls living in the wild.",
      "Some families in Xochimilco are helping. They create clean areas in the canals called refuges, where axolotls can live safely.",
      "The axolotl is so important to Mexico that it is on the fifty-peso bill."
    ],
    vocab: [["amphibian", "an animal that can live in water and on land, like a frog"], ["gills", "parts that help an animal breathe underwater"], ["regeneration", "growing a body part again"], ["polluted", "dirty and dangerous"], ["refuge", "a safe place"]],
    questions: [
      ["Where do wild axolotls live?", ["Xochimilco, Mexico City", "all over Mexico", "in the ocean"]],
      ["What kind of animal is an axolotl?", ["an amphibian", "a fish", "a reptile"]],
      ["What can an axolotl do if it loses a leg?", ["grow a new one", "walk on three legs forever", "change color"]],
      ["Why are wild axolotls in danger?", ["polluted water and other fish", "too much rain", "people keep them as pets"]],
      ["Where can you see an axolotl in Mexico every day?", ["on the fifty-peso bill", "on the flag", "on stamps only"]]
    ]
  },
  {
    id: "children-the-cooking-contest", level: "A2+", stage: "children", topic: "Food", title: "The Cooking Contest",
    description: "Camila enters a kids’ cooking contest with a secret family recipe.",
    text: [
      "When Camila saw the poster at the community center, she couldn’t stop smiling: “Junior Chef Contest. Ages 9–12. Cook a dish that tells a story.”",
      "She knew immediately what she wanted to make: her grandmother’s cabrito-style chicken with red rice. The real cabrito takes too long, so her grandma invented this faster version years ago when she worked in a restaurant in Monterrey.",
      "For three weekends, Camila practiced in her grandma’s kitchen. The first time, the rice was too dry. The second time, the chicken was too salty. Her grandma was patient. “Cooking is like learning to ride a bike,” she said. “You fall, and you try again.”",
      "On the day of the contest, there were twelve young chefs. Camila had one hour. When she presented her dish, she told the judges the story of her grandmother’s restaurant.",
      "She didn’t win first place. A boy won with a beautiful chocolate cake. But one of the judges asked for the recipe, and Camila won the prize for “Best Story.”",
      "Her grandma framed the certificate and put it in the kitchen."
    ],
    vocab: [["contest", "a competition"], ["dish", "food prepared in a special way"], ["recipe", "instructions for cooking something"], ["salty", "with too much salt"], ["patient", "calm when things take a long time"]],
    questions: [
      ["What did the contest ask the children to do?", ["cook a dish that tells a story", "make the biggest cake", "cook something new"]],
      ["Why did Grandma invent a faster version?", ["The real cabrito takes too long.", "She didn’t like cabrito.", "Chicken is cheaper."]],
      ["What was wrong the first time Camila practiced?", ["The rice was too dry.", "The chicken was burned.", "She forgot the salt."]],
      ["Who won first place?", ["a boy with a chocolate cake", "Camila", "a girl with tacos"]],
      ["What did Grandma do with the certificate?", ["She framed it and put it in the kitchen.", "She gave it to the judge.", "She lost it."]]
    ]
  },
  {
    id: "children-lost-at-the-museum", level: "A2+", stage: "children", topic: "Adventure", title: "Lost at the Museum",
    description: "On a school trip, Pablo follows a dinosaur and loses his group.",
    text: [
      "Our class trip to the Museum of Mexican History was the most exciting day of the semester, especially for me. I love history, so I was reading every sign very carefully.",
      "Too carefully. When I looked up from a display about the Mexican Revolution, my group was gone. The room was full of strangers, and I couldn’t see a single blue school uniform.",
      "My first thought was to run and look for them, but then I remembered what my teacher always says: “If you get lost, stay calm and find a person who works there.”",
      "I saw a woman with a museum badge near the entrance. I explained the situation, and she asked for my teacher’s name and my school. She spoke into her radio, and two minutes later, a voice answered.",
      "My class was on the third floor, in the room about the city of Monterrey. The woman walked with me to the elevator, and when the doors opened, there was my teacher, Mr. Garza. He looked very relieved.",
      "“Good job finding help, Pablo,” he said. “But next time, read a little faster.”"
    ],
    vocab: [["display", "a group of objects for people to look at"], ["stranger", "a person you don’t know"], ["badge", "a small card that shows who you are or where you work"], ["radio", "a device to talk with people far away"], ["relieved", "happy because a worry is gone"]],
    questions: [
      ["Why did Pablo lose his group?", ["He was reading very carefully.", "He went to the bathroom.", "He was playing a game."]],
      ["What was his first idea?", ["to run and look for them", "to cry", "to call his mom"]],
      ["What advice did he remember?", ["Stay calm and find a person who works there.", "Wait at the exit.", "Shout your teacher’s name."]],
      ["Where was his class?", ["on the third floor", "outside the museum", "in the cafeteria"]],
      ["What did Mr. Garza say at the end?", ["Next time, read a little faster.", "You can’t come on trips again.", "Let’s go home now."]]
    ]
  },
  {
    id: "children-the-new-student", level: "A2+", stage: "children", topic: "Friends", title: "The New Student",
    description: "Hyun-woo arrives from South Korea and doesn’t speak Spanish.",
    text: [
      "In February, a new student joined my class. His name was Hyun-woo, and his family moved to Monterrey from South Korea because his dad works for a car company. He spoke Korean and some English, but almost no Spanish.",
      "The first week, he sat alone at lunch and didn’t say much. Some kids laughed when he made mistakes. I felt bad, but I didn’t do anything.",
      "Then one day, our teacher asked me to be his partner for a science project. At first, it was difficult. We used English, drawings and a translation app. Sometimes we understood each other completely wrong, and we laughed a lot.",
      "Little by little, I taught him Spanish words, and he taught me Korean ones. He showed me how to write my name in Korean letters, which are called Hangul. I showed him how to make a quesadilla.",
      "By May, Hyun-woo was speaking Spanish with everybody, and he was the best goalkeeper in our class.",
      "Now he is one of my best friends. I learned that sometimes a friend is waiting for you to say the first word."
    ],
    vocab: [["join", "to become part of a group"], ["mistake", "something that is not correct"], ["translation app", "an app that changes words into another language"], ["little by little", "slowly, step by step"], ["goalkeeper", "the player who protects the goal"]],
    questions: [
      ["Why did Hyun-woo’s family move to Monterrey?", ["His dad works for a car company.", "They wanted to learn Spanish.", "They were on vacation."]],
      ["What did the narrator do during the first week?", ["Nothing, but he felt bad.", "He laughed at Hyun-woo.", "He sat with Hyun-woo."]],
      ["How did they communicate at first?", ["English, drawings and an app", "only Spanish", "only Korean"]],
      ["What is Hangul?", ["the Korean writing system", "a Korean food", "a Korean game"]],
      ["What is the main message of the story?", ["Sometimes a friend is waiting for you to say the first word.", "Science projects are difficult.", "It is easy to learn Korean."]]
    ]
  },
  {
    id: "children-saving-sea-turtles", level: "A2+", stage: "children", topic: "Environment", title: "Night Watch for Sea Turtles",
    description: "On a beach in Oaxaca, Ximena helps baby turtles reach the sea.",
    text: [
      "Last summer, my family stayed in a small town on the coast of Oaxaca. The town has a turtle camp, where volunteers protect sea turtle eggs. The guide, Don Ramiro, invited us to help for one night.",
      "Every year, thousands of female olive ridley turtles come out of the ocean to lay their eggs in the sand. Each turtle digs a hole with her back flippers and lays about one hundred eggs. Then she covers them and returns to the sea.",
      "The eggs are in danger. Dogs, birds and people can take them. So the volunteers carefully move the eggs to a protected area of the beach, surrounded by a fence.",
      "After about forty-five days, the baby turtles hatch. That night, we watched dozens of tiny turtles climb out of the sand. Don Ramiro told us not to touch them and not to use flashlights, because the light confuses them. They follow the light of the moon on the water.",
      "We stood in a line and watched them walk to the ocean. A wave came and they disappeared.",
      "Only about one in a thousand will become an adult. But that night, I felt that we gave them a chance."
    ],
    vocab: [["coast", "the land next to the sea"], ["volunteer", "a person who works without pay to help"], ["lay eggs", "when an animal produces eggs from its body"], ["hatch", "to come out of an egg"], ["confuse", "to make someone not understand"]],
    questions: [
      ["Where did Ximena’s family stay?", ["on the coast of Oaxaca", "in Cancún", "in Monterrey"]],
      ["How many eggs does a turtle lay?", ["about one hundred", "about ten", "about one thousand"]],
      ["Why do volunteers move the eggs?", ["to protect them from animals and people", "to sell them", "to keep them warm at home"]],
      ["Why can’t people use flashlights?", ["The light confuses the turtles.", "It wakes up the birds.", "It is not allowed in town."]],
      ["How many baby turtles become adults?", ["about one in a thousand", "about half", "all of them"]]
    ]
  }
);

Object.assign(READING_ART, {
  "children-first-camping-trip": scene("#1E3A5F", `${kStars([[20, 20], [60, 40], [100, 16], [150, 30], [210, 18], [250, 40], [300, 24], [130, 56]], "#FCE3A6")}<circle cx="276" cy="46" r="14" fill="#FCE3A6"/>
    <path d="M0 140l40-60 30 40 40-70 50 90z" fill="#2F4A6B"/><path d="M180 140l50-80 40 50 50-50v80z" fill="#2F4A6B"/>${[[22, 140], [56, 148], [290, 140], [262, 150]].map(([x, y]) => `<path d="M${x} ${y}l12-40 12 40z" fill="#3E6B54"/>`).join("")}
    <rect x="0" y="146" width="320" height="34" fill="#4F6E57"/>
    <path d="M90 150l40-56 40 56z" fill="#E0B04A"/><path d="M130 94v56M118 150l12-20 12 20" stroke="#C9902F" stroke-width="3" fill="none"/>
    <g transform="translate(220 150)"><path d="M-16 0h32" stroke="#A9774F" stroke-width="6" stroke-linecap="round"/><path d="M0 -4q-12-10-2-28q2 10 8 2q10 12-6 26z" fill="#E8846B"/><path d="M0 -6q-5-6 0-14q5 8 0 14z" fill="#E0B04A"/></g>
    <g transform="translate(264 144)"><ellipse rx="12" ry="8" fill="#9AA6B8"/><circle cx="-12" cy="-6" r="6" fill="#9AA6B8"/><path d="M-16 -8h8" stroke="#1E3A5F" stroke-width="3"/><path d="M12 0q8 0 10-8" stroke="#6E7A8C" stroke-width="5" fill="none"/></g>`, "#FFFFFF", .1),
  "children-letter-from-canada": scene("#E3EEF9", `<rect x="0" y="130" width="320" height="50" fill="#FFFDFA"/>${kStars([[40, 30, 3], [90, 60, 2.5], [140, 24, 3], [200, 50, 2.5], [250, 22, 3], [300, 66, 2.5], [20, 90, 2.5], [280, 100, 3]], "#FFFDFA")}
    <g transform="translate(110 96) rotate(-6)"><rect x="-70" y="-46" width="140" height="92" rx="4" fill="#FFFDFA" stroke="#C9D6E6" stroke-width="2"/><path d="M-70 -46l70 50 70-50" stroke="#E8846B" stroke-width="3" fill="none"/>${[-24, -12, 0].map((y) => `<path d="M-50 ${y + 28}h60" stroke="#C9D6E6" stroke-width="3"/>`).join("")}<rect x="40" y="-38" width="22" height="26" rx="2" fill="#E8846B"/><path d="M51 -32l4 8h-8z" fill="#FFFDFA"/></g>
    <g transform="translate(250 134)"><circle cx="0" cy="0" r="20" fill="#FFFDFA"/><circle cx="0" cy="-30" r="14" fill="#FFFDFA"/><circle cx="-4" cy="-33" r="1.8" fill="#1E3A5F"/><circle cx="4" cy="-33" r="1.8" fill="#1E3A5F"/><path d="M0 -29l10 3-10 3z" fill="#E8846B"/><path d="M-14 -42h28l-4-14h-20z" fill="#1E3A5F"/><path d="M-14 -20q14 6 28 0" stroke="#E8846B" stroke-width="5" fill="none"/></g>`),
  "children-the-school-play": scene("#3A2A4F", `<path d="M0 0h70q-10 90 0 180H0z" fill="#B23A48"/><path d="M320 0h-70q10 90 0 180h70z" fill="#B23A48"/><path d="M0 0h320v26q-80 14-160 0t-160 0z" fill="#8F2D3A"/>
    <rect x="0" y="140" width="320" height="40" fill="#A9774F"/><ellipse cx="160" cy="138" rx="80" ry="10" fill="#FCE3A6" opacity=".35"/>
    ${kP(160, 140, "#C98E6A", "#4FA88A", 1.7, "#1E1A18")}<g transform="translate(160 76)"><rect x="-18" y="-30" width="36" height="30" rx="3" fill="#1E3A5F"/><rect x="-26" y="-4" width="52" height="7" rx="3" fill="#1E3A5F"/><rect x="-18" y="-12" width="36" height="6" fill="#E8846B"/><rect x="6" y="-28" width="8" height="10" fill="#FFFDFA"/></g>
    <g transform="translate(250 140)"><rect x="-6" y="-46" width="12" height="46" fill="#8A5A38"/><circle cx="0" cy="-60" r="22" fill="#4FA88A"/><circle cx="-14" cy="-46" r="12" fill="#3E8C6F"/><circle cx="14" cy="-48" r="13" fill="#3E8C6F"/></g>
    ${[96, 220].map((x) => `<path d="M${x} 26l-20 114h40z" fill="#FCE3A6" opacity=".12"/>`).join("")}`, "#FFFFFF", .1),
  "children-the-fun-run": scene("#FCEFD2", `<path d="M0 120l50-50 40 30 50-60 60 70 40-30 80 40v60H0z" fill="#C9B7A0"/><rect x="230" y="40" width="16" height="80" fill="#8A6A55"/><rect x="226" y="34" width="24" height="8" fill="#6E5545"/>
    <rect x="0" y="128" width="320" height="52" fill="#9FCBB5"/><path d="M0 150h320" stroke="#FFFDFA" stroke-width="16"/>
    <path d="M250 112v40M300 112v40" stroke="#1E3A5F" stroke-width="4"/><rect x="246" y="104" width="58" height="14" fill="#E8846B"/>${T(275, 111, "FINISH", 9, "#FFFDFA")}
    ${kP(150, 150, "#F1C7A5", "#E0B04A", 1.4, "#5A3A2A")}${kP(186, 152, "#C98E6A", "#6FA8D6", 1.25, "#1E1A18")}
    <rect x="178" y="128" width="16" height="10" rx="2" fill="#FFFDFA"/>${T(186, 133, "11", 7, "#1E3A5F")}
    <g transform="translate(70 146)"><ellipse cx="0" cy="-14" rx="18" ry="14" fill="#7FB89E"/><circle cx="14" cy="-30" r="10" fill="#7FB89E"/><path d="M-18 -16l-10 6" stroke="#7FB89E" stroke-width="6" stroke-linecap="round"/>${[-10, 0, 10].map((x) => `<path d="M${x} -28l3-6 3 6z" fill="#4FA88A"/>`).join("")}<rect x="-8" y="-2" width="5" height="12" fill="#6BA88B"/><rect x="4" y="-2" width="5" height="12" fill="#6BA88B"/></g>`),
  "children-a-week-without-screens": scene("#E2F2EA", `<rect x="0" y="130" width="320" height="50" fill="#E8C7A8"/><ellipse cx="160" cy="128" rx="110" ry="16" fill="#A9774F"/>
    <rect x="112" y="102" width="96" height="26" rx="3" fill="#FFFDFA"/>${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${116 + i * 15}" y="106" width="12" height="18" fill="${i % 2 ? "#E8846B" : "#6FA8D6"}" opacity=".7"/>`).join("")}<circle cx="132" cy="114" r="4" fill="#E0B04A"/><circle cx="176" cy="116" r="4" fill="#4FA88A"/>
    ${kP(70, 132, "#F1C7A5", "#E8846B", 1.5, "#5A3A2A")}${kP(250, 132, "#E7B48F", "#1E3A5F", 1.6)}${kP(110, 120, "#F1C7A5", "#A98BE8", 1.1, "#3A2A20")}${kP(212, 120, "#F1C7A5", "#E0B04A", 1.1, "#5A3A2A")}
    <g transform="translate(270 44)"><rect x="-14" y="-22" width="28" height="44" rx="5" fill="#1E3A5F"/><rect x="-10" y="-17" width="20" height="32" rx="2" fill="#9AB8D6"/><circle r="22" fill="none" stroke="#E8846B" stroke-width="4"/><path d="M-15 15l30-30" stroke="#E8846B" stroke-width="4"/></g>
    <path d="M60 30l10 20h-20z" fill="#E8846B"/><path d="M60 50q-6 24 12 34" stroke="#1E3A5F" stroke-width="1.5" fill="none"/>`),
  "children-amazing-axolotl": scene("#CFEAF0", `<rect x="0" y="146" width="320" height="34" fill="#C9B7A0"/>${[40, 70, 260, 290].map((x, i) => `<path d="M${x} 150q${i % 2 ? 8 : -8}-30 0-60" stroke="#4FA88A" stroke-width="6" fill="none" stroke-linecap="round"/>`).join("")}
    <g transform="translate(160 96)"><path d="M30 6q50 0 70-20q-10 30-70 34z" fill="#F7B3C2"/><ellipse cx="10" cy="8" rx="44" ry="18" fill="#F7B3C2"/><ellipse cx="-38" cy="0" rx="28" ry="24" fill="#F7B3C2"/>${[-1, 1].map((s) => `<g transform="translate(-40 0) scale(1 ${s})">${[-30, -18, -6].map((a) => `<path d="M${-10 + a * .2} -18q${a * .5} -18 ${a * .3} -26" stroke="#E86A8A" stroke-width="5" fill="none" stroke-linecap="round" transform="rotate(${a + 10})"/>`).join("")}</g>`).join("")}<circle cx="-50" cy="-6" r="3" fill="#1E3A5F"/><circle cx="-26" cy="-6" r="3" fill="#1E3A5F"/><path d="M-48 8q10 8 20 0" stroke="#1E3A5F" stroke-width="2" fill="none"/><path d="M-6 22l-4 14M28 22l4 14" stroke="#F7B3C2" stroke-width="7" stroke-linecap="round"/></g>
    ${[[230, 40], [244, 58], [222, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="none" stroke="#FFFDFA" stroke-width="2"/>`).join("")}`),
  "children-the-cooking-contest": scene("#FBE3DC", `<rect x="0" y="120" width="320" height="60" fill="#FFFDFA"/><rect x="0" y="116" width="320" height="8" fill="#A9B4C2"/>
    ${kP(110, 118, "#E7B48F", "#FFFDFA", 1.5, "#3A2A20")}<path d="M98 72h24l2-14q-6-8-14-2q-8-6-14 2z" fill="#FFFDFA" stroke="#C9D6E6" stroke-width="2"/>
    <g transform="translate(200 120)"><ellipse rx="44" ry="10" fill="#FFFDFA" stroke="#C9D6E6" stroke-width="2"/><ellipse cx="-14" cy="-6" rx="22" ry="8" fill="#E8846B"/>${[-24, -16, -8, 0, 6].map((x) => `<circle cx="${x}" cy="${-8 + (x % 3)}" r="2.5" fill="#B23A48"/>`).join("")}<path d="M10 -12q12-10 26 0q-4 10-26 6z" fill="#C98A5B"/><path d="M14 -16l4 4" stroke="#4FA88A" stroke-width="3"/></g>
    <g transform="translate(270 70)"><path d="M-14 -20h28v14q0 16-14 16t-14-16z" fill="#E0B04A"/><rect x="-4" y="10" width="8" height="10" fill="#E0B04A"/><rect x="-12" y="20" width="24" height="5" rx="2" fill="#C9902F"/></g>
    <g transform="translate(40 60)"><path d="M0 0l8 40h-16z" fill="#E8846B"/><rect x="-10" y="40" width="20" height="10" rx="3" fill="#A9774F"/></g>`),
  "children-lost-at-the-museum": scene("#F2E8D8", `<rect x="0" y="140" width="320" height="40" fill="#C9B7A0"/>${[30, 290].map((x) => `<rect x="${x - 10}" y="20" width="20" height="120" fill="#E5D8C4"/><rect x="${x - 14}" y="16" width="28" height="8" fill="#D6C6AE"/>`).join("")}
    <rect x="70" y="30" width="80" height="58" rx="3" fill="#A9774F"/><rect x="76" y="36" width="68" height="46" fill="#DCEAF6"/><path d="M80 78l20-26 14 16 10-10 16 20z" fill="#6BA88B"/>
    <rect x="180" y="40" width="70" height="50" rx="3" fill="#A9774F"/><rect x="186" y="46" width="58" height="38" fill="#FCEFD2"/><circle cx="215" cy="62" r="10" fill="#E8846B"/><path d="M203 82a12 10 0 0 1 24 0z" fill="#1E3A5F"/>
    <rect x="96" y="112" width="40" height="30" fill="#FFFDFA"/><path d="M104 112v-14h24v14" fill="#DCEAF6" stroke="#9AB8D6"/><circle cx="116" cy="102" r="6" fill="#E0B04A"/>
    ${kP(170, 158, "#C98E6A", "#6FA8D6", 1.5, "#1E1A18")}${kP(230, 160, "#F1C7A5", "#1E3A5F", 1.6, "#5A3A2A")}<rect x="224" y="136" width="10" height="8" rx="1" fill="#E0B04A"/>
    <g transform="translate(150 118)"><circle r="10" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="2"/>${T(0, 0, "?", 13, "#E8846B")}</g>`),
  "children-the-new-student": scene("#EDE6FA", `${kGround("#B9D8A7", 136)}${kTree(36, 116, 1)}
    ${kP(120, 154, "#F1C7A5", "#E8846B", 1.6, "#5A3A2A")}${kP(200, 154, "#F3D1B3", "#6FA8D6", 1.6, "#1E1A18")}
    <g transform="translate(110 54)"><rect x="-34" y="-20" width="68" height="40" rx="12" fill="#FFFDFA"/><path d="M-6 20l6 10 6-10z" fill="#FFFDFA"/>${T(0, 0, "¡Hola!", 15, "#E8846B")}</g>
    <g transform="translate(212 50)"><rect x="-38" y="-20" width="76" height="40" rx="12" fill="#FFFDFA"/><path d="M-6 20l6 10 6-10z" fill="#FFFDFA"/>${T(0, 0, "안녕!", 16, "#6FA8D6")}</g>
    <g transform="translate(270 150)"><circle r="12" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="2"/><path d="M0 -5l5 3-2 6h-6l-2-6z" fill="#1E3A5F"/></g>`),
  "children-saving-sea-turtles": scene("#24375C", `${kStars([[30, 20], [80, 44], [130, 18], [190, 34], [300, 22], [250, 52]], "#FCE3A6")}<circle cx="236" cy="40" r="16" fill="#FCE3A6"/>
    <rect x="0" y="70" width="320" height="50" fill="#3E6A93"/><path d="M180 70h120l-60 50h-40z" fill="#FCE3A6" opacity=".25"/>
    <path d="M0 116q40-8 80 0t80 0 80 0 80 0v12H0z" fill="#FFFDFA" opacity=".8"/><rect x="0" y="124" width="320" height="56" fill="#D9BE94"/>
    ${[[60, 150, -20], [110, 140, -10], [160, 156, 0], [200, 142, 10], [250, 152, 18], [90, 166, -15]].map(([x, y, r]) => `<g transform="translate(${x} ${y}) rotate(${r - 90})"><ellipse rx="8" ry="6" fill="#4F6E57"/><circle cx="9" cy="0" r="3.5" fill="#6BA88B"/><path d="M-2 -5l-4 -5M-2 5l-4 5M5 -5l3 -5M5 5l3 5" stroke="#6BA88B" stroke-width="2.5" stroke-linecap="round"/></g>`).join("")}`, "#FFFFFF", .1)
});

READINGS.push(
  /* ---------- B1 ---------- */
  {
    id: "children-why-do-we-sleep", level: "B1", stage: "children", topic: "Science", title: "Why Do We Need to Sleep?",
    description: "Your body is very busy while you sleep. Here is what happens.",
    text: [
      "We spend about one third of our lives sleeping. For a long time, people thought that sleep was simply a time when the body and the brain switched off. Today, scientists know that the opposite is true: while you sleep, your body is working hard.",
      "First, sleep helps you grow. During deep sleep, your body releases a hormone that helps your bones and muscles develop. That is one reason why children need more sleep than adults, between nine and twelve hours a night.",
      "Sleep is also important for learning. During the day, your brain collects a huge amount of information. At night, it organizes that information and decides what to keep. If you study for a test and then sleep well, you will remember more than if you stay up late.",
      "Your brain also cleans itself at night. A special fluid washes away waste that builds up while you are awake.",
      "So what happens when you don’t sleep enough? You may feel tired, find it hard to concentrate and get angry more easily. You can even get sick more often.",
      "To sleep better, experts recommend going to bed at the same time every night, avoiding screens for an hour before bed and keeping your bedroom dark and quiet."
    ],
    vocab: [["switch off", "to stop working, like a light"], ["release", "to let something go out"], ["hormone", "a chemical in the body that controls how it grows and works"], ["concentrate", "to give all your attention to something"], ["waste", "material that is not needed and must be removed"]],
    questions: [
      ["What did people believe about sleep in the past?", ["The body and brain switched off.", "Sleep helped people grow.", "Sleep cleaned the brain."]],
      ["How many hours of sleep do children need?", ["between nine and twelve", "between five and seven", "about fifteen"]],
      ["What does the brain do with information at night?", ["It organizes it and decides what to keep.", "It deletes all of it.", "It sends it to the muscles."]],
      ["Which is NOT mentioned as a result of too little sleep?", ["growing taller", "difficulty concentrating", "getting angry easily"]],
      ["What do experts recommend before bed?", ["avoiding screens for an hour", "eating a big meal", "doing intense exercise"]]
    ]
  },
  {
    id: "children-kid-inventors", level: "B1", stage: "children", topic: "Technology", title: "Inventions by Kids",
    description: "You don’t need to be an adult to change the world.",
    text: [
      "When we think of inventors, we usually imagine scientists in laboratories. But some very important inventions were created by children.",
      "In 1824, a fifteen-year-old French boy named Louis Braille created a system of raised dots that blind people can read with their fingers. Louis was blind himself, and he wanted to read books like everyone else. Today, his system is used all over the world, and it is called Braille in his honor.",
      "In 1905, an eleven-year-old boy in California named Frank Epperson left a cup of soda with a stick in it outside on a cold night. The next morning, it was frozen. Years later, he sold the idea, and we now know it as the popsicle.",
      "In 1873, Chester Greenwood, a fifteen-year-old from the state of Maine, was tired of having cold ears while ice skating. He asked his grandmother to sew fur onto a wire frame, and he invented earmuffs.",
      "What do these stories have in common? Each inventor noticed a problem in their own life and didn’t wait for someone else to solve it.",
      "Look around you. Is there a problem that annoys you every day? Maybe you are the person who can solve it."
    ],
    vocab: [["inventor", "a person who creates something new"], ["raised", "higher than the surface around it"], ["blind", "not able to see"], ["in his honor", "to show respect for him"], ["annoy", "to make someone a little angry"]],
    questions: [
      ["Why did Louis Braille create his system?", ["He was blind and wanted to read books.", "His teacher asked him to.", "He wanted to win a prize."]],
      ["How old was Frank Epperson when he discovered the popsicle?", ["eleven", "fifteen", "twenty"]],
      ["How was the popsicle discovered?", ["A drink froze outside on a cold night.", "He made it in a laboratory.", "His mother invented it."]],
      ["Why did Chester Greenwood invent earmuffs?", ["His ears were cold while ice skating.", "He wanted to sell them.", "His grandmother needed them."]],
      ["What do the three inventors have in common?", ["They solved a problem from their own lives.", "They were all from France.", "They all became very rich."]]
    ]
  },
  {
    id: "children-the-missing-trophy", level: "B1", stage: "children", topic: "Mystery", title: "The Case of the Missing Trophy",
    description: "The school’s soccer trophy disappears, and Renata starts investigating.",
    text: [
      "On Monday morning, the golden soccer trophy that our school won last year was missing from its glass case in the main hall. The principal was furious, and everybody was talking about it.",
      "Renata, who wants to be a detective, decided to investigate. She noticed three things. First, the glass case wasn’t broken, so someone had opened it with a key. Second, there was a small trail of green sawdust on the floor. Third, only two people had keys to the case: the principal and Mr. Soto, the janitor.",
      "Some students immediately accused Mr. Soto. But Renata wasn’t convinced. Why would he steal something he cleaned every day?",
      "She followed the sawdust trail. It led to the art room, where the art teacher, Ms. Villarreal, was working on a large wooden project for the school anniversary.",
      "Renata knocked on the door. Inside, she found the trophy on a table, next to a wooden copy of it, painted green and gold. Ms. Villarreal looked embarrassed. She had borrowed the key from the principal on Friday to make a giant sculpture of the trophy as a surprise. She forgot to tell anyone.",
      "The principal apologized to Mr. Soto, and Renata got a certificate for “Best Detective Work.”"
    ],
    vocab: [["case", "a glass box to show objects; also, a problem to solve"], ["investigate", "to try to find out the truth"], ["sawdust", "tiny pieces of wood that fall when you cut it"], ["accuse", "to say someone did something wrong"], ["embarrassed", "feeling uncomfortable because of a mistake"]],
    questions: [
      ["How did Renata know that someone opened the case with a key?", ["The glass wasn’t broken.", "She saw the key on the floor.", "The janitor told her."]],
      ["Who had keys to the case?", ["the principal and the janitor", "only the principal", "all the teachers"]],
      ["Why wasn’t Renata convinced that Mr. Soto was guilty?", ["It didn’t make sense for him to steal it.", "He was on vacation.", "She saw him at home."]],
      ["Where did the sawdust trail lead?", ["to the art room", "to the principal’s office", "outside the school"]],
      ["Why did Ms. Villarreal have the trophy?", ["She was making a giant copy as a surprise.", "She wanted to keep it.", "She was cleaning it."]]
    ]
  },
  {
    id: "children-the-ancient-ball-game", level: "B1", stage: "children", topic: "History", title: "The Ancient Ball Game",
    description: "More than 3,000 years ago, people in Mesoamerica played a game with a heavy rubber ball.",
    text: [
      "Long before soccer existed, the peoples of Mesoamerica played a ball game that was much more than a sport. The Maya called it pok-ta-pok, and the Aztecs called it ullamaliztli. Archaeologists believe it started more than 3,000 years ago.",
      "The game was played on a long court shaped like the capital letter I, with tall walls on both sides. In some courts, like the famous one in Chichén Itzá, there were stone rings high on the walls.",
      "The ball was made of solid rubber, and it could weigh up to four kilograms. Players could not touch it with their hands or feet. Instead, they hit it with their hips, knees and elbows. To protect themselves, they wore thick leather belts and pads.",
      "Passing the ball through a stone ring was extremely difficult, so it didn’t happen often. When it did, the game usually ended immediately.",
      "For these civilizations, the game had religious meaning. Some historians think the movement of the ball represented the sun and the moon traveling across the sky.",
      "Amazingly, a version of the game called ulama is still played today in some communities in the state of Sinaloa."
    ],
    vocab: [["archaeologist", "a scientist who studies ancient objects and places"], ["court", "the area where some sports are played"], ["rubber", "a material from trees that bounces"], ["hip", "the side of your body between your waist and your leg"], ["civilization", "a large, organized society"]],
    questions: [
      ["What did the Maya call the game?", ["pok-ta-pok", "ullamaliztli", "ulama"]],
      ["What shape was the court?", ["like the letter I", "a circle", "a square"]],
      ["How did players hit the ball?", ["with their hips, knees and elbows", "with their hands", "with a wooden bat"]],
      ["What usually happened when a player passed the ball through the ring?", ["The game ended.", "The ball broke.", "The other team got a point."]],
      ["Where is a version of the game played today?", ["in Sinaloa", "in Chichén Itzá", "in Mexico City’s stadiums"]]
    ]
  },
  {
    id: "children-saving-for-something-special", level: "B1", stage: "children", topic: "Life Skills", title: "Saving for Something Special",
    description: "Emiliano wants a telescope. His plan teaches him more than he expected.",
    text: [
      "Emiliano had wanted a telescope for a long time. He loved looking at the moon and reading about planets. The telescope he wanted cost 3,600 pesos. His parents said they would pay half if he could save the other half on his own.",
      "At first, 1,800 pesos seemed impossible. He usually spent his weekly allowance of 100 pesos on snacks and stickers the same day he received it.",
      "So he made a plan with his older cousin, who studies economics. First, they divided a jar into three sections: “Save,” “Spend” and “Share.” Every week, 70 pesos went to “Save,” 20 to “Spend” and 10 to “Share,” which he would give to an animal shelter.",
      "Second, Emiliano found ways to earn extra money. He washed his neighbor’s car on Sundays and sold lemonade with his sister at a school festival.",
      "Some weeks were hard. Once, all his friends bought a new video game, and he almost used his savings. But he looked at a picture of Saturn on his wall and decided to wait.",
      "After five months, he had 1,800 pesos. The first night with his telescope, he saw Saturn’s rings. They looked even better because he had worked for them."
    ],
    vocab: [["telescope", "a tube that makes faraway objects look closer"], ["allowance", "money parents give children regularly"], ["jar", "a glass container with a lid"], ["shelter", "a place that takes care of animals or people without a home"], ["savings", "money that you keep and don’t spend"]],
    questions: [
      ["How much money did Emiliano need to save?", ["1,800 pesos", "3,600 pesos", "100 pesos"]],
      ["What was his problem at first?", ["He spent his allowance immediately.", "He didn’t get an allowance.", "His parents said no."]],
      ["What were the three sections of the jar?", ["Save, Spend and Share", "Toys, Food and School", "Week, Month and Year"]],
      ["How did he earn extra money?", ["washing a car and selling lemonade", "selling his video games", "working at a shop"]],
      ["Why didn’t he buy the video game?", ["He looked at a picture of Saturn and decided to wait.", "It was too expensive.", "His parents didn’t allow it."]]
    ]
  },

  /* ---------- B2 ---------- */
  {
    id: "children-life-on-the-space-station", level: "B2", stage: "children", topic: "Science", title: "Life on the International Space Station",
    description: "How do astronauts eat, sleep and exercise 400 kilometers above Earth?",
    text: [
      "About 400 kilometers above our heads, the International Space Station (ISS) travels around the Earth at roughly 28,000 kilometers per hour. That is so fast that it completes an orbit every ninety minutes, which means astronauts on board see around sixteen sunrises and sixteen sunsets every day.",
      "Living in microgravity changes almost everything. Astronauts don’t sleep in beds; instead, they zip themselves into sleeping bags attached to the wall so they don’t float around and bump into equipment. Food comes in sealed packages, and drinks are consumed through straws. Even something as simple as crumbs can be dangerous, because they could float into an astronaut’s eye or into delicate machines.",
      "One of the biggest challenges is staying healthy. Without gravity, muscles and bones get weaker because they don’t have to support the body’s weight. To prevent this, astronauts must exercise for about two hours every day, using special treadmills and machines with straps.",
      "Water is extremely valuable on the station. A recycling system collects moisture from the air, sweat and even urine, and turns it into clean drinking water. As astronauts like to joke, “Today’s coffee is yesterday’s coffee.”",
      "Despite the difficulties, many astronauts describe their time on the ISS as life-changing. Seeing the Earth from above, without borders, often makes them feel a strong responsibility to protect our planet."
    ],
    vocab: [["orbit", "the curved path of an object around a planet"], ["microgravity", "a condition where things seem to have almost no weight"], ["sealed", "closed so that nothing can get in or out"], ["treadmill", "an exercise machine for walking or running in one place"], ["moisture", "a small amount of water in the air or on a surface"]],
    questions: [
      ["How often does the ISS complete an orbit?", ["every ninety minutes", "every twenty-four hours", "every sixteen minutes"]],
      ["Why do astronauts sleep in bags attached to the wall?", ["so they don’t float and hit equipment", "because it is very cold", "because there are no beds"]],
      ["Why can crumbs be dangerous?", ["They can float into eyes or machines.", "They attract insects.", "They make the food go bad."]],
      ["Why must astronauts exercise two hours a day?", ["to stop their muscles and bones from weakening", "because they are bored", "to produce electricity"]],
      ["What does “Today’s coffee is yesterday’s coffee” refer to?", ["water recycling", "old coffee packets", "the speed of the station"]]
    ]
  },
  {
    id: "children-secret-language-of-elephants", level: "B2", stage: "children", topic: "Animals", title: "The Secret Language of Elephants",
    description: "Elephants call each other by name and “hear” through their feet.",
    text: [
      "Elephants are famous for their size and their memory, but scientists are discovering that their communication is far more complex than anyone imagined.",
      "Much of it happens at frequencies too low for humans to hear. These deep rumbles can travel several kilometers, allowing family groups that are far apart to stay in contact. Even more surprisingly, elephants can detect some of these vibrations through the ground. Special sensors in their feet and trunks pick up the signals, so in a sense, they “listen” with their feet.",
      "In 2024, a group of researchers studying wild African elephants in Kenya published an extraordinary finding. After analyzing hundreds of recorded calls, they concluded that elephants seem to use individual names for one another. When researchers played a call addressed to a particular elephant, that elephant responded more strongly than when it heard a call meant for someone else. Very few animals are known to do this.",
      "Elephants also communicate through touch, using their trunks to comfort a stressed calf or greet a friend, and through body language, such as spreading their ears when they feel threatened.",
      "Understanding how elephants communicate is not just fascinating; it may also help protect them. If conservationists can recognize alarm calls, for example, they may be able to prevent conflicts between elephants and farmers."
    ],
    vocab: [["frequency", "how high or low a sound is"], ["rumble", "a long, deep sound"], ["detect", "to notice or discover something"], ["calf", "a baby elephant"], ["conservationist", "a person who works to protect nature and animals"]],
    questions: [
      ["Why can’t humans hear many elephant sounds?", ["They are too low.", "They are too quiet.", "They happen at night."]],
      ["How can elephants detect vibrations?", ["through sensors in their feet and trunks", "only with their ears", "through their tusks"]],
      ["What did researchers in Kenya discover?", ["Elephants seem to use names for each other.", "Elephants can sing.", "Elephants forget their families."]],
      ["How did the researchers test their idea?", ["They played calls and watched how elephants responded.", "They taught elephants new words.", "They counted elephants in the park."]],
      ["How could this research help elephants?", ["It may help prevent conflicts with farmers.", "It will help sell more tickets to zoos.", "It will make elephants grow bigger."]]
    ]
  },
  {
    id: "children-the-city-in-the-jungle", level: "B2", stage: "children", topic: "History", title: "The City in the Jungle",
    description: "Calakmul was once one of the most powerful Maya cities. Today, the jungle protects its secrets.",
    text: [
      "Deep in the jungle of Campeche, in southern Mexico, stand the ruins of Calakmul, a city that was once among the most powerful in the Maya world. Between roughly 500 and 700 AD, it was home to tens of thousands of people and controlled a network of smaller cities across the region.",
      "The Maya of Calakmul called their kingdom the Kingdom of the Snake. For more than a century, it fought a long rivalry with another great city, Tikal, in what is now Guatemala. Inscriptions carved in stone describe alliances, battles and the kings who led them, giving historians a detailed picture of Maya politics.",
      "Calakmul’s largest pyramid, known as Structure II, rises about forty-five meters above the forest floor. Visitors who climb it are rewarded with an extraordinary view: an ocean of green that stretches to the horizon in every direction, interrupted only by the tops of other ancient buildings.",
      "Because the city is so remote, it receives far fewer tourists than places like Chichén Itzá. That isolation has helped protect the surrounding forest, which is now part of a biosphere reserve. Jaguars, howler monkeys and hundreds of bird species live there.",
      "In 2014, UNESCO recognized Calakmul as a World Heritage Site for both its cultural and natural value, one of very few places in the world to receive that double honor."
    ],
    vocab: [["ruins", "the parts of old buildings that remain"], ["rivalry", "a long competition between two sides"], ["inscription", "words carved into stone or metal"], ["remote", "far away from cities"], ["biosphere reserve", "a protected natural area"]],
    questions: [
      ["Where is Calakmul?", ["in the jungle of Campeche", "in Guatemala", "near Mexico City"]],
      ["What was Calakmul’s main rival?", ["Tikal", "Chichén Itzá", "Palenque"]],
      ["What do the inscriptions describe?", ["alliances, battles and kings", "recipes and medicine", "the weather"]],
      ["Why does Calakmul receive fewer tourists?", ["It is very remote.", "It is closed to visitors.", "It is very small."]],
      ["Why is Calakmul’s UNESCO recognition special?", ["It was recognized for both cultural and natural value.", "It was the first site in Mexico.", "It is the oldest city in the world."]]
    ]
  },
  {
    id: "children-can-you-believe-everything-online", level: "B2", stage: "children", topic: "Media", title: "Can You Believe Everything Online?",
    description: "How to become a detective of the information you see on the internet.",
    text: [
      "Every day, we see hundreds of headlines, videos and images online. Some are accurate, some are mistaken, and some are deliberately false. Learning to tell the difference is one of the most useful skills you can develop.",
      "False information spreads quickly for a simple reason: it is often designed to provoke strong emotions. A shocking headline makes us feel surprised, angry or scared, and we share it before we stop to think. Researchers have found that false news can travel faster across social media than true stories.",
      "Fortunately, there are a few simple questions that can help you investigate. First, who created this? Is it a known news organization, an expert, or an anonymous account? Second, what is the evidence? Reliable information usually explains where facts come from. Third, what do other sources say? If an important event really happened, several trustworthy sources will report it.",
      "Images deserve special attention. A photo can be real but taken in a different place or year, and modern technology can create completely artificial pictures and videos. A reverse image search can sometimes reveal where a photo originally came from.",
      "Being skeptical doesn’t mean believing nothing. It means taking a moment before you accept or share something. That moment can stop a rumor from spreading."
    ],
    vocab: [["headline", "the title of a news story"], ["deliberately", "on purpose"], ["provoke", "to cause a strong reaction"], ["anonymous", "with no name given"], ["skeptical", "not easily believing something"]],
    questions: [
      ["Why does false information spread quickly?", ["It provokes strong emotions.", "It is always funny.", "It is written by experts."]],
      ["What is the first question you should ask?", ["Who created this?", "How many likes does it have?", "Is it long or short?"]],
      ["What do reliable sources usually do?", ["explain where their facts come from", "use shocking headlines", "hide the author’s name"]],
      ["What can a reverse image search reveal?", ["where a photo originally came from", "who liked the photo", "how to edit the photo"]],
      ["According to the text, what does being skeptical mean?", ["taking a moment before accepting or sharing", "believing nothing at all", "never using the internet"]]
    ]
  },
  {
    id: "children-story-of-the-olympics", level: "B2", stage: "children", topic: "Sports", title: "From Olympia to the Modern Games",
    description: "The Olympic Games began nearly 2,800 years ago. A lot has changed.",
    text: [
      "The first recorded Olympic Games took place in 776 BC in Olympia, a religious site in ancient Greece dedicated to the god Zeus. For the first few competitions, there was only one event: a sprint of about 192 meters called the stadion. The winner was a cook named Koroibos.",
      "Over time, the Games expanded to include wrestling, boxing, chariot racing and the pentathlon. Athletes competed naked, and only free Greek men were allowed to participate. Married women were not even permitted to watch. Winners did not receive gold medals; they were crowned with a wreath of olive leaves, but they returned home as heroes.",
      "Remarkably, the Games were held every four years for more than a thousand years, until they were abolished around 393 AD.",
      "The modern Olympics were revived in Athens in 1896, thanks largely to a French educator, Pierre de Coubertin, who believed sport could promote peace and international understanding. Women first competed in 1900, and today the Games include thousands of athletes from over two hundred nations.",
      "Mexico hosted the Summer Olympics in 1968, becoming the first Latin American country to do so. Those Games are remembered for several world records, partly due to Mexico City’s high altitude, and for Enriqueta Basilio, the first woman ever to light the Olympic cauldron."
    ],
    vocab: [["sprint", "a short, very fast race"], ["chariot", "an ancient cart with two wheels pulled by horses"], ["wreath", "a ring of leaves or flowers"], ["abolish", "to officially end something"], ["altitude", "the height of a place above the sea"]],
    questions: [
      ["What was the only event in the first Olympic Games?", ["a sprint called the stadion", "wrestling", "chariot racing"]],
      ["What did ancient winners receive?", ["a wreath of olive leaves", "a gold medal", "a bag of money"]],
      ["Who helped revive the modern Olympics?", ["Pierre de Coubertin", "Koroibos", "Zeus"]],
      ["When did women first compete in the modern Games?", ["1900", "1896", "1968"]],
      ["What was special about Enriqueta Basilio?", ["She was the first woman to light the Olympic cauldron.", "She won Mexico’s first gold medal.", "She organized the 1968 Games."]]
    ]
  }
);

Object.assign(READING_ART, {
  "children-why-do-we-sleep": scene("#2A3B66", `${kStars([[30, 24], [70, 50], [120, 20], [230, 30], [280, 60], [300, 18]], "#FCE3A6")}<circle cx="260" cy="44" r="20" fill="#FCE3A6"/><circle cx="270" cy="38" r="18" fill="#2A3B66"/>
    <rect x="40" y="110" width="240" height="40" rx="8" fill="#6FA8D6"/><rect x="40" y="100" width="70" height="20" rx="8" fill="#FFFDFA"/><rect x="28" y="84" width="14" height="80" rx="5" fill="#A9774F"/><rect x="278" y="104" width="14" height="60" rx="5" fill="#A9774F"/>
    <circle cx="80" cy="98" r="13" fill="#F1C7A5"/><path d="M68 94a13 13 0 0 1 24 -2z" fill="#3A2A20"/><path d="M74 100q3 2 6 0M84 100q3 2 6 0" stroke="#1E3A5F" stroke-width="1.6" fill="none"/>
    <path d="M100 112q90-20 178 0v12H100z" fill="#E8846B"/>${T(150, 70, "z", 18, "#FCE3A6")}${T(170, 54, "z", 22, "#FCE3A6")}${T(194, 36, "Z", 26, "#FCE3A6")}`, "#FFFFFF", .1),
  "children-kid-inventors": scene("#FCEFD2", `<g transform="translate(70 94)"><path d="M-14 -40q0-24 24-24t24 24q0 14-10 22v12h-28v-12q-10-8-10-22z" fill="#E0B04A"/><rect x="-6" y="-6" width="20" height="6" rx="2" fill="#A9B4C2"/><rect x="-4" y="2" width="16" height="5" rx="2" fill="#A9B4C2"/>${[[-30, -50], [-26, -20], [40, -60], [50, -30], [10, -80]].map(([x, y]) => `<path d="M${x} ${y}l${x < 10 ? -8 : 8} -4" stroke="#E0B04A" stroke-width="4" stroke-linecap="round"/>`).join("")}</g>
    <g transform="translate(170 110)"><rect x="-24" y="-40" width="48" height="60" rx="5" fill="#FFFDFA"/>${[[-12, -26], [0, -26], [-12, -14], [12, -14], [0, -2], [12, 10], [-12, 10]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#1E3A5F"/>`).join("")}</g>
    <g transform="translate(250 112)"><rect x="-14" y="-50" width="28" height="44" rx="12" fill="#E8846B"/><rect x="-14" y="-24" width="28" height="18" fill="#F7B3C2"/><rect x="-3" y="-6" width="6" height="28" rx="2" fill="#C98A5B"/></g>
    <g transform="translate(160 40)"><path d="M-30 10q0-30 30-30t30 30" stroke="#1E3A5F" stroke-width="4" fill="none"/><circle cx="-30" cy="12" r="10" fill="#6FA8D6"/><circle cx="30" cy="12" r="10" fill="#6FA8D6"/></g>`),
  "children-the-missing-trophy": scene("#EEF0FB", `<rect x="0" y="140" width="320" height="40" fill="#C9B7A0"/>
    <rect x="40" y="40" width="90" height="100" rx="4" fill="#BFDDF2" opacity=".6" stroke="#9AB8D6" stroke-width="3"/><rect x="40" y="110" width="90" height="30" fill="#A9774F"/>${T(85, 76, "?", 34, "#E8846B")}
    <g transform="translate(240 90)"><path d="M-26 -40h52v20q0 30-26 30t-26-30z" fill="#E0B04A"/><path d="M-26 -30q-18 0-16 16q2 12 18 10M26 -30q18 0 16 16q-2 12-18 10" stroke="#E0B04A" stroke-width="5" fill="none"/><rect x="-6" y="10" width="12" height="16" fill="#E0B04A"/><rect x="-20" y="26" width="40" height="12" rx="3" fill="#A9774F"/><path d="M0 -30l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#FCE3A6"/></g>
    ${[[110, 150], [140, 156], [170, 150], [196, 158], [222, 152]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#7FB89E"/>`).join("")}
    <g transform="translate(150 104)"><circle r="16" fill="none" stroke="#1E3A5F" stroke-width="5"/><circle r="12" fill="#FFFDFA" opacity=".5"/><path d="M11 11l16 16" stroke="#1E3A5F" stroke-width="7" stroke-linecap="round"/></g>`),
  "children-the-ancient-ball-game": scene("#F6E6C8", `<rect x="0" y="150" width="320" height="30" fill="#D9BE94"/>
    <path d="M0 150V60h70l20 90z" fill="#C9A87A"/><path d="M320 150V60h-70l-20 90z" fill="#C9A87A"/>${[70, 80, 90, 100, 110, 120, 130, 140].map((y, i) => `<path d="M0 ${y}h${70 + i * 2.5}M320 ${y}h${-70 - i * 2.5}" stroke="#B8966A" stroke-width="1.5"/>`).join("")}
    <g transform="translate(160 64)"><circle r="20" fill="none" stroke="#A9774F" stroke-width="9"/><path d="M-24 0h-16" stroke="#A9774F" stroke-width="8"/></g>
    <circle cx="190" cy="108" r="10" fill="#3A2A20"/>
    ${kP(150, 160, "#B57A55", "#E8846B", 1.5, "#1E1A18")}<rect x="135" y="140" width="30" height="8" fill="#8A5A38"/>
    <path d="M180 30l6 12 13 2-10 9 3 13-12-7-12 7 3-13-10-9 13-2z" fill="#E0B04A" opacity=".7"/>`),
  "children-saving-for-something-special": scene("#1E3A5F", `${kStars([[30, 24], [80, 50], [120, 18], [290, 30], [300, 80]], "#FCE3A6")}
    <g transform="translate(250 60)"><circle r="18" fill="#E0B04A"/><ellipse rx="34" ry="8" fill="none" stroke="#FCE3A6" stroke-width="4" transform="rotate(-18)"/></g>
    <g transform="translate(120 110) rotate(-28)"><rect x="-50" y="-12" width="100" height="24" rx="6" fill="#FFFDFA"/><rect x="40" y="-16" width="18" height="32" rx="4" fill="#E8846B"/><rect x="-62" y="-8" width="14" height="16" rx="3" fill="#A9B4C2"/></g>
    <path d="M110 122l-26 50M126 122l20 50M118 122v50" stroke="#A9B4C2" stroke-width="4"/>
    <g transform="translate(230 150)"><rect x="-24" y="-30" width="48" height="40" rx="8" fill="#BFDDF2" opacity=".8"/><rect x="-20" y="-38" width="40" height="10" rx="3" fill="#E8846B"/>${[[-10, -4], [4, 0], [-4, -14], [10, -16]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#E0B04A"/>`).join("")}</g>`, "#FFFFFF", .1),
  "children-life-on-the-space-station": scene("#14213D", `${kStars([[20, 20], [60, 70], [100, 30], [140, 160], [200, 20], [240, 150], [300, 40], [290, 130], [30, 150]], "#FFFDFA")}
    <path d="M0 180q160-70 320 0z" fill="#6FA8D6"/><path d="M60 180q40-30 90-20t60 20z" fill="#4FA88A"/>
    <g transform="translate(160 70)"><rect x="-16" y="-10" width="32" height="20" rx="4" fill="#E5E8EE"/><rect x="-60" y="-4" width="44" height="8" fill="#A9B4C2"/><rect x="16" y="-4" width="44" height="8" fill="#A9B4C2"/>${[-100, -76, 60, 84].map((x) => `<rect x="${x}" y="-24" width="20" height="48" fill="#3E6A93" stroke="#9AB8D6" stroke-width="1.5"/>`).join("")}<circle cx="0" cy="0" r="5" fill="#6FA8D6"/></g>
    <g transform="translate(240 118) rotate(20)"><circle cx="0" cy="-14" r="10" fill="#FFFDFA"/><rect x="-6" y="-18" width="12" height="7" rx="3" fill="#E0B04A"/><rect x="-10" y="-4" width="20" height="22" rx="6" fill="#FFFDFA"/><path d="M-10 4l-10 6M10 4l10-6" stroke="#FFFDFA" stroke-width="6" stroke-linecap="round"/></g>`, "#FFFFFF", .08),
  "children-secret-language-of-elephants": scene("#F6E3C4", `${kSun(260, 40, 22)}<rect x="0" y="136" width="320" height="44" fill="#D9BE94"/>${[[30, 132], [292, 128]].map(([x, y]) => `<path d="M${x} ${y}v-50" stroke="#8A5A38" stroke-width="5"/><ellipse cx="${x}" cy="${y - 54}" rx="30" ry="8" fill="#7FA36B"/>`).join("")}
    <g transform="translate(120 128)"><ellipse cx="0" cy="-24" rx="40" ry="28" fill="#9AA6B8"/><circle cx="-38" cy="-36" r="20" fill="#9AA6B8"/><ellipse cx="-26" cy="-38" rx="14" ry="18" fill="#8793A6"/><path d="M-52 -30q-10 26 4 34" stroke="#9AA6B8" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="-44" cy="-42" r="2" fill="#1E3A5F"/>${[-24, -8, 10, 26].map((x) => `<rect x="${x}" y="-2" width="11" height="18" rx="4" fill="#8793A6"/>`).join("")}</g>
    <g transform="translate(220 136) scale(.6)"><ellipse cx="0" cy="-24" rx="40" ry="28" fill="#A9B4C2"/><circle cx="38" cy="-36" r="20" fill="#A9B4C2"/><ellipse cx="26" cy="-38" rx="14" ry="18" fill="#9AA6B8"/><path d="M52 -30q10 26-4 34" stroke="#A9B4C2" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="44" cy="-42" r="2.5" fill="#1E3A5F"/>${[-24, -8, 10, 26].map((x) => `<rect x="${x}" y="-2" width="11" height="18" rx="4" fill="#9AA6B8"/>`).join("")}</g>
    ${[16, 28, 40].map((r) => `<path d="M${168 - r} ${70 - r * .3}q${r} ${-r * .6} ${r * 2} 0" stroke="#E8846B" stroke-width="2.5" fill="none" opacity="${1 - r / 60}"/>`).join("")}`),
  "children-the-city-in-the-jungle": scene("#DCEFE6", `${kSun(272, 36, 18)}
    <g transform="translate(160 148)">${[0, 1, 2, 3, 4].map((i) => `<rect x="${-70 + i * 12}" y="${-18 - i * 18}" width="${140 - i * 24}" height="20" fill="${i % 2 ? "#C9B79C" : "#B8A486"}"/>`).join("")}<rect x="-14" y="-108" width="28" height="18" fill="#A99577"/><rect x="-6" y="-102" width="12" height="12" fill="#5A4A3A"/><rect x="-8" y="-90" width="16" height="90" fill="#D6C6AE" opacity=".6"/></g>
    ${[[20, 150, 1.3], [62, 160, 1], [262, 156, 1.2], [300, 150, 1.1], [100, 170, .8], [226, 172, .8]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-30" r="26" fill="#4FA88A"/><circle cx="-18" cy="-14" r="18" fill="#3E8C6F"/><circle cx="18" cy="-16" r="18" fill="#3E8C6F"/></g>`).join("")}
    <g transform="translate(64 60)"><path d="M0 0q20-10 30 0q-14 4-30 0z" fill="#E8846B"/><path d="M0 0q-8 10-20 6" stroke="#E0B04A" stroke-width="4" fill="none"/></g>`),
  "children-can-you-believe-everything-online": scene("#EDE6FA", `<g transform="translate(130 92)"><rect x="-70" y="-56" width="140" height="104" rx="10" fill="#1E3A5F"/><rect x="-62" y="-48" width="124" height="80" rx="4" fill="#FFFDFA"/><rect x="-54" y="-40" width="70" height="8" rx="3" fill="#E8846B"/>${[-24, -12, 0, 12].map((y) => `<rect x="-54" y="${y}" width="${y === 12 ? 60 : 108}" height="5" rx="2" fill="#C9D6E6"/>`).join("")}<rect x="-20" y="48" width="40" height="10" fill="#1E3A5F"/><rect x="-40" y="56" width="80" height="6" rx="3" fill="#1E3A5F"/></g>
    <g transform="translate(150 100)"><circle r="26" fill="#FFFDFA" fill-opacity=".35" stroke="#E0B04A" stroke-width="7"/><path d="M19 19l24 24" stroke="#E0B04A" stroke-width="10" stroke-linecap="round"/></g>
    <g transform="translate(260 60)"><rect x="-26" y="-20" width="52" height="40" rx="12" fill="#4FA88A"/><path d="M-10 0l7 7 14-14" stroke="#FFFDFA" stroke-width="5" fill="none" stroke-linecap="round"/></g>
    <g transform="translate(260 128)"><rect x="-26" y="-20" width="52" height="40" rx="12" fill="#E8846B"/><path d="M-8 -8l16 16M8 -8l-16 16" stroke="#FFFDFA" stroke-width="5" stroke-linecap="round"/></g>`),
  "children-story-of-the-olympics": scene("#FFFDFA", `${["#3E7CC6", "#1E1E1E", "#D8343A"].map((c, i) => `<circle cx="${100 + i * 60}" cy="70" r="24" fill="none" stroke="${c}" stroke-width="7"/>`).join("")}${["#F2B632", "#3A9A5B"].map((c, i) => `<circle cx="${130 + i * 60}" cy="96" r="24" fill="none" stroke="${c}" stroke-width="7"/>`).join("")}
    <g transform="translate(46 150)"><path d="M-14 -40h28l-8 40h-12z" fill="#A9774F"/><path d="M0 -40q-16-10-8-28q4 8 8 0q8 10 10-4q12 14-10 32z" fill="#E8846B"/><path d="M0 -42q-5-6 0-14q5 8 0 14z" fill="#E0B04A"/></g>
    <g transform="translate(270 140)"><path d="M-24 0a24 24 0 1 1 48 0" fill="none" stroke="#7FA36B" stroke-width="5"/>${[-60, -30, 0, 30, 60].map((a) => `<ellipse cx="${24 * Math.sin(a * Math.PI / 180)}" cy="${-24 * Math.cos(a * Math.PI / 180) + 2}" rx="6" ry="3" fill="#6BA88B" transform="rotate(${a} ${24 * Math.sin(a * Math.PI / 180)} ${-24 * Math.cos(a * Math.PI / 180) + 2})"/>`).join("")}</g>
    ${[110, 140, 170, 200].map((x) => `<rect x="${x}" y="130" width="12" height="40" fill="#E5E8EE" stroke="#C9D6E6"/>`).join("")}<rect x="102" y="124" width="122" height="8" fill="#D6DCE6"/>`)
});

/* =====================================================================
   FASE 5 — Lecturas en inglés: MOVA Teens hasta 6 por nivel
   ===================================================================== */
READINGS.push(
  /* ---------- Pre-A1 ---------- */
  {
    id: "teens-my-weekend", level: "Pre-A1", stage: "teens", topic: "Free Time", title: "My Weekend",
    description: "Andrea tells us what she does on Saturday and Sunday.",
    text: [
      "Hi! I’m Andrea. I’m fourteen and I live in Monterrey.",
      "On Saturday morning, I sleep late. I get up at ten o’clock!",
      "In the afternoon, I meet my friends at the mall. We eat ice cream and talk a lot.",
      "On Saturday night, I watch a series with my sister.",
      "On Sunday, I have lunch with my grandparents. Then I do my homework.",
      "I love weekends!"
    ],
    vocab: [["weekend", "Saturday and Sunday"], ["sleep late", "to stay in bed in the morning"], ["mall", "a big building with many stores"], ["series", "a TV show with many episodes"], ["grandparents", "your grandma and grandpa"]],
    questions: [
      ["How old is Andrea?", ["fourteen", "twelve", "sixteen"]],
      ["What time does she get up on Saturday?", ["at ten o’clock", "at seven o’clock", "at noon"]],
      ["Where does she meet her friends?", ["at the mall", "at school", "at the park"]],
      ["Who does she watch a series with?", ["her sister", "her friends", "her grandparents"]],
      ["What does she do on Sunday afternoon?", ["her homework", "sports", "shopping"]]
    ]
  },
  {
    id: "teens-my-timetable", level: "Pre-A1", stage: "teens", topic: "School", title: "My School Timetable",
    description: "What classes does Iker have on Monday?",
    text: [
      "My name is Iker. I’m in ninth grade. This is my Monday.",
      "School starts at seven thirty. My first class is math. It is difficult, but my teacher is good.",
      "At nine o’clock, I have English. It is my favorite class!",
      "Then I have history and science.",
      "At eleven, it’s break time. I eat a sandwich and play soccer.",
      "After the break, I have art and P.E. School finishes at two o’clock."
    ],
    vocab: [["timetable", "a list of your classes and times"], ["grade", "your year at school"], ["difficult", "not easy"], ["break", "free time between classes"], ["P.E.", "physical education, sports class"]],
    questions: [
      ["What grade is Iker in?", ["ninth grade", "sixth grade", "eleventh grade"]],
      ["What is his first class?", ["math", "English", "art"]],
      ["What is his favorite class?", ["English", "history", "science"]],
      ["What does he do at break time?", ["eats a sandwich and plays soccer", "reads a book", "goes home"]],
      ["What time does school finish?", ["at two o’clock", "at eleven o’clock", "at four o’clock"]]
    ]
  },
  {
    id: "teens-food-i-like", level: "Pre-A1", stage: "teens", topic: "Food", title: "Food I Like (and Don’t Like)",
    description: "Mateo has strong opinions about food.",
    text: [
      "I’m Mateo. I love food, but I don’t like everything!",
      "I love pizza with pepperoni. I love tacos de trompo, too.",
      "I like fruit. My favorite fruit is mango.",
      "I don’t like broccoli. It’s green and boring.",
      "I really don’t like fish. My mom loves it, but not me!",
      "For breakfast, I have cereal and orange juice.",
      "And you? What food do you like?"
    ],
    vocab: [["love", "to like very, very much"], ["fruit", "food like apples, mangos and bananas"], ["broccoli", "a green vegetable that looks like a small tree"], ["boring", "not interesting"], ["breakfast", "the first meal of the day"]],
    questions: [
      ["What pizza does Mateo love?", ["pepperoni", "cheese", "Hawaiian"]],
      ["What is his favorite fruit?", ["mango", "apple", "banana"]],
      ["Why doesn’t he like broccoli?", ["It’s green and boring.", "It’s spicy.", "It’s expensive."]],
      ["Who loves fish?", ["his mom", "Mateo", "his friend"]],
      ["What does he have for breakfast?", ["cereal and orange juice", "tacos", "pizza"]]
    ]
  },
  {
    id: "teens-my-city", level: "Pre-A1", stage: "teens", topic: "Places", title: "My City: Monterrey",
    description: "Leo shows us his favorite places in his city.",
    text: [
      "I’m Leo, and this is my city. It’s Monterrey, in the north of Mexico.",
      "There are big mountains around the city. My favorite mountain is the Cerro de la Silla.",
      "There is a big park. It’s called Parque Fundidora. I ride my bike there.",
      "There is a river walk, too. It’s called Paseo Santa Lucía. You can take a boat!",
      "In summer, it’s very hot.",
      "I like my city a lot. Come and visit!"
    ],
    vocab: [["city", "a very big town"], ["north", "the top part of a map"], ["mountain", "a very high hill"], ["river walk", "a path next to water where people walk"], ["boat", "you use it to travel on water"]],
    questions: [
      ["Where is Monterrey?", ["in the north of Mexico", "in the south of Mexico", "in the center of Mexico"]],
      ["What is Leo’s favorite mountain?", ["the Cerro de la Silla", "the Cerro de las Mitras", "the Huasteca"]],
      ["What does he do in Parque Fundidora?", ["He rides his bike.", "He swims.", "He takes a boat."]],
      ["What can you do at Paseo Santa Lucía?", ["take a boat", "climb a mountain", "see animals"]],
      ["What is the weather like in summer?", ["very hot", "very cold", "rainy"]]
    ]
  },
  {
    id: "teens-my-music", level: "Pre-A1", stage: "teens", topic: "Music", title: "My Music",
    description: "Music is a big part of Daniela’s day.",
    text: [
      "Hi! I’m Daniela. Music is my life!",
      "I listen to music every day. I listen in the car, on the bus and in my room.",
      "I like pop and rock. My favorite singer is from Colombia.",
      "I have headphones. They are pink and white.",
      "I play the guitar, too. I have lessons on Wednesday.",
      "My brother plays the drums. It’s very loud! My dad says, “Stop, please!”"
    ],
    vocab: [["listen to", "to hear something carefully"], ["singer", "a person who sings"], ["headphones", "you wear them on your ears to listen to music"], ["drums", "an instrument you hit with sticks"], ["loud", "with a lot of noise"]],
    questions: [
      ["When does Daniela listen to music?", ["every day", "only on weekends", "only at school"]],
      ["What music does she like?", ["pop and rock", "jazz", "classical"]],
      ["What color are her headphones?", ["pink and white", "black", "blue"]],
      ["When are her guitar lessons?", ["on Wednesday", "on Saturday", "on Monday"]],
      ["What does her brother play?", ["the drums", "the guitar", "the piano"]]
    ]
  },

  /* ---------- A1 ---------- */
  {
    id: "teens-the-new-cafe", level: "A1", stage: "teens", topic: "Places", title: "The New Café",
    description: "There’s a new place near school, and everyone wants to go.",
    text: [
      "There is a new café near our school. It is called “Bean There.” My friends and I go there every Friday after school.",
      "The café is small, but it is very cool. There are plants everywhere and lights on the ceiling. The music is good, and the chairs are comfortable.",
      "I usually order a mango smoothie and a slice of carrot cake. My friend Valeria always has a hot chocolate, even in summer! Pablo orders a coffee, but he puts five spoons of sugar in it.",
      "The owner is a young woman named Sara. She is very friendly, and she remembers our names.",
      "On Fridays, the café is full of students. Some people study, some play board games and some just talk.",
      "It is our favorite place in the neighborhood."
    ],
    vocab: [["café", "a small restaurant for drinks and snacks"], ["ceiling", "the top part of a room"], ["order", "to ask for food or drinks in a restaurant"], ["slice", "a thin piece of food"], ["owner", "the person a business belongs to"]],
    questions: [
      ["What is the name of the café?", ["Bean There", "Café Monterrey", "The Plant"]],
      ["What is everywhere in the café?", ["plants", "books", "pictures"]],
      ["What does Valeria always have?", ["a hot chocolate", "a mango smoothie", "a coffee"]],
      ["What is strange about Pablo’s coffee?", ["He puts five spoons of sugar in it.", "He drinks it cold.", "He never finishes it."]],
      ["What does Sara do?", ["She is the owner.", "She is a student.", "She is a teacher."]]
    ]
  },
  {
    id: "teens-my-sisters-job", level: "A1", stage: "teens", topic: "Work", title: "My Sister’s Job",
    description: "Carla’s sister has an unusual job at the airport.",
    text: [
      "My older sister, Fernanda, is twenty-four. She has a very interesting job. She is an air traffic controller at Monterrey airport.",
      "Air traffic controllers help airplanes take off and land safely. Fernanda works in a tall tower with big windows. She watches the planes on a screen and talks to the pilots on a radio.",
      "Her job is difficult and very important. She needs to concentrate all the time, and she can’t make mistakes. She often speaks English with pilots, because English is the international language of aviation.",
      "Fernanda works different hours every week. Sometimes she starts at six in the morning, and sometimes she works at night.",
      "I want to be a pilot one day. Maybe one day Fernanda can help me land!"
    ],
    vocab: [["air traffic controller", "a person who guides airplanes from the ground"], ["take off", "when a plane leaves the ground"], ["land", "when a plane comes down to the ground"], ["tower", "a tall, narrow building"], ["pilot", "a person who flies a plane"]],
    questions: [
      ["How old is Fernanda?", ["twenty-four", "thirty", "eighteen"]],
      ["Where does she work?", ["in a tower at the airport", "on an airplane", "in an office downtown"]],
      ["How does she talk to pilots?", ["on a radio", "by email", "on her phone"]],
      ["Why does she speak English at work?", ["It is the international language of aviation.", "Her boss is American.", "She likes practicing."]],
      ["What does Carla want to be?", ["a pilot", "an air traffic controller", "a doctor"]]
    ]
  },
  {
    id: "teens-the-basketball-game", level: "A1", stage: "teens", topic: "Sports", title: "The Big Game",
    description: "It’s the final game of the season, and the team is nervous.",
    text: [
      "Today is the final game of the school basketball season. Our team, the Falcons, is playing against the Tigers. The Tigers are very good. They usually win every game.",
      "Before the game, our coach talks to us. “Don’t worry about winning,” she says. “Play as a team and have fun.”",
      "The game starts, and the Tigers score first. At half time, we are losing by ten points. Everybody is quiet.",
      "In the second half, we play better. We pass the ball more, and we run faster. My best friend, Iván, scores three times!",
      "With five seconds left, the score is 48 to 48. I have the ball. I throw it… and it goes in!",
      "We win, 50 to 48! Everybody jumps and shouts. It is the best day of the year."
    ],
    vocab: [["season", "the time of year when a sport is played"], ["coach", "a person who trains a team"], ["score", "to get a point; also, the number of points"], ["half time", "the break in the middle of a game"], ["throw", "to send something through the air with your hand"]],
    questions: [
      ["What is the name of the narrator’s team?", ["the Falcons", "the Tigers", "the Eagles"]],
      ["What does the coach say before the game?", ["Play as a team and have fun.", "You must win.", "Run as fast as you can."]],
      ["What is the situation at half time?", ["The team is losing by ten points.", "The team is winning.", "The score is equal."]],
      ["How many times does Iván score?", ["three times", "once", "ten times"]],
      ["What is the final score?", ["50 to 48", "48 to 48", "48 to 50"]]
    ]
  },
  {
    id: "teens-learning-to-cook", level: "A1", stage: "teens", topic: "Food", title: "Learning to Cook",
    description: "Rodrigo can’t cook… yet.",
    text: [
      "I am fifteen, and until last month, I couldn’t cook anything. I could only make cereal and instant noodles.",
      "Then my mom started a new job, and she now comes home late on Tuesdays and Thursdays. So I have a new responsibility: I make dinner on those days.",
      "The first Tuesday was a disaster. I tried to make spaghetti, but the water boiled over and the pasta was too soft. My little brother laughed at me.",
      "Now I watch cooking videos and practice. I can make scrambled eggs, quesadillas, rice and a simple chicken soup.",
      "Last Thursday, I made chicken with vegetables. My mom tried it and said, “This is really good!”",
      "I feel proud. Cooking is not easy, but it’s a useful skill, and I enjoy it."
    ],
    vocab: [["instant noodles", "noodles that are ready in three minutes"], ["responsibility", "a job or duty that you must do"], ["disaster", "something that goes very badly"], ["boil over", "when hot water comes out of the pot"], ["proud", "happy about something you did well"]],
    questions: [
      ["What could Rodrigo make before?", ["only cereal and instant noodles", "spaghetti", "chicken soup"]],
      ["Why does he cook on Tuesdays and Thursdays?", ["His mom comes home late.", "He has cooking class.", "His dad asked him."]],
      ["What went wrong the first time?", ["The pasta was too soft.", "He burned the chicken.", "He forgot the salt."]],
      ["How does he learn now?", ["He watches cooking videos.", "He takes classes.", "His grandma teaches him."]],
      ["How does he feel at the end?", ["proud", "angry", "tired"]]
    ]
  },
  {
    id: "teens-a-day-at-the-mall", level: "A1", stage: "teens", topic: "Shopping", title: "Shopping for a Birthday Gift",
    description: "Natalia has 500 pesos and a difficult decision.",
    text: [
      "My best friend Ximena’s birthday is next Saturday. I have 500 pesos for a gift, so on Sunday I go to the mall with my cousin.",
      "First, we go to a bookstore. Ximena loves fantasy novels, but she has all the books I see!",
      "Then we go to a clothes store. There is a beautiful jacket, but it costs 900 pesos. It’s too expensive.",
      "We are tired and hungry, so we sit down and eat some pretzels. Then my cousin has an idea. “Ximena loves photos, right? Why don’t you make her a photo album?”",
      "It’s a great idea! We go to a stationery store. I buy a nice album, stickers and colored pens. It costs 320 pesos.",
      "At home, I print our best photos from the last three years. I write a short message under each one. I think it’s the best gift for her."
    ],
    vocab: [["gift", "a present"], ["bookstore", "a store that sells books"], ["expensive", "it costs a lot of money"], ["stationery", "paper, pens and other things for writing"], ["print", "to put words or pictures on paper with a machine"]],
    questions: [
      ["How much money does Natalia have for the gift?", ["500 pesos", "900 pesos", "320 pesos"]],
      ["Why doesn’t she buy a book?", ["Ximena already has the books.", "The books are expensive.", "The bookstore is closed."]],
      ["Why doesn’t she buy the jacket?", ["It’s too expensive.", "It’s ugly.", "It’s too small."]],
      ["Whose idea is the photo album?", ["her cousin’s", "Natalia’s", "Ximena’s"]],
      ["What does Natalia write in the album?", ["a short message under each photo", "a long letter", "Ximena’s name only"]]
    ]
  },

  /* ---------- A1+ ---------- */
  {
    id: "teens-my-first-concert", level: "A1+", stage: "teens", topic: "Music", title: "My First Concert",
    description: "Sebastián finally sees his favorite band live.",
    text: [
      "For my fifteenth birthday, my parents gave me the best present ever: two tickets to see my favorite band at Estadio Banorte. I invited my best friend, Luis.",
      "On the day of the concert, we arrived three hours early because we wanted to be close to the stage. There were already thousands of people outside. Some had painted faces, and many were wearing the band’s T-shirts.",
      "When the lights went out, everybody screamed. Then the music started, and the whole stadium started singing. I knew every word of every song.",
      "In the middle of the concert, the singer said in Spanish, “¡Gracias, Monterrey!” and everyone went crazy. Luis and I recorded some videos, but most of the time we just enjoyed the moment.",
      "The concert finished at midnight. My ears were ringing and my voice was gone, but I was so happy.",
      "I still keep my ticket in a frame in my room."
    ],
    vocab: [["ticket", "a piece of paper that lets you enter an event"], ["stage", "the place where musicians perform"], ["scream", "to shout very loudly"], ["record", "to make a video or audio"], ["frame", "a border around a picture"]],
    questions: [
      ["Why did Sebastián go to the concert?", ["It was his birthday present.", "He won a contest.", "Luis invited him."]],
      ["Why did they arrive three hours early?", ["to be close to the stage", "to buy T-shirts", "to meet the band"]],
      ["What did the singer say in Spanish?", ["¡Gracias, Monterrey!", "¡Buenas noches!", "¡Hola, México!"]],
      ["How did Sebastián feel after the concert?", ["very happy", "bored", "angry"]],
      ["Where does he keep his ticket?", ["in a frame in his room", "in his wallet", "on his phone"]]
    ]
  },
  {
    id: "teens-online-friends", level: "A1+", stage: "teens", topic: "Technology", title: "Online Friends",
    description: "Mariana has friends in other countries, but she has never met them.",
    text: [
      "I have three good friends that I have never met in person. Their names are Aiko from Japan, Lucas from Brazil and Emma from Ireland. We met two years ago in an online art community, where people share their drawings.",
      "We usually chat in English, because it’s the only language we all speak. At first, my English was not very good, but now I write much better. Aiko says her English improved a lot, too.",
      "Every month, we have a drawing challenge. Someone chooses a topic, like “ocean” or “a city in the future,” and we all draw it. Then we give each other feedback.",
      "My parents were worried at the beginning, so I showed them our conversations and explained the rules I follow: I never share my address, my school or personal photos.",
      "One day, I hope we can meet in person. Until then, I’m happy to have friends on three continents."
    ],
    vocab: [["in person", "face to face, not online"], ["community", "a group of people with something in common"], ["improve", "to get better"], ["challenge", "something difficult that tests your ability"], ["feedback", "comments to help someone improve"]],
    questions: [
      ["How did Mariana meet her online friends?", ["in an online art community", "at school", "on a trip"]],
      ["Why do they chat in English?", ["It’s the only language they all speak.", "Their teacher told them to.", "They all live in the U.S."]],
      ["What happens every month?", ["They have a drawing challenge.", "They meet in person.", "They send letters."]],
      ["What does Mariana never share online?", ["her address, school or personal photos", "her drawings", "her opinions"]],
      ["What does Mariana hope for the future?", ["to meet her friends in person", "to stop drawing", "to move to Japan"]]
    ]
  },
  {
    id: "teens-volunteer-day", level: "A1+", stage: "teens", topic: "Community", title: "Volunteer Day at the Animal Shelter",
    description: "Ricardo thought it was going to be boring. He was wrong.",
    text: [
      "Every year, my school organizes a volunteer day. Students can choose to help at a food bank, clean a park or work at an animal shelter. I chose the shelter because my friends chose it, not because I was very interested.",
      "When we arrived, the shelter manager, Doña Elvira, explained the jobs. There were more than eighty dogs and thirty cats, and most of them were waiting for a family.",
      "First, we cleaned the dogs’ areas. It wasn’t pleasant, but it was necessary. Then we gave them fresh water and food.",
      "After lunch, we took the dogs for walks. My dog was an old, brown dog called Bruno. He was slow and a little sad, but when I sat with him, he put his head on my leg.",
      "At the end of the day, I didn’t want to leave. Now I volunteer at the shelter every second Saturday.",
      "And good news: last week, a family adopted Bruno."
    ],
    vocab: [["volunteer", "to work without pay to help others"], ["food bank", "a place that gives free food to people who need it"], ["manager", "the person in charge"], ["pleasant", "nice, enjoyable"], ["adopt", "to take an animal or child into your family"]],
    questions: [
      ["Why did Ricardo choose the shelter at first?", ["His friends chose it.", "He loves animals.", "His teacher told him to."]],
      ["How many dogs were at the shelter?", ["more than eighty", "thirty", "ten"]],
      ["What was the first job?", ["cleaning the dogs’ areas", "walking the dogs", "feeding the cats"]],
      ["What did Bruno do when Ricardo sat with him?", ["He put his head on Ricardo’s leg.", "He ran away.", "He barked."]],
      ["What happened to Bruno last week?", ["A family adopted him.", "He got sick.", "Ricardo took him home."]]
    ]
  },
  {
    id: "teens-the-art-class", level: "A1+", stage: "teens", topic: "Art", title: "The Art Class",
    description: "Valentina has always said, “I can’t draw.” Her new teacher disagrees.",
    text: [
      "For years, I always said the same thing: “I can’t draw.” When I had to choose an elective class this semester, art was the only class with space, so I took it. I was not happy.",
      "On the first day, our teacher, Mr. Herrera, asked us to draw our hand. My drawing looked like a potato with five sausages. Everyone laughed, including me.",
      "But Mr. Herrera said something I didn’t expect. “Drawing is not a talent. It’s a skill, like riding a bike. Nobody is good at the beginning.”",
      "Every class, we practiced simple things: lines, shadows, shapes. He taught us to look carefully before drawing. Little by little, my drawings started to look better.",
      "At the end of the semester, I drew my hand again. I put the two drawings next to each other. I couldn’t believe it was the same person.",
      "Now I carry a small sketchbook in my backpack, and I draw almost every day."
    ],
    vocab: [["elective", "a class you choose, not a required one"], ["talent", "a natural ability"], ["skill", "an ability you get by practicing"], ["shadow", "a dark area where light is blocked"], ["sketchbook", "a book with blank pages for drawing"]],
    questions: [
      ["Why did Valentina take art?", ["It was the only class with space.", "She loves drawing.", "Her friends were in it."]],
      ["What did her first drawing look like?", ["a potato with five sausages", "a perfect hand", "a flower"]],
      ["What did Mr. Herrera say about drawing?", ["It’s a skill, not a talent.", "Some people can never draw.", "It’s easy for everyone."]],
      ["What did they practice in class?", ["lines, shadows and shapes", "painting portraits", "sculpture"]],
      ["What does Valentina do now?", ["She draws almost every day.", "She never draws.", "She teaches art."]]
    ]
  },
  {
    id: "teens-a-different-morning", level: "A1+", stage: "teens", topic: "Wellbeing", title: "A Different Morning",
    description: "Joaquín was always late and tired. Then he changed one thing.",
    text: [
      "Last year, my mornings were terrible. My alarm rang at 6:30, but I always pressed snooze three or four times. Then I jumped out of bed, put on my uniform, didn’t eat breakfast and ran to the bus. I arrived at school tired and hungry, and I couldn’t concentrate in my first class.",
      "The problem started the night before. I was on my phone in bed until one or two in the morning, watching videos.",
      "So my older brother gave me a challenge: for two weeks, my phone had to stay in the kitchen after ten o’clock. I thought it was impossible.",
      "The first nights, I couldn’t sleep, so I read a book. After four days, I started to fall asleep earlier. After a week, I woke up before my alarm!",
      "Now I have time to eat breakfast and walk to the bus calmly. My grades are better, and I feel less stressed.",
      "My phone still sleeps in the kitchen."
    ],
    vocab: [["alarm", "a sound that wakes you up"], ["snooze", "a button that stops the alarm for a few minutes"], ["fall asleep", "to start sleeping"], ["calmly", "in a relaxed way"], ["stressed", "worried and nervous"]],
    questions: [
      ["What did Joaquín do when his alarm rang?", ["He pressed snooze several times.", "He got up immediately.", "He turned it off and slept all day."]],
      ["What was the real cause of the problem?", ["He used his phone late at night.", "His alarm was broken.", "His bus left too early."]],
      ["What was his brother’s challenge?", ["Leave the phone in the kitchen after ten.", "Get up at five o’clock.", "Go to school by bike."]],
      ["What did he do the first nights?", ["He read a book.", "He watched TV.", "He played video games."]],
      ["What changed for Joaquín?", ["He has time for breakfast and feels less stressed.", "He sleeps in class now.", "He bought a new phone."]]
    ]
  }
);

/* ---------- Ilustraciones Teens Pre-A1 a A1+ ---------- */
const tPhone = (x, y, s = 1, c = "#1E3A5F") => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-10" y="-18" width="20" height="36" rx="4" fill="${c}"/><rect x="-7" y="-14" width="14" height="26" rx="1.5" fill="#9AB8D6"/></g>`;
Object.assign(READING_ART, {
  "teens-my-weekend": scene("#FBE3DC", `<rect x="0" y="40" width="320" height="140" fill="#F2D2C7"/>${[30, 110, 190, 270].map((x, i) => `<rect x="${x}" y="54" width="54" height="70" rx="6" fill="${["#6FA8D6", "#E0B04A", "#4FA88A", "#A98BE8"][i]}" opacity=".85"/><rect x="${x + 6}" y="62" width="42" height="26" rx="3" fill="#FFFDFA" opacity=".7"/>`).join("")}<rect x="0" y="130" width="320" height="50" fill="#E8C7A8"/>
    ${kP(110, 164, "#F1C7A5", "#E8846B", 1.6, "#3A2A20")}${kP(170, 164, "#C98E6A", "#A98BE8", 1.6, "#1E1A18")}${kP(225, 166, "#E7B48F", "#4FA88A", 1.55, "#5A3A2A")}
    ${[[96, 112, "#F7B3C2"], [184, 112, "#FCE3A6"]].map(([x, y, c]) => `<g transform="translate(${x} ${y})"><path d="M-6 0l6 16 6-16z" fill="#D9A46A"/><circle cx="0" cy="-3" r="7" fill="${c}"/></g>`).join("")}`),
  "teens-my-timetable": scene("#E3EEF9", `<rect x="22" y="18" width="190" height="144" rx="10" fill="#FFFDFA"/>${["7:30", "9:00", "10:00", "11:00", "12:00"].map((t, i) => `${T(50, 40 + i * 26, t, 10, "#5B6787", 600)}<rect x="76" y="${30 + i * 26}" width="${[110, 120, 96, 70, 104][i]}" height="18" rx="6" fill="${["#FBE3DC", "#DCEAF6", "#FCEFD2", "#E2F2EA", "#EDE6FA"][i]}"/>`).join("")}${T(130, 39, "Math", 10, "#1E3A5F")}${T(136, 65, "English ★", 10, "#1E3A5F")}${T(124, 91, "History", 10, "#1E3A5F")}${T(110, 117, "Break", 10, "#1E3A5F")}${T(128, 143, "Art · P.E.", 10, "#1E3A5F")}
    ${kP(262, 150, "#F3D1B3", "#1E3A5F", 1.7, "#1E1A18")}<g transform="translate(262 48)"><circle r="20" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="3"/><path d="M0 -12v12l8 6" stroke="#E8846B" stroke-width="3" fill="none" stroke-linecap="round"/></g>`),
  "teens-food-i-like": scene("#FCEFD2", `<g transform="translate(90 90)"><path d="M-50 30l50-90 50 90z" fill="#E0B04A"/><path d="M-50 30l50-90 50 90" fill="none" stroke="#C98A5B" stroke-width="8" stroke-linejoin="round"/><path d="M-38 22l38-68 38 68z" fill="#E8846B" opacity=".55"/>${[[-14, 0], [12, 4], [0, -24], [-2, 16]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#B23A48"/>`).join("")}</g>
    <g transform="translate(200 70)"><ellipse rx="20" ry="26" fill="#F2B632" transform="rotate(30)"/><path d="M8 -24q8-10 16-6" stroke="#4FA88A" stroke-width="5" fill="none" stroke-linecap="round"/></g>
    <g transform="translate(250 126)"><circle r="30" fill="#E2F2EA" stroke="#C9D6E6" stroke-width="3"/><g transform="translate(-6 4)"><rect x="-3" y="-2" width="6" height="16" fill="#7FB89E"/><circle cx="-8" cy="-8" r="8" fill="#4FA88A"/><circle cx="6" cy="-10" r="9" fill="#4FA88A"/><circle cx="0" cy="-18" r="7" fill="#4FA88A"/></g><path d="M-22 -22l44 44" stroke="#E8846B" stroke-width="5" stroke-linecap="round"/></g>
    <g transform="translate(206 140)"><path d="M-20 -6q20-10 40 0v6q-20 10-40 0z" fill="#9AB8D6"/><path d="M20 -3l10-8v16z" fill="#9AB8D6"/><circle cx="-12" cy="-3" r="2" fill="#1E3A5F"/><path d="M-26 -26l52 52" stroke="#E8846B" stroke-width="5" stroke-linecap="round" opacity=".9"/></g>`),
  "teens-my-city": scene("#DCEAF6", `${kSun(270, 36, 18)}<path d="M0 120l40-40 30 20 50-70 30 40 20-24 40 50 40-30 70 54v60H0z" fill="#8A9BB4"/><path d="M110 60l10-14 10 14q-10 6-20 0z" fill="#6E7F99"/>
    ${[[30, 70], [60, 54], [90, 80], [200, 64], [228, 50], [258, 76], [286, 60]].map(([x, h]) => `<rect x="${x}" y="${150 - h}" width="24" height="${h}" fill="#5B6E8C"/>${[0, 1, 2].map((r) => `<rect x="${x + 5}" y="${150 - h + 8 + r * 14}" width="5" height="6" fill="#FCE3A6"/><rect x="${x + 14}" y="${150 - h + 8 + r * 14}" width="5" height="6" fill="#FCE3A6"/>`).join("")}`).join("")}
    <rect x="0" y="146" width="320" height="34" fill="#6FC1D9"/><path d="M0 146h320" stroke="#4FA88A" stroke-width="5"/><g transform="translate(150 162)"><path d="M-24 -4h48l-8 10h-32z" fill="#E8846B"/><rect x="-10" y="-14" width="20" height="10" rx="2" fill="#FFFDFA"/></g>`),
  "teens-my-music": scene("#EDE6FA", `${kP(120, 160, "#F1C7A5", "#A98BE8", 1.8, "#3A2A20")}<path d="M101 104q19-26 38 0" stroke="#F7B3C2" stroke-width="6" fill="none"/><rect x="96" y="100" width="9" height="14" rx="4" fill="#FFFDFA"/><rect x="135" y="100" width="9" height="14" rx="4" fill="#FFFDFA"/>
    <g transform="translate(230 128) rotate(-30)"><ellipse cx="0" cy="10" rx="26" ry="22" fill="#C98A5B"/><ellipse cx="0" cy="-14" rx="18" ry="16" fill="#C98A5B"/><circle cx="0" cy="2" r="7" fill="#5A3A2A"/><rect x="-4" y="-80" width="8" height="70" fill="#8A5A38"/><rect x="-7" y="-92" width="14" height="14" rx="3" fill="#5A3A2A"/></g>
    ${[[60, 50], [180, 40], [276, 60]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle cx="0" cy="12" r="6" fill="#E8846B"/><path d="M5 12V-8l12 4v6" stroke="#E8846B" stroke-width="3" fill="none"/></g>`).join("")}`),
  "teens-the-new-cafe": scene("#E2F2EA", `<rect x="0" y="130" width="320" height="50" fill="#C9A87A"/>${[40, 120, 200, 280].map((x) => `<path d="M${x} 0v24" stroke="#1E3A5F" stroke-width="1.5"/><circle cx="${x}" cy="30" r="7" fill="#FCE3A6"/>`).join("")}
    ${[[30, 110], [290, 100]].map(([x, y]) => `<rect x="${x - 12}" y="${y}" width="24" height="24" rx="3" fill="#E8846B"/>${[-14, 0, 14].map((a) => `<ellipse cx="${x + a}" cy="${y - 14}" rx="7" ry="16" fill="#4FA88A" transform="rotate(${a * 2} ${x + a} ${y})"/>`).join("")}`).join("")}
    <rect x="110" y="110" width="100" height="8" rx="3" fill="#8A5A38"/><rect x="156" y="118" width="8" height="30" fill="#8A5A38"/>
    <g transform="translate(140 102)"><path d="M-8 -14h16l-2 14h-12z" fill="#F2B632"/><path d="M2 -14l4-10" stroke="#E8846B" stroke-width="2"/></g><g transform="translate(182 102)"><rect x="-9" y="-12" width="18" height="12" rx="3" fill="#FFFDFA"/><path d="M9 -8q6 0 4 6" stroke="#FFFDFA" stroke-width="2.5" fill="none"/><path d="M-3 -16q2-4 0-8M3 -16q2-4 0-8" stroke="#A9B4C2" stroke-width="1.5" fill="none"/></g>
    ${kP(84, 154, "#F1C7A5", "#A98BE8", 1.45, "#5A3A2A")}${kP(240, 154, "#C98E6A", "#6FA8D6", 1.45, "#1E1A18")}`),
  "teens-my-sisters-job": scene("#DCEAF6", `${kC(30, 30)}${kC(200, 20, .8)}<rect x="0" y="150" width="320" height="30" fill="#A9B4C2"/><path d="M0 164h320" stroke="#FFFDFA" stroke-width="3" stroke-dasharray="16 12"/>
    <g transform="translate(70 150)"><rect x="-10" y="-90" width="20" height="90" fill="#E5E8EE"/><path d="M-24 -110h48l-6 22h-36z" fill="#3E6A93"/><rect x="-20" y="-106" width="40" height="12" fill="#9AB8D6"/><rect x="-26" y="-114" width="52" height="6" rx="2" fill="#1E3A5F"/></g>
    <g transform="translate(220 70) rotate(-12)"><ellipse rx="56" ry="10" fill="#FFFDFA"/><path d="M-10 -2l-24 -30h12l30 30z" fill="#E8846B"/><path d="M-10 2l-24 30h12l30-30z" fill="#E8846B"/><path d="M-48 -4l-10 -16h8l12 14z" fill="#E8846B"/>${[0, 10, 20, 30].map((x) => `<circle cx="${x}" cy="-2" r="2" fill="#6FA8D6"/>`).join("")}<path d="M50 -4q8 4 0 8" fill="#9AB8D6"/></g>`),
  "teens-the-basketball-game": scene("#F6E3C4", `<rect x="0" y="120" width="320" height="60" fill="#E0B07A"/><path d="M0 150h320M160 120v60" stroke="#FFFDFA" stroke-width="2"/><ellipse cx="160" cy="150" rx="30" ry="10" fill="none" stroke="#FFFDFA" stroke-width="2"/>
    <g transform="translate(270 40)"><rect x="-26" y="-18" width="52" height="38" fill="#FFFDFA" stroke="#A9B4C2" stroke-width="2"/><rect x="-10" y="0" width="20" height="14" fill="none" stroke="#E8846B" stroke-width="2"/><path d="M-12 22h24" stroke="#E8846B" stroke-width="4"/><path d="M-10 24l4 22M10 24l-4 22M0 24v22" stroke="#FFFDFA" stroke-width="1.5"/><rect x="24" y="-6" width="40" height="10" fill="#8A9BB4"/></g>
    <circle cx="232" cy="74" r="10" fill="#E8846B"/><path d="M222 74h20M232 64v20" stroke="#8A3A28" stroke-width="1.2"/><path d="M212 100q12-30 16-26" stroke="#1E3A5F" stroke-width="1.5" stroke-dasharray="3 3" fill="none"/>
    ${kP(190, 146, "#C98E6A", "#E8846B", 1.7, "#1E1A18")}<rect x="182" y="110" width="16" height="10" fill="#FFFDFA" opacity=".85"/>${T(190, 115, "7", 8, "#E8846B")}${kP(110, 150, "#F1C7A5", "#6FA8D6", 1.6, "#3A2A20")}
    <rect x="16" y="20" width="96" height="40" rx="6" fill="#1E3A5F"/>${T(64, 40, "50 : 48", 18, "#F2B632")}`),
  "teens-learning-to-cook": scene("#FBE3DC", `<rect x="0" y="120" width="320" height="60" fill="#FFFDFA"/><rect x="0" y="116" width="320" height="8" fill="#A9B4C2"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${i * 40}" y="0" width="38" height="38" fill="#F7DDD4" stroke="#FBE3DC" stroke-width="2"/>`).join("")}
    <g transform="translate(110 108)"><rect x="-30" y="-24" width="60" height="30" rx="5" fill="#9AA6B8"/><rect x="-36" y="-28" width="72" height="8" rx="3" fill="#6E7A8C"/><path d="M-16 -36q4-8 0-14M0 -36q4-8 0-14M16 -36q4-8 0-14" stroke="#A9B4C2" stroke-width="2.5" fill="none"/></g>
    ${kP(220, 116, "#F3D1B3", "#1E3A5F", 1.55, "#1E1A18")}<path d="M206 76h28l2-14q-6-8-16-2q-10-6-16 2z" fill="#FFFDFA"/>
    <g transform="translate(270 140)"><ellipse rx="26" ry="8" fill="#FFFDFA" stroke="#C9D6E6" stroke-width="2"/><ellipse cy="-4" rx="18" ry="6" fill="#F2D49B"/><circle cx="-6" cy="-6" r="3" fill="#4FA88A"/><circle cx="6" cy="-6" r="3" fill="#E8846B"/></g>
    <path d="M286 20l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#E0B04A"/>`),
  "teens-a-day-at-the-mall": scene("#EDE6FA", `<rect x="0" y="130" width="320" height="50" fill="#D6DCE6"/>${[[20, "#E8846B"], [120, "#6FA8D6"], [220, "#4FA88A"]].map(([x, c]) => `<rect x="${x}" y="30" width="84" height="100" fill="#FFFDFA"/><rect x="${x}" y="30" width="84" height="18" fill="${c}"/><rect x="${x + 10}" y="58" width="64" height="62" fill="#DCEAF6" opacity=".7"/>`).join("")}
    ${kP(110, 164, "#F1C7A5", "#E8846B", 1.6, "#3A2A20")}${kP(160, 164, "#E7B48F", "#E0B04A", 1.5, "#5A3A2A")}
    <g transform="translate(210 140)"><rect x="-16" y="-20" width="32" height="28" rx="3" fill="#A98BE8"/><path d="M-8 -20q0-12 8-12t8 12" stroke="#1E3A5F" stroke-width="2.5" fill="none"/></g>
    <g transform="translate(262 150)"><rect x="-24" y="-30" width="48" height="36" rx="3" fill="#FFFDFA" stroke="#E8846B" stroke-width="3"/>${[[-16, -24, "#FCE3A6"], [0, -24, "#DCEAF6"], [-16, -10, "#E2F2EA"], [0, -10, "#FBE3DC"]].map(([x, y, c]) => `<rect x="${x}" y="${y}" width="14" height="11" fill="${c}"/>`).join("")}<path d="M18 -28l6 -6" stroke="#E8846B" stroke-width="3"/></g>`),
  "teens-my-first-concert": scene("#1E1A3A", `${[60, 160, 260].map((x, i) => `<path d="M${x} 0l-40 120h80z" fill="${["#E8846B", "#6FA8D6", "#A98BE8"][i]}" opacity=".22"/>`).join("")}<rect x="40" y="96" width="240" height="20" fill="#3A3460"/>
    ${kP(160, 94, "#F1C7A5", "#E8846B", 1.3, "#1E1A18")}<path d="M172 70v-14" stroke="#A9B4C2" stroke-width="3"/><circle cx="172" cy="54" r="4" fill="#A9B4C2"/>
    ${Array.from({ length: 13 }, (_, i) => `<circle cx="${10 + i * 25}" cy="${150 + (i % 2) * 6}" r="${11 + (i % 3)}" fill="#2A2650"/><rect x="${2 + i * 25}" y="${158 + (i % 2) * 6}" width="${16 + (i % 3)}" height="30" rx="6" fill="#2A2650"/>`).join("")}
    ${[[40, 126], [120, 120], [210, 124], [290, 118]].map(([x, y]) => `<path d="M${x} ${y + 20}l4 -22" stroke="#2A2650" stroke-width="6" stroke-linecap="round"/><rect x="${x + 1}" y="${y - 12}" width="8" height="12" rx="2" fill="#FCE3A6"/>`).join("")}
    ${kStars([[30, 30], [100, 20], [220, 26], [290, 40]], "#FCE3A6")}`, "#FFFFFF", .08),
  "teens-online-friends": scene("#DCEAF6", `<g transform="translate(160 92)"><circle r="56" fill="#6FA8D6"/><path d="M-36 -30q14-8 22 4t-6 22-12 20q-12-14-4-46z" fill="#7FB89E"/><path d="M8 -46q24 2 30 20t-16 14-14 20-10-24q-6-22 10-30z" fill="#7FB89E"/><path d="M20 26q16 0 18 12-10 8-20 4z" fill="#7FB89E"/></g>
    ${[[60, 50, "#F3D1B3", "#E8846B", "#1E1A18"], [262, 46, "#C98E6A", "#4FA88A", "#1E1A18"], [60, 140, "#F1C7A5", "#A98BE8", "#5A3A2A"], [262, 140, "#F7D7C4", "#E0B04A", "#C98A3A"]].map(([x, y, s, c, h]) => `<circle cx="${x}" cy="${y}" r="28" fill="#FFFDFA"/>${kP(x, y + 22, s, c, .95, h)}`).join("")}
    ${[[88, 54, 104, 70], [234, 52, 214, 68], [88, 136, 106, 120], [234, 136, 214, 120]].map(([a, b, c, d]) => `<path d="M${a} ${b}L${c} ${d}" stroke="#FFFDFA" stroke-width="3" stroke-dasharray="4 4"/>`).join("")}`),
  "teens-volunteer-day": scene("#E2F2EA", `${kGround("#B9D8A7", 136)}<rect x="210" y="60" width="90" height="80" fill="#F2D2C7"/><path d="M200 64l55-34 55 34" fill="#E8846B"/><rect x="236" y="96" width="34" height="44" fill="#A9774F"/>${T(255, 78, "♥", 16, "#E8846B")}
    ${kP(120, 156, "#E7B48F", "#6FA8D6", 1.6, "#1E1A18")}
    <g transform="translate(166 150)"><ellipse rx="22" ry="11" fill="#A9774F"/><circle cx="22" cy="-10" r="11" fill="#A9774F"/><path d="M16 -20q-4-10 4-6M28 -20q4-10-4-6" fill="#8A5A38" stroke="#8A5A38" stroke-width="4" stroke-linecap="round"/><circle cx="26" cy="-11" r="1.8" fill="#1E3A5F"/><circle cx="32" cy="-7" r="2.2" fill="#1E3A5F"/>${[-16, -6, 8, 16].map((x) => `<rect x="${x}" y="6" width="5" height="12" rx="2" fill="#8A5A38"/>`).join("")}<path d="M-22 -2q-8-6-6-14" stroke="#A9774F" stroke-width="4" fill="none" stroke-linecap="round"/></g>
    <path d="M134 128q16 6 34 10" stroke="#E8846B" stroke-width="2"/>${kTree(40, 116, 1)}`),
  "teens-the-art-class": scene("#FCEFD2", `<rect x="0" y="140" width="320" height="40" fill="#D9C7B0"/>
    <g transform="translate(100 100)"><path d="M-34 60l34-110 34 110" stroke="#A9774F" stroke-width="6" fill="none"/><rect x="-44" y="-56" width="88" height="70" rx="3" fill="#FFFDFA" stroke="#C9B7A0" stroke-width="2"/><path d="M-30 4q6-30 14-22t10-10 12 0 10 12 10 4" stroke="#1E3A5F" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M-26 -40q20-6 40 4" stroke="#E8846B" stroke-width="3" fill="none"/></g>
    ${kP(210, 160, "#F1C7A5", "#4FA88A", 1.65, "#5A3A2A")}<path d="M224 120l20 -20" stroke="#E0B04A" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(272 80)"><ellipse rx="28" ry="20" fill="#E8C7A8"/><circle cx="14" cy="8" r="6" fill="#FCEFD2"/>${[["#E8846B", -14, -6], ["#6FA8D6", -2, -10], ["#4FA88A", 10, -6], ["#E0B04A", -10, 6]].map(([c, x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`).join("")}</g>`),
  "teens-a-different-morning": scene("#FFF4DE", `${kSun(70, 50, 22)}<rect x="0" y="130" width="320" height="50" fill="#E8C7A8"/><rect x="120" y="96" width="180" height="10" rx="3" fill="#A9774F"/><rect x="140" y="106" width="8" height="40" fill="#A9774F"/><rect x="272" y="106" width="8" height="40" fill="#A9774F"/>
    <g transform="translate(160 84)"><rect x="-10" y="-12" width="20" height="16" rx="3" fill="#FFFDFA"/><path d="M10 -8q6 0 4 6" stroke="#FFFDFA" stroke-width="2.5" fill="none"/></g><g transform="translate(200 90)"><ellipse rx="20" ry="6" fill="#FFFDFA"/><ellipse cy="-2" rx="12" ry="4" fill="#F2B632"/></g>
    ${kP(250, 128, "#F1C7A5", "#1E3A5F", 1.4, "#3A2A20")}
    <g transform="translate(70 128)"><rect x="-26" y="-20" width="52" height="34" rx="4" fill="#FFFDFA"/>${tPhone(0, -2, .7)}<path d="M-14 -14q14-10 28 0" stroke="#A9B4C2" stroke-width="2" fill="none"/>${T(0, 22, "kitchen", 8, "#5B6787")}</g>`)
});

READINGS.push(
  /* ---------- A2 ---------- */
  {
    id: "teens-the-summer-job", level: "A2", stage: "teens", topic: "Work", title: "My First Summer Job",
    description: "Gael worked at an ice cream shop and learned more than he expected.",
    text: [
      "Last summer, I got my first job. I was sixteen, and I wanted to save money for a new laptop. My aunt’s friend owns an ice cream shop in San Pedro, and she needed help on weekends.",
      "The first day was harder than I expected. I had to learn the names of thirty flavors, use the cash register and smile at every customer, even the rude ones. At the end of the day, my arm hurt from scooping ice cream.",
      "Little by little, I got better. I learned to work fast when there was a long line, and I learned that being polite really makes a difference. Some customers came back every week and asked for me by name.",
      "My favorite part was the kids. They always took a long time to choose, and they always chose chocolate in the end.",
      "By the end of August, I had saved enough for my laptop. But I also learned something important: every job deserves respect. Now I always say thank you to people who serve me."
    ],
    vocab: [["flavor", "the taste of food, like chocolate or vanilla"], ["cash register", "a machine in a shop that holds money"], ["rude", "not polite"], ["scoop", "to take ice cream with a special spoon"], ["deserve", "to have earned something"]],
    questions: [
      ["Why did Gael want a job?", ["to save money for a laptop", "because he was bored", "to help his aunt"]],
      ["What was difficult on the first day?", ["learning flavors and using the cash register", "opening the shop", "making ice cream"]],
      ["Why did his arm hurt?", ["from scooping ice cream", "from carrying boxes", "from playing sports"]],
      ["What did the kids always choose?", ["chocolate", "vanilla", "strawberry"]],
      ["What important lesson did Gael learn?", ["Every job deserves respect.", "Work is always easy.", "Customers are always rude."]]
    ]
  },
  {
    id: "teens-weekend-in-cdmx", level: "A2", stage: "teens", topic: "Travel", title: "A Weekend in Mexico City",
    description: "Ana’s school trip to the capital was full of surprises.",
    text: [
      "In March, my class went on a three-day trip to Mexico City. It was my first time in the capital, and I was amazed by how big it is. More than twenty million people live in the metropolitan area!",
      "On the first day, we visited the Zócalo, the huge main square, and the Templo Mayor, an ancient Aztec temple that was discovered in 1978 by electricity workers. It’s incredible that it was hidden under the city for centuries.",
      "On the second day, we went to the National Museum of Anthropology. My favorite object was the Sun Stone, a giant stone calendar. In the afternoon, we took a boat called a trajinera in Xochimilco. There were mariachis on other boats, and we ate elotes on the water.",
      "On the last day, we visited the Frida Kahlo Museum, also called the Blue House. I didn’t know much about her before, but now I’m a fan.",
      "The trip was tiring, but I want to go back with my family soon."
    ],
    vocab: [["capital", "the city where a country’s government is"], ["metropolitan area", "a city and the towns around it"], ["square", "an open public place in a city"], ["ancient", "very, very old"], ["tiring", "making you tired"]],
    questions: [
      ["How long was the trip?", ["three days", "one week", "one day"]],
      ["Who discovered the Templo Mayor?", ["electricity workers", "archaeologists", "students"]],
      ["What was Ana’s favorite object in the museum?", ["the Sun Stone", "a painting by Frida", "a mask"]],
      ["What is a trajinera?", ["a boat in Xochimilco", "a type of food", "a museum"]],
      ["What is the Frida Kahlo Museum also called?", ["the Blue House", "the Red House", "the Sun House"]]
    ]
  },
  {
    id: "teens-the-food-truck", level: "A2", stage: "teens", topic: "Business", title: "The Food Truck Idea",
    description: "Three friends decide to start a small business at school.",
    text: [
      "In our entrepreneurship class, we had to create a small business and run it for one month. My friends Bruno, Alicia and I decided to sell food at the school’s Friday market.",
      "We didn’t have a real truck, of course. We decorated a table to look like a food truck and called it “The Hungry Owl.” Our product was simple: mini hot dogs with three different sauces.",
      "Before we started, we calculated our costs. Each hot dog cost us about eight pesos to make, so we decided to sell them for fifteen. Alicia designed a menu, Bruno was in charge of cooking and I managed the money.",
      "The first Friday was terrible. We made too many hot dogs and only sold twenty. The second week, we made fewer and offered a combo with a drink. We sold everything in forty minutes!",
      "At the end of the month, we had a profit of 1,350 pesos. We donated half to a local food bank and used the other half for a pizza party."
    ],
    vocab: [["entrepreneurship", "the activity of starting a business"], ["run a business", "to manage and operate a business"], ["costs", "the money you spend to make something"], ["in charge of", "responsible for"], ["profit", "the money you earn after paying costs"]],
    questions: [
      ["Why did the friends start a business?", ["It was a class project.", "They needed money.", "Their parents asked them."]],
      ["What was the name of their business?", ["The Hungry Owl", "The Food Truck", "Friday Dogs"]],
      ["What was the narrator’s job?", ["managing the money", "cooking", "designing the menu"]],
      ["What changed in the second week?", ["They made fewer hot dogs and offered a combo.", "They raised the price.", "They sold pizza."]],
      ["What did they do with the profit?", ["They donated half and had a pizza party.", "They bought a real truck.", "They gave it to the school."]]
    ]
  },
  {
    id: "teens-the-photography-club", level: "A2", stage: "teens", topic: "Art", title: "The Photography Club",
    description: "Renata learns to see her neighborhood with new eyes.",
    text: [
      "When I joined the photography club at school, I thought it would be easy. I had a good phone camera and I took photos every day. But our teacher, Ms. Treviño, gave us a strange first assignment: “Take fifty photos of your street. No people, no selfies.”",
      "I thought my street was boring. There are just houses, a small store and some trees. But I went out with my phone and started looking carefully.",
      "I noticed things I had never seen before: the shadows of the leaves on a yellow wall, a cat sleeping in a flowerpot, the old painted sign of the store and the way the light changes at six in the evening.",
      "In the next class, Ms. Treviño showed some of our photos on the screen. When she showed my picture of the cat, everyone said, “Wow!”",
      "She explained that good photography is not about expensive cameras. It’s about paying attention.",
      "Now, when I walk anywhere, I look at the world differently."
    ],
    vocab: [["assignment", "a piece of work a teacher gives you"], ["notice", "to see or become aware of something"], ["flowerpot", "a container for plants"], ["sign", "a board with words on it"], ["pay attention", "to watch or listen carefully"]],
    questions: [
      ["What was the first assignment?", ["Take fifty photos of your street.", "Take fifty selfies.", "Photograph your family."]],
      ["What did Renata think about her street at first?", ["It was boring.", "It was beautiful.", "It was dangerous."]],
      ["Which photo impressed everyone?", ["the cat sleeping in a flowerpot", "the yellow wall", "the store sign"]],
      ["According to Ms. Treviño, what is good photography about?", ["paying attention", "having an expensive camera", "taking many selfies"]],
      ["How has Renata changed?", ["She looks at the world differently.", "She stopped taking photos.", "She bought a new camera."]]
    ]
  },
  {
    id: "teens-the-lost-phone", level: "A2", stage: "teens", topic: "Technology", title: "Twenty-Four Hours Without My Phone",
    description: "Emilio lost his phone on the bus. The next day was… interesting.",
    text: [
      "On Tuesday afternoon, I left my phone on the bus. When I realized it, the bus was already gone. My mom called the bus company, and they said someone could bring it to their office the next day.",
      "That evening, I felt strange. I kept putting my hand in my pocket. I didn’t know what time it was, and I couldn’t check messages. I felt disconnected from everything.",
      "So I did things I usually don’t do. I helped my dad fix a chair. I played chess with my little sister, and she beat me twice. I went to bed early and actually slept well.",
      "The next morning at school, I talked more with my classmates during the break, because I wasn’t looking at a screen. I even talked to a guy from my class I had never spoken to before. He likes the same video games as me!",
      "In the afternoon, I got my phone back. I had forty-three notifications, but honestly, none of them were important.",
      "I’m not saying phones are bad. But that day showed me how much I was missing."
    ],
    vocab: [["realize", "to suddenly understand something"], ["disconnected", "not connected or in contact"], ["beat", "to win against someone"], ["classmate", "a person in your class"], ["notification", "a message or alert on your phone"]],
    questions: [
      ["Where did Emilio lose his phone?", ["on the bus", "at school", "at the park"]],
      ["How did he feel that evening?", ["disconnected", "relaxed", "excited"]],
      ["What happened when he played chess?", ["His sister beat him twice.", "He won every game.", "His dad helped him."]],
      ["What happened at school the next day?", ["He talked to a new classmate.", "He was late.", "He got his phone back."]],
      ["What did he think about his notifications?", ["None of them were important.", "They were all urgent.", "He couldn’t read them."]]
    ]
  },

  /* ---------- A2+ ---------- */
  {
    id: "teens-is-esports-a-sport", level: "A2+", stage: "teens", topic: "Technology", title: "Is Esports a Real Sport?",
    description: "Millions of people watch professional gamers. But are they athletes?",
    text: [
      "Esports, or electronic sports, are competitive video game tournaments. Today, they are a huge industry. The biggest events fill stadiums, millions of fans watch online, and top players can win prizes worth millions of dollars.",
      "But many people ask the same question: is esports a real sport?",
      "People who say yes point to the training. Professional players often practice eight to ten hours a day. They study strategy, analyze their opponents and work with coaches, nutritionists and even psychologists. Their reaction times are incredibly fast, and they must make hundreds of decisions per minute under pressure.",
      "People who say no argue that sports require physical effort. A soccer player runs about ten kilometers in a game, while a gamer sits in a chair. They also worry that spending so many hours in front of a screen is not healthy.",
      "Some organizations have made their decision. Esports were included as a medal event at the 2022 Asian Games, and many universities now offer esports scholarships.",
      "Maybe the answer depends on how we define “sport.” What do you think?"
    ],
    vocab: [["tournament", "a competition with many games"], ["opponent", "the person or team you play against"], ["under pressure", "in a stressful situation"], ["argue", "to give reasons for an opinion"], ["scholarship", "money given to a student to pay for studies"]],
    questions: [
      ["What are esports?", ["competitive video game tournaments", "sports played outside", "online fitness classes"]],
      ["How long do professional players often practice?", ["eight to ten hours a day", "one hour a day", "only on weekends"]],
      ["What is one argument against esports being a sport?", ["Sports require physical effort.", "Esports are too expensive.", "Esports are too new."]],
      ["Where were esports a medal event?", ["at the 2022 Asian Games", "at the 2020 Olympics", "at the World Cup"]],
      ["What does the writer suggest at the end?", ["The answer depends on how we define sport.", "Esports are definitely not a sport.", "Esports are better than soccer."]]
    ]
  },
  {
    id: "teens-the-exchange-student", level: "A2+", stage: "teens", topic: "Culture", title: "The Exchange Student",
    description: "Clara from Germany spends a semester with a family in Monterrey.",
    text: [
      "When my parents told me that a German exchange student was going to live with us for five months, I was nervous. What if we didn’t get along? What if she didn’t like Mexican food?",
      "Clara arrived in August. She was sixteen, like me, very tall and a little shy. Her Spanish was basic, so at first we spoke a mix of English and Spanish, with a lot of gestures.",
      "Some things surprised her. She couldn’t believe how late we eat dinner, sometimes at nine or ten at night. In Germany, her family eats at six. She was also surprised that people greet each other with a kiss on the cheek, even people they just met.",
      "Some things surprised me, too. Clara was always on time, exactly on time. If we said “at four,” she was ready at 3:59. And she taught me that in Germany, students often go to school by bike, even when it’s cold.",
      "By December, her Spanish was excellent, and she loved tacos al pastor more than I do. When she left, we all cried at the airport.",
      "This summer, I’m going to visit her in Hamburg."
    ],
    vocab: [["exchange student", "a student who lives and studies in another country for a time"], ["get along", "to have a good relationship"], ["shy", "nervous about talking to new people"], ["gesture", "a movement of the hands to communicate"], ["greet", "to say hello"]],
    questions: [
      ["Why was the narrator nervous at first?", ["She worried they wouldn’t get along.", "She didn’t speak German.", "Clara was older."]],
      ["How did they communicate at first?", ["a mix of English and Spanish with gestures", "only German", "only Spanish"]],
      ["What surprised Clara about dinner?", ["Mexicans eat dinner very late.", "The food was very spicy.", "Everyone eats alone."]],
      ["What surprised the narrator about Clara?", ["She was always exactly on time.", "She didn’t like tacos.", "She spoke perfect Spanish."]],
      ["What is the narrator going to do this summer?", ["visit Clara in Hamburg", "host another student", "study German in Mexico"]]
    ]
  },
  {
    id: "teens-learning-languages-online", level: "A2+", stage: "teens", topic: "Education", title: "How I Learned Japanese Online",
    description: "Sebastián taught himself a new language with free tools and a lot of patience.",
    text: [
      "Two years ago, I became obsessed with Japanese anime. At first, I watched everything with Spanish subtitles. Then I started to wonder: what if I could understand it without them?",
      "I didn’t have money for classes, so I decided to learn on my own. I started with a free app for twenty minutes every day. The first challenge was the writing. Japanese uses three different writing systems: hiragana, katakana and kanji. It took me two months just to learn the first two.",
      "I also found other free resources: a YouTube channel with grammar lessons, podcasts for beginners and an online community where Japanese people practice Spanish and Mexicans practice Japanese. I had my first video call with a girl from Osaka. I was so nervous that I forgot how to say “hello.”",
      "The most important thing I learned is that consistency is more important than talent. Twenty minutes every day is better than three hours once a week.",
      "Last month, I watched a full episode without subtitles and understood most of it. It was one of the best moments of my life.",
      "My next goal is to pass a beginner Japanese exam."
    ],
    vocab: [["obsessed", "thinking about something all the time"], ["subtitles", "words at the bottom of a screen that translate speech"], ["on my own", "alone, without help"], ["resource", "something useful to help you learn"], ["consistency", "doing something regularly in the same way"]],
    questions: [
      ["Why did Sebastián start learning Japanese?", ["He loved anime.", "He moved to Japan.", "His school offered classes."]],
      ["Why didn’t he take classes?", ["He didn’t have money.", "There were no classes.", "He didn’t have time."]],
      ["What was the first challenge?", ["the writing systems", "the pronunciation", "finding an app"]],
      ["What happened in his first video call?", ["He forgot how to say hello.", "He spoke perfectly.", "The call didn’t work."]],
      ["What does he say is more important than talent?", ["consistency", "money", "a good teacher"]]
    ]
  },
  {
    id: "teens-climbing-potrero-chico", level: "A2+", stage: "teens", topic: "Sports", title: "Climbing at El Potrero Chico",
    description: "Near Monterrey, there is a place that climbers from around the world dream of visiting.",
    text: [
      "About forty-five minutes from Monterrey, near the town of Hidalgo, there are enormous limestone walls that rise hundreds of meters into the sky. This place is called El Potrero Chico, and it is one of the most famous rock climbing destinations in the world.",
      "Every winter, from November to March, climbers arrive from the United States, Canada, Europe and beyond. They come for the excellent rock, the dry weather and the long routes. Some routes are more than five hundred meters tall and take a full day to climb.",
      "My cousin Mariana is a climbing instructor there, and last December she took me for my first climb. Before we started, she checked my harness, helmet and ropes very carefully. “Safety first, always,” she said.",
      "My route was only twenty meters, but halfway up I looked down and my legs started shaking. Mariana shouted from below: “Don’t look down. Look for the next hold.” I took a deep breath and kept going.",
      "When I reached the top, the view of the mountains was incredible.",
      "Climbing taught me that big challenges become possible when you focus on one small step at a time."
    ],
    vocab: [["limestone", "a type of light-colored rock"], ["destination", "the place where you are going"], ["route", "a path; in climbing, a specific way up the rock"], ["harness", "straps you wear to attach yourself to a rope"], ["hold", "a part of the rock you can grab or stand on"]],
    questions: [
      ["How far is El Potrero Chico from Monterrey?", ["about forty-five minutes", "about five hours", "about ten minutes"]],
      ["When do most climbers visit?", ["from November to March", "in summer", "all year equally"]],
      ["Who is Mariana?", ["the narrator’s cousin and a climbing instructor", "a famous climber from Canada", "the narrator’s teacher at school"]],
      ["What happened halfway up the route?", ["The narrator’s legs started shaking.", "The rope broke.", "It started to rain."]],
      ["What lesson did climbing teach the narrator?", ["Focus on one small step at a time.", "Never try difficult things.", "Always climb alone."]]
    ]
  },
  {
    id: "teens-fast-fashion", level: "A2+", stage: "teens", topic: "Environment", title: "The Real Cost of a Cheap T-Shirt",
    description: "That T-shirt was cheap in the store. But who really paid for it?",
    text: [
      "Today, it is possible to buy a T-shirt for less than one hundred pesos. Stores change their collections every few weeks, so there is always something new. This system is called fast fashion.",
      "Fast fashion is convenient, but it has hidden costs. Producing clothes uses enormous amounts of water. According to some estimates, making a single cotton T-shirt can require about 2,700 liters of water, enough for one person to drink for more than two years.",
      "There is also the problem of waste. Because clothes are so cheap, people often wear them only a few times before throwing them away. Huge amounts of textiles end up in landfills, and many synthetic fabrics take hundreds of years to break down.",
      "Finally, many of the workers who make these clothes earn very low salaries and work long hours in difficult conditions.",
      "So what can teenagers do? You don’t have to stop buying clothes. But you can buy less and choose better quality, swap clothes with friends, shop at second-hand stores or learn to repair a small hole instead of throwing something away.",
      "The most sustainable T-shirt is the one you already have."
    ],
    vocab: [["collection", "a group of new clothes a store sells"], ["convenient", "easy and useful"], ["landfill", "a place where trash is buried"], ["swap", "to exchange one thing for another"], ["sustainable", "not harmful to the environment over time"]],
    questions: [
      ["What is fast fashion?", ["cheap clothes with collections that change often", "clothes for running", "expensive designer clothes"]],
      ["How much water can one cotton T-shirt require?", ["about 2,700 liters", "about 27 liters", "about 270,000 liters"]],
      ["Why do people throw away cheap clothes quickly?", ["They are cheap, so people wear them only a few times.", "They are too big.", "They are dangerous."]],
      ["Which is NOT suggested in the text?", ["buying a new T-shirt every week", "swapping clothes with friends", "shopping at second-hand stores"]],
      ["What does the last sentence mean?", ["Keeping and using what you have is best.", "You should buy a new T-shirt.", "T-shirts are not sustainable."]]
    ]
  }
);

Object.assign(READING_ART, {
  "teens-the-summer-job": scene("#FBE3DC", `<rect x="0" y="0" width="320" height="34" fill="#F7B3C2"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${i * 40} 34q20 16 40 0" fill="${i % 2 ? "#FFFDFA" : "#F7B3C2"}"/>`).join("")}
    <rect x="30" y="106" width="260" height="74" fill="#FFFDFA"/><rect x="30" y="100" width="260" height="10" fill="#E8846B"/><rect x="40" y="114" width="240" height="30" fill="#DCEAF6" opacity=".8"/>${["#F7B3C2", "#FCE3A6", "#8A5A38", "#9FCB8A", "#FFFDFA", "#A98BE8"].map((c, i) => `<ellipse cx="${62 + i * 40}" cy="132" rx="15" ry="8" fill="${c}" stroke="#E5D8C4"/>`).join("")}
    ${kP(160, 100, "#C98E6A", "#FFFDFA", 1.5, "#1E1A18")}<rect x="146" y="50" width="28" height="6" rx="2" fill="#E8846B"/>
    <g transform="translate(250 72)"><path d="M-10 0l10 28 10-28z" fill="#D9A46A"/><circle cx="0" cy="-6" r="11" fill="#8A5A38"/><circle cx="0" cy="-16" r="8" fill="#F7B3C2"/><circle cx="0" cy="-26" r="3" fill="#B23A48"/></g>`),
  "teens-weekend-in-cdmx": scene("#DCEAF6", `<rect x="0" y="136" width="320" height="44" fill="#C9B7A0"/>
    <g transform="translate(90 136)"><rect x="-56" y="-60" width="112" height="60" fill="#E5D8C4"/><path d="M-62 -60h124l-10-14h-104z" fill="#D6C6AE"/>${[-40, -20, 0, 20, 40].map((x) => `<rect x="${x - 4}" y="-52" width="8" height="52" fill="#FFFDFA"/>`).join("")}<rect x="-6" y="-90" width="12" height="16" fill="#C9B7A0"/><circle cx="0" cy="-94" r="6" fill="#C9B7A0"/></g>
    <rect x="210" y="40" width="4" height="96" fill="#8A9BB4"/><path d="M214 40h56v20h-18v18h-20v-18h-18z" fill="#3A9A5B"/><rect x="232" y="40" width="20" height="38" fill="#FFFDFA"/><path d="M252 40h18v38h-18z" fill="#D8343A"/><circle cx="242" cy="58" r="5" fill="#C9902F"/>
    <g transform="translate(250 160)"><path d="M-40 -6h80l-8 12h-64z" fill="#E8846B"/><path d="M-34 -6v-18h68v18" fill="none" stroke="#E0B04A" stroke-width="3"/>${["#E0B04A", "#4FA88A", "#6FA8D6", "#A98BE8"].map((c, i) => `<rect x="${-30 + i * 16}" y="-28" width="12" height="6" fill="${c}"/>`).join("")}</g>`),
  "teens-the-food-truck": scene("#E2F2EA", `${kGround("#B9D8A7", 140)}
    <g transform="translate(160 120)"><rect x="-96" y="-60" width="192" height="76" rx="10" fill="#E0B04A"/><rect x="-80" y="-48" width="110" height="38" rx="4" fill="#FFFDFA"/><rect x="40" y="-48" width="42" height="56" rx="4" fill="#9AB8D6"/>${T(-25, -29, "The Hungry Owl", 11, "#1E3A5F")}<path d="M-96 -16h136" stroke="#E8846B" stroke-width="5"/><circle cx="-56" cy="18" r="14" fill="#1E3A5F"/><circle cx="56" cy="18" r="14" fill="#1E3A5F"/><circle cx="-56" cy="18" r="5" fill="#A9B4C2"/><circle cx="56" cy="18" r="5" fill="#A9B4C2"/>
      <g transform="translate(-25 -76)"><ellipse rx="16" ry="14" fill="#A9774F"/><circle cx="-6" cy="-2" r="5" fill="#FFFDFA"/><circle cx="6" cy="-2" r="5" fill="#FFFDFA"/><circle cx="-6" cy="-2" r="2.4" fill="#1E3A5F"/><circle cx="6" cy="-2" r="2.4" fill="#1E3A5F"/><path d="M-3 4l3 4 3-4z" fill="#E0B04A"/><path d="M-14 -10l-2-8 8 4M14 -10l2-8-8 4" fill="#A9774F"/></g></g>
    <g transform="translate(270 50)"><rect x="-26" y="-8" width="52" height="16" rx="8" fill="#F2D49B"/><rect x="-22" y="-4" width="44" height="8" rx="4" fill="#C9583A"/><path d="M-18 -4q6-4 10 0t10 0 10 0" stroke="#E0B04A" stroke-width="2" fill="none"/></g>`),
  "teens-the-photography-club": scene("#FCEFD2", `<rect x="0" y="0" width="320" height="140" fill="#F2D49B"/>${[[30, 30], [80, 50], [140, 26], [200, 44], [260, 24]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="20" ry="9" fill="#C9A86A" opacity=".5" transform="rotate(-20 ${x} ${y})"/>`).join("")}<rect x="0" y="140" width="320" height="40" fill="#C9B7A0"/>
    <g transform="translate(70 140)"><path d="M-22 0l-6-30h56l-6 30z" fill="#E8846B"/><ellipse cx="0" cy="-34" rx="22" ry="12" fill="#9AA6B8"/><circle cx="-16" cy="-40" r="8" fill="#9AA6B8"/><path d="M-20 -46l2-6 3 5zM-13 -46l1-6 3 5z" fill="#9AA6B8"/><path d="M-20 -40h6" stroke="#1E3A5F" stroke-width="1.5"/><path d="M22 -36q12 -4 8 -14" stroke="#9AA6B8" stroke-width="5" fill="none"/></g>
    <g transform="translate(210 96)"><rect x="-56" y="-38" width="112" height="76" rx="12" fill="#1E3A5F"/><circle r="26" fill="#3E6A93"/><circle r="17" fill="#14213D"/><circle cx="-6" cy="-6" r="5" fill="#9AB8D6"/><rect x="28" y="-48" width="22" height="12" rx="3" fill="#1E3A5F"/><circle cx="-40" cy="-24" r="5" fill="#E8846B"/></g>`),
  "teens-the-lost-phone": scene("#EEF0FB", `<rect x="0" y="130" width="320" height="50" fill="#E8C7A8"/>
    <g transform="translate(100 128)"><rect x="-50" y="-6" width="100" height="6" fill="#A9774F"/><rect x="-46" y="-50" width="92" height="44" fill="#FFFDFA" stroke="#C9B7A0"/>${Array.from({ length: 8 }, (_, i) => Array.from({ length: 4 }, (_, j) => (i + j) % 2 ? `<rect x="${-46 + i * 11.5}" y="${-50 + j * 11}" width="11.5" height="11" fill="#1E3A5F" opacity=".75"/>` : "").join("")).join("")}
      <g transform="translate(-20 -58)"><rect x="-4" y="-12" width="8" height="12" fill="#FFFDFA"/><circle cy="-15" r="5" fill="#FFFDFA"/><path d="M-6 -20h12" stroke="#FFFDFA" stroke-width="2"/></g><g transform="translate(22 -58)"><rect x="-4" y="-12" width="8" height="12" fill="#1E3A5F"/><circle cy="-15" r="5" fill="#1E3A5F"/></g></g>
    ${kP(48, 162, "#F1C7A5", "#6FA8D6", 1.55, "#3A2A20")}${kP(154, 162, "#F1C7A5", "#F7B3C2", 1.1, "#5A3A2A")}
    <g transform="translate(250 70)"><circle r="40" fill="#FFFDFA"/>${tPhone(0, 0, 1.4)}<path d="M-28 28l56-56" stroke="#E8846B" stroke-width="5" stroke-linecap="round"/><circle cx="20" cy="-22" r="10" fill="#E8846B"/>${T(20, -22, "43", 8, "#FFFDFA")}</g>`),
  "teens-is-esports-a-sport": scene("#1E1A3A", `${[40, 280].map((x) => `<path d="M${x} 0l-30 110h60z" fill="#6FA8D6" opacity=".15"/>`).join("")}
    <rect x="70" y="30" width="180" height="96" rx="6" fill="#2A2650" stroke="#A98BE8" stroke-width="3"/><rect x="80" y="40" width="160" height="76" fill="#3E6A93"/><path d="M80 100l40-30 30 20 40-40 50 40v26H80z" fill="#4FA88A" opacity=".7"/>${T(160, 56, "FINAL", 14, "#F2B632")}
    ${[100, 220].map((x, i) => `${kP(x, 172, i ? "#C98E6A" : "#F3D1B3", i ? "#E8846B" : "#6FA8D6", 1.3, "#1E1A18")}<path d="M${x - 11} 132q11-14 22 0" stroke="#A9B4C2" stroke-width="4" fill="none"/>`).join("")}
    <g transform="translate(160 150)"><rect x="-24" y="-8" width="48" height="18" rx="9" fill="#A98BE8"/><circle cx="-12" cy="1" r="3" fill="#FFFDFA"/><circle cx="12" cy="1" r="3" fill="#FFFDFA"/></g>
    <g transform="translate(160 14)"><path d="M-10 -4h20v6q0 10-10 10t-10-10z" fill="#F2B632"/><rect x="-3" y="12" width="6" height="6" fill="#F2B632"/></g>`, "#FFFFFF", .08),
  "teens-the-exchange-student": scene("#E3EEF9", `<rect x="0" y="130" width="320" height="50" fill="#C9D6E6"/><rect x="0" y="20" width="320" height="70" fill="#FFFDFA" opacity=".5"/>${[40, 120, 200, 280].map((x) => `<rect x="${x - 30}" y="24" width="56" height="62" fill="#BFDDF2" opacity=".7"/>`).join("")}
    <g transform="translate(80 54)"><rect x="-30" y="-18" width="60" height="36" fill="#1E1E1E"/><rect x="-30" y="-6" width="60" height="12" fill="#D8343A"/><rect x="-30" y="6" width="60" height="12" fill="#F2B632"/></g>
    <g transform="translate(240 54)"><rect x="-30" y="-18" width="20" height="36" fill="#3A9A5B"/><rect x="-10" y="-18" width="20" height="36" fill="#FFFDFA"/><rect x="10" y="-18" width="20" height="36" fill="#D8343A"/><circle cx="0" cy="0" r="5" fill="#C9902F"/></g>
    <path d="M110 54h100" stroke="#E8846B" stroke-width="3" stroke-dasharray="6 6"/><path d="M200 46l12 8-12 8" fill="none" stroke="#E8846B" stroke-width="3"/>
    ${kP(130, 166, "#F7D7C4", "#6FA8D6", 1.8, "#E0B04A")}${kP(190, 166, "#C98E6A", "#E8846B", 1.6, "#1E1A18")}<rect x="96" y="138" width="20" height="24" rx="3" fill="#A98BE8"/>`),
  "teens-learning-languages-online": scene("#FBE3DC", `<g transform="translate(130 96)"><rect x="-84" y="-58" width="168" height="104" rx="8" fill="#1E3A5F"/><rect x="-76" y="-50" width="152" height="86" rx="3" fill="#FFFDFA"/><rect x="-100" y="46" width="200" height="8" rx="4" fill="#A9B4C2"/>
      <rect x="-68" y="-42" width="64" height="70" rx="4" fill="#DCEAF6"/>${kP(-36, 18, "#F3D1B3", "#E8846B", 1, "#1E1A18")}<rect x="4" y="-42" width="64" height="70" rx="4" fill="#E2F2EA"/>${kP(36, 18, "#C98E6A", "#6FA8D6", 1, "#1E1A18")}</g>
    <g transform="translate(266 50)"><rect x="-34" y="-22" width="68" height="44" rx="12" fill="#FFFDFA"/><path d="M-6 22l6 10 6-10z" fill="#FFFDFA"/>${T(0, 0, "こんにちは", 11, "#E8846B")}</g>
    <g transform="translate(266 128)"><rect x="-34" y="-20" width="68" height="40" rx="12" fill="#E8846B"/><path d="M-6 -20l6-10 6 10z" fill="#E8846B"/>${T(0, 0, "¡Hola!", 13, "#FFFDFA")}</g>`),
  "teens-climbing-potrero-chico": scene("#DCEAF6", `${kSun(280, 30, 16)}<path d="M0 180V60l30-40 30 30 20-50 40 60 30-30 30 40 20-20v190z" fill="#C9B79C"/><path d="M200 180V40l40-30 30 50 50-30v150z" fill="#B8A486"/>${[[40, 70], [70, 100], [110, 60], [150, 120], [230, 80], [270, 120]].map(([x, y]) => `<path d="M${x} ${y}l10 -6 6 10" stroke="#A99577" stroke-width="2" fill="none"/>`).join("")}
    <path d="M226 10v120" stroke="#E8846B" stroke-width="2.5"/>
    <g transform="translate(226 96) rotate(-10)"><circle cx="0" cy="-26" r="10" fill="#C98E6A"/><path d="M-11 -30a11 11 0 0 1 22 0z" fill="#E0B04A"/><rect x="-9" y="-16" width="18" height="24" rx="7" fill="#4FA88A"/><rect x="-10" y="6" width="20" height="6" fill="#E8846B"/><path d="M-9 -12l-12 -16M9 -12l12 -10M-6 10l-8 18M6 10l10 14" stroke="#C98E6A" stroke-width="5" stroke-linecap="round"/></g>
    ${kP(260, 176, "#F1C7A5", "#E8846B", 1.3, "#3A2A20")}`),
  "teens-fast-fashion": scene("#EDE6FA", `<path d="M20 30h280" stroke="#A9B4C2" stroke-width="4"/>${["#E8846B", "#6FA8D6", "#E0B04A", "#4FA88A", "#F7B3C2"].map((c, i) => `<g transform="translate(${50 + i * 56} 40)"><path d="M0 -10q0-6 6-6" stroke="#6E7A8C" stroke-width="2" fill="none"/><path d="M-20 0l10-6h20l10 6 8 14-10 4-6-8v40h-24v-40l-6 8-10-4z" fill="${c}"/>${T(0, 26, "$", 12, "#FFFDFA")}</g>`).join("")}
    <g transform="translate(110 148)"><path d="M-40 20l-10-30h100l-10 30z" fill="#6E7A8C"/>${["#E8846B", "#6FA8D6", "#E0B04A", "#A98BE8"].map((c, i) => `<path d="M${-36 + i * 20} -10q10-14 20 0" fill="${c}"/>`).join("")}</g>
    <g transform="translate(240 140)"><path d="M0 -28q14 22 0 30q-14-8 0-30z" fill="#6FA8D6"/>${T(0, 14, "2,700 L", 10, "#1E3A5F")}</g>`)
});

READINGS.push(
  /* ---------- B1 ---------- */
  {
    id: "teens-why-teens-are-tired", level: "B1", stage: "teens", topic: "Science", title: "Why Are Teenagers Always Tired?",
    description: "It’s not laziness. Your body clock really does change in adolescence.",
    text: [
      "Many parents complain that their teenage children stay up too late and can’t get out of bed in the morning. They often think it’s a question of discipline. However, science suggests that biology plays a major role.",
      "Our sleep is controlled partly by a hormone called melatonin, which tells the body that it’s time to sleep. In children and adults, the body usually starts producing melatonin around nine or ten at night. During adolescence, this process shifts by up to two hours. As a result, many teenagers genuinely don’t feel sleepy until eleven or even midnight.",
      "The problem is that school still starts early. A teenager who falls asleep at midnight and wakes up at six gets only six hours of sleep, while experts recommend between eight and ten hours for this age group.",
      "Chronic lack of sleep can affect concentration, memory, mood and even the immune system. Some studies have also linked it to a higher risk of accidents.",
      "Because of this research, some schools in other countries have moved their start times later, and many of them reported better attendance and grades.",
      "Teenagers can help themselves, too: getting sunlight in the morning, avoiding bright screens late at night and keeping a regular schedule, even on weekends, can make a real difference."
    ],
    vocab: [["discipline", "the ability to control your behavior"], ["melatonin", "a hormone that helps you sleep"], ["shift", "to move or change position"], ["chronic", "lasting for a long time"], ["attendance", "being present at school or an event"]],
    questions: [
      ["What do many parents think causes teenagers’ sleep problems?", ["a lack of discipline", "too much homework", "bad food"]],
      ["What happens to melatonin during adolescence?", ["Its production shifts later by up to two hours.", "The body stops producing it.", "It is produced earlier."]],
      ["How many hours of sleep do experts recommend for teenagers?", ["between eight and ten", "about six", "more than twelve"]],
      ["What did some schools report after starting later?", ["better attendance and grades", "more accidents", "no change"]],
      ["Which tip is mentioned in the text?", ["getting sunlight in the morning", "sleeping late on weekends", "drinking coffee at night"]]
    ]
  },
  {
    id: "teens-why-we-procrastinate", level: "B1", stage: "teens", topic: "Psychology", title: "Why Do We Procrastinate?",
    description: "Putting things off isn’t about being lazy. It’s about feelings.",
    text: [
      "You have a project due on Friday. It’s Monday, and you have plenty of time. But instead of starting, you watch a few videos, tidy your desk, check your messages… and suddenly it’s Thursday night.",
      "This is procrastination, and almost everyone does it. For a long time, people believed it was simply a problem of laziness or bad time management. Today, many psychologists see it differently. They describe procrastination as a problem of emotion regulation.",
      "In other words, we don’t avoid tasks because we are lazy. We avoid them because they make us feel something unpleasant: boredom, confusion, fear of failure or the pressure to be perfect. Putting the task off gives us immediate relief. The problem is that the relief is temporary, and the stress grows later.",
      "So what helps? One strategy is to make the first step ridiculously small. Instead of “write my essay,” the task becomes “write the title.” Once we start, it’s usually easier to continue.",
      "Another strategy is to be kind to yourself. Research has found that students who forgave themselves for procrastinating on one exam procrastinated less on the next one.",
      "Finally, remove distractions. Putting your phone in another room for twenty-five minutes can be surprisingly effective."
    ],
    vocab: [["procrastinate", "to delay doing something you should do"], ["tidy", "to make a place neat and organized"], ["regulation", "control"], ["relief", "a good feeling when stress or worry ends"], ["distraction", "something that takes your attention away"]],
    questions: [
      ["How do many psychologists describe procrastination today?", ["as a problem of emotion regulation", "as simple laziness", "as a medical illness"]],
      ["Why do we avoid tasks, according to the text?", ["They make us feel something unpleasant.", "We don’t have time.", "They are always too easy."]],
      ["What is the problem with the relief of putting a task off?", ["It is temporary, and stress grows later.", "It never comes.", "It makes us sleepy."]],
      ["What does “make the first step ridiculously small” mean?", ["Start with a tiny, easy action.", "Do the hardest part first.", "Skip the first step."]],
      ["What did research find about students who forgave themselves?", ["They procrastinated less next time.", "They got worse grades.", "They stopped studying."]]
    ]
  },
  {
    id: "teens-frida-kahlo", level: "B1", stage: "teens", topic: "Art", title: "Frida Kahlo: Painting Her Own Reality",
    description: "How a bus accident changed the life of one of Mexico’s most famous artists.",
    text: [
      "Frida Kahlo is one of the most recognized artists in the world, but she never planned to become a painter. As a teenager in Mexico City, she wanted to study medicine.",
      "In 1925, when she was eighteen, the bus she was traveling on collided with a streetcar. Frida suffered terrible injuries to her spine, pelvis and leg. She spent months in bed, wearing a full-body cast. To help her pass the time, her mother had a special easel made so she could paint lying down, and her father lent her his paints. A mirror was placed above her bed.",
      "Looking at her own face every day, Frida began painting self-portraits. Over her life, she created around 150 paintings, and more than a third of them are self-portraits. “I paint myself because I am so often alone,” she once said.",
      "Her work is famous for its bright colors, Mexican traditions and honest representation of pain, identity and the female body. She often wore traditional Tehuana dresses, proudly expressing her Mexican identity.",
      "During her life, Frida was often seen mainly as the wife of the muralist Diego Rivera. Today, her reputation is enormous. Her house in Coyoacán, the Blue House, is one of the most visited museums in Mexico."
    ],
    vocab: [["collide", "to hit something while moving"], ["injury", "physical damage to the body"], ["cast", "a hard cover that protects a broken bone"], ["easel", "a stand that holds a painting"], ["self-portrait", "a picture an artist makes of themselves"]],
    questions: [
      ["What did Frida originally want to study?", ["medicine", "art", "history"]],
      ["How old was she when she had the accident?", ["eighteen", "twelve", "thirty"]],
      ["Why was a mirror placed above her bed?", ["so she could paint herself", "to make the room brighter", "so she could see the street"]],
      ["About what fraction of her paintings are self-portraits?", ["more than a third", "about a tenth", "all of them"]],
      ["How was Frida often seen during her life?", ["mainly as Diego Rivera’s wife", "as the most famous painter in the world", "as a doctor"]]
    ]
  },
  {
    id: "teens-music-and-mood", level: "B1", stage: "teens", topic: "Science", title: "How Music Changes Your Brain",
    description: "Why does a song give you goosebumps? Science has some answers.",
    text: [
      "Have you ever felt a shiver down your spine when listening to a song? About half of people experience these musical “chills.” Scientists have discovered that they are connected to dopamine, a chemical that the brain releases when we experience something pleasurable, like eating delicious food.",
      "Interestingly, studies using brain scans have shown that dopamine is released not only at the most emotional moment of a song, but also in the seconds before it, while we are anticipating it. In other words, part of the pleasure of music comes from prediction.",
      "Music can also affect our bodies. Fast music tends to increase heart rate, while slow music can help people relax. That’s why many athletes use energetic playlists before competitions, and why some hospitals play calm music to reduce patients’ anxiety.",
      "What about studying with music? The answer depends on the person and the task. Instrumental music may help some people concentrate, but songs with lyrics can interfere with reading or writing, because the brain tries to process both sets of words at once.",
      "Finally, learning to play an instrument seems to be good for the brain. It involves memory, coordination, hearing and emotion all at the same time. So if you’ve been thinking about learning the guitar, there’s a scientific reason to start."
    ],
    vocab: [["shiver", "a sudden shaking of the body"], ["dopamine", "a brain chemical connected to pleasure"], ["anticipate", "to expect something that is going to happen"], ["heart rate", "how fast your heart beats"], ["lyrics", "the words of a song"]],
    questions: [
      ["What are musical “chills” connected to?", ["dopamine", "melatonin", "adrenaline"]],
      ["When is dopamine also released?", ["while we anticipate an emotional moment", "only after the song ends", "only during sad songs"]],
      ["Why do hospitals sometimes play calm music?", ["to reduce patients’ anxiety", "to entertain doctors", "to cover noise"]],
      ["Why can songs with lyrics interfere with studying?", ["The brain processes both sets of words at once.", "They are too loud.", "They make people sleepy."]],
      ["What does playing an instrument involve, according to the text?", ["memory, coordination, hearing and emotion", "only the hands", "only memory"]]
    ]
  },

  /* ---------- B2 ---------- */
  {
    id: "teens-ai-in-the-classroom", level: "B2", stage: "teens", topic: "Technology", title: "AI in the Classroom: Shortcut or Tool?",
    description: "Artificial intelligence can write your essay. Should it?",
    text: [
      "In just a few years, artificial intelligence tools have moved from science fiction into students’ pockets. With a simple request, a chatbot can summarize a novel, solve an equation or produce a five-paragraph essay in seconds. Unsurprisingly, schools around the world are struggling to decide how to respond.",
      "Some educators see AI mainly as a threat. If a machine can complete an assignment, they argue, students may never develop the skills that the assignment was designed to build: organizing ideas, constructing an argument or persevering through a difficult problem. Learning, after all, often requires effort, and shortcuts can rob students of that productive struggle.",
      "Others believe that banning AI is both unrealistic and counterproductive. These tools are likely to be part of almost every profession in the future, so students need to learn to use them responsibly. Used well, AI can act as a patient tutor that explains a concept in different ways, generates practice questions or gives immediate feedback on a draft.",
      "Many teachers are therefore redesigning their assessments. They are asking students to explain their reasoning orally, write in class, reflect on their process or critically evaluate an AI-generated answer, which is often confidently wrong.",
      "Perhaps the most important question is not whether students use AI, but how. Asking it to do your thinking for you is very different from asking it to help you think better."
    ],
    vocab: [["struggle", "to find something very difficult"], ["persevere", "to continue trying despite difficulty"], ["counterproductive", "having the opposite effect to what you want"], ["assessment", "a way of evaluating learning"], ["draft", "an early version of a piece of writing"]],
    questions: [
      ["What concern do some educators have about AI?", ["Students may not develop important skills.", "AI is too expensive.", "AI is too slow."]],
      ["Why do some believe banning AI is unrealistic?", ["AI will be part of almost every profession.", "Students don’t like AI.", "AI is always correct."]],
      ["How can AI act as a good tool?", ["as a patient tutor that gives feedback", "by writing all assignments", "by replacing teachers"]],
      ["How are many teachers redesigning assessments?", ["asking students to explain reasoning orally", "giving more multiple-choice tests", "banning all computers"]],
      ["What is the writer’s main point?", ["How students use AI matters more than whether they use it.", "AI should be banned in all schools.", "AI is always confidently right."]]
    ]
  },
  {
    id: "teens-climate-anxiety", level: "B2", stage: "teens", topic: "Wellbeing", title: "Living with Climate Anxiety",
    description: "Many young people feel worried about the planet. What can they do with that feeling?",
    text: [
      "In a large international survey published in 2021, researchers asked ten thousand young people aged sixteen to twenty-five in ten countries how they felt about climate change. Nearly sixty percent said they were very or extremely worried, and many reported feeling sad, anxious, angry or powerless. Psychologists now often use the term “eco-anxiety” to describe this experience.",
      "It’s important to understand that eco-anxiety is not a mental illness. In many ways, it is a rational response to a real threat. Feeling concerned about the future shows that you care about the world and the people in it.",
      "However, when anxiety becomes overwhelming, it can lead to paralysis, the feeling that the problem is so enormous that nothing we do matters. This is where psychologists recommend a shift in focus.",
      "One of the most effective antidotes to eco-anxiety is action, especially collective action. Joining a group that plants trees, reduces waste at school or raises awareness turns abstract fear into concrete purpose. Connecting with others who share your concerns also reduces the sense of isolation.",
      "Balance matters, too. Staying informed is valuable, but constantly consuming alarming news can intensify anxiety. Setting limits on news consumption and spending time in nature can help.",
      "As one climate scientist put it, hope is not a feeling you wait for; it is something you create by doing."
    ],
    vocab: [["survey", "a set of questions asked to many people"], ["powerless", "without the ability to control or change things"], ["rational", "based on logic and reason"], ["overwhelming", "too strong to deal with"], ["antidote", "something that counteracts a negative effect"]],
    questions: [
      ["What did nearly sixty percent of young people in the survey say?", ["They were very or extremely worried.", "They didn’t care.", "They felt optimistic."]],
      ["How does the text describe eco-anxiety?", ["a rational response to a real threat", "a serious mental illness", "an exaggeration"]],
      ["What can happen when anxiety becomes overwhelming?", ["paralysis", "more motivation", "better sleep"]],
      ["What is one of the most effective antidotes?", ["collective action", "ignoring the news completely", "moving to another country"]],
      ["What does the final sentence suggest about hope?", ["It is created through action.", "It arrives on its own.", "It is not realistic."]]
    ]
  },
  {
    id: "teens-monterrey-water-crisis", level: "B2", stage: "teens", topic: "Environment", title: "The Summer Monterrey Ran Dry",
    description: "In 2022, one of Mexico’s most important cities faced a severe water crisis.",
    text: [
      "In the summer of 2022, millions of people in Monterrey turned on their taps and nothing came out. After years of below-average rainfall, the reservoirs that supply the metropolitan area had dropped to critically low levels. One of them, La Boca dam, was almost completely dry, its cracked bottom becoming a symbol of the crisis.",
      "The authorities introduced strict rationing. In many neighborhoods, water was available for only a few hours a day, sometimes in the early morning. Families filled buckets, bottles and large tanks called tinacos whenever they could. Long lines formed around water trucks, and the price of bottled water rose. Schools adjusted schedules, and some businesses had to reduce operations.",
      "Experts pointed out that the drought was only part of the story. Monterrey’s population and industry had grown rapidly, increasing demand, while infrastructure had not kept pace. Leaks in the distribution network also meant that a significant percentage of water was lost before it reached homes.",
      "In the autumn, heavy rains finally refilled the reservoirs and ended the most acute phase of the crisis. The government accelerated new projects, including an aqueduct to bring water from another river basin.",
      "Yet for many residents, the experience left a lasting lesson: water security cannot be taken for granted. Collecting rainwater, fixing leaks and reducing consumption are habits that matter long after the taps start running again."
    ],
    vocab: [["reservoir", "a large natural or artificial lake that stores water"], ["rationing", "limiting how much of something people can use"], ["infrastructure", "basic systems like roads, pipes and electricity"], ["leak", "a hole through which liquid escapes"], ["take for granted", "to expect something will always be available"]],
    questions: [
      ["What caused the reservoirs to drop?", ["years of below-average rainfall", "a broken dam", "an earthquake"]],
      ["What became a symbol of the crisis?", ["the cracked bottom of La Boca dam", "long lines at schools", "bottled water"]],
      ["Besides drought, what contributed to the problem?", ["growing demand and leaks in the network", "too much rain", "lower population"]],
      ["What ended the most acute phase of the crisis?", ["heavy rains in the autumn", "a new aqueduct", "water trucks"]],
      ["What lesson does the text highlight?", ["Water security cannot be taken for granted.", "Droughts never happen twice.", "Bottled water solves the problem."]]
    ]
  },
  {
    id: "teens-first-impressions", level: "B2", stage: "teens", topic: "Psychology", title: "The Science of First Impressions",
    description: "We judge people in less than a second. How accurate are we?",
    text: [
      "How long does it take to form an opinion about someone you have just met? According to research by psychologists at Princeton University, people make judgments about a stranger’s trustworthiness and competence after seeing their face for just one tenth of a second. Longer exposure didn’t change their opinions much; it mostly made them more confident.",
      "These rapid judgments probably evolved for a reason. For our ancestors, quickly deciding whether a stranger was a friend or a threat could be a matter of survival. Today, however, these instant impressions influence decisions in job interviews, classrooms and even elections, often without our awareness.",
      "The trouble is that first impressions are frequently wrong. They are shaped by stereotypes, by how similar someone seems to us and by superficial details such as clothing or facial expression in a single moment. A nervous person may seem cold; a confident person may seem competent even when they aren’t.",
      "Another problem is that first impressions tend to persist. Once we have formed an opinion, we unconsciously look for information that confirms it and ignore information that contradicts it. Psychologists call this confirmation bias.",
      "So what can we do? Simply being aware of the bias helps. Giving people a second, third and fourth chance, and actively looking for evidence that challenges our initial assumptions, makes our judgments fairer. After all, the person you misjudged on the first day of school might become your closest friend."
    ],
    vocab: [["trustworthiness", "the quality of being reliable and honest"], ["competence", "the ability to do something well"], ["ancestor", "a person in your family from long ago"], ["stereotype", "a fixed, often unfair idea about a group of people"], ["persist", "to continue to exist"]],
    questions: [
      ["How quickly do people form judgments about faces?", ["in one tenth of a second", "in about ten seconds", "after several minutes"]],
      ["What did longer exposure mainly do?", ["It made people more confident.", "It changed opinions completely.", "It made people less sure."]],
      ["Why did rapid judgments probably evolve?", ["to quickly identify friends or threats", "to choose good food", "to win elections"]],
      ["What is confirmation bias?", ["looking for information that supports our opinion", "changing our mind easily", "trusting strangers"]],
      ["What does the text recommend?", ["giving people more chances and challenging our assumptions", "trusting first impressions completely", "avoiding new people"]]
    ]
  },
  {
    id: "teens-gap-year", level: "B2", stage: "teens", topic: "Future", title: "Should You Take a Gap Year?",
    description: "Some students take a year off between school and university. Is it worth it?",
    text: [
      "In countries like the United Kingdom, Australia and Denmark, it is common for students to take a “gap year” between finishing high school and starting university. During this time, they may work, travel, volunteer, learn a language or simply reflect on what they want to study. In Mexico, the idea is less common, but it is gaining attention.",
      "Supporters argue that a gap year can provide clarity. Many students choose a university degree at seventeen or eighteen without really knowing what interests them, and a significant number later change programs or drop out. Time spent working or volunteering can help young people discover their strengths and choose more carefully. Some studies have found that students who took a structured gap year arrived at university more motivated and performed as well as or better than their peers.",
      "Critics, however, point to real risks. Without a clear plan, a gap year can easily become a year of scrolling on the sofa. Some students lose academic momentum and find it difficult to return to studying. There are also financial considerations: travel programs can be expensive, and not every family can support a year without studies.",
      "The key, most experts agree, is structure. A successful gap year has goals, whether that means saving money, gaining work experience, improving a language or completing a specific project.",
      "Ultimately, there is no universal right answer. The more useful question may be: what do you want to have learned about yourself by the time you start the next chapter?"
    ],
    vocab: [["gap year", "a year off between school and further studies"], ["clarity", "the quality of being clear"], ["drop out", "to leave school or university before finishing"], ["peers", "people of the same age or level"], ["momentum", "the force that keeps something moving"]],
    questions: [
      ["In which countries is a gap year common?", ["the UK, Australia and Denmark", "Mexico and Brazil", "China and Japan"]],
      ["What benefit do supporters mention?", ["It can help students choose more carefully.", "It guarantees a good job.", "It makes university shorter."]],
      ["What is one risk critics mention?", ["Students may lose academic momentum.", "Students learn too much.", "Universities don’t accept them."]],
      ["What do most experts say is the key to a successful gap year?", ["structure and clear goals", "travelling as far as possible", "spending a lot of money"]],
      ["What is the writer’s final position?", ["There is no universal right answer.", "Everyone should take a gap year.", "Gap years are always a mistake."]]
    ]
  }
);

Object.assign(READING_ART, {
  "teens-why-teens-are-tired": scene("#2A3B66", `${kStars([[30, 30], [90, 20], [150, 40], [290, 26]], "#FCE3A6")}
    <g transform="translate(250 66)"><circle r="34" fill="#FFFDFA"/><circle r="30" fill="#FCE3A6"/><path d="M0 -20v20l14 10" stroke="#1E3A5F" stroke-width="4" fill="none" stroke-linecap="round"/>${[0, 90, 180, 270].map((a) => `<circle cx="${24 * Math.sin(a * Math.PI / 180)}" cy="${-24 * Math.cos(a * Math.PI / 180)}" r="2" fill="#1E3A5F"/>`).join("")}${T(0, 48, "12:00", 12, "#FCE3A6")}</g>
    <rect x="20" y="118" width="190" height="34" rx="8" fill="#6FA8D6"/><rect x="20" y="108" width="54" height="18" rx="8" fill="#FFFDFA"/>
    <circle cx="56" cy="104" r="12" fill="#F1C7A5"/><path d="M44 100a12 12 0 0 1 24 -2z" fill="#1E1A18"/><circle cx="52" cy="104" r="2" fill="#1E3A5F"/><circle cx="60" cy="104" r="2" fill="#1E3A5F"/>
    <path d="M70 120q70-18 140 0v10H70z" fill="#A98BE8"/><g transform="translate(96 112)">${tPhone(0, 0, .8)}</g><path d="M96 100l-30 -40h60z" fill="#9AB8D6" opacity=".25"/>`, "#FFFFFF", .1),
  "teens-why-we-procrastinate": scene("#FCEFD2", `<rect x="0" y="130" width="320" height="50" fill="#E8C7A8"/><rect x="40" y="110" width="160" height="10" rx="3" fill="#A9774F"/><rect x="50" y="120" width="8" height="40" fill="#A9774F"/><rect x="182" y="120" width="8" height="40" fill="#A9774F"/>
    <rect x="70" y="84" width="60" height="26" rx="2" fill="#FFFDFA"/>${[0, 1, 2].map((i) => `<path d="M76 ${92 + i * 6}h${i === 2 ? 20 : 46}" stroke="#C9D6E6" stroke-width="2"/>`).join("")}${T(100, 76, "Essay", 9, "#E8846B")}
    ${kP(220, 156, "#F1C7A5", "#6FA8D6", 1.6, "#3A2A20")}<g transform="translate(232 110)">${tPhone(0, 0, .8)}</g>
    <g transform="translate(260 44)"><rect x="-44" y="-26" width="88" height="56" rx="4" fill="#FFFDFA" stroke="#C9B7A0" stroke-width="2"/><rect x="-44" y="-26" width="88" height="12" fill="#E8846B"/>${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="${-38 + i * 12}" y="-8" width="9" height="9" fill="${i === 4 ? "#E8846B" : "#F2E8D8"}"/>`).join("")}${T(0, 18, "Due: FRI", 9, "#1E3A5F")}</g>
    ${[[150, 60], [170, 44], [190, 30]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${4 + i * 2}" fill="#FFFDFA" stroke="#A9B4C2"/>`).join("")}`),
  "teens-frida-kahlo": scene("#F7DDD4", `${[[30, 30, "#E8846B"], [290, 40, "#E0B04A"], [40, 150, "#4FA88A"], [282, 150, "#A98BE8"]].map(([x, y, c]) => `${petals(x, y, 9, 8, c, 6)}<circle cx="${x}" cy="${y}" r="6" fill="#FCE3A6"/>`).join("")}
    <rect x="100" y="16" width="120" height="150" rx="6" fill="#C9902F"/><rect x="108" y="24" width="104" height="134" fill="#3E8C6F"/>
    <g transform="translate(160 100)"><path d="M-36 66q0-40 36-40t36 40z" fill="#B23A48"/><path d="M-16 30l16 12 16-12" stroke="#E0B04A" stroke-width="3" fill="none"/><ellipse cx="0" cy="-8" rx="22" ry="27" fill="#D9A27E"/><path d="M-24 -18q2-26 24-26t24 26q-6-14-24-14t-24 14z" fill="#1E1A18"/>${[-20, -8, 4, 16].map((x, i) => `<circle cx="${x + 2}" cy="-40" r="7" fill="${["#E8846B", "#E0B04A", "#F47FB0", "#E8846B"][i]}"/>`).join("")}<path d="M-13 -14q6-4 11 0M2 -14q5-4 11 0" stroke="#1E1A18" stroke-width="2.5" fill="none"/><circle cx="-8" cy="-8" r="2" fill="#1E1A18"/><circle cx="8" cy="-8" r="2" fill="#1E1A18"/><path d="M-5 8q5 3 10 0" stroke="#B23A48" stroke-width="2.5" fill="none"/></g>`),
  "teens-music-and-mood": scene("#EDE6FA", `<g transform="translate(110 92)"><path d="M-50 10q-10-60 50-64q56 4 52 56q-4 30-30 36l-4 22h-30l-2-22q-30-8-36-28z" fill="#F7B3C2"/><path d="M-30 -20q10-10 20 0t20 0 20 0M-34 4q12-8 24 2t24-2 22 4" stroke="#E86A8A" stroke-width="3" fill="none"/></g>
    ${[0, 1, 2].map((i) => `<path d="M190 ${70 + i * 18}q20 -10 40 0t40 0" stroke="${["#E8846B", "#6FA8D6", "#4FA88A"][i]}" stroke-width="4" fill="none" stroke-linecap="round"/>`).join("")}
    ${[[230, 40], [276, 34], [210, 140], [270, 140]].map(([x, y], i) => `<g transform="translate(${x} ${y})"><circle cx="0" cy="10" r="7" fill="${["#A98BE8", "#E0B04A", "#E8846B", "#4FA88A"][i]}"/><path d="M6 10V-12l12 4v6" stroke="${["#A98BE8", "#E0B04A", "#E8846B", "#4FA88A"][i]}" stroke-width="3" fill="none"/></g>`).join("")}`),
  "teens-ai-in-the-classroom": scene("#DCEAF6", `<rect x="0" y="134" width="320" height="46" fill="#C9D6E6"/>
    <g transform="translate(100 104)"><rect x="-70" y="-50" width="140" height="84" rx="8" fill="#1E3A5F"/><rect x="-62" y="-42" width="124" height="68" rx="3" fill="#FFFDFA"/><rect x="-84" y="34" width="168" height="8" rx="4" fill="#A9B4C2"/>
      <rect x="-54" y="-34" width="70" height="14" rx="6" fill="#E3EEF9"/><rect x="-14" y="-14" width="70" height="14" rx="6" fill="#6FA8D6"/><rect x="-54" y="6" width="56" height="14" rx="6" fill="#E3EEF9"/></g>
    <g transform="translate(240 92)"><rect x="-30" y="-26" width="60" height="50" rx="14" fill="#A98BE8"/><circle cx="-12" cy="-4" r="7" fill="#FFFDFA"/><circle cx="12" cy="-4" r="7" fill="#FFFDFA"/><circle cx="-12" cy="-4" r="3" fill="#1E3A5F"/><circle cx="12" cy="-4" r="3" fill="#1E3A5F"/><path d="M-10 12q10 6 20 0" stroke="#FFFDFA" stroke-width="3" fill="none"/><path d="M0 -26v-12" stroke="#A98BE8" stroke-width="4"/><circle cy="-42" r="5" fill="#E0B04A"/><rect x="-36" y="-6" width="6" height="16" rx="3" fill="#8A6CD0"/><rect x="30" y="-6" width="6" height="16" rx="3" fill="#8A6CD0"/></g>
    ${kP(240, 172, "#F1C7A5", "#E8846B", 1.1, "#3A2A20")}<path d="M180 50l10-10M300 50l-10-10M240 24v-10" stroke="#E0B04A" stroke-width="3" stroke-linecap="round"/>`),
  "teens-climate-anxiety": scene("#E2F2EA", `<g transform="translate(160 84)"><circle r="54" fill="#6FA8D6"/><path d="M-34 -30q14-8 22 4t-6 22-12 20q-12-14-4-46z" fill="#7FB89E"/><path d="M8 -46q24 2 30 20t-16 14-14 20-10-24q-6-22 10-30z" fill="#7FB89E"/><path d="M20 26q16 0 18 12-10 8-20 4z" fill="#7FB89E"/></g>
    ${kP(80, 168, "#F1C7A5", "#E8846B", 1.3, "#3A2A20")}${kP(240, 168, "#C98E6A", "#E0B04A", 1.3, "#1E1A18")}${kP(160, 172, "#F3D1B3", "#A98BE8", 1.2, "#1E1A18")}
    <path d="M90 118q30-30 40-30M230 118q-30-30-40-30" stroke="#F1C7A5" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>
    <g transform="translate(160 156)"><rect x="-3" y="-20" width="6" height="20" fill="#8A5A38"/><ellipse cx="-8" cy="-22" rx="9" ry="5" fill="#4FA88A" transform="rotate(-30 -8 -22)"/><ellipse cx="8" cy="-24" rx="9" ry="5" fill="#4FA88A" transform="rotate(30 8 -24)"/></g>`),
  "teens-monterrey-water-crisis": scene("#F6E3C4", `${kSun(270, 34, 20)}<path d="M0 90l40-46 30 26 40-50 40 46 30-20 40 30 40-24 60 38z" fill="#C9A87A"/><path d="M110 20l10-14 10 14q-10 6-20 0z" fill="#B8966A"/>
    <rect x="0" y="90" width="320" height="90" fill="#D9BE94"/>${[[30, 110, 60, 126], [80, 140, 120, 150], [150, 110, 180, 130], [200, 150, 240, 160], [250, 116, 290, 128]].map(([a, b, c, d]) => `<path d="M${a} ${b}l${(c - a) / 2} 8l${(c - a) / 2} -4M${a + 10} ${b + 4}l-6 14" stroke="#B8966A" stroke-width="2" fill="none"/>`).join("")}
    <g transform="translate(110 130)"><path d="M-14 30l-8-40h44l-8 40z" fill="#6FA8D6" opacity=".9"/><path d="M-22 -10h44" stroke="#3E6A93" stroke-width="3"/><path d="M0 -24q8 12 0 16q-8-4 0-16z" fill="#6FA8D6"/></g>
    <g transform="translate(220 120)"><rect x="-20" y="-6" width="40" height="40" rx="6" fill="#1E3A5F"/><rect x="-24" y="-12" width="48" height="10" rx="4" fill="#3E6A93"/>${T(0, 16, "H₂O", 10, "#FCE3A6")}</g>`),
  "teens-first-impressions": scene("#FBE3DC", `${kP(110, 162, "#F1C7A5", "#6FA8D6", 1.9, "#3A2A20")}${kP(210, 162, "#C98E6A", "#A98BE8", 1.9, "#1E1A18")}
    <g transform="translate(64 50)"><rect x="-36" y="-22" width="72" height="44" rx="12" fill="#FFFDFA"/><path d="M14 22l8 12-2-12z" fill="#FFFDFA"/>${T(0, 0, "0.1 s", 15, "#E8846B")}</g>
    <g transform="translate(256 48)"><rect x="-34" y="-22" width="68" height="44" rx="12" fill="#FFFDFA"/><path d="M-14 22l-8 12 2-12z" fill="#FFFDFA"/><circle cx="-12" cy="0" r="4" fill="#E0B04A"/><circle cx="0" cy="0" r="4" fill="#E0B04A"/><circle cx="12" cy="0" r="4" fill="#E0B04A"/></g>
    <path d="M136 92q24-14 48 0" stroke="#E8846B" stroke-width="3" fill="none" stroke-dasharray="4 4"/>`),
  "teens-gap-year": scene("#DCEAF6", `${kC(40, 30)}<path d="M0 180V120l60-50 50 40 50-60 60 50 40-30 60 40v70z" fill="#9AB8D6"/><path d="M0 180v-30q80-20 160-6t160-8v44z" fill="#9FCBB5"/>
    <path d="M30 170q60-40 120-30t120-50" stroke="#FFFDFA" stroke-width="5" fill="none" stroke-dasharray="10 8" stroke-linecap="round"/>
    ${kP(100, 158, "#F1C7A5", "#E8846B", 1.5, "#3A2A20")}<rect x="84" y="118" width="14" height="22" rx="4" fill="#4FA88A"/>
    <g transform="translate(250 70)"><path d="M0 -28q-18 0-18 18q0 14 18 34q18-20 18-34q0-18-18-18z" fill="#E8846B"/><circle cy="-10" r="7" fill="#FFFDFA"/></g>
    <g transform="translate(200 40)"><circle r="16" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="2"/><path d="M0 -10l4 10-4 10-4-10z" fill="#E8846B"/></g>`)
});

READINGS.push(
  /* ---------- C1 ---------- */
  {
    id: "teens-attention-economy", level: "C1", stage: "teens", topic: "Technology", title: "The Attention Economy",
    description: "If an app is free, what exactly are you paying with?",
    text: [
      "Most of the apps on your phone cost nothing to download. Social networks, video platforms and many games are free at the point of use. Yet several of the companies behind them are among the most valuable in the world. How is that possible? The answer lies in what economists and technologists call the attention economy.",
      "In this model, the product being sold is not the app itself but the user’s attention, which is packaged and sold to advertisers. The longer you stay on a platform, the more advertisements you see and the more data you generate about your preferences, which in turn makes the advertising more precisely targeted and more profitable. Attention, in other words, has become a commodity.",
      "This creates a powerful incentive for designers to make their products as engaging as possible. Features such as infinite scroll, autoplay, streaks and unpredictable notifications are not accidental. Some draw on the same psychological principle as slot machines: variable rewards. Because we never know whether the next swipe will bring something exciting, we keep swiping.",
      "Critics argue that this business model sets up a fundamental conflict of interest. What is good for a company’s revenue, maximum time spent, is not necessarily what is good for users’ wellbeing, sleep or ability to concentrate. Several former tech employees have publicly expressed regret about the techniques they helped develop.",
      "Defenders respond that users are not passive victims; they choose what to consume, and these platforms provide genuine value, from connection to creativity to information.",
      "Perhaps the most empowering response lies between these positions: understanding how these systems work. Once you recognize a design feature intended to capture your attention, you are in a far better position to decide whether to give it."
    ],
    vocab: [["commodity", "something that can be bought and sold"], ["incentive", "something that motivates a person or company to act"], ["engaging", "attracting and holding interest"], ["variable reward", "a reward that comes at unpredictable times"], ["conflict of interest", "a situation where two goals work against each other"]],
    questions: [
      ["In the attention economy, what is actually being sold?", ["users’ attention", "the apps", "phones"]],
      ["Why does more time on a platform increase profit?", ["Users see more ads and generate more data.", "Users pay per minute.", "Apps become more expensive."]],
      ["What principle do some features share with slot machines?", ["variable rewards", "fixed prices", "clear rules"]],
      ["What conflict of interest do critics identify?", ["Company revenue vs. user wellbeing", "Advertisers vs. governments", "Designers vs. engineers"]],
      ["What does the writer suggest is the most empowering response?", ["understanding how these systems work", "deleting all apps", "trusting the companies"]]
    ]
  },
  {
    id: "teens-should-zoos-exist", level: "C1", stage: "teens", topic: "Ethics", title: "Should Zoos Still Exist?",
    description: "Modern zoos claim to protect endangered species. Their critics are not convinced.",
    text: [
      "For centuries, zoos were essentially displays of power and curiosity, places where exotic animals were exhibited for public entertainment, often in small, barren cages. Today, many leading zoos describe their mission in very different terms: conservation, research and education. Yet the question of whether keeping wild animals in captivity can be justified remains fiercely debated.",
      "Supporters point to concrete successes. Captive breeding programs have played a crucial role in saving species that had virtually disappeared from the wild. The Arabian oryx, for instance, was declared extinct in the wild in the early 1970s; animals bred in zoos were later reintroduced to the Middle East. Similarly, when the population of California condors fell to just twenty-two birds in the 1980s, the remaining individuals were captured, and a breeding program gradually brought the species back from the brink.",
      "Zoos also fund field research and claim to inspire a sense of connection with nature, particularly among children who will never see a tiger or an elephant in its natural habitat.",
      "Critics counter that these successes involve a small fraction of the animals actually held in zoos, many of which belong to species that are not endangered at all. They argue that certain animals, particularly large, intelligent, wide-ranging species such as elephants and orcas, suffer psychologically in captivity, sometimes exhibiting repetitive behaviors associated with stress. Moreover, they question whether watching a confined animal genuinely teaches visitors much about its life in the wild.",
      "Between these positions, a middle ground is emerging: sanctuaries that prioritize animal welfare over display, stricter regulation, and a focus on protecting habitats rather than individual animals. The question may no longer be whether zoos should exist, but what kind of institutions they need to become."
    ],
    vocab: [["captivity", "being kept in a closed space, not free"], ["barren", "empty, with nothing growing or living"], ["captive breeding", "helping animals reproduce in controlled conditions"], ["brink", "the edge of something dangerous"], ["sanctuary", "a protected place for animals to live safely"]],
    questions: [
      ["How do leading zoos describe their modern mission?", ["conservation, research and education", "entertainment only", "selling animals"]],
      ["What happened to the Arabian oryx?", ["Zoo-bred animals were reintroduced to the wild.", "It became extinct forever.", "It was never endangered."]],
      ["How many California condors remained in the 1980s?", ["twenty-two", "two hundred", "two thousand"]],
      ["What is one argument critics make?", ["Successes involve only a small fraction of zoo animals.", "Zoos are too cheap.", "Zoos don’t have enough visitors."]],
      ["What does the writer suggest at the end?", ["The key question is what kind of institutions zoos should become.", "All zoos should close immediately.", "Zoos need more animals."]]
    ]
  },
  {
    id: "teens-myth-of-multitasking", level: "C1", stage: "teens", topic: "Psychology", title: "The Myth of Multitasking",
    description: "You think you can study, text and listen to a podcast at once. Your brain disagrees.",
    text: [
      "Many people consider themselves skilled multitaskers. They answer messages during lectures, keep several tabs open while writing an essay and listen to podcasts while doing homework. It feels efficient. However, decades of research in cognitive psychology suggest that, for tasks that require conscious attention, true multitasking is largely an illusion.",
      "What we perceive as doing two things at once is usually rapid task switching. The brain shifts its focus back and forth between activities, and each switch carries a cost. Researchers have repeatedly found that switching between tasks takes extra time and increases errors, even when each switch lasts only a fraction of a second. Some estimates suggest that frequent switching can significantly reduce overall productivity.",
      "There is also evidence that habitual multitasking may affect how we process information. In a frequently cited 2009 study at Stanford University, researchers compared people who regularly consumed several forms of media simultaneously with those who rarely did. Surprisingly, the heavy multitaskers performed worse on tests that measured their ability to filter out irrelevant information and switch between tasks, precisely the skills they were assumed to have practiced.",
      "This does not mean that we can never combine activities. Tasks that are highly automatic, such as walking, can be paired with conversation without much difficulty. The problem arises when two tasks compete for the same mental resources, such as reading and listening to speech.",
      "The practical implications are clear. Working in focused blocks, silencing notifications and completing one task before beginning another may feel slower, but the evidence suggests it is often faster, and the quality of the work tends to be higher.",
      "In an age of constant distraction, the ability to concentrate on one thing at a time may be one of the most valuable skills a person can develop."
    ],
    vocab: [["cognitive", "related to thinking and mental processes"], ["illusion", "something that seems real but is not"], ["habitual", "done regularly as a habit"], ["simultaneously", "at the same time"], ["irrelevant", "not related or important to the topic"]],
    questions: [
      ["What does research suggest about true multitasking?", ["It is largely an illusion for attention-demanding tasks.", "It is the most efficient way to work.", "Only teenagers can do it."]],
      ["What usually happens instead of real multitasking?", ["rapid task switching", "deep focus", "automatic thinking"]],
      ["What did the Stanford study find about heavy multitaskers?", ["They were worse at filtering irrelevant information.", "They were better at everything.", "They were faster readers."]],
      ["When is combining tasks less of a problem?", ["when one task is highly automatic", "when both tasks involve reading", "when you are very tired"]],
      ["What practical advice does the text give?", ["Work in focused blocks and silence notifications.", "Open more tabs.", "Always listen to podcasts while studying."]]
    ]
  },
  {
    id: "teens-language-and-identity", level: "C1", stage: "teens", topic: "Culture", title: "When a Language Disappears",
    description: "Mexico has 68 Indigenous languages. Several of them are at risk.",
    text: [
      "Mexico is one of the most linguistically diverse countries in the world. In addition to Spanish, the government recognizes sixty-eight Indigenous languages, which together include hundreds of distinct variants. Náhuatl, spoken by well over a million people, is the most widely used; others, such as Ayapaneco in Tabasco, have only a handful of fluent speakers left.",
      "Linguists estimate that around half of the world’s roughly seven thousand languages could disappear by the end of this century. When a language dies, the loss extends far beyond vocabulary and grammar. Languages encode ways of perceiving the world: systems for classifying plants and animals, concepts of time and kinship, oral histories, songs and jokes that may not exist anywhere else. Much traditional ecological knowledge, for instance, is preserved in the names and descriptions communities have given to their local environment.",
      "Languages rarely disappear because speakers simply stop valuing them. More often, the process is driven by economic pressure, migration and, historically, discrimination. For generations, many Indigenous children in Mexico were punished at school for speaking their mother tongue, and parents sometimes chose not to pass their language on, hoping to spare their children the same prejudice.",
      "In recent decades, however, attitudes have begun to shift. Bilingual education programs, Indigenous-language radio stations, and young artists who rap, write poetry and create online content in Zapotec, Mixe or Náhuatl are demonstrating that these languages are not relics of the past but living vehicles of contemporary expression.",
      "Revitalization is difficult, but not impossible; the revival of Hebrew and the resurgence of Welsh show what sustained community effort can achieve. Ultimately, the survival of a language depends on whether new generations see it not as a burden, but as a source of identity and pride."
    ],
    vocab: [["linguistically", "related to languages"], ["variant", "a slightly different form of something"], ["encode", "to contain information in a particular form"], ["kinship", "family relationships"], ["revitalization", "the process of giving new life to something"]],
    questions: [
      ["How many Indigenous languages does the Mexican government recognize?", ["sixty-eight", "seven thousand", "twelve"]],
      ["What is lost when a language dies, according to the text?", ["ways of perceiving the world, histories and knowledge", "only vocabulary", "only grammar"]],
      ["Why did some parents not pass on their language?", ["to spare their children prejudice", "because it was too difficult", "because schools required it"]],
      ["What is helping to change attitudes?", ["bilingual education, radio and young artists", "banning Spanish", "closing rural schools"]],
      ["What do the examples of Hebrew and Welsh show?", ["Revitalization is possible with sustained effort.", "All languages will disappear.", "Only European languages survive."]]
    ]
  },
  {
    id: "teens-citizen-science", level: "C1", stage: "teens", topic: "Science", title: "Science Without a Laboratory",
    description: "You don’t need a PhD to make a real scientific discovery.",
    text: [
      "We often picture science as something that happens exclusively in laboratories, conducted by experts in white coats. Increasingly, however, ordinary people around the world are contributing to genuine research, often from their phones or computers. This phenomenon is known as citizen science.",
      "One of the best-known examples began in 2007, when a team of astronomers launched Galaxy Zoo. They had images of around a million galaxies, far too many for professionals to classify on their own. They invited the public to help by identifying the shapes of galaxies online. The response was overwhelming: within the first year, volunteers had made tens of millions of classifications. Along the way, a Dutch schoolteacher spotted a mysterious green object that astronomers had never seen before. It was later named Hanny’s Voorwerp, after her.",
      "In 2011, players of an online puzzle game called Foldit, most of them without scientific training, worked out the structure of a protein related to a virus that causes an AIDS-like disease in monkeys. Scientists had struggled with the problem for over a decade; the gamers solved it in about three weeks.",
      "Citizen science is equally valuable for studying the natural world. Platforms where people upload photos of birds, insects and plants have produced vast databases that help researchers track migration patterns, the spread of invasive species and the effects of climate change across entire continents, something no single research team could achieve.",
      "Beyond the data, these projects have another benefit: they make science more democratic. Participants gain a deeper understanding of how knowledge is produced, and many discover a passion that shapes their education and careers.",
      "So the next time you photograph an unusual insect in your garden, consider that you might be contributing to science."
    ],
    vocab: [["phenomenon", "something that happens or exists, especially something unusual"], ["classify", "to arrange things into groups"], ["overwhelming", "very great in amount"], ["invasive species", "plants or animals that spread into new areas and cause harm"], ["democratic", "open to everyone"]],
    questions: [
      ["Why did astronomers launch Galaxy Zoo?", ["They had too many galaxy images to classify alone.", "They needed funding.", "They wanted to sell telescopes."]],
      ["Who discovered Hanny’s Voorwerp?", ["a Dutch schoolteacher", "a team of astronomers", "a computer program"]],
      ["What did Foldit players achieve?", ["They solved a protein structure in about three weeks.", "They discovered a new planet.", "They created a vaccine."]],
      ["How do photo platforms help researchers?", ["They help track migration, invasive species and climate effects.", "They replace all scientists.", "They sell nature photos."]],
      ["What additional benefit of citizen science is mentioned?", ["It makes science more democratic.", "It is always more accurate.", "It is cheaper for universities."]]
    ]
  },

  /* ---------- C2 ---------- */
  {
    id: "teens-the-uses-of-failure", level: "C2", stage: "teens", topic: "Philosophy", title: "The Uses of Failure",
    description: "We celebrate success. Perhaps we should study failure more closely.",
    text: [
      "Contemporary culture has a curious relationship with failure. On the one hand, it is endlessly romanticized: entrepreneurs boast of their early bankruptcies, and motivational slogans exhort us to “fail fast.” On the other, the actual experience of failing, a rejected application, a lost competition, a disappointing grade, remains something most of us go to considerable lengths to conceal. We admire failure retrospectively, once it has been redeemed by eventual success, but we rarely tolerate it in the present tense.",
      "This ambivalence obscures what failure genuinely offers. Most obviously, it provides information. A plan that collapses reveals assumptions that were mistaken; a test we fail exposes the precise boundaries of our understanding. Success, by contrast, is often epistemically lazy: when things go well, we seldom examine why, and so we may attribute to skill what was partly due to luck.",
      "Failure can also cultivate qualities that uninterrupted success cannot. Psychologists who study resilience have observed that people who encounter manageable setbacks often develop greater emotional flexibility than those who have faced either no adversity or overwhelming adversity. Struggle, in moderate doses, seems to build the capacity to struggle.",
      "Yet we should resist the temptation to sentimentalize. Not every failure is instructive; some are simply painful, and the lessons extracted from them are sometimes rationalizations constructed after the fact. Moreover, the freedom to fail is unevenly distributed. A wealthy student can afford to experiment; for someone whose opportunities are scarce, a single failure may carry irreversible consequences. A culture that genuinely valued failure would therefore need to build safety nets, not merely slogans.",
      "Samuel Beckett’s much-quoted line, “Fail again. Fail better,” is often read as a cheerful mantra of perseverance. In its original context, it is considerably bleaker and more honest: an acknowledgment that failure is not a detour on the road to success, but a permanent condition of any serious attempt. The question, perhaps, is not how to avoid failure, but how to fail in ways that teach us something."
    ],
    vocab: [["romanticize", "to present something as better or more attractive than it is"], ["retrospectively", "when looking back at the past"], ["ambivalence", "having mixed or contradictory feelings"], ["epistemically", "relating to knowledge and how we know things"], ["rationalization", "an explanation invented to justify something after it happens"]],
    questions: [
      ["What contradiction does the writer identify in contemporary culture?", ["Failure is romanticized but concealed in real life.", "Success is always criticized.", "Failure is openly celebrated in the present."]],
      ["Why does the writer call success “epistemically lazy”?", ["We rarely examine why things went well.", "Successful people stop working.", "Success makes us forget facts."]],
      ["What do resilience researchers observe?", ["Manageable setbacks can build emotional flexibility.", "Any adversity is harmful.", "Overwhelming adversity is best."]],
      ["What does the writer say about the freedom to fail?", ["It is unevenly distributed.", "Everyone has it equally.", "It only matters for adults."]],
      ["How does the writer interpret Beckett’s line?", ["as an honest acknowledgment that failure is permanent in any serious attempt", "as a cheerful motivational slogan", "as advice to give up"]]
    ]
  },
  {
    id: "teens-who-owns-creativity", level: "C2", stage: "teens", topic: "Art", title: "Who Owns an Idea?",
    description: "Every artist borrows. So where does inspiration end and copying begin?",
    text: [
      "Few notions are as cherished in Western culture as that of the original genius, the solitary artist who conjures something entirely new from nothing. The history of art, however, tells a rather different story. Shakespeare borrowed the plot of Romeo and Juliet almost wholesale from an English poem published decades earlier; jazz musicians routinely built new melodies over the chord progressions of popular songs; and entire genres, from hip-hop to collage, are founded on the creative reuse of existing material. Creativity, it seems, is less an act of creation from nothing than one of recombination.",
      "If this is so, the question of who “owns” an idea becomes remarkably complicated. Copyright law attempts a compromise: it protects specific expressions of an idea, a particular text, recording or image, but not the idea itself. You may write a story about star-crossed lovers; you may not reproduce someone else’s novel about them. The boundary sounds clear in principle and proves notoriously blurry in practice, as numerous court cases over melodies and visual styles have demonstrated.",
      "The rise of generative artificial intelligence has made these questions newly urgent. Systems trained on millions of images and texts can produce work “in the style of” living artists within seconds. Defenders argue that this is merely an accelerated version of what human artists have always done: absorbing influences and transforming them. Critics respond that scale changes the nature of the act. A human apprentice learns from a few masters over many years and inevitably adds something of their own; a system that ingests an artist’s entire body of work without consent or compensation, and can replicate it indefinitely, may undermine the very livelihoods that sustain creative culture.",
      "Perhaps the most productive response is to distinguish between two values that are often conflated: the freedom to be influenced, which is essential to all art, and the right of creators to recognition and fair reward, which is essential to their survival. A healthy creative ecosystem probably requires both."
    ],
    vocab: [["cherished", "deeply valued"], ["wholesale", "completely, on a large scale"], ["recombination", "putting existing elements together in new ways"], ["conflate", "to mix two different ideas as if they were the same"], ["livelihood", "the way a person earns money to live"]],
    questions: [
      ["What myth does the writer challenge?", ["the solitary original genius", "the value of copyright", "the importance of art"]],
      ["What does copyright protect?", ["specific expressions, not ideas", "ideas themselves", "artistic styles"]],
      ["How do defenders view AI-generated art?", ["as an accelerated version of absorbing influences", "as completely original", "as illegal"]],
      ["What do critics say changes with AI?", ["the scale, which may undermine artists’ livelihoods", "nothing important", "the colors used in art"]],
      ["What two values does the writer distinguish?", ["freedom to be influenced and creators’ right to recognition", "speed and quality", "tradition and technology"]]
    ]
  },
  {
    id: "teens-the-tyranny-of-metrics", level: "C2", stage: "teens", topic: "Society", title: "When a Measure Becomes a Target",
    description: "Grades, likes and rankings promise objectivity. What do they hide?",
    text: [
      "We live in an era of relentless measurement. Students are evaluated through grades and standardized test scores, hospitals through waiting times, police forces through crime statistics, and teenagers, increasingly, through likes and followers. The appeal is understandable: numbers appear objective, comparable and transparent, offering a seemingly fair alternative to subjective judgment.",
      "Yet a principle formulated by the British economist Charles Goodhart warns of a fundamental problem. In its popular paraphrase, Goodhart’s Law states: when a measure becomes a target, it ceases to be a good measure. Once people are rewarded or punished according to a particular number, they begin to optimize for the number itself rather than the quality it was intended to reflect.",
      "The examples are numerous and occasionally absurd. Schools judged solely by exam results may narrow their curriculum to what is tested, sacrificing art, music and genuine curiosity. A hospital measured by how quickly patients are seen might classify a brief initial check as being “seen.” Researchers evaluated by their number of publications may divide a single study into several thinner papers. In each case, the indicator improves while the underlying reality may stagnate or even deteriorate.",
      "Social media offers perhaps the most intimate illustration. A like count was presumably designed as a rough signal of appreciation. For many users, it has become an objective in itself, shaping what they post, how they present themselves and, in some cases, how they assess their own worth.",
      "None of this implies that we should abandon measurement. Data can reveal injustices that intuition overlooks and hold institutions accountable. The danger lies in mistaking the metric for the thing it represents. Learning is more than a grade; health is more than a waiting time; friendship is not a follower count. A thoughtful society, like a thoughtful individual, uses numbers as instruments of understanding, not as substitutes for judgment."
    ],
    vocab: [["relentless", "continuing without stopping"], ["optimize", "to make something as effective as possible"], ["indicator", "a sign or measurement that shows something"], ["stagnate", "to stop developing or improving"], ["accountable", "responsible and required to explain actions"]],
    questions: [
      ["Why are numbers appealing as a form of evaluation?", ["They appear objective and comparable.", "They are always accurate.", "They are easy to ignore."]],
      ["What does Goodhart’s Law state?", ["When a measure becomes a target, it ceases to be a good measure.", "More data always improves decisions.", "Targets should never change."]],
      ["What might a school judged only by exam results do?", ["narrow its curriculum to what is tested", "add more art classes", "stop giving exams"]],
      ["How does the writer describe the like count?", ["as a signal that became an objective in itself", "as a perfectly accurate measure of value", "as irrelevant to users"]],
      ["What is the writer’s final position?", ["Use numbers as instruments of understanding, not substitutes for judgment.", "Abandon all measurement.", "Trust metrics completely."]]
    ]
  },
  {
    id: "teens-are-we-our-memories", level: "C2", stage: "teens", topic: "Psychology", title: "The Unreliable Archive",
    description: "Your memories feel like recordings. Neuroscience suggests they are something far stranger.",
    text: [
      "Most of us intuitively regard memory as a kind of archive: experiences are recorded, stored and later retrieved, perhaps faded but essentially intact. Decades of research in psychology and neuroscience have thoroughly dismantled this metaphor. Memory, it turns out, is not reproductive but reconstructive. Each time we recall an event, we rebuild it from fragments, filling the gaps with expectations, later knowledge and the emotions of the present moment.",
      "The implications are unsettling. In a series of influential experiments beginning in the 1970s, the psychologist Elizabeth Loftus demonstrated how easily memories can be altered. In one classic study, participants who watched a film of a car accident estimated significantly higher speeds when asked how fast the cars were going when they “smashed” into each other than when the verb used was “hit.” Some even later recalled seeing broken glass that had never appeared in the film. Subsequent research showed that it was possible to implant entirely fictitious childhood memories, such as having been lost in a shopping mall, in a substantial minority of participants.",
      "Even our most vivid memories are not immune. After dramatic public events, researchers have asked people to describe where they were when they heard the news, then questioned them again years later. Their accounts often changed considerably, yet their confidence remained high. Vividness, it appears, is no guarantee of accuracy.",
      "These findings have serious consequences in courtrooms, where eyewitness testimony has historically been treated as compelling evidence. But they also raise more personal, almost philosophical questions. If our memories are continually revised, in what sense is our sense of self, which depends so heavily on them, stable?",
      "Perhaps the answer is that identity was never a fixed record but an ongoing narrative. We are, in part, the stories we keep telling ourselves about who we have been, which suggests, intriguingly, that we have more authorship over those stories than we tend to assume."
    ],
    vocab: [["dismantle", "to take apart; to show that an idea is wrong"], ["reconstructive", "building something again from parts"], ["fictitious", "invented, not real"], ["vivid", "very clear and detailed"], ["testimony", "a formal statement of what someone saw or knows"]],
    questions: [
      ["What metaphor has research dismantled?", ["memory as an archive", "memory as a story", "memory as a muscle"]],
      ["What did Loftus’s car accident study show?", ["The verb used in a question influenced speed estimates.", "People remember accidents perfectly.", "Films are unreliable."]],
      ["What was implanted in some participants?", ["a false memory of being lost in a mall", "a fear of cars", "a real childhood memory"]],
      ["What did research on memories of dramatic events find?", ["Accounts changed, but confidence remained high.", "Accounts never changed.", "People forgot everything."]],
      ["What does the writer suggest about identity?", ["It is an ongoing narrative we partly author.", "It is completely fixed.", "It has no connection to memory."]]
    ]
  },
  {
    id: "teens-the-science-of-nostalgia", level: "C2", stage: "teens", topic: "Psychology", title: "From Disease to Comfort: The Story of Nostalgia",
    description: "Once considered a dangerous illness, nostalgia is now seen as a psychological resource.",
    text: [
      "In 1688, a Swiss medical student named Johannes Hofer coined a new term to describe a mysterious affliction he had observed among Swiss mercenaries serving far from home. Combining the Greek words nostos (homecoming) and algos (pain), he called it nostalgia. Its symptoms, he reported, included melancholy, insomnia, loss of appetite and, in severe cases, death. For roughly two centuries thereafter, nostalgia was treated as a serious medical condition, occasionally attributed to causes as improbable as damage to the eardrums from the constant clanging of cowbells in the Alps.",
      "By the twentieth century, the diagnosis had migrated from medicine to psychiatry, where nostalgia was regarded as a symptom of depression or an unhealthy refusal to accept the present. Only in recent decades has research painted a markedly different picture.",
      "Studies led by social psychologists, notably Constantine Sedikides and his colleagues, suggest that nostalgia is a predominantly positive, if bittersweet, emotion, and one that appears to serve important functions. People tend to experience it more frequently when they feel lonely, anxious or uncertain about the meaning of their lives, and recalling cherished memories often counteracts those very states, increasing feelings of social connectedness, continuity and self-esteem. In some experiments, participants who engaged in nostalgic reflection even reported feeling physically warmer.",
      "Nostalgia, in this view, functions less as a retreat from the present than as a resource for facing it: a way of reminding ourselves that our lives have contained love, belonging and meaning, and might again.",
      "Its power, however, can also be exploited. Advertisers, entertainment companies and political movements frequently evoke an idealized past to sell products or ideas, smoothing away the injustices and hardships that the original era contained. The challenge, then, is to draw comfort from memory without mistaking a carefully curated past for a lost paradise to which we ought to return."
    ],
    vocab: [["coin", "to invent a new word or phrase"], ["affliction", "something that causes suffering"], ["mercenary", "a soldier paid to fight for a foreign country"], ["bittersweet", "pleasant but with a feeling of sadness"], ["curated", "carefully selected and organized"]],
    questions: [
      ["Who first used the term “nostalgia”?", ["Johannes Hofer", "Constantine Sedikides", "a group of Swiss soldiers"]],
      ["How was nostalgia originally regarded?", ["as a serious medical condition", "as a pleasant emotion", "as a type of music"]],
      ["According to recent research, when do people tend to feel nostalgic?", ["when they feel lonely, anxious or uncertain", "only when they are very happy", "only in old age"]],
      ["What effect did some participants report after nostalgic reflection?", ["feeling physically warmer", "feeling more anxious", "losing their appetite"]],
      ["What risk does the writer mention in the final paragraph?", ["Nostalgia can be exploited by presenting an idealized past.", "Nostalgia always causes depression.", "Nostalgia makes people forget the past."]]
    ]
  }
);

Object.assign(READING_ART, {
  "teens-attention-economy": scene("#1E1A3A", `<g transform="translate(160 92)"><rect x="-44" y="-76" width="88" height="152" rx="14" fill="#2A2650" stroke="#A98BE8" stroke-width="3"/><rect x="-36" y="-64" width="72" height="124" rx="4" fill="#3E3A70"/>${[-52, -20, 12].map((y, i) => `<rect x="-30" y="${y}" width="60" height="26" rx="5" fill="${["#E8846B", "#6FA8D6", "#E0B04A"][i]}" opacity=".85"/>`).join("")}<path d="M-12 46l12 10 12-10" stroke="#FFFDFA" stroke-width="3" fill="none"/></g>
    <g transform="translate(160 92)"><circle r="104" fill="none" stroke="#E8846B" stroke-width="2" stroke-dasharray="4 8" opacity=".6"/><circle r="80" fill="none" stroke="#E8846B" stroke-width="2" stroke-dasharray="4 8" opacity=".4"/></g>
    <g transform="translate(270 50)"><circle r="18" fill="#FFFDFA"/><circle r="9" fill="#1E3A5F"/><circle r="4" fill="#FFFDFA"/><path d="M-30 0q30-24 60 0q-30 24-60 0z" fill="none" stroke="#FFFDFA" stroke-width="3"/></g>
    ${[[50, 40, "$"], [60, 130, "♥"], [266, 140, "★"]].map(([x, y, t]) => `<circle cx="${x}" cy="${y}" r="16" fill="#E0B04A"/>${T(x, y, t, 14, "#1E1A3A")}`).join("")}`, "#FFFFFF", .08),
  "teens-should-zoos-exist": scene("#E2F2EA", `${kGround("#B9D8A7", 136)}${kTree(280, 116, 1)}
    ${[20, 40, 60, 80, 100, 120, 140].map((x) => `<rect x="${x}" y="40" width="5" height="110" fill="#6E7A8C"/>`).join("")}<rect x="16" y="36" width="134" height="7" fill="#6E7A8C"/>
    <g transform="translate(84 130)"><ellipse rx="34" ry="16" fill="#E0B04A"/><circle cx="-30" cy="-14" r="15" fill="#E0B04A"/><circle cx="-30" cy="-14" r="21" fill="#C9902F" opacity=".55"/><circle cx="-34" cy="-16" r="1.8" fill="#1E3A5F"/><path d="M34 -4q14-6 12-20" stroke="#E0B04A" stroke-width="4" fill="none"/>${[-22, -8, 10, 22].map((x) => `<rect x="${x}" y="8" width="7" height="14" rx="3" fill="#C9902F"/>`).join("")}</g>
    <g transform="translate(220 118) scale(.75)"><ellipse rx="34" ry="16" fill="#E0B04A"/><circle cx="30" cy="-14" r="15" fill="#E0B04A"/><circle cx="30" cy="-14" r="21" fill="#C9902F" opacity=".55"/><circle cx="34" cy="-16" r="2" fill="#1E3A5F"/>${[-22, -8, 10, 22].map((x) => `<rect x="${x}" y="8" width="7" height="14" rx="3" fill="#C9902F"/>`).join("")}</g>
    ${T(180, 60, "?", 30, "#E8846B")}`),
  "teens-myth-of-multitasking": scene("#EEF0FB", `<g transform="translate(160 96)"><path d="M-46 10q-10-60 46-62q54 2 50 54q-4 28-28 34l-4 20h-28l-2-20q-28-8-34-26z" fill="#F7B3C2"/>
    ${[["#E8846B", -70, -40], ["#6FA8D6", 70, -40], ["#E0B04A", -76, 30], ["#4FA88A", 76, 30], ["#A98BE8", 0, -76]].map(([c, x, y]) => `<path d="M0 -10L${x} ${y}" stroke="${c}" stroke-width="3" stroke-dasharray="4 4"/><circle cx="${x}" cy="${y}" r="16" fill="${c}"/>`).join("")}</g>
    ${T(90, 56, "✉", 14, "#FFFDFA")}${T(230, 56, "♪", 16, "#FFFDFA")}${T(84, 126, "✎", 14, "#FFFDFA")}${T(236, 126, "▶", 12, "#FFFDFA")}${T(160, 20, "?", 16, "#FFFDFA")}`),
  "teens-language-and-identity": scene("#FCEFD2", `${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${i * 40} 160l20-14 20 14z" fill="${["#E8846B", "#4FA88A", "#E0B04A", "#6FA8D6"][i % 4]}"/>`).join("")}<rect x="0" y="160" width="320" height="20" fill="#B23A48"/>
    <g transform="translate(100 82)"><rect x="-56" y="-40" width="112" height="70" rx="18" fill="#FFFDFA"/><path d="M-10 30l-6 18 22-18z" fill="#FFFDFA"/>${T(0, -12, "Niltze", 15, "#B23A48")}${T(0, 12, "(Náhuatl)", 10, "#5B6787", 500)}</g>
    <g transform="translate(232 70)"><rect x="-56" y="-32" width="112" height="60" rx="18" fill="#1E3A5F"/><path d="M14 28l8 16-20-16z" fill="#1E3A5F"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${-40 + i * 18}" y="${-8 - (i % 3) * 6}" width="8" height="${16 + (i % 3) * 12}" rx="3" fill="#E0B04A"/>`).join("")}</g>
    ${kP(160, 156, "#C98E6A", "#E8846B", 1.3, "#1E1A18")}`),
  "teens-citizen-science": scene("#14213D", `${kStars([[20, 20], [60, 60], [110, 30], [210, 20], [300, 50], [250, 80]], "#FFFDFA")}
    <g transform="translate(90 64)"><ellipse rx="36" ry="12" fill="#A98BE8" opacity=".5" transform="rotate(-20)"/><ellipse rx="22" ry="7" fill="#E0B04A" opacity=".7" transform="rotate(-20)"/><circle r="5" fill="#FCE3A6"/></g>
    <g transform="translate(220 54)"><path d="M-14 -6q14-14 28 0t-4 16q-14 8-24-2z" fill="#7FD6A0" opacity=".8"/></g>
    <rect x="0" y="120" width="320" height="60" fill="#2F4A6B"/>${kP(120, 168, "#F1C7A5", "#E8846B", 1.5, "#3A2A20")}<g transform="translate(140 120) rotate(-20)">${tPhone(0, 0, 1)}</g>
    <g transform="translate(240 150)"><ellipse rx="10" ry="6" fill="#E8846B"/><circle cx="-12" cy="0" r="5" fill="#1E3A5F"/><path d="M-4 -5l-6 -10M4 -5l6 -10" stroke="#1E3A5F" stroke-width="2"/>${[-6, 0, 6].map((x) => `<circle cx="${x}" cy="-1" r="1.6" fill="#1E3A5F"/>`).join("")}<path d="M-8 6l-6 6M0 6v8M8 6l6 6" stroke="#1E3A5F" stroke-width="2"/></g>
    <path d="M150 104q40-40 80-20" stroke="#FCE3A6" stroke-width="2" stroke-dasharray="4 4" fill="none"/>`, "#FFFFFF", .08),
  "teens-the-uses-of-failure": scene("#F2E8D8", `<path d="M30 150h50v-30h50v-30h50v-30h50v-30h60" stroke="#1E3A5F" stroke-width="5" fill="none" stroke-linejoin="round"/>
    ${[[80, 120], [180, 60]].map(([x, y]) => `<path d="M${x - 6} ${y - 12}l12 12M${x + 6} ${y - 12}l-12 12" stroke="#E8846B" stroke-width="4" stroke-linecap="round"/>`).join("")}
    <g transform="translate(280 30)"><rect x="0" y="-26" width="3" height="40" fill="#1E3A5F"/><path d="M3 -26h26l-6 8 6 8h-26z" fill="#E0B04A"/></g>
    ${kP(146, 86, "#F1C7A5", "#4FA88A", 1.2, "#3A2A20")}
    <g transform="translate(70 70)">${[0, 1, 2].map((i) => `<rect x="${-16 + i * 4}" y="${-20 + i * 4}" width="32" height="40" rx="2" fill="#FFFDFA" stroke="#C9B7A0" transform="rotate(${-10 + i * 8})"/>`).join("")}<path d="M-8 -6l16 0M-8 2h12" stroke="#E8846B" stroke-width="2"/></g>`),
  "teens-who-owns-creativity": scene("#EDE6FA", `<g transform="translate(90 92)"><rect x="-56" y="-62" width="112" height="124" fill="#C9902F"/><rect x="-48" y="-54" width="96" height="108" fill="#FFFDFA"/><circle cx="-6" cy="-10" r="20" fill="#E8846B"/><rect x="2" y="-4" width="30" height="40" fill="#6FA8D6" opacity=".85"/><path d="M-40 40l20-30 16 18 14-12 26 24z" fill="#4FA88A"/></g>
    <g transform="translate(232 92)"><rect x="-56" y="-62" width="112" height="124" fill="#8A9BB4"/><rect x="-48" y="-54" width="96" height="108" fill="#FFFDFA"/>${Array.from({ length: 8 }, (_, i) => Array.from({ length: 9 }, (_, j) => `<rect x="${-48 + i * 12}" y="${-54 + j * 12}" width="12" height="12" fill="${["#E8846B", "#6FA8D6", "#4FA88A", "#FFFDFA"][(i * 3 + j * 5) % 4]}" opacity=".75"/>`).join("")).join("")}</g>
    <path d="M152 92h26" stroke="#1E3A5F" stroke-width="3"/><path d="M172 84l10 8-10 8" fill="none" stroke="#1E3A5F" stroke-width="3"/>${T(165, 70, "?", 18, "#A98BE8")}`),
  "teens-the-tyranny-of-metrics": scene("#DCEAF6", `${[[40, 60, "#E8846B"], [80, 90, "#E0B04A"], [120, 40, "#6FA8D6"], [160, 110, "#4FA88A"], [200, 70, "#A98BE8"]].map(([x, h, c]) => `<rect x="${x}" y="${150 - h}" width="28" height="${h}" rx="4" fill="${c}"/>`).join("")}<path d="M30 150h190" stroke="#1E3A5F" stroke-width="3"/>
    <g transform="translate(266 80)"><circle r="40" fill="#FFFDFA"/><circle r="30" fill="#E8846B"/><circle r="20" fill="#FFFDFA"/><circle r="10" fill="#E8846B"/><path d="M-50 -40l46 38" stroke="#1E3A5F" stroke-width="4"/><path d="M-50 -40l-8 -2 4 -8z" fill="#1E3A5F"/></g>
    <g transform="translate(60 30)"><path d="M0 8q-10-10 0-16q6-4 10 2q4-6 10-2q10 6 0 16l-10 10z" fill="#F47FB0"/>${T(30, 0, "×1,248", 11, "#1E3A5F")}</g>`),
  "teens-are-we-our-memories": scene("#F7DDD4", `${[[60, 50, -8], [130, 30, 6], [210, 54, -4], [270, 34, 8]].map(([x, y, r], i) => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-30" y="-24" width="60" height="56" fill="#FFFDFA"/><rect x="-24" y="-18" width="48" height="38" fill="${["#DCEAF6", "#E2F2EA", "#FCEFD2", "#EDE6FA"][i]}"/><circle cx="${-8 + i * 4}" cy="-4" r="6" fill="${["#E8846B", "#6FA8D6", "#4FA88A", "#E0B04A"][i]}"/></g>`).join("")}
    <g transform="translate(160 132)"><path d="M-46 10q-10-56 46-58q54 2 50 50q-4 26-28 32l-4 18h-28l-2-18q-28-8-34-24z" fill="#F7B3C2" opacity=".9"/></g>
    ${[[60, 80], [130, 62], [210, 84], [270, 66]].map(([x, y]) => `<path d="M${x} ${y + 6}Q160 ${y + 40} 160 108" stroke="#E86A8A" stroke-width="2" stroke-dasharray="3 5" fill="none"/>`).join("")}
    <g transform="translate(250 140)"><rect x="-22" y="-10" width="44" height="22" rx="4" fill="#1E3A5F" opacity=".25"/><path d="M-14 -10v-8h28v8" stroke="#1E3A5F" stroke-width="3" fill="none" opacity=".4"/></g>`),
  "teens-the-science-of-nostalgia": scene("#FCEFD2", `<path d="M0 180V110l40-30 30 20 50-50 40 40 40-30 50 40 70-30v110z" fill="#C9D6A8"/><path d="M0 180v-30q80-20 160-6t160-8v44z" fill="#9FCB8A"/>
    <g transform="translate(100 120)"><rect x="-36" y="-20" width="72" height="40" fill="#E8846B"/><path d="M-42 -18l42-28 42 28" fill="#B23A48"/><rect x="-8" y="0" width="16" height="20" fill="#8A5A38"/><rect x="-28" y="-8" width="14" height="12" fill="#FCE3A6"/><rect x="14" y="-8" width="14" height="12" fill="#FCE3A6"/></g>
    <g transform="translate(240 70)"><rect x="-44" y="-36" width="88" height="72" rx="4" fill="#FFFDFA" transform="rotate(6)"/><rect x="-38" y="-30" width="76" height="52" fill="#E8C7A8" transform="rotate(6)"/>${kP(-8, 18, "#F1C7A5", "#6FA8D6", .9, "#3A2A20")}${kP(16, 20, "#E7B48F", "#E8846B", .75, "#5A3A2A")}</g>
    <g transform="translate(60 60)"><path d="M-8 14l8-26 8 26" stroke="#A9774F" stroke-width="3" fill="none"/><path d="M-12 -4q12 6 24 0" stroke="#A9774F" stroke-width="3" fill="none"/><circle cy="-16" r="5" fill="#E0B04A"/></g>`)
});

/* =====================================================================
   READ ALOUD — el alumno se graba leyendo cada lectura en inglés.
   Opcional: no es requisito para marcar la lectura como completada.
   Audio en IndexedDB (solo en el dispositivo); datos en localStorage.
   ===================================================================== */
(function () {
  const RKEY = "mova-readaloud", DB = "mova-audio", ST = "recs";
  const meta = () => { try { return JSON.parse(localStorage.getItem(RKEY) || "{}"); } catch (e) { return {}; } };
  const saveMeta = (m) => { try { localStorage.setItem(RKEY, JSON.stringify(m)); } catch (e) {} };
  const recsOf = (id) => meta()[id] || [];
  let dbp = null;
  const db = () => dbp || (dbp = new Promise((res, rej) => {
    const q = indexedDB.open(DB, 1);
    q.onupgradeneeded = () => q.result.createObjectStore(ST);
    q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error);
  }));
  const idb = (mode, fn) => db().then((d) => new Promise((res, rej) => { const t = d.transaction(ST, mode); const r = fn(t.objectStore(ST)); t.oncomplete = () => res(r && r.result); t.onerror = () => rej(t.error); }));
  const putBlob = (k, b) => idb("readwrite", (s) => s.put(b, k));
  const getBlob = (k) => idb("readonly", (s) => s.get(k));
  const delBlob = (k) => idb("readwrite", (s) => s.delete(k));

  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const MIC = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3" fill="#fff"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>`;
  const MIC_S = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>`;
  const PLAY = `<svg width="18" height="18" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff"/></svg>`;
  const PAUSE = `<svg width="18" height="18" viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1" fill="#fff"/><rect x="14" y="5" width="4" height="14" rx="1" fill="#fff"/></svg>`;
  const STAR = (on) => `<svg viewBox="0 0 24 24" width="34" height="34"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="${on ? "#E0B04A" : "none"}" stroke="${on ? "#E0B04A" : "#BFB8AC"}" stroke-width="1.6" stroke-linejoin="round"/></svg>`;

  const css = document.createElement("style");
  css.textContent = `
  .ra [hidden]{display:none!important}
  .ra{margin-top:18px;border-radius:22px;background:var(--surface);border:1px solid var(--line);padding:18px;position:relative;overflow:hidden}
  .ra::before{content:"";position:absolute;right:-26px;top:-26px;width:110px;height:110px;border-radius:50%;background:var(--coral-soft)}
  .ra-h{display:flex;gap:12px;align-items:center;position:relative}
  .ra-ic{width:44px;height:44px;border-radius:14px;background:#E8846B;display:grid;place-items:center;flex:none}
  .ra-h b{display:block;font-size:17px;font-weight:700}.ra-h span{display:block;font-size:13px;color:var(--ink-2);line-height:1.45;margin-top:2px}
  .ra-tips{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;position:relative}.ra-tips span{font-size:11.5px;font-weight:600;padding:5px 10px;border-radius:99px;background:var(--navy-soft);color:var(--navy)}
  .ra-cta{margin-top:14px;width:100%;display:flex;align-items:center;justify-content:center;gap:10px;font:700 15px var(--font-ui);padding:14px;border:0;border-radius:16px;background:#E8846B;color:#fff;cursor:pointer;position:relative}
  .ra-cta.sec{background:var(--surface-2);color:var(--ink)}
  .ra-player{margin-top:14px;position:relative}
  .ra-pl{display:flex;align-items:center;gap:12px;background:var(--paper);border-radius:16px;padding:12px}
  .ra-pb{width:46px;height:46px;border-radius:50%;border:0;background:#1E3A5F;display:grid;place-items:center;cursor:pointer;flex:none}
  .ra-wave{flex:1;height:38px;display:flex;align-items:center;gap:2px}.ra-wave i{flex:1;border-radius:2px;background:var(--line)}.ra-wave i.on{background:#E8846B}
  .ra-time{font-size:12px;font-weight:600;color:var(--ink-2);min-width:38px;text-align:right}
  .ra-rate{margin-top:14px}.ra-rate p{font-size:13px;font-weight:600}.ra-stars{display:flex;gap:6px;margin-top:6px}.ra-stars button{border:0;background:none;padding:2px;cursor:pointer}
  .ra-row{display:flex;gap:8px;margin-top:14px}.ra-row .ra-cta{margin-top:0}
  .ra-msg{margin-top:12px;font-size:13px;color:var(--coral);font-weight:600;position:relative}
  .reading-text.ra-live{box-shadow:0 0 0 3px #E8846B}
  .ra-mine{margin-top:18px;position:relative}.ra-mine h3{font-size:15px;font-weight:700}
  .ra-rec{display:flex;align-items:center;gap:12px;background:var(--paper);border-radius:14px;padding:10px 12px;margin-top:8px}
  .ra-rec .ra-pb{width:38px;height:38px}.ra-rec div{flex:1}.ra-rec b{display:block;font-size:13.5px}.ra-rec small{font-size:12px;color:var(--ink-3)}
  .ra-del{border:0;background:none;color:var(--ink-3);font:600 12px var(--font-ui);cursor:pointer}
  .ra-st{color:#E0B04A;letter-spacing:1px}
  .ra-bar{position:fixed;left:0;right:0;bottom:0;background:#1E3A5F;color:#fff;padding:12px 18px;z-index:40;box-shadow:0 -6px 20px rgba(0,0,0,.18)}
  .ra-bar .in{max-width:560px;margin:0 auto;display:flex;align-items:center;gap:12px}
  .ra-dot{width:12px;height:12px;border-radius:50%;background:#FF6B5A;animation:raP 1.4s infinite;flex:none}
  @keyframes raP{0%{box-shadow:0 0 0 0 rgba(255,107,90,.6)}70%{box-shadow:0 0 0 12px rgba(255,107,90,0)}100%{box-shadow:0 0 0 0 rgba(255,107,90,0)}}
  .ra-bar .t{font-weight:700;font-size:15px;font-variant-numeric:tabular-nums;display:block;min-width:44px}.ra-bar .lab{font-size:11.5px;color:#AEB8D6;display:block}
  .ra-lw{flex:1;height:32px;display:flex;align-items:center;gap:2px}.ra-lw i{flex:1;background:#6FA8D6;border-radius:2px;min-height:3px}
  .ra-stop{border:0;border-radius:14px;background:#fff;color:#1E3A5F;font:700 14px var(--font-ui);padding:11px 16px;display:flex;align-items:center;gap:8px;cursor:pointer}.ra-stop i{width:12px;height:12px;border-radius:3px;background:#E8846B;display:block}
  .ra-tag{display:inline-flex;align-items:center;gap:4px;color:#C35A3F;font-weight:600;margin-left:8px}
  :root[data-theme="dark"] .ra-tag{color:#EE9A80}
  @media print{.ra,.ra-bar{display:none!important}}`;
  document.head.appendChild(css);

  /* Estado de grabación activo (uno a la vez) */
  let active = null;
  const stopActive = () => { if (active) active.abort(); };
  window.addEventListener("hashchange", stopActive);

  function wave(el, arr, prog) { el.innerHTML = arr.map((v, i) => `<i class="${i / arr.length < prog ? "on" : ""}" style="height:${Math.max(10, v * 100)}%"></i>`).join(""); }
  function bindPlayer(btn, rec, waveEl, timeEl) {
    let audio = null, iv = 0, playing = false;
    const upd = (p) => { if (waveEl) wave(waveEl, rec.peaks, p); if (timeEl) timeEl.textContent = fmt(Math.min(rec.dur, p * rec.dur)); };
    const end = () => { playing = false; btn.innerHTML = PLAY; clearInterval(iv); upd(0); if (timeEl) timeEl.textContent = fmt(rec.dur); };
    btn.innerHTML = PLAY;
    btn.onclick = async () => {
      if (playing) { playing = false; btn.innerHTML = PLAY; audio && audio.pause(); clearInterval(iv); return; }
      if (!audio) {
        const blob = rec.blob || await getBlob(rec.id).catch(() => null);
        if (!blob) return;
        audio = new Audio(URL.createObjectURL(blob)); audio.onended = end;
      }
      playing = true; btn.innerHTML = PAUSE; audio.play();
      iv = setInterval(() => { const d = isFinite(audio.duration) && audio.duration > 0 ? audio.duration : rec.dur; upd(audio.currentTime / d); }, 100);
    };
  }

  function mountReadAloud(root, r) {
    const head = root.querySelector(".reading-head .actions");
    const textEl = root.querySelector(".reading-text");
    if (!head || !textEl) return;
    head.insertAdjacentHTML("afterend", `
      <section class="ra no-print" aria-label="Read aloud">
        <div class="ra-h"><div class="ra-ic">${MIC}</div><div><b>Read Aloud</b><span class="ra-sub">Read the story out loud and record yourself. Then listen and check your pronunciation.</span></div></div>
        <div class="ra-tips"><span>Speak clearly</span><span>Pause at periods</span><span>Try hard words twice</span></div>
        <button class="ra-cta ra-start" type="button"><svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="#fff"/></svg><span>Start recording</span></button>
        <p class="ra-msg" hidden></p>
        <div class="ra-player" hidden>
          <div class="ra-pl"><button class="ra-pb ra-play" type="button" aria-label="Play"></button><div class="ra-wave"></div><span class="ra-time">0:00</span></div>
          <div class="ra-rate"><p>How did you read?</p><div class="ra-stars"></div></div>
          <div class="ra-row"><button class="ra-cta sec ra-again" type="button">Record again</button><button class="ra-cta ra-save" type="button">Save</button></div>
        </div>
        <div class="ra-mine"></div>
      </section>`);
    const box = root.querySelector(".ra"), q = (s) => box.querySelector(s);
    const sub = q(".ra-sub"), start = q(".ra-start"), msg = q(".ra-msg"), player = q(".ra-player"), tips = q(".ra-tips");
    let current = null, rating = 0;

    const stars = () => { q(".ra-stars").innerHTML = [1, 2, 3].map((n) => `<button type="button" data-n="${n}" aria-label="${n} star${n > 1 ? "s" : ""}">${STAR(n <= rating)}</button>`).join(""); q(".ra-stars").querySelectorAll("button").forEach((b) => b.onclick = () => { rating = +b.dataset.n; stars(); }); };
    const renderMine = () => {
      const list = recsOf(r.id);
      q(".ra-mine").innerHTML = list.length ? `<h3>My recordings</h3>${list.map((x) => { const d = new Date(x.date); return `<div class="ra-rec"><button class="ra-pb" type="button" data-id="${x.id}" aria-label="Play recording"></button><div><b>${d.toLocaleDateString("en-US", { month: "short", day: "numeric" })} · ${d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</b><small>${fmt(x.dur)} · <span class="ra-st">${"★".repeat(x.rating)}${"☆".repeat(3 - x.rating)}</span></small></div><button class="ra-del" type="button" data-del="${x.id}">Delete</button></div>`; }).join("")}` : "";
      q(".ra-mine").querySelectorAll(".ra-pb").forEach((b) => bindPlayer(b, list.find((x) => x.id === b.dataset.id)));
      q(".ra-mine").querySelectorAll(".ra-del").forEach((b) => b.onclick = () => {
        if (!confirm("Delete this recording?")) return;
        const m = meta(); m[r.id] = (m[r.id] || []).filter((x) => x.id !== b.dataset.del); if (!m[r.id].length) delete m[r.id]; saveMeta(m);
        delBlob(b.dataset.del).catch(() => {}); renderMine();
      });
    };
    renderMine();

    async function record() {
      msg.hidden = true; player.hidden = true; rating = 0;
      if (!navigator.mediaDevices || !window.MediaRecorder) { msg.textContent = "Recording is not available on this browser."; msg.hidden = false; return; }
      let stream;
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
      catch (e) { msg.textContent = "Please allow microphone access to record yourself."; msg.hidden = false; return; }
      const chunks = [], levels = [];
      const mr = new MediaRecorder(stream);
      const AC = window.AudioContext || window.webkitAudioContext, ac = new AC(), an = ac.createAnalyser(); an.fftSize = 64; ac.createMediaStreamSource(stream).connect(an);
      const tab = document.querySelector(".tabbar"), off = tab && getComputedStyle(tab).display !== "none" ? tab.offsetHeight : 0;
      const bar = document.createElement("div"); bar.className = "ra-bar no-print"; bar.style.bottom = off + "px"; if (!off) bar.style.paddingBottom = "calc(12px + env(safe-area-inset-bottom,0px))";
      bar.innerHTML = `<div class="in"><span class="ra-dot"></span><div><span class="t">0:00</span><span class="lab">Recording…</span></div><div class="ra-lw">${"<i></i>".repeat(24)}</div><button class="ra-stop" type="button"><i></i>Stop</button></div>`;
      document.body.appendChild(bar);
      textEl.classList.add("ra-live"); start.hidden = true; tips.hidden = true;
      sub.textContent = "Recording… read the story out loud. Tap Stop when you finish.";
      textEl.scrollIntoView({ behavior: "smooth", block: "start" });
      const t0 = Date.now(), bars = bar.querySelectorAll(".ra-lw i"), d = new Uint8Array(32); let raf = 0, tick = 0, cancelled = false;
      const loop = () => {
        an.getByteFrequencyData(d);
        const lv = Array.from({ length: 24 }, (_, i) => Math.min(1, d[i] / 200 + 0.05));
        bars.forEach((b, i) => b.style.height = lv[i] * 100 + "%");
        if (Date.now() - tick > 180) { tick = Date.now(); levels.push(lv.reduce((a, b) => a + b) / 24); }
        const s = (Date.now() - t0) / 1000; bar.querySelector(".t").textContent = fmt(s);
        if (s >= 300) finish(); else raf = requestAnimationFrame(loop);
      };
      const cleanup = () => { cancelAnimationFrame(raf); bar.remove(); textEl.classList.remove("ra-live"); stream.getTracks().forEach((t) => t.stop()); ac.close().catch(() => {}); active = null; };
      function finish() { if (mr.state !== "inactive") mr.stop(); }
      mr.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      mr.onstop = () => {
        const dur = (Date.now() - t0) / 1000; cleanup();
        if (cancelled) return;
        const peaks = Array.from({ length: 40 }, (_, i) => +(levels[Math.floor(i * levels.length / 40)] || 0.2).toFixed(2));
        current = { id: `${r.id}-${Date.now()}`, dur, peaks, blob: new Blob(chunks, { type: mr.mimeType || "audio/webm" }) };
        sub.textContent = "Great job! Listen to your recording. Are there any words you want to practice again?";
        player.hidden = false; q(".ra-time").textContent = fmt(dur); wave(q(".ra-wave"), peaks, 0); stars();
        bindPlayer(q(".ra-play"), current, q(".ra-wave"), q(".ra-time"));
        box.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      active = { abort: () => { cancelled = true; finish(); } };
      bar.querySelector(".ra-stop").onclick = finish;
      mr.start(); loop();
    }

    start.onclick = () => { stopActive(); record(); };
    q(".ra-again").onclick = () => { current = null; record(); };
    q(".ra-save").onclick = async () => {
      if (!current) return;
      try { await putBlob(current.id, current.blob); }
      catch (e) { msg.textContent = "We couldn’t save this recording. Please check your phone’s storage."; msg.hidden = false; return; }
      const m = meta(); (m[r.id] = m[r.id] || []).unshift({ id: current.id, date: Date.now(), dur: Math.round(current.dur * 10) / 10, rating, peaks: current.peaks }); saveMeta(m);
      current = null; player.hidden = true; start.hidden = false; tips.hidden = false; start.querySelector("span").textContent = "Record again";
      sub.textContent = "Saved! Read it again another day and compare your recordings.";
      renderMine();
    };
  }

  /* Vista de lectura: agrega la tarjeta Read Aloud */
  const prevReading = window.viewReading;
  window.viewReading = function (id) {
    const v = prevReading(id);
    const r = READINGS.find((x) => x.id === id);
    if (!r || !v.mount) return v;
    const m = v.mount;
    v.mount = function (root) { m(root); mountReadAloud(root, r); };
    return v;
  };

  /* Biblioteca: insignia de micrófono en las lecturas grabadas */
  const prevCard = window.readingCard;
  window.readingCard = function (r) {
    const html = prevCard(r);
    if (!recsOf(r.id).length) return html;
    return html.replace(/(<div class="item-meta">[\s\S]*?)(<\/div>\s*<\/article>\s*)$/, `$1<span class="ra-tag">${MIC_S} Read aloud</span>$2`);
  };
})();

/* ---------- Level Up → abre la biblioteca en la etapa y nivel del alumno ---------- */
(function () {
  const prevLib = window.viewLibrary;
  window.viewLibrary = function () {
    const v = prevLib();
    const m = v.mount;
    v.mount = function (root) {
      m && m(root);
      let pre = null; try { pre = JSON.parse(localStorage.getItem("mova-lib-preset") || "null"); localStorage.removeItem("mova-lib-preset"); } catch (e) {}
      if (!pre) return;
      const tab = root.querySelector(`.stage-tab[data-stage="${pre.stage}"]`); if (tab) tab.click();
      setTimeout(() => { const chip = root.querySelector(`.fchip[data-level="${pre.level}"]`); if (chip) chip.click(); }, 30);
    };
    return v;
  };
})();

/* =====================================================================
   HOLIDAYS — Halloween (lote 14): lecturas en inglés, vitrina de
   temporada, sopas de letras imprimibles y dibujos para colorear.
   ===================================================================== */
(function () {
const NI = "#2A2440", NI2 = "#3A3258", PU = "#E8846B", PU2 = "#F09A80", PU3 = "#D9714F", GO = "#E0B04A", MO = "#F5E7C5";
const pumpkin = (x, y, s, face = true) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0-44c2-10 8-16 16-18" stroke="#7FB89E" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse rx="54" ry="44" fill="${PU}"/><ellipse rx="22" ry="44" fill="${PU2}"/><ellipse cx="-32" rx="14" ry="40" fill="${PU3}" opacity=".5"/><ellipse cx="32" rx="14" ry="40" fill="${PU3}" opacity=".5"/>${face ? `<path d="M-24-12l14 8-14 6zM24-12l-14 8 14 6z" fill="${NI}"/><path d="M-26 14c16 14 36 14 52 0l-8 3-6-6-6 7-6-7-6 7-6-7-6 6z" fill="${NI}"/>` : ""}</g>`;
const bat = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 0c6-6 12-6 16 0 4-6 10-6 16 0-6-1-10 2-16 8-6-6-10-9-16-8z" fill="#16131F"/>`;
const moon = (x, y, bg = NI) => `<circle cx="${x}" cy="${y}" r="24" fill="${MO}"/><circle cx="${x + 10}" cy="${y - 6}" r="22" fill="${bg}"/>`;

/* ---------- Lecturas en inglés ---------- */
READINGS.push(
  {
    id: "kids-halloween-night", level: "A1", stage: "kids", topic: "Halloween", holiday: "halloween", title: "Halloween Night",
    description: "Leo and Mia put on their costumes and go trick-or-treating.",
    text: [
      "Today is October 31. It is Halloween!",
      "Leo is a black cat. He has ears and a long tail. Mia is a witch. She has a big hat and a broom.",
      "Mom has a pumpkin. It has two eyes and a big smile. It is orange and it shines at night.",
      "Leo and Mia go to the houses on their street. They knock on the doors and say, “Trick or treat!”",
      "The neighbors give them candy. Leo has ten candies. Mia has twelve!",
      "At home, they share the candy with Mom and Dad. Happy Halloween!"
    ],
    vocab: [["costume", "special clothes to look like a character"], ["witch", "a woman in stories with a big hat and a broom"], ["pumpkin", "a big orange vegetable"], ["knock", "to hit a door softly with your hand"], ["share", "to give some of your things to other people"]],
    questions: [
      ["What day is Halloween?", ["October 31", "December 25", "May 10"]],
      ["What is Leo’s costume?", ["a black cat", "a witch", "a ghost"]],
      ["What does Mia have?", ["a big hat and a broom", "ears and a tail", "a pumpkin"]],
      ["What do they say at the doors?", ["“Trick or treat!”", "“Good morning!”", "“Happy birthday!”"]],
      ["How many candies does Mia have?", ["twelve", "ten", "two"]]
    ]
  },
  {
    id: "children-the-haunted-classroom", level: "A2", stage: "children", topic: "Halloween", holiday: "halloween", title: "The Haunted Classroom",
    description: "Strange noises in Room 4 the day before Halloween. Is it a ghost?",
    text: [
      "The day before Halloween, the students in Room 4 were decorating their classroom with paper bats and orange lights.",
      "Suddenly, they heard a noise. Scratch, scratch, scratch. It came from the closet at the back of the room. Everyone stopped working.",
      "“It’s a ghost!” whispered Sofía. “Ghosts don’t scratch,” said Daniel, but he looked a little nervous too.",
      "Their teacher, Ms. Garza, walked slowly to the closet. The students held their breath. She opened the door very carefully and…",
      "A small gray kitten jumped out! It was hiding in a box of costumes. It was hungry and a little scared.",
      "The class gave the kitten some milk and named it Boo. Ms. Garza called the school director, and the next day a family from the school adopted Boo. It was the best Halloween surprise ever."
    ],
    vocab: [["decorate", "to make a place look pretty for a special day"], ["noise", "a sound, often loud or strange"], ["whisper", "to speak very quietly"], ["nervous", "a little worried or afraid"], ["adopt", "to take an animal or child into your family"]],
    questions: [
      ["What were the students doing?", ["decorating their classroom", "taking an exam", "eating lunch"]],
      ["Where did the noise come from?", ["the closet", "the window", "the teacher’s desk"]],
      ["What did Sofía think it was?", ["a ghost", "a kitten", "a mouse"]],
      ["What was really in the closet?", ["a small gray kitten", "a ghost", "a bat"]],
      ["What happened to Boo?", ["a family adopted it", "it stayed in the closet", "it ran away"]]
    ]
  },
  {
    id: "teens-the-real-story-of-halloween", level: "B1", stage: "teens", topic: "Halloween", holiday: "halloween", title: "The Real Story of Halloween",
    description: "From an ancient Celtic festival to costumes and candy: how Halloween became what it is today.",
    text: [
      "Every October 31, millions of people put on costumes, carve pumpkins and fill bags with candy. But Halloween didn’t start as a party. Its roots go back more than 2,000 years, to an ancient Celtic festival called Samhain.",
      "The Celts lived in what is now Ireland, Scotland and parts of France. For them, Samhain marked the end of the harvest and the beginning of the dark, cold half of the year. They believed that on that night the boundary between the world of the living and the world of the dead became thin, so they lit huge bonfires and wore animal skins to confuse wandering spirits.",
      "Centuries later, the Church established All Saints’ Day on November 1. The evening before was called All Hallows’ Eve, a name that eventually became “Halloween.”",
      "The famous jack-o’-lantern also has an interesting history. In Ireland, people originally carved faces into turnips and potatoes to scare away evil spirits. When Irish immigrants arrived in the United States in the 1800s, they discovered that pumpkins were bigger and much easier to carve.",
      "Trick-or-treating became popular in the United States in the twentieth century, and from there it spread around the world through movies and television. Today, Halloween is a mix of ancient beliefs, religious traditions and modern pop culture — which may be exactly why so many people enjoy it."
    ],
    vocab: [["roots", "the origin or beginning of something"], ["harvest", "the time when crops are collected from the fields"], ["boundary", "a line that separates two areas"], ["carve", "to cut a shape into something hard"], ["spread", "to move to more places or people"]],
    questions: [
      ["What was the name of the ancient Celtic festival?", ["Samhain", "All Saints’ Day", "Hallows"]],
      ["What did Samhain mark?", ["the end of the harvest and the start of the dark half of the year", "the first day of spring", "the birthday of a Celtic king"]],
      ["Where does the word “Halloween” come from?", ["All Hallows’ Eve", "a Celtic god", "an American movie"]],
      ["What did people in Ireland originally carve?", ["turnips and potatoes", "pumpkins", "apples"]],
      ["How did trick-or-treating spread around the world?", ["through movies and television", "through Celtic songs", "through school books"]]
    ]
  }
);
Object.assign(READING_ART, {
  "kids-halloween-night": scene(NI, `${moon(262, 44)}${bat(70, 40)}${bat(200, 30, .8)}<rect y="148" width="320" height="32" fill="${NI2}"/>${pumpkin(160, 118, .62)}
    <g transform="translate(80 120)"><circle cy="-22" r="13" fill="#16131F"/><path d="M-12-30l4-14 6 10zM12-30l-4-14-6 10z" fill="#16131F"/><circle cx="-5" cy="-23" r="2.4" fill="${GO}"/><circle cx="5" cy="-23" r="2.4" fill="${GO}"/><rect x="-12" y="-10" width="24" height="34" rx="10" fill="#16131F"/><path d="M12 14q22-6 16-30" stroke="#16131F" stroke-width="5" fill="none" stroke-linecap="round"/></g>
    <g transform="translate(240 118)"><circle cy="-20" r="12" fill="#F2C9A8"/><path d="M-26-26h52l-26-34z" fill="#5A3A8A"/><rect x="-26" y="-30" width="52" height="6" rx="3" fill="#5A3A8A"/><path d="M-14-8h28l6 34h-40z" fill="#5A3A8A"/><path d="M22 0l26 30" stroke="#A9774F" stroke-width="4"/><path d="M44 26l12 6-6 8z" fill="${GO}"/></g>`, GO, .25),
  "children-the-haunted-classroom": scene("#E7E2F3", `<rect x="40" y="26" width="140" height="70" rx="6" fill="#2F4F45"/><path d="M60 50h40M60 66h70" stroke="#FFFDFA" stroke-width="3" stroke-linecap="round" opacity=".7"/>${bat(130, 40, .8)}${bat(150, 60, .6)}
    <path d="M20 22q60 18 120 0t120 0" stroke="#7A6A9A" stroke-width="2" fill="none"/>${[40, 80, 120, 160, 200, 240, 280].map((x, i) => `<circle cx="${x}" cy="${26 + (i % 2) * 6}" r="5" fill="${[PU, GO][i % 2]}"/>`).join("")}
    <rect x="214" y="58" width="72" height="104" rx="4" fill="#B98A5E"/><rect x="214" y="58" width="36" height="104" fill="#A9774F"/><circle cx="244" cy="112" r="3" fill="${GO}"/>
    <g transform="translate(268 150)"><ellipse cx="0" cy="0" rx="18" ry="12" fill="#9AA3AE"/><circle cx="-14" cy="-10" r="10" fill="#9AA3AE"/><path d="M-22-16l2-10 6 6zM-8-18l0-10-6 6z" fill="#9AA3AE"/><circle cx="-17" cy="-11" r="1.8" fill="#16131F"/><circle cx="-11" cy="-11" r="1.8" fill="#16131F"/><path d="M16 0q14-6 10-18" stroke="#9AA3AE" stroke-width="4" fill="none" stroke-linecap="round"/></g>
    <rect y="162" width="320" height="18" fill="#CFC6E0"/>${pumpkin(92, 140, .32)}<g transform="translate(150 132)"><circle cy="-14" r="12" fill="#D9A47E"/><path d="M-12-20q12-12 24 0" fill="#2E2A28"/><rect x="-12" y="-2" width="24" height="30" rx="8" fill="#6FA8D6"/></g>`, "#FFFFFF", .5),
  "teens-the-real-story-of-halloween": scene("#1E2340", `<circle cx="70" cy="50" r="26" fill="${MO}"/><path d="M0 140l40-26 50 18 60-30 60 24 50-20 60 22v52H0z" fill="#2E3560"/>
    <g transform="translate(110 120)">${[[-30, 0], [0, -6], [30, 2]].map(([dx, dy]) => `<path d="M${dx - 10} ${dy + 20}q10-50 20 0z" fill="${GO}"/><path d="M${dx - 5} ${dy + 20}q5-30 10 0z" fill="${PU}"/>`).join("")}<rect x="-46" y="20" width="92" height="10" rx="4" fill="#5A3A28"/></g>
    <g transform="translate(220 128)"><ellipse rx="26" ry="22" fill="#E9DCC3"/><path d="M0-22q-2-10 6-14" stroke="#7FB89E" stroke-width="4" fill="none"/><path d="M-12-6l7 4-7 3zM12-6l-7 4 7 3z" fill="#5A3A28"/><path d="M-12 8q12 8 24 0" stroke="#5A3A28" stroke-width="3" fill="none"/></g>
    ${pumpkin(278, 136, .42)}<path d="M200 60l3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" fill="${GO}"/>`, "#6FA8D6", .2)
});

/* Chip de temporada en las tarjetas */
const prevCard = window.readingCard;
window.readingCard = function (r) {
  const h = prevCard(r);
  return r.holiday ? h.replace('<span class="chip">Halloween</span>', '<span class="chip hol-chip">Halloween</span>') : h;
};

/* ---------- Datos de sopas de letras ---------- */
const WS = [
  { id: "halloween-kids", stage: "kids", label: "MOVA Kids", level: "A1", lang: "en", size: 8, dirs: [[0, 1], [1, 0]], words: ["bat", "cat", "hat", "owl", "moon", "candy", "ghost", "witch"] },
  { id: "halloween-children", stage: "children", label: "MOVA Children", level: "A2", lang: "en", size: 10, dirs: [[0, 1], [1, 0], [1, 1]], words: ["pumpkin", "costume", "spider", "candle", "broom", "monster", "haunted", "mask", "skeleton"] },
  { id: "halloween-teens", stage: "teens", label: "MOVA Teens", level: "B1", lang: "en", size: 11, dirs: [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1]], words: ["cauldron", "cobweb", "graveyard", "werewolf", "vampire", "potion", "eerie", "spooky", "lantern", "costume"] },
  { id: "halloween-espanol", stage: "es", label: "Español", level: "1° a 6°", lang: "es", size: 10, dirs: [[0, 1], [1, 0], [1, 1]], words: ["calabaza", "bruja", "fantasma", "disfraz", "dulces", "araña", "escoba", "luna", "vela"] }
];
const plain = (w) => w.normalize("NFD").replace(/[\u0300-\u0302\u0304-\u036f]/g, "").normalize("NFC").toUpperCase().replace(/[^A-ZÑ]/g, "");
const rng = (seed) => { let a = 0; for (const ch of seed) a = (a * 31 + ch.charCodeAt(0)) | 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
function buildWS(ws) {
  const N = ws.size, R = rng(ws.id + "-v1");
  for (let tries = 0; tries < 400; tries++) {
    const g = Array.from({ length: N }, () => Array(N).fill("")), placed = [];
    let ok = true;
    for (const w of ws.words.slice().sort((a, b) => b.length - a.length)) {
      const key = plain(w); let done = false;
      for (let k = 0; k < 300 && !done; k++) {
        const [dr, dc] = ws.dirs[Math.floor(R() * ws.dirs.length)], r0 = Math.floor(R() * N), c0 = Math.floor(R() * N);
        const r1 = r0 + dr * (key.length - 1), c1 = c0 + dc * (key.length - 1);
        if (r1 < 0 || r1 >= N || c1 < 0 || c1 >= N) continue;
        let fit = true; for (let i = 0; i < key.length; i++) { const ch = g[r0 + dr * i][c0 + dc * i]; if (ch && ch !== key[i]) { fit = false; break; } }
        if (!fit) continue;
        const cells = []; for (let i = 0; i < key.length; i++) { g[r0 + dr * i][c0 + dc * i] = key[i]; cells.push((r0 + dr * i) * N + c0 + dc * i); }
        placed.push({ w, cells }); done = true;
      }
      if (!done) { ok = false; break; }
    }
    if (!ok) continue;
    const abc = ws.lang === "es" ? "ABCDEFGHIJLMNÑOPRSTUVZ" : "ABCDEFGHIJKLMNOPRSTUVWY";
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!g[r][c]) g[r][c] = abc[Math.floor(R() * abc.length)];
    return { g, placed };
  }
  return null;
}

/* ---------- Dibujos para colorear (línea negra, tamaño carta) ---------- */
const K = 'fill="#fff" stroke="#1b1b1b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"';
const KN = 'fill="none" stroke="#1b1b1b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"';
const star = (x, y, r) => `<path ${K} stroke-width="4" d="M${x} ${y - r}l${r * .29} ${r * .6} ${r * .66} ${r * .1}-${r * .48} ${r * .46} ${r * .12} ${r * .66}-${r * .59}-${r * .31}-${r * .59} ${r * .31} ${r * .12}-${r * .66}-${r * .48}-${r * .46} ${r * .66}-${r * .1}z"/>`;
const title = (t, y = 92) => `<text x="300" y="${y}" text-anchor="middle" font-family="Poppins, 'Century Gothic', sans-serif" font-size="50" font-weight="800" fill="#fff" stroke="#1b1b1b" stroke-width="3" letter-spacing="1">${t}</text>`;
const lineBat = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" ${K} stroke-width="${4 / s}" d="M0 0c10-14 26-14 34-2 4-8 10-12 16-12 6 0 12 4 16 12 8-12 24-12 34 2-14-2-24 6-30 18-6-6-12-8-20-8s-14 2-20 8C24 6 14-2 0 0z"/>`;
const cimg = (file, alt) => `<img src="${file}" alt="${alt}" loading="lazy" decoding="async">`;
const COLOR = [
  { id: "halloween-little-witch", holiday: "halloween", title: "Little Witch", desc: "A sweet little witch with her pumpkins and a black cat.", file: "color-halloween-little-witch.png" },
  { id: "halloween-friendly-ghost", holiday: "halloween", title: "Friendly Ghost", desc: "A happy ghost with a bucket full of candy.", file: "color-halloween-friendly-ghost.png" },
  { id: "halloween-pumpkin-patch", holiday: "halloween", title: "Pumpkin Patch", desc: "A smiling jack-o’-lantern with its pumpkin friends.", file: "color-halloween-pumpkin-patch.png" },
  { id: "halloween-kitty-potion", holiday: "halloween", title: "Kitty’s Potion", desc: "A little cat in a witch hat stirring a bubbly potion.", file: "color-halloween-kitty-potion.png" },
  { id: "halloween-haunted-house", holiday: "halloween", title: "Haunted House", desc: "A cozy haunted house with smiling bats and a happy moon.", file: "color-halloween-haunted-house.png" }
];
COLOR.forEach((c) => { c.svg = cimg(c.file, c.title + " coloring page"); });

/* ---------- Estilos ---------- */
const st = document.createElement("style");
st.textContent = `.chip.hol-chip{background:#2A2440;color:#F5E7C5;border-color:#2A2440}
.hol-tabs{display:flex;gap:8px;flex-wrap:wrap}.hol-tabs span{padding:8px 16px;border-radius:999px;font-weight:600;font-size:14px;border:1px solid var(--line);background:var(--surface);color:var(--ink-3)}
.hol-tabs span.on{background:#2A2440;color:#F5E7C5;border-color:#2A2440}.hol-tabs span small{font-weight:500;font-size:11px;margin-left:4px;opacity:.8}
.hol-hero{border-radius:24px;overflow:hidden;aspect-ratio:16/7;margin-top:16px}.hol-hero svg{width:100%;height:100%;display:block}
.hol-sub{color:var(--ink-2);margin:-6px 0 14px;font-size:15px}
.color-thumb{background:#fff;display:block;aspect-ratio:16/9;overflow:hidden}.color-thumb img{width:100%!important;height:100%!important;object-fit:contain!important;padding:6px;display:block}
.ws-sheet .ws-grid{display:grid;margin:18px auto 0;border:2px solid #1b1b1b;border-radius:8px;width:min(100%,5.6in);aspect-ratio:1}
.ws-sheet .ws-grid span{display:grid;place-items:center;font-weight:700;font-size:clamp(12px,3.6vw,22px);border-right:1px solid #ddd;border-bottom:1px solid #ddd}
.ws-sheet .ws-grid span.k{background:#FBE3DA}
.ws-bank{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:18px}.ws-bank span{padding:4px 14px;border:1.5px solid #1b1b1b;border-radius:999px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;font-size:13px}
.ws-key{break-before:page;margin-top:36px}.ws-key h3{font-size:15px;margin:0 0 6px}.ws-key .ws-grid{width:min(100%,3.6in)}.ws-key .ws-grid span{font-size:13px}
.color-sheet .art{margin-top:10px}.color-sheet .art img{width:100%;height:auto;max-height:8.6in;object-fit:contain;display:block;margin:0 auto}
@media print{.color-sheet .sheet-name{margin-top:6px}.ws-sheet .ws-grid span.k{background:none}.ws-key .ws-grid span.k{background:#ddd!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}}`;
document.head.appendChild(st);

/* ---------- Tarjetas ---------- */
const wsThumb = (ws) => scene(NI, `${moon(276, 40)}${bat(40, 30, .8)}<g transform="translate(110 40)">${Array.from({ length: 16 }, (_, i) => `<rect x="${(i % 4) * 26}" y="${Math.floor(i / 4) * 26}" width="24" height="24" rx="5" fill="${[2, 6, 10].includes(i) ? PU : "#FFFDFA"}" opacity="${[2, 6, 10].includes(i) ? 1 : .9}"/><text x="${(i % 4) * 26 + 12}" y="${Math.floor(i / 4) * 26 + 17}" font-family="Poppins,sans-serif" font-size="13" font-weight="800" text-anchor="middle" fill="${NI}">${plain(ws.words.join("")).charAt(i * 2) || "A"}</text>`).join("")}</g>${pumpkin(258, 140, .36)}`, GO, .25);
const wsGameHref = (ws) => ws.lang === "es" ? "juego-sopa-de-letras.html?topic=halloween&lang=es" : `juego-sopa-de-letras.html?topic=halloween&stage=${ws.stage}`;
const item = (href, thumb, chips, t, d, ext) => `<article class="item"><div class="thumb" aria-hidden="true">${thumb}</div><div class="item-top">${chips.map((c) => `<span class="chip${c === "Halloween" ? " hol-chip" : ""}">${esc(c)}</span>`).join("")}</div><h3 class="item-title"><a class="stretch" href="${href}"${ext ? "" : ""}>${esc(t)}</a></h3><p class="item-desc">${esc(d)}</p></article>`;
const wsPlayCard = (ws) => item(wsGameHref(ws), wsThumb(ws), ["Halloween", ws.label, ws.level], `WordSearch: ${ws.lang === "es" ? "Sopa de letras" : ws.label.replace("MOVA ", "")}`, ws.lang === "es" ? "Encuentra las palabras de Halloween en español." : "Find the hidden Halloween words and hear how they sound.");
const wsPrintCard = (ws) => item(`#/wordsearch/${ws.id}`, wsThumb(ws), ["Halloween", ws.label, "Print"], ws.lang === "es" ? "Sopa de letras para imprimir" : `Printable WordSearch · ${ws.label.replace("MOVA ", "")}`, ws.lang === "es" ? "Hoja tamaño carta con banco de palabras y clave de respuestas." : "Letter-size sheet with a word bank and an answer key.");
const colorCard = (c) => item(`#/coloring/${c.id}`, `<div class="color-thumb">${c.svg}</div>`, ["Halloween", "Coloring page"], c.title, c.desc);

const HERO = scene(NI, `${moon(268, 46)}${bat(60, 40)}${bat(190, 26, .8)}${bat(110, 70, .6)}<rect y="150" width="320" height="30" fill="${NI2}"/>${pumpkin(160, 120, .62)}${pumpkin(70, 150, .3, false)}${pumpkin(250, 148, .34)}`, GO, .25);

/* ---------- Vitrina de temporada ---------- */
function viewHolidays() {
  const en = READINGS.filter((r) => r.holiday === "halloween");
  const es = (window.MOVA_ES ? window.MOVA_ES.LECTURAS.filter((l) => l.tema === "halloween") : []);
  const tabs = [["Halloween", "", true], ["Thanksgiving", "Nov", false], ["Christmas", "Dec", false], ["New Year’s Eve", "Dec 31", false]];
  return {
    title: "Halloween",
    html: `
    <section class="page-head wrap">
      <p class="kicker">This season</p>
      <h1>Halloween</h1>
      <p class="lead">Lecturas, juegos y dibujos para colorear de temporada, para todas las etapas.</p>
      <div class="hol-tabs" aria-label="Holidays">${tabs.map(([t, d, on]) => `<span class="${on ? "on" : ""}">${t}${on ? "" : `<small>· coming soon</small>`}</span>`).join("")}</div>
      <div class="hol-hero" aria-hidden="true">${HERO}</div>
    </section>
    <section class="wrap section" aria-labelledby="h-read"><div class="section-head"><h2 id="h-read">Read</h2></div>
      <p class="hol-sub">English readings for Kids, Children and Teens.</p>
      <div class="grid cols">${en.map((r) => window.readingCard(r)).join("")}</div>
      ${es.length ? `<p class="hol-sub" style="margin-top:22px">Lecturas en español.</p><div class="grid cols">${es.map((l) => window.MOVA_ES.esCard(l)).join("")}</div>` : ""}
    </section>
    <section class="wrap section" aria-labelledby="h-play"><div class="section-head"><h2 id="h-play">Play</h2></div>
      <div class="grid cols">${WS.map(wsPlayCard).join("")}</div>
    </section>
    <section class="wrap section" aria-labelledby="h-print"><div class="section-head"><h2 id="h-print">Print &amp; Color</h2><a href="#/coloring">All coloring pages</a></div>
      <div class="grid cols">${COLOR.filter((c) => c.holiday === "halloween").map(colorCard).join("")}${WS.map(wsPrintCard).join("")}</div>
    </section>`
  };
}

/* ---------- Coloring Pages (lista) ---------- */
function viewColoring() {
  return {
    title: "Coloring Pages",
    html: `
    <section class="page-head wrap">
      <a class="back" href="#/resources">${ico("back", 18)} Print &amp; Learn</a>
      <p class="kicker">Print &amp; Color</p>
      <h1>Coloring Pages</h1>
      <p class="lead">Dibujos para colorear y sopas de letras de temporada, listos para imprimir en tamaño carta.</p>
    </section>
    <section class="wrap section"><div class="section-head"><h2>Halloween</h2></div>
      <div class="grid cols">${COLOR.map(colorCard).join("")}</div>
    </section>
    <section class="wrap section"><div class="section-head"><h2>Holiday WordSearch</h2></div>
      <div class="grid cols">${WS.map(wsPrintCard).join("")}</div>
    </section>`
  };
}
const printHead = (back, backLabel, chips, t, d) => `
    <div class="narrow no-print"><div class="reading-head">
      <a class="back" href="${back}">${ico("back", 18)} ${backLabel}</a>
      <div class="chips">${chips.map((c) => `<span class="chip${c === "Halloween" ? " hol-chip" : ""}">${esc(c)}</span>`).join("")}</div>
      <h1>${esc(t)}</h1><p class="lead">${esc(d)}</p>
      <div class="actions"><button class="btn btn-primary" type="button" data-action="print">${ico("print", 20)} Print or save as PDF</button></div>
      <p class="print-hint">Para guardar como PDF, elija “Guardar como PDF” en el destino de impresión. Tamaño carta.</p>
    </div></div>`;
function viewColorPage(id) {
  const c = COLOR.find((x) => x.id === id);
  if (!c) return viewNotFound("We couldn’t find that coloring page.", "#/coloring", "Coloring Pages");
  return { title: c.title, html: printHead("#/coloring", "Coloring Pages", ["Halloween", "Coloring page"], c.title, c.desc) + `
    <div class="wrap sheet-wrap"><div class="sheet color-sheet"><div class="sheet-top"><b>MOVA</b><span>Learning Studio</span></div><div class="sheet-name"><span>Name:</span><span>Date:</span></div><div class="art">${c.svg}</div></div></div>` };
}
function viewWsPrint(id) {
  const ws = WS.find((x) => x.id === id), res = ws && buildWS(ws);
  if (!res) return viewNotFound("We couldn’t find that word search.", "#/coloring", "Coloring Pages");
  const N = ws.size, keyCells = new Set(res.placed.flatMap((p) => p.cells));
  const grid = (key) => `<div class="ws-grid" style="grid-template-columns:repeat(${N},1fr)">${res.g.flat().map((ch, i) => `<span class="${key && keyCells.has(i) ? "k" : ""}">${ch}</span>`).join("")}</div>`;
  const es = ws.lang === "es";
  const tTitle = es ? "Sopa de letras de Halloween" : "Halloween WordSearch";
  return { title: tTitle, html: printHead("#/coloring", "Coloring Pages", ["Halloween", ws.label, ws.level], tTitle, es ? "Encuentra las palabras escondidas. Incluye clave de respuestas en la segunda hoja." : "Find the hidden words. The answer key is on the second page.") + `
    <div class="wrap sheet-wrap"><div class="sheet ws-sheet"><div class="sheet-top"><b>MOVA</b><span>Learning Studio</span></div><div class="sheet-name"><span>Name:</span><span>Date:</span></div>
      <h2 class="sheet-title">${tTitle}</h2><p class="sheet-instr">${es ? "Encuentra y encierra las palabras del banco." : `Find and circle the words. They go ${ws.dirs.length > 3 ? "in many directions" : ws.dirs.length === 3 ? "across, down and diagonally" : "across and down"}.`}</p>
      ${grid(false)}<div class="ws-bank">${res.placed.map((p) => p.w).sort().map((w) => `<span>${esc(w)}</span>`).join("")}</div>
      <div class="ws-key"><h3>${es ? "Clave de respuestas" : "Answer key"}</h3>${grid(true)}</div>
      <div class="sheet-foot"><span>MOVA Centro Pedagógico</span><span>${esc(ws.label)} · ${esc(ws.level)}</span></div></div></div>` };
}

ROUTES.holidays = () => viewHolidays();
ROUTES.coloring = (p) => (p[0] ? viewColorPage(p[0]) : viewColoring());
ROUTES.wordsearch = (p) => viewWsPrint(p[0]);

/* Accesos en Print & Learn */
const prevRes = window.viewResources;
window.viewResources = function () {
  const v = prevRes();
  v.html = v.html.replace(/(<\/section>)/, `$1<section class="wrap" style="margin-top:4px"><a class="es-banner" href="#/coloring"><span class="mark" style="background:#2A2440;color:#F5E7C5">${ico("print", 22)}</span><span><b>Coloring Pages &amp; Holidays</b><small>Dibujos para colorear y sopas de letras de Halloween para imprimir.</small></span>${ico("arrow", 20)}</a></section>`);
  return v;
};
})();

/* ---------- Inicio reorganizado, Para familias y MOVA (lote 13) ---------- */
(function () {
  const FAM_CSS = ".fam-page{--coral-c:var(--chalk-coral);--coral-s:var(--coral-soft);--sky-c:var(--chalk-sky);--sky-s:var(--sky-soft);--mustard-c:var(--chalk-mustard);--mustard-s:var(--mustard-soft);--mint-c:var(--chalk-mint);--mint-s:var(--mint-soft);margin:0;color:var(--ink);font-family:Poppins,\"Century Gothic\",system-ui,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased;\n\nbackground-image:radial-gradient(circle,#E8846B 3.5px,transparent 4px),radial-gradient(circle,#6FA8D6 3.5px,transparent 4px),radial-gradient(circle,#E0B04A 3.5px,transparent 4px),radial-gradient(circle,#7FB89E 3.5px,transparent 4px);\nbackground-size:120px 120px;background-position:0 0,60px 30px,30px 75px,90px 100px;;margin:0;padding:0}.fam-page .fam-wrap{max-width:720px;margin:0 auto;padding:22px 16px 60px}.fam-page .hero{position:relative;overflow:hidden;background:var(--surface);border-radius:28px;padding:28px 22px 26px;box-shadow:var(--shadow)}.fam-page .hero .blob{position:absolute;border-radius:50%;opacity:.9}.fam-page .eyebrow{display:inline-block;font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:var(--coral-c);padding:5px 12px;border-radius:999px;margin:0 0 14px;position:relative}.fam-page h1{position:relative;font-size:clamp(30px,8.5vw,44px);line-height:1.08;font-weight:800;color:var(--navy);margin:0 0 14px;letter-spacing:-.02em}.fam-page h1 .c1{color:var(--coral-c)}.fam-page h1 .c2{color:var(--sky-c)}.fam-page h1 .c3{color:var(--mustard-c)}.fam-page h1 .c4{color:var(--mint-c)}.fam-page .lead{position:relative;font-family:Literata,Georgia,serif;font-size:17.5px;color:var(--ink-2);margin:0;max-width:34em}.fam-page .hero-art{position:relative;display:block;width:100%;max-width:340px;margin:20px auto 0}.fam-page h2{font-size:22px;font-weight:800;color:var(--navy);margin:40px 4px 4px;display:flex;align-items:center;gap:10px}.fam-page h2 i{width:12px;height:12px;border-radius:50%;flex:none}.fam-page .sub{color:var(--ink-2);font-size:15px;margin:0 4px 16px}.fam-page .ages{display:grid;gap:12px}.fam-page .age{border-radius:22px;padding:18px 18px 16px;display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start}.fam-page .age .num{width:58px;height:58px;border-radius:18px;background:#fff;display:grid;place-items:center;font-weight:800;font-size:16px;box-shadow:0 6px 14px -8px rgba(0,0,0,.25)}.fam-page .age h3{margin:0;font-size:17px;font-weight:700;color:var(--navy)}.fam-page .age p{margin:2px 0 0;font-size:14.5px;color:var(--ink-2)}.fam-page .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.fam-page .chips span{font-size:12px;font-weight:600;padding:4px 11px;border-radius:999px;background:#fff;color:var(--ink-2)}.fam-page .ideas{display:grid;gap:12px}.fam-page @media(min-width:600px){.ideas{grid-template-columns:1fr 1fr}.fam-page }\n.idea{background:var(--surface);border-radius:22px;overflow:hidden;box-shadow:var(--shadow)}.fam-page .idea .art{height:118px;display:grid;place-items:center}.fam-page .idea .art svg{height:96px;width:auto}.fam-page .idea .tx{padding:14px 16px 16px}.fam-page .idea h4{margin:0 0 3px;font-size:16px;color:var(--navy)}.fam-page .idea p{margin:0;font-size:14px;color:var(--ink-2)}.fam-page .tips{background:var(--surface);border-radius:24px;padding:8px 18px;box-shadow:var(--shadow)}.fam-page .tip{display:grid;grid-template-columns:44px 1fr;gap:12px;padding:14px 0;border-top:2px dotted var(--line)}.fam-page .tip:first-child{border-top:0}.fam-page .tip .ic{width:44px;height:44px;border-radius:14px;display:grid;place-items:center}.fam-page .tip .ic svg{width:22px;height:22px}.fam-page .tip h4{margin:0;font-size:15.5px;color:var(--navy)}.fam-page .tip p{margin:0;font-size:14px;color:var(--ink-2)}.fam-page .close{position:relative;overflow:hidden;margin-top:36px;background:var(--navy);color:#fff;border-radius:26px;padding:26px 22px}.fam-page .close p{position:relative;margin:0;font-family:Literata,Georgia,serif;font-size:19px;line-height:1.5}.fam-page .close small{position:relative;display:block;margin-top:14px;font-size:13px;color:#C9D6E6}.fam-page .close a{color:#fff}.fam-page .close .d{position:absolute;border-radius:50%}";
  const FAM_HTML = "<div class=\"fam-page\"><div class=\"fam-wrap\">\n\n  <section class=\"hero\">\n    <span class=\"blob\" style=\"width:150px;height:150px;background:var(--mustard-s);right:-50px;top:-50px\"></span>\n    <span class=\"blob\" style=\"width:80px;height:80px;background:var(--sky-s);right:60px;top:40px\"></span>\n    <span class=\"blob\" style=\"width:110px;height:110px;background:var(--mint-s);left:-40px;bottom:-40px\"></span>\n    <p class=\"eyebrow\">Para familias</p>\n    <h1>Aprender <span class=\"c1\">jugando</span>,<br>aprender <span class=\"c2\">juntos</span></h1>\n    <p class=\"lead\">MOVA Learning Studio es un rinc\u00f3n para practicar ingl\u00e9s, matem\u00e1ticas y lectoescritura con historias, juegos y peque\u00f1os retos. No es una tarea m\u00e1s: es un ratito para compartir con sus hijos, en el momento que mejor les funcione.</p>\n    <svg class=\"hero-art\" viewBox=\"0 0 340 150\" aria-hidden=\"true\">\n      <ellipse cx=\"170\" cy=\"138\" rx=\"150\" ry=\"9\" fill=\"#EDE6DA\"/>\n      <rect x=\"40\" y=\"70\" width=\"120\" height=\"68\" rx=\"10\" fill=\"#6FA8D6\"/><rect x=\"48\" y=\"62\" width=\"104\" height=\"12\" rx=\"4\" fill=\"#FFFDFA\"/>\n      <text x=\"100\" y=\"117\" text-anchor=\"middle\" font-family=\"Poppins\" font-weight=\"800\" font-size=\"30\" fill=\"#FFFDFA\">1+2</text>\n      <rect x=\"180\" y=\"40\" width=\"74\" height=\"74\" rx=\"14\" fill=\"#E0B04A\" transform=\"rotate(-8 217 77)\"/><text x=\"217\" y=\"90\" text-anchor=\"middle\" font-family=\"Poppins\" font-weight=\"800\" font-size=\"40\" fill=\"#FFFDFA\" transform=\"rotate(-8 217 77)\">A</text>\n      <rect x=\"250\" y=\"76\" width=\"56\" height=\"56\" rx=\"12\" fill=\"#E8846B\" transform=\"rotate(10 278 104)\"/><text x=\"278\" y=\"116\" text-anchor=\"middle\" font-family=\"Poppins\" font-weight=\"800\" font-size=\"30\" fill=\"#FFFDFA\" transform=\"rotate(10 278 104)\">b</text>\n      <circle cx=\"120\" cy=\"34\" r=\"16\" fill=\"#7FB89E\"/><path d=\"M113 34l5 5 9-10\" stroke=\"#FFFDFA\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <path d=\"M300 30l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z\" fill=\"#E0B04A\"/>\n      <path d=\"M30 40l3 6 6 1-5 4 1 6-5-3-5 3 1-6-5-4 6-1z\" fill=\"#E8846B\"/>\n    </svg>\n  </section>\n\n  <h2><i style=\"background:var(--coral-c)\"></i>\u00bfQu\u00e9 les puede gustar?</h2>\n  <p class=\"sub\">Algunas ideas seg\u00fan la edad. Pueden explorar libremente: aqu\u00ed cada quien va a su ritmo.</p>\n  <div class=\"ages\">\n    <div class=\"age\" style=\"background:var(--coral-s)\"><div class=\"num\" style=\"color:var(--coral)\">3\u20136</div>\n      <div><h3>Los m\u00e1s peque\u00f1os</h3><p>Escuchar palabras, ver dibujos y descubrir las letras con Mochi.</p>\n      <div class=\"chips\"><span>Flashcards</span><span>Lee con Mochi</span><span>Cuentos Kids</span></div></div></div>\n    <div class=\"age\" style=\"background:var(--sky-s)\"><div class=\"num\" style=\"color:var(--sky)\">6\u201311</div>\n      <div><h3>Primaria</h3><p>Historias divertidas, juegos de palabras y retos de matem\u00e1ticas.</p>\n      <div class=\"chips\"><span>Lecturas Children</span><span>Juegos</span><span>Para imprimir</span></div></div></div>\n    <div class=\"age\" style=\"background:var(--mint-s)\"><div class=\"num\" style=\"color:var(--mint)\">12+</div>\n      <div><h3>Secundaria y prepa</h3><p>Lecturas sobre temas que les interesan y retos para medir su nivel.</p>\n      <div class=\"chips\"><span>Lecturas Teens</span><span>Level Up</span><span>TOEFL Practice</span></div></div></div>\n  </div>\n\n  <h2><i style=\"background:var(--sky-c)\"></i>Ideas para un ratito juntos</h2>\n  <p class=\"sub\">Escojan la que m\u00e1s les guste. Cinco minutos o media hora, lo que les acomode.</p>\n  <div class=\"ideas\">\n    <div class=\"idea\"><div class=\"art\" style=\"background:var(--sky-s)\">\n      <svg viewBox=\"0 0 120 96\"><circle cx=\"92\" cy=\"22\" r=\"13\" fill=\"#E0B04A\"/><circle cx=\"98\" cy=\"18\" r=\"11\" fill=\"#DDEBF7\"/><path d=\"M14 30c14-6 30-6 46 4v54c-16-10-32-10-46-4z\" fill=\"#6FA8D6\"/><path d=\"M106 30c-14-6-30-6-46 4v54c16-10 32-10 46-4z\" fill=\"#2F6FA6\"/><path d=\"M22 46c10-3 20-2 30 3M22 58c10-3 20-2 30 3M68 49c10-5 20-6 30-3M68 61c10-5 20-6 30-3\" stroke=\"#FFFDFA\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".7\"/></svg></div>\n      <div class=\"tx\"><h4>Un cuento antes de dormir</h4><p>Escojan una lectura, esc\u00fachenla con el audio y platiquen qu\u00e9 pas\u00f3.</p></div></div>\n    <div class=\"idea\"><div class=\"art\" style=\"background:var(--mustard-s)\">\n      <svg viewBox=\"0 0 120 96\"><rect x=\"16\" y=\"18\" width=\"38\" height=\"38\" rx=\"8\" fill=\"#E0B04A\"/><rect x=\"62\" y=\"18\" width=\"38\" height=\"38\" rx=\"8\" fill=\"#E8846B\"/><rect x=\"16\" y=\"62\" width=\"38\" height=\"24\" rx=\"8\" fill=\"#7FB89E\"/><rect x=\"62\" y=\"62\" width=\"38\" height=\"24\" rx=\"8\" fill=\"#6FA8D6\"/><text x=\"35\" y=\"45\" text-anchor=\"middle\" font-family=\"Poppins\" font-weight=\"800\" font-size=\"20\" fill=\"#fff\">c</text><text x=\"81\" y=\"45\" text-anchor=\"middle\" font-family=\"Poppins\" font-weight=\"800\" font-size=\"20\" fill=\"#fff\">a</text><path d=\"M104 10l3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z\" fill=\"#C35A3F\"/></svg></div>\n      <div class=\"tx\"><h4>Un reto en familia</h4><p>Jueguen una partida juntos y vean qui\u00e9n encuentra m\u00e1s palabras.</p></div></div>\n    <div class=\"idea\"><div class=\"art\" style=\"background:var(--coral-s)\">\n      <svg viewBox=\"0 0 120 96\"><rect x=\"46\" y=\"14\" width=\"28\" height=\"46\" rx=\"14\" fill=\"#E8846B\"/><path d=\"M36 46a24 24 0 0 0 48 0\" stroke=\"#C35A3F\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M60 70v14M46 86h28\" stroke=\"#C35A3F\" stroke-width=\"5\" stroke-linecap=\"round\"/><path d=\"M16 40v12M24 32v28M96 32v28M104 40v12\" stroke=\"#E0B04A\" stroke-width=\"5\" stroke-linecap=\"round\"/></svg></div>\n      <div class=\"tx\"><h4>Esc\u00fachense leer</h4><p>Graben una lectura en voz alta y esc\u00fachenla juntos. Suele dar mucha risa y mucho orgullo.</p></div></div>\n    <div class=\"idea\"><div class=\"art\" style=\"background:var(--mint-s)\">\n      <svg viewBox=\"0 0 120 96\"><rect x=\"24\" y=\"12\" width=\"60\" height=\"76\" rx=\"8\" fill=\"#FFFDFA\"/><path d=\"M34 30h40M34 42h30M34 54h36\" stroke=\"#7FB89E\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"56\" cy=\"72\" r=\"8\" fill=\"#E0B04A\"/><path d=\"M82 70l18-38 8 4-18 38-10 4z\" fill=\"#6FA8D6\"/><path d=\"M98 34l8 4\" stroke=\"#2F6FA6\" stroke-width=\"4\"/></svg></div>\n      <div class=\"tx\"><h4>Imprimir y colorear</h4><p>Dibujos para colorear y hojas de pr\u00e1ctica para disfrutar con l\u00e1piz y colores, lejos de la pantalla.</p></div></div>\n  </div>\n\n  <h2><i style=\"background:var(--mustard-c)\"></i>\u00bfY si yo no hablo ingl\u00e9s?</h2>\n  <p class=\"sub\">\u00a1Mejor a\u00fan! Pueden descubrirlo juntos.</p>\n  <div class=\"tips\">\n    <div class=\"tip\"><div class=\"ic\" style=\"background:var(--sky-s);color:var(--sky)\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10v4M7 7v10M11 4v16M15 8v8M19 11v2\"/></svg></div>\n      <div><h4>El audio los acompa\u00f1a</h4><p>Cada lectura se puede escuchar, as\u00ed que nadie tiene que saber pronunciar.</p></div></div>\n    <div class=\"tip\"><div class=\"ic\" style=\"background:var(--mint-s);color:var(--mint)\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z\"/></svg></div>\n      <div><h4>D\u00e9jense ense\u00f1ar</h4><p>P\u00eddanle que les explique una palabra nueva. A los ni\u00f1os les encanta ser el maestro.</p></div></div>\n    <div class=\"tip\"><div class=\"ic\" style=\"background:var(--coral-s);color:var(--coral)\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 20s-7-4.4-9-8.6C1.7 8.6 3.6 5 7 5c2 0 3.2 1.2 5 3 1.8-1.8 3-3 5-3 3.4 0 5.3 3.6 4 6.4C19 15.6 12 20 12 20z\"/></svg></div>\n      <div><h4>Celebren cada logro</h4><p>Una historia terminada o una palabra nueva merecen un \u201c\u00a1qu\u00e9 bien!\u201d.</p></div></div>\n  </div>\n\n  <div class=\"close\">\n    <span class=\"d\" style=\"width:90px;height:90px;background:#E8846B;opacity:.25;right:-24px;top:-24px\"></span>\n    <span class=\"d\" style=\"width:46px;height:46px;background:#E0B04A;opacity:.3;right:56px;bottom:-14px\"></span>\n    <span class=\"d\" style=\"width:28px;height:28px;background:#7FB89E;opacity:.4;left:18px;bottom:16px\"></span>\n    <p>Aqu\u00ed no hay calificaciones ni pendientes. Solo historias, juegos y momentos para disfrutar en familia.</p>\n    <small>Con cari\u00f1o, MOVA Centro Pedag\u00f3gico \u00b7 <a href=\"https://wa.me/528123426038\">Escr\u00edbanos por WhatsApp</a></small>\n  </div>\n</div></div>";
  const DOTS = "<circle cx=\"24\" cy=\"22\" r=\"5\" fill=\"#E8846B\" opacity=\"0.9\"/><circle cx=\"74\" cy=\"50\" r=\"5\" fill=\"#E0B04A\" opacity=\"0.9\"/><circle cx=\"122\" cy=\"14\" r=\"5\" fill=\"#6FA8D6\" opacity=\"0.9\"/><circle cx=\"232\" cy=\"16\" r=\"5\" fill=\"#7FB89E\" opacity=\"0.9\"/><circle cx=\"296\" cy=\"44\" r=\"5\" fill=\"#E8846B\" opacity=\"0.9\"/><circle cx=\"38\" cy=\"100\" r=\"5\" fill=\"#E0B04A\" opacity=\"0.9\"/><circle cx=\"14\" cy=\"156\" r=\"5\" fill=\"#6FA8D6\" opacity=\"0.9\"/><circle cx=\"286\" cy=\"164\" r=\"5\" fill=\"#7FB89E\" opacity=\"0.9\"/>";
  const HALLO = "<svg viewBox=\"0 0 320 180\" preserveAspectRatio=\"xMidYMid slice\"><rect width=\"320\" height=\"180\" fill=\"#2A2440\"/><circle cx=\"24\" cy=\"22\" r=\"5\" fill=\"#E8846B\" opacity=\"0.9\"/><circle cx=\"74\" cy=\"50\" r=\"5\" fill=\"#E0B04A\" opacity=\"0.9\"/><circle cx=\"122\" cy=\"14\" r=\"5\" fill=\"#6FA8D6\" opacity=\"0.9\"/><circle cx=\"232\" cy=\"16\" r=\"5\" fill=\"#7FB89E\" opacity=\"0.9\"/><circle cx=\"296\" cy=\"44\" r=\"5\" fill=\"#E8846B\" opacity=\"0.9\"/><circle cx=\"38\" cy=\"100\" r=\"5\" fill=\"#E0B04A\" opacity=\"0.9\"/><circle cx=\"14\" cy=\"156\" r=\"5\" fill=\"#6FA8D6\" opacity=\"0.9\"/><circle cx=\"286\" cy=\"164\" r=\"5\" fill=\"#7FB89E\" opacity=\"0.9\"/>\n<circle cx=\"258\" cy=\"46\" r=\"24\" fill=\"#F5E7C5\"/><circle cx=\"268\" cy=\"40\" r=\"22\" fill=\"#2A2440\"/>\n<path d=\"M60 52c6-6 12-6 16 0 4-6 10-6 16 0-6-1-10 2-16 8-6-6-10-9-16-8z\" fill=\"#16131F\"/><path d=\"M196 30c5-5 10-5 13 0 3-5 8-5 13 0-5-1-8 2-13 6-5-4-8-7-13-6z\" fill=\"#16131F\"/>\n<rect y=\"150\" width=\"320\" height=\"30\" fill=\"#3A3258\"/>\n<path d=\"M160 74c2-10 8-16 16-18\" stroke=\"#7FB89E\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"/>\n<ellipse cx=\"160\" cy=\"118\" rx=\"54\" ry=\"44\" fill=\"#E8846B\"/><ellipse cx=\"160\" cy=\"118\" rx=\"22\" ry=\"44\" fill=\"#F09A80\"/><ellipse cx=\"128\" cy=\"118\" rx=\"14\" ry=\"40\" fill=\"#D9714F\" opacity=\".5\"/><ellipse cx=\"192\" cy=\"118\" rx=\"14\" ry=\"40\" fill=\"#D9714F\" opacity=\".5\"/>\n<path d=\"M136 106l14 8-14 6zM184 106l-14 8 14 6z\" fill=\"#2A2440\"/><path d=\"M134 132c16 14 36 14 52 0l-8 3-6-6-6 7-6-7-6 7-6-7-6 6z\" fill=\"#2A2440\"/>\n<g transform=\"translate(60 120)\"><rect x=\"-4\" y=\"6\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#E0B04A\"/><path d=\"M-14 10l10-4v12l-10-4zM14 10L4 6v12l10-4z\" fill=\"#E0B04A\"/><circle cx=\"0\" cy=\"12\" r=\"7\" fill=\"#7FB89E\"/></g>\n<g transform=\"translate(250 126)\"><circle r=\"12\" fill=\"#6FA8D6\"/><path d=\"M-8-4a10 10 0 0 1 16 0\" stroke=\"#fff\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/></g></svg>";
  const FAMART = "<svg viewBox=\"0 0 320 180\" preserveAspectRatio=\"xMidYMid slice\"><rect width=\"320\" height=\"180\" fill=\"#DCEFE5\"/><circle cx=\"24\" cy=\"22\" r=\"5\" fill=\"#E8846B\" opacity=\"0.9\"/><circle cx=\"74\" cy=\"50\" r=\"5\" fill=\"#E0B04A\" opacity=\"0.9\"/><circle cx=\"122\" cy=\"14\" r=\"5\" fill=\"#6FA8D6\" opacity=\"0.9\"/><circle cx=\"232\" cy=\"16\" r=\"5\" fill=\"#7FB89E\" opacity=\"0.9\"/><circle cx=\"296\" cy=\"44\" r=\"5\" fill=\"#E8846B\" opacity=\"0.9\"/><circle cx=\"38\" cy=\"100\" r=\"5\" fill=\"#E0B04A\" opacity=\"0.9\"/><circle cx=\"14\" cy=\"156\" r=\"5\" fill=\"#6FA8D6\" opacity=\"0.9\"/><circle cx=\"286\" cy=\"164\" r=\"5\" fill=\"#7FB89E\" opacity=\"0.9\"/>\n<rect y=\"148\" width=\"320\" height=\"32\" fill=\"#C6E3D3\"/>\n<circle cx=\"122\" cy=\"62\" r=\"20\" fill=\"#F2C9A8\"/><path d=\"M102 58c2-16 38-18 40 0-6-6-14-8-20-8s-14 2-20 8z\" fill=\"#5B3A2A\"/><path d=\"M88 150c0-30 15-54 34-54s34 24 34 54z\" fill=\"#3F8466\"/>\n<circle cx=\"196\" cy=\"86\" r=\"15\" fill=\"#F2C9A8\"/><path d=\"M181 84c0-14 30-14 30 0-4-6-10-7-15-7s-11 1-15 7z\" fill=\"#2E2A28\"/><path d=\"M174 150c0-24 10-44 22-44s22 20 22 44z\" fill=\"#E8846B\"/>\n<g transform=\"translate(160 128) rotate(-6)\"><path d=\"M-32 0c10-6 22-6 32 0v22c-10-6-22-6-32 0z\" fill=\"#6FA8D6\"/><path d=\"M32 0c-10-6-22-6-32 0v22c10-6 22-6 32 0z\" fill=\"#2F6FA6\"/></g>\n<path d=\"M248 38l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z\" fill=\"#E0B04A\"/><path d=\"M62 40l3 6 6 1-5 4 1 6-5-3-5 3 1-6-5-4 6-1z\" fill=\"#E8846B\"/></svg>";
  const st = document.createElement("style");
  st.textContent = FAM_CSS + `
.fam-page h1 span{display:inline;width:auto;position:static}.fam-page h1 span::after{content:none;display:none}
.areas .area:last-child:nth-child(odd){grid-column:auto}
.areas .area.pv-wide{grid-column:1/-1;display:grid;grid-template-columns:42% 1fr;gap:14px;align-items:center}
.areas .area.pv-wide .thumb{margin:-8px 0 -8px -8px}
@media (min-width:860px){.areas.pv-areas{grid-template-columns:repeat(4,1fr)}.areas .area.pv-wide{grid-column:1/-1;grid-template-columns:30% 1fr}}
.pv-gthumb{aspect-ratio:16/9;border-radius:14px;overflow:hidden}.pv-gthumb svg{width:100%;height:100%;display:block}
.cefr-row{display:flex;flex-wrap:wrap;gap:5px;margin-top:10px}.cefr-row span{font-size:11px;font-weight:700;padding:3px 8px;border-radius:999px;color:var(--ink-2)}
.pv-card{display:block;background:var(--surface);border:1px solid var(--line);border-radius:24px;padding:12px 12px 18px;text-decoration:none;color:var(--ink);box-shadow:var(--shadow)}
.pv-card .art{aspect-ratio:16/9;border-radius:16px;overflow:hidden;margin-bottom:12px}.pv-card .art svg{width:100%;height:100%;display:block}
.pv-card .tg{display:flex;gap:6px;flex-wrap:wrap;margin:0 6px 8px}.pv-card .tg span{font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;background:var(--surface-2);color:var(--ink-2)}
.pv-card h3{margin:0 6px;font-size:21px;font-weight:800}.pv-card p{margin:4px 6px 0;color:var(--ink-2);font-size:15px}
.pv-card .cta{display:inline-block;margin:12px 6px 0;font-weight:700;color:var(--navy);font-size:14.5px}
@media (min-width:860px){.pv-twin{display:grid;grid-template-columns:1fr 1fr;gap:16px}}
.pv-door{display:flex;gap:14px;align-items:center;background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:14px;margin-bottom:12px;box-shadow:var(--shadow);text-decoration:none;color:var(--ink)}
.pv-door .ic{width:64px;height:64px;border-radius:18px;display:grid;place-items:center;flex:none}
.pv-door b{display:block;font-size:17px;color:var(--navy)}.pv-door small{font-size:13.5px;color:var(--ink-2)}
.pv-door .chev{margin-left:auto;color:var(--ink-3);font-size:22px}`;
  document.head.appendChild(st);

  const tpl = (html) => { const t = document.createElement("template"); t.innerHTML = html; return t.content; };
  const gameThumb = (file) => `<div class="pv-gthumb">${GAME_ART[file] || ""}</div>`;
  const card = (href, art, tags, t, d, cta) => `<a class="pv-card" href="${href}"><div class="art" aria-hidden="true">${art}</div><div class="tg">${tags.map((x) => `<span>${x}</span>`).join("")}</div><h3>${t}</h3><p>${d}</p><span class="cta">${cta} →</span></a>`;

  const prevH = window.viewHome;
  window.viewHome = function () {
    const v = prevH();
    const frag = tpl(v.html);
    const secs = [...frag.querySelectorAll("section")];
    const byH = (t) => secs.find((s) => { const h = s.querySelector("h2"); return h && h.textContent.includes(t); });
    const explore = byH("Explore");
    if (explore) {
      const thumbOf = (name) => { const h = [...explore.querySelectorAll(".area h3")].find((x) => x.textContent.trim() === name); return h ? h.parentElement.querySelector(".thumb").innerHTML : ""; };
      const rl = thumbOf("Reading Library"), lect = thumbOf("Lectoescritura"), mat = thumbOf("Matemáticas");
      const cefr = ["Pre-A1", "A1", "A2", "B1", "B2", "C1", "C2"], cc = ["#E8846B", "#E0B04A", "#7FB89E", "#6FA8D6", "#E8846B", "#E0B04A", "#7FB89E"];
      const lv = cefr.map((l, i) => `<span style="background:${cc[i]}22;border:1px solid ${cc[i]}66">${l}</span>`).join("");
      const tile = (href, c, th, t, d) => `<a class="area" href="${href}" data-c="${c}"><span class="thumb" aria-hidden="true">${th}</span><h3>${t}</h3><p>${d}</p></a>`;
      explore.querySelector("h2").textContent = "What do you want to practice today?";
      const areas = explore.querySelector(".areas");
      areas.classList.add("pv-areas");
      areas.innerHTML =
        tile("#/library", "sky", rl, "English", "Readings by level, grammar, flashcards and games.") +
        tile("juego-level-up.html", "mint", gameThumb("juego-level-up.html"), "Level Up Placement Test", "Find your English level, from A1 to C2, and get your certificate.") +
        tile("juego-toefl-practice.html", "mustard", gameThumb("juego-toefl-practice.html"), "TOEFL Practice", "Structure, Reading and Listening, with explanations.") +
        tile("#/matematicas", "coral", mat, "Math", "Fractions, signs, geometry and problems.") +
        tile("#/lectoescritura", "mint", lect, "Reading &amp; Writing", "Lectoescritura, dictado y lecturas en español.");
      const extra = tpl(`<section class="wrap section" aria-labelledby="season-h"><div class="section-head"><h2 id="season-h">This season</h2></div>${card("#/holidays", HALLO, ["Holidays", "Kids", "Children", "Teens"], "Halloween", "Spooky stories, word games and coloring pages for every level.", "See activities")}</section>
      <section class="wrap section" aria-labelledby="fam-h"><div class="section-head"><h2 id="fam-h">For families</h2></div>${card("#/familias", FAMART, ["Para familias"], "Aprender jugando, aprender juntos", "Ideas sencillas para disfrutar la app en casa con sus hijos.", "Conocer más")}</section>`);
      explore.after(extra);
    }
    [byH("Ready to print"), byH("Contacto")].forEach((s) => s && s.remove());
    const box = document.createElement("div"); box.appendChild(frag); v.html = box.innerHTML;
    return v;
  };

  const prevM = window.viewMova;
  window.viewMova = function () {
    const v = prevM();
    const ic = (bg, c, p) => `<span class="ic" style="background:${bg};color:${c}"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg></span>`;
    const d = (href, i, t, s) => `<a class="pv-door" href="${href}">${i}<span><b>${t}</b><small>${s}</small></span><span class="chev" aria-hidden="true">›</span></a>`;
    v.html += `<section class="wrap section" aria-labelledby="more-h"><div class="section-head"><h2 id="more-h">More from MOVA</h2></div><div class="pv-twin">` +
      d("#/familias", ic("var(--mint-soft)", "var(--mint)", '<circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6M14 20c0-2.6 1.4-4.5 3-4.5s4 1.9 4 4.5"/>'), "For families", "Ideas para disfrutar la app en casa.") +
      d("#/shop", ic("var(--mustard-soft)", "var(--mustard)", '<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/>'), "Shop", "Coming soon") + `</div></section>`;
    return v;
  };

  ROUTES.familias = () => ({ title: "For families", html: FAM_HTML });
  if (!ROUTES.holidays) ROUTES.holidays = () => ({ title: "Holidays", html: `<section class="wrap section"><div class="section-head"><h2>Holidays</h2></div>${card("#/holidays", HALLO, ["Halloween"], "Halloween", "Muy pronto: lecturas, juegos y dibujos para colorear de temporada.", "Coming soon")}</section>` });
})();

/* ---------- Arranque ---------- */
router();
})();
