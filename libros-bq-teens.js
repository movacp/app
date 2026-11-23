/* MOVA · Banco de preguntas por libro (Teens / primaria alta y secundaria):
   Focus 1, Focus 2, High Note 1, Now I Know 5, Now I Know 6, New Keystone A.
   Mismo formato que libros-quiz.js. */
window.MOVA_BQ = window.MOVA_BQ || {};
(function(B){
function put(b,o){B[b]=B[b]||{};for(var k in o)B[b][k]=o[k];}

/* ───────── Focus 1 (2nd ed.) ───────── */
put("focus-1", {
 1: {
  rm: "Present Simple: I / you / we / they <b>play</b> · he / she / it <b>plays</b> (watch → watch<b>es</b>, study → stud<b>ies</b>). Negative: <b>don't / doesn't</b> + verb. Questions: <b>Do / Does</b> + subject + verb? · Wh-: <b>What time do</b> you get up? <b>Where does</b> she live? · Prepositions: <b>at</b> 7:00, <b>on</b> Monday, <b>in</b> the morning.",
  g: [
   ["My brother ___ football every Saturday.", "plays", ["play", "playing", "is play"], "he → plays."],
   ["She ___ TV after dinner.", "watches", ["watchs", "watch", "watching"], "-ch → -es: watches."],
   ["We ___ go to school on Sundays.", "don't", ["doesn't", "aren't", "not"], "we → don't."],
   ["My dad ___ like coffee.", "doesn't", ["don't", "isn't", "not"], "he → doesn't."],
   ["___ your parents work at the weekend?", "Do", ["Does", "Are", "Is"], "they → Do…?"],
   ["What time ___ your sister get up?", "does", ["do", "is", "has"], "she → does."],
   ["I have breakfast ___ 7:30.", "at", ["on", "in", "to"], "Clock time → at."],
   ["We visit my grandparents ___ Sunday.", "on", ["in", "at", "for"], "Days → on."]
  ],
  vd: [
   ["You ___ a shower every morning. (verb)", "have"],
   ["You ___ to bed at 10 p.m. (verb)", "go"],
   ["You ___ the guitar or video games. (verb)", "play"],
   ["Your mother's sister.", "aunt"],
   ["Your aunt's son or daughter.", "cousin"],
   ["You leave your bed in the morning.", "get up"],
   ["You arrive home after school.", "get home"],
   ["Your mother's father.", "grandfather"],
   ["A brother or sister.", "sibling"],
   ["You study at home after class.", "do homework"]
  ],
  r: { t: "A Day in Eva's Life", x: [
    "Eva is fourteen and she lives in Valencia with her parents and her twin brother, Dani. On weekdays she gets up at seven o'clock and has a quick breakfast.",
    "School starts at eight. Eva doesn't have lunch at school; she goes home at two and eats with her grandmother. Dani plays basketball in the afternoon, but Eva prefers music – she plays the piano.",
    "In the evening the family has dinner together. Eva goes to bed at ten thirty, but on Fridays she stays up late and chats with her cousins online."],
   q: [
    ["Who does Eva have lunch with?", "her grandmother", ["her brother", "her friends at school", "her parents"]],
    ["What does Eva do in the afternoon?", "She plays the piano.", ["She plays basketball.", "She goes to school.", "She chats online."]],
    ["When does she go to bed late?", "on Fridays", ["every day", "on Mondays", "never"]]
   ] },
  l: [
   ["Boy: What time do you get up? Girl: At half past six. I take the bus at seven.", "What time does the girl get up?", "6:30", ["7:00", "6:00", "7:30"]],
   ["My cousin Leo lives in Monterrey. He doesn't like football, he loves swimming.", "What does Leo love?", "swimming", ["football", "basketball", "running"]],
   ["On Saturdays we have lunch with my grandparents in the afternoon.", "When do they have lunch with the grandparents?", "on Saturdays", ["on Sundays", "every day", "on Fridays"]],
   ["Girl: Does your brother play an instrument? Boy: Yes, he does. He plays the drums.", "What does the brother play?", "the drums", ["the guitar", "the piano", "football"]]
  ],
  w: { u: ["She gets up at seven o'clock.", "Does your dad work on Saturdays?", "We don't have lunch at school."],
   o: ["Write about a typical school day. Use at, on and in with times.", "Describe a family member: where he / she lives and what he / she does every day."] },
  p: [
   [["plays", "goes", "watches", "lives"], 2, "-s / -es ending: /ɪz/"],
   [["aunt", "cousin", "uncle", "brother"], 0, "u / o as in cousin"],
   [["get", "every", "breakfast", "these"], 3, "e as in get"]
  ]
 },
 2: {
  rm: "Countable: <b>an</b> apple, <b>two</b> eggs, <b>How many</b> eggs? · Uncountable: <b>some</b> rice, <b>How much</b> milk? (no plural, no a / an) · <b>some</b> in affirmatives, <b>any</b> in negatives and questions. · Articles: <b>a / an</b> = one, first time; <b>the</b> = specific, already mentioned; no article for things in general: I like cheese.",
  g: [
   ["How ___ sugar do we need?", "much", ["many", "a", "lot"], "sugar is uncountable → much."],
   ["How ___ eggs are there?", "many", ["much", "a lot", "any"], "eggs are countable → many."],
   ["There isn't ___ milk in the fridge.", "any", ["some", "a", "many"], "Negative → any."],
   ["Can I have ___ apple, please?", "an", ["a", "some", "any"], "Vowel sound → an."],
   ["I bought a cake. ___ cake was delicious.", "The", ["A", "An", "Some"], "Already mentioned → the."],
   ["We need ___ bread for the sandwiches.", "some", ["any", "a", "many"], "Affirmative uncountable → some."],
   ["I'd like ___ orange juice, please.", "an", ["a", "the", "any"], "orange starts with a vowel sound → an."],
   ["There are ___ tomatoes in the bag.", "some", ["any", "much", "a"], "Affirmative plural → some."]
  ],
  vd: [
   ["A container for juice or milk made of paper.", "carton"],
   ["A glass container for jam or honey.", "jar"],
   ["A metal container for soup or beans.", "can"],
   ["A container for water or soda.", "bottle"],
   ["To cook in hot oil.", "fry"],
   ["To cook in hot water.", "boil"],
   ["To cook in the oven, like bread.", "bake"],
   ["To cut into small pieces.", "chop"],
   ["The opposite of sweet, like a lemon.", "sour"],
   ["Food with a lot of chili.", "spicy"]
  ],
  r: { t: "The Street Food Festival", x: [
    "Every year in May there is a street food festival in our town. There are more than fifty stalls and the smell is amazing!",
    "My favourite stall sells tacos. The cook fries the meat, chops some onions and adds a spicy sauce. Next to it, an old lady bakes bread and sells jars of honey.",
    "There isn't any fast food at the festival – everything is homemade. The only problem is the queue: you sometimes wait thirty minutes for a taco!"],
   q: [
    ["How many stalls are there?", "more than fifty", ["fifteen", "thirty", "less than fifty"]],
    ["What does the old lady sell?", "bread and honey", ["tacos", "onions and sauce", "fast food"]],
    ["What is the problem at the festival?", "You wait a long time.", ["The food is bad.", "It's expensive.", "There's fast food."]]
   ] },
  l: [
   ["Mum: How much milk is there? Boy: Not much. Just half a carton.", "How much milk is there?", "half a carton", ["two cartons", "no milk", "a bottle"]],
   ["For this recipe you need two eggs, some flour and a little sugar.", "How many eggs do you need?", "two", ["one", "three", "some"]],
   ["Girl: Are there any biscuits? Boy: No, there aren't, but there's some cake.", "What is there to eat?", "cake", ["biscuits", "bread", "nothing"]],
   ["First, boil the water. Then add the pasta and cook it for ten minutes.", "How long do you cook the pasta?", "ten minutes", ["five minutes", "two minutes", "twenty minutes"]]
  ],
  w: { u: ["How much water do you drink?", "There aren't any eggs in the fridge.", "I need a bottle of water."],
   o: ["Write a simple recipe. Use some, any, a / an and cooking verbs.", "Describe your favourite meal: what's in it and how it tastes."] },
  p: [
   [["bread", "head", "meat", "breakfast"], 2, "ea as in bread"],
   [["jar", "carton", "can", "car"], 2, "ar sound"],
   [["fry", "spicy", "chips", "rice"], 2, "i as in rice"]
  ]
 }
});

/* ───────── Focus 2 (2nd ed.) ───────── */
put("focus-2", {
 1: {
  rm: "Present Simple (habits) vs Present Continuous (now / temporary): She <b>works</b> in a bank, but this week she<b>'s working</b> from home. · Subject questions: <b>Who lives</b> here? (no do) · Object questions: <b>Who do you live</b> with? · Verb + <b>-ing</b> (enjoy, avoid, don't mind) / + <b>to</b> (want, decide, hope). · <b>so</b> + adjective / <b>such a</b> + adjective + noun.",
  g: [
   ["Listen! Somebody ___ the piano.", "is playing", ["plays", "play", "playing"], "Listen! → action now: Present Continuous."],
   ["My mum usually ___ to work by bus.", "goes", ["is going", "go", "going"], "usually → habit: Present Simple."],
   ["Who ___ the best grades in your class?", "gets", ["does get", "get", "do get"], "Subject question → no do: Who gets…?"],
   ["Who ___ you talk to when you have a problem?", "do", ["does", "are", "–"], "Object question → do you talk."],
   ["I really enjoy ___ new people.", "meeting", ["to meet", "meet", "met"], "enjoy + -ing."],
   ["She decided ___ a new hobby.", "to start", ["starting", "start", "started"], "decide + to."],
   ["He's ___ a kind person!", "such", ["so", "very a", "too"], "such a + adjective + noun."],
   ["The film was ___ boring that I fell asleep.", "so", ["such", "such a", "too"], "so + adjective + that."]
  ],
  vd: [
   ["The opposite of patient.", "impatient"],
   ["The opposite of honest.", "dishonest"],
   ["The opposite of responsible.", "irresponsible"],
   ["Someone who doesn't change their opinion easily.", "stubborn"],
   ["Someone who works hard.", "hard-working"],
   ["Someone who is not afraid.", "brave"],
   ["Someone who thinks only about himself.", "selfish"],
   ["Someone who likes giving to others.", "generous"],
   ["Interested ___ (preposition).", "in"],
   ["Good ___ maths (preposition).", "at"]
  ],
  r: { t: "Living on a Boat", x: [
    "Most teenagers live in a house or a flat, but sixteen-year-old Maya lives on a boat with her parents and her younger brother. They usually travel along the coast of Portugal, and this month they are staying in a small harbour near Lisbon.",
    "Maya studies online and she's very self-disciplined – nobody tells her when to do her homework. She enjoys meeting people in every new port, although she admits it's sometimes difficult to say goodbye.",
    "\"People think it's such an easy life,\" she says, \"but it's hard work. We all help to clean the boat and cook. My brother is so impatient – he hates waiting for the wind!\""],
   q: [
    ["Where is Maya staying this month?", "in a harbour near Lisbon", ["in a flat in Lisbon", "in the middle of the sea", "at her grandparents'"]],
    ["How does Maya study?", "online", ["at a local school", "with her brother", "she doesn't study"]],
    ["What is difficult for Maya?", "saying goodbye", ["meeting people", "doing homework", "cooking"]]
   ] },
  l: [
   ["Girl: What are you doing? Boy: I'm studying for the test. I usually study in the evening, but today I'm starting early.", "When does the boy usually study?", "in the evening", ["in the morning", "early today", "at the weekend"]],
   ["My sister is very generous. She always shares her things with me.", "What is the sister like?", "generous", ["selfish", "stubborn", "impatient"]],
   ["Who lives next door? An old man who loves gardening.", "What does the neighbour love?", "gardening", ["cooking", "reading", "walking"]],
   ["I don't mind helping at home, but I hate cleaning my room.", "What does the speaker hate?", "cleaning the room", ["helping at home", "cooking", "studying"]]
  ],
  w: { u: ["Who do you usually sit with?", "She is so friendly.", "I enjoy reading in bed."],
   o: ["Describe the personality of someone in your family. Use at least four adjectives.", "Write about what you usually do at the weekend and what you are doing this weekend."] },
  p: [
   [["honest", "hour", "happy", "heir"], 2, "silent h"],
   [["impatient", "patient", "nation", "question"], 3, "-tion / -tient: /ʃ/"],
   [["brave", "generous", "lazy", "stay"], 1, "a as in brave"]
  ]
 },
 2: {
  rm: "Past Continuous (background, action in progress) + Past Simple (short action): I <b>was doing</b> my homework <b>when</b> my phone <b>rang</b>. · <b>while</b> + Past Continuous: <b>While</b> she <b>was walking</b>, she <b>found</b> a wallet. · <b>used to</b> = past habit: I <b>used to</b> have a flip phone. Did you <b>use to</b>…? I <b>didn't use to</b>…",
  g: [
   ["I ___ a video when my battery died.", "was watching", ["watched", "watch", "were watching"], "Action in progress → Past Continuous."],
   ["While we were chatting online, the Wi-Fi ___.", "stopped", ["was stopping", "stops", "stop"], "Short action → Past Simple."],
   ["What ___ you doing at 9 p.m. yesterday?", "were", ["was", "did", "are"], "you → were doing."],
   ["My grandparents ___ have a computer.", "didn't use to", ["didn't used to", "don't use to", "use not to"], "Negative: didn't use to."],
   ["Did you ___ play video games when you were little?", "use to", ["used to", "using to", "use"], "Question: Did you use to…?"],
   ["She ___ when I called her.", "was sleeping", ["slept", "sleeps", "is sleeping"], "Background action → Past Continuous."],
   ["People ___ send letters before e-mail.", "used to", ["use to", "were used", "using to"], "Past habit → used to."],
   ["___ I was downloading the app, my phone froze.", "While", ["When while", "During", "Then"], "While + Past Continuous."]
  ],
  vd: [
   ["To save a file from the Internet onto your device.", "download"],
   ["The small picture you click to open an app.", "icon"],
   ["To put your phone's battery to full.", "charge"],
   ["A text that you send from one phone to another.", "message"],
   ["Wireless connection to the Internet.", "Wi-Fi"],
   ["Someone who invents things.", "inventor"],
   ["The noun from 'discover'.", "discovery"],
   ["The adjective from 'science'.", "scientific"],
   ["To press a button on a mouse.", "click"],
   ["A secret word to enter your account.", "password"]
  ],
  r: { t: "The Day the Internet Stopped", x: [
    "Last Tuesday, at about four o'clock, half of my town lost its Internet connection. I was doing a maths project online and my sister was watching a series.",
    "At first we thought it was our router, but while my dad was checking the cables, our neighbour knocked on the door. Her Wi-Fi wasn't working either!",
    "We spent the evening playing board games, just like my parents used to do when they were young. It was actually fun – and I finished my project on paper."],
   q: [
    ["What was the writer doing when the Internet stopped?", "a maths project", ["watching a series", "playing a game", "checking cables"]],
    ["What happened while Dad was checking the cables?", "The neighbour knocked on the door.", ["The Internet came back.", "The router broke.", "His sister called."]],
    ["What did the family do that evening?", "They played board games.", ["They went out.", "They fixed the router.", "They watched TV."]]
   ] },
  l: [
   ["Boy: Where were you yesterday at six? Girl: I was at the library. I was looking for a book about robots.", "What was the girl looking for?", "a book about robots", ["her phone", "a computer", "her friend"]],
   ["When I was ten, I used to play video games every day. Now I prefer sports.", "What does the speaker prefer now?", "sports", ["video games", "reading", "music"]],
   ["My phone fell in the water while I was taking a photo at the lake.", "What was the speaker doing?", "taking a photo", ["swimming", "making a call", "fishing"]],
   ["Did your grandparents use to have a TV? No, they didn't. They used to listen to the radio.", "What did the grandparents use to do?", "listen to the radio", ["watch TV", "use a computer", "play video games"]]
  ],
  w: { u: ["I was sleeping when the phone rang.", "We used to live in a small flat.", "What were you doing at eight?"],
   o: ["Write about a time when technology failed you. What were you doing? What happened?", "Compare life ten years ago and today. Use used to / didn't use to."] },
  p: [
   [["watched", "clicked", "downloaded", "stopped"], 2, "-ed: /ɪd/ after t / d"],
   [["used", "music", "computer", "bus"], 3, "u as in used"],
   [["phone", "photo", "graph", "pencil"], 3, "ph = /f/"]
  ]
 },
 3: {
  rm: "Comparatives: <b>-er than / more … than</b>; superlatives: <b>the -est / the most</b>. good → better → the best. · <b>too</b> + adj (more than necessary) / <b>not</b> + adj + <b>enough</b> (less than necessary). · Present Perfect + <b>just</b> / <b>already</b> / <b>yet</b> (negatives and questions). · Present Perfect (no time) vs Past Simple (finished time): I<b>'ve seen</b> it. I <b>saw</b> it <b>last week</b>.",
  g: [
   ["This series is ___ than the book.", "more exciting", ["most exciting", "excitinger", "more excitinger"], "Long adjective → more … than."],
   ["It's the ___ film I've ever seen.", "worst", ["baddest", "worse", "most bad"], "bad → worse → the worst."],
   ["The tickets are ___ expensive. We can't buy them.", "too", ["enough", "so much", "very much"], "too + adjective = more than OK."],
   ["He isn't old ___ to watch that film.", "enough", ["too", "so", "such"], "not + adjective + enough."],
   ["Have you finished the book ___?", "yet", ["already", "just", "ever"], "Questions → yet (at the end)."],
   ["I've ___ seen that episode. Don't tell me the ending!", "already", ["yet", "ever", "since"], "already = sooner than expected."],
   ["We ___ to the museum last Saturday.", "went", ["have gone", "have been", "go"], "last Saturday → Past Simple."],
   ["She's ___ finished painting. The paint is still wet!", "just", ["yet", "ever", "since"], "just = a moment ago."]
  ],
  vd: [
   ["A TV programme with questions and prizes.", "quiz show"],
   ["A TV programme about real animals, places or events.", "documentary"],
   ["A funny series about the same characters.", "sitcom"],
   ["A person who paints pictures.", "painter"],
   ["A person who makes statues.", "sculptor"],
   ["The main person in a story.", "main character"],
   ["To stop doing something (phrasal verb).", "give up"],
   ["To discover information (phrasal verb).", "find out"],
   ["A place where you can see art.", "gallery"],
   ["The place where a film happens.", "setting"]
  ],
  r: { t: "Street Art: Crime or Culture?", x: [
    "For many years people thought graffiti was too ugly and too messy to be art. Today, some street artists are more famous than painters in galleries.",
    "In our city, the council has just opened a 'free wall' where young artists can paint legally. I've already visited it twice. The best painting, in my opinion, is a giant hummingbird by a local artist.",
    "Not everyone agrees. My grandad says the walls aren't clean enough and that real art belongs in museums. He hasn't seen the hummingbird yet – I'm taking him next weekend!"],
   q: [
    ["What has the council just done?", "opened a free wall for artists", ["closed a gallery", "cleaned the walls", "banned graffiti"]],
    ["What does the writer think is the best painting?", "a giant hummingbird", ["a portrait", "a city map", "a sculpture"]],
    ["What is grandad's opinion?", "Real art belongs in museums.", ["Graffiti is better than painting.", "The hummingbird is beautiful.", "The walls are too clean."]]
   ] },
  l: [
   ["Girl: Have you watched the new season yet? Boy: Yes, I watched it last weekend. It's better than the first one.", "When did the boy watch it?", "last weekend", ["yesterday", "not yet", "last month"]],
   ["I don't like sitcoms. I prefer documentaries about nature.", "What does the speaker prefer?", "documentaries", ["sitcoms", "quiz shows", "dramas"]],
   ["The concert was too long and the seats weren't comfortable enough.", "What was the problem with the seats?", "not comfortable enough", ["too expensive", "too big", "too far"]],
   ["I've just finished my first sculpture. It took me three months!", "How long did the sculpture take?", "three months", ["three weeks", "three days", "one month"]]
  ],
  w: { u: ["Have you seen this film yet?", "It is the most popular show on TV.", "The room isn't big enough."],
   o: ["Write a short review of a film or series you've watched. Compare it with another one.", "Write about things you have already done and haven't done yet this month."] },
  p: [
   [["already", "artist", "gallery", "painter"], 0, "stress: alREADy vs. first syllable"],
   [["sculptor", "culture", "fun", "cute"], 3, "u as in culture"],
   [["seen", "been", "green", "said"], 3, "ee as in seen"]
  ]
 }
});

/* ───────── High Note 1 ───────── */
put("high-note-1", {
 0: {
  rm: "<b>to be</b>: I <b>am</b> · you / we / they <b>are</b> · he / she / it <b>is</b>. · <b>this / that</b> (singular) · <b>these / those</b> (plural). · Possessive adjectives: <b>my, your, his, her, its, our, their</b> · Possessive <b>'s</b>: Tom<b>'s</b> bike. · <b>have got</b> / <b>has got</b>. · Ordinal numbers: first, second, third, twenty-first.",
  g: [
   ["My parents ___ from Mexico.", "are", ["is", "am", "be"], "they → are."],
   ["___ are my books on the table over there.", "Those", ["This", "That", "These"], "Plural + far → those."],
   ["Is this ___ phone? – Yes, it's mine.", "your", ["you", "yours", "you're"], "Possessive adjective before a noun."],
   ["My sister ___ got a new laptop.", "has", ["have", "is", "had"], "she → has got."],
   ["This is ___ bike.", "Ana's", ["Ana", "Anas'", "of Ana"], "Possessive 's."],
   ["___ open your books, please.", "Please", ["Don't please", "Opens", "You opening"], "Imperative: Please open…"],
   ["Can you help ___? I don't understand.", "me", ["I", "my", "mine"], "After a verb → object pronoun."],
   ["December is the ___ month of the year.", "twelfth", ["twelve", "twelveth", "twentieth"], "12 → twelfth."]
  ],
  vd: [
   ["A person from Brazil.", "Brazilian"],
   ["A person from Japan.", "Japanese"],
   ["Your father's brother.", "uncle"],
   ["A person who treats sick people.", "doctor"],
   ["The season after winter.", "spring"],
   ["The ninth month.", "September"],
   ["The opposite of cheap.", "expensive"],
   ["A small computer you can carry.", "laptop"],
   ["A person who flies planes.", "pilot"],
   ["Ten minutes after ten o'clock.", "ten past ten"]
  ],
  r: { t: "New in Class", x: [
    "Hi! My name's Lukas and I'm fifteen. I'm German, but my mum is Mexican, so this year we're living in Monterrey. My dad is an engineer and my mum is a nurse.",
    "I've got an older sister, Mia. Her birthday is on the twenty-second of March. We've got a dog called Bruno – his favourite toy is an old trainer!",
    "My new school is big and modern. These are my new friends, Diego and Sofía. They're really kind and they help me with my Spanish."],
   q: [
    ["What nationality is Lukas?", "German", ["Mexican", "Spanish", "American"]],
    ["When is Mia's birthday?", "March 22nd", ["March 2nd", "May 22nd", "March 12th"]],
    ["How do Diego and Sofía help Lukas?", "with his Spanish", ["with maths", "with his dog", "with sports"]]
   ] },
  l: [
   ["Girl: Where are you from? Boy: I'm from Canada, but my grandparents are Italian.", "Where are his grandparents from?", "Italy", ["Canada", "Mexico", "Spain"]],
   ["The bus leaves at quarter past eight. Don't be late!", "What time does the bus leave?", "8:15", ["8:45", "8:00", "7:15"]],
   ["My aunt is a pilot. She has got two children.", "What is the aunt's job?", "pilot", ["doctor", "teacher", "nurse"]],
   ["Our English exam is on the thirtieth of November.", "When is the exam?", "November 30th", ["November 13th", "November 3rd", "December 30th"]]
  ],
  w: { u: ["My brother has got a new bike.", "These are my friends.", "Where are you from?"],
   o: ["Introduce yourself: name, age, nationality, family and three things you have got.", "Write five instructions for a new student in your classroom."] },
  p: [
   [["third", "thirty", "thirteenth", "these"], 3, "th /θ/ as in third"],
   [["Japanese", "Chinese", "these", "French"], 3, "ee sound"],
   [["laptop", "doctor", "spot", "phone"], 3, "o as in doctor"]
  ]
 },
 1: {
  rm: "Present Simple affirmative: I <b>play</b> / he <b>plays</b> · Negative: I <b>don't</b> play / she <b>doesn't</b> play. · Questions: <b>Do</b> you…? <b>Does</b> he…? → Yes, I <b>do</b>. / No, he <b>doesn't</b>. · Adverbs of frequency go <b>before</b> the main verb and <b>after</b> to be: I <b>usually</b> walk. She <b>is never</b> late. · always › usually › often › sometimes › hardly ever › never.",
  g: [
   ["I ___ go to the gym on Mondays.", "always", ["always do", "am always", "do always"], "Adverb before the main verb."],
   ["She is ___ late for class.", "never", ["never is", "doesn't never", "not never"], "Adverb after to be."],
   ["My brother ___ video games every night.", "plays", ["play", "playing", "is play"], "he → plays."],
   ["We ___ watch TV in the morning.", "don't", ["doesn't", "aren't", "not"], "we → don't."],
   ["He ___ like reading.", "doesn't", ["don't", "isn't", "not"], "he → doesn't."],
   ["___ your friends often go to the cinema?", "Do", ["Does", "Are", "Is"], "they → Do…?"],
   ["Does Ana play the guitar? Yes, she ___.", "does", ["do", "is", "plays"], "Short answer: Yes, she does."],
   ["How often ___ you go swimming?", "do", ["does", "are", "is"], "you → do."]
  ],
  vd: [
   ["0% of the time.", "never"],
   ["100% of the time.", "always"],
   ["Almost never.", "hardly ever"],
   ["Two times.", "twice"],
   ["One time.", "once"],
   ["Spending time with friends (phrasal verb).", "hang out"],
   ["Collecting things, painting, playing an instrument…", "hobby"],
   ["To spend time on social media looking at posts.", "scroll"],
   ["Going to see films on a big screen.", "go to the cinema"],
   ["To do sport to stay fit.", "work out"]
  ],
  r: { t: "What's Your Week Like?", x: [
    "Carla, 15: I always get up at six because I go swimming before school. I hardly ever watch TV – I prefer reading. At the weekend I usually hang out with my friends at the park.",
    "Tom, 16: I'm not a morning person, so I'm often late! I play the drums in a band and we practise twice a week. I never work out – I don't like sport at all.",
    "Do Carla and Tom have anything in common? Yes, they do: they both love music. Carla sometimes goes to Tom's concerts."],
   q: [
    ["Why does Carla get up at six?", "She goes swimming.", ["She watches TV.", "She plays the drums.", "She reads."]],
    ["How often does Tom's band practise?", "twice a week", ["once a week", "every day", "never"]],
    ["What do Carla and Tom have in common?", "They love music.", ["They love sport.", "They get up early.", "They watch TV."]]
   ] },
  l: [
   ["Boy: How often do you go to the cinema? Girl: About once a month. It's expensive!", "How often does she go to the cinema?", "once a month", ["once a week", "twice a month", "never"]],
   ["My dad never drinks coffee, but he always has tea in the morning.", "What does Dad always drink?", "tea", ["coffee", "juice", "milk"]],
   ["Girl: Does your sister work out? Boy: Yes, she does. She goes to the gym every day.", "Where does the sister go every day?", "the gym", ["the park", "school", "the cinema"]],
   ["I hardly ever play video games. I'm usually busy with homework.", "Why doesn't he play video games?", "He's busy with homework.", ["He doesn't like them.", "He has no console.", "He works out."]]
  ],
  w: { u: ["I usually walk to school.", "She is never late.", "How often do you play football?"],
   o: ["Write about your week. Use at least five adverbs of frequency.", "Write four questions to ask a friend about their habits, and answer them."] },
  p: [
   [["plays", "goes", "watches", "reads"], 2, "-es: /ɪz/"],
   [["usually", "always", "hardly", "awful"], 0, "al / aw sound"],
   [["once", "one", "won", "on"], 3, "first sound /w/"]
  ]
 }
});

/* ───────── Now I Know! 5 ───────── */
put("now-i-know-5", {
 4: {
  rm: "Reflexive pronouns: <b>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</b> — the subject and object are the same person: He hurt <b>himself</b>. · <b>before / after</b> + -ing: Wash the cut <b>before putting</b> on a bandage. <b>After falling</b>, she called for help.",
  g: [
   ["Be careful with the knife! Don't cut ___.", "yourself", ["you", "yourselves", "your"], "you (one person) → yourself."],
   ["She fell off her bike and hurt ___.", "herself", ["her", "himself", "she"], "she → herself."],
   ["We made the first-aid kit ___.", "ourselves", ["us", "ourself", "themselves"], "we → ourselves."],
   ["The kids cleaned the room ___.", "themselves", ["theirselves", "them", "himself"], "they → themselves."],
   ["Wash your hands before ___ a wound.", "touching", ["touch", "to touch", "touched"], "before + -ing."],
   ["After ___ 911, wait for the ambulance.", "calling", ["call", "to call", "called"], "after + -ing."],
   ["The dog hurt ___ on a broken bottle.", "itself", ["himself", "it", "its"], "an animal → itself."],
   ["I taught ___ first aid with an online course.", "myself", ["me", "my", "yourself"], "I → myself."]
  ],
  vd: [
   ["A small piece of material to cover a cut.", "bandage"],
   ["A box with things to help injured people.", "first-aid kit"],
   ["A vehicle that takes sick people to hospital.", "ambulance"],
   ["A broken bone needs one to keep it still.", "cast"],
   ["A red mark on your skin from something hot.", "burn"],
   ["A dark mark on your skin after a hit.", "bruise"],
   ["When your ankle hurts after twisting it.", "sprain"],
   ["A person who puts out fires.", "firefighter"],
   ["A dangerous situation that needs help fast.", "emergency"],
   ["A place where you go when you are sick or hurt.", "hospital"]
  ],
  r: { t: "Quick Thinking", x: [
    "Last summer, twelve-year-old Rosa was at the beach with her little brother, Max. While Max was running on the rocks, he slipped and cut himself on a shell.",
    "Rosa stayed calm. Before cleaning the cut, she washed her hands with bottled water. Then she put a bandage on it from the first-aid kit she always carries.",
    "After helping Max, Rosa called her parents. The lifeguard said she did everything right. \"I learned first aid myself, from videos,\" she explained."],
   q: [
    ["How did Max hurt himself?", "He slipped on the rocks.", ["He fell off a bike.", "He burned himself.", "A dog bit him."]],
    ["What did Rosa do before cleaning the cut?", "She washed her hands.", ["She called her parents.", "She ran to the lifeguard.", "She cried."]],
    ["How did Rosa learn first aid?", "by herself, from videos", ["at school", "from the lifeguard", "from her parents"]]
   ] },
  l: [
   ["Boy: What happened? Girl: I burned myself on the oven. Boy: Put it under cold water for ten minutes.", "What should she do?", "put it under cold water", ["put ice on it", "go to hospital", "put a bandage on it"]],
   ["In an emergency, call 911 and stay calm.", "What number do you call?", "911", ["119", "191", "999"]],
   ["My brother sprained his ankle playing basketball. He can't walk for a week.", "Which part of the body is hurt?", "ankle", ["arm", "knee", "wrist"]],
   ["After falling off the ladder, the man had a big bruise on his leg.", "Where was the bruise?", "on his leg", ["on his arm", "on his head", "on his back"]]
  ],
  w: { u: ["She hurt herself in the park.", "Wash the cut before putting on a bandage.", "We did it ourselves."],
   o: ["Write instructions for a small emergency (a cut, a burn). Use before / after + -ing.", "Write about a time you or someone you know hurt themselves. What happened?"] },
  p: [
   [["bruise", "blue", "true", "build"], 3, "ue / ui as in blue"],
   [["burn", "hurt", "first", "fire"], 3, "ur / ir as in burn"],
   [["ankle", "bandage", "ambulance", "sprain"], 3, "a as in ankle"]
  ]
 },
 5: {
  rm: "Present Perfect + <b>for</b> (a period of time: for ten years) / <b>since</b> (a point in time: since 2010). Pandas <b>have lived</b> in China <b>for</b> millions of years. · <b>so</b> + adjective: It's <b>so</b> beautiful. · <b>such</b> (a) + adjective + noun: It's <b>such a</b> beautiful animal.",
  g: [
   ["Tigers have lived in that forest ___ hundreds of years.", "for", ["since", "ago", "during"], "a period → for."],
   ["This species has been endangered ___ 1990.", "since", ["for", "ago", "from"], "a point in time → since."],
   ["How long ___ you volunteered at the zoo?", "have", ["has", "did", "are"], "you → have."],
   ["She ___ worked at the animal shelter for two years.", "has", ["have", "is", "did"], "she → has worked."],
   ["The sea turtle is ___ an amazing animal!", "such", ["so", "very", "too"], "such + a / an + adj + noun."],
   ["Polar bears are ___ strong!", "so", ["such", "such a", "too much"], "so + adjective."],
   ["I've known about this project ___ last week.", "since", ["for", "ago", "before"], "last week = a point → since."],
   ["They are ___ beautiful birds.", "such", ["so", "such a", "very a"], "Plural: such + adjective + noun."]
  ],
  vd: [
   ["An animal that may disappear soon.", "endangered"],
   ["An animal that doesn't exist anymore.", "extinct"],
   ["The natural home of an animal.", "habitat"],
   ["People who kill animals illegally.", "poachers"],
   ["A group of animals of the same kind.", "species"],
   ["All the plants and animals in an area and how they live together.", "ecosystem"],
   ["A forest with lots of rain and tall trees.", "rainforest"],
   ["Living in the sea or ocean.", "marine"],
   ["To keep something safe.", "protect"],
   ["A place where people care for hurt animals.", "sanctuary"]
  ],
  r: { t: "Saving the Axolotl", x: [
    "The axolotl is such a strange animal! It's a kind of salamander that never really grows up – it keeps its gills and lives in water all its life.",
    "Axolotls have lived in the lakes of Xochimilco, in Mexico City, for thousands of years. But since the 1970s, pollution and new fish species have destroyed much of their habitat. Now they are critically endangered.",
    "Scientists and farmers have worked together since 2009 to create 'refuges' in the canals, where the water is clean. Many people visit them, because the axolotl is so special – it's a symbol of Mexico."],
   q: [
    ["Where do axolotls live?", "in the lakes of Xochimilco", ["in the sea", "in the rainforest", "in rivers in the desert"]],
    ["What has destroyed their habitat?", "pollution and new fish", ["poachers", "tourists", "cold weather"]],
    ["Since when have scientists and farmers worked together?", "since 2009", ["since the 1970s", "for thousands of years", "since 1990"]]
   ] },
  l: [
   ["Girl: How long have you worked at the sanctuary? Man: For six years. I love it.", "How long has he worked there?", "six years", ["six months", "since six", "sixteen years"]],
   ["Sea turtles have been endangered since the 1970s because of plastic.", "What is a problem for turtles?", "plastic", ["poachers", "cold water", "fish"]],
   ["The rainforest is home to half of the world's species.", "How many species live in the rainforest?", "half", ["a quarter", "all", "ten percent"]],
   ["Jaguars are such beautiful animals, but there are only about 4,000 in Mexico.", "How many jaguars are in Mexico?", "about 4,000", ["about 400", "about 40,000", "about 14,000"]]
  ],
  w: { u: ["Pandas have lived in China for a long time.", "It is such a beautiful animal.", "We have protected this forest since 2015."],
   o: ["Write about an endangered animal: where it lives, why it's in danger and how to help.", "Write three sentences about yourself with for and three with since."] },
  p: [
   [["species", "sea", "these", "extinct"], 3, "ee / ea sound"],
   [["habitat", "animal", "panda", "poacher"], 3, "a as in cat"],
   [["ocean", "open", "go", "hot"], 3, "o as in ocean"]
  ]
 },
 6: {
  rm: "<b>feel like</b> + -ing = want to: I <b>feel like reading</b> a mystery novel. · Countable → <b>a few</b> books. · Uncountable → <b>a little</b> time / <b>a bit of</b> help.",
  g: [
   ["I don't feel like ___ today.", "writing", ["write", "to write", "wrote"], "feel like + -ing."],
   ["Do you feel like ___ a film tonight?", "watching", ["watch", "to watch", "watched"], "feel like + -ing."],
   ["I've read ___ chapters of the book.", "a few", ["a little", "a bit of", "much"], "chapters (countable) → a few."],
   ["We only have ___ time before the library closes.", "a little", ["a few", "many", "a lot"], "time (uncountable) → a little."],
   ["Can you give me ___ help with my blog?", "a bit of", ["a few", "many", "few of"], "help (uncountable) → a bit of."],
   ["There are ___ comments on my post.", "a few", ["a little", "a bit", "much"], "comments (countable) → a few."],
   ["She feels like ___ a poem.", "writing", ["write", "writes", "to writing"], "feel like + -ing."],
   ["Add ___ information about the author.", "a little", ["a few", "many", "few"], "information (uncountable) → a little."]
  ],
  vd: [
   ["The person who writes a book.", "author"],
   ["A long story divided into chapters.", "novel"],
   ["A text with lines and rhymes.", "poem"],
   ["A story with magic and dragons.", "fantasy"],
   ["A story about a crime to solve.", "mystery"],
   ["The story of a real person's life.", "biography"],
   ["A website where someone writes regular posts.", "blog"],
   ["A person who reads your blog regularly.", "follower"],
   ["The main person in a story.", "main character"],
   ["One part of a book.", "chapter"]
  ],
  r: { t: "Lucía's Book Blog", x: [
    "Hi readers! Today I feel like talking about my favourite genre: mystery. I've read a few great novels this month, but my favourite is 'The Silent Garden'.",
    "The main character is a girl who finds a little key in her grandmother's garden. Each chapter gives you a bit of new information, and you can't stop reading!",
    "The author has written a few other books, but this is the best one. Leave a comment if you have read it. I already have a few hundred followers – thank you!"],
   q: [
    ["What genre does Lucía like?", "mystery", ["fantasy", "poetry", "biography"]],
    ["What does the main character find?", "a little key", ["a book", "a garden", "a letter"]],
    ["What does Lucía ask readers to do?", "leave a comment", ["buy the book", "write a poem", "visit the garden"]]
   ] },
  l: [
   ["Boy: Do you feel like going to the book fair? Girl: Sure! I want to buy a few comics.", "What does the girl want to buy?", "comics", ["novels", "poems", "magazines"]],
   ["My favourite author writes fantasy stories with dragons.", "What kind of stories?", "fantasy", ["mystery", "biography", "science"]],
   ["I only have a little time today, so I'll read one chapter.", "How much will she read?", "one chapter", ["the whole book", "a few chapters", "nothing"]],
   ["My blog has about two hundred followers.", "How many followers?", "about 200", ["about 20", "about 2,000", "about 12"]]
  ],
  w: { u: ["I feel like reading a novel.", "I have a few new books.", "We need a little more time."],
   o: ["Write a short blog post recommending a book or film. Use a few / a little.", "Write what you feel like doing this weekend and why."] },
  p: [
   [["author", "thought", "caught", "laugh"], 3, "au / ough as in author"],
   [["chapter", "character", "chair", "chips"], 1, "ch sound"],
   [["novel", "blog", "comic", "poem"], 3, "o as in novel"]
  ]
 }
});

/* ───────── Now I Know! 6 ───────── */
put("now-i-know-6", {
 1: {
  rm: "Present Perfect (experience, no time / result now): The coast <b>has changed</b> a lot. · Past Simple (finished time): The tide <b>rose</b> <b>yesterday</b>. · Deduction: <b>must</b> = I'm sure it's true · <b>might</b> = maybe · <b>can't</b> = I'm sure it's not true: That <b>can't be</b> Africa — it's too small.",
  g: [
   ["I ___ to Europe twice.", "have been", ["went", "was", "have went"], "Experience, no time → Present Perfect."],
   ["We ___ to the beach last summer.", "went", ["have gone", "have been", "go"], "last summer → Past Simple."],
   ["The sea level ___ since 1900.", "has risen", ["rose", "rises", "has rose"], "since → Present Perfect."],
   ["Look at all that ice! It ___ be very cold there.", "must", ["can't", "might not", "mustn't"], "Sure it's true → must."],
   ["Take a jacket. It ___ rain later.", "might", ["must", "can't", "has"], "Maybe → might."],
   ["That ___ be the Pacific Ocean. It's on the wrong side of the map.", "can't", ["must", "might", "should"], "Sure it's not true → can't."],
   ["Have you ever ___ a volcano?", "seen", ["saw", "see", "seeing"], "Present Perfect: have + past participle."],
   ["When ___ the earthquake happen?", "did", ["has", "have", "was"], "When → Past Simple question."]
  ],
  vd: [
   ["The direction where the sun rises.", "east"],
   ["The direction where the sun sets.", "west"],
   ["The biggest continent.", "Asia"],
   ["The continent covered in ice at the South Pole.", "Antarctica"],
   ["When the sea comes in and goes out every day.", "tide"],
   ["The land next to the sea.", "coast"],
   ["When water slowly destroys rock and land.", "erosion"],
   ["A very high wall of rock next to the sea.", "cliff"],
   ["A giant wave caused by an earthquake.", "tsunami"],
   ["Opposite of north.", "south"]
  ],
  r: { t: "The Disappearing Coast", x: [
    "Holderness, on the east coast of England, is one of the fastest-changing coastlines in Europe. Over the last 1,000 years, the sea has eroded about 4 kilometres of land.",
    "Many villages have disappeared. In 1786 a whole church fell into the sea! Today, some houses are only a few metres from the cliff edge.",
    "Look at the old maps of the area: the coast was much further east. Scientists say the erosion might get faster with stronger storms. The people who live there must be worried."],
   q: [
    ["How much land has the sea eroded?", "about 4 km", ["about 40 km", "about 1 km", "about 1,000 km"]],
    ["What happened in 1786?", "A church fell into the sea.", ["A tsunami hit.", "A village was built.", "The cliff grew."]],
    ["What might make the erosion faster?", "stronger storms", ["new houses", "old maps", "fewer tides"]]
   ] },
  l: [
   ["Boy: Have you ever been to Africa? Girl: Yes, I went to Egypt two years ago.", "When did she go to Egypt?", "two years ago", ["last year", "never", "two months ago"]],
   ["Every day there are two high tides and two low tides.", "How many high tides a day?", "two", ["one", "four", "three"]],
   ["That bird flies north in spring. It must be going to Canada.", "Where is the bird probably going?", "Canada", ["Mexico", "Brazil", "Africa"]],
   ["The smallest continent is Australia, also called Oceania.", "Which is the smallest continent?", "Australia", ["Europe", "Antarctica", "South America"]]
  ],
  w: { u: ["The coast has changed a lot.", "It might rain tomorrow.", "That can't be the right answer."],
   o: ["Write about a place that has changed over time. Use Present Perfect and Past Simple.", "Look at a world map and write five sentences with must / might / can't."] },
  p: [
   [["coast", "ocean", "most", "cost"], 3, "oa / o as in coast"],
   [["tide", "rise", "island", "river"], 3, "i as in tide"],
   [["north", "south", "both", "these"], 3, "th /θ/"]
  ]
 }
});

/* ───────── New Keystone A · Unit 4 (Reading 1) ───────── */
put("new-keystone-a", {
 4: {
  rm: "<b>Compound sentence</b> = two independent clauses + <b>and, but, or, so</b>: I trained hard, <b>but</b> I lost. · <b>Complex sentence</b> = independent clause + subordinate clause: <b>Although</b> she lost (contrast), she felt proud. I practiced <b>because</b> I wanted to win (reason). <b>If</b> you practice, you will improve (condition). · Homophones sound the same: <i>won / one, right / write, there / their</i>. · Cause → effect: <b>because, so, as a result</b>.",
  g: [
   ["___ he trained every day, he didn't win the race.", "Although", ["Because", "If", "So"], "Contrast → although."],
   ["She won the prize ___ she worked very hard.", "because", ["although", "if", "but"], "Reason → because."],
   ["___ you don't give up, you will succeed.", "If", ["Although", "Because", "But"], "Condition → if."],
   ["I was tired, ___ I went to bed early.", "so", ["but", "although", "or"], "Result → so (compound sentence)."],
   ["We lost the game, ___ we played well.", "but", ["so", "because", "if"], "Contrast in a compound sentence → but."],
   ["Which sentence is COMPLEX?", "Because it rained, the match was cancelled.", ["It rained, and the match was cancelled.", "The match was cancelled.", "It rained, so we stayed home."], "A complex sentence has a subordinate clause (because…)."],
   ["Which sentence is COMPOUND?", "I practiced, but I still made mistakes.", ["Although I practiced, I made mistakes.", "If I practice, I improve.", "I practiced."], "Compound = two independent clauses + but."],
   ["Our team ___ the championship last year!", "won", ["one", "win", "wan"], "Homophones: won (verb) / one (number)."]
  ],
  vd: [
   ["Prizes or praise for doing something very well.", "accolades"],
   ["An event where people try to win.", "competition"],
   ["Continuing to try even when it is difficult.", "perseverance"],
   ["Unusual and worth noticing.", "remarkable"],
   ["A book or text written before it is published.", "manuscript"],
   ["Short; lasting a little time.", "brief"],
   ["A way of thinking or feeling about something.", "attitude"],
   ["A particular way of seeing a situation.", "perspective"],
   ["To answer or react.", "respond"],
   ["Words that sound the same but have different meanings.", "homophones"]
  ],
  r: { t: "The Runner Who Lost", x: [
    "Elena had trained for the regional race for six months. Although she was one of the fastest runners in her school, she fell on the last curve and finished in fifth place.",
    "At first she wanted to quit, because she felt embarrassed. Her coach responded with a brief message: \"Losing is part of winning. If you learn from today, you will be stronger.\"",
    "Elena changed her attitude. She studied videos of the race, so she understood her mistake. The next year she won the race, and she now says that losing taught her perseverance."],
   q: [
    ["Why did Elena finish fifth?", "She fell on the last curve.", ["She didn't train.", "She was slow.", "She was sick."]],
    ["What was the effect of losing at first?", "She wanted to quit.", ["She won a prize.", "She changed coaches.", "She studied videos."]],
    ["What did losing teach her?", "perseverance", ["speed", "fear", "competition"]]
   ] },
  l: [
   ["Although the chess player was only twelve, she beat three adults in the tournament.", "How old was the chess player?", "twelve", ["twenty", "thirteen", "eleven"]],
   ["Because the author kept writing after many rejections, her manuscript was finally published.", "What happened to the manuscript?", "It was published.", ["It was lost.", "It was rejected.", "She stopped writing."]],
   ["If our team wins tomorrow, we will go to the national competition.", "What happens if they win?", "They go to the national competition.", ["They lose a game.", "They get a medal.", "They stop playing."]],
   ["Please write your name on the right side of the page.", "Where do you write your name?", "on the right side", ["on the left side", "at the bottom", "on the back"]]
  ],
  w: { u: ["Although we lost, we felt proud.", "I practiced because I wanted to improve.", "If you try hard, you will succeed."],
   o: ["Write about a time you lost or failed. What did you learn? Use although, because and if.", "Write two compound and two complex sentences about competitions."] },
  p: [
   [["won", "one", "sun", "own"], 3, "homophones and /ʌ/"],
   [["write", "right", "rite", "white"], 3, "homophones: /raɪt/"],
   [["their", "there", "they're", "three"], 3, "homophones: /ðeər/"]
  ]
 }
});
})(window.MOVA_BQ);
