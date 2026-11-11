/* MOVA Learning Studio · Listening Lab (v1) */
(function () {
  "use strict";
  var DATA = [{"id":"kids","name":"MOVA Kids","ages":"6-8","image":"ll-stage-kids.webp","levels":[{"level":"Pre-A1","label":"First steps","acts":[{"id":"kids-prea1-01","title":"My Pet Coco","situation":"Lily shows us her pet.","speakers":["Lily"],"key_words":["cat","orange","small","milk","ball"],"script":[{"id":1,"sp":"Lily","text":"Hi! I'm Lily.","t":0.4,"end":2.16},{"id":2,"sp":"Lily","text":"This is my cat.","t":2.91,"end":4.07},{"id":3,"sp":"Lily","text":"Her name is Coco.","t":4.82,"end":6.3},{"id":4,"sp":"Lily","text":"Coco is orange and white.","t":7.05,"end":8.8},{"id":5,"sp":"Lily","text":"She is small.","t":9.55,"end":10.72},{"id":6,"sp":"Lily","text":"Coco likes milk.","t":11.47,"end":12.92},{"id":7,"sp":"Lily","text":"She has a red ball.","t":13.67,"end":15.22},{"id":8,"sp":"Lily","text":"I love my cat!","t":15.97,"end":17.87}],"items":[{"n":1,"type":"listen_choose","q":"What is Lily's pet?","options":[{"t":"a cat","img":"cat"},{"t":"a dog","img":"dog"},{"t":"a fish","img":"fish"},{"t":"a rabbit","img":"rabbit"}],"answer":0,"cue":2,"feedback":"Lily says: \"This is my cat.\"","sheet":"opt-coco-pet"},{"n":2,"type":"listen_choose","q":"What color is Coco?","options":[{"t":"orange and white","img":"orange and white cat"},{"t":"black","img":"black cat"},{"t":"gray","img":"gray cat"},{"t":"brown","img":"brown cat"}],"answer":0,"cue":4,"feedback":"Lily says: \"Coco is orange and white.\"","sheet":"opt-coco-color"},{"n":3,"type":"true_false","q":"Coco is big.","answer":false,"cue":5,"feedback":"Lily says: \"She is small.\""},{"n":4,"type":"listen_choose","q":"What does Coco like?","options":[{"t":"milk","img":"bowl of milk"},{"t":"juice","img":"glass of juice"},{"t":"carrots","img":"carrots"},{"t":"cheese","img":"cheese"}],"answer":0,"cue":6,"feedback":"Lily says: \"Coco likes milk.\"","sheet":"opt-coco-likes"},{"n":5,"type":"listen_choose","q":"What does Coco have?","options":[{"t":"a red ball","img":"red ball"},{"t":"a blue ball","img":"blue ball"},{"t":"a yellow box","img":"yellow box"},{"t":"a toy mouse","img":"toy mouse"}],"answer":0,"cue":7,"feedback":"Lily says: \"She has a red ball.\"","sheet":"opt-coco-toy"}],"image_file":"ll-kids-prea1-01.webp","audio_file":"ll-kids-prea1-01.mp3","duration":17.9,"q_audio":"ll-kids-prea1-01-q.mp3","q_times":[[0.2,1.75],[2.35,4.05],[4.65,8.29],[8.89,10.31],[10.91,12.7]],"plays":3},{"id":"kids-prea1-02","title":"What's in My Backpack?","soon":true},{"id":"kids-prea1-03","title":"At the Park","soon":true}]},{"level":"A1","label":"Beginner","acts":[{"id":"kids-a1-01","title":"Breakfast Time","situation":"Tom and his mom are having breakfast.","speakers":["Mom","Tom"],"key_words":["breakfast","pancakes","eggs","orange juice","banana"],"script":[{"id":1,"sp":"Mom","text":"Good morning, Tom! Breakfast is ready.","t":0.4,"end":2.49},{"id":2,"sp":"Tom","text":"Good morning, Mom! What's for breakfast?","t":3.24,"end":6.22},{"id":3,"sp":"Mom","text":"Pancakes, eggs and fruit.","t":6.97,"end":8.23},{"id":4,"sp":"Tom","text":"Yay! I love pancakes. But I don't like eggs.","t":8.98,"end":13.11},{"id":5,"sp":"Mom","text":"Okay. Do you want milk or orange juice?","t":13.86,"end":15.99},{"id":6,"sp":"Tom","text":"Orange juice, please.","t":16.74,"end":18.11},{"id":7,"sp":"Mom","text":"Here you are. And a banana too.","t":18.86,"end":20.82},{"id":8,"sp":"Tom","text":"Thank you, Mom. Mmm, the pancakes are yummy!","t":21.57,"end":25.7}],"items":[{"n":1,"type":"listen_choose","q":"What does Tom love?","options":[{"t":"pancakes","img":"pancakes"},{"t":"eggs","img":"fried eggs"},{"t":"cereal","img":"bowl of cereal"},{"t":"toast","img":"toast"}],"answer":0,"cue":4,"feedback":"Tom says: \"I love pancakes.\"","sheet":"opt-breakfast-food"},{"n":2,"type":"true_false","q":"Tom likes eggs.","answer":false,"cue":4,"feedback":"Tom says: \"I don't like eggs.\""},{"n":3,"type":"listen_choose","q":"What does Tom drink?","options":[{"t":"milk","img":"glass of milk"},{"t":"orange juice","img":"glass of orange juice"},{"t":"water","img":"glass of water"},{"t":"hot chocolate","img":"mug of hot chocolate"}],"answer":1,"cue":6,"feedback":"Tom says: \"Orange juice, please.\"","sheet":"opt-breakfast-drink"},{"n":4,"type":"true_false","q":"Mom gives Tom a banana.","answer":true,"cue":7,"feedback":"Mom says: \"And a banana too.\""},{"n":5,"type":"who_said","quote":"Breakfast is ready.","options":["Mom","Tom"],"answer":0,"cue":1,"feedback":"Mom says: \"Good morning, Tom! Breakfast is ready.\""},{"n":6,"type":"who_said","quote":"The pancakes are yummy!","options":["Mom","Tom"],"answer":1,"cue":8,"feedback":"Tom says: \"Mmm, the pancakes are yummy!\""}],"image_file":"ll-kids-a1-01.webp","audio_file":"ll-kids-a1-01.mp3","duration":25.7,"q_audio":"ll-kids-a1-01-q.mp3","q_times":[[0.2,1.65],[2.25,5.67],[6.27,7.64],[8.24,11.66],[12.26,15.24],[15.84,19.09]],"plays":2},{"id":"kids-a1-02","title":"Lily's Birthday","soon":true},{"id":"kids-a1-03","title":"A Visit to the Zoo","soon":true}]},{"level":"A2","label":"Elementary","acts":[{"id":"kids-a2-01","title":"The Lost Teddy Bear","situation":"Lily can't find her teddy bear, Mr. Fluffy.","speakers":["Lily","Mom","Dad"],"key_words":["lost","under","next to","garden","dirty"],"script":[{"id":1,"sp":"Lily","text":"Mom! I can't find Mr. Fluffy, my teddy bear!","t":0.4,"end":3.82},{"id":2,"sp":"Mom","text":"Oh no. Where did you have him last?","t":4.57,"end":6.84},{"id":3,"sp":"Lily","text":"I played with him in the living room after lunch.","t":7.59,"end":10.15},{"id":4,"sp":"Mom","text":"Let's look under the sofa.","t":10.9,"end":12.08},{"id":5,"sp":"Lily","text":"He isn't there. And he isn't on the bookshelf.","t":12.83,"end":15.84},{"id":6,"sp":"Dad","text":"Lily, I think I saw a brown ear in the garden.","t":16.59,"end":19.71},{"id":7,"sp":"Lily","text":"In the garden? Oh yes! I took him outside this morning to see the flowers.","t":20.46,"end":25.79},{"id":8,"sp":"Dad","text":"Here he is, next to the big tree. He's a little dirty.","t":26.54,"end":30.86},{"id":9,"sp":"Mom","text":"Don't worry. We can wash him tomorrow.","t":31.61,"end":33.65},{"id":10,"sp":"Lily","text":"Thank you, Dad! Mr. Fluffy, you're home again!","t":34.4,"end":37.89}],"items":[{"n":1,"type":"fill_blank","q":"Lily played with him in the ___ after lunch.","bank":["living room","kitchen","bedroom","bathroom"],"answer":"living room","cue":3,"feedback":"Lily says: \"I played with him in the living room after lunch.\""},{"n":2,"type":"true_false","q":"Mr. Fluffy is under the sofa.","answer":false,"cue":5,"feedback":"Lily says: \"He isn't there.\""},{"n":3,"type":"who_said","quote":"I think I saw a brown ear in the garden.","options":["Mom","Dad","Lily"],"answer":1,"cue":6,"feedback":"Dad says it."},{"n":4,"type":"fill_blank","q":"Lily took him outside to see the ___.","bank":["flowers","birds","dog","trees"],"answer":"flowers","cue":7,"feedback":"Lily says: \"I took him outside this morning to see the flowers.\""},{"n":5,"type":"listen_choose","q":"Where is Mr. Fluffy?","options":[{"t":"next to the big tree","img":"next to a tree"},{"t":"on the bookshelf","img":"on a bookshelf"},{"t":"under the bed","img":"under a bed"},{"t":"in the bathtub","img":"in a bathtub"}],"answer":0,"cue":8,"feedback":"Dad says: \"Here he is, next to the big tree.\"","sheet":"opt-teddy-where"},{"n":6,"type":"true_false","q":"Mr. Fluffy is clean.","answer":false,"cue":8,"feedback":"Dad says: \"He's a little dirty.\""},{"n":7,"type":"order","q":"Put the events in order.","events":["Lily can't find her teddy bear.","They look under the sofa.","Dad sees a brown ear in the garden.","They find Mr. Fluffy next to the tree."],"cue":[1,4,6,8],"feedback":"Listen again to the whole story in order."},{"n":8,"type":"listen_choose","q":"When will they wash Mr. Fluffy?","options":[{"t":"today"},{"t":"tomorrow"},{"t":"on Saturday"},{"t":"next week"}],"answer":1,"cue":9,"feedback":"Mom says: \"We can wash him tomorrow.\""}],"image_file":"ll-kids-a2-01.webp","audio_file":"ll-kids-a2-01.mp3","duration":37.9,"q_audio":"ll-kids-a2-01-q.mp3","q_times":[[0.2,2.49],[3.09,6.24],[6.84,9.81],[10.41,12.48],[13.08,14.14],[14.74,17.39],[17.99,19.43],[20.03,22.14]],"plays":2},{"id":"kids-a2-02","title":"A Day at the Beach","soon":true},{"id":"kids-a2-03","title":"Our Class Garden","soon":true}]}]},{"id":"children","name":"MOVA Children","ages":"9-12","image":"ll-stage-children.webp","levels":[{"level":"A1","label":"Beginner","acts":[{"id":"children-a1-01","title":"Lunch at School","situation":"Mia and Leo are eating lunch together in the school cafeteria.","speakers":["Leo","Mia"],"key_words":["sandwich","salad","cookie","carton","friend"],"script":[{"id":1,"sp":"Leo","text":"Hi, Mia! Can I sit here?","t":0.4,"end":1.99},{"id":2,"sp":"Mia","text":"Sure, Leo! What's for lunch today?","t":2.54,"end":4.7},{"id":3,"sp":"Leo","text":"I have a ham sandwich, an apple and a cookie. What about you?","t":5.25,"end":9.39},{"id":4,"sp":"Mia","text":"I have a cheese sandwich and a salad. I don't eat ham.","t":9.94,"end":13.3},{"id":5,"sp":"Leo","text":"Do you like salad?","t":13.85,"end":15.0},{"id":6,"sp":"Mia","text":"Yes, I love it! It has tomatoes and carrots.","t":15.55,"end":18.28},{"id":7,"sp":"Leo","text":"I don't like tomatoes. Do you want my cookie?","t":18.83,"end":21.52},{"id":8,"sp":"Mia","text":"No, thanks. But I want some milk. Do you have milk?","t":22.07,"end":25.38},{"id":9,"sp":"Leo","text":"Yes, I have two cartons. Here you go!","t":25.93,"end":28.64},{"id":10,"sp":"Mia","text":"Thank you, Leo! You're a great friend.","t":29.19,"end":31.66}],"items":[{"n":1,"type":"listen_choose","q":"What's in Leo's sandwich?","options":[{"t":"ham"},{"t":"cheese"},{"t":"chicken"},{"t":"egg"}],"answer":0,"cue":3,"feedback":"Leo says: \"I have a ham sandwich.\""},{"n":2,"type":"true_false","q":"Mia eats ham.","answer":false,"cue":4,"feedback":"Mia says: \"I don't eat ham.\""},{"n":3,"type":"listen_choose","q":"What's in Mia's salad?","options":[{"t":"lettuce and onions"},{"t":"tomatoes and carrots"},{"t":"cucumbers and corn"},{"t":"apples and grapes"}],"answer":1,"cue":6,"feedback":"Mia says: \"It has tomatoes and carrots.\""},{"n":4,"type":"true_false","q":"Leo likes tomatoes.","answer":false,"cue":7,"feedback":"Leo says: \"I don't like tomatoes.\""},{"n":5,"type":"who_said","quote":"Do you want my cookie?","options":["Mia","Leo"],"answer":1,"cue":7,"feedback":"Leo offers his cookie to Mia."},{"n":6,"type":"listen_choose","q":"How many cartons of milk does Leo have?","options":[{"t":"one"},{"t":"two"},{"t":"three"},{"t":"four"}],"answer":1,"cue":9,"feedback":"Leo says: \"Yes, I have two cartons.\""}],"image_file":"ll-children-a1-01.webp","audio_file":"ll-children-a1-01.mp3","duration":31.7,"plays":2}]},{"level":"A2","label":"Elementary","acts":[{"id":"children-a2-01","title":"Planning a Birthday Party","situation":"Mia and Leo are planning a surprise party for their friend Sam.","speakers":["Mia","Leo"],"key_words":["surprise","backyard","decorations","invite","secret"],"script":[{"id":1,"sp":"Mia","text":"Leo, Sam's birthday is next Saturday. Let's plan a surprise party for him!","t":0.4,"end":4.83},{"id":2,"sp":"Leo","text":"Great idea! Where can we have it?","t":5.38,"end":7.58},{"id":3,"sp":"Mia","text":"In my backyard. My mom said it's okay.","t":8.13,"end":10.58},{"id":4,"sp":"Leo","text":"Perfect. I can bring my speaker and play music.","t":11.13,"end":14.01},{"id":5,"sp":"Mia","text":"Awesome. I'll make the decorations: balloons, paper stars and a big banner.","t":14.56,"end":19.31},{"id":6,"sp":"Leo","text":"What about food? Sam loves pizza.","t":19.86,"end":22.9},{"id":7,"sp":"Mia","text":"Let's order two big pizzas. And my grandma can bake a chocolate cake.","t":23.45,"end":27.44},{"id":8,"sp":"Leo","text":"How many friends should we invite?","t":27.99,"end":29.86},{"id":9,"sp":"Mia","text":"Ten friends from our class. I'll write the invitations tonight.","t":30.41,"end":33.51},{"id":10,"sp":"Leo","text":"And remember, it's a surprise. We can't tell Sam anything!","t":34.06,"end":37.95},{"id":11,"sp":"Mia","text":"Don't worry. My lips are sealed.","t":38.5,"end":40.68}],"items":[{"n":1,"type":"listen_choose","q":"When is Sam's birthday?","options":[{"t":"this Friday"},{"t":"next Saturday"},{"t":"next Sunday"},{"t":"next Monday"}],"answer":1,"cue":1,"feedback":"Mia says: \"Sam's birthday is next Saturday.\""},{"n":2,"type":"listen_choose","q":"Where will the party be?","options":[{"t":"at school"},{"t":"at the park"},{"t":"in Mia's backyard"},{"t":"at Sam's house"}],"answer":2,"cue":3,"feedback":"Mia says: \"In my backyard.\""},{"n":3,"type":"fill_blank","q":"I can bring my speaker and play ___.","bank":["music","games","videos","cards"],"answer":"music","cue":4,"feedback":"Leo says: \"I can bring my speaker and play music.\""},{"n":4,"type":"who_said","quote":"I'll make the decorations.","options":["Mia","Leo"],"answer":0,"cue":5,"feedback":"Mia will make the balloons, paper stars and banner."},{"n":5,"type":"fill_blank","q":"My grandma can bake a ___ cake.","bank":["chocolate","strawberry","vanilla","lemon"],"answer":"chocolate","cue":7,"feedback":"Mia says: \"My grandma can bake a chocolate cake.\""},{"n":6,"type":"true_false","q":"They will invite twelve friends.","answer":false,"cue":9,"feedback":"Mia says: \"Ten friends from our class.\""},{"n":7,"type":"order","q":"Put the events in order.","events":["Mia has the idea of a surprise party.","Leo offers to play music.","They talk about the food.","Mia says she'll write the invitations."],"cue":[1,4,6,9],"feedback":"Listen to the conversation again from the beginning."},{"n":8,"type":"listen_choose","q":"What does Mia mean when she says \"My lips are sealed\"?","options":[{"t":"I won't tell anyone."},{"t":"I'm very hungry."},{"t":"I can't talk right now."},{"t":"I don't like secrets."}],"answer":0,"cue":11,"feedback":"\"My lips are sealed\" means she will keep the secret."}],"image_file":"ll-children-a2-01.webp","audio_file":"ll-children-a2-01.mp3","duration":40.7,"plays":2}]},{"level":"B1","label":"Intermediate","acts":[{"id":"children-b1-01","title":"The Science Fair","situation":"Mia and Leo present their project to Ms. Carter at the school science fair.","speakers":["Ms. Carter","Mia","Leo"],"key_words":["model","clay","planetarium","trap","accurate"],"script":[{"id":1,"sp":"Ms. Carter","text":"Good morning, you two. Tell me about your project.","t":0.4,"end":3.21},{"id":2,"sp":"Mia","text":"Good morning, Ms. Carter. Our project is a model of the solar system. We made all the planets out of clay.","t":3.76,"end":9.62},{"id":3,"sp":"Leo","text":"It took us almost three weeks. The hardest part was Saturn's rings, because they kept falling off.","t":10.17,"end":15.88},{"id":4,"sp":"Ms. Carter","text":"Well, they look great now. Why did you choose the solar system?","t":16.43,"end":20.22},{"id":5,"sp":"Mia","text":"Last summer we visited a planetarium, and we were amazed by how big the planets are.","t":20.77,"end":25.72},{"id":6,"sp":"Leo","text":"For example, Jupiter is so big that more than a thousand Earths could fit inside it.","t":26.27,"end":31.85},{"id":7,"sp":"Ms. Carter","text":"That's a fascinating fact. Did you discover anything surprising while you were doing your research?","t":32.4,"end":37.91},{"id":8,"sp":"Mia","text":"Yes! We thought Mercury was the hottest planet because it's the closest to the Sun. But actually, Venus is hotter.","t":38.46,"end":44.93},{"id":9,"sp":"Leo","text":"That's because Venus has thick clouds. They trap the heat, like a blanket.","t":45.48,"end":50.13},{"id":10,"sp":"Ms. Carter","text":"Excellent explanation. If you did the project again, what would you change?","t":50.68,"end":55.53},{"id":11,"sp":"Leo","text":"I'd make the sizes more accurate. Our Earth is a little too big compared to Jupiter.","t":56.08,"end":61.05},{"id":12,"sp":"Mia","text":"And I'd add a small light for the Sun, so people could see how the planets get their light.","t":61.6,"end":66.27},{"id":13,"sp":"Ms. Carter","text":"Those are wonderful ideas. I think the judges are going to love your project.","t":66.82,"end":71.56}],"items":[{"n":1,"type":"listen_choose","q":"What did they use to make the planets?","options":[{"t":"paper"},{"t":"plastic balls"},{"t":"clay"},{"t":"wood"}],"answer":2,"cue":2,"feedback":"Mia says: \"We made all the planets out of clay.\""},{"n":2,"type":"listen_choose","q":"How long did the project take?","options":[{"t":"two days"},{"t":"one week"},{"t":"almost three weeks"},{"t":"two months"}],"answer":2,"cue":3,"feedback":"Leo says: \"It took us almost three weeks.\""},{"n":3,"type":"listen_choose","q":"Why was Saturn the hardest part?","options":[{"t":"Its rings kept falling off."},{"t":"It was too big."},{"t":"They didn't have the right color."},{"t":"It broke on the way to school."}],"answer":0,"cue":3,"feedback":"Leo says Saturn's rings kept falling off."},{"n":4,"type":"true_false","q":"They got the idea for the project at a planetarium.","answer":true,"cue":5,"feedback":"Mia says: \"Last summer we visited a planetarium.\""},{"n":5,"type":"fill_blank","q":"More than a ___ Earths could fit inside Jupiter.","bank":["hundred","thousand","million","dozen"],"answer":"thousand","cue":6,"feedback":"Leo says: \"More than a thousand Earths could fit inside it.\""},{"n":6,"type":"listen_choose","q":"Why is Venus hotter than Mercury?","options":[{"t":"It's closer to the Sun."},{"t":"Its thick clouds trap the heat."},{"t":"It's the biggest planet."},{"t":"It has a lot of volcanoes."}],"answer":1,"cue":9,"feedback":"Leo explains that Venus's thick clouds trap the heat, like a blanket."},{"n":7,"type":"who_said","quote":"I'd make the sizes more accurate.","options":["Ms. Carter","Mia","Leo"],"answer":2,"cue":11,"feedback":"Leo would change the sizes of the planets."},{"n":8,"type":"listen_choose","q":"How does Ms. Carter feel about the project?","options":[{"t":"bored"},{"t":"impressed"},{"t":"worried"},{"t":"confused"}],"answer":1,"cue":13,"feedback":"She calls their ideas wonderful and thinks the judges will love the project."}],"image_file":"ll-children-b1-01.webp","audio_file":"ll-children-b1-01.mp3","duration":71.6,"plays":2}]}]},{"id":"teens","name":"MOVA Teens","ages":"12-17","image":"ll-stage-teens.webp","levels":[{"level":"A1","label":"Beginner","acts":[{"id":"teens-a1-01","title":"New in Class","situation":"Emma meets two classmates on her first day at a new school.","speakers":["Zoe","Emma","Jake"],"key_words":["new","first day","moved","room","hurry"],"script":[{"id":1,"sp":"Zoe","text":"Hi! Are you new here?","t":0.4,"end":1.57},{"id":2,"sp":"Emma","text":"Yes, I am. I'm Emma. It's my first day.","t":2.02,"end":5.49},{"id":3,"sp":"Zoe","text":"Nice to meet you, Emma. I'm Zoe, and this is Jake.","t":5.94,"end":8.91},{"id":4,"sp":"Jake","text":"Hey, Emma. Where are you from?","t":9.36,"end":11.89},{"id":5,"sp":"Emma","text":"I'm from Chicago. My family moved here last month.","t":12.34,"end":16.6},{"id":6,"sp":"Zoe","text":"Cool! What's your first class?","t":17.05,"end":19.0},{"id":7,"sp":"Emma","text":"Math, in room twelve. But I can't find it.","t":19.45,"end":22.94},{"id":8,"sp":"Jake","text":"Room twelve? That's our class too. Come with us!","t":23.39,"end":27.48},{"id":9,"sp":"Emma","text":"Thanks! What's the teacher like?","t":27.93,"end":29.92},{"id":10,"sp":"Zoe","text":"Mr. Brooks? He's really nice, and his classes are fun.","t":30.37,"end":34.04},{"id":11,"sp":"Jake","text":"Come on, hurry! It starts at eight fifteen.","t":34.49,"end":37.69}],"items":[{"n":1,"type":"true_false","q":"It's Emma's first day at the school.","answer":true,"cue":2,"feedback":"Emma says: \"It's my first day.\""},{"n":2,"type":"listen_choose","q":"Where is Emma from?","options":[{"t":"Boston"},{"t":"Chicago"},{"t":"Miami"},{"t":"Dallas"}],"answer":1,"cue":5,"feedback":"Emma says: \"I'm from Chicago.\""},{"n":3,"type":"listen_choose","q":"What's Emma's first class?","options":[{"t":"science"},{"t":"English"},{"t":"math"},{"t":"history"}],"answer":2,"cue":7,"feedback":"Emma says: \"Math, in room twelve.\""},{"n":4,"type":"listen_choose","q":"What room is the class in?","options":[{"t":"two"},{"t":"ten"},{"t":"twelve"},{"t":"twenty"}],"answer":2,"cue":7,"feedback":"Emma says: \"Math, in room twelve.\""},{"n":5,"type":"who_said","quote":"He's really nice, and his classes are fun.","options":["Emma","Zoe","Jake"],"answer":1,"cue":10,"feedback":"Zoe describes Mr. Brooks."},{"n":6,"type":"listen_choose","q":"What time does the class start?","options":[{"t":"8:00"},{"t":"8:15"},{"t":"8:50"},{"t":"7:15"}],"answer":1,"cue":11,"feedback":"Jake says: \"It starts at eight fifteen.\""}],"image_file":"ll-teens-a1-01.webp","audio_file":"ll-teens-a1-01.mp3","duration":37.7,"plays":2}]},{"level":"A2","label":"Elementary","acts":[{"id":"teens-a2-01","title":"Weekend Plans","situation":"Chloe and Ethan are at a café, making plans for the weekend.","speakers":["Chloe","Ethan"],"key_words":["festival","band","tickets","free","project"],"script":[{"id":1,"sp":"Chloe","text":"So, Ethan, what are you doing this weekend?","t":0.4,"end":2.68},{"id":2,"sp":"Ethan","text":"I'm not sure yet. Maybe I'll just stay home and play video games. What about you?","t":3.13,"end":7.02},{"id":3,"sp":"Chloe","text":"There's a music festival in the park on Saturday. My cousin is playing with her band at four o'clock.","t":7.47,"end":12.82},{"id":4,"sp":"Ethan","text":"Really? That sounds fun. How much are the tickets?","t":13.27,"end":16.35},{"id":5,"sp":"Chloe","text":"They're free before five, but after that they cost ten dollars.","t":16.8,"end":20.2},{"id":6,"sp":"Ethan","text":"Okay, so we should get there early. How are we getting there?","t":20.65,"end":23.75},{"id":7,"sp":"Chloe","text":"We can take the bus. It stops right in front of this café.","t":24.2,"end":27.35},{"id":8,"sp":"Ethan","text":"Perfect. What about Sunday? I have to finish my history project.","t":27.8,"end":31.28},{"id":9,"sp":"Chloe","text":"Me too! Why don't we work on it together at the library on Sunday morning?","t":31.73,"end":35.9},{"id":10,"sp":"Ethan","text":"Good idea. I'll text you on Saturday morning.","t":36.35,"end":38.72}],"items":[{"n":1,"type":"listen_choose","q":"What was Ethan's first plan for the weekend?","options":[{"t":"go to the movies"},{"t":"stay home and play video games"},{"t":"visit his cousin"},{"t":"go to the gym"}],"answer":1,"cue":2,"feedback":"Ethan says: \"Maybe I'll just stay home and play video games.\""},{"n":2,"type":"listen_choose","q":"What's happening on Saturday?","options":[{"t":"a soccer game"},{"t":"a party at school"},{"t":"a music festival in the park"},{"t":"a concert at the café"}],"answer":2,"cue":3,"feedback":"Chloe says: \"There's a music festival in the park on Saturday.\""},{"n":3,"type":"fill_blank","q":"My cousin is playing with her band at ___ o'clock.","bank":["three","four","five","six"],"answer":"four","cue":3,"feedback":"Chloe says: \"My cousin is playing with her band at four o'clock.\""},{"n":4,"type":"true_false","q":"The tickets are free all day.","answer":false,"cue":5,"feedback":"Chloe says they're free before five, but after that they cost ten dollars."},{"n":5,"type":"listen_choose","q":"How are they getting to the festival?","options":[{"t":"by car"},{"t":"by bike"},{"t":"by bus"},{"t":"on foot"}],"answer":2,"cue":7,"feedback":"Chloe says: \"We can take the bus.\""},{"n":6,"type":"who_said","quote":"I have to finish my history project.","options":["Chloe","Ethan"],"answer":1,"cue":8,"feedback":"Ethan has to finish his history project."},{"n":7,"type":"order","q":"Put the events in order.","events":["Ethan thinks about staying home.","Chloe tells him about the festival.","They talk about how to get there.","They plan to study on Sunday."],"cue":[2,3,7,9],"feedback":"Listen to the conversation again from the beginning."},{"n":8,"type":"listen_choose","q":"Where will they work on their project?","options":[{"t":"at the café"},{"t":"at Ethan's house"},{"t":"at school"},{"t":"at the library"}],"answer":3,"cue":9,"feedback":"Chloe suggests working together at the library on Sunday morning."}],"image_file":"ll-teens-a2-01.webp","audio_file":"ll-teens-a2-01.mp3","duration":38.8,"plays":2}]},{"level":"B1","label":"Intermediate","acts":[{"id":"teens-b1-01","title":"Choosing a School Club","situation":"Ava, Marcus and Ryan walk around the club fair and talk about which club to join.","speakers":["Ava","Marcus","Ryan"],"key_words":["sign up","competition","practice","leaning toward","switch"],"script":[{"id":1,"sp":"Ava","text":"Okay, we have to sign up for a club by Friday, and I still can't decide.","t":0.4,"end":4.9},{"id":2,"sp":"Marcus","text":"I'm joining Robotics for sure. They're building a robot for a competition in March.","t":5.35,"end":9.27},{"id":3,"sp":"Ryan","text":"Sounds cool, but isn't it every day after school? I've got soccer practice on Tuesdays and Thursdays.","t":9.72,"end":17.33},{"id":4,"sp":"Marcus","text":"No, they only meet on Mondays and Wednesdays. You could totally do both.","t":17.78,"end":21.64},{"id":5,"sp":"Ava","text":"I was thinking about Music, but I haven't played the guitar since I was twelve. I'd probably be the worst one there.","t":22.09,"end":27.85},{"id":6,"sp":"Ryan","text":"Come on, Ava. Nobody expects you to be a rock star. That's the whole point of a club, right? You learn.","t":28.3,"end":35.47},{"id":7,"sp":"Ava","text":"I guess you're right. What about you, Ryan? Robotics or Chess?","t":35.92,"end":41.0},{"id":8,"sp":"Ryan","text":"Honestly, neither. I'm leaning toward the Environment Club. They're planting trees around the school and starting a recycling program.","t":41.45,"end":49.72},{"id":9,"sp":"Marcus","text":"That's actually a great idea. Our school throws away way too much plastic.","t":50.17,"end":54.19},{"id":10,"sp":"Ava","text":"Okay, here's the deal. I'll give Music a try for one month. If I don't like it, I'll switch to Art.","t":54.64,"end":60.53},{"id":11,"sp":"Ryan","text":"Deal. And if Marcus's robot wins in March, he's buying us pizza.","t":60.98,"end":66.94},{"id":12,"sp":"Marcus","text":"Ha! Fine, but only if it wins first place.","t":67.39,"end":70.68}],"items":[{"n":1,"type":"listen_choose","q":"When do they have to sign up for a club?","options":[{"t":"by Monday"},{"t":"by Friday"},{"t":"next week"},{"t":"in March"}],"answer":1,"cue":1,"feedback":"Ava says: \"We have to sign up for a club by Friday.\""},{"n":2,"type":"listen_choose","q":"Why is Marcus joining Robotics?","options":[{"t":"His friends are in the club."},{"t":"They're building a robot for a competition."},{"t":"He wants to learn programming."},{"t":"He needs extra credit."}],"answer":1,"cue":2,"feedback":"Marcus says they're building a robot for a competition in March."},{"n":3,"type":"true_false","q":"The Robotics Club meets every day after school.","answer":false,"cue":4,"feedback":"Marcus says they only meet on Mondays and Wednesdays."},{"n":4,"type":"fill_blank","q":"They only meet on Mondays and ___.","bank":["Tuesdays","Wednesdays","Thursdays","Fridays"],"answer":"Wednesdays","cue":4,"feedback":"Marcus says: \"They only meet on Mondays and Wednesdays.\""},{"n":5,"type":"listen_choose","q":"Why is Ava unsure about joining Music?","options":[{"t":"She doesn't like music."},{"t":"She hasn't played the guitar in years."},{"t":"The club meets too late."},{"t":"Her parents said no."}],"answer":1,"cue":5,"feedback":"Ava hasn't played the guitar since she was twelve, so she's worried she'll be the worst one there."},{"n":6,"type":"who_said","quote":"That's the whole point of a club, right? You learn.","options":["Ava","Marcus","Ryan"],"answer":2,"cue":6,"feedback":"Ryan encourages Ava to try."},{"n":7,"type":"listen_choose","q":"What will Ava do if she doesn't like Music?","options":[{"t":"quit clubs"},{"t":"join Chess"},{"t":"join Robotics"},{"t":"switch to Art"}],"answer":3,"cue":10,"feedback":"Ava says: \"If I don't like it, I'll switch to Art.\""},{"n":8,"type":"listen_choose","q":"What does Marcus agree to do?","options":[{"t":"Buy pizza if his robot wins first place."},{"t":"Join the Environment Club."},{"t":"Help Ava with the guitar."},{"t":"Quit Robotics in March."}],"answer":0,"cue":12,"feedback":"Marcus agrees to buy pizza, but only if the robot wins first place."}],"image_file":"ll-teens-b1-01.webp","audio_file":"ll-teens-b1-01.mp3","duration":70.7,"plays":2}]}]}];
  var LEVELS = { kids: ["Pre-A1", "A1", "A2"], children: ["A1", "A1+", "A2", "A2+", "B1"], teens: ["A1", "A1+", "A2", "A2+", "B1", "B2"] };
  var LABEL = { "Pre-A1": "First steps", "A1": "Beginner", "A1+": "Beginner plus", "A2": "Elementary", "A2+": "Elementary plus", "B1": "Intermediate", "B2": "Upper intermediate" };
  var THEME = {
    kids: { bg: "#FFF1B8", ink: "#5A4A10", acc: "#FFE58A", tag: "Ages 6–8", line: "Short stories about pets, family and school." },
    children: { bg: "#DCE2FF", ink: "#2E3478", acc: "#93A6FF", tag: "Ages 9–12", line: "School, friends and everyday situations." },
    teens: { bg: "#15192B", ink: "#D3F36B", acc: "#D3F36B", tag: "Ages 12–17", line: "Real conversations about school, plans and life.", dark: true }
  };
  var SPK = ["#B0306A", "#3C3F8F", "#1F7A4D", "#8A5A00"];
  var KEY = "mova_ll_v1";
  var TN = { listen_choose: "Listen and choose", true_false: "True or false", who_said: "Who said it?", fill_blank: "Fill in the blank", order: "Put the events in order" };

  function store() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function keep(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function stage(id) { for (var i = 0; i < DATA.length; i++) if (DATA[i].id === id) return DATA[i]; return null; }
  function levelOf(st, lv) { var s = stage(st); if (!s) return null; for (var i = 0; i < s.levels.length; i++) if (s.levels[i].level === lv) return s.levels[i]; return null; }
  function findAct(id) { for (var i = 0; i < DATA.length; i++) for (var j = 0; j < DATA[i].levels.length; j++) for (var k = 0; k < DATA[i].levels[j].acts.length; k++) { var a = DATA[i].levels[j].acts[k]; if (a.id === id && !a.soon) return { st: DATA[i], lv: DATA[i].levels[j], a: a }; } return null; }
  function mmss(t) { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ":" + ("0" + (t % 60)).slice(-2); }
  function ruta() { try { return JSON.parse(localStorage.getItem("mova_ruta_v1") || "{}"); } catch (e) { return {}; } }
  function userStage() {
    var o = ruta(); if (o.stage && stage(o.stage)) return o.stage;
    try { var u = window.MovaAuth && MovaAuth.user(); if (u && u.stage) { var s = String(u.stage).toLowerCase(); if (/kid/.test(s)) return "kids"; if (/child/.test(s)) return "children"; if (/teen/.test(s)) return "teens"; } } catch (e) {}
    return null;
  }
  function firstName() { try { var u = window.MovaAuth && MovaAuth.user(); if (u && u.name) return String(u.name).split(" ")[0]; } catch (e) {} return ""; }
  function go(h) { location.hash = h; }

  var CSS = "" +
    ".llb{font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#15192B;max-width:720px;margin:0 auto;padding:4px 16px 120px}" +
    ".llb *{box-sizing:border-box}.llb h1,.llb h2,.llb h3,.llb .bg{font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;margin:0}" +
    ".ll-back{display:inline-flex;align-items:center;gap:10px;text-decoration:none;color:#15192B;margin:6px 0 14px}" +
    ".ll-back i{width:40px;height:40px;border-radius:50%;border:2px solid #15192B;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:18px}" +
    ".ll-back small{display:block;font-size:11px;color:#6B6F94}.ll-back b{font-family:'Bricolage Grotesque',sans-serif;font-size:18px}" +
    ".ll-hero{background:#15192B;color:#fff;border-radius:28px;padding:22px;position:relative;overflow:hidden;margin-bottom:18px}" +
    ".ll-hero .ring{position:absolute;right:-40px;top:-40px;width:150px;height:150px;border-radius:50%;border:22px solid #2C3060}" +
    ".ll-tag{display:inline-block;font:800 11px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.12em;padding:7px 13px;border-radius:99px;background:#D3F36B;color:#15192B}" +
    ".ll-hero h1{color:#fff;font-size:32px;line-height:1.05;margin:14px 0 8px;position:relative}.ll-hero h1 em{font-style:normal;color:#D3F36B}" +
    ".ll-hero p{color:#C9CCE6;font-size:14px;margin:0;position:relative}" +
    ".ll-how{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:14px;position:relative}" +
    ".ll-how span{background:#262A48;border-radius:14px;padding:9px 11px;font-size:12.5px;font-weight:600}.ll-how b{color:#D3F36B;margin-right:4px}" +
    ".ll-stage{display:block;text-decoration:none;border-radius:26px;overflow:hidden;margin-bottom:14px;position:relative;box-shadow:0 1px 0 rgba(21,25,43,.06)}" +
    ".ll-stage img{display:block;width:100%;aspect-ratio:16/8;object-fit:cover}" +
    ".ll-stage .bd{padding:14px 16px 16px}.ll-stage h2{font-size:22px;color:inherit}.ll-stage.dark h2{color:#fff}.ll-stage small{font-weight:700;font-size:12px}" +
    ".ll-chip{display:inline-block;font-size:11.5px;font-weight:600;padding:5px 11px;border-radius:99px;margin:8px 5px 0 0;background:#fff;color:#15192B}" +
    ".ll-stage.dark .ll-chip{background:#262A48;color:#fff}" +
    ".ll-lvls{display:flex;gap:7px;overflow-x:auto;padding:2px 2px 8px;margin:0 -2px 6px;scrollbar-width:none}" +
    ".ll-lvls button{flex:0 0 auto;font:700 13px 'Plus Jakarta Sans',sans-serif;padding:9px 15px;border-radius:99px;background:#fff;border:1.5px solid #E2E1EE;color:#15192B;position:relative;cursor:pointer}" +
    ".ll-lvls button[aria-pressed=true]{background:#15192B;color:#fff;border-color:#15192B}" +
    ".ll-lvls button.soon{color:#A9ABC4;border-style:dashed}" +
    ".ll-lvls button .me{position:absolute;top:-3px;right:-2px;width:11px;height:11px;border-radius:50%;background:#D3F36B;border:2px solid #F5F3FA}" +
    ".ll-lvinfo{background:#fff;border-radius:18px;padding:13px 15px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px}" +
    ".ll-lvinfo b{font-family:'Bricolage Grotesque',sans-serif;font-size:18px}.ll-lvinfo small{display:block;font-size:12px;color:#6B6F94}" +
    ".ll-me{font-size:11px;font-weight:700;background:#D3F36B;padding:5px 10px;border-radius:99px;white-space:nowrap}" +
    ".ll-act{display:flex;gap:12px;align-items:center;background:#fff;border-radius:22px;padding:11px;margin-bottom:10px;text-decoration:none;color:#15192B;border:2px solid transparent}" +
    ".ll-act.next{border-color:#15192B}.ll-act img{width:76px;height:64px;border-radius:15px;object-fit:cover;flex:0 0 auto}" +
    ".ll-act .t{flex:1;min-width:0}.ll-act h3{font-size:16px}.ll-act .m{font-size:11.5px;color:#6B6F94;margin:3px 0 5px}" +
    ".ll-ex{display:inline-block;font-size:10.5px;background:#EEEDF7;padding:3px 8px;border-radius:99px;margin:0 3px 3px 0}" +
    ".ll-play{width:40px;height:40px;border-radius:50%;background:#D3F36B;display:flex;align-items:center;justify-content:center;flex:0 0 auto;font-size:16px}" +
    ".ll-sc{text-align:center;flex:0 0 auto}.ll-sc b{font-family:'Bricolage Grotesque',sans-serif;font-size:17px;color:#1F7A4D;display:block}.ll-sc small{font-size:10.5px;color:#6B6F94}" +
    ".ll-lock{display:flex;gap:12px;align-items:center;background:#fff;border:1.5px dashed #D3D2E3;border-radius:22px;padding:11px;margin-bottom:10px;color:#8A8DAA}" +
    ".ll-lock span.i{width:76px;height:64px;border-radius:15px;background:#F2F1F8;display:flex;align-items:center;justify-content:center;font-size:20px;flex:0 0 auto}" +
    ".ll-lock h3{font-size:15.5px;color:#8A8DAA}.ll-lock small{font-size:12px}" +
    ".ll-steps{display:flex;gap:5px;margin:0 0 14px}.ll-steps i{height:6px;border-radius:99px;flex:1;background:#DCDBEA}.ll-steps i.on{background:#15192B}" +
    ".ll-cover{width:100%;aspect-ratio:16/8.5;object-fit:cover;border-radius:24px;display:block;margin-bottom:14px}" +
    ".ll-card{background:#fff;border-radius:22px;padding:15px;margin-bottom:12px}" +
    ".ll-kw{display:inline-block;font-size:13px;font-weight:700;padding:7px 12px;border-radius:12px;margin:0 6px 7px 0;border:0;cursor:pointer;color:#15192B}" +
    ".ll-btn{display:block;width:100%;font:800 16px 'Bricolage Grotesque',sans-serif;text-align:center;padding:15px;border-radius:99px;border:0;cursor:pointer;text-decoration:none}" +
    ".ll-btn.dk{background:#15192B;color:#fff}.ll-btn.lm{background:#D3F36B;color:#15192B}.ll-btn.ol{background:#fff;color:#15192B;border:1.5px solid #15192B}" +
    ".ll-btn[disabled]{opacity:.45;cursor:default}" +
    ".ll-player{background:#15192B;border-radius:24px;padding:16px;color:#fff;margin-bottom:14px;position:sticky;top:8px;z-index:5}" +
    ".ll-player .row{display:flex;align-items:center;gap:14px}" +
    ".ll-pbtn{width:56px;height:56px;border-radius:50%;background:#D3F36B;color:#15192B;border:0;display:flex;align-items:center;justify-content:center;flex:0 0 auto;cursor:pointer;font-size:22px}" +
    ".ll-pbtn[disabled]{background:#3A3D60;color:#8A8DAA;cursor:default}" +
    ".ll-bar{flex:1;height:8px;border-radius:99px;background:#2E3254;overflow:hidden}.ll-bar i{display:block;height:100%;width:0;background:#D3F36B;border-radius:99px}" +
    ".ll-pinfo{display:flex;justify-content:space-between;font-size:12px;margin-top:10px;color:#C9CCE6}" +
    ".ll-left{background:#FF8FC0;color:#15192B;font-weight:800;padding:3px 10px;border-radius:99px}" +
    ".ll-q{background:#fff;border-radius:22px;padding:15px;margin-bottom:12px}" +
    ".ll-qh{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}" +
    ".ll-qk{font-size:11px;font-weight:800;color:#6B6F94;letter-spacing:.08em;text-transform:uppercase}" +
    ".ll-say{width:34px;height:34px;border-radius:50%;border:0;background:#EEEDF7;cursor:pointer;font-size:15px;flex:0 0 auto}" +
    ".ll-qt{font-size:16px;font-weight:700;line-height:1.45;margin:0 0 10px}" +
    ".ll-op{display:flex;align-items:center;gap:10px;width:100%;text-align:left;font:600 15px 'Plus Jakarta Sans',sans-serif;color:#15192B;background:#fff;border:1.5px solid #E2E1EE;border-radius:15px;padding:11px 13px;margin-bottom:7px;cursor:pointer}" +
    ".ll-op .r{width:18px;height:18px;border-radius:50%;border:2px solid #C4C3D6;flex:0 0 auto}" +
    ".ll-op[aria-pressed=true]{border-color:#15192B;background:#F4F3FB}.ll-op[aria-pressed=true] .r{border:6px solid #15192B}" +
    ".ll-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}" +
    ".ll-pic{border:2px solid #E2E1EE;border-radius:18px;background:#fff;padding:8px;cursor:pointer;text-align:center;font:700 13px 'Plus Jakarta Sans',sans-serif;color:#15192B}" +
    ".ll-pic span.im{display:block;width:100%;aspect-ratio:1;border-radius:12px;background-repeat:no-repeat;background-size:200% 200%;margin-bottom:6px;background-color:#F7F6FC}" +
    ".ll-pic.noimg span.im{display:none}.ll-pic[aria-pressed=true]{border-color:#15192B;background:#F4F3FB;box-shadow:0 0 0 2px #15192B inset}" +
    ".ll-tf{display:grid;grid-template-columns:1fr 1fr;gap:9px}.ll-tf .ll-op{justify-content:center;margin:0}" +
    ".ll-bank{display:flex;flex-wrap:wrap;gap:7px}.ll-bank button{font:700 14px 'Plus Jakarta Sans',sans-serif;padding:9px 14px;border-radius:12px;border:1.5px solid #E2E1EE;background:#fff;cursor:pointer;color:#15192B}" +
    ".ll-bank button[aria-pressed=true]{background:#15192B;color:#fff;border-color:#15192B}" +
    ".ll-blank{display:inline-block;min-width:70px;border-bottom:2px solid #15192B;background:#EEEDF7;border-radius:6px;padding:0 8px;text-align:center}" +
    ".ll-ord button{display:flex;align-items:center;gap:10px;width:100%;text-align:left;font:600 14.5px 'Plus Jakarta Sans',sans-serif;color:#15192B;background:#fff;border:1.5px solid #E2E1EE;border-radius:15px;padding:10px 12px;margin-bottom:7px;cursor:pointer}" +
    ".ll-ord .n{width:26px;height:26px;border-radius:50%;background:#EEEDF7;display:flex;align-items:center;justify-content:center;font-weight:800;flex:0 0 auto;font-size:13px}" +
    ".ll-ord button.on .n{background:#15192B;color:#fff}.ll-reset{font:700 12px 'Plus Jakarta Sans',sans-serif;background:none;border:0;color:#6B6F94;cursor:pointer;padding:4px 0}" +
    ".ll-lockt{display:flex;align-items:center;gap:8px;background:#E7E6F2;border-radius:14px;padding:10px 13px;font-size:12.5px;color:#55597A;margin:4px 0 12px}" +
    ".ll-res{border-radius:24px;padding:18px;display:flex;align-items:center;gap:16px;margin-bottom:14px}" +
    ".ll-res .big{font-family:'Bricolage Grotesque',sans-serif;font-size:36px;font-weight:800;line-height:1}" +
    ".ll-fb{border:1.5px solid #F2B8B5;background:#fff;border-radius:20px;padding:13px 14px;margin-bottom:10px}" +
    ".ll-fb.ok{border-color:#BDF0D8}.ll-fb .h{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px;font-size:12px;font-weight:800}" +
    ".ll-fb .h .x{color:#A32D2D}.ll-fb.ok .h .x{color:#1F7A4D}.ll-fb p{font-size:13.5px;line-height:1.5;margin:0}" +
    ".ll-at{font:800 11px 'Plus Jakarta Sans',sans-serif;background:#15192B;color:#fff;border:0;padding:6px 11px;border-radius:99px;cursor:pointer;white-space:nowrap}" +
    ".ll-tr p{font-size:14px;line-height:1.6;margin:0 0 9px}.ll-tr mark{background:#FFE58A;border-radius:4px;padding:0 3px}" +
    ".ll-chat{display:flex;flex-direction:column;gap:8px}.ll-chat div{max-width:86%;padding:9px 13px;border-radius:18px;font-size:14px;line-height:1.5}" +
    ".ll-chat div.l{align-self:flex-start;background:#EEEDF7;border-bottom-left-radius:6px}.ll-chat div.r{align-self:flex-end;background:#15192B;color:#fff;border-bottom-right-radius:6px}" +
    ".ll-chat div b{display:block;font-size:11px;opacity:.75;margin-bottom:2px}.ll-chat mark{background:#D3F36B;color:#15192B;border-radius:4px;padding:0 3px}" +
    ".ll-2{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:6px}";

  function css() { if (document.getElementById("ll-css")) return; var s = document.createElement("style"); s.id = "ll-css"; s.textContent = CSS; document.head.appendChild(s); }
  var BACK = ["#/learn", "Learn"];
  function back(href, label) { BACK = [href, label]; return ""; }
  function fixBack() { var a = document.querySelector(".mr-back a"); if (!a) return; a.setAttribute("href", BACK[0]); a.setAttribute("aria-label", "Back to " + BACK[1]); var b = a.querySelector("b"); if (b) b.textContent = BACK[1]; }
  function exTypes(a) { var seen = {}, out = []; a.items.forEach(function (it) { if (!seen[it.type]) { seen[it.type] = 1; out.push(TN[it.type]); } }); return out.slice(0, 2); }

  /* ---------- 1. Etapas ---------- */
  function homeView() {
    var h = '<div class="llb">' + back("#/learn", "Learn") +
      '<section class="ll-hero"><span class="ring"></span><span class="ll-tag">LISTENING LAB</span><h1>Listen first,<br><em>then answer</em></h1><p>Choose your stage to see your levels.</p>' +
      '<div class="ll-how"><span><b>1</b>Listen</span><span><b>2</b>Answer</span><span><b>3</b>Transcript</span><span><b>4</b>Results</span></div></section>';
    DATA.forEach(function (s) {
      var T = THEME[s.id];
      h += '<a class="ll-stage' + (T.dark ? " dark" : "") + '" href="#/listening/' + s.id + '" style="background:' + T.bg + ";color:" + (T.dark ? "#fff" : "#15192B") + '">' +
        '<img src="' + s.image + '" alt="" loading="lazy"><div class="bd"><small style="color:' + T.ink + '">' + T.tag + "</small><h2>" + esc(s.name) + "</h2>" +
        LEVELS[s.id].map(function (l) { return '<span class="ll-chip">' + l + "</span>"; }).join("") + "</div></a>";
    });
    return h + "</div>";
  }

  /* ---------- 2. Niveles y actividades ---------- */
  function stageView(stId, lvWanted) {
    var s = stage(stId); if (!s) return homeView();
    var T = THEME[stId], o = ruta(), mine = o.stage === stId ? o.level : null, st = store();
    var lv = lvWanted && LEVELS[stId].indexOf(lvWanted) >= 0 ? lvWanted : ((st.lv && st.lv[stId]) || (mine && LEVELS[stId].indexOf(mine) >= 0 ? mine : null));
    if (!lv) { for (var i = 0; i < s.levels.length; i++) if (s.levels[i].acts.some(function (a) { return !a.soon; })) { lv = s.levels[i].level; break; } }
    st.lv = st.lv || {}; st.lv[stId] = lv; keep(st);
    var L = levelOf(stId, lv);
    var h = '<div class="llb">' + back("#/listening", "Listening Lab") +
      '<a class="ll-stage' + (T.dark ? " dark" : "") + '" style="background:' + T.bg + ";color:" + (T.dark ? "#fff" : "#15192B") + ';pointer-events:none"><img src="' + s.image + '" alt=""><div class="bd"><small style="color:' + T.ink + '">' + T.tag + "</small><h2>" + esc(s.name) + '</h2><p style="margin:4px 0 0;font-size:13px;opacity:.85">' + T.line + "</p></div></a>" +
      '<div class="bg" style="font-size:14px;font-weight:700;margin:0 2px 8px">Choose your level</div><div class="ll-lvls" role="group" aria-label="Levels">' +
      LEVELS[stId].map(function (l) {
        var has = levelOf(stId, l) && levelOf(stId, l).acts.some(function (a) { return !a.soon; });
        return '<button type="button" data-l="' + l + '" aria-pressed="' + (l === lv) + '"' + (has ? "" : ' class="soon"') + ">" + l + (l === mine ? '<span class="me" aria-label="Your level"></span>' : "") + "</button>";
      }).join("") + "</div>" +
      '<div class="ll-lvinfo"><div><b>' + lv + " · " + (LABEL[lv] || "") + "</b><small>" + (L ? "Listen, answer and review with the transcript" : "New activities are on the way") + "</small></div>" + (lv === mine ? '<span class="ll-me">Your level</span>' : "") + "</div>";
    var acts = L ? L.acts : [], avail = acts.filter(function (a) { return !a.soon; }), dn = st.done || {}, nextSet = false;
    h += '<div style="display:flex;justify-content:space-between;align-items:baseline;margin:0 2px 8px"><div class="bg" style="font-size:19px;font-weight:800">Activities</div><div style="font-size:12px;color:#6B6F94">' + avail.length + " available</div></div>";
    acts.forEach(function (a) {
      if (a.soon) { h += '<div class="ll-lock"><span class="i" aria-hidden="true"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2.5\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/></svg></span><div><h3>' + esc(a.title) + "</h3><small>Coming in December</small></div></div>"; return; }
      var r = dn[a.id], cls = !r && !nextSet ? " next" : ""; if (cls) nextSet = true;
      h += '<a class="ll-act' + cls + '" href="#/listening/play/' + a.id + '"><img src="' + a.image_file + '" alt=""><div class="t"><h3>' + esc(a.title) + '</h3><div class="m">' + mmss(a.duration) + " · " + a.speakers.length + " speaker" + (a.speakers.length > 1 ? "s" : "") + "</div>" +
        exTypes(a).map(function (x) { return '<span class="ll-ex">' + x + "</span>"; }).join("") + "</div>" +
        (r ? '<div class="ll-sc"><b>' + r.s + "/" + r.t + "</b><small>Review</small></div>" : '<span class="ll-play" aria-hidden="true"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z\"/></svg></span>') + "</a>";
    });
    if (!avail.length) for (var k = 0; k < 2; k++) h += '<div class="ll-lock"><span class="i" aria-hidden="true"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2.5\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/></svg></span><div><h3>New listening activity</h3><small>Coming in December</small></div></div>';
    else if (acts.length < 3) for (var m = acts.length; m < 3; m++) h += '<div class="ll-lock"><span class="i" aria-hidden="true"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2.5\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/></svg></span><div><h3>New listening activity</h3><small>Coming in December</small></div></div>';
    return { html: h + "</div>", mount: function (root) {
      [].forEach.call(root.querySelectorAll(".ll-lvls button"), function (b) { b.addEventListener("click", function () { go("#/listening/" + stId + "/" + encodeURIComponent(b.dataset.l)); }); });
      var on = root.querySelector('.ll-lvls [aria-pressed="true"]'); if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
    } };
  }

  /* ---------- 3. Actividad ---------- */
  function playView(id) {
    var F = findAct(id); if (!F) return homeView();
    var a = F.a, stId = F.st.id, T = THEME[stId], kids = stId === "kids";
    var S = { step: 0, plays: 0, ans: {}, playing: false, review: false };
    var audio = null, qaudio = null, stopAt = null;
    function el(root, q) { return root.querySelector(q); }
    function steps(n) { return '<div class="ll-steps">' + [0, 1, 2].map(function (i) { return '<i class="' + (i <= n ? "on" : "") + '"></i>'; }).join("") + "</div>"; }
    function head() { return back("#/listening/" + stId + "/" + encodeURIComponent(F.lv.level), esc(F.st.name)); }
    function kwColor(i) { return ["#FFE58A", "#DCE2FF", "#BDF0D8", "#FFD6E6", "#E6E2FF"][i % 5]; }

    function before() {
      return '<div class="llb">' + head() + steps(0) + '<img class="ll-cover" src="' + a.image_file + '" alt="">' +
        '<h2 style="font-size:26px;font-weight:800">' + esc(a.title) + '</h2><p style="font-size:14px;color:#55597A;margin:6px 0 14px;line-height:1.5">' + esc(a.situation) + "</p>" +
        '<div class="ll-card"><div style="font-size:13px;font-weight:800;margin-bottom:9px">Key words</div>' + a.key_words.map(function (w, i) { return '<span class="ll-kw" style="background:' + kwColor(i) + '">' + esc(w) + "</span>"; }).join("") + "</div>" +
        '<div class="ll-card" style="font-size:13.5px;line-height:1.6"><div style="font-weight:800;margin-bottom:4px">How it works</div>Read the questions first. You can listen <b>' + a.plays + " times</b>. The transcript opens when you finish.</div>" +
        '<button class="ll-btn dk" type="button" data-go="1">See the questions →</button></div>';
    }
    function optsHtml(it) {
      var n = it.n, v = S.ans[n];
      if (it.type === "listen_choose") {
        if (it.sheet) {
          var pos = ["0% 0%", "100% 0%", "0% 100%", "100% 100%"];
          return '<div class="ll-grid" data-sheet="' + it.sheet + '">' + it.options.map(function (o, i) {
            return '<button type="button" class="ll-pic" data-n="' + n + '" data-v="' + i + '" aria-pressed="' + (v === i) + '"><span class="im" style="background-image:url(\'ll-' + it.sheet + '.webp\');background-position:' + pos[i] + '"></span>' + esc(o.t) + "</button>";
          }).join("") + "</div>";
        }
        return it.options.map(function (o, i) { return '<button type="button" class="ll-op" data-n="' + n + '" data-v="' + i + '" aria-pressed="' + (v === i) + '"><span class="r"></span>' + esc(o.t) + "</button>"; }).join("");
      }
      if (it.type === "true_false") return '<div class="ll-tf">' + [["True", true], ["False", false]].map(function (o) { return '<button type="button" class="ll-op" data-n="' + n + '" data-v="' + o[1] + '" aria-pressed="' + (v === o[1]) + '">' + o[0] + "</button>"; }).join("") + "</div>";
      if (it.type === "who_said") return it.options.map(function (o, i) { return '<button type="button" class="ll-op" data-n="' + n + '" data-v="' + i + '" aria-pressed="' + (v === i) + '"><span class="r"></span>' + esc(o) + "</button>"; }).join("");
      if (it.type === "fill_blank") return '<div class="ll-bank">' + it.bank.map(function (w) { return '<button type="button" data-n="' + n + '" data-v="' + esc(w) + '" aria-pressed="' + (v === w) + '">' + esc(w) + "</button>"; }).join("") + "</div>";
      if (it.type === "order") {
        var seq = v || [], shown = it._shuf;
        return '<div class="ll-ord">' + shown.map(function (ix) { var p = seq.indexOf(ix); return '<button type="button" data-n="' + n + '" data-ix="' + ix + '" class="' + (p >= 0 ? "on" : "") + '"><span class="n">' + (p >= 0 ? p + 1 : "") + "</span>" + esc(it.events[ix]) + "</button>"; }).join("") +
          '<button type="button" class="ll-reset" data-reset="' + n + '">Start again</button></div>';
      }
      return "";
    }
    function qText(it) {
      if (it.type === "true_false") return esc(it.q);
      if (it.type === "who_said") return "“" + esc(it.quote) + "”";
      if (it.type === "fill_blank") return esc(it.q).replace("___", '<span class="ll-blank">' + (S.ans[it.n] ? esc(S.ans[it.n]) : "&nbsp;") + "</span>");
      if (it.type === "order") return "Tap the events in the order you hear them.";
      return esc(it.q);
    }
    function quiz() {
      var left = a.plays - S.plays;
      var h = '<div class="llb">' + head() + steps(1) +
        '<div class="ll-player"><div class="row"><button class="ll-pbtn" type="button" data-play aria-label="Play">' + (S.playing ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4.2" height="14" rx="1.4"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.4"/></svg>' : '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>') + '</button><div class="ll-bar"><i></i></div></div>' +
        '<div class="ll-pinfo"><span data-time>0:00 / ' + mmss(a.duration) + '</span><span class="ll-left" data-left>' + (left > 0 ? left + (left === 1 ? " play left" : " plays left") : "No plays left") + "</span></div></div>";
      a.items.forEach(function (it, i) {
        h += '<div class="ll-q"><div class="ll-qh"><span class="ll-qk">' + (i + 1) + " · " + TN[it.type] + "</span>" + (kids && a.q_times ? '<button type="button" class="ll-say" data-say="' + i + '" aria-label="Listen to the question"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 9h4l5-4v14l-5-4H4z\"/><path d=\"M16.5 8.5a5 5 0 0 1 0 7\"/></svg></button>' : "") + "</div>" +
          '<p class="ll-qt">' + qText(it) + '</p><div data-opts="' + it.n + '">' + optsHtml(it) + "</div></div>";
      });
      var all = a.items.every(function (it) { var v = S.ans[it.n]; return it.type === "order" ? v && v.length === it.events.length : v !== undefined; });
      h += '<div class="ll-lockt"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2.5\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/></svg> The transcript opens after you finish</div><button class="ll-btn lm" type="button" data-check' + (all ? "" : " disabled") + ">Check my answers</button></div>";
      return h;
    }
    function correct(it) {
      var v = S.ans[it.n];
      if (it.type === "order") return v && v.join(",") === it.events.map(function (_, i) { return i; }).join(",");
      if (it.type === "fill_blank") return v === it.answer;
      return v === it.answer;
    }
    function rightText(it) {
      if (it.type === "true_false") return it.answer ? "True" : "False";
      if (it.type === "who_said") return it.options[it.answer];
      if (it.type === "fill_blank") return it.answer;
      if (it.type === "order") return it.events.join(" → ");
      return it.options[it.answer].t;
    }
    function yourText(it) {
      var v = S.ans[it.n];
      if (v === undefined) return "—";
      if (it.type === "true_false") return v ? "True" : "False";
      if (it.type === "who_said") return it.options[v];
      if (it.type === "fill_blank") return v;
      if (it.type === "order") return v.map(function (ix) { return it.events[ix]; }).join(" → ");
      return it.options[v].t;
    }
    function cueOf(it) { return Array.isArray(it.cue) ? it.cue[0] : it.cue; }
    function line(id) { for (var i = 0; i < a.script.length; i++) if (a.script[i].id === id) return a.script[i]; return null; }
    function results() {
      var score = a.items.filter(correct).length, tot = a.items.length, pct = score / tot, nm = firstName();
      var msg = pct === 1 ? "Perfect listening" : pct >= .75 ? "Great listening" : pct >= .5 ? "Good effort" : "Keep practicing";
      var wrongCues = {}; a.items.forEach(function (it) { if (!correct(it)) { var c = it.cue; (Array.isArray(c) ? c : [c]).forEach(function (x) { wrongCues[x] = 1; }); } });
      var R = 30, C = 2 * Math.PI * R;
      var h = '<div class="llb">' + head() + steps(2) +
        '<div class="ll-res" style="background:' + (T.dark ? "#15192B" : T.bg) + ";color:" + (T.dark ? "#fff" : "#15192B") + '"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="' + R + '" fill="none" stroke="' + (T.dark ? "#2E3254" : "#fff") + '" stroke-width="9"/><circle cx="40" cy="40" r="' + R + '" fill="none" stroke="' + (T.dark ? "#D3F36B" : "#15192B") + '" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + (C * pct).toFixed(1) + " " + C.toFixed(1) + '" transform="rotate(-90 40 40)"/></svg>' +
        '<div><div class="big">' + score + "/" + tot + '</div><div style="font-size:14px;margin-top:5px">' + msg + (nm ? ", " + esc(nm) : "") + ".<br>" + (score < tot ? "Review " + (tot - score) + " answer" + (tot - score > 1 ? "s" : "") + "." : "You understood everything!") + "</div></div></div>";
      a.items.forEach(function (it, i) {
        var ok = correct(it), c = cueOf(it), L = line(c);
        h += '<div class="ll-fb' + (ok ? " ok" : "") + '"><div class="h"><span class="x">' + (ok ? "✓" : "✕") + " Question " + (i + 1) + "</span>" + (L ? '<button type="button" class="ll-at" data-at="' + c + '"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z\"/></svg> Listen at ' + mmss(L.t) + "</button>" : "") + "</div>" +
          "<p>" + (ok ? esc(it.feedback) : "You answered <s>" + esc(yourText(it)) + "</s>. The answer is <b>" + esc(rightText(it)) + "</b>. " + esc(it.feedback)) + "</p></div>";
      });
      var sp = {}; a.speakers.forEach(function (n, i) { sp[n] = i; });
      h += '<div class="ll-card"><div style="font-size:13px;font-weight:800;margin-bottom:10px">Transcript</div>';
      if (stId === "teens") h += '<div class="ll-chat">' + a.script.map(function (l) { var t = esc(l.text); if (wrongCues[l.id]) t = "<mark>" + t + "</mark>"; return '<div class="' + (sp[l.sp] % 2 ? "r" : "l") + '" data-at="' + l.id + '"><b>' + esc(l.sp) + "</b>" + t + "</div>"; }).join("") + "</div>";
      else h += '<div class="ll-tr">' + a.script.map(function (l) { var t = esc(l.text); if (wrongCues[l.id]) t = "<mark>" + t + "</mark>"; return '<p data-at="' + l.id + '"><b style="color:' + SPK[sp[l.sp] % 4] + '">' + esc(l.sp) + ":</b> " + t + "</p>"; }).join("") + "</div>";
      h += '<div style="font-size:12px;color:#6B6F94;margin-top:6px">Tap any line to hear it again.</div></div>';
      h += '<div class="ll-card"><div style="font-size:13px;font-weight:800;margin-bottom:9px">Practice the key words</div>' + a.key_words.map(function (w, i) { return '<button type="button" class="ll-kw" data-kw="' + esc(w) + '" style="background:' + kwColor(i) + '"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 9h4l5-4v14l-5-4H4z\"/><path d=\"M16.5 8.5a5 5 0 0 1 0 7\"/></svg> ' + esc(w) + "</button>"; }).join("") +
        '<div style="font-size:12px;color:#6B6F94;margin-top:2px">Tap a word to hear the sentence where it appears.</div></div>';
      h += '<div class="ll-2"><button class="ll-btn ol" type="button" data-again>Try again</button><a class="ll-btn dk" href="#/listening/' + stId + "/" + encodeURIComponent(F.lv.level) + '">Done</a></div></div>';
      return { html: h, score: score, tot: tot };
    }

    function setAudio() {
      if (audio) return;
      audio = new Audio(a.audio_file); audio.preload = "auto";
      audio.addEventListener("timeupdate", function () {
        if (stopAt != null && audio.currentTime >= stopAt) { audio.pause(); stopAt = null; }
        var r = document.querySelector(".ll-bar i"), tm = document.querySelector("[data-time]");
        if (r && !S.review) r.style.width = (audio.currentTime / (audio.duration || a.duration) * 100) + "%";
        if (tm && !S.review) tm.textContent = mmss(audio.currentTime) + " / " + mmss(audio.duration || a.duration);
      });
      audio.addEventListener("ended", function () { S.playing = false; if (!S.review) { audio.currentTime = 0; refreshPlayer(); } });
      audio.addEventListener("pause", function () { S.playing = false; if (!S.review) refreshPlayer(); });
      audio.addEventListener("play", function () { S.playing = true; if (!S.review) refreshPlayer(); });
    }
    function refreshPlayer() {
      var b = document.querySelector("[data-play]"), l = document.querySelector("[data-left]"); if (!b) return;
      var left = a.plays - S.plays, canResume = S.playing || (audio && audio.currentTime > 0.05 && !audio.ended);
      b.innerHTML = S.playing ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4.2" height="14" rx="1.4"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.4"/></svg>' : '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>';
      b.disabled = !S.playing && !canResume && left <= 0;
      if (l) l.textContent = left > 0 ? left + (left === 1 ? " play left" : " plays left") : (canResume ? "Last play" : "No plays left");
    }
    function playSeg(startT, endT) {
      setAudio(); if (qaudio) qaudio.pause();
      audio.currentTime = startT; stopAt = endT; audio.play().catch(function () {});
    }
    function sayQ(i) {
      if (!a.q_times) return; if (!qaudio) qaudio = new Audio(a.q_audio);
      var t = a.q_times[i]; if (audio && S.playing) audio.pause();
      qaudio.currentTime = t[0]; qaudio.play().catch(function () {});
      var stop = function () { if (qaudio.currentTime >= t[1]) { qaudio.pause(); qaudio.removeEventListener("timeupdate", stop); } };
      qaudio.addEventListener("timeupdate", stop);
    }
    function render(root) {
      if (S.step === 0) { root.innerHTML = before(); el(root, "[data-go]").onclick = function () { S.step = 1; render(root); window.scrollTo(0, 0); }; return; }
      if (S.step === 1) {
        a.items.forEach(function (it) { if (it.type === "order" && !it._shuf) { var ix = it.events.map(function (_, i) { return i; }); do { ix.sort(function () { return Math.random() - .5; }); } while (ix.join() === it.events.map(function (_, i) { return i; }).join()); it._shuf = ix; } });
        var y = window.scrollY; root.innerHTML = quiz(); window.scrollTo(0, y); setAudio(); refreshPlayer();
        el(root, "[data-play]").onclick = function () {
          if (S.playing) { audio.pause(); return; }
          if (audio.currentTime > 0.05 && !audio.ended) { audio.play(); return; }
          if (S.plays >= a.plays) return;
          S.plays++; stopAt = null; audio.currentTime = 0; audio.play().catch(function () {});
        };
        [].forEach.call(root.querySelectorAll("[data-say]"), function (b) { b.onclick = function () { sayQ(+b.dataset.say); }; });
        [].forEach.call(root.querySelectorAll("[data-sheet]"), function (g) { var im = new Image(); im.onerror = function () { [].forEach.call(g.querySelectorAll(".ll-pic"), function (p) { p.classList.add("noimg"); }); }; im.src = "ll-" + g.dataset.sheet + ".webp"; });
        [].forEach.call(root.querySelectorAll("[data-n]"), function (b) {
          b.onclick = function () {
            var n = +b.dataset.n, it = a.items.filter(function (x) { return x.n === n; })[0];
            if (it.type === "order") { var s = S.ans[n] || [], ix = +b.dataset.ix; if (s.indexOf(ix) < 0) s.push(ix); S.ans[n] = s; }
            else if (it.type === "true_false") S.ans[n] = b.dataset.v === "true";
            else if (it.type === "fill_blank") S.ans[n] = b.dataset.v;
            else S.ans[n] = +b.dataset.v;
            render(root);
          };
        });
        [].forEach.call(root.querySelectorAll("[data-reset]"), function (b) { b.onclick = function () { delete S.ans[+b.dataset.reset]; render(root); }; });
        el(root, "[data-check]").onclick = function () {
          if (audio) audio.pause(); S.step = 2; S.review = true;
          var R = results(), st = store(); st.done = st.done || {}; var prev = st.done[a.id];
          if (!prev || R.score >= prev.s) st.done[a.id] = { s: R.score, t: R.tot }; keep(st);
          try { if (window.MovaAuth) MovaAuth.save("listening-lab", a.id, R.score, R.tot, { stage: stId, level: F.lv.level, title: a.title, plays: S.plays, kind: "quiz" }); } catch (e) {}
          render(root); window.scrollTo(0, 0);
        };
        return;
      }
      root.innerHTML = results().html;
      [].forEach.call(root.querySelectorAll("[data-at]"), function (b) { b.onclick = function () { var L = line(+b.dataset.at); if (L) playSeg(L.t, L.end + 0.15); }; });
      [].forEach.call(root.querySelectorAll("[data-kw]"), function (b) {
        b.onclick = function () { var w = b.dataset.kw.toLowerCase(), L = a.script.filter(function (l) { return l.text.toLowerCase().indexOf(w) >= 0; })[0] || a.script.filter(function (l) { return l.text.toLowerCase().indexOf(w.split(" ")[0]) >= 0; })[0]; if (L) playSeg(L.t, L.end + 0.15); };
      });
      el(root, "[data-again]").onclick = function () { if (audio) audio.pause(); S = { step: 1, plays: 0, ans: {}, playing: false, review: false }; stopAt = null; a.items.forEach(function (it) { delete it._shuf; }); render(root); window.scrollTo(0, 0); };
    }
    return { html: '<div id="ll-root"></div>', mount: function (root) {
      var box = root.querySelector("#ll-root") || root; render(box);
      var stop = function () { if (audio) audio.pause(); if (qaudio) qaudio.pause(); window.removeEventListener("hashchange", stop); };
      window.addEventListener("hashchange", stop);
    } };
  }

  function route(p) {
    p = p || []; css();
    var v;
    if (p[0] === "play" && p[1]) v = playView(decodeURIComponent(p[1]));
    else if (p[0] && stage(p[0])) v = stageView(p[0], p[1] ? decodeURIComponent(p[1]) : null);
    else v = homeView();
    if (typeof v === "string") v = { html: v };
    return { title: "Listening Lab", html: v.html, mount: function (root) { css(); if (v.mount) v.mount(root); fixBack(); setTimeout(fixBack, 0); setTimeout(fixBack, 150); setTimeout(fixBack, 600); } };
  }
  route.__ll = true;
  function install() {
    if (typeof ROUTES !== "object") return false;
    if (ROUTES.listening && ROUTES.listening.__ll) return false;
    ROUTES.listening = route; return true;
  }
  function boot() { if (install() && /^#\/listening/.test(location.hash) && typeof router === "function") router(); }
  boot();
  var tries = 0; (function loop() { if (!(typeof ROUTES === "object" && ROUTES.listening && ROUTES.listening.__ll)) { boot(); if (tries++ < 80) setTimeout(loop, 50); } })();
  window.addEventListener("load", function () { setTimeout(boot, 0); });
})();
