/* MOVA · Now I Know! 3 (Pearson): temario completo y banco de preguntas de las unidades 1 y 2.
   Se carga después de mova-libros.js y libros-quiz.js. Temario tomado del Scope and Sequence oficial de Pearson (Level 3). */
(function () {
  var BK = window.MOVA_BOOKS = window.MOVA_BOOKS || {};
  BK["now-i-know-3"] = { name: "Now I Know! 3", units: [
    { n: 1,  t: "How Do We Find Our Way?",            g: ["Imperatives with please", "Present Simple questions with time phrases (every day, usually, on Saturday)", "Present Progressive questions with time phrases (today, at the moment)"], v: ["Places and directions in a city: below, above, beside, close to, square, downtown, sign, cross", "recreation center, art gallery, bridge, harbor, museum, theater, up, down, along, around"] },
    { n: 2,  t: "How Do We Know About The Past?",     g: ["Adjectives and adverbs of manner (quick → quickly)", "have to (affirmative, negative, questions and answers)"], v: ["Dinosaurs: herbivore, carnivore, horn, tail, extinct", "Ancient Egypt: pharaoh, bury, archeologist, treasure, thieves, dig, exhibit, gold, tomb"] },
    { n: 3,  t: "Why Do We Go On Vacation?",          g: ["Past Simple regular and irregular verbs (affirmative, negative)", "Past Simple questions, answers and Wh- questions"], v: ["Camping: campsite, blanket, sleeping bag, flashlight, compass, set up a tent", "Adventure activities: go zip lining, go rock climbing, go kayaking"] },
    { n: 4,  t: "Why Do We Tell Stories?",            g: ["Past Simple irregular verbs (affirmative and questions)", "Past Simple Wh- questions and answers"], v: ["Fairy tales: giant, castle, coin, prince, princess, enormous, furious", "Myths and legends: king, queen, hero, fierce, search, hide"] },
    { n: 5,  t: "Why Take Care Of The Environment?",  g: ["Comparative adjectives (regular and irregular)", "Superlative adjectives (regular and irregular)"], v: ["Nature: fresh air, insect, habitat, wildlife, rescue, throw away", "Energy: breathe, lungs, burn, coal, fossil fuel, electricity, power plant"] },
    { n: 6,  t: "Why Do We Use Numbers Every Day?",   g: ["Quantity nouns: a pack of, a pair of, a piece of, a box of, a bag of, a bar of", "Telling the time: o'clock, thirty, a quarter after, a quarter to"], v: ["Shopping: gift, stall, money, expensive, cheap, choose, pay", "Time: quarter, half, hour, minute, second, century, decade"] },
    { n: 7,  t: "What Do We Do For Entertainment?",   g: ["Adjectives with prepositions: interested in, afraid of, bored with, worried about", "Comparatives and superlatives with long adjectives"], v: ["Free time: chess, band, musician, magazine, headphones, hang out", "Instruments: cello, drum, clarinet, saxophone, trombone, trumpet"] },
    { n: 8,  t: "Why Is Space Interesting?",          g: ["-ed and -ing adjectives (It's interesting. / I'm interested.)", "How often…? once a day, twice, three times, every 20 minutes"], v: ["Feelings and story words: bright, worried, frightened, in a hurry, rude", "Space: space station, rocket, scientist, float, orbit, telescope, planet, spacesuit"] },
    { n: 9,  t: "How Are Homes Different?",           g: ["would like to / wouldn't like to; possessive 's and of", "Ordinal numbers; Wh- questions review"], v: ["Parts of a house: roof, balcony, attic, view, wood, stone, steep, flat", "Building materials: concrete, bricks, metal, plastic, stairs, elevator, basement"] },
    { n: 10, t: "How Do We Take Care Of Our Body?",   g: ["What's the matter? I have a… / My … hurts; have to", "should / shouldn't for advice; someone, everyone, something, everything"], v: ["Illness: stomach, back, neck, shoulder, fever, bandage, take medicine, rest", "The body: muscles, skin, brain, heart, cold, cough, sneeze, vaccination"] },
    { n: 11, t: "Why Is Antarctica Special?",         g: ["Countable and uncountable nouns", "Order of adjectives"], v: ["Antarctica: South Pole, penguin, expedition, temperature, degrees, continent, freezing", "Animals: fur, octopus, hunt, krill, feather, migrate, waterproof"] },
    { n: 12, t: "Why Do We Have Festivals?",          g: ["Future Simple: will / won't", "Future Simple questions and Wh- questions"], v: ["Festivals: lantern, parade, emperor, village, costume, fireworks", "Celebrations: cathedral, bell, get married, water fight, have a day off"] }
  ] };
  var D = window.MOVA_BOOK_DEFAULTS = window.MOVA_BOOK_DEFAULTS || {};
  D["fernando uresti"] = "now-i-know-3";

  var B = window.MOVA_BQ = window.MOVA_BQ || {};
  B["now-i-know-3"] = {
 1: {
  rm: "Directions: <b>Go</b> straight. <b>Turn</b> left. <b>Cross</b> the bridge, <b>please</b>. · Habits: <b>Do</b> you <b>usually</b> go to the museum <b>on Saturday</b>? · Now: <b>Are</b> you <b>walking</b> downtown <b>at the moment</b>?",
  g: [
   ["___ the street at the traffic light, please.", "Cross", ["Crosses", "Crossing", "To crossing"], "Instructions use the base verb: Cross."],
   ["Please ___ run near the harbor. It's dangerous.", "don't", ["doesn't", "not", "no"], "Negative instructions: Don't + verb."],
   ["___ you usually go to the recreation center on Saturdays?", "Do", ["Does", "Are", "Is"], "Present Simple question with you: Do you…?"],
   ["How often ___ your sister visit the art gallery?", "does", ["do", "is", "are"], "With he / she: does … visit?"],
   ["What ___ you doing at the moment? — I'm reading the map.", "are", ["do", "does", "is"], "Present Progressive: What are you doing?"],
   ["___ Tom walking along the river today?", "Is", ["Does", "Do", "Are"], "Present Progressive with he: Is Tom walking…?"],
   ["We ___ the bus to school every day.", "take", ["takes", "are taking", "taking"], "every day = habit → Present Simple."],
   ["Look! The boys ___ across the bridge right now.", "are running", ["run", "runs", "is running"], "right now = Present Progressive."]
  ],
  vd: [
   ["A big open space in a city, often with a fountain.", "square"],
   ["The center of a city, with shops and offices.", "downtown"],
   ["A drawing that shows streets and places.", "map"],
   ["You walk over it to cross a river.", "bridge"],
   ["A place where boats and ships stay.", "harbor"],
   ["A place where you can see paintings.", "art gallery"],
   ["A place where you watch plays and shows.", "theater"],
   ["A place with old and interesting things to see.", "museum"],
   ["Next to something.", "beside"],
   ["In a higher position than something.", "above"]
  ],
  r: { t: "Lost Downtown", x: [
    "Sam is visiting his cousin Ella in a new city. Today they are walking downtown. Ella usually goes to the art gallery on Saturdays, but today they want to see the old museum.",
    "\"Where are we?\" asks Sam. Ella looks at the map. \"We're in the square, beside the big fountain. The museum is close to the harbor.\"",
    "They walk along the river and cross a bridge. Above them, a sign says MUSEUM 200 m. \"Turn left, please,\" says Ella. Five minutes later, they are at the museum door."],
   q: [
    ["Where does Ella usually go on Saturdays?", "to the art gallery", ["to the museum", "to the harbor", "to the theater"]],
    ["Where is the museum?", "close to the harbor", ["beside the fountain", "in the square", "below the bridge"]],
    ["What do they do before they see the sign?", "They cross a bridge.", ["They take a bus.", "They go to the theater.", "They get lost."]]
   ] },
  l: [
   ["Go straight and turn right at the bank. The theater is next to the café.", "Where is the theater?", "next to the café", ["next to the bank", "across the bridge", "below the café"]],
   ["Boy: What are you doing? Girl: I'm looking for the recreation center. Is it up this street?", "What is the girl looking for?", "the recreation center", ["the museum", "the harbor", "the art gallery"]],
   ["I go to the museum with my grandpa every Sunday. We love the dinosaur room.", "When does he go to the museum?", "every Sunday", ["every Saturday", "today", "at the moment"]],
   ["Please cross the street carefully. Stop at the sign, look left and right, then walk.", "Where do you stop?", "at the sign", ["at the bridge", "at the square", "at the harbor"]]
  ],
  w: { u: ["Turn left at the museum, please.", "Do you usually walk to school?", "What are you doing at the moment?"],
   o: ["Write directions from your house to your school. Use go straight, turn left / right and cross.", "Write about a place in your city: where it is and what you do there."] },
  p: [
   [["map", "cat", "square", "bag"], 2, "a as in map"],
   [["up", "bus", "museum", "sun"], 2, "u as in up"],
   [["sign", "ride", "light", "bridge"], 3, "i as in sign"]
  ]
 },
 2: {
  rm: "Adjective → adverb: quick → <b>quickly</b>, careful → <b>carefully</b>, loud → <b>loudly</b>, good → <b>well</b>. · <b>have to</b>: I <b>have to</b> dig carefully. She <b>has to</b> study. We <b>don't have to</b> run. <b>Do</b> you <b>have to</b> wear a helmet?",
  g: [
   ["The T-rex ran very ___.", "quickly", ["quick", "quicker", "quickness"], "To describe how an action happens we use an adverb: quickly."],
   ["Archeologists dig ___ so they don't break the bones.", "carefully", ["careful", "care", "carefuly"], "careful → carefully."],
   ["The dinosaur had a ___ roar.", "loud", ["loudly", "louder", "loudy"], "Before a noun we use an adjective: a loud roar."],
   ["She paints very ___.", "well", ["good", "goodly", "nice"], "The adverb of good is well."],
   ["You ___ to wear a helmet in the tomb.", "have", ["has", "having", "haves"], "With you: have to."],
   ["My brother ___ to study for his history test.", "has", ["have", "is", "does"], "With he / she: has to."],
   ["We ___ have to pay. The museum is free today.", "don't", ["doesn't", "aren't", "not"], "Negative with we: don't have to."],
   ["___ she have to wake up early tomorrow?", "Does", ["Do", "Has", "Is"], "Question with she: Does she have to…?"]
  ],
  vd: [
   ["A dinosaur that only eats plants.", "herbivore"],
   ["A dinosaur that eats meat.", "carnivore"],
   ["When an animal does not exist anymore.", "extinct"],
   ["A hard, pointed thing on an animal's head.", "horn"],
   ["The long part at the end of an animal's body.", "tail"],
   ["A king of ancient Egypt.", "pharaoh"],
   ["A person who studies old things from the past.", "archeologist"],
   ["Gold, money and jewels that are very valuable.", "treasure"],
   ["People who steal things.", "thieves"],
   ["A room or building where a dead person is buried.", "tomb"]
  ],
  r: { t: "The Pharaoh's Tomb", x: [
    "Dr. Lane is an archeologist. Every day she has to dig slowly and carefully in the hot desert of Egypt.",
    "One morning her team found steps under the sand. The steps went down to an old tomb. Inside, there was treasure: gold masks, boxes and jewels from a pharaoh.",
    "Thieves took many treasures from tombs a long time ago, but they didn't find this one. Now the treasure is in a museum exhibit, and visitors don't have to travel to Egypt to see it."],
   q: [
    ["How does Dr. Lane have to dig?", "slowly and carefully", ["quickly and loudly", "fast and noisily", "with a machine"]],
    ["What did the team find under the sand?", "steps", ["a dinosaur", "a river", "a bridge"]],
    ["Where is the treasure now?", "in a museum exhibit", ["in the tomb", "with the thieves", "under the sand"]]
   ] },
  l: [
   ["The Triceratops was a herbivore. It had three horns and it ate plants.", "What did the Triceratops eat?", "plants", ["meat", "fish", "insects"]],
   ["Girl: Do we have to wear gloves? Teacher: Yes, you do. You have to touch the fossils carefully.", "What do they have to wear?", "gloves", ["helmets", "hats", "boots"]],
   ["The T-rex was a carnivore. It was big and it could run quickly.", "What was the T-rex?", "a carnivore", ["a herbivore", "a pharaoh", "an archeologist"]],
   ["In the museum you don't have to pay on Sundays. Entrance is free!", "When is the museum free?", "on Sundays", ["on Saturdays", "every day", "on Mondays"]]
  ],
  w: { u: ["Archeologists dig very carefully.", "Do you have to wear a uniform?", "The dinosaur walked slowly."],
   o: ["Write three things you have to do and two things you don't have to do on weekdays.", "Describe your favorite dinosaur. Use adjectives and adverbs (big, quickly, loud)."] },
  p: [
   [["bone", "home", "horn", "stone"], 2, "o as in bone"],
   [["tail", "steps", "gray", "rain"], 1, "ai as in tail"],
   [["horn", "tomb", "for", "short"], 1, "or as in horn"]
  ]
 }
  };
})();
