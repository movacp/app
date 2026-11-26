/* MOVA · Bancos de preguntas · Poptropica English 3, 4 y 6 (unidades restantes).
   Formato igual que libros-quiz.js. Solo agrega unidades que aún no existen. */
(function(){
var B = window.MOVA_BQ = window.MOVA_BQ || {};
function add(k, n, u){ B[k] = B[k] || {}; if (!B[k][n]) B[k][n] = u; }

/* ================= POPTROPICA ENGLISH 3 ================= */
add("poptropica-3", 2, {
 rm: "<b>I have</b> / <b>I don't have</b> glasses. · <b>He has</b> / <b>She doesn't have</b> a beard. · <b>Does</b> she <b>have</b> curly hair? Yes, she <b>does</b>. / No, she <b>doesn't</b>.",
 g: [
  ["I ___ glasses. I can see very well.", "don't have", ["doesn't have", "has", "not have"], "With I we use don't have."],
  ["My dad ___ a mustache.", "has", ["have", "haves", "having"], "He / she has."],
  ["My sister ___ have curly hair.", "doesn't", ["don't", "isn't", "not"], "He / she doesn't have."],
  ["___ your brother have blue eyes?", "Does", ["Do", "Is", "Has"], "Does + he / she + have…?"],
  ["Do you have long eyelashes? Yes, I ___.", "do", ["does", "am", "have"], "Short answer with I: Yes, I do."],
  ["Does Grandpa have a beard? No, he ___.", "doesn't", ["don't", "isn't", "hasn't"], "No, he doesn't."],
  ["They ___ red hair.", "have", ["has", "haves", "is"], "They have."],
  ["She has ___ eyes.", "brown", ["browns", "a brown", "brown's"], "Adjectives don't take -s."]
 ],
 vd: [
  ["Hair on a man's face, under his nose.", "mustache"],
  ["Hair on a man's chin and face.", "beard"],
  ["You wear them to see better.", "glasses"],
  ["Hair that is yellow.", "blond hair"],
  ["Hair with a lot of curls.", "curly hair"],
  ["The hair above your eyes.", "eyebrows"],
  ["The small hairs on your eyelids.", "eyelashes"],
  ["Hair that is white or silver.", "gray hair"]
 ],
 r: { t: "My Family Photo", x: [
   "This is a photo of my family. My dad is tall. He has short black hair and a mustache. He has glasses, too.",
   "My mom has long red hair and green eyes. My little brother Leo has blond curly hair and big blue eyes.",
   "My grandpa has gray hair and a long white beard. He doesn't have glasses. I have brown eyes and dark eyebrows, like my dad."],
  q: [
   ["Who has a mustache?", "Dad", ["Grandpa", "Leo", "Mom"]],
   ["What does Leo look like?", "He has blond curly hair.", ["He has a beard.", "He has red hair.", "He has glasses."]],
   ["Does Grandpa have glasses?", "No, he doesn't.", ["Yes, he does.", "Yes, he has.", "No, he isn't."]]
  ] },
 l: [
  ["Girl: Does your teacher have glasses? Boy: No, she doesn't. She has long brown hair.", "What does the teacher have?", "long brown hair", ["glasses", "a beard", "curly hair"]],
  ["My uncle has a big beard and a mustache.", "What does the uncle have?", "a beard and a mustache", ["glasses", "blond hair", "long eyelashes"]],
  ["My best friend has curly red hair and green eyes.", "What color is the friend's hair?", "red", ["brown", "blond", "gray"]]
 ],
 w: { u: ["She has long curly hair.", "Does he have glasses?", "I don't have a beard."],
  o: ["Describe a person in your family. Write three sentences.", "Describe yourself: hair, eyes, glasses."] },
 p: [
  [["beard", "ear", "near", "bed"], 3, "ear as in beard"],
  [["eye", "my", "pin", "tie"], 2, "long i"],
  [["curly", "girl", "bird", "cat"], 3, "ur / ir"]
 ]
});
add("poptropica-3", 3, {
 rm: "<b>What does it look like?</b> It <b>has</b> a tail. It <b>doesn't have</b> wings. · <b>What do they look like?</b> They <b>have</b> whiskers.",
 g: [
  ["What ___ it look like?", "does", ["do", "is", "are"], "What does it look like?"],
  ["It ___ a long tail.", "has", ["have", "haves", "is"], "It has."],
  ["Fish ___ have legs.", "don't", ["doesn't", "aren't", "isn't"], "They don't have."],
  ["What do they look ___?", "like", ["likes", "as", "at"], "look like."],
  ["A turtle has a hard ___.", "shell", ["fur", "beak", "feathers"], "Turtles have a hard shell."],
  ["Does your cat ___ soft fur?", "have", ["has", "having", "is"], "Does + have."],
  ["Birds ___ feathers.", "have", ["has", "is", "are"], "They have."],
  ["My dog ___ have wings!", "doesn't", ["don't", "isn't", "hasn't"], "It doesn't have."]
 ],
 vd: [
  ["Birds use them to fly.", "wings"],
  ["A bird's mouth.", "beak"],
  ["Fish use them to swim.", "fins"],
  ["Long hairs on a cat's face.", "whiskers"],
  ["The soft hair of a cat or dog.", "fur"],
  ["Sharp nails on an animal's feet.", "claws"],
  ["A dog's feet.", "paws"],
  ["It's at the end of an animal's body. A dog moves it when it's happy.", "tail"]
 ],
 r: { t: "Our Pets", x: [
   "We have three pets. Max is a dog. He has brown fur, big paws and a long tail. He is fast and cute.",
   "Kiki is a parrot. She has green and red feathers, two wings and a strong beak. She can talk!",
   "Shelly is a turtle. She has a hard shell and she is very slow. She doesn't have fur or feathers."],
  q: [
   ["What does Max have?", "brown fur and a long tail", ["feathers", "a hard shell", "fins"]],
   ["What can Kiki do?", "talk", ["swim", "run fast", "climb"]],
   ["Which pet is slow?", "Shelly", ["Max", "Kiki", "all of them"]]
  ] },
 l: [
  ["It has feathers, two wings and a beak. It doesn't have fur.", "What animal is it?", "a bird", ["a cat", "a fish", "a turtle"]],
  ["Boy: Does your cat have long whiskers? Girl: Yes, it does. And it has soft fur.", "What does the cat have?", "long whiskers", ["wings", "a shell", "fins"]],
  ["Fish have fins and a tail. They don't have legs.", "What don't fish have?", "legs", ["fins", "a tail", "eyes"]]
 ],
 w: { u: ["It has sharp claws.", "What does it look like?", "They don't have wings."],
  o: ["Describe your favorite animal. What does it look like?", "Write about a pet you have or want."] },
 p: [
  [["shell", "fish", "she", "sock"], 3, "sh"],
  [["paw", "claw", "saw", "cap"], 3, "aw"],
  [["fur", "turtle", "purple", "fun"], 3, "ur"]
 ]
});
add("poptropica-3", 4, {
 rm: "<b>There's</b> a plant. <b>There are</b> two plants. · next to · behind · above · below · in front of · <b>Is</b> the computer in the bedroom? <b>Are</b> the plates on the shelf?",
 g: [
  ["There ___ a sofa in the living room.", "is", ["are", "be", "am"], "There is + one thing."],
  ["There ___ three towels in the bathroom.", "are", ["is", "be", "has"], "There are + many things."],
  ["The mirror is ___ the sink. (up)", "above", ["below", "behind", "in"], "above = higher than."],
  ["The trash can is ___ the desk. (down)", "below", ["above", "on", "next"], "below = lower than."],
  ["___ the TV in the kitchen? No, it isn't.", "Is", ["Are", "Do", "Does"], "Is + one thing?"],
  ["___ the pots on the stove? Yes, they are.", "Are", ["Is", "Do", "Does"], "Are + many things?"],
  ["The plant is next ___ the window.", "to", ["of", "at", "in"], "next to."],
  ["The cat is in ___ of the TV.", "front", ["next", "behind", "near"], "in front of."]
 ],
 vd: [
  ["You cook food on it.", "stove"],
  ["You look at yourself in it.", "mirror"],
  ["You sit on it in the living room.", "sofa"],
  ["You wash your body in it.", "shower"],
  ["You use it to clean your teeth.", "toothbrush"],
  ["You put your clothes in it.", "closet"],
  ["You put trash in it.", "trash can"],
  ["You use it to comb your hair.", "comb"]
 ],
 r: { t: "My Bedroom", x: [
   "This is my bedroom. There's a big bed next to the window. There are two blankets on my bed.",
   "There's a computer on my desk and there's a lamp next to it. Above the desk there's a picture of my family.",
   "My closet is behind the door. There's a plant in front of the window. I love my room!"],
  q: [
   ["Where is the bed?", "next to the window", ["behind the door", "above the desk", "in the closet"]],
   ["What is above the desk?", "a picture", ["a plant", "a computer", "a blanket"]],
   ["Where is the closet?", "behind the door", ["next to the bed", "in front of the window", "below the desk"]]
  ] },
 l: [
  ["Girl: Where's the comb? Boy: It's on the shelf, next to the toothbrush.", "Where is the comb?", "on the shelf", ["in the shower", "on the sofa", "in the closet"]],
  ["There are four plates and two pans in the kitchen.", "How many plates are there?", "four", ["two", "three", "five"]],
  ["Is the computer in the bedroom? No, it isn't. It's in the living room.", "Where is the computer?", "in the living room", ["in the bedroom", "in the kitchen", "in the bathroom"]]
 ],
 w: { u: ["There are two towels in the bathroom.", "The mirror is above the sink.", "Is the TV in the living room?"],
  o: ["Describe your bedroom. Use there is / there are.", "Write where three things are in your kitchen."] },
 p: [
  [["sink", "think", "pink", "sky"], 3, "ink"],
  [["shower", "towel", "down", "show"], 3, "ow as in towel"],
  [["plate", "stove", "phone", "home"], 0, "long o"]
 ]
});
add("poptropica-3", 5, {
 rm: "What <b>are</b> you <b>wearing</b>? <b>I'm wearing</b> a jacket. · What's he wearing? <b>He's wearing</b> jeans. · <b>This is</b> my favorite cap. · <b>These are</b> my favorite sneakers.",
 g: [
  ["What ___ you wearing?", "are", ["is", "do", "am"], "What are you wearing?"],
  ["I ___ wearing a sweater.", "'m", ["'s", "'re", "do"], "I'm wearing."],
  ["She's ___ a scarf.", "wearing", ["wear", "wears", "wore"], "is + -ing."],
  ["___ he wearing a uniform? Yes, he is.", "Is", ["Are", "Does", "Do"], "Is he wearing…?"],
  ["___ are my favorite jeans.", "These", ["This", "That", "It"], "These + plural."],
  ["___ is my favorite cap.", "This", ["These", "Those", "They"], "This + singular."],
  ["They're wearing ___ boots.", "hiking", ["hike", "hikes", "hiked"], "hiking boots."],
  ["My T-shirt isn't plain. It's very ___.", "colorful", ["plain", "small", "old"], "colorful = many colors."]
 ],
 vd: [
  ["A hat with a front part. You wear it to play baseball.", "baseball cap"],
  ["Shoes for the beach, with no back.", "flip-flops"],
  ["Shoes for sports.", "sneakers"],
  ["You wear it around your neck when it's cold.", "scarf"],
  ["Pants made of blue denim.", "jeans"],
  ["Clothes everyone at school wears.", "uniform"],
  ["A warm hat for winter.", "beanie"],
  ["You wear it around your waist with pants.", "belt"]
 ],
 r: { t: "Ready for the Trip", x: [
   "Today our class is going to the mountains. It's cold! I'm wearing a sweater, jeans and my hiking boots.",
   "My friend Ana is wearing a colorful scarf and a beanie. Tom is wearing his new jacket. It's red and very fancy.",
   "Our teacher is wearing a sweatshirt and sneakers. These are my favorite boots. They are warm and comfortable."],
  q: [
   ["What is the writer wearing?", "a sweater, jeans and hiking boots", ["a uniform", "flip-flops", "shorts"]],
   ["Who is wearing a beanie?", "Ana", ["Tom", "the teacher", "the writer"]],
   ["What color is Tom's jacket?", "red", ["blue", "green", "black"]]
  ] },
 l: [
  ["Boy: What are you wearing to the party? Girl: I'm wearing my fancy dress and sandals.", "What is the girl wearing?", "a fancy dress and sandals", ["jeans and sneakers", "a uniform", "a sweatsuit"]],
  ["He's wearing shorts, a polo shirt and flip-flops. He's at the beach.", "Where is he?", "at the beach", ["at school", "in the snow", "at home"]],
  ["These are my favorite sneakers. They are white and blue.", "What color are the sneakers?", "white and blue", ["black", "red", "green"]]
 ],
 w: { u: ["I'm wearing a red jacket.", "What is she wearing?", "These are my favorite jeans."],
  o: ["What are you wearing today? Write three sentences.", "Describe your favorite clothes."] },
 p: [
  [["shirt", "skirt", "girl", "short"], 3, "ir"],
  [["boots", "school", "shoes", "book"], 3, "long oo"],
  [["scarf", "car", "park", "cap"], 3, "ar"]
 ]
});
add("poptropica-3", 6, {
 rm: "<b>I can</b> run, but <b>I can't</b> jump. · <b>Can</b> you play tennis? Yes, I <b>can</b>. · <b>I was</b> at the gym. <b>He wasn't</b> at the gym.",
 g: [
  ["I ___ ride a bike. It's easy!", "can", ["can't", "cans", "am"], "can = I am able."],
  ["Fish ___ climb trees.", "can't", ["can", "aren't", "don't"], "can't = not able."],
  ["___ you play baseball? Yes, I can.", "Can", ["Do", "Are", "Is"], "Can you…?"],
  ["She can ___ very fast.", "run", ["runs", "running", "to run"], "can + verb."],
  ["I ___ at the swimming pool yesterday.", "was", ["were", "am", "is"], "I was (past)."],
  ["He ___ at the stadium. He was at home.", "wasn't", ["weren't", "isn't", "didn't"], "He wasn't."],
  ["We play soccer on a soccer ___.", "field", ["court", "track", "slope"], "soccer field."],
  ["They play basketball on a basketball ___.", "court", ["field", "pool", "track"], "basketball court."]
 ],
 vd: [
  ["A place to swim.", "swimming pool"],
  ["A place to run in circles.", "running track"],
  ["A big place where people watch games.", "stadium"],
  ["A place with snow to ski.", "ski slope"],
  ["A place to exercise inside.", "gym"],
  ["A Korean sport with kicks.", "taekwondo"],
  ["To take a ball with your hands.", "catch"],
  ["A place to play tennis.", "tennis court"]
 ],
 r: { t: "Sports Day", x: [
   "Yesterday was Sports Day at school. I was at the running track in the morning. I can run very fast, so I was happy!",
   "My friend Sam was at the basketball court. He can't run fast, but he can catch a ball very well.",
   "My sister was at the swimming pool. She can swim, but she can't dive. We weren't at the gym. It was a great day."],
  q: [
   ["Where was the writer in the morning?", "at the running track", ["at the gym", "at the pool", "at the court"]],
   ["What can Sam do well?", "catch a ball", ["run fast", "swim", "dive"]],
   ["What can't the sister do?", "dive", ["swim", "run", "catch"]]
  ] },
 l: [
  ["Girl: Can you do taekwondo? Boy: No, I can't. But I can play tennis.", "What can the boy do?", "play tennis", ["do taekwondo", "ski", "swim"]],
  ["I was at the stadium on Saturday. I wasn't at home.", "Where was he on Saturday?", "at the stadium", ["at home", "at the gym", "at school"]],
  ["My brother can ride a bike, but he can't play baseball.", "What can't the brother do?", "play baseball", ["ride a bike", "run", "swim"]]
 ],
 w: { u: ["I can play soccer.", "Can you ride a bike?", "She wasn't at the gym."],
  o: ["Write three things you can do and two things you can't do.", "Where were you last Saturday? Write about it."] },
 p: [
  [["ball", "tall", "call", "cat"], 3, "all"],
  [["gym", "jump", "giraffe", "goal"], 3, "soft g / j"],
  [["court", "four", "sport", "cup"], 3, "or"]
 ]
});
add("poptropica-3", 7, {
 rm: "<b>Do</b> you <b>like</b> peas? Yes, I <b>do</b>. · <b>Does</b> he <b>like</b> peas? No, he <b>doesn't</b>. · <b>Is there any</b> broccoli? · <b>Are there any</b> pears?",
 g: [
  ["___ you like carrots? Yes, I do.", "Do", ["Does", "Are", "Is"], "Do you like…?"],
  ["___ she like mangoes? No, she doesn't.", "Does", ["Do", "Is", "Has"], "Does she like…?"],
  ["He ___ like spinach.", "doesn't", ["don't", "isn't", "not"], "He doesn't like."],
  ["My mom ___ avocados.", "likes", ["like", "liking", "is like"], "She likes."],
  ["Is there ___ lettuce?", "any", ["a", "an", "some"], "Is there any…?"],
  ["Are there any ___?", "cherries", ["cherry", "cherrys", "a cherry"], "Are there any + plural."],
  ["___ there any broccoli? Yes, there is.", "Is", ["Are", "Do", "Does"], "Broccoli is uncountable: Is there any…?"],
  ["Does your dad like beans? Yes, he ___.", "does", ["do", "is", "likes"], "Yes, he does."]
 ],
 vd: [
  ["A small green round vegetable.", "peas"],
  ["A long orange vegetable.", "carrot"],
  ["A small red fruit with a seed inside.", "cherry"],
  ["A green fruit for guacamole.", "avocado"],
  ["A green vegetable that looks like a little tree.", "broccoli"],
  ["A long green vegetable for salad.", "cucumber"],
  ["A sweet red fruit with little seeds outside.", "strawberry"],
  ["A big round green leaf vegetable.", "cabbage"]
 ],
 r: { t: "At the Market", x: [
   "On Saturday, Mia and her dad go to the market. Mia likes fruit. She likes strawberries, mangoes and cherries.",
   "Her dad likes vegetables. He likes broccoli and spinach, but he doesn't like peas.",
   "'Are there any avocados?' asks Dad. 'No, there aren't,' says the man. 'But there are some pears and peaches.'"],
  q: [
   ["What fruit does Mia like?", "strawberries, mangoes and cherries", ["peas", "broccoli", "spinach"]],
   ["What doesn't Dad like?", "peas", ["broccoli", "spinach", "pears"]],
   ["Are there any avocados?", "No, there aren't.", ["Yes, there are.", "Yes, there is.", "We don't know."]]
  ] },
 l: [
  ["Boy: Do you like tomatoes? Girl: Yes, I do. But I don't like cucumbers.", "What doesn't the girl like?", "cucumbers", ["tomatoes", "carrots", "pears"]],
  ["Is there any lettuce? Yes, there is. It's in the fridge.", "Where is the lettuce?", "in the fridge", ["on the table", "at the market", "in the bag"]],
  ["My brother likes plums and apricots.", "What does the brother like?", "plums and apricots", ["peas and beans", "potatoes", "cabbage"]]
 ],
 w: { u: ["Do you like broccoli?", "She doesn't like peas.", "Are there any oranges?"],
  o: ["Write about food you like and food you don't like.", "Write about the food someone in your family likes."] },
 p: [
  [["peas", "beans", "peach", "pear"], 3, "ea as in peas"],
  [["carrot", "apple", "cabbage", "cake"], 3, "short a"],
  [["cherry", "chip", "lunch", "car"], 3, "ch"]
 ]
});
add("poptropica-3", 8, {
 rm: "What <b>are</b> you <b>doing</b>? <b>I'm sleeping</b>. · What's he doing? <b>He's reading</b>. · Adverbs: He's singing <b>loudly</b>. She walks <b>slowly</b>.",
 g: [
  ["What ___ you doing?", "are", ["is", "do", "am"], "What are you doing?"],
  ["She's ___ the violin.", "playing", ["play", "plays", "played"], "is + verb-ing."],
  ["___ he sleeping? Yes, he is.", "Is", ["Are", "Does", "Do"], "Is he…?"],
  ["They're ___ in the park.", "walking", ["walk", "walks", "walked"], "are + -ing."],
  ["Shh! The baby is sleeping. Talk ___.", "quietly", ["loudly", "quiet", "quick"], "quietly = with little noise."],
  ["He runs very ___.", "quickly", ["quick", "slow", "slowly quick"], "Adverb: quick → quickly."],
  ["I can't hear you. Speak more ___.", "loudly", ["quietly", "slowly quiet", "loud"], "loud → loudly."],
  ["Are you singing? No, I'm ___.", "not", ["don't", "isn't", "no"], "No, I'm not."]
 ],
 vd: [
  ["You do this with your eyes and a book.", "reading"],
  ["You do this at night in bed.", "sleeping"],
  ["You move to music.", "dancing"],
  ["You use your voice to make music.", "singing"],
  ["A musical instrument with keys.", "piano"],
  ["A musical instrument you blow. It's long and thin.", "flute"],
  ["Not fast.", "slowly"],
  ["Very badly.", "terribly"]
 ],
 r: { t: "A Busy Afternoon", x: [
   "It's four o'clock. My family is at home. Mom is reading a book on the sofa. Dad is cleaning the kitchen.",
   "My sister is playing the piano. She plays very well. My little brother is singing loudly — and terribly!",
   "What am I doing? I'm doing my homework. I'm writing slowly because I want it to be perfect."],
  q: [
   ["What is Mom doing?", "reading a book", ["cleaning", "singing", "sleeping"]],
   ["How does the brother sing?", "loudly and terribly", ["quietly", "very well", "slowly"]],
   ["Why is the writer writing slowly?", "to make the homework perfect", ["because she's tired", "because she's sad", "because it's late"]]
  ] },
 l: [
  ["Girl: What are you doing? Boy: I'm listening to music.", "What is the boy doing?", "listening to music", ["reading", "eating", "dancing"]],
  ["Look! Grandpa is dancing slowly with Grandma.", "How is Grandpa dancing?", "slowly", ["quickly", "loudly", "terribly"]],
  ["Is she playing the trumpet? No, she isn't. She's playing the flute.", "What is she playing?", "the flute", ["the trumpet", "the piano", "the violin"]]
 ],
 w: { u: ["She is playing the violin.", "What are you doing?", "He sings loudly."],
  o: ["What are people in your house doing now? Write three sentences.", "Write sentences with quickly, slowly and quietly."] },
 p: [
  [["sing", "ring", "king", "sit"], 3, "ng"],
  [["slowly", "show", "snow", "how"], 3, "ow as in snow"],
  [["dance", "city", "nice", "cat"], 3, "soft c"]
 ]
});

/* ================= POPTROPICA ENGLISH 4 ================= */
add("poptropica-4", 2, {
 rm: "Facts: <b>Giraffes eat</b> leaves. · <b>Do</b> giraffes eat meat? No, they <b>don't</b>. · <b>What do</b> crabs eat? <b>Where do</b> crabs live? They live in rivers. · A lion <b>eats</b> meat (he / she / it + <b>-s</b>).",
 g: [
  ["Giraffes ___ leaves.", "eat", ["eats", "eating", "are eat"], "Plural animals: eat (no -s)."],
  ["A lion ___ meat.", "eats", ["eat", "eating", "is eat"], "One animal: eats."],
  ["___ elephants eat grass? Yes, they do.", "Do", ["Does", "Are", "Is"], "Do + they?"],
  ["Where ___ camels live?", "do", ["does", "are", "is"], "Where do + plural?"],
  ["Where does a panda ___?", "live", ["lives", "living", "lived"], "does + base verb."],
  ["Crocodiles ___ eat grass.", "don't", ["doesn't", "aren't", "isn't"], "They don't."],
  ["Camels live in the ___.", "desert", ["river", "sea", "rain forest"], "Camels live in dry, hot deserts."],
  ["Does a gorilla eat meat? No, it ___.", "doesn't", ["don't", "isn't", "not"], "It doesn't."]
 ],
 vd: [
  ["A very tall animal with a long neck.", "giraffe"],
  ["A big gray animal with a trunk.", "elephant"],
  ["A big animal that lives in rivers. Its name means 'river horse'.", "hippo"],
  ["A black and white horse with stripes.", "zebra"],
  ["A black and white bear that eats bamboo.", "panda"],
  ["A very dry, hot place with sand.", "desert"],
  ["Big areas of grass with few trees.", "grassland"],
  ["A hot, wet forest with very tall trees.", "rain forest"]
 ],
 r: { t: "Animals of Africa", x: [
   "Many amazing animals live in Africa. Lions and zebras live in the grassland. Lions eat meat, and zebras eat grass.",
   "Hippos live in rivers. They stay in the water all day because it's very hot. At night, they eat grass.",
   "Gorillas live in the rain forest. They eat leaves and fruit. They don't eat meat."],
  q: [
   ["Where do zebras live?", "in the grassland", ["in rivers", "in the rain forest", "in the desert"]],
   ["When do hippos eat?", "at night", ["in the morning", "at noon", "all day"]],
   ["What don't gorillas eat?", "meat", ["leaves", "fruit", "plants"]]
  ] },
 l: [
  ["Boy: What do camels eat? Girl: They eat plants. They live in the desert.", "Where do camels live?", "in the desert", ["in the river", "in the forest", "in the sea"]],
  ["Crabs live in rivers and in the sea. They eat small fish.", "What do crabs eat?", "small fish", ["grass", "leaves", "bamboo"]],
  ["Do monkeys eat leaves? Yes, they do. They eat fruit, too.", "What else do monkeys eat?", "fruit", ["meat", "fish", "sand"]]
 ],
 w: { u: ["Giraffes eat leaves.", "Where do pandas live?", "Lions don't eat grass."],
  o: ["Choose a wild animal. Write what it eats and where it lives.", "Write three facts about animals."] },
 p: [
  [["lion", "tiger", "bite", "hippo"], 3, "long i"],
  [["zebra", "leaves", "eat", "desert"], 3, "long e"],
  [["camel", "crab", "cat", "city"], 3, "hard c"]
 ]
});
add("poptropica-4", 3, {
 rm: "<b>What's the weather like</b> today? It's wet. <b>There's</b> lightning and thunder. · <b>What's the temperature?</b> It's 25 <b>degrees</b>. · I <b>go</b> camping in the spring. He <b>goes</b> camping in the summer.",
 g: [
  ["What's the weather ___ today?", "like", ["likes", "is", "as"], "What's the weather like?"],
  ["___ lightning and thunder.", "There's", ["It's", "There are", "Is"], "There's lightning."],
  ["What's the ___ today? It's 30 degrees.", "temperature", ["weather", "season", "time"], "temperature = how hot or cold."],
  ["I ___ hiking in the fall.", "go", ["goes", "going", "am go"], "I go."],
  ["My brother ___ snowboarding in the winter.", "goes", ["go", "going", "gos"], "He goes."],
  ["We go camping ___ the summer.", "in", ["on", "at", "to"], "in + season."],
  ["It's very ___. Your clothes feel wet.", "humid", ["dry", "cold", "sunny"], "humid = wet air."],
  ["It's ___ today. There's lightning.", "stormy", ["sunny", "dry", "hot"], "stormy = storms."]
 ],
 vd: [
  ["The bright light in the sky in a storm.", "lightning"],
  ["The loud noise in a storm.", "thunder"],
  ["The season after winter, with flowers.", "spring"],
  ["The season with falling leaves.", "fall"],
  ["You sleep in a tent outside.", "go camping"],
  ["You go down the snow on a board.", "go snowboarding"],
  ["You walk in the mountains.", "go hiking"],
  ["We measure temperature in them.", "degrees"]
 ],
 r: { t: "Four Seasons", x: [
   "I live in a place with four seasons. In the spring, it's warm and there are lots of flowers. My family goes camping.",
   "In the summer, it's hot and humid. It's about 35 degrees! We go water skiing at the lake.",
   "In the fall, it's windy. In the winter, it's cold and snowy. My dad and I go snowboarding in the mountains."],
  q: [
   ["What does the family do in the spring?", "They go camping.", ["They go snowboarding.", "They go water skiing.", "They stay home."]],
   ["What's the weather like in the summer?", "hot and humid", ["cold and snowy", "windy", "cool"]],
   ["When do they go snowboarding?", "in the winter", ["in the summer", "in the spring", "in the fall"]]
  ] },
 l: [
  ["Today it's stormy. There's thunder and lightning. Stay inside!", "What's the weather like?", "stormy", ["sunny", "snowy", "hot"]],
  ["What's the temperature? It's twenty-five degrees.", "What's the temperature?", "25 degrees", ["35 degrees", "52 degrees", "15 degrees"]],
  ["My sister goes hiking in the fall. I go hiking in the spring.", "When does the sister go hiking?", "in the fall", ["in the spring", "in the summer", "in the winter"]]
 ],
 w: { u: ["What's the weather like today?", "It's twenty degrees.", "She goes camping in the summer."],
  o: ["What's your favorite season? What do you do?", "Describe the weather today."] },
 p: [
  [["snow", "go", "cold", "hot"], 3, "long o"],
  [["thunder", "three", "think", "the"], 3, "voiceless th"],
  [["rain", "day", "weather", "May"], 2, "long a"]
 ]
});
add("poptropica-4", 4, {
 rm: "What <b>do</b> you <b>do</b> on Saturday? <b>I have</b> music lessons. · What <b>does</b> she do? <b>She has</b> ballet lessons. · <b>When</b>? <b>In</b> the morning. <b>At</b> 2:15 (quarter after two).",
 g: [
  ["What do you do ___ Saturday?", "on", ["in", "at", "of"], "on + day."],
  ["She ___ ballet lessons on Monday.", "has", ["have", "haves", "is"], "She has."],
  ["What ___ he do on Friday?", "does", ["do", "is", "are"], "What does he do?"],
  ["I have piano lessons ___ the afternoon.", "in", ["on", "at", "to"], "in the afternoon."],
  ["We have lunch ___ noon.", "at", ["in", "on", "to"], "at noon."],
  ["2:45 = quarter ___ three.", "to", ["after", "past", "at"], "quarter to = 15 minutes before."],
  ["2:15 = quarter ___ two.", "after", ["to", "before", "at"], "quarter after = 15 minutes after."],
  ["He ___ gymnastics on Tuesday.", "does", ["do", "makes", "plays"], "do gymnastics → he does."]
 ],
 vd: [
  ["You learn to make food.", "learn to cook"],
  ["You practice an instrument with strings.", "practice the violin"],
  ["A dance with special shoes, on your toes.", "ballet"],
  ["A sport where you jump, roll and balance.", "gymnastics"],
  ["A Japanese sport with kicks.", "karate"],
  ["12 o'clock in the day.", "noon"],
  ["The time after the afternoon, before night.", "evening"],
  ["You learn to make pictures.", "learn to draw"]
 ],
 r: { t: "Leo's Busy Week", x: [
   "Leo has a very busy week. On Monday, he has karate at quarter after four. On Tuesday, he studies math with his tutor.",
   "On Wednesday afternoon, he practices the violin. On Thursday, he learns to cook with his grandma.",
   "On Saturday morning, he has music lessons at ten-thirty. On Sunday, he relaxes!"],
  q: [
   ["What time is Leo's karate class?", "at 4:15", ["at 4:45", "at 10:30", "at 2:30"]],
   ["What does he do on Thursday?", "He learns to cook.", ["He has karate.", "He studies math.", "He relaxes."]],
   ["When does he have music lessons?", "on Saturday morning", ["on Sunday", "on Monday", "on Wednesday"]]
  ] },
 l: [
  ["Girl: When do you have ballet lessons? Boy: On Friday, at quarter to five.", "What time are the ballet lessons?", "4:45", ["5:15", "4:15", "5:45"]],
  ["My sister does gymnastics on Tuesday and Thursday.", "When does she do gymnastics?", "Tuesday and Thursday", ["Monday and Wednesday", "Saturday", "every day"]],
  ["What do you do on Saturday? I learn to draw in the morning.", "What does he do on Saturday?", "He learns to draw.", ["He plays soccer.", "He does karate.", "He cooks."]]
 ],
 w: { u: ["I have music lessons on Saturday.", "When does she do karate?", "It's quarter after two."],
  o: ["Write about your week. What do you do each day?", "Write about a friend's week. Use he / she."] },
 p: [
  [["draw", "saw", "paw", "cow"], 3, "aw"],
  [["cook", "book", "look", "food"], 3, "short oo"],
  [["noon", "moon", "school", "good"], 3, "long oo"]
 ]
});
add("poptropica-4", 5, {
 rm: "What <b>do</b> you <b>want to be</b>? I want to be <b>a</b> builder / <b>an</b> astronaut. · She <b>wants</b> to be a singer. · He <b>doesn't want</b> to be… · <b>Does</b> she <b>want</b> to be…?",
 g: [
  ["I want to be ___ astronaut.", "an", ["a", "the", "—"], "an + vowel sound."],
  ["She ___ to be a singer.", "wants", ["want", "wanting", "is want"], "She wants."],
  ["What does he want ___ be?", "to", ["for", "at", "—"], "want to be."],
  ["I ___ want to be a lawyer.", "don't", ["doesn't", "am not", "isn't"], "I don't want."],
  ["He ___ want to be a firefighter.", "doesn't", ["don't", "isn't", "not"], "He doesn't want."],
  ["___ you want to be a photographer?", "Do", ["Does", "Are", "Is"], "Do you want…?"],
  ["Does she want to be a model? Yes, she ___.", "does", ["do", "is", "wants"], "Yes, she does."],
  ["My brother wants to be ___ mechanic.", "a", ["an", "the", "—"], "a + consonant sound."]
 ],
 vd: [
  ["A person who travels into space.", "astronaut"],
  ["A person who fixes cars.", "mechanic"],
  ["A person who stops fires.", "firefighter"],
  ["A person who takes photos.", "photographer"],
  ["A person who writes the news.", "journalist"],
  ["A person who makes things with wood.", "carpenter"],
  ["A person who writes programs for computers.", "computer programmer"],
  ["A person who designs clothes.", "fashion designer"]
 ],
 r: { t: "Dream Jobs", x: [
   "In my class, everyone has a dream job. Sara wants to be an astronaut. She loves stars and planets.",
   "Diego wants to be a basketball player because he's very tall. He doesn't want to be a lawyer like his dad.",
   "My best friend Ana wants to be a fashion designer. She draws beautiful clothes. And me? I want to be a journalist!"],
  q: [
   ["Why does Sara want to be an astronaut?", "She loves stars and planets.", ["She is tall.", "She draws clothes.", "Her dad is one."]],
   ["What doesn't Diego want to be?", "a lawyer", ["a basketball player", "an astronaut", "a journalist"]],
   ["What does the writer want to be?", "a journalist", ["a fashion designer", "a singer", "a builder"]]
  ] },
 l: [
  ["Boy: What do you want to be? Girl: I want to be a police officer.", "What does the girl want to be?", "a police officer", ["a firefighter", "a singer", "a model"]],
  ["My cousin wants to be a ballet dancer. She practices every day.", "What does the cousin want to be?", "a ballet dancer", ["a movie star", "an athlete", "a builder"]],
  ["Does he want to be a mechanic? No, he doesn't. He wants to be a carpenter.", "What does he want to be?", "a carpenter", ["a mechanic", "a lawyer", "a photographer"]]
 ],
 w: { u: ["I want to be an astronaut.", "What does she want to be?", "He doesn't want to be a singer."],
  o: ["What do you want to be? Why?", "Write what two people in your family want or wanted to be."] },
 p: [
  [["builder", "build", "big", "bike"], 3, "short i"],
  [["singer", "sing", "long", "sit"], 3, "ng"],
  [["photo", "phone", "fish", "pen"], 3, "ph = f"]
 ]
});
add("poptropica-4", 6, {
 rm: "Where <b>is</b> the hut? It's <b>over</b> the mountain / <b>across</b> the bridge / <b>near</b> the waterfall. · <b>Could</b> you walk around the lake? I <b>could</b> walk around it, but I <b>couldn't</b> swim through it.",
 g: [
  ["Where ___ the huts? They're near the river.", "are", ["is", "do", "does"], "Where are + plural?"],
  ["The cave is ___ the waterfall. (behind it)", "behind", ["over", "on", "of"], "behind."],
  ["We walked ___ the bridge to the other side.", "across", ["between", "below", "at"], "across = from one side to the other."],
  ["The bird flew ___ the mountain.", "over", ["through", "under", "in"], "over = above."],
  ["We went ___ the cave. It was dark inside!", "through", ["over", "across", "past"], "through = in one side, out the other."],
  ["I ___ swim when I was three. (yes)", "could", ["can", "couldn't", "can't"], "could = past of can."],
  ["She ___ climb the tree. It was too tall.", "couldn't", ["could", "can", "doesn't"], "couldn't = past of can't."],
  ["___ you see the sea from the hill?", "Could", ["Can't", "Do", "Are"], "Could you…?"]
 ],
 vd: [
  ["Water that falls from high rocks.", "waterfall"],
  ["A small, simple house.", "hut"],
  ["A big hole in a mountain.", "cave"],
  ["You cross a river on it.", "bridge"],
  ["Low land between mountains.", "valley"],
  ["Water with land all around it.", "lake"],
  ["The land next to the sea.", "coast"],
  ["A small road for walking.", "path"]
 ],
 r: { t: "Adventure in the Rain Forest", x: [
   "Last summer, my family visited a rain forest. We walked along a path through the trees. It was very green.",
   "We walked across a long bridge over a river. Then we saw a beautiful waterfall. Behind the waterfall there was a cave!",
   "I could see monkeys in the trees, but I couldn't see any jaguars. At night we slept in a hut near the lake."],
  q: [
   ["What did they walk across?", "a long bridge", ["a lake", "a cave", "a mountain"]],
   ["Where was the cave?", "behind the waterfall", ["near the hut", "over the bridge", "in the lake"]],
   ["What couldn't the writer see?", "jaguars", ["monkeys", "trees", "the waterfall"]]
  ] },
 l: [
  ["Boy: Where's the hut? Girl: It's past the bridge, near the lake.", "Where's the hut?", "near the lake", ["over the mountain", "in the cave", "behind the waterfall"]],
  ["We could walk around the lake, but we couldn't swim in it. It was cold.", "What couldn't they do?", "swim in the lake", ["walk around the lake", "see the lake", "find the lake"]],
  ["Go through the cave and then toward the mountain.", "Where do you go after the cave?", "toward the mountain", ["across the bridge", "to the sea", "around the lake"]]
 ],
 w: { u: ["The hut is near the waterfall.", "I could swim across the river.", "She couldn't climb the mountain."],
  o: ["Write directions from your house to a park. Use past, across, toward.", "Write two things you could do and one thing you couldn't do when you were five."] },
 p: [
  [["cave", "lake", "make", "valley"], 3, "long a"],
  [["bridge", "river", "hill", "hike"], 3, "short i"],
  [["through", "throw", "three", "this"], 3, "voiceless th"]
 ]
});
add("poptropica-4", 7, {
 rm: "<b>Why</b> are you crying? I'm crying <b>because</b> I'm sad. · What's the matter? I'm nervous. · What makes you feel nervous? Tests <b>make me feel</b> nervous.",
 g: [
  ["___ are you crying? Because I'm sad.", "Why", ["What", "Where", "When"], "Why asks for a reason."],
  ["I'm smiling ___ I'm happy.", "because", ["but", "so", "and"], "because gives the reason."],
  ["Why ___ he shouting?", "is", ["are", "does", "do"], "Why is he…?"],
  ["What's the ___? I'm worried.", "matter", ["problem is", "wrong", "feel"], "What's the matter?"],
  ["Tests make me ___ nervous.", "feel", ["feels", "feeling", "to feel"], "make + me + feel."],
  ["What makes ___ feel proud?", "you", ["your", "yours", "you're"], "make + object pronoun."],
  ["She's yawning because she's ___.", "tired", ["proud", "surprised", "nervous"], "yawning = tired."],
  ["He's blushing because he's ___.", "embarrassed", ["relaxed", "relieved", "proud"], "blush = face turns red."]
 ],
 vd: [
  ["Your face turns red.", "blushing"],
  ["You open your mouth wide when you are tired.", "yawning"],
  ["Your body moves because you're cold or scared.", "shaking"],
  ["You feel good about something you did.", "proud"],
  ["You feel better after a problem ends.", "relieved"],
  ["You feel calm and not worried.", "relaxed"],
  ["You make an unhappy face.", "frowning"],
  ["You speak very loudly.", "shouting"]
 ],
 r: { t: "The Big Test", x: [
   "Today Tom has a big math test. He's shaking because he's nervous. Tests always make him feel worried.",
   "After the test, the teacher smiles. 'You got ten out of ten!' Tom is so surprised. He's laughing.",
   "Now he feels relieved and proud. At home, he's relaxed. He's yawning because he's tired after a long day."],
  q: [
   ["Why is Tom shaking?", "because he's nervous", ["because he's cold", "because he's happy", "because he's tired"]],
   ["What score did Tom get?", "ten out of ten", ["five out of ten", "nine out of ten", "zero"]],
   ["Why is Tom yawning at home?", "because he's tired", ["because he's bored", "because he's sad", "because he's nervous"]]
  ] },
 l: [
  ["Girl: What's the matter? Boy: I'm worried. I can't find my dog.", "Why is the boy worried?", "He can't find his dog.", ["He has a test.", "He is sick.", "He lost his bag."]],
  ["Why is she smiling? Because she's proud of her picture.", "How does she feel?", "proud", ["nervous", "embarrassed", "sad"]],
  ["Storms make me feel scared.", "What makes him feel scared?", "storms", ["tests", "dogs", "the dark"]]
 ],
 w: { u: ["Why are you crying?", "I'm smiling because I'm happy.", "Tests make me feel nervous."],
  o: ["What makes you feel proud? What makes you feel nervous?", "Write about a time you felt surprised."] },
 p: [
  [["proud", "loud", "shout", "show"], 3, "ou"],
  [["cry", "shy", "why", "happy"], 3, "y = long i"],
  [["laugh", "half", "bath", "ball"], 3, "short a"]
 ]
});
add("poptropica-4", 8, {
 rm: "<b>Let's</b> go snorkeling! Great idea! / Sorry, I don't like… · <b>Do you have</b> a snorkel? · What <b>are</b> you <b>crazy about</b>? I'm crazy about rafting. · fond <b>of</b> · bored <b>with</b> · scared <b>of</b>",
 g: [
  ["___ go surfing! Great idea!", "Let's", ["Lets", "Let", "We"], "Let's + verb."],
  ["I'm crazy ___ kayaking.", "about", ["of", "with", "on"], "crazy about."],
  ["She's scared ___ sharks.", "of", ["about", "with", "to"], "scared of."],
  ["He's bored ___ fishing.", "with", ["of", "about", "at"], "bored with."],
  ["They're fond ___ sailing.", "of", ["with", "about", "on"], "fond of."],
  ["Do you have a life jacket? Yes, I ___.", "do", ["have", "does", "am"], "Yes, I do."],
  ["I'm terrified ___ bungee jumping!", "of", ["with", "about", "in"], "terrified of."],
  ["You need a ___ to go surfing.", "surfboard", ["fishing pole", "paddle", "snorkel"], "surfboard."]
 ],
 vd: [
  ["You use it to catch fish.", "fishing pole"],
  ["You wear it in the water so you don't sink.", "life jacket"],
  ["You use it to breathe under water near the top.", "snorkel"],
  ["You use it to move a kayak.", "paddle"],
  ["You go down a river in a big boat with friends.", "rafting"],
  ["You jump from a bridge with a long rope.", "bungee jumping"],
  ["You climb big rocks.", "rock climbing"],
  ["You swim deep under the sea with air tanks.", "scuba diving"]
 ],
 r: { t: "Vacation at the Beach", x: [
   "This summer we're at the beach. My brother is crazy about surfing. He has a new surfboard.",
   "My mom is fond of sailing, and my dad loves fishing. He has a big fishing pole.",
   "I'm scared of sharks, so I don't go scuba diving. But I love snorkeling! I always wear a life jacket."],
  q: [
   ["What is the brother crazy about?", "surfing", ["fishing", "sailing", "snorkeling"]],
   ["What is the writer scared of?", "sharks", ["the sun", "boats", "fish"]],
   ["What does the writer always wear?", "a life jacket", ["a snorkel", "a hat", "boots"]]
  ] },
 l: [
  ["Boy: Let's go kayaking! Girl: Sorry, I don't like kayaking. Let's go horseback riding.", "What does the girl want to do?", "go horseback riding", ["go kayaking", "go surfing", "go fishing"]],
  ["I'm terrified of hang gliding, but I'm crazy about rock climbing.", "What is she terrified of?", "hang gliding", ["rock climbing", "swimming", "surfing"]],
  ["Do you have a paddle? No, I don't. I have a snorkel.", "What does he have?", "a snorkel", ["a paddle", "a surfboard", "a fishing pole"]]
 ],
 w: { u: ["Let's go snorkeling!", "I'm crazy about surfing.", "She's scared of sharks."],
  o: ["What outdoor activity are you crazy about? Why?", "Write about an activity you are scared of."] },
 p: [
  [["surf", "turn", "fur", "four"], 3, "ur"],
  [["sail", "rain", "paint", "said"], 3, "ai = long a"],
  [["fish", "fishing", "ship", "five"], 3, "short i"]
 ]
});

/* ================= POPTROPICA ENGLISH 6 ================= */
add("poptropica-6", 2, {
 rm: "<b>How heavy</b> is it? It's 800 kilograms. · <b>How tall</b>? 5 meters tall. · The giraffe is <b>taller than</b> the rhino. · The giraffe is <b>the tallest</b>. · big → bigg<b>er</b> → the bigg<b>est</b> · heavy → heav<b>ier</b> → the heav<b>iest</b>",
 g: [
  ["The cheetah is ___ than the lion.", "faster", ["fast", "fastest", "more fast"], "Comparative: adjective + -er + than."],
  ["The whale is the ___ animal in the world.", "biggest", ["bigger", "big", "most big"], "Superlative: the + -est. big → biggest."],
  ["An elephant is ___ than a rhino.", "heavier", ["heavyer", "heaviest", "more heavy"], "heavy → heavier."],
  ["___ tall is the giraffe? It's 5 meters tall.", "How", ["What", "Which", "Who"], "How tall…?"],
  ["Which is the ___? The scorpion is.", "smallest", ["smaller", "small", "most small"], "the smallest."],
  ["Are otters ___ than seals? No, they aren't.", "bigger", ["big", "biggest", "more big"], "big → bigger (double g)."],
  ["The sea turtle is ___ than the cheetah.", "slower", ["slowest", "slow", "more slow"], "slow → slower."],
  ["The giraffes ___ taller than the trees.", "were", ["was", "are than", "is"], "Past plural: were."]
 ],
 vd: [
  ["The fastest land animal, with spots.", "cheetah"],
  ["A big animal with a horn on its nose.", "rhino"],
  ["A small animal that stands up to look around.", "meerkat"],
  ["A big bird from Australia that can't fly.", "emu"],
  ["A small animal with a dangerous tail.", "scorpion"],
  ["An animal from Australia that eats eucalyptus leaves.", "koala"],
  ["The biggest animal in the sea.", "whale"],
  ["An animal that swims in rivers and plays with stones.", "otter"]
 ],
 r: { t: "Record Breakers", x: [
   "Animals are amazing! The cheetah is the fastest land animal. It can run at 110 kilometers per hour.",
   "The blue whale is the biggest and heaviest animal on Earth. It is heavier than 30 elephants!",
   "The giraffe is the tallest animal. It can be 5 meters tall. The sea turtle is slower than the cheetah, but it can live for more than 80 years."],
  q: [
   ["Which is the fastest land animal?", "the cheetah", ["the giraffe", "the whale", "the turtle"]],
   ["Which animal is the heaviest?", "the blue whale", ["the elephant", "the rhino", "the giraffe"]],
   ["How tall can a giraffe be?", "5 meters", ["50 meters", "2 meters", "10 meters"]]
  ] },
 l: [
  ["How heavy is the rhino? It's two thousand kilograms.", "How heavy is the rhino?", "2,000 kilograms", ["200 kilograms", "20 kilograms", "12,000 kilograms"]],
  ["The tiger is bigger than the panther, but the cheetah is the fastest.", "Which is the fastest?", "the cheetah", ["the tiger", "the panther", "the lion"]],
  ["Girl: Are seals faster than otters? Boy: Yes, they are.", "Which is faster?", "seals", ["otters", "both the same", "turtles"]]
 ],
 w: { u: ["The giraffe is taller than the rhino.", "The whale is the biggest animal.", "How heavy is the elephant?"],
  o: ["Compare two animals. Use three comparatives.", "Write about the fastest, biggest and smallest animal you know."] },
 p: [
  [["tallest", "biggest", "fastest", "best"], 3, "-est ending /ɪst/"],
  [["whale", "white", "what", "who"], 3, "wh = w"],
  [["heavy", "head", "bread", "seal"], 3, "ea = short e"]
 ]
});
add("poptropica-6", 3, {
 rm: "<b>How do you get to</b> the school? <b>Go straight</b>, then <b>turn left</b>. It's <b>next to</b> / <b>behind</b> / <b>at the end of</b>… · I <b>want to</b> go to the park. He <b>wants to</b> go… · I <b>have to</b> go to the library. She <b>has to</b> go…",
 g: [
  ["How do you ___ to the museum?", "get", ["go", "arrive", "take"], "How do you get to…?"],
  ["Go ___, then turn right.", "straight", ["straightly", "street", "strong"], "Go straight."],
  ["The bank is at the ___ of the street.", "end", ["final", "finish", "last"], "at the end of."],
  ["I ___ to go to the movie theater.", "want", ["wants", "wanting", "am want"], "I want to."],
  ["She ___ to go to the pharmacy. She's sick.", "has", ["have", "haves", "is"], "She has to (obligation)."],
  ["We ___ to buy food at the supermarket.", "have", ["has", "having", "are"], "We have to."],
  ["He wants ___ go to the arcade.", "to", ["for", "—", "at"], "want + to + verb."],
  ["The library is ___ the bank and the park.", "between", ["next", "behind of", "in front"], "between A and B."]
 ],
 vd: [
  ["You buy medicine here.", "pharmacy"],
  ["You borrow books here.", "library"],
  ["You watch films here.", "movie theater"],
  ["You see old and important things here.", "museum"],
  ["Planes leave and arrive here.", "airport"],
  ["Trains leave and arrive here.", "station"],
  ["You buy books here.", "bookstore"],
  ["You play video games here.", "arcade"]
 ],
 r: { t: "A Day in the City", x: [
   "On Saturday, Emma and her mom went to the city center. First they had to go to the bank. It's at the end of Main Street.",
   "Then Emma wanted to go to the bookstore. 'Go straight and turn left. It's next to the coffee shop,' said a man.",
   "Mom had to buy medicine, so they went to the pharmacy behind the museum. In the afternoon, they went to the movie theater."],
  q: [
   ["Where is the bank?", "at the end of Main Street", ["next to the coffee shop", "behind the museum", "near the airport"]],
   ["Where is the bookstore?", "next to the coffee shop", ["behind the museum", "at the end of the street", "in the mall"]],
   ["Why did they go to the pharmacy?", "Mom had to buy medicine.", ["Emma wanted a book.", "They wanted coffee.", "They had to get money."]]
  ] },
 l: [
  ["Excuse me, how do I get to the library? Go straight and turn right. It's next to the park.", "Where is the library?", "next to the park", ["behind the bank", "at the end of the street", "next to the station"]],
  ["I want to go to the arcade, but I have to do my homework first.", "What does he have to do first?", "his homework", ["go to the arcade", "go to the park", "buy food"]],
  ["My sister wants to go to the shopping mall. She wants new shoes.", "Why does she want to go?", "to buy new shoes", ["to see a movie", "to eat", "to meet friends"]]
 ],
 w: { u: ["Go straight and turn left.", "I want to go to the museum.", "She has to go to the bank."],
  o: ["Write directions from your school to a place near it.", "Write two places you want to go and two things you have to do this week."] },
 p: [
  [["straight", "great", "train", "street"], 3, "long a"],
  [["mall", "ball", "call", "map"], 3, "all"],
  [["castle", "listen", "whistle", "cast"], 3, "silent t"]
 ]
});
add("poptropica-6", 4, {
 rm: "Past Simple: cook → <b>cooked</b>, drop → <b>dropped</b>, fall → <b>fell</b>, bring → <b>brought</b>. · I <b>didn't</b> pass my test <b>because</b> I <b>didn't</b> study. · Adverbs: She paddled very <b>quickly</b>.",
 g: [
  ["Yesterday I ___ stew for dinner.", "cooked", ["cook", "cooking", "cooks"], "Regular past: + -ed."],
  ["He ___ the plate and it broke.", "dropped", ["droped", "drop", "drops"], "drop → dropped (double p)."],
  ["We ___ in the lake!", "fell", ["falled", "fall", "fallen"], "fall → fell (irregular)."],
  ["I didn't pass the test because I ___ study.", "didn't", ["don't", "wasn't", "not"], "didn't + base verb."],
  ["She ___ her juice to school.", "brought", ["bringed", "bring", "brang"], "bring → brought."],
  ["What ___? I missed the bus.", "happened", ["happen", "happens", "did happen"], "What happened?"],
  ["He ran very ___.", "quickly", ["quick", "quicker", "quickest"], "Adverb: quick → quickly."],
  ["I ___ my lunch. I was hungry!", "ate", ["eated", "eat", "eaten"], "eat → ate."]
 ],
 vd: [
  ["Japanese food with rice and raw fish.", "sushi"],
  ["Eggs cooked in a pan, sometimes with cheese.", "omelet"],
  ["A spicy Indian dish.", "curry"],
  ["A Spanish dish with rice and seafood.", "paella"],
  ["Long Italian pasta.", "spaghetti"],
  ["Chinese food: little pieces of dough with filling.", "dumplings"],
  ["To arrive too late and not get on.", "miss the bus"],
  ["To get a good result on an exam.", "pass a test"]
 ],
 r: { t: "A Terrible Day", x: [
   "Yesterday was a bad day for Sam. First, he woke up late and missed the bus. He ran to school very quickly.",
   "At lunch, he dropped his tray and his spaghetti fell on the floor! He didn't eat his lunch.",
   "In the afternoon, he had a math test. He didn't pass because he didn't study. 'Tomorrow will be better,' said his mom."],
  q: [
   ["Why did Sam miss the bus?", "He woke up late.", ["He was sick.", "It was early.", "He walked slowly."]],
   ["What happened at lunch?", "He dropped his spaghetti.", ["He ate sushi.", "He missed lunch.", "He cooked."]],
   ["Why didn't he pass the test?", "He didn't study.", ["He was late.", "He was hungry.", "It was difficult."]]
  ] },
 l: [
  ["Girl: What happened? Boy: I fell in the lake when I was paddling.", "What happened to the boy?", "He fell in the lake.", ["He missed the bus.", "He dropped his lunch.", "He lost his bag."]],
  ["Last night my dad cooked dumplings and noodles.", "What did Dad cook?", "dumplings and noodles", ["curry and rice", "fish and chips", "paella"]],
  ["I didn't bring my juice because I forgot it at home.", "Why didn't she bring her juice?", "She forgot it at home.", ["She didn't like it.", "She drank it.", "She dropped it."]]
 ],
 w: { u: ["I missed the bus yesterday.", "He didn't pass the test.", "She ran very quickly."],
  o: ["Write about a bad day you had. What happened?", "Write about your favorite international food."] },
 p: [
  [["cooked", "missed", "dropped", "played"], 3, "-ed = /t/"],
  [["wanted", "needed", "painted", "jumped"], 3, "-ed = /ɪd/"],
  [["stew", "new", "few", "sew"], 3, "ew = /uː/"]
 ]
});
add("poptropica-6", 5, {
 rm: "What <b>did</b> you <b>do</b> yesterday? I <b>went</b> to the aquarium. · <b>Did</b> you <b>like</b> it? Yes, I <b>did</b>. / No, I <b>didn't</b>. · Future: First, <b>I'll</b> ride the roller coaster. Then <b>I'll</b>…",
 g: [
  ["What ___ you do yesterday?", "did", ["do", "does", "were"], "Past question: did."],
  ["I ___ to the water park last Sunday.", "went", ["go", "goed", "gone"], "go → went."],
  ["Did you like the circus? Yes, I ___.", "did", ["do", "liked", "was"], "Yes, I did."],
  ["___ she go to the palace? No, she didn't.", "Did", ["Does", "Was", "Do"], "Did she…?"],
  ["Tomorrow I ___ ride the Ferris wheel.", "will", ["did", "am", "was"], "will + verb (future)."],
  ["First, I'll ___ on the bumper cars.", "go", ["goes", "went", "going"], "will + base verb."],
  ["We didn't ___ the botanical gardens.", "visit", ["visited", "visits", "visiting"], "didn't + base verb."],
  ["What will you ___ at the amusement park?", "do", ["did", "does", "doing"], "will + base verb."]
 ],
 vd: [
  ["A place to see fish and sea animals.", "aquarium"],
  ["A place with rides like roller coasters.", "amusement park"],
  ["A big house where a king or queen lives.", "palace"],
  ["A place with pools and water slides.", "water park"],
  ["A show with clowns and acrobats.", "circus"],
  ["A big park with many plants and flowers.", "botanical gardens"],
  ["A big wheel that goes up high slowly.", "Ferris wheel"],
  ["Small cars that crash into each other for fun.", "bumper cars"]
 ],
 r: { t: "My School Trip", x: [
   "Last Friday my class went to the aquarium. We saw sharks, sea turtles and an octopus. I liked it a lot!",
   "After lunch, we went to the botanical gardens. Some of my friends didn't like it, but I loved the flowers.",
   "Next month, we will go to an amusement park. First, I'll ride the roller coaster. Then I'll play miniature golf with my friends."],
  q: [
   ["Where did the class go last Friday?", "to the aquarium", ["to the circus", "to the palace", "to the water park"]],
   ["Did everyone like the botanical gardens?", "No, some friends didn't.", ["Yes, everyone did.", "No, nobody did.", "It doesn't say."]],
   ["What will the writer do first at the amusement park?", "ride the roller coaster", ["play miniature golf", "go on the bumper cars", "eat lunch"]]
  ] },
 l: [
  ["Boy: Did you go to the theater on Saturday? Girl: No, I didn't. I went to the circus.", "Where did the girl go?", "to the circus", ["to the theater", "to the palace", "to the park"]],
  ["Tomorrow we'll go to the water park. First, we'll go down the big slide.", "What will they do first?", "go down the big slide", ["eat ice cream", "swim", "ride the Ferris wheel"]],
  ["We visited a national park and saw bears and eagles.", "What did they see?", "bears and eagles", ["sharks", "clowns", "flowers"]]
 ],
 w: { u: ["I went to the aquarium yesterday.", "Did you like the circus?", "First, I'll ride the Ferris wheel."],
  o: ["Write about a trip you took. Where did you go? What did you do?", "Plan a day at an amusement park. Use first, then and will."] },
 p: [
  [["ride", "slide", "wide", "river"], 3, "long i"],
  [["wheel", "week", "see", "well"], 3, "long e"],
  [["circus", "city", "cinema", "cat"], 3, "soft c"]
 ]
});
add("poptropica-6", 6, {
 rm: "Reflexive pronouns: I did it <b>by myself</b>. · yourself · himself · herself · ourselves · themselves · <b>Have you ever</b> played the saxophone? Yes, I <b>have</b>. / I<b>'ve never</b> been to a concert.",
 g: [
  ["I made this cake by ___.", "myself", ["me", "mine", "my"], "I → myself."],
  ["She painted the picture by ___.", "herself", ["himself", "her", "sheself"], "she → herself."],
  ["They cleaned the room by ___.", "themselves", ["themself", "theirselves", "them"], "they → themselves."],
  ["___ you ever played the drums?", "Have", ["Did", "Do", "Has"], "Have you ever + past participle?"],
  ["I've ___ been to a concert.", "never", ["ever", "not", "no"], "never = not at any time."],
  ["Has he ever ___ a western?", "seen", ["saw", "see", "seeing"], "has + past participle (seen)."],
  ["Did you hear the cello? Yes, I ___.", "did", ["have", "do", "heard"], "Did…? Yes, I did."],
  ["We did the project by ___.", "ourselves", ["us", "ourself", "our"], "we → ourselves."]
 ],
 vd: [
  ["A movie that makes you laugh.", "comedy"],
  ["A movie about the future, space or robots.", "sci-fi"],
  ["An exciting, scary movie with mystery.", "thriller"],
  ["A movie with cowboys.", "western"],
  ["A movie with lots of songs.", "musical"],
  ["A big string instrument you play sitting down.", "cello"],
  ["A small instrument you play with your mouth.", "harmonica"],
  ["A big instrument with many strings that you play with your fingers.", "harp"]
 ],
 r: { t: "The School Concert", x: [
   "Last week our school had a concert. I played the clarinet. I've never played in front of so many people before!",
   "My friend Lucy played the harp. She learned to play it by herself, with videos. Two boys played the drums and the cymbals.",
   "After the concert, we watched a musical. Have you ever seen a musical? It was fantastic!"],
  q: [
   ["What instrument did the writer play?", "the clarinet", ["the harp", "the drums", "the cello"]],
   ["How did Lucy learn the harp?", "by herself, with videos", ["with a teacher", "at school", "with her mom"]],
   ["What did they watch after the concert?", "a musical", ["a thriller", "a western", "a cartoon"]]
  ] },
 l: [
  ["Boy: Have you ever played the saxophone? Girl: No, I haven't. But I've played the triangle.", "What has the girl played?", "the triangle", ["the saxophone", "the harp", "the cello"]],
  ["My favorite movies are comedies. I've never watched a thriller.", "What has he never watched?", "a thriller", ["a comedy", "a cartoon", "a musical"]],
  ["The twins fixed the bike by themselves.", "Who fixed the bike?", "the twins", ["their dad", "a mechanic", "their teacher"]]
 ],
 w: { u: ["I did it by myself.", "Have you ever seen a western?", "She has never played the drums."],
  o: ["Write three things you have done and two things you have never done.", "What's your favorite movie genre? Why?"] },
 p: [
  [["harp", "car", "star", "care"], 3, "ar"],
  [["drums", "fun", "music", "cup"], 2, "short u"],
  [["comedy", "come", "cello", "cat"], 2, "hard c"]
 ]
});
add("poptropica-6", 7, {
 rm: "Past questions: <b>Who / When / Where / How / Why did</b> they…? · The big telescope is <b>more complicated than</b> the small one. It's <b>the most complicated</b>. · <b>less</b> complicated · <b>the least</b> complicated",
 g: [
  ["___ did the astronauts go? To the Moon.", "Where", ["Who", "When", "Why"], "Where asks about place."],
  ["___ did they land? In 1969.", "When", ["Where", "Who", "How"], "When asks about time."],
  ["___ did they travel? By spaceship.", "How", ["Why", "Who", "Where"], "How asks about the way."],
  ["This telescope is ___ complicated than that one.", "more", ["most", "much", "the more"], "long adjective: more … than."],
  ["Space is the ___ fascinating subject!", "most", ["more", "much", "very"], "the most + long adjective."],
  ["This game is ___ complicated than the other one. It's easy.", "less", ["more", "least", "most"], "less = not as much."],
  ["It's the ___ important thing. (not important at all)", "least", ["less", "most", "more"], "the least."],
  ["Why ___ the comet look so bright?", "did", ["was", "were", "does did"], "Why did…? (past)"]
 ],
 vd: [
  ["A big object in space that goes around the Sun, like Earth.", "planet"],
  ["An object in space with a long, bright tail.", "comet"],
  ["You use it to see things very far away.", "telescope"],
  ["A machine that goes around the Earth and sends signals.", "satellite"],
  ["A creature from another planet.", "alien"],
  ["A vehicle that travels in space.", "spaceship"],
  ["Very, very interesting.", "fascinating"],
  ["Difficult to understand, with many parts.", "complicated"]
 ],
 r: { t: "The First Moon Landing", x: [
   "In 1969, three astronauts traveled to the Moon in a spaceship called Apollo 11. It was one of the most important trips in history.",
   "Neil Armstrong was the first person to walk on the Moon. Why did he go? Scientists wanted to learn more about space.",
   "Today, telescopes and satellites are more complicated than in 1969. They help us see planets, stars and comets far away."],
  q: [
   ["When did astronauts first go to the Moon?", "in 1969", ["in 1999", "in 1869", "in 2009"]],
   ["Who was the first person to walk on the Moon?", "Neil Armstrong", ["Apollo", "a scientist", "Galileo"]],
   ["How are telescopes today?", "more complicated", ["less important", "the same", "smaller and simpler"]]
  ] },
 l: [
  ["Girl: Where did you see the comet? Boy: I saw it from the hill with my telescope.", "How did he see the comet?", "with his telescope", ["on TV", "from a plane", "in a book"]],
  ["Mars is fascinating, but Saturn is the most gorgeous planet.", "Which planet is the most gorgeous?", "Saturn", ["Mars", "Earth", "Jupiter"]],
  ["This model rocket is less complicated than the robot.", "Which is less complicated?", "the model rocket", ["the robot", "both", "neither"]]
 ],
 w: { u: ["Where did the astronauts go?", "This telescope is more complicated.", "It's the most fascinating planet."],
  o: ["Write three questions you want to ask an astronaut.", "Compare two planets using more and most."] },
 p: [
  [["space", "place", "face", "plan"], 3, "long a"],
  [["star", "Mars", "far", "four"], 3, "ar"],
  [["moon", "soon", "spoon", "book"], 3, "long oo"]
 ]
});
add("poptropica-6", 8, {
 rm: "<b>Are</b> you <b>going to</b> recycle paper? Yes, I <b>am</b>. · What <b>can</b> you do to help? I can use public transportation. · First conditional: <b>If</b> you reuse plastic bags, you<b>'ll</b> reduce waste.",
 g: [
  ["I'm ___ to recycle bottles.", "going", ["go", "goes", "gone"], "be going to + verb."],
  ["Are you going to pick up trash? Yes, I ___.", "am", ["do", "will", "going"], "Yes, I am."],
  ["If we turn off the lights, we ___ save energy.", "will", ["would", "are", "did"], "If + present, will + verb."],
  ["If you ___ plastic bags, you'll reduce waste.", "reuse", ["reused", "will reuse", "reuses"], "If + present simple."],
  ["She's going to ___ the bus to school.", "take", ["takes", "taking", "took"], "going to + base verb."],
  ["What can you do ___ help?", "to", ["for", "—", "at"], "to + verb (purpose)."],
  ["If people recycle paper, they'll ___ trees.", "save", ["saves", "saving", "saved"], "will + base verb."],
  ["We aren't going to ___ water.", "waste", ["wasting", "wastes", "wasted"], "going to + base verb."]
 ],
 vd: [
  ["To use something again.", "reuse"],
  ["To make old things into new things.", "recycle"],
  ["Buses, trains and subways for everyone.", "public transportation"],
  ["Dirty air, water or land.", "pollution"],
  ["Things we throw away.", "trash"],
  ["To use less energy.", "conserve energy"],
  ["To make smaller or less.", "reduce"],
  ["Things we use from nature, like water and wood.", "resources"]
 ],
 r: { t: "Our Green School", x: [
   "Our school is going to be a green school! Every class is going to recycle paper and plastic bottles.",
   "We're going to pick up trash in the park every Friday. If we keep the park clean, more birds will come back.",
   "Our teacher says, 'If you turn off the lights when you leave, you'll conserve energy.' Small actions can help the planet."],
  q: [
   ["What is every class going to recycle?", "paper and plastic bottles", ["food", "clothes", "toys"]],
   ["What will happen if they keep the park clean?", "More birds will come back.", ["They will get a prize.", "It will rain.", "The park will close."]],
   ["How can students conserve energy?", "by turning off the lights", ["by using more paper", "by driving", "by buying bags"]]
  ] },
 l: [
  ["Boy: What are you going to do to help? Girl: I'm going to use public transportation.", "What is the girl going to do?", "use public transportation", ["recycle paper", "pick up trash", "plant trees"]],
  ["If we reuse plastic bags, we'll reduce waste.", "What will reusing bags do?", "reduce waste", ["save water", "save trees", "make energy"]],
  ["We're going to plant ten trees at school next week.", "How many trees will they plant?", "ten", ["two", "three", "twenty"]]
 ],
 w: { u: ["I'm going to recycle paper.", "If we save water, we'll help the planet.", "What can you do to help?"],
  o: ["Write three things you are going to do to help the environment.", "Write two sentences with If… will…"] },
 p: [
  [["green", "tree", "clean", "great"], 3, "long e"],
  [["plastic", "planet", "plant", "place"], 3, "short a"],
  [["energy", "gentle", "giant", "green"], 3, "soft g"]
 ]
});
})();
