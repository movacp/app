/* MOVA · Bancos de preguntas · Now I Know! 5 y 6 (unidades restantes). Solo agrega unidades que aún no existen. */
(function(){
var B = window.MOVA_BQ = window.MOVA_BQ || {};
function add(k, n, u){ B[k] = B[k] || {}; if (!B[k][n]) B[k][n] = u; }

/* ================= NOW I KNOW! 5 ================= */
add("now-i-know-5", 1, {
 rm: "Past Simple: invent → <b>invented</b>, make → <b>made</b>, build → <b>built</b>. · Past obligation: people <b>had to</b> write letters. · Past ability: they <b>could</b> / <b>couldn't</b> send emails.",
 g: [
  ["Alexander Graham Bell ___ the telephone.", "invented", ["invents", "invent", "inventing"], "Regular past: + -ed."],
  ["The Wright brothers ___ the first airplane.", "built", ["builded", "build", "builds"], "build → built."],
  ["In the past, people ___ to wash clothes by hand.", "had", ["have", "has", "must"], "had to = past obligation."],
  ["Before phones, people ___ send messages instantly.", "couldn't", ["can't", "didn't could", "weren't"], "couldn't = past inability."],
  ["My grandma ___ use a computer when she was young.", "couldn't", ["can't", "doesn't", "hadn't"], "couldn't."],
  ["Did people ___ to walk long distances? Yes, they did.", "have", ["had", "has", "having"], "Did + have to."],
  ["Edison ___ the light bulb better.", "made", ["maked", "make", "makes"], "make → made."],
  ["After the printing press, people ___ read more books.", "could", ["can", "couldn't", "had"], "could = past ability."]
 ],
 vd: [
  ["A new thing that someone creates for the first time.", "invention"],
  ["A person who creates new things.", "inventor"],
  ["A glass object that gives electric light.", "light bulb"],
  ["A machine that prints books and newspapers.", "printing press"],
  ["A small device you carry to call and send messages.", "smartphone"],
  ["The global network of computers.", "the internet"],
  ["To make something better.", "improve"],
  ["A machine that does work automatically.", "robot"]
 ],
 r: { t: "Accidental Inventions", x: [
   "Some famous inventions happened by accident. In 1928, Alexander Fleming was studying bacteria. He left some dishes in his lab and went on vacation.",
   "When he came back, he saw that a mold had killed the bacteria. This discovery became penicillin, a medicine that saved millions of lives.",
   "Another example is the microwave oven. An engineer named Percy Spencer noticed that a chocolate bar in his pocket melted near a radar machine. He then invented the microwave."],
  q: [
   ["What was Fleming studying?", "bacteria", ["chocolate", "radar", "microwaves"]],
   ["What did his discovery become?", "penicillin", ["the microwave", "a vaccine", "a light bulb"]],
   ["What gave Percy Spencer the idea?", "a melted chocolate bar", ["a broken radio", "a hot oven", "a book"]]
  ] },
 l: [
  ["In the 1800s, people had to use candles because they didn't have electric light.", "Why did people use candles?", "They didn't have electric light.", ["Candles were cheap.", "They liked candles.", "It was the law."]],
  ["Girl: Could your grandpa watch TV when he was a kid? Boy: Yes, but only in black and white.", "What kind of TV did the grandpa have?", "black and white", ["color", "no TV", "a smart TV"]],
  ["The first smartphone came out more than twenty years ago.", "When did the first smartphone come out?", "more than twenty years ago", ["two years ago", "fifty years ago", "last year"]]
 ],
 w: { u: ["Bell invented the telephone.", "People had to write letters.", "They couldn't send emails."],
  o: ["What is the most important invention in your opinion? Why?", "Write about life before the internet. What did people have to do?"] },
 p: [
  [["invented", "wanted", "needed", "helped"], 3, "-ed = /ɪd/"],
  [["phone", "photo", "physics", "pencil"], 3, "ph = f"],
  [["light", "bright", "right", "lift"], 3, "igh = long i"]
 ]
});
add("now-i-know-5", 2, {
 rm: "Past Progressive: I <b>was digging</b>. They <b>were exploring</b>. · <b>when</b> + Past Simple (short action): I was digging <b>when</b> I found a coin. · <b>while</b> + Past Progressive (long action): <b>While</b> they were exploring, it started to rain.",
 g: [
  ["The archaeologists ___ digging when they found a tomb.", "were", ["was", "are", "did"], "They were + -ing."],
  ["She was cleaning the vase ___ she saw a crack.", "when", ["while", "during", "as long"], "when + short action."],
  ["___ we were visiting the pyramid, it started to rain.", "While", ["When", "During", "Then"], "while + long action."],
  ["What ___ you doing at 3 p.m. yesterday?", "were", ["was", "did", "are"], "What were you doing?"],
  ["I ___ reading about the Maya when you called.", "was", ["were", "am", "did"], "I was + -ing."],
  ["They weren't ___ attention when the guide spoke.", "paying", ["pay", "paid", "pays"], "were(n't) + -ing."],
  ["He ___ a gold mask while he was digging.", "found", ["was finding", "finds", "find"], "Short action: Past Simple."],
  ["___ the Romans building roads 2,000 years ago? Yes, they were.", "Were", ["Was", "Did", "Do"], "Were + they + -ing?"]
 ],
 vd: [
  ["A person who studies old objects to learn about history.", "archaeologist"],
  ["A place where a dead person is buried, often under the ground.", "tomb"],
  ["A big stone building with a square base and a point at the top.", "pyramid"],
  ["Very, very old, from thousands of years ago.", "ancient"],
  ["A large group of people with its own culture and government.", "civilization"],
  ["Old pieces of buildings that are left.", "ruins"],
  ["To break the ground to find something.", "dig"],
  ["An old object made by people long ago.", "artifact"]
 ],
 r: { t: "The Boy King", x: [
   "In 1922, the British archaeologist Howard Carter was working in Egypt. He was searching for the tomb of a young pharaoh, Tutankhamun.",
   "One day, while his team was digging in the Valley of the Kings, a boy found a stone step. It was the entrance to the tomb!",
   "Inside, they discovered thousands of artifacts, including a beautiful gold mask. It is one of the most famous discoveries in history."],
  q: [
   ["Who was Howard Carter searching for?", "the tomb of Tutankhamun", ["a lost city", "a gold coin", "a pyramid"]],
   ["What did the boy find?", "a stone step", ["a gold mask", "a coin", "a mummy"]],
   ["What famous object did they discover?", "a gold mask", ["a crown", "a sword", "a map"]]
  ] },
 l: [
  ["We were walking through the ruins when we saw a snake!", "What happened while they were walking?", "They saw a snake.", ["They found gold.", "It started to rain.", "They got lost."]],
  ["Girl: What were you doing when the earthquake started? Boy: I was sleeping.", "What was the boy doing?", "sleeping", ["eating", "reading", "studying"]],
  ["The Maya built amazing cities with pyramids and observatories.", "What did the Maya build?", "cities with pyramids", ["castles", "skyscrapers", "bridges"]]
 ],
 w: { u: ["They were digging when they found a coin.", "While I was reading, the phone rang.", "What were you doing yesterday?"],
  o: ["Imagine you are an archaeologist. Write about what you were doing when you found something amazing.", "Write two sentences with when and two with while."] },
 p: [
  [["ache", "archaeology", "school", "chair"], 3, "ch = /k/"],
  [["tomb", "comb", "climb", "camp"], 3, "silent b"],
  [["ruins", "true", "blue", "run"], 3, "long u"]
 ]
});
add("now-i-know-5", 3, {
 rm: "Articles: <b>a</b> / <b>an</b> (one, first time) · <b>the</b> (specific, already known) · <b>zero article</b> (general plural / uncountable): <b>People</b> move for <b>work</b>. · Question words: who, what, where, when, why, how, which, whose.",
 g: [
  ["My family moved to ___ new city last year.", "a", ["an", "the", "—"], "a + one thing, first mention."],
  ["We lived in ___ apartment near the station.", "an", ["a", "—", "these"], "an + vowel sound."],
  ["___ apartment had a big balcony.", "The", ["A", "An", "—"], "the = already mentioned."],
  ["___ people move to other countries to find jobs.", "Many", ["The many", "A many", "An"], "General plural: no article."],
  ["She speaks ___ English very well.", "—", ["the", "an", "a"], "Languages: no article."],
  ["___ did you move? Because my dad got a new job.", "Why", ["What", "Where", "Which"], "Why asks for a reason."],
  ["___ suitcase is this? It's mine.", "Whose", ["Who", "Who's", "Which"], "Whose = of who."],
  ["___ long did the trip take? Ten hours.", "How", ["What", "When", "Which"], "How long…?"]
 ],
 vd: [
  ["To move to live in another country.", "migrate"],
  ["In or to another country.", "abroad"],
  ["A big bag or case you take on a trip.", "suitcase"],
  ["A document you need to travel to other countries.", "passport"],
  ["Missing your home and family.", "homesick"],
  ["Someone who lives next to you.", "neighbor"],
  ["To get used to a new place.", "adapt"],
  ["The customs, art and ideas of a group of people.", "culture"]
 ],
 r: { t: "A New Life in Canada", x: [
   "Last year, Mariana and her family moved from Monterrey to Toronto, Canada. Her mom got a job at a hospital there.",
   "At first, Mariana felt homesick. The weather was very cold, and she missed her friends and her grandma's food.",
   "But little by little, she adapted. She made new friends at school, and now she speaks English and some French. 'Moving abroad was difficult, but it was the best decision,' she says."],
  q: [
   ["Why did the family move?", "Her mom got a job.", ["Her dad got a job.", "They wanted snow.", "Mariana wanted to study."]],
   ["How did Mariana feel at first?", "homesick", ["excited", "angry", "bored"]],
   ["What languages does she speak now?", "English and some French", ["only Spanish", "English only", "French only"]]
  ] },
 l: [
  ["Boy: Where did you live before? Girl: In a small town in Spain.", "Where did the girl live before?", "in a small town in Spain", ["in a big city", "in Canada", "in Mexico"]],
  ["Don't forget your passport. You can't go abroad without it.", "What can't you do without a passport?", "go abroad", ["go to school", "buy food", "take a bus"]],
  ["The hardest part of moving was saying goodbye to my neighbors.", "What was the hardest part?", "saying goodbye to the neighbors", ["packing", "learning English", "the cold weather"]]
 ],
 w: { u: ["We moved to a new city.", "Why did you move abroad?", "The house had a big garden."],
  o: ["Imagine you move to another country. Write about your first week.", "Write five questions to ask someone who moved to your city."] },
 p: [
  [["road", "boat", "coat", "bread"], 3, "oa = long o"],
  [["culture", "cut", "cup", "cute"], 3, "short u"],
  [["neighbor", "weigh", "eight", "height"], 3, "eigh = long a"]
 ]
});
add("now-i-know-5", 7, {
 rm: "Possibility: It <b>may</b> rain. I <b>might</b> call you later. (not sure) · Present Perfect: I've <b>already</b> sent the message. (+) · Have you sent it <b>yet</b>? I haven't sent it <b>yet</b>. (? / −)",
 g: [
  ["I'm not sure. I ___ text you later.", "might", ["must", "will surely", "should"], "might = possibility."],
  ["It ___ rain this afternoon. Take an umbrella.", "may", ["must", "can't", "mustn't"], "may = possible."],
  ["I've ___ answered the email.", "already", ["yet", "ever", "still"], "already in affirmative."],
  ["Have you called your grandma ___?", "yet", ["already", "ever", "just"], "yet in questions."],
  ["She hasn't replied ___.", "yet", ["already", "still", "never"], "yet in negatives."],
  ["We ___ already watched that video.", "have", ["has", "are", "did"], "We have + past participle."],
  ["He ___ not come to the party. He's sick.", "might", ["must", "can", "should"], "might not = maybe not."],
  ["Has she ___ the news yet?", "heard", ["hear", "hears", "hearing"], "has + past participle."]
 ],
 vd: [
  ["A short written message sent by phone.", "text message"],
  ["A face or symbol you add to a message.", "emoji"],
  ["To answer a message.", "reply"],
  ["A talk between two or more people.", "conversation"],
  ["To talk to someone with video on a screen.", "video call"],
  ["Moving your hands to communicate.", "gesture"],
  ["Language with hand signs for deaf people.", "sign language"],
  ["To stop someone while they are talking.", "interrupt"]
 ],
 r: { t: "Talking Without Words", x: [
   "We communicate in many ways, not only with words. Our faces, gestures and body language say a lot.",
   "For example, a smile is understood in every country, but other gestures may mean different things. A thumbs-up is positive in Mexico, but it might be rude in other places.",
   "Today, many people communicate with emojis. Have you ever sent a message with only emojis? Some people say emojis are a new kind of language."],
  q: [
   ["What is understood in every country?", "a smile", ["a thumbs-up", "emojis", "sign language"]],
   ["What might a thumbs-up be in other places?", "rude", ["funny", "positive", "sad"]],
   ["What do some people say about emojis?", "They are a new kind of language.", ["They are bad.", "They are only for kids.", "They are too difficult."]]
  ] },
 l: [
  ["Girl: Have you finished the project yet? Boy: Not yet. I might finish it tonight.", "When might the boy finish?", "tonight", ["tomorrow", "already finished", "next week"]],
  ["I've already sent you the photos. Check your phone.", "What has she already done?", "sent the photos", ["called him", "printed the photos", "deleted the photos"]],
  ["Please don't interrupt me while I'm talking.", "What does the speaker ask?", "not to interrupt", ["to talk louder", "to send a message", "to call later"]]
 ],
 w: { u: ["I might call you later.", "Have you replied yet?", "She has already sent the message."],
  o: ["Write about how you communicate with your friends.", "Write three things you have already done today and two you haven't done yet."] },
 p: [
  [["text", "next", "best", "these"], 3, "short e"],
  [["reply", "why", "cry", "really"], 3, "y = long i"],
  [["sign", "design", "foreign", "signal"], 3, "silent g"]
 ]
});
add("now-i-know-5", 8, {
 rm: "<b>made of</b> (material you can see): The basket is made of straw. · <b>made from</b> (material changed): Paper is made from wood. · <b>made by</b> (person): It was made by my grandma. · Present Simple for timetables: The workshop <b>starts</b> at 5.",
 g: [
  ["This table is made ___ wood.", "of", ["by", "from", "with"], "made of: you can see the material."],
  ["Paper is made ___ trees.", "from", ["of", "by", "with"], "made from: the material changed."],
  ["This scarf was made ___ my aunt.", "by", ["of", "from", "with"], "made by + person."],
  ["The pottery class ___ at 4 p.m. tomorrow.", "starts", ["start", "will starting", "starting"], "Timetable: Present Simple."],
  ["The bus to the craft fair ___ at 9:00.", "leaves", ["leave", "is leave", "leaving"], "Present Simple for schedules."],
  ["Cheese is made ___ milk.", "from", ["of", "by", "in"], "made from."],
  ["These bracelets are made ___ beads.", "of", ["by", "from", "to"], "made of."],
  ["When ___ the market open on Saturday?", "does", ["do", "is", "will does"], "When does…? (schedule)"]
 ],
 vd: [
  ["The art of making pots with clay.", "pottery"],
  ["Soft earth you use to make pots.", "clay"],
  ["To make clothes with wool and two long needles.", "knit"],
  ["A thin, sharp tool used to sew.", "needle"],
  ["A tool to cut paper or cloth.", "scissors"],
  ["A heavy tool to hit nails.", "hammer"],
  ["Made by hand, not by a machine.", "handmade"],
  ["Small balls with a hole to make jewelry.", "beads"]
 ],
 r: { t: "The Pottery Workshop", x: [
   "Every Saturday, Ana goes to a pottery workshop. The class starts at ten o'clock and finishes at noon.",
   "The teacher shows them how to make bowls and vases made of clay. Ana loves feeling the clay with her hands.",
   "Last month, Ana made a blue vase. It's not perfect, but it's handmade and her mom loves it. Now it's on the kitchen table, full of flowers."],
  q: [
   ["When does the class finish?", "at noon", ["at ten o'clock", "at two", "at five"]],
   ["What are the bowls made of?", "clay", ["glass", "wood", "plastic"]],
   ["Where is Ana's vase now?", "on the kitchen table", ["at the workshop", "in her bedroom", "at a store"]]
  ] },
 l: [
  ["This bag is made of recycled plastic bottles.", "What is the bag made of?", "recycled plastic bottles", ["paper", "cotton", "leather"]],
  ["Girl: Who made this sweater? Boy: It was made by my grandma. She knits a lot.", "Who made the sweater?", "his grandma", ["his mom", "a store", "the boy"]],
  ["The craft fair opens at nine and closes at six.", "When does the craft fair close?", "at six", ["at nine", "at seven", "at five"]]
 ],
 w: { u: ["The vase is made of clay.", "Paper is made from wood.", "It was made by my aunt."],
  o: ["Describe something handmade in your house. What is it made of?", "Write the steps to make a simple craft."] },
 p: [
  [["knit", "knife", "know", "kite"], 3, "silent k"],
  [["clay", "play", "made", "class"], 3, "long a"],
  [["hammer", "hand", "hat", "hour"], 3, "h"]
 ]
});
add("now-i-know-5", 9, {
 rm: "Present Perfect: <b>Have</b> you <b>ever</b> tried surfing? I've <b>never</b> done it. · Past Simple (specific time): I <b>went</b> rafting <b>last summer</b>. · Experience → Present Perfect · Finished time → Past Simple",
 g: [
  ["Have you ___ been skydiving?", "ever", ["never", "yet", "already"], "Have you ever…?"],
  ["I've ___ tried snowboarding. I'd love to!", "never", ["ever", "yet", "already"], "never = not at any time."],
  ["She ___ bungee jumping last year.", "went", ["has gone", "goes", "has went"], "Past time (last year) → Past Simple."],
  ["He has ___ two marathons.", "run", ["ran", "runned", "running"], "has + past participle (run)."],
  ["Have you ever ___ a horse?", "ridden", ["rode", "ride", "rided"], "ride → ridden."],
  ["We ___ rock climbing in 2025.", "went", ["have gone", "go", "have been"], "Specific year → Past Simple."],
  ["My brother has never ___ a broken bone.", "had", ["have", "has", "having"], "has had."],
  ["How many times ___ you been to the gym this week?", "have", ["did", "has", "were"], "How many times have you…?"]
 ],
 vd: [
  ["Jumping from a plane with a parachute.", "skydiving"],
  ["Riding a board on ocean waves.", "surfing"],
  ["Going down a river in a rubber boat.", "rafting"],
  ["Very dangerous and exciting sports.", "extreme sports"],
  ["Being healthy and strong from exercise.", "fitness"],
  ["A very long running race (42 km).", "marathon"],
  ["Things you wear to protect your head.", "helmet"],
  ["Moving your body to warm up before exercise.", "stretch"]
 ],
 r: { t: "Why Extreme Sports?", x: [
   "Have you ever wondered why people love extreme sports? When we do something exciting, our body produces adrenaline, and we feel full of energy.",
   "Leo is fifteen. He has tried surfing, rafting and rock climbing. Last summer, he went skydiving with his uncle. 'It was the most exciting day of my life,' he says.",
   "But extreme sports can be dangerous. It's important to wear a helmet, stretch before you start, and always go with an expert."],
  q: [
   ["What does our body produce when we do something exciting?", "adrenaline", ["sugar", "water", "oxygen"]],
   ["Who did Leo go skydiving with?", "his uncle", ["his dad", "his friends", "a teacher"]],
   ["What is important for safety?", "wear a helmet and go with an expert", ["go alone", "eat a lot", "go at night"]]
  ] },
 l: [
  ["Boy: Have you ever tried surfing? Girl: Yes, I have. I went surfing in Hawaii two years ago.", "When did the girl go surfing?", "two years ago", ["last summer", "never", "last week"]],
  ["I've never run a marathon, but I run five kilometers every Sunday.", "How far does he run on Sundays?", "five kilometers", ["a marathon", "fifteen kilometers", "two kilometers"]],
  ["Always wear a helmet when you ride a bike.", "What should you always wear?", "a helmet", ["gloves", "sunglasses", "a jacket"]]
 ],
 w: { u: ["Have you ever tried rafting?", "I have never been skydiving.", "She went surfing last year."],
  o: ["Write about an exciting sport you have tried or would like to try.", "Write three things you have never done and one thing you did last weekend."] },
 p: [
  [["surf", "first", "work", "four"], 3, "er / ir / ur"],
  [["helmet", "health", "head", "heat"], 3, "short e"],
  [["climb", "thumb", "lamb", "club"], 3, "silent b"]
 ]
});
add("now-i-know-5", 10, {
 rm: "Question tags: It's cold, <b>isn't it</b>? · You don't like snow, <b>do you</b>? · Zero conditional (always true): <b>If</b> water <b>freezes</b>, it <b>becomes</b> ice.",
 g: [
  ["It's really windy today, ___?", "isn't it", ["is it", "doesn't it", "aren't it"], "Positive sentence → negative tag."],
  ["You don't like thunderstorms, ___?", "do you", ["don't you", "are you", "did you"], "Negative sentence → positive tag."],
  ["She can ski, ___?", "can't she", ["can she", "doesn't she", "isn't she"], "can → can't she?"],
  ["They went snowboarding, ___?", "didn't they", ["did they", "weren't they", "don't they"], "Past → didn't they?"],
  ["If you heat ice, it ___.", "melts", ["melt", "will melt", "melted"], "Zero conditional: Present + Present."],
  ["If it ___ a lot, rivers flood.", "rains", ["rain", "will rain", "rained"], "If + Present Simple."],
  ["If the temperature drops below 0°C, water ___.", "freezes", ["freeze", "froze", "will freezes"], "Zero conditional."],
  ["A hurricane is very dangerous, ___?", "isn't it", ["is it", "doesn't it", "wasn't it"], "is → isn't it?"]
 ],
 vd: [
  ["A very strong storm with violent winds, from the ocean.", "hurricane"],
  ["A long time with no rain.", "drought"],
  ["When a lot of water covers the land.", "flood"],
  ["A storm with a lot of snow and wind.", "blizzard"],
  ["A spinning column of wind.", "tornado"],
  ["A very hot period of weather.", "heat wave"],
  ["Sliding down snow on two long boards.", "skiing"],
  ["Ice-covered water you can skate on.", "ice rink"]
 ],
 r: { t: "Our Changing Weather", x: [
   "Extreme weather is becoming more common around the world. There are stronger hurricanes, longer droughts and bigger floods.",
   "Scientists say climate change is one of the main causes. If the oceans get warmer, hurricanes become stronger.",
   "In some places, winters are shorter now, so there is less snow for winter sports. It's worrying, isn't it? We can help by saving energy and using less plastic."],
  q: [
   ["What is becoming more common?", "extreme weather", ["snow", "cold winters", "mild weather"]],
   ["What happens if the oceans get warmer?", "Hurricanes become stronger.", ["It snows more.", "Floods stop.", "There are fewer storms."]],
   ["How can we help?", "by saving energy and using less plastic", ["by driving more", "by buying more", "by doing nothing"]]
  ] },
 l: [
  ["Boy: It was a terrible storm last night, wasn't it? Girl: Yes, it was. Our street flooded.", "What happened to the girl's street?", "It flooded.", ["It snowed.", "A tree fell.", "Nothing."]],
  ["If you go skiing, you need warm gloves and goggles.", "What do you need for skiing?", "warm gloves and goggles", ["a surfboard", "sunglasses only", "sandals"]],
  ["There's a heat wave this week. Temperatures will reach 42 degrees.", "How hot will it get?", "42 degrees", ["24 degrees", "32 degrees", "12 degrees"]]
 ],
 w: { u: ["It's cold today, isn't it?", "If ice gets hot, it melts.", "You can ski, can't you?"],
  o: ["Describe an extreme weather event. What happens and what should people do?", "Write three zero conditional sentences about nature."] },
 p: [
  [["storm", "snow", "ski", "sun"], 3, "s + consonant"],
  [["flood", "blood", "food", "mud"], 2, "short u (oo)"],
  [["drought", "out", "cloud", "though"], 3, "ou = /aʊ/"]
 ]
});
add("now-i-know-5", 11, {
 rm: "verb + <b>to</b> + infinitive: I <b>want to</b> cook. She <b>decided to</b> bake. We <b>need to</b> buy eggs. · Reported commands/requests: \"Stir the soup.\" → She <b>told</b> me <b>to stir</b> the soup. · \"Can you help?\" → He <b>asked</b> me <b>to help</b>.",
 g: [
  ["I want ___ learn how to make sushi.", "to", ["—", "for", "ing"], "want to + verb."],
  ["She decided ___ a chocolate cake.", "to bake", ["baking", "bake", "baked"], "decide to + verb."],
  ["We need ___ some flour.", "to buy", ["buying", "buy", "bought"], "need to + verb."],
  ["Mom told me ___ the oven.", "to turn off", ["turn off", "turning off", "turned off"], "tell + person + to + verb."],
  ["The chef asked us ___ our hands.", "to wash", ["wash", "washing", "washed"], "ask + person + to + verb."],
  ["\"Chop the onions.\" → He told me ___ the onions.", "to chop", ["chop", "chopping", "that chop"], "Reported command."],
  ["\"Can you pass the salt?\" → She asked me ___ the salt.", "to pass", ["pass", "passing", "passed"], "Reported request."],
  ["I hope ___ a chef one day.", "to become", ["becoming", "become", "became"], "hope to + verb."]
 ],
 vd: [
  ["To cut food into small pieces.", "chop"],
  ["To heat liquid until it bubbles.", "boil"],
  ["To cook food in hot oil.", "fry"],
  ["To make an egg mix quickly with a fork.", "beat"],
  ["A pan to cook food in hot oil.", "frying pan"],
  ["A kitchen tool to mix eggs or cream fast.", "whisk"],
  ["A board where you cut food.", "cutting board"],
  ["The things you need to make a recipe.", "ingredients"]
 ],
 r: { t: "My First Cooking Class", x: [
   "Last Saturday, I went to a cooking class. The chef told us to wash our hands and put on aprons. Then she asked us to read the recipe.",
   "We decided to make pasta with tomato sauce. First, we chopped onions and garlic on a cutting board. Then we boiled water for the pasta.",
   "The chef told me to stir the sauce slowly. At the end, we ate everything together. I want to cook it again for my family."],
  q: [
   ["What did the chef tell them to do first?", "wash their hands and put on aprons", ["read the recipe", "boil water", "chop onions"]],
   ["What did they decide to make?", "pasta with tomato sauce", ["pizza", "a cake", "soup"]],
   ["What did the chef tell the writer to do?", "stir the sauce slowly", ["chop the garlic", "boil water", "wash the dishes"]]
  ] },
 l: [
  ["Girl: What do we need to buy? Boy: We need to buy eggs, milk and butter.", "What do they need to buy?", "eggs, milk and butter", ["flour and sugar", "rice and beans", "bread"]],
  ["My grandma asked me to beat the eggs with a whisk.", "What did Grandma ask her to do?", "beat the eggs", ["chop onions", "boil water", "fry the chicken"]],
  ["Don't fry the fish too long. Five minutes on each side.", "How long should you fry each side?", "five minutes", ["fifteen minutes", "one minute", "ten minutes"]]
 ],
 w: { u: ["I want to learn to cook.", "She told me to chop the onions.", "He asked me to help him."],
  o: ["Write a simple recipe. Use first, then, after that, finally.", "Report three instructions your teacher or parents gave you. Use told me to / asked me to."] },
 p: [
  [["chop", "chef", "cheese", "chicken"], 1, "ch = /tʃ/ (chef = /ʃ/)"],
  [["whisk", "white", "what", "who"], 3, "wh = w"],
  [["boil", "oil", "foil", "bowl"], 3, "oi"]
 ]
});
add("now-i-know-5", 12, {
 rm: "First conditional: <b>If</b> you <b>study</b> every day, you<b>'ll pass</b> the test. · <b>Unless</b> = if not. · I <b>know (that)</b> learning takes time. Do you <b>know</b> how to make a mind map?",
 g: [
  ["If you review your notes, you ___ remember more.", "will", ["would", "are", "did"], "If + present, will + verb."],
  ["If she ___ enough, she'll be tired tomorrow.", "doesn't sleep", ["won't sleep", "didn't sleep", "not sleep"], "If + Present Simple."],
  ["You'll forget the words ___ you practice them.", "unless", ["if", "when", "because"], "unless = if not."],
  ["I know ___ sleep helps your memory.", "that", ["what", "which", "who"], "know (that)…"],
  ["Do you know how ___ a mind map?", "to make", ["make", "making", "made"], "know how to + verb."],
  ["If we ___ in groups, we'll learn faster.", "work", ["will work", "worked", "works"], "If + Present Simple."],
  ["He'll get a good grade if he ___ hard.", "studies", ["will study", "study", "studied"], "If + Present Simple (he studies)."],
  ["If you don't take breaks, you ___ concentrate.", "won't", ["don't", "wouldn't", "aren't"], "won't = will not."]
 ],
 vd: [
  ["A diagram with ideas connected to a main idea.", "mind map"],
  ["To pay full attention to something.", "concentrate"],
  ["To study something again before a test.", "review"],
  ["To learn something so you can say it without reading.", "memorize"],
  ["Short pieces of writing to help you remember.", "notes"],
  ["To not remember.", "forget"],
  ["A short rest from studying.", "break"],
  ["The ability to remember things.", "memory"]
 ],
 r: { t: "How to Learn Better", x: [
   "Scientists know that our brains learn in different ways. Some students learn better with pictures, others with music or by moving.",
   "One useful technique is the mind map. If you put the main idea in the center and connect related ideas, you'll remember more.",
   "Another tip is to take breaks. If you study for 25 minutes and rest for 5, you'll concentrate better. And don't forget to sleep — your memory works while you sleep!"],
  q: [
   ["What do scientists know?", "Brains learn in different ways.", ["Everyone learns the same way.", "Music is bad for learning.", "Sleep isn't important."]],
   ["Where do you put the main idea in a mind map?", "in the center", ["at the top", "at the end", "on the back"]],
   ["What does the text say about sleep?", "Your memory works while you sleep.", ["Sleep makes you forget.", "You should sleep less.", "Sleep is only for small kids."]]
  ] },
 l: [
  ["Boy: If I fail the test, my parents will be angry. Girl: You won't fail if you review tonight.", "What does the girl suggest?", "review tonight", ["go to bed early", "copy answers", "talk to the teacher"]],
  ["I memorize new words by writing them on cards.", "How does she memorize words?", "by writing them on cards", ["by singing", "by drawing", "by reading aloud"]],
  ["Take a five-minute break after every twenty-five minutes.", "How long is the break?", "five minutes", ["twenty-five minutes", "fifteen minutes", "one hour"]]
 ],
 w: { u: ["If you study, you will pass.", "I know that sleep is important.", "You won't remember unless you practice."],
  o: ["Write five tips for studying. Use if + will.", "How do you learn best? Write a short paragraph."] },
 p: [
  [["learn", "earth", "early", "near"], 3, "ear = /ɜr/"],
  [["memory", "remember", "member", "meet"], 3, "short e"],
  [["know", "knee", "knife", "kind"], 3, "silent k"]
 ]
});

/* ================= NOW I KNOW! 6 ================= */
add("now-i-know-6", 2, {
 rm: "Future: <b>will</b> (prediction) · <b>be going to</b> (plan) · Present Continuous (arrangement): I'm <b>visiting</b> a farm on Saturday. · <b>plan / hope / intend / mean + to</b>: We <b>plan to</b> grow vegetables.",
 g: [
  ["In the future, people ___ eat more insects. (prediction)", "will", ["are", "did", "were"], "will for predictions."],
  ["We're ___ to plant tomatoes next spring. (plan)", "going", ["go", "will", "gone"], "be going to = plan."],
  ["I ___ visiting an organic farm on Saturday. (arrangement)", "'m", ["will", "go", "did"], "Present Continuous for fixed plans."],
  ["She hopes ___ a chef one day.", "to become", ["becoming", "become", "to becoming"], "hope + to + verb."],
  ["They intend ___ their own vegetables.", "to grow", ["growing", "grow", "grew"], "intend + to + verb."],
  ["I meant ___ you, but I forgot.", "to call", ["calling", "call", "called"], "mean + to + verb."],
  ["We plan ___ less meat.", "to eat", ["eating", "eat", "ate"], "plan + to + verb."],
  ["Look at those clouds! It's ___ rain on the crops.", "going to", ["will to", "go to", "goes"], "going to = evidence now."]
 ],
 vd: [
  ["Grown without chemicals.", "organic"],
  ["Plants grown on a farm for food.", "crops"],
  ["To collect crops when they are ready.", "harvest"],
  ["A person who grows food or keeps animals.", "farmer"],
  ["Growing plants in water, without soil.", "hydroponics"],
  ["Meat made in a laboratory.", "lab-grown meat"],
  ["Small animals with six legs, some people eat them.", "insects"],
  ["Strange; not common.", "unusual"]
 ],
 r: { t: "Food of the Future", x: [
   "By 2050, there will be almost 10 billion people on Earth. How are we going to feed everyone? Scientists are looking for new ideas.",
   "Some farms already grow vegetables in tall buildings, using hydroponics. They use less water and no soil. Other scientists are making lab-grown meat.",
   "Insects might also be part of our diet. In Mexico, many people already eat chapulines (grasshoppers). They are full of protein and are better for the planet than beef."],
  q: [
   ["How many people will there be by 2050?", "almost 10 billion", ["2 billion", "100 million", "50 billion"]],
   ["What is special about hydroponic farms?", "They use less water and no soil.", ["They use more land.", "They only grow fruit.", "They need animals."]],
   ["Why are insects good food?", "They have protein and are better for the planet.", ["They taste sweet.", "They are expensive.", "They are big."]]
  ] },
 l: [
  ["Girl: What are you doing this weekend? Boy: I'm helping my uncle with the harvest.", "What is the boy doing this weekend?", "helping with the harvest", ["going to the movies", "visiting a lab", "studying"]],
  ["I hope to try insects when I go to Oaxaca.", "What does she hope to try?", "insects", ["lab-grown meat", "sushi", "organic fruit"]],
  ["Organic farmers don't use chemicals on their crops.", "What don't organic farmers use?", "chemicals", ["water", "soil", "seeds"]]
 ],
 w: { u: ["We are going to plant tomatoes.", "I hope to visit a farm.", "People will eat more insects."],
  o: ["What will we eat in 2050? Write your predictions.", "Write about your plans for next weekend. Use going to and Present Continuous."] },
 p: [
  [["crop", "harvest", "farm", "hard"], 0, "ar"],
  [["organic", "orange", "order", "ocean"], 3, "or"],
  [["grow", "know", "slow", "now"], 3, "long o"]
 ]
});
add("now-i-know-6", 3, {
 rm: "Zero conditional (always true): If you <b>cut</b> your skin, it <b>bleeds</b>. · First conditional (real future): If you <b>exercise</b>, you<b>'ll be</b> stronger. · Second conditional (imaginary): If I <b>were</b> a doctor, I <b>would help</b> people.",
 g: [
  ["If you exercise, your heart ___ faster. (always true)", "beats", ["will beat", "would beat", "beat"], "Zero conditional."],
  ["If you eat well, you ___ feel better tomorrow.", "will", ["would", "are", "did"], "First conditional."],
  ["If I ___ a doctor, I would work in a hospital.", "were", ["am", "will be", "was being"], "Second conditional: If + were."],
  ["If she had a first aid kit, she ___ help him.", "would", ["will", "can't", "does"], "Second conditional: would + verb."],
  ["If you ___ your arm, go to the hospital.", "break", ["broke", "would break", "will break"], "If + Present."],
  ["What would you do if you ___ someone faint?", "saw", ["see", "will see", "seen"], "Second conditional: past."],
  ["If you don't drink water, you ___ get a headache.", "might", ["would have", "were", "did"], "might = possibility."],
  ["If I ___ more time, I'd learn first aid.", "had", ["have", "will have", "having"], "If + past (imaginary)."]
 ],
 vd: [
  ["The organ that pumps blood.", "heart"],
  ["The organs you breathe with.", "lungs"],
  ["The organ that cleans your blood.", "liver"],
  ["The organ where food goes after you eat.", "stomach"],
  ["Basic medical help given right away.", "first aid"],
  ["A sticky strip you put on a small cut.", "adhesive bandage"],
  ["To lose consciousness for a short time.", "faint"],
  ["When blood comes out of your body.", "bleed"]
 ],
 r: { t: "The Amazing Human Body", x: [
   "Your heart beats about 100,000 times a day. If you exercise, it gets stronger, just like other muscles.",
   "Your lungs take in oxygen every time you breathe. If you didn't have oxygen, your brain would stop working in a few minutes.",
   "Knowing first aid is important. If someone cuts themselves, you should clean the wound and press on it to stop the bleeding. If it's serious, call an ambulance."],
  q: [
   ["How many times does your heart beat a day?", "about 100,000", ["about 1,000", "about 10,000", "about a million"]],
   ["What would happen without oxygen?", "Your brain would stop working.", ["You would sleep more.", "Your heart would grow.", "Nothing."]],
   ["What should you do if someone cuts themselves?", "clean the wound and press on it", ["give them food", "put ice on their head", "ignore it"]]
  ] },
 l: [
  ["Boy: What would you do if you found someone unconscious? Girl: I would call 911 first.", "What would the girl do first?", "call 911", ["give water", "run away", "take a photo"]],
  ["If you sprain your ankle, put ice on it and rest.", "What should you do for a sprained ankle?", "put ice on it and rest", ["run on it", "put heat on it", "nothing"]],
  ["Your liver cleans your blood and helps you digest food.", "What does the liver do?", "cleans your blood", ["pumps blood", "helps you breathe", "helps you see"]]
 ],
 w: { u: ["If you exercise, you will be stronger.", "If I were a doctor, I would help people.", "Your heart pumps blood."],
  o: ["What would you do if you saw an accident? Write four sentences.", "Write three zero conditional sentences about the body."] },
 p: [
  [["heart", "start", "part", "hurt"], 3, "ar"],
  [["liver", "lift", "list", "lung"], 3, "short i"],
  [["stomach", "school", "chemist", "chair"], 3, "ch = /k/"]
 ]
});
add("now-i-know-6", 4, {
 rm: "Present Perfect Progressive (activity continuing until now): She <b>has been training</b> for two years. · Present Perfect (result / completed): She <b>has visited</b> the space station three times. · <b>for</b> + period · <b>since</b> + point in time",
 g: [
  ["The astronauts have been ___ on the station for six months.", "living", ["lived", "live", "lives"], "have been + -ing."],
  ["She has been training ___ 2023.", "since", ["for", "from", "during"], "since + point in time."],
  ["They have been working ___ three hours.", "for", ["since", "ago", "during"], "for + period."],
  ["How long ___ you been studying astronomy?", "have", ["has", "are", "did"], "How long have you been…?"],
  ["NASA ___ sent rovers to Mars five times.", "has", ["have", "has been", "is"], "Completed result: Present Perfect."],
  ["I've ___ this book about space. It's finished!", "read", ["been reading", "reading", "readed"], "Completed: Present Perfect."],
  ["He's tired because he's ___ running on the treadmill.", "been", ["being", "be", "was"], "has been + -ing."],
  ["We ___ been waiting for the launch since 6 a.m.", "have", ["has", "are", "were"], "We have been…"]
 ],
 vd: [
  ["A robot vehicle that explores a planet.", "rover"],
  ["When a rocket leaves the ground.", "launch"],
  ["A trip with a specific goal, like going to the Moon.", "mission"],
  ["Being in space with almost no weight.", "zero gravity"],
  ["The air around a planet.", "atmosphere"],
  ["A place where people can live or stay, like on another planet.", "base"],
  ["A person who studies space and the stars.", "astronomer"],
  ["A machine for running indoors.", "treadmill"]
 ],
 r: { t: "Living on the ISS", x: [
   "Astronauts on the International Space Station have been living and working in space since the year 2000. Some have stayed for almost a year!",
   "In zero gravity, muscles and bones get weaker, so astronauts have been exercising for two hours every day on a special treadmill.",
   "Scientists have learned a lot from these missions. In the future, they want to build a base on the Moon and, one day, send people to Mars."],
  q: [
   ["Since when have astronauts been living on the ISS?", "since 2000", ["since 1969", "since 2020", "for 10 years"]],
   ["Why do astronauts exercise every day?", "Their muscles and bones get weaker.", ["They are bored.", "They want to win a race.", "It's warm."]],
   ["What do scientists want to build?", "a base on the Moon", ["a hotel on Mars", "a new ISS", "a rocket factory"]]
  ] },
 l: [
  ["Girl: How long have you been watching the launch? Boy: For an hour. It's amazing!", "How long has he been watching?", "for an hour", ["since yesterday", "for ten minutes", "for two hours"]],
  ["The rover has been exploring Mars since 2021.", "Since when has the rover been exploring Mars?", "since 2021", ["since 2012", "for 21 years", "since 2001"]],
  ["She has visited three planetariums this year.", "How many planetariums has she visited?", "three", ["two", "four", "thirteen"]]
 ],
 w: { u: ["She has been training for two years.", "They have been living in space since May.", "NASA has sent many missions."],
  o: ["Would you like to be an astronaut? Why or why not?", "Write about something you have been doing for a long time."] },
 p: [
  [["launch", "law", "saw", "lunch"], 3, "au / aw"],
  [["rover", "over", "go", "move"], 3, "long o"],
  [["giant", "gym", "gentle", "green"], 3, "soft g"]
 ]
});
add("now-i-know-6", 5, {
 rm: "Defining relative clauses (essential info, no commas): The ad <b>that</b> I saw was funny. The man <b>who</b> sells shoes… · Non-defining (extra info, commas): My phone, <b>which</b> I bought last year, is slow. · who (people) · which (things) · where (places) · whose (possession)",
 g: [
  ["The store ___ sells video games is closed.", "that", ["who", "where", "whose"], "that / which for things."],
  ["The girl ___ won the prize is my cousin.", "who", ["which", "where", "whose"], "who for people."],
  ["This is the mall ___ I bought my sneakers.", "where", ["which", "who", "whose"], "where for places."],
  ["The influencer, ___ videos are very popular, sells clothes.", "whose", ["who", "which", "that"], "whose = possession."],
  ["My phone, ___ is two years old, still works.", "which", ["that", "who", "where"], "Non-defining: which (not that)."],
  ["Ads ___ use famous people are very effective.", "that", ["who", "where", "whose"], "that for things."],
  ["My aunt, ___ lives in Texas, loves online shopping.", "who", ["that", "which", "whose"], "Non-defining for people: who."],
  ["The brand ___ logo is an apple is famous.", "whose", ["which", "who", "where"], "whose logo."]
 ],
 vd: [
  ["A message that tries to make you buy something.", "advertisement"],
  ["The name of a company's products.", "brand"],
  ["A special lower price.", "discount"],
  ["Buying things without planning.", "impulse buying"],
  ["Paper that proves you paid.", "receipt"],
  ["To give something back to a store.", "return"],
  ["A person on social media who promotes products.", "influencer"],
  ["A person who buys things.", "customer"]
 ],
 r: { t: "Why Do We Buy?", x: [
   "Advertisements are everywhere: on TV, on social media and even in video games. Companies spend millions on ads that make us want their products.",
   "Many ads use influencers, who have millions of followers. When people see someone they admire using a brand, they want it too.",
   "Stores also use tricks. Products that kids like are often placed at eye level. Before you buy something, ask yourself: do I really need it, or is it impulse buying?"],
  q: [
   ["Where are advertisements?", "everywhere: TV, social media, games", ["only on TV", "only in stores", "only in newspapers"]],
   ["Why do companies use influencers?", "People want what they see influencers using.", ["Influencers are cheap.", "They make products.", "They work in stores."]],
   ["Where are products for kids often placed?", "at eye level", ["on the top shelf", "outside the store", "near the door"]]
  ] },
 l: [
  ["Boy: Can I return these headphones? Woman: Yes, if you have the receipt.", "What does he need to return the headphones?", "the receipt", ["the box only", "his ID", "a discount"]],
  ["The jacket that I wanted was on sale with a 30% discount.", "What was the discount?", "30%", ["13%", "50%", "3%"]],
  ["My brother, who loves sneakers, saves all his money to buy them.", "What does the brother love?", "sneakers", ["video games", "phones", "jackets"]]
 ],
 w: { u: ["The store that sells games is closed.", "My friend, who is an influencer, has many followers.", "This is the mall where I shop."],
  o: ["Describe an ad you like. Why is it effective?", "Write five sentences with who, which, where and whose."] },
 p: [
  [["brand", "band", "bad", "bread"], 3, "short a"],
  [["receipt", "receive", "seat", "rest"], 3, "long e"],
  [["customer", "cup", "cut", "cute"], 3, "short u"]
 ]
});
add("now-i-know-6", 6, {
 rm: "Present Simple Passive: The museum <b>is visited</b> by millions of people. · Tickets <b>are sold</b> online. · Present Continuous (now / temporary): We <b>are staying</b> in a hotel this week.",
 g: [
  ["The Eiffel Tower ___ by millions of tourists every year.", "is visited", ["visits", "is visiting", "visited"], "Passive: is + past participle."],
  ["Spanish ___ in many countries.", "is spoken", ["speaks", "is speaking", "spoke"], "Passive: is spoken."],
  ["The tickets ___ online.", "are sold", ["sell", "is sold", "are selling"], "Plural passive: are + past participle."],
  ["Right now, we ___ the old city.", "are exploring", ["explore", "are explored", "explored"], "Present Continuous for now."],
  ["The tours ___ by local guides.", "are given", ["are giving", "give", "is given"], "Passive."],
  ["This week I ___ at my aunt's house in Mérida.", "am staying", ["stay", "am stayed", "stayed"], "Temporary situation."],
  ["Chichén Itzá ___ in Yucatán.", "is located", ["locates", "is locating", "located"], "be located."],
  ["Photos ___ allowed inside the museum.", "aren't", ["don't", "isn't", "doesn't"], "Negative passive: aren't + past participle."]
 ],
 vd: [
  ["A famous place that tourists visit.", "landmark"],
  ["A person who shows tourists around.", "tour guide"],
  ["Something you buy to remember a trip.", "souvenir"],
  ["Tired and confused after a long flight.", "jet-lagged"],
  ["Happy and excited, waiting for something.", "thrilled"],
  ["Not able to find your way.", "lost"],
  ["Surprised by something very beautiful or big.", "amazed"],
  ["A plan of places and times for a trip.", "itinerary"]
 ],
 r: { t: "A Week in Rome", x: [
   "Hi, Grandma! We're having an amazing time in Rome. Right now, we're sitting in a café near the Colosseum.",
   "The Colosseum is visited by more than six million people every year. Tours are given in many languages, and we chose one in Spanish.",
   "Yesterday we got lost near the Trevi Fountain, but a kind man helped us. I'm buying souvenirs for everyone. See you soon!"],
  q: [
   ["Where is the writer right now?", "in a café near the Colosseum", ["at the hotel", "at the airport", "at the Trevi Fountain"]],
   ["How many people visit the Colosseum every year?", "more than six million", ["six thousand", "sixty million", "one million"]],
   ["What happened yesterday?", "They got lost.", ["They missed a tour.", "They lost a bag.", "It rained."]]
  ] },
 l: [
  ["Girl: How are you feeling after the flight? Boy: I'm really jet-lagged. I need to sleep.", "How does the boy feel?", "jet-lagged", ["thrilled", "hungry", "lost"]],
  ["The museum is closed on Mondays. Tickets are sold at the entrance.", "When is the museum closed?", "on Mondays", ["on Sundays", "every day", "on Fridays"]],
  ["We're staying in a small hotel near the beach this week.", "Where are they staying?", "in a small hotel near the beach", ["with family", "in a big resort", "in a tent"]]
 ],
 w: { u: ["The museum is visited by many tourists.", "Tickets are sold online.", "We are staying in a hotel."],
  o: ["Describe a famous landmark in Mexico using the passive.", "Write a postcard from a trip. What are you doing now?"] },
 p: [
  [["tour", "sure", "poor", "our"], 3, "oor / our"],
  [["guide", "guess", "guitar", "giant"], 3, "gu = hard g"],
  [["sour", "south", "mouth", "soup"], 3, "ou = /aʊ/"]
 ]
});
add("now-i-know-6", 7, {
 rm: "Past Progressive + Past Simple: I <b>was practicing</b> English when my friend <b>called</b>. · Reported speech: \"I <b>speak</b> French.\" → She said (that) she <b>spoke</b> French. \"I <b>am</b> learning.\" → He said he <b>was</b> learning.",
 g: [
  ["I ___ watching a movie in English when the power went off.", "was", ["were", "am", "did"], "I was + -ing."],
  ["We were studying when the teacher ___.", "arrived", ["was arriving", "arrives", "arrive"], "Short action: Past Simple."],
  ["\"I love languages.\" → She said she ___ languages.", "loved", ["loves", "love", "is loving"], "Present → past in reported speech."],
  ["\"I am learning Japanese.\" → He said he ___ learning Japanese.", "was", ["is", "were", "has"], "am → was."],
  ["\"I can speak three languages.\" → She said she ___ speak three languages.", "could", ["can", "could to", "may"], "can → could."],
  ["\"We have an exam.\" → They said they ___ an exam.", "had", ["have", "has", "having"], "have → had."],
  ["While I ___ in London, I learned a lot of slang.", "was living", ["lived was", "am living", "live"], "while + Past Progressive."],
  ["He told me that he ___ the idiom.", "didn't understand", ["doesn't understand", "don't understand", "not understood"], "Present negative → past negative."]
 ],
 vd: [
  ["A person who speaks a language from birth.", "native speaker"],
  ["Able to speak a language easily and well.", "fluent"],
  ["A way of pronouncing words from a region.", "accent"],
  ["An expression whose meaning is not literal.", "idiom"],
  ["Very informal words used by young people.", "slang"],
  ["To change words from one language to another.", "translate"],
  ["A person who speaks two languages.", "bilingual"],
  ["Very easy: 'a piece of ___'", "cake"]
 ],
 r: { t: "Learning English with Games", x: [
   "When Diego was ten, he was playing an online game when another player started talking to him in English. He didn't understand much!",
   "So he started learning. He watched videos with subtitles, played games in English and talked with players from other countries.",
   "Two years later, his teacher said he was nearly fluent. Diego said that learning slang and idioms was the most fun part. 'Now English is a piece of cake!' he says."],
  q: [
   ["What was Diego doing when someone talked to him in English?", "playing an online game", ["watching TV", "at school", "reading"]],
   ["How did he learn?", "with videos, games and talking to players", ["only with books", "at a language school", "with a tutor"]],
   ["What does 'a piece of cake' mean?", "very easy", ["very hard", "delicious", "boring"]]
  ] },
 l: [
  ["Girl: What did the teacher say? Boy: She said we had a test on Friday.", "What did the teacher say?", "They had a test on Friday.", ["The test was cancelled.", "There was no homework.", "Class was on Saturday."]],
  ["My cousin is bilingual. He speaks Spanish and English fluently.", "What does the cousin speak?", "Spanish and English", ["only English", "French and English", "Spanish and French"]],
  ["I was reading a comic in English when I found a funny idiom.", "What was she reading?", "a comic in English", ["a novel", "a newspaper", "a dictionary"]]
 ],
 w: { u: ["I was studying when you called.", "She said she spoke French.", "He told me he was tired."],
  o: ["How are you learning English? Write about your methods.", "Report three things a friend told you this week."] },
 p: [
  [["fluent", "true", "blue", "fun"], 3, "long u"],
  [["accent", "accept", "access", "act"], 3, "cc = /ks/"],
  [["slang", "sang", "bank", "sing"], 3, "short a"]
 ]
});
add("now-i-know-6", 8, {
 rm: "Adjective + infinitive: It's <b>important to</b> check the facts. It's <b>easy to</b> share fake news. · Reported questions: \"Where <b>do</b> you live?\" → She asked me where I <b>lived</b>. \"<b>Are</b> you OK?\" → He asked <b>if</b> I <b>was</b> OK.",
 g: [
  ["It's important ___ check the source of a story.", "to", ["for", "—", "that"], "adjective + to + verb."],
  ["It's easy ___ believe fake news.", "to", ["for", "of", "—"], "easy to."],
  ["\"Where do you work?\" → She asked me where I ___.", "worked", ["work", "do work", "did I work"], "Reported question: no inversion, past tense."],
  ["\"Are you a reporter?\" → He asked ___ I was a reporter.", "if", ["that", "what", "do"], "Yes/no questions: if / whether."],
  ["\"What happened?\" → The journalist asked what ___.", "had happened", ["happened did", "did happen", "happens"], "Past → past perfect."],
  ["\"Can you send me the video?\" → She asked if I ___ send her the video.", "could", ["can", "will", "may to"], "can → could."],
  ["It's difficult ___ find good news on TV.", "to", ["for", "of", "about"], "difficult to."],
  ["\"Is the story true?\" → They asked whether the story ___ true.", "was", ["is", "were", "be"], "is → was."]
 ],
 vd: [
  ["A short title above a news story.", "headline"],
  ["A person who writes or reports the news.", "journalist"],
  ["False stories that look like real news.", "fake news"],
  ["Where information comes from.", "source"],
  ["Interesting or important enough to be in the news.", "newsworthy"],
  ["A talk where someone asks questions for the news.", "interview"],
  ["To check that something is true.", "verify"],
  ["TV, radio, newspapers and the internet.", "the media"]
 ],
 r: { t: "Is It Really News?", x: [
   "Every day, thousands of stories appear online. But which ones are really newsworthy? Journalists usually choose stories that are new, important or surprising.",
   "Unfortunately, it's easy to share fake news. Some headlines are written to make people click, even if the story isn't true.",
   "Before you share something, it's important to verify the source. Ask yourself: Who wrote it? Is it on other trusted websites? Does the headline match the story?"],
  q: [
   ["What kind of stories do journalists usually choose?", "new, important or surprising ones", ["only funny ones", "old ones", "short ones"]],
   ["Why are some headlines written?", "to make people click", ["to tell the truth", "to be short", "to sell newspapers only"]],
   ["What should you do before sharing a story?", "verify the source", ["share it fast", "change the headline", "add emojis"]]
  ] },
 l: [
  ["Girl: What did the reporter ask you? Boy: She asked me if I had seen the accident.", "What did the reporter ask?", "if he had seen the accident", ["where he lived", "his name", "if he was hurt"]],
  ["It's important to read more than one source before you believe a story.", "What is important?", "to read more than one source", ["to read headlines only", "to share quickly", "to watch TV"]],
  ["The headline says 'Student Wins National Science Prize'.", "What is the news about?", "a student who won a science prize", ["a science exam", "a new school", "a sports prize"]]
 ],
 w: { u: ["It's important to check the facts.", "She asked me where I lived.", "He asked if I was a journalist."],
  o: ["Write a short news story about something that happened at your school.", "Report three questions someone asked you this week."] },
 p: [
  [["news", "new", "few", "now"], 3, "ew = /uː/"],
  [["headline", "head", "bread", "heat"], 3, "short e"],
  [["fake", "make", "take", "fact"], 3, "long a"]
 ]
});
add("now-i-know-6", 9, {
 rm: "Order of adjectives: opinion – size – age – shape – color – origin – material: a <b>useful small new round black Chinese plastic</b> device. · Past Perfect: When we arrived, the lights <b>had</b> already <b>gone</b> out.",
 g: [
  ["They installed ___ solar panels.", "big new", ["new big", "big and new a", "news big"], "size before age."],
  ["It's a ___ wind turbine.", "huge white", ["white huge", "whitely huge", "white and huge a"], "size before color."],
  ["She bought a ___ lamp.", "beautiful old Mexican", ["Mexican old beautiful", "old beautiful Mexican", "beautiful Mexican old"], "opinion – age – origin."],
  ["When I got home, my brother ___ already charged the car.", "had", ["has", "have", "was"], "Past Perfect: had + past participle."],
  ["The power ___ gone out before the storm ended.", "had", ["has", "was", "did"], "had gone."],
  ["By 1900, Edison ___ invented the light bulb.", "had", ["has", "was", "have"], "Past Perfect for an earlier past."],
  ["We had never ___ a wind farm before our trip.", "seen", ["saw", "see", "seeing"], "had + past participle."],
  ["They ___ solar power before they moved to the city.", "had used", ["have used", "were use", "use"], "Past Perfect."]
 ],
 vd: [
  ["Energy from the sun.", "solar power"],
  ["A tall machine with blades that makes energy from wind.", "wind turbine"],
  ["Energy from water moving through a dam.", "hydroelectric power"],
  ["Energy that never runs out.", "renewable energy"],
  ["Coal, oil and gas.", "fossil fuels"],
  ["To fill a battery with electricity.", "charge"],
  ["A device that stores electricity.", "battery"],
  ["When there is no electricity.", "power outage"]
 ],
 r: { t: "The Day the Lights Went Out", x: [
   "Last winter, a huge storm hit our town. By eight o'clock, the power had gone out in every house. We didn't have lights, internet or heating.",
   "Luckily, our neighbor had installed big new solar panels and a battery the year before. She invited us to charge our phones at her house.",
   "After that night, my parents decided to use more renewable energy. Now we have solar panels too, and we waste less electricity."],
  q: [
   ["What happened by eight o'clock?", "The power had gone out.", ["The storm had stopped.", "They had gone to sleep.", "The neighbor had left."]],
   ["What had the neighbor installed?", "solar panels and a battery", ["a wind turbine", "a generator", "a new heater"]],
   ["What did the parents decide?", "to use more renewable energy", ["to move", "to buy candles", "to stop using phones"]]
  ] },
 l: [
  ["Boy: Had you ever seen a wind farm before? Girl: No, never. The turbines were enormous!", "How were the turbines?", "enormous", ["small", "broken", "old"]],
  ["Most of our electricity still comes from fossil fuels.", "Where does most of the electricity come from?", "fossil fuels", ["the sun", "the wind", "water"]],
  ["Don't forget to charge your battery before the trip.", "What should you charge?", "your battery", ["the car", "the lights", "the solar panel"]]
 ],
 w: { u: ["They have big new solar panels.", "The power had gone out.", "We had never seen a wind farm."],
  o: ["Describe a day without electricity. Use the Past Perfect.", "Which energy source is best for the future? Why?"] },
 p: [
  [["power", "tower", "flower", "lower"], 3, "ow = /aʊ/"],
  [["solar", "soldier", "so", "solid"], 3, "long o"],
  [["energy", "general", "giant", "go"], 3, "soft g"]
 ]
});
add("now-i-know-6", 10, {
 rm: "<b>used to</b> (past habits): I <b>used to</b> be afraid of the dark. · Did you <b>use to</b>…? · I <b>didn't use to</b>… · <b>I wish</b> + past (wish about now): I wish I <b>were</b> braver. I wish I <b>could</b> fly.",
 g: [
  ["When I was little, I ___ to be afraid of dogs.", "used", ["use", "uses", "using"], "used to + verb."],
  ["Did you ___ to watch superhero cartoons?", "use", ["used", "uses", "using"], "Did + use to."],
  ["She ___ use to like sports, but now she loves them.", "didn't", ["doesn't", "wasn't", "don't"], "didn't use to."],
  ["I wish I ___ a superpower.", "had", ["have", "will have", "having"], "wish + past."],
  ["He wishes he ___ taller.", "were", ["is", "will be", "be"], "wish + were."],
  ["I wish I ___ swim like a fish!", "could", ["can", "will", "may"], "wish + could."],
  ["Firefighters ___ to use buckets of water.", "used", ["use", "were", "had"], "used to."],
  ["We wish we ___ help the people after the earthquake.", "could", ["can", "will", "did can"], "wish + could."]
 ],
 vd: [
  ["Showing no fear in danger.", "brave"],
  ["Doing good things for others without asking for anything.", "selfless"],
  ["A sudden dangerous situation that needs action.", "emergency"],
  ["To save someone from danger.", "rescue"],
  ["Someone who works without being paid to help.", "volunteer"],
  ["A person who stops fires.", "firefighter"],
  ["A person trained to give medical help in emergencies.", "paramedic"],
  ["When the ground shakes very strongly.", "earthquake"]
 ],
 r: { t: "Everyday Heroes", x: [
   "When we think of heroes, we often think of superheroes in movies. But real heroes are people who help others, often without wanting attention.",
   "In 2017, after a strong earthquake in Mexico City, thousands of volunteers worked day and night to rescue people. Rescue dogs like Frida became famous.",
   "Many of the volunteers used to be regular students and workers. They didn't have special powers, but they were brave and selfless."],
  q: [
   ["What are real heroes, according to the text?", "people who help others", ["people with superpowers", "famous actors", "rich people"]],
   ["What happened in 2017?", "a strong earthquake in Mexico City", ["a hurricane", "a flood", "a fire"]],
   ["Who was Frida?", "a rescue dog", ["a firefighter", "a student", "a doctor"]]
  ] },
 l: [
  ["Girl: Did you use to want to be a superhero? Boy: Yes! I used to wear a cape every day.", "What did the boy use to wear?", "a cape", ["a mask", "a helmet", "a uniform"]],
  ["I wish I could help more people, so I'm training to be a paramedic.", "What is she training to be?", "a paramedic", ["a firefighter", "a doctor", "a police officer"]],
  ["In an emergency, call 911 and stay calm.", "What should you do in an emergency?", "call 911 and stay calm", ["run", "shout", "call a friend"]]
 ],
 w: { u: ["I used to be afraid of the dark.", "I wish I could fly.", "She didn't use to like sports."],
  o: ["Who is a real hero for you? Why?", "Write three things you used to do and three wishes."] },
 p: [
  [["brave", "save", "safe", "have"], 3, "long a"],
  [["hero", "here", "hear", "her"], 3, "ear / ere"],
  [["rescue", "risk", "run", "wet"], 3, "r"]
 ]
});
add("now-i-know-6", 11, {
 rm: "<b>so</b> + adjective + <b>that</b>: The robot was <b>so</b> fast <b>that</b> I couldn't see it. · <b>such a</b> + adjective + noun + <b>that</b>: It was <b>such a</b> smart drone <b>that</b> it flew alone. · Reported speech with Past Perfect: \"I <b>built</b> a robot.\" → He said he <b>had built</b> a robot.",
 g: [
  ["The drone was ___ small that it fit in my hand.", "so", ["such", "such a", "too"], "so + adjective + that."],
  ["It was ___ amazing invention that everyone wanted one.", "such an", ["so", "such", "so an"], "such a / an + adjective + noun."],
  ["The app is ___ useful that I use it every day.", "so", ["such", "such a", "very that"], "so + adjective."],
  ["They are ___ clever robots that they can talk.", "such", ["so", "such a", "so a"], "such + adjective + plural noun."],
  ["\"I built a robot.\" → He said he ___ a robot.", "had built", ["has built", "builds", "build"], "Past Simple → Past Perfect."],
  ["\"We finished the project.\" → They said they ___ the project.", "had finished", ["have finished", "finish", "finishing"], "Past → Past Perfect."],
  ["\"I've used VR before.\" → She said she ___ VR before.", "had used", ["has used", "used to", "uses"], "Present Perfect → Past Perfect."],
  ["It was ___ a long video that I fell asleep.", "such", ["so", "very", "too"], "such a long video."]
 ],
 vd: [
  ["A small flying machine controlled from far away.", "drone"],
  ["A computer program that can think and learn.", "artificial intelligence"],
  ["A headset that puts you in a digital world.", "virtual reality"],
  ["A new idea or invention.", "innovation"],
  ["A program you use on a phone.", "app"],
  ["A machine that can do tasks automatically.", "robot"],
  ["A small electronic machine, like a phone or tablet.", "device"],
  ["To control a machine to do things automatically.", "program"]
 ],
 r: { t: "Robots That Help", x: [
   "Robots aren't just in science fiction movies anymore. In some hospitals, robots deliver medicine to patients. They are so precise that they rarely make mistakes.",
   "Drones are also helping people. In remote areas, drones carry vaccines to villages that are difficult to reach.",
   "Last year, a team of Mexican students built such a smart robot that it won an international prize. They said they had worked on it for two years."],
  q: [
   ["What do robots do in some hospitals?", "deliver medicine", ["perform all surgeries", "cook food", "clean streets"]],
   ["What do drones carry to remote villages?", "vaccines", ["food", "letters", "phones"]],
   ["How long had the students worked on their robot?", "two years", ["two months", "one week", "five years"]]
  ] },
 l: [
  ["Boy: Have you tried virtual reality? Girl: Yes! It was so real that I felt dizzy.", "How did the girl feel?", "dizzy", ["bored", "scared", "sleepy"]],
  ["The teacher said we had done a great job on the robot project.", "What did the teacher say?", "They had done a great job.", ["They had to start again.", "The robot didn't work.", "They were late."]],
  ["This app uses artificial intelligence to translate languages.", "What does the app do?", "translate languages", ["play music", "take photos", "send money"]]
 ],
 w: { u: ["The drone was so fast that I couldn't see it.", "It was such a smart robot.", "He said he had built an app."],
  o: ["Describe a technology that improves our lives. Use so … that.", "Invent a robot. What does it do?"] },
 p: [
  [["drone", "phone", "robot", "dog"], 3, "long o"],
  [["device", "nice", "rice", "deliver"], 3, "long i"],
  [["tech", "school", "chemistry", "child"], 3, "ch = /k/"]
 ]
});
add("now-i-know-6", 12, {
 rm: "<b>I'd like to</b> study medicine. · Advice: <b>If I were you, I would</b> talk to a counselor. · <b>You could</b> try an internship. · <b>I hope (that)</b> you find your passion.",
 g: [
  ["I'd ___ to be an engineer.", "like", ["likes", "liked", "liking"], "I'd like to."],
  ["If I ___ you, I would study more.", "were", ["am", "was being", "will be"], "If I were you…"],
  ["If I were you, I ___ talk to your teacher.", "would", ["will", "am", "did"], "would + verb."],
  ["You ___ try volunteering at the hospital.", "could", ["would to", "can to", "will"], "You could = suggestion."],
  ["I hope ___ you get the scholarship.", "that", ["what", "which", "to"], "I hope (that)…"],
  ["What would you like ___ in the future?", "to do", ["doing", "do", "did"], "like to + verb."],
  ["If I were you, I ___ worry so much.", "wouldn't", ["won't", "don't", "didn't"], "wouldn't = advice not to."],
  ["She'd like ___ abroad after high school.", "to study", ["studying", "study", "studied"], "would like to."]
 ],
 vd: [
  ["Something you love doing very much.", "passion"],
  ["Money to help you pay for school.", "scholarship"],
  ["Temporary work to get experience.", "internship"],
  ["A person who gives students advice about their future.", "counselor"],
  ["Something you want to achieve.", "goal"],
  ["Believing in yourself.", "self-confident"],
  ["Able to wait calmly.", "patient"],
  ["Working hard and carefully.", "hard-working"]
 ],
 r: { t: "Choosing Your Path", x: [
   "Many teenagers don't know what they want to do in the future, and that's OK. The first step is to discover your passions and your strengths.",
   "Experts say it's useful to try different activities: volunteering, clubs, sports or internships. You could also talk to people who have jobs you find interesting.",
   "If I were you, I would make a list of goals — big and small. And remember: being hard-working and patient is just as important as being talented."],
  q: [
   ["What is the first step?", "to discover your passions and strengths", ["to choose a university", "to get a job", "to make money"]],
   ["What do experts recommend?", "trying different activities", ["choosing quickly", "studying only", "doing nothing"]],
   ["What is as important as talent?", "being hard-working and patient", ["being famous", "being rich", "being lucky"]]
  ] },
 l: [
  ["Girl: I don't know what to study. Boy: If I were you, I'd talk to the school counselor.", "What does the boy suggest?", "talk to the school counselor", ["study medicine", "take a year off", "ask her parents"]],
  ["I'd like to work with animals, so I'm volunteering at a shelter.", "Where is she volunteering?", "at an animal shelter", ["at a hospital", "at a school", "at a zoo"]],
  ["I hope that you win the scholarship. You deserve it!", "What does she hope?", "that he wins the scholarship", ["that he finds a job", "that he passes the test", "that he travels"]]
 ],
 w: { u: ["I'd like to be a doctor.", "If I were you, I would study more.", "You could try an internship."],
  o: ["What would you like to do in the future? Why?", "A friend doesn't know what to study. Write advice with If I were you…"] },
 p: [
  [["goal", "go", "gold", "god"], 3, "long o"],
  [["passion", "station", "nation", "pass"], 3, "-tion / -sion = /ʃən/"],
  [["patient", "special", "social", "past"], 3, "ti / ci = /ʃ/"]
 ]
});
})();
