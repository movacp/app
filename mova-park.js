/* MOVA Park · atracciones y reglas compartidas (alumno y maestra) */
(function () {
  var N = "#1B2A55", C = "#E8846B", S = "#8EC5E8", Y = "#FCE38A", M = "#7FC8A9", L = "#B9A6E8", P = "#F7A8C4", W = "#FFFDF7";
  function sh() { return '<ellipse cx="50" cy="91" rx="34" ry="5" fill="' + N + '" opacity=".12"/>'; }
  var ART = {
    popcorn: sh() + '<path d="M30 46h40l-6 42H36z" fill="' + W + '"/><path d="M34 46h6l2 42h-6zM46 46h8v42h-8zM60 46h6l-6 42h-6z" fill="' + C + '"/><rect x="27" y="40" width="46" height="9" rx="4" fill="' + C + '"/>' +
      '<g fill="' + Y + '" stroke="#E3C462" stroke-width="1.5"><circle cx="36" cy="34" r="8"/><circle cx="48" cy="28" r="9"/><circle cx="61" cy="33" r="8"/><circle cx="42" cy="38" r="6"/><circle cx="56" cy="38" r="6"/><circle cx="53" cy="20" r="6"/></g>',
    cotton: sh() + '<path d="M44 52h12L50 90z" fill="' + S + '"/><path d="M46 60h8M47 68h6M48 76h4" stroke="#fff" stroke-width="2"/>' +
      '<g fill="' + P + '"><circle cx="38" cy="38" r="13"/><circle cx="56" cy="30" r="15"/><circle cx="64" cy="44" r="11"/><circle cx="47" cy="48" r="11"/><circle cx="50" cy="20" r="9"/></g><circle cx="52" cy="26" r="5" fill="#fff" opacity=".5"/>',
    carousel: sh() + '<rect x="18" y="80" width="64" height="8" rx="4" fill="' + L + '"/><path d="M14 38 50 12l36 26z" fill="' + C + '"/><path d="M32 38 50 12l-4 26zM58 38 50 12l14 26z" fill="' + W + '"/><rect x="14" y="36" width="72" height="7" rx="3" fill="' + Y + '"/>' +
      '<g stroke="' + N + '" stroke-width="2.5"><path d="M26 43v37M50 43v37M74 43v37"/></g><g fill="' + W + '" stroke="' + N + '" stroke-width="2"><path d="M18 62c3-6 13-6 15 0v5H18z"/><path d="M42 56c3-6 13-6 15 0v5H42z"/><path d="M66 64c3-6 13-6 15 0v5H66z"/></g><circle cx="50" cy="9" r="4" fill="' + Y + '"/>',
    teacups: sh() + '<ellipse cx="50" cy="80" rx="40" ry="10" fill="' + L + '"/><g stroke="' + N + '" stroke-width="2"><path d="M18 52h28c0 14-6 22-14 22s-14-8-14-22z" fill="' + P + '"/><path d="M46 56c8 0 8 10 0 10" fill="none"/><path d="M52 46h30c0 15-7 24-15 24s-15-9-15-24z" fill="' + S + '"/><path d="M82 50c8 0 8 10 0 10" fill="none"/></g>' +
      '<g fill="#fff"><circle cx="26" cy="60" r="2.5"/><circle cx="36" cy="64" r="2.5"/><circle cx="60" cy="54" r="2.5"/><circle cx="72" cy="58" r="2.5"/></g>',
    ship: sh() + '<path d="M24 88 50 26l26 62" fill="none" stroke="' + N + '" stroke-width="4" stroke-linecap="round"/><g transform="rotate(-14 50 28)"><path d="M50 28v34" stroke="' + N + '" stroke-width="3"/>' +
      '<path d="M18 60h64c-4 14-16 20-32 20s-28-6-32-20z" fill="' + C + '"/><path d="M22 66h56" stroke="' + Y + '" stroke-width="3"/><path d="M50 36v22h18z" fill="' + W + '"/><circle cx="34" cy="70" r="2.5" fill="' + N + '"/><circle cx="50" cy="72" r="2.5" fill="' + N + '"/><circle cx="66" cy="70" r="2.5" fill="' + N + '"/></g><circle cx="50" cy="26" r="4" fill="' + Y + '"/>',
    wheel: sh() + '<path d="M30 90 50 48l20 42" fill="none" stroke="' + N + '" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="44" r="32" fill="none" stroke="' + S + '" stroke-width="4"/>' +
      '<g stroke="' + S + '" stroke-width="2"><path d="M50 12v64M18 44h64M27 21l46 46M73 21 27 67"/></g>' +
      '<g stroke="' + N + '" stroke-width="1.5"><rect x="45" y="8" width="10" height="9" rx="3" fill="' + C + '"/><rect x="77" y="40" width="10" height="9" rx="3" fill="' + Y + '"/><rect x="45" y="72" width="10" height="9" rx="3" fill="' + M + '"/><rect x="13" y="40" width="10" height="9" rx="3" fill="' + P + '"/><rect x="68" y="17" width="10" height="9" rx="3" fill="' + L + '"/><rect x="22" y="63" width="10" height="9" rx="3" fill="' + S + '"/><rect x="68" y="63" width="10" height="9" rx="3" fill="' + C + '"/><rect x="22" y="17" width="10" height="9" rx="3" fill="' + Y + '"/></g><circle cx="50" cy="44" r="5" fill="' + N + '"/>',
    haunted: sh() + '<rect x="22" y="46" width="56" height="42" rx="3" fill="' + L + '"/><path d="M16 50 50 18l34 32z" fill="#7E6BC4"/><rect x="62" y="22" width="8" height="18" fill="#7E6BC4"/>' +
      '<rect x="44" y="66" width="12" height="22" rx="6" fill="' + N + '"/><g fill="' + Y + '"><rect x="29" y="56" width="10" height="10" rx="2"/><rect x="61" y="56" width="10" height="10" rx="2"/><circle cx="50" cy="40" r="5"/></g>' +
      '<path d="M76 30c0-8 14-8 14 0v14l-3-3-4 3-3-3-4 3z" fill="#fff" stroke="' + N + '" stroke-width="1.5"/><circle cx="80" cy="31" r="1.5" fill="' + N + '"/><circle cx="85" cy="31" r="1.5" fill="' + N + '"/>',
    slide: sh() + '<ellipse cx="62" cy="82" rx="28" ry="9" fill="' + S + '"/><ellipse cx="62" cy="80" rx="22" ry="5" fill="#BFE3F5"/><rect x="16" y="22" width="18" height="66" rx="3" fill="' + Y + '"/><path d="M16 22h18" stroke="' + C + '" stroke-width="6"/>' +
      '<path d="M30 30c30 0 40 10 20 24s-14 22 16 24" fill="none" stroke="' + C + '" stroke-width="9" stroke-linecap="round"/><path d="M30 30c30 0 40 10 20 24s-14 22 16 24" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 6" stroke-linecap="round"/>',
    coaster: sh() + '<g stroke="' + N + '" stroke-width="2.5"><path d="M20 88V58M36 88V40M64 88V40M80 88V60"/></g><path d="M8 64c12 0 14-30 28-30s16 30 28 10c10-16 22-18 28 2" fill="none" stroke="' + C + '" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="64" cy="50" r="14" fill="none" stroke="' + C + '" stroke-width="5"/><g transform="rotate(-30 30 38)"><rect x="22" y="30" width="18" height="9" rx="3" fill="' + S + '" stroke="' + N + '" stroke-width="1.5"/><circle cx="26" cy="40" r="2.5" fill="' + N + '"/><circle cx="36" cy="40" r="2.5" fill="' + N + '"/></g>',
    castle: sh() + '<rect x="26" y="44" width="48" height="44" fill="' + P + '"/><rect x="14" y="34" width="16" height="54" fill="' + S + '"/><rect x="70" y="34" width="16" height="54" fill="' + S + '"/><rect x="40" y="26" width="20" height="30" fill="' + L + '"/>' +
      '<path d="M12 36 22 18l10 18zM68 36l10-18 10 18zM38 28l12-20 12 20z" fill="' + C + '"/><path d="M22 18V8l8 3-8 3M78 18V8l8 3-8 3M50 8V0l8 3-8 3" stroke="' + N + '" stroke-width="1.5" fill="' + Y + '"/>' +
      '<path d="M42 88V70a8 8 0 0 1 16 0v18z" fill="' + N + '"/><g fill="' + Y + '"><rect x="19" y="50" width="6" height="9" rx="3"/><rect x="75" y="50" width="6" height="9" rx="3"/><circle cx="50" cy="38" r="4"/></g>'
  };
  var ATTR = [
    { id: "popcorn", name: "Popcorn Stand", price: 50, inc: 5 },
    { id: "cotton", name: "Cotton Candy", price: 90, inc: 8 },
    { id: "carousel", name: "Carousel", price: 160, inc: 14 },
    { id: "teacups", name: "Spinning Teacups", price: 260, inc: 22 },
    { id: "ship", name: "Pirate Ship", price: 400, inc: 32 },
    { id: "wheel", name: "Ferris Wheel", price: 600, inc: 48 },
    { id: "haunted", name: "Haunted House", price: 850, inc: 65 },
    { id: "slide", name: "Water Slide", price: 1200, inc: 90 },
    { id: "coaster", name: "Roller Coaster", price: 1700, inc: 130 },
    { id: "castle", name: "MOVA Castle", price: 2500, inc: 190 }
  ];
  /* Si existe la imagen park-<id>.webp se usa; si no, el dibujo provisional. */
  function art(id) { return '<svg viewBox="0 0 100 100" aria-hidden="true">' + (ART[id] || "") + "</svg>"; }
  var coin = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#FCE38A" stroke="#E3C462" stroke-width="2"/><path d="m12 6.8 1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill="#E3A93A"/></svg>';
  var CATS = [
    { id: "vocab", name: "Vocabulario", sub: "Word Quest · Picture Race" },
    { id: "grammar", name: "Gramática", sub: "Present, past, perfect, passive…" },
    { id: "hora", name: "¿Qué hora es?", sub: "Kids y Children" },
    { id: "wforms", name: "Word Forms", sub: "Children y Teens" },
    { id: "toefl", name: "TOEFL", sub: "Teens y adultos" },
    { id: "math", name: "Matemáticas", sub: "Según su etapa" }
  ];
  var BASE = 20;
  function income(items) { var s = BASE; (items || []).forEach(function (id) { var a = ATTR.find(function (x) { return x.id === id; }); if (a) s += a.inc; }); return s; }
  function value(coins, items) { var v = coins; (items || []).forEach(function (id) { var a = ATTR.find(function (x) { return x.id === id; }); if (a) v += a.price; }); return v; }
  window.MOVA_PARK = { ATTR: ATTR, art: art, coin: coin, CATS: CATS, BASE: BASE, income: income, value: value };
})();
