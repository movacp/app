/* MOVA Learning Studio · Tareas con opciones elegidas por la maestra
   ?pickmode=1  → la maestra elige dentro del juego (vista previa en el panel). Se envían sus elecciones al panel.
   ?pick=...    → el alumno abre la tarea y el juego ya aparece con lo que eligió la maestra. */
(function () {
  if (window.__movaTask) return; window.__movaTask = 1;
  var Q = new URLSearchParams(location.search);
  var PICKMODE = Q.get("pickmode") === "1", PICK = Q.get("pick");
  if (!PICKMODE && !PICK) return;

  var CLICKABLE = "button,[role=button],label,.chip,.opt,.card[data-k],.card[data-i]";
  var START = /^(play|start|jugar|comenzar|start practice|start session|start the mission|start now|empezar|go)\b/i;
  function norm(s) { return String(s || "").replace(/\s+/g, " ").trim().slice(0, 60); }
  function attrs(el) { var o = {}; for (var i = 0; i < el.attributes.length; i++) { var a = el.attributes[i]; if (/^data-/.test(a.name) && !/^data-(theme|c)$/.test(a.name)) o[a.name] = a.value; } return o; }
  function label(el) {
    var t = (el.innerText || el.textContent || "").split("\n").map(norm).filter(function (x) { return x.length > 1 && !/^ages?\b/i.test(x); });
    var l = t[0] || norm(el.textContent);
    if (t[1] && l.length <= 14 && t[1].length <= 26) l += " " + t[1];
    return l.slice(0, 40);
  }
  function isStart(el) {
    var id = (el.id || "").toLowerCase();
    if (/^(go|play|start|begin|simhero|playbtn|startbtn)$/.test(id)) return true;
    return START.test(norm(el.textContent));
  }
  function skip(el) {
    if (el.hasAttribute("data-theme")) return true;
    var s = ((el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className) + " " + (el.getAttribute("aria-label") || "") + " " + (el.id || "")).toLowerCase();
    return /back|home|theme|sound|mute|close|volver|inicio|menu|audio|speaker|listen-btn|help|info/.test(s);
  }
  function sig(el) { var p = el.parentElement, s = p ? p.tagName + "." + String(p.className || "").split(" ")[0] : ""; return Object.keys(attrs(el)).sort().join(",") + "|" + s; }
  function b64e(o) { return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function b64d(s) { s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "="; return JSON.parse(decodeURIComponent(escape(atob(s)))); }

  /* ---------- Modo maestra: registrar elecciones ---------- */
  if (PICKMODE) {
    var picks = [];
    function send() { try { parent.postMessage({ type: "mova-pick", picks: picks.map(function (p) { return { a: p.a, t: p.t, l: p.l }; }) }, location.origin); } catch (e) {} }
    document.addEventListener("click", function (e) {
      var el = e.target.closest && e.target.closest(CLICKABLE);
      if (!el || isStart(el) || skip(el)) return;
      var a = attrs(el), t = norm(el.textContent), l = label(el);
      if (!Object.keys(a).length && !t) return;
      var g = sig(el);
      picks = picks.filter(function (p) { return p.g !== g; });
      picks.push({ g: g, a: a, t: Object.keys(a).length ? "" : t, l: l });
      send();
    }, true);
    var st = document.createElement("style");
    st.textContent = "html{scrollbar-width:none}";
    document.documentElement.appendChild(st);
    send();
    return;
  }

  /* ---------- Modo alumno: aplicar lo que eligió la maestra ---------- */
  var data; try { data = b64d(PICK); } catch (e) { return; }
  var list = (data && data.p) || [];
  if (!list.length) return;
  function find(d) {
    var els = document.querySelectorAll(CLICKABLE);
    for (var i = 0; i < els.length; i++) {
      var el = els[i]; if (!el.offsetParent && el.getClientRects().length === 0) continue;
      var a = attrs(el), ok = true;
      for (var k in d.a) if (a[k] !== d.a[k]) { ok = false; break; }
      if (!ok) continue;
      if (d.t && norm(el.textContent) !== d.t) continue;
      if (!Object.keys(d.a).length && !d.t) continue;
      return el;
    }
    return null;
  }
  var chosen = [];
  function step(i) {
    if (i >= list.length) return done();
    var t0 = Date.now();
    (function wait() {
      var el = find(list[i]);
      if (el) { try { el.click(); } catch (e) {} chosen.push(list[i]); setTimeout(function () { step(i + 1); }, 420); return; }
      if (Date.now() - t0 > 5000) return step(i + 1);
      setTimeout(wait, 150);
    })();
  }
  function lock() {
    chosen.forEach(function (d) {
      var el = find(d); if (!el || !el.parentElement) return;
      var keys = Object.keys(d.a).sort().join(",");
      Array.prototype.forEach.call(el.parentElement.children, function (sib) {
        if (sib === el || !sib.matches || !sib.matches(CLICKABLE) || isStart(sib)) return;
        if (Object.keys(attrs(sib)).sort().join(",") !== keys) return;
        sib.style.opacity = ".38"; sib.style.pointerEvents = "none";
      });
    });
  }
  function done() {
    lock();
    var mo = new MutationObserver(function () { clearTimeout(mo.t); mo.t = setTimeout(lock, 120); });
    mo.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 15000);
    var labels = (data.l || chosen.map(function (d) { return d.l; })).filter(Boolean);
    var b = document.createElement("div");
    b.setAttribute("role", "status");
    b.style.cssText = "position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 12px);transform:translateX(-50%);z-index:2147483600;background:#15192B;color:#fff;border-radius:999px;padding:9px 16px 9px 10px;font:700 13.5px/1.2 'Plus Jakarta Sans',system-ui,sans-serif;box-shadow:0 10px 26px rgba(21,25,43,.3);display:flex;align-items:center;gap:9px;max-width:92%;transition:opacity .4s";
    b.innerHTML = '<span style="background:#FF8FC8;color:#15192B;border-radius:999px;padding:4px 9px;font-size:11px;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap">Your teacher chose</span><span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + labels.join(" · ").replace(/[<>&]/g, "") + "</span>";
    document.body.appendChild(b);
    setTimeout(function () { b.style.opacity = "0"; setTimeout(function () { b.remove(); }, 500); }, 5000);
  }
  function go() { setTimeout(function () { step(0); }, 700); }
  document.readyState === "complete" ? go() : addEventListener("load", go);
})();
