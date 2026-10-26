/* =====================================================================
   MOVA Learning Studio — LOTE 10 (octubre 2026)
   Niveles completos por etapa (Pre-A1 a C2), lecturas en español por
   grado (1° a 6°), Sopa de letras, Crucigrama y Lee con Mochi.
   Se carga después de studio-games.js.
   ===================================================================== */
(function () {
"use strict";

/* ---------- Niveles ---------- */
LEVELS.splice(0, LEVELS.length, "Pre-A1", "A1", "A1+", "A2", "A2+", "B1", "B1+", "B2", "C1", "C2");
const STAGE_LEVELS = {
  kids: ["Pre-A1", "A1", "A1+", "A2", "A2+", "B1", "B2"],
  children: ["Pre-A1", "A1", "A1+", "A2", "A2+", "B1", "B2"],
  teens: ["Pre-A1", "A1", "A1+", "A2", "A2+", "B1", "B2", "C1", "C2"]
};

/* ---------- Lecturas nuevas en inglés ---------- */
READINGS.push(
  /* MOVA Kids */
  {
    id: "the-lost-kite", level: "A1+", stage: "kids", topic: "Family", title: "The Red Kite",
    description: "Sam and Grandpa fly a kite on a windy day. Then the wind takes it away!",
    text: [
      "It is Saturday and it is very windy. Sam and his grandpa go to the hill with a big red kite.",
      "Grandpa holds the kite and Sam runs. The kite goes up, up, up! It is high in the sky, next to the clouds.",
      "Then a strong wind comes. The string breaks and the kite flies away. Sam is very sad.",
      "They walk down the hill and look for the kite. They find it in a tall tree. Grandpa can’t climb the tree, but a girl with a long stick helps them.",
      "Sam says, “Thank you!” Now Sam, Grandpa and the girl fly the kite together."
    ],
    vocab: [["windy", "with a lot of wind"], ["kite", "a toy that flies in the wind on a long string"], ["hill", "a small mountain"], ["string", "a thin rope"], ["climb", "to go up something using your hands and feet"]],
    questions: [
      ["What is the weather like?", ["very windy", "very hot", "rainy"]],
      ["What color is the kite?", ["red", "blue", "yellow"]],
      ["Why does the kite fly away?", ["The string breaks.", "Sam lets it go.", "A bird takes it."]],
      ["Where do they find the kite?", ["in a tall tree", "on a car", "in the river"]],
      ["Who helps them?", ["a girl with a long stick", "a firefighter", "Sam’s mom"]]
    ]
  },
  {
    id: "the-class-pet", level: "A2", stage: "kids", topic: "School", title: "Where Is Peanut?",
    description: "The class hamster escapes from his cage. Can the students find him before lunch?",
    text: [
      "Our class has a pet hamster. His name is Peanut. He is small and brown, and he loves sunflower seeds.",
      "On Monday morning, our teacher, Miss Rosa, looked at the cage. The door was open and Peanut wasn’t there! Everybody was worried.",
      "We looked under the desks, behind the books and inside the toy box. We didn’t find him. Then Diego said, “Listen! What is that noise?”",
      "The noise came from Ana’s backpack. She opened it slowly. Peanut was inside, eating her cookies!",
      "Everybody laughed. Miss Rosa closed the cage very carefully, and Ana shared her last cookie with Peanut."
    ],
    vocab: [["cage", "a small house with bars for an animal"], ["escape", "to get out of a place"], ["worried", "a little afraid that something bad happened"], ["noise", "a sound"], ["share", "to give part of something to another person"]],
    questions: [
      ["What kind of animal is Peanut?", ["a hamster", "a rabbit", "a mouse"]],
      ["What was the problem on Monday?", ["The cage door was open and Peanut wasn’t there.", "Peanut was sick.", "Miss Rosa was late."]],
      ["Who heard a noise?", ["Diego", "Ana", "Miss Rosa"]],
      ["Where was Peanut?", ["in Ana’s backpack", "under a desk", "in the toy box"]],
      ["What was Peanut eating?", ["cookies", "sunflower seeds", "an apple"]]
    ]
  },
  {
    id: "the-sandcastle-contest", level: "A2+", stage: "kids", topic: "Holidays", title: "The Sandcastle Contest",
    description: "Lucía and her brother enter a sandcastle contest at the beach. Will the waves ruin everything?",
    text: [
      "Last summer, Lucía and her little brother Toño went to the beach in Mazatlán with their parents. On the second day, they saw a big sign: “Sandcastle Contest, 11 o’clock. Prize: a giant ice cream!”",
      "They decided to enter. Lucía wanted to build a tall castle with four towers, but Toño wanted to make a sea turtle. They argued for a few minutes, and then they had an idea: a castle with a turtle in front of it.",
      "They worked very hard. Lucía made the towers with a bucket and Toño used shells for the turtle’s shell. When they were almost finished, a big wave came and destroyed one of the towers!",
      "Toño started to cry, but Lucía said, “Don’t worry. We can build it again, faster this time.” They finished just in time.",
      "They didn’t win first prize, but the judges gave them a special prize for teamwork. That afternoon, they shared a giant ice cream with their parents."
    ],
    vocab: [["contest", "a competition with a winner"], ["argue", "to talk angrily because you don’t agree"], ["bucket", "a container with a handle"], ["shell", "the hard part that protects some sea animals"], ["teamwork", "working well together"]],
    questions: [
      ["Where did the family go?", ["to the beach in Mazatlán", "to the mountains", "to a water park"]],
      ["What did Toño want to make?", ["a sea turtle", "a tall castle", "a boat"]],
      ["What happened when they were almost finished?", ["A wave destroyed a tower.", "It started to rain.", "Toño lost the bucket."]],
      ["How did Lucía help her brother?", ["She told him they could build it again.", "She bought him an ice cream.", "She called their parents."]],
      ["What prize did they get?", ["a special prize for teamwork", "first prize", "no prize"]]
    ]
  },
  {
    id: "the-tiny-seed", level: "B1", stage: "kids", topic: "Science", title: "The Journey of a Tiny Seed",
    description: "How does a tiny seed become a big sunflower? Follow its amazing journey.",
    text: [
      "Every sunflower starts as a tiny seed, smaller than your fingernail. Inside the seed, there is a baby plant and enough food to help it start growing.",
      "When the seed is planted in soil and receives water, it begins to wake up. First, a small root grows down into the ground. The root drinks water and holds the plant in place. A few days later, a green shoot pushes up through the soil, looking for the sun.",
      "The young plant needs three important things to grow: water, sunlight and nutrients from the soil. Its leaves use sunlight to make food for the whole plant. This amazing process is called photosynthesis.",
      "After about two months, the sunflower can be taller than an adult! Its big yellow head follows the sun across the sky while it is young.",
      "Finally, the flower makes hundreds of new seeds. Birds eat some of them, and the wind and animals carry others to new places. And the journey begins again."
    ],
    vocab: [["soil", "the earth where plants grow"], ["root", "the part of a plant that grows under the ground"], ["shoot", "a new part of a plant that grows up"], ["nutrients", "things in food or soil that help living things grow"], ["photosynthesis", "how plants use sunlight to make food"]],
    questions: [
      ["What is inside a seed?", ["a baby plant and food", "only water", "a small flower"]],
      ["What grows first?", ["a root", "a flower", "the leaves"]],
      ["What do the leaves do?", ["They use sunlight to make food.", "They drink water from the ground.", "They hold the plant in place."]],
      ["How long does it take a sunflower to grow very tall?", ["about two months", "about two days", "about two years"]],
      ["Why does the journey “begin again”?", ["The flower makes new seeds.", "The sun goes down.", "The root breaks."]]
    ]
  },
  {
    id: "secret-life-of-octopuses", level: "B2", stage: "kids", topic: "Science", title: "The Secret Life of Octopuses",
    description: "Three hearts, blue blood and a brain in every arm: meet one of the smartest animals in the ocean.",
    text: [
      "If you could choose a superpower, would you like to change color in less than a second, squeeze through a hole the size of a coin, or taste things with your arms? An octopus can do all three.",
      "Octopuses are remarkable creatures. They have three hearts and blue blood, and most of their neurons are not in their head but in their eight arms. This means each arm can explore, touch and even make simple decisions on its own.",
      "Scientists consider octopuses some of the most intelligent invertebrates on the planet. In aquariums, they have been observed opening jars to reach food, recognizing individual people and even escaping from their tanks at night to visit other tanks.",
      "Their famous camouflage is not only about color. Special cells in their skin can also change texture, so an octopus can look exactly like a rock covered in seaweed. When danger is close, many octopuses release a cloud of dark ink and disappear.",
      "Despite all these talents, most octopuses live only one or two years. Perhaps that is why they are such fast learners: they have very little time to discover the world."
    ],
    vocab: [["remarkable", "unusual in a way that surprises you"], ["neuron", "a cell that carries messages in the brain and body"], ["invertebrate", "an animal without a backbone"], ["camouflage", "a way of hiding by looking like the things around you"], ["texture", "how something feels when you touch it"]],
    questions: [
      ["How many hearts does an octopus have?", ["three", "one", "eight"]],
      ["Where are most of an octopus’s neurons?", ["in its arms", "in its head", "in its hearts"]],
      ["What have octopuses done in aquariums?", ["opened jars and escaped from their tanks", "learned to speak", "built small houses"]],
      ["What else can octopus skin change besides color?", ["its texture", "its temperature", "its size"]],
      ["What does the writer suggest in the last paragraph?", ["Octopuses learn fast because their lives are short.", "Octopuses live for many years.", "Octopuses never learn new things."]]
    ]
  },

  /* MOVA Children */
  {
    id: "my-school-bag", level: "Pre-A1", stage: "children", topic: "School", title: "My School Bag",
    description: "What is in Leo’s school bag? Let’s look inside.",
    text: [
      "Hello! I am Leo. This is my school bag. It is blue.",
      "In my bag, I have two books and three pencils. I have a red pen and a ruler.",
      "I have a green notebook. I have an apple and a bottle of water.",
      "I like my school bag. It is big and it is my favorite!"
    ],
    vocab: [["bag", "you carry your things in it"], ["book", "you read it"], ["pencil", "you write with it"], ["ruler", "you draw straight lines with it"], ["notebook", "you write in it"]],
    questions: [
      ["What color is Leo’s bag?", ["blue", "red", "green"]],
      ["How many books does he have?", ["two", "three", "one"]],
      ["What color is his pen?", ["red", "blue", "black"]],
      ["What food is in the bag?", ["an apple", "a sandwich", "a banana"]],
      ["How is the bag?", ["big", "small", "old"]]
    ]
  },
  {
    id: "football-after-school", level: "A1+", stage: "children", topic: "Sports", title: "Football After School",
    description: "Mateo plays football every afternoon. Today he has a big match.",
    text: [
      "Mateo is ten years old. He goes to school in the morning, and in the afternoon he plays football with his team, the Blue Tigers.",
      "The team practices on Tuesdays and Thursdays. The coach is very friendly. She always says, “Pass the ball and work together!”",
      "Today is Saturday and the Blue Tigers have a big match. Mateo is a little nervous. His family is at the stadium: his mom, his dad and his little sister, Camila.",
      "In the second half, Mateo passes the ball to his friend Iker, and Iker scores a goal! The Blue Tigers win two to one.",
      "After the match, the team eats pizza together. Mateo is tired but very happy."
    ],
    vocab: [["team", "a group of people who play together"], ["coach", "the person who trains a team"], ["match", "a game between two teams"], ["score", "to get a point or a goal"], ["tired", "when you need to rest"]],
    questions: [
      ["When does the team practice?", ["on Tuesdays and Thursdays", "every day", "on Saturdays"]],
      ["What does the coach always say?", ["Pass the ball and work together!", "Run faster!", "Don’t be late!"]],
      ["Who is Camila?", ["Mateo’s little sister", "the coach", "Mateo’s friend"]],
      ["Who scores the goal?", ["Iker", "Mateo", "the coach"]],
      ["What do they do after the match?", ["They eat pizza together.", "They go to school.", "They practice again."]]
    ]
  },
  {
    id: "the-robot-competition", level: "A2+", stage: "children", topic: "Technology", title: "The Robot Competition",
    description: "Regina’s team built a robot for a competition. On the big day, something went wrong.",
    text: [
      "For three months, Regina and her friends Bruno and Paola stayed after school every Wednesday to build a robot. The robot had to pick up small boxes and put them in the right place, like a robot in a warehouse.",
      "They called it “Chispa.” Bruno was good at building, Paola was good at programming and Regina was the team captain. Sometimes they disagreed, but they always found a solution together.",
      "On the day of the competition, the gym was full of teams from different schools. When it was their turn, Chispa moved forward, picked up the first box… and stopped. The battery was dead!",
      "Regina remembered that they had an extra battery in the backpack. Bruno changed it in less than a minute, and Chispa finished the task with only two seconds left.",
      "They came in third place. The judges said their robot wasn’t the fastest, but their team was the calmest under pressure. Regina felt very proud."
    ],
    vocab: [["warehouse", "a big building where things are stored"], ["programming", "writing instructions for a computer or robot"], ["captain", "the leader of a team"], ["disagree", "to have a different opinion"], ["under pressure", "in a difficult or stressful moment"]],
    questions: [
      ["What did the robot have to do?", ["pick up boxes and put them in the right place", "play football", "clean the classroom"]],
      ["What was Paola good at?", ["programming", "building", "drawing"]],
      ["Why did Chispa stop?", ["The battery was dead.", "A wheel broke.", "It was too slow."]],
      ["Who changed the battery?", ["Bruno", "Paola", "a judge"]],
      ["What did the judges say about the team?", ["They were the calmest under pressure.", "They were the fastest.", "They were the youngest."]]
    ]
  },
  {
    id: "ocean-plastic", level: "B1", stage: "children", topic: "Environment", title: "Ocean Plastic: What Can Kids Do?",
    description: "Millions of tons of plastic end up in the ocean every year. Here is how young people are helping.",
    text: [
      "Every year, millions of tons of plastic end up in the ocean. Much of it comes from things we use only once: bottles, bags, straws and food packaging. Because plastic can take hundreds of years to break down, it stays in the water for a very long time.",
      "Sea animals are the first to suffer. Turtles sometimes confuse plastic bags with jellyfish, which they eat, and birds can feed small pieces of plastic to their chicks. Over time, plastic breaks into tiny pieces called microplastics, which are now found almost everywhere, even in the food we eat.",
      "The good news is that young people around the world are taking action. In some schools, students organize beach clean-ups, while others campaign to stop using plastic straws in their cafeterias. Some teenagers have even invented machines that collect floating plastic from rivers before it reaches the sea.",
      "You don’t need to invent a machine to help. You can carry a reusable water bottle, say no to plastic bags and recycle correctly at home. Small actions, repeated by millions of people, can make a big difference."
    ],
    vocab: [["packaging", "the material used to wrap or protect a product"], ["break down", "to slowly separate into smaller parts"], ["confuse", "to think one thing is another"], ["campaign", "to work in an organized way to change something"], ["reusable", "you can use it many times"]],
    questions: [
      ["Why does plastic stay in the ocean for so long?", ["It can take hundreds of years to break down.", "Fish eat it.", "The water is too cold."]],
      ["Why do turtles eat plastic bags?", ["They confuse them with jellyfish.", "They like the taste.", "They use them to build nests."]],
      ["What are microplastics?", ["tiny pieces of plastic", "small fish", "a kind of bottle"]],
      ["What have some teenagers invented?", ["machines that collect plastic from rivers", "a new kind of plastic", "robot turtles"]],
      ["What is the main message of the last paragraph?", ["Small actions by many people can make a big difference.", "Only inventors can help the ocean.", "Recycling doesn’t work."]]
    ]
  },
  {
    id: "how-video-games-are-made", level: "B2", stage: "children", topic: "Technology", title: "How Video Games Are Made",
    description: "Behind every video game there are artists, writers, programmers and testers. Discover how it all comes together.",
    text: [
      "When you play your favorite video game, it is easy to forget that hundreds of people may have spent years creating it. Making a game is a complex process that combines art, storytelling, music and engineering.",
      "Everything begins with an idea. Game designers decide what the player will do, what the rules are and what makes the game challenging but fun. Writers then develop the story and the characters, while concept artists sketch how the world will look.",
      "Next, programmers turn those ideas into code, the instructions that tell the computer exactly what to do. Meanwhile, 3D artists build characters and landscapes, animators bring them to life, and sound designers record everything from footsteps to explosions. Composers write music that changes depending on what is happening on the screen.",
      "Before a game is released, it goes through a long testing phase. Testers play the same levels again and again, looking for bugs: errors that make the game freeze, crash or behave strangely. Fixing these problems can take months.",
      "If you enjoy drawing, writing, music, mathematics or solving puzzles, there may be a place for you in the game industry. The most successful teams are those in which people with very different talents learn to collaborate."
    ],
    vocab: [["complex", "with many parts that are connected"], ["sketch", "to draw quickly without many details"], ["code", "instructions written for a computer"], ["release", "to make available to the public"], ["bug", "an error in a program"]],
    questions: [
      ["What does the first paragraph say about making a game?", ["It can take many people and many years.", "One person usually makes it in a week.", "It only needs programmers."]],
      ["What do game designers decide?", ["the rules and what the player will do", "the music", "the price of the game"]],
      ["What do composers do?", ["They write music that changes with the action.", "They record footsteps.", "They test the levels."]],
      ["What is a bug?", ["an error that makes the game behave strangely", "a character in the game", "a type of music"]],
      ["According to the writer, what makes a team successful?", ["people with different talents who collaborate", "only expert programmers", "working alone"]]
    ]
  },

  /* MOVA Teens */
  {
    id: "this-is-me", level: "Pre-A1", stage: "teens", topic: "People", title: "This Is Me",
    description: "Meet Daniela: her age, her city and the things she likes.",
    text: [
      "Hi! My name is Daniela. I am fourteen years old.",
      "I am from Monterrey, in Mexico. I live with my mom, my dad and my brother.",
      "I like music and basketball. I don’t like math.",
      "My favorite color is purple. My favorite food is tacos.",
      "I have a cat. Her name is Luna. She is black and white."
    ],
    vocab: [["name", "what people call you"], ["years old", "your age"], ["live", "the place where your home is"], ["favorite", "the one you like the most"], ["brother", "a boy in your family, son of your parents"]],
    questions: [
      ["How old is Daniela?", ["fourteen", "twelve", "sixteen"]],
      ["Where is she from?", ["Monterrey", "Cancún", "Guadalajara"]],
      ["What sport does she like?", ["basketball", "football", "tennis"]],
      ["What is her favorite food?", ["tacos", "pizza", "salad"]],
      ["What is her cat’s name?", ["Luna", "Daniela", "Sol"]]
    ]
  },
  {
    id: "my-favorite-app", level: "A1+", stage: "teens", topic: "Technology", title: "My Favorite App",
    description: "Santiago uses an app to learn guitar. He explains how it works.",
    text: [
      "My name is Santiago and I’m fifteen. I use my phone every day, but my favorite app isn’t a game or a social network. It’s an app to learn the guitar.",
      "The app listens to me when I play. When I play a note correctly, it turns green. When I make a mistake, it turns red and the app shows me the right position for my fingers.",
      "I practice for twenty minutes every evening, after my homework. On weekends, I practice more. The app has songs for every level, from very easy to very difficult.",
      "I started six months ago. Now I can play eight songs, and my favorite is a song by my dad’s favorite band. He is very surprised!",
      "Next year, I want to play in the school concert with my friends."
    ],
    vocab: [["social network", "an app to share photos and messages with friends"], ["note", "a single musical sound"], ["mistake", "something that is not correct"], ["practice", "to do something many times to get better"], ["band", "a group of musicians"]],
    questions: [
      ["What is Santiago’s favorite app for?", ["learning the guitar", "playing games", "watching videos"]],
      ["What happens when he makes a mistake?", ["The note turns red.", "The app closes.", "The note turns green."]],
      ["When does he practice on school days?", ["in the evening, after his homework", "in the morning", "at school"]],
      ["How many songs can he play now?", ["eight", "six", "twenty"]],
      ["What does he want to do next year?", ["play in the school concert", "buy a new phone", "make an app"]]
    ]
  },
  {
    id: "trip-to-chichen-itza", level: "A2+", stage: "teens", topic: "Travel", title: "A Trip to Chichén Itzá",
    description: "Andrea’s school trip to one of the New Seven Wonders of the World was full of surprises.",
    text: [
      "In March, my class went on a school trip to Yucatán. We flew from Monterrey to Mérida and then traveled by bus for about two hours to Chichén Itzá, the ancient Maya city.",
      "When we arrived, it was incredibly hot, so our teacher made sure everyone had a hat and plenty of water. Our guide, Don Felipe, explained that Chichén Itzá was one of the most important cities of the Maya world more than a thousand years ago.",
      "The most famous building is El Castillo, a pyramid with 365 steps if you add all four sides together, one for each day of the year. Don Felipe told us that on the spring and autumn equinoxes, the shadows on the stairs look like a snake coming down the pyramid.",
      "The part I liked most was the ball court. Don Felipe asked us to clap in the middle of it, and the sound echoed several times. Nobody could believe it!",
      "In the afternoon, we swam in a cenote, a natural pool of fresh water in the rocks. I was a bit scared at first because the water was so deep, but it was the best moment of the trip."
    ],
    vocab: [["ancient", "very, very old"], ["guide", "a person who shows a place to visitors"], ["equinox", "one of two days a year when day and night are about the same length"], ["echo", "a sound that repeats because it bounces off walls"], ["cenote", "a natural pool of water in the ground, common in Yucatán"]],
    questions: [
      ["How did the class get from Mérida to Chichén Itzá?", ["by bus", "by plane", "by train"]],
      ["Why does El Castillo have 365 steps?", ["one for each day of the year", "one for each Maya king", "because it is very tall"]],
      ["What can people see on the equinoxes?", ["shadows that look like a snake", "the sun rising inside the pyramid", "a festival of lights"]],
      ["What happened when the students clapped in the ball court?", ["The sound echoed several times.", "The guide got angry.", "Nothing happened."]],
      ["How did Andrea feel at first in the cenote?", ["a bit scared", "bored", "very tired"]]
    ]
  },
  {
    id: "social-media-loneliness", level: "B2", stage: "teens", topic: "Wellbeing", title: "Connected but Lonely?",
    description: "We have never been so connected. So why do so many teenagers say they feel alone?",
    text: [
      "Today’s teenagers are the most connected generation in history. With a phone in their pocket, they can message dozens of friends, follow celebrities and share every moment of their day. And yet, surveys in many countries suggest that loneliness among young people has been increasing.",
      "Researchers point out that the problem is not technology itself, but how it is used. Passive scrolling, simply watching other people’s lives without interacting, is strongly linked to feelings of envy and isolation. Seeing a constant stream of edited photos can make ordinary life feel disappointing by comparison.",
      "Active use, on the other hand, tends to have the opposite effect. Messaging a friend to arrange a meeting, collaborating on a project or joining an online community around a shared interest can actually strengthen relationships.",
      "Another factor is what social media replaces. Hours spent online are often hours taken away from sleep, exercise and face-to-face conversations, all of which play a crucial role in our mood.",
      "None of this means that teenagers should abandon their phones. A more realistic goal is to use them more intentionally: to notice how certain apps make us feel, to set limits when necessary, and to remember that the people around us deserve our full attention too."
    ],
    vocab: [["survey", "a set of questions asked to many people to learn their opinions"], ["passive", "accepting or watching without taking part"], ["envy", "the feeling of wanting what someone else has"], ["crucial", "extremely important"], ["intentionally", "on purpose, after thinking about it"]],
    questions: [
      ["What paradox does the first paragraph describe?", ["Teenagers are very connected, but loneliness is increasing.", "Teenagers don’t use phones anymore.", "Celebrities feel lonely."]],
      ["According to researchers, what is linked to envy and isolation?", ["passive scrolling", "messaging friends", "joining online communities"]],
      ["What is an example of active use?", ["messaging a friend to arrange a meeting", "watching edited photos", "scrolling for hours"]],
      ["Why does the writer mention sleep and exercise?", ["Time online can replace activities that affect our mood.", "They are popular topics on social media.", "Teenagers don’t like them."]],
      ["What does the writer recommend?", ["using phones more intentionally", "deleting all social media", "using phones only at night"]]
    ]
  },
  {
    id: "the-paradox-of-choice", level: "C1", stage: "teens", topic: "Psychology", title: "The Paradox of Choice",
    description: "More options should make us happier. Why do they so often leave us anxious and dissatisfied?",
    text: [
      "Conventional wisdom holds that freedom is maximized by choice: the more options we have, the more likely we are to find exactly what we want. Supermarkets offering forty varieties of yogurt and streaming platforms with thousands of titles appear to be the logical endpoint of this belief.",
      "Yet a growing body of research suggests that, beyond a certain point, additional options do not liberate us so much as paralyze us. In one frequently cited experiment, shoppers who were offered twenty-four types of jam were far less likely to make a purchase than those presented with only six.",
      "The psychologist Barry Schwartz popularized the term “the paradox of choice” to describe this phenomenon. He distinguishes between “maximizers,” who feel compelled to examine every alternative in search of the best possible option, and “satisficers,” who settle on the first option that meets their criteria. Paradoxically, maximizers often make objectively better decisions yet report feeling less satisfied with them, haunted by the possibility that something better was available.",
      "The implications extend well beyond shopping. Students facing an overwhelming range of university courses, or professionals weighing countless career paths, may experience the same mixture of anxiety and regret.",
      "None of this implies that choice is undesirable; rather, it suggests that well-being may depend less on the number of options available than on our ability to decide when enough is genuinely enough."
    ],
    vocab: [["conventional wisdom", "the opinion that most people accept"], ["paralyze", "to make someone unable to act"], ["compelled", "feeling that you must do something"], ["settle on", "to choose something after considering options"], ["haunted", "constantly worried or troubled by something"]],
    questions: [
      ["What belief is described in the first paragraph?", ["More choice leads to more freedom and satisfaction.", "Supermarkets have too few products.", "Streaming platforms are expensive."]],
      ["What did the jam experiment show?", ["Fewer options led to more purchases.", "People prefer more types of jam.", "Shoppers did not like jam."]],
      ["How are “satisficers” different from “maximizers”?", ["They accept the first option that meets their needs.", "They always search for the best possible option.", "They never make decisions."]],
      ["Why are maximizers often less satisfied?", ["They keep wondering if a better option existed.", "They always make bad decisions.", "They have fewer options."]],
      ["What is the author’s conclusion?", ["Well-being depends on knowing when enough is enough.", "Choice should be eliminated.", "More options always lead to happiness."]]
    ]
  },
  {
    id: "in-praise-of-boredom", level: "C2", stage: "teens", topic: "Philosophy", title: "In Praise of Boredom",
    description: "We treat boredom as a problem to be solved instantly. What if it is, in fact, indispensable?",
    text: [
      "Of all the minor afflictions of modern life, boredom is perhaps the one we are most determined to eradicate. The moment a queue slows or a conversation falters, a hand reaches instinctively for a screen, as though a few seconds of unoccupied attention were intolerable.",
      "It was not always regarded with such hostility. Philosophers from Pascal to Kierkegaard treated boredom as a revealing, if uncomfortable, condition: a moment in which the mind, deprived of external stimulation, is thrown back upon itself. Pascal went so far as to claim that most of humanity’s problems stem from our inability to sit quietly in a room alone.",
      "Contemporary psychology lends a degree of empirical weight to these intuitions. Studies suggest that periods of mild boredom can foster divergent thinking, prompting the mind to wander, make unexpected connections and, on occasion, arrive at genuinely original ideas. Boredom, in this reading, is less a void than a signal: an indication that our current activity lacks meaning and that something else deserves our attention.",
      "The danger of perpetual distraction, then, is not merely that it wastes time, but that it silences that signal before it can be heard. By filling every interval with frictionless entertainment, we may be depriving ourselves of the very discomfort that drives reflection and, ultimately, change.",
      "To defend boredom is not to romanticize tedium. It is, rather, to suggest that a mind never permitted to idle may gradually lose the capacity to decide, for itself, what is worth doing."
    ],
    vocab: [["eradicate", "to destroy something completely"], ["falter", "to lose strength or stop for a moment"], ["empirical", "based on observation or experiment"], ["divergent thinking", "producing many different, creative ideas"], ["tedium", "the state of being dull and long"]],
    questions: [
      ["How does the writer describe our modern attitude toward boredom?", ["We try to eliminate it immediately.", "We enjoy it as much as possible.", "We have never experienced it."]],
      ["What did Pascal claim?", ["Many problems come from our inability to sit quietly alone.", "Boredom should be avoided at all costs.", "People need more entertainment."]],
      ["According to the third paragraph, what can mild boredom encourage?", ["creative and original thinking", "anxiety and fear", "better memory for facts"]],
      ["What is the main danger of perpetual distraction?", ["It silences a signal that leads to reflection and change.", "It makes people physically tired.", "It is too expensive."]],
      ["Which statement best reflects the conclusion?", ["Allowing the mind to idle helps us decide what is worth doing.", "Boredom is always pleasant.", "Entertainment should be banned."]]
    ]
  }
);

/* ---------- Ilustraciones de las lecturas nuevas ---------- */
const person = (x, y, skin, shirt, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-26" r="10" fill="${skin}"/><rect x="-10" y="-16" width="20" height="28" rx="9" fill="${shirt}"/><rect x="-8" y="10" width="6" height="14" rx="3" fill="#1E3A5F"/><rect x="2" y="10" width="6" height="14" rx="3" fill="#1E3A5F"/></g>`;
const cloud = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#FFFDFA"><circle cx="0" cy="0" r="14"/><circle cx="16" cy="-6" r="17"/><circle cx="34" cy="2" r="12"/><rect x="-6" y="0" width="44" height="12" rx="6"/></g>`;
Object.assign(READING_ART, {
  "the-lost-kite": scene("#DCEAF6", `${cloud(40, 40)}${cloud(220, 30, .8)}
    <path d="M0 180V138q80-46 160-20t160-6v68z" fill="#9FCBB5"/>
    <g transform="rotate(-14 230 64)"><path d="M230 34 254 64 230 98 206 64z" fill="#E8846B"/><path d="M230 34v64M206 64h48" stroke="#FFFDFA" stroke-width="2"/></g>
    <path d="M232 98q-30 30-60 24t-50 30" stroke="#1E3A5F" stroke-width="1.6" fill="none"/>
    ${[[214, 112], [204, 122], [196, 128]].map(([x, y]) => `<path d="M${x} ${y}l6-4 2 7z" fill="#E0B04A"/>`).join("")}
    ${person(110, 140, "#F1C7A5", "#6FA8D6")}${person(140, 136, "#E7B48F", "#E0B04A", 1.15)}`),
  "the-class-pet": scene("#F6EBD6", `<rect x="40" y="34" width="120" height="96" rx="10" fill="none" stroke="#1E3A5F" stroke-width="3"/>
    ${[56, 72, 88, 104, 120, 136].map((x) => `<path d="M${x} 36v92" stroke="#1E3A5F" stroke-width="2" opacity=".5"/>`).join("")}
    <rect x="34" y="126" width="132" height="12" rx="6" fill="#E8846B"/>
    <path d="M200 70h76a10 10 0 0 1 10 10v58h-96V80a10 10 0 0 1 10-10z" fill="#6FA8D6"/><rect x="214" y="58" width="48" height="16" rx="8" fill="none" stroke="#6FA8D6" stroke-width="6"/>
    <ellipse cx="238" cy="78" rx="26" ry="16" fill="#C58B5A"/><circle cx="222" cy="66" r="6" fill="#C58B5A"/><circle cx="254" cy="66" r="6" fill="#C58B5A"/>
    <circle cx="230" cy="76" r="3" fill="#1E3A5F"/><circle cx="246" cy="76" r="3" fill="#1E3A5F"/><circle cx="238" cy="84" r="3" fill="#E8846B"/>
    <circle cx="270" cy="96" r="7" fill="#E0B04A"/><circle cx="270" cy="96" r="3" fill="#B07A2A"/>`),
  "the-sandcastle-contest": scene("#DCEEF7", `<circle cx="270" cy="38" r="20" fill="#E0B04A"/>
    <path d="M0 110q40-12 80 0t80 0 80 0 80 0V180H0z" fill="#6FA8D6"/><path d="M0 132q60-14 160 4t160-4V180H0z" fill="#F0D8A8"/>
    <rect x="96" y="104" width="80" height="40" fill="#E2BE7E"/>${[96, 120, 146, 166].map((x) => `<rect x="${x}" y="84" width="14" height="24" fill="#E2BE7E"/><path d="M${x - 2} 84h18l-9-12z" fill="#E8846B"/>`).join("")}
    <rect x="128" y="120" width="16" height="24" rx="8" fill="#C79A55"/>
    <ellipse cx="216" cy="148" rx="22" ry="12" fill="#7FB89E"/><circle cx="242" cy="146" r="7" fill="#7FB89E"/>
    ${[[206, 146], [216, 142], [226, 148]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#FFFDFA"/>`).join("")}`),
  "the-tiny-seed": scene("#EAF4E3", `<rect x="0" y="120" width="320" height="60" fill="#B98B5E"/>
    ${[[50, 140], [270, 150], [140, 166]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="5" ry="3" fill="#8A623E"/>`).join("")}
    <path d="M160 122V60" stroke="#5E9E82" stroke-width="6" stroke-linecap="round"/>
    <path d="M160 96q-30-6-38-24 26 0 38 18zM160 84q28-8 36-26-26 2-36 20z" fill="#7FB89E"/>
    ${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<ellipse cx="${(160 + 22 * Math.cos(a)).toFixed(1)}" cy="${(46 + 22 * Math.sin(a)).toFixed(1)}" rx="10" ry="5" transform="rotate(${i * 30} ${(160 + 22 * Math.cos(a)).toFixed(1)} ${(46 + 22 * Math.sin(a)).toFixed(1)})" fill="#E0B04A"/>`; }).join("")}
    <circle cx="160" cy="46" r="14" fill="#7A4E2D"/>
    <path d="M160 124q-6 14-18 22M160 124q4 16 16 22M160 124v28" stroke="#E8DCC6" stroke-width="2.4" fill="none"/>
    <circle cx="276" cy="36" r="16" fill="#F2C94C"/>`),
  "secret-life-of-octopuses": scene("#1E3A5F", `${[[40, 150], [80, 160], [260, 150], [290, 164]].map(([x, y]) => `<path d="M${x} 180v-${180 - y + 20}q8-10 0-20" stroke="#5E9E82" stroke-width="5" fill="none"/>`).join("")}
    <ellipse cx="160" cy="70" rx="40" ry="36" fill="#E8846B"/>
    ${[-56, -34, -12, 10, 32, 54].map((d, i) => `<path d="M${160 + d * 0.5} 98q${d * 0.6} 30 ${d} 52" stroke="#E8846B" stroke-width="10" stroke-linecap="round" fill="none"/>`).join("")}
    <circle cx="146" cy="68" r="8" fill="#FFFDFA"/><circle cx="174" cy="68" r="8" fill="#FFFDFA"/><circle cx="148" cy="70" r="4" fill="#1E3A5F"/><circle cx="176" cy="70" r="4" fill="#1E3A5F"/>
    ${[[60, 40], [250, 54], [272, 30], [90, 90]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="none" stroke="#BCD8EF" stroke-width="2"/>`).join("")}`, "#6FA8D6", .2),
  "my-school-bag": scene("#DBE9F5", `<rect x="110" y="44" width="100" height="112" rx="22" fill="#6FA8D6"/><path d="M134 46a26 22 0 0 1 52 0" stroke="#1E3A5F" stroke-width="7" fill="none"/>
    <rect x="124" y="96" width="72" height="44" rx="12" fill="#4F8CC0"/><rect x="152" y="92" width="16" height="10" rx="3" fill="#E0B04A"/>
    <g transform="rotate(-18 66 120)"><rect x="40" y="70" width="52" height="68" rx="4" fill="#E8846B"/><rect x="46" y="70" width="6" height="68" fill="#C96A52"/></g>
    <g transform="rotate(24 262 110)"><rect x="254" y="58" width="12" height="90" rx="3" fill="#E0B04A"/><path d="M254 148h12l-6 14z" fill="#F3CFA8"/></g>`),
  "football-after-school": scene("#DDEEE5", `<rect x="0" y="110" width="320" height="70" fill="#7FB89E"/><path d="M0 110h320" stroke="#FFFDFA" stroke-width="3"/>
    <rect x="236" y="62" width="70" height="48" fill="none" stroke="#FFFDFA" stroke-width="5"/>
    ${[250, 264, 278, 292].map((x) => `<path d="M${x} 64v44" stroke="#FFFDFA" stroke-width="1" opacity=".6"/>`).join("")}
    ${person(90, 134, "#F1C7A5", "#6FA8D6", 1.2)}${person(150, 130, "#D9A27A", "#6FA8D6", 1.2)}
    <circle cx="196" cy="138" r="13" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="2"/><path d="M196 130l7 5-3 8h-8l-3-8z" fill="#1E3A5F"/>`),
  "the-robot-competition": scene("#F3E4D7", `<rect x="0" y="140" width="320" height="40" fill="#E1C8B0"/>
    <rect x="120" y="58" width="80" height="62" rx="14" fill="#6FA8D6"/><rect x="136" y="72" width="48" height="26" rx="8" fill="#1E3A5F"/>
    <circle cx="150" cy="85" r="5" fill="#7FE0C2"/><circle cx="170" cy="85" r="5" fill="#7FE0C2"/>
    <path d="M160 58V40" stroke="#1E3A5F" stroke-width="4"/><circle cx="160" cy="36" r="6" fill="#E8846B"/>
    <rect x="130" y="120" width="60" height="12" rx="4" fill="#4F8CC0"/>${[136, 184].map((x) => `<circle cx="${x}" cy="138" r="10" fill="#1E3A5F"/>`).join("")}
    <path d="M200 92h30v18" stroke="#6FA8D6" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="218" y="110" width="26" height="22" rx="3" fill="#E0B04A"/>
    <path d="M40 40l14 6-14 6z" fill="#E8846B"/><path d="M40 40v40" stroke="#1E3A5F" stroke-width="3"/>`),
  "ocean-plastic": scene("#CFE6F2", `<path d="M0 70q40-10 80 0t80 0 80 0 80 0V180H0z" fill="#6FA8D6"/>
    <path d="M118 120q34-24 70 0-36 24-70 0z" fill="#7FB89E"/><circle cx="196" cy="118" r="10" fill="#7FB89E"/><circle cx="198" cy="116" r="2.4" fill="#1E3A5F"/>
    ${[[130, 108, -30], [130, 132, 30], [176, 106, -150], [176, 134, 150]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="12" ry="5" transform="rotate(${r} ${x} ${y})" fill="#5E9E82"/>`).join("")}
    <path d="M238 92h22l-4 34h-14z" fill="#FFFDFA" opacity=".8"/><rect x="242" y="86" width="14" height="8" rx="2" fill="#E8846B"/>
    <path d="M44 140q10-20 30-6 4 14-14 16z" fill="#FFFDFA" opacity=".7"/>`),
  "how-video-games-are-made": scene("#1E3A5F", `<rect x="70" y="36" width="180" height="104" rx="10" fill="#0F2440" stroke="#6FA8D6" stroke-width="3"/>
    ${[[86, 120, 30], [116, 104, 30], [146, 112, 30], [176, 92, 30], [206, 100, 30]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${140 - y}" fill="#7FB89E"/>`).join("")}
    <rect x="124" y="84" width="14" height="18" rx="3" fill="#E8846B"/><path d="${starPath(224, 64, 9, 4)}" fill="#F2C94C"/>
    <rect x="114" y="146" width="92" height="26" rx="13" fill="#E0B04A"/><path d="M128 159h14M135 152v14" stroke="#1E3A5F" stroke-width="4"/><circle cx="186" cy="155" r="4" fill="#1E3A5F"/><circle cx="194" cy="163" r="4" fill="#1E3A5F"/>`, "#6FA8D6", .18),
  "this-is-me": scene("#F7DDD4", `<rect x="96" y="30" width="128" height="128" rx="16" fill="#FFFDFA"/>
    <circle cx="160" cy="84" r="26" fill="#E7B48F"/><path d="M134 80q2-30 26-30t26 30q-6-16-26-16t-26 16z" fill="#2A2320"/>
    <path d="M118 150q4-32 42-32t42 32z" fill="#A98BE8"/>
    <circle cx="244" cy="130" r="16" fill="#1E3A5F"/><path d="M232 118l4-12 6 8zM256 118l-4-12-6 8z" fill="#1E3A5F"/><circle cx="238" cy="128" r="2.6" fill="#E0B04A"/><circle cx="250" cy="128" r="2.6" fill="#E0B04A"/>
    <path d="M60 60q8-14 16 0 8-14 16 0-16 18-16 18t-16-18z" fill="#E8846B"/>`),
  "my-favorite-app": scene("#E6E0F6", `<rect x="118" y="24" width="84" height="140" rx="16" fill="#1E3A5F"/><rect x="126" y="38" width="68" height="112" rx="6" fill="#FFFDFA"/>
    ${[52, 70, 88, 106, 124].map((y, i) => `<path d="M130 ${y}h60" stroke="#BCD8EF" stroke-width="1.5"/><circle cx="${140 + i * 10}" cy="${y}" r="5" fill="${i === 2 ? "#E8846B" : "#7FB89E"}"/>`).join("")}
    <g transform="rotate(-30 256 110)"><ellipse cx="256" cy="126" rx="24" ry="28" fill="#C58B5A"/><circle cx="256" cy="124" r="8" fill="#5A3A22"/><rect x="250" y="40" width="12" height="66" rx="3" fill="#8A5A36"/></g>
    <path d="M60 60v40a8 8 0 1 1-4-7V66l20-6v34a8 8 0 1 1-4-7V66z" fill="#A98BE8"/>`),
  "trip-to-chichen-itza": scene("#F6E3C4", `<circle cx="262" cy="40" r="20" fill="#E0B04A"/>
    <rect x="0" y="150" width="320" height="30" fill="#9FCBB5"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="${80 + i * 16}" y="${130 - i * 18}" width="${160 - i * 32}" height="20" fill="${i % 2 ? "#D9B98A" : "#C9A672"}"/>`).join("")}
    <rect x="144" y="40" width="32" height="22" fill="#B98F5A"/><rect x="154" y="48" width="12" height="14" fill="#5A3A22"/>
    <path d="M152 150V64h16v86z" fill="#E7CFA4" opacity=".7"/>`),
  "social-media-loneliness": scene("#E3E9F1", `${[[70, 50], [250, 44], [60, 130], [258, 128]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="16" fill="#BCD8EF"/><circle cx="${x}" cy="${y - 4}" r="6" fill="#FFFDFA"/><path d="M${x - 10} ${y + 10}a10 8 0 0 1 20 0" fill="#FFFDFA"/>`).join("")}
    ${[[70, 50], [250, 44], [60, 130], [258, 128]].map(([x, y]) => `<path d="M${x} ${y}L160 90" stroke="#9DBDDD" stroke-width="2" stroke-dasharray="4 5"/>`).join("")}
    <rect x="132" y="48" width="56" height="96" rx="12" fill="#1E3A5F"/><rect x="138" y="58" width="44" height="74" rx="4" fill="#6FA8D6"/>
    <path d="M160 84q-10-12-18-2-6 8 18 24 24-16 18-24-8-10-18 2z" fill="#E8846B"/>`),
  "the-paradox-of-choice": scene("#F3EFE8", `${Array.from({ length: 3 }, (_, r) => Array.from({ length: 7 }, (_, c) => `<rect x="${40 + c * 36}" y="${30 + r * 44}" width="26" height="34" rx="6" fill="${["#E8846B", "#6FA8D6", "#E0B04A", "#7FB89E", "#A98BE8"][(r * 7 + c) % 5]}" opacity="${(r * 7 + c) % 4 ? .45 : .9}"/>`).join("")).join("")}
    <circle cx="160" cy="154" r="16" fill="#1E3A5F"/>${T(160, 154, "?", 20, "#FFFDFA", 800)}`),
  "in-praise-of-boredom": scene("#E9E4F2", `<rect x="0" y="140" width="320" height="40" fill="#D6CDE6"/>
    <rect x="218" y="40" width="60" height="70" rx="4" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="3"/><path d="M248 40v70M218 75h60" stroke="#1E3A5F" stroke-width="2"/>
    <rect x="80" y="104" width="80" height="12" rx="4" fill="#8A6FB8"/><rect x="88" y="116" width="6" height="26" fill="#8A6FB8"/><rect x="146" y="116" width="6" height="26" fill="#8A6FB8"/>
    ${person(120, 100, "#E7B48F", "#E0B04A", 1.1)}
    ${[[150, 46, 4], [164, 34, 6], [184, 22, 9]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFDFA" stroke="#A98BE8" stroke-width="2"/>`).join("")}`)
});

/* ---------- Lecturas en español (1° a 6° de primaria) ----------
   Primera opción de cada pregunta = respuesta correcta. */
const LECTURAS = [
  /* 1° */
  { id: "mi-perro-toby", grado: 1, tema: "animales", titulo: "Mi perro Toby",
    texto: ["Tengo un perro. Se llama Toby.", "Toby es café y tiene orejas largas.", "Toby come, corre y salta. Le gusta jugar con su pelota roja.", "En la noche, Toby duerme junto a mi cama."],
    preguntas: [["¿Cómo se llama el perro?", ["Toby", "Rocky", "Max"]], ["¿De qué color es Toby?", ["café", "negro", "blanco"]], ["¿Con qué le gusta jugar?", ["con su pelota roja", "con un hueso", "con un gato"]], ["¿Dónde duerme Toby?", ["junto a la cama", "en el patio", "en la cocina"]]] },
  { id: "la-luna", grado: 1, tema: "espacio", titulo: "La luna",
    texto: ["En la noche miro el cielo. Veo la luna.", "A veces la luna es redonda y grande. A veces se ve como una sonrisa.", "La luna no tiene luz propia. Brilla porque el sol la ilumina.", "Mi mamá y yo le decimos: «¡Buenas noches, luna!»."],
    preguntas: [["¿Cuándo vemos la luna?", ["en la noche", "en la mañana", "en la tarde"]], ["¿Cómo se ve a veces la luna?", ["como una sonrisa", "como una estrella", "como un árbol"]], ["¿Por qué brilla la luna?", ["porque el sol la ilumina", "porque tiene focos", "porque es de fuego"]], ["¿Qué le dicen a la luna?", ["¡Buenas noches, luna!", "¡Hola, sol!", "¡Adiós, cielo!"]]] },
  { id: "el-cumple-de-ana", grado: 1, tema: "familia", titulo: "El cumpleaños de Ana",
    texto: ["Hoy es el cumpleaños de Ana. Ana cumple seis años.", "Su abuela hizo un pastel de chocolate. El pastel tiene seis velas.", "Sus amigos cantan «Las mañanitas». Ana sopla las velas.", "Ana está muy feliz. ¡Es un gran día!"],
    preguntas: [["¿Cuántos años cumple Ana?", ["seis", "cinco", "siete"]], ["¿Quién hizo el pastel?", ["su abuela", "su papá", "su maestra"]], ["¿De qué es el pastel?", ["de chocolate", "de fresa", "de vainilla"]], ["¿Cómo está Ana?", ["muy feliz", "triste", "enojada"]]] },
  { id: "la-semilla", grado: 1, tema: "naturaleza", titulo: "La semilla de Beto",
    texto: ["Beto puso una semilla en una maceta.", "Todos los días le pone un poco de agua y la deja cerca de la ventana.", "Un día, ¡sale una hojita verde!", "Ahora es una planta. Beto la cuida mucho."],
    preguntas: [["¿Dónde puso Beto la semilla?", ["en una maceta", "en una caja", "en un vaso de leche"]], ["¿Qué le pone todos los días?", ["agua", "jugo", "arena"]], ["¿Qué salió un día?", ["una hojita verde", "una flor roja", "una fruta"]], ["¿En qué se convirtió la semilla?", ["en una planta", "en un árbol de manzanas", "en una piedra"]]] },

  /* 2° */
  { id: "los-ajolotes", grado: 2, tema: "animales", titulo: "Los ajolotes",
    texto: ["El ajolote es un animal que vive en el agua. Es de México y vive en los canales de Xochimilco.", "Parece que siempre está sonriendo. Tiene unas ramitas a los lados de la cabeza que le sirven para respirar debajo del agua.", "El ajolote tiene un súper poder: si pierde una patita, ¡le vuelve a crecer!", "Hoy hay muy pocos ajolotes porque el agua de los canales está sucia. Por eso es importante cuidarlos."],
    preguntas: [["¿Dónde vive el ajolote?", ["en los canales de Xochimilco", "en el desierto", "en la selva"]], ["¿Para qué le sirven las ramitas de la cabeza?", ["para respirar debajo del agua", "para nadar rápido", "para comer"]], ["¿Cuál es su súper poder?", ["le vuelve a crecer una patita", "puede volar", "cambia de color"]], ["¿Por qué hay pocos ajolotes?", ["porque el agua está sucia", "porque hace mucho frío", "porque no tienen comida"]]] },
  { id: "el-robot-de-leo", grado: 2, tema: "tecnologia", titulo: "El robot de Leo",
    texto: ["Leo quería un robot, así que decidió hacer uno.", "Usó una caja de cartón, dos tapas de frasco para los ojos y unos popotes para los brazos.", "Su hermana Sofi le ayudó a pintarlo de azul y le pusieron un nombre: Tornillo.", "Tornillo no camina ni habla, pero Leo lo lleva a todas partes. En la escuela, todos quieren conocerlo."],
    preguntas: [["¿Por qué hizo Leo un robot?", ["porque quería uno", "porque era tarea", "porque se lo pidió su mamá"]], ["¿Qué usó para los ojos?", ["dos tapas de frasco", "dos botones", "dos pelotas"]], ["¿Quién le ayudó a pintarlo?", ["su hermana Sofi", "su papá", "su maestra"]], ["¿Cómo se llama el robot?", ["Tornillo", "Sofi", "Cartón"]]] },
  { id: "dia-de-lluvia", grado: 2, tema: "naturaleza", titulo: "Un día de lluvia",
    texto: ["En la mañana, el cielo estaba gris. De pronto empezó a llover muy fuerte.", "Mariana no podía salir al parque. Estaba un poco triste.", "Entonces su papá sacó papel y colores. Juntos hicieron barquitos de papel y los pusieron a navegar en un charco del patio.", "Cuando dejó de llover, apareció un arcoíris. Mariana dijo: «Los días de lluvia también son divertidos»."],
    preguntas: [["¿Cómo estaba el cielo en la mañana?", ["gris", "azul", "naranja"]], ["¿Por qué estaba triste Mariana?", ["porque no podía ir al parque", "porque estaba enferma", "porque perdió su juguete"]], ["¿Qué hicieron con su papá?", ["barquitos de papel", "un pastel", "un dibujo del sol"]], ["¿Qué apareció cuando dejó de llover?", ["un arcoíris", "un pájaro", "la luna"]]] },
  { id: "el-partido", grado: 2, tema: "deporte", titulo: "El gran partido",
    texto: ["El sábado, el equipo de Diego jugó la final de futbol.", "El otro equipo era muy rápido y metió un gol primero. Diego y sus amigos no se rindieron.", "En el segundo tiempo, Diego le pasó el balón a Lupita y ella metió un gol. ¡Empataron!", "Al final no hubo ganador, pero el entrenador les dijo: «Hoy jugaron como un verdadero equipo». Todos se fueron contentos."],
    preguntas: [["¿Qué día fue el partido?", ["el sábado", "el lunes", "el domingo"]], ["¿Quién metió el primer gol?", ["el otro equipo", "Diego", "Lupita"]], ["¿Quién metió el gol del equipo de Diego?", ["Lupita", "Diego", "el entrenador"]], ["¿Cómo terminó el partido?", ["empatados", "ganó el equipo de Diego", "perdió el equipo de Diego"]]] },

  /* 3° */
  { id: "las-abejas", grado: 3, tema: "naturaleza", titulo: "Las abejas trabajadoras",
    texto: ["Las abejas viven en grupos muy grandes llamados colmenas. En una colmena puede haber miles de abejas, y cada una tiene un trabajo.", "La reina pone los huevos. Las obreras buscan el néctar de las flores, cuidan a las crías y limpian la colmena. Con el néctar, las abejas producen la miel.", "Además, las abejas ayudan a que nazcan frutas y verduras. Cuando van de flor en flor, llevan polen pegado en su cuerpo. A esto se le llama polinización.", "Sin abejas, tendríamos muchos menos alimentos. Por eso es importante proteger las flores y no usar venenos en los jardines."],
    preguntas: [["¿Cómo se llama el lugar donde viven las abejas?", ["colmena", "nido", "cueva"]], ["¿Qué hace la reina?", ["pone los huevos", "busca néctar", "limpia la colmena"]], ["¿Qué es la polinización?", ["llevar polen de flor en flor", "hacer miel", "construir la colmena"]], ["¿Por qué son importantes las abejas?", ["ayudan a que nazcan frutas y verduras", "comen insectos", "hacen ruido"]]] },
  { id: "las-estrellas", grado: 3, tema: "espacio", titulo: "¿Por qué brillan las estrellas?",
    texto: ["Cuando miramos el cielo de noche, vemos muchos puntitos de luz. Son estrellas.", "Las estrellas son enormes bolas de gas muy caliente. En su interior producen tanta energía que brillan y dan calor.", "Parecen pequeñas porque están muy, muy lejos. ¿Sabías que el Sol también es una estrella? Es la más cercana a la Tierra y por eso la vemos tan grande.", "En las ciudades vemos menos estrellas porque las luces de las calles y los edificios no nos dejan verlas. En el campo, el cielo se llena de ellas."],
    preguntas: [["¿Qué son las estrellas?", ["bolas de gas muy caliente", "piedras que brillan", "focos en el cielo"]], ["¿Por qué parecen pequeñas?", ["porque están muy lejos", "porque son muy chiquitas", "porque están apagadas"]], ["¿Cuál es la estrella más cercana a la Tierra?", ["el Sol", "la Luna", "Marte"]], ["¿Por qué vemos menos estrellas en la ciudad?", ["por las luces de calles y edificios", "porque hay menos estrellas", "porque llueve mucho"]]] },
  { id: "los-dinosaurios", grado: 3, tema: "animales", titulo: "Los dinosaurios",
    texto: ["Hace millones de años, mucho antes de que existieran las personas, la Tierra estaba habitada por dinosaurios.", "Había dinosaurios de muchos tamaños. Algunos eran tan pequeños como una gallina y otros tan largos como tres autobuses juntos. Unos comían plantas y otros eran carnívoros, como el famoso tiranosaurio.", "Los científicos que estudian a los dinosaurios se llaman paleontólogos. Ellos encuentran huesos y huellas convertidos en piedra, llamados fósiles.", "En México también se han encontrado fósiles de dinosaurios, sobre todo en Coahuila. ¡Quizá algún día tú descubras uno!"],
    preguntas: [["¿Cuándo vivieron los dinosaurios?", ["hace millones de años", "hace cien años", "en la época de nuestros abuelos"]], ["¿Qué comía el tiranosaurio?", ["carne", "solo plantas", "frutas"]], ["¿Cómo se llaman los científicos que estudian dinosaurios?", ["paleontólogos", "astronautas", "doctores"]], ["¿En qué estado de México se han encontrado muchos fósiles?", ["Coahuila", "Yucatán", "Jalisco"]]] },
  { id: "la-feria-de-ciencias", grado: 3, tema: "ciencia", titulo: "La feria de ciencias",
    texto: ["Para la feria de ciencias, Valeria quería hacer un experimento sorprendente.", "Con ayuda de su maestra, construyó un volcán de plastilina. Dentro puso un vaso con bicarbonato y unas gotas de pintura roja.", "El día de la feria, agregó vinagre al vaso. ¡De inmediato salió una espuma roja que bajó por el volcán! Todos aplaudieron.", "Valeria explicó que el vinagre y el bicarbonato reaccionan y producen un gas que forma burbujas. Ese día aprendió que la ciencia también puede ser muy divertida."],
    preguntas: [["¿De qué hizo Valeria el volcán?", ["de plastilina", "de cartón", "de madera"]], ["¿Qué agregó al vaso el día de la feria?", ["vinagre", "agua", "leche"]], ["¿Qué salió del volcán?", ["espuma roja", "humo negro", "agua azul"]], ["¿Por qué se forman las burbujas?", ["porque se produce un gas", "porque el volcán está caliente", "porque la pintura es mágica"]]] },

  /* 4° */
  { id: "la-mariposa-monarca", grado: 4, tema: "animales", titulo: "El gran viaje de la mariposa monarca",
    texto: ["Cada otoño, millones de mariposas monarca emprenden un viaje increíble. Salen de Canadá y Estados Unidos y vuelan miles de kilómetros hasta los bosques de Michoacán y el Estado de México.", "Allí, en lo alto de las montañas, se agrupan en los oyameles, unos árboles altos y verdes. Hay tantas mariposas juntas que las ramas se ven anaranjadas.", "Lo más sorprendente es que ninguna de ellas ha hecho el viaje antes. Los científicos creen que se guían por la posición del sol y por el campo magnético de la Tierra.", "En primavera regresan al norte. Para protegerlas, es importante cuidar los bosques donde descansan y las plantas de algodoncillo donde ponen sus huevos."],
    preguntas: [["¿Hacia dónde viajan las monarcas en otoño?", ["a los bosques de Michoacán y el Estado de México", "a las playas de Cancún", "al desierto de Sonora"]], ["¿En qué árboles se agrupan?", ["en los oyameles", "en las palmeras", "en los nogales"]], ["¿Qué es lo más sorprendente del viaje?", ["ninguna mariposa lo ha hecho antes", "viajan en grupos pequeños", "solo vuelan de noche"]], ["¿Cómo podemos protegerlas?", ["cuidando los bosques y el algodoncillo", "atrapándolas en frascos", "cortando árboles"]]] },
  { id: "cuidemos-el-agua", grado: 4, tema: "naturaleza", titulo: "Cada gota cuenta",
    texto: ["Aunque gran parte de nuestro planeta está cubierta de agua, casi toda es salada. Solo una pequeña parte es agua dulce que podemos usar para beber, cocinar y bañarnos.", "En muchas ciudades de México, como Monterrey, ha habido temporadas en las que falta el agua. Por eso es importante aprender a no desperdiciarla.", "Hay acciones sencillas que hacen una gran diferencia: cerrar la llave mientras te lavas los dientes, bañarte en cinco minutos, reparar las fugas y reutilizar el agua con la que lavas las verduras para regar las plantas.", "Si cada familia ahorra un poco de agua todos los días, al final del año habremos cuidado muchísimos litros. Cada gota cuenta."],
    preguntas: [["¿Cómo es casi toda el agua del planeta?", ["salada", "dulce", "congelada"]], ["¿Por qué debemos cuidar el agua?", ["porque hay temporadas en las que falta", "porque es muy cara", "porque se acaba la sal"]], ["¿Cuál es una acción para ahorrar agua?", ["cerrar la llave al lavarte los dientes", "bañarte una hora", "lavar el coche todos los días"]], ["¿Qué significa «cada gota cuenta»?", ["que aunque ahorres poco, ayuda", "que hay que contar las gotas", "que el agua es infinita"]]] },
  { id: "videojuegos-y-descanso", grado: 4, tema: "tecnologia", titulo: "Videojuegos y descanso",
    texto: ["A muchos niños les encantan los videojuegos. Pueden ser divertidos, ayudarnos a resolver problemas y hasta permitirnos jugar con amigos que viven lejos.", "Sin embargo, jugar demasiado tiempo puede afectar nuestro cuerpo. La luz de las pantallas en la noche hace que al cerebro le cueste más trabajo dormir, y estar sentado muchas horas no es bueno para los músculos ni para la vista.", "Los especialistas recomiendan hacer pausas, jugar en horarios acordados con la familia y dejar las pantallas al menos una hora antes de dormir.", "Lo ideal es encontrar un equilibrio: un rato para jugar, otro para hacer ejercicio, leer, convivir con la familia y, por supuesto, descansar."],
    preguntas: [["¿Qué cosa buena pueden tener los videojuegos?", ["ayudan a resolver problemas", "sustituyen el sueño", "no tienen nada bueno"]], ["¿Qué causa la luz de las pantallas en la noche?", ["que nos cueste más dormir", "que veamos mejor", "que tengamos hambre"]], ["¿Qué recomiendan los especialistas?", ["dejar las pantallas una hora antes de dormir", "jugar toda la noche", "jugar solo los lunes"]], ["¿Cuál es la idea principal?", ["hay que encontrar un equilibrio", "los videojuegos son malos", "hay que jugar más"]]] },
  { id: "el-maiz", grado: 4, tema: "cultura", titulo: "El maíz, tesoro de México",
    texto: ["El maíz es mucho más que un alimento: es parte de la historia y de la cultura de México.", "Hace miles de años, los pueblos antiguos de nuestro territorio comenzaron a cultivar una planta silvestre llamada teocintle. Poco a poco, seleccionando las mejores semillas, la transformaron en el maíz que conocemos hoy.", "Existen muchas variedades de maíz: blanco, amarillo, rojo y hasta azul. Con él se preparan tortillas, tamales, pozole, atole y muchos platillos más.", "Para los pueblos mayas, el maíz era tan importante que, según el Popol Vuh, los primeros seres humanos fueron hechos de masa de maíz."],
    preguntas: [["¿De qué planta silvestre viene el maíz?", ["del teocintle", "del trigo", "del nopal"]], ["¿Cómo transformaron la planta?", ["seleccionando las mejores semillas", "con máquinas modernas", "regándola con leche"]], ["¿Qué color de maíz NO menciona el texto?", ["verde", "azul", "rojo"]], ["Según el Popol Vuh, ¿de qué fueron hechos los primeros humanos?", ["de masa de maíz", "de barro", "de madera"]]] },

  /* 5° */
  { id: "volcanes-de-mexico", grado: 5, tema: "ciencia", titulo: "Los volcanes de México",
    texto: ["México es uno de los países con más volcanes del mundo. Muchos de ellos forman una gran cadena llamada Eje Neovolcánico, que cruza el país desde Nayarit hasta Veracruz.", "Un volcán se forma cuando la roca fundida del interior de la Tierra, llamada magma, sube a la superficie. Cuando sale por el cráter, el magma recibe el nombre de lava.", "Uno de los volcanes más conocidos es el Popocatépetl, que sigue activo y es vigilado todos los días por científicos. Otro caso famoso es el Paricutín, en Michoacán, que nació en 1943 en medio del terreno de un campesino y creció hasta formar una montaña.", "Aunque las erupciones pueden ser peligrosas, los volcanes también tienen beneficios: la ceniza vuelve muy fértiles los suelos, y por eso alrededor de muchos volcanes hay campos de cultivo."],
    preguntas: [["¿Cómo se llama la cadena de volcanes que cruza México?", ["Eje Neovolcánico", "Sierra Madre Oriental", "Cordillera de los Andes"]], ["¿Qué es la lava?", ["magma que sale a la superficie", "agua caliente", "ceniza fría"]], ["¿Qué tiene de especial el Paricutín?", ["nació en 1943 en el terreno de un campesino", "es el más alto del mundo", "está bajo el mar"]], ["¿Qué beneficio tienen los volcanes?", ["su ceniza hace fértiles los suelos", "producen agua potable", "evitan los temblores"]]] },
  { id: "reciclaje-en-casa", grado: 5, tema: "naturaleza", titulo: "Reducir, reutilizar y reciclar",
    texto: ["Cada persona en México produce, en promedio, alrededor de un kilo de basura al día. Si lo multiplicamos por todos los habitantes del país, la cantidad es enorme.", "Para disminuir este problema existe la regla de las tres erres. La primera y más importante es reducir: comprar solo lo necesario y evitar productos con demasiado empaque. La segunda es reutilizar: darles una nueva vida a los objetos, como usar un frasco de vidrio para guardar lápices.", "La tercera es reciclar: separar los residuos para que algunos materiales, como el papel, el vidrio, el aluminio y ciertos plásticos, se conviertan en productos nuevos.", "Separar la basura en casa es sencillo: basta con tener un contenedor para residuos orgánicos, como cáscaras y restos de comida, y otro para los inorgánicos. Así, lo que tiramos deja de ser basura y se convierte en un recurso."],
    preguntas: [["¿Cuánta basura produce en promedio una persona en México al día?", ["alrededor de un kilo", "diez kilos", "un gramo"]], ["¿Cuál es la erre más importante según el texto?", ["reducir", "reciclar", "reutilizar"]], ["¿Qué es un ejemplo de reutilizar?", ["usar un frasco para guardar lápices", "tirar el frasco", "comprar más frascos"]], ["¿Qué tipo de residuos son las cáscaras de fruta?", ["orgánicos", "inorgánicos", "metálicos"]]] },
  { id: "que-es-la-ia", grado: 5, tema: "tecnologia", titulo: "¿Qué es la inteligencia artificial?",
    texto: ["Seguramente has escuchado hablar de la inteligencia artificial, o IA. Pero ¿qué es exactamente?", "La IA es una tecnología que permite a las computadoras realizar tareas que antes solo podían hacer las personas, como reconocer voces, traducir idiomas o recomendar canciones. Para lograrlo, los programas analizan enormes cantidades de información y encuentran patrones.", "La IA puede ser una gran herramienta. Ayuda a los médicos a detectar enfermedades, a los científicos a estudiar el clima y a los estudiantes a resolver dudas. Sin embargo, no es perfecta: a veces se equivoca o da información falsa con mucha seguridad.", "Por eso es importante usarla con responsabilidad: verificar la información en otras fuentes, no compartir datos personales y recordar que pensar por nosotros mismos sigue siendo indispensable."],
    preguntas: [["¿Qué permite hacer la IA a las computadoras?", ["tareas que antes solo hacían las personas", "funcionar sin electricidad", "jugar solas"]], ["¿Cómo aprenden los programas de IA?", ["analizando mucha información y encontrando patrones", "leyendo un solo libro", "preguntando a los niños"]], ["¿Qué problema puede tener la IA?", ["a veces da información falsa", "siempre tiene razón", "no puede traducir"]], ["¿Qué recomienda el texto?", ["verificar la información en otras fuentes", "compartir tus datos personales", "dejar de pensar"]]] },
  { id: "juegos-olimpicos", grado: 5, tema: "deporte", titulo: "Los Juegos Olímpicos",
    texto: ["Los Juegos Olímpicos son la competencia deportiva más importante del mundo. Su origen está en la antigua Grecia, donde hace casi tres mil años se celebraban en honor al dios Zeus en la ciudad de Olimpia.", "Los Juegos modernos comenzaron en 1896 en Atenas, gracias al francés Pierre de Coubertin, quien quería unir a los países a través del deporte. Desde entonces se celebran cada cuatro años.", "El símbolo olímpico tiene cinco aros entrelazados que representan la unión de los continentes. Antes de cada edición, una antorcha se enciende en Olimpia y viaja hasta la ciudad sede.", "México organizó los Juegos Olímpicos en 1968, y fue el primer país de habla hispana en hacerlo."],
    preguntas: [["¿Dónde se originaron los Juegos Olímpicos?", ["en la antigua Grecia", "en Roma", "en Francia"]], ["¿En qué año comenzaron los Juegos modernos?", ["1896", "1968", "1900"]], ["¿Qué representan los cinco aros?", ["la unión de los continentes", "cinco deportes", "cinco ciudades"]], ["¿En qué año fue México sede?", ["1968", "1986", "1896"]]] },

  /* 6° */
  { id: "noticias-falsas", grado: 6, tema: "tecnologia", titulo: "¿Cómo reconocer una noticia falsa?",
    texto: ["Todos los días recibimos información por redes sociales, mensajes y videos. Gran parte es útil, pero también circulan noticias falsas, conocidas en inglés como fake news, creadas para engañar, asustar o conseguir más visitas.", "Las noticias falsas suelen tener algunas características en común: títulos exagerados que provocan emociones fuertes, ausencia de fuentes confiables, fechas antiguas presentadas como recientes o imágenes sacadas de contexto.", "Antes de creer o compartir algo, conviene hacerse algunas preguntas: ¿quién publicó la información?, ¿aparece en medios reconocidos?, ¿cuándo ocurrió?, ¿la imagen corresponde realmente a ese hecho? Buscar la misma noticia en dos o tres fuentes distintas es una de las mejores estrategias.", "Compartir información sin verificarla puede causar daño real: generar miedo, perjudicar la reputación de una persona o difundir consejos de salud peligrosos. Ser un buen ciudadano digital significa pensar antes de compartir."],
    preguntas: [["¿Para qué se crean muchas noticias falsas?", ["para engañar, asustar o conseguir visitas", "para informar con precisión", "para enseñar matemáticas"]], ["¿Cuál es una característica común de las noticias falsas?", ["títulos exagerados que provocan emociones fuertes", "muchas fuentes confiables", "fechas siempre correctas"]], ["¿Cuál es una de las mejores estrategias para verificar?", ["buscar la noticia en varias fuentes distintas", "compartirla rápido", "leer solo el título"]], ["¿Qué significa ser un buen ciudadano digital?", ["pensar antes de compartir", "tener muchos seguidores", "usar el teléfono todo el día"]]] },
  { id: "cambio-climatico", grado: 6, tema: "naturaleza", titulo: "El cambio climático",
    texto: ["La Tierra está rodeada por una capa de gases, la atmósfera, que retiene parte del calor del Sol. Gracias a este fenómeno, llamado efecto invernadero, nuestro planeta tiene una temperatura adecuada para la vida.", "El problema comenzó cuando las actividades humanas, como quemar petróleo, gas y carbón en fábricas y automóviles, o talar grandes extensiones de bosque, aumentaron la cantidad de dióxido de carbono en la atmósfera. Con más gases, se retiene más calor y la temperatura promedio del planeta sube.", "Las consecuencias ya se observan: sequías más largas, lluvias más intensas, deshielo de los glaciares y aumento del nivel del mar. Muchos animales y plantas tienen dificultades para adaptarse a cambios tan rápidos.", "Enfrentar el cambio climático requiere acciones de gobiernos y empresas, como usar energía solar y eólica, pero también de cada persona: ahorrar energía, usar transporte público o bicicleta, plantar árboles y evitar el desperdicio."],
    preguntas: [["¿Qué es el efecto invernadero?", ["la retención de calor por los gases de la atmósfera", "la lluvia en los invernaderos", "el frío del invierno"]], ["¿Qué actividad humana aumenta el dióxido de carbono?", ["quemar petróleo, gas y carbón", "leer libros", "plantar árboles"]], ["¿Cuál es una consecuencia del cambio climático?", ["el deshielo de los glaciares", "más nieve en las playas", "que la Tierra deje de girar"]], ["¿Qué fuente de energía limpia menciona el texto?", ["la energía solar", "el carbón", "el petróleo"]]] },
  { id: "frida-kahlo", grado: 6, tema: "cultura", titulo: "Frida Kahlo: pintar la propia vida",
    texto: ["Frida Kahlo nació en 1907 en Coyoacán, en la Ciudad de México, en una casa pintada de azul intenso que hoy es un museo conocido como la Casa Azul.", "A los seis años enfermó de poliomielitis, y a los dieciocho sufrió un grave accidente cuando el autobús en el que viajaba chocó con un tranvía. Durante su larga recuperación en cama, su madre le colocó un espejo sobre la cama y Frida comenzó a pintar autorretratos.", "Sus obras están llenas de colores intensos y de elementos de la cultura mexicana: vestidos tradicionales, flores, animales y símbolos prehispánicos. En ellas expresó su dolor, sus emociones y su identidad.", "Hoy, Frida Kahlo es una de las artistas más reconocidas del mundo. Su historia nos recuerda que el arte puede ser una forma poderosa de enfrentar las dificultades."],
    preguntas: [["¿Cómo se conoce hoy la casa donde nació Frida?", ["la Casa Azul", "la Casa Roja", "el Palacio de Bellas Artes"]], ["¿Qué le ocurrió a los dieciocho años?", ["sufrió un grave accidente", "ganó un premio", "se mudó a Europa"]], ["¿Por qué empezó a pintar autorretratos?", ["su madre le puso un espejo sobre la cama", "se lo pidió su maestro", "no tenía otros modelos por falta de dinero"]], ["¿Qué elementos aparecen en sus obras?", ["colores intensos y símbolos de la cultura mexicana", "solo paisajes de otros países", "dibujos en blanco y negro"]]] },
  { id: "viaje-a-marte", grado: 6, tema: "espacio", titulo: "Rumbo a Marte",
    texto: ["Marte, conocido como el planeta rojo, es uno de los destinos que más interesan a los científicos. Su color se debe al óxido de hierro que cubre su superficie, algo parecido a la herrumbre.", "Desde hace años, varios vehículos robóticos, llamados rovers, exploran su superficie. Han encontrado señales de que hace mucho tiempo hubo agua líquida en Marte, lo que hace pensar que pudo haber condiciones para la vida.", "Llevar personas a Marte es un desafío enorme. El viaje podría durar entre seis y nueve meses solo de ida. Además, el planeta es muy frío, su atmósfera es muy delgada y está formada principalmente por dióxido de carbono, por lo que los astronautas necesitarían trajes y refugios especiales.", "Aun así, agencias espaciales y empresas trabajan en tecnologías para lograrlo. Quizá alguno de los estudiantes que hoy leen este texto sea parte de la primera misión tripulada al planeta rojo."],
    preguntas: [["¿Por qué Marte es de color rojo?", ["por el óxido de hierro de su superficie", "porque es muy caliente", "porque refleja al Sol"]], ["¿Qué han encontrado los rovers?", ["señales de que hubo agua líquida", "ciudades antiguas", "plantas verdes"]], ["¿Cuánto podría durar el viaje de ida?", ["entre seis y nueve meses", "dos semanas", "diez años"]], ["¿Por qué los astronautas necesitarían trajes especiales?", ["porque el planeta es frío y su atmósfera es delgada", "porque llueve mucho", "porque hay mucho oxígeno"]]] }
];

/* ---------- Ilustraciones por tema (lecturas en español) ---------- */
const TEMAS = {
  animales: { n: "Animales", bg: "#F7DDD4", c: "coral" },
  espacio: { n: "Espacio", bg: "#1E3A5F", c: "sky" },
  familia: { n: "Familia", bg: "#F6E3C4", c: "mustard" },
  naturaleza: { n: "Naturaleza", bg: "#DDEEE5", c: "mint" },
  tecnologia: { n: "Tecnología", bg: "#DBE9F5", c: "sky" },
  deporte: { n: "Deporte", bg: "#E6F2DA", c: "mint" },
  ciencia: { n: "Ciencia", bg: "#EEE8FB", c: "coral" },
  cultura: { n: "Cultura", bg: "#FBE6D8", c: "mustard" }
};
const ES_ART = {
  "mi-perro-toby": `<ellipse cx="160" cy="118" rx="44" ry="26" fill="#B07A4A"/><circle cx="118" cy="92" r="24" fill="#B07A4A"/><ellipse cx="102" cy="100" rx="9" ry="20" fill="#7A5232"/><ellipse cx="134" cy="98" rx="9" ry="20" fill="#7A5232"/><circle cx="112" cy="88" r="3.5" fill="#1E3A5F"/><circle cx="126" cy="88" r="3.5" fill="#1E3A5F"/><circle cx="118" cy="98" r="4" fill="#1E3A5F"/>${[130, 150, 178, 196].map((x) => `<rect x="${x}" y="134" width="10" height="24" rx="5" fill="#B07A4A"/>`).join("")}<path d="M202 108q18-10 14-28" stroke="#B07A4A" stroke-width="8" stroke-linecap="round" fill="none"/><circle cx="246" cy="146" r="14" fill="#E8846B"/>`,
  "la-luna": `<circle cx="170" cy="86" r="44" fill="#F3E7B8"/><circle cx="154" cy="74" r="7" fill="#E0D29A"/><circle cx="186" cy="100" r="9" fill="#E0D29A"/><circle cx="176" cy="66" r="4" fill="#E0D29A"/>${[[50, 40], [90, 120], [260, 50], [280, 130], [230, 150], [60, 150]].map(([x, y]) => `<path d="${starPath(x, y, 7, 3)}" fill="#F2C94C"/>`).join("")}`,
  "el-cumple-de-ana": `<rect x="110" y="100" width="100" height="50" rx="8" fill="#7A4E2D"/><rect x="110" y="96" width="100" height="14" rx="7" fill="#F3CFA8"/>${[124, 138, 152, 166, 180, 194].map((x) => `<rect x="${x}" y="74" width="6" height="22" rx="2" fill="${["#E8846B", "#6FA8D6", "#7FB89E"][x % 3]}"/><path d="M${x + 3} 62q5 6 0 12-5-6 0-12z" fill="#F2C94C"/>`).join("")}${[[60, 40, "#E8846B"], [262, 52, "#6FA8D6"]].map(([x, y, c]) => `<ellipse cx="${x}" cy="${y}" rx="16" ry="20" fill="${c}"/><path d="M${x} ${y + 20}q4 20-4 40" stroke="#1E3A5F" stroke-width="1.5" fill="none"/>`).join("")}`,
  "la-semilla": `<path d="M126 130h68l-8 40h-52z" fill="#C96A52"/><rect x="120" y="122" width="80" height="14" rx="4" fill="#E8846B"/><path d="M160 124V80" stroke="#5E9E82" stroke-width="5"/><path d="M160 100q-28-4-34-24 24 0 34 18zM160 88q26-6 32-26-24 2-32 20z" fill="#7FB89E"/><circle cx="262" cy="44" r="18" fill="#F2C94C"/>`,
  "los-ajolotes": `<path d="M0 140q80-20 160 0t160 0v40H0z" fill="#9FCBB5"/><ellipse cx="160" cy="98" rx="62" ry="22" fill="#F4A7B9"/><circle cx="108" cy="92" r="24" fill="#F4A7B9"/>${[-1, 1].map((s) => [0, 1, 2].map((i) => `<path d="M${108 + s * 18} ${80 + i * 8}q${s * 18} ${i * 4 - 8} ${s * 26} ${i * 6 - 2}" stroke="#E8708F" stroke-width="5" stroke-linecap="round" fill="none"/>`).join("")).join("")}<circle cx="100" cy="88" r="3.5" fill="#1E3A5F"/><circle cx="118" cy="88" r="3.5" fill="#1E3A5F"/><path d="M100 100q9 6 18 0" stroke="#1E3A5F" stroke-width="2" fill="none"/><path d="M220 96q30-14 40 6-20 4-40-6z" fill="#F4A7B9"/>`,
  "el-robot-de-leo": `<rect x="120" y="52" width="80" height="70" rx="8" fill="#C9A672"/><circle cx="144" cy="80" r="11" fill="#FFFDFA" stroke="#6FA8D6" stroke-width="5"/><circle cx="176" cy="80" r="11" fill="#FFFDFA" stroke="#6FA8D6" stroke-width="5"/><rect x="146" y="102" width="28" height="6" rx="3" fill="#1E3A5F"/><path d="M120 92h-36M200 92h36" stroke="#E8846B" stroke-width="6" stroke-linecap="round"/><rect x="130" y="122" width="60" height="34" rx="6" fill="#6FA8D6"/><path d="M160 52V34" stroke="#1E3A5F" stroke-width="3"/><circle cx="160" cy="30" r="6" fill="#E0B04A"/>`,
  "dia-de-lluvia": `${[[60, 40], [180, 30]].map(([x, y]) => `<g fill="#C3D3E4"><circle cx="${x}" cy="${y}" r="18"/><circle cx="${x + 22}" cy="${y - 6}" r="22"/><circle cx="${x + 46}" cy="${y + 2}" r="16"/><rect x="${x - 8}" y="${y}" width="66" height="16" rx="8"/></g>`).join("")}${[[70, 80], [100, 96], [190, 76], [222, 92], [250, 78]].map(([x, y]) => `<path d="M${x} ${y}q-4 8 0 12q4-4 0-12z" fill="#6FA8D6"/>`).join("")}<ellipse cx="160" cy="152" rx="80" ry="12" fill="#9DBDDD"/><path d="M140 140h40l-8 10h-24z" fill="#FFFDFA"/><path d="M160 140v-22l14 18z" fill="#E8846B"/>`,
  "el-partido": `<rect x="0" y="120" width="320" height="60" fill="#7FB89E"/><rect x="40" y="70" width="64" height="50" fill="none" stroke="#FFFDFA" stroke-width="5"/>${person(190, 128, "#E7B48F", "#E8846B", 1.15)}${person(240, 130, "#C98F66", "#E8846B", 1.15)}<circle cx="140" cy="132" r="12" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="2"/><path d="M140 125l6 4-2 7h-8l-2-7z" fill="#1E3A5F"/>`,
  "las-abejas": `${[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => { const x = 70 + c * 36 + (r % 2) * 18, y = 50 + r * 32; return `<path d="M${x} ${y - 18}l16 9v18l-16 9-16-9v-18z" fill="${(r + c) % 3 ? "#E0B04A" : "#F2C94C"}" stroke="#C9952E" stroke-width="2"/>`; }).join("")).join("")}<g transform="translate(240 96)"><ellipse cx="0" cy="0" rx="22" ry="15" fill="#F2C94C"/><path d="M-8-14v28M6-14v28" stroke="#1E3A5F" stroke-width="5"/><ellipse cx="-4" cy="-22" rx="12" ry="8" fill="#FFFDFA" opacity=".85"/><ellipse cx="10" cy="-20" rx="10" ry="7" fill="#FFFDFA" opacity=".85"/><circle cx="22" cy="-2" r="7" fill="#1E3A5F"/></g>`,
  "las-estrellas": `${[[70, 50, 18], [160, 80, 26], [250, 46, 14], [110, 130, 10], [230, 130, 16], [290, 100, 8], [40, 110, 8]].map(([x, y, r]) => `<path d="${starPath(x, y, r, r * .45)}" fill="#F2C94C"/>`).join("")}`,
  "los-dinosaurios": `<path d="M60 130q20-60 90-50 30-40 60-46 18 0 12 14-14 6-30 34 10 30-10 48z" fill="#7FB89E"/><circle cx="214" cy="44" r="3" fill="#1E3A5F"/>${[[90, 128], [110, 130], [160, 130], [178, 128]].map(([x, y]) => `<rect x="${x}" y="${y}" width="12" height="28" rx="5" fill="#5E9E82"/>`).join("")}${[[100, 86], [130, 76], [160, 74]].map(([x, y]) => `<path d="M${x} ${y}l8-16 8 16z" fill="#E0B04A"/>`).join("")}<path d="M60 130q-30 4-46 20" stroke="#7FB89E" stroke-width="12" stroke-linecap="round" fill="none"/>`,
  "la-feria-de-ciencias": `<path d="M100 150l50-80h20l50 80z" fill="#B98B5E"/><path d="M150 70q10-20 20 0" fill="#E8846B"/>${[[150, 60, 10], [166, 46, 8], [176, 62, 9], [140, 46, 7]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#E8846B"/>`).join("")}<path d="M156 72q-6 30-18 50M166 72q6 24 16 44" stroke="#E8846B" stroke-width="7" stroke-linecap="round" fill="none"/><rect x="236" y="104" width="34" height="46" rx="6" fill="#BCD8EF"/><rect x="236" y="104" width="34" height="12" fill="#6FA8D6"/>`,
  "la-mariposa-monarca": `${[[100, 80, 1], [210, 60, .7], [240, 130, .55]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0q-50-50-60 0 10 30 60 0zM0 0q50-50 60 0-10 30-60 0zM0 4q-36 40-40 6zM0 4q36 40 40 6z" fill="#E8846B" stroke="#1E3A5F" stroke-width="3"/><path d="M0-14v40" stroke="#1E3A5F" stroke-width="5" stroke-linecap="round"/></g>`).join("")}`,
  "cuidemos-el-agua": `<path d="M160 30q-44 60-44 88a44 44 0 0 0 88 0q0-28-44-88z" fill="#6FA8D6"/><path d="M140 108q0 20 20 26" stroke="#FFFDFA" stroke-width="5" stroke-linecap="round" fill="none"/>${[[70, 70], [250, 90], [230, 40]].map(([x, y]) => `<path d="M${x} ${y - 14}q-10 14-10 20a10 10 0 0 0 20 0q0-6-10-20z" fill="#9DBDDD"/>`).join("")}`,
  "videojuegos-y-descanso": `<rect x="90" y="92" width="140" height="56" rx="28" fill="#6FA8D6"/><path d="M118 120h22M129 109v22" stroke="#FFFDFA" stroke-width="6" stroke-linecap="round"/><circle cx="196" cy="112" r="6" fill="#FFFDFA"/><circle cx="210" cy="126" r="6" fill="#FFFDFA"/><path d="M230 50a26 26 0 1 0 20 38 22 22 0 1 1-20-38z" fill="#F2C94C"/>${T(80, 50, "z", 18, "#1E3A5F")}${T(96, 36, "z", 14, "#1E3A5F")}`,
  "el-maiz": `${[0, 1, 2].map((i) => `<g transform="rotate(${-20 + i * 20} 160 160)"><ellipse cx="160" cy="80" rx="16" ry="46" fill="${["#E0B04A", "#4A4F9C", "#C9523E"][i]}"/>${Array.from({ length: 6 }, (_, k) => `<path d="M146 ${48 + k * 11}h28" stroke="#FFFDFA" stroke-opacity=".35" stroke-width="2"/>`).join("")}<path d="M160 126q-26-30-22-70 6 34 22 70z" fill="#7FB89E"/></g>`).join("")}`,
  "volcanes-de-mexico": `<path d="M40 160l90-100h60l90 100z" fill="#8A6A55"/><path d="M130 60h60l-12 14q-18 8-36 0z" fill="#E8846B"/><path d="M150 64q-6 30-20 50M170 64q8 26 18 44" stroke="#E8846B" stroke-width="7" stroke-linecap="round" fill="none"/>${[[150, 40, 14], [174, 30, 18], [196, 18, 12]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#C3BFC8"/>`).join("")}`,
  "reciclaje-en-casa": `${[["#7FB89E", 70], ["#6FA8D6", 140], ["#E0B04A", 210]].map(([c, x]) => `<rect x="${x}" y="70" width="52" height="80" rx="8" fill="${c}"/><rect x="${x - 4}" y="62" width="60" height="12" rx="5" fill="${c}"/>`).join("")}<path d="M150 104l10-14 10 14h-6v12h-8v-12z" fill="#FFFDFA"/>`,
  "que-es-la-ia": `<rect x="96" y="40" width="128" height="88" rx="12" fill="#1E3A5F"/><rect x="106" y="50" width="108" height="68" rx="6" fill="#DBE9F5"/>${[[130, 74], [160, 66], [190, 80], [146, 98], [178, 100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#6FA8D6"/>`).join("")}<path d="M130 74 160 66 190 80 178 100 146 98z" stroke="#6FA8D6" stroke-width="2" fill="none"/><rect x="140" y="128" width="40" height="10" fill="#1E3A5F"/><rect x="120" y="138" width="80" height="8" rx="4" fill="#1E3A5F"/>`,
  "juegos-olimpicos": `${[[110, 80, "#6FA8D6"], [160, 80, "#1E3A5F"], [210, 80, "#E8846B"], [135, 104, "#E0B04A"], [185, 104, "#7FB89E"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="22" fill="none" stroke="${c}" stroke-width="7"/>`).join("")}`,
  "noticias-falsas": `<rect x="86" y="34" width="148" height="112" rx="8" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="3"/><rect x="100" y="48" width="90" height="12" rx="3" fill="#1E3A5F"/>${[70, 84, 98, 112, 126].map((y) => `<rect x="100" y="${y}" width="${y % 28 ? 120 : 90}" height="6" rx="3" fill="#E1DBD0"/>`).join("")}<circle cx="230" cy="130" r="26" fill="none" stroke="#E8846B" stroke-width="7"/><path d="M248 148l20 20" stroke="#E8846B" stroke-width="9" stroke-linecap="round"/>`,
  "cambio-climatico": `<circle cx="160" cy="92" r="52" fill="#6FA8D6"/><path d="M128 66q20-10 30 6t-10 30 4 30q-30-12-34-40t10-26zM180 70q18 6 16 26t-16 22q4-20-8-30t8-18z" fill="#7FB89E"/><rect x="246" y="40" width="14" height="100" rx="7" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="3"/><circle cx="253" cy="140" r="14" fill="#E8846B" stroke="#1E3A5F" stroke-width="3"/><rect x="249" y="70" width="8" height="66" fill="#E8846B"/>`,
  "frida-kahlo": `${[[110, 60, "#E8846B"], [150, 46, "#F2C94C"], [190, 50, "#E8846B"], [226, 66, "#A98BE8"]].map(([x, y, c]) => `<g>${petals(x, y, 10, 9, c, 6)}<circle cx="${x}" cy="${y}" r="7" fill="#F2C94C"/></g>`).join("")}<path d="M90 100q70-30 160 0" stroke="#7FB89E" stroke-width="6" fill="none"/><rect x="110" y="110" width="100" height="56" rx="6" fill="#4A6FB5"/><rect x="118" y="118" width="84" height="40" rx="3" fill="#DBE9F5"/>`,
  "viaje-a-marte": `<circle cx="210" cy="92" r="50" fill="#D9734E"/><circle cx="190" cy="76" r="9" fill="#B85A3A"/><circle cx="226" cy="112" r="12" fill="#B85A3A"/><g transform="rotate(30 90 90)"><rect x="80" y="50" width="22" height="60" rx="11" fill="#FFFDFA"/><circle cx="91" cy="74" r="6" fill="#6FA8D6"/><path d="M80 98l-10 14h10zM102 98l10 14h-10z" fill="#E8846B"/><path d="M84 112q7 18 14 0" fill="#F2C94C"/></g>${[[40, 40], [280, 30], [60, 150]].map(([x, y]) => `<path d="${starPath(x, y, 5, 2)}" fill="#F2C94C"/>`).join("")}`
};
const esArt = (l) => scene(TEMAS[l.tema].bg, ES_ART[l.id] || "", l.tema === "espacio" ? "#6FA8D6" : "#FFFFFF", l.tema === "espacio" ? .2 : .45);

ICONS.speaker = '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7"/>';
ICONS.arrow = ICONS.arrow || '<path d="M5 12h14M13 6l6 6-6 6"/>';

/* ---------- Estilos ---------- */
document.head.insertAdjacentHTML("beforeend", `<style>
.lvl[data-level="A1+"]{background:var(--sky-soft);color:#3F7FB5}
.lvl[data-level="A2+"]{background:var(--mustard-soft);color:#A9781A}
.lvl[data-level="B1+"]{background:var(--coral-soft);color:#C25F45}
.lvl[data-level="B2"]{background:#EEE8FB;color:#7A5CC4}
.lvl[data-level="C1"]{background:#E3E9F1;color:#1E3A5F}
.lvl[data-level="C2"]{background:#FBE6EF;color:#B8456F}
.reading-text[data-level="A1+"]{font-size:20px}
.es-banner{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:16px 18px;border-radius:20px;background:var(--surface);border:1px solid var(--line);text-decoration:none;margin-top:18px}
.es-banner:hover{border-color:var(--ink-3)}
.es-banner .mark{width:52px;height:52px;border-radius:16px;background:var(--coral-soft);color:var(--coral);display:grid;place-items:center;font-weight:800;font-size:17px}
.es-banner b{display:block;font-size:16.5px}
.es-banner small{color:var(--ink-2);font-size:14px;line-height:1.4}
.grade-tabs{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:6px}
.grade-tab{padding:12px 2px;min-width:0;border-radius:16px;border:1.5px solid var(--line);background:var(--surface);display:grid;gap:2px;text-align:center}
.grade-tab b{font-size:20px;line-height:1}
.grade-tab small{font-size:11.5px;color:var(--ink-3);font-weight:500}
.grade-tab[aria-pressed="true"]{background:var(--navy);color:var(--navy-ink);border-color:var(--navy)}
.grade-tab[aria-pressed="true"] small{color:var(--navy-ink);opacity:.8}
.es-text{font-family:var(--font-read);font-size:19px;line-height:1.8;display:grid;gap:14px;margin-top:20px}
.es-text[data-g="1"],.es-text[data-g="2"]{font-size:24px;line-height:1.85}
.es-text[data-g="3"]{font-size:21px}
.listen-btn{display:inline-flex;align-items:center;gap:10px}
</style>`);

/* ---------- Biblioteca: niveles por etapa y acceso a lecturas en español ---------- */
const STAGE_INFO = [
  { id: "kids", name: "MOVA Kids", ages: "6 a 8 años", c: "coral" },
  { id: "children", name: "MOVA Children", ages: "9 a 12 años", c: "sky" },
  { id: "teens", name: "MOVA Teens", ages: "12 a 17 años", c: "mint" }
];
const stageName = (id) => (STAGE_INFO.find((s) => s.id === id) || {}).name || "";
const esBanner = () => `<a class="es-banner" href="#/lecturas"><span class="mark">ES</span><span><b>Lecturas en español</b><small>Comprensión lectora de 1° a 6° de primaria, con temas actuales y preguntas.</small></span>${ico("arrow", 20)}</a>`;
window.viewLibrary = function () {
  if (!STAGE_LEVELS[libF.stage]) libF.stage = "kids";
  const done = READINGS.filter((r) => isDone(r.id)).length;
  const topics = [...new Set(READINGS.map((r) => r.topic))].sort();
  return {
    title: "Reading Library",
    html: `
    <section class="page-head wrap">
      <p class="kicker">Reading Library</p>
      <h1>Stories for every stage</h1>
      <p class="lead">Elige tu etapa MOVA y después tu nivel. Has completado ${done} de ${READINGS.length} lecturas.</p>
      ${esBanner()}
    </section>
    <section class="wrap filters" aria-label="Filter readings">
      <div class="stage-tabs" role="group" aria-label="Etapa">${STAGE_INFO.map((s) => `<button type="button" class="stage-tab" data-stage="${s.id}" data-c="${s.c}" aria-pressed="${libF.stage === s.id}"><b>${s.name}</b><small>${s.ages}</small></button>`).join("")}</div>
      ${searchField("lib-q", "Search readings", libF.q)}
      <div class="chiprow" role="group" aria-label="Level" id="lib-levels"></div>
      <div class="selects"><label class="select"><span>Topic</span><select id="lib-topic"><option value="all">All topics</option>${topics.map((t) => `<option value="${esc(t)}" ${libF.topic === t ? "selected" : ""}>${esc(t)}</option>`).join("")}</select></label></div>
    </section>
    <section class="wrap"><p class="count" id="lib-count" aria-live="polite"></p><div id="lib-results"></div></section>`,
    mount(root) {
      const out = $("#lib-results", root), count = $("#lib-count", root), lv = $("#lib-levels", root);
      const drawLevels = () => {
        const lvls = STAGE_LEVELS[libF.stage];
        if (libF.level !== "all" && !lvls.includes(libF.level)) libF.level = "all";
        lv.innerHTML = ["all", ...lvls].map((l) => `<button type="button" class="fchip" data-level="${l}" aria-pressed="${libF.level === l}">${l === "all" ? "All levels" : l}</button>`).join("");
      };
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
      $$(".stage-tab", root).forEach((b) => b.addEventListener("click", () => { libF.stage = b.dataset.stage; $$(".stage-tab", root).forEach((x) => x.setAttribute("aria-pressed", x === b)); drawLevels(); update(); }));
      lv.addEventListener("click", (e) => { const b = e.target.closest(".fchip"); if (!b) return; libF.level = b.dataset.level; $$(".fchip", lv).forEach((x) => x.setAttribute("aria-pressed", x === b)); update(); });
      out.addEventListener("click", (e) => { if (e.target.closest("[data-reset]")) { Object.assign(libF, { level: "all", topic: "all", q: "" }); $("#lib-q", root).value = ""; $("#lib-topic", root).value = "all"; drawLevels(); update(); } });
      drawLevels(); update();
    }
  };
};

/* ---------- Lecturas en español ---------- */
const ES_KEY = "mova-lecturas-leidas";
const esDone = () => { try { return JSON.parse(localStorage.getItem(ES_KEY) || "[]"); } catch (e) { return []; } };
const esIsDone = (id) => esDone().includes(id);
const esToggle = (id) => { const d = esDone(); const i = d.indexOf(id); if (i < 0) d.push(id); else d.splice(i, 1); try { localStorage.setItem(ES_KEY, JSON.stringify(d)); } catch (e) {} return i < 0; };
const esF = { grado: 1 };
const esMin = (l) => Math.max(1, Math.round(l.texto.join(" ").split(/\s+/).length / (40 + l.grado * 15)));
function esCard(l) {
  const t = TEMAS[l.tema];
  return `<article class="item">
    <div class="thumb" aria-hidden="true">${esArt(l)}</div>
    <div class="item-top"><span class="chip">${l.grado}° de primaria</span><span class="chip">${esc(t.n)}</span></div>
    <h3 class="item-title"><a class="stretch" href="#/lecturas/${l.id}">${esc(l.titulo)}</a></h3>
    <p class="item-desc">${esc(l.texto[0])}</p>
    <div class="item-meta">${ico("clock", 16)}<span>${esMin(l)} min de lectura</span>${esIsDone(l.id) ? `<span class="done-tag">${ico("check", 15)} Leída</span>` : ""}</div>
  </article>`;
}
function viewLecturas() {
  const total = LECTURAS.filter((l) => esIsDone(l.id)).length;
  return {
    title: "Lecturas en español",
    html: `
    <section class="page-head wrap">
      <a class="back" href="#/library">${ico("back", 18)} Reading Library</a>
      <p class="kicker">Lectura de comprensión</p>
      <h1>Lecturas en español</h1>
      <p class="lead">Textos para practicar la lectura y la comprensión, de 1° a 6° de primaria. Elige tu grado, lee con calma y contesta las preguntas. Has leído ${total} de ${LECTURAS.length}.</p>
    </section>
    <section class="wrap filters"><p class="hint" style="margin:0 0 8px">Grado de primaria</p><div class="grade-tabs" role="group" aria-label="Grado">${[1, 2, 3, 4, 5, 6].map((g) => `<button type="button" class="grade-tab" data-g="${g}" aria-pressed="${esF.grado === g}"><b>${g}°</b></button>`).join("")}</div></section>
    <section class="wrap"><p class="count" id="es-count"></p><div class="grid cols" id="es-results"></div></section>`,
    mount(root) {
      const out = $("#es-results", root);
      const update = () => {
        const list = LECTURAS.filter((l) => l.grado === esF.grado);
        $("#es-count", root).textContent = `${esF.grado}° de primaria: ${list.length} lecturas`;
        out.innerHTML = list.map(esCard).join("");
      };
      $$(".grade-tab", root).forEach((b) => b.addEventListener("click", () => { esF.grado = +b.dataset.g; $$(".grade-tab", root).forEach((x) => x.setAttribute("aria-pressed", x === b)); update(); }));
      update();
    }
  };
}
let esSpeaking = false;
function esSpeak(text, btn) {
  const s = window.speechSynthesis; if (!s) return;
  if (esSpeaking) { s.cancel(); esSpeaking = false; btn.querySelector("span").textContent = "Escuchar la lectura"; return; }
  s.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang = "es-MX"; u.rate = .88; u.movaGender = "f";
  u.onend = u.onerror = () => { esSpeaking = false; btn.querySelector("span").textContent = "Escuchar la lectura"; };
  esSpeaking = true; btn.querySelector("span").textContent = "Detener"; s.speak(u);
}
function viewLectura(id) {
  const l = LECTURAS.find((x) => x.id === id);
  if (!l) return viewNotFound("No encontramos esa lectura.", "#/lecturas", "Ver todas las lecturas");
  const same = LECTURAS.filter((x) => x.grado === l.grado), i = same.indexOf(l), prev = same[i - 1], next = same[i + 1];
  const qs = l.preguntas.map(([q, opts], qi) => ({ q, correct: opts[0], opts: shuffle(opts, seeded(hashStr(l.id + qi))) }));
  const n = qs.length;
  const doneB = () => { const d = esIsDone(l.id); return `<button class="btn btn-done ${d ? "is-done" : ""}" type="button" data-es-done aria-pressed="${d}">${ico("check", 20)}<span>${d ? "Leída" : "Marcar como leída"}</span></button>`; };
  return {
    title: l.titulo,
    html: `
    <article class="narrow">
      <div class="reading-head">
        <a class="back" href="#/lecturas">${ico("back", 18)} Lecturas en español</a>
        <div class="chips"><span class="chip">${l.grado}° de primaria</span><span class="chip">${esc(TEMAS[l.tema].n)}</span><span class="chip">${esMin(l)} min de lectura</span></div>
        <h1>${esc(l.titulo)}</h1>
        <div class="thumb thumb-lg" aria-hidden="true">${esArt(l)}</div>
        <div class="actions">${window.speechSynthesis ? `<button class="btn btn-ghost listen-btn" type="button" id="es-listen">${ico("speaker", 20)}<span>Escuchar la lectura</span></button>` : ""}${doneB()}</div>
      </div>
      <div class="es-text" data-g="${l.grado}">${l.texto.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <section class="block" aria-labelledby="q-h">
        <h2 id="q-h">¿Qué entendiste?</h2>
        <p class="hint">Elige la mejor respuesta para cada pregunta.</p>
        <div id="rq">${qs.map((q, qi) => `
          <fieldset class="rq" data-q="${qi}">
            <legend><span>${qi + 1}.</span>${esc(q.q)}</legend>
            <div class="rq-opts">${q.opts.map((o) => `<label class="opt"><input type="radio" name="q${qi}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join("")}</div>
          </fieldset>`).join("")}</div>
        <div class="actions"><button class="btn btn-primary" type="button" id="rq-check">Revisar respuestas</button><button class="btn btn-ghost" type="button" id="rq-reset" hidden>${ico("refresh", 18)} Intentar de nuevo</button></div>
        <p class="result" id="rq-result" role="status"></p>
      </section>
      <nav class="pager" aria-label="Más lecturas">
        ${prev ? `<a href="#/lecturas/${prev.id}"><small>Anterior</small>${esc(prev.titulo)}</a>` : ""}
        ${next ? `<a href="#/lecturas/${next.id}"><small>Siguiente</small>${esc(next.titulo)}</a>` : ""}
      </nav>
    </article>`,
    mount(root) {
      const lb = $("#es-listen", root);
      if (lb) lb.addEventListener("click", () => esSpeak(`${l.titulo}. ${l.texto.join(" ")}`, lb));
      root.addEventListener("click", (e) => {
        const b = e.target.closest("[data-es-done]"); if (!b) return;
        const on = esToggle(l.id);
        $$("[data-es-done]", root).forEach((x) => { x.classList.toggle("is-done", on); x.setAttribute("aria-pressed", on); $("span", x).textContent = on ? "Leída" : "Marcar como leída"; });
        toast(on ? "¡Muy bien! Lectura marcada como leída." : "Lectura sin marcar.");
      });
      const check = $("#rq-check", root), reset = $("#rq-reset", root), result = $("#rq-result", root);
      check.addEventListener("click", () => {
        const sets = $$(".rq", root), missing = sets.filter((f) => !$("input:checked", f));
        if (missing.length) { result.className = "result warn"; result.textContent = `Contesta todas las preguntas. Te ${missing.length === 1 ? "falta 1" : `faltan ${missing.length}`}.`; $("input", missing[0]).focus(); return; }
        let score = 0;
        sets.forEach((f, qi) => {
          const chosen = $("input:checked", f).value, correct = qs[qi].correct;
          $$(".opt", f).forEach((lab) => { const v = $("input", lab).value; if (v === correct) lab.classList.add("is-correct"); else if (v === chosen) lab.classList.add("is-wrong"); $("input", lab).disabled = true; });
          if (chosen === correct) score++; else f.insertAdjacentHTML("beforeend", `<p class="rq-note">Respuesta correcta: ${esc(correct)}</p>`);
        });
        result.className = `result ${score === n ? "good" : score >= n / 2 ? "mid" : "warn"}`;
        result.textContent = score === n ? `¡Excelente! Tuviste ${score} de ${n} correctas.` : `Tuviste ${score} de ${n} correctas. Vuelve a leer el texto y vuelve a intentarlo.`;
        if (score === n && !esIsDone(l.id)) { esToggle(l.id); $$("[data-es-done]", root).forEach((x) => { x.classList.add("is-done"); x.setAttribute("aria-pressed", true); $("span", x).textContent = "Leída"; }); }
        check.hidden = true; reset.hidden = false;
      });
      reset.addEventListener("click", () => {
        $$(".rq", root).forEach((f) => { $$(".rq-note", f).forEach((x) => x.remove()); $$(".opt", f).forEach((lab) => { lab.classList.remove("is-correct", "is-wrong"); const inp = $("input", lab); inp.disabled = false; inp.checked = false; }); });
        result.textContent = ""; result.className = "result"; check.hidden = false; reset.hidden = true;
      });
    }
  };
}
ROUTES.lecturas = (p) => (p[0] ? viewLectura(p[0]) : viewLecturas());
const markRead = () => { const k = location.hash.replace(/^#\/?/, "").split("/")[0]; if (k === "lecturas") $$('[data-nav="library"]').forEach((a) => a.setAttribute("aria-current", "page")); };
window.addEventListener("hashchange", () => setTimeout(markRead, 0));

/* ---------- Inicio: acceso a lecturas en español y búsqueda ---------- */
const prevHome = window.viewHome;
window.viewHome = function () {
  const v = prevHome();
  v.html = v.html.replace('<div class="areas">', `<div class="areas"><a class="area" href="#/lecturas" data-c="coral"><span class="thumb" aria-hidden="true">${esArt(LECTURAS[4])}</span><h3>Lecturas en español</h3><p>Comprensión lectora de 1° a 6° de primaria.</p></a>`);
  const m = v.mount;
  v.mount = function (root) {
    m(root);
    const input = $("#home-q", root), out = $("#home-results", root);
    if (!input) return;
    input.addEventListener("input", () => {
      const q = input.value.trim(); if (!q) return;
      const hits = LECTURAS.filter((l) => matchesQuery(q, [l.titulo, l.texto.join(" "), TEMAS[l.tema].n, "lectura español"])).slice(0, 3);
      if (!hits.length) return;
      if (out.querySelector(".empty")) out.innerHTML = "";
      out.insertAdjacentHTML("afterbegin", hits.map((h) => `<a class="sr-item" href="#/lecturas/${h.id}"><span class="sr-kind">Lectura</span><span class="sr-title">${esc(h.titulo)}</span></a>`).join(""));
    });
  };
  return v;
};

/* ---------- Juegos ---------- */
const byFile = (f) => MOVA_GAMES.find((g) => g.file === f);
const addAfter = (file, game) => { if (byFile(game.file)) return; const i = MOVA_GAMES.findIndex((g) => g.file === file); if (i < 0) MOVA_GAMES.push(game); else MOVA_GAMES.splice(i + 1, 0, game); };
const wq = byFile("juego-word-quest.html");
if (wq) { wq.tag = "Pre-A1 a C2"; wq.description = "Three stages and 40 worlds, from first words to idioms and academic vocabulary. Every topic shows its level."; }
const lu = byFile("juego-level-up.html");
if (lu) { lu.tag = "A1 a C2"; lu.description = "An adaptive placement test: the questions change with every answer to find your estimated English level, from A1 to C2."; }
const mm = byFile("juego-mision-matematica.html");
if (mm) { mm.tag = "1° de primaria a preparatoria"; }
MOVA_GAMES.unshift({ file: "juego-lee-con-mochi.html", title: "Lee con Mochi", color: "mint", tag: "Lectoescritura", skill: "Sílabas y primeras palabras", description: "Mochi acompaña a los más pequeños a leer, bloque por bloque: vocales, sílabas con a, e, i, o, u, palabras y frases." });
addAfter("juego-sentence-scramble.html", { file: "juego-sopa-de-letras.html", title: "WordSearch", color: "coral", tag: "Inglés y español", skill: "Vocabulario", description: "Find the hidden words. English topics for every MOVA stage, plus Spanish puzzles for early readers." });
addAfter("juego-sopa-de-letras.html", { file: "juego-crucigrama.html", title: "Crossword", color: "sky", tag: "Kids · Children · Teens", skill: "Vocabulary and spelling", description: "Read the clues and complete the crossword. A new puzzle every time you play." });

GAME_ART["juego-level-up.html"] = scene("#1E3A5F", `
  ${[["A1", "#7FB89E", 36, 128], ["A2", "#6FA8D6", 84, 110], ["B1", "#E0B04A", 132, 92], ["B2", "#E8846B", 180, 74], ["C1", "#B59AE0", 228, 56], ["C2", "#F47FB0", 276, 38]].map(([t, c, x, y]) => `<rect x="${x - 20}" y="${y}" width="40" height="${170 - y}" rx="6" fill="${c}"/>` + T(x, y + 16, t, 13, "#1E3A5F", 800)).join("")}
  <path d="${starPath(276, 20, 10, 4)}" fill="#F2C94C"/>`, "#FFFFFF", 0.1);
GAME_ART["juego-lee-con-mochi.html"] = scene("#E3F1EA", `
  <g transform="translate(40 30) scale(1.05)">
    <path d="M36 31 L27 7 L49 22Z" fill="#3F86D9" stroke="#1B2A55" stroke-width="3" stroke-linejoin="round"/><path d="M84 31 L93 7 L71 22Z" fill="#3F86D9" stroke="#1B2A55" stroke-width="3" stroke-linejoin="round"/>
    <path d="M31 104 L31 56 C31 31 45 19 60 19 C75 19 89 31 89 56 L89 104 C83 99 77 99 71 103 C65 108 55 108 49 103 C43 99 37 99 31 104Z" fill="#5BA8F0" stroke="#1B2A55" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="48" cy="52" r="10" fill="#fff" stroke="#1B2A55" stroke-width="3"/><circle cx="72" cy="52" r="10" fill="#fff" stroke="#1B2A55" stroke-width="3"/><circle cx="50" cy="54" r="5" fill="#1B2A55"/><circle cx="74" cy="54" r="5" fill="#1B2A55"/>
    <circle cx="38" cy="67" r="5" fill="#FF8FB1"/><circle cx="82" cy="67" r="5" fill="#FF8FB1"/><path d="M49 70 Q60 80 71 70" stroke="#1B2A55" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  ${[["ma", 196, 40, "#E8846B"], ["pa", 250, 64, "#E0B04A"], ["la", 196, 100, "#6FA8D6"], ["sa", 250, 124, "#7FB89E"]].map(([s, x, y, c]) => `<rect x="${x - 24}" y="${y - 18}" width="48" height="36" rx="10" fill="${c}"/>` + T(x, y, s, 18, "#FFFDFA", 800)).join("")}`);
GAME_ART["juego-sopa-de-letras.html"] = scene("#FBE6D8", `
  <rect x="70" y="20" width="180" height="140" rx="14" fill="#FFFDFA"/>
  ${"CATDOGSUNHFISHBTREELMOONP".split("").map((ch, i) => T(92 + (i % 5) * 34, 40 + Math.floor(i / 5) * 26, ch, 15, "#1E3A5F", 700)).join("")}
  <rect x="80" y="28" width="104" height="24" rx="12" fill="none" stroke="#E8846B" stroke-width="3"/>
  <rect x="146" y="80" width="104" height="24" rx="12" fill="#6FA8D6" opacity=".25"/>
  <rect x="80" y="132" width="138" height="24" rx="12" fill="none" stroke="#7FB89E" stroke-width="3"/>`);
GAME_ART["juego-crucigrama.html"] = scene("#DCEAF6", `
  ${[[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [2, 0], [2, 2], [2, 3], [4, 2], [4, 3], [5, 3], [6, 3]].map(([c, r]) => `<rect x="${68 + c * 28}" y="${30 + r * 30}" width="26" height="28" rx="4" fill="#FFFDFA" stroke="#1E3A5F" stroke-width="1.6"/>`).join("")}
  ${[["B", 0, 1], ["O", 1, 1], ["O", 2, 1], ["K", 3, 1], ["S", 4, 1], ["M", 2, 0], ["O", 2, 2], ["N", 2, 3], ["U", 4, 2], ["N", 4, 3]].map(([ch, c, r]) => T(81 + c * 28, 44 + r * 30, ch, 15, "#1E3A5F", 800)).join("")}
  ${T(73, 34, "1", 8, "#E8846B", 700, "start")}${T(129, 34, "2", 8, "#E8846B", 700, "start")}
  <g transform="rotate(30 262 120)"><rect x="256" y="80" width="12" height="70" rx="3" fill="#E0B04A"/><path d="M256 150h12l-6 14z" fill="#F3CFA8"/></g>`);

/* ---------- Arranque ---------- */
router();
markRead();
})();
