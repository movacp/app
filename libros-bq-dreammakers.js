/* MOVA · Bancos de preguntas · Dream Makers 2, 3 y 4 (unidades restantes). Solo agrega unidades que aún no existen. */
(function(){
var B = window.MOVA_BQ = window.MOVA_BQ || {};
function add(k, n, u){ B[k] = B[k] || {}; if (!B[k][n]) B[k][n] = u; }

/* ================= DREAM MAKERS 2 ================= */
add("dream-makers-2", 2, {
 rm: "Three <b>plus</b> five <b>equals</b> eight. (3 + 5 = 8) · Nine <b>minus</b> two <b>equals</b> seven. (9 − 2 = 7) · Even: 2, 4, 6 · Odd: 1, 3, 5",
 g: [
  ["Three ___ five equals eight.", "plus", ["minus", "is", "and equals"], "+ = plus."],
  ["Nine minus two ___ seven.", "equals", ["plus", "minus", "is equal"], "= equals."],
  ["Ten ___ four equals six.", "minus", ["plus", "equals", "and"], "− = minus."],
  ["Eleven plus one equals ___.", "twelve", ["eleven", "thirteen", "ten"], "11 + 1 = 12."],
  ["Twenty minus five equals ___.", "fifteen", ["fifty", "fourteen", "sixteen"], "20 − 5 = 15."],
  ["Four is an ___ number.", "even", ["odd", "old", "orange"], "2, 4, 6, 8 are even."],
  ["Seven is an ___ number.", "odd", ["even", "eight", "egg"], "1, 3, 5, 7 are odd."],
  ["I have ___ balls. (13)", "thirteen", ["thirty", "three", "fourteen"], "13 = thirteen."]
 ],
 vd: [
  ["The number after nineteen.", "twenty"],
  ["The number after eleven.", "twelve"],
  ["A toy that looks like a baby.", "doll"],
  ["A soft toy bear.", "teddy bear"],
  ["A round toy you kick or throw.", "ball"],
  ["The color of grapes, red and blue together.", "purple"],
  ["The color of snow and milk.", "white"],
  ["The color of chocolate.", "brown"]
 ],
 r: { t: "Mia's Toys", x: [
   "Hi! I'm Mia. I have lots of toys. I have twelve balls and three dolls.",
   "I have one big brown teddy bear. Its name is Coco.",
   "Twelve plus three equals fifteen. Plus Coco… sixteen toys!"],
  q: [
   ["How many dolls does Mia have?", "three", ["twelve", "fifteen", "one"]],
   ["What color is the teddy bear?", "brown", ["white", "purple", "gray"]],
   ["How many toys does Mia have?", "sixteen", ["twelve", "fifteen", "three"]]
  ] },
 l: [
  ["Five plus six equals eleven.", "What number do you hear at the end?", "11", ["12", "6", "15"]],
  ["Look! A purple ball and an orange doll.", "What color is the ball?", "purple", ["orange", "gray", "black"]],
  ["Eighteen minus eight equals ten.", "What is 18 − 8?", "10", ["8", "11", "16"]]
 ],
 w: { u: ["Two plus two equals four.", "I have a teddy bear.", "Seven is an odd number."],
  o: ["Write a math problem with plus.", "Write about your toys. Use numbers and colors."] },
 p: [
  [["ten", "red", "pen", "nine"], 3, "short e"],
  [["doll", "dog", "box", "ball"], 3, "short o"],
  [["six", "pink", "sit", "five"], 3, "short i"]
 ]
});
add("dream-makers-2", 3, {
 rm: "<b>Do you like</b> bananas? Yes, I <b>do</b>. / No, I <b>don't</b>. · What's your favorite fruit? I <b>like</b> / I <b>love</b>… · It's <b>a</b> banana. It's <b>an</b> apple.",
 g: [
  ["Do you like grapes? Yes, I ___.", "do", ["am", "like", "does"], "Yes, I do."],
  ["Do you like papaya? No, I ___.", "don't", ["do", "not", "am not"], "No, I don't."],
  ["It's ___ apple.", "an", ["a", "the", "—"], "an + a, e, i, o, u sound."],
  ["It's ___ banana.", "a", ["an", "two", "—"], "a + consonant."],
  ["___ you like pineapple?", "Do", ["Are", "Is", "Does"], "Do you like…?"],
  ["What's your favorite ___? I love strawberries.", "fruit", ["color", "toy", "number"], "favorite fruit."],
  ["I ___ watermelon. It's delicious!", "love", ["loves", "lovely", "am love"], "I love."],
  ["It's ___ orange.", "an", ["a", "two", "the"], "an orange."]
 ],
 vd: [
  ["A long yellow fruit. Monkeys love it.", "banana"],
  ["A big green fruit, red inside, with black seeds.", "watermelon"],
  ["Small purple or green fruits that grow together.", "grape"],
  ["A yellow fruit with spiky skin.", "pineapple"],
  ["A small red fruit with seeds outside.", "strawberry"],
  ["A round red or green fruit.", "apple"],
  ["Very, very good to eat.", "delicious"],
  ["Good for your body.", "healthy"]
 ],
 r: { t: "Fruit Salad", x: [
   "Today Tom and his mom make a fruit salad.",
   "Tom likes bananas, grapes and pineapple. He doesn't like papaya.",
   "Mom loves strawberries and watermelon. The fruit salad is healthy and delicious!"],
  q: [
   ["What do Tom and Mom make?", "a fruit salad", ["a cake", "a sandwich", "juice"]],
   ["What fruit doesn't Tom like?", "papaya", ["bananas", "grapes", "pineapple"]],
   ["What does Mom love?", "strawberries and watermelon", ["papaya", "apples", "grapes"]]
  ] },
 l: [
  ["Girl: Do you like apples? Boy: Yes, I do!", "Does the boy like apples?", "Yes, he does.", ["No, he doesn't.", "He likes bananas.", "He doesn't know."]],
  ["My favorite fruit is pineapple.", "What is the favorite fruit?", "pineapple", ["papaya", "apple", "orange"]],
  ["It's an orange. It's delicious.", "What is it?", "an orange", ["a banana", "a grape", "an apple"]]
 ],
 w: { u: ["I like bananas.", "Do you like grapes?", "It's an apple."],
  o: ["What's your favorite fruit? Write two sentences.", "Draw and write: My fruit salad has…"] },
 p: [
  [["apple", "banana", "cat", "grape"], 3, "short a"],
  [["pineapple", "pig", "pen", "bear"], 3, "p"],
  [["grape", "cake", "game", "glass"], 3, "long a"]
 ]
});
add("dream-makers-2", 4, {
 rm: "<b>How do you spell</b> \"cat\"? C – A – T. · The alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z · <b>I like</b> red apples.",
 g: [
  ["How do you ___ \"dog\"? D – O – G.", "spell", ["spells", "say", "write it"], "How do you spell…?"],
  ["How do you spell \"red\"? R – E – ___.", "D", ["B", "T", "P"], "R-E-D."],
  ["The letter after A is ___.", "B", ["C", "D", "Z"], "A, B, C…"],
  ["The letter before Z is ___.", "Y", ["X", "W", "A"], "…X, Y, Z."],
  ["I ___ purple balls.", "like", ["likes", "liking", "am like"], "I like."],
  ["How do you spell \"pen\"? ___.", "P – E – N", ["P – A – N", "B – E – N", "P – E – M"], "pen."],
  ["\"Apple\" starts with the letter ___.", "A", ["P", "E", "L"], "A for apple."],
  ["\"Ball\" starts with the letter ___.", "B", ["D", "P", "L"], "B for ball."]
 ],
 vd: [
  ["All the letters from A to Z.", "alphabet"],
  ["A yellow fruit. B-A-N-A-N-A.", "banana"],
  ["A toy like a baby. D-O-L-L.", "doll"],
  ["The color of the sky. B-L-U-E.", "blue"],
  ["A round toy. B-A-L-L.", "ball"],
  ["The color of grass. G-R-E-E-N.", "green"],
  ["A red fruit. A-P-P-L-E.", "apple"],
  ["A soft bear toy. T-E-D-D-Y.", "teddy"]
 ],
 r: { t: "My Name", x: [
   "Hi! My name is Ana. How do you spell my name? A – N – A.",
   "My brother's name is Leo. L – E – O.",
   "I like the letter A. Ana, apple, alphabet!"],
  q: [
   ["How do you spell the girl's name?", "A – N – A", ["A – M – A", "E – N – A", "A – N – N"]],
   ["What's her brother's name?", "Leo", ["Ana", "Max", "Tom"]],
   ["What letter does Ana like?", "A", ["L", "B", "Z"]]
  ] },
 l: [
  ["C – A – T. Cat.", "What word is it?", "cat", ["hat", "car", "cut"]],
  ["How do you spell \"pig\"? P – I – G.", "What word do they spell?", "pig", ["big", "pin", "dig"]],
  ["The letter is M. M for monkey.", "What letter do you hear?", "M", ["N", "W", "B"]]
 ],
 w: { u: ["How do you spell cat?", "I like green grapes.", "My name is Ana."],
  o: ["Write your name and spell it.", "Write three words that start with B."] },
 p: [
  [["bed", "ball", "bear", "dog"], 3, "b"],
  [["hat", "cat", "bat", "hot"], 3, "at"],
  [["sun", "sit", "six", "zoo"], 3, "s"]
 ]
});
add("dream-makers-2", 5, {
 rm: "<b>This is my</b> backpack. · <b>Do you have a</b> ruler? Yes, I <b>do</b>. / No, I <b>don't</b>. · Do you have <b>an</b> eraser? · <b>What color is</b> your pencil? <b>It's</b> blue.",
 g: [
  ["This ___ my pencil case.", "is", ["are", "am", "be"], "This is."],
  ["Do you have ___ eraser?", "an", ["a", "two", "the"], "an + vowel sound."],
  ["Do you have ___ ruler?", "a", ["an", "two", "—"], "a + consonant."],
  ["Do you have scissors? Yes, I ___.", "do", ["have", "am", "does"], "Yes, I do."],
  ["What color ___ your backpack?", "is", ["are", "do", "am"], "What color is…?"],
  ["___ red.", "It's", ["Its", "Is", "This"], "It's = it is."],
  ["Do you have glue? No, I ___.", "don't", ["do", "not", "isn't"], "No, I don't."],
  ["My desk is clean. It's ___.", "neat", ["messy", "big", "red"], "neat = clean and in order."]
 ],
 vd: [
  ["You use it to cut paper.", "scissors"],
  ["You use it to draw straight lines.", "ruler"],
  ["You use it to delete pencil marks.", "eraser"],
  ["You use it to make a pencil sharp.", "sharpener"],
  ["A bag for school on your back.", "backpack"],
  ["You color with it. It's made of wax.", "crayon"],
  ["You use it to stick paper.", "glue"],
  ["Not in order, with things everywhere.", "messy"]
 ],
 r: { t: "My Backpack", x: [
   "This is my backpack. It's blue. In my backpack, I have a book and a pencil case.",
   "In my pencil case, I have two pencils, an eraser and a sharpener. My ruler is green.",
   "Do I have crayons? Yes, I do! I have ten crayons. My backpack is neat."],
  q: [
   ["What color is the backpack?", "blue", ["green", "red", "yellow"]],
   ["What color is the ruler?", "green", ["blue", "red", "black"]],
   ["How many crayons are there?", "ten", ["two", "three", "twelve"]]
  ] },
 l: [
  ["Boy: Do you have a sharpener? Girl: Yes, I do. Here you are.", "Does the girl have a sharpener?", "Yes, she does.", ["No, she doesn't.", "She has glue.", "She has an eraser."]],
  ["What color is your pencil case? It's purple.", "What color is the pencil case?", "purple", ["pink", "blue", "black"]],
  ["Oh no! My desk is messy.", "How is the desk?", "messy", ["neat", "big", "small"]]
 ],
 w: { u: ["This is my backpack.", "Do you have an eraser?", "My ruler is red."],
  o: ["What's in your backpack? Write three things.", "Write the colors of three school objects."] },
 p: [
  [["pen", "pencil", "red", "pink"], 3, "short e"],
  [["glue", "blue", "true", "gum"], 3, "ue"],
  [["desk", "dog", "duck", "book"], 3, "d"]
 ]
});
add("dream-makers-2", 6, {
 rm: "<b>Is this a</b> cow? Yes, it <b>is</b>. / No, it <b>isn't</b>. · <b>Are they</b> pigs? Yes, they <b>are</b>. / No, they <b>aren't</b>. · What's your favorite animal? I <b>love</b> horses.",
 g: [
  ["___ this a duck? Yes, it is.", "Is", ["Are", "Do", "It"], "Is this…?"],
  ["Is this a goat? No, it ___.", "isn't", ["aren't", "is", "not"], "No, it isn't."],
  ["___ they sheep? Yes, they are.", "Are", ["Is", "Do", "This"], "Are they…?"],
  ["Are they hens? No, they ___.", "aren't", ["isn't", "don't", "not"], "No, they aren't."],
  ["I ___ horses!", "love", ["loves", "am love", "lovely"], "I love."],
  ["Cows give us ___.", "milk", ["eggs", "honey", "jam"], "Milk comes from cows."],
  ["Bees make ___.", "honey", ["milk", "cheese", "eggs"], "Bees make honey."],
  ["Hens give us ___.", "eggs", ["milk", "honey", "jam"], "Hens lay eggs."]
 ],
 vd: [
  ["A small insect that makes honey.", "bee"],
  ["A big farm animal that gives milk.", "cow"],
  ["A pink farm animal that says 'oink'.", "pig"],
  ["A farm animal with white wool.", "sheep"],
  ["A farm bird that gives eggs.", "hen"],
  ["A bird that swims and says 'quack'.", "duck"],
  ["A big animal you can ride.", "horse"],
  ["Sweet food from bees.", "honey"]
 ],
 r: { t: "Grandpa's Farm", x: [
   "Grandpa has a farm. There are cows, pigs and sheep.",
   "The cows give milk. Grandpa makes cheese with the milk. The hens give eggs.",
   "There are bees, too. They make honey. My favorite animal is the horse. I love horses!"],
  q: [
   ["What does Grandpa make with the milk?", "cheese", ["honey", "jam", "eggs"]],
   ["What do the bees make?", "honey", ["milk", "eggs", "cheese"]],
   ["What's the writer's favorite animal?", "the horse", ["the cow", "the pig", "the bee"]]
  ] },
 l: [
  ["Quack, quack! Is this a duck? Yes, it is.", "What animal is it?", "a duck", ["a hen", "a goat", "a cow"]],
  ["Are they goats? No, they aren't. They're sheep.", "What animals are they?", "sheep", ["goats", "pigs", "horses"]],
  ["What's your favorite animal? I love pigs!", "What is the favorite animal?", "pigs", ["cows", "bees", "ducks"]]
 ],
 w: { u: ["Is this a cow?", "They are sheep.", "I love horses."],
  o: ["What's your favorite farm animal? Write two sentences.", "Write what we get from cows, hens and bees."] },
 p: [
  [["pig", "pink", "pen", "big"], 3, "p"],
  [["sheep", "bee", "cheese", "hen"], 3, "long e"],
  [["cow", "how", "now", "go"], 3, "ow as in cow"]
 ]
});
add("dream-makers-2", 7, {
 rm: "<b>This is my</b> head. <b>These are my</b> hands. · <b>How many</b> fingers <b>do you have</b>? I have ten fingers. · one foot → two <b>feet</b> · <b>Clap</b> your hands! <b>Stamp</b> your feet!",
 g: [
  ["This ___ my head.", "is", ["are", "am", "these"], "This is + one."],
  ["These ___ my hands.", "are", ["is", "am", "this"], "These are + many."],
  ["How ___ toes do you have?", "many", ["much", "old", "big"], "How many…?"],
  ["I have ten ___.", "fingers", ["finger", "fingeres", "a finger"], "Plural: -s."],
  ["One foot, two ___.", "feet", ["foots", "feets", "foot"], "foot → feet (irregular)."],
  ["___ your hands!", "Clap", ["Stamp", "Kick", "Run"], "We clap our hands."],
  ["Stamp your ___!", "feet", ["hands", "head", "fingers"], "We stamp our feet."],
  ["___ are my legs.", "These", ["This", "It", "Is"], "These + plural."]
 ],
 vd: [
  ["You have five on each hand.", "fingers"],
  ["You have five on each foot.", "toes"],
  ["You walk on them. Two ___.", "feet"],
  ["Between your neck and your arms.", "shoulders"],
  ["The middle part of your body. It says 'I'm hungry!'", "tummy"],
  ["The top part of your body, with your eyes and mouth.", "head"],
  ["The opposite of right.", "left"],
  ["You hit your hands together.", "clap"]
 ],
 r: { t: "Monster Max", x: [
   "This is Monster Max. He's funny!",
   "Max has two heads and four arms. He has six legs and twelve feet!",
   "He has a big green tummy. Max likes to clap his hands and stamp his feet."],
  q: [
   ["How many heads does Max have?", "two", ["one", "four", "six"]],
   ["How many legs does Max have?", "six", ["two", "four", "twelve"]],
   ["What color is his tummy?", "green", ["blue", "red", "purple"]]
  ] },
 l: [
  ["Touch your shoulders. Now touch your toes!", "What do you touch at the end?", "your toes", ["your head", "your shoulders", "your hands"]],
  ["How many fingers do you have? I have ten fingers.", "How many fingers?", "ten", ["five", "twenty", "two"]],
  ["Raise your left hand. Your left hand!", "Which hand?", "left", ["right", "both", "none"]]
 ],
 w: { u: ["These are my hands.", "I have ten toes.", "Clap your hands."],
  o: ["Draw a monster. Write how many heads, arms and legs it has.", "Write: This is my… These are my…"] },
 p: [
  [["head", "hand", "hat", "arm"], 3, "h"],
  [["feet", "teeth", "knee", "leg"], 3, "long e"],
  [["toe", "nose", "go", "top"], 3, "long o"]
 ]
});
add("dream-makers-2", 8, {
 rm: "<b>How old are you?</b> I'm seven years old. · <b>This gift is for you.</b> Thank you! – You're welcome. · <b>What do you want</b> for your birthday? I want <b>a</b> doll. · What do you want to eat? I want <b>popcorn</b>.",
 g: [
  ["How ___ are you? I'm eight.", "old", ["many", "much", "are"], "How old are you?"],
  ["I'm seven ___ old.", "years", ["year", "olds", "age"], "seven years old."],
  ["This gift is ___ you.", "for", ["to", "of", "at"], "This gift is for you."],
  ["Thank you! – You're ___.", "welcome", ["welcomes", "okay", "thanks"], "You're welcome."],
  ["What do you ___ for your birthday?", "want", ["wants", "wanting", "do"], "What do you want…?"],
  ["I want ___ balloon.", "a", ["an", "two", "the"], "a balloon."],
  ["I want ___ ice cream.", "an", ["a", "two", "the"], "an + vowel sound."],
  ["What do you want to ___? I want juice.", "drink", ["eat", "drinks", "drinking"], "drink juice."]
 ],
 vd: [
  ["A round thing you fill with air at a party.", "balloon"],
  ["A sweet food with candles on top.", "cake"],
  ["You light it and put it on the cake.", "candle"],
  ["A present.", "gift"],
  ["A card that says 'Happy Birthday'.", "birthday card"],
  ["A snack you eat at the movies.", "popcorn"],
  ["Fried potatoes.", "French fries"],
  ["A sweet drink with bubbles.", "soda"]
 ],
 r: { t: "Leo's Party", x: [
   "Today is Leo's birthday. He's eight years old!",
   "There are lots of balloons, a big chocolate cake and eight candles.",
   "Leo's friends sing the birthday song. Ana gives Leo a gift. 'This gift is for you!' 'Thank you!' says Leo."],
  q: [
   ["How old is Leo?", "eight", ["seven", "six", "nine"]],
   ["What kind of cake is it?", "chocolate", ["vanilla", "strawberry", "orange"]],
   ["What does Ana give Leo?", "a gift", ["a cake", "a balloon", "a card"]]
  ] },
 l: [
  ["Boy: How old are you? Girl: I'm six years old.", "How old is the girl?", "six", ["seven", "eight", "five"]],
  ["What do you want to eat? I want sandwiches and French fries.", "What does he want to eat?", "sandwiches and French fries", ["cake", "popcorn", "ice cream"]],
  ["I want a red balloon for my birthday.", "What does she want?", "a red balloon", ["a doll", "a cake", "a gift"]]
 ],
 w: { u: ["How old are you?", "This gift is for you.", "I want a cake."],
  o: ["Write about your birthday party. What do you want?", "Write a birthday card for a friend."] },
 p: [
  [["cake", "candle", "card", "gift"], 3, "c / k"],
  [["party", "pop", "pen", "balloon"], 3, "p"],
  [["juice", "June", "jam", "yes"], 3, "j"]
 ]
});

/* ================= DREAM MAKERS 3 ================= */
add("dream-makers-3", 4, {
 rm: "What <b>do</b> you <b>have</b> for breakfast? I <b>have</b> / I <b>eat</b> cereal. · I <b>like</b> / I <b>don't like</b> eggs. · He <b>has</b> toast. She <b>eats</b> fruit. She <b>likes</b> jam. (he / she + <b>-s</b>)",
 g: [
  ["What do you ___ for breakfast?", "have", ["has", "having", "do"], "What do you have…?"],
  ["I ___ cereal with milk.", "eat", ["eats", "eating", "am eat"], "I eat."],
  ["She ___ toast with butter.", "eats", ["eat", "eating", "is eat"], "She eats."],
  ["He ___ orange juice.", "has", ["have", "haves", "is"], "He has."],
  ["I ___ like coffee.", "don't", ["doesn't", "not", "am not"], "I don't like."],
  ["My dad ___ coffee.", "likes", ["like", "liking", "is like"], "He likes."],
  ["Do you like eggs? Yes, I ___.", "do", ["am", "does", "like"], "Yes, I do."],
  ["My sister ___ bread and jam.", "has", ["have", "haves", "having"], "She has."]
 ],
 vd: [
  ["Bread made hot and crunchy.", "toast"],
  ["You put it on bread. It's yellow and soft.", "butter"],
  ["A sweet fruit spread for bread.", "jam"],
  ["You eat it with milk in a bowl.", "cereal"],
  ["A brown milk drink. Kids love it!", "chocolate milk"],
  ["A hot drink. Many adults drink it in the morning.", "coffee"],
  ["A drink made from oranges.", "orange juice"],
  ["A hot drink made with leaves.", "tea"]
 ],
 r: { t: "Breakfast at My House", x: [
   "In my house, breakfast is at seven o'clock. I have cereal with milk and a banana.",
   "My sister doesn't like cereal. She eats toast with butter and jam.",
   "My dad has eggs and coffee. My mom drinks tea. We all like orange juice!"],
  q: [
   ["What does the writer have for breakfast?", "cereal with milk and a banana", ["toast and jam", "eggs and coffee", "tea"]],
   ["What does the sister eat?", "toast with butter and jam", ["cereal", "eggs", "cake"]],
   ["What does Mom drink?", "tea", ["coffee", "milk", "chocolate milk"]]
  ] },
 l: [
  ["Boy: What do you have for breakfast? Girl: I have bread and cheese.", "What does the girl have?", "bread and cheese", ["cereal", "eggs", "cake"]],
  ["My grandpa eats eggs and toast every day.", "What does Grandpa eat?", "eggs and toast", ["cereal", "fruit", "cake"]],
  ["I don't like coffee. I like chocolate milk.", "What does he like?", "chocolate milk", ["coffee", "tea", "juice"]]
 ],
 w: { u: ["I have cereal for breakfast.", "She eats toast and jam.", "He doesn't like eggs."],
  o: ["What do you have for breakfast? Write three sentences.", "Write what someone in your family eats for breakfast."] },
 p: [
  [["bread", "breakfast", "bring", "butter"], 3, "br"],
  [["cheese", "chocolate", "child", "cake"], 3, "ch"],
  [["tea", "eat", "meat", "bread"], 3, "long e"]
 ]
});
add("dream-makers-3", 5, {
 rm: "<b>This is my</b> mother. <b>These are my</b> grandparents. · I <b>have</b> two brothers. I <b>don't have</b> a sister. · <b>He's my</b> uncle. <b>She's my</b> aunt.",
 g: [
  ["This ___ my grandmother.", "is", ["are", "am", "these"], "This is + one person."],
  ["These ___ my cousins.", "are", ["is", "am", "this"], "These are + many."],
  ["I ___ two brothers.", "have", ["has", "am", "having"], "I have."],
  ["I don't ___ a sister.", "have", ["has", "had", "having"], "don't have."],
  ["___ is my uncle. His name is Tom.", "He", ["She", "His", "It"], "He for a man."],
  ["She is my ___. She's my mom's sister.", "aunt", ["uncle", "cousin", "grandmother"], "Mom's sister = aunt."],
  ["My uncle's son is my ___.", "cousin", ["brother", "uncle", "baby"], "cousin."],
  ["My grandfather is very ___. He's 80!", "old", ["small", "young", "baby"], "old."]
 ],
 vd: [
  ["Your mother's or father's mother.", "grandmother"],
  ["Your mother's or father's father.", "grandfather"],
  ["Your mother's or father's brother.", "uncle"],
  ["Your mother's or father's sister.", "aunt"],
  ["The child of your aunt or uncle.", "cousin"],
  ["A very young child.", "baby"],
  ["Another word for dad.", "father"],
  ["A drawing that shows your family.", "family tree"]
 ],
 r: { t: "My Big Family", x: [
   "I have a big family! This is my mother and this is my father. I have two sisters and one brother.",
   "My brother is a baby. He's very small. My grandmother and grandfather live with us.",
   "I have three cousins. Their father is my uncle Mario. He's my dad's brother."],
  q: [
   ["How many sisters does the writer have?", "two", ["one", "three", "none"]],
   ["Who lives with the family?", "the grandparents", ["the cousins", "Uncle Mario", "the aunt"]],
   ["Who is Uncle Mario?", "Dad's brother", ["Mom's brother", "a cousin", "the grandfather"]]
  ] },
 l: [
  ["Girl: Who is she? Boy: She's my aunt. She's my mom's sister.", "Who is she?", "his aunt", ["his mom", "his cousin", "his grandmother"]],
  ["I don't have a brother, but I have two sisters.", "How many brothers does she have?", "none", ["one", "two", "three"]],
  ["These are my grandparents. They're very old and very nice.", "Who are they?", "grandparents", ["cousins", "parents", "uncles"]]
 ],
 w: { u: ["This is my father.", "I have two cousins.", "She is my aunt."],
  o: ["Draw your family tree and write about it.", "Write: I have… I don't have…"] },
 p: [
  [["mother", "brother", "other", "home"], 3, "short u (o)"],
  [["baby", "big", "book", "dog"], 3, "b"],
  [["aunt", "uncle", "under", "up"], 0, "short u"]
 ]
});
add("dream-makers-3", 6, {
 rm: "<b>What is it?</b> It <b>is</b> a lion. It <b>isn't</b> small. · <b>Is it</b> small? No, it isn't. · <b>This is a</b> snake. <b>These are</b> zebras. · It <b>lives in</b> a forest.",
 g: [
  ["What ___ it? It's a hippo.", "is", ["are", "am", "do"], "What is it?"],
  ["___ it big? Yes, it is.", "Is", ["Are", "Do", "It"], "Is it…?"],
  ["It ___ small. It's very big!", "isn't", ["aren't", "is", "not"], "It isn't."],
  ["These ___ giraffes.", "are", ["is", "am", "this"], "These are."],
  ["This ___ a tiger.", "is", ["are", "these", "am"], "This is."],
  ["The monkey lives ___ the rainforest.", "in", ["on", "at", "to"], "lives in."],
  ["A giraffe is very ___.", "tall", ["small", "short", "little"], "Giraffes are tall."],
  ["A snake is ___.", "long", ["tall", "round", "square"], "Snakes are long."]
 ],
 vd: [
  ["A big gray animal with a long nose.", "elephant"],
  ["An animal with a horn on its nose.", "rhino"],
  ["A long animal with no legs.", "snake"],
  ["An orange animal with black stripes.", "tiger"],
  ["A big animal like a crocodile.", "alligator"],
  ["An animal that laughs. It lives in Africa.", "hyena"],
  ["A big area of grass in Africa.", "savannah"],
  ["A hot, wet forest with lots of rain.", "rainforest"]
 ],
 r: { t: "At the Zoo", x: [
   "Today my class is at the zoo. First we see the lions. They're big and they live in the savannah.",
   "Then we see the monkeys. They're small and funny. They live in the rainforest.",
   "My favorite animal is the giraffe. It's very tall and it has a long neck."],
  q: [
   ["Where do lions live?", "in the savannah", ["in the rainforest", "in the forest", "in the river"]],
   ["How are the monkeys?", "small and funny", ["big and scary", "tall", "long"]],
   ["What's the writer's favorite animal?", "the giraffe", ["the lion", "the monkey", "the snake"]]
  ] },
 l: [
  ["It's big and gray. It has a long nose. What is it? It's an elephant!", "What is it?", "an elephant", ["a rhino", "a hippo", "a zebra"]],
  ["Is it small? No, it isn't. It's a big alligator.", "Is the alligator small?", "No, it isn't.", ["Yes, it is.", "It's tall.", "It's long."]],
  ["These are zebras. They're black and white.", "What color are the zebras?", "black and white", ["orange and black", "gray", "brown"]]
 ],
 w: { u: ["It is a big lion.", "Is it small?", "These are snakes."],
  o: ["Describe a wild animal. Is it big or small? Where does it live?", "Write about your favorite zoo animal."] },
 p: [
  [["snake", "lake", "cake", "duck"], 3, "long a"],
  [["tiger", "tall", "tree", "zebra"], 3, "t"],
  [["lion", "like", "line", "little"], 3, "long i"]
 ]
});
add("dream-makers-3", 7, {
 rm: "<b>Where do you live?</b> I live in a house / an apartment. · <b>There is</b> a sofa. <b>There are</b> two beds. · <b>Where is</b> the cat? It's <b>in</b> / <b>on</b> / <b>under</b> the table.",
 g: [
  ["Where do you ___? I live in an apartment.", "live", ["lives", "living", "are"], "Where do you live?"],
  ["I live in ___ house.", "a", ["an", "the", "two"], "a house."],
  ["I live in ___ apartment.", "an", ["a", "two", "—"], "an apartment."],
  ["There ___ a fridge in the kitchen.", "is", ["are", "be", "has"], "There is + one."],
  ["There ___ three bedrooms.", "are", ["is", "be", "has"], "There are + many."],
  ["The cat is ___ the bed. (below it)", "under", ["on", "in", "between"], "under."],
  ["The book is ___ the table. (on top)", "on", ["in", "under", "at"], "on."],
  ["Where ___ the pillow? It's on the bed.", "is", ["are", "do", "does"], "Where is…?"]
 ],
 vd: [
  ["You cook in this room.", "kitchen"],
  ["You sleep in this room.", "bedroom"],
  ["The car stays here.", "garage"],
  ["You wash clothes in this room.", "laundry"],
  ["The garden behind the house.", "backyard"],
  ["It keeps food cold.", "fridge"],
  ["A soft thing for your head in bed.", "pillow"],
  ["A big soft seat for two or three people.", "couch"]
 ],
 r: { t: "My New House", x: [
   "We live in a new house. There are three bedrooms, a kitchen, a living room and a big backyard.",
   "In my bedroom, there is a bed, a shelf and a closet. My teddy bear is on the bed.",
   "My dog Rocky sleeps under the table in the dining room. The car is in the garage."],
  q: [
   ["How many bedrooms are there?", "three", ["two", "one", "four"]],
   ["Where is the teddy bear?", "on the bed", ["under the bed", "in the closet", "on the shelf"]],
   ["Where does Rocky sleep?", "under the table", ["in the garage", "on the bed", "in the backyard"]]
  ] },
 l: [
  ["Girl: Where's my backpack? Boy: It's under the chair.", "Where's the backpack?", "under the chair", ["on the chair", "in the closet", "on the table"]],
  ["There's a TV and a couch in the living room.", "What is in the living room?", "a TV and a couch", ["a bed", "a fridge", "a car"]],
  ["I live in an apartment. It's small but nice.", "Where does she live?", "in an apartment", ["in a house", "in a garage", "on a farm"]]
 ],
 w: { u: ["I live in a house.", "There are two bedrooms.", "The cat is under the bed."],
  o: ["Describe your house. Use there is / there are.", "Where are three things in your bedroom?"] },
 p: [
  [["house", "mouse", "out", "home"], 3, "ou"],
  [["bed", "red", "shelf", "bee"], 3, "short e"],
  [["kitchen", "chair", "chicken", "school"], 3, "ch"]
 ]
});
add("dream-makers-3", 8, {
 rm: "<b>What's the weather like?</b> It's sunny / rainy / cloudy / windy / snowy / hot / cold. · <b>Is it</b> cold today? Yes, it <b>is</b>. / No, it <b>isn't</b>.",
 g: [
  ["What's the weather ___?", "like", ["likes", "is", "as"], "What's the weather like?"],
  ["It's ___. Take an umbrella.", "rainy", ["sunny", "hot", "snowy"], "rain → rainy."],
  ["___ it windy today? Yes, it is.", "Is", ["Are", "Do", "It"], "Is it…?"],
  ["Is it hot? No, it ___. It's cold.", "isn't", ["aren't", "is", "not"], "No, it isn't."],
  ["There are lots of clouds. It's ___.", "cloudy", ["cloud", "clouds", "sunny"], "cloud → cloudy."],
  ["It's ___. Wear a coat and a hat. There's snow!", "snowy", ["sunny", "hot", "windy"], "snow → snowy."],
  ["We can see the moon and the stars at ___.", "night", ["day", "noon", "morning"], "At night."],
  ["After the rain, there's a ___!", "rainbow", ["moon", "star", "wind"], "rainbow."]
 ],
 vd: [
  ["The big yellow light in the sky in the day.", "sun"],
  ["White or gray things in the sky.", "cloud"],
  ["Colors in the sky after rain.", "rainbow"],
  ["It moves the trees and your hair.", "wind"],
  ["It shines at night. Sometimes it's round.", "moon"],
  ["Small lights in the sky at night.", "star"],
  ["Very warm.", "hot"],
  ["Not warm at all.", "cold"]
 ],
 r: { t: "A Week of Weather", x: [
   "On Monday, it's sunny and hot. We play in the park.",
   "On Tuesday, it's rainy. After the rain, there's a beautiful rainbow!",
   "On Wednesday, it's windy. We fly kites. On Thursday, it's cloudy and cold. At night, we can't see the stars."],
  q: [
   ["What's the weather like on Monday?", "sunny and hot", ["rainy", "windy", "cold"]],
   ["What do they see on Tuesday?", "a rainbow", ["the moon", "stars", "snow"]],
   ["What do they do on Wednesday?", "fly kites", ["play in the park", "swim", "stay home"]]
  ] },
 l: [
  ["Boy: What's the weather like? Girl: It's snowy and very cold!", "What's the weather like?", "snowy and cold", ["sunny and hot", "rainy", "windy"]],
  ["Is it sunny today? No, it isn't. It's cloudy.", "What's the weather today?", "cloudy", ["sunny", "rainy", "snowy"]],
  ["Look at the sky tonight. I can see the moon and lots of stars.", "When is it?", "at night", ["in the morning", "at noon", "in the afternoon"]]
 ],
 w: { u: ["It is sunny today.", "What's the weather like?", "Is it cold today?"],
  o: ["What's the weather like today? Write two sentences.", "What do you do when it's rainy?"] },
 p: [
  [["rain", "rainy", "train", "ran"], 3, "long a"],
  [["snow", "slow", "show", "now"], 3, "long o"],
  [["sun", "fun", "run", "moon"], 3, "short u"]
 ]
});

/* ================= DREAM MAKERS 4 ================= */
add("dream-makers-4", 1, {
 rm: "<b>How many</b> desks <b>are there</b>? <b>There are</b> twenty. <b>There is</b> one board. · <b>Where's</b> the library? It's <b>on the left</b> / <b>on the right</b> / <b>next to</b> / <b>between</b>… · My favorite place at school is the gym.",
 g: [
  ["How many chairs ___ there?", "are", ["is", "do", "be"], "How many… are there?"],
  ["There ___ one teachers' lounge.", "is", ["are", "be", "have"], "There is + one."],
  ["There ___ two science labs.", "are", ["is", "be", "has"], "There are + many."],
  ["___ the cafeteria? It's next to the gym.", "Where's", ["What's", "Who's", "How's"], "Where's = Where is."],
  ["The library is ___ the art room and the hall.", "between", ["next", "on", "in front"], "between A and B."],
  ["The restroom is on the ___.", "left", ["between", "next", "behind"], "on the left."],
  ["My favorite place at school ___ the library.", "is", ["are", "am", "be"], "…is…"],
  ["Our teacher is very ___. She always helps us.", "helpful", ["help", "helping", "helpless"], "helpful = she helps."]
 ],
 vd: [
  ["You eat lunch here at school.", "cafeteria"],
  ["You do experiments here.", "science lab"],
  ["You read and borrow books here.", "library"],
  ["You paint and draw here.", "art room"],
  ["Teachers rest here.", "teachers' lounge"],
  ["You put trash in it.", "wastebasket"],
  ["A board on the wall with papers and pictures.", "bulletin board"],
  ["Nice and kind to others.", "friendly"]
 ],
 r: { t: "Welcome to Our School", x: [
   "Welcome to Green Hill School! There are twelve classrooms, a library and a big gym.",
   "The cafeteria is on the right, next to the science lab. The art room is between the library and the media room.",
   "My favorite place at school is the sports court. I play basketball there with my friends at recess."],
  q: [
   ["How many classrooms are there?", "twelve", ["twenty", "two", "ten"]],
   ["Where is the cafeteria?", "on the right, next to the science lab", ["between the library and the media room", "on the left", "behind the gym"]],
   ["What's the writer's favorite place?", "the sports court", ["the library", "the art room", "the cafeteria"]]
  ] },
 l: [
  ["Boy: Where's the library? Girl: It's on the left, next to the hall.", "Where's the library?", "on the left, next to the hall", ["on the right", "between the gym and the lab", "behind the cafeteria"]],
  ["How many windows are there? There are six windows.", "How many windows are there?", "six", ["sixteen", "two", "seven"]],
  ["My favorite place at school is the art room. I love painting.", "What's her favorite place?", "the art room", ["the gym", "the library", "the cafeteria"]]
 ],
 w: { u: ["There are twenty desks.", "Where's the gym?", "It's next to the library."],
  o: ["What's your favorite place at school? Why?", "Describe your classroom. Use there is / there are."] },
 p: [
  [["gym", "giant", "page", "game"], 3, "soft g"],
  [["lab", "lunch", "left", "right"], 3, "l"],
  [["hall", "wall", "ball", "cat"], 3, "all"]
 ]
});
add("dream-makers-4", 4, {
 rm: "<b>How do you go</b> to school? I go <b>by</b> bus / car / train. I go <b>on</b> foot. · I <b>don't go</b> by car. · He <b>goes</b> by bike. She <b>doesn't go</b> by subway.",
 g: [
  ["How do you ___ to school?", "go", ["goes", "going", "went"], "How do you go…?"],
  ["I go to school ___ bus.", "by", ["on", "in", "with"], "by + transport."],
  ["She walks. She goes on ___.", "foot", ["feet", "foots", "walk"], "on foot."],
  ["My dad ___ to work by car.", "goes", ["go", "going", "gos"], "He goes."],
  ["I ___ go by train. I go by bike.", "don't", ["doesn't", "not", "am not"], "I don't go."],
  ["She ___ go by taxi.", "doesn't", ["don't", "isn't", "not"], "She doesn't."],
  ["How ___ your sister go to school?", "does", ["do", "is", "are"], "How does she…?"],
  ["We fly to Cancún ___ plane.", "by", ["on", "in the", "with"], "by plane."]
 ],
 vd: [
  ["A train that goes under the city.", "subway"],
  ["A car you pay to ride in. It's often yellow.", "taxi"],
  ["It flies and has a big propeller on top.", "helicopter"],
  ["A big boat.", "ship"],
  ["A bike with a motor.", "motorcycle"],
  ["It flies with wings and takes people far away.", "plane"],
  ["It goes on tracks and has many cars.", "train"],
  ["Walking.", "on foot"]
 ],
 r: { t: "Getting to School", x: [
   "Every morning, students in my class go to school in different ways. Pablo lives near the school, so he goes on foot.",
   "Sofi goes by bike with her dad. Mateo goes by subway because he lives far away.",
   "I don't go by bus. My mom takes me by car. My teacher goes to school by motorcycle!"],
  q: [
   ["How does Pablo go to school?", "on foot", ["by bike", "by subway", "by car"]],
   ["Why does Mateo go by subway?", "He lives far away.", ["He likes trains.", "He lives near.", "His dad works there."]],
   ["How does the teacher go to school?", "by motorcycle", ["by car", "by bus", "on foot"]]
  ] },
 l: [
  ["Girl: How do you go to school? Boy: I go by bus.", "How does the boy go to school?", "by bus", ["by car", "on foot", "by bike"]],
  ["My uncle goes to work by train every day.", "How does the uncle go to work?", "by train", ["by plane", "by taxi", "by ship"]],
  ["We went to the island by ship. It was fun!", "How did they go to the island?", "by ship", ["by plane", "by helicopter", "by car"]]
 ],
 w: { u: ["I go to school by car.", "She goes on foot.", "He doesn't go by bus."],
  o: ["How do you go to school? Write two sentences.", "How do people in your family go to work?"] },
 p: [
  [["bus", "bike", "boat", "plane"], 3, "b"],
  [["train", "plane", "rain", "car"], 3, "long a"],
  [["ship", "shop", "she", "subway"], 3, "sh"]
 ]
});
add("dream-makers-4", 5, {
 rm: "What <b>do</b> you <b>want</b> for lunch? <b>I want</b> pasta. · He <b>wants to eat</b> pizza. · <b>Are</b> you hungry? Yes, I <b>am</b>. / No, I<b>'m not</b>. · Recipe verbs: <b>mix</b>, <b>stir</b>, <b>melt</b>, <b>bake</b>, <b>preheat</b>.",
 g: [
  ["What do you want ___ dinner?", "for", ["to", "at", "on"], "want for dinner."],
  ["I ___ rice and chicken.", "want", ["wants", "wanting", "am want"], "I want."],
  ["She ___ to eat ice cream.", "wants", ["want", "wanting", "is want"], "She wants."],
  ["Are you hungry? Yes, I ___.", "am", ["do", "is", "have"], "Yes, I am."],
  ["Are you hungry? No, I'm ___.", "not", ["no", "don't", "isn't"], "No, I'm not."],
  ["First, ___ the oven to 180 degrees.", "preheat", ["melt", "stir", "eat"], "preheat = make hot before."],
  ["___ the flour, sugar and eggs in a bowl.", "Mix", ["Bake", "Melt", "Eat"], "mix = put together."],
  ["___ the cake for 30 minutes.", "Bake", ["Mix", "Melt", "Stir"], "bake = cook in the oven."]
 ],
 vd: [
  ["A sweet chocolate square cake.", "brownie"],
  ["A sweet Mexican dessert with caramel.", "flan"],
  ["Meat from a cow, cooked.", "steak"],
  ["Vegetables (short word).", "veggies"],
  ["A white powder to make bread and cakes.", "flour"],
  ["To make chocolate or butter liquid with heat.", "melt"],
  ["To move a spoon around and around.", "stir"],
  ["A small spoon for measuring.", "teaspoon"]
 ],
 r: { t: "Brownies with Grandma", x: [
   "On Sunday, I want brownies for dessert, so Grandma and I bake them together.",
   "First, we preheat the oven. Then we melt the chocolate and butter. Next, we mix the flour, sugar, eggs and vanilla.",
   "We stir everything and add some nuts. We bake the brownies for twenty-five minutes. Yum!"],
  q: [
   ["What do they bake?", "brownies", ["a flan", "a pizza", "bread"]],
   ["What do they melt?", "chocolate and butter", ["sugar and eggs", "nuts", "flour"]],
   ["How long do they bake the brownies?", "twenty-five minutes", ["five minutes", "an hour", "fifteen minutes"]]
  ] },
 l: [
  ["Boy: What do you want for lunch? Girl: I want pasta and salad.", "What does the girl want?", "pasta and salad", ["pizza", "steak", "chicken"]],
  ["Are you hungry? Yes, I am. I want a pizza!", "What does he want?", "a pizza", ["a salad", "rice", "fish"]],
  ["My sister wants fruit salad for dessert. I want flan.", "What does the boy want for dessert?", "flan", ["fruit salad", "ice cream", "a brownie"]]
 ],
 w: { u: ["I want pasta for dinner.", "Are you hungry?", "She wants to eat fish."],
  o: ["What do you want for lunch today? Write two sentences.", "Write the steps of a simple recipe. Use first, then, next."] },
 p: [
  [["steak", "bake", "cake", "salad"], 3, "long a"],
  [["chicken", "chips", "cheese", "Christmas"], 3, "ch"],
  [["pizza", "pasta", "potato", "bake"], 3, "p"]
 ]
});
add("dream-makers-4", 6, {
 rm: "<b>What's your address?</b> 25 Rose Street. · <b>Where's</b> the bank, please? It's <b>next to</b> / <b>across from</b> / <b>between</b> / <b>behind</b> / <b>in front of</b> the… · <b>There is</b> a supermarket in front of the restaurant.",
 g: [
  ["___ the bakery, please?", "Where's", ["What's", "Who's", "When's"], "Where's = Where is."],
  ["The bank is ___ from the park. (on the other side of the street)", "across", ["next", "between", "behind"], "across from."],
  ["The pet shop is ___ the bookstore and the mall.", "between", ["next", "across", "in"], "between A and B."],
  ["The bus stop is in ___ of the hospital.", "front", ["next", "between", "behind of"], "in front of."],
  ["The toy store is next ___ the bakery.", "to", ["of", "from", "at"], "next to."],
  ["What's your ___? It's 12 Oak Street.", "address", ["name", "phone", "city"], "address = where you live."],
  ["Where do you ___? I live on Pine Street.", "live", ["lives", "living", "are"], "Where do you live?"],
  ["There ___ a drugstore behind the school.", "is", ["are", "be", "has"], "There is + one."]
 ],
 vd: [
  ["You buy bread and cakes here.", "bakery"],
  ["You buy medicine here.", "drugstore"],
  ["You buy food for the week here.", "supermarket"],
  ["You buy shirts and pants here.", "clothing store"],
  ["You buy food for your dog or cat here.", "pet shop"],
  ["Doctors and nurses work here.", "hospital"],
  ["You wait for the bus here.", "bus stop"],
  ["You keep your money here.", "bank"]
 ],
 r: { t: "My Neighborhood", x: [
   "I live at 15 Maple Street. My neighborhood is great! There's a bakery next to my house. It smells delicious in the morning.",
   "Across from the bakery, there's a pet shop. I like to look at the puppies.",
   "The supermarket is between the bank and the drugstore. There's a bus stop in front of the supermarket."],
  q: [
   ["What is next to the writer's house?", "a bakery", ["a pet shop", "a bank", "a bus stop"]],
   ["What is across from the bakery?", "a pet shop", ["the supermarket", "the bank", "the drugstore"]],
   ["Where is the bus stop?", "in front of the supermarket", ["behind the bank", "next to the house", "across from the pet shop"]]
  ] },
 l: [
  ["Excuse me, where's the toy store? It's behind the mall.", "Where's the toy store?", "behind the mall", ["in front of the mall", "next to the bank", "across from the park"]],
  ["Girl: What's your address? Boy: It's 30 Sun Street.", "What's the boy's address?", "30 Sun Street", ["13 Sun Street", "30 Moon Street", "3 Sun Street"]],
  ["There's a restaurant between the bookstore and the bank.", "What is between the bookstore and the bank?", "a restaurant", ["a bakery", "a hospital", "a mall"]]
 ],
 w: { u: ["Where's the bank, please?", "It's next to the bakery.", "There is a park in front of my house."],
  o: ["Describe your neighborhood. What's near your house?", "Write directions to a store near your home."] },
 p: [
  [["bank", "bakery", "bus", "pet"], 3, "b"],
  [["store", "more", "four", "stop"], 3, "or"],
  [["mall", "tall", "small", "map"], 3, "all"]
 ]
});
add("dream-makers-4", 7, {
 rm: "<b>What's this?</b> It's a starfish. · <b>What are these?</b> These are crabs. · <b>this</b> (one, near) · <b>that</b> (one, far) · <b>these</b> (many, near) · <b>those</b> (many, far)",
 g: [
  ["What's ___? It's a seahorse. (one, near)", "this", ["these", "those", "they"], "this = one, near."],
  ["What are ___? These are jellyfish. (many, near)", "these", ["this", "that", "it"], "these = many, near."],
  ["Look at ___ whale over there! (one, far)", "that", ["this", "these", "those"], "that = one, far."],
  ["___ are dolphins over there. (many, far)", "Those", ["This", "That", "These"], "those = many, far."],
  ["This ___ an octopus.", "is", ["are", "am", "be"], "This is."],
  ["These ___ turtles.", "are", ["is", "am", "be"], "These are."],
  ["The old turtle is 100 years old. The baby turtle is ___.", "young", ["old", "ugly", "big"], "young = not old."],
  ["The coral is very ___. It has many colors.", "beautiful", ["ugly", "old", "young"], "beautiful."]
 ],
 vd: [
  ["A sea animal with eight arms.", "octopus"],
  ["A sea animal shaped like a star.", "starfish"],
  ["A small fish that looks like a horse.", "seahorse"],
  ["A clear sea animal that can sting you.", "jellyfish"],
  ["A smart sea animal that jumps and plays.", "dolphin"],
  ["A big fish with sharp teeth.", "shark"],
  ["A flat fish that looks like it flies under water.", "ray"],
  ["A sea animal with claws that walks sideways.", "crab"]
 ],
 r: { t: "A Trip to the Aquarium", x: [
   "Today we're at the aquarium. 'What's this?' asks my brother. 'It's a seahorse,' I say. It's small and beautiful.",
   "'What are those?' 'Those are jellyfish. Don't touch them!' In the big tank, there are sharks and rays.",
   "My favorite animals are the sea turtles. One turtle is very old — it's 80 years old! The baby turtles are very young."],
  q: [
   ["What does the brother see first?", "a seahorse", ["a jellyfish", "a shark", "a turtle"]],
   ["What shouldn't they touch?", "the jellyfish", ["the turtles", "the rays", "the seahorse"]],
   ["How old is the old turtle?", "80 years old", ["18 years old", "8 years old", "100 years old"]]
  ] },
 l: [
  ["Girl: What are these? Boy: These are starfish. They're orange.", "What color are the starfish?", "orange", ["blue", "pink", "yellow"]],
  ["Look at that whale! It's enormous!", "What animal is it?", "a whale", ["a dolphin", "a shark", "a ray"]],
  ["Those dolphins are young. They're playing.", "What are the dolphins doing?", "playing", ["sleeping", "eating", "swimming away"]]
 ],
 w: { u: ["What's this? It's a crab.", "These are starfish.", "Those are dolphins."],
  o: ["Write about your favorite sea animal.", "Write sentences with this, that, these and those."] },
 p: [
  [["shark", "ship", "shell", "sea"], 3, "sh"],
  [["whale", "ray", "snail", "fish"], 3, "long a"],
  [["this", "that", "those", "thin"], 3, "voiced th"]
 ]
});
add("dream-makers-4", 8, {
 rm: "<b>Can</b> you ride a horse? Yes, I <b>can</b>. / No, I <b>can't</b>. · He <b>can</b> play the guitar. She <b>can't</b> fly a kite. (can + verb, no -s)",
 g: [
  ["___ you play tennis? Yes, I can.", "Can", ["Do", "Are", "Is"], "Can you…?"],
  ["Can you climb a tree? No, I ___.", "can't", ["can", "don't", "am not"], "No, I can't."],
  ["She can ___ the guitar.", "play", ["plays", "playing", "to play"], "can + base verb."],
  ["He ___ ride a horse. He's scared.", "can't", ["can", "isn't", "doesn't can"], "can't = not able."],
  ["My brother can ___ rope very fast.", "jump", ["jumps", "jumping", "to jump"], "can jump."],
  ["___ he speak English? Yes, he can.", "Can", ["Does", "Is", "Do"], "Can he…?"],
  ["We can ___ a kite on windy days.", "fly", ["flies", "flying", "to fly"], "fly a kite."],
  ["The best player gets a gold ___.", "medal", ["player", "kite", "ball"], "medal = prize."]
 ],
 vd: [
  ["A toy that flies in the wind on a string.", "kite"],
  ["You go up a tree.", "climb a tree"],
  ["You jump over a rope again and again.", "jump rope"],
  ["A sport with a big ball and a net, using your hands.", "volleyball"],
  ["A musical instrument with six strings.", "guitar"],
  ["A small vehicle you ride standing up.", "scooter"],
  ["A prize you win in a competition.", "medal"],
  ["A person who plays a sport.", "player"]
 ],
 r: { t: "Talent Show", x: [
   "Today is the school talent show. Lucas can play the guitar and sing a song. Everybody claps!",
   "Valeria can jump rope very fast. She can do 100 jumps in one minute.",
   "Diego can't sing, but he can do tricks on his scooter. At the end, Valeria wins a medal."],
  q: [
   ["What can Lucas do?", "play the guitar and sing", ["jump rope", "ride a scooter", "fly a kite"]],
   ["How many jumps can Valeria do in a minute?", "100", ["10", "50", "1,000"]],
   ["Who wins a medal?", "Valeria", ["Lucas", "Diego", "everybody"]]
  ] },
 l: [
  ["Boy: Can you ride a horse? Girl: Yes, I can. I ride on Saturdays.", "Can the girl ride a horse?", "Yes, she can.", ["No, she can't.", "She can ride a bike.", "She doesn't know."]],
  ["My dad can speak English and French.", "What can Dad speak?", "English and French", ["Spanish", "English only", "Chinese"]],
  ["I can kick the ball, but I can't play basketball.", "What can't he do?", "play basketball", ["kick the ball", "run", "play soccer"]]
 ],
 w: { u: ["I can ride a bike.", "Can you play the guitar?", "She can't climb a tree."],
  o: ["Write three things you can do and two things you can't do.", "What can your best friend do?"] },
 p: [
  [["kite", "bike", "ride", "kick"], 3, "long i"],
  [["play", "player", "plane", "pen"], 3, "pl"],
  [["climb", "class", "clap", "kite"], 3, "cl"]
 ]
});
})();
