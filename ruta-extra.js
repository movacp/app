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
   ,{after:"c-a2-11",id:"c-a2-12",t:"Had to / Didn't have to",s:"obligation in the past",
    exp:["<b>had to</b> = <b>have to</b> in the past. It was necessary.","Negative: <b>didn't have to</b>. It wasn't necessary.","Questions: <b>Did you have to…?</b> Yes, I did. / No, I didn't.","Same form for everybody: I had to, she had to, they had to."],
    ex:[["I had to clean my room yesterday.",""],["We didn't have to wear a uniform on Friday.",""],["Did you have to study for the test?",""],["She couldn't go out because she had to help her mom.",""]],
    b:["I had to get up early.","He didn't have to do homework.","Did they have to wait long?","We had to walk to school."],
    q:[["Last night I ___ finish my project.",["had to","have to","must","has to"],0,"Past obligation: had to."],
       ["It was Sunday, so we ___ go to school.",["didn't have to","don't have to","hadn't to","mustn't"],0,"Not necessary in the past: didn't have to."],
       ["Did you ___ wear a costume?",["have to","had to","has to","having to"],0,"After did → have to (base form)."],
       ["My sister ___ take her medicine three times a day last week.",["had to","has to","have to","must"],0,"Last week → had to."],
       ["The bus didn't come, so we ___ walk.",["had to","have to","didn't have to","must"],0,"It was necessary → had to."],
       ["Did Leo have to pay? No, he ___.",["didn't","doesn't","hadn't","wasn't"],0,"Short answer: No, he didn't."]],
    fx:[["She had to went to the dentist.","She had to go to the dentist.","After had to use the base verb: go."],
        ["We didn't had to run.","We didn't have to run.","After didn't use have, not had."]],
    px:[
     {k:"match",p:[["I couldn't play outside","because I had to study."],["We didn't have to cook","because Grandma made dinner."],["Did you have to","wear a uniform?"],["Tom had to call his mom","because he was late."]],why:"Read both parts together. Do they make sense?"},
     {k:"read",txt:"Yesterday was a busy day for Emma. She had to get up at six because she had a swimming class. After school she had to do her homework and walk the dog. She didn't have to cook dinner because her dad made pizza. She was very tired, but she could watch a movie at night.",
      tf:[["Emma had to get up early.",true],["Emma didn't have to walk the dog.",false],["Emma had to cook dinner.",false],["Emma could watch a movie at night.",true]],why:"Look for had to and didn't have to in the text."},
     {k:"pick",s:["Yesterday I [had to|have to] wash the car.","It was a holiday, so we [didn't have to|had to] go to school.","Did you [have to|had to] wait for the bus?","She had to [make|made] her bed."],why:"Past time → had to / didn't have to. After did → have to."},
     {k:"ctx",box:["feed","tidy","wait","wear","sing"],s:[["I had to ___ my room before I could play.","tidy"],["We had to ___ for the bus for 30 minutes.","wait"],["Did you have to ___ a uniform at your old school?","wear"],["My brother had to ___ the cat every morning.","feed"]],why:"One word in the box is extra."},
     {k:"write",cue:"Mia / help her dad / yesterday  ✓",a:["Mia had to help her dad yesterday.","Yesterday Mia had to help her dad.","Yesterday, Mia had to help her dad."],why:"✓ = had to + base verb."},
     {k:"write",cue:"we / do homework / last weekend  ✗",a:["We didn't have to do homework last weekend.","We did not have to do homework last weekend.","Last weekend we didn't have to do homework.","Last weekend, we didn't have to do homework."],why:"✗ = didn't have to + base verb."},
     {k:"write",lab:"MAKE A QUESTION",cue:"you / study / for the test ?",a:["Did you have to study for the test?"],why:"Question: Did + you + have to + verb…?"},
     {k:"un",s:"Did your brother have to wear glasses?"},
     {k:"un",s:"I had to stay home because I was sick."}
    ]}
  ],
  "A1+":[
   {after:"c-a1p-8",id:"c-a1p-9",t:"Like / Love + -ing",s:"talking about hobbies",
    exp:["After <b>like, love, enjoy, hate</b> and <b>don't like</b> we use verb + <b>-ing</b>.","I love <b>swimming</b>. She doesn't like <b>cooking</b>.","Question: <b>What do you like doing?</b> / <b>Does he like dancing?</b>","Spelling: dance → danc<b>ing</b>, swim → swi<b>mming</b>, ride → rid<b>ing</b>."],
    ex:[["I love playing soccer with my friends.",""],["My sister doesn't like getting up early.",""],["What do you like doing on weekends?",""],["He enjoys reading comics.",""]],
    b:["I like playing video games.","She loves dancing.","They don't like doing homework.","What does he like doing?"],
    q:[["I love ___ in the pool.",["swimming","swim","to swimming","swims"],0,"Love + verb-ing: swimming."],
       ["My brother doesn't like ___ his room.",["cleaning","clean","cleans","cleaned"],0,"Don't / doesn't like + -ing."],
       ["What do you like ___ after school?",["doing","do","does","to doing"],0,"What do you like doing?"],
       ["She ___ riding her bike in the park.",["loves","love","loving","is love"],0,"She → loves."],
       ["Does Tom like ___? Yes, he does.",["skating","skate","skates","skated"],0,"Like + -ing: skating."],
       ["We hate ___ in line.",["waiting","wait","waits","to waiting"],0,"Hate + -ing: waiting."]],
    fx:[["I like swim in the sea.","I like swimming in the sea.","After like use verb + -ing."],
        ["She love dancing very much.","She loves dancing very much.","She → loves."]],
    px:[
     {k:"match",p:[["I love cooking,","so I help my dad in the kitchen."],["My sister hates waking up early,","so she is always late."],["Do you like drawing?","Yes, I do. I draw every day."],["He enjoys playing chess","with his grandpa."]],why:"Read both parts together. Do they make sense?"},
     {k:"read",txt:"Hi! I'm Valeria. I love dancing and singing. On Saturdays I go to a dance class with my best friend. My brother Diego doesn't like dancing. He likes playing basketball and watching movies. We both love eating pizza on Fridays!",
      tf:[["Valeria loves singing.",true],["Diego likes dancing.",false],["Diego enjoys watching movies.",true],["They don't like eating pizza.",false]],why:"Look for like, love and don't like in the text."},
     {k:"pick",s:["I love [reading|read] mystery books.","My dad [doesn't|don't] like driving at night.","Do you like [painting|paint]?","She [enjoys|enjoy] playing the piano."],why:"Like / love / enjoy + -ing. He / she → likes, loves, doesn't."},
     {k:"ctx",box:["baking","camping","skating","texting","flying"],s:[["My mom loves ___ cakes for our birthdays.","baking"],["We love ___ in the mountains. We sleep in a tent.","camping"],["I don't like ___ because I'm scared of planes.","flying"],["He likes ___ on the ice in winter.","skating"]],why:"One word in the box is extra."},
     {k:"write",cue:"Ana / love / play tennis  ✓",a:["Ana loves playing tennis."],why:"She → loves + verb-ing."},
     {k:"write",cue:"I / like / get up early  ✗",a:["I don't like getting up early.","I do not like getting up early."],why:"✗ = don't like + verb-ing."},
     {k:"write",lab:"MAKE A QUESTION",cue:"you / like / swim ?",a:["Do you like swimming?"],why:"Question: Do you like + verb-ing?"},
     {k:"un",s:"What does your sister like doing?"},
     {k:"un",s:"My friends enjoy playing soccer after school."}
    ]}
  ]
 },
 kids:{
  A1:[
   {after:"k-a1-3",id:"k-a1-9",t:"Do you have…?",s:"Questions with have",
    exp:["Ask: <b>Do you have</b> a pet? → <b>Yes, I do.</b> / <b>No, I don't.</b>","He, she, it: <b>Does he have</b> a bike? → <b>Yes, he does.</b> / <b>No, he doesn't.</b>","After does → <b>have</b> (not has)."],
    ex:[["Do you have a pencil? Yes, I do.",""],["Does she have a cat? No, she doesn't.",""],["Do they have a big house?",""],["Does your dog have a ball?",""]],
    b:["Do you have a red crayon?","Does he have a sister?","Yes, I do.","No, she doesn't."],
    q:[["___ you have a bike?",["Do","Does","Are","Is"],0,"You → Do you have…?"],
       ["___ she have a pet?",["Does","Do","Is","Has"],0,"She → Does she have…?"],
       ["Do you have a ruler? Yes, I ___.",["do","does","am","have"],0,"Yes, I do."],
       ["Does Tom have a brother? No, he ___.",["doesn't","don't","isn't","not"],0,"No, he doesn't."],
       ["Does your cat ___ a long tail?",["have","has","is","haves"],0,"After does → have."],
       ["___ they have a garden?",["Do","Does","Are","Has"],0,"They → Do they have…?"]],
    fx:[["Does she has a dog?","Does she have a dog?","After does → have."],
        ["Do he have a ball?","Does he have a ball?","He → Does."]],
    px:[
     {k:"match",p:[["Do you have a pet?","Yes, I do. I have a fish."],["Does he have glasses?","No, he doesn't."],["Do they have a car?","Yes, they do."],["Does she have a kite?","Yes, she does."]],why:"Look at the question: do → do, does → does."},
     {k:"read",txt:"This is Lily. She has a big dog. Its name is Max. Lily has a pink bike, but she doesn't have a scooter. Her brother Sam has a scooter.",
      tf:[["Does Lily have a dog? Yes, she does.",true],["Does Lily have a scooter? Yes, she does.",false],["Does Sam have a scooter? Yes, he does.",true]],why:"Read again: has and doesn't have."},
     {k:"pick",s:["[Do|Does] you have a pencil?","[Does|Do] he have a ball?","Yes, I [do|does].","No, she [doesn't|don't]."],why:"I, you, they → do. He, she, it → does."},
     {k:"ctx",box:["pet","ruler","sister","bike","hat"],s:[["Do you have a ___? Yes, a little cat!","pet"],["I want to measure. Do you have a ___?","ruler"],["Does he have a ___? Yes, her name is Ana.","sister"]],why:"Read each sentence. Which word makes sense?"},
     {k:"un",s:"Do you have a red crayon?"},
     {k:"un",s:"Does your dog have a ball?"},
     {k:"write",lab:"ANSWER",cue:"Do you have a pet?  ✓",a:["Yes, I do.","Yes I do","Yes, I do"],why:"✓ = Yes, I do."},
     {k:"write",lab:"ANSWER",cue:"Does she have a bike?  ✗",a:["No, she doesn't.","No she doesn't","No, she does not."],why:"✗ = No, she doesn't."}
    ]}
  ],
  "A1+":[
   {after:"k-a1p-4",id:"k-a1p-9",t:"He likes, she lives",s:"He / she + -s",
    exp:["With <b>he, she, it</b> the verb ends in <b>-s</b>: he like<b>s</b>, she live<b>s</b>, it eat<b>s</b>.","Some verbs add <b>-es</b>: watch → watch<b>es</b>, go → go<b>es</b>. Have → <b>has</b>.","No: he <b>doesn't</b> like. Question: <b>Does</b> she live…?"],
    ex:[["My mom likes coffee.",""],["The lion eats meat.",""],["He lives in a big house.",""],["She doesn't like spiders.",""]],
    b:["She likes ice cream.","He lives in Monterrey.","My cat eats fish.","He doesn't like rain."],
    q:[["My brother ___ soccer.",["likes","like","liking","is like"],0,"He → likes."],
       ["The monkey ___ bananas.",["eats","eat","eating","is eat"],0,"It → eats."],
       ["My grandma ___ in Saltillo.",["lives","live","living","is live"],0,"She → lives."],
       ["Sam ___ a big dog.",["has","have","haves","is"],0,"He → has."],
       ["She ___ like milk.",["doesn't","don't","isn't","not"],0,"She → doesn't."],
       ["Dad ___ TV at night.",["watches","watch","watchs","watching"],0,"Watch → watches."]],
    fx:[["She like apples.","She likes apples.","She → likes."],
        ["My dog eat bones.","My dog eats bones.","It → eats."]],
    px:[
     {k:"match",p:[["A cow","eats grass."],["A fish","lives in water."],["A bird","has wings."],["A frog","jumps very high."]],why:"Think about each animal."},
     {k:"read",txt:"This is my friend Leo. He lives in a small house. He has a cat. The cat likes milk. Leo likes pizza, but he doesn't like salad.",
      tf:[["Leo lives in a big house.",false],["Leo has a cat.",true],["Leo likes salad.",false]],why:"Read again: lives, has, likes."},
     {k:"pick",s:["My sister [likes|like] dolls.","The dog [eats|eat] meat.","He [lives|live] near the park.","She [doesn't|don't] like snakes."],why:"He, she, it → verb + s."},
     {k:"ctx",box:["eats","lives","has","likes","sleeps"],s:[["A panda ___ bamboo.","eats"],["My teacher ___ in a big city.","lives"],["A giraffe ___ a long neck.","has"]],why:"Read each sentence. Which word makes sense?"},
     {k:"un",s:"My dad likes chocolate cake."},
     {k:"un",s:"She lives in a blue house."},
     {k:"write",lab:"WRITE WITH HE",cue:"I like cats.  →  He…",a:["He likes cats."],why:"He → likes."},
     {k:"write",lab:"WRITE WITH SHE",cue:"I have a bike.  →  She…",a:["She has a bike."],why:"She → has."}
    ]}
  ]
 },
 teens:{
  A1:[
   {after:"t-a1-6",id:"t-a1-9",t:"Have got",s:"possession",
    exp:["<b>have got / has got</b> = have / has (very common in British English).","I / you / we / they <b>have got ('ve got)</b>. He / she / it <b>has got ('s got)</b>.","Negative: <b>haven't got / hasn't got</b>. Question: <b>Have you got…?</b> Yes, I have. / No, I haven't.","Don't use do with have got: <s>Do you have got…?</s>"],
    ex:[["I've got two brothers.",""],["She hasn't got a phone.",""],["Have you got a pen? Yes, I have.",""],["Has your school got a pool?",""]],
    b:["I've got a new laptop.","He hasn't got any pets.","Have you got a charger?","They've got a big garden."],
    q:[["My sister ___ got long hair.",["has","have","is","does"],0,"She → has got."],
       ["We ___ got any homework today.",["haven't","hasn't","don't","aren't"],0,"We → haven't got."],
       ["___ you got a spare pencil?",["Have","Has","Do","Are"],0,"Question: Have you got…?"],
       ["Has Lucas got a bike? No, he ___.",["hasn't","haven't","doesn't","isn't"],0,"Short answer: No, he hasn't."],
       ["Which sentence is correct?",["Have you got a pet?","Do you have got a pet?","Has you got a pet?","Are you got a pet?"],0,"No do with have got."],
       ["My parents ___ got a new car.",["have","has","are","is"],0,"They → have got."]],
    fx:[["She have got blue eyes.","She has got blue eyes.","She → has got."],
        ["Has you got a minute?","Have you got a minute?","You → Have you got…?"]],
    px:[
     {k:"match",p:[["Have you got a pen?","Yes, I have. Here you are."],["Has she got a brother?","No, she hasn't. She's an only child."],["Have they got a dog?","Yes, they have. It's called Rocky."],["Has your phone got a good camera?","Yes, it has."]],why:"Short answers repeat have / has."},
     {k:"read",txt:"Sofía is fourteen. She's got a twin brother called Mateo and a little sister. They haven't got a dog, but they've got two cats. Sofía has got a guitar and she plays it every day. Mateo hasn't got a guitar; he's got a skateboard.",
      tf:[["Sofía has got two brothers.",false],["The family has got two cats.",true],["Mateo has got a skateboard.",true],["Sofía hasn't got a guitar.",false]],why:"Look for 's got, 've got and haven't / hasn't got."},
     {k:"pick",s:["My best friend [has|have] got green eyes.","We [haven't|hasn't] got a car.","[Have|Do] you got any brothers?","[Has|Have] your city got a stadium?"],why:"He / she / it → has got. I / you / we / they → have got."},
     {k:"ctx",box:["charger","freckles","headache","garden","ticket"],s:[["My phone is dead. Have you got a ___?","charger"],["She's got red hair and lots of ___ on her face.","freckles"],["I can't go in. I haven't got a ___.","ticket"],["They've got a big ___ with lots of flowers.","garden"]],why:"One word in the box is extra."},
     {k:"write",cue:"my brother / a new phone  ✓",a:["My brother has got a new phone.","My brother's got a new phone."],why:"He → has got."},
     {k:"write",cue:"we / any milk  ✗",a:["We haven't got any milk.","We have not got any milk."],why:"✗ = haven't got."},
     {k:"write",lab:"MAKE A QUESTION",cue:"you / a laptop ?",a:["Have you got a laptop?"],why:"Have + you + got…?"},
     {k:"un",s:"Has your teacher got a car?"},
     {k:"un",s:"They haven't got any pets at home."}
    ]}
  ],
  "A1+":[
   {after:"t-a1p-4",id:"t-a1p-9",t:"Could / Couldn't",s:"past ability",
    exp:["<b>could</b> is the past of <b>can</b>: abilities and possibilities in the past.","Negative: <b>couldn't</b>. Question: <b>Could you…?</b> Yes, I could. / No, I couldn't.","<b>could</b> + base verb, the same for all persons: she could swim (not could swam, not coulds).","Common use: I couldn't sleep / find / hear / go because…"],
    ex:[["I could read when I was four.",""],["We couldn't hear the teacher because of the noise.",""],["Could you see the fireworks from your house?",""],["She couldn't come to the party; she was ill.",""]],
    b:["I couldn't find my keys this morning.","She could speak French when she was ten.","Could you understand the film?","They couldn't go out because of the storm."],
    q:[["When I was six, I ___ ride a bike without help.",["could","can","can to","could to"],0,"Past ability: could."],
       ["I ___ sleep last night. My neighbors were noisy.",["couldn't","can't","didn't could","wasn't able"],0,"Last night → couldn't."],
       ["___ you see the stage from your seat?",["Could","Did","Can","Were"],0,"Question in the past: Could you…?"],
       ["My grandmother could ___ three languages.",["speak","spoke","speaking","to speak"],0,"Could + base verb."],
       ["Could they finish the game? No, they ___.",["couldn't","didn't","can't","weren't"],0,"Short answer: No, they couldn't."],
       ["The test was easy, so I ___ answer all the questions.",["could","couldn't","can't","must"],0,"It was possible → could."]],
    fx:[["He could plays the drums at five.","He could play the drums at five.","Could + base verb."],
        ["We can't open the door yesterday.","We couldn't open the door yesterday.","Yesterday → couldn't."]],
    px:[
     {k:"match",p:[["I couldn't do my homework","because the internet was down."],["When she was little, she could","climb trees really fast."],["We couldn't see the mountains","because it was foggy."],["Could you hear the music","from the back of the room?"]],why:"Read both parts together. Do they make sense?"},
     {k:"read",txt:"Last summer Diego went to a surf camp. On the first day he couldn't stand on the board; he fell in the water again and again. By the end of the week he could ride small waves. His sister Paula was faster: she could stand up on day two! But neither of them could surf the big waves.",
      tf:[["Diego could stand on the board on the first day.",false],["At the end of the week Diego could ride small waves.",true],["Paula could stand up before Diego.",true],["They could surf the big waves.",false]],why:"Look for could and couldn't in the text."},
     {k:"pick",s:["I [couldn't|can't] find my phone yesterday.","At the age of five, Mozart [could|can] play the piano.","[Could|Did] you understand the instructions?","She could [run|ran] very fast."],why:"Past → could / couldn't. After could → base verb."},
     {k:"ctx",box:["afford","reach","hear","breathe","win"],s:[["The shelf was too high. I couldn't ___ it.","reach"],["The phones were too expensive. We couldn't ___ them.","afford"],["The music was so loud that I couldn't ___ you.","hear"],["The room was full of smoke. We couldn't ___.","breathe"]],why:"One word in the box is extra."},
     {k:"write",cue:"my dad / play the guitar / when he was young  ✓",a:["My dad could play the guitar when he was young.","When he was young, my dad could play the guitar.","When he was young my dad could play the guitar."],why:"✓ = could + base verb."},
     {k:"write",cue:"I / go to the party / because I was ill  ✗",a:["I couldn't go to the party because I was ill.","I could not go to the party because I was ill."],why:"✗ = couldn't + base verb."},
     {k:"write",lab:"MAKE A QUESTION",cue:"you / swim / when you were five ?",a:["Could you swim when you were five?","Could you swim when you were 5?"],why:"Could + you + verb…?"},
     {k:"un",s:"Could you see the fireworks from your window?"},
     {k:"un",s:"We couldn't play because it was raining."}
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
/* ---- Lote 2: Now I Know 4 (U5–6) y Now I Know 5 (U1–2) ---- */
(function(){
var D=window.MOVA_PATH;if(!D)return;
function find(id){for(var s in D)for(var l in D[s]){var t=D[s][l].topics.filter(function(x){return x.id===id;})[0];if(t)return t;}}
function addPx(id,arr){var t=find(id);if(t&&!(t.px||[]).length)t.px=arr;}
/* tema nuevo: adverbios */
var A2=D.children&&D.children.A2;
if(A2&&!A2.topics.some(function(x){return x.id==="c-a2-13";})){
 var i=-1;A2.topics.forEach(function(x,j){if(x.id==="c-a2-6")i=j;});
 A2.topics.splice(i+1,0,{id:"c-a2-13",t:"Adverbs: quickly, faster, the fastest",s:"adjectives vs. adverbs",
  exp:["Adjectives describe <b>nouns</b>: a <b>quick</b> runner. Adverbs describe <b>verbs</b>: she runs <b>quickly</b>.","Most adverbs = adjective + <b>-ly</b>: slow → slowly, careful → carefully, easy → eas<b>ily</b>.","Irregular: good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>.","Comparing: <b>faster, harder, better, more carefully</b> than… / the <b>fastest, best, most carefully</b>."],
  ex:[["She is a careful driver. She drives carefully.",""],["Leo plays the piano very well.",""],["My dad works harder than anyone.",""],["Who can run the fastest in your class?",""]],
  b:["He speaks English very well.","Please walk slowly.","She can swim faster than me.","Who sings the most beautifully?"],
  q:[["Mia is a very ___ swimmer.",["fast","fastly","faster than","most fast"],0,"Swimmer is a noun → adjective: fast."],
     ["Please speak ___. The baby is sleeping.",["quietly","quiet","quieter","quietest"],0,"Speak is a verb → adverb: quietly."],
     ["Leo plays the guitar very ___.",["well","good","better","goodly"],0,"Good → well (adverb)."],
     ["My dad drives ___ than my mom.",["more carefully","carefuller","careful","most carefully"],0,"Long adverbs: more carefully than."],
     ["Who can run the ___ in your class?",["fastest","faster","fast","most fast"],0,"Superlative: the fastest."],
     ["She did the exam ___ than me. She got 10!",["better","well","best","gooder"],0,"Well → better than."]],
  fx:[["He sings very good.","He sings very well.","Sing is a verb → adverb: well."],
      ["She works hardly every day.","She works hard every day.","Hard is irregular: hard, not hardly."]],
  px:[
   {k:"match",p:[["A pilot has to fly","very carefully."],["A good dancer moves","gracefully to the music."],["Usain Bolt ran","the fastest in the world."],["My grandma speaks","more slowly than my mom."]],why:"Read both parts together. Do they make sense?"},
   {k:"read",txt:"Three friends want to be in the school talent show. Ana sings beautifully and plays the piano well. Pablo dances faster than anyone in his class, but he sings badly. Lu draws the most creatively of the three. Their teacher says they all practice very hard.",
    tf:[["Ana plays the piano well.",true],["Pablo sings beautifully.",false],["Lu draws the most creatively.",true],["The friends don't practice much.",false]],why:"Look for the adverbs in the text."},
   {k:"pick",s:["The firefighter worked [bravely|brave] all night.","My brother is a [good|well] painter.","She speaks English [more fluently|fluentlier] than her sister.","Of all the players, Leo kicks the ball the [hardest|most hard]."],why:"Noun → adjective. Verb → adverb."},
   {k:"ctx",box:["talented","skill","creative","practice","lazy"],s:[["She is very ___. She can sing, dance and act.","talented"],["Cooking is a useful ___ for life.","skill"],["Artists need to be ___ and have new ideas.","creative"],["If you ___ every day, you will play better.","practice"]],why:"One word in the box is extra."},
   {k:"write",lab:"CHANGE THE SENTENCE",cue:"Sara is a careful driver.  →  Sara drives…",a:["Sara drives carefully."],why:"Careful → carefully."},
   {k:"write",lab:"CHANGE THE SENTENCE",cue:"Leo is a good singer.  →  Leo sings…",a:["Leo sings well.","Leo sings very well."],why:"Good → well."},
   {k:"write",lab:"COMPARE",cue:"My cousin swims fast. I swim faster.  →  I swim…",a:["I swim faster than my cousin.","I swim faster than my cousin does."],why:"Faster than…"},
   {k:"un",s:"Who can solve the problem the most quickly?"},
   {k:"un",s:"A vet has to work very carefully."}
  ]});
}
addPx("c-a2-10",[
 {k:"match",p:[["You mustn't touch the lava.","It's extremely hot."],["In the desert, you have to drink","a lot of water."],["It's Sunday, so we don't have to","get up early."],["Climbers must wear","warm clothes on the mountain."]],why:"Read both parts together. Do they make sense?"},
 {k:"read",txt:"Volcano Tour Rules. Visitors must stay with the guide at all times. You have to wear strong boots because the rocks are sharp. You mustn't go near the crater. You don't have to bring water; we give everyone a bottle.",
  tf:[["Visitors can walk alone.",false],["You have to wear strong boots.",true],["You must bring your own water.",false],["You mustn't go near the crater.",true]],why:"mustn't = not allowed. don't have to = not necessary."},
 {k:"pick",s:["You [mustn't|don't have to] swim here. It's dangerous!","It's a holiday. We [don't have to|mustn't] go to school.","My sister [has to|have to] wear glasses.","Do you [have to|must] wear a uniform?"],why:"mustn't = not allowed. don't have to = not necessary."},
 {k:"ctx",box:["shiver","sweat","lava","erupt","ash"],s:[["When it's very cold, our bodies ___ to get warm.","shiver"],["When it's very hot, we ___ and need to drink water.","sweat"],["Hot ___ came out of the volcano and ran down the mountain.","lava"],["The volcano can ___ at any time. People must leave!","erupt"]],why:"One word in the box is extra."},
 {k:"write",lab:"WRITE THE RULE",cue:"not allowed: you / run / near the pool",a:["You mustn't run near the pool.","You must not run near the pool."],why:"Not allowed → mustn't."},
 {k:"write",lab:"NOT NECESSARY",cue:"we / bring / lunch tomorrow",a:["We don't have to bring lunch tomorrow.","We do not have to bring lunch tomorrow.","Tomorrow we don't have to bring lunch."],why:"Not necessary → don't have to."},
 {k:"write",lab:"NECESSARY",cue:"she / wear / a helmet",a:["She has to wear a helmet.","She must wear a helmet."],why:"She → has to."},
 {k:"un",s:"Do we have to wear special clothes?"},
 {k:"un",s:"You mustn't climb the volcano without a guide."}
]);
addPx("c-a2-2",[
 {k:"match",p:[["Thomas Edison","improved the light bulb."],["Marie Curie","discovered radium."],["Alexander Graham Bell","invented the telephone."],["The Wright brothers","designed the first airplane."]],why:"Famous inventors and scientists."},
 {k:"read",txt:"Last Saturday my brother and I visited a science museum. We watched a video about inventions and learned about Edison. Then we played with robots and tried a virtual reality game. My brother loved the robots, but I preferred the space room. We stayed there all day!",
  tf:[["They visited a science museum.",true],["They watched a video about animals.",false],["The brother loved the robots.",true],["They stayed for one hour.",false]],why:"Look for the verbs with -ed."},
 {k:"pick",s:["Yesterday I [watched|watch] a movie about robots.","She [studied|studyed] for her science test.","We [stopped|stoped] at a gas station.","They [didn't invent|didn't invented] the internet."],why:"Spelling: study → studied, stop → stopped. After didn't → base verb."},
 {k:"ctx",box:["recorded","printed","discovered","designed","invented"],s:[["Edison ___ his voice on a machine in 1877.","recorded"],["Gutenberg ___ books with his new machine.","printed"],["Marie Curie ___ two new elements.","discovered"],["An engineer ___ the new bridge.","designed"]],why:"One word in the box is extra."},
 {k:"write",cue:"yesterday: I / play / video games",a:["I played video games yesterday.","Yesterday I played video games.","Yesterday, I played video games."],why:"Regular verbs: + -ed."},
 {k:"write",cue:"last week: my mom / study / English",a:["My mom studied English last week.","Last week my mom studied English.","Last week, my mom studied English."],why:"study → studied."},
 {k:"write",cue:"last night: we / watch / TV  ✗",a:["We didn't watch TV last night.","We did not watch TV last night.","Last night we didn't watch TV.","Last night, we didn't watch TV."],why:"✗ = didn't + base verb."},
 {k:"un",s:"Did you visit the museum last weekend?"},
 {k:"un",s:"My grandpa repaired an old radio."}
]);
addPx("c-a2-3",[
 {k:"match",h:"Match the verb with its past form.",p:[["go","went"],["eat","ate"],["see","saw"],["buy","bought"],["make","made"]],why:"Irregular verbs don't use -ed."},
 {k:"read",txt:"When Ana was ten, she made a small robot for the science fair. She found old parts at home and built it in two weeks. On the day of the fair, the robot didn't move! Ana felt sad, but then she saw a loose cable. She fixed it, and the robot won first prize.",
  tf:[["Ana bought new parts for the robot.",false],["She built the robot in two weeks.",true],["The robot moved at first.",false],["The robot won a prize.",true]],why:"Look for the irregular verbs: made, found, built, saw, won."},
 {k:"pick",s:["Last summer we [went|goed] to the beach.","I [saw|seed] a shooting star last night.","She [didn't buy|didn't bought] anything.","They [made|maked] a cake for Mom."],why:"Irregular past forms. After didn't → base verb."},
 {k:"ctx",box:["took","gave","broke","flew","wrote"],s:[["I ___ a lot of photos on my trip.","took"],["My friend ___ me a present for my birthday.","gave"],["I ___ my arm when I fell off my bike.","broke"],["We ___ to Cancún by plane.","flew"]],why:"One word in the box is extra."},
 {k:"write",cue:"last weekend: we / go / to the cinema",a:["We went to the cinema last weekend.","Last weekend we went to the cinema.","Last weekend, we went to the cinema."],why:"go → went."},
 {k:"write",cue:"this morning: she / have / cereal for breakfast",a:["She had cereal for breakfast this morning.","This morning she had cereal for breakfast.","This morning, she had cereal for breakfast."],why:"have → had."},
 {k:"write",lab:"MAKE A QUESTION",cue:"you / see / the game yesterday ?",a:["Did you see the game yesterday?"],why:"Did + you + base verb…?"},
 {k:"un",s:"Where did you go on your vacation?"},
 {k:"un",s:"I lost my keys at school yesterday."}
]);
addPx("c-a2p-1",[
 {k:"match",p:[["At 8 o'clock last night,","I was doing my homework."],["The archaeologists were digging","in the desert all morning."],["Were you sleeping","when I called you?"],["They weren't listening","to the teacher."]],why:"Read both parts together. Do they make sense?"},
 {k:"read",txt:"Yesterday at 10 a.m. the team was working at an old Mayan city. Laura was cleaning a stone with a brush. Tom and Mike were digging near a pyramid. The guide wasn't working; he was taking photos. Suddenly, it started to rain!",
  tf:[["Laura was cleaning a stone.",true],["Tom was taking photos.",false],["The guide was digging.",false],["The team was working at a Mayan city.",true]],why:"Look for was / were + -ing."},
 {k:"pick",s:["At 9 p.m. I [was watching|were watching] TV.","They [were playing|was playing] soccer in the rain.","What [were|was] you doing at 7 o'clock?","She wasn't [sleeping|sleep] at midnight."],why:"I / he / she → was. You / we / they → were. + verb-ing."},
 {k:"ctx",box:["archaeologist","pyramid","ancient","tomb","dig"],s:[["The ___ was studying old bones.","archaeologist"],["The Egyptians built a huge ___ for their king.","pyramid"],["We were reading about ___ Rome, 2,000 years ago.","ancient"],["They found gold inside the king's ___.","tomb"]],why:"One word in the box is extra."},
 {k:"write",cue:"at 6 p.m. yesterday: I / play / basketball",a:["I was playing basketball at 6 p.m. yesterday.","At 6 p.m. yesterday I was playing basketball.","At 6 p.m. yesterday, I was playing basketball.","Yesterday at 6 p.m. I was playing basketball."],why:"was + verb-ing."},
 {k:"write",cue:"my parents / sleep / at 11 p.m.  ✗",a:["My parents weren't sleeping at 11 p.m.","My parents were not sleeping at 11 p.m.","At 11 p.m. my parents weren't sleeping."],why:"✗ = weren't + verb-ing."},
 {k:"write",lab:"MAKE A QUESTION",cue:"what / you / do / at 8 o'clock ?",a:["What were you doing at 8 o'clock?","What were you doing at eight o'clock?"],why:"What + were + you + verb-ing?"},
 {k:"un",s:"What were the archaeologists looking for?"},
 {k:"un",s:"My sister was talking on the phone all evening."}
]);
addPx("c-a2p-2",[
 {k:"match",p:[["I was taking a shower","when the phone rang."],["While we were having lunch,","the lights went out."],["Ana fell off her bike","while she was riding to school."],["When the teacher came in,","the students were talking."]],why:"Long action (was/were + -ing) + short action (past simple)."},
 {k:"read",txt:"Last summer, Diego was exploring a cave with his uncle when he saw something strange on the wall. It was an ancient painting of animals! While his uncle was taking photos, Diego found an old clay pot on the floor. They called a museum, and archaeologists arrived the next day.",
  tf:[["Diego was exploring a cave when he saw a painting.",true],["Diego took the photos.",false],["Diego found a clay pot.",true],["The archaeologists arrived the same day.",false]],why:"Look for when and while."},
 {k:"pick",s:["I [was reading|read] a book when you called.","While she was cooking, she [burned|was burning] her finger.","[While|When] I was walking home, I met my friend.","The dog barked [when|while] the doorbell rang."],why:"while + long action. when + short action."},
 {k:"ctx",box:["ruins","discovered","clay","coins","statue"],s:[["Explorers found the ___ of an old city in the jungle.","ruins"],["While they were digging, they ___ a secret room.","discovered"],["People made pots from ___ thousands of years ago.","clay"],["The museum has old Roman ___ made of silver.","coins"]],why:"One word in the box is extra."},
 {k:"write",lab:"JOIN WITH WHEN",cue:"I / watch TV  +  the lights / go out",a:["I was watching TV when the lights went out.","When the lights went out, I was watching TV.","When the lights went out I was watching TV."],why:"Long action: was watching. Short action: went out."},
 {k:"write",lab:"JOIN WITH WHILE",cue:"we / walk to school  +  it / start to rain",a:["While we were walking to school, it started to rain.","While we were walking to school it started to rain.","It started to rain while we were walking to school."],why:"while + was/were + -ing."},
 {k:"write",lab:"JOIN WITH WHILE",cue:"she / break her leg  +  she / ski",a:["She broke her leg while she was skiing.","While she was skiing, she broke her leg.","While she was skiing she broke her leg."],why:"Short action: broke. Long action: was skiing."},
 {k:"un",s:"What were you doing when the earthquake started?"},
 {k:"un",s:"While the archaeologists were working, it started to snow."}
]);
/* mazos de vocabulario nuevos (se agregan al final para no mover los existentes) */
function deck(st,lv,n,w){var L=D[st]&&D[st][lv];if(!L)return;L.vocab=L.vocab||[];if(L.vocab.some(function(v){return v.n===n;}))return;L.vocab.push({n:n,w:w});}
deck("children","A2","Talents and skills",[["talented","naturally very good at something"],["skill","an ability you learn and practice"],["creative","good at making new things and ideas"],["practice","do something many times to get better"],["patient","calm when you have to wait"],["hard-working","works a lot and doesn't give up"],["confident","sure about yourself and what you can do"],["brave","not afraid of danger"],["organized","keeps things neat and plans well"],["curious","wants to know and learn new things"]]);
deck("children","A2","Extreme conditions",[["freezing","very, very cold"],["boiling","very, very hot"],["shiver","your body shakes because you are cold"],["sweat","water that comes out of your skin when you're hot"],["frostbite","when extreme cold hurts your fingers or toes"],["sunburn","red, painful skin from too much sun"],["thirsty","you need to drink something"],["desert","a very dry place with little rain"],["blizzard","a big snowstorm with strong wind"],["survive","stay alive in a difficult situation"]]);
deck("children","A2","Volcanoes",[["volcano","a mountain that can throw out fire and hot rock"],["erupt","when a volcano suddenly throws out lava and ash"],["lava","hot liquid rock that comes out of a volcano"],["magma","hot liquid rock under the ground"],["ash","gray powder that comes out of a volcano"],["crater","the big hole at the top of a volcano"],["smoke","the gray cloud that comes from something burning"],["earthquake","when the ground shakes"],["dangerous","something that can hurt you"],["evacuate","leave a place because it isn't safe"]]);
deck("children","A2+","Inventions and technology",[["invent","create something new for the first time"],["inventor","a person who invents things"],["device","a small machine with a special job"],["gadget","a small, clever machine or tool"],["robot","a machine that can do jobs by itself"],["battery","it gives power to phones and toys"],["charge","put power into a battery"],["screen","the flat part of a phone or computer where you see things"],["wireless","works without cables"],["experiment","a scientific test to learn something"]]);
deck("children","A2+","Ancient civilizations",[["ancient","from a very long time ago"],["civilization","a big society with cities, rules and culture"],["archaeologist","a person who studies old objects and places"],["pyramid","a big building with a square base and a point on top"],["tomb","a place where a dead person is buried"],["ruins","what is left of old buildings"],["temple","a building for praying to gods"],["emperor","the ruler of an empire"],["clay","soft earth used to make pots"],["dig","make a hole in the ground"]]);
})();
/* ---- Lote 3: Children A2 (Poptropica 4 y 6, Now I Know 4) ---- */
(function(){
var D=window.MOVA_PATH;if(!D||!D.children||!D.children.A2)return;var L=D.children.A2;
function add(t){if(L.topics.some(function(x){return x.id===t.id;}))return;L.topics.push(t);}
add({id:"c-a2-14",t:"Looks, sounds, tastes…",s:"senses: looks good, tastes like",
 exp:["Sense verbs + <b>adjective</b>: It <b>looks</b> delicious. It <b>smells</b> bad. It <b>sounds</b> great. It <b>tastes</b> sweet. It <b>feels</b> soft.","Sense verbs + <b>like + noun</b>: It <b>looks like</b> a cat. It <b>tastes like</b> chocolate.","He / she / it → add <b>-s</b>: looks, smells, sounds, tastes, feels."],
 ex:[["This pizza smells delicious.",""],["That cloud looks like a dragon.",""],["Your idea sounds great!",""],["This candy tastes like strawberries.",""]],
 b:["The soup tastes salty.","Your new jacket looks cool.","This song sounds like rock music.","The blanket feels very soft."],
 q:[["Mmm! These cookies ___ delicious.",["smell","smell like","smells like","smelling"],0,"Smell + adjective."],
    ["That rock looks ___ a turtle!",["like","as","good","the"],0,"Look like + noun."],
    ["Your plan ___ fun. Let's do it!",["sounds","sounds like","sound","is sound"],0,"It → sounds + adjective."],
    ["This juice ___ like oranges.",["tastes","taste","is taste","tasting"],0,"It → tastes like."],
    ["The cat's fur feels very ___.",["soft","softly","like soft","softness"],0,"Feel + adjective."],
    ["You look ___ today. Are you OK?",["tired","tiredly","like tired","tire"],0,"Look + adjective."]],
 fx:[["This cake tastes like delicious.","This cake tastes really delicious.","Taste + adjective (no like)."],
     ["She looks as her mom.","She looks like her mom.","Look like + person / noun."]],
 px:[
  {k:"match",p:[["This lemon","tastes sour."],["The music from the party","sounds loud."],["That cloud","looks like a rabbit."],["The baby's skin","feels soft."]],why:"Which sense goes with each thing?"},
  {k:"read",txt:"Today was cooking day at school. Our teacher made tacos. They smelled amazing! Mine looked a little strange, but it tasted great. Pedro's salsa looked like ketchup, but it tasted very spicy. The music in the classroom sounded happy, and everybody had fun.",
   tf:[["The tacos smelled bad.",false],["Pedro's salsa looked like ketchup.",true],["The salsa tasted sweet.",false],["The music sounded happy.",true]],why:"Look for looked, tasted, smelled and sounded."},
  {k:"pick",s:["The flowers [smell|smell like] wonderful.","This ice cream tastes [like|as] bubble gum.","Your voice sounds [strange|strangely] on the phone.","That dog [looks|look] like a wolf."],why:"Sense verb + adjective, or + like + noun."},
  {k:"ctx",box:["sour","spicy","rough","noisy","salty"],s:[["Lemons taste ___.","sour"],["Sea water tastes ___.","salty"],["This sandpaper feels ___.","rough"],["The chili sauce tastes really ___!","spicy"]],why:"One word in the box is extra."},
  {k:"write",cue:"this soup / smell / delicious",a:["This soup smells delicious."],why:"It → smells + adjective."},
  {k:"write",cue:"that cloud / look / a horse",a:["That cloud looks like a horse."],why:"Look like + noun."},
  {k:"write",cue:"your idea / sound / great",a:["Your idea sounds great.","Your idea sounds great!"],why:"Sound + adjective."},
  {k:"un",s:"What does the new medicine taste like?"},
  {k:"un",s:"The sky looks dark and cloudy today."}
 ]});
add({id:"c-a2-15",t:"How tall / long / far…?",s:"asking about measurements",
 exp:["<b>How + adjective</b> asks about size and distance: How <b>tall</b>…? How <b>long</b>…? How <b>heavy</b>…? How <b>far</b>…? How <b>deep</b>…? How <b>old</b>…?","Answer with a number + unit: It's <b>3 meters tall</b>. It weighs <b>5 kilos</b>. It's <b>2 kilometers away</b>.","How far <b>is</b> it from A <b>to</b> B? → It's 10 km."],
 ex:[["How tall is the tree? It's ten meters tall.",""],["How heavy is your backpack? It weighs four kilos.",""],["How far is the park from your house?",""],["How long is the river? It's 300 kilometers long.",""]],
 b:["How tall are you?","How far is the beach?","How deep is the lake?","How heavy is that box?"],
 q:[["How ___ is your brother? He's 1.50 meters.",["tall","long","far","old"],0,"Height of a person → How tall?"],
    ["How ___ is the school from here? About two kilometers.",["far","long","tall","deep"],0,"Distance → How far?"],
    ["How ___ is the elephant? It weighs 5,000 kilos.",["heavy","tall","big","far"],0,"Weight → How heavy?"],
    ["How ___ is the swimming pool? It's two meters deep.",["deep","tall","far","heavy"],0,"Depth → How deep?"],
    ["How long ___ the Nile River?",["is","are","does","has"],0,"How long is…?"],
    ["The giraffe is 5 meters ___.",["tall","long","far","heavy"],0,"Height → tall."]],
 fx:[["How long is your dad?","How tall is your dad?","Height of a person → How tall?"],
     ["How far is it of here?","How far is it from here?","How far is it from…?"]],
 px:[
  {k:"match",p:[["How tall is the Eiffel Tower?","About 330 meters."],["How heavy is a blue whale?","About 150,000 kilos."],["How far is the Moon?","About 384,000 kilometers."],["How old is your grandma?","She's 78."]],why:"Tall → meters. Heavy → kilos. Far → kilometers. Old → years."},
  {k:"read",txt:"The blue whale is the biggest animal in the world. It can be 30 meters long, and it is very heavy: about 150 tons! Blue whales can dive 500 meters deep. They can also swim very far: some travel 20,000 kilometers in one year.",
   tf:[["A blue whale can be 30 meters long.",true],["It weighs about 15 tons.",false],["It can dive 500 meters deep.",true],["Blue whales never travel far.",false]],why:"Look at the numbers in the text."},
  {k:"pick",s:["How [tall|long] is your dad?","How [far|long] is it to the airport?","How [heavy|much heavy] is your suitcase?","How [deep|tall] is the ocean here?"],why:"Tall = height. Far = distance. Heavy = weight. Deep = down."},
  {k:"ctx",box:["meters","kilos","kilometers","years","liters"],s:[["The tree is 12 ___ tall.","meters"],["My dog weighs 20 ___.","kilos"],["The city is 50 ___ from here.","kilometers"],["My cousin is 11 ___ old.","years"]],why:"One word in the box is extra."},
  {k:"write",lab:"MAKE A QUESTION",cue:"the mountain? (height)",a:["How tall is the mountain?","How high is the mountain?"],why:"Height → How tall / high?"},
  {k:"write",lab:"MAKE A QUESTION",cue:"the museum from here? (distance)",a:["How far is the museum from here?"],why:"Distance → How far?"},
  {k:"write",lab:"MAKE A QUESTION",cue:"your backpack? (weight)",a:["How heavy is your backpack?"],why:"Weight → How heavy?"},
  {k:"un",s:"How long is the longest river in Mexico?"},
  {k:"un",s:"How far is your house from the school?"}
 ]});
add({id:"c-a2-16",t:"Why…? Because…",s:"reasons and feelings",
 exp:["Ask for a reason with <b>Why</b>: <b>Why</b> are you sad? <b>Why</b> did you go?","Answer with <b>because</b> + sentence: <b>Because</b> I lost my cat.","Feelings: What makes you <b>feel happy</b>? <b>Winning</b> makes me feel happy."],
 ex:[["Why are you smiling? Because I got a good grade.",""],["Why did you call me? Because I need help.",""],["I'm tired because I went to bed late.",""],["What makes you feel nervous? Tests make me feel nervous.",""]],
 b:["Why are you late?","Because the bus didn't come.","I'm happy because it's Friday.","Music makes me feel calm."],
 q:[["___ are you laughing? Because the movie is funny.",["Why","What","When","Where"],0,"Reason → Why?"],
    ["I'm hungry ___ I didn't have breakfast.",["because","why","so","and"],0,"Reason → because."],
    ["Why ___ you cry? Because I hurt my knee.",["did","do","was","were"],0,"Past question: Why did you…?"],
    ["What makes you ___ scared?",["feel","feels","feeling","to feel"],0,"Make + person + feel."],
    ["Thunderstorms make me ___ nervous.",["feel","felt","feels","to feel"],0,"Make me feel."],
    ["Why is she angry? ___ her brother broke her toy.",["Because","Why","So","But"],0,"Answer with because."]],
 fx:[["Why you are sad?","Why are you sad?","Question: Why + are + you…?"],
     ["I stayed home because of I was sick.","I stayed home because I was very sick.","Because + sentence (no of)."]],
 px:[
  {k:"match",p:[["Why are you wearing a coat?","Because it's very cold."],["Why is the baby crying?","Because she's hungry."],["Why did you run?","Because I was late."],["Why are they happy?","Because they won the game."]],why:"Match each question with its reason."},
  {k:"read",txt:"Marco felt nervous on Monday because he had a big math test. His mom gave him a hug, and that made him feel better. He passed the test! Now he's happy because he can go to the movies on Saturday as a prize.",
   tf:[["Marco felt nervous because of a test.",true],["A hug made him feel worse.",false],["He passed the test.",true],["He's happy because he can go to the beach.",false]],why:"Look for because and made him feel."},
  {k:"pick",s:["[Why|What] are you so excited?","I'm excited [because|why] we're going to the zoo.","Spiders make me [feel|feeling] scared.","Why [did|does] he leave early yesterday?"],why:"Why asks, because answers. Make + feel."},
  {k:"ctx",box:["proud","bored","nervous","lonely","excited"],s:[["I feel ___ before a big test.","nervous"],["My parents feel ___ when I get good grades.","proud"],["There's nothing to do. I'm ___.","bored"],["I'm so ___! My birthday is tomorrow.","excited"]],why:"One word in the box is extra."},
  {k:"write",lab:"ANSWER WITH BECAUSE",cue:"Why are you tired? (I / go to bed late)",a:["Because I went to bed late.","I'm tired because I went to bed late.","I am tired because I went to bed late."],why:"Because + sentence."},
  {k:"write",lab:"MAKE A QUESTION",cue:"you / sad ?",a:["Why are you sad?"],why:"Why + are + you…?"},
  {k:"write",cue:"music / make / me / feel / happy",a:["Music makes me feel happy."],why:"Music → makes."},
  {k:"un",s:"What makes you feel happy at school?"},
  {k:"un",s:"She was late because she missed the bus."}
 ]});
add({id:"c-a2-17",t:"Let's… / Shall we…? / How about…?",s:"suggestions",
 exp:["<b>Let's</b> + base verb: Let's <b>play</b> outside.","<b>Shall we</b> + base verb?: Shall we <b>go</b> to the park?","<b>Why don't we</b> + base verb?: Why don't we <b>watch</b> a movie?","<b>How about / What about</b> + verb-<b>ing</b>?: How about <b>going</b> to the beach?","Answers: Good idea! / Sure! / Sorry, I can't."],
 ex:[["Let's make a cake!",""],["Shall we go swimming?",""],["Why don't we ask the teacher?",""],["How about playing a board game?",""]],
 b:["Let's go to the park.","Shall we start now?","Why don't we call Grandma?","How about having pizza?"],
 q:[["It's hot. Let's ___ swimming.",["go","going","to go","goes"],0,"Let's + base verb."],
    ["How about ___ a picnic?",["having","have","to have","has"],0,"How about + -ing."],
    ["___ we play a game? Sure!",["Shall","Let's","How about","Do"],0,"Shall we + verb?"],
    ["Why don't we ___ a movie tonight?",["watch","watching","to watch","watches"],0,"Why don't we + base verb?"],
    ["I'm bored. ___ go to the mall.",["Let's","Shall","How about","Why"],0,"Let's + verb."],
    ["What about ___ a cake for Mom?",["making","make","made","to make"],0,"What about + -ing."]],
 fx:[["Let's to go to the beach.","Let's go to the beach now.","Let's + base verb (no to)."],
     ["How about play soccer?","How about playing soccer?","How about + -ing."]],
 px:[
  {k:"match",p:[["I'm hungry.","Let's make a sandwich."],["It's raining.","Why don't we stay inside?"],["The movie starts at 6.","Shall we leave now?"],["It's Grandpa's birthday.","How about calling him?"]],why:"Match the problem with a good suggestion."},
  {k:"read",txt:"Sofi: It's Saturday! Shall we go to the park? Tom: It's too hot. Why don't we go to the pool? Sofi: Good idea! And how about having ice cream after that? Tom: Perfect. Let's ask Mom first.",
   tf:[["Tom wants to go to the park.",false],["Tom suggests going to the pool.",true],["Sofi suggests having ice cream.",true],["They don't need to ask Mom.",false]],why:"Look for Shall we, Why don't we, How about and Let's."},
  {k:"pick",s:["Let's [play|playing] a game.","How about [visiting|visit] the museum?","Shall we [dance|dancing]?","[Why don't|Why not] we ask Dad?"],why:"Let's / Shall we / Why don't we + base verb. How about + -ing."},
  {k:"ctx",box:["picnic","rest","order","bake","borrow"],s:[["It's a sunny day. Let's have a ___ in the park.","picnic"],["I'm tired. Shall we ___ for a moment?","rest"],["Why don't we ___ a pizza? I don't want to cook.","order"],["Let's ___ a cake for her birthday!","bake"]],why:"One word in the box is extra."},
  {k:"write",lab:"SUGGEST WITH LET'S",cue:"go / to the cinema",a:["Let's go to the cinema.","Let's go to the cinema!"],why:"Let's + base verb."},
  {k:"write",lab:"SUGGEST WITH HOW ABOUT",cue:"play / video games",a:["How about playing video games?"],why:"How about + -ing."},
  {k:"write",lab:"SUGGEST WITH SHALL WE",cue:"start / the project",a:["Shall we start the project?"],why:"Shall we + base verb?"},
  {k:"un",s:"Why don't we invite our friends?"},
  {k:"un",s:"What about going to the beach this weekend?"}
 ]});
add({id:"c-a2-18",t:"Reflexive pronouns",s:"myself, himself, themselves",
 exp:["Use a reflexive pronoun when the subject and object are the same person: I hurt <b>myself</b>.","<b>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</b>","<b>by + reflexive</b> = alone, without help: She made it <b>by herself</b>."],
 ex:[["I cut myself with the scissors.",""],["He made the cake by himself.",""],["Enjoy yourselves at the party!",""],["The cat cleans itself every day.",""]],
 b:["She taught herself to play guitar.","We enjoyed ourselves at the beach.","Be careful! Don't hurt yourself.","They did it by themselves."],
 q:[["Be careful! You can hurt ___.",["yourself","you","yourselves","himself"],0,"You (one person) → yourself."],
    ["My little sister can dress ___ now.",["herself","her","himself","itself"],0,"She → herself."],
    ["We enjoyed ___ at the party.",["ourselves","us","ourself","themselves"],0,"We → ourselves."],
    ["The boys built the treehouse by ___.",["themselves","them","theirselves","himself"],0,"They → themselves."],
    ["I looked at ___ in the mirror.",["myself","me","mine","meself"],0,"I → myself."],
    ["The robot can turn ___ off.",["itself","it","its","himself"],0,"It → itself."]],
 fx:[["He made dinner by hisself.","He made dinner by himself.","He → himself."],
     ["They painted the house theirselves.","They painted the house themselves.","They → themselves."]],
 px:[
  {k:"match",p:[["I","myself"],["she","herself"],["we","ourselves"],["they","themselves"],["it","itself"]],h:"Match the pronoun with its reflexive form."},
  {k:"read",txt:"Lucas is ten, and he likes doing things by himself. Last week he made breakfast for himself for the first time. He burned himself a little on the pan, but he was OK. His parents were proud. They said, 'Lucas, you should be proud of yourself!'",
   tf:[["Lucas likes doing things alone.",true],["His mom made his breakfast.",false],["He burned himself a little.",true],["His parents were angry.",false]],why:"Look for himself and yourself."},
  {k:"pick",s:["Did you make this [yourself|yourselves], Ana?","My grandpa built the table [himself|herself].","We taught [ourselves|themselves] to skate.","The door closes by [itself|himself]."],why:"Match the reflexive pronoun with the subject."},
  {k:"ctx",box:["hurt","enjoy","introduce","help","cut"],s:[["Please ___ yourself to some cake!","help"],["Let me ___ myself. I'm Ana.","introduce"],["Did you ___ yourself when you fell?","hurt"],["___ yourselves at the party, kids!","enjoy"]],why:"One word in the box is extra."},
  {k:"write",lab:"COMPLETE",cue:"She made the dress by… (she)",a:["She made the dress by herself."],why:"She → herself."},
  {k:"write",lab:"COMPLETE",cue:"We enjoyed… at the beach. (we)",a:["We enjoyed ourselves at the beach."],why:"We → ourselves."},
  {k:"write",lab:"COMPLETE",cue:"Don't hurt… ! (you, one person)",a:["Don't hurt yourself!","Don't hurt yourself."],why:"You → yourself."},
  {k:"un",s:"My brother taught himself to play chess."},
  {k:"un",s:"Did the children clean the room by themselves?"}
 ]});
add({id:"c-a2-19",t:"More / most · less / least",s:"comparing with long adjectives",
 exp:["Long adjectives: <b>more</b> interesting than / the <b>most</b> interesting.","The opposite: <b>less</b> expensive than / the <b>least</b> expensive.","Short adjectives use -er / -est: cheaper, the cheapest. Don't say <s>more cheaper</s>."],
 ex:[["This book is more interesting than that one.",""],["It's the most beautiful beach in Mexico.",""],["Bikes are less expensive than cars.",""],["This is the least difficult exercise.",""]],
 b:["Math is more difficult than art.","She is the most popular girl in class.","The bus is less comfortable than the car.","This is the least expensive phone."],
 q:[["This movie is ___ exciting than the book.",["more","most","the most","much"],0,"Comparative: more … than."],
    ["It's the ___ dangerous animal in the jungle.",["most","more","much","very"],0,"Superlative: the most."],
    ["Walking is ___ tiring than running.",["less","least","the less","fewer"],0,"Less … than."],
    ["This is the ___ expensive hotel in town. It's very cheap.",["least","less","most","more"],0,"The least = the opposite of the most."],
    ["Chess is more ___ than checkers.",["difficult","difficulter","difficultest","most difficult"],0,"More + adjective."],
    ["Who is the ___ famous singer in the world?",["most","more","mostest","very"],0,"The most famous."]],
 fx:[["My phone is more cheaper than yours.","My phone is much cheaper than yours.","Short adjective: cheaper (no more)."],
     ["It's the more beautiful park.","It's the most beautiful park.","Superlative: the most."]],
 px:[
  {k:"match",p:[["A diamond is","more expensive than a pencil."],["A turtle is","less fast than a rabbit."],["The cheetah is","the fastest land animal."],["Water is","the least expensive drink at the café."]],why:"Read both parts together. Do they make sense?"},
  {k:"read",txt:"There are three restaurants on my street. Rosa's is the most popular, but it's also the most expensive. Taco Loco is less expensive than Rosa's and the food is delicious. Burger Box is the least expensive, but it's the least comfortable: there are no chairs!",
   tf:[["Rosa's is the most expensive restaurant.",true],["Taco Loco is more expensive than Rosa's.",false],["Burger Box is the least expensive.",true],["Burger Box is the most comfortable.",false]],why:"Look for more, most, less and least."},
  {k:"pick",s:["Science is [more interesting|interestinger] than history for me.","This is the [least|less] boring game in the store.","A plane is [faster|more fast] than a train.","She's the [most|more] creative student in class."],why:"Long adjectives → more / most, less / least. Short → -er / -est."},
  {k:"ctx",box:["comfortable","dangerous","popular","expensive","delicious"],s:[["A sofa is more ___ than a chair.","comfortable"],["Sharks are more ___ than dolphins.","dangerous"],["Soccer is the most ___ sport in Mexico.","popular"],["A car is more ___ than a bike.","expensive"]],why:"One word in the box is extra."},
  {k:"write",lab:"COMPARE (more)",cue:"English / interesting / math",a:["English is more interesting than math."],why:"More + adjective + than."},
  {k:"write",lab:"COMPARE (less)",cue:"a bike / expensive / a car",a:["A bike is less expensive than a car."],why:"Less + adjective + than."},
  {k:"write",lab:"SUPERLATIVE",cue:"it / the most / beautiful / place in my city",a:["It's the most beautiful place in my city.","It is the most beautiful place in my city."],why:"The most + adjective."},
  {k:"un",s:"This is the least difficult exercise in the book."},
  {k:"un",s:"Which animal is the most dangerous in the world?"}
 ]});
add({id:"c-a2-20",t:"Wh- questions in the past",s:"Where did you go?",
 exp:["<b>Wh- word + did + subject + base verb</b>: Where <b>did</b> you <b>go</b>? What <b>did</b> she <b>eat</b>?","With <b>was / were</b>: Where <b>were</b> you? How <b>was</b> the trip?","Question words: what, where, when, who, why, how, what time."],
 ex:[["Where did you go on vacation?",""],["What did you eat for dinner?",""],["Who did you see at the party?",""],["How was your weekend?",""]],
 b:["Where did they go?","What did you buy?","When did she arrive?","How was the movie?"],
 q:[["Where ___ you go last weekend?",["did","do","were","was"],0,"Past question: Where did you…?"],
    ["What did she ___ for breakfast?",["have","had","has","having"],0,"After did → base verb."],
    ["___ did you get home? At 9 o'clock.",["What time","Where","Who","Why"],0,"At 9 o'clock → What time?"],
    ["How ___ the concert? It was amazing!",["was","did","were","is"],0,"How was…?"],
    ["___ did you meet at the park? I met Ana.",["Who","Where","When","How"],0,"A person → Who?"],
    ["Where ___ you yesterday? I was at home.",["were","did","was","are"],0,"With be: Where were you?"]],
 fx:[["Where did you went yesterday?","Where did you go yesterday?","After did → base verb."],
     ["What did you ate on Sunday?","What did you eat on Sunday?","After did → base verb."]],
 px:[
  {k:"match",p:[["Where did you go?","To the beach."],["When did you arrive?","Last Monday."],["Who did you go with?","With my cousins."],["How did you travel?","By plane."]],why:"Where = place. When = time. Who = person. How = way."},
  {k:"read",txt:"Last summer Valeria went to Oaxaca with her family. They traveled by bus. They stayed for one week in a small hotel. Valeria tried mole for the first time and loved it. She bought a colorful alebrije for her best friend.",
   tf:[["Valeria went to Oaxaca.",true],["They traveled by plane.",false],["She tried mole.",true],["She bought a hat for her friend.",false]],why:"Read again: where, how, what."},
  {k:"pick",s:["What [did|does] you do yesterday?","Where did they [stay|stayed]?","How [was|did] the party?","Who [did|was] you call last night?"],why:"Wh- + did + base verb. With be: was / were."},
  {k:"ctx",box:["Where","When","Who","How","Why"],s:[["___ did you go? To the museum.","Where"],["___ did you go with? With my dad.","Who"],["___ did you get there? By car.","How"],["___ did you go? Because it was free!","Why"]],why:"One question word is extra."},
  {k:"write",lab:"MAKE A QUESTION",cue:"where / you / go / on Saturday ?",a:["Where did you go on Saturday?"],why:"Where + did + you + go?"},
  {k:"write",lab:"MAKE A QUESTION",cue:"what / she / buy / at the mall ?",a:["What did she buy at the mall?"],why:"What + did + she + buy?"},
  {k:"write",lab:"MAKE A QUESTION",cue:"how / the trip ? (be)",a:["How was the trip?"],why:"How was…?"},
  {k:"un",s:"What time did you wake up this morning?"},
  {k:"un",s:"Who did you play with at the park?"}
 ]});
add({id:"c-a2-21",t:"Need to",s:"what is necessary",
 exp:["<b>need to</b> + base verb = it's necessary: I <b>need to</b> study.","He / she / it → <b>needs to</b>.","Negative: <b>don't / doesn't need to</b> = it's not necessary. Question: <b>Do you need to</b>…?"],
 ex:[["I need to drink some water.",""],["She needs to go to the doctor.",""],["You don't need to bring anything.",""],["Do we need to buy tickets?",""]],
 b:["I need to finish my homework.","He needs to clean his room.","We don't need to hurry.","Do you need to go now?"],
 q:[["I'm thirsty. I ___ drink some water.",["need to","needs to","need","needing"],0,"I → need to."],
    ["My brother ___ to study for his test.",["needs","need","needing","is need"],0,"He → needs to."],
    ["You don't need ___ bring food. There's a lot.",["to","—","for","of"],0,"Need to + verb."],
    ["___ she need to wear a uniform?",["Does","Do","Is","Has"],0,"She → Does she need to…?"],
    ["We ___ need to hurry. We have time.",["don't","doesn't","aren't","not"],0,"We → don't need to."],
    ["Do you need to go now? Yes, I ___.",["do","need","am","does"],0,"Short answer: Yes, I do."]],
 fx:[["She need to sleep more.","She needs to sleep more.","She → needs to."],
     ["Do she need to go?","Does she need to go?","She → Does she need to…?"]],
 px:[
  {k:"match",p:[["My phone is dead.","I need to charge it."],["The plants are dry.","They need to have water."],["You have a fever.","You need to see a doctor."],["It's Saturday.","We don't need to get up early."]],why:"What is necessary in each situation?"},
  {k:"read",txt:"Before the camping trip, Leo makes a list. He needs to buy batteries for his flashlight. He needs to pack warm clothes because it's cold at night. He doesn't need to take a tent; his uncle has a big one. And he needs to remember the marshmallows!",
   tf:[["Leo needs to buy batteries.",true],["He doesn't need warm clothes.",false],["He needs to take a tent.",false],["He wants marshmallows.",true]],why:"Look for needs to and doesn't need to."},
  {k:"pick",s:["She [needs|need] to call her mom.","We [don't|doesn't] need to pay. It's free!","[Do|Does] you need to use the computer?","I need [to wash|wash] my hands."],why:"He / she → needs to. I / you / we / they → need to."},
  {k:"ctx",box:["charge","water","practice","fix","sleep"],s:[["My bike is broken. I need to ___ it.","fix"],["The flowers need to have ___ every day.","water"],["You're tired. You need to ___.","sleep"],["To play the piano well, you need to ___ a lot.","practice"]],why:"One word in the box is extra."},
  {k:"write",cue:"I / need to / buy / a new notebook",a:["I need to buy a new notebook."],why:"I → need to."},
  {k:"write",cue:"my sister / need to / go / to the dentist",a:["My sister needs to go to the dentist."],why:"She → needs to."},
  {k:"write",cue:"we / bring / lunch  (not necessary)",a:["We don't need to bring lunch.","We do not need to bring lunch."],why:"Not necessary → don't need to."},
  {k:"un",s:"Do you need to finish your homework tonight?"},
  {k:"un",s:"He doesn't need to wear a jacket today."}
 ]});
add({id:"c-a2-22",t:"Before / After / When",s:"time clauses",
 exp:["<b>before</b> = earlier: I brush my teeth <b>before</b> I go to bed.","<b>after</b> = later: I play <b>after</b> I do my homework.","<b>when</b> = at the time: <b>When</b> I get home, I eat a snack.","If the time word is first, use a comma: <b>After</b> school<b>,</b> I go to soccer."],
 ex:[["I wash my hands before I eat.",""],["After school, we go to the park.",""],["When I'm sad, I listen to music.",""],["She called me after she arrived.",""]],
 b:["I read before I sleep.","After lunch, we play outside.","When it rains, I stay home.","He showers after he runs."],
 q:[["Wash your hands ___ you eat.",["before","after","when","during"],0,"First wash, then eat → before."],
    ["I watch TV ___ I finish my homework.",["after","before","during","while"],0,"First homework, then TV → after."],
    ["___ I'm hungry, I eat an apple.",["When","Before","After","During"],0,"At that time → when."],
    ["Put on your shoes ___ you go out.",["before","after","when","since"],0,"Before going out."],
    ["___ dinner, we always wash the dishes.",["After","Before","When","While"],0,"Dishes come later → after."],
    ["She smiles ___ she sees her dog.",["when","before","after","until"],0,"At the same time → when."]],
 fx:[["After I eat, I wash my hands always.","Before I eat, I always wash my hands.","Wash hands first → before."],
     ["I brush my teeth after I go to bed.","I brush my teeth before I go to bed.","Teeth first, then bed → before."]],
 px:[
  {k:"match",p:[["I brush my teeth","before I go to bed."],["We have dessert","after we eat dinner."],["When it's sunny,","we go to the beach."],["Look both ways","before you cross the street."]],why:"Read both parts together. Do they make sense?"},
  {k:"read",txt:"Every morning, Ana wakes up at 6:30. Before she has breakfast, she takes a shower. After breakfast, she brushes her teeth and gets dressed. When the school bus arrives, she runs outside. After school, she does her homework before she plays.",
   tf:[["Ana takes a shower before breakfast.",true],["She brushes her teeth before breakfast.",false],["She runs outside when the bus arrives.",true],["She plays before she does her homework.",false]],why:"Look for before, after and when."},
  {k:"pick",s:["Turn off the lights [before|after] you leave.","I always feel tired [after|before] I run.","[When|Before] I'm cold, I drink hot chocolate.","Read the instructions [before|after] you start."],why:"Before = first. After = later. When = at that time."},
  {k:"ctx",box:["breakfast","bed","school","lunch","shower"],s:[["I put on my pajamas before ___.","bed"],["After ___, I go home on the bus.","school"],["I have cereal for ___ before school.","breakfast"],["I wash my hair when I take a ___.","shower"]],why:"One word in the box is extra."},
  {k:"write",lab:"JOIN WITH BEFORE",cue:"I do my homework  →  I play video games",a:["I do my homework before I play video games.","Before I play video games, I do my homework.","Before I play video games I do my homework."],why:"First homework → before video games."},
  {k:"write",lab:"JOIN WITH AFTER",cue:"we eat dinner  →  we watch a movie",a:["We watch a movie after we eat dinner.","After we eat dinner, we watch a movie.","After we eat dinner we watch a movie."],why:"The movie is later → after dinner."},
  {k:"write",lab:"JOIN WITH WHEN",cue:"it rains  +  I take an umbrella",a:["When it rains, I take an umbrella.","When it rains I take an umbrella.","I take an umbrella when it rains."],why:"When + situation, + action."},
  {k:"un",s:"What do you do after you get home?"},
  {k:"un",s:"When I feel sad, I call my best friend."}
 ]});
add({id:"c-a2-23",t:"Present continuous for the future",s:"plans and arrangements",
 exp:["Use <b>am / is / are + -ing</b> for plans you already arranged: I'<b>m visiting</b> my grandma on Sunday.","Add a future time: tomorrow, tonight, on Saturday, next week.","Question: What <b>are</b> you <b>doing</b> this weekend?"],
 ex:[["I'm playing soccer on Saturday.",""],["We're going to the beach next week.",""],["What are you doing tonight?",""],["She isn't coming to the party tomorrow.",""]],
 b:["I'm meeting my friends tomorrow.","They're flying to Cancún on Friday.","What are you doing this weekend?","He isn't working next Monday."],
 q:[["I ___ my cousins tomorrow. It's arranged!",["'m visiting","visit","visited","visits"],0,"Arranged plan → present continuous."],
    ["What ___ you doing on Saturday?",["are","do","is","did"],0,"What are you doing…?"],
    ["We're ___ to the dentist next week.",["going","go","goes","went"],0,"Be + -ing."],
    ["My dad ___ working tomorrow. He's on vacation.",["isn't","doesn't","not","aren't"],0,"He → isn't + -ing."],
    ["___ she coming to the party tonight?",["Is","Does","Are","Do"],0,"She → Is she coming…?"],
    ["They ___ a party next Friday.",["are having","have","has","having"],0,"They are having."]],
 fx:[["I visiting my grandpa tomorrow.","I'm visiting my grandpa tomorrow.","Don't forget am / is / are."],
     ["What you are doing tonight?","What are you doing tonight?","Question: What + are + you…?"]],
 px:[
  {k:"match",p:[["Monday","I'm going to the dentist at 4."],["Tuesday","I'm having a piano lesson."],["Saturday","We're visiting Grandma in Saltillo."],["Sunday","I'm playing in a soccer match."]],h:"Read the diary. Match the day with the plan.",why:"Each day has one plan."},
  {k:"read",txt:"Hi Pablo! This weekend is busy. On Saturday morning I'm playing in a basketball match. In the afternoon my mom and I are buying a present for my sister. On Sunday we're having a family lunch. Are you doing anything on Sunday evening? Let's watch a movie! Lu",
   tf:[["Lu is playing basketball on Saturday.",true],["Lu is buying a present on Sunday.",false],["Lu's family is having lunch on Sunday.",true],["Lu is busy on Sunday evening.",false]],why:"Look for the -ing plans and the days."},
  {k:"pick",s:["I ['m meeting|meet] Ana at 5 tomorrow.","What [are|do] you doing next weekend?","She [isn't|doesn't] coming tonight.","We're [leaving|leave] on Friday."],why:"am / is / are + -ing for future plans."},
  {k:"ctx",box:["flying","meeting","having","staying","eating"],s:[["We're ___ to Mexico City on Monday. We have the tickets.","flying"],["I'm ___ my friends at the mall at 4.","meeting"],["They're ___ a party for Mia's birthday.","having"],["We're ___ at a hotel near the beach.","staying"]],why:"One word in the box is extra."},
  {k:"write",cue:"I / visit / my grandparents / on Sunday",a:["I'm visiting my grandparents on Sunday.","I am visiting my grandparents on Sunday.","On Sunday I'm visiting my grandparents."],why:"am + -ing."},
  {k:"write",cue:"we / not / go / to school / tomorrow",a:["We aren't going to school tomorrow.","We're not going to school tomorrow.","We are not going to school tomorrow."],why:"aren't + -ing."},
  {k:"write",lab:"MAKE A QUESTION",cue:"what / you / do / tonight ?",a:["What are you doing tonight?"],why:"What + are + you + -ing?"},
  {k:"un",s:"Are you coming to my party on Saturday?"},
  {k:"un",s:"My cousins are arriving next Friday."}
 ]});
add({id:"c-a2-24",t:"Crazy about, scared of, good at…",s:"adjective + preposition",
 exp:["Some adjectives go with a special preposition: <b>crazy about, fond of, scared of, afraid of, bored with, good at, bad at, interested in, proud of</b>.","After the preposition use a <b>noun</b> or verb-<b>ing</b>: I'm good at <b>drawing</b>. She's scared of <b>spiders</b>."],
 ex:[["I'm crazy about soccer.",""],["My sister is scared of the dark.",""],["He's very good at drawing.",""],["We're bored with this game.",""]],
 b:["She's crazy about horses.","I'm scared of big dogs.","Are you good at math?","He's interested in science."],
 q:[["My brother is crazy ___ dinosaurs.",["about","of","at","in"],0,"crazy about."],
    ["I'm scared ___ snakes.",["of","about","at","with"],0,"scared of."],
    ["She's very good ___ singing.",["at","in","on","of"],0,"good at."],
    ["We're bored ___ this movie. Let's change it.",["with","at","in","on"],0,"bored with."],
    ["Are you interested ___ history?",["in","at","about","of"],0,"interested in."],
    ["My grandma is very fond ___ her garden.",["of","about","at","with"],0,"fond of."]],
 fx:[["I'm good in playing chess.","I'm good at playing chess.","good at."],
     ["She's scared about the dark.","She's scared of the dark.","scared of."]],
 px:[
  {k:"match",p:[["crazy","about"],["scared","of"],["good","at"],["interested","in"],["bored","with"]],h:"Match the adjective with its preposition."},
  {k:"read",txt:"My best friend Nico is crazy about animals. He's very good at taking care of them: he has two dogs, a cat and a turtle. But Nico is scared of birds! He's also interested in science, and he wants to be a vet. He's never bored with his pets.",
   tf:[["Nico is crazy about animals.",true],["He is bad at taking care of animals.",false],["Nico is scared of birds.",true],["He's bored with his pets.",false]],why:"Look for the adjectives + prepositions."},
  {k:"pick",s:["I'm really bad [at|in] math.","Are you afraid [of|about] the dark?","My mom is proud [of|at] me.","He's crazy [about|of] video games."],why:"Each adjective has its own preposition."},
  {k:"ctx",box:["about","of","at","in","with"],s:[["Lucy is crazy ___ K-pop.","about"],["I'm not scared ___ spiders.","of"],["Are you good ___ swimming?","at"],["Tom is interested ___ robots.","in"]],why:"One word in the box is extra."},
  {k:"write",cue:"I / good / play the piano",a:["I'm good at playing the piano.","I am good at playing the piano."],why:"good at + -ing."},
  {k:"write",cue:"my sister / scared / thunderstorms",a:["My sister is scared of thunderstorms.","My sister's scared of thunderstorms."],why:"scared of."},
  {k:"write",lab:"MAKE A QUESTION",cue:"you / interested / art ?",a:["Are you interested in art?"],why:"Are you interested in…?"},
  {k:"un",s:"My little brother is crazy about superheroes."},
  {k:"un",s:"Are you good at telling jokes?"}
 ]});
})();
/* ---- Lote 4: Children A2+ (Now I Know 4 y 5) ---- */
(function(){
var D=window.MOVA_PATH;if(!D||!D.children||!D.children["A2+"])return;var L=D.children["A2+"];
function add(t){if(L.topics.some(function(x){return x.id===t.id;}))return;L.topics.push(t);}
add({id:"c-a2p-9",t:"Something, nobody, everyone…",s:"indefinite pronouns",
 exp:["<b>some-</b> in positive sentences: <b>something, somebody, somewhere</b>.","<b>any-</b> in questions and negatives: <b>anything, anybody, anywhere</b>.","<b>no-</b> = not any (positive verb!): <b>nothing, nobody, nowhere</b>.","<b>every-</b> = all: <b>everything, everybody, everywhere</b>. Use a singular verb: Everybody <b>is</b> here."],
 ex:[["There's something in my shoe!",""],["Is anybody at home?",""],["Nobody knows the answer.",""],["Everyone is wearing a costume.",""]],
 b:["Somebody is at the door.","I didn't buy anything.","Nobody called me.","Everything is ready."],
 q:[["I'm hungry. I want ___ to eat.",["something","anything","nothing","everything"],0,"Positive sentence → something."],
    ["Did you see ___ at the park?",["anybody","somebody","nobody","everybody"],0,"Question → anybody."],
    ["I looked everywhere, but I found ___.",["nothing","anything","something","everything"],0,"Positive verb + no- word: nothing."],
    ["___ is happy because it's Friday!",["Everybody","Anybody","Nobody's","Somewhere"],0,"All the people → everybody."],
    ["Everyone ___ excited about the trip.",["is","are","were","be"],0,"Every- words → singular verb."],
    ["I can't find my keys ___.",["anywhere","somewhere","nowhere","everywhere"],0,"Negative → anywhere."]],
 fx:[["I didn't see nobody there.","I didn't see anybody there.","Negative verb + any-."],
     ["Everybody are in the classroom.","Everybody is in the classroom.","Everybody → is."]],
 px:[
  {k:"match",p:[["nobody","no person"],["nothing","no thing"],["nowhere","no place"],["everyone","all the people"],["everything","all the things"]],h:"Match the word with its meaning."},
  {k:"read",txt:"Last night someone knocked on our door at midnight. My dad looked outside, but nobody was there. He didn't see anything strange. In the morning we found something on the doormat: a box with a cake! Everybody in the family was surprised. It was a gift from our new neighbor.",
   tf:[["Somebody knocked on the door.",true],["Dad saw a person outside.",false],["They found something in the morning.",true],["Nobody in the family was surprised.",false]],why:"Look for some-, any-, no- and every- words."},
  {k:"pick",s:["There's [somebody|anybody] in the kitchen.","I don't have [anything|nothing] to do.","[Nobody|Anybody] came to the meeting. It was empty!","We didn't see [anybody|nobody] at the beach."],why:"some- = positive. any- = questions and negatives. no- = positive verb."},
  {k:"ctx",box:["somewhere","nowhere","everywhere","anywhere","something"],s:[["I left my phone ___ in the house, but I don't know where.","somewhere"],["There are toys ___! Clean your room!","everywhere"],["We didn't go ___ on Saturday. We stayed home.","anywhere"],["There's ___ to sit. All the chairs are taken.","nowhere"]],why:"One word in the box is extra."},
  {k:"write",lab:"SAY IT WITH NO-",cue:"There isn't anybody at school.  →  There is…",a:["There is nobody at school.","There's nobody at school."],why:"not any- = no-."},
  {k:"write",lab:"SAY IT WITH NO-",cue:"I didn't eat anything.  →  I ate…",a:["I ate nothing."],why:"didn't … anything = … nothing."},
  {k:"write",lab:"MAKE A QUESTION",cue:"there / anybody / at home ?",a:["Is there anybody at home?","Is anybody at home?"],why:"Questions → any-."},
  {k:"un",s:"Does anybody want some more pizza?"},
  {k:"un",s:"Everybody in my class likes the new teacher."}
 ]});
add({id:"c-a2p-10",t:"What's she like? What does she look like?",s:"be like · look like",
 exp:["<b>What is he like?</b> → personality: He's <b>friendly and funny</b>.","<b>What does he look like?</b> → appearance: He's <b>tall</b> and he has <b>curly hair</b>.","<b>look like + person</b> = similar in appearance: She <b>looks like</b> her dad."],
 ex:[["What's your teacher like? She's kind and patient.",""],["What does your brother look like? He's short with brown hair.",""],["You look like your mom.",""],["What was the movie like? It was exciting!",""]],
 b:["What's your best friend like?","What does she look like?","He looks like his grandpa.","She's tall and very friendly."],
 q:[["What ___ your cousin like? She's very funny.",["is","does","do","has"],0,"Personality → What is she like?"],
    ["What does your dad look ___? He's tall with a beard.",["like","as","similar","—"],0,"Appearance → look like."],
    ["What ___ he look like? He has blue eyes.",["does","is","do","has"],0,"What does he look like?"],
    ["Ana ___ like her mom. They have the same eyes.",["looks","is","does","has"],0,"look like = similar appearance."],
    ["What's your new school like? It's ___.",["big and modern","a teacher","like big","look nice"],0,"Describe it with adjectives."],
    ["What does she look like? ___",["She has long, black hair.","She's very kind.","She likes music.","She's a doctor."],0,"Look like → appearance."]],
 fx:[["What does she like? She's friendly.","What is she like? She's friendly.","Personality → What is she like?"],
     ["He looks as his father.","He looks like his father.","look like + person."]],
 px:[
  {k:"match",p:[["What's your sister like?","She's shy but very kind."],["What does your sister look like?","She has short, red hair."],["What was the party like?","It was really fun!"],["Who do you look like?","I look like my grandma."]],why:"be like = personality. look like = appearance."},
  {k:"read",txt:"My best friend is Iker. He's tall and thin, and he has curly black hair and glasses. He looks a lot like his older brother. Iker is very funny and generous, but sometimes he's a little lazy. Everybody in class likes him.",
   tf:[["Iker has straight hair.",false],["He looks like his brother.",true],["He is funny and generous.",true],["Iker is never lazy.",false]],why:"Look for appearance and personality words."},
  {k:"pick",s:["What [is|does] your teacher like?","What does your mom look [like|as]?","My baby brother [looks|is] like a little angel.","What [was|did] the trip like?"],why:"be like = personality. look like = appearance."},
  {k:"ctx",box:["freckles","generous","beard","shy","polite"],s:[["My uncle has a long black ___.","beard"],["She's ___. She doesn't talk much with new people.","shy"],["He's very ___. He always shares his snacks.","generous"],["She has red hair and ___ on her nose.","freckles"]],why:"One word in the box is extra."},
  {k:"write",lab:"MAKE A QUESTION (personality)",cue:"your best friend ?",a:["What's your best friend like?","What is your best friend like?"],why:"What is … like?"},
  {k:"write",lab:"MAKE A QUESTION (appearance)",cue:"your brother ?",a:["What does your brother look like?"],why:"What does … look like?"},
  {k:"write",cue:"I / look like / my dad",a:["I look like my dad."],why:"look like + person."},
  {k:"un",s:"What does your new neighbor look like?"},
  {k:"un",s:"What was the weather like on your vacation?"}
 ]});
add({id:"c-a2p-11",t:"Know how to · know (that)",s:"skills and facts",
 exp:["<b>know how to</b> + base verb = you have the skill: I <b>know how to</b> swim.","<b>know (that)</b> + sentence = you have the information: I <b>know (that)</b> she's from Puebla.","Negative: <b>don't / doesn't know how to</b>. Question: <b>Do you know how to</b>…?"],
 ex:[["I know how to ride a horse.",""],["Do you know how to make tortillas?",""],["She doesn't know how to swim yet.",""],["I know that pandas eat bamboo.",""]],
 b:["I know how to play chess.","Does he know how to cook?","I didn't know that you had a cat.","We know that the test is tomorrow."],
 q:[["My little sister knows ___ tie her shoes.",["how to","how","to","that"],0,"Skill → know how to + verb."],
    ["Do you know how to ___ a kite?",["fly","flying","flew","to fly"],0,"how to + base verb."],
    ["I know ___ the Earth goes around the Sun.",["that","how to","how","to"],0,"Fact → know that."],
    ["He ___ know how to drive. He's only 12.",["doesn't","don't","isn't","not"],0,"He → doesn't know."],
    ["___ she know how to speak French?",["Does","Do","Is","Has"],0,"She → Does she know…?"],
    ["I didn't know ___ you were sick. I'm sorry!",["that","how to","how","to"],0,"Information → know that."]],
 fx:[["I know how swim very well.","I know how to swim well.","know how to + verb."],
     ["She don't know how to cook.","She doesn't know how to cook.","She → doesn't."]],
 px:[
  {k:"match",p:[["Do you know how to whistle?","Yes, listen!"],["I didn't know that","the store was closed on Sundays."],["My grandma knows how to","make delicious tamales."],["Did you know that","octopuses have three hearts?"]],why:"how to = skill. that = information."},
  {k:"read",txt:"In the survival club, Mateo learned a lot. Now he knows how to make a fire and how to build a small shelter. He also knows that you need to drink water every day in the forest. He doesn't know how to fish yet, but his teacher says he will learn next month.",
   tf:[["Mateo knows how to make a fire.",true],["He knows how to fish.",false],["He knows that water is important in the forest.",true],["He will never learn to fish.",false]],why:"Look for knows how to and knows that."},
  {k:"pick",s:["I know [how to|that] play the guitar.","Did you know [that|how to] spiders aren't insects?","My dad doesn't know how to [dance|dancing].","[Does|Do] your brother know how to swim?"],why:"how to + verb = skill. that + sentence = information."},
  {k:"ctx",box:["knit","sew","fix","bake","whistle"],s:[["My grandma knows how to ___ scarves with wool.","knit"],["Do you know how to ___ a button on a shirt?","sew"],["My dad knows how to ___ bikes.","fix"],["She knows how to ___ bread in the oven.","bake"]],why:"One word in the box is extra."},
  {k:"write",cue:"I / know how to / ride a bike",a:["I know how to ride a bike."],why:"know how to + verb."},
  {k:"write",cue:"my brother / not / know how to / cook",a:["My brother doesn't know how to cook.","My brother does not know how to cook."],why:"He → doesn't know how to."},
  {k:"write",lab:"MAKE A QUESTION",cue:"you / know how to / play chess ?",a:["Do you know how to play chess?"],why:"Do you know how to…?"},
  {k:"un",s:"Do you know how to say this in English?"},
  {k:"un",s:"I didn't know that whales are mammals."}
 ]});
add({id:"c-a2p-12",t:"Zero conditional",s:"If you heat ice, it melts.",
 exp:["Use the zero conditional for facts and things that are <b>always true</b>.","<b>If</b> + present simple, present simple: <b>If</b> you <b>heat</b> ice, it <b>melts</b>.","You can also use <b>when</b>: <b>When</b> it rains, the streets get wet.","If the if-part is first, use a comma."],
 ex:[["If you mix red and yellow, you get orange.",""],["If plants don't get water, they die.",""],["When I'm tired, I go to bed early.",""],["Water boils if you heat it to 100 °C.",""]],
 b:["If you heat water, it boils.","If I eat too much, I feel sick.","Plants grow if they get sun.","When it's cold, I wear a jacket."],
 q:[["If you ___ ice, it melts.",["heat","heated","will heat","heating"],0,"Zero conditional: If + present."],
    ["If you mix blue and yellow, you ___ green.",["get","got","will get","getting"],0,"Present simple in both parts."],
    ["If my dog ___ a cat, it barks.",["sees","see","saw","will see"],0,"It → sees."],
    ["Plants die ___ they don't get water.",["if","so","but","because of"],0,"Condition → if."],
    ["If it ___, the ground gets wet.",["rains","rain","rained","raining"],0,"It → rains."],
    ["When I'm hungry, I ___ grumpy.",["get","got","will get","getting"],0,"Facts → present simple."]],
 fx:[["If you will heat chocolate, it melts.","If you heat the chocolate, it melts.","Zero conditional: present, not will."],
     ["If it snow, schools close.","If it snows, schools close.","It → snows."]],
 px:[
  {k:"match",p:[["If you heat water to 100 °C,","it boils."],["If you drop a glass,","it breaks."],["If you don't sleep,","you feel tired."],["If you mix red and white,","you get pink."]],why:"These are facts. They are always true."},
  {k:"read",txt:"Volcanoes are amazing. If magma rises to the surface, a volcano can erupt. When lava touches the air, it cools and becomes rock. If a volcano erupts near the sea, the lava makes new land. That's how islands like Hawaii were born!",
   tf:[["If magma rises, a volcano can erupt.",true],["Lava gets hotter when it touches the air.",false],["Lava can make new land near the sea.",true],["Hawaii was made by an earthquake.",false]],why:"Look for if and when."},
  {k:"pick",s:["If you [press|will press] this button, the light turns on.","If I drink coffee, I [can't|couldn't] sleep.","When the sun [goes|go] down, it gets dark.","If babies are hungry, they [cry|cried]."],why:"Zero conditional: present simple + present simple."},
  {k:"ctx",box:["melts","floats","freezes","sinks","grows"],s:[["If you put ice in the sun, it ___.","melts"],["If you put wood in water, it ___.","floats"],["If water gets very cold, it ___.","freezes"],["If you put a rock in water, it ___.","sinks"]],why:"One word in the box is extra."},
  {k:"write",lab:"JOIN WITH IF",cue:"you / not water plants  +  they / die",a:["If you don't water plants, they die.","If you do not water plants, they die.","If you don't water plants they die.","Plants die if you don't water them."],why:"If + present, present."},
  {k:"write",lab:"JOIN WITH WHEN",cue:"I / be hungry  +  I / eat fruit",a:["When I'm hungry, I eat fruit.","When I am hungry, I eat fruit.","When I'm hungry I eat fruit.","I eat fruit when I'm hungry."],why:"When + present, present."},
  {k:"write",cue:"if / you / heat / ice cream / it / melt",a:["If you heat ice cream, it melts.","If you heat ice cream it melts.","Ice cream melts if you heat it."],why:"It → melts."},
  {k:"un",s:"What happens if you mix oil and water?"},
  {k:"un",s:"If I don't eat breakfast, I feel hungry at school."}
 ]});
add({id:"c-a2p-13",t:"So / Such",s:"so cold · such a cold day",
 exp:["<b>so</b> + adjective: It's <b>so</b> cold!","<b>such a / an</b> + adjective + singular noun: It's <b>such a</b> cold day!","<b>such</b> + adjective + plural / uncountable noun: They're <b>such</b> nice people."],
 ex:[["The movie was so funny!",""],["It was such a funny movie!",""],["You're so kind.",""],["They're such good friends.",""]],
 b:["This book is so interesting.","It's such an interesting book.","The kids were so tired.","We had such a great time!"],
 q:[["The pizza is ___ delicious!",["so","such","such a","so a"],0,"so + adjective."],
    ["It was ___ beautiful day!",["such a","so","such","so a"],0,"such a + adjective + noun."],
    ["They are ___ friendly people.",["such","so","such a","so much"],0,"Plural noun → such."],
    ["I'm ___ hungry. Let's eat!",["so","such","such a","very a"],0,"so + adjective."],
    ["She's ___ amazing singer.",["such an","such a","so","so an"],0,"amazing starts with a vowel → such an."],
    ["The test was ___ easy that I finished early.",["so","such","such an","so an"],0,"so + adjective."]],
 fx:[["It was so a long trip.","It was such a long trip.","such a + adjective + noun."],
     ["The kids are such tired.","The kids are so tired.","so + adjective."]],
 px:[
  {k:"match",p:[["It's so","hot today!"],["It's such a","hot day!"],["They're such","good players."],["You're so","good at drawing!"]],why:"so + adjective. such (a) + adjective + noun."},
  {k:"read",txt:"Our trip to Chiapas was amazing. The waterfalls were so beautiful, and the water was so blue! We stayed in such a nice cabin in the forest. The local people were such friendly people. It was such a great adventure that I want to go back next year.",
   tf:[["The waterfalls were beautiful.",true],["They stayed in a hotel in the city.",false],["The people were friendly.",true],["They don't want to go back.",false]],why:"Look for so and such."},
  {k:"pick",s:["The ride was [so|such] scary!","It was [such a|so] scary ride!","These shoes are [so|such] comfortable.","You have [such|so] beautiful eyes."],why:"so + adjective. such + adjective + noun."},
  {k:"ctx",box:["so","such","such a","such an","very a"],s:[["My cat is ___ lazy!","so"],["It was ___ funny joke!","such a"],["They're ___ noisy neighbors.","such"],["She's ___ excellent teacher.","such an"]],why:"One option in the box is wrong English."},
  {k:"write",lab:"USE SUCH",cue:"The day was so cold.  →  It was…",a:["It was such a cold day.","It was such a cold day!"],why:"such a + adjective + noun."},
  {k:"write",lab:"USE SO",cue:"It's such an easy game.  →  The game is…",a:["The game is so easy.","The game is so easy!"],why:"so + adjective."},
  {k:"write",lab:"USE SUCH",cue:"Your friends are so nice.  →  They are…",a:["They are such nice friends.","They're such nice friends."],why:"Plural → such."},
  {k:"un",s:"It was such a good idea to come here!"},
  {k:"un",s:"Why are you so happy today?"}
 ]});
add({id:"c-a2p-14",t:"Feel like + -ing",s:"what you want to do now",
 exp:["<b>feel like</b> + verb-<b>ing</b> = want to do something now: I <b>feel like going</b> to the beach.","<b>feel like</b> + noun: I <b>feel like</b> a pizza.","Negative: I <b>don't feel like</b> studying. Question: <b>Do you feel like</b> playing?"],
 ex:[["I feel like eating ice cream.",""],["Do you feel like watching a movie?",""],["She doesn't feel like going out today.",""],["I feel like a hot chocolate.",""]],
 b:["I feel like dancing!","Do you feel like playing a game?","He doesn't feel like talking.","We feel like having pizza."],
 q:[["I'm bored. I feel like ___ a walk.",["taking","take","to take","took"],0,"feel like + -ing."],
    ["Do you feel like ___ to the park?",["going","go","to go","went"],0,"feel like + -ing."],
    ["She ___ feel like studying today.",["doesn't","don't","isn't","not"],0,"She → doesn't."],
    ["It's hot! I feel like ___ ice cream.",["an","a","to","—"],0,"feel like + noun: an ice cream."],
    ["___ you feel like playing soccer?",["Do","Are","Does","Is"],0,"Do you feel like…?"],
    ["We don't feel ___ cooking tonight.",["like","as","to","for"],0,"feel like."]],
 fx:[["I feel like go home.","I feel like going home.","feel like + -ing."],
     ["She don't feel like dancing.","She doesn't feel like dancing.","She → doesn't."]],
 px:[
  {k:"match",p:[["It's so hot.","I feel like swimming."],["I'm tired.","I don't feel like running."],["I'm hungry.","I feel like a sandwich."],["It's raining.","Do you feel like watching a movie?"]],why:"Match the situation with what you want to do."},
  {k:"read",txt:"It's Sunday afternoon and it's raining. Camila doesn't feel like going out. Her brother feels like playing video games, but she feels like reading a mystery book. Later, they both feel like eating something sweet, so they make hot chocolate and cookies.",
   tf:[["Camila feels like going out.",false],["Her brother feels like playing video games.",true],["Camila feels like reading.",true],["They feel like eating salad.",false]],why:"Look for feel like + -ing."},
  {k:"pick",s:["I feel like [watching|watch] cartoons.","Do you feel [like|to] going out?","My mom [doesn't|don't] feel like cooking.","I feel like [a|an] cold drink."],why:"feel like + -ing or + noun."},
  {k:"ctx",box:["sleeping","dancing","eating","laughing","studying"],s:[["The music is great! I feel like ___.","dancing"],["I'm exhausted. I feel like ___ for ten hours.","sleeping"],["That joke was so funny. I can't stop ___!","laughing"],["It's Friday night. I don't feel like ___.","studying"]],why:"One word in the box is extra."},
  {k:"write",cue:"I / feel like / play outside",a:["I feel like playing outside."],why:"feel like + -ing."},
  {k:"write",cue:"he / not / feel like / do homework",a:["He doesn't feel like doing homework.","He does not feel like doing homework.","He doesn't feel like doing his homework."],why:"He → doesn't feel like + -ing."},
  {k:"write",lab:"MAKE A QUESTION",cue:"you / feel like / go to the movies ?",a:["Do you feel like going to the movies?"],why:"Do you feel like + -ing?"},
  {k:"un",s:"What do you feel like doing this weekend?"},
  {k:"un",s:"I don't feel like eating vegetables today."}
 ]});
add({id:"c-a2p-15",t:"Made of / from / by",s:"materials and makers",
 exp:["<b>made of</b> = you can see the material: The table is <b>made of</b> wood.","<b>made from</b> = the material changed: Paper is <b>made from</b> trees.","<b>made by</b> = the person who made it: This scarf was <b>made by</b> my grandma.","<b>made in</b> = the place: My phone was <b>made in</b> China."],
 ex:[["This ring is made of gold.",""],["Cheese is made from milk.",""],["This vase was made by an artist from Oaxaca.",""],["These shoes were made in León.",""]],
 b:["The bag is made of leather.","Bread is made from flour.","This cake was made by my mom.","My guitar was made in Spain."],
 q:[["My T-shirt is made ___ cotton.",["of","by","in","at"],0,"You can see the material → made of."],
    ["Chocolate is made ___ cacao beans.",["from","of","by","in"],0,"The material changed → made from."],
    ["This painting was made ___ Frida Kahlo.",["by","of","from","in"],0,"The person → made by."],
    ["These toys were made ___ Mexico.",["in","by","of","from"],0,"The place → made in."],
    ["The window is made ___ glass.",["of","by","in","with"],0,"Material you can see → of."],
    ["Glass is made ___ sand.",["from","of","by","in"],0,"Sand changes into glass → from."]],
 fx:[["Paper is made of trees.","Paper is made from trees.","The material changed → from."],
     ["This song was made of Shakira.","This song was made by Shakira.","Person → made by."]],
 px:[
  {k:"match",p:[["Butter is made","from milk."],["This necklace is made","of silver."],["The Mona Lisa was painted","by Leonardo da Vinci."],["My sneakers were made","in Vietnam."]],why:"of = material, from = changed material, by = person, in = place."},
  {k:"read",txt:"In Talavera, Puebla, artisans make beautiful pottery. The plates and vases are made from clay that comes from the region. Each piece is painted by hand, usually in blue and white. Some pieces are made by families that have worked with clay for 100 years.",
   tf:[["Talavera pottery is made from clay.",true],["Machines paint the pieces.",false],["Many pieces are blue and white.",true],["The clay comes from China.",false]],why:"Look for made from and made by."},
  {k:"pick",s:["This chair is made [of|by] plastic.","Wine is made [from|of] grapes.","The cake was made [by|of] my brother.","My watch was made [in|by] Switzerland."],why:"of, from, by or in?"},
  {k:"ctx",box:["wool","glass","leather","rubber","gold"],s:[["My sweater is made of ___ from sheep.","wool"],["Tires are made of ___.","rubber"],["The bottle is made of ___. Be careful!","glass"],["Her belt is made of ___.","leather"]],why:"One word in the box is extra."},
  {k:"write",cue:"my desk / made / wood",a:["My desk is made of wood."],why:"Material you can see → made of."},
  {k:"write",cue:"yogurt / made / milk",a:["Yogurt is made from milk."],why:"Changed material → made from."},
  {k:"write",cue:"this bracelet / made / my sister  (past)",a:["This bracelet was made by my sister."],why:"Person → made by."},
  {k:"un",s:"What is your backpack made of?"},
  {k:"un",s:"Tortillas are made from corn or flour."}
 ]});
add({id:"c-a2p-16",t:"Before / After + -ing",s:"order of actions",
 exp:["<b>before / after</b> + verb-<b>ing</b>: <b>Before going</b> to bed, I brush my teeth.","Same meaning: Before <b>I go</b> to bed… = Before <b>going</b> to bed…","Use it when both actions have the <b>same subject</b>."],
 ex:[["Wash your hands before eating.",""],["After finishing my homework, I played outside.",""],["She stretches before running.",""],["After watching the movie, we went to sleep.",""]],
 b:["Before leaving, close the door.","After eating, we washed the dishes.","He reads before sleeping.","After school, I rest before studying."],
 q:[["Brush your teeth before ___ to bed.",["going","go","went","to go"],0,"before + -ing."],
    ["After ___ the game, they celebrated.",["winning","win","won","to win"],0,"after + -ing."],
    ["Read the instructions ___ starting the test.",["before","after","while","during"],0,"Read first → before."],
    ["___ eating lunch, we went for a walk.",["After","Before","During","While"],0,"The walk came later → after."],
    ["She always stretches before ___.",["running","run","runs","to run"],0,"before + -ing."],
    ["After ___ the news, I called my mom.",["hearing","hear","heard","to hear"],0,"after + -ing."]],
 fx:[["Before go out, put on a jacket.","Before going out, put on a jacket.","before + -ing."],
     ["After eat, we rested.","After eating, we rested.","after + -ing."]],
 px:[
  {k:"match",p:[["Wash your hands","before eating."],["Put on sunscreen","before going to the beach."],["After finishing the race,","the runners drank water."],["Turn off the lights","before leaving the room."]],why:"Which action comes first?"},
  {k:"read",txt:"Astronauts have a special routine. Before going into space, they train for many years. After arriving at the space station, they need a few days to get used to living without gravity. Before sleeping, they attach their sleeping bags to the wall so they don't float away!",
   tf:[["Astronauts train before going into space.",true],["They feel normal right after arriving.",false],["They attach their sleeping bags before sleeping.",true],["They sleep in normal beds.",false]],why:"Look for before and after + -ing."},
  {k:"pick",s:["Check your bag before [leaving|leave].","After [watching|watched] the show, we had dinner.","[Before|After] eating, wait 30 minutes to swim.","Think carefully before [answering|answer]."],why:"before / after + -ing."},
  {k:"ctx",box:["crossing","waking","cooking","swimming","paying"],s:[["Look both ways before ___ the street.","crossing"],["After ___ up, I drink a glass of water.","waking"],["Wash the vegetables before ___ them.","cooking"],["Check the price before ___.","paying"]],why:"One word in the box is extra."},
  {k:"write",lab:"USE BEFORE + -ING",cue:"I brush my teeth  →  (I go to bed)",a:["I brush my teeth before going to bed.","Before going to bed, I brush my teeth.","Before going to bed I brush my teeth."],why:"before + going."},
  {k:"write",lab:"USE AFTER + -ING",cue:"(we finished the test)  →  we went outside",a:["After finishing the test, we went outside.","After finishing the test we went outside.","We went outside after finishing the test."],why:"after + finishing."},
  {k:"write",lab:"USE BEFORE + -ING",cue:"say goodbye  →  (you leave)",a:["Say goodbye before leaving.","Before leaving, say goodbye."],why:"before + leaving."},
  {k:"un",s:"What do you do after getting home from school?"},
  {k:"un",s:"Always read the question before writing your answer."}
 ]});
add({id:"c-a2p-17",t:"Present simple for the future",s:"timetables and schedules",
 exp:["Use the <b>present simple</b> for future events on a <b>timetable or schedule</b>: The train <b>leaves</b> at 8:00.","Common verbs: leave, arrive, start, begin, finish, open, close.","Compare: My plane <b>leaves</b> at 6 (timetable). I'<b>m flying</b> to Cancún (my plan)."],
 ex:[["The movie starts at 7:30 tonight.",""],["School finishes on December 15th.",""],["What time does the bus leave tomorrow?",""],["The museum opens at 10 on Sundays.",""]],
 b:["The plane leaves at noon.","The concert starts at 9.","When does the store open?","Our vacation begins next Friday."],
 q:[["Hurry! The bus ___ in five minutes.",["leaves","leave","is leave","leaving"],0,"Timetable → present simple."],
    ["What time ___ the movie start tonight?",["does","do","is","will"],0,"Question → does … start?"],
    ["The museum ___ at 6 p.m. tomorrow.",["closes","close","closing","is close"],0,"Schedule → present simple."],
    ["Our flight ___ in Madrid at 10 a.m.",["arrives","arrive","arriving","is arrive"],0,"It → arrives."],
    ["Classes ___ on January 8th.",["start","starts","starting","is start"],0,"Classes (plural) → start."],
    ["When ___ the store open on Sundays?",["does","do","is","are"],0,"When does … open?"]],
 fx:[["The train leave at 7:15.","The train leaves at 7:15.","It → leaves."],
     ["What time do the show start?","What time does the show start?","The show → does."]],
 px:[
  {k:"match",p:[["The bus to Saltillo","leaves at 8:30."],["The soccer match","starts at 5 p.m."],["The bank","opens at 9 a.m."],["Our English class","finishes at 6."]],h:"Read the schedule. Match.",why:"Timetables use the present simple."},
  {k:"read",txt:"SUMMER CAMP SCHEDULE. Camp starts on Monday, July 6th. The bus leaves from school at 7:00 a.m. and arrives at the camp at 9:30. Swimming lessons begin at 11:00 every day. The camp finishes on Friday at 4:00 p.m.",
   tf:[["Camp starts on Monday.",true],["The bus leaves at 9:30.",false],["Swimming lessons begin at 11:00.",true],["Camp finishes on Saturday.",false]],why:"Look for the times and days."},
  {k:"pick",s:["The concert [starts|start] at 8 tonight.","What time [does|do] the plane land?","The stores [close|closes] early on Sunday.","Hurry, the train [leaves|is leave] soon!"],why:"Timetables → present simple."},
  {k:"ctx",box:["opens","lands","begins","boards","finishes"],s:[["The library ___ at 9 a.m. tomorrow.","opens"],["Our plane ___ in Cancún at 3 p.m.","lands"],["The school year ___ in August.","begins"],["The game ___ at 10 p.m., so we can't stay.","finishes"]],why:"One word in the box is extra."},
  {k:"write",cue:"the movie / start / at 6:30",a:["The movie starts at 6:30."],why:"It → starts."},
  {k:"write",lab:"MAKE A QUESTION",cue:"what time / the train / leave ?",a:["What time does the train leave?"],why:"What time does … leave?"},
  {k:"write",cue:"the store / not open / on holidays",a:["The store doesn't open on holidays.","The store does not open on holidays."],why:"It → doesn't open."},
  {k:"un",s:"When does the next bus to Monterrey leave?"},
  {k:"un",s:"The swimming pool closes at eight tonight."}
 ]});
add({id:"c-a2p-18",t:"Question words",s:"who, whose, which, how often",
 exp:["<b>Who</b> → a person. <b>Whose</b> → the owner: <b>Whose</b> bag is this?","<b>Which</b> → choice between a few things: <b>Which</b> color do you want, red or blue?","<b>How often</b> → frequency: <b>How often</b> do you swim? Twice a week.","Also: what, where, when, why, how, how much, how many, how long."],
 ex:[["Whose phone is this? It's Ana's.",""],["Which T-shirt do you prefer?",""],["How often do you go to the movies?",""],["Who is your favorite singer?",""]],
 b:["Whose pencil is this?","Which one do you want?","How often do you exercise?","Who called you last night?"],
 q:[["___ jacket is this? It's Tom's.",["Whose","Who","Which","Who's"],0,"The owner → Whose."],
    ["___ do you brush your teeth? Three times a day.",["How often","How many","When","How long"],0,"Frequency → How often."],
    ["___ ice cream do you want, chocolate or vanilla?",["Which","Who","Whose","How"],0,"Choice → Which."],
    ["___ is your best friend? Mateo.",["Who","Whose","Which","What"],0,"A person → Who."],
    ["___ brothers do you have? Two.",["How many","How much","How often","Which"],0,"Countable number → How many."],
    ["___ does the trip take? About two hours.",["How long","How often","How far","When"],0,"Time duration → How long."]],
 fx:[["Who's backpack is this?","Whose backpack is this?","Owner → Whose."],
     ["How much often do you swim?","How often do you go swimming?","How often (no much)."]],
 px:[
  {k:"match",p:[["Whose book is this?","It's my sister's."],["How often do you read?","Every night."],["Which one do you like?","The blue one."],["Who wrote this book?","J.K. Rowling."],["How long is the movie?","Two hours."]],why:"Match the question with the right answer."},
  {k:"read",txt:"Survey results: In our class, 15 students play a sport. Most of them practice three times a week. Soccer is the most popular sport, and basketball is second. Sofía is the student who practices the most: she swims every day! Pablo's bike is the newest one in class; he rides it to school.",
   tf:[["Most students practice three times a week.",true],["Basketball is the most popular sport.",false],["Sofía swims every day.",true],["The newest bike is Sofía's.",false]],why:"Think: how often, which, who, whose."},
  {k:"pick",s:["[Whose|Who's] shoes are these?","[Which|Who] team won the game?","[How often|How long] do you visit your grandparents?","[Who|Whose] is your teacher?"],why:"Whose = owner. Which = choice. How often = frequency. Who = person."},
  {k:"ctx",box:["Whose","Which","How often","Who","How much"],s:[["___ do you go to the dentist? Twice a year.","How often"],["___ umbrella is this? It's mine.","Whose"],["___ bus goes downtown, the 12 or the 15?","Which"],["___ is that girl? She's my cousin.","Who"]],why:"One question word is extra."},
  {k:"write",lab:"MAKE A QUESTION",cue:"? — It's Leo's cap. (whose)",a:["Whose cap is this?","Whose cap is that?","Whose cap is it?"],why:"Whose + noun + is this?"},
  {k:"write",lab:"MAKE A QUESTION",cue:"? — I play tennis twice a week. (how often)",a:["How often do you play tennis?"],why:"How often + do you…?"},
  {k:"write",lab:"MAKE A QUESTION",cue:"? — I prefer the red one. (which)",a:["Which one do you prefer?","Which do you prefer?","Which color do you prefer?"],why:"Which + do you prefer?"},
  {k:"un",s:"How often do you eat fast food?"},
  {k:"un",s:"Which movie do you want to watch tonight?"}
 ]});
/* mazos de vocabulario Now I Know 4 y 5 (se agregan al final) */
function deck(n,w){L.vocab=L.vocab||[];if(L.vocab.some(function(v){return v.n===n;}))return;L.vocab.push({n:n,w:w});}
deck("Buildings and measurements",[["skyscraper","a very, very tall building"],["bridge","it goes over a river or a road"],["tower","a tall, narrow building"],["height","how tall something is"],["length","how long something is"],["width","how wide something is"],["weight","how heavy something is"],["meter","a unit to measure length (100 cm)"],["kilogram","a unit to measure weight (1,000 g)"],["architect","a person who designs buildings"]]);
deck("Life in the past",[["candle","a stick of wax that gives light"],["well","a deep hole in the ground for getting water"],["horse and cart","an old way to carry people and things"],["washboard","a board people used to wash clothes by hand"],["typewriter","an old machine for writing letters"],["telegram","a short message sent by an old system"],["chores","jobs you do at home"],["village","a very small town"],["grandparents","your mom's and dad's parents"],["century","100 years"]]);
deck("Helping others",[["charity","an organization that helps people in need"],["donate","give money or things to help"],["volunteer","a person who helps without being paid"],["raise money","collect money for a good cause"],["homeless","with no place to live"],["shelter","a safe place for people or animals"],["community","the people who live in an area"],["neighbor","a person who lives near you"],["kindness","being nice and caring"],["fundraiser","an event to collect money"]]);
deck("Crafts and tools",[["hammer","a tool to hit nails"],["nail","a thin piece of metal you hit with a hammer"],["saw","a tool to cut wood"],["screwdriver","a tool to turn screws"],["glue","you stick things together with it"],["scissors","you cut paper with them"],["thread","a long, thin string for sewing"],["needle","a thin metal thing for sewing"],["clay","soft earth for making pots"],["paintbrush","you paint with it"]]);
deck("Study skills",[["take notes","write the important ideas"],["highlight","color important words with a marker"],["summarize","say the main ideas in a short way"],["review","study something again"],["memorize","learn something so you can remember it exactly"],["concentrate","think only about one thing"],["schedule","a plan with times for each activity"],["mind map","a drawing that connects ideas"],["dictionary","a book that explains words"],["revise","check and correct your work"]]);
deck("Migration",[["migrate","move from one place to another"],["immigrant","a person who comes to live in a new country"],["border","the line between two countries"],["passport","an official document to travel abroad"],["journey","a long trip"],["culture","the customs and traditions of a group"],["homeland","the country where you were born"],["language","the words people use to talk"],["settle","start living in a new place"],["flock","a group of birds that travel together"]]);
})();

/* MOVA · los lotes nuevos llegan en archivos aparte con nombre único: ruta-lote5.js, ruta-lote6.js…
   Cada lote carga al siguiente, así no hay que volver a tocar este archivo. */
(function(){try{document.write('<script src="ruta-lote5.js"><\/script>');}catch(e){}})();
