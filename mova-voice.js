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
