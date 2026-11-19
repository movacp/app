/* MOVA · temas nuevos y ejercicios variados (px) para los temas de los libros.
   Cada tema puede traer "px": lista de ejercicios variados (ver mova-px.js).
   "after": id del tema después del cual aparece en el nivel. */
(function(){
var NEW={
 children:{
  A2:[
   {after:"c-a2-4",id:"c-a2-11",t:"Could / Couldn't",s:"ability in the past",
    exp:["<b>could</b> = <b>can</b> in the past. We use it for things we were able to do.","Negative: <b>couldn't</b> (could not).","Questions: <b>Could you…?</b> Short answers: <b>Yes, I could. / No, I couldn't.</b>","After <b>could</b> the verb doesn't change: could <b>swim</b>, not could swam."],
    ex:[["When I was three, I could ride a tricycle.",""],["My dad couldn't swim when he was a child.",""],["Could you read when you were five?",""],["Yes, I could.",""]],
    b:["I could swim when I was six.","She couldn't ride a bike last year.","Could you read when you were four?","We couldn't go out because it was raining."],
    q:[["When I was four, I ___ ride a bike.",["could","can","will","must"],0,"Past ability: could + verb."],
       ["My baby brother ___ walk last year. He was too small.",["couldn't","can't","doesn't","won't"],0,"Negative past ability: couldn't."],
       ["___ you swim when you were five?",["Could","Can","Do","Are"],0,"Question about the past: Could + you + verb?"],
       ["Could Ana speak English when she was six? Yes, she ___.",["could","can","did","was"],0,"Short answer: Yes, she could."],
       ["I couldn't ___ the test. It was very difficult.",["finish","finished","to finish","finishing"],0,"After could / couldn't use the base verb."],
       ["We ___ play outside yesterday because it was raining.",["couldn't","can't","don't","aren't"],0,"Yesterday → past: couldn't."]],
    fx:[["She could swam when she was five.","She could swim when she was five.","After could use the base verb: swim."],
        ["I can't open the door yesterday.","I couldn't open the door yesterday.","Yesterday is past: couldn't."]],
    px:[
     {k:"match",p:[["When Mia was two,","she couldn't talk much."],["When I was ten,","I could ride a horse."],["Could your mom cook","when she was young?"],["We couldn't see the stars","because it was cloudy."]],why:"Read both parts together. Do they make sense?"},
     {k:"read",txt:"My name is Leo. When I was five, I could swim, but I couldn't ride a bike. My sister Sofi could ride a bike when she was four! Last summer we went to the beach. It was very windy, so we couldn't fly our kite.",
      tf:[["Leo could swim when he was five.",true],["Leo could ride a bike when he was five.",false],["Sofi could ride a bike when she was four.",true],["They could fly their kite at the beach.",false]],why:"Look for could and couldn't in the text."},
     {k:"pick",s:["My grandpa [could|can] speak three languages when he was young.","I [couldn't|can't] find my keys yesterday.","[Could|Did] you play the piano when you were six?","She could [dance|danced] very well."],why:"Past time → could / couldn't. After could → base verb."},
     {k:"ctx",box:["tie","climb","read","whistle","swim"],s:[["When I was four, I couldn't ___ my shoes.","tie"],["My cat could ___ the tree in two seconds!","climb"],["Could you ___ a book when you were five?","read"],["My brother could ___ like a bird.","whistle"]],why:"One word in the box is extra."},
     {k:"write",cue:"Tom / swim / when he was 4  ✓",a:["Tom could swim when he was 4.","Tom could swim when he was four."],why:"✓ = could + base verb."},
     {k:"write",cue:"Sara / ride a bike / last year  ✗",a:["Sara couldn't ride a bike last year.","Sara could not ride a bike last year.","Last year Sara couldn't ride a bike.","Last year, Sara couldn't ride a bike."],why:"✗ = couldn't + base verb."},
     {k:"write",lab:"MAKE A QUESTION",cue:"you / dance / when you were 5 ?",a:["Could you dance when you were 5?","Could you dance when you were five?"],why:"Question: Could + you + verb…?"},
     {k:"un",s:"Could your sister read when she was five?"},
     {k:"un",s:"I couldn't sleep because it was hot."}
    ]}
  ]
 }
};
var D=window.MOVA_PATH;if(!D)return;
for(var st in NEW)for(var lv in NEW[st]){var L=D[st]&&D[st][lv];if(!L)continue;
  NEW[st][lv].forEach(function(t){var ex=L.topics.filter(function(x){return x.id===t.id;})[0];
    if(ex){for(var k in t)if(k!=="after")ex[k]=t[k];return;}
    var i=-1;L.topics.forEach(function(x,j){if(x.id===t.after)i=j;});var c={};for(var k in t)if(k!=="after")c[k]=t[k];
    if(i<0)L.topics.push(c);else L.topics.splice(i+1,0,c);});}
/* px para temas que ya existen: MOVA_PX_ADD[id] = [...] */
var ADD=window.MOVA_PX_ADD||{};
for(var s in D)for(var l in D[s])D[s][l].topics.forEach(function(t){if(ADD[t.id])t.px=(t.px||[]).concat(ADD[t.id]);});
})();
