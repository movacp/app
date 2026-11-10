/* MOVA · Notificaciones push para alumnos.
   Pide permiso con un aviso propio (con el personaje del alumno), registra el dispositivo en Supabase
   y abre My Progress cuando el alumno toca una notificación. */
(function () {
  var SB_URL = "https://fclafxrkibvcjktrgznt.supabase.co", SB_KEY = "sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6";
  var VAPID = "BIclZLvdW5NOd-xK3n9z_gto0GSWsbb3pM5DAPYkgI6hsDcd-sHkp1utlAu1c59Sese95wU4sIVMEUHFcIgGN1s", K_ASK = "mova-push-ask", K_SYNC = "mova-push-sync";
  function rpc(fn, args) {
    return fetch(SB_URL + "/rest/v1/rpc/" + fn, { method: "POST", headers: { apikey: SB_KEY, "Content-Type": "application/json" }, body: JSON.stringify(args || {}) })
      .then(function (r) { return r.json().catch(function () { return null; }); });
  }
  function get(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function me() { try { return window.MovaAuth && MovaAuth.user && MovaAuth.user(); } catch (e) { return null; } }
  function supported() { return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window; }
  function today() { return new Date().toISOString().slice(0, 10); }
  function key(b64) { var p = "=".repeat((4 - b64.length % 4) % 4), s = atob((b64 + p).replace(/-/g, "+").replace(/_/g, "/")), a = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }

  function subscribe(u) {
    return navigator.serviceWorker.ready.then(function (reg) {
      return reg.pushManager.getSubscription().then(function (s) { return s || reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: key(VAPID) }); });
    }).then(function (s) {
      var j = s.toJSON();
      return rpc("push_subscribe", { p_token: u.token, p_endpoint: j.endpoint, p_p256dh: j.keys.p256dh, p_auth: j.keys.auth });
    }).then(function () { set(K_SYNC, { u: u.username, d: today() }); }).catch(function () {});
  }

  function ask(u) {
    if (document.getElementById("mva-task") || document.getElementById("mva-push")) { setTimeout(function () { ask(u); }, 8000); return; }
    var MC = window.MovaCompanion, st = document.createElement("style");
    st.textContent = "#mva-push-scrim{position:fixed;inset:0;z-index:2147483599;background:rgba(14,16,30,.55);opacity:0;transition:opacity .25s}" +
      "#mva-push{position:fixed;left:50%;top:50%;z-index:2147483600;width:min(86vw,350px);transform:translate(-50%,-44%) scale(.96);opacity:0;transition:transform .35s cubic-bezier(.2,.9,.3,1.15),opacity .25s;" +
      "background:#15192B;color:#fff;border-radius:24px;padding:16px;border:1.5px solid rgba(255,255,255,.16);box-shadow:0 20px 50px rgba(0,0,0,.4);font-family:'Plus Jakarta Sans',Poppins,system-ui,sans-serif}" +
      "#mva-push.is-in{transform:translate(-50%,-50%) scale(1);opacity:1}#mva-push-scrim.is-in{opacity:1}" +
      "#mva-push .rw{display:flex;gap:10px;align-items:center}#mva-push .ch{flex:none;width:84px;height:84px;margin:-4px 2px -4px -2px;border-radius:50%;overflow:hidden}#mva-push .ch svg{width:100%;height:100%;display:block}" +
      "#mva-push .k{display:inline-block;background:#D3F36B;color:#15192B;font:800 10.5px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.08em;padding:5px 9px;border-radius:999px;margin-bottom:7px}" +
      "#mva-push h3{margin:0;font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;font-weight:800;font-size:18px;line-height:1.15}" +
      "#mva-push p{margin:5px 0 0;font-size:13.5px;line-height:1.4;color:#C9CBE0}" +
      "#mva-push .go{display:block;width:100%;margin-top:14px;border:0;border-radius:999px;background:#D3F36B;color:#15192B;font:800 15px 'Plus Jakarta Sans',Poppins,sans-serif;padding:12px 16px;cursor:pointer}" +
      "#mva-push .lt{display:block;width:100%;margin-top:6px;border:0;background:none;color:#C9CBE0;font:700 13.5px 'Plus Jakarta Sans',sans-serif;padding:6px;cursor:pointer}";
    document.head.appendChild(st);
    var scrim = document.createElement("div"); scrim.id = "mva-push-scrim";
    var d = document.createElement("div"); d.id = "mva-push"; d.setAttribute("role", "dialog");
    d.innerHTML = '<div class="rw"><span class="ch" style="background:' + (MC ? MC.bg() : "#EEF9C6") + '">' + (MC ? MC.svg(null, true) : "") + "</span>" +
      '<div><span class="k">AVISOS</span><h3>¿Te avisamos de tus actividades?</h3><p>Te llegará un aviso cuando tu maestra te asigne una actividad y antes de la fecha de entrega.</p></div></div>' +
      '<button class="go" type="button">Activar avisos</button><button class="lt" type="button">Ahora no</button>';
    var bye = function () { d.remove(); scrim.remove(); };
    d.querySelector(".go").onclick = function () {
      bye();
      Notification.requestPermission().then(function (p) { set(K_ASK, { d: Date.now(), p: p }); if (p === "granted") subscribe(u); });
    };
    d.querySelector(".lt").onclick = function () { bye(); set(K_ASK, { d: Date.now(), p: "later" }); };
    document.body.appendChild(scrim); document.body.appendChild(d);
    requestAnimationFrame(function () { requestAnimationFrame(function () { scrim.classList.add("is-in"); d.classList.add("is-in"); }); });
  }

  function init() {
    var u = me(); if (!u || !u.token) return;
    var sync = get(K_SYNC);
    if (!sync || sync.u !== u.username || sync.d !== today()) rpc("push_seen", { p_token: u.token });
    if (!supported()) return;
    if (Notification.permission === "granted") { if (!sync || sync.u !== u.username || sync.d !== today()) subscribe(u); return; }
    if (Notification.permission === "denied") return;
    var a = get(K_ASK);
    if (a && Date.now() - a.d < 7 * 864e5) return;
    ask(u);
  }

  function openFromLink() {
    if (!/[?&]open=progress\b/.test(location.search)) return;
    try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) {}
    var n = 0, t = setInterval(function () {
      if (window.MovaAuth && MovaAuth.progress && MovaAuth.user && MovaAuth.user()) { clearInterval(t); MovaAuth.progress(); }
      else if (++n > 40) clearInterval(t);
    }, 250);
  }

  window.MovaPush = { init: init, subscribe: function () { var u = me(); if (u) return subscribe(u); } };
  function start() { openFromLink(); setTimeout(init, 4500); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
