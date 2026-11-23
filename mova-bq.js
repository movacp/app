/* MOVA · Monthly Quiz "Por libro" y worksheets por unidad (v128).
   Usa window.MOVA_BOOKS (mova-libros.js) y window.MOVA_BQ (libros-quiz.js).
   MovaBQ.quiz(libro, de, a, "g5.v4.r3.l3.w2.p2") → preguntas para el Monthly Quiz de ruta.html
   MovaBQ.ws(host, libro, "2-3") → pantalla para imprimir worksheet (práctica o quiz A/B) */
(function(){
  if(window.MovaBQ) return;
  var SEC=[["g","Grammar","#E6E2FF"],["v","Vocabulary","#E4F7C4"],["r","Reading","#FFE1EE"],["l","Listening","#D9EEFF"],["w","Writing","#FFF1C9"],["p","Phonics","#EADFFF"]];
  var DEF={g:5,v:4,r:3,l:3,w:2,p:2};
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
  function rng(seed){var s=0;String(seed).split("").forEach(function(c){s=(s*31+c.charCodeAt(0))>>>0;});s=s||1;return function(){s^=s<<13;s>>>=0;s^=s>>17;s^=s<<5;s>>>=0;return s/4294967296;};}
  function mix(a,r){a=a.slice();r=r||Math.random;for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),x=a[i];a[i]=a[j];a[j]=x;}return a;}
  function book(b){return (window.MOVA_BOOKS||{})[b]||null;}
  function unit(b,n){var B=book(b);return B?B.units.find(function(u){return u.n===+n;}):null;}
  function bank(b){return (window.MOVA_BQ||{})[b]||{};}
  function range(b,a,z){var B=book(b),out=[];if(!B)return out;B.units.forEach(function(u){if(u.n>=+a&&u.n<=+z)out.push(u.n);});return out;}
  /* junta el contenido de varias unidades */
  function pool(b,a,z){var K=bank(b),P={g:[],v:[],r:[],l:[],w:[],o:[],p:[],rm:[],units:[],missing:[]};
    range(b,a,z).forEach(function(n){var d=K[n];if(!d){P.missing.push(n);return;}P.units.push(n);
      (d.g||[]).forEach(function(x){P.g.push({u:n,x:x});});(d.vd||[]).forEach(function(x){P.v.push({u:n,x:x});});
      if(d.r)P.r.push({u:n,x:d.r});(d.l||[]).forEach(function(x){P.l.push({u:n,x:x});});
      ((d.w||{}).u||[]).forEach(function(x){P.w.push({u:n,x:x});});((d.w||{}).o||[]).forEach(function(x){P.o.push({u:n,x:x});});
      (d.p||[]).forEach(function(x){P.p.push({u:n,x:x});});if(d.rm)P.rm.push({u:n,x:d.rm});});
    return P;}
  function avail(b,a,z){var P=pool(b,a,z);return {g:P.g.length,v:P.v.length,r:P.r.reduce(function(s,r){return s+r.x.q.length;},0),l:P.l.length,w:P.w.length,p:P.p.length,units:P.units,missing:P.missing};}
  function parseCnt(s){var c={};String(s||"").split(".").forEach(function(t){var m=/^([gvrlwp])(\d+)$/.exec(t);if(m)c[m[1]]=+m[2];});return c;}
  function opts(right,others,r){return mix([{x:right,ok:true}].concat(others.map(function(o){return {x:o,ok:false};})),r);}
  /* preguntas del quiz digital, en orden por sección */
  function quiz(b,a,z,cnt){var P=pool(b,a,z),C=parseCnt(cnt),qs=[];
    mix(P.g).slice(0,C.g||0).forEach(function(it){var g=it.x;qs.push({t:"Grammar",q:g[0],o:opts(g[1],g[2].slice(0,3)),right:g[1],why:g[3]});});
    var words=P.v.map(function(it){return it.x[1];});
    mix(P.v).slice(0,C.v||0).forEach(function(it){var v=it.x,oth=mix(words.filter(function(w){return w!==v[1];})).slice(0,3);qs.push({t:"Vocabulary",q:v[0],o:opts(v[1],oth),right:v[1]});});
    var nr=C.r||0;mix(P.r).forEach(function(it){if(nr<=0)return;var R=it.x,pre='<div class="bq-read"><b>'+esc(R.t)+'</b>'+R.x.map(function(p){return "<p>"+esc(p)+"</p>";}).join("")+'</div>';
      R.q.slice(0,nr).forEach(function(q){qs.push({t:"Reading",pre:pre,q:q[0],o:opts(q[1],q[2]),right:q[1]});nr--;});});
    mix(P.l).slice(0,C.l||0).forEach(function(it){var l=it.x;qs.push({t:"Listening",q:l[1],say:l[0],lis:1,o:opts(l[2],l[3]),right:l[2]});});
    mix(P.w).slice(0,C.w||0).forEach(function(it){var px={k:"un",s:it.x};qs.push({t:"Writing",px:px,q:window.MovaPX?MovaPX.title(px):"Put the words in order."});});
    mix(P.p).slice(0,C.p||0).forEach(function(it){var p=it.x;qs.push({t:"Phonics",q:"Listen and say the words. Which word has a different sound?",say:p[0].join(". "),o:mix(p[0].map(function(w,i){return {x:w,ok:i===p[1]};})),right:p[0][p[1]]});});
    return qs;}
  function label(b,a,z){var B=book(b);return {book:B?B.name:b,units:+a===+z?"Unit "+a:"Units "+a+"–"+z};}

  /* ---------- Worksheets ---------- */
  var CSS='.bq-read{background:#FFF8E6;border-radius:18px;padding:12px 15px;margin:10px 0 4px;font-size:14.5px;line-height:1.55}.bq-read b{display:block;font-size:15.5px;margin-bottom:2px}.bq-read p{margin:6px 0}'+
   '.bqw h1{font-family:"Bricolage Grotesque",sans-serif;font-size:28px;margin:4px 0 2px}.bqw .sub{margin:0 0 14px}.bqw .g2{display:grid;grid-template-columns:1fr 1fr;gap:10px}.bqw label.f{display:block;font-size:12.5px;font-weight:800;margin:12px 2px 6px}.bqw select{width:100%;border:2px solid #E3DFEF;border-radius:14px;padding:11px;font:600 14px inherit;background:#fff}'+
   '.bq-op{display:flex;gap:12px;align-items:flex-start;width:100%;text-align:left;border:2.5px solid #E3DFEF;background:#fff;border-radius:18px;padding:13px;margin-bottom:9px;font:inherit;color:inherit}.bq-op.on{border-color:#15192B;background:#F7FBEA}.bq-op i{width:40px;height:40px;border-radius:12px;flex:none;display:grid;place-items:center;font-style:normal;font-weight:800}.bq-op b{display:block;font-size:15px}.bq-op small{display:block;font-size:12.5px;color:#666B80;line-height:1.4;margin-top:2px}'+
   '.bq-ab{display:flex;gap:6px;margin-top:8px}.bq-ab span{border:2px solid #15192B;border-radius:10px;padding:3px 12px;font-size:12.5px;font-weight:800}.bq-ab span.on{background:#15192B;color:#fff}'+
   '.bq-tg{display:flex;align-items:center;justify-content:space-between;background:#fff;border-radius:14px;padding:10px 14px;margin-bottom:6px;font-weight:700;font-size:14px}.bq-tg input{width:20px;height:20px;accent-color:#15192B}.bq-tg small{color:#666B80;font-weight:600;font-size:12px;margin-left:6px}'+
   '.bq-warn{background:#FFE6F2;border-radius:14px;padding:11px 14px;font-size:13px;line-height:1.45;margin:10px 0}'+
   /* hoja impresa */
   '.ws{font-family:Poppins,"Plus Jakarta Sans",sans-serif;color:#15192B;font-size:13.5px}.ws .hd{display:flex;justify-content:space-between;align-items:flex-end;gap:14px;border-bottom:3px solid #15192B;padding-bottom:8px;margin-bottom:12px}.ws .hd b{font-size:22px;line-height:1.15;font-weight:700}.ws .hd .r{font-size:11px;font-weight:600;text-align:right;line-height:1.5}'+
   '.ws .vt{display:inline-block;background:#15192B;color:#D3F36B;border-radius:7px;padding:1px 9px;font-size:11px;font-weight:700;margin-left:8px;vertical-align:middle;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ws .bk{font-size:12px;font-weight:600;margin-top:3px}'+
   '.ws .sc{border:2.5px solid #15192B;border-radius:12px;padding:4px 14px;text-align:center;font-size:10px;font-weight:700;letter-spacing:.08em;flex:none}.ws .sc b{display:block;font-size:19px;letter-spacing:0}'+
   '.ws .nm{display:flex;gap:16px;font-size:12px;font-weight:700;margin-bottom:12px}.ws .nm span{flex:1;border-bottom:1.5px solid #15192B;padding-bottom:13px}'+
   '.ws .rm{background:#F1EEFF;border-radius:10px;padding:8px 12px;font-size:12px;line-height:1.55;margin-bottom:6px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ws .rm u{text-decoration:none;font-weight:700;color:#6B5FD3}'+
   '.ws h3{font-size:14.5px;font-weight:700;margin:14px 0 7px;padding:5px 11px;border-radius:7px;display:flex;justify-content:space-between;gap:10px;page-break-after:avoid;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ws h3 small{font-weight:500;font-size:11.5px;text-align:right}.ws.qz h3{border:2px solid #15192B;background:#fff!important}'+
   '.ws ol{margin:0;padding-left:22px}.ws li{margin-bottom:9px;line-height:1.5;page-break-inside:avoid}.ws .ln{display:inline-block;border-bottom:1.2px solid #777;min-width:100px;height:15px;vertical-align:bottom}.ws .lf{display:block;border-bottom:1px solid #999;height:25px}'+
   '.ws .ops{display:flex;gap:20px;flex-wrap:wrap;font-weight:600}.ws .box{display:flex;flex-wrap:wrap;gap:6px 14px;border:1.5px dashed #15192B;border-radius:9px;padding:7px 12px;margin-bottom:9px;font-weight:600;font-size:12.5px}'+
   '.ws .ex{font-size:12px;color:#4A4F66;font-style:italic;margin:0 0 5px}.ws .rd{border:1.5px solid #D8D4E6;border-radius:10px;padding:8px 12px;margin-bottom:8px;line-height:1.55}.ws .rd b{display:block}.ws .rd p{margin:3px 0}'+
   '.ws .ft{margin-top:14px;font-size:10px;color:#888;display:flex;justify-content:space-between;border-top:1px solid #DDD;padding-top:6px}.ws .key{page-break-before:always}.ws .key li{margin-bottom:4px}';
  var cssOn=0;function css(){if(cssOn)return;cssOn=1;var s=document.createElement("style");s.textContent=CSS;document.head.appendChild(s);
    if(!document.querySelector('link[href*="Poppins"]')){var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";document.head.appendChild(l);}}

  function sheet(b,a,z,o){ /* o: {mode:"class"|"quiz", ver:"A"|"B", sec:{g,v,r,w,p}, key:bool} */
    var P=pool(b,a,z),L=label(b,a,z),qz=o.mode==="quiz",S=rng(b+a+z+(qz?"Q":"P")),R=rng(b+a+z+(qz?o.ver:"P")),letters="abcd",keyH=[],pts=0,n=0,h="",X=function(){return String.fromCharCode(65+(n++));};
    var titles=range(b,a,z).map(function(u){var x=unit(b,u);return x?x.t:"";}).filter(Boolean).join(" · ");
    var body="";
    if(o.sec.g&&P.g.length){var G=mix(mix(P.g,S).slice(0,8),R),c=G.length;pts+=c;
      if(qz){body+='<h3 style="background:#E6E2FF">'+X()+' · Grammar <small>Circle the correct answer. · '+c+' pts</small></h3><ol>'+G.map(function(it){var g=it.x,os=mix([g[1]].concat(g[2].slice(0,2)),R);keyH.push(["Grammar",g[1]]);return '<li>'+esc(g[0]).replace("___",'<span class="ln"></span>')+'<div class="ops">'+os.map(function(x,i){return '<span>'+letters[i]+") "+esc(x)+'</span>';}).join("")+'</div></li>';}).join("")+'</ol>';}
      else{var ex=G[0].x,box=mix(G.slice(1).map(function(it){return it.x[1];}),R);body+='<h3 style="background:#E6E2FF">'+X()+' · Grammar <small>Complete with the words in the box.</small></h3><div class="box">'+box.map(esc).join("<span>·</span>")+'</div><p class="ex">Example: '+esc(ex[0]).replace("___","<u>"+esc(ex[1])+"</u>")+'</p><ol>'+G.slice(1).map(function(it){keyH.push(["Grammar",it.x[1]]);return '<li>'+esc(it.x[0]).replace("___",'<span class="ln"></span>')+'</li>';}).join("")+'</ol>';}}
    if(o.sec.v&&P.v.length){var V=mix(mix(P.v,S).slice(0,8),R),c2=V.length;pts+=c2;var bx=V.map(function(it){return it.x[1];});
      if(qz){var extra=mix(P.v.filter(function(it){return V.indexOf(it)<0;}),S).slice(0,2).map(function(it){return it.x[1];});bx=bx.concat(extra);}
      body+='<h3 style="background:#E4F7C4">'+X()+' · Vocabulary <small>Read and write the word.'+(qz?' Two words are extra. · '+c2+' pts':'')+'</small></h3><div class="box">'+mix(bx,R).map(esc).join("<span>·</span>")+'</div><ol>'+V.map(function(it){keyH.push(["Vocabulary",it.x[1]]);return '<li>'+esc(it.x[0])+' <span class="ln" style="min-width:150px"></span></li>';}).join("")+'</ol>';}
    if(o.sec.r&&P.r.length){var RD=mix(P.r,S)[0].x;pts+=RD.q.length;
      body+='<h3 style="background:#FFE1EE">'+X()+' · Reading <small>Read and circle the correct answer.'+(qz?' · '+RD.q.length+' pts':'')+'</small></h3><div class="rd"><b>'+esc(RD.t)+'</b>'+RD.x.map(function(p){return "<p>"+esc(p)+"</p>";}).join("")+'</div><ol>'+RD.q.map(function(q){var os=mix([q[1]].concat(q[2]),R);keyH.push(["Reading",q[1]]);return '<li>'+esc(q[0])+'<div class="ops">'+os.map(function(x,i){return '<span>'+letters[i]+") "+esc(x)+'</span>';}).join("")+'</div></li>';}).join("")+'</ol>';}
    if(o.sec.w&&(P.w.length||P.o.length)){var W=mix(mix(P.w,S).slice(0,3),R),OW=mix(P.o,S).slice(0,1),wp=W.length+OW.length*4;pts+=wp;
      body+='<h3 style="background:#FFF1C9">'+X()+' · Writing <small>'+(W.length?'Put the words in order. Then write.':'Write.')+(qz?' · '+wp+' pts':'')+'</small></h3>'+
       (W.length?'<ol>'+W.map(function(it){var w=it.x.replace(/[.?!]$/,"").split(" "),sh=mix(w,R);if(sh.join(" ")===w.join(" "))sh.reverse();keyH.push(["Writing",it.x]);return '<li>'+esc(sh.join("  /  "))+'<span class="lf"></span></li>';}).join("")+'</ol>':'')+
       OW.map(function(it){return '<p style="font-weight:600;margin:10px 0 2px">'+esc(it.x)+'</p><span class="lf"></span><span class="lf"></span><span class="lf"></span><span class="lf"></span>';}).join("");}
    if(o.sec.p&&P.p.length){var PH=mix(mix(P.p,S).slice(0,4),R);pts+=PH.length;
      body+='<h3 style="background:#EADFFF">'+X()+' · Phonics <small>Say the words. Circle the word with a different sound.'+(qz?' · '+PH.length+' pts':'')+'</small></h3><ol>'+PH.map(function(it){var p=it.x,ws=p[0].map(function(w,i){return {w:w,ok:i===p[1]};});ws=mix(ws,R);keyH.push(["Phonics",p[0][p[1]]]);return '<li><div class="ops">'+ws.map(function(x){return '<span>'+esc(x.w)+'</span>';}).join("")+'</div></li>';}).join("")+'</ol>';}
    h='<div class="ws'+(qz?" qz":"")+'"><div class="hd"><div><b>'+(qz?esc(L.book)+' · Quiz<span class="vt">VERSION '+o.ver+'</span>':esc(titles))+'</b><div class="bk">'+(qz?esc(titles)+" · ":"")+esc(L.book)+' · '+esc(L.units)+'</div></div>'+(qz?'<div class="sc">SCORE<b>___ / '+pts+'</b></div>':'<div class="r">MOVA Learning Studio<br>Class practice</div>')+'</div>'+
      '<div class="nm"><span>Name:</span><span style="flex:.45">Date:</span>'+(qz?'<span style="flex:.4">Teacher:</span>':'')+'</div>'+
      (qz?'':P.rm.map(function(r){return '<div class="rm"><u>Remember · Unit '+r.u+':</u> '+r.x+'</div>';}).join(""))+body+
      '<div class="ft"><span>MOVA Centro Pedagógico</span><span>'+(qz?"Monthly Quiz · Version "+o.ver:"Class practice")+'</span></div>';
    if(o.key)h+='<div class="key"><div class="hd"><div><b>Answer key</b><div class="bk">'+esc(L.book)+' · '+esc(L.units)+(qz?' · Version '+o.ver:' · Class practice')+'</div></div></div>'+
      ['Grammar','Vocabulary','Reading','Writing','Phonics'].map(function(s){var ks=keyH.filter(function(k){return k[0]===s;});return ks.length?'<h3 style="background:#F1EEF8">'+s+'</h3><ol>'+ks.map(function(k){return '<li>'+esc(k[1])+'</li>';}).join("")+'</ol>':"";}).join("")+'</div>';
    return h+'</div>';}

  function ws(host,b,rg){css();var B=book(b);
    if(!B){host.innerHTML='<div class="card"><h2>Book not found</h2></div>';return;}
    var pr=String(rg||"").split("-"),a=+pr[0]||B.units[0].n,z=+pr[1]||a,st={mode:"class",ver:"A",key:true,sec:{g:1,v:1,r:0,w:1,p:1}};
    function uopt(sel){return B.units.map(function(u){var has=!!bank(b)[u.n];return '<option value="'+u.n+'"'+(u.n===+sel?" selected":"")+'>Unit '+u.n+' · '+esc(u.t)+(has?"":" (sin preguntas)")+'</option>';}).join("");}
    function draw(){var av=avail(b,a,z);
      host.innerHTML='<a class="back" href="javascript:history.back()"><i><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></i><span><small>Back to</small><b>Panel</b></span></a><div class="bqw"><span class="kicker">'+esc(B.name.toUpperCase())+'</span><h1>Print worksheet</h1><p class="sub">Elija las unidades y la versión que necesita.</p>'+
       '<div class="g2"><div><label class="f">De la unidad</label><select id="bqA">'+uopt(a)+'</select></div><div><label class="f">A la unidad</label><select id="bqZ">'+uopt(z)+'</select></div></div>'+
       (av.missing.length?'<div class="bq-warn">'+(av.units.length?'Las unidades '+av.missing.join(", ")+' aún no tienen preguntas; la hoja usa solo las unidades '+av.units.join(", ")+'.':'Estas unidades aún no tienen preguntas cargadas.')+'</div>':'')+
       '<label class="f">Versión</label>'+
       '<button class="bq-op'+(st.mode==="class"?" on":"")+'" data-m="class"><i style="background:#E4F7C4">✎</i><span><b>Class practice</b><small>Con recuadro Remember, ejemplo y caja de palabras, para trabajar en clase.</small></span></button>'+
       '<button class="bq-op'+(st.mode==="quiz"?" on":"")+'" data-m="quiz"><i style="background:#15192B;color:#D3F36B">Q</i><span><b>Quiz version</b><small>Sin pistas, con recuadro de calificación y puntos por sección.</small><span class="bq-ab"><span data-v="A" class="'+(st.ver==="A"?"on":"")+'">Versión A</span><span data-v="B" class="'+(st.ver==="B"?"on":"")+'">Versión B</span></span></span></button>'+
       '<label class="f">Incluir</label>'+[["g","Grammar",av.g],["v","Vocabulary",av.v],["r","Reading",av.r],["w","Writing",av.w],["p","Phonics",av.p]].map(function(s){return '<label class="bq-tg"><span>'+s[1]+'<small>'+(s[2]?s[2]+" disponibles":"sin preguntas")+'</small></span><input type="checkbox" data-s="'+s[0]+'"'+(st.sec[s[0]]?" checked":"")+(s[2]?"":" disabled")+'></label>';}).join("")+
       '<label class="bq-tg"><span>Hoja de respuestas</span><input type="checkbox" id="bqK"'+(st.key?" checked":"")+'></label>'+
       '<button class="cta" id="bqP"'+(av.units.length?"":" disabled style=\"opacity:.45\"")+'>Imprimir</button><p class="sub" style="font-size:12px;margin-top:10px">En el celular elija “Guardar como PDF” o su impresora. La versión B trae las mismas preguntas en otro orden.</p></div>';
      host.querySelector("#bqA").onchange=function(){a=+this.value;if(z<a)z=a;draw();};host.querySelector("#bqZ").onchange=function(){z=+this.value;if(a>z)a=z;draw();};
      host.querySelectorAll(".bq-op").forEach(function(x){x.onclick=function(e){var v=e.target.closest("[data-v]");if(v)st.ver=v.dataset.v;st.mode=x.dataset.m;draw();};});
      host.querySelectorAll("[data-s]").forEach(function(x){x.onchange=function(){st.sec[x.dataset.s]=x.checked?1:0;};});
      host.querySelector("#bqK").onchange=function(){st.key=this.checked;};
      host.querySelector("#bqP").onclick=function(){var el=document.getElementById("sheet");if(!el){el=document.createElement("div");el.id="sheet";document.body.appendChild(el);}el.innerHTML=sheet(b,a,z,st);setTimeout(function(){window.print();},150);};}
    draw();}

  window.MovaBQ={SEC:SEC,DEF:DEF,pool:pool,avail:avail,quiz:quiz,label:label,sheet:sheet,ws:ws,range:range,has:function(b,n){return !!bank(b)[n];}};
})();
