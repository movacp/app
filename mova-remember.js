/* MOVA · Remember: tarjetas de recordatorio por tema (sujeto → forma) */
(function () {
  var Y = "#FFE58A", P = "#C9D2FF", K = "#FF8FC0", G3 = ["#BDF0D8", "#FFE58A", "#FF8FC0"];
  var I = [1, [Y], "I"], YOU = [1, [P], "You"], HSI = [1, [K], "He · She · It"], WYT = [3, G3, "We · You · They"], IYWT = [3, G3, "I · You · We · They"], ALL = [3, G3, "Everyone"];
  var ONE = [1, [Y], "One thing"], MANY = [3, G3, "Many things"];
  function r(s, a, b) { return [s, a, b]; }
  var SPEC = [
    [/verb to be|i am, you are, it is/i, { rows: [r(I, "am", "'m not"), r(YOU, "are", "aren't"), r(HSI, "is", "isn't"), r(WYT, "are", "aren't")] }],
    [/is it…\?/i, { title: "Questions with be", rows: [r(I, "Am I…?", "Yes, I am."), r(YOU, "Are you…?", "Yes, I am."), r(HSI, "Is it…?", "Yes, it is."), r(WYT, "Are they…?", "No, they aren't.")], lab: ["Question", "Answer"] }],
    [/^(was \/ were|past of be)$/i, { rows: [r(I, "was", "wasn't"), r(YOU, "were", "weren't"), r(HSI, "was", "wasn't"), r(WYT, "were", "weren't")] }],
    [/i have, she has/i, { rows: [r(I, "have", "don't have"), r(YOU, "have", "don't have"), r(HSI, "has", "doesn't have"), r(WYT, "have", "don't have")] }],
    [/^present simple$|my day/i, { rows: [r(I, "play", "don't play"), r(YOU, "play", "don't play"), r(HSI, "plays", "doesn't play"), r(WYT, "play", "don't play")], tip: "He, she, it: add <b>-s</b> → she plays, he watches." }],
    [/do \/ does|do you like/i, { title: "Questions", rows: [r(I, "Do I…?", "Yes, I do."), r(YOU, "Do you…?", "No, I don't."), r(HSI, "Does she…?", "Yes, she does."), r(WYT, "Do they…?", "No, they don't.")], lab: ["Question", "Short answer"] }],
    [/^can$|can \/ can't|i can, i can't/i, { rows: [r(ALL, "can", "can't")], tip: "After <b>can</b>, use the base verb: She can swim (not swims)." }],
    [/there is/i, { rows: [r(ONE, "There is", "There isn't"), r(MANY, "There are", "There aren't")] }],
    [/present continuous|i am playing|what is he doing/i, { rows: [r(I, "am + -ing", "'m not + -ing"), r(YOU, "are + -ing", "aren't + -ing"), r(HSI, "is + -ing", "isn't + -ing"), r(WYT, "are + -ing", "aren't + -ing")], tip: "Use it for actions happening now: I am reading." }],
    [/^past continuous$/i, { rows: [r(I, "was + -ing", "wasn't + -ing"), r(YOU, "were + -ing", "weren't + -ing"), r(HSI, "was + -ing", "wasn't + -ing"), r(WYT, "were + -ing", "weren't + -ing")] }],
    [/past simple(: regular| questions)?$|i played|i went|irregular|did you/i, { rows: [r(ALL, "played / went", "didn't play / didn't go")], tip: "Question: <b>Did</b> + subject + base verb? → Did you play?" }],
    [/possessive adjectives|my, your, his, her|^possessives$/i, { rows: [r(I, "my", ""), r(YOU, "your", ""), r([1, [K], "He"], "his", ""), r([1, [K], "She"], "her", ""), r([1, [K], "It"], "its", ""), r([3, G3, "We"], "our", ""), r([3, G3, "They"], "their", "")], one: 1 }],
    [/^pronouns$|object pronouns/i, { rows: [r(I, "me", ""), r(YOU, "you", ""), r([1, [K], "He"], "him", ""), r([1, [K], "She"], "her", ""), r([1, [K], "It"], "it", ""), r([3, G3, "We"], "us", ""), r([3, G3, "They"], "them", "")], one: 1, lab: ["Subject → object"] }],
    [/going to/i, { rows: [r(I, "am going to", "'m not going to"), r(YOU, "are going to", "aren't going to"), r(HSI, "is going to", "isn't going to"), r(WYT, "are going to", "aren't going to")] }],
    [/^will$/i, { rows: [r(ALL, "will", "won't")], tip: "Use it for predictions and quick decisions: I'll help you." }],
    [/must, might, can't/i, { title: "How sure are you?", rows: [r([1, [Y], "Sure: yes"], "must", ""), r([1, [P], "Maybe"], "might / may", ""), r([1, [K], "Sure: no"], "can't", "")], one: 1 }],
    [/must|mustn't/i, { rows: [r(ALL, "must", "mustn't")] }],
    [/should/i, { rows: [r(ALL, "should", "shouldn't")] }],
    [/might|may/i, { rows: [r(ALL, "might / may", "might not")] }],
    [/present perfect continuous/i, { rows: [r(I, "have been + -ing", "haven't been + -ing"), r(HSI, "has been + -ing", "hasn't been + -ing"), r(WYT, "have been + -ing", "haven't been + -ing")] }],
    [/present perfect|already, yet|for \/ since/i, { rows: [r(I, "have + past participle", "haven't"), r(YOU, "have + past participle", "haven't"), r(HSI, "has + past participle", "hasn't"), r(WYT, "have + past participle", "haven't")] }],
    [/past perfect/i, { rows: [r(ALL, "had + past participle", "hadn't")] }],
    [/this, that/i, { rows: [r([1, [Y], "One · near"], "this", ""), r([1, [K], "One · far"], "that", ""), r([3, G3, "Many · near"], "these", ""), r([3, G3, "Many · far"], "those", "")], one: 1 }],
    [/used to/i, { rows: [r(ALL, "used to + verb", "didn't use to")] }],
    [/like \+ -ing/i, { rows: [r(ALL, "like + -ing", "don't like + -ing")] }]
  ];
  function fig(n, c) {
    var w = n === 1 ? 44 : 90, s = '<svg viewBox="0 0 ' + w + ' 60" width="' + w + '" height="52" fill="none" stroke="#15192B" stroke-width="3" stroke-linecap="round">';
    (n === 1 ? [22] : [18, 45, 72]).forEach(function (x, i) { s += '<circle cx="' + x + '" cy="12" r="9" fill="' + c[i % c.length] + '"/><path d="M' + x + ' 21v18M' + x + ' 27l-9 7M' + x + ' 27l9 7M' + x + ' 39l-7 14M' + x + ' 39l7 14"/>'; });
    return s + "</svg>";
  }
  var ARR = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#15192B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M14 6l6 6-6 6"/></svg>';
  function find(t) { if (/vs\.|modal perfects|future in the past|advanced conditionals|mixed conditionals/i.test(t.t || "")) return null; var key = (t.t || "") + " | " + (t.s || ""); for (var i = 0; i < SPEC.length; i++) { if (SPEC[i][1] && (SPEC[i][0].test(t.t || "") || SPEC[i][0].test(t.s || ""))) return SPEC[i][1]; } return null; }
  function esc(x) { return String(x == null ? "" : x).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function html(t) {
    var sp = find(t), h = "";
    if (sp) {
      var neg = sp.rows.some(function (x) { return x[2]; }) && !sp.one;
      h += neg ? '<div class="rm-leg"><span style="background:#D3F36B">' + ((sp.lab && sp.lab[0]) || "Yes ✓") + '</span><span style="background:#FFE1EE">' + ((sp.lab && sp.lab[1]) || "No ✗") + "</span></div>" : "";
      h += sp.rows.map(function (x) { return '<div class="rm-row' + (neg ? "" : " one") + '"><div class="rm-sub">' + fig(x[0][0], x[0][1]) + "<b>" + esc(x[0][2]) + '</b></div><span class="rm-p">' + esc(x[1]) + "</span>" + (neg ? '<i class="rm-a">' + ARR + '</i><span class="rm-n">' + esc(x[2]) + "</span>" : "") + "</div>"; }).join("");
      if (sp.tip) h += '<div class="rm-tip">' + sp.tip + "</div>";
    } else {
      var ar = (t.exp || []).filter(function (x) { return /→/.test(x); });
      if (ar.length >= 2) h += ar.map(function (x) { var p = x.split("→"); return '<div class="rm-row one"><div class="rm-sub txt">' + p[0] + '</div><span class="rm-p txt">' + p.slice(1).join("→") + "</span></div>"; }).join("");
      else h += (t.exp || []).map(function (x) { return '<div class="rm-pt">' + x + "</div>"; }).join("");
    }
    var ex = (t.ex || []).slice(0, 3).map(function (e) { return esc(e[0]); });
    if (ex.length) h += '<div class="rm-ex"><b>Examples</b>' + ex.map(function (e) { return "<span>" + e + "</span>"; }).join("") + "</div>";
    return h;
  }
  var CSS = ".rm-btn{display:inline-flex;align-items:center;gap:7px;background:#FF8FC0;border:2px solid #15192B;border-radius:999px;padding:8px 14px 8px 10px;font-weight:800;font-size:14px;box-shadow:0 3px 0 #15192B;color:#15192B}.rm-btn svg{width:20px;height:20px}.rm-btn:active{transform:translateY(2px);box-shadow:0 1px 0 #15192B}" +
    ".rm-bar{display:flex;align-items:center;gap:10px}.rm-bar .back{flex:1}" +
    ".rm-ov{position:fixed;inset:0;background:rgba(21,25,43,.45);display:flex;align-items:flex-end;justify-content:center;z-index:99}" +
    ".rm-sh{width:100%;max-width:560px;background:#fff;border-radius:30px 30px 0 0;padding:16px 16px calc(22px + env(safe-area-inset-bottom,0px));max-height:90vh;overflow:auto;animation:rmup .25s ease}@keyframes rmup{from{transform:translateY(40px);opacity:0}}" +
    ".rm-hd{display:flex;align-items:center;gap:10px;margin-bottom:12px}.rm-hd .pill{background:#FF8FC0;border:2px solid #15192B;border-radius:999px;padding:6px 12px;font-weight:800;font-size:13px}.rm-hd h3{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:21px;margin:0;line-height:1.1}" +
    ".rm-x{margin-left:auto;flex:none;width:38px;height:38px;border-radius:50%;background:#F5F3FA;font-size:22px;font-weight:800}" +
    ".rm-leg{display:flex;gap:6px;justify-content:center;margin:0 0 10px}.rm-leg span{font-size:11.5px;font-weight:800;border:2px solid #15192B;border-radius:999px;padding:4px 10px}" +
    ".rm-row{display:grid;grid-template-columns:96px 1fr 24px 1fr;align-items:center;gap:6px;background:#F5F3FA;border-radius:22px;padding:10px;margin-bottom:8px}.rm-row.one{grid-template-columns:110px 1fr}" +
    ".rm-sub{text-align:center}.rm-sub svg{display:block;margin:0 auto}.rm-sub b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:16px;line-height:1.05;margin-top:2px}.rm-sub.txt{font-weight:800;font-size:15px}" +
    ".rm-p,.rm-n{display:block;border:2.5px solid #15192B;border-radius:14px;padding:7px 8px;text-align:center;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:17px;line-height:1.15}.rm-p{background:#D3F36B}.rm-n{background:#FFE1EE}.rm-p.txt{font-family:inherit;font-size:14.5px;font-weight:700;text-align:left}" +
    ".rm-a svg{display:block}.rm-tip{background:#FFF1C9;border-radius:16px;padding:10px 12px;font-size:14px;line-height:1.5;font-weight:600;margin-top:4px}" +
    ".rm-pt{background:#F5F3FA;border-radius:16px;padding:11px 13px;margin-bottom:7px;font-size:14.5px;line-height:1.5;font-weight:600}" +
    ".rm-ex{background:#E6E2FF;border-radius:18px;padding:12px 14px;margin-top:8px;font-size:14.5px;line-height:1.55;font-weight:600}.rm-ex b{display:block;font-weight:800;margin-bottom:2px}.rm-ex span{display:block}";
  function css() { if (document.getElementById("rm-css")) return; var s = document.createElement("style"); s.id = "rm-css"; s.textContent = CSS; document.head.appendChild(s); }
  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="#15192B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z"/></svg>';
  function open(t) {
    css(); var ov = document.createElement("div"); ov.className = "rm-ov";
    ov.innerHTML = '<div class="rm-sh" role="dialog" aria-label="Remember"><div class="rm-hd"><span class="pill">Remember</span><h3>' + esc(t.t) + '</h3><button class="rm-x" aria-label="Close">×</button></div>' + html(t) + "</div>";
    document.body.appendChild(ov);
    ov.onclick = function (e) { if (e.target === ov || e.target.classList.contains("rm-x")) ov.remove(); };
  }
  window.MovaRemember = { open: open, button: function () { css(); return '<button class="rm-btn" id="rmBtn" type="button">' + ICON + "Remember</button>"; }, html: html };
})();
