/* MOVA · Banco de preguntas por libro y unidad (Monthly Quiz "Por libro" y worksheets).
   window.MOVA_BQ[libro][unidad] = {
     rm: recuadro "Remember" para la hoja de práctica (HTML con <b>),
     g:  gramática  [oración con ___, respuesta, [distractores], explicación],
     vd: vocabulario [pista, palabra],
     r:  reading {t: título, x: [párrafos], q: [[pregunta, respuesta, [distractores]]]},
     l:  listening [guion que se escucha, pregunta, respuesta, [distractores]],
     w:  writing {u: [oraciones para ordenar], o: [instrucciones de escritura libre]},
     p:  phonics [[cuatro palabras], índice de la que suena diferente, sonido]
   } */
window.MOVA_BQ = window.MOVA_BQ || {};
(function(B){
B["dream-makers-4"] = {
 2: {
  rm: "We say <b>It's seven o'clock</b> · <b>It's seven thirty</b>. For routines: <b>I get up at 7:00.</b> · <b>She gets up at 7:00.</b> (he / she / it + <b>-s</b>). Use <b>in the</b> morning / afternoon / evening.",
  g: [
   ["What time ___ you get up?", "do", ["does", "is", "are"], "With I / you / we / they we use do."],
   ["My sister ___ up at 6:30.", "gets", ["get", "getting", "is get"], "He / she + verb + -s: she gets."],
   ["It's twelve o'clock. It's lunch ___.", "time", ["hour", "clock", "day"], "It's lunch time / bed time / school time."],
   ["I do my homework ___ the afternoon.", "in", ["on", "at", "of"], "in the morning / afternoon / evening."],
   ["We have dinner ___ 8 o'clock.", "at", ["in", "on", "to"], "at + a time: at 8 o'clock."],
   ["What time ___ Tom go to bed?", "does", ["do", "is", "are"], "With he / she we use does."],
   ["It's 9:30. It's nine ___.", "thirty", ["three", "thirteen", "o'clock"], "9:30 = nine thirty."],
   ["Ana ___ breakfast at seven.", "has", ["have", "haves", "having"], "have → she has."]
  ],
  vd: [
   ["You open your eyes in the morning.", "wake up"],
   ["You leave your bed and stand up.", "get up"],
   ["The first meal of the day.", "have breakfast"],
   ["You do exercises from school at home.", "do homework"],
   ["You look at your favorite show.", "watch TV"],
   ["You go to sleep at night.", "go to bed"],
   ["The meal in the evening.", "have dinner"],
   ["You take your backpack and go to class.", "go to school"],
   ["The number after 59.", "sixty"],
   ["Ten times ten.", "one hundred"]
  ],
  r: { t: "Mia's Day", x: [
    "Hi! I'm Mia. On school days I wake up at 6:30. I get up, take a shower and have breakfast with my brother at 7:00.",
    "I go to school by bus at 7:30. At school, lunch time is at twelve o'clock. I love it!",
    "I do my homework in the afternoon, and in the evening I watch TV with my dad. I go to bed at nine o'clock."],
   q: [
    ["What time does Mia wake up?", "at 6:30", ["at 7:00", "at 7:30", "at 9:00"]],
    ["When does she do her homework?", "in the afternoon", ["in the morning", "in the evening", "at lunch time"]],
    ["What does she do with her dad?", "She watches TV.", ["She has breakfast.", "She goes to school.", "She does homework."]]
   ] },
  l: [
   ["Boy: What time is it? Girl: It's eight fifteen. Hurry up!", "What time is it?", "8:15", ["8:50", "5:15", "9:15"]],
   ["Mia gets up at seven fifteen and has breakfast at seven thirty.", "What time does Mia get up?", "7:15", ["7:30", "7:50", "6:15"]],
   ["Leo does his homework in the evening, after dinner.", "When does Leo do his homework?", "in the evening", ["in the morning", "in the afternoon", "at lunch time"]],
   ["Number seventy-two. Seventy-two.", "Which number do you hear?", "72", ["27", "62", "70"]]
  ],
  w: { u: ["I get up at seven o'clock.", "She has lunch at twelve.", "What time do you go to bed?"],
   o: ["Write about your day. Use four times (I get up at…).", "Write what you do in the morning, in the afternoon and in the evening."] },
  p: [
   [["time", "bike", "fish", "ride"], 2, "i as in time"],
   [["go", "home", "shower", "phone"], 2, "o as in go"],
   [["eat", "sleep", "bed", "tea"], 2, "ee as in sleep"]
  ]
 },
 3: {
  rm: "<b>I have</b> art <b>on</b> Monday. · What do you do <b>on</b> Saturday? · <b>When does</b> he play soccer? → He plays soccer <b>on</b> Friday. · <b>Who</b> plays the piano? → <b>Sara</b> plays the piano.",
  g: [
   ["I have music class ___ Tuesday.", "on", ["in", "at", "to"], "on + day: on Tuesday."],
   ["When ___ your brother play soccer?", "does", ["do", "is", "are"], "With he / she: When does…?"],
   ["Who ___ the piano in your family?", "plays", ["play", "does play", "playing"], "Who + verb + -s: Who plays…?"],
   ["What do you do ___ the weekend?", "on", ["in", "at", "of"], "on the weekend."],
   ["My mom ___ shopping every Saturday.", "goes", ["go", "going", "gos"], "go → she goes."],
   ["___ do you do karate? On Monday and Wednesday.", "When", ["Who", "What", "Where"], "When asks about the day or time."],
   ["Paco ___ his bike every day.", "rides", ["ride", "riding", "rided"], "He + verb + -s: he rides."],
   ["We ___ to the movies on Friday.", "go", ["goes", "going", "gos"], "With we: go (no -s)."]
  ],
  vd: [
   ["You wash your body with water.", "take a shower"],
   ["You put on your clothes.", "get dressed"],
   ["You buy things at the mall.", "go shopping"],
   ["A sport with kicks and a white uniform.", "do karate"],
   ["You see a film on a big screen.", "go to the movies"],
   ["A sport with a ball and two goals.", "play soccer"],
   ["You make music with black and white keys.", "play the piano"],
   ["You move on two wheels.", "ride a bike"],
   ["You do this in a pool.", "go swimming"],
   ["Saturday and Sunday.", "the weekend"]
  ],
  r: { t: "Tom's Busy Week", x: [
    "Tom is ten. He has a busy week! On Monday and Wednesday he does karate after school.",
    "On Tuesday he has piano class, and on Thursday he goes swimming with his cousin Leo.",
    "On Friday Tom and his family go to the movies. On the weekend he rides his bike in the park and goes shopping with his mom."],
   q: [
    ["When does Tom do karate?", "on Monday and Wednesday", ["on Tuesday and Thursday", "on Friday", "on the weekend"]],
    ["Who goes swimming with Tom?", "his cousin Leo", ["his mom", "his dad", "his teacher"]],
    ["What does Tom do on Friday?", "He goes to the movies.", ["He plays the piano.", "He rides his bike.", "He goes shopping."]]
   ] },
  l: [
   ["Girl: When do you play soccer? Boy: I play soccer on Thursday.", "When does the boy play soccer?", "on Thursday", ["on Tuesday", "on Saturday", "on Sunday"]],
   ["Who plays the piano? My sister Sara plays the piano every day.", "Who plays the piano?", "Sara", ["the boy", "his mom", "his dad"]],
   ["On Saturday I go shopping with my mom and then I take a shower.", "What does the girl do on Saturday?", "She goes shopping.", ["She does karate.", "She goes swimming.", "She plays soccer."]],
   ["We go to the movies every weekend.", "When do they go to the movies?", "every weekend", ["every day", "every Monday", "every evening"]]
  ],
  w: { u: ["I do karate on Monday.", "When does she go swimming?", "Who plays soccer on Friday?"],
   o: ["Write four sentences about your Saturday.", "Write about your week. What do you do on Monday, Wednesday and Friday?"] },
  p: [
   [["play", "day", "cat", "say"], 2, "ay as in play"],
   [["ride", "bike", "swim", "like"], 2, "i as in bike"],
   [["shop", "show", "she", "sock"], 3, "sh"]
  ]
 }
};
})(window.MOVA_BQ);
