/* MOVA · Boleta Mensual para papás (diseño institucional) + recordatorio del último viernes.
   Reemplaza el diálogo "Reporte del mes para papás" del panel:
   - "Boleta para papás": abre la boleta de 2 páginas lista para guardar en PDF o imprimir.
   - "Reporte interno": el reporte anterior con tiempos de práctica.
   Los datos que captura la maestra (quiz escrito, speaking, observaciones) se guardan como
   tarea oculta "wfb:ev:AAAA-MM" para que Miss Karla y Miss Letty vean lo mismo. */
(function(){
const MES=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const NEXT_KEY="mova_boleta_next";
const SPK=["Excelente","Logrado","En avance","En desarrollo","Por reforzar"];
const SPK_PCT={"Excelente":100,"Logrado":85,"En avance":65,"En desarrollo":45,"Por reforzar":30};
const e=v=>esc(v==null?"":String(v));
function evEnc(o){ return "EV|"+btoa(unescape(encodeURIComponent(JSON.stringify(o)))); }
function evDec(t){ try{ return /^EV\|/.test(t||"")?JSON.parse(decodeURIComponent(escape(atob(String(t).slice(3))))):null; }catch(_){ return null; } }
function mkey(y,mo){ return y+"-"+String(mo+1).padStart(2,"0"); }
function lastFriday(y,mo){ const d=new Date(y,mo+1,0); while(d.getDay()!==5) d.setDate(d.getDate()-1); return d; }
function nextDefault(y,mo){ const n=new Date(y,mo+1,1); return {t:"Quiz de "+MES[n.getMonth()].toLowerCase(), d:"Última semana de "+MES[n.getMonth()].toLowerCase(), x:"Evaluación de los temas que trabajaremos en "+MES[n.getMonth()].toLowerCase()}; }
function getNext(y,mo){ try{ const o=JSON.parse(localStorage.getItem(NEXT_KEY)||"null"); if(o&&o.k===mkey(y,mo)) return o; }catch(_){} return nextDefault(y,mo); }
function setNext(y,mo,o){ try{ localStorage.setItem(NEXT_KEY,JSON.stringify(Object.assign({k:mkey(y,mo)},o))); }catch(_){} }

/* Explicación breve de cada tema de gramática, para que los papás entiendan qué se trabajó */
const GX=[
 [/subject pronouns.*to be|^to be|verb to be|be:? (affirmative|negative)|am, is, are/i,"presentarse y describir a personas y lugares con <i>am, is, are</i>, en afirmativo, negativo y preguntas"],
 [/plural nouns|articles|this \/ that/i,"plurales, artículos y <i>this, that, these, those</i> para señalar objetos"],
 [/possessive adjectives|possessive 's|possessives/i,"expresar pertenencia con <i>my, your, his, her</i> y <i>'s</i> al hablar de su familia y sus cosas"],
 [/have got|has got/i,"decir lo que tiene con <i>have got / has got</i>"],
 [/imperatives|object pronouns/i,"dar instrucciones (imperativos) y usar <i>me, him, her, them</i>"],
 [/ordinal numbers|telling the time|days of the week/i,"números ordinales, fechas y la hora"],
 [/present simple questions/i,"hacer preguntas en presente con <i>do / does</i> y responder con respuestas cortas"],
 [/present simple|simple present/i,"hablar de rutinas, hábitos y hechos; terminación <i>-s</i> en tercera persona"],
 [/adverbs of frequency|frequency/i,"decir con qué frecuencia hace algo: <i>always, usually, sometimes, never</i>"],
 [/there is|there are|there's/i,"describir lo que hay en un lugar y preguntar <i>Is there…? / Are there…?</i>"],
 [/some and any|some \/ any|some, any/i,"usar <i>some</i> y <i>any</i> en afirmativas, negativas y preguntas"],
 [/can \/ can't|can't|\bcan\b/i,"expresar habilidad y permiso con <i>can / can't</i>"],
 [/present continuous|present progressive|-ing now/i,"describir lo que está pasando en este momento con <i>am / is / are + -ing</i>"],
 [/present simple (vs|and) present continuous|simple and continuous/i,"distinguir rutinas (presente simple) de acciones en progreso (presente continuo)"],
 [/like \+ ?-?ing|love \/ like|likes and dislikes|like doing/i,"hablar de gustos con <i>like, love, hate + -ing</i>"],
 [/countable|uncountable|much \/ many|how much|how many/i,"sustantivos contables e incontables con <i>much, many, a lot of</i>"],
 [/was \/ were|past simple of be|was, were/i,"hablar del pasado con <i>was / were</i>"],
 [/past simple.*(irregular)|irregular verbs/i,"pasado simple con verbos irregulares"],
 [/past simple|simple past/i,"narrar hechos terminados en pasado (verbos regulares <i>-ed</i> e irregulares)"],
 [/past continuous/i,"describir acciones en progreso en el pasado con <i>was / were + -ing</i>"],
 [/could|couldn't/i,"hablar de habilidades en el pasado con <i>could / couldn't</i>"],
 [/had to|have to|has to|must|mustn't/i,"expresar obligación y prohibición (<i>have to, must, mustn't</i>)"],
 [/should/i,"dar consejos con <i>should / shouldn't</i>"],
 [/comparative/i,"comparar personas y cosas (<i>bigger than, more interesting than</i>)"],
 [/superlative/i,"decir cuál es el mayor o el mejor (<i>the biggest, the most…</i>)"],
 [/going to/i,"hablar de planes e intenciones con <i>be going to</i>"],
 [/\bwill\b|won't/i,"hacer predicciones y decisiones al momento con <i>will</i>"],
 [/present perfect/i,"hablar de experiencias y acciones recientes con <i>have / has + participio</i>"],
 [/prepositions? of (place|time)|in, on, at|prepositions/i,"usar preposiciones de lugar y tiempo (<i>in, on, at, under…</i>)"],
 [/question words|wh- questions/i,"formular preguntas con <i>what, where, when, who, how</i>"],
 [/first conditional|conditional/i,"expresar condiciones y sus consecuencias (<i>If…, will…</i>)"],
 [/relative/i,"unir ideas con pronombres relativos (<i>who, which, that</i>)"],
 [/passive/i,"describir procesos con la voz pasiva"],
 [/gerund|infinitive/i,"elegir entre gerundio e infinitivo después de ciertos verbos"]
];
function gx(t){ const f=GX.find(([rx])=>rx.test(t)); return f?f[1]:""; }

/* Descripción pedagógica de cada tema de gramática (nombre del tema en inglés, descripción en español) */
const GD=[
 [/^when /i,"expresa fechas, horarios y momentos del día con precisión."],
 [/used to/i,"describe hábitos y situaciones del pasado que ya no ocurren, con <i>used to</i>."],
 [/relative clauses/i,"une y precisa información sobre personas, objetos y lugares con <i>who, which, that</i> y <i>where</i>."],
 [/phrasal verbs/i,"comprende y utiliza <i>phrasal verbs</i> de uso frecuente en contextos cotidianos."],
 [/so and such|so \/ such|so … that|such a/i,"intensifica cualidades y expresa consecuencias con <i>so</i> y <i>such</i>."],
 [/too and not enough/i,"expresa exceso e insuficiencia con <i>too</i> y <i>not enough</i>."],
 [/adjectives vs\.? adverbs|use of english: adverbs/i,"distingue entre adjetivos y adverbios, y los utiliza para describir con precisión."],
 [/-ed and -ing/i,"distingue adjetivos terminados en <i>-ed</i> e <i>-ing</i> para describir emociones y situaciones."],
 [/modal verbs|obligation/i,"expresa obligación, permiso y capacidad con verbos modales en distintos contextos."],
 [/-ing or to|to \+ infinitive|plan \/ hope|\+ infinitive|gerund/i,"elige entre gerundio e infinitivo después de ciertos verbos y adjetivos."],
 [/need to/i,"expresa necesidades con <i>need to</i>."],
 [/before \/ after \/ when|^before|^after/i,"relaciona acciones en el tiempo con <i>before, after</i> y <i>when</i>."],
 [/what about|how about/i,"hace sugerencias y responde a ellas de manera adecuada."],
 [/know|understand how/i,"expresa lo que sabe hacer y lo que comprende con <i>know</i> y <i>understand</i>."],
 [/some- \/ every-/i,"emplea pronombres indefinidos para referirse a personas y cosas no específicas."],
 [/past progressive/i,"describe acciones que estaban en curso en el pasado con <i>was / were + -ing</i>."],
 [/present progressive/i,"describe acciones que ocurren en el momento en que habla, con la estructura <i>am / is / are + -ing</i>."],
 [/a few|a little|a bit of/i,"distingue sustantivos contables e incontables y elige el cuantificador adecuado (<i>a few, a little, a bit of</i>)."],
 [/\bmay\b|might/i,"expresa distintos grados de certeza sobre el futuro con <i>may</i> y <i>might</i>."],
 [/made of|made by/i,"describe de qué están hechos los objetos y quién los elabora."],
 [/talking about the future/i,"habla de planes, intenciones y predicciones utilizando distintas formas de futuro."],
 [/present tenses/i,"distingue entre rutinas y acciones en curso, y elige el tiempo presente adecuado según el contexto."],
 [/order of adjectives/i,"ordena correctamente los adjetivos dentro de la oración."],
 [/i wish/i,"expresa deseos sobre situaciones presentes con <i>I wish</i>."],
 [/years old/i,"dice su edad y pregunta la de los demás."],
 [/is my…|he \/ she is my/i,"presenta a las personas de su entorno y describe su relación con ellas."],
 [/is before|is after/i,"ubica días y acontecimientos en orden con <i>before</i> y <i>after</i>."],
 [/in the morning|goes camping|^i go/i,"describe rutinas, hábitos y hechos generales, aplicando correctamente la terminación <i>-s</i> en tercera persona."],
 [/^do /i,"formula preguntas y respuestas cortas con <i>do / does</i> para conocer gustos, rutinas y hábitos."],
 [/in the bedroom|on the shelf/i,"describe la ubicación de personas y objetos utilizando preposiciones de lugar."],
 [/are you hungry|we are in/i,"se presenta y describe a personas, lugares y estados con el verbo <i>to be</i>."],
 [/this is my/i,"presenta y describe sus objetos personales."],
 [/present perfect.*(already|just|yet)|just \/ yet \/ already/i,"utiliza <i>already, just</i> y <i>yet</i> para referirse a acciones recientes y a lo que aún no ha sucedido, en afirmativo, negativo y preguntas."],
 [/present perfect.*(ever|never)|have you ever/i,"comparte experiencias de vida con <i>ever</i> y <i>never</i>, y formula preguntas para conocer las de los demás."],
 [/past perfect/i,"ordena acontecimientos del pasado distinguiendo cuál ocurrió primero, al combinar <i>past perfect</i> y <i>past simple</i>."],
 [/present perfect/i,"emplea el presente perfecto para referirse a experiencias y logros personales, y distingue cuándo una acción pasada conserva relevancia en el presente."],
 [/passive/i,"transforma oraciones de voz activa a pasiva y reconoce cuándo conviene dar mayor peso a la acción o al resultado que a quien la realiza."],
 [/complex sentences|subordinat|although/i,"construye oraciones subordinadas con <i>although, because, if</i> para expresar contraste, causa y condición, una habilidad clave en la redacción académica."],
 [/compound sentences|subject.verb agreement/i,"enlaza ideas independientes con <i>and, but, or, so</i> y cuida la concordancia entre sujeto y verbo, lo que aporta fluidez y cohesión a su escritura."],
 [/coordinating conjunctions|conjunctive adverbs|showing contrast/i,"expresa contraste y relación entre ideas con conjunciones y adverbios conectores, dando mayor cohesión a sus textos."],
 [/adverbs of frequency/i,"expresa con qué frecuencia realiza sus actividades (<i>always, usually, sometimes, never</i>) y ubica correctamente el adverbio en la oración."],
 [/adverbs? of manner|^adverbs/i,"precisa la forma en que se realiza una acción y enriquece así sus descripciones orales y escritas."],
 [/present simple (and|vs\.?) present continuous/i,"distingue entre rutinas y hábitos (<i>present simple</i>) y acciones en curso (<i>present continuous</i>), y elige el tiempo adecuado según el contexto."],
 [/present continuous for future/i,"comunica planes y compromisos ya acordados utilizando el <i>present continuous</i> con sentido de futuro."],
 [/present continuous|what are you doing|wearing|are you singing/i,"describe acciones que ocurren en el momento en que habla, con la estructura <i>am / is / are + -ing</i>."],
 [/present simple questions|^do you|does he|does she|does it/i,"formula preguntas y respuestas cortas con <i>do / does</i> para conocer gustos, rutinas y hábitos de los demás."],
 [/present simple|simple present|for facts/i,"describe rutinas, hábitos y hechos generales, aplicando correctamente la terminación <i>-s</i> en tercera persona."],
 [/past simple negatives|questions in the past|^did you|what happened/i,"formula preguntas y respuestas en pasado con <i>did / didn't</i> para narrar y conocer experiencias."],
 [/past simple: (was|to be)|was \/ were|was \/ wasn't|were you born/i,"se refiere a estados y situaciones del pasado utilizando <i>was / were</i>."],
 [/past continuous/i,"describe acciones que estaban en curso en el pasado con <i>was / were + -ing</i>."],
 [/past simple|regular and irregular|simple past|what did you do/i,"narra hechos y experiencias del pasado utilizando verbos regulares e irregulares."],
 [/could/i,"expresa habilidades y posibilidades en el pasado con <i>could / couldn't</i>."],
 [/going to and will/i,"distingue entre planes ya decididos (<i>be going to</i>) y predicciones o decisiones espontáneas (<i>will</i>)."],
 [/degrees of certainty/i,"expresa distintos grados de certeza sobre el futuro, matizando sus ideas con precisión."],
 [/going to/i,"expresa planes e intenciones a futuro con <i>be going to</i>."],
 [/\bwill\b/i,"hace predicciones y toma decisiones en el momento utilizando <i>will</i>."],
 [/conditional|^if /i,"plantea situaciones posibles y sus consecuencias con el primer condicional (<i>If…, will…</i>)."],
 [/reported speech/i,"transmite lo que otra persona dijo, ajustando tiempos verbales y pronombres."],
 [/quotation/i,"incorpora citas textuales en su escritura con la puntuación adecuada."],
 [/\(not\) as|too, \(not\) enough/i,"expresa igualdad, exceso y suficiencia con <i>(not) as … as, too</i> y <i>enough</i>."],
 [/comparative|superlative|more \/ most|less \/ least|taller than/i,"compara personas, objetos e ideas, y distingue el uso de comparativos y superlativos."],
 [/must|have to|has to/i,"expresa obligación, ausencia de obligación y prohibición en normas y situaciones cotidianas."],
 [/should/i,"da y solicita consejos con <i>should / shouldn't</i>."],
 [/\bcan\b|can't/i,"expresa habilidades y permisos con <i>can / can't</i>, y pregunta por los de los demás."],
 [/countable|non-count|quantifiers|some and any|some \/ any|much|many/i,"distingue sustantivos contables e incontables y elige el cuantificador adecuado (<i>some, any, much, many, a lot of</i>)."],
 [/there is|there are|there's|is there|are there/i,"describe lugares indicando lo que hay en ellos, en afirmativo, negativo y preguntas."],
 [/prepositions? of time|in, on, at/i,"ubica acontecimientos en el tiempo con <i>in, on</i> y <i>at</i>."],
 [/prepositional phrases/i,"amplía sus oraciones con frases preposicionales que aportan detalle y precisión."],
 [/preposition|next to|behind|in front of|where is|where's|where are/i,"describe la ubicación de personas y objetos utilizando preposiciones de lugar."],
 [/reflexive/i,"utiliza pronombres reflexivos para indicar que alguien realiza una acción por sí mismo."],
 [/indefinite pronouns/i,"emplea pronombres indefinidos para referirse a personas y cosas no específicas."],
 [/possessive|'s\b/i,"expresa pertenencia con adjetivos y pronombres posesivos y con el <i>'s</i> posesivo."],
 [/have got|has got|do you have|have \/ don't have|i have|has \/ she doesn't have/i,"describe lo que tiene y lo que tienen otros, en afirmativo, negativo y preguntas."],
 [/pronoun/i,"utiliza pronombres para referirse a personas y objetos sin repetir sus nombres."],
 [/this, that|this \/ that|these|those/i,"señala objetos cercanos y lejanos, en singular y plural, con <i>this, that, these</i> y <i>those</i>."],
 [/to be|am, is, are/i,"se presenta y describe a personas, lugares y objetos con el verbo <i>to be</i>."],
 [/imperative/i,"da instrucciones y recomendaciones de forma clara utilizando el imperativo."],
 [/plural|articles/i,"forma plurales y utiliza correctamente los artículos <i>a, an</i> y <i>the</i>."],
 [/parts of speech/i,"identifica las partes de la oración y su función, base para construir oraciones más complejas."],
 [/participial adjectives/i,"distingue adjetivos terminados en <i>-ed</i> e <i>-ing</i> para describir emociones y situaciones."],
 [/placement of adjectives/i,"ordena correctamente los adjetivos dentro de la oración."],
 [/transitions|sequence words/i,"organiza sus ideas con palabras de transición y secuencia, logrando textos más claros."],
 [/capitalization|punctuation/i,"aplica las reglas de mayúsculas y puntuación para dar claridad a su escritura."],
 [/ordinal|telling the time|what time|o'clock|time expressions|what day|birthday|season|born/i,"expresa fechas, horarios y momentos del día con precisión."],
 [/like.*-ing|like doing|good at|likes skiing|crazy about/i,"habla de sus gustos, intereses y habilidades con <i>like, love</i> y <i>good at</i> seguidos de <i>-ing</i>."],
 [/want/i,"expresa deseos y planes con <i>want / want to</i>."],
 [/because|why/i,"explica causas y motivos utilizando <i>because</i>."],
 [/like|favorite|love/i,"expresa sus gustos y preferencias, y pregunta por los de los demás."],
 [/question|wh-|who|how many|how old/i,"formula preguntas para obtener información específica con palabras interrogativas."],
 [/greeting|introduc|name/i,"se presenta, saluda y solicita datos personales con seguridad."],
 [/spell/i,"deletrea palabras en inglés con claridad."],
 [/plus|minus|equals|number/i,"utiliza los números en inglés para contar, comparar y resolver operaciones sencillas."],
 [/weather|temperature/i,"describe el clima y la temperatura."],
 [/feel|matter|nervous|crying/i,"expresa cómo se siente y explica el motivo."],
 [/look like|looks/i,"describe la apariencia de personas, animales y objetos."],
 [/direction|turn left|how do you get|go by/i,"da y sigue indicaciones para llegar a un lugar, y habla de medios de transporte."],
 [/let's/i,"hace sugerencias y responde a ellas de manera adecuada."],
 [/how heavy|how tall/i,"pregunta y expresa medidas como peso y altura."],
 [/address|live/i,"pregunta y proporciona información sobre dónde vive."],
 [/gift|thank you|welcome/i,"utiliza expresiones de cortesía al dar y recibir."],
 [/what is it|is it|is this|are they|it's a/i,"identifica y describe objetos, y responde preguntas de sí o no."]
];
function gdesc(t,kid){ const f=GD.find(([rx])=>rx.test(t)); return f?f[1]:(kid?"lo practica en diálogos y juegos de clase, y lo utiliza para comunicarse en situaciones cotidianas.":"lo aplica en ejercicios orales y escritos, integrándolo a su comunicación en clase."); }
function gname(t){ let n=String(t).split(":")[0].trim(); if(n.length>60){ const q=n.indexOf("?"); n=q>8&&q<60?n.slice(0,q+1):n.slice(0,58).replace(/\s+\S*$/,"")+"…"; } return n; }

const AREA=[
 {k:"g",n:"Grammar",c:"#8EC9EE",rx:/grammar|gram[aá]tica|game on|retos|my path|ruta|sentence/i},
 {k:"v",n:"Vocabulary &amp; Phonics",c:"#F6D776",rx:/vocab|craft|flash|palabras|words|phonics|spelling/i},
 {k:"r",n:"Reading &amp; Listening",c:"#9DDCC0",rx:/lectura|reading|explorando|aprende|listening|library|story|cuento/i},
 {k:"w",n:"Writing &amp; Speaking",c:"#FF8FC0",rx:/writing|escritura|speaking|pronunci|voice|habla/i}
];
const QL={Grammar:"Gramática de las unidades",Vocabulary:"Vocabulario de las unidades",Reading:"Comprensión de lectura",Listening:"Comprensión auditiva",Writing:"Redacción de oraciones",Phonics:"Phonics: sonido y escritura",Speaking:"Speaking"};

async function evLoad(s,y,mo){
  try{ const raw=await rpc("admin_list_tasks",{p_student:String(s.id)})||[];
    const k="wfb:ev:"+mkey(y,mo), bk="wfb:bp:"+mkey(y,mo);
    const ev=raw.filter(t=>String(t.task)===k).sort((a,c)=>new Date(a.created_at)-new Date(c.created_at)).map(t=>evDec(t.title)).filter(Boolean).pop()||null;
    const bp=raw.filter(t=>String(t.task)===bk).sort((a,c)=>new Date(a.created_at)-new Date(c.created_at)).map(t=>bkDec(t.title)).filter(Boolean).pop()||null;
    const asg=raw.filter(t=>String(t.task)==="wfb:bk:book").sort((a,c)=>new Date(a.created_at)-new Date(c.created_at)).map(t=>bkDec(t.title)).filter(Boolean).pop()||null;
    const bpAny=bp||raw.filter(t=>String(t.task).startsWith("wfb:bp:")).sort((a,c)=>new Date(a.created_at)-new Date(c.created_at)).map(t=>bkDec(t.title)).filter(Boolean).pop()||null;
    return {raw, ev, bp, asg, bpAny};
  }catch(_){ return {raw:[], ev:null, bp:null}; }
}
async function evSave(s,y,mo,o){ await rpc("admin_assign_task",{p_student:String(s.id),p_username:s.username,p_task:"wfb:ev:"+mkey(y,mo),p_title:evEnc(o)}); }

/* ---------- Diálogo ---------- */
const WRITTEN_TXT="Se evaluó grammar, vocabulary, writing, reading y phonics";
window.openReport=function(s, rows){
  const now=new Date(), opts=[];
  for(let i=0;i<6;i++){ const d=new Date(now.getFullYear(), now.getMonth()-i, 1); opts.push([d.getFullYear(), d.getMonth()]); }
  const w=document.createElement("div"); w.className="rep-wrap";
  w.innerHTML=`<div class="sheet" role="dialog" aria-modal="true" style="max-height:92vh;overflow:auto"><button class="x" aria-label="Cerrar">×</button>
    <h2>Boleta mensual</h2><p class="sub">${e(s.full_name)}</p>
    <label class="f" for="bMonth">Mes</label><select class="in" id="bMonth">${opts.map(([y,m],i)=>`<option value="${y}-${m}" ${i===0?"selected":""}>${MESES[m]} ${y}</option>`).join("")}</select>
    <label class="f" for="bW">Calificación del quiz escrito</label><input class="in" id="bW" inputmode="decimal" placeholder="Ej. 9.7 o 97">
    <p class="sub" style="margin:6px 2px 0;font-size:12.5px">En la boleta dirá: «${WRITTEN_TXT}».</p>
    <details style="margin-top:8px"><summary style="cursor:pointer;font-weight:700;font-size:14px">Speaking (opcional)</summary>
      <label class="f" for="bS">Nivel</label><select class="in" id="bS"><option value="">Sin evaluar</option>${SPK.map(x=>`<option>${x}</option>`).join("")}</select>
      <label class="f" for="bSc">Comentario breve</label><input class="in" id="bSc" placeholder="Ej. Participa cada vez con mayor seguridad">
    </details>
    <label class="f" for="bN">Observaciones de la maestra</label>
    <textarea class="in" id="bN" rows="5" placeholder="Lo que quieres que lean los papás."></textarea>
    <details style="margin-top:8px"><summary style="cursor:pointer;font-weight:700;font-size:14px">Próxima evaluación (sale en todas las boletas del mes)</summary>
      <label class="f" for="bNt">Título</label><input class="in" id="bNt">
      <label class="f" for="bNd">Fecha</label><input class="in" id="bNd">
      <label class="f" for="bNx">Descripción</label><input class="in" id="bNx">
    </details>
    <div class="actions"><button class="btn btn-primary" id="bGo">Boleta para papás</button><button class="btn btn-soft" id="bInt">Reporte interno (PDF)</button></div>
    <div class="msg" id="bMsg"></div></div>`;
  document.body.appendChild(w);
  const $w=q=>w.querySelector(q), close=()=>w.remove(), msg=$w("#bMsg");
  w.addEventListener("click",ev=>{ if(ev.target===w) close(); }); $w(".x").onclick=close;
  let cur={raw:[],ev:null,bp:null};
  const ym=()=>$w("#bMonth").value.split("-").map(Number);
  const fill=async()=>{ const [y,mo]=ym(); msg.className="msg"; msg.textContent="Cargando…";
    cur=await evLoad(s,y,mo); const v=cur.ev||{};
    $w("#bW").value=v.w!=null?v.w:""; $w("#bN").value=v.n||""; $w("#bS").value=v.sp||""; $w("#bSc").value=v.spc||"";
    const nx=getNext(y,mo); $w("#bNt").value=nx.t; $w("#bNd").value=nx.d; $w("#bNx").value=nx.x;
    msg.textContent=(cur.ev?"Datos guardados de este mes cargados. ":"")+(cur.bp?"":"Para que salgan los temas del libro, registre en Libros las unidades vistas este mes."); };
  $w("#bMonth").onchange=fill; fill();
  const read=()=>{ let wv=String($w("#bW").value).replace(",",".").trim(), wn=parseFloat(wv); if(!isNaN(wn)&&wn>10) wn=wn/10;
    return {w:isNaN(wn)?null:Math.round(wn*10)/10, n:$w("#bN").value.trim(), sp:$w("#bS").value, spc:$w("#bSc").value.trim()}; };
  $w("#bGo").onclick=async function(){
    const [y,mo]=ym(), o=read(), b=this; b.disabled=true; msg.className="msg"; msg.textContent="Guardando…";
    setNext(y,mo,{t:$w("#bNt").value.trim(),d:$w("#bNd").value.trim(),x:$w("#bNx").value.trim()});
    try{ await evSave(s,y,mo,o); }catch(_){ msg.className="msg err"; msg.textContent="No se pudieron guardar los datos, pero la boleta se abrirá igual."; }
    const win=window.open("","_blank"); if(!win){ msg.className="msg err"; msg.textContent="Permite ventanas emergentes para ver la boleta."; b.disabled=false; return; }
    win.document.write(buildBoleta(s,rows,y,mo,o,cur,getNext(y,mo))); win.document.close();
    msg.className="msg ok"; msg.textContent="Boleta abierta en otra pestaña. Ahí puedes guardarla en PDF."; b.disabled=false;
  };
  $w("#bInt").onclick=async function(){
    const [y,mo]=ym(), b=this; b.disabled=true; msg.className="msg"; msg.textContent="Preparando el reporte interno…";
    try{ const file=await buildReport(s, rows, y, mo, $w("#bN").value.trim());
      const a=document.createElement("a"); a.href=URL.createObjectURL(file); a.download=file.name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),4000);
      msg.className="msg ok"; msg.textContent="Reporte interno descargado."; }
    catch(_){ msg.className="msg err"; msg.textContent="No se pudo generar el reporte interno."; }
    b.disabled=false;
  };
};

/* ---------- Boleta ---------- */
function buildBoleta(s, all, y, mo, ev, cur, nx){
  const nm=s.full_name, first=String(nm).split(/\s+/)[0];
  const rows=all.filter(r=>{ const d=new Date(r.created_at); return d.getFullYear()===y&&d.getMonth()===mo; });
  const tasks=tkClean(cur.raw||[]).filter(t=>{ const d=new Date(t.created_at); return d.getFullYear()===y&&d.getMonth()===mo; })
    .map(t=>({t,done:taskDoneRow(t,all)})).sort((a,b)=>new Date(a.t.created_at)-new Date(b.t.created_at));
  const tN=t=>String(t.task).includes("~")?t.title:(TASK_NAME[t.task]||String(t.title||"").replace(/ · due .*$/,"").replace(/ · by .*$/,""));
  const fd=d=>new Date(d).toLocaleDateString("es-MX",{day:"numeric",month:"short"});
  const pct=x=>x.done&&x.done.total?Math.round(x.done.score/x.done.total*100):null;
  /* Quiz digital */
  const mq=rows.filter(r=>r.activity==="monthly-quiz"&&r.total).sort((a,b)=>new Date(b.created_at)-new Date(a.created_at))[0]||null;
  const dg=mq?Math.round(mq.score/mq.total*100)/10:null;
  /* Desglose del quiz escrito: "Grammar 8/8, Vocabulary 8/8…" */
  const wby={}; String(ev.wb||"").replace(/([A-Za-zÁÉÍÓÚáéíóúñÑ&][A-Za-zÁÉÍÓÚáéíóúñÑ& ]*?)\s*:?\s*(\d+)\s*\/\s*(\d+)/g,(_,k,a,b)=>{ k=k.trim(); k=k.charAt(0).toUpperCase()+k.slice(1); wby[k]=[+a,+b]; return ""; });
  const by=(mq&&mq.detail&&mq.detail.by)||(Object.keys(wby).length?wby:{});
  const wsg=Object.keys(wby).map(k=>`<div><span>${e(k)}</span><b>${wby[k][0]}/${wby[k][1]}</b></div>`).join("");
  const wg=ev.w;
  const bigW = wg!=null && (dg==null || wg>=dg);
  /* Libro */
  const BB=window.MOVA_BOOKS||{}, bp=cur.bp||cur.bpAny||null, book=bp&&BB[bp.b]?BB[bp.b]:null;
  const asgB=cur.asg&&cur.asg.b&&BB[cur.asg.b]?BB[cur.asg.b]:null, defB=(typeof bkDefault==="function"&&BB[bkDefault(s)])?BB[bkDefault(s)]:null, bookName=book?book.name:(asgB?asgB.name:(defB?defB.name:""));
  const bt=book?bkTopics(bp.b,bp.f,bp.t):{g:[],v:[]};
  const bookLine=book?`${book.name}, ${bkRange(bp)}`:(s.stage||"");
  /* Lo que aprendió: temas en inglés + descripción pedagógica */
  const grp=grpOf(s.stage), kid=/^(Kids|Children)$/.test(grp);
  const used=new Set(), gl=[];
  const addG=t=>{ const d=gdesc(t,kid); if(used.has(d)||gl.length>=6) return; used.add(d); gl.push(`<li><b>${e(gname(t))}:</b> ${d}</li>`); };
  bt.g.forEach(addG);
  const tg=tasks.filter(x=>tkSubj(x.t)==="en"&&!/^(monthly-quiz|module-exam|level-up|toefl|wfb)/.test(taskKeyOf(x.t))).map(x=>tN(x.t).replace(/ · .*$/,""));
  if(gl.length<3) tg.forEach(addG);
  const vg=[], VC={"academic words":"#FFF1C9","key words":"#E5E9FF","literary words":"#DDF5E8","measurement":"#F1ECFB"};
  let ws=null; const topics=[];
  bt.v.forEach(x=>{ const m=String(x).match(/^([^:]{3,30}):\s*(.+)$/);
    if(m&&/word study/i.test(m[1])){ ws=m[2].trim(); return; }
    if(m){ vg.push([m[1].trim(),m[2].split(/\s*,\s*/).filter(Boolean)]); return; }
    if(/,/.test(x)) vg.push(["Content words",String(x).split(/\s*,\s*/).filter(Boolean)]); else topics.push(x); });
  if(topics.length) vg.unshift(["Temas de vocabulario",topics]);
  const chips=(ws2,c)=>ws2.slice(0,12).map(w=>`<span class="wd" style="background:${c}">${e(w)}</span>`).join("");
  let vh=vg.map(([l,ws2],i)=>`<div class="wl"><small>${e(l)}</small><div>${chips(ws2,VC[l.toLowerCase()]||["#FFF1C9","#E5E9FF","#DDF5E8","#FFE6F2"][i%4])}</div></div>`).join("");
  if(ws){ const hom=/homophone/i.test(ws); vh+=`<div class="wl"><small>Word study · ${e(ws.charAt(0).toUpperCase()+ws.slice(1))}</small><div style="font-size:11.3px;color:#2E3348">${hom?`Distingue palabras que suenan igual pero difieren en escritura y significado: <span class="wd" style="background:#FFE6F2">their / there</span> <span class="wd" style="background:#FFE6F2">to / two</span> <span class="wd" style="background:#FFE6F2">won / one</span>`:`Analiza la formación de palabras para ampliar su vocabulario y comprender términos nuevos.`}</div></div>`; }
  const uT=book?book.units.filter(u=>u.n>=+bp.f&&u.n<=+bp.t).map(u=>u.t).filter(t=>t&&!/^Unit\b/i.test(t)):[];
  const theme=uT.length?uT[uT.length-1]:"";
  const qq=k=>by[k]&&by[k][1]?`, con un desempeño de ${by[k][0]} de ${by[k][1]} en el quiz`:"";
  const rl=[`<li><b>Reading:</b> ${kid?`lee textos breves${theme?` sobre <i>${e(theme)}</i>`:" relacionados con la unidad"}, identifica información específica y responde preguntas de comprensión.`:`a partir de textos académicos y literarios${theme?` sobre <i>${e(theme)}</i>`:" de la unidad"}, identifica la idea principal, realiza inferencias y analiza los recursos que utiliza el autor.`}</li>`,
    `<li><b>Listening:</b> ${kid?"comprende instrucciones, diálogos y audios breves relacionados con los temas de la unidad":"comprende información general y específica en audios de nivel académico"}${qq("Listening")}.</li>`];
  const cx=bt.g.some(t=>/complex|compound|subordinat/i.test(t));
  const wl2=[`<li><b>Writing:</b> ${kid?"escribe oraciones sencillas aplicando el vocabulario y las estructuras trabajadas":cx?"integra oraciones compuestas y complejas para explicar y sustentar sus ideas con mayor claridad":"redacta oraciones y textos breves aplicando la gramática y el vocabulario de la unidad, con ideas cada vez más claras"}.</li>`,
    `<li><b>Speaking:</b> ${kid?"participa en diálogos breves y responde preguntas en clase utilizando las estructuras de la unidad.":"argumenta su postura sobre los temas de la unidad; su seguridad al expresarse se fortalece semana a semana."}</li>`];
  const rowsC=[];
  if(gl.length) rowsC.push(`<div class="tr"><div class="h" style="--c:#8EC9EE"><b>Grammar</b><small>Lo que ya puede hacer</small></div><ul>${gl.join("")}</ul></div>`);
  if(vh) rowsC.push(`<div class="tr"><div class="h" style="--c:#F6D776"><b>Vocabulary</b>${book?`<small>${e(bkRange(bp).replace(/^Units? /,m=>m.trim()==="Units"?"Unidades ":"Unidad "))}</small>`:""}</div><div class="vw">${vh}</div></div>`);
  rowsC.push(`<div class="tr"><div class="h" style="--c:#9DDCC0"><b>Reading &amp; Listening</b></div><ul>${rl.join("")}</ul></div>`);
  rowsC.push(`<div class="tr"><div class="h" style="--c:#FF8FC0"><b>Writing &amp; Speaking</b></div><ul>${wl2.join("")}</ul></div>`);
  const areas=rowsC.join("");
  const unitLbl=book?bkRange(bp).replace(/^Units /,"Unidades ").replace(/^Unit /,"Unidad "):"";
  /* Fortalezas y áreas */
  const QL2=Object.assign({},QL,{Vocabulary:"Vocabulario de la unidad",Grammar:"Gramática de la unidad"});
  const fo=[], ar=[], seen=new Set();
  Object.keys(by).forEach(k=>{ const v=by[k]; if(!v||!v[1]) return; const p=v[0]/v[1]; (p>=0.8?fo:ar).push([QL2[k]||k,`${v[0]}/${v[1]}`,p]); });
  if(fo.length<4&&wg!=null&&wg>=8.5) fo.push(["Quiz escrito",wg.toFixed(1),wg/10]);
  tasks.forEach(x=>{ const p=pct(x); if(p==null||p>=70) return; const n=tN(x.t).replace(/ · .*$/,""); if(seen.has(n.toLowerCase())) return; seen.add(n.toLowerCase()); ar.push([n,"Gramática",p/100]); });
  if(ev.sp&&SPK_PCT[ev.sp]<85) ar.push(["Fluidez al hablar","Speaking",SPK_PCT[ev.sp]/100]); else if(ev.sp) fo.push(["Expresión oral","Speaking",SPK_PCT[ev.sp]/100]);
  if(ev.sp&&SPK_PCT[ev.sp]>=65&&SPK_PCT[ev.sp]<85&&fo.length<4) fo.push(["Seguridad al expresarse","Speaking",SPK_PCT[ev.sp]/100]);
  fo.sort((a,b)=>b[2]-a[2]); ar.sort((a,b)=>a[2]-b[2]);
  const li2=a=>`<div><span>${e(a[0])}</span><b>${e(a[1])}</b></div>`;
  /* Resultados */
  const spP=SPK_PCT[ev.sp]||0;
  const skg=Object.keys(by).map(k=>`<div><span>${e(k)}</span><b>${by[k][0]}/${by[k][1]}</b></div>`).join("");
  const wCard=(main)=>`<div class="e${main?" main":""}"><span class="lb">QUIZ ESCRITO</span>${main?`<div class="sc">${wg.toFixed(1)}<small>/10</small></div>`:`<div style="display:flex;align-items:baseline;gap:8px"><span class="sc2">${wg.toFixed(1)}</span><p>${ev.wn?ev.wn+" reactivos":""}</p></div>`}<p contenteditable="true">${WRITTEN_TXT}.</p>${main&&wsg?`<div class="sg">${wsg}</div>`:""}${main&&dg!=null?`<span class="tag">Mejor resultado del mes</span>`:""}</div>`;
  const dCard=(main)=>dg==null?`<div class="e"><span class="lb">QUIZ DIGITAL</span><p>Sin quiz digital registrado este mes.</p></div>`:`<div class="e${main?" main":""}"><span class="lb">QUIZ DIGITAL</span><div style="display:flex;align-items:baseline;gap:8px"><span class="${main?"sc":"sc2"}">${dg.toFixed(1)}</span><p>${mq.score} de ${mq.total} aciertos</p></div>${skg?`<div class="sg">${skg}</div>`:""}${main&&wg!=null?`<span class="tag">Mejor resultado del mes</span>`:""}</div>`;
  const sCard=`<div class="e"><span class="lb">SPEAKING</span><span class="sc2" style="font-size:20px">${e(ev.sp||"—")}</span><p contenteditable="true">${e(ev.sp?(ev.spc||"Evaluación en clase."):"Sin evaluación de speaking este mes.")}</p></div>`;
  const sC = ev.sp ? sCard : "";
  const res = wg==null&&dg==null ? `<div class="e"><p>Este mes no hay quizzes registrados.</p></div>` : dg==null ? wCard(true)+sC : bigW ? wCard(true)+dCard(false)+sC : dCard(true)+(wg!=null?wCard(false):"")+sC;
  const nCards = (wg!=null?1:0)+(dg!=null?1:0)+(ev.sp?1:0);
  const evCols = nCards<=1 ? ' style="grid-template-columns:1fr"' : wg!=null&&dg==null ? ' style="grid-template-columns:1.5fr 1fr"' : "";
  /* Página 2 */
  const days=new Set(rows.map(r=>new Date(r.created_at).getDate()));
  const fst=new Date(y,mo,1), dim=new Date(y,mo+1,0).getDate(), lead=(fst.getDay()+6)%7;
  let cal=["L","M","M","J","V","S","D"].map(d=>`<em>${d}</em>`).join(""); for(let i=0;i<lead;i++) cal+="<u></u>"; for(let d=1;d<=dim;d++) cal+=`<u class="${days.has(d)?"on":""}">${d}</u>`;
  let streak=0,run=0; for(let d=1;d<=dim;d++){ run=days.has(d)?run+1:0; streak=Math.max(streak,run); }
  const tDone=tasks.filter(x=>x.done).length;
  const ini=String(nm).split(/\s+/).filter(Boolean).slice(0,3).map(w=>w[0]).join("").toUpperCase();
  const folio=`BMM-${String(y).slice(2)}${String(mo+1).padStart(2,"0")}-${ini}`;
  const base=location.href.replace(/[^/]*$/,"");
  const prog=(()=>{ const g=grpOf(s.stage); return g?(/^(Kids|Children|Teens)$/.test(g)?"MOVA "+g:g):""; })(), lv=lvOf(s.stage);
  const cierre=lastFriday(y,mo).toLocaleDateString("es-MX",{day:"numeric",month:"long",year:"numeric"});
  const stripe=`<div class="stripe"><span style="background:#FF8FC0"></span><span style="background:#8EC9EE"></span><span style="background:#F6D776"></span><span style="background:#9DDCC0"></span><span style="background:#B9A6E8"></span></div>`;
  const band=(k,t,r1,r2)=>`<div class="band"><img src="${base}icon-512.png" alt="MOVA"><div class="t"><div class="k">${k}</div><h1>${t}</h1></div><div class="r"><b>${r1}</b>${r2}</div></div>${stripe}`;
  const css=`@page{size:letter;margin:0}*{box-sizing:border-box}body{margin:0;background:#E9E7F0;font-family:Poppins,system-ui,sans-serif;color:#1B1F33;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.bar{position:sticky;top:0;z-index:5;background:#1E2A55;color:#fff;display:flex;gap:10px;align-items:center;justify-content:space-between;padding:10px 16px;font-size:13px}.bar button{background:#D3F36B;color:#15192B;border:0;border-radius:999px;padding:9px 16px;font:700 13px Poppins,sans-serif;cursor:pointer}
.pg{width:816px;height:1056px;margin:20px auto;background:#fff;position:relative;overflow:hidden;box-shadow:0 10px 30px -12px rgba(0,0,0,.25)}
.ct{transform-origin:top left;width:100%;height:100%;display:flex;flex-direction:column}
i{color:#1E2A55;font-weight:600}
.band{background:#1E2A55;color:#fff;padding:24px 48px 20px;display:flex;align-items:center;gap:18px}.band img{width:56px;height:56px;border-radius:14px}
.band .t{flex-grow:1}.band .k{font-size:11px;font-weight:700;letter-spacing:.18em;color:#AEB7DA}.band h1{margin:2px 0 0;font-size:28px;font-weight:800;line-height:1.05}
.band .r{text-align:right;font-size:12px;color:#C9D0EA;line-height:1.5}.band .r b{display:block;color:#D3F36B;font-size:14px}
.stripe{display:flex;height:5px}.stripe span{flex-grow:1}
.body{padding:14px 48px 0;display:flex;flex-direction:column;gap:9px;flex-grow:1}
.info{display:grid;grid-template-columns:1.8fr 1fr .6fr 1.1fr;border:1.5px solid #1E2A55;border-radius:10px;overflow:hidden}
.info div{padding:7px 14px;border-right:1px solid #DADDEA}.info div:last-child{border-right:0}.info span{display:block;font-size:9.5px;font-weight:700;letter-spacing:.12em;color:#6A6F85}.info b{font-size:13.5px;color:#1E2A55}
h2{margin:0;font-size:13px;font-weight:800;color:#1E2A55;letter-spacing:.06em;text-transform:uppercase;display:flex;align-items:center;gap:10px}h2:after{content:"";flex-grow:1;height:1.5px;background:#1E2A55;opacity:.18}
.ev{display:grid;grid-template-columns:1.05fr 1.4fr 1fr;gap:12px}
.e{border:1.5px solid #E3E5EE;border-radius:12px;padding:12px 14px;display:flex;flex-direction:column;gap:6px}.e.main{background:#1E2A55;color:#fff;border-color:#1E2A55}
.e .lb{font-size:10px;font-weight:700;letter-spacing:.12em;color:#6A6F85}.e.main .lb{color:#AEB7DA}
.e .sc{font-size:44px;font-weight:800;line-height:1;color:#1E2A55}.e.main .sc{color:#fff}.e .sc small{font-size:14px;font-weight:600;opacity:.6;margin-left:3px}
.e p{margin:0;font-size:11.3px;line-height:1.4;color:#4E5468}.e.main p{color:#DCE1F2}
.e .tag{align-self:flex-start;background:#D3F36B;color:#15192B;font-size:10.5px;font-weight:700;border-radius:6px;padding:2px 8px}
.sg{display:grid;grid-template-columns:1fr 1fr;gap:3px 14px;margin-top:2px}.sg div{display:flex;justify-content:space-between;font-size:11.3px;border-bottom:1px solid #EEF0F5;padding:2px 0}.sg b{color:#1E2A55}.e.main .sg div{border-color:rgba(255,255,255,.15)}.e.main .sg b{color:#D3F36B}
.e .sc2{font-size:28px;font-weight:800;color:#1E2A55;line-height:1}
.tb{border:1.5px solid #E3E5EE;border-radius:12px;overflow:hidden}
.tr{display:grid;grid-template-columns:150px 1fr;border-bottom:1px solid #E3E5EE}.tr:last-child{border-bottom:0}
.tr .h{padding:9px 14px;background:#F7F8FB;border-left:4px solid var(--c);display:flex;flex-direction:column;gap:2px}.tr .h b{font-size:12.8px;color:#1E2A55}.tr .h small{font-size:10px;font-weight:600;color:#6A6F85}
.tr ul{margin:0;padding:8px 14px;list-style:none;display:flex;flex-direction:column;gap:2px}.tr li{font-size:11.3px;line-height:1.38;color:#2E3348}.tr li b{color:#1E2A55}
.fr{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.vw{padding:8px 14px;display:flex;flex-direction:column;gap:6px}.wl small{display:block;font-size:10px;font-weight:700;letter-spacing:.08em;color:#6A6F85;text-transform:uppercase;margin-bottom:3px}
.wl div{display:flex;flex-wrap:wrap;gap:5px;align-items:center}.wd{font-size:11.3px;font-weight:600;color:#1E2A55;border-radius:999px;padding:2px 10px}
.tr .h{justify-content:center}.mini{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.mini div{border-top:4px solid var(--c);background:#F7F8FB;border-radius:10px;padding:8px 10px;display:flex;flex-direction:column}.mini b{font-size:20px;color:#1E2A55;line-height:1.1}.mini span{font-size:11px;color:#4E5468}
.fb{border:1.5px solid #E3E5EE;border-radius:12px;padding:10px 14px;display:flex;flex-direction:column;gap:4px;border-top:4px solid var(--c)}
.fb h3{margin:0 0 2px;font-size:13px;color:#1E2A55}.fb h3 small{font-weight:600;color:#6A6F85;font-size:11px;margin-left:6px}
.fb div{display:flex;justify-content:space-between;gap:8px;font-size:11.8px;padding:2px 0}.fb div b{color:#1E2A55;font-size:11.5px;white-space:nowrap}.fb p{margin:0;font-size:11.5px;color:#4E5468}
.ob{background:#F7F8FB;border-left:4px solid #1E2A55;border-radius:10px;padding:10px 16px;font-size:12.2px;line-height:1.55;color:#2E3348;white-space:pre-line}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.stats div{border:1.5px solid #E3E5EE;border-radius:12px;padding:8px 16px;display:flex;flex-direction:column;border-top:4px solid var(--c)}.stats b{font-size:22px;color:#1E2A55;line-height:1.15}.stats span{font-size:12px;color:#3D4258;font-weight:500}
.g2{display:grid;grid-template-columns:1.1fr 1fr;gap:12px}
.box{border:1.5px solid #E3E5EE;border-radius:12px;padding:10px 16px;display:flex;flex-direction:column;gap:5px}.box h3{margin:0 0 2px;font-size:13.5px;color:#1E2A55}
.ac{display:grid;grid-template-columns:10px 1fr auto;gap:10px;align-items:center;padding:4px 0;border-bottom:1px solid #F0EEF6}.ac:last-child{border-bottom:0}
.ac .dot{width:10px;height:10px;border-radius:50%}.ac b{font-size:12.5px;color:#1E2A55}.ac small{font-size:11px;color:#6A6F85}
.ac em{font-style:normal;font-size:11.5px;font-weight:700;color:#1E2A55;background:#F7F5FB;border-radius:999px;padding:3px 10px;white-space:nowrap}
.cal{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:11px}.cal em{font-style:normal;font-weight:700;color:#9095A8;font-size:11px}
.cal u{text-decoration:none;height:19px;width:19px;font-size:10.5px;margin:auto;display:grid;place-items:center;border-radius:50%;color:#3D4258}.cal u.on{background:#D3F36B;font-weight:700;color:#1E2A55}
.cap{margin:0;font-size:12px;color:#6A6F85}
.tk{display:grid;grid-template-columns:1fr 1fr;column-gap:22px}
.tk .row{display:grid;grid-template-columns:24px 1fr auto;gap:10px;align-items:center;padding:4px 0;border-bottom:1px solid #F0EEF6;font-size:12px}
.tk .row .c{width:22px;height:22px;border-radius:50%;display:grid;place-items:center}.tk .row .c i{width:7px;height:7px;border-radius:50%;background:#FF8FC0}
.tk .row small{display:block;font-size:11px;color:#6A6F85}.tk .row b.n{color:#1E2A55;font-weight:600}
.chip{font-size:11px;font-weight:700;border-radius:999px;padding:3px 10px;color:#1E2A55;white-space:nowrap}
.next{display:flex;gap:14px;align-items:center;background:#1E2A55;color:#fff;border-radius:12px;padding:10px 20px}.next b{font-size:14px}.next span{font-size:12.5px;color:#DCE1F2}
.next .d{background:#D3F36B;color:#15192B;border-radius:10px;padding:6px 12px;font-weight:800;font-size:13px;white-space:nowrap}
.sig{display:grid;grid-template-columns:1fr 1fr;gap:60px;padding:0 30px}.sig>div{display:flex;flex-direction:column;align-items:center;text-align:center}
.sig .s{position:relative;width:100%;height:50px}.sig .s img{position:absolute;left:50%;transform:translateX(-50%)}
.sig .l{width:100%;border-top:1.5px solid #1E2A55;padding-top:7px}.sig .l b{display:block;font-size:13.5px;color:#1E2A55}.sig .l span{font-size:12px;color:#4E5468}
.ft{display:flex;justify-content:space-between;font-size:10.5px;color:#6A6F85;padding:10px 48px 22px}
[contenteditable]{outline:1px dashed transparent;border-radius:6px}[contenteditable]:hover,[contenteditable]:focus{outline-color:#B9A6E8}
@media print{body{background:#fff}.bar{display:none}.pg{margin:0;box-shadow:none;page-break-after:always}[contenteditable]{outline:0!important}}
@media screen and (max-width:840px){.pg{transform:scale(calc(100vw/840));transform-origin:top left;margin:10px 0 calc((100vw/840 - 1)*1056px)}}`;
  const p1=`<div class="pg"><div class="ct">${band("MOVA CENTRO PEDAGÓGICO","Boleta Mensual",`${MESES[mo]} ${y} · Inglés`,"Folio "+folio)}
<div class="body">
<div class="info"><div><span>ALUMNO(A)</span><b>${e(nm)}</b></div><div><span>PROGRAMA</span><b>${e(prog||"—")}</b></div><div><span>NIVEL</span><b>${e(lv||"—")}</b></div><div><span>LIBRO</span><b>${e(bookName||"—")}</b></div></div>
<h2>Resultados de evaluación</h2><div class="ev"${evCols}>${res}</div>
<h2>Lo que aprendió este mes${unitLbl?" · "+e(unitLbl):""}</h2>
<div class="tb">${areas}</div>
<div class="fr">
 <div class="fb" style="--c:#9DDCC0"><h3>Fortalezas de ${MESES[mo].toLowerCase()}</h3>${fo.slice(0,4).map(li2).join("")||`<p>Seguimos construyendo sus bases.</p>`}</div>
 <div class="fb" style="--c:#F6D776"><h3>Áreas de reforzamiento<small>${MESES[(mo+1)%12]}</small></h3>${ar.slice(0,4).map(li2).join("")||`<p>Mantendremos el ritmo de trabajo.</p>`}</div>
</div></div>
<div class="ft"><span>MOVA Centro Pedagógico · Monterrey, N.L. · @movacp.mx</span><span>Página 1 de 2</span></div></div></div>`;
  const pracTxt=(tasks.length?(tDone===tasks.length?"Completó todas las tareas asignadas por su maestra":`Completó ${tDone} de ${tasks.length} tareas asignadas por su maestra`):"Trabajó en la plataforma como complemento de sus clases")+(days.size>=6?" y practicó de manera constante durante el mes, reforzando la gramática y la lectura de la unidad.":days.size>=1?`, con ${days.size} ${days.size===1?"día":"días"} de práctica durante el mes.`:".");
  const p2=`<div class="pg"><div class="ct">${band("BOLETA MENSUAL · "+MESES[mo].toUpperCase()+" "+y,"Su práctica y observaciones","MOVA Learning Studio",e(nm))}
<div class="body">
<div class="g2"><div class="box"><h3>Su práctica en la app</h3><div class="mini"><div style="--c:#FF8FC0"><b>${days.size}</b><span>${days.size===1?"día de práctica":"días de práctica"}</span></div><div style="--c:#8EC9EE"><b>${tasks.length?tDone+" de "+tasks.length:"—"}</b><span>tareas completadas</span></div><div style="--c:#F6D776"><b>${rows.length}</b><span>actividades realizadas</span></div></div><p class="cap" style="color:#3D4258;line-height:1.5">${pracTxt}</p></div>
<div class="box"><h3>Días que practicó</h3><div class="cal">${cal}</div></div></div>
<h2>Observaciones de la maestra</h2><div class="ob" contenteditable="true">${e(ev.n||"")}</div>
${nx&&nx.t?`<div class="next"><div style="flex-grow:1;display:flex;flex-direction:column"><b contenteditable="true">Próximo: ${e(nx.t)}</b><span contenteditable="true">${e(nx.x||"")}</span></div>${nx.d?`<span class="d" contenteditable="true">${e(nx.d)}</span>`:""}</div>`:""}
<div style="flex-grow:1"></div>
<div class="sig"><div><div class="s"><img src="${base}sig-karla.png" alt="" style="height:80px;bottom:-12px"></div><div class="l"><b>Miss Karla Rodríguez</b><span>Academic Coordinator</span></div></div>
<div><div class="s"><img src="${base}sig-letty.png" alt="" style="height:56px;bottom:-10px"></div><div class="l"><b>Miss Letty Rodríguez</b><span>ESL Instructor / TOEFL Specialist</span></div></div></div>
</div>
<div class="ft"><span>Monterrey, N.L. · ${e(cierre)} · @movacp.mx</span><span>Página 2 de 2</span></div></div></div>`;
  const fit=`<script>(function(){function fit(){document.querySelectorAll('.pg').forEach(function(pg){var ct=pg.querySelector('.ct');ct.style.transform='';ct.style.width='';ct.style.height='';var z=1;for(var i=0;i<20&&ct.scrollHeight>ct.clientHeight+1;i++){z-=0.02;ct.style.transform='scale('+z+')';ct.style.width=(100/z)+'%';ct.style.height=(100/z)+'%';}});}
if(document.fonts&&document.fonts.ready){document.fonts.ready.then(fit);}else{setTimeout(fit,400);}window.addEventListener('load',fit);document.addEventListener('input',function(){clearTimeout(window.__f);window.__f=setTimeout(fit,400);});})();<\/script>`;
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Boleta Mensual · ${e(nm)} · ${MESES[mo]} ${y}</title><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>${css}</style></head><body>
<div class="bar"><span>Boleta de ${e(first)} · puede editar los textos tocándolos</span><button onclick="window.print()">Guardar PDF / Imprimir</button></div>
${p1}${p2}${fit}</body></html>`;
}
window.MovaBoleta={build:buildBoleta};

/* ---------- Recordatorio: último viernes de cada mes ---------- */
function reminder(){
  try{
    const now=new Date(), lf=lastFriday(now.getFullYear(),now.getMonth());
    const days=Math.round((new Date(lf.getFullYear(),lf.getMonth(),lf.getDate())-new Date(now.getFullYear(),now.getMonth(),now.getDate()))/864e5);
    if(days<0||days>4) return;
    const key="mova_boleta_rem_"+now.toDateString(); try{ if(localStorage.getItem(key)) return; }catch(_){}
    const host=document.getElementById("v-students"); if(!host||document.getElementById("bolRem")) return;
    const fecha=lf.toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"});
    const d=document.createElement("div"); d.id="bolRem";
    d.style.cssText="display:flex;gap:12px;align-items:center;background:#1E2A55;color:#fff;border-radius:18px;padding:12px 16px;margin:0 0 14px;font-family:inherit";
    d.innerHTML=`<div style="width:38px;height:38px;border-radius:12px;background:#D3F36B;display:grid;place-items:center;flex:none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15192B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M4 10h16"/></svg></div>
      <div style="flex-grow:1;min-width:0"><b style="display:block;font-size:15px">${days===0?"Hoy se envían las boletas mensuales":"Boletas mensuales: faltan "+days+(days===1?" día":" días")}</b><span style="font-size:13px;color:#C9D0EA">El ${esc(fecha)} se mandan las boletas de ${MESES[now.getMonth()].toLowerCase()} a los papás. Ábrelas desde el perfil de cada alumno.</span></div>
      <button aria-label="Cerrar" style="background:none;border:0;color:#fff;font-size:22px;cursor:pointer;flex:none">×</button>`;
    d.querySelector("button").onclick=()=>{ try{ localStorage.setItem(key,"1"); }catch(_){} d.remove(); };
    host.insertBefore(d, host.firstChild);
  }catch(_){}
}
const obs=new MutationObserver(()=>{ const app=document.getElementById("app"); if(app&&!app.classList.contains("hidden")){ reminder(); } });
document.addEventListener("DOMContentLoaded",()=>{ const app=document.getElementById("app"); if(app) obs.observe(app,{attributes:true,attributeFilter:["class"]}); reminder(); });
if(document.readyState!=="loading"){ const app=document.getElementById("app"); if(app) obs.observe(app,{attributes:true,attributeFilter:["class"]}); reminder(); }
})();
