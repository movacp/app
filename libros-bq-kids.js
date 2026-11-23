/* MOVA · Banco de preguntas por libro (Kids / primaria): Poptropica 3, 4, 6 · Dream Makers 2, 3, 4.
   Mismo formato que libros-quiz.js (ver ese archivo). */
window.MOVA_BQ = window.MOVA_BQ || {};
(function(B){
function put(b,o){B[b]=B[b]||{};for(var k in o)B[b][k]=o[k];}

/* ───────── Poptropica English 3 ───────── */
put("poptropica-3", {
 0: {
  rm: "<b>My favorite day is</b> Saturday. · <b>When were you born?</b> → <b>I was born in</b> May. · <b>Were you born in</b> June? → <b>Yes, I was.</b> / <b>No, I wasn't.</b> · Months and days start with a capital letter: <b>M</b>onday, <b>J</b>anuary.",
  g: [
   ["When ___ you born?", "were", ["was", "are", "is"], "We ask: When were you born?"],
   ["I was born ___ March.", "in", ["on", "at", "to"], "Months use in: in March."],
   ["What's your favorite ___? My favorite day is Sunday.", "day", ["month", "number", "color"], "Sunday is a day of the week."],
   ["Were you born in July? Yes, I ___.", "was", ["were", "am", "did"], "Short answer: Yes, I was."],
   ["Were you born in May? No, I ___.", "wasn't", ["weren't", "don't", "isn't"], "Short answer: No, I wasn't."],
   ["My brother ___ born in December.", "was", ["were", "is", "be"], "he / she → was."],
   ["My favorite day ___ Friday.", "is", ["are", "am", "were"], "My favorite day is…"],
   ["The day after Monday is ___.", "Tuesday", ["Sunday", "Thursday", "Wednesday"], "Monday → Tuesday → Wednesday."]
  ],
  vd: [
   ["The first month of the year.", "January"],
   ["The month after April.", "May"],
   ["The last month of the year.", "December"],
   ["The day before Saturday.", "Friday"],
   ["The first school day of the week.", "Monday"],
   ["Twenty plus five.", "twenty-five"],
   ["Thirty plus three.", "thirty-three"],
   ["Ten times five.", "fifty"],
   ["The month after September.", "October"],
   ["Forty plus eight.", "forty-eight"]
  ],
  r: { t: "Happy Birthday, Tom!", x: [
    "Hi! I'm Tom. I was born in October. My birthday is on Saturday and I'm very happy!",
    "My favorite day is Saturday because there is no school. My sister Amy was born in March. Her favorite day is Friday.",
    "This year I'm nine years old. There are twenty-four children at my party!"],
   q: [
    ["When was Tom born?", "in October", ["in March", "in May", "on Friday"]],
    ["What is Amy's favorite day?", "Friday", ["Saturday", "Sunday", "Monday"]],
    ["How many children are at the party?", "24", ["42", "14", "20"]]
   ] },
  l: [
   ["Girl: When were you born? Boy: I was born in August.", "When was the boy born?", "in August", ["in April", "in October", "in March"]],
   ["My favorite day is Sunday. I play with my dad in the park.", "What is her favorite day?", "Sunday", ["Monday", "Saturday", "Friday"]],
   ["Number thirty-seven. Thirty-seven.", "Which number do you hear?", "37", ["73", "27", "47"]],
   ["Boy: Were you born in June? Girl: No, I wasn't. I was born in July.", "When was the girl born?", "in July", ["in June", "in January", "in May"]]
  ],
  w: { u: ["I was born in January.", "My favorite day is Saturday.", "When were you born?"],
   o: ["Write when you were born and your favorite day. Say why.", "Write the months of the year in order."] },
  p: [
   [["May", "day", "play", "pen"], 3, "ay as in day"],
   [["June", "blue", "sun", "Tuesday"], 2, "u as in June"],
   [["five", "nine", "six", "Friday"], 2, "i as in five"]
  ]
 },
 1: {
  rm: "<b>How many</b> birds <b>are there?</b> → <b>There's</b> one bird. / <b>There are</b> two birds. · <b>some</b> in affirmative: There are <b>some</b> ants. · <b>any</b> in negative and questions: There aren't <b>any</b> spiders. <b>Are there any</b> worms?",
  g: [
   ["How many trees ___ there?", "are", ["is", "am", "be"], "How many… are there?"],
   ["There ___ one butterfly on the flower.", "is", ["are", "am", "be"], "One → There is / There's."],
   ["There are ___ ants on the rock.", "some", ["any", "a", "one"], "Affirmative plural → some."],
   ["There aren't ___ spiders in the pond.", "any", ["some", "a", "many a"], "Negative → any."],
   ["Are there ___ worms in the garden?", "any", ["some", "a", "one"], "Questions → any."],
   ["___ there a rainbow in the sky? Yes, there is.", "Is", ["Are", "Do", "Does"], "Singular → Is there a…?"],
   ["There are three ___.", "clouds", ["cloud", "cloudes", "a cloud"], "Three → plural: clouds."],
   ["Is there any water in the pond? Yes, there ___.", "is", ["are", "isn't", "be"], "Short answer: Yes, there is."]
  ],
  vd: [
   ["Small animals with six legs.", "insects"],
   ["It has seven colors and you see it in the sky after rain.", "rainbow"],
   ["Small water in a park or garden.", "pond"],
   ["Animals with wings that sing in the trees.", "birds"],
   ["Insects with beautiful colorful wings.", "butterflies"],
   ["Animals with eight legs.", "spiders"],
   ["Long, thin animals that live in the ground.", "worms"],
   ["White or gray things in the sky.", "clouds"],
   ["Air that moves. It's cold!", "wind"],
   ["Red flowers with a beautiful smell.", "roses"]
  ],
  r: { t: "In the Garden", x: [
    "Look at my garden! There are four big trees and there's a small pond. There are some red roses next to the pond.",
    "There are some butterflies on the flowers and there are lots of ants on a rock. Are there any spiders? No, there aren't.",
    "Today the sun is out, but there are some clouds. After the rain, there's a rainbow in the sky!"],
   q: [
    ["How many trees are there?", "four", ["two", "five", "one"]],
    ["Where are the roses?", "next to the pond", ["on the rock", "in the tree", "in the sky"]],
    ["Are there any spiders?", "No, there aren't.", ["Yes, there are.", "Yes, there is.", "There are five."]]
   ] },
  l: [
   ["There are three birds in the tree and one bird on the rock.", "How many birds are in the tree?", "three", ["one", "four", "two"]],
   ["Boy: Are there any mushrooms? Girl: Yes, there are some under the tree.", "Where are the mushrooms?", "under the tree", ["in the pond", "on the rock", "in the sky"]],
   ["There aren't any worms here, but there are some ants.", "What animals are there?", "ants", ["worms", "spiders", "birds"]],
   ["Look up! There's a big rainbow in the sky.", "What is in the sky?", "a rainbow", ["a bird", "a butterfly", "the sun"]]
  ],
  w: { u: ["There are some flowers in the garden.", "Are there any spiders?", "There isn't a pond."],
   o: ["Write about a park: what is there and what isn't there. Use some and any.", "Draw a garden and write four sentences with There is / There are."] },
  p: [
   [["tree", "bee", "sea", "sky"], 3, "ee as in tree"],
   [["rock", "pond", "rose", "dog"], 2, "o as in rock"],
   [["bird", "worm", "fern", "rain"], 3, "ir / or / er sound"]
  ]
 }
});

/* ───────── Poptropica English 4 ───────── */
put("poptropica-4", {
 0: {
  rm: "Comparatives: tall → <b>taller than</b>, funny → <b>funnier than</b>. · After than use <b>me, you, him, her, us, them</b>: I'm taller <b>than him</b>. She's funnier <b>than me</b>.",
  g: [
   ["I'm ___ than my sister.", "taller", ["tall", "tallest", "more tall"], "Comparative: tall → taller."],
   ["Tom is funnier than ___.", "me", ["I", "my", "mine"], "After than → object pronoun: me."],
   ["She's ___ than her brother.", "quieter", ["quiet", "more quieter", "quietest"], "quiet → quieter."],
   ["Ana is smart. She's smarter than ___ (Ben).", "him", ["he", "his", "her"], "Ben → him."],
   ["My dog is ___ than your dog.", "funnier", ["funny", "funnyer", "more funny"], "y → ier: funnier."],
   ["You're kinder than ___ (Lily).", "her", ["she", "hers", "him"], "Lily → her."],
   ["He's ___ than me. He doesn't talk a lot.", "shyer", ["shy", "shyest", "more shyer"], "shy → shyer."],
   ["We are taller than ___ (the little kids).", "them", ["they", "their", "us"], "they → them after than."]
  ],
  vd: [
   ["A person who makes you laugh.", "funny"],
   ["A person who knows a lot and learns fast.", "smart"],
   ["A person who doesn't like to talk to new people.", "shy"],
   ["A person who is nice and helps others.", "kind"],
   ["A person who doesn't make noise.", "quiet"],
   ["The opposite of short.", "tall"],
   ["The opposite of old.", "young"],
   ["Not weak.", "strong"],
   ["A person who talks a lot and has many friends.", "friendly"],
   ["The opposite of fast.", "slow"]
  ],
  r: { t: "My Best Friends", x: [
    "Hi, I'm Mia. My best friends are Sam and Lucy. Sam is very funny. He's funnier than me and he's taller than me too!",
    "Lucy is quiet and a little shy, but she's very smart. She's smarter than Sam in math.",
    "I'm the kindest, they say! I help everyone. We are different, but we are great friends."],
   q: [
    ["Who is taller than Mia?", "Sam", ["Lucy", "Mia's mom", "nobody"]],
    ["What is Lucy like?", "quiet and smart", ["funny and tall", "loud and shy", "kind and tall"]],
    ["Who is smarter in math?", "Lucy", ["Sam", "Mia", "Mia and Sam"]]
   ] },
  l: [
   ["Boy: Who's taller, you or your brother? Girl: My brother is taller than me.", "Who is taller?", "her brother", ["the girl", "the boy", "her sister"]],
   ["Kate is very funny, but she's shy at school.", "What is Kate like at school?", "shy", ["funny", "loud", "tall"]],
   ["My grandpa is kind and quiet. He reads a lot.", "What is grandpa like?", "kind and quiet", ["funny and loud", "shy and short", "smart and tall"]],
   ["I'm smarter than him in science, but he's better at sports.", "Who is better at sports?", "him", ["her", "me", "them"]]
  ],
  w: { u: ["My sister is taller than me.", "He is funnier than her.", "I'm kind and quiet."],
   o: ["Compare yourself with a friend. Write three sentences with taller / funnier / smarter than.", "Describe your best friend with three adjectives."] },
  p: [
   [["shy", "my", "kind", "him"], 3, "y / i as in my"],
   [["quiet", "queen", "quick", "kite"], 3, "qu sound"],
   [["tall", "ball", "small", "smart"], 3, "all sound"]
  ]
 },
 1: {
  rm: "<b>What do you like doing?</b> → I <b>like skiing</b>. · <b>What does he like doing?</b> → He <b>likes cooking</b>. · I <b>don't like</b>… / He <b>doesn't like</b>… · <b>Does</b> she <b>like</b> painting? → <b>Yes, she does.</b> / <b>No, she doesn't.</b>",
  g: [
   ["What do you like ___?", "doing", ["do", "does", "to doing"], "What do you like doing?"],
   ["I like ___ the guitar.", "playing", ["play", "plays", "played"], "like + -ing."],
   ["She ___ painting.", "likes", ["like", "liking", "is like"], "he / she → likes."],
   ["He ___ like watching TV.", "doesn't", ["don't", "isn't", "not"], "he / she → doesn't."],
   ["___ your brother like skateboarding?", "Does", ["Do", "Is", "Are"], "Does he / she like…?"],
   ["Do you like cooking? Yes, I ___.", "do", ["does", "am", "like"], "Short answer: Yes, I do."],
   ["Does Ana like surfing? No, she ___.", "doesn't", ["don't", "isn't", "not"], "Short answer: No, she doesn't."],
   ["They like ___ video games.", "playing", ["play", "plays", "to playing"], "like + -ing."]
  ],
  vd: [
   ["You make food in the kitchen.", "cooking"],
   ["You make pictures with colors and a brush.", "painting"],
   ["You talk with friends on the computer.", "chatting online"],
   ["You ride a board with wheels.", "skateboarding"],
   ["You go down a snowy mountain.", "skiing"],
   ["You ride a board on the waves of the sea.", "surfing"],
   ["You play a game on a screen.", "playing video games"],
   ["You look at your favorite shows.", "watching TV"],
   ["You read about stars, fashion or sports.", "reading magazines"],
   ["You make music with six strings.", "playing the guitar"]
  ],
  r: { t: "Free Time at Home", x: [
    "My family likes different things. My dad likes cooking. He makes pizza on Saturdays. My mom likes reading magazines.",
    "My brother Leo likes playing video games, but he doesn't like reading. I like painting and playing the guitar.",
    "Does my grandma like skateboarding? No, she doesn't! She likes chatting online with her friends."],
   q: [
    ["What does Dad like doing?", "cooking", ["painting", "surfing", "skiing"]],
    ["What doesn't Leo like?", "reading", ["video games", "pizza", "playing"]],
    ["What does Grandma like doing?", "chatting online", ["skateboarding", "cooking", "playing the guitar"]]
   ] },
  l: [
   ["Girl: What do you like doing? Boy: I like surfing and skateboarding.", "What does the boy like?", "surfing and skateboarding", ["cooking and painting", "skiing and reading", "watching TV"]],
   ["My sister doesn't like watching TV. She likes painting.", "What does his sister like?", "painting", ["watching TV", "cooking", "skiing"]],
   ["Boy: Does your dad like cooking? Girl: Yes, he does. He cooks every Sunday.", "When does Dad cook?", "every Sunday", ["every Saturday", "every day", "on Monday"]],
   ["I love skiing in winter. It's my favorite thing!", "When does she go skiing?", "in winter", ["in summer", "in spring", "on Sunday"]]
  ],
  w: { u: ["I like playing video games.", "She doesn't like cooking.", "Does he like surfing?"],
   o: ["Write what you like and don't like doing in your free time.", "Ask a family member and write: My mom likes… / She doesn't like…"] },
  p: [
   [["sing", "ring", "king", "sit"], 3, "ng sound"],
   [["cook", "book", "look", "food"], 3, "oo as in book"],
   [["chat", "chips", "cheese", "school"], 3, "ch sound"]
  ]
 }
});

/* ───────── Poptropica English 6 ───────── */
put("poptropica-6", {
 0: {
  rm: "Senses: <b>look, smell, taste, sound, feel</b> + adjective → It <b>looks good</b>. It <b>smells</b> bad. · <b>look like</b> + noun → It <b>looks like</b> a cake. · <b>Does it taste</b> good? → <b>Yes, it does.</b> / <b>No, it doesn't.</b>",
  g: [
   ["This soup ___ delicious!", "tastes", ["taste", "tasting", "is taste"], "it → tastes."],
   ["What does it look like? It looks ___ a ball.", "like", ["as", "to", "good"], "look like + noun."],
   ["Your new jacket ___ great!", "looks", ["look", "looks like", "looking"], "look + adjective: looks great."],
   ["___ the music sound good? Yes, it does.", "Does", ["Do", "Is", "Are"], "Does it sound…?"],
   ["The flowers ___ nice.", "smell", ["smells", "smelling", "smell like"], "They → smell."],
   ["Does the blanket feel soft? No, it ___.", "doesn't", ["don't", "isn't", "not"], "No, it doesn't."],
   ["That cloud looks like a ___.", "rabbit", ["soft", "good", "nice"], "look like + a noun."],
   ["This song ___ sad.", "sounds", ["sound", "sounds like", "is sound"], "sound + adjective."]
  ],
  vd: [
   ["You do it with your eyes.", "look"],
   ["You do it with your nose.", "smell"],
   ["You do it with your tongue.", "taste"],
   ["You do it with your hands and skin.", "feel"],
   ["You hear it with your ears.", "sound"],
   ["Very good to eat.", "delicious"],
   ["The opposite of hard.", "soft"],
   ["The opposite of smooth.", "rough"],
   ["Food with a lot of sugar.", "sweet"],
   ["Not pleasant to smell.", "awful"]
  ],
  r: { t: "The Mystery Box", x: [
    "In science class, our teacher has a mystery box. We can't see inside it. We have to use our other senses!",
    "I put my hand in the box. It feels soft and round. Then I smell it. It smells sweet. Does it look like a ball? We don't know!",
    "Finally the teacher opens the box. It's a peach! It looks good and it tastes delicious."],
   q: [
    ["Why can't they see the object?", "It's inside a box.", ["It's very small.", "They close their eyes.", "It's in the garden."]],
    ["How does the object feel?", "soft and round", ["hard and square", "rough and cold", "wet and long"]],
    ["What is in the box?", "a peach", ["a ball", "a cake", "a flower"]]
   ] },
  l: [
   ["Boy: Mmm, what's that? It smells great! Girl: It's chocolate cake.", "What smells great?", "chocolate cake", ["pizza", "soup", "flowers"]],
   ["That cloud looks like a dragon. Look at its long tail!", "What does the cloud look like?", "a dragon", ["a dog", "a ball", "a car"]],
   ["Girl: Does the new song sound good? Boy: No, it doesn't. It sounds awful.", "How does the song sound?", "awful", ["great", "sad", "nice"]],
   ["The cat's fur feels very soft.", "How does the fur feel?", "soft", ["rough", "hard", "wet"]]
  ],
  w: { u: ["This cake tastes delicious.", "What does it look like?", "The music sounds great."],
   o: ["Choose your favorite food and describe it with the five senses.", "Write three sentences with looks like."] },
  p: [
   [["feel", "smell", "sweet", "see"], 1, "ee as in feel"],
   [["sound", "loud", "brown", "soup"], 3, "ou as in sound"],
   [["taste", "cake", "make", "hat"], 3, "a as in taste"]
  ]
 },
 1: {
  rm: "<b>good at</b> + -ing: Flo <b>is good at swimming</b>. · <b>like / love</b> + -ing: I <b>like hiking</b>, but I <b>don't like sailing</b>. · Now: I<b>'m pitching</b> the tent. · Ability: I <b>can</b> read a compass. I <b>can't</b> light a fire.",
  g: [
   ["Flo is good at ___.", "swimming", ["swim", "swims", "to swim"], "good at + -ing."],
   ["I love ___ in the mountains.", "hiking", ["hike", "hikes", "to hiking"], "love + -ing."],
   ["Look! Dad ___ the tent.", "is pitching", ["pitches", "pitch", "pitching"], "Now → Present Continuous."],
   ["I ___ read a compass. Can you help me?", "can't", ["can", "don't", "isn't"], "can't = not able."],
   ["Are you good ___ climbing?", "at", ["in", "on", "for"], "good at."],
   ["She doesn't like ___.", "fishing", ["fish", "fishes", "to fishing"], "like + -ing."],
   ["We ___ putting in the pegs right now.", "are", ["is", "am", "do"], "We are + -ing."],
   ["Can he light a fire? Yes, he ___.", "can", ["can't", "does", "is"], "Short answer: Yes, he can."]
  ],
  vd: [
   ["You sleep inside it when you go camping.", "tent"],
   ["A warm bag for sleeping outside.", "sleeping bag"],
   ["It shows you north, south, east and west.", "compass"],
   ["A small light you hold in your hand.", "flashlight"],
   ["A box with bandages and medicine.", "first-aid kit"],
   ["You put them in the ground to hold the tent.", "pegs"],
   ["You put up the tent.", "pitch the tent"],
   ["A bed full of air.", "air mattress"],
   ["Walking for a long time in nature.", "hiking"],
   ["Catching fish with a rod.", "fishing"]
  ],
  r: { t: "A Weekend at Adventure Camp", x: [
    "This weekend I'm at Adventure Camp with my class. Right now we're pitching our tents next to the lake. My friend Flo is putting in the pegs.",
    "Flo is good at swimming and sailing. I'm not good at sailing, but I love hiking. I can read a compass, so I'm the group leader on the hike!",
    "At night we light a fire and tell stories. I can't sleep without my flashlight!"],
   q: [
    ["Where are they pitching the tents?", "next to the lake", ["in the forest", "on a mountain", "at school"]],
    ["What is Flo good at?", "swimming and sailing", ["hiking and fishing", "reading a compass", "telling stories"]],
    ["Why is the writer the group leader?", "He can read a compass.", ["He is good at sailing.", "He has a flashlight.", "He is tall."]]
   ] },
  l: [
   ["Boy: What are you doing? Girl: I'm putting in the pegs. Can you help me?", "What is the girl doing?", "putting in the pegs", ["lighting a fire", "reading a compass", "swimming"]],
   ["My brother is good at fishing, but he doesn't like hiking.", "What is her brother good at?", "fishing", ["hiking", "swimming", "sailing"]],
   ["Don't forget the first-aid kit and the flashlight!", "What must they take?", "first-aid kit and flashlight", ["tent and pegs", "compass and map", "sleeping bag"]],
   ["Girl: Can you light a fire? Boy: No, I can't. But I can pitch a tent.", "What can the boy do?", "pitch a tent", ["light a fire", "read a compass", "sail"]]
  ],
  w: { u: ["I'm good at swimming.", "She loves hiking.", "We are pitching the tent."],
   o: ["Write what you are good at and what you love doing outdoors.", "Imagine you are at camp. Write what you and your friends are doing now."] },
  p: [
   [["tent", "pegs", "kit", "help"], 2, "e as in tent"],
   [["fish", "ship", "shell", "chair"], 3, "sh sound"],
   [["light", "night", "bright", "fit"], 3, "igh as in light"]
  ]
 }
});

/* ───────── Dream Makers 2 ───────── */
put("dream-makers-2", {
 1: {
  rm: "<b>What's your name?</b> → <b>My name's</b> Sara. / <b>I'm</b> Sara. · <b>What's his name?</b> → <b>His</b> name is Leo. <b>He's</b> a new student. · <b>What's her name?</b> → <b>Her</b> name is Ana. <b>She's</b> my friend.",
  g: [
   ["What's ___ name? My name's Andy.", "your", ["you", "my", "his"], "What's your name?"],
   ["___ name is Leo. He's a new student.", "His", ["Her", "He", "My"], "boy → his."],
   ["She's my friend. ___ name is Ana.", "Her", ["His", "She", "Your"], "girl → her."],
   ["Hello! ___ Mia.", "I'm", ["I", "My", "Me"], "I'm = I am."],
   ["___ is a new student. He is from Spain.", "He", ["She", "His", "It"], "boy → he."],
   ["We are friends. ___ classroom is big.", "Our", ["We", "Us", "My"], "we → our."],
   ["Good ___! It's 8 o'clock.", "morning", ["night", "afternoon", "bye"], "In the morning: Good morning!"],
   ["They ___ my friends.", "are", ["is", "am", "be"], "they → are."]
  ],
  vd: [
   ["You say it when you meet someone.", "hello"],
   ["You say it when you leave.", "goodbye"],
   ["A child who is a boy.", "boy"],
   ["A child who is a girl.", "girl"],
   ["A person you like and play with.", "friend"],
   ["A person who learns at school.", "student"],
   ["The opposite of old.", "new"],
   ["You say it at 9 o'clock a.m.", "good morning"],
   ["You say it at 3 o'clock p.m.", "good afternoon"],
   ["A short way to say hello.", "hi"]
  ],
  r: { t: "A New Friend", x: [
    "Good morning! My name's Lily. I'm a student at Green School.",
    "Look, there's a new girl in my class. Her name is Rosa. She's seven. There's a new boy too. His name is Tom.",
    "Now Rosa and Tom are my friends. We play together. Goodbye!"],
   q: [
    ["What's the new girl's name?", "Rosa", ["Lily", "Tom", "Ana"]],
    ["How old is Rosa?", "seven", ["six", "eight", "nine"]],
    ["What's the new boy's name?", "Tom", ["Leo", "Rosa", "Sam"]]
   ] },
  l: [
   ["Boy: Hi! What's your name? Girl: My name's Kate.", "What's the girl's name?", "Kate", ["Kim", "Cate", "Kara"]],
   ["This is my friend. His name is Max. He's a new student.", "Who is Max?", "a new student", ["a teacher", "a girl", "her brother"]],
   ["Good afternoon, class! I'm Miss Ruiz.", "What does she say?", "Good afternoon", ["Good morning", "Goodbye", "Good night"]],
   ["Girl: What's her name? Boy: Her name is Sofia.", "What's her name?", "Sofia", ["Sara", "Sonia", "Silvia"]]
  ],
  w: { u: ["My name is Andy.", "His name is Tom.", "She is a new student."],
   o: ["Introduce yourself: write your name, your age and your friend's name.", "Write about a friend: His / Her name is… He's / She's…"] },
  p: [
   [["hi", "my", "I", "it"], 3, "i as in hi"],
   [["new", "you", "school", "good"], 3, "oo / ew as in new"],
   [["boy", "toy", "joy", "go"], 3, "oy as in boy"]
  ]
 }
});

/* ───────── Dream Makers 3 ───────── */
put("dream-makers-3", {
 1: {
  rm: "<b>What day is today?</b> → <b>It's</b> Monday. · Wednesday is <b>after</b> Tuesday and <b>before</b> Thursday. · <b>When is</b> Mother's Day? → <b>It's in</b> May. / <b>It's on</b> May 10th. · My birthday is <b>in</b> June (month) / <b>on</b> June 3rd (date). · Seasons: spring, summer, fall, winter.",
  g: [
   ["What day ___ today?", "is", ["are", "am", "does"], "What day is today?"],
   ["Friday is ___ Thursday.", "after", ["before", "on", "in"], "Thursday → Friday: after."],
   ["Sunday is ___ Monday.", "before", ["after", "in", "at"], "Sunday comes first: before."],
   ["My birthday is ___ March.", "in", ["on", "at", "to"], "Months → in."],
   ["Mother's Day is ___ May 10th.", "on", ["in", "at", "of"], "Dates → on."],
   ["___ is Father's Day? It's in June.", "When", ["What", "Who", "Where"], "When → time."],
   ["I'm nine ___ old.", "years", ["year", "days", "age"], "I'm … years old."],
   ["My favorite ___ is summer.", "season", ["month", "day", "week"], "Summer is a season."]
  ],
  vd: [
   ["There are seven days in one…", "week"],
   ["There are twelve in a year.", "months"],
   ["The month after January.", "February"],
   ["The season after summer.", "fall"],
   ["The cold season with snow.", "winter"],
   ["The season with new flowers.", "spring"],
   ["The day after Wednesday.", "Thursday"],
   ["The day we celebrate our moms.", "Mother's Day"],
   ["The day we celebrate our teachers.", "Teacher's Day"],
   ["The month of Christmas.", "December"]
  ],
  r: { t: "Our Calendar", x: [
    "Hi! I'm Pablo. I'm nine years old. My birthday is in April, in spring. My favorite season is summer because there's no school.",
    "In Mexico, Mother's Day is on May 10th and Teacher's Day is on May 15th. Father's Day is in June.",
    "Today is Thursday. Tomorrow is Friday, my favorite day of the week!"],
   q: [
    ["When is Pablo's birthday?", "in April", ["in May", "in June", "in summer"]],
    ["When is Teacher's Day in Mexico?", "on May 15th", ["on May 10th", "in June", "in April"]],
    ["What day is today?", "Thursday", ["Friday", "Wednesday", "Monday"]]
   ] },
  l: [
   ["Girl: When is your birthday? Boy: It's on October 3rd.", "When is the boy's birthday?", "October 3rd", ["October 13th", "August 3rd", "December 3rd"]],
   ["Today is Tuesday. My piano class is on Wednesday, after today.", "When is the piano class?", "Wednesday", ["Tuesday", "Monday", "Thursday"]],
   ["My favorite season is winter. I love the cold and hot chocolate!", "What is her favorite season?", "winter", ["summer", "fall", "spring"]],
   ["Father's Day is in June. We have a picnic with Dad.", "When is Father's Day?", "in June", ["in May", "in July", "in March"]]
  ],
  w: { u: ["My birthday is in July.", "Friday is after Thursday.", "When is Mother's Day?"],
   o: ["Write your birthday, your favorite day of the week and your favorite season.", "Write three celebrations and when they are (in / on)."] },
  p: [
   [["day", "May", "Monday", "man"], 3, "ay as in day"],
   [["June", "July", "January", "Tuesday"], 3, "J sound"],
   [["fall", "ball", "call", "March"], 3, "all sound"]
  ]
 },
 2: {
  rm: "<b>What are you wearing?</b> → <b>I'm wearing</b> a blue T-shirt. · <b>He's / She's wearing</b> a cap. · <b>This is</b> my jacket (one). <b>These are</b> my shoes (two or more).",
  g: [
   ["What ___ you wearing?", "are", ["is", "do", "am"], "What are you wearing?"],
   ["I'm ___ a red dress.", "wearing", ["wear", "wears", "weared"], "I'm + -ing."],
   ["She's wearing a ___ skirt.", "long", ["longs", "a long", "length"], "Adjectives don't change."],
   ["___ are my new sneakers.", "These", ["This", "That", "It"], "Plural → These are."],
   ["___ is my school uniform.", "This", ["These", "They", "Those"], "Singular → This is."],
   ["He ___ wearing shorts today.", "is", ["are", "am", "do"], "He is wearing."],
   ["They are wearing ___.", "boots", ["boot", "a boots", "bootes"], "Two feet → boots."],
   ["What is he wearing? He's wearing a ___.", "jacket", ["jackets", "pants", "socks"], "a + singular."]
  ],
  vd: [
   ["You wear them on your feet for sports.", "sneakers"],
   ["You wear it on your head. It has a front part.", "cap"],
   ["Short pants for hot days.", "shorts"],
   ["You wear it over your T-shirt when it's cold.", "jacket"],
   ["You wear them on your feet before shoes.", "socks"],
   ["Open shoes for the beach.", "flip-flops"],
   ["Girls wear it; it's one piece.", "dress"],
   ["Special clothes for school.", "uniform"],
   ["High shoes for rain or snow.", "boots"],
   ["A T-shirt with long arms.", "long-sleeved"]
  ],
  r: { t: "At the Party", x: [
    "Today is Sara's party. Sara is wearing a pink dress and white shoes. Her brother Leo is wearing blue pants and a long-sleeved T-shirt.",
    "Grandpa is wearing a hat and a brown jacket. It's hot, so the kids are wearing shorts and flip-flops in the garden.",
    "\"These are my new sneakers!\" says Leo. \"And this is my new cap!\""],
   q: [
    ["What is Sara wearing?", "a pink dress", ["blue pants", "a brown jacket", "shorts"]],
    ["Who is wearing a hat?", "Grandpa", ["Leo", "Sara", "the kids"]],
    ["Why are the kids wearing shorts?", "It's hot.", ["It's cold.", "It's raining.", "It's school."]]
   ] },
  l: [
   ["Boy: What are you wearing? Girl: I'm wearing a green skirt and a white T-shirt.", "What color is the skirt?", "green", ["white", "blue", "red"]],
   ["Look at Tom. He's wearing black boots and a yellow jacket.", "What color are Tom's boots?", "black", ["yellow", "brown", "blue"]],
   ["These are my socks and this is my cap.", "How many caps?", "one", ["two", "three", "zero"]],
   ["It's cold today. Wear your jacket!", "Why wear a jacket?", "It's cold.", ["It's hot.", "It's a party.", "It's raining."]]
  ],
  w: { u: ["I'm wearing a red T-shirt.", "She's wearing a long skirt.", "These are my new shoes."],
   o: ["Write what you are wearing today, with colors.", "Describe what a family member is wearing: He's / She's wearing…"] },
  p: [
   [["shoes", "shorts", "shirt", "socks"], 3, "sh sound"],
   [["boots", "shoes", "blue", "cap"], 3, "oo sound"],
   [["hat", "cap", "jacket", "dress"], 3, "a as in hat"]
  ]
 },
 3: {
  rm: "<b>How many</b> pencils <b>are there?</b> → <b>There is</b> one. / <b>There are</b> twenty-five. · Math: 15 <b>plus</b> 17 <b>equals</b> 32. 40 <b>minus</b> 8 equals 32. 5 <b>times</b> 6 equals 30. · <b>more</b> / <b>less</b>.",
  g: [
   ["How many books ___ there?", "are", ["is", "am", "be"], "How many… are there?"],
   ["There ___ one pencil.", "is", ["are", "be", "am"], "One → There is."],
   ["Twenty ___ ten equals thirty.", "plus", ["minus", "times", "less"], "20 + 10 = 30."],
   ["Fifty minus five ___ forty-five.", "equals", ["equal", "plus", "is equals"], "= is equals."],
   ["Six ___ five equals thirty.", "times", ["plus", "minus", "more"], "6 × 5 = 30."],
   ["Thirty is ___ than forty.", "less", ["more", "plus", "equals"], "30 < 40 → less."],
   ["He's twenty-one ___ old.", "years", ["year", "times", "numbers"], "… years old."],
   ["There ___ thirty-two students.", "are", ["is", "am", "be"], "Plural → There are."]
  ],
  vd: [
   ["The symbol + in words.", "plus"],
   ["The symbol − in words.", "minus"],
   ["The symbol × in words.", "times"],
   ["The symbol = in words.", "equals"],
   ["The number 21.", "twenty-one"],
   ["The number 34.", "thirty-four"],
   ["The number 50.", "fifty"],
   ["The number 47.", "forty-seven"],
   ["A bigger quantity.", "more"],
   ["A smaller quantity.", "less"]
  ],
  r: { t: "The School Fair", x: [
    "At the school fair there are twenty-five tables. There are forty-two children and fifteen teachers.",
    "Ana has thirty candies. She gives twelve to her friends. Thirty minus twelve equals eighteen. Now she has eighteen candies.",
    "Leo buys three boxes of cookies. There are ten cookies in each box. Three times ten equals thirty!"],
   q: [
    ["How many tables are there?", "25", ["42", "15", "52"]],
    ["How many candies does Ana have now?", "18", ["12", "30", "42"]],
    ["How many cookies does Leo have?", "30", ["13", "10", "3"]]
   ] },
  l: [
   ["Twenty-six plus eleven equals thirty-seven.", "What is the answer?", "37", ["36", "27", "47"]],
   ["There are forty-four students in the gym.", "How many students?", "44", ["14", "40", "34"]],
   ["My grandma is fifty years old. My dad is thirty-eight.", "How old is Dad?", "38", ["50", "28", "48"]],
   ["Four times five equals twenty.", "Which operation do you hear?", "4 × 5 = 20", ["4 + 5 = 9", "5 − 4 = 1", "20 − 5 = 15"]]
  ],
  w: { u: ["There are thirty students.", "Ten plus five equals fifteen.", "How many pencils are there?"],
   o: ["Write three math problems in words (plus, minus, times, equals).", "Count things in your classroom and write: There are…"] },
  p: [
   [["three", "thirty", "thirteen", "ten"], 3, "th sound"],
   [["four", "forty", "more", "fun"], 3, "or sound"],
   [["plus", "minus", "much", "use"], 3, "u as in plus"]
  ]
 }
});

/* ───────── Dream Makers 4 · Unit 1 (las unidades 2 y 3 ya están en libros-quiz.js) ───────── */
put("dream-makers-4", {
 1: {
  rm: "<b>How many</b> classrooms <b>are there?</b> → <b>There is</b> one library. <b>There are</b> twelve classrooms. · <b>Where's</b> the gym? → <b>It's on the left / on the right / next to</b> the cafeteria / <b>between</b> the library and the art room. · <b>My favorite place at school is</b> the library.",
  g: [
   ["How many classrooms ___ there?", "are", ["is", "am", "be"], "How many… are there?"],
   ["There ___ a big library.", "is", ["are", "be", "has"], "One → There is."],
   ["___ the gym? It's next to the cafeteria.", "Where's", ["What's", "Who's", "How's"], "Where → place."],
   ["The art room is ___ the library and the gym.", "between", ["next", "on", "left"], "between A and B."],
   ["The restroom is next ___ the hall.", "to", ["at", "of", "in"], "next to."],
   ["The science lab is on the ___.", "left", ["between", "next", "middle to"], "on the left / on the right."],
   ["My favorite place at school ___ the library.", "is", ["are", "am", "be"], "My favorite place is…"],
   ["There are twenty ___ in the classroom.", "desks", ["desk", "deskes", "a desk"], "Twenty → plural."]
  ],
  vd: [
   ["The place where you eat lunch at school.", "cafeteria"],
   ["The place with many books.", "library"],
   ["The place where you do sports inside.", "gym"],
   ["The place where you do experiments.", "science lab"],
   ["The room where teachers rest.", "teachers' lounge"],
   ["You put papers and old things in it.", "wastebasket"],
   ["A board on the wall with notices.", "bulletin board"],
   ["A person who helps others is…", "helpful"],
   ["The long space that connects classrooms.", "hall"],
   ["The room where you paint and draw.", "art room"]
  ],
  r: { t: "Welcome to Hill School", x: [
    "Welcome to Hill School! There are fifteen classrooms, a big library and a gym. The cafeteria is next to the gym.",
    "The science lab is on the left, between the art room and the media room. The teachers' lounge is on the right.",
    "My favorite place at school is the library. The librarian is very friendly and helpful."],
   q: [
    ["How many classrooms are there?", "fifteen", ["fifty", "five", "twelve"]],
    ["Where is the science lab?", "between the art room and the media room", ["next to the gym", "on the right", "next to the cafeteria"]],
    ["What is the writer's favorite place?", "the library", ["the gym", "the cafeteria", "the art room"]]
   ] },
  l: [
   ["Girl: Where's the restroom? Boy: It's on the right, next to the hall.", "Where is the restroom?", "on the right", ["on the left", "next to the gym", "between two rooms"]],
   ["There are twenty-eight chairs and fourteen tables in the cafeteria.", "How many tables?", "14", ["28", "40", "24"]],
   ["My favorite place at school is the sports court. I play basketball there.", "What is his favorite place?", "the sports court", ["the gym", "the library", "the art room"]],
   ["The media room is between the library and the science lab.", "Where is the media room?", "between the library and the science lab", ["next to the gym", "on the left", "next to the cafeteria"]]
  ],
  w: { u: ["There are twenty desks in my classroom.", "The library is next to the gym.", "Where is the cafeteria?"],
   o: ["Describe your school: what places there are and where they are.", "Write about your favorite place at school and why you like it."] },
  p: [
   [["gym", "giant", "go", "jam"], 2, "soft g / j sound"],
   [["hall", "ball", "call", "lab"], 3, "all sound"],
   [["lounge", "out", "house", "door"], 3, "ou as in out"]
  ]
 }
});
})(window.MOVA_BQ);
