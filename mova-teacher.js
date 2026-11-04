/* MOVA Learning Studio · Acceso al panel de maestras
   El botón solo aparece en los dispositivos activados por la maestra.
   Activar:    heymova.mx/?maestra=1
   Desactivar: heymova.mx/?maestra=0
   El panel siempre pide correo y contraseña; el botón solo es un atajo. */
(function () {
  "use strict";
  var KEY = "mova_teacher_device";
  try {
    var q = new URLSearchParams(location.search).get("maestra");
    if (q === "1") localStorage.setItem(KEY, "1");
    if (q === "0") localStorage.removeItem(KEY);
    if (q !== null) history.replaceState(null, "", location.pathname + location.hash);
    if (localStorage.getItem(KEY) !== "1") return;
  } catch (e) { return; }

  var css = ".mvt-btn{display:inline-flex;align-items:center;gap:7px;flex:none;border:1.5px solid var(--navy,#1E3A5F);" +
    "background:var(--navy,#1E3A5F);color:#fff;border-radius:999px;padding:6px 13px 6px 8px;" +
    "font:600 13px/1 var(--font-ui,Poppins,system-ui,sans-serif);text-decoration:none;white-space:nowrap}" +
    ".mvt-btn svg{width:16px;height:16px}" +
    ".mvt-btn:focus-visible{outline:3px solid #8EC9EE;outline-offset:2px}" +
    "@media(max-width:520px){.mvt-btn .mvt-lbl{display:none}.mvt-btn{padding:6px}}";

  function mount() {
    if (document.querySelector(".mvt-btn")) return true;
    var wrap = document.querySelector(".topbar .wrap");
    if (!wrap) return false;
    var a = document.createElement("a");
    a.className = "mvt-btn";
    a.href = "admin.html";
    a.setAttribute("aria-label", "Panel de maestras");
    a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="3" y="3" width="7.5" height="9" rx="2"/><rect x="13.5" y="3" width="7.5" height="5.5" rx="2"/>' +
      '<rect x="13.5" y="11.5" width="7.5" height="9.5" rx="2"/><rect x="3" y="15" width="7.5" height="6" rx="2"/></svg>' +
      '<span class="mvt-lbl">Panel</span>';
    var chip = wrap.querySelector(".mva-chip") || document.getElementById("theme-btn");
    chip ? wrap.insertBefore(a, chip) : wrap.appendChild(a);
    return true;
  }

  function boot() {
    var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
    var tries = 0, t = setInterval(function () { if (mount() || ++tries > 40) clearInterval(t); }, 250);
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
})();
