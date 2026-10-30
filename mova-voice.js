/* MOVA · carga el tema 2026 en los juegos (tipografía, colores y botón Home) */
(function(){ try{ if(window.__movaThemeLoader || !/juego-|mova-live/.test(location.pathname)) return; window.__movaThemeLoader = 1;
  var s = document.createElement('script'); s.src = 'mova-theme.js?v=24'; (document.head || document.documentElement).appendChild(s); }catch(e){} })();
(function(){ if(window.__movaVoice) return; window.__movaVoice = 1;
/* MOVA Voice · elige automáticamente la voz más natural del dispositivo para todos los juegos */
(function(){
  if(!('speechSynthesis' in window)) return;
  var S = window.speechSynthesis;
  var FEM = /Aria|Jenny|Ava\b|Emma|Michelle|Ana\b|Samantha|Karen|Moira|Tessa|Zira|Allison|Susan|Victoria|Nicky|Joelle|Dalia|Paulina|M[oó]nica|Sabina|Elena|Renata|Marisol|Helena|Laura|Lupe|Larissa|Female|Mujer/i;
  var MAL = /Guy\b|Andrew|Brian|Christopher|Eric\b|Roger|Steffan|Davis|Tony\b|Jason|Aaron|Alex\b|Daniel|Tom\b|Mark\b|Jorge|Juan\b|Diego|Gerardo|Pablo|Carlos|Liam|Evan\b|Nathan|Male|Hombre/i;
  var NOVELTY = /Compact|eSpeak|Fred|Albert|Bad News|Bells|Boing|Bubbles|Cellos|Jester|Organ|Trinoids|Whisper|Zarvox|Wobble|Superstar|Grandma|Grandpa|Rocko|Shelley|Junior|Ralph|Kathy|Flo\b|Eddy|Sandy|Reed\b/i;
  function quality(v){
    var n = v.name, s = 0;
    if(/Natural|Neural/i.test(n)) s += 100;
    if(/Online/i.test(n)) s += 40;
    if(/Premium/i.test(n)) s += 90;
    if(/Enhanced|Mejorad/i.test(n)) s += 80;
    if(/Siri/i.test(n)) s += 60;
    if(/Google/i.test(n)) s += 45;
    if(NOVELTY.test(n)) s -= 120;
    return s;
  }
  function langScore(v, lang){
    var l = (v.lang || '').replace('_','-').toLowerCase(), want = lang.toLowerCase();
    if(want.indexOf('es') === 0){
      if(l === 'es-mx') return 30; if(l === 'es-us') return 24; if(l === 'es-419') return 22;
      if(l.indexOf('es') === 0) return 8; return -999;
    }
    if(want.indexOf('en') === 0){
      if(l === 'en-us') return 25; if(l === 'en-gb') return 12;
      if(l.indexOf('en') === 0) return 6; return -999;
    }
    return l.indexOf(want.slice(0,2)) === 0 ? 10 : -999;
  }
  function gender(v){ if(!v) return null; if(FEM.test(v.name)) return 'f'; if(MAL.test(v.name)) return 'm'; return null; }
  function list(lang){ return S.getVoices().filter(function(v){ return langScore(v, lang) > -999; }); }
  function saved(lang, g){
    try{
      var key = 'mova.voice.' + lang.slice(0,2) + '.' + (g || 'any');
      var name = localStorage.getItem(key) || localStorage.getItem('mova.voice.' + lang.slice(0,2) + '.any');
      if(!name) return null;
      return S.getVoices().filter(function(v){ return v.name === name; })[0] || null;
    }catch(e){ return null; }
  }
  function best(lang, g){
    var s = saved(lang, g); if(s) return s;
    var pool = list(lang); if(!pool.length) return null;
    pool.sort(function(a, b){ return total(b) - total(a); });
    function total(v){
      var t = quality(v) + langScore(v, lang), vg = gender(v);
      if(g && vg === g) t += 15; else if(g && vg && vg !== g) t -= 30;
      return t;
    }
    return pool[0];
  }
  var orig = S.speak.bind(S);
  S.speak = function(u){
    try{
      if(!u.movaKeep){
        var lang = u.lang || (u.voice && u.voice.lang) || 'en-US';
        var cur = u.voice, g = u.movaGender || gender(cur);
        var b = best(lang, g);
        if(b && (!cur || quality(b) > quality(cur) || saved(lang, g))){
          u.voice = b; u.lang = b.lang;
          if(quality(b) >= 40) u.pitch = Math.min(Math.max(u.pitch || 1, .9), 1.1);
        }
      }
    }catch(e){}
    return orig(u);
  };
  S.getVoices();
  window.MovaVoice = { best: best, list: list, quality: quality, gender: gender };
})();

/* MOVA Voice · ElevenLabs: voces naturales (Matilda y Dean) para todo lo que se lee en inglés.
   Cada frase se genera una sola vez y queda guardada en Supabase; después se reproduce sin costo.
   Si algo falla (sin internet, sin créditos), la app usa la voz del dispositivo como antes. */
(function(){
  if(!('speechSynthesis' in window) || !window.fetch || !window.Audio) return;
  var CFG = {
    fn: 'https://fclafxrkibvcjktrgznt.supabase.co/functions/v1/tts',
    store: 'https://fclafxrkibvcjktrgznt.supabase.co/storage/v1/object/public/tts/',
    key: 'sb_publishable_kkvlvfoXzgnG7vjAGj2nDA_dh-t6Ny6',
    version: 'v1',
    /* idioma → voz por género. Para activar español, agregue aquí la letra de la voz en la función tts. */
    voices: { en: { f: 'f', m: 'm', kid: 'c' }, es: { f: 'd', m: 'd', kid: 'd' } }
  };
  var S = window.speechSynthesis;
  var deviceSpeak = S.speak.bind(S), deviceCancel = S.cancel.bind(S);
  var off = false, fails = 0;
  try{ off = localStorage.getItem('mova.el.off') === '1'; }catch(e){}

  var audio = new Audio(); audio.preload = 'auto';
  var queue = [], playing = null, gen = 0, urls = {};

  /* iPhone/iPad: el audio solo puede sonar si se "desbloquea" con un toque */
  var unlocked = false;
  function silentWav(){
    var b = new Uint8Array(46), v = new DataView(b.buffer);
    [82,73,70,70].forEach(function(c,i){ b[i]=c; }); v.setUint32(4, 38, true);
    [87,65,86,69,102,109,116,32].forEach(function(c,i){ b[8+i]=c; });
    v.setUint32(16,16,true); v.setUint16(20,1,true); v.setUint16(22,1,true); v.setUint32(24,8000,true);
    v.setUint32(28,16000,true); v.setUint16(32,2,true); v.setUint16(34,16,true);
    [100,97,116,97].forEach(function(c,i){ b[36+i]=c; }); v.setUint32(40,2,true);
    var s=''; for(var i=0;i<b.length;i++) s+=String.fromCharCode(b[i]); return 'data:audio/wav;base64,'+btoa(s);
  }
  function unlock(){
    if(unlocked || playing) return; unlocked = true;
    try{ audio.src = silentWav(); var p = audio.play(); if(p && p.catch) p.catch(function(){ unlocked = false; }); }catch(e){ unlocked = false; }
  }
  ['pointerdown','touchend','keydown'].forEach(function(ev){ document.addEventListener(ev, unlock, true); });

  function langOf(u){ return String(u.lang || 'en-US').slice(0,2).toLowerCase(); }
  function usable(u){
    if(off || fails >= 3 || u.movaKeep) return false;
    if(!/\S/.test(u.text || '') || String(u.text).length > 800) return false;
    return !!CFG.voices[langOf(u)];
  }
  /* Voces MOVA (oct 2026):
     inglés Kids/Children → Clara (c) · inglés Teens, TOEFL y Level Up → Matilda (f) y Dean (m)
     español (lecturas, Mochi, lectoescritura, instrucciones) → Daniela (d) */
  var TEEN_PAGES = /(toefl-practice|level-up|word-forms|sentence-builder|verb-memory|juego-retos|mova-live)\.html/;
  function teensNow(){
    if(TEEN_PAGES.test(location.pathname)) return true;
    try{
      var m = location.hash.match(/^#\/library\/([^\/?]+)/);
      if(m && typeof READINGS !== 'undefined'){
        var id = decodeURIComponent(m[1]), r = READINGS.find(function(x){ return x.id === id; });
        if(r) return r.stage === 'teens';
      }
      if(/^#\/(learn|structures)\b/.test(location.hash) && /teens/i.test(location.hash)) return true;
    }catch(e){}
    return false;
  }
  function voiceOf(u){
    var V = CFG.voices[langOf(u)];
    if(u.movaGender === 'm') return V.m;
    if(langOf(u) === 'es') return V.kid;
    return teensNow() ? V.f : V.kid;
  }
  function speedOf(u){
    var r = Math.min(Math.max(+u.rate || 1, .85), 1.1);
    return (Math.round(r * 20) / 20).toFixed(2);
  }
  function clean(t){ return String(t).replace(/\s+/g,' ').trim(); }

  function sha(s){
    if(!(window.crypto && crypto.subtle)) return Promise.reject('nocrypto');
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)).then(function(h){
      return Array.prototype.map.call(new Uint8Array(h), function(x){ return ('0'+x.toString(16)).slice(-2); }).join('');
    });
  }
  /* audios que ya sabemos que existen (para no preguntar cada vez) */
  var known = {};
  try{ known = JSON.parse(localStorage.getItem('mova.tts.c') || '{}') || {}; }catch(e){}
  function remember(h){
    known[h] = 1;
    try{
      var ks = Object.keys(known); if(ks.length > 4000) ks.slice(0, 1000).forEach(function(k){ delete known[k]; });
      localStorage.setItem('mova.tts.c', JSON.stringify(known));
    }catch(e){}
  }
  /* máximo 3 audios nuevos generándose a la vez */
  var active = 0, waiting = [];
  function limited(job){
    return new Promise(function(ok, bad){
      function run(){ active++; job().then(ok, bad).then(function(){ active--; if(waiting.length) waiting.shift()(); }); }
      if(active < 3) run(); else waiting.push(run);
    });
  }
  function urlFor(text, voice, speed, lang, quiet){
    var id = CFG.version + '|' + lang + '|' + voice + '|' + speed + '|' + text;
    if(urls[id]) return urls[id];
    var p = sha(id).then(function(h){
      var pub = CFG.store + h + '.mp3';
      if(known[h]) return pub;
      return fetch(pub, { method: 'HEAD' }).then(function(r){ if(r.ok){ remember(h); return pub; } throw 0; })
        .catch(function(){
          return limited(function(){
            return fetch(CFG.fn, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'apikey': CFG.key, 'Authorization': 'Bearer ' + CFG.key },
              body: JSON.stringify({ text: text, voice: voice, speed: speed, lang: lang })
            }).then(function(r){ return r.ok ? r.json() : Promise.reject(r.status); })
              .then(function(j){ if(!j || !j.url) throw 'nourl'; remember(h); return j.url; });
          });
        });
    });
    urls[id] = p;
    p.then(function(){ fails = 0; }, function(){ delete urls[id]; if(!quiet) fails++; });
    return p;
  }
  function fire(u, type, extra){
    try{
      var ev = new Event(type); ev.utterance = u; if(extra) for(var k in extra) ev[k] = extra[k];
      u.dispatchEvent(ev);
    }catch(e){ try{ var h = u['on'+type]; if(typeof h === 'function') h.call(u, { type: type, utterance: u }); }catch(_){} }
  }
  function withTimeout(p, ms){
    return new Promise(function(ok, bad){ var t = setTimeout(function(){ bad('timeout'); }, ms); p.then(function(v){ clearTimeout(t); ok(v); }, function(e){ clearTimeout(t); bad(e); }); });
  }

  function next(){
    if(playing || !queue.length) return;
    var item = queue.shift(), my = gen; playing = item;
    var u = item.u;
    function done(){ if(my !== gen) return; playing = null; next(); }
    function fallback(){
      if(my !== gen) return;
      u.addEventListener('end', done); u.addEventListener('error', done);
      item.device = true; deviceSpeak(u);
    }
    if(!item.url){ fallback(); return; }
    withTimeout(item.url, 9000).then(function(src){
      if(my !== gen) return;
      audio.onended = function(){ if(my !== gen) return; fire(u, 'end'); done(); };
      audio.onerror = function(){ if(my !== gen) return; audio.onended = audio.onerror = null; fallback(); };
      audio.src = src; audio.playbackRate = 1;
      var p = audio.play();
      fire(u, 'start');
      if(p && p.catch) p.catch(function(){ if(my !== gen) return; audio.onended = audio.onerror = null; fallback(); });
    }, function(){ fallback(); });
  }

  S.speak = function(u){
    try{
      if(usable(u)){
        var text = clean(u.text), item = { u: u, url: urlFor(text, voiceOf(u), speedOf(u), langOf(u)) };
        item.url.catch(function(){});
        queue.push(item); next(); return;
      }
    }catch(e){}
    if(!/\S/.test(u.text || '')) unlock();
    else if(playing || queue.length){ queue.push({ u: u, url: null }); return; }
    return deviceSpeak(u);
  };
  S.cancel = function(){
    var was = playing, rest = queue; gen++; queue = []; playing = null;
    try{ audio.onended = audio.onerror = null; audio.pause(); }catch(e){}
    if(was && !was.device) fire(was.u, 'error', { error: 'interrupted' });
    rest.forEach(function(it){ fire(it.u, 'error', { error: 'canceled' }); });
    return deviceCancel();
  };
  window.MovaVoice = window.MovaVoice || {};
  window.MovaVoice.natural = {
    on: function(){ off = false; fails = 0; try{ localStorage.removeItem('mova.el.off'); }catch(e){} },
    off: function(){ off = true; try{ localStorage.setItem('mova.el.off','1'); }catch(e){} },
    status: function(){ return { on: !off, fails: fails }; },
    /* prepara audios por adelantado (p. ej. las palabras de un cuento) para que suenen sin espera */
    prefetch: function(texts, lang, rate){
      (texts || []).forEach(function(t){
        var u = { text: t, lang: lang || 'en-US', rate: rate || 1 };
        try{ if(usable(u)) urlFor(clean(t), voiceOf(u), speedOf(u), langOf(u), true).catch(function(){}); }catch(e){}
      });
    }
  };
})();
})();
