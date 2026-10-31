/* MOVA Learning Studio · tema 2026 para todos los juegos.
   Cambia tipografía (Plus Jakarta Sans + Bricolage Grotesque), colores y el botón de regreso.
   No toca la mecánica de ningún juego. Mochi conserva Andika en sus letras de lectura. */
(function(){
  if(window.__movaTheme) return; window.__movaTheme = 1;
  if(!/juego-|mova-live/.test(location.pathname)) return;
  var d = document, head = d.head || d.documentElement;
  /* 1) Fuentes: Bricolage para títulos; Jakarta toma el lugar de Poppins sin tocar cada juego */
  var l = d.createElement('link'); l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
  head.appendChild(l);
  var css = "@font-face { font-family: 'Poppins'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko40yyygA.woff2) format('woff2'); unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 500; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko40yyygA.woff2) format('woff2'); unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 500; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 600; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko40yyygA.woff2) format('woff2'); unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 600; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 700; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko40yyygA.woff2) format('woff2'); unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 700; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 800; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko40yyygA.woff2) format('woff2'); unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF; } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 800; font-display: swap; src: url(https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }" +
  /* 2) Paleta nueva sobre las variables que ya usan los juegos */
  ":root:root{--ink:#15192B;--muted:#62677D;--tile:#F2EFF8;--edge:#E4E0EE;--track:#ECE9F3;--line:#E4E0EE;" +
  "--lilac:#B9A6FF;--lila:#B9A6FF;--purple:#7B5CF0;--pink:#FF8FC8;--butter:#FFE58A;--sky:#8FA2FF;--navy:#16274A;" +
  "--paper:#F5F3FA;--surface:#FFFFFF;--surface-2:#EFECF6;--ink-2:#4A4E62;--ink-3:#7C8094;--navy-2:#22345E;" +
  "--good:#1F8A55;--good-bg:#E3F7EC;--bad:#D9415A;--bad-bg:#FDE6EC;" +
  "--shadow:0 2px 0 rgba(21,25,43,.04),0 14px 34px rgba(54,40,120,.10)}" +
  "html.mt-light:root{--bg:#F5F3FA;--page:#F5F3FA}" +
  "body{-webkit-font-smoothing:antialiased}" +
  "body.mt-flat{background-image:none!important}" +
  "html.mt-light body.mt-flat{background-color:#F5F3FA!important}" +
  "html.mt-dark body.mt-flat{background-color:#15192B!important}" +
  "h1,h2,.title,.brand,[class*=title]{font-family:'Bricolage Grotesque','Plus Jakarta Sans',system-ui,sans-serif;letter-spacing:-.01em}" +
  /* 3) Botón de regreso nuevo: flecha + Home */
  ".mt-home{display:inline-flex!important;align-items:center;gap:8px;height:40px;padding:0 16px 0 12px!important;border-radius:999px!important;" +
  "background:#fff!important;color:#15192B!important;border:1.5px solid #E4E0EE!important;box-shadow:0 4px 14px rgba(54,40,120,.10)!important;" +
  "font:700 14px/1 'Plus Jakarta Sans',system-ui,sans-serif!important;text-decoration:none!important;width:auto!important;min-width:0!important}" +
  ".mt-home svg{width:18px;height:18px;flex:none}" +
  ".mt-home:active{transform:scale(.97)}" + ".mva-card{font-family:'Plus Jakarta Sans',system-ui,sans-serif!important;background:#fff!important;border-radius:28px!important;color:#15192B!important;box-shadow:0 30px 80px rgba(54,40,120,.25)!important}.mva-card .mva-band{display:none!important}.mva-card h2,.mva-card h3{font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif!important;color:#15192B!important}.mva-x{background:#F2EFF8!important;color:#15192B!important;border-radius:999px!important}.mvp-top{position:relative;display:flex;align-items:center;gap:14px;padding:22px 20px 18px!important;margin:-1px -1px 6px!important;border-radius:26px 26px 22px 22px;background:linear-gradient(135deg,#EDE8FF,#F7F1FF 60%,#FFE9F4)!important}.mvp-bloom{width:84px;height:84px;flex:none;margin:-6px 0 -10px -4px}.mvp-top .mva-badge{position:absolute;right:56px;top:18px;width:34px!important;height:34px!important;font-size:13px!important;background:#15192B!important;color:#D3F36B!important}.mvp-who span{color:#7B5CF0!important;font-weight:800!important;letter-spacing:.06em;text-transform:uppercase;font-size:11px!important}.mvp-who em{background:#D3F36B!important;color:#15192B!important;border-radius:999px!important;font-style:normal!important;font-weight:700!important}.mvp-tile{border-radius:20px!important;border:0!important}.mvp-tile:nth-child(1){background:#E7ECFF!important}.mvp-tile:nth-child(1) .mvp-ti{background:#8FA2FF!important}.mvp-tile:nth-child(2){background:#FFE6F2!important}.mvp-tile:nth-child(2) .mvp-ti{background:#FF8FC8!important}.mvp-tile:nth-child(3){background:#EEE8FF!important}.mvp-tile:nth-child(3) .mvp-ti{background:#B9A6FF!important}.mvp-tile:nth-child(4){background:#FFF6D1!important}.mvp-tile:nth-child(4) .mvp-ti{background:#FFD66B!important}.mvp-tile b{font-family:'Bricolage Grotesque',sans-serif!important;color:#15192B!important}.mvp-level{background:#16274A!important;color:#fff!important;border-radius:20px!important}.mvp-level b,.mvp-level small{color:#fff!important}.mvp-lk{background:#D3F36B!important;color:#15192B!important;border-radius:999px!important}.mvp-b{border-radius:18px!important;background:#F5F3FA!important;border:0!important}.mvp-list>div{border-radius:14px!important;background:#F5F3FA!important;border:0!important}";
  var st = d.createElement('style'); st.id = 'mova-theme'; st.textContent = css; head.appendChild(st);

  /* Quita la carga de Poppins para que no compita con Jakarta */
  function dropPoppins(){
    [].forEach.call(d.querySelectorAll('link[href*="family=Poppins"]'), function(x){
      x.href = x.href.replace(/family=Poppins[^&]*&?/, '').replace(/[?&]$/, '');
      if(!/family=/.test(x.href)) x.parentNode && x.parentNode.removeChild(x);
    });
    head.appendChild(st);
  }
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
  function homeButtons(){
    var sel = 'a.back[href*="#/games"],a.mova-home-btn,a.icon-btn[href*="#/games"],a[data-mova-back]';
    [].forEach.call(d.querySelectorAll(sel), function(a){
      if(a.__mt) return; a.__mt = 1;
      a.href = './#/'; a.classList.add('mt-home'); a.setAttribute('aria-label', 'Back to Home');
      a.innerHTML = ARROW + '<span>Home</span>';
    });
  }
  function lum(c){
    var m = (c || '').match(/\d+(\.\d+)?/g); if(!m || m.length < 3) return 1;
    if(m.length > 3 && +m[3] === 0) return 1;
    return (0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2]) / 255;
  }
  function surface(){
    var b = d.body; if(!b) return;
    var cs = getComputedStyle(b), dark = lum(cs.backgroundColor) < .45;
    d.documentElement.classList.add(dark ? 'mt-dark' : 'mt-light');
    if(/radial-gradient/.test(cs.backgroundImage)) b.classList.add('mt-flat');
  }
  function run(){ dropPoppins(); surface(); homeButtons(); }
  try{ var me = d.createElement('script'); me.src = 'mova-entry.js?v=36'; head.appendChild(me); }catch(e){}
  if(d.readyState === 'loading') d.addEventListener('DOMContentLoaded', run); else run();
  try{ new MutationObserver(homeButtons).observe(d.documentElement, { childList: true, subtree: true }); }catch(e){}
})();
