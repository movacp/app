/* MOVA · Teacher view (v84)
   Con la sesión del panel de maestras abierta, la app se ve completa con una barra
   "TEACHER VIEW" y un botón "+ Assign" en cada tema, mazo, lectura y juego para
   asignarlo a uno o varios alumnos a la vez. La sesión se comparte con el panel,
   se renueva sola y solo se cierra con "Salir" en el panel. */
(function () {
  "use strict";
  var SB_URL = "https://fclafxrkibvcjktrgznt.supabase.co", SB_KEY = "sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6", STORE = "mova_admin_session";
  function sess() { try { return JSON.parse(localStorage.getItem(STORE) || "null"); } catch (e) { return null; } }
  function on() { var s = sess(); return !!(s && s.refresh); }
  if (!on()) return;
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  var RUTA = page === "ruta.html";
  var WLP = page === "juego-writing.html";
  if (page !== "" && page !== "index.html" && !RUTA && !WLP) return;

  /* ---------- sesión compartida con el panel (nunca cierra sola) ---------- */
  var refreshing = null;
  function refresh() {
    if (refreshing) return refreshing;
    var before = sess();
    refreshing = new Promise(function (res, rej) {
      /* si el panel ya la renovó en otra pestaña, usar esa */
      setTimeout(function () {
        var s = sess(); if (!s || !s.refresh) return rej(new Error("auth"));
        if (Date.now() < s.exp && (!before || s.access !== before.access)) return res(s.access);
        fetch(SB_URL + "/auth/v1/token?grant_type=refresh_token", { method: "POST", headers: { apikey: SB_KEY, "Content-Type": "application/json" }, body: JSON.stringify({ refresh_token: s.refresh }) })
          .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
          .then(function (x) {
            if (!x.ok) { var s2 = sess(); if (s2 && s2.access !== s.access && Date.now() < s2.exp) return res(s2.access); return rej(new Error("auth")); }
            var n = { access: x.j.access_token, refresh: x.j.refresh_token, exp: Date.now() + (x.j.expires_in - 60) * 1000 };
            try { localStorage.setItem(STORE, JSON.stringify(n)); } catch (e) {} res(n.access);
          }).catch(rej);
      }, 0);
    }).then(function (a) { refreshing = null; return a; }, function (e) { refreshing = null; throw e; });
    return refreshing;
  }
  function token() { var s = sess(); if (s && Date.now() < s.exp) return Promise.resolve(s.access); return refresh(); }
  function rpc(fn, args, again) {
    return token().then(function (t) {
      return fetch(SB_URL + "/rest/v1/rpc/" + fn, { method: "POST", headers: { apikey: SB_KEY, Authorization: "Bearer " + t, "Content-Type": "application/json" }, body: JSON.stringify(args || {}) });
    }).then(function (r) {
      if (r.status === 401 && !again) return refresh().then(function () { return rpc(fn, args, true); });
      return r.text().then(function (tx) { var j = null; try { j = tx ? JSON.parse(tx) : null; } catch (e) {} if (!r.ok) throw new Error((j && j.message) || "Could not connect. Try again."); return j; });
    });
  }
  /* mantener viva la sesión mientras la app esté abierta */
  setInterval(function () { var s = sess(); if (s && s.refresh && Date.now() > s.exp - 120000) refresh().catch(function () {}); }, 60000);

  /* ---------- estilos ---------- */
  var css = "" +
    ".tvbar{position:sticky;top:0;z-index:60;display:flex;align-items:center;gap:8px;background:#15192B;color:#fff;padding:calc(env(safe-area-inset-top,0px) + 10px) 14px 10px;font-family:'Plus Jakarta Sans',sans-serif}" +
    ".tvbar .k{background:#D3F36B;color:#15192B;font-size:10.5px;font-weight:800;letter-spacing:.05em;padding:5px 9px;border-radius:999px}" +
    ".tvbar b{font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbar a{margin-left:auto;flex:none;color:#15192B;background:#fff;font-weight:800;font-size:12px;padding:7px 12px;border-radius:999px;text-decoration:none}" +
    "body.tv-on .mr-login,body.tv-on .mva-chip{display:none!important}" +
    ".tvasg{position:absolute;z-index:6;top:8px;right:8px;display:inline-flex;align-items:center;gap:4px;background:#15192B;color:#D3F36B;font:800 11.5px/1 'Plus Jakarta Sans',sans-serif;padding:7px 10px;border-radius:999px;box-shadow:0 4px 12px rgba(21,25,43,.3);border:0;cursor:pointer}" +
    ".gr-list .tvasg,.fx-d .tvasg{top:50%;transform:translateY(-50%);right:10px}" +
    ".tvd{position:fixed;inset:0;z-index:9990;background:rgba(21,25,43,.5)}" +
    ".tvs{position:fixed;left:50%;transform:translateX(-50%);bottom:0;z-index:9991;width:100%;max-width:560px;max-height:86vh;display:flex;flex-direction:column;background:#fff;border-radius:30px 30px 0 0;padding:18px 18px calc(env(safe-area-inset-bottom,0px) + 20px);font-family:'Plus Jakarta Sans',sans-serif;color:#15192B;box-sizing:border-box}" +
    ".tvs h3{font:800 21px/1.1 'Bricolage Grotesque',sans-serif;margin:0 0 3px}.tvs .sub{color:#6A6F85;font-weight:600;font-size:12.5px}" +
    ".tvs input{width:100%;box-sizing:border-box;background:#F5F3FA;border:0;border-radius:14px;padding:12px 14px;font:600 14.5px 'Plus Jakarta Sans',sans-serif;margin:10px 0 8px;outline:none;color:#15192B}" +
    ".tvs .dch{display:flex;gap:6px;flex-wrap:wrap}.tvs .dch button,.tvs .dpk{background:#F5F3FA;border:0;border-radius:999px;padding:8px 12px;font:800 12px 'Plus Jakarta Sans',sans-serif;color:#15192B;cursor:pointer;display:inline-flex;align-items:center;gap:6px}" +
    ".tvs .dch button.on,.tvs .dpk.on{background:#15192B;color:#D3F36B}.tvs .dpk input{border:0;background:transparent;font:700 12px 'Plus Jakarta Sans',sans-serif;color:inherit;width:118px;padding:0}" +
    ".tvs .ch{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px}.tvs .ch button{background:#E6E2FF;border:0;border-radius:999px;padding:7px 11px;font:800 12px 'Plus Jakarta Sans',sans-serif;cursor:pointer;color:#15192B}.tvs .ch button.on{background:#15192B;color:#D3F36B}" +
    ".tvs .ls{overflow:auto;flex:1;min-height:120px;margin:0 -4px;padding:0 4px}" +
    ".tvs .li{display:flex;align-items:center;gap:10px;padding:9px 0;border-top:1.5px solid #EEEAF6;cursor:pointer}" +
    ".tvs .av{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:12.5px;flex:none}" +
    ".tvs .li b{display:block;font-size:14.5px}.tvs .li small{color:#6A6F85;font-weight:600;font-size:12px}" +
    ".tvs .c{margin-left:auto;width:26px;height:26px;border-radius:9px;border:2.5px solid #C9C4DA;position:relative;flex:none;box-sizing:border-box}" +
    ".tvs .li.on .c{background:#15192B;border-color:#15192B}.tvs .li.on .c:after{content:'';position:absolute;left:7px;top:2px;width:6px;height:12px;border:solid #D3F36B;border-width:0 3px 3px 0;transform:rotate(45deg)}" +
    ".tvs .go{display:block;width:100%;text-align:center;background:#15192B;color:#fff;border:0;border-radius:999px;padding:15px;font:800 15px 'Plus Jakarta Sans',sans-serif;margin-top:12px;cursor:pointer}.tvs .go:disabled{opacity:.45}" +
    ".tvs .x{background:none;border:0;color:#6A6F85;font:700 13.5px 'Plus Jakarta Sans',sans-serif;padding:10px;cursor:pointer;width:100%}" +
    ".tvtoast{position:fixed;left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 96px);transform:translateX(-50%);z-index:9995;background:#15192B;color:#fff;font:700 14px 'Plus Jakarta Sans',sans-serif;padding:12px 18px;border-radius:999px;box-shadow:0 10px 30px rgba(21,25,43,.35);max-width:90%;text-align:center}";
  var st = document.createElement("style"); st.id = "mova-teacher-view"; st.textContent = css; document.head.appendChild(st);
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function toast(t) { var o = document.querySelector(".tvtoast"); if (o) o.remove(); var d = document.createElement("div"); d.className = "tvtoast"; d.textContent = t; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2800); }

  /* ---------- barra ---------- */
  function tName(em) { var u = String(em || "").toLowerCase().split("@")[0]; if (/let/.test(u)) return "Miss Letty"; if (/claud/.test(u)) return "Miss Claudia"; if (/mayte|teresa/.test(u)) return "Miss Mayte"; return "Miss Karla"; }
  function bar() {
    document.body.classList.add("tv-on");
    if (document.querySelector(".tvbar")) return;
    var em = ""; try { em = localStorage.getItem("mova_teacher_email") || ""; } catch (e) {}
    var b = document.createElement("div"); b.className = "tvbar";
    b.innerHTML = '<span class="k">TEACHER VIEW</span><b>' + esc(tName(em)) + '</b><a href="admin.html">Panel →</a>';
    document.body.prepend(b);
  }

  /* ---------- qué es cada enlace ---------- */
  function PATH() { return window.MOVA_PATH || {}; }
  var KN = { topics: "Grammar", writing: "Writing", phonics: "Phonics" };
  function findTopic(id) { var D = PATH(); for (var s in D) for (var l in D[s]) for (var k in KN) { var t = (D[s][l][k] || []).filter(function (x) { return x.id === id; })[0]; if (t) return { t: t, s: s, l: l, k: KN[k] }; } return null; }
  var SN = { kids: "Kids", children: "Children", teens: "Teens" };
  function itemOf(a) {
    var h = a.getAttribute("href") || "", m;
    if (RUTA && /^#\//.test(h)) h = "ruta.html" + h;
    if (WLP && (m = h.match(/^#([kct]\d+)$/))) { var W = (window.WL || []).filter(function (x) { return x.id === m[1]; })[0]; if (!W) return null; var SNW = { kids: "MOVA Kids", children: "MOVA Children", teens: "MOVA Teens" }; return { key: "w:" + W.id, title: W.title + " · Writing Lab · " + SNW[W.st] + " " + W.lv, name: W.title, sub: "Writing Lab · " + SNW[W.st] + " " + W.lv }; }
    if ((m = h.match(/^ruta\.html#\/t\/([^\/?#]+)/))) { var id = decodeURIComponent(m[1]), f = findTopic(id); if (!f) return null; return { key: "t:" + id, title: f.t.t + " · " + f.k + " " + SN[f.s] + " " + f.l, name: f.t.t, sub: f.k + " · " + SN[f.s] + " " + f.l }; }
    if ((m = h.match(/^#\/lecturas\/([a-z0-9-]+)$/))) { var art = a.closest("article"), tt = (a.textContent || "").trim(), gr = art && art.querySelector(".chip") ? art.querySelector(".chip").textContent.trim() : ""; if (!tt || /^(anterior|siguiente|previous|next)/i.test(tt)) return null; return { key: "e:" + m[1], title: tt + " · Lectura" + (gr ? " " + gr : ""), name: tt, sub: "Lectura en español" + (gr ? " · " + gr : "") }; }
    if ((m = h.match(/^ruta\.html#\/vocab\/([a-z]+)\/([^\/]+)\/(\d+)/))) { var st2 = m[1], lv = decodeURIComponent(m[2]), D = PATH(), V = D[st2] && D[st2][lv] && D[st2][lv].vocab[+m[3]]; if (!V) return null; return { key: "v:" + st2 + "|" + lv + "|" + m[3], title: V.n + " · Flashcards " + SN[st2] + " " + lv, name: V.n, sub: "Flashcards · " + SN[st2] + " " + lv }; }
    if ((m = h.match(/^ruta\.html#\/xv\/([^\/?#]+)/))) { var X = (window.MOVA_FC_EXTRA || []).filter(function (x) { return x.id === m[1]; })[0]; if (!X) return null; return { key: "xv:" + X.id, title: X.n + " · Flashcards", name: X.n, sub: "Flashcards · bonus deck" }; }
    if ((m = h.match(/^#\/library\/([a-z0-9-]+)$/))) { var R = null; try { R = (typeof READINGS !== "undefined" ? READINGS : []).filter(function (x) { return x.id === m[1]; })[0]; } catch (e) {} if (!R) return null; return { key: "r:" + R.id, title: R.title + " · Reading " + (R.level || ""), name: R.title, sub: "Reading · " + (R.level || "") }; }
    if ((m = h.match(/^(?:\.\/)?juego-([a-z0-9-]+)\.html/))) { var sl = m[1]; if (/^(retos|live)$/.test(sl)) return null; var nm = ((a.querySelector("b, h3, strong") || a).textContent || sl).trim().split("\n")[0].slice(0, 60); return { key: sl, title: nm, name: nm, sub: "Game" }; }
    return null;
  }
  function scanRuta() {
    if (!RUTA) return;
    document.querySelectorAll("button.u[data-id]").forEach(function (b0) {
      if (b0.__tvh) return; b0.__tvh = 1;
      var f = findTopic(b0.dataset.id); if (!f) return;
      var it = { key: "t:" + f.t.id, title: f.t.t + " · " + f.k + " " + SN[f.s] + " " + f.l, name: f.t.t, sub: f.k + " · " + SN[f.s] + " " + f.l };
      if (getComputedStyle(b0).position === "static") b0.style.position = "relative";
      var x = document.createElement("span"); x.className = "tvasg"; x.setAttribute("role", "button"); x.textContent = "+ Assign"; x.style.top = "50%"; x.style.transform = "translateY(-50%)";
      x.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); openSheet(it); }, true);
      b0.appendChild(x);
    });
  }
  function scan() {
    if (!on()) return;
    bar(); scanRuta();
    var root = document.getElementById("main") || document.getElementById("app") || document.body;
    root.querySelectorAll("a[href]").forEach(function (a) {
      if (a.__tv || a.closest(".tvbar, .tvs, .tabbar, .mr-back, .mva-retos")) return; a.__tv = 1;
      var it = itemOf(a); if (!it) return;
      var host = a.classList.contains("stretch") && a.closest("article") ? a.closest("article") : a;
      if (host.__tvh) return; host.__tvh = 1;
      if (getComputedStyle(host).position === "static") host.style.position = "relative";
      var add = function (item, label, top) {
        var b = document.createElement("button"); b.type = "button"; b.className = "tvasg"; b.textContent = label; if (top) b.style.top = top;
        b.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); openSheet(item); });
        host.appendChild(b);
      };
      add(it, "+ Assign");
      if (it.key === "toefl-practice") add({ key: "toefl-sim", title: "TOEFL Quick Simulation", name: "TOEFL Quick Simulation", sub: "Exam · 4 parts · 25 questions · 18 minutes" }, "+ Assign simulation", "44px");
    });
  }

  /* ---------- asignar a varios ---------- */
  var students = null, COLORS = ["#FFC7E2", "#D3F36B", "#E6E2FF", "#FFE58A", "#BDF0D8", "#C9D2FF"];
  function ini(n) { return String(n || "?").split(/\s+/).slice(0, 2).map(function (x) { return x.charAt(0); }).join("").toUpperCase(); }
  function close() { document.querySelectorAll(".tvd, .tvs").forEach(function (x) { x.remove(); }); }
  function ymd(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function dueOpts() {
    var t = new Date(); t.setHours(12, 0, 0, 0);
    var fri = new Date(t); fri.setDate(t.getDate() + ((5 - t.getDay() + 7) % 7));
    var lf = function (y, m) { var d = new Date(y, m + 1, 0, 12); d.setDate(d.getDate() - ((d.getDay() - 5 + 7) % 7)); return d; };
    var eom = lf(t.getFullYear(), t.getMonth()); if (eom < t) eom = lf(t.getFullYear(), t.getMonth() + 1);
    var f = function (d) { return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }); };
    return [["today", "Today", ymd(t)], ["fri", "Friday · " + f(fri), ymd(fri)], ["eom", "End of month · " + f(eom), ymd(eom)]];
  }
  function openSheet(it) {
    close();
    var d = document.createElement("div"); d.className = "tvd"; d.onclick = close;
    var s = document.createElement("div"); s.className = "tvs"; s.setAttribute("role", "dialog");
    s.innerHTML = "<h3>Assign “" + esc(it.name) + "”</h3><span class=\"sub\">" + esc(it.sub) + " · choose one or more students</span>" +
      '<input type="search" placeholder="Search a student…" aria-label="Search a student"><div class="ch"></div><div class="ls"><p class="sub" style="padding:10px 0">Loading students…</p></div>' +
      '<div class="due"><span class="sub" style="display:block;margin:12px 0 6px;font-weight:700;color:#15192B">Due date</span><div class="dch"></div></div>' +
      '<button class="go" type="button" disabled>Assign</button><button class="x" type="button">Cancel</button>';
    document.body.appendChild(d); document.body.appendChild(s);
    s.querySelector(".x").onclick = close;
    var sel = {}, grp = "all", q = "", DO = dueOpts(), due = DO[2][2];
    var dch = s.querySelector(".dch");
    function paintDue() {
      dch.innerHTML = DO.map(function (o) { return '<button type="button" data-d="' + o[2] + '" class="' + (due === o[2] ? "on" : "") + '">' + esc(o[1]) + "</button>"; }).join("") +
        '<label class="dpk' + (DO.every(function (o) { return o[2] !== due; }) ? " on" : "") + '">Other date <input type="date" value="' + due + '"></label>';
      dch.querySelector("input").onchange = function (e) { if (e.target.value) { due = e.target.value; paintDue(); } };
    }
    dch.onclick = function (e) { var b = e.target.closest("button"); if (!b) return; due = b.dataset.d; paintDue(); };
    paintDue();
    var ls = s.querySelector(".ls"), ch = s.querySelector(".ch"), go = s.querySelector(".go"), inp = s.querySelector("input");
    function list() { return (students || []).filter(function (x) { return x.active !== false && (grp === "all" || String(x.stage || "").split(" · ")[0] === grp) && (!q || (x.full_name + " " + x.username).toLowerCase().indexOf(q) >= 0); }); }
    function paint() {
      var gs = []; (students || []).forEach(function (x) { var g0 = x.stage && String(x.stage).split(" · ")[0]; if (g0 && gs.indexOf(g0) < 0) gs.push(g0); });
      ch.innerHTML = '<button type="button" data-g="all" class="' + (grp === "all" ? "on" : "") + '">All</button>' + gs.map(function (g) { return '<button type="button" data-g="' + esc(g) + '" class="' + (grp === g ? "on" : "") + '">' + esc(g) + "</button>"; }).join("") + '<button type="button" data-g="__sel">Select all shown</button>';
      var L = list();
      ls.innerHTML = L.length ? L.map(function (x, i) { return '<div class="li' + (sel[x.id] ? " on" : "") + '" data-id="' + esc(x.id) + '"><span class="av" style="background:' + COLORS[i % COLORS.length] + '">' + esc(ini(x.full_name)) + "</span><div><b>" + esc(x.full_name) + "</b><small>" + esc(x.stage || x.username) + '</small></div><span class="c"></span></div>'; }).join("") : '<p class="sub" style="padding:10px 0">No students found.</p>';
      var n = Object.keys(sel).length; go.disabled = !n; go.textContent = n ? "Assign to " + n + (n === 1 ? " student" : " students") : "Assign";
    }
    ch.onclick = function (e) { var b = e.target.closest("button"); if (!b) return; if (b.dataset.g === "__sel") list().forEach(function (x) { sel[x.id] = x; }); else grp = b.dataset.g; paint(); };
    ls.onclick = function (e) { var r = e.target.closest(".li"); if (!r) return; var x = (students || []).filter(function (y) { return String(y.id) === r.dataset.id; })[0]; if (!x) return; if (sel[x.id]) delete sel[x.id]; else sel[x.id] = x; paint(); };
    inp.oninput = function () { q = inp.value.trim().toLowerCase(); paint(); };
    go.onclick = function () {
      var arr = Object.keys(sel).map(function (k) { return sel[k]; }); if (!arr.length) return;
      go.disabled = true; go.textContent = "Assigning…";
      Promise.all(arr.map(function (x) { return rpc("admin_assign_task", { p_student: String(x.id), p_username: x.username, p_task: it.key, p_title: it.title + (due ? " · due " + due : "") + " · by " + tName(localStorage.getItem("mova_teacher_email")) }).then(function () { return 1; }, function () { return 0; }); }))
        .then(function (r) { var ok = r.reduce(function (a, b) { return a + b; }, 0); close(); toast(ok === arr.length ? "“" + it.name + "” assigned to " + ok + (ok === 1 ? " student" : " students") : ok + " of " + arr.length + " assigned. Check your connection and try again."); });
    };
    if (students) paint();
    else rpc("admin_list_students").then(function (r) { students = (r || []).sort(function (a, b) { return String(a.full_name).localeCompare(String(b.full_name)); }); paint(); })
      .catch(function () { ls.innerHTML = '<p class="sub" style="padding:10px 0">Could not load your students. Open the panel once and try again.</p>'; });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  function start() { scan(); setInterval(scan, 1000); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
