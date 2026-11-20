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
