/* MOVA Writing Lab · revisión automática con reglas (rúbrica de 4 criterios, 1–4) */
var WLC = (function () {
  var SPELL = { teh: "the", becuase: "because", becasue: "because", beacuse: "because", freind: "friend", freinds: "friends", alot: "a lot", wich: "which", wierd: "weird", untill: "until", beautifull: "beautiful", beutiful: "beautiful", recieve: "receive", definately: "definitely", tommorow: "tomorrow", tomorow: "tomorrow", becouse: "because", realy: "really", whith: "with", thier: "their", happend: "happened", finaly: "finally", favorit: "favorite", favourit: "favourite", famly: "family", familly: "family", diferent: "different", begining: "beginning", wen: "when", wath: "what", waht: "what", sciense: "science", sience: "science", inglish: "English", english: "English", monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday", thursday: "Thursday", friday: "Friday", saturday: "Saturday", sunday: "Sunday", january: "January", february: "February", march: "March", april: "April", june: "June", july: "July", august: "August", september: "September", october: "October", november: "November", december: "December", mexico: "Mexico", monterrey: "Monterrey", dont: "don't", doesnt: "doesn't", didnt: "didn't", cant: "can't", isnt: "isn't", arent: "aren't", wasnt: "wasn't", im: "I'm", ive: "I've", couldnt: "couldn't", wouldnt: "wouldn't", shouldnt: "shouldn't", thats: "that's", lets: "let's", whats: "what's" };
  var STOP = /^(the|a|an|and|or|but|i|you|he|she|it|we|they|is|are|am|was|were|to|of|in|on|at|my|your|his|her|our|their|for|with|very|so|be|have|has|had|do|does|did|this|that|there|not)$/;
  function sentences(t) { return t.replace(/\n+/g, " ").split(/(?<=[.!?])\s+/).map(function (s) { return s.trim(); }).filter(function (s) { return (s.match(/[A-Za-z']+/g) || []).length >= 2; }); }
  function check(task, text) {
    var T = String(text || ""), words = T.match(/[A-Za-z']+/g) || [], nW = words.length, need = task.need || {};
    var S = sentences(T), nS = S.length;
    var paras = T.split(/\n+/).filter(function (p) { return (p.match(/[A-Za-z']+/g) || []).length >= 6; }).length;
    var found = [], miss = [];
    (need.rx || []).forEach(function (r) { (new RegExp(r[0], "im").test(T) ? found : miss).push(r[1]); });
    var conn = (need.conn || []).filter(function (c) { return new RegExp("\\b" + c.replace(/ /g, "\\s+") + "\\b", "i").test(T); });
    /* mecánica */
    var errs = [], caps = [];
    S.forEach(function (s) { var f = s.replace(/^["'(\s]+/, ""); if (/^[a-z]/.test(f)) caps.push(f.split(/\s+/).slice(0, 4).join(" ")); });
    caps.forEach(function (c) { errs.push({ k: "cap", ex: c }); });
    var li = T.match(/(^|[^A-Za-z'])i(?=[\s',.!?]|$)/g); if (li) errs.push({ k: "i", n: li.length });
    var lastLine = T.trim().split(/\n/).pop().trim();
    var closing = /^(love|kind regards|best regards|yours (sincerely|faithfully)|write soon|see you( soon)?|best|hugs|bye)[,!.]?$/i.test(lastLine) || /^[A-ZÁÉÍÓÚ][a-záéíóúñ]+( [A-ZÁÉÍÓÚ][a-záéíóúñ]+)?$/.test(lastLine);
    var bodyText = T.trim().split(/\n/).filter(function (l) { return !/^(dear|hi|hello)\b.*,\s*$/i.test(l.trim()) && !/^(love|kind regards|best regards|yours (sincerely|faithfully)|write soon|see you( soon)?|best|hugs|bye)[,!.]?$/i.test(l.trim()) && !/^[A-ZÁÉÍÓÚ][a-záéíóúñ]+( [A-ZÁÉÍÓÚ][a-záéíóúñ]+)?$/.test(l.trim()); }).join(" ").trim();
    if (bodyText && !/[.!?]["')]?$/.test(bodyText)) errs.push({ k: "end" });
    var sp = []; words.forEach(function (w) { var lw = w.toLowerCase(), fix = SPELL[lw]; if (fix && fix !== w && sp.every(function (x) { return x[0] !== w; })) sp.push([w, fix]); });
    sp.forEach(function (x) { errs.push({ k: "sp", w: x[0], fix: x[1] }); });
    var cnt = {}; words.forEach(function (w) { var l = w.toLowerCase(); if (!STOP.test(l) && l.length > 2) cnt[l] = (cnt[l] || 0) + 1; });
    var rep = Object.keys(cnt).filter(function (k) { return cnt[k] >= Math.max(4, Math.round(nW / 18)); });
    var uniq = Object.keys(words.reduce(function (o, w) { o[w.toLowerCase()] = 1; return o; }, {})).length, variety = nW ? uniq / nW : 0;
    /* rúbrica */
    var min = need.min || 20, lenR = nW / min, totRx = (need.rx || []).length || 1, elR = found.length / totRx;
    var cl = function (x) { return Math.max(1, Math.min(4, Math.round(x))); };
    var task4 = cl(1 + (lenR >= 1 ? 1.5 : lenR >= .7 ? 1 : lenR >= .4 ? .5 : 0) + (elR >= 1 ? 1.5 : elR >= .67 ? 1 : elR >= .34 ? .5 : 0));
    var sentOk = nS >= (need.sent || 3) ? 1.5 : nS >= .6 * (need.sent || 3) ? 1 : .5;
    var connPart = (need.conn && need.conn.length) ? (conn.length >= Math.min(2, need.conn.length) ? 1.5 : conn.length ? 1 : 0) : (nS >= (need.sent || 3) ? 1.5 : 1);
    var org4 = cl(1 + sentOk + connPart - (need.para && paras < need.para ? 1 : 0));
    var lang4 = cl(1 + 2 * elR + (variety >= .55 ? 1 : variety >= .45 ? .5 : 0) - (rep.length ? .5 : 0));
    var nErr = caps.length + (li ? li.length : 0) + (errs.some(function (e) { return e.k === "end"; }) ? 1 : 0) + sp.length, e10 = nW ? nErr / nW * 10 : 9;
    var mech4 = nErr === 0 ? 4 : e10 <= .6 ? 3 : e10 <= 1.5 ? 2 : 1;
    if (nW < 3) { task4 = org4 = lang4 = mech4 = 1; }
    return { words: nW, min: min, sent: nS, paras: paras, found: found, miss: miss, conn: conn, errs: errs, rep: rep, r: [task4, org4, lang4, mech4], score: task4 + org4 + lang4 + mech4, total: 16 };
  }
  function comment(task, res, first) {
    var name = first ? ", " + first : "", s = res.score, out = [];
    out.push((s >= 14 ? "Excellent work" : s >= 11 ? "Great job" : s >= 8 ? "Good effort" : "Thank you for your work") + name + "!");
    if (res.found.length) out.push("You used " + res.found.slice(0, 2).join(" and ") + " correctly" + (res.words >= res.min ? ", and your text has enough ideas." : "."));
    else if (res.words >= res.min) out.push("Your text is complete and easy to follow.");
    else out.push("You started your text with good ideas.");
    var grow = [];
    if (res.miss.length) grow.push("Next time, include " + res.miss.slice(0, 2).join(" and ") + ".");
    var cap = res.errs.filter(function (e) { return e.k === "cap"; })[0]; if (cap) grow.push("Start every sentence with a capital letter (look at \u201C" + cap.ex + "\u2026\u201D).");
    if (res.errs.some(function (e) { return e.k === "i"; })) grow.push("Always write I with a capital letter.");
    var sp = res.errs.filter(function (e) { return e.k === "sp"; }); if (sp.length) grow.push("Check the spelling: " + sp.slice(0, 3).map(function (e) { return e.w + " \u2192 " + e.fix; }).join(", ") + ".");
    if (res.errs.some(function (e) { return e.k === "end"; })) grow.push("End each sentence with a period, question mark or exclamation mark.");
    if (res.words < res.min) grow.push("Add more details: try to write at least " + res.min + " words.");
    if (task.need && task.need.conn && task.need.conn.length && res.conn.length < Math.min(2, task.need.conn.length)) grow.push("Use linking words like " + task.need.conn.slice(0, 3).join(", ") + ".");
    if (task.need && task.need.para && res.paras < task.need.para) grow.push("Organize your text in " + task.need.para + " paragraphs.");
    if (res.rep.length) grow.push("Try not to repeat \u201C" + res.rep[0] + "\u201D too often; use a synonym.");
    if (grow.length) out.push("To improve: " + grow.slice(0, 2).join(" "));
    out.push(task.st === "kids" ? "Next step: read your sentences out loud before you send them." : task.st === "children" ? "Next step: add one more detail to each idea using because or and." : "Next step: reread your text and replace one simple word with a more precise one.");
    return out.join(" ");
  }
  return { check: check, comment: comment, CRIT: ["Task & content", "Organization", "Language", "Spelling & punctuation"] };
})();
if (typeof module !== "undefined") module.exports = WLC;
