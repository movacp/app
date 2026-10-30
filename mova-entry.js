/* MOVA Learning Studio · entrada de los juegos con el diseño 2026.
   Solo cambia la pantalla de inicio de cada juego (portada, opciones y botón).
   No toca la mecánica ni el contenido. TOEFL Practice, Level Up y Game On no se tocan. */
(function(){
  if(window.__movaEntry) return; window.__movaEntry = 1;
  var f = (location.pathname.match(/juego-[a-z0-9-]+/) || [""])[0];
  if(!f || /toefl-practice|level-up|retos|word-forms/.test(f)) return;
  var d = document;
  var CH = {"bloom": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 138 C96 156.0 90 166.0 92 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 138 C124 156.0 128 166.0 127 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M80 98 C62 104 50 92 48 74\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"74\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M142 100 C152 104 160 102 168 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"86\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"110\" cy=\"92\" r=\"26\" fill=\"#9C8BFF\"/><circle cx=\"80\" cy=\"62\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M87 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M92 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M113 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M118 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M107 85 q3 -4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M94 106 Q110 122 126 106\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"84\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"136\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/></svg>", "bloomEyes": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 138 C96 156.0 90 166.0 92 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 138 C124 156.0 128 166.0 127 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M80 98 C62 104 50 92 48 74\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"74\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M142 100 C152 104 160 102 168 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"86\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"110\" cy=\"92\" r=\"26\" fill=\"#9C8BFF\"/><circle cx=\"80\" cy=\"62\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M94 106 Q110 122 126 106\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"84\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"136\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"97\" cy=\"88\" rx=\"4.2\" ry=\"5.2\" fill=\"#1A1B2E\"/><ellipse cx=\"123\" cy=\"88\" rx=\"4.2\" ry=\"5.2\" fill=\"#1A1B2E\"/><circle cx=\"98.4\" cy=\"86.2\" r=\"1.4\" fill=\"#fff\"/><circle cx=\"124.4\" cy=\"86.2\" r=\"1.4\" fill=\"#fff\"/></svg>", "echo": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 136 C96 155.8 90 166.8 92 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 136 C124 155.8 128 166.8 127 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M72 112 C56 114 46 104 46 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 114 C160 116 168 112 174 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"174\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"96\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"82\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"136\" cy=\"98\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"112\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"88\" cy=\"118\" r=\"22\" fill=\"#93A6FF\"/><circle cx=\"134\" cy=\"120\" r=\"22\" fill=\"#93A6FF\"/><path d=\"M84 134 L74 152 L100 138z\" fill=\"#93A6FF\"/><circle cx=\"96\" cy=\"72\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(148 30)\"><rect width=\"50\" height=\"30\" rx=\"15\" fill=\"#fff\"/><path d=\"M12 27 L9 38 L21 28z\" fill=\"#fff\"/><text x=\"25\" y=\"20.5\" font-family=\"Bricolage Grotesque,sans-serif\" font-weight=\"700\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1A1B2E\">Hi!</text></g></svg>", "nova": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 150 C124 168.0 128 178.0 127 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M110.0 40.0 L127.6 73.7 L165.2 80.1 L138.5 107.3 L144.1 144.9 L110.0 128.0 L75.9 144.9 L81.5 107.3 L54.8 80.1 L92.4 73.7Z\" fill=\"#FFD54A\" stroke=\"#FFD54A\" stroke-width=\"20\" stroke-linejoin=\"round\"/><circle cx=\"94\" cy=\"74\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><circle cx=\"122\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><path d=\"M107 93 q3 -2.4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"98\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><path d=\"M104 108 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M68 112 C64 124 72 132 82 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"82\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M152 112 C156 124 148 132 138 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"138\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><g transform=\"translate(110 136)\"><path d=\"M-30 -8 Q-15 -13 0 -6 L0 13 Q-15 6 -30 11z\" fill=\"#fff\"/><path d=\"M30 -8 Q15 -13 0 -6 L0 13 Q15 6 30 11z\" fill=\"#F3F0FF\"/><path d=\"M-30 -8 Q-15 -13 0 -6 Q15 -13 30 -8 L30 11 Q15 6 0 13 Q-15 6 -30 11z\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M0 -6 L0 13\" stroke=\"#1A1B2E\" stroke-width=\"1.8\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>", "beat": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M124 150 C126 168.0 130 178.0 129 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"132\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M66 112 C50 114 42 104 44 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M154 112 C166 112 174 106 178 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"178\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M112 48 C146 46 156 78 156 106 C156 138 136 152 110 152 C84 152 64 138 64 106 C64 74 80 50 112 48z\" fill=\"#C8EE4A\"/><circle cx=\"88\" cy=\"74\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M66 98 C56 28 164 24 154 98\" stroke=\"#1A1B2E\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"68\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"68\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"152\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"152\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M117 103 q5 5 10 0\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M30 128 L30 108 L38 105\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"26.5\" cy=\"128.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/><path d=\"M190 70 L190 52\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"186.5\" cy=\"70.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/></svg>", "tri": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 152 C96 170.0 90 180.0 92 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 152 C124 170.0 128 180.0 127 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M70 128 C56 130 46 120 46 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 128 C158 128 164 124 168 118\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"118\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M110 44 L168 146 L52 146Z\" fill=\"#FF9FCB\" stroke=\"#FF9FCB\" stroke-width=\"26\" stroke-linejoin=\"round\"/><circle cx=\"104\" cy=\"76\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M88 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M93 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M112 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M117 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M108 109 q2 -4 4 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 126 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(170 118) rotate(-35)\"><rect x=\"-4\" y=\"-30\" width=\"8\" height=\"30\" rx=\"2\" fill=\"#FFD54A\"/><rect x=\"-4\" y=\"-35\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#FF8FC8\"/><path d=\"M-4 0 L0 8 L4 0z\" fill=\"#F4E1C1\"/><path d=\"M-1.3 5.4 L0 8 L1.3 5.4z\" fill=\"#1A1B2E\"/></g></svg>"};
  var LIME="#D3F36B", LILA="#C7B5FF", PINK="#FFC7E2", BUTTER="#FFE58A", MINT="#BDF0D8", PERI="#C9D2FF", NAVY="#15192B";
  /* start: pantalla de inicio · title: título · bits: lo que entra a la portada · ch: personaje o "keep" (conserva la ilustración del juego) */
  var CFG = {
    "juego-word-quest":        {start:"#s-start", bg:LIME,   ch:"bloom"},
    "juego-crucigrama":        {start:"#s-start", bg:BUTTER, ch:"tri"},
    "juego-sopa-de-letras":    {start:"#s-start", bg:LILA,   ch:"nova"},
    "juego-sentence-builder":  {start:"#v-start", bg:MINT,   ch:"echo"},
    "juego-sentence-scramble": {start:"#s-start", bg:PINK,   ch:"bloomEyes", tpl:1},
    "juego-verb-memory":       {start:"#s-start", bg:PERI,   ch:"beat", extra:".legend"},
    "juego-mision-matematica": {start:"#s-start", bg:NAVY,   ch:"nova", dark:1},
    "juego-lee-con-mochi":     {start:"#s-map",   bg:BUTTER, img:"mochi-hola.webp"},
    "juego-locked-library":    {start:"#v-start", bg:NAVY,   keep:"#cover-art", dark:1, extra:".facts"},
    "juego-detective-patrones":{start:"#s-start", bg:BUTTER, tpl:1},
    "juego-haunted-mansion":   {start:"#s-start", bg:LILA,   tpl:1},
    "juego-la-balanza":        {start:"#s-start", bg:MINT,   tpl:1},
    "juego-la-boveda":         {start:"#s-start", bg:LILA,   tpl:1},
    "juego-la-tiendita":       {start:"#s-start", bg:PINK,   tpl:1},
    "juego-lluvia-de-numeros": {start:"#s-start", bg:PERI,   tpl:1},
    "juego-lost-in-the-museum":{start:"#s-start", bg:BUTTER, tpl:1},
    "juego-pirate-treasure-island":{start:"#s-start", bg:MINT, tpl:1},
    "juego-pizzeria-fracciones":{start:"#s-start", bg:PINK,  tpl:1},
    "juego-que-hora-es":       {start:"#s-start", bg:LIME,   tpl:1},
    "juego-space-station-rescue":{start:"#s-start", bg:PERI, tpl:1},
    "juego-the-detectives-case":{start:"#s-start", bg:LIME,  tpl:1},
    "juego-trapped-in-the-train":{start:"#s-start", bg:LILA, tpl:1}
  };
  var c = CFG[f]; if(!c) return;

  var css = ""+
  /* Página: lavanda lisa y sin la tarjeta blanca grande mientras se ve la portada */
  "html.mv-on,html.mv-on body.mv-start.mv-start{background:#F5F3FA!important;background-color:#F5F3FA!important;background-image:none!important}"+
  "body.mv-start::before{display:none!important}"+
  "body.mv-start .app{grid-template-columns:minmax(0,1fr)}body.mv-start .app>*{min-width:0}"+
  "body.mv-start #fx{display:none}"+
  "body.mv-start .app>.card,body.mv-start .app>.panel,body.mv-start .wrap,body.mv-start .shell{background:transparent!important;box-shadow:none!important;border:0!important;max-width:620px}"+
  "body.mv-start .card.cover,body.mv-start main.card.hero{background:transparent!important;box-shadow:none!important;border:0!important;padding:0!important}"+
  "body.mv-start .panel{padding-left:4px;padding-right:4px}"+
  ".mv-s .brand,body.mv-start .topbar .mark,body.mv-start>.top .mark{display:none!important}"+
  ".mv-s{color:#15192B}"+
  /* Portada de color */
  ".mv-hero{position:relative;display:block!important;background:var(--mvh);border-radius:28px;padding:22px 138px 22px 22px;margin:12px 0 18px;min-height:196px;overflow:visible;text-align:left!important;color:#15192B}"+
  ".mv-hero.mv-dk{color:#fff}"+
  ".mv-hero>div:first-child{position:relative;z-index:2}"+
  ".mv-hero h1,.mv-hero .title{font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif!important;font-weight:800!important;font-size:clamp(30px,8.2vw,46px)!important;hyphens:manual;line-height:.98!important;letter-spacing:-.025em!important;margin:4px 0 10px!important;text-align:left!important;"+
     "color:#15192B!important;-webkit-text-fill-color:#15192B!important;background:none!important;text-shadow:none!important}"+
  ".mv-hero.mv-dk h1{color:#fff!important;-webkit-text-fill-color:#fff!important}"+
  ".mv-hero h1 *{color:inherit!important;-webkit-text-fill-color:inherit!important;text-shadow:none!important;transform:none!important;background:none!important}"+
  ".mv-hero p,.mv-hero .lead{color:#2B2F45!important;font-size:14.5px!important;line-height:1.5!important;margin:0!important;text-align:left!important;max-width:34ch}"+
  ".mv-hero.mv-dk p{color:#C9CCE0!important}"+
  ".mv-hero .tag,.mv-hero .kicker{display:inline-block!important;white-space:nowrap;background:#fff!important;color:#15192B!important;border-radius:999px!important;padding:5px 12px!important;font-size:12px!important;font-weight:800!important;letter-spacing:.01em!important;text-transform:none!important;margin:0 0 8px!important}"+
  
  ".mv-hero svg.mv-ch{width:158px!important;height:158px!important}"+
  /* Práctica individual / Reto multijugador */
  ".mv-s .mva-mode{margin:0 0 6px!important;background:#fff!important;border:0!important;border-radius:999px!important;box-shadow:none!important}"+
  ".mv-s .mva-mode svg{width:18px!important;height:18px!important}"+
  ".mv-s .mva-mode .on{background:#15192B!important;color:#fff!important;border-radius:999px!important}"+
  ".mv-hero.mv-dk .tag{background:#D3F36B!important}"+
  ".mv-ch{position:absolute;right:-6px;bottom:-14px;width:170px;height:170px;z-index:1;pointer-events:none}"+
  ".mv-hero img.mv-ch{object-fit:contain}"+
  ".mv-hero>img,.mv-hero>svg:not(.mv-ch){position:absolute!important;right:2px;bottom:-12px;width:150px!important;height:auto!important;max-height:210px;object-fit:contain;z-index:1;filter:drop-shadow(0 10px 14px rgba(21,25,43,.18))!important}"+
  ".mv-hero .mv-art{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:132px;height:132px;border-radius:22px;overflow:hidden;z-index:1;margin:0!important}"+
  ".mv-hero .mv-art *{max-width:100%}"+
  ".mv-hero .legend,.mv-hero .facts{margin-top:12px!important;justify-content:flex-start!important}"+
  ".mv-hero .facts span{background:rgba(255,255,255,.14)!important;color:#fff!important;border:0!important}"+
  "@media(max-width:380px){.mv-hero{padding-right:122px}.mv-ch{width:140px;height:140px}.mv-hero>img{width:124px!important}}"+
  /* Etiquetas de sección */
  ".mv-s .label,.mv-s h2:not(.mv-hero h2),.mv-s .field label{font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif!important;font-size:17px!important;font-weight:800!important;color:#15192B!important;letter-spacing:-.01em;text-transform:none!important;margin:20px 0 10px!important}"+
  /* Opciones: tarjetas blancas redondeadas; la elegida en azul marino */
  ".mv-s .level,.mv-s .choice,.mv-s .seg button,.mv-s .stages>button,.mv-s .modes>button,.mv-s .tenses>*,.mv-s .toggle button,.mv-s .grades>button{border-radius:20px!important;box-shadow:none!important}"+
  ".mv-s .level,.mv-s .choice{background:#fff!important;border:2px solid #fff!important;color:#15192B!important}"+
  ".mv-s .level small,.mv-s .choice small{color:#6B6F86!important}"+
  ".mv-s .level[aria-pressed=true],.mv-s .choice[aria-pressed=true]{background:#15192B!important;border-color:#15192B!important;color:#fff!important}"+
  ".mv-s .level[aria-pressed=true] small,.mv-s .choice[aria-pressed=true] small,.mv-s .level[aria-pressed=true] b{color:#fff!important}"+
  ".mv-s .level[aria-pressed=true] small,.mv-s .choice[aria-pressed=true] small{color:#C9CCE0!important}"+
  ".mv-s .seg,.mv-s .toggle{background:#fff!important;border-radius:999px!important;padding:5px!important;border:0!important;box-shadow:none!important}"+
  ".mv-s .seg button,.mv-s .toggle button{border-radius:999px!important}"+
  /* Botón principal: azul marino con sombra lima */
  ".mv-s .play,.mv-s .primary,.mv-s #start,.mv-s #begin{background:#15192B!important;color:#fff!important;border:0!important;border-radius:999px!important;box-shadow:0 5px 0 #D3F36B!important;text-shadow:none!important;"+
     "font-family:'Plus Jakarta Sans',sans-serif!important;font-weight:800!important;font-size:17px!important;min-height:56px}"+
  ".mv-s .play:active,.mv-s .primary:active,.mv-s #start:active{transform:translateY(3px);box-shadow:0 2px 0 #D3F36B!important}"+
  ".mv-s #begin:disabled{opacity:.45}"+
  ".mv-s .best{color:#6B6F86!important}"+
  /* Detalles por juego */
  ".mv-s .topics>button,.mv-s .topics>div{border-radius:20px!important}"+
  "#v-start.mv-s .start-row{background:#fff;border-radius:22px;padding:12px 12px 12px 18px;border:0!important}"+
  "#v-start.mv-s .start-row #start{min-height:48px;padding:0 22px}"+
  "#v-start.mv-s .tenses>*{background:#fff!important;border:2px solid #fff!important}"+
  "#v-start.mv-s .tenses>[aria-checked=true],#v-start.mv-s .tenses>.on{border-color:#15192B!important}"+
  "body.mv-start .field input{border-radius:16px!important;background:#fff!important;border:2px solid #E6E1F2!important;color:#15192B!important}"+
  "body.mv-start.mv-ll{background:#F5F3FA!important}body.mv-start.mv-ll .field label{color:#15192B!important}"+
  "#s-map.mv-s .map{border-radius:28px!important}"+
  ".mv-s .intro{background:transparent!important;box-shadow:none!important;padding:0!important;border-radius:0!important}"+
  "body.mv-start .wrap{padding-top:58px!important}"+
  ".mv-s .seg button[aria-pressed=true]{background:#15192B!important;color:#fff!important;box-shadow:none!important}"+
  ".mv-s .stage,.mv-s .topic{background:#fff!important;border:2px solid #fff!important;border-radius:20px!important;box-shadow:none!important;color:#15192B!important}"+
  ".mv-s .stage[aria-pressed=true],.mv-s .topic[aria-pressed=true]{background:#15192B!important;border-color:#15192B!important;color:#fff!important}"+
  ".mv-s .stage[aria-pressed=true] small,.mv-s .topic[aria-pressed=true] small{color:#C9CCE0!important}"+
  "#s-map.mv-s .teacher{border-radius:999px!important}";

  function svg(k){ return CH[k].replace('<svg ','<svg class="mv-ch" '); }
  function build(){
    var s = d.querySelector(c.start); if(!s || s.__mv) return !!s;
    s.__mv = 1; s.classList.add("mv-s");
    if(f === "juego-locked-library") d.body.classList.add("mv-ll");
    var hero;
    if(c.tpl){
      hero = s.querySelector(".hero");
      if(!hero) return true;
      if(c.ch){ var old = hero.querySelector(":scope>svg"); if(old) old.remove(); hero.insertAdjacentHTML("beforeend", svg(c.ch)); }
    } else {
      var h1 = s.querySelector("h1"); if(!h1) return true;
      hero = d.createElement("div");
      var box = d.createElement("div"); hero.appendChild(box);
      var anchor = h1.closest(".intro") === h1.parentNode ? h1 : h1;
      anchor.parentNode.insertBefore(hero, anchor);
      var kick = s.querySelector(".kicker");
      if(kick && kick.compareDocumentPosition(h1) & 4) box.appendChild(kick);
      box.appendChild(h1);
      var lead = hero.nextElementSibling;
      if(lead && (lead.tagName === "P") && !lead.classList.contains("label")) box.appendChild(lead);
      if(c.extra){ var ex = s.querySelector(c.extra); if(ex) box.appendChild(ex); }
      if(c.keep){ var art = s.querySelector(c.keep); if(art){ art.classList.add("mv-art"); hero.appendChild(art); } }
      else if(c.img){ hero.insertAdjacentHTML("beforeend", '<img class="mv-ch" src="' + c.img + '" alt="">'); }
      else if(c.ch){ hero.insertAdjacentHTML("beforeend", svg(c.ch)); }
    }
    hero.classList.add("mv-hero"); if(c.dark) hero.classList.add("mv-dk");
    hero.style.setProperty("--mvh", c.bg);
    sync();
    try{ new MutationObserver(sync).observe(s, {attributes:true, attributeFilter:["hidden","style","class"]}); new MutationObserver(function(){ var m = hero.querySelector(".mva-mode"); if(m) hero.parentNode.insertBefore(m, hero.nextSibling); }).observe(hero, {childList:true, subtree:true}); }catch(e){}
    return true;
  }
  function sync(){
    var s = d.querySelector(c.start); if(!s) return;
    var on = !s.hidden && getComputedStyle(s).display !== "none";
    d.body.classList.toggle("mv-start", on); d.documentElement.classList.toggle("mv-on", on);
    var h = s.querySelector(".mv-hero"), m = h && h.querySelector(".mva-mode"); if(m) h.parentNode.insertBefore(m, h.nextSibling);
  }
  var st = d.createElement("style"); st.id = "mova-entry"; st.textContent = css;
  (d.head || d.documentElement).appendChild(st);
  function go(){ if(!build()){ var n = 0, t = setInterval(function(){ if(build() || ++n > 40) clearInterval(t); }, 100); } }
  if(d.readyState === "loading") d.addEventListener("DOMContentLoaded", go); else go();
})();
