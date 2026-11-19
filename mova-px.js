/* MOVA · ejercicios variados por tema (v1)
   Tipos: match (unir), read (leer y contestar T/F), pick (elegir la palabra dentro de la oración),
   ctx (vocabulario en contexto con caja de palabras), write (escribir la oración), un (unscramble).
   MovaPX.render(host, item, {fb:true|false, next:"Check", onDone:function(res){...}})
   res = {ok:bool, a:"respuesta del alumno", r:"respuesta correcta", label:"instrucción"} */
(function(){
  if(window.MovaPX)return;
  var CSS='.px-h{font-size:20px;margin:6px 0 12px}'+
  '.px-mt{display:grid;grid-template-columns:1fr 1fr;gap:8px}.px-mt .col{display:flex;flex-direction:column;gap:8px}'+
  '.px-it{background:var(--bg,#F4EFE6);border:2.5px solid var(--line,#E4DED2);border-radius:16px;padding:11px 10px;font-weight:700;font-size:14.5px;line-height:1.3;text-align:left;position:relative}'+
  '.px-it.on{border-color:var(--ink,#15192B);background:#fff}.px-it .dot{position:absolute;top:-7px;right:-7px;width:20px;height:20px;border-radius:50%;border:2px solid #fff;font-size:11px;font-weight:800;color:#15192B;display:flex;align-items:center;justify-content:center}'+
  '.px-it.good{border-color:#2E9E6A;background:#E7F8EF}.px-it.bad{border-color:#E0457B;background:#FFE6EE}'+
  '.px-txt{background:#FFF8E6;border-radius:18px;padding:14px 16px;font-size:15.5px;line-height:1.6;margin-bottom:12px;position:relative}.px-txt button{float:right;margin:0 0 6px 8px;width:36px;height:36px;border-radius:50%;background:#fff;border:0;display:flex;align-items:center;justify-content:center}'+
  '.px-tf{display:flex;align-items:center;gap:8px;padding:9px 0;border-top:1.5px solid var(--line,#E4DED2)}.px-tf p{flex:1;margin:0;font-weight:700;font-size:14.5px;line-height:1.35}'+
  '.px-tf button{min-width:52px;padding:9px 8px;border-radius:12px;border:2.5px solid var(--line,#E4DED2);background:var(--bg,#F4EFE6);font-weight:800;font-size:13.5px}.px-tf button.on{background:#15192B;color:#fff;border-color:#15192B}.px-tf button.good{background:#2E9E6A;color:#fff;border-color:#2E9E6A}.px-tf button.bad{background:#E0457B;color:#fff;border-color:#E0457B}'+
  '.px-ps{font-size:17px;font-weight:700;line-height:2.1;padding:6px 0;border-top:1.5px solid var(--line,#E4DED2)}.px-ps:first-of-type{border-top:0}'+
  '.px-ch{display:inline-flex;gap:3px;background:#E6E2FF;border-radius:12px;padding:3px;vertical-align:middle;margin:0 2px}.px-ch button{border:0;background:transparent;border-radius:9px;padding:4px 9px;font-weight:800;font-size:15px;color:#15192B}'+
  '.px-ch button.on{background:#15192B;color:#fff}.px-ch button.good{background:#2E9E6A;color:#fff}.px-ch button.bad{background:#E0457B;color:#fff;text-decoration:line-through}'+
  '.px-box{display:flex;flex-wrap:wrap;gap:7px;background:#BDF0D8;border-radius:18px;padding:12px;margin-bottom:12px}.px-box b{width:100%;font-size:11px;letter-spacing:.08em;color:#1E2A55}'+
  '.px-box button{background:#fff;border:0;border-radius:11px;padding:8px 12px;font-weight:800;font-size:15px;box-shadow:0 2px 0 rgba(21,25,43,.15)}.px-box button.used{opacity:.3}'+
  '.px-cs{font-size:16.5px;font-weight:700;line-height:2;padding:4px 0}.px-gp{display:inline-block;min-width:74px;border:0;border-bottom:3px solid #1E2A55;background:#F4EFE6;border-radius:8px 8px 0 0;padding:2px 8px;font-weight:800;font-size:16px;color:#1E2A55;text-align:center}'+
  '.px-gp.sel{background:#FFE58A}.px-gp.good{background:#E7F8EF;border-color:#2E9E6A}.px-gp.bad{background:#FFE6EE;border-color:#E0457B}'+
  '.px-cue{background:#C9D2FF;border-radius:18px;padding:14px 16px;font-size:18px;font-weight:800;color:#15192B;text-align:center;margin-bottom:10px}.px-cue small{display:block;font-size:12px;font-weight:700;letter-spacing:.06em;color:#1E2A55;margin-bottom:4px}'+
  '.px-ta{width:100%;min-height:70px;border:2.5px solid var(--line,#E4DED2);border-radius:16px;padding:12px 14px;font:700 17px "Plus Jakarta Sans",Poppins,sans-serif;color:#15192B;resize:none;background:#fff;box-sizing:border-box}.px-ta.good{border-color:#2E9E6A;background:#E7F8EF}.px-ta.bad{border-color:#E0457B;background:#FFE6EE}'+
  '.px-sl{min-height:58px;border:2.5px dashed var(--line,#E4DED2);border-radius:16px;padding:8px;display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px}.px-sl.good{border:2.5px solid #2E9E6A;background:#E7F8EF}.px-sl.bad{border:2.5px solid #E0457B;background:#FFE6EE}'+
  '.px-pl{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px}.px-wd{padding:9px 13px;border-radius:12px;background:#E6E2FF;border:0;font-weight:800;font-size:16px;box-shadow:0 3px 0 #C3BBEA;color:#15192B}.px-sl .px-wd{background:#fff;box-shadow:0 0 0 1.5px #15192B}'+
  '.px-btn{display:block;width:100%;margin-top:12px;border:0;border-radius:18px;padding:15px;background:#15192B;color:#fff;font-weight:800;font-size:16px}.px-btn:disabled{opacity:.4}';
  var st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
  var COL=["#FFE58A","#FF8FC0","#BDF0D8","#C9D2FF","#FFD9D2","#D3F36B"];
  var SPK='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15192B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>';
  function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");}
  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),x=a[i];a[i]=a[j];a[j]=x;}return a;}
  function speak(t){try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=.88;speechSynthesis.speak(u);}catch(e){}}
  function norm(x){return String(x).toLowerCase().replace(/[‘’]/g,"'").replace(/\bcould not\b/g,"couldn't").replace(/\bcannot\b|\bcan not\b/g,"can't").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim();}
  var LBL={match:"MATCH IT",read:"READ AND ANSWER",pick:"CHOOSE THE WORD",ctx:"WORDS IN CONTEXT",write:"WRITE IT",un:"UNSCRAMBLE"};
  var HD={match:"Match the two parts.",read:"Read and choose True or False.",pick:"Tap the correct word.",ctx:"Complete with a word from the box.",write:"Write the sentence.",un:"Put the words in order."};

  function render(host,it,o){
    o=o||{};var fb=o.fb!==false,k=it.k,box=document.createElement("div"),btn,ctl;
    box.innerHTML='<h2 class="px-h">'+esc(it.h||HD[k])+'</h2><div class="px-b"></div><button class="px-btn" disabled>'+esc(o.next||(fb?"Check":"Next"))+'</button>';
    host.appendChild(box);var B=box.querySelector(".px-b");btn=box.querySelector(".px-btn");
    function upd(){btn.disabled=!ctl.ready();}
    ctl=(T[k]||T.un)(B,it,upd);upd();
    btn.onclick=function(){if(!ctl.ready())return;var g=ctl.grade();g.label=it.h||HD[k];if(fb){ctl.reveal();B.style.pointerEvents="none";}btn.remove();o.onDone&&o.onDone(g);};
    return ctl;
  }
  var T={};
  /* unir */
  T.match=function(B,it,upd){
    var L=it.p.map(function(p,i){return {x:p[0],i:i};}),R=shuffle(it.p.map(function(p,i){return {x:p[1],i:i};})),pair={},sel=null,cl={};
    function draw(){B.innerHTML='<div class="px-mt"><div class="col">'+L.map(function(l){var c=pair[l.i]!=null?cl[l.i]:null;return '<button class="px-it'+(sel===l.i?" on":"")+'" data-l="'+l.i+'">'+esc(l.x)+(c?'<span class="dot" style="background:'+c+'"></span>':'')+'</button>';}).join("")+'</div><div class="col">'+R.map(function(r){var li=null;for(var a in pair)if(pair[a]===r.i)li=+a;return '<button class="px-it" data-r="'+r.i+'">'+esc(r.x)+(li!=null?'<span class="dot" style="background:'+cl[li]+'"></span>':'')+'</button>';}).join("")+'</div></div>';
      B.querySelectorAll("[data-l]").forEach(function(b){b.onclick=function(){var i=+b.dataset.l;if(pair[i]!=null){delete pair[i];}sel=i;draw();upd();};});
      B.querySelectorAll("[data-r]").forEach(function(b){b.onclick=function(){var r=+b.dataset.r;for(var a in pair)if(pair[a]===r)delete pair[a];if(sel==null){draw();upd();return;}pair[sel]=r;var nx=L.filter(function(l){return pair[l.i]==null;})[0];sel=nx?nx.i:null;draw();upd();};});}
    L.forEach(function(l,n){cl[l.i]=COL[n%COL.length];});sel=0;draw();
    return {ready:function(){return Object.keys(pair).length===L.length;},
      grade:function(){var w=L.filter(function(l){return pair[l.i]!==l.i;});return {ok:w.length===0,a:L.map(function(l){return l.x+" "+it.p[pair[l.i]][1];}).join(" / "),r:it.p.map(function(p){return p[0]+" "+p[1];}).join(" / "),n:L.length-w.length,of:L.length};},
      reveal:function(){B.querySelectorAll("[data-l]").forEach(function(b){var i=+b.dataset.l;b.classList.add(pair[i]===i?"good":"bad");});B.querySelectorAll("[data-r]").forEach(function(b){var r=+b.dataset.r,li=null;for(var a in pair)if(pair[a]===r)li=+a;b.classList.add(li===r?"good":"bad");});}};
  };
  /* leer y contestar */
  T.read=function(B,it,upd){var ans={};
    B.innerHTML='<div class="px-txt"><button aria-label="Listen" id="pxs">'+SPK+'</button>'+esc(it.txt)+'</div>'+it.tf.map(function(s,i){return '<div class="px-tf"><p>'+esc(s[0])+'</p><button data-i="'+i+'" data-v="1">True</button><button data-i="'+i+'" data-v="0">False</button></div>';}).join("");
    B.querySelector("#pxs").onclick=function(){speak(it.txt);};
    B.querySelectorAll(".px-tf button").forEach(function(b){b.onclick=function(){var i=+b.dataset.i;ans[i]=b.dataset.v==="1";B.querySelectorAll('.px-tf button[data-i="'+i+'"]').forEach(function(x){x.classList.toggle("on",x===b);});upd();};});
    return {ready:function(){return Object.keys(ans).length===it.tf.length;},
      grade:function(){var n=it.tf.filter(function(s,i){return ans[i]===s[1];}).length;return {ok:n===it.tf.length,a:it.tf.map(function(s,i){return (ans[i]?"T":"F");}).join(" "),r:it.tf.map(function(s){return s[1]?"T":"F";}).join(" "),n:n,of:it.tf.length};},
      reveal:function(){B.querySelectorAll(".px-tf button").forEach(function(b){var i=+b.dataset.i,v=b.dataset.v==="1";b.classList.remove("on");if(v===it.tf[i][1])b.classList.add("good");else if(ans[i]===v)b.classList.add("bad");});}};
  };
  /* elegir la palabra dentro de la oración: "I [could|can] swim." (la primera es la correcta) */
  T.pick=function(B,it,upd){var S=[],ans={},g=0;
    B.innerHTML=it.s.map(function(s){return '<div class="px-ps">'+esc(s).replace(/\[([^\]]+)\]/g,function(_,m){var op=m.split("|"),id=g++;S.push(op[0]);return '<span class="px-ch">'+shuffle(op).map(function(x){return '<button data-g="'+id+'" data-x="'+esc(x)+'">'+esc(x)+'</button>';}).join("")+'</span>';})+'</div>';}).join("");
    B.querySelectorAll(".px-ch button").forEach(function(b){b.onclick=function(){var id=+b.dataset.g;ans[id]=b.dataset.x;B.querySelectorAll('[data-g="'+id+'"]').forEach(function(x){x.classList.toggle("on",x===b);});upd();};});
    return {ready:function(){return Object.keys(ans).length===S.length;},
      grade:function(){var n=S.filter(function(r,i){return ans[i]===r;}).length;return {ok:n===S.length,a:S.map(function(r,i){return ans[i];}).join(", "),r:S.join(", "),n:n,of:S.length};},
      reveal:function(){B.querySelectorAll(".px-ch button").forEach(function(b){var id=+b.dataset.g;b.classList.remove("on");if(b.dataset.x===S[id])b.classList.add("good");else if(ans[id]===b.dataset.x)b.classList.add("bad");});}};
  };
  /* vocabulario en contexto: caja de palabras + huecos */
  T.ctx=function(B,it,upd){var fill={},sel=0,W=shuffle(it.box);
    function draw(){var used={};for(var a in fill)used[fill[a]]=1;
      B.innerHTML='<div class="px-box"><b>WORD BOX</b>'+W.map(function(w){return '<button data-w="'+esc(w)+'" class="'+(used[w]?"used":"")+'">'+esc(w)+'</button>';}).join("")+'</div>'+it.s.map(function(s,i){return '<div class="px-cs">'+(i+1)+'. '+esc(s[0]).replace("___",'<button class="px-gp'+(sel===i?" sel":"")+'" data-i="'+i+'">'+(fill[i]?esc(fill[i]):"&nbsp;")+'</button>')+'</div>';}).join("");
      B.querySelectorAll(".px-gp").forEach(function(b){b.onclick=function(){var i=+b.dataset.i;if(fill[i]!=null)delete fill[i];sel=i;draw();upd();};});
      B.querySelectorAll("[data-w]").forEach(function(b){b.onclick=function(){var w=b.dataset.w;if(sel==null)return;for(var a in fill)if(fill[a]===w)delete fill[a];fill[sel]=w;var nx=null;for(var i=0;i<it.s.length;i++)if(fill[i]==null){nx=i;break;}sel=nx;draw();upd();};});}
    draw();
    return {ready:function(){return Object.keys(fill).length===it.s.length;},
      grade:function(){var n=it.s.filter(function(s,i){return fill[i]===s[1];}).length;return {ok:n===it.s.length,a:it.s.map(function(s,i){return fill[i];}).join(", "),r:it.s.map(function(s){return s[1];}).join(", "),n:n,of:it.s.length};},
      reveal:function(){B.querySelectorAll(".px-gp").forEach(function(b){var i=+b.dataset.i;b.classList.remove("sel");if(fill[i]===it.s[i][1])b.classList.add("good");else{b.classList.add("bad");b.innerHTML='<s>'+esc(fill[i])+'</s> '+esc(it.s[i][1]);}});}};
  };
  /* escribir: pista → oración completa */
  T.write=function(B,it,upd){
    B.innerHTML='<div class="px-cue"><small>'+esc(it.lab||"USE THE CLUES")+'</small>'+esc(it.cue)+'</div><textarea class="px-ta" rows="2" autocapitalize="sentences" spellcheck="false" placeholder="Write here"></textarea>';
    var ta=B.querySelector("textarea");ta.oninput=upd;
    function ok(){var v=norm(ta.value);return it.a.some(function(x){return norm(x)===v;});}
    return {ready:function(){return ta.value.trim().split(/\s+/).length>=2;},
      grade:function(){return {ok:ok(),a:ta.value.trim(),r:it.a[0]};},
      reveal:function(){var g=ok();ta.classList.add(g?"good":"bad");ta.readOnly=true;}};
  };
  /* unscramble */
  T.un=function(B,it,upd){var target=it.s,words=target.split(" "),pool=shuffle(words),picked=[],sl,pl;
    if(pool.join(" ")===target)pool.reverse();
    function draw(){B.innerHTML='<div class="px-sl">'+picked.map(function(w,k){return '<button class="px-wd" data-k="'+k+'">'+esc(w)+'</button>';}).join("")+'</div><div class="px-pl">'+pool.map(function(w,k){return '<button class="px-wd" data-p="'+k+'">'+esc(w)+'</button>';}).join("")+'</div>';
      B.querySelectorAll("[data-p]").forEach(function(b){b.onclick=function(){picked.push(pool.splice(+b.dataset.p,1)[0]);draw();upd();};});
      B.querySelectorAll("[data-k]").forEach(function(b){b.onclick=function(){pool.push(picked.splice(+b.dataset.k,1)[0]);draw();upd();};});}
    draw();
    return {ready:function(){return !pool.length;},
      grade:function(){return {ok:picked.join(" ")===target,a:picked.join(" "),r:target};},
      reveal:function(){B.querySelector(".px-sl").classList.add(picked.join(" ")===target?"good":"bad");}};
  };
  function feedback(it,g){var why=it.why?esc(it.why):"";
    if(g.ok)return (g.r&&(it.k==="write"||it.k==="un")?esc(g.r)+'<br>':'')+why;
    var part=g.of?'<b style="display:inline">'+g.n+' / '+g.of+'</b> correct. ':'';
    return part+(it.k==="match"||it.k==="read"||it.k==="pick"||it.k==="ctx"?'Look at the green answers. ':'Answer: <b style="display:inline">'+esc(g.r)+'</b><br>')+why;}
  window.MovaPX={render:render,label:function(it){return LBL[it.k]||"PRACTICE";},head:function(it){return it.h||HD[it.k];},title:function(it){var h=it.h||HD[it.k];if(it.k==="write")return h+" ("+it.cue.replace(/\s+/g," ").trim()+")";if(it.k==="read")return h+" ("+it.txt.split(" ").slice(0,6).join(" ")+"…)";return h;},feedback:feedback,types:Object.keys(LBL)};
})();
