/* MOVA · Bancos de preguntas · Now I Know! 3 (unidades restantes). Solo agrega unidades que aún no existen. */
(function(){
var B = window.MOVA_BQ = window.MOVA_BQ || {};
function add(k, n, u){ B[k] = B[k] || {}; if (!B[k][n]) B[k][n] = u; }

/* ================= NOW I KNOW! 3 ================= */
add("now-i-know-3", 3, {
 rm: "Past Simple: regular <b>-ed</b> (camped, climbed) · irregular (go → <b>went</b>, see → <b>saw</b>, sleep → <b>slept</b>) · Negative: I <b>didn't</b> go. · Questions: <b>Did</b> you go kayaking? <b>Where did</b> you sleep?",
 g: [
  ["Last summer we ___ in the mountains.", "camped", ["camp", "camps", "camping"], "Regular past: + -ed."],
  ["We ___ zip lining. It was amazing!", "went", ["goed", "go", "gone"], "go → went."],
  ["I ___ sleep well in the tent.", "didn't", ["don't", "wasn't", "not"], "didn't + base verb."],
  ["___ you go rock climbing? Yes, I did.", "Did", ["Do", "Were", "Was"], "Did you…?"],
  ["Where ___ you sleep? In a sleeping bag.", "did", ["do", "were", "was"], "Where did…?"],
  ["My dad ___ up the tent.", "set", ["setted", "sets up", "setting"], "set → set (irregular)."],
  ["We ___ a bear near the campsite!", "saw", ["seed", "see", "seen"], "see → saw."],
  ["Did she like kayaking? No, she ___.", "didn't", ["don't", "wasn't", "did"], "No, she didn't."]
 ],
 vd: [
  ["A place where people put tents and camp.", "campsite"],
  ["A warm bag you sleep in outside.", "sleeping bag"],
  ["A small lamp you carry, with batteries.", "flashlight"],
  ["It shows you north, south, east and west.", "compass"],
  ["To build a tent so you can sleep in it.", "set up a tent"],
  ["You slide on a cable high above the trees.", "go zip lining"],
  ["You go up big rocks with ropes.", "go rock climbing"],
  ["You paddle a small boat on a river.", "go kayaking"]
 ],
 r: { t: "Our Camping Trip", x: [
   "Last month, my family went on a camping trip. We drove to a campsite near a lake. My dad and I set up the tent.",
   "On the first day, we went kayaking. My sister didn't like it because she fell in the water! In the evening, we cooked dinner on a fire.",
   "At night, we used a flashlight to see. I slept in my sleeping bag, but I didn't sleep well — I heard strange noises all night!"],
  q: [
   ["Who set up the tent?", "the writer and his dad", ["his sister", "his mom", "a guide"]],
   ["Why didn't the sister like kayaking?", "She fell in the water.", ["She was cold.", "She was tired.", "She didn't have a paddle."]],
   ["Why didn't the writer sleep well?", "He heard strange noises.", ["He was hungry.", "It was hot.", "He lost his sleeping bag."]]
  ] },
 l: [
  ["Boy: Did you go zip lining? Girl: Yes, I did! It was scary but fun.", "How was zip lining for the girl?", "scary but fun", ["boring", "easy", "terrible"]],
  ["We didn't have a compass, so we got lost in the forest.", "Why did they get lost?", "They didn't have a compass.", ["It was dark.", "They didn't have a map.", "It rained."]],
  ["Where did you sleep? We slept in a tent by the river.", "Where did they sleep?", "in a tent by the river", ["in a hotel", "in a cabin", "in the car"]]
 ],
 w: { u: ["We went kayaking on the lake.", "Did you set up the tent?", "I didn't sleep well."],
  o: ["Write about a trip you took. Where did you go? What did you do?", "Write three questions to ask a friend about their vacation."] },
 p: [
  [["climbed", "played", "rained", "camped"], 3, "-ed = /d/"],
  [["tent", "went", "slept", "lake"], 3, "short e"],
  [["light", "night", "bright", "lift"], 3, "igh = long i"]
 ]
});
add("now-i-know-3", 4, {
 rm: "Irregular past: <b>find → found</b>, <b>hide → hid</b>, <b>fight → fought</b>, <b>become → became</b>, <b>give → gave</b>. · <b>Who did</b> the prince help? <b>What did</b> the giant want? <b>Why did</b> she hide?",
 g: [
  ["The prince ___ a gold coin in the castle.", "found", ["finded", "find", "founded"], "find → found."],
  ["The princess ___ behind the door.", "hid", ["hided", "hide", "hidden"], "hide → hid."],
  ["The hero ___ the fierce dragon.", "fought", ["fighted", "fight", "fighten"], "fight → fought."],
  ["What ___ the giant want? He wanted gold.", "did", ["does", "was", "were"], "What did…?"],
  ["The king ___ the hero a horse.", "gave", ["gived", "give", "given"], "give → gave."],
  ["Why did the queen ___ the castle?", "leave", ["left", "leaves", "leaving"], "did + base verb."],
  ["The frog ___ a prince.", "became", ["becomed", "become", "becames"], "become → became."],
  ["Who ___ the princess? The hero did.", "rescued", ["rescue", "did rescue", "rescues"], "Subject question: no 'did'."]
 ],
 vd: [
  ["A very, very big person in stories.", "giant"],
  ["A big old building where kings live.", "castle"],
  ["A round piece of metal money.", "coin"],
  ["The son of a king and queen.", "prince"],
  ["Extremely big.", "enormous"],
  ["Very, very angry.", "furious"],
  ["A brave person who helps others.", "hero"],
  ["To look carefully for something.", "search"]
 ],
 r: { t: "The Giant's Gold", x: [
   "Once upon a time, an enormous giant lived in a castle on a hill. He had a big bag of gold coins.",
   "One day, a poor girl named Rosa climbed the hill. She searched the castle and found the gold. But the giant woke up! He was furious.",
   "Rosa hid under the table. When the giant fell asleep, she ran home with three coins and gave them to her family."],
  q: [
   ["Where did the giant live?", "in a castle on a hill", ["in a cave", "in a village", "in the forest"]],
   ["How did the giant feel when he woke up?", "furious", ["happy", "tired", "scared"]],
   ["Where did Rosa hide?", "under the table", ["behind the door", "in the bag", "on the roof"]]
  ] },
 l: [
  ["The brave hero searched for the dragon for seven days.", "How long did the hero search?", "seven days", ["seven weeks", "one day", "seventeen days"]],
  ["Girl: Why did the princess cry? Boy: Because she lost her gold ring.", "Why did the princess cry?", "She lost her gold ring.", ["She was hungry.", "The giant was angry.", "She was lonely."]],
  ["The king and queen gave a big party for the hero.", "What did the king and queen do?", "They gave a party.", ["They hid.", "They left the castle.", "They fought the giant."]]
 ],
 w: { u: ["The prince found a coin.", "Why did the giant shout?", "The hero fought a dragon."],
  o: ["Write the beginning of a fairy tale. Use Once upon a time…", "Retell your favorite story in four sentences."] },
 p: [
  [["giant", "gem", "giraffe", "gold"], 3, "soft g"],
  [["castle", "listen", "whistle", "cast"], 3, "silent t"],
  [["found", "crown", "cloud", "fold"], 3, "ow / ou"]
 ]
});
add("now-i-know-3", 5, {
 rm: "Comparatives: clean → clean<b>er</b> than · big → big<b>ger</b> · dirty → dirt<b>ier</b> · <b>more</b> important than · good → <b>better</b> · bad → <b>worse</b>. Superlatives: the clean<b>est</b> · the <b>most</b> important · the <b>best</b> · the <b>worst</b>.",
 g: [
  ["The air in the forest is ___ than in the city.", "cleaner", ["more clean", "cleanest", "clean"], "short adjective + -er."],
  ["Coal is ___ for the air than solar energy.", "worse", ["badder", "worst", "more bad"], "bad → worse."],
  ["Recycling is ___ than throwing things away.", "better", ["gooder", "best", "more good"], "good → better."],
  ["This is the ___ river in the country.", "dirtiest", ["dirtier", "most dirty", "dirtyest"], "dirty → the dirtiest."],
  ["Clean water is ___ important than plastic.", "more", ["most", "much", "the more"], "long adjective: more."],
  ["Fresh air is the most ___ thing for our lungs.", "important", ["importantest", "more important", "importanter"], "the most + long adjective."],
  ["Pollution is the ___ problem in big cities.", "worst", ["worse", "baddest", "most bad"], "bad → the worst."],
  ["The power plant is ___ than the school.", "bigger", ["biger", "more big", "biggest"], "big → bigger."]
 ],
 vd: [
  ["Clean air that is good to breathe.", "fresh air"],
  ["The natural home of an animal or plant.", "habitat"],
  ["Wild animals and plants.", "wildlife"],
  ["To save someone from danger.", "rescue"],
  ["To put something in the trash.", "throw away"],
  ["The organs you use to breathe.", "lungs"],
  ["Black rock that people burn for energy.", "coal"],
  ["A place where electricity is made.", "power plant"]
 ],
 r: { t: "Saving the Sea Turtles", x: [
   "Sea turtles are in danger. Their habitat is the beach and the ocean, but many beaches are dirtier than before. People throw away plastic, and turtles eat it.",
   "In some places, volunteers rescue baby turtles and help them get to the sea. It's one of the most important jobs on the beach.",
   "The best thing we can do is use less plastic. Reusable bags are better than plastic bags, and they are better for wildlife too."],
  q: [
   ["Why are sea turtles in danger?", "They eat plastic from dirty beaches.", ["They have no food.", "The water is cold.", "People hunt them."]],
   ["What do volunteers do?", "They rescue baby turtles.", ["They clean houses.", "They sell bags.", "They build hotels."]],
   ["What is the best thing we can do?", "use less plastic", ["go to the beach", "buy turtles", "throw away bags"]]
  ] },
 l: [
  ["Power plants burn coal and fossil fuels to make electricity. That makes the air dirty.", "What do power plants burn?", "coal and fossil fuels", ["wood", "plastic", "paper"]],
  ["The forest is the best place to breathe fresh air.", "Where is the best place for fresh air?", "the forest", ["the city", "the power plant", "the beach"]],
  ["This park is cleaner than the park near my house.", "Which park is cleaner?", "this park", ["the park near his house", "both", "neither"]]
 ],
 w: { u: ["The air here is cleaner.", "This is the most important habitat.", "Recycling is better than throwing away."],
  o: ["Compare a city and a forest. Use three comparatives.", "Write three things you can do to protect wildlife."] },
 p: [
  [["breathe", "the", "these", "think"], 3, "voiced th"],
  [["coal", "boat", "road", "cool"], 3, "oa = long o"],
  [["air", "hair", "chair", "ear"], 3, "air"]
 ]
});
add("now-i-know-3", 6, {
 rm: "<b>a pack of</b> gum · <b>a pair of</b> shoes · <b>a piece of</b> cake · <b>a box of</b> chocolates · <b>a bag of</b> chips · <b>a bar of</b> soap · Time: 2:00 two <b>o'clock</b> · 2:30 two <b>thirty</b> · 2:15 <b>a quarter after</b> two · 2:45 <b>a quarter to</b> three",
 g: [
  ["I bought a ___ of sneakers.", "pair", ["piece", "bar", "pack"], "a pair of = two things together."],
  ["Can I have a ___ of cake, please?", "piece", ["pair", "box", "bag"], "a piece of cake."],
  ["She bought a ___ of chocolate.", "bar", ["pair", "piece of pair", "bag of"], "a bar of chocolate."],
  ["We need a ___ of rice.", "bag", ["pair", "bar", "piece"], "a bag of rice."],
  ["It's 4:15. It's a quarter ___ four.", "after", ["to", "past to", "before"], "quarter after."],
  ["It's 6:45. It's a quarter ___ seven.", "to", ["after", "past", "at"], "quarter to."],
  ["The T-shirt is very ___. It's only $50.", "cheap", ["expensive", "money", "pay"], "cheap = low price."],
  ["A ___ is ten years.", "decade", ["century", "hour", "minute"], "decade = 10 years."]
 ],
 vd: [
  ["A small shop at a market.", "stall"],
  ["It costs a lot of money.", "expensive"],
  ["It doesn't cost much money.", "cheap"],
  ["To pick one thing from many.", "choose"],
  ["To give money for something.", "pay"],
  ["One hundred years.", "century"],
  ["Sixty minutes.", "hour"],
  ["Fifteen minutes.", "quarter"]
 ],
 r: { t: "At the Market", x: [
   "On Saturday, Lily went to the market with $200 to buy a gift for her mom's birthday. There were many stalls.",
   "First, she saw a pair of earrings. They were beautiful, but too expensive. Then she found a box of chocolates and a bar of nice soap. They were cheap.",
   "She chose the chocolates and paid $120. She got home at a quarter to six, just in time for the party."],
  q: [
   ["Why didn't Lily buy the earrings?", "They were too expensive.", ["They were ugly.", "They were cheap.", "Her mom has earrings."]],
   ["What did she choose?", "a box of chocolates", ["a bar of soap", "a pair of earrings", "a piece of cake"]],
   ["What time did she get home?", "5:45", ["6:15", "5:15", "6:45"]]
  ] },
 l: [
  ["Boy: How much is this pack of cards? Woman: It's thirty-five pesos.", "How much is the pack of cards?", "35 pesos", ["53 pesos", "30 pesos", "45 pesos"]],
  ["The movie starts at a quarter after seven.", "What time does the movie start?", "7:15", ["6:45", "7:45", "7:30"]],
  ["I want a piece of pizza and a bag of popcorn, please.", "What does she want?", "pizza and popcorn", ["cake and chips", "a pair of shoes", "chocolate"]]
 ],
 w: { u: ["I bought a pair of shoes.", "It's a quarter to three.", "Can I have a piece of cake?"],
  o: ["You have $300 at a market. What do you buy? Use a pack of, a bag of…", "Write your daily routine with times (a quarter after, a quarter to…)."] },
 p: [
  [["piece", "pizza", "people", "pear"], 3, "long e"],
  [["pair", "hair", "chair", "pay"], 3, "air"],
  [["choose", "cheap", "chips", "decade"], 3, "ch"]
 ]
});
add("now-i-know-3", 7, {
 rm: "Adjective + preposition: interested <b>in</b> · afraid <b>of</b> · bored <b>with</b> · worried <b>about</b>. · Long adjectives: <b>more</b> exciting <b>than</b> · <b>the most</b> exciting.",
 g: [
  ["I'm interested ___ music.", "in", ["on", "about", "of"], "interested in."],
  ["My sister is afraid ___ spiders.", "of", ["with", "in", "about"], "afraid of."],
  ["He's bored ___ video games.", "with", ["of", "in", "on"], "bored with."],
  ["She's worried ___ her test.", "about", ["of", "with", "in"], "worried about."],
  ["Chess is ___ interesting than TV.", "more", ["most", "much", "the"], "more + long adjective."],
  ["This is the ___ exciting concert ever!", "most", ["more", "much", "very"], "the most + long adjective."],
  ["The trumpet is ___ than the flute.", "louder", ["more loud", "loudest", "most loud"], "short adjective: -er."],
  ["Reading magazines is ___ relaxing than playing drums.", "more", ["most", "much", "the most"], "more relaxing than."]
 ],
 vd: [
  ["A game with a king, queen and 32 pieces.", "chess"],
  ["A group of musicians.", "band"],
  ["A person who plays music.", "musician"],
  ["A thin book with pictures, published every month.", "magazine"],
  ["You put them on your ears to listen to music.", "headphones"],
  ["To spend time with friends without a plan.", "hang out"],
  ["A big brass instrument with a slide.", "trombone"],
  ["A big string instrument. You play it sitting down.", "cello"]
 ],
 r: { t: "The School Band", x: [
   "Diego is very interested in music. He plays the saxophone in the school band. There are twelve musicians in the band.",
   "His friend Sara plays the drums. She was afraid of playing in front of people, but now she loves it. Concerts are the most exciting part of her week.",
   "Diego's brother is bored with music. He prefers chess. He thinks chess is more interesting than any concert."],
  q: [
   ["What does Diego play?", "the saxophone", ["the drums", "the cello", "the trumpet"]],
   ["What was Sara afraid of?", "playing in front of people", ["the drums", "spiders", "concerts"]],
   ["What does Diego's brother prefer?", "chess", ["music", "magazines", "drums"]]
  ] },
 l: [
  ["Girl: Are you worried about the concert? Boy: A little. I'm playing the clarinet for the first time.", "What instrument will the boy play?", "the clarinet", ["the cello", "the trumpet", "the drums"]],
  ["On weekends, I hang out with my friends and read magazines.", "What does she do on weekends?", "hangs out and reads magazines", ["plays chess", "plays in a band", "studies"]],
  ["This is the most beautiful song on the album.", "What does he say about the song?", "It's the most beautiful.", ["It's boring.", "It's too long.", "It's the worst."]]
 ],
 w: { u: ["I'm interested in music.", "Chess is more interesting than TV.", "She is afraid of spiders."],
  o: ["What are you interested in? What are you afraid of?", "Compare two free-time activities using more … than."] },
 p: [
  [["drum", "trumpet", "musician", "fun"], 2, "short u"],
  [["chess", "chair", "chord", "cheap"], 2, "ch"],
  [["band", "hang", "bad", "bored"], 3, "short a"]
 ]
});
add("now-i-know-3", 8, {
 rm: "<b>-ed / -ing</b> adjectives: The movie is <b>interesting</b>. I'm <b>interested</b>. · The trip was <b>tiring</b>. I was <b>tired</b>. · <b>How often</b>…? once a day · twice a week · three times a month · every 20 minutes",
 g: [
  ["The space documentary was very ___.", "interesting", ["interested", "interest", "interests"], "-ing describes the thing."],
  ["I'm ___ in planets.", "interested", ["interesting", "interest", "interests"], "-ed describes how you feel."],
  ["The astronaut was ___ when the alarm rang.", "frightened", ["frightening", "fright", "frighten"], "-ed = feeling."],
  ["The noise was ___.", "frightening", ["frightened", "fright", "frightens"], "-ing = what causes the feeling."],
  ["___ often do astronauts exercise? Twice a day.", "How", ["What", "When", "Which"], "How often…?"],
  ["The space station orbits Earth every 90 ___.", "minutes", ["minute", "times", "once"], "every + number + plural noun."],
  ["She calls her family ___ a week.", "twice", ["two", "two times a", "second"], "twice = two times."],
  ["We go to the planetarium three ___ a year.", "times", ["time", "twice", "once"], "three times."]
 ],
 vd: [
  ["A big station in space where astronauts live.", "space station"],
  ["A vehicle that goes into space.", "rocket"],
  ["To move gently in the air or in water, without falling.", "float"],
  ["To travel around a planet or star.", "orbit"],
  ["Special clothes astronauts wear outside.", "spacesuit"],
  ["A person who studies science.", "scientist"],
  ["Not polite.", "rude"],
  ["Moving very fast because there's not much time.", "in a hurry"]
 ],
 r: { t: "Life on the Space Station", x: [
   "The International Space Station orbits Earth every 90 minutes. That means astronauts see the sunrise sixteen times a day!",
   "In space, everything floats. Astronauts sleep in sleeping bags fixed to the wall. They exercise twice a day to keep their muscles strong.",
   "Many people find life in space exciting, but it can be tiring too. Astronauts are often tired after long days of experiments."],
  q: [
   ["How often does the station orbit Earth?", "every 90 minutes", ["every 16 minutes", "once a day", "twice a day"]],
   ["How often do astronauts exercise?", "twice a day", ["once a week", "every hour", "three times a day"]],
   ["Why do things float in space?", "There's no gravity like on Earth.", ["It's windy.", "The station is wet.", "Astronauts throw them."]]
  ] },
 l: [
  ["Boy: How often do you look at the stars? Girl: Once a week, on Fridays.", "How often does the girl look at the stars?", "once a week", ["twice a week", "every day", "once a month"]],
  ["The rocket launch was amazing! I was so excited.", "How did the boy feel?", "excited", ["bored", "frightened", "tired"]],
  ["The scientist was in a hurry because the rocket was leaving.", "Why was the scientist in a hurry?", "The rocket was leaving.", ["She was late for lunch.", "She was frightened.", "It was raining."]]
 ],
 w: { u: ["The movie was interesting.", "I'm interested in space.", "How often do you exercise?"],
  o: ["Would you like to live on a space station? Why?", "Write three sentences with How often… and your answers."] },
 p: [
  [["rocket", "stop", "hot", "float"], 3, "short o"],
  [["bright", "light", "night", "hurry"], 3, "long i"],
  [["space", "suit", "star", "ship"], 3, "s"]
 ]
});
add("now-i-know-3", 9, {
 rm: "<b>I'd like to</b> live in a tree house. · <b>I wouldn't like to</b> live in a cave. · <b>Would you like to</b>…? · Possessive: my <b>sister's</b> room · the roof <b>of</b> the house · Ordinals: first, second, third, fourth…",
 g: [
  ["I'd ___ to live in a castle.", "like", ["likes", "liked", "liking"], "would like to."],
  ["___ you like to live on a boat?", "Would", ["Do", "Are", "Will"], "Would you like to…?"],
  ["I ___ like to live in the attic. It's dark!", "wouldn't", ["don't", "won't", "didn't"], "wouldn't like to."],
  ["This is my ___ bedroom.", "brother's", ["brothers", "brother", "brothers's"], "possessive 's."],
  ["The roof ___ the house is red.", "of", ["from", "to", "'s"], "the roof of the house."],
  ["We live on the ___ floor. (3)", "third", ["three", "thirth", "threeth"], "3 → third."],
  ["The elevator is on the ___ floor. (1)", "first", ["one", "oneth", "firth"], "1 → first."],
  ["The house is made ___ stone.", "of", ["with", "by", "in"], "made of."]
 ],
 vd: [
  ["The top of a house.", "roof"],
  ["A small area outside a window, on an upper floor.", "balcony"],
  ["A room at the top of a house, under the roof.", "attic"],
  ["A room under the ground.", "basement"],
  ["What you can see from a window.", "view"],
  ["It takes you up and down in a building.", "elevator"],
  ["Red rectangular blocks used to build walls.", "bricks"],
  ["Going up very quickly, like a mountain side.", "steep"]
 ],
 r: { t: "Homes Around the World", x: [
   "Homes are different around the world. In Norway, some houses have grass on the roof. The grass keeps the house warm.",
   "In big cities like Hong Kong, many people live in tall apartment buildings made of concrete and metal. Some apartments are on the fiftieth floor, with an amazing view!",
   "In the desert, some homes are made of mud bricks. They are cool inside. I'd like to live in a house with a balcony and a view of the sea."],
  q: [
   ["What do some houses in Norway have on the roof?", "grass", ["solar panels", "snow", "flowers"]],
   ["What are Hong Kong buildings made of?", "concrete and metal", ["wood", "mud", "stone"]],
   ["What kind of house would the writer like?", "a house with a balcony and a sea view", ["a house with grass on the roof", "a mud house", "an apartment on the 50th floor"]]
  ] },
 l: [
  ["Girl: Would you like to live in a tree house? Boy: Yes, I would! But I wouldn't like to live in a basement.", "Where wouldn't the boy like to live?", "in a basement", ["in a tree house", "in an apartment", "in a castle"]],
  ["Our apartment is on the fourth floor. We use the stairs, not the elevator.", "What floor is the apartment on?", "the fourth floor", ["the first floor", "the fourteenth floor", "the second floor"]],
  ["My grandparents' house is made of wood and has a steep roof.", "What is the grandparents' house made of?", "wood", ["stone", "bricks", "concrete"]]
 ],
 w: { u: ["I'd like to live in a castle.", "This is my sister's room.", "We live on the second floor."],
  o: ["Describe your dream house. Use I'd like to…", "Describe your home: what is it made of? What floor do you live on?"] },
 p: [
  [["roof", "room", "food", "wood"], 3, "long oo"],
  [["stone", "home", "phone", "stairs"], 3, "long o"],
  [["view", "few", "new", "very"], 3, "ew / iew"]
 ]
});
add("now-i-know-3", 10, {
 rm: "<b>What's the matter?</b> I <b>have</b> a fever. / My back <b>hurts</b>. · You <b>should</b> rest. You <b>shouldn't</b> run. · I <b>have to</b> take medicine. · someone · everyone · something · everything",
 g: [
  ["What's the ___? I have a cough.", "matter", ["problem is", "wrong", "hurt"], "What's the matter?"],
  ["My neck ___.", "hurts", ["hurt", "hurting", "is hurt"], "My … hurts (it hurts)."],
  ["You ___ go to the doctor. (good advice)", "should", ["shouldn't", "don't", "aren't"], "should = good idea."],
  ["You ___ eat candy when you're sick. (bad idea)", "shouldn't", ["should", "don't should", "not should"], "shouldn't = bad idea."],
  ["I ___ to take medicine three times a day.", "have", ["has", "should", "must to"], "have to = obligation."],
  ["She ___ to rest in bed.", "has", ["have", "should", "is"], "She has to."],
  ["Is ___ hungry? I made sandwiches.", "everyone", ["anything", "something", "nothing"], "everyone = all people."],
  ["I need ___ for my headache.", "something", ["someone", "everyone", "everything"], "something = a thing."]
 ],
 vd: [
  ["A very high body temperature.", "fever"],
  ["A cloth you put on a cut.", "bandage"],
  ["The organ inside your head that thinks.", "brain"],
  ["The organ that pumps blood.", "heart"],
  ["They make your body move.", "muscles"],
  ["You do this with your nose, 'Achoo!'", "sneeze"],
  ["An injection that protects you from a disease.", "vaccination"],
  ["To relax and sleep so your body gets better.", "rest"]
 ],
 r: { t: "A Visit to the Doctor", x: [
   "Yesterday Emma felt sick. She had a fever and her throat hurt. 'What's the matter?' asked her mom.",
   "They went to the doctor. 'You have a cold,' said the doctor. 'You have to take this medicine twice a day, and you should rest for two days.'",
   "'You shouldn't go to school tomorrow, and you should drink lots of water.' Emma stayed home and watched movies. Everything was better after three days."],
  q: [
   ["What was wrong with Emma?", "She had a fever and a sore throat.", ["She broke her arm.", "She had a stomachache.", "She hurt her back."]],
   ["How often does she have to take the medicine?", "twice a day", ["once a day", "three times a day", "every hour"]],
   ["What did the doctor say she shouldn't do?", "go to school", ["drink water", "rest", "watch movies"]]
  ] },
 l: [
  ["Boy: What's the matter? Girl: My stomach hurts. I ate too much cake.", "What's the matter with the girl?", "Her stomach hurts.", ["Her back hurts.", "She has a fever.", "She has a cough."]],
  ["If you have a cough, you should drink hot tea with honey.", "What should you drink for a cough?", "hot tea with honey", ["cold water", "soda", "juice"]],
  ["Everyone in my class had a vaccination today.", "Who had a vaccination?", "everyone in the class", ["only the teacher", "someone", "nobody"]]
 ],
 w: { u: ["My back hurts.", "You should rest.", "She has to take medicine."],
  o: ["Your friend has a cold. Write three pieces of advice with should / shouldn't.", "Write what you have to do to stay healthy."] },
 p: [
  [["rough", "tough", "enough", "though"], 3, "ough = /ʌf/"],
  [["heart", "start", "part", "heard"], 3, "ar"],
  [["sneeze", "knee", "feel", "neck"], 3, "long e"]
 ]
});
add("now-i-know-3", 11, {
 rm: "Countable: a penguin, two penguins · <b>How many</b>…? Uncountable: ice, water, snow · <b>How much</b>…? · Order of adjectives: opinion → size → age → color → material: a <b>beautiful big old white</b> boat.",
 g: [
  ["How ___ penguins are there?", "many", ["much", "lot", "any"], "many + countable."],
  ["How ___ ice is there in Antarctica?", "much", ["many", "lots", "few"], "much + uncountable."],
  ["There is a lot of ___ in Antarctica.", "snow", ["snows", "a snow", "many snow"], "snow is uncountable."],
  ["Penguins eat a lot of ___.", "krill", ["krills", "a krill", "many krill"], "krill is uncountable."],
  ["It's a ___ ship.", "big red", ["red big", "big a red", "red and big a"], "size before color."],
  ["She wore a ___ jacket.", "warm black", ["black warm", "warmly black", "black and a warm"], "opinion/quality before color."],
  ["There aren't ___ trees in Antarctica.", "any", ["much", "some", "a"], "not any + plural."],
  ["We saw a ___ penguin.", "beautiful little", ["little beautiful", "beautifully little", "little and beautiful a"], "opinion before size."]
 ],
 vd: [
  ["The most southern point on Earth.", "South Pole"],
  ["A black and white bird that can't fly but swims.", "penguin"],
  ["A long trip to explore a place.", "expedition"],
  ["One of the seven big pieces of land on Earth.", "continent"],
  ["Extremely cold.", "freezing"],
  ["Tiny sea animals that whales and penguins eat.", "krill"],
  ["To move to another place when the season changes.", "migrate"],
  ["It doesn't let water in.", "waterproof"]
 ],
 r: { t: "The Coldest Continent", x: [
   "Antarctica is the coldest continent on Earth. In winter, the temperature can be minus 60 degrees! There is a lot of ice and snow, and there aren't any trees.",
   "Many animals live there. Emperor penguins have waterproof feathers and a thick layer of fat. They eat fish and krill.",
   "Scientists go on expeditions to study the ice. They wear warm waterproof clothes. Some whales migrate to Antarctica in the summer to eat krill."],
  q: [
   ["How cold can it be in winter?", "minus 60 degrees", ["minus 6 degrees", "zero degrees", "minus 16 degrees"]],
   ["What helps emperor penguins stay warm?", "waterproof feathers and fat", ["fur", "jackets", "living in caves"]],
   ["Why do whales go to Antarctica?", "to eat krill", ["to have babies", "to sleep", "to hide"]]
  ] },
 l: [
  ["Girl: How many people live in Antarctica? Boy: Only a few scientists. Nobody lives there all year.", "Who lives in Antarctica?", "only a few scientists", ["many families", "nobody ever", "penguins and people"]],
  ["Seals have thick fur and they hunt fish under the ice.", "What do seals hunt?", "fish", ["krill", "penguins", "birds"]],
  ["The expedition lasted three months. It was freezing every day.", "How long was the expedition?", "three months", ["three weeks", "three days", "a year"]]
 ],
 w: { u: ["How much snow is there?", "There are many penguins.", "It's a big white ship."],
  o: ["Would you like to go on an expedition to Antarctica? Why?", "Describe an animal using three adjectives in the correct order."] },
 p: [
  [["ice", "nice", "mice", "fish"], 3, "long i"],
  [["seal", "sea", "freeze", "fur"], 3, "long e"],
  [["pole", "cold", "snow", "hot"], 3, "long o"]
 ]
});
add("now-i-know-3", 12, {
 rm: "Future: I <b>will</b> watch the parade. She <b>won't</b> wear a costume. · <b>Will</b> there be fireworks? Yes, there <b>will</b>. / No, there <b>won't</b>. · <b>What will</b> you do? <b>Where will</b> they go?",
 g: [
  ["Tomorrow we ___ watch the fireworks.", "will", ["are", "did", "were"], "will + verb."],
  ["I ___ wear a costume. I don't like costumes.", "won't", ["will", "don't will", "not will"], "won't = will not."],
  ["___ there be a parade? Yes, there will.", "Will", ["Do", "Is", "Are"], "Will there be…?"],
  ["What will you ___ at the festival?", "do", ["does", "did", "doing"], "will + base verb."],
  ["Will it rain? No, it ___.", "won't", ["will", "doesn't", "isn't"], "No, it won't."],
  ["They ___ have a day off on Monday.", "will", ["are", "do", "did"], "will have."],
  ["Where will the parade ___?", "start", ["starts", "started", "starting"], "will + base verb."],
  ["She'll ___ a lantern in the river.", "put", ["puts", "putting", "to put"], "will + base verb."]
 ],
 vd: [
  ["A light inside paper or glass that you carry.", "lantern"],
  ["People walking and dancing in the street to celebrate.", "parade"],
  ["Colorful explosions in the night sky.", "fireworks"],
  ["Special clothes to look like someone else.", "costume"],
  ["A very small town in the country.", "village"],
  ["The ruler of an empire.", "emperor"],
  ["A big, important church.", "cathedral"],
  ["A day with no school or work.", "a day off"]
 ],
 r: { t: "The Lantern Festival", x: [
   "Next week, my town will celebrate the Lantern Festival. Every family will make a paper lantern. Mine will be red and gold.",
   "In the evening, there will be a big parade through the village. People will wear costumes, and there will be music and dancing.",
   "At midnight, we'll watch the fireworks over the river. We won't go to school the next day because it's a day off!"],
  q: [
   ["What will every family make?", "a paper lantern", ["a costume", "fireworks", "a cake"]],
   ["When will they watch the fireworks?", "at midnight", ["in the morning", "at noon", "at eight o'clock"]],
   ["Why won't they go to school the next day?", "It's a day off.", ["It will rain.", "They will be tired.", "The school is closed for repairs."]]
  ] },
 l: [
  ["Boy: Will you come to the water fight on Saturday? Girl: Yes, I will! I'll bring my water gun.", "What will the girl bring?", "her water gun", ["a lantern", "a costume", "fireworks"]],
  ["The bells of the cathedral will ring at twelve o'clock.", "When will the bells ring?", "at twelve o'clock", ["at two o'clock", "at seven", "at midnight"]],
  ["My cousin will get married in June. There will be a big party.", "When will the cousin get married?", "in June", ["in July", "in January", "next week"]]
 ],
 w: { u: ["We will watch the parade.", "Will there be fireworks?", "I won't wear a costume."],
  o: ["Describe a festival in your town. What will people do?", "Write three things you will do on your next day off."] },
 p: [
  [["parade", "day", "village", "make"], 2, "long a"],
  [["fireworks", "fire", "five", "fish"], 3, "long i"],
  [["bell", "bring", "big", "village"], 3, "b"]
 ]
});
})();
