/* =====================================================================
   MOVA Learning Studio — PLUS (octubre 2026)
   Etapas MOVA en la biblioteca, sección Learn (Structures y Flashcards),
   más hojas de Print & Learn por tema y juegos nuevos.
   Este archivo se carga después de index.html y amplía la app.
   ===================================================================== */
(function () {
"use strict";

/* ---------- Etapas MOVA ---------- */
const STAGES = [
  { id: "kids", name: "MOVA Kids", ages: "6 a 8 años", c: "coral" },
  { id: "children", name: "MOVA Children", ages: "9 a 12 años", c: "sky" },
  { id: "teens", name: "MOVA Teens", ages: "12 a 17 años", c: "mint" }
];
const STAGE_OF = {
  "my-cat-pip": "kids", "day-at-the-park": "kids",
  "lilas-busy-monday": "children", "the-school-garden": "children", "the-lost-backpack": "children",
  "weekend-in-the-mountains": "teens", "why-bees-matter": "teens", "small-steps-big-changes": "teens"
};

/* ---------- Lecturas nuevas ---------- */
READINGS.push(
  {
    id: "bens-rainy-day", level: "A1", stage: "kids", topic: "Weather", title: "Ben’s Rainy Day",
    description: "It is raining, so Ben and his sister play at home. What do they do?",
    text: [
      "Today it is raining. Ben looks out of the window. The sky is gray and the street is wet.",
      "“I can’t play in the park,” says Ben. He is a little sad.",
      "His sister Mia has an idea. “Let’s build a house with blankets!” They put two chairs and three blankets in the living room. It is a big, warm house.",
      "Mom gives them cookies and a flashlight. Ben and Mia read a book inside their blanket house.",
      "In the afternoon, the rain stops. There is a rainbow in the sky! Ben is happy now."
    ],
    vocab: [["rain", "water that falls from the sky"], ["wet", "with water on it"], ["blanket", "a soft cover for your bed"], ["flashlight", "a small light you hold in your hand"], ["rainbow", "colors in the sky after the rain"]],
    questions: [
      ["What is the weather like today?", ["It is raining.", "It is sunny.", "It is snowing."]],
      ["How does Ben feel at first?", ["a little sad", "very angry", "sleepy"]],
      ["What do Ben and Mia build?", ["a house with blankets", "a big sandcastle", "a paper boat"]],
      ["What does Mom give them?", ["cookies and a flashlight", "a pizza", "a new game"]],
      ["What is in the sky in the afternoon?", ["a rainbow", "a plane", "the moon"]]
    ]
  },
  {
    id: "new-school-new-friends", level: "A1", stage: "teens", topic: "School", title: "New School, New Friends",
    description: "Valeria starts secondary school in a new city and feels nervous on day one.",
    text: [
      "Valeria is thirteen. Her family moved to Monterrey in July, so this year she is at a new school. On the first day, she feels nervous. She doesn’t know anyone.",
      "In her first class, the teacher asks the students to work in pairs. Valeria works with a boy called Andrés. He likes video games and music, like her. They laugh a lot.",
      "At lunch, Andrés introduces her to his friends, Sofía and Pablo. Sofía is in the school volleyball team. “You can come to practice on Thursday,” she says.",
      "At home, Valeria’s mom asks, “How was your day?” Valeria smiles. “Better than I expected. I have three new friends.”"
    ],
    vocab: [["move", "to go and live in a different place"], ["nervous", "a little worried or afraid"], ["pair", "two people together"], ["introduce", "to tell someone the name of another person"], ["expect", "to think that something will happen"]],
    questions: [
      ["Why is Valeria at a new school?", ["Her family moved to Monterrey.", "She didn’t like her old school.", "Her friends are there."]],
      ["How does she feel on the first day?", ["nervous", "bored", "angry"]],
      ["What does Andrés like?", ["video games and music", "volleyball and art", "math and science"]],
      ["What does Sofía invite her to do?", ["come to volleyball practice", "go to a concert", "study for a test"]],
      ["How was Valeria’s day in the end?", ["better than she expected", "very boring", "terrible"]]
    ]
  }
);
READINGS.forEach((r) => { if (!r.stage) r.stage = STAGE_OF[r.id] || "children"; });

READING_ART["bens-rainy-day"] = scene("#DBE9F5", `
  <path d="M0 120q40-30 80 0t80 0 80 0 80 0V180H0z" fill="#C3D3E4"/>
  ${[[40, 30], [70, 60], [110, 25], [150, 55], [200, 30], [240, 60], [280, 28]].map(([x, y]) => `<path d="M${x} ${y}q-4 8 0 12q4-4 0-12z" fill="#6FA8D6"/>`).join("")}
  <path d="M60 150 110 104 160 150z" fill="#E8846B"/><path d="M110 104 160 150h40l-50-46z" fill="#E0B04A"/>
  <rect x="100" y="128" width="20" height="22" rx="10" fill="#1E3A5F"/>
  <path d="M210 92a50 50 0 0 1 100 0" stroke="#E8846B" stroke-width="7" fill="none"/><path d="M220 92a40 40 0 0 1 80 0" stroke="#E0B04A" stroke-width="7" fill="none"/><path d="M230 92a30 30 0 0 1 60 0" stroke="#7FB89E" stroke-width="7" fill="none"/>`);
READING_ART["new-school-new-friends"] = scene("#DDEEE5", `
  <rect x="60" y="54" width="200" height="96" rx="6" fill="#FFFDFA"/><path d="M50 58 160 20 270 58z" fill="#1E3A5F"/>
  ${[80, 120, 180, 220].map((x) => `<rect x="${x}" y="72" width="22" height="22" rx="3" fill="#BCD8EF"/>`).join("")}
  <rect x="146" y="108" width="28" height="42" rx="3" fill="#E0B04A"/>
  <rect x="0" y="150" width="320" height="30" fill="#9FCBB5"/>
  ${[[100, "#E8846B"], [130, "#6FA8D6"], [196, "#F2A08A"], [226, "#5E9E82"]].map(([x, c]) => `<circle cx="${x}" cy="140" r="8" fill="#F1C7A5"/><rect x="${x - 8}" y="148" width="16" height="22" rx="7" fill="${c}"/>`).join("")}`);

/* ---------- Structures (explicaciones de gramática) ---------- */
const STRUCTURES = [
  {
    id: "present-simple", title: "Present Simple", level: "A1", c: "sky",
    summary: "Para hábitos, rutinas y cosas que siempre son verdad.",
    uses: ["Rutinas y hábitos: I brush my teeth every morning.", "Hechos y verdades generales: Water boils at 100 °C.", "Gustos y preferencias: She likes pizza."],
    forms: [["Afirmativa", "Sujeto + verbo (+s / es con he, she, it)", "He plays soccer."], ["Negativa", "Sujeto + don’t / doesn’t + verbo", "He doesn’t play soccer."], ["Pregunta", "Do / Does + sujeto + verbo?", "Does he play soccer?"]],
    examples: ["I live in Monterrey.", "My mom works at a school.", "We don’t watch TV in the morning.", "Do you speak English?"],
    keywords: ["every day", "always", "usually", "on Mondays", "at night"],
    tip: "Con he, she e it el verbo lleva -s: she plays, he watches. Pero después de doesn’t el verbo regresa a su forma base: she doesn’t play (no “doesn’t plays”).",
    check: [["My brother ___ to school by bus.", ["goes", "go", "going"]], ["They ___ like vegetables.", ["don’t", "doesn’t", "aren’t"]], ["___ your dad cook?", ["Does", "Do", "Is"]]],
    related: [["#/resources/present-simple-routines", "Hoja: Present Simple, Daily Routines"], ["#/resources/adverbs-of-frequency", "Hoja: Adverbs of Frequency"], ["juego-sentence-builder.html", "Juego: Sentence Builder"]]
  },
  {
    id: "present-continuous", title: "Present Continuous", level: "A1", c: "mint",
    summary: "Para lo que está pasando en este momento.",
    uses: ["Acciones en este momento: I am reading now.", "Situaciones temporales: She is living with her grandma this month.", "Planes ya organizados: We are visiting Mexico City next week."],
    forms: [["Afirmativa", "Sujeto + am / is / are + verbo-ing", "She is dancing."], ["Negativa", "Sujeto + am / is / are + not + verbo-ing", "She isn’t dancing."], ["Pregunta", "Am / Is / Are + sujeto + verbo-ing?", "Is she dancing?"]],
    examples: ["The baby is sleeping.", "We are learning English.", "They aren’t playing outside.", "What are you doing?"],
    keywords: ["now", "right now", "at the moment", "Look!", "Listen!"],
    tip: "No se usa con verbos de estado como like, know, want o need: I want a cookie (no “I am wanting”).",
    check: [["Look! The dog ___ the ball.", ["is chasing", "chases", "chasing"]], ["I ___ watching TV right now.", ["am not", "don’t", "isn’t"]], ["___ you listening to me?", ["Are", "Do", "Is"]]],
    related: [["#/resources/present-continuous-now", "Hoja: Present Continuous, Right Now"], ["#/resources/spelling-ing-rules", "Hoja: Spelling Rules, Adding -ing"], ["juego-sentence-builder.html", "Juego: Sentence Builder"]]
  },
  {
    id: "past-simple", title: "Past Simple", level: "A2", c: "mustard",
    summary: "Para acciones terminadas en un momento del pasado.",
    uses: ["Acciones terminadas: I visited my grandma yesterday.", "Series de acciones en una historia: He opened the door, looked around and left.", "Hábitos del pasado: We played outside every afternoon."],
    forms: [["Afirmativa", "Sujeto + verbo en pasado (-ed o irregular)", "She watched a movie. / She went home."], ["Negativa", "Sujeto + didn’t + verbo base", "She didn’t go home."], ["Pregunta", "Did + sujeto + verbo base?", "Did she go home?"]],
    examples: ["We traveled to Saltillo last summer.", "I ate tacos for dinner.", "He didn’t finish his homework.", "Did you see the game?"],
    keywords: ["yesterday", "last week", "two days ago", "in 2020", "when I was a child"],
    tip: "Después de didn’t el verbo va en forma base: I didn’t go (no “didn’t went”).",
    check: [["Yesterday we ___ to the museum.", ["went", "go", "goed"]], ["She ___ call me last night.", ["didn’t", "doesn’t", "wasn’t"]], ["Did you ___ the movie?", ["like", "liked", "likes"]]],
    related: [["#/resources/past-simple-weekend", "Hoja: Past Simple, My Weekend"], ["juego-verb-memory.html", "Juego: Verb Memory (verbos irregulares)"], ["#/resources/write-about-your-weekend", "Hoja: Write About Your Weekend"]]
  },
  {
    id: "past-continuous", title: "Past Continuous", level: "A2", c: "coral",
    summary: "Para lo que estaba pasando en un momento del pasado.",
    uses: ["Una acción en progreso en el pasado: At 8 p.m. I was having dinner.", "Una acción larga interrumpida por otra corta: I was walking home when it started to rain.", "Dos acciones al mismo tiempo: She was cooking while he was cleaning."],
    forms: [["Afirmativa", "Sujeto + was / were + verbo-ing", "They were playing."], ["Negativa", "Sujeto + wasn’t / weren’t + verbo-ing", "They weren’t playing."], ["Pregunta", "Was / Were + sujeto + verbo-ing?", "Were they playing?"]],
    examples: ["I was sleeping when you called.", "We were watching a movie at nine.", "It wasn’t raining in the morning.", "What were you doing?"],
    keywords: ["while", "when", "at 7 o’clock yesterday", "all morning"],
    tip: "Usa was con I, he, she, it y were con you, we, they. La acción larga va en Past Continuous y la corta en Past Simple.",
    check: [["I ___ reading when the phone rang.", ["was", "were", "did"]], ["They ___ playing soccer at 5 p.m.", ["were", "was", "are"]], ["She was cooking ___ he was cleaning.", ["while", "when", "because"]]],
    related: [["#/resources/past-continuous-when-while", "Hoja: Past Continuous, When and While"], ["#/structures/past-simple", "Estructura: Past Simple"]]
  },
  {
    id: "present-perfect", title: "Present Perfect", level: "B1", c: "sky",
    summary: "Para experiencias y acciones que conectan el pasado con el presente.",
    uses: ["Experiencias de vida (sin decir cuándo): I have visited Cancún.", "Acciones que empezaron en el pasado y siguen: She has lived here for five years.", "Acciones recientes con resultado ahora: I have lost my keys."],
    forms: [["Afirmativa", "Sujeto + have / has + participio", "He has finished."], ["Negativa", "Sujeto + haven’t / hasn’t + participio", "He hasn’t finished."], ["Pregunta", "Have / Has + sujeto + participio?", "Has he finished?"]],
    examples: ["Have you ever eaten sushi?", "We have known each other since 2019.", "She hasn’t seen the movie yet.", "I have just arrived."],
    keywords: ["ever", "never", "already", "yet", "just", "for", "since"],
    tip: "For va con un periodo (for three years) y since con un punto de inicio (since 2020). Si dices cuándo pasó (yesterday, last year), usa Past Simple.",
    check: [["I ___ never been to Europe.", ["have", "has", "am"]], ["She has lived here ___ 2018.", ["since", "for", "ago"]], ["___ you ever tried mole?", ["Have", "Did", "Are"]]],
    related: [["#/resources/present-perfect-experiences", "Hoja: Present Perfect, Experiences"], ["juego-verb-memory.html", "Juego: Verb Memory (participios)"], ["juego-sentence-builder.html", "Juego: Sentence Builder"]]
  },
  {
    id: "past-perfect", title: "Past Perfect", level: "B1", c: "mint",
    summary: "Para una acción que pasó antes de otra acción en el pasado.",
    uses: ["La acción más antigua de dos en el pasado: When I arrived, the movie had started.", "Explicar causas en una historia: She was tired because she had worked all day."],
    forms: [["Afirmativa", "Sujeto + had + participio", "They had left."], ["Negativa", "Sujeto + hadn’t + participio", "They hadn’t left."], ["Pregunta", "Had + sujeto + participio?", "Had they left?"]],
    examples: ["The bus had left when we got to the stop.", "I had never seen snow before that trip.", "He was hungry because he hadn’t eaten breakfast.", "Had you finished your homework before dinner?"],
    keywords: ["before", "after", "by the time", "already", "when"],
    tip: "Piensa en una línea del tiempo: la acción que pasó primero va en Past Perfect (had + participio) y la segunda en Past Simple.",
    check: [["When we arrived, the class ___ started.", ["had", "has", "was"]], ["She was sad because she ___ her phone.", ["had lost", "has lost", "loses"]], ["By the time I woke up, my mom ___ to work.", ["had gone", "went", "has gone"]]],
    related: [["#/structures/present-perfect", "Estructura: Present Perfect"], ["juego-verb-memory.html", "Juego: Verb Memory (participios)"]]
  },
  {
    id: "future-will-going-to", title: "Future: will and going to", level: "A2", c: "mustard",
    summary: "Dos formas de hablar del futuro: decisiones del momento y planes.",
    uses: ["Going to: planes e intenciones ya decididas. I’m going to study medicine.", "Going to: predicciones con evidencia. Look at those clouds! It’s going to rain.", "Will: decisiones en el momento, promesas y predicciones. I’ll help you. I think you will pass."],
    forms: [["Going to", "am / is / are + going to + verbo", "We are going to travel."], ["Will", "will + verbo (negativa: won’t)", "I will call you. / I won’t forget."], ["Pregunta", "Are you going to…? / Will you…?", "Will you help me?"]],
    examples: ["I’m going to visit my cousins on Saturday.", "It’s cold. I’ll close the window.", "She won’t be late, I promise.", "Are you going to play tomorrow?"],
    keywords: ["tomorrow", "next week", "soon", "I think", "probably"],
    tip: "Si la decisión ya estaba tomada, usa going to. Si la tomas en ese momento, usa will.",
    check: [["The phone is ringing. I ___ answer it.", ["’ll", "am going to", "will to"]], ["We ___ going to visit Grandma on Sunday.", ["are", "will", "is"]], ["Look at the sky! It ___ rain.", ["is going to", "will to", "goes"]]],
    related: [["juego-sentence-builder.html", "Juego: Sentence Builder"]]
  },
  {
    id: "adverbs-of-frequency", title: "Adverbs of Frequency", level: "A1", c: "coral",
    summary: "Palabras que dicen qué tan seguido hacemos algo.",
    uses: ["always (100 %) · usually · often · sometimes · rarely · never (0 %)", "Van antes del verbo principal: I usually walk to school.", "Van después del verbo to be: She is always happy."],
    forms: [["Con verbos", "Sujeto + adverbio + verbo", "He often plays chess."], ["Con to be", "Sujeto + am / is / are + adverbio", "They are never late."], ["Pregunta", "How often + do / does + sujeto + verbo?", "How often do you exercise?"]],
    examples: ["I always eat breakfast.", "My sister sometimes reads comics.", "We are usually at home on Sundays.", "He never drinks coffee."],
    keywords: ["always", "usually", "often", "sometimes", "rarely", "never", "How often…?"],
    tip: "Never ya es negativo: I never eat fish (no “I don’t never eat fish”).",
    check: [["Choose the correct order:", ["She always drinks milk.", "She drinks always milk.", "Always she drinks milk."]], ["He is ___ late. He arrives on time every day.", ["never", "always", "usually"]], ["___ often do you play soccer?", ["How", "What", "When"]]],
    related: [["#/resources/adverbs-of-frequency", "Hoja: Adverbs of Frequency"], ["#/structures/present-simple", "Estructura: Present Simple"]]
  }
];

/* ---------- Hojas nuevas para Print & Learn ---------- */
RESOURCES.push(
  {
    id: "adverbs-of-frequency", category: "Grammar", type: "Printable worksheet", levels: ["A1", "A2"], ages: ["Ages 7–9", "Ages 10–12"],
    title: "Adverbs of Frequency", description: "How often? Order always, usually, sometimes and never, and place them in the sentence.",
    notes: "Dibuje en el pizarrón una barra de 0 % a 100 % y pida a los alumnos que coloquen cada adverbio. Recuerde que el adverbio va antes del verbo, pero después de to be.",
    sheet: { instructions: "Learn the rule. Then complete the exercises.", blocks: [
      { t: "rule", lines: ["always (100 %) → usually → often → sometimes → rarely → never (0 %)", "Before the main verb: I usually walk to school.", "After the verb to be: She is always happy."] },
      { t: "items", label: "Put the words in order.", list: ["always / I / breakfast / eat ___", "late / is / never / he ___", "sometimes / we / pizza / have ___", "usually / my dad / works / at home ___", "are / often / they / tired ___"] },
      { t: "table", label: "Write about you. How often do you…?", headers: ["Activity", "Adverb", "Sentence"], rows: [["play video games", "", ""], ["read books", "", ""], ["eat vegetables", "", ""], ["go to bed late", "", ""]] },
      { t: "key", list: ["I always eat breakfast.", "He is never late.", "We sometimes have pizza.", "My dad usually works at home.", "They are often tired.", "Table: open answers."] }
    ] }
  },
  {
    id: "present-continuous-now", category: "Grammar", type: "Printable worksheet", levels: ["A1"], ages: ["Ages 7–9", "Ages 10–12"],
    title: "Present Continuous: Right Now", description: "What is happening now? Practice am / is / are + -ing.",
    notes: "Puede actuar algunas acciones frente al grupo y preguntar “What am I doing?” antes de empezar la hoja.",
    sheet: { instructions: "Read the rule. Then complete the exercises.", blocks: [
      { t: "rule", lines: ["We use the present continuous for actions happening now.", "I am + verb-ing · He / She / It is + verb-ing · We / You / They are + verb-ing"] },
      { t: "items", label: "Complete with am, is or are and the -ing form.", list: ["My mom ___ (cook) dinner.", "The children ___ (play) in the garden.", "I ___ (write) a letter.", "The cat ___ (sleep) on the sofa.", "We ___ (watch) a movie."] },
      { t: "items", label: "Make questions.", list: ["you / listen / to music? ___", "she / read / a book? ___", "they / swim / in the pool? ___"] },
      { t: "key", list: ["is cooking, are playing, am writing, is sleeping, are watching", "Are you listening to music?", "Is she reading a book?", "Are they swimming in the pool?"] }
    ] }
  },
  {
    id: "past-simple-weekend", category: "Grammar", type: "Printable worksheet", levels: ["A2"], ages: ["Ages 10–12", "Ages 13+"],
    title: "Past Simple: My Weekend", description: "Regular and irregular verbs in the past, with negatives and questions.",
    notes: "Repase la pronunciación de -ed (/t/, /d/, /ɪd/). Puede usar el juego Verb Memory como calentamiento.",
    sheet: { instructions: "Learn the rule. Then write the past simple.", blocks: [
      { t: "rule", lines: ["Regular verbs: add -ed. play → played, study → studied, stop → stopped", "Irregular verbs change: go → went, eat → ate, see → saw", "Negative and questions: didn’t / Did + base verb."] },
      { t: "table", label: "Write the past simple.", headers: ["Verb", "Past", "Regular or irregular?"], rows: [["visit", "", ""], ["buy", "", ""], ["watch", "", ""], ["have", "", ""], ["cry", "", ""], ["make", "", ""]] },
      { t: "items", label: "Complete the story.", list: ["Last Saturday I ___ (go) to the park with my cousins.", "We ___ (play) soccer and ___ (eat) ice cream.", "My cousin ___ (not / bring) his ball, so we ___ (use) mine.", "___ you ___ (have) a good weekend?"] },
      { t: "key", list: ["visited (R), bought (I), watched (R), had (I), cried (R), made (I)", "went · played, ate · didn’t bring, used · Did, have"] }
    ] }
  },
  {
    id: "past-continuous-when-while", category: "Grammar", type: "Printable worksheet", levels: ["A2", "B1"], ages: ["Ages 10–12", "Ages 13+"],
    title: "Past Continuous: When and While", description: "Long actions and interruptions in the past.",
    notes: "Dibuje una línea del tiempo: una flecha larga (past continuous) y un rayo que la interrumpe (past simple).",
    sheet: { instructions: "Read the rule. Then complete the sentences.", blocks: [
      { t: "rule", lines: ["Past continuous: was / were + verb-ing (a long action).", "I was walking home when it started to rain.", "While + past continuous: While she was cooking, he was cleaning."] },
      { t: "items", label: "Past simple or past continuous?", list: ["I ___ (sleep) when the phone ___ (ring).", "They ___ (play) soccer when it ___ (start) to rain.", "While we ___ (watch) TV, the lights ___ (go) out.", "She ___ (read) when her friend ___ (arrive)."] },
      { t: "lines", label: "What were you doing yesterday at 7 p.m.? Write two sentences.", count: 3 },
      { t: "key", list: ["was sleeping, rang", "were playing, started", "were watching, went", "was reading, arrived"] }
    ] }
  },
  {
    id: "present-perfect-experiences", category: "Grammar", type: "Printable worksheet", levels: ["B1"], ages: ["Ages 13+"],
    title: "Present Perfect: Experiences", description: "Have you ever…? Experiences, for and since, already and yet.",
    notes: "Ideal para una actividad oral “Find someone who…” después de la hoja.",
    sheet: { instructions: "Learn the rule. Then complete the exercises.", blocks: [
      { t: "rule", lines: ["have / has + past participle: I have visited Mexico City.", "Ever / never for experiences: Have you ever eaten sushi?", "For + period (for two years) · Since + starting point (since 2020)."] },
      { t: "items", label: "Complete with the present perfect.", list: ["I ___ (never / see) the ocean.", "___ you ever ___ (ride) a horse?", "She ___ (already / finish) her project.", "We ___ (not / start) the movie yet."] },
      { t: "items", label: "For or since?", list: ["I have lived here ___ 2015.", "They have been friends ___ ten years.", "He has worked at the bank ___ March."] },
      { t: "key", list: ["have never seen, Have … ridden, has already finished, haven’t started", "since, for, since"] }
    ] }
  },
  {
    id: "comparatives-superlatives", category: "Grammar", type: "Printable worksheet", levels: ["A2"], ages: ["Ages 10–12", "Ages 13+"],
    title: "Comparatives and Superlatives", description: "Bigger, the biggest, more interesting: compare people, places and things.",
    notes: "Lleve tres objetos de distinto tamaño al salón y compárenlos en voz alta antes de la hoja.",
    sheet: { instructions: "Learn the rules. Then complete the table and sentences.", blocks: [
      { t: "rule", lines: ["Short adjectives: tall → taller → the tallest · big → bigger → the biggest · happy → happier → the happiest", "Long adjectives: interesting → more interesting → the most interesting", "Irregular: good → better → the best · bad → worse → the worst"] },
      { t: "table", label: "Complete the table.", headers: ["Adjective", "Comparative", "Superlative"], rows: [["fast", "", ""], ["hot", "", ""], ["easy", "", ""], ["beautiful", "", ""], ["good", "", ""]] },
      { t: "items", label: "Complete the sentences.", list: ["An elephant is ___ (heavy) than a horse.", "Mount Everest is ___ (high) mountain in the world.", "Math is ___ (difficult) than art for me.", "This is ___ (good) pizza in town!"] },
      { t: "key", list: ["faster, the fastest · hotter, the hottest · easier, the easiest · more beautiful, the most beautiful · better, the best", "heavier, the highest, more difficult, the best"] }
    ] }
  },
  {
    id: "subject-pronouns", category: "Grammar", type: "Printable worksheet", levels: ["Pre-A1", "A1"], ages: ["Ages 4–6", "Ages 7–9"],
    title: "Personal Pronouns", description: "I, you, he, she, it, we, they: replace names with the right pronoun.",
    notes: "Señale a distintos alumnos y objetos del salón mientras dicen el pronombre en voz alta.",
    sheet: { instructions: "Write the correct pronoun.", blocks: [
      { t: "bank", label: "Pronouns", words: ["I", "you", "he", "she", "it", "we", "they"] },
      { t: "items", label: "Change the words for a pronoun.", list: ["Ana → ___", "Luis → ___", "the dog → ___", "my mom and I → ___", "Pedro and Sofía → ___", "the books → ___"] },
      { t: "items", label: "Complete the sentences.", list: ["This is Leo. ___ is my brother.", "Look at the cat! ___ is sleeping.", "Mia and Ben are my friends. ___ are nine.", "My sister and I love music. ___ sing every day."] },
      { t: "key", list: ["she, he, it, we, they, they", "He, It, They, We"] }
    ] }
  },
  {
    id: "there-is-there-are", category: "Grammar", type: "Printable worksheet", levels: ["A1"], ages: ["Ages 7–9"],
    title: "There Is / There Are", description: "Describe a room: there is a bed, there are two windows.",
    notes: "Pida a los alumnos que describan su recámara al final; puede ser tarea con dibujo.",
    sheet: { instructions: "Read the rule. Then complete the exercises.", blocks: [
      { t: "rule", lines: ["There is + one thing: There is a lamp.", "There are + two or more: There are three books.", "Negative: There isn’t / There aren’t · Question: Is there…? / Are there…?"] },
      { t: "items", label: "Is or are?", list: ["There ___ a cat under the table.", "There ___ two windows in my room.", "There ___ some apples in the fridge.", "There ___ a clock on the wall."] },
      { t: "lines", label: "Draw your bedroom on the back. Write four sentences about it.", count: 4 },
      { t: "key", list: ["is, are, are, is", "Bedroom: open answers."] }
    ] }
  },
  {
    id: "can-cant-abilities", category: "Grammar", type: "Printable worksheet", levels: ["A1"], ages: ["Ages 7–9", "Ages 10–12"],
    title: "Can and Can’t: Abilities", description: "Talk about what you can and can’t do.",
    notes: "Haga una encuesta rápida en el grupo: “Can you swim? Can you whistle?” y anoten resultados en el pizarrón.",
    sheet: { instructions: "Read the rule. Then complete the exercises.", blocks: [
      { t: "rule", lines: ["can + verb (it doesn’t change): I can swim. She can swim.", "Negative: can’t · Question: Can you…? Yes, I can. / No, I can’t."] },
      { t: "table", label: "Can you…? Write ✓ or ✗ and a sentence.", headers: ["Action", "✓ / ✗", "Sentence"], rows: [["ride a bike", "", ""], ["cook", "", ""], ["speak French", "", ""], ["play the guitar", "", ""]] },
      { t: "items", label: "Find and fix the mistake.", list: ["She can sings very well. ___", "Do you can swim? ___", "He cans run fast. ___"] },
      { t: "key", list: ["Table: open answers.", "She can sing very well.", "Can you swim?", "He can run fast."] }
    ] }
  }
);
SHEET_COLORS.Grammar = "mustard";

/* ---------- Flashcards (vista previa) ---------- */
const FLASH_DECKS = [
  { id: "first-words", title: "First Words", stage: "kids", level: "Pre-A1", c: "coral", ready: true,
    cards: [["cat", "gato"], ["sun", "sol"], ["apple", "manzana"], ["book", "libro"], ["fish", "pez"], ["star", "estrella"], ["tree", "árbol"], ["house", "casa"]] },
  { id: "irregular-verbs", title: "Irregular Verbs", stage: "children", level: "A2", c: "mustard", ready: false },
  { id: "school-and-classroom", title: "School and Classroom", stage: "kids", level: "A1", c: "sky", ready: false },
  { id: "phrasal-verbs", title: "Phrasal Verbs", stage: "teens", level: "B1", c: "mint", ready: false },
  { id: "feelings", title: "Feelings and Emotions", stage: "children", level: "A1", c: "coral", ready: false },
  { id: "academic-words", title: "Academic Words", stage: "teens", level: "B2", c: "sky", ready: false }
];

/* ---------- Juegos: datos actualizados ---------- */
const wq = MOVA_GAMES.find((g) => g.file === "juego-word-quest.html");
if (wq) { wq.tag = "MOVA Kids y Children"; wq.description = "Ten topics, three ways to play: listen, read and the 60-second rush."; }
const mm = MOVA_GAMES.find((g) => g.file === "juego-mision-matematica.html");
if (mm) { mm.tag = "1° primaria a preparatoria"; mm.description = "Del conteo al álgebra: elige tu grado y lleva el cohete hasta la Luna."; }
MOVA_GAMES.push({ file: "juego-level-up.html", title: "MOVA Level Up", color: "sky", tag: "Todas las etapas", skill: "Examen de nivel", description: "An adaptive placement test: the questions change with every answer to find your English level." });
GAME_ART["juego-level-up.html"] = scene("#1E3A5F", `
  ${[["A1", "#7FB89E", 40, 120], ["A2", "#6FA8D6", 96, 100], ["B1", "#E0B04A", 152, 80], ["B2", "#E8846B", 208, 60], ["C1", "#B59AE0", 264, 40]].map(([t, c, x, y]) => `<rect x="${x - 22}" y="${y}" width="44" height="${170 - y}" rx="6" fill="${c}"/>` + T(x, y + 18, t, 14, "#1E3A5F", 800)).join("")}
  <path d="${starPath(264, 22, 10, 4)}" fill="#F2C94C"/>`, "#FFFFFF", 0.1);

/* ---------- Estilos nuevos ---------- */
document.head.insertAdjacentHTML("beforeend", `<style>
.tabbar ul{grid-template-columns:repeat(6,1fr)}
.tabbar a{font-size:11px}
@media (min-width:860px){.areas{grid-template-columns:repeat(5,1fr)}}
.areas .area:last-child:nth-child(odd){grid-column:1/-1}
@media (min-width:860px){.areas .area:last-child:nth-child(odd){grid-column:auto}}
.stage-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.stage-tab{display:grid;gap:2px;text-align:left;padding:12px 12px 11px;border-radius:16px;border:1.5px solid var(--line);background:var(--surface);min-height:64px}
.stage-tab b{font-size:14.5px;line-height:1.2}
.stage-tab small{font-size:12px;color:var(--ink-3);font-weight:500}
.stage-tab[aria-pressed="true"][data-c="coral"]{background:var(--coral-soft);border-color:var(--coral)}
.stage-tab[aria-pressed="true"][data-c="sky"]{background:var(--sky-soft);border-color:var(--sky)}
.stage-tab[aria-pressed="true"][data-c="mint"]{background:var(--mint-soft);border-color:var(--mint)}
.stage-tab[aria-pressed="true"] small{color:var(--ink-2)}
.lvl-group{margin-top:28px}
.lvl-group h2{display:flex;align-items:center;gap:10px;margin-bottom:14px;font-size:20px}
.lvl-group h2 small{font-size:14px;font-weight:500;color:var(--ink-3)}
.hub{display:grid;gap:14px}
@media (min-width:720px){.hub{grid-template-columns:repeat(2,1fr)}}
.hub a{display:grid;gap:8px;padding:20px;border-radius:22px;background:var(--surface);border:1px solid var(--line);text-decoration:none}
.hub a:hover{border-color:var(--ink-3)}
.hub a h2{font-size:21px}
.hub a p{color:var(--ink-2);font-size:14.5px;line-height:1.5}
.hub-mark{width:48px;height:48px;border-radius:14px;display:grid;place-items:center}
.hub a[data-c="sky"] .hub-mark{background:var(--sky-soft);color:var(--sky)}
.hub a[data-c="coral"] .hub-mark{background:var(--coral-soft);color:var(--coral)}
.st-card{display:grid;gap:8px;padding:18px;border-radius:18px;background:var(--surface);border:1px solid var(--line);border-top:5px solid var(--bar,var(--sky));position:relative}
.st-card[data-c="sky"]{--bar:var(--chalk-sky)}.st-card[data-c="mint"]{--bar:var(--chalk-mint)}.st-card[data-c="mustard"]{--bar:var(--chalk-mustard)}.st-card[data-c="coral"]{--bar:var(--chalk-coral)}
.st-card h3 a{text-decoration:none}
.st-card p{color:var(--ink-2);font-size:14.5px;line-height:1.5}
.st-uses{margin:10px 0 0;padding-left:20px;display:grid;gap:6px}
.form-table{width:100%;border-collapse:separate;border-spacing:0;margin-top:12px;font-size:14.5px;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:var(--surface)}
.form-table th,.form-table td{padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid var(--line)}
.form-table tr:last-child td{border-bottom:0}
.form-table th{background:var(--surface-2);font-size:13px}
.form-table td:first-child{font-weight:600;white-space:nowrap}
.form-table em{font-style:normal;color:var(--navy);font-weight:500}
.ex-list{list-style:none;padding:0;margin:12px 0 0;display:grid;gap:8px}
.ex-list li{padding:12px 14px;border-radius:12px;background:var(--surface);border:1px solid var(--line);font-family:var(--font-read);font-size:17px}
.tip{margin-top:12px;padding:14px 16px;border-radius:14px;background:var(--mustard-soft);color:var(--ink)}
.tip strong{display:block;color:var(--mustard);font-size:14px;margin-bottom:2px}
.rel{display:grid;gap:8px;margin-top:12px}
.rel a{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:12px;background:var(--surface);border:1px solid var(--line);text-decoration:none;font-weight:500}
.rel a:hover{border-color:var(--ink-3)}
.mini-q{margin-top:12px;display:grid;gap:12px}
.fc-stage{display:grid;place-items:center;margin:20px 0}
.fc{width:min(320px,86vw);aspect-ratio:3/4;perspective:1000px;border:0;background:none;padding:0}
.fc-inner{position:relative;display:block;width:100%;height:100%;transition:transform .5s cubic-bezier(.2,.7,.2,1);transform-style:preserve-3d}
.fc.is-flipped .fc-inner{transform:rotateY(180deg)}
.fc-face{position:absolute;inset:0;border-radius:24px;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:grid;place-items:center;align-content:center;gap:10px;padding:24px;background:var(--surface);border:1.5px solid var(--line);box-shadow:var(--shadow)}
.fc-face svg{width:70%;max-width:180px}
.fc-back{transform:rotateY(180deg);background:var(--navy);color:var(--navy-ink);border-color:var(--navy)}
.fc-back b{font-size:42px;font-weight:800}
.fc-back span{font-size:18px;opacity:.85}
.fc-hint{font-size:13px;color:var(--ink-3)}
.deck-art{height:110px;border-radius:14px;display:grid;place-items:center;position:relative;overflow:hidden}
.deck-art[data-c="coral"]{background:var(--coral-soft)}.deck-art[data-c="sky"]{background:var(--sky-soft)}.deck-art[data-c="mustard"]{background:var(--mustard-soft)}.deck-art[data-c="mint"]{background:var(--mint-soft)}
.deck-art i{position:absolute;width:62px;height:82px;border-radius:10px;background:var(--surface);box-shadow:var(--shadow)}
.deck-art i:nth-child(1){transform:rotate(-10deg) translateX(-26px)}.deck-art i:nth-child(2){transform:rotate(8deg) translateX(26px)}
.deck-art i:nth-child(3){transform:none;display:grid;place-items:center;font-weight:800;font-size:15px;color:var(--ink)}
</style>`);

/* ---------- Íconos ---------- */
ICONS.learn = '<path d="M3 8.5 12 4l9 4.5-9 4.5z"/><path d="M7 10.5V15c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5"/>';
ICONS.cards = '<rect x="4" y="6" width="12" height="15" rx="2"/><path d="M8 3h10a2 2 0 0 1 2 2v13"/>';
ICONS.rule = '<path d="M4 6h16M4 12h10M4 18h13"/>';

/* ---------- Navegación ---------- */
function buildNav() {
  const nav = document.querySelector(".nav");
  if (nav) nav.innerHTML = [["", "Home"], ["library", "Reading Library"], ["learn", "Learn"], ["resources", "Print &amp; Learn"], ["games", "Games"], ["shop", "Shop"]]
    .map(([k, l]) => `<a href="#/${k}" data-nav="${k}">${l}</a>`).join("");
  const ul = document.querySelector(".tabbar ul");
  if (ul) ul.innerHTML = [["", "home", "Home"], ["library", "book", "Read"], ["learn", "learn", "Learn"], ["resources", "teach", "Print"], ["games", "play", "Play"], ["shop", "shop", "Shop"]]
    .map(([k, i, l]) => `<li><a href="#/${k}" data-nav="${k}">${ico(i, 23)}<span>${l}</span></a></li>`).join("");
}
function markLearnTab() {
  const k = location.hash.replace(/^#\/?/, "").split("/")[0];
  if (k === "structures" || k === "flashcards") $$('[data-nav="learn"]').forEach((a) => a.setAttribute("aria-current", "page"));
}

/* ---------- Biblioteca por etapas ---------- */
libF.stage = libF.stage || "kids";
const stageName = (id) => (STAGES.find((s) => s.id === id) || {}).name || "";
const origReadingCard = readingCard;
window.readingCard = function (r) {
  return origReadingCard(r).replace('<div class="item-top">', `<div class="item-top"><span class="chip">${esc(stageName(r.stage))}</span>`);
};
window.viewLibrary = function () {
  const done = READINGS.filter((r) => isDone(r.id)).length;
  const topics = [...new Set(READINGS.map((r) => r.topic))].sort();
  return {
    title: "Reading Library",
    html: `
    <section class="page-head wrap">
      <p class="kicker">Reading Library</p>
      <h1>Stories for every stage</h1>
      <p class="lead">Elige tu etapa MOVA y después tu nivel. Has completado ${done} de ${READINGS.length} lecturas.</p>
    </section>
    <section class="wrap filters" aria-label="Filter readings">
      <div class="stage-tabs" role="group" aria-label="Etapa">${STAGES.map((s) => `<button type="button" class="stage-tab" data-stage="${s.id}" data-c="${s.c}" aria-pressed="${libF.stage === s.id}"><b>${s.name}</b><small>${s.ages}</small></button>`).join("")}</div>
      ${searchField("lib-q", "Search readings", libF.q)}
      <div class="chiprow" role="group" aria-label="Level">${["all", ...LEVELS].map((l) => `<button type="button" class="fchip" data-level="${l}" aria-pressed="${libF.level === l}">${l === "all" ? "All levels" : l}</button>`).join("")}</div>
      <div class="selects"><label class="select"><span>Topic</span><select id="lib-topic"><option value="all">All topics</option>${topics.map((t) => `<option value="${esc(t)}" ${libF.topic === t ? "selected" : ""}>${esc(t)}</option>`).join("")}</select></label></div>
    </section>
    <section class="wrap"><p class="count" id="lib-count" aria-live="polite"></p><div id="lib-results"></div></section>`,
    mount(root) {
      const out = $("#lib-results", root), count = $("#lib-count", root);
      const update = () => {
        const list = READINGS.filter((r) => r.stage === libF.stage && (libF.level === "all" || r.level === libF.level) && (libF.topic === "all" || r.topic === libF.topic) && matchesQuery(libF.q, [r.title, r.description, r.topic, r.level, r.text.join(" ")]));
        count.textContent = `${stageName(libF.stage)}: ${plural(list.length, "reading", "readings")}`;
        if (!list.length) { out.innerHTML = emptyState("No readings here yet.", "Try another level or topic. New readings are added every month.", "Clear filters"); return; }
        out.innerHTML = LEVELS.filter((l) => list.some((r) => r.level === l)).map((l) => `
          <div class="lvl-group"><h2>${lvlChip(l)} <small>${plural(list.filter((r) => r.level === l).length, "reading", "readings")}</small></h2>
          <div class="grid cols">${list.filter((r) => r.level === l).map(window.readingCard).join("")}</div></div>`).join("");
      };
      $("#lib-q", root).addEventListener("input", (e) => { libF.q = e.target.value; update(); });
      $("#lib-topic", root).addEventListener("change", (e) => { libF.topic = e.target.value; update(); });
      $$(".stage-tab", root).forEach((b) => b.addEventListener("click", () => { libF.stage = b.dataset.stage; $$(".stage-tab", root).forEach((x) => x.setAttribute("aria-pressed", x === b)); update(); }));
      $$(".fchip", root).forEach((b) => b.addEventListener("click", () => { libF.level = b.dataset.level; $$(".fchip", root).forEach((x) => x.setAttribute("aria-pressed", x === b)); update(); }));
      out.addEventListener("click", (e) => { if (e.target.closest("[data-reset]")) { Object.assign(libF, { level: "all", topic: "all", q: "" }); update(); } });
      update();
    }
  };
};

/* ---------- Learn ---------- */
function viewLearn() {
  return {
    title: "Learn",
    html: `
    <section class="page-head wrap">
      <p class="kicker">Learn</p>
      <h1>Understand it, then practice it</h1>
      <p class="lead">Explicaciones claras de cada tema de gramática y tarjetas para repasar vocabulario.</p>
    </section>
    <section class="wrap"><div class="hub">
      <a href="#/structures" data-c="sky"><span class="hub-mark">${ico("rule", 26)}</span><h2>Structures</h2><p>Present Simple, Past Continuous, Present Perfect, Adverbs of Frequency y más, explicados en español con ejemplos en inglés.</p></a>
      <a href="#/flashcards" data-c="coral"><span class="hub-mark">${ico("cards", 26)}</span><h2>Flashcards</h2><p>Tarjetas para repasar vocabulario por etapa: voltea, escucha y practica.</p></a>
    </div></section>`
  };
}

/* ---------- Structures ---------- */
const stF = { q: "" };
function structureCard(s) {
  return `<article class="st-card" data-c="${s.c}">
    <div class="chips">${lvlChip(s.level)}</div>
    <h3 class="item-title"><a class="stretch" href="#/structures/${s.id}">${esc(s.title)}</a></h3>
    <p>${esc(s.summary)}</p>
  </article>`;
}
function viewStructures() {
  return {
    title: "Structures",
    html: `
    <section class="page-head wrap">
      <a class="back" href="#/learn">${ico("back", 18)} Learn</a>
      <h1>Structures</h1>
      <p class="lead">Cada tema con su explicación, la fórmula, ejemplos, el error más común y práctica rápida. Al final encontrarás hojas y juegos del mismo tema.</p>
    </section>
    <section class="wrap filters">${searchField("st-q", "Search a topic, like adverbs", stF.q)}</section>
    <section class="wrap"><div class="grid cols" id="st-results"></div></section>`,
    mount(root) {
      const out = $("#st-results", root);
      const update = () => {
        const list = STRUCTURES.filter((s) => matchesQuery(stF.q, [s.title, s.summary, s.keywords.join(" "), s.level]));
        out.innerHTML = list.length ? list.map(structureCard).join("") : emptyState("No topics match your search.", "Try present, past, future or adverbs.");
      };
      $("#st-q", root).addEventListener("input", (e) => { stF.q = e.target.value; update(); });
      update();
    }
  };
}
function viewStructure(id) {
  const s = STRUCTURES.find((x) => x.id === id);
  if (!s) return viewNotFound("We couldn’t find that topic.", "#/structures", "See all structures");
  const qs = s.check.map(([q, o], i) => ({ q, correct: o[0], opts: shuffle(o, seeded(hashStr(s.id + i))) }));
  return {
    title: s.title,
    html: `
    <article class="narrow">
      <div class="reading-head">
        <a class="back" href="#/structures">${ico("back", 18)} Structures</a>
        <div class="chips">${lvlChip(s.level)}</div>
        <h1>${esc(s.title)}</h1>
        <p class="lead">${esc(s.summary)}</p>
      </div>
      <section class="block"><h2>¿Cuándo se usa?</h2><ul class="st-uses">${s.uses.map((u) => `<li>${esc(u)}</li>`).join("")}</ul></section>
      <section class="block"><h2>Estructura</h2>
        <table class="form-table"><thead><tr><th>Forma</th><th>Fórmula y ejemplo</th></tr></thead>
        <tbody>${s.forms.map(([f, rule, ex]) => `<tr><td>${esc(f)}</td><td>${esc(rule)}<br><em>${esc(ex)}</em></td></tr>`).join("")}</tbody></table>
      </section>
      <section class="block"><h2>Ejemplos</h2><ul class="ex-list">${s.examples.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></section>
      <section class="block"><h2>Palabras clave</h2><div class="chips" style="margin-top:10px">${s.keywords.map((k) => `<span class="chip">${esc(k)}</span>`).join("")}</div>
        <div class="tip"><strong>Error común</strong>${esc(s.tip)}</div></section>
      <section class="block"><h2>Practica</h2><p class="hint">Elige la respuesta correcta.</p>
        <div class="mini-q">${qs.map((q, qi) => `<fieldset class="rq" data-q="${qi}"><legend><span>${qi + 1}.</span>${esc(q.q)}</legend><div class="rq-opts">${q.opts.map((o) => `<label class="opt"><input type="radio" name="sq${qi}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join("")}</div></fieldset>`).join("")}</div>
      </section>
      <section class="block"><h2>Sigue practicando</h2><div class="rel">${s.related.map(([h, l]) => `<a href="${h}">${ico(h.includes("juego") ? "play" : h.includes("structures") ? "rule" : "file", 20)}<span>${esc(l)}</span></a>`).join("")}</div></section>
    </article>`,
    mount(root) {
      $$(".rq", root).forEach((f, qi) => f.addEventListener("change", (e) => {
        const chosen = e.target.value, correct = qs[qi].correct;
        $$(".opt", f).forEach((l) => { const inp = $("input", l); inp.disabled = true; if (inp.value === correct) l.classList.add("is-correct"); else if (inp.value === chosen) l.classList.add("is-wrong"); });
        if (chosen !== correct) f.insertAdjacentHTML("beforeend", `<p class="rq-note">Correct answer: ${esc(correct)}</p>`);
      }));
    }
  };
}

/* ---------- Flashcards ---------- */
function deckCard(d) {
  const first = d.cards ? d.cards[0][0] : d.title.split(" ")[0];
  return `<article class="item">
    <div class="deck-art" data-c="${d.c}" aria-hidden="true"><i></i><i></i><i>${esc(first)}</i></div>
    <div class="item-top"><span class="chip">${esc(stageName(d.stage))}</span>${lvlChip(d.level)}</div>
    <h3 class="item-title">${d.ready ? `<a class="stretch" href="#/flashcards/${d.id}">${esc(d.title)}</a>` : esc(d.title)}</h3>
    <div class="item-meta">${d.ready ? `${d.cards.length} cards` : `<span class="soon">Coming soon</span>`}</div>
  </article>`;
}
function viewFlashcards() {
  return {
    title: "Flashcards",
    html: `
    <section class="page-head wrap">
      <a class="back" href="#/learn">${ico("back", 18)} Learn</a>
      <h1>Flashcards</h1>
      <p class="lead">Toca la tarjeta para voltearla y escuchar la palabra. Cada mes agregamos nuevas barajas.</p>
    </section>
    <section class="wrap"><div class="grid cols">${FLASH_DECKS.map(deckCard).join("")}</div></section>`
  };
}
function viewDeck(id) {
  const d = FLASH_DECKS.find((x) => x.id === id && x.ready);
  if (!d) return viewNotFound("This deck is coming soon.", "#/flashcards", "See all decks");
  return {
    title: d.title,
    html: `
    <section class="narrow">
      <div class="game-head"><a class="back" href="#/flashcards">${ico("back", 18)} Flashcards</a><h1>${esc(d.title)}</h1></div>
      <div class="stats"><div class="stat"><small>Card</small><b id="fc-n">1/${d.cards.length}</b></div><div class="stat"><small>I knew it</small><b id="fc-ok">0</b></div></div>
      <div class="fc-stage"><button class="fc" id="fc" type="button" aria-label="Flip the card"><span class="fc-inner"><span class="fc-face" id="fc-front"></span><span class="fc-face fc-back" id="fc-back"></span></span></button></div>
      <p class="fc-hint" style="text-align:center">Toca la tarjeta para voltearla</p>
      <div class="game-controls" style="justify-content:center"><button class="btn btn-ghost" type="button" id="fc-again">Practice again</button><button class="btn btn-primary" type="button" id="fc-knew">I knew it</button></div>
    </section>`,
    mount(root) {
      let i = 0, ok = 0, queue = shuffle(d.cards);
      const card = $("#fc", root);
      const speak = (w) => { try { const u = new SpeechSynthesisUtterance(w); u.lang = "en-US"; u.rate = .85; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} };
      const render = () => {
        const [w, es] = queue[i];
        card.classList.remove("is-flipped");
        $("#fc-front", root).innerHTML = ILLUSTRATIONS[w] || `<b style="font-size:32px">${esc(w)}</b>`;
        $("#fc-back", root).innerHTML = `<b>${esc(w)}</b><span>${esc(es)}</span>`;
        $("#fc-n", root).textContent = `${i + 1}/${queue.length}`;
      };
      card.addEventListener("click", () => { card.classList.toggle("is-flipped"); if (card.classList.contains("is-flipped")) speak(queue[i][0]); });
      const next = (knew) => {
        if (knew) { ok++; $("#fc-ok", root).textContent = ok; } else queue.push(queue[i]);
        i++;
        if (i >= queue.length) { i = 0; ok = 0; queue = shuffle(d.cards); toast("Deck complete. Great work!"); $("#fc-ok", root).textContent = 0; }
        render();
      };
      $("#fc-knew", root).addEventListener("click", () => next(true));
      $("#fc-again", root).addEventListener("click", () => next(false));
      render();
    }
  };
}

/* ---------- Rutas ---------- */
ROUTES.learn = () => viewLearn();
ROUTES.structures = (p) => (p[0] ? viewStructure(p[0]) : viewStructures());
ROUTES.flashcards = (p) => (p[0] ? viewDeck(p[0]) : viewFlashcards());

/* ---------- Inicio: área Learn y búsqueda ampliada ---------- */
const origHome = viewHome;
window.viewHome = function () {
  const v = origHome();
  v.html = v.html.replace('<div class="areas">', `<div class="areas"><a class="area" href="#/learn" data-c="sky"><span class="thumb" aria-hidden="true">${scene("#DBE9F5", `<rect x="60" y="40" width="200" height="100" rx="12" fill="#FFFDFA"/>${T(160, 72, "Present Perfect", 16)}<rect x="90" y="96" width="140" height="8" rx="4" fill="#BCD8EF"/><rect x="110" y="114" width="100" height="8" rx="4" fill="#F0D894"/>`)}</span><h3>Learn</h3><p>Structures and flashcards to understand and review.</p></a>`);
  const origMount = v.mount;
  v.mount = function (root) {
    origMount(root);
    const input = $("#home-q", root), out = $("#home-results", root);
    const extra = [
      ...STRUCTURES.map((s) => ({ kind: "Learn", title: s.title, href: `#/structures/${s.id}`, f: [s.title, s.summary, s.keywords.join(" "), "grammar structure"] })),
      ...FLASH_DECKS.filter((d) => d.ready).map((d) => ({ kind: "Cards", title: d.title, href: `#/flashcards/${d.id}`, f: [d.title, "flashcards vocabulary"] }))
    ];
    input.addEventListener("input", () => {
      const q = input.value.trim(); if (!q) return;
      const hits = extra.filter((i) => matchesQuery(q, i.f)).slice(0, 4);
      if (!hits.length) return;
      if (out.querySelector(".empty")) out.innerHTML = "";
      out.insertAdjacentHTML("afterbegin", hits.map((h) => `<a class="sr-item" href="${h.href}"><span class="sr-kind">${h.kind}</span><span class="sr-title">${esc(h.title)}</span></a>`).join(""));
    });
  };
  return v;
};

/* ---------- Arranque ---------- */
buildNav();
window.addEventListener("hashchange", markLearnTab);
router();
markLearnTab();
})();
