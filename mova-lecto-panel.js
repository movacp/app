/* MOVA Lectoescritura · Panel de maestra
   Pestaña "Lectura": alumnos con su Mi Ruta Lectora, diagnóstico de entrada,
   validación presencial por nivel (90% en 2 sesiones de días distintos + pseudopalabras)
   y hoja de registro para imprimir.
   Las validaciones se guardan como tareas ocultas "wfb:lv:…" (el alumno no las ve como tareas),
   y mova-lecto.js las lee para mover la ruta del alumno. */
(function () {
  "use strict";
  const LV = ["Sonidos y vocales", "Primeras sílabas", "Sílabas directas", "Sílabas inversas y mixtas", "Sílabas trabadas y diptongos", "Casos especiales", "Oraciones y fluidez", "Textos y comprensión"];
  const MK = ["a e", "ma", "sol", "al", "pla", "qu", "Aa.", "📖"];
  /* Banco de validación por nivel: palabras y sílabas, pseudopalabras y dictado */
  const BANK = {
    1: { r: ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"], s: ["ojo", "ala", "uva", "elefante", "iglesia"], sLab: "Sonido inicial (la maestra dice la palabra)", p: [], w: ["a", "e", "i", "o", "u"] },
    2: { r: ["ma", "me", "pi", "po", "su", "sa", "le", "lu", "mapa", "sapo", "pelo", "mesa", "loma", "sopa", "pila"], p: ["pime", "sule", "lapo", "mesu", "poli"], w: ["mamá", "sopa", "pelo", "la mesa", "Mi papá me ama."] },
    3: { r: ["ta", "ne", "fu", "ca", "bo", "ju", "ña", "che", "nido", "foca", "gato", "vaca", "jugo", "cocina", "tomate"], p: ["dafo", "nuta", "bico", "chepo", "jaru"], w: ["dedo", "foca", "nube", "cocina", "La vaca come."] },
    4: { r: ["el", "os", "un", "ar", "im", "mar", "sol", "pez", "red", "árbol", "isla", "campo", "pastel", "marzo", "cartel"], p: ["alpo", "insa", "morte", "celdo", "burta"], w: ["sol", "árbol", "pastel", "campo", "El sol es azul."] },
    5: { r: ["pla", "bra", "cri", "flo", "glu", "tre", "plato", "brazo", "clavo", "fresa", "globo", "tren", "piano", "nieve", "cuatro"], p: ["brune", "clafo", "griti", "fleso", "tiapo"], w: ["plato", "fresa", "globo", "nieve", "El tren es grande."] },
    6: { r: ["queso", "quita", "guerra", "guiso", "gente", "gigante", "cereza", "cielo", "ratón", "perro", "carro", "hilo", "helado", "zapato", "llave"], p: ["quelo", "guime", "gifo", "cebu", "jorra"], w: ["queso", "guitarra", "gente", "helado", "El perro corre rápido."] },
    7: { o: ["Mi gato duerme en la cama.", "¿Quién trajo las galletas?", "¡Qué grande es el mar!", "Luis y Ana juegan en el parque.", "¿Vienes a mi fiesta el sábado?"],
      t: "Ana tiene un perro que se llama Pipo. Pipo es café y tiene orejas largas. Todas las tardes, Ana y Pipo salen a caminar al parque. Allí Pipo corre detrás de las palomas, pero nunca las alcanza. Cuando regresan a casa, Pipo bebe mucha agua y se duerme junto a la puerta.",
      q: ["¿Cómo se llama el perro de Ana?", "¿A dónde salen a caminar?", "¿Qué hace Pipo cuando regresan a casa?"], w: ["El perro corre.", "¿Dónde está mi lápiz?", "¡Qué rico pastel!"] },
    8: { t: "Un sábado por la mañana, Diego encontró un pajarito en el patio. Tenía un ala lastimada y no podía volar. Diego lo puso con cuidado en una caja con un trapo suave y le llevó agua en una tapita. Su mamá le explicó que el pajarito necesitaba descansar y comer semillas. Durante varios días, Diego lo cuidó antes y después de la escuela. Una tarde, el pajarito empezó a mover las dos alas y saltó al borde de la caja. Diego abrió la ventana, y el pajarito voló hasta el árbol de enfrente. Desde entonces, cada mañana escucha un canto muy cerca de su ventana.",
      q: ["¿Qué encontró Diego en el patio?", "¿Qué le pasaba al pajarito?", "¿Qué hizo Diego para cuidarlo?", "¿Por qué crees que el pajarito no podía volar?", "¿Quién crees que canta cerca de su ventana? ¿Por qué?"], w: ["Diego cuidó al pajarito.", "El pajarito voló hasta el árbol de enfrente."] }
  };
  const ESC = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const first = n => String(n || "").trim().split(/\s+/)[0] || "";
  const today = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const fmtD = d => { try { return new Date(d + "T12:00:00").toLocaleDateString("es-MX", { day: "numeric", month: "short" }); } catch (e) { return d; } };
  const enc = o => "LV|" + btoa(unescape(encodeURIComponent(JSON.stringify(o))));
  const dec = t => { try { return /^LV\|/.test(t || "") ? JSON.parse(decodeURIComponent(escape(atob(String(t).slice(3))))) : null; } catch (e) { return null; } };
  const pct = a => a && a[1] ? Math.round(a[0] / a[1] * 100) : null;
  const R = (fn, a) => rpc(fn, a);
  const T = () => (typeof tName === "function" ? tName() : "Miss");

  /* ---------- Reglas ---------- */
  function sessionOk(v) {
    if (v.m) return true;
    const r = pct(v.r), p = pct(v.p), c = v.c && v.c[1] ? v.c[0] / v.c[1] : null;
    if (r == null || r < 90) return false;
    if (p != null && p < 80) return false;
    if (c != null && c < (v.c[1] <= 3 ? 0.66 : 0.8)) return false;
    return true;
  }
  function levelStatus(vals, l) {
    const s = vals.filter(v => v.l === l && !v.x);
    if (s.some(v => v.m)) return { done: true, n: 2, s };
    const days = new Set(s.filter(sessionOk).map(v => v.d));
    return { done: days.size >= 2, n: Math.min(2, days.size), s };
  }
  function current(diag, vals) {
    let L = diag ? Math.max(1, Math.min(9, +diag.nivel_lectura || 1)) : (vals.length ? 1 : 0);
    if (!L) return 0;
    while (L <= 8 && levelStatus(vals, L).done) L++;
    return L;
  }
  function stateOf(i, L, diag, vals) {
    const n = i + 1;
    if (!L) return "next";
    if (n < L) return "done";
    if (n === L) return "now";
    return levelStatus(vals, n).done ? "done" : "next";
  }

  /* ---------- Datos ---------- */
  let STU = [], DATA = {}, loading = false, Q = "";
  const KEEP = "mova_lecto_panel_ids";
  const kept = () => { try { return JSON.parse(localStorage.getItem(KEEP) || "[]"); } catch (e) { return []; } };
  const keep = id => { try { const k = kept().filter(x => x !== String(id)); k.unshift(String(id)); localStorage.setItem(KEEP, JSON.stringify(k.slice(0, 40))); } catch (e) {} };
  async function loadOne(s) {
    const [tasks, rows] = await Promise.all([R("admin_list_tasks", { p_student: String(s.id) }).catch(() => []), R("admin_student_progress", { p_student: s.id, p_limit: 1000 }).catch(() => [])]);
    const vals = (tasks || []).filter(t => String(t.task || "").indexOf("wfb:lv:") === 0).map(t => { const o = dec(t.title); return o ? Object.assign(o, { id: t.id, at: t.created_at }) : null; }).filter(Boolean);
    const del = new Set(vals.filter(v => v.x).map(v => v.x));
    const live = vals.filter(v => !v.x && !del.has(v.u));
    const dg = (rows || []).filter(r => r.activity === "diagnostico-lectura" && r.detail && r.detail.nivel_lectura).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];
    const diag = dg ? Object.assign({ fecha: dg.created_at }, dg.detail) : null;
    const pend = (tasks || []).some(t => String(t.task || "").split("~")[0] === "diagnostico-lectura" && (!dg || new Date(t.created_at) > new Date(dg.created_at)));
    const lessons = {}; (rows || []).filter(r => r.activity === "lectura-leccion" && r.detail && r.detail.leccion).forEach(r => { const k = "N" + r.detail.nivel + " U" + r.detail.unidad + " L" + r.detail.leccion; if (!lessons[k] || (r.detail.stars || 0) > lessons[k].stars) lessons[k] = { stars: r.detail.stars || 0, seal: !!r.detail.seal, at: r.created_at }; });
    const D = { s, vals: live, diag, pend, L: current(diag, live), lessons };
    DATA[s.id] = D; return D;
  }
  const isLecto = s => /lectoescritura/i.test(String(s.stage || ""));
  async function loadAll() {
    if (loading) return; loading = true;
    const box = document.getElementById("v-lecto"); if (box && !STU.length) box.innerHTML = '<p class="lp-sub" style="padding:22px 4px">Cargando alumnos…</p>';
    try { STU = (typeof students !== "undefined" && students && students.length ? students : await R("admin_list_students")) || []; } catch (e) { STU = []; }
    const ids = new Set(kept());
    const want = STU.filter(s => isLecto(s) || ids.has(String(s.id)));
    await Promise.all(want.map(s => loadOne(s).catch(() => null)));
    loading = false; draw();
  }

  /* ---------- Vista principal ---------- */
  function draw() {
    const box = document.getElementById("v-lecto"); if (!box) return;
    const list = Object.values(DATA).sort((a, b) => a.s.full_name.localeCompare(b.s.full_name));
    const withD = list.filter(d => d.diag).length;
    const month = new Date().toISOString().slice(0, 7);
    const valM = list.reduce((n, d) => n + d.vals.filter(v => (v.d || "").slice(0, 7) === month).length, 0);
    const ready = list.filter(d => d.L && d.L <= 8 && levelStatus(d.vals, d.L).n === 1).length;
    const found = Q ? STU.filter(s => s.full_name.toLowerCase().includes(Q.toLowerCase()) && !DATA[s.id]).slice(0, 8) : [];
    box.innerHTML = `
      <div class="lp-stats"><div><b>${withD}</b><span>Con diagnóstico</span></div><div><b>${valM}</b><span>Validaciones este mes</span></div><div><b>${ready}</b><span>Les falta 1 sesión</span></div></div>
      <div class="lp-tools"><input class="in" id="lpQ" type="search" placeholder="Buscar cualquier alumno…" value="${ESC(Q)}"><button class="lp-btn ghost" id="lpPrint">Hojas de registro</button></div>
      ${found.length ? `<div class="lp-found">${found.map(s => `<button data-add="${ESC(s.id)}"><span>${ESC(s.full_name)}</span><em>Agregar</em></button>`).join("")}</div>` : ""}
      <div class="lp-list">${!list.length ? `<div class="empty"><b>Aún no hay alumnos de lectoescritura</b>Busca a un alumno arriba para agregarlo, o asígnale el grupo Lectoescritura.</div>` :
      list.map(d => {
        const st = d.L && d.L <= 8 ? levelStatus(d.vals, d.L) : null;
        const tag = !d.diag && !d.vals.length ? (d.pend ? '<span class="lp-chip pk">Diagnóstico asignado</span>' : '<span class="lp-chip">Sin diagnóstico</span>')
          : d.L > 8 ? '<span class="lp-chip lm">8 niveles logrados</span>' : `<span class="lp-chip lv">Nivel ${d.L} · ${st.n} de 2 sesiones</span>`;
        return `<button class="lp-row" data-open="${ESC(d.s.id)}"><span class="lp-av">${ESC(first(d.s.full_name).slice(0, 1))}</span><span class="lp-mid"><b>${ESC(d.s.full_name)}</b><span class="lp-mini">${LV.map((x, i) => `<i class="${stateOf(i, d.L, d.diag, d.vals)}"></i>`).join("")}</span></span>${tag}</button>`;
      }).join("")}</div>`;
    const q = document.getElementById("lpQ"); q.oninput = () => { Q = q.value; draw(); const n = document.getElementById("lpQ"); n.focus(); n.setSelectionRange(Q.length, Q.length); };
    document.getElementById("lpPrint").onclick = () => printSheet(null, null);
    box.querySelectorAll("[data-add]").forEach(b => b.onclick = async () => { const s = STU.find(x => String(x.id) === b.dataset.add); if (!s) return; keep(s.id); b.disabled = true; await loadOne(s); Q = ""; draw(); openStudent(s.id); });
    box.querySelectorAll("[data-open]").forEach(b => b.onclick = () => openStudent(b.dataset.open));
  }

  /* ---------- Ficha del alumno ---------- */
  let SEL = null;
  function openStudent(id, lvl) {
    const D = DATA[id]; if (!D) return; keep(id);
    const s = D.s, L = D.L;
    SEL = lvl || (L && L <= 8 ? L : 1);
    const st = levelStatus(D.vals, SEL), B = BANK[SEL], hi = SEL >= 7;
    const dg = D.diag;
    const sess = st.s.slice().sort((a, b) => (a.d < b.d ? -1 : 1));
    openModal(`<button class="x" aria-label="Cerrar">✕</button>
      <div class="lp-hd"><span class="lp-k">Mi Ruta Lectora</span><h2>${ESC(s.full_name)}</h2>
      <p>${dg ? `Diagnóstico del ${ESC(new Date(dg.fecha).toLocaleDateString("es-MX", { day: "numeric", month: "long" }))}: lectura nivel ${dg.nivel_lectura > 8 ? "8+" : dg.nivel_lectura}, escritura nivel ${dg.nivel_escritura}${dg.ppm ? ` · ${dg.ppm} ppm` : ""}` : D.pend ? "Tiene el diagnóstico de entrada asignado. Hazlo con el alumno en clase." : "Todavía no tiene diagnóstico de entrada."}</p></div>
      <button class="lp-btn" id="lpRep" style="width:100%;margin-bottom:12px;background:#1E2A55;color:#fff">Informe para la familia</button>
      ${Object.keys(D.lessons).length ? `<div class="lp-les"><span class="lp-k">Lecciones en casa</span><div>${Object.keys(D.lessons).sort().map(k => `<span>${ESC(k)} ${"★".repeat(D.lessons[k].stars)}${D.lessons[k].seal ? " · sello" : ""}</span>`).join("")}</div></div>` : ""}
      ${!dg ? `<button class="lp-btn ${D.pend ? "ghost" : ""}" id="lpDiag" style="width:100%;margin-bottom:12px">${D.pend ? "Volver a asignar el diagnóstico" : "Asignar diagnóstico de entrada"}</button>` : ""}
      <div class="lp-map">${LV.map((x, i) => { const c = stateOf(i, L, dg, D.vals); return `<button data-l="${i + 1}" class="${c}${i + 1 === SEL ? " sel" : ""}" title="${ESC(x)}"><img src="${i === 7 ? "le-libro.webp" : "le-n" + (i + 1) + ".webp"}" alt=""><small>${i + 1}</small></button>`; }).join("")}</div>
      <div class="lp-lvl"><div class="lp-lh"><div><span class="lp-k">Nivel ${SEL}${SEL === L ? " · en práctica" : ""}</span><h3>${ESC(LV[SEL - 1])}</h3></div>
        <span class="lp-chip ${st.done ? "lm" : st.n ? "lv" : ""}">${st.done ? "Logrado" : st.n + " de 2 sesiones"}</span></div>
        ${sess.length ? `<div class="lp-sess">${sess.map(v => `<div class="${sessionOk(v) ? "ok" : "no"}"><b>${ESC(fmtD(v.d))}</b><span>${v.m ? "Validado por la maestra" : `Lectura ${pct(v.r)}%${v.p && v.p[1] ? ` · pseudo ${v.p[0]}/${v.p[1]}` : ""}${v.c && v.c[1] ? ` · comprensión ${v.c[0]}/${v.c[1]}` : ""}${v.ppm ? ` · ${v.ppm} ppm` : ""}${v.w && v.w[1] ? ` · dictado ${v.w[0]}/${v.w[1]}` : ""}`}${v.by ? ` · ${ESC(v.by)}` : ""}</span><button data-del="${ESC(v.u)}" aria-label="Borrar sesión">✕</button></div>`).join("")}</div>`
        : `<p class="lp-sub" style="margin:4px 0 0">Aún no hay sesiones de validación en este nivel.</p>`}
        ${st.done ? "" : `<div class="lp-form"><span class="lp-k">Registrar sesión de validación</span>
          <label class="lp-f"><span>Fecha</span><input class="in" type="date" id="fD" value="${today()}"></label>
          ${counter("fR", hi ? "Precisión al leer (palabras bien leídas)" : (SEL === 1 ? "Vocales y sonidos bien" : "Palabras y sílabas bien leídas"), hi ? 0 : B.r.length + (B.s ? B.s.length : 0), hi ? 0 : B.r.length + (B.s ? B.s.length : 0), hi)}
          ${B.p && B.p.length ? counter("fP", "Pseudopalabras bien leídas", B.p.length, B.p.length) : ""}
          ${hi ? counter("fC", "Preguntas de comprensión bien", B.q.length, B.q.length) : ""}
          ${hi ? `<label class="lp-f"><span>Palabras correctas por minuto</span><input class="in" type="number" inputmode="numeric" id="fM" placeholder="Opcional"></label>` : ""}
          ${counter("fW", "Dictado bien escrito (opcional)", B.w.length, B.w.length)}
          <label class="lp-f"><span>Notas</span><input class="in" id="fN" placeholder="Opcional: silabea, confunde b/d…"></label>
          <p class="lp-res" id="fRes"></p>
          <button class="lp-btn" id="fSave" style="width:100%">Guardar sesión</button></div>`}
        <div class="lp-acts"><button class="lp-btn ghost" id="lpSheet">Imprimir hoja de este nivel</button>${st.done ? "" : `<button class="lp-link" id="lpMan">Marcar como logrado sin sesiones</button>`}</div>
      </div>
      <p class="lp-rule">Un nivel se logra con 2 sesiones en días distintos con al menos 90% de lectura correcta${B.p && B.p.length ? " y 4 de 5 pseudopalabras" : ""}. Lo que el alumno practica solo en la app no cuenta como validación.</p>`);
    const sh = document.querySelector("#modal .sheet"); if (sh) sh.classList.add("lp-sheet");
    document.querySelectorAll(".lp-map [data-l]").forEach(b => b.onclick = () => openStudent(id, +b.dataset.l));
    document.querySelectorAll(".lp-ct").forEach(c => { const i = c.querySelector("input"), t = +c.dataset.t;
      c.querySelector(".m").onclick = () => { i.value = Math.max(0, (+i.value || 0) - 1); live(); };
      c.querySelector(".p").onclick = () => { i.value = Math.min(t || 999, (+i.value || 0) + 1); live(); };
      i.oninput = live; const tt = c.querySelector(".tt"); if (tt) tt.oninput = live; });
    const dB = document.getElementById("lpDiag"); if (dB) dB.onclick = async () => { dB.disabled = true;
      try { await R("admin_assign_task", { p_student: String(s.id), p_username: s.username, p_task: "diagnostico-lectura", p_title: "Diagnóstico de entrada · Lectoescritura · by " + T() }); toast(`Diagnóstico asignado a ${first(s.full_name)}`); await loadOne(s); draw(); openStudent(id); }
      catch (e) { dB.disabled = false; toast(e.message || "No se pudo asignar"); } };
    document.getElementById("lpSheet").onclick = () => printSheet(s, SEL);
    document.getElementById("lpRep").onclick = () => { if (!D.diag && !D.vals.length) { toast("Aún no hay diagnóstico ni niveles validados para el informe"); return; } openReport(D); };
    document.querySelectorAll("[data-del]").forEach(b => b.onclick = async () => { if (!confirm("¿Borrar esta sesión de validación?")) return; b.disabled = true;
      try { await R("admin_assign_task", { p_student: String(s.id), p_username: s.username, p_task: "wfb:lv:x" + Date.now().toString(36), p_title: enc({ v: 1, x: b.dataset.del, by: T() }) }); await loadOne(s); draw(); openStudent(id, SEL); toast("Sesión borrada"); }
      catch (e) { b.disabled = false; toast(e.message || "No se pudo borrar"); } });
    const man = document.getElementById("lpMan"); if (man) man.onclick = () => { if (confirm(`¿Marcar el nivel ${SEL} como logrado para ${first(s.full_name)} sin registrar sesiones? Úsalo solo si ya comprobaste en clase que lo domina.`)) saveV(s, id, { m: 1, d: today() }); };
    const fs = document.getElementById("fSave"); if (fs) { live(); fs.onclick = () => {
      const g = k => { const c = document.querySelector(`.lp-ct[data-k="${k}"]`); if (!c) return null; const tt = c.querySelector(".tt"); const t = tt ? +tt.value || 0 : +c.dataset.t; const v = +c.querySelector("input").value || 0; return t ? [Math.min(v, t), t] : null; };
      const o = { d: document.getElementById("fD").value || today(), r: g("fR"), p: g("fP"), c: g("fC"), w: g("fW"), n: (document.getElementById("fN").value || "").trim() };
      const m = document.getElementById("fM"); if (m && +m.value) o.ppm = +m.value;
      if (!o.r) { toast("Escribe cuántas palabras leyó"); return; }
      if (st.s.some(v => v.d === o.d && sessionOk(v)) && !confirm("Ya hay una sesión aprobada ese día. Para el logro cuentan días distintos. ¿Guardarla de todos modos?")) return;
      saveV(s, id, o); }; }
  }
  function counter(k, lab, t, v, editT) {
    return `<div class="lp-f lp-ct" data-k="${k}" data-t="${t}"><span>${ESC(lab)}</span><div class="lp-cr"><button type="button" class="m" aria-label="Menos">−</button><input class="in" type="number" inputmode="numeric" value="${v}"><b>de ${editT ? `<input class="in tt" type="number" inputmode="numeric" value="" placeholder="total" style="width:74px">` : t}</b><button type="button" class="p" aria-label="Más">+</button></div></div>`;
  }
  function live() {
    const out = document.getElementById("fRes"); if (!out) return;
    const g = k => { const c = document.querySelector(`.lp-ct[data-k="${k}"]`); if (!c) return null; const tt = c.querySelector(".tt"); const t = tt ? +tt.value || 0 : +c.dataset.t; return t ? [+c.querySelector("input").value || 0, t] : null; };
    const v = { r: g("fR"), p: g("fP"), c: g("fC") };
    if (!v.r) { out.textContent = "Escribe el total de palabras del texto."; out.className = "lp-res"; return; }
    const ok = sessionOk(v);
    out.textContent = `Lectura ${pct(v.r)}%${v.p ? ` · pseudopalabras ${v.p[0]} de ${v.p[1]}` : ""}${v.c ? ` · comprensión ${v.c[0]} de ${v.c[1]}` : ""} → ${ok ? "sesión aprobada" : "todavía no alcanza el criterio"}`;
    out.className = "lp-res " + (ok ? "ok" : "no");
  }
  async function saveV(s, id, o) {
    const u = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const rec = Object.assign({ v: 1, u, l: SEL, by: T() }, o);
    Object.keys(rec).forEach(k => { if (rec[k] == null || rec[k] === "") delete rec[k]; });
    try {
      await R("admin_assign_task", { p_student: String(s.id), p_username: s.username, p_task: "wfb:lv:" + u, p_title: enc(rec) });
      const before = DATA[id].L; await loadOne(s); draw();
      const D = DATA[id];
      toast(D.L > before ? `¡${first(s.full_name)} logró el nivel ${before}! Su ruta ya avanzó.` : "Sesión guardada");
      openStudent(id, D.L > before && D.L <= 8 ? D.L : SEL);
    } catch (e) { toast(e.message || "No se pudo guardar"); }
  }


  /* ---------- Informe para la familia (formal, enfoque pedagógico) ---------- */
  const DESC = [
    "Reconoce y nombra las cinco vocales en mayúscula y minúscula, e identifica el sonido inicial de las palabras.",
    "Une consonante y vocal para leer y escribir sílabas y palabras con m, p, s y l.",
    "Lee y escribe sílabas directas con el resto de las consonantes, en palabras y oraciones cortas.",
    "Lee y escribe sílabas inversas y mixtas dentro de palabras (al, es, sol, mar).",
    "Lee y escribe sílabas trabadas (pl, br, cr, tr) y palabras con diptongo (piano, nieve).",
    "Aplica los casos especiales de la lengua: que-qui, gue-gui, ge-gi, ce-ci, r y rr, h, ll y z.",
    "Lee oraciones con entonación adecuada y respeta los signos de puntuación, interrogación y exclamación.",
    "Lee textos completos con fluidez y precisión, y responde preguntas literales e inferenciales."
  ];
  const HOME = [
    ["Jugar a encontrar objetos de la casa que empiecen con cada vocal.", "Leer cuentos en voz alta y pedirle que repita las palabras que más le gusten."],
    ["Leer juntos palabras sencillas en etiquetas, empaques y letreros.", "Pedirle que escriba la lista del súper con palabras cortas."],
    ["Leer en voz alta un párrafo corto al día y repetirlo hasta leerlo sin pausas.", "Dictarle tres palabras nuevas cada noche."],
    ["Buscar en un libro palabras que terminen en consonante (sol, mar, pez) y leerlas juntos.", "Escribir oraciones cortas con esas palabras."],
    ["Leer juntos palabras con trabadas (plato, tren, globo) en libros y revistas.", "Hacer dictados breves de oraciones de cinco o seis palabras."],
    ["Señalar en sus lecturas palabras con que, gue, ce y gi, y leerlas juntos.", "Corregir con calma su escritura, explicando la regla."],
    ["Leer un texto corto dos o tres veces seguidas para ganar fluidez.", "Turnarse en voz alta: un párrafo usted y uno su hijo(a)."],
    ["Leer diariamente quince minutos un libro de su interés.", "Al terminar, conversar sobre qué pasó, por qué y qué le gustó."]
  ];
  function openReport(D) {
    const s = D.s, L = D.L, dg = D.diag, nm = first(s.full_name);
    const done = LV.map((x, i) => stateOf(i, L, dg, D.vals) === "done");
    const nDone = done.filter(Boolean).length, all = L > 8;
    const lastD = l => { const ss = D.vals.filter(v => v.l === l && (v.m || sessionOk(v))).map(v => v.d).sort(); return ss.length ? ss[ss.length - 1] : null; };
    const ppmV = D.vals.filter(v => v.ppm).sort((a, b) => (a.d < b.d ? -1 : 1));
    const ppm = ppmV.length ? ppmV[ppmV.length - 1].ppm : (dg && dg.ppm) || null;
    const nLes = Object.keys(D.lessons).length;
    const hoy = new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
    const fL = d => { try { return new Date(d + "T12:00:00").toLocaleDateString("es-MX", { day: "numeric", month: "long" }); } catch (e) { return d; } };
    const base = location.href.replace(/[^/]*$/, "");
    const folio = "IL-" + new Date().toISOString().slice(2, 7).replace("-", "") + "-" + String(s.id).slice(-4).toUpperCase();
    const cur = all ? "Ruta completa" : `Nivel ${L} · ${LV[L - 1]}`;
    const obs = all
      ? `${nm} acreditó los ocho niveles de la ruta de lectoescritura. Lee con seguridad, respeta la puntuación y comprende lo que lee. En la siguiente etapa trabajaremos comprensión lectora, ortografía y redacción de acuerdo con su grado escolar.`
      : nDone
        ? `${nm} acreditó ${nDone} de los ocho niveles de la ruta. Actualmente trabaja en ${LV[L - 1].toLowerCase()}: ${DESC[L - 1].charAt(0).toLowerCase() + DESC[L - 1].slice(1)} Avanza de manera constante y en clase reforzamos esta habilidad antes de acreditar el nivel.`
        : `${nm} inicia su ruta de lectoescritura en el nivel ${L}, ${LV[L - 1].toLowerCase()}. En clase trabajaremos esta habilidad de forma sistemática y la acreditaremos de manera presencial.`;
    const home = HOME[all ? 7 : L - 1];
    const C = ["#FF8FC0", "#B9A6E8", "#8EC9EE", "#9DDCC0", "#F6D776", "#FF8FC0", "#B9A6E8", "#8EC9EE"];
    const map = LV.map((x, i) => { const c = stateOf(i, L, dg, D.vals); const lab = c === "done" ? "Acreditado" : c === "now" ? "En proceso" : "Por iniciar";
      return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center"><div style="width:56px;height:48px;border-radius:13px;background:${c === "done" ? "#EAF7C4" : c === "now" ? "#ECE7FF" : "#F2F0F6"};display:grid;place-items:center;${c === "now" ? "border:2px solid #1E2A55;" : ""}"><img src="${base}${i === 7 ? "le-libro.webp" : "le-n" + (i + 1) + ".webp"}" alt="" style="width:38px;height:34px;object-fit:contain;${c === "next" ? "opacity:.45;filter:grayscale(.5)" : ""}"></div><b style="font-size:10px;color:#1E2A55;line-height:1.15">${i + 1}. ${ESC(x)}</b><span style="font-size:10px;font-weight:700;color:${c === "done" ? "#4E7A12" : c === "now" ? "#5B45B8" : "#8A8DA3"}">${lab}</span></div>`; }).join("");
    const dts = new Set(LV.map((x, i) => done[i] ? lastD(i + 1) : null).filter(Boolean)); const oneDay = dts.size === 1 && LV.every((x, i) => !done[i] || lastD(i + 1));
    const CK = '<path d="M5 12.5l4.5 4.5L19 7.5"></path>';
    const skills = LV.map((x, i) => done[i] ? `<div style="display:flex;gap:10px;align-items:flex-start"><span style="width:20px;height:20px;border-radius:50%;background:#9DDCC0;display:grid;place-items:center;flex-shrink:0;margin-top:1px"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1E2A55" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${CK}</svg></span><span style="font-size:11px;line-height:1.38;color:#2E3350"><b style="color:#1E2A55">${ESC(x)}.</b> ${ESC(DESC[i])}${lastD(i + 1) && !oneDay ? ` <span style="color:#6A6F85;white-space:nowrap">· ${ESC(fmtD(lastD(i + 1)))}</span>` : ""}</span></div>` : "").join("");
    const lab = (a, b) => `<div style="display:flex;flex-direction:column;gap:2px;min-width:0"><span style="font-size:10.5px;font-weight:700;letter-spacing:.1em;color:#6A6F85">${a}</span><b style="font-size:14px;color:#1E2A55">${ESC(b)}</b></div>`;
    const fact = (a, b) => `<span style="background:#F7F5FB;border-radius:999px;padding:6px 13px;font-size:11.5px;color:#3D4258"><span style="font-weight:700;letter-spacing:.06em;color:#6A6F85;font-size:10px">${a}</span> &nbsp;<b style="color:#1E2A55">${b}</b></span>`;
    const facts = [];
    if (dg) facts.push(fact("DIAGNÓSTICO DE ENTRADA", `lectura nivel ${dg.nivel_lectura > 8 ? "8+" : ESC(dg.nivel_lectura)} · escritura nivel ${ESC(dg.nivel_escritura || "—")}`));
    if (ppm) facts.push(fact("FLUIDEZ", `${ESC(ppm)} palabras por minuto`));
    if (nLes) facts.push(fact("PRÁCTICA EN CASA", `${nLes} lecciones completadas`));
    const next = all
      ? `<p contenteditable="true" style="margin:0;font-size:11.5px;line-height:1.45;color:#2E3350">Consolidar la comprensión lectora (literal, inferencial y crítica), la ortografía y la redacción de textos breves, de acuerdo con su grado escolar.</p>`
      : `<p contenteditable="true" style="margin:0;font-size:11.5px;line-height:1.45;color:#2E3350"><b style="color:#1E2A55">Nivel ${L} · ${ESC(LV[L - 1])}.</b> ${ESC(DESC[L - 1])}${L < 8 ? ` Después continuará con ${ESC(LV[L].toLowerCase())}.` : ""}</p>`;
    const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Informe de Lectoescritura · ${ESC(s.full_name)}</title><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>@page{size:letter;margin:0}body{margin:0;background:#E9E7F0;font-family:Poppins,system-ui,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.bar{position:sticky;top:0;z-index:5;background:#1E2A55;color:#fff;display:flex;gap:10px;align-items:center;justify-content:space-between;padding:10px 16px;font-size:13px}.bar button{background:#D3F36B;color:#15192B;border:0;border-radius:999px;padding:9px 16px;font:700 13px Poppins,sans-serif;cursor:pointer}
.pg{width:816px;height:1056px;margin:20px auto;box-sizing:border-box;background:#fff;color:#1B1F33;padding:34px 52px 28px;display:flex;flex-direction:column;gap:8px;overflow:hidden;position:relative;box-shadow:0 10px 30px -12px rgba(0,0,0,.25)}
h2{margin:0;font-size:14.5px;font-weight:800;color:#1E2A55}.pg>*{flex-shrink:0}
[contenteditable]{outline:1px dashed transparent;border-radius:6px}[contenteditable]:hover,[contenteditable]:focus{outline-color:#B9A6E8}
@media print{body{background:#fff}.bar{display:none}.pg{margin:0;box-shadow:none}[contenteditable]{outline:0!important}}
@media screen and (max-width:840px){.pg{transform:scale(calc(100vw/840));transform-origin:top left;margin:10px 0 calc((100vw/840 - 1)*1056px)}}</style></head><body>
<div class="bar"><span>Informe de ${ESC(nm)} · puede editar los textos tocándolos</span><button onclick="window.print()">Guardar PDF / Imprimir</button></div>
<div class="pg">
<div style="position:absolute;inset:16px;border:1.5px solid #1E2A55;border-radius:10px"></div>
<div style="display:flex;align-items:center;gap:18px;position:relative"><img src="${base}icon-512.png" alt="MOVA" style="width:54px;height:54px;border-radius:14px">
<div style="flex-grow:1;display:flex;flex-direction:column;gap:2px"><span style="font-size:12px;font-weight:700;letter-spacing:.16em;color:#6A6F85">MOVA CENTRO PEDAGÓGICO</span><h1 style="margin:0;font-size:27px;line-height:1.05;font-weight:800;color:#1E2A55">Informe de Lectoescritura</h1></div>
<div style="text-align:right;display:flex;flex-direction:column;gap:4px;align-items:flex-end"><span style="background:#1E2A55;color:#fff;border-radius:999px;padding:6px 14px;font-size:12.5px;font-weight:700">Mi Ruta Lectora</span><span style="font-size:11.5px;color:#6A6F85">Folio ${ESC(folio)}</span></div></div>
<div style="display:flex;height:6px;border-radius:6px;overflow:hidden;position:relative"><span style="flex-grow:1;background:#FF8FC0"></span><span style="flex-grow:1;background:#8EC9EE"></span><span style="flex-grow:1;background:#F6D776"></span><span style="flex-grow:1;background:#9DDCC0"></span><span style="flex-grow:1;background:#B9A6E8"></span></div>
<p style="margin:-2px 0 0;font-size:11.5px;line-height:1.5;color:#3D4258;position:relative">El programa de lectoescritura de MOVA se organiza en ocho niveles de habilidad, desde la conciencia de los sonidos hasta la comprensión de textos. Cada nivel se acredita de forma presencial, cuando el alumno demuestra el dominio de la habilidad frente a su maestra.</p>
<div style="display:grid;grid-template-columns:1.5fr 1.4fr 1fr 1fr;gap:14px;background:#F7F5FB;border-radius:16px;padding:11px 18px;position:relative">${lab("ALUMNO", s.full_name)}${lab("NIVEL ACTUAL", cur)}${lab("NIVELES ACREDITADOS", nDone + " de 8")}${lab("FECHA", hoy)}</div>
<div style="position:relative"><h2 style="margin-bottom:6px">Ruta lectora</h2><div style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px">${map}</div></div>
${facts.length ? `<div style="display:flex;flex-wrap:wrap;gap:8px;position:relative">${facts.join("")}</div>` : ""}
<div style="background:#EEF8F2;border-radius:16px;padding:11px 16px;position:relative"><h2 style="margin-bottom:7px">Habilidades consolidadas${oneDay ? ` <span style="font-weight:600;font-size:11px;color:#6A6F85">· acreditadas el ${ESC(fL([...dts][0]))}</span>` : ""}</h2>${skills ? `<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 18px">${skills}</div>` : `<p style="margin:0;font-size:12px;color:#3D4258">Inicia su ruta; las habilidades acreditadas aparecerán aquí.</p>`}</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;position:relative">
<div style="background:#ECE7FF;border-radius:16px;padding:11px 16px;display:flex;flex-direction:column;gap:5px"><h2>${all ? "Siguiente etapa" : "En proceso"}</h2>${next}</div>
<div style="background:#FFF8E5;border-radius:16px;padding:11px 16px;display:flex;flex-direction:column;gap:5px"><h2>Recomendaciones para casa</h2>${home.map(t => `<p contenteditable="true" style="margin:0;font-size:11.5px;line-height:1.42;color:#2E3350;padding-left:14px;position:relative"><span style="position:absolute;left:0;top:6px;width:6px;height:6px;border-radius:50%;background:#1E2A55"></span>${ESC(t)}</p>`).join("")}</div>
</div>
<div style="border:1.5px solid #E4E0EE;border-radius:16px;padding:11px 16px;position:relative"><h2 style="margin-bottom:4px">Observaciones de la maestra</h2><p contenteditable="true" style="margin:0;font-size:11.5px;line-height:1.5;color:#2E3350">${ESC(obs)}</p></div>
<div style="flex-grow:1"></div>
<div style="display:flex;justify-content:center;position:relative"><div style="width:300px;display:flex;flex-direction:column;align-items:center;text-align:center"><div style="position:relative;width:100%;height:32px"><img src="${base}sig-karla.png" alt="Firma" style="position:absolute;left:50%;bottom:-22px;transform:translateX(-50%);height:72px;z-index:1"></div><div style="width:100%;border-top:1.5px solid #1E2A55;padding-top:7px"><b style="display:block;font-size:14px;color:#1E2A55">Miss Karla Rodríguez</b><span style="font-size:12px;color:#4E5468">Coordinadora Académica</span></div></div></div>
<div style="text-align:center;font-size:11px;color:#6A6F85;position:relative">Monterrey, N.L. · ${ESC(hoy)} · @movacp.mx</div>
</div></body></html>`;
    const w = window.open("", "_blank"); if (!w) { toast("Permita ventanas emergentes para ver el informe"); return; } w.document.open(); w.document.write(html); w.document.close();
  }

  /* ---------- Hoja de registro para imprimir ---------- */
  function printSheet(s, only) {
    const lv = only ? [only] : [1, 2, 3, 4, 5, 6, 7, 8];
    const nm = s ? ESC(s.full_name) : "";
    const box = (n) => `<span class="bx"></span>`;
    const rows = (arr, cls) => arr.map(w => `<tr><td class="${cls || ""}">${ESC(w)}</td><td>${box()}</td><td>${box()}</td></tr>`).join("");
    const head = (l) => `<div class="top"><div><div class="k">MOVA Lectoescritura · Validación presencial</div><h1>Nivel ${l} · ${ESC(LV[l - 1])}</h1></div><div class="logo">MOVA</div></div>
      <div class="meta"><div>Alumno: <b>${nm || "&nbsp;"}</b></div><div>Maestra: <b>${s ? ESC(T()) : "&nbsp;"}</b></div><div>Sesión 1: ____ / ____ / ______</div><div>Sesión 2: ____ / ____ / ______</div></div>`;
    const pages = lv.map(l => {
      const B = BANK[l];
      if (l <= 6) {
        const half = Math.ceil(B.r.length / 2), a = B.r.slice(0, half), b = B.r.slice(half);
        return `<section class="pg">${head(l)}
        <div class="cols"><div><h2>${l === 1 ? "Vocales" : "Lectura"}</h2><table><tr><th></th><th>S1</th><th>S2</th></tr>${rows(a, "w")}</table></div>
        <div><h2>&nbsp;</h2><table><tr><th></th><th>S1</th><th>S2</th></tr>${rows(b, "w")}</table></div></div>
        ${B.s ? `<h2>${ESC(B.sLab)}</h2><table class="wide"><tr><th></th><th>S1</th><th>S2</th></tr>${rows(B.s, "w")}</table>` : ""}
        <div class="cols">${B.p.length ? `<div><h2>Pseudopalabras</h2><table><tr><th></th><th>S1</th><th>S2</th></tr>${rows(B.p, "w ps")}</table></div>` : "<div></div>"}
        <div><h2>Dictado</h2><table><tr><th></th><th>S1</th><th>S2</th></tr>${rows(B.w, "d")}</table></div></div>
        <table class="tot"><tr><th></th><th>Lectura</th>${B.p.length ? "<th>Pseudopalabras</th>" : ""}<th>Dictado</th><th>¿Aprobada?</th></tr>
        <tr><td>Sesión 1</td><td>___ / ${B.r.length + (B.s ? B.s.length : 0)}</td>${B.p.length ? `<td>___ / ${B.p.length}</td>` : ""}<td>___ / ${B.w.length}</td><td>Sí · No</td></tr>
        <tr><td>Sesión 2</td><td>___ / ${B.r.length + (B.s ? B.s.length : 0)}</td>${B.p.length ? `<td>___ / ${B.p.length}</td>` : ""}<td>___ / ${B.w.length}</td><td>Sí · No</td></tr></table>
        <p class="rule">Marca ✓ si lo lee bien sin ayuda (si se corrige solo, cuenta como ✓) y ✗ si necesita apoyo. Se aprueba la sesión con 90% de lectura${B.p.length ? " y 4 de 5 pseudopalabras" : ""}. El nivel se logra con 2 sesiones aprobadas en días distintos. Después, registra cada sesión en el panel.</p>
        <div class="notes">Notas: _____________________________________________________________________</div></section>`;
      }
      return `<section class="pg">${head(l)}
        ${B.o ? `<h2>Oraciones · entonación</h2><table class="wide"><tr><th></th><th>S1</th><th>S2</th></tr>${rows(B.o, "o")}</table>` : ""}
        <h2>Lectura cronometrada · 1 minuto</h2><div class="txt">${ESC(B.t)}</div><p class="small">${B.t.split(/\s+/).length} palabras</p>
        <table class="tot"><tr><th></th><th>Palabras leídas</th><th>Errores</th><th>Palabras correctas por minuto</th><th>Precisión</th></tr>
        <tr><td>Sesión 1</td><td></td><td></td><td></td><td>___ %</td></tr><tr><td>Sesión 2</td><td></td><td></td><td></td><td>___ %</td></tr></table>
        <h2>Comprensión</h2><table class="wide"><tr><th></th><th>S1</th><th>S2</th></tr>${rows(B.q, "q")}</table>
        <h2>Dictado</h2><table class="wide"><tr><th></th><th>S1</th><th>S2</th></tr>${rows(B.w, "d")}</table>
        <p class="rule">La sesión se aprueba con 90% de precisión al leer${l === 7 ? ", entonación correcta y 2 de 3 preguntas" : " y 4 de 5 preguntas, incluida una de inferencia"}. El nivel se logra con 2 sesiones aprobadas en días distintos.</p></section>`;
    }).join("");
    const w = window.open("", "_blank"); if (!w) { toast("Permite las ventanas emergentes para imprimir"); return; }
    w.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Hoja de registro · Lectoescritura${nm ? " · " + nm : ""}</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>@page{size:letter;margin:11mm}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{margin:0;font-family:Poppins,"Century Gothic",sans-serif;color:#1A1B2E;font-size:11pt}
.pg{page-break-after:always;padding:2mm}.pg:last-child{page-break-after:auto}
.top{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #1A1B2E;padding-bottom:6px}
.k{font-size:8.5pt;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#7A5CE0}h1{margin:2px 0 0;font-size:18pt;font-weight:800;color:#1B2A5C}
.logo{font-weight:800;font-size:16pt;background:#D3F36B;padding:4px 12px;border-radius:12px}
.meta{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px;margin:10px 0 4px;font-size:10pt}.meta b{display:inline-block;min-width:150px;border-bottom:1px solid #999}
h2{font-size:10.5pt;font-weight:800;margin:8px 0 2px;color:#1B2A5C}.cols{display:grid;grid-template-columns:1fr 1fr;gap:18px}
table{width:100%;border-collapse:collapse}th{font-size:8.5pt;color:#6B6E85;font-weight:700;text-align:center;padding:2px}th:first-child{text-align:left}
td{border-bottom:1px solid #E4E0EE;padding:2px 4px;vertical-align:middle}td:not(:first-child){width:44px;text-align:center}
td.w{font-size:13.5pt;font-weight:700}td.ps{color:#7A5CE0}td.d,td.o,td.q{font-size:10.5pt}
.bx{display:inline-block;width:16px;height:16px;border:2px solid #1A1B2E;border-radius:5px}
.tot{margin-top:8px}.tot th{background:#F1EEF8;padding:5px}.tot td{text-align:center;height:22px;border:1px solid #E4E0EE;width:auto}.tot td:first-child{text-align:left;font-weight:700}
.txt{font-size:12pt;line-height:1.6;border:2px solid #E4E0EE;border-radius:12px;padding:10px 14px}.small{font-size:8.5pt;color:#6B6E85;margin:2px 0 0}
.rule{font-size:8.5pt;color:#4A4D63;background:#F1FAD0;border-radius:10px;padding:7px 10px;margin:10px 0 6px}.notes{font-size:9.5pt;margin-top:8px}
</style></head><body>${pages}<script>document.fonts&&document.fonts.ready.then(()=>setTimeout(()=>print(),300))<\/script></body></html>`);
    w.document.close();
  }

  /* ---------- Estilos ---------- */
  const css = `
.lp-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.lp-stats div{background:#fff;border-radius:16px;padding:12px 14px;box-shadow:0 6px 18px rgba(31,43,77,.08)}
.lp-stats b{display:block;font-size:22px}.lp-stats span{font-size:12px;color:#6B6E85}
.lp-tools{display:flex;gap:8px;margin:16px 0 10px}.lp-tools input{flex:1}
.lp-btn{border:0;border-radius:14px;background:#D3F36B;color:#1A1B2E;font:800 14px inherit;font-family:inherit;padding:12px 16px;cursor:pointer}.lp-btn.ghost{background:#fff;border:1.5px solid #E4E0EE}.lp-btn:disabled{opacity:.5}
.lp-link{border:0;background:none;font:700 12.5px inherit;font-family:inherit;color:#6B6E85;text-decoration:underline;cursor:pointer;padding:8px}
.lp-found{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}.lp-found button{display:flex;justify-content:space-between;align-items:center;background:#fff;border:1.5px dashed #B9A6FF;border-radius:14px;padding:11px 14px;font:600 14px inherit;font-family:inherit;cursor:pointer;color:#1A1B2E}.lp-found em{font-style:normal;font-weight:800;color:#7A5CE0;font-size:12.5px}
.lp-list{display:flex;flex-direction:column;gap:8px;padding-bottom:110px}
.lp-row{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #E6E1F2;border-radius:16px;padding:12px 14px;width:100%;text-align:left;cursor:pointer;font-family:inherit;color:#1A1B2E}
.lp-av{width:40px;height:40px;border-radius:50%;background:#ECE7FF;display:grid;place-items:center;font-weight:800;flex:none}
.lp-mid{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}.lp-mid b{font-size:14.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lp-mini{display:flex;gap:3px}.lp-mini i{width:16px;height:6px;border-radius:3px;background:#E9E5F3}.lp-mini i.done{background:#C4EA4F}.lp-mini i.now{background:#B9A6FF}
.lp-chip{font-size:11px;font-weight:800;padding:5px 9px;border-radius:999px;background:#F1EEF8;color:#6B6E85;white-space:nowrap;flex:none}.lp-chip.lv{background:#ECE7FF;color:#3A2C78}.lp-chip.lm{background:#D3F36B;color:#1A1B2E}.lp-chip.pk{background:#FFE3F1;color:#1A1B2E}
.lp-sheet .x{float:right;border:0;background:#F1EEF8;width:36px;height:36px;border-radius:12px;font-size:15px;cursor:pointer}
.lp-hd{margin-bottom:12px}.lp-k{font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:#7A5CE0}.lp-hd h2{margin:2px 0 4px;font-size:22px}.lp-hd p{margin:0;font-size:13px;color:#6B6E85;line-height:1.45}
.lp-map{display:grid;grid-template-columns:repeat(8,1fr);gap:5px;margin-bottom:12px}
.lp-map button{height:58px;border-radius:14px;border:2px solid transparent;background:#EEEAF6;color:#8A8DA3;font:800 13px inherit;font-family:inherit;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;padding:0}
.lp-map img{width:36px;height:32px;object-fit:contain}.lp-map .next img{opacity:.5;filter:grayscale(.4)}.lp-map small{font-size:9.5px;font-weight:700;opacity:.7}.lp-map .done{background:#D3F36B;color:#1A1B2E}.lp-map .now{background:#B9A6FF;color:#1A1B2E}.lp-map .sel{border-color:#1A1B2E}
.lp-lvl{background:#F7F5FC;border-radius:20px;padding:14px;display:flex;flex-direction:column;gap:10px}
.lp-lh{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.lp-lh h3{margin:2px 0 0;font-size:18px}
.lp-sess{display:flex;flex-direction:column;gap:6px}.lp-sess div{display:flex;align-items:center;gap:10px;background:#fff;border-radius:12px;padding:9px 10px;border-left:5px solid #C4EA4F}
.lp-sess div.no{border-left-color:#FF8FC8}.lp-sess b{font-size:13px;min-width:52px}.lp-sess span{flex:1;font-size:12.5px;color:#4A4D63}
.lp-sess button{border:0;background:none;color:#B0B0C4;cursor:pointer;font-size:13px}
.lp-form{background:#fff;border-radius:16px;padding:12px;display:flex;flex-direction:column;gap:10px}
.lp-f{display:flex;flex-direction:column;gap:5px;font-size:12.5px;font-weight:700;color:#4A4D63}
.lp-cr{display:flex;align-items:center;gap:8px}.lp-cr button{width:40px;height:40px;border-radius:12px;border:0;background:#ECE7FF;font:800 18px inherit;font-family:inherit;cursor:pointer;flex:none}
.lp-cr input{width:68px;text-align:center}.lp-cr b{font-size:13px;color:#6B6E85;flex:1;display:flex;align-items:center;gap:6px}
.lp-res{margin:0;font-size:13px;font-weight:700;padding:9px 11px;border-radius:12px;background:#F1EEF8}.lp-res.ok{background:#F1FAD0}.lp-res.no{background:#FFE3F1}
.lp-acts{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
.lp-les{background:#F7F5FC;border-radius:16px;padding:10px 12px;margin-bottom:12px}.lp-les div{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}.lp-les div span{background:#fff;border-radius:999px;padding:5px 10px;font-size:12px;font-weight:700}
.lp-rule{font-size:12px;color:#6B6E85;line-height:1.45;margin:12px 2px 0}.lp-sub{color:#6B6E85;font-size:13px}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- Pestaña ---------- */
  document.addEventListener("click", e => {
    const b = e.target.closest && e.target.closest('#tabbar button[data-v="lecto"]');
    if (b) setTimeout(() => { if (!Object.keys(DATA).length) loadAll(); else draw(); }, 0);
  });
  function bootTab() { if (/#lecto$/.test(location.hash) || (document.getElementById("v-lecto") && !document.getElementById("v-lecto").classList.contains("hidden"))) loadAll(); }
  setTimeout(bootTab, 1500);
  window.MovaLectoPanel = { reload: () => { DATA = {}; loadAll(); } };
})();
