/* MOVA Learning Studio · secciones con el rediseño 2026 (nov 2026)
   Read (Reading Library y Stories for every stage), Lecturas en español,
   Matemáticas y Lectoescritura con encabezado, pestañas y vitrinas del nuevo diseño.
   Matemáticas: vitrina con Prácticas y Juegos, prácticas por grado y práctica rápida por tema. */
(function () {
  "use strict";
  var CH = {"nova": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 150 C124 168.0 128 178.0 127 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M110.0 40.0 L127.6 73.7 L165.2 80.1 L138.5 107.3 L144.1 144.9 L110.0 128.0 L75.9 144.9 L81.5 107.3 L54.8 80.1 L92.4 73.7Z\" fill=\"#FFD54A\" stroke=\"#FFD54A\" stroke-width=\"20\" stroke-linejoin=\"round\"/><circle cx=\"94\" cy=\"74\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><circle cx=\"122\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><path d=\"M107 93 q3 -2.4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"98\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><path d=\"M104 108 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M68 112 C64 124 72 132 82 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"82\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M152 112 C156 124 148 132 138 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"138\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><g transform=\"translate(110 136)\"><path d=\"M-30 -8 Q-15 -13 0 -6 L0 13 Q-15 6 -30 11z\" fill=\"#fff\"/><path d=\"M30 -8 Q15 -13 0 -6 L0 13 Q15 6 30 11z\" fill=\"#F3F0FF\"/><path d=\"M-30 -8 Q-15 -13 0 -6 Q15 -13 30 -8 L30 11 Q15 6 0 13 Q-15 6 -30 11z\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M0 -6 L0 13\" stroke=\"#1A1B2E\" stroke-width=\"1.8\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>", "echo": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 136 C96 155.8 90 166.8 92 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 136 C124 155.8 128 166.8 127 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M72 112 C56 114 46 104 46 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 114 C160 116 168 112 174 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"174\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"96\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"82\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"136\" cy=\"98\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"112\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"88\" cy=\"118\" r=\"22\" fill=\"#93A6FF\"/><circle cx=\"134\" cy=\"120\" r=\"22\" fill=\"#93A6FF\"/><path d=\"M84 134 L74 152 L100 138z\" fill=\"#93A6FF\"/><circle cx=\"96\" cy=\"72\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(148 30)\"><rect width=\"50\" height=\"30\" rx=\"15\" fill=\"#fff\"/><path d=\"M12 27 L9 38 L21 28z\" fill=\"#fff\"/><text x=\"25\" y=\"20.5\" font-family=\"Bricolage Grotesque,sans-serif\" font-weight=\"700\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1A1B2E\">Hi!</text></g></svg>", "tri": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 152 C96 170.0 90 180.0 92 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 152 C124 170.0 128 180.0 127 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M70 128 C56 130 46 120 46 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 128 C158 128 164 124 168 118\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"118\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M110 44 L168 146 L52 146Z\" fill=\"#FF9FCB\" stroke=\"#FF9FCB\" stroke-width=\"26\" stroke-linejoin=\"round\"/><circle cx=\"104\" cy=\"76\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M88 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M93 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M112 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M117 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M108 109 q2 -4 4 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 126 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(170 118) rotate(-35)\"><rect x=\"-4\" y=\"-30\" width=\"8\" height=\"30\" rx=\"2\" fill=\"#FFD54A\"/><rect x=\"-4\" y=\"-35\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#FF8FC8\"/><path d=\"M-4 0 L0 8 L4 0z\" fill=\"#F4E1C1\"/><path d=\"M-1.3 5.4 L0 8 L1.3 5.4z\" fill=\"#1A1B2E\"/></g></svg>", "bloom": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 138 C96 156.0 90 166.0 92 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 138 C124 156.0 128 166.0 127 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M80 98 C62 104 50 92 48 74\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"74\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M142 100 C152 104 160 102 168 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"86\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"110\" cy=\"92\" r=\"26\" fill=\"#9C8BFF\"/><circle cx=\"80\" cy=\"62\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M87 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M92 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M113 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M118 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M107 85 q3 -4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M94 106 Q110 122 126 106\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"84\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"136\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/></svg>", "mochi": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M70 70 L62 30 L94 52z\" fill=\"#4A93F0\" stroke=\"#4A93F0\" stroke-width=\"6\" stroke-linejoin=\"round\"/><path d=\"M150 70 L158 30 L126 52z\" fill=\"#4A93F0\" stroke=\"#4A93F0\" stroke-width=\"6\" stroke-linejoin=\"round\"/><path d=\"M58 112 C58 70 80 48 110 48 C140 48 162 70 162 112 L162 158 q-9 12 -18 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 Z\" fill=\"#6FB2FF\"/><circle cx=\"84\" cy=\"70\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"94\" cy=\"98\" r=\"11\" fill=\"#fff\"/><circle cx=\"95.5\" cy=\"99.5\" r=\"5.6\" fill=\"#1A1B2E\"/><circle cx=\"97.4\" cy=\"97\" r=\"1.8\" fill=\"#fff\"/><circle cx=\"126\" cy=\"98\" r=\"11\" fill=\"#fff\"/><circle cx=\"127.5\" cy=\"99.5\" r=\"5.6\" fill=\"#1A1B2E\"/><circle cx=\"129.4\" cy=\"97\" r=\"1.8\" fill=\"#fff\"/><path d=\"M100 117 q10 9 20 0\" stroke=\"#1A1B2E\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103.5 119.3 l2 4.2 l2 -3.2z\" fill=\"#fff\"/><path d=\"M116.5 119.3 l-2 4.2 l-2 -3.2z\" fill=\"#fff\"/><ellipse cx=\"80\" cy=\"114\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"140\" cy=\"114\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M60 124 C48 128 42 138 44 148\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"148\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M160 116 C172 110 178 98 176 84\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"176\" cy=\"84\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M182 78 q4 4 2 9\" stroke=\"#1A1B2E\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M187 72 q6 6 3 14\" stroke=\"#1A1B2E\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path transform=\"translate(40 52) scale(0.8)\" d=\"M0-12C1.6-3 3-1.6 12 0 3 1.6 1.6 3 0 12-1.6 3-3 1.6-12 0-3-1.6-1.6-3 0-12z\" fill=\"#FFD54A\"/><path transform=\"translate(180 150) scale(0.6)\" d=\"M0-12C1.6-3 3-1.6 12 0 3 1.6 1.6 3 0 12-1.6 3-3 1.6-12 0-3-1.6-1.6-3 0-12z\" fill=\"#FF8FC8\"/><ellipse cx=\"110\" cy=\"182\" rx=\"40\" ry=\"5\" fill=\"#16182A\" opacity=\".06\"/></svg>", "beat": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M124 150 C126 168.0 130 178.0 129 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"132\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M66 112 C50 114 42 104 44 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M154 112 C166 112 174 106 178 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"178\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M112 48 C146 46 156 78 156 106 C156 138 136 152 110 152 C84 152 64 138 64 106 C64 74 80 50 112 48z\" fill=\"#C8EE4A\"/><circle cx=\"88\" cy=\"74\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M66 98 C56 28 164 24 154 98\" stroke=\"#1A1B2E\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"68\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"68\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"152\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"152\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M117 103 q5 5 10 0\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M30 128 L30 108 L38 105\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"26.5\" cy=\"128.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/><path d=\"M190 70 L190 52\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"186.5\" cy=\"70.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/></svg>", "bloomEyes": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 138 C96 156.0 90 166.0 92 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 138 C124 156.0 128 166.0 127 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M80 98 C62 104 50 92 48 74\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"74\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M142 100 C152 104 160 102 168 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"86\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"110\" cy=\"92\" r=\"26\" fill=\"#9C8BFF\"/><circle cx=\"80\" cy=\"62\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M94 106 Q110 122 126 106\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"84\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"136\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"97\" cy=\"88\" rx=\"4.2\" ry=\"5.2\" fill=\"#1A1B2E\"/><ellipse cx=\"123\" cy=\"88\" rx=\"4.2\" ry=\"5.2\" fill=\"#1A1B2E\"/><circle cx=\"98.4\" cy=\"86.2\" r=\"1.4\" fill=\"#fff\"/><circle cx=\"124.4\" cy=\"86.2\" r=\"1.4\" fill=\"#fff\"/></svg>"};
  var st = document.createElement("style"); st.id = "mova-secciones"; st.textContent = ".ms{padding-top:4px}\n.ms-back{display:inline-flex;align-items:center;gap:6px;background:#fff;border-radius:999px;padding:8px 15px 8px 11px;font-weight:800;font-size:14px;color:#15192B;text-decoration:none;margin:2px 0 12px;box-shadow:0 6px 18px -14px rgba(54,40,120,.5)}\n.ms-back svg{width:17px;height:17px}\n.ms-hero{position:relative;overflow:hidden;background:var(--c,#C7B5FF);color:#15192B;border-radius:30px;padding:24px 22px 26px;min-height:200px;margin:4px 0 14px}\n.ms-hero .mp-k{background:#fff}\n.ms-hero h1{font-family:\"Bricolage Grotesque\",sans-serif;font-size:clamp(30px,8.6vw,44px);line-height:.96;letter-spacing:-.025em;margin:12px 0 10px;color:#15192B}\n.ms-hero p{margin:0;font-size:14.5px;line-height:1.5;color:#2B2F45;max-width:34ch}\n.ms-hx{position:relative;z-index:2;max-width:62%}\n.ms-art{position:absolute;right:-8px;bottom:-14px;width:44%;max-width:210px;z-index:1;pointer-events:none}\n.ms-art svg,.ms-art img{width:100%;height:auto;display:block}\n.ms-art img{filter:drop-shadow(0 14px 18px rgba(21,25,43,.18))}\n.ms-hero .ms-dot{position:absolute;border-radius:50%;background:#fff;opacity:.45}\n.ms-hero .ms-dot.a{width:110px;height:110px;right:-30px;top:-34px}\n.ms-hero .ms-dot.b{width:14px;height:14px;right:46%;top:26px;opacity:.8}\n.ms-hero .ms-dot.c{width:9px;height:9px;right:38%;top:62px;background:#15192B;opacity:.18}\n.ms-bub{position:absolute;z-index:3;right:20px;top:20px;background:#fff;border:2px solid #15192B;border-radius:16px;padding:6px 10px;font-weight:800;font-size:12.5px;line-height:1.25;max-width:150px;box-shadow:0 4px 0 #15192B}\n.ms-dk{background:#15192B;color:#fff}\n.ms-dk h1{color:#fff}.ms-dk p{color:#C9CCE0}.ms-dk .mp-k{background:#D3F36B}\n.ms-seg{display:grid;grid-template-columns:1fr 1fr;gap:6px;background:#fff;border-radius:999px;padding:6px;margin:0 0 18px;box-shadow:0 10px 30px -18px rgba(54,40,120,.35)}\n.ms-seg a{text-align:center;padding:12px 10px;border-radius:999px;font-weight:800;font-size:15px;color:#4E5268;text-decoration:none}\n.ms-seg a[aria-current=\"page\"]{background:#15192B;color:#fff;box-shadow:0 3px 0 #D3F36B}\n.ms-h{font-family:\"Bricolage Grotesque\",sans-serif!important;font-size:20px!important;margin:6px 4px 10px!important;letter-spacing:-.01em}\n.ms-sub{margin:-4px 4px 14px;color:#6A6F85;font-size:14px;line-height:1.45}\n.ms .mp-th img{width:100%;height:100%;object-fit:cover;display:block}\n.ms .mp-tx small{color:#6A6F85;font-size:12.5px;line-height:1.35}\n.ms-chips em.c1{background:#FFE1EA;color:#A3345C}.ms-chips em.c2{background:#E6E2FF;color:#4B3BB0}.ms-chips em.c3{background:#DCF4EA;color:#1F6E4E}.ms-chips em.c4{background:#FFF1C2;color:#7A5A00}\n/* Reading Library */\n.ms-es{position:relative;display:grid;grid-template-columns:1fr 40%;align-items:center;gap:10px;overflow:hidden;background:#FFE6F2;border-radius:26px;padding:18px 0 18px 18px;text-decoration:none;color:#15192B;margin:0 0 16px;min-height:120px}\n.ms-es b{display:block;font-family:\"Bricolage Grotesque\",sans-serif;font-size:20px;line-height:1.1;margin:8px 0 4px}\n.ms-es small{display:block;font-size:13px;line-height:1.4;color:#3B3F57}\n.ms-es .go{display:inline-flex;margin-top:10px;background:#15192B;color:#fff;border-radius:999px;padding:8px 14px;font-weight:800;font-size:13px}\n.ms-es .mp-k{background:#FF8FC0;color:#15192B}\n.ms-es img{width:100%;height:100%;object-fit:cover;border-radius:18px 0 0 18px;display:block;min-height:120px}\n.ms-lib .stage-tabs{background:#fff;border-radius:24px;padding:7px;gap:7px;box-shadow:0 10px 30px -18px rgba(54,40,120,.35);margin-bottom:14px}\n.ms-lib .stage-tab{border:0!important;background:none!important;border-radius:18px;padding:11px 10px;min-height:0;color:#15192B}\n.ms-lib .stage-tab b{font-family:\"Bricolage Grotesque\",sans-serif;font-size:15px}\n.ms-lib .stage-tab small{color:#6A6F85;font-weight:600}\n.ms-lib .stage-tab[aria-pressed=\"true\"]{background:#15192B!important;color:#fff}\n.ms-lib .stage-tab[aria-pressed=\"true\"] small{color:#C9CCE0}\n.ms-lib .search{max-width:none}\n.ms-lib .search input{border-radius:999px;border:2px solid #ECE9F3;background:#fff;height:52px}\n.ms-lib .search input:focus{border-color:#B9A6FF;box-shadow:none}\n.ms-lib .fchip{border:2px solid #ECE9F3;background:#fff;font-weight:700;color:#4E5268}\n.ms-lib .fchip[aria-pressed=\"true\"]{background:#15192B;border-color:#15192B;color:#fff;box-shadow:0 3px 0 #D3F36B}\n.ms-lib .select select{border-radius:999px;border:2px solid #ECE9F3;background:#fff;padding:0 16px}\n:root[data-theme=\"dark\"] .ms-back,:root[data-theme=\"dark\"] .ms-seg,:root[data-theme=\"dark\"] .ms-lib .stage-tabs{background:#23263A;color:#fff}\n:root[data-theme=\"dark\"] .ms-lib .stage-tab{color:#fff}\n@media(max-width:380px){.ms-hx{max-width:62%}.ms-hero h1{font-size:30px}.ms-bub{display:none}}\n@media(min-width:720px){.ms-art{max-width:240px;right:20px}}\n.ms-ph{right:14px!important;bottom:14px!important;width:40%!important;max-width:220px!important;transform:rotate(3deg)}\n.ms-ph img{border-radius:18px;border:4px solid #fff;aspect-ratio:16/10;object-fit:cover;box-shadow:0 12px 24px -12px rgba(21,25,43,.45);filter:none!important}\n.ms-hero:has(.ms-ph) .ms-hx{max-width:56%}\n.ms-hero:has(.ms-ph){min-height:210px}\n"; document.head.appendChild(st);

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var BACK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
  var HEAD = /<section class="page-head wrap"[^>]*>([\s\S]*?)<\/section>/;
  function pick(re, s) { var m = s.match(re); return m ? m[1].trim() : ""; }
  function backPill(href, txt) { return href && href !== "-" ? '<a class="ms-back" href="' + href + '">' + BACK + esc(txt) + "</a>" : ""; }
  function art(o) {
    if (!o) return "";
    if (o.img && o.frame) return '<span class="ms-art ms-ph"><img src="' + o.img + '" alt="" loading="eager"></span>';
    if (o.img) return '<span class="ms-art"' + (o.w ? ' style="width:' + o.w + ';max-width:' + o.w + '"' : "") + '><img src="' + o.img + '" alt="" loading="eager"></span>';
    return '<span class="ms-art">' + (CH[o.ch] || "") + "</span>";
  }
  function hero(o) {
    return '<div class="ms-hero' + (o.dark ? " ms-dk" : "") + '" style="--c:' + (o.c || "#C7B5FF") + '"><span class="ms-dot a"></span><span class="ms-dot b"></span><span class="ms-dot c"></span>' +
      '<div class="ms-hx">' + (o.k ? '<span class="mp-k">' + o.k + "</span>" : "") + "<h1>" + o.h + "</h1>" + (o.p ? "<p>" + o.p + "</p>" : "") + "</div>" +
      (o.bub ? '<span class="ms-bub">' + o.bub + "</span>" : "") + art(o.art) + "</div>";
  }
  /* Cambia el encabezado clásico (.page-head) por el encabezado nuevo, conservando título, texto y regreso */
  function reHead(html, o) {
    return html.replace(HEAD, function (all, inner) {
      var href = pick(/<a class="back" href="([^"]+)"/, inner);
      var btxt = pick(/<a class="back"[^>]*>(?:<svg[\s\S]*?<\/svg>)?\s*([^<]*)<\/a>/, inner);
      var h = o.h || pick(/<h1>([\s\S]*?)<\/h1>/, inner);
      var p = o.p != null ? o.p : pick(/<p class="lead">([\s\S]*?)<\/p>/, inner);
      var k = o.k || pick(/<p class="kicker">([\s\S]*?)<\/p>/, inner);
      return '<section class="wrap ms page-head-ms" data-rh="1">' + backPill(o.back || href, o.backTxt || btxt) +
        hero({ k: k, h: h, p: p, c: o.c, dark: o.dark, art: o.art, bub: o.bub }) + (o.after || "") + "</section>";
    });
  }
  var seg = function (html) { return html.replace(/class="mtabs"/g, 'class="ms-seg"'); };
  var noOldMochi = function (html) { return html.replace(/<div class="lehero"[^>]*>[\s\S]*?<\/small><\/div><\/div>/, ""); };

  /* ---------- Vitrinas con ilustración ---------- */
  function card(href, img, title, sub, chips) {
    return '<a class="mp-card" href="' + href + '"><span class="mp-th"><img src="' + img + '" alt="" loading="lazy" width="800" height="450"></span>' +
      '<span class="mp-tx"><b>' + esc(title) + "</b>" + (sub ? "<small>" + esc(sub) + "</small>" : "") +
      (chips && chips.length ? '<span class="mp-chips ms-chips">' + chips.map(function (c) { return '<em class="' + (c[1] || "") + '">' + esc(c[0]) + "</em>"; }).join("") + "</span>" : "") + "</span></a>";
  }
  var MT = [
    { id: "fracciones", name: "Fracciones", desc: "Partes de un entero, equivalencias, suma, resta, multiplicación y división.", levels: [1, 2, 3, 4] },
    { id: "signos", name: "Leyes de los signos", desc: "Suma, resta, multiplicación y división con números positivos y negativos.", levels: [3, 4] },
    { id: "jerarquia", name: "Jerarquía de operaciones", desc: "Qué se resuelve primero: paréntesis, potencias, multiplicaciones y sumas.", levels: [2, 3, 4] },
    { id: "geometria", name: "Geometría", desc: "Perímetro, área, volumen, ángulos y teorema de Pitágoras.", levels: [1, 2, 3, 4] },
    { id: "problemas", name: "Problemas razonados", desc: "Leer, entender y resolver: compras, repartos, porcentajes y ecuaciones.", levels: [1, 2, 3, 4] }
  ];
  var DT = [
    { id: "silabas", name: "Sílabas", grade: "1° primaria" },
    { id: "palabras", name: "Palabras sencillas", grade: "1° primaria" },
    { id: "trabadas", name: "Trabadas y letras difíciles", grade: "2° primaria" },
    { id: "oraciones", name: "Oraciones cortas", grade: "1° y 2° primaria" },
    { id: "ortografia", name: "Oraciones con ortografía", grade: "3° y 4° primaria" },
    { id: "parrafo", name: "Oraciones largas", grade: "5° y 6° primaria" }
  ];
  var LVC = { 1: "c1", 2: "c2", 3: "c3", 4: "c4" };
  var LVS = { 1: "Prim. 1°–3°", 2: "Prim. 4°–6°", 3: "Secundaria", 4: "Prepa" };

  /* ---------- Read ---------- */
  var nRead = function () { try { return READINGS.length; } catch (e) { return 0; } };
  function readHub(v) {
    v.html = v.html.replace(HEAD, '<section class="wrap ms" data-rh="1">' + hero({ dark: true, k: "Reading Library", h: "What would you like to read?", p: "Choose a language, then your stage and your level.", art: { ch: "nova" } }) + "</section>");
    return v;
  }
  function readList(v) {
    var lead = pick(/<p class="lead">([\s\S]*?)<\/p>/, v.html), m = lead.match(/(\d+)\s+de\s+(\d+)/);
    var p = "Choose your MOVA stage, then your level." + (m ? " You have completed " + m[1] + " of " + m[2] + " readings." : "");
    var es = '<a class="ms-es" href="#/lecturas"><span><span class="mp-k">Español</span><b>Lecturas en español</b><small>Comprensión lectora de 1° a 6° de primaria, con temas actuales y preguntas.</small><span class="go">Leer en español →</span></span><img src="thumb-read-es.webp" alt="" loading="lazy"></a>';
    v.html = reHead(v.html.replace(/<a class="es-banner"[\s\S]*?<\/a>/, ""), { k: "Reading Library", h: "Stories for every stage", p: p, back: "#/library", backTxt: "Read", c: "#C7B5FF", art: { ch: "echo" }, after: es });
    v.html = v.html.replace('<section class="wrap filters"', '<section class="wrap filters ms-lib"');
    return v;
  }
  function lecturas(v) {
    v.html = reHead(v.html, { k: "Español", back: "#/library", backTxt: "Read", c: "#FFC7E2", art: { ch: "bloom" } });
    v.html = v.html.replace('<section class="wrap filters"', '<section class="wrap filters ms-lib"');
    return v;
  }

  /* ---------- Matemáticas (nov 2026): vitrina, Prácticas por grado y Juegos ---------- */
  CH.triDk = "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 152 C96 170.0 90 180.0 92 192\" stroke=\"#FFFFFF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#FFFFFF\"/><path d=\"M122 152 C124 170.0 128 180.0 127 192\" stroke=\"#FFFFFF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#FFFFFF\"/><path d=\"M70 128 C56 130 46 120 46 104\" stroke=\"#FFFFFF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"104\" r=\"3.6\" fill=\"#FFFFFF\"/><path d=\"M150 128 C158 128 164 124 168 118\" stroke=\"#FFFFFF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"118\" r=\"3.6\" fill=\"#FFFFFF\"/><path d=\"M110 44 L168 146 L52 146Z\" fill=\"#FF9FCB\" stroke=\"#FF9FCB\" stroke-width=\"26\" stroke-linejoin=\"round\"/><circle cx=\"104\" cy=\"76\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M88 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M93 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M112 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M117 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M108 109 q2 -4 4 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 126 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(170 118) rotate(-35)\"><rect x=\"-4\" y=\"-30\" width=\"8\" height=\"30\" rx=\"2\" fill=\"#FFD54A\"/><rect x=\"-4\" y=\"-35\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#FF8FC8\"/><path d=\"M-4 0 L0 8 L4 0z\" fill=\"#F4E1C1\"/><path d=\"M-1.3 5.4 L0 8 L1.3 5.4z\" fill=\"#1A1B2E\"/></g></svg>";
  var MV_GO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
  var MV_PRINT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/></svg>';
  var MV_CSS = '.mv-v{display:block;background:#fff;border-radius:28px;padding:8px 8px 18px;text-decoration:none;color:#15192B;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);margin:0 0 14px}' +
    '.mv-v:active{transform:scale(.985)}' +
    '.mv-th{display:block;position:relative;aspect-ratio:16/9;border-radius:22px;overflow:hidden}' +
    '.mv-th img{width:100%;height:100%;object-fit:cover;display:block}' +
    '.mv-k{position:absolute;left:14px;top:14px;background:#15192B;color:#D3F36B;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:8px 14px;border-radius:999px}' +
    '.mv-tx{display:block;padding:14px 12px 0}' +
    '.mv-tx b{display:block;font-family:"Bricolage Grotesque",sans-serif;font-size:28px;line-height:1.05;letter-spacing:-.02em}' +
    '.mv-tx small{display:block;font-size:14.5px;color:#6A6F85;line-height:1.5;margin-top:6px}' +
    '.mv-ft{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px}' +
    '.mv-go{flex:none;width:44px;height:44px;border-radius:50%;background:#15192B;color:#fff;display:grid;place-items:center}.mv-go svg{width:20px;height:20px}' +
    '.mv-mini{display:flex;align-items:center;gap:14px;background:#fff;border-radius:24px;padding:14px 16px;box-shadow:0 10px 30px -18px rgba(54,40,120,.45);text-decoration:none;color:#15192B;margin:0 0 8px}' +
    '.mv-mini .ic{flex:none;width:50px;height:50px;border-radius:16px;display:grid;place-items:center;background:#FFF1C2}.mv-mini .ic svg{width:24px;height:24px}' +
    '.mv-mini b{display:block;font-size:16px}.mv-mini small{display:block;font-size:13px;color:#6A6F85;line-height:1.4;margin-top:2px}' +
    '.mv-sec{font-family:"Bricolage Grotesque",sans-serif;font-size:21px;font-weight:700;margin:22px 4px 10px;display:flex;align-items:center;gap:10px;color:#15192B}' +
    '.mv-sec i{width:12px;height:12px;border-radius:50%;display:inline-block}' +
    '.mv-sh{margin:22px 4px 12px}.mv-sh b{display:block;font-family:"Bricolage Grotesque",sans-serif;font-size:21px}.mv-sh small{display:block;font-size:13px;color:#6A6F85;margin-top:2px;line-height:1.4}' +
    '.mv-grades{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}' +
    '.mv-gr{display:block;border-radius:22px;padding:16px 8px 14px;text-align:center;background:#fff;text-decoration:none;color:#15192B}' +
    '.mv-gr b{display:block;font-family:"Bricolage Grotesque",sans-serif;font-size:32px;line-height:1}.mv-gr small{display:block;font-size:12px;font-weight:600;color:#6A6F85;margin-top:5px}' +
    '.mv-pc{display:flex;gap:14px;align-items:center;background:#fff;border-radius:24px;padding:10px 14px 10px 10px;margin:0 0 10px;text-decoration:none;color:#15192B;box-shadow:0 10px 30px -18px rgba(54,40,120,.45)}' +
    '.mv-pc img{flex:none;width:96px;height:72px;object-fit:cover;border-radius:16px}' +
    '.mv-pc b{display:block;font-size:16px;line-height:1.3}.mv-pc small{display:block;font-size:13px;color:#6A6F85;line-height:1.4;margin-top:3px}' +
    '.mv-pc em{display:inline-block;font-style:normal;font-size:11px;font-weight:700;padding:4px 9px;border-radius:999px;margin-top:7px}';
  function mvCss() { if (document.getElementById("mv-css")) return; var st = document.createElement("style"); st.id = "mv-css"; st.textContent = MV_CSS; document.head.appendChild(st); }

  /* Grados: nivel de práctica rápida (1 Prim. 1°–3°, 2 Prim. 4°–6°, 3 Secundaria, 4 Prepa) y prácticas completas */
  var MG = [
    { g: "1p", n: "1°", sub: "primaria", lv: "Primaria", full: "1° de primaria", q: 1, plan: [] },
    { g: "2p", n: "2°", sub: "primaria", lv: "Primaria", full: "2° de primaria", q: 1, plan: [] },
    { g: "3p", n: "3°", sub: "primaria", lv: "Primaria", full: "3° de primaria", q: 1, plan: [] },
    { g: "4p", n: "4°", sub: "primaria", lv: "Primaria", full: "4° de primaria", q: 2, plan: [] },
    { g: "5p", n: "5°", sub: "primaria", lv: "Primaria", full: "5° de primaria", q: 2, plan: [["exam", "ex5", "grado"], ["nivel", "ex5", "base"]] },
    { g: "6p", n: "6°", sub: "primaria", lv: "Primaria", full: "6° de primaria", q: 2, plan: [["nivel", "ex5", "grado"]] },
    { g: "1s", n: "1°", sub: "secundaria", lv: "Secundaria", full: "1° de secundaria", q: 3, plan: [["grado", "signos", "grado"]] },
    { g: "2s", n: "2°", sub: "secundaria", lv: "Secundaria", full: "2° de secundaria", q: 3, plan: [["nivel", "signos", "base"]] },
    { g: "3s", n: "3°", sub: "secundaria", lv: "Secundaria", full: "3° de secundaria", q: 3, plan: [["nivel", "signos", "base"]] },
    { g: "1b", n: "1er", sub: "semestre", lv: "Preparatoria", full: "1er semestre de prepa", q: 4, plan: [["nivel", "signos", "base"]] }
  ];
  var MPR = { signos: { file: "juego-signos-jerarquia.html", img: "math-signos.webp", title: "Signos y jerarquía de operaciones", desc: "Suma y resta con signo, multiplicación y división, y orden de las operaciones.", n: 24 },
    ex5: { file: "juego-repaso-5-primaria.html", img: "math-fracciones.webp", title: "Repaso de 5° de primaria", desc: "Fracciones, división con residuo, ángulos, conversiones, romanos y siglos, proporcionalidad y tiempo.", n: 42 } };
  var MSEC = { exam: ["Para tu examen", "Los temas de tu guía de estudio, con calificación."], grado: ["Temas de tu grado", "Explicación, ejemplos paso a paso y ejercicios con calificación."], nivel: ["Nivelación", "Repasa la base para avanzar con seguridad."] };
  var MLVC = { Primaria: "#D3F36B", Secundaria: "#9C8BFF", Preparatoria: "#FF8FC0" };
  var MHC = { Primaria: "#D3F36B", Secundaria: "#C7B5FF", Preparatoria: "#FFC7E2" };
  var MGAMES = [
    ["mision-matematica", "Misión Matemática", "De 1° de primaria a prepa", [["Todos los grados", "c4"]]],
    ["la-tiendita", "La Tiendita", "Sumas, dinero y cambio", [["MOVA Kids", "c1"]]],
    ["que-hora-es", "¿Qué hora es?", "Leer el reloj", [["MOVA Kids", "c1"]]],
    ["detective-patrones", "Detective de patrones", "Patrones y secuencias", [["MOVA Kids", "c1"]]],
    ["pizzeria-fracciones", "Pizzería de fracciones", "Fracciones", [["MOVA Children", "c2"]]],
    ["lluvia-de-numeros", "Lluvia de números", "Cálculo mental", [["MOVA Children", "c2"]]],
    ["la-balanza", "La Balanza", "Ecuaciones", [["MOVA Teens", "c3"]]],
    ["la-boveda", "La Bóveda", "Jerarquía, signos y porcentajes", [["MOVA Teens", "c3"]]]
  ];
  function mathHome() {
    mvCss();
    return {
      title: "Matemáticas",
      html: '<section class="wrap ms">' +
        hero({ dark: true, k: "MOVA Math", h: "Matemáticas", p: "Explicaciones claras, ejemplos paso a paso y ejercicios pensados para tu grado.", art: { ch: "triDk" } }) +
        '<div class="mv-sh"><b>¿Qué quieres hacer hoy?</b><small>Elige cómo quieres practicar.</small></div>' +
        '<a class="mv-v" href="#/matematicas/practicas"><span class="mv-th" style="background:#E6E2FF"><img src="vitrina-practicas.webp" alt="" loading="lazy"><span class="mv-k">Prácticas</span></span><span class="mv-tx"><b>Prácticas</b><small>Explicación, ejemplos y ejercicios con calificación y retroalimentación de tu maestra.</small>' +
          '<span class="mv-ft"><span class="mp-chips ms-chips"><em class="c2">Por grado</em><em class="c1">Nivelación</em><em class="c3">Con calificación</em></span><span class="mv-go">' + MV_GO + '</span></span></span></a>' +
        '<a class="mv-v" href="#/matematicas/juegos"><span class="mv-th" style="background:#DCF4EA"><img src="vitrina-juegos.webp" alt="" loading="lazy"><span class="mv-k">Juegos</span></span><span class="mv-tx"><b>Juegos</b><small>Aprende jugando, por nivel y a tu ritmo.</small>' +
          '<span class="mv-ft"><span class="mp-chips ms-chips"><em class="c4">' + MGAMES.length + ' juegos</em><em class="c2">De primaria a prepa</em></span><span class="mv-go">' + MV_GO + '</span></span></span></a>' +
        '<a class="mv-mini" href="#/matematicas/imprimir"><span class="ic">' + MV_PRINT + '</span><span><b>Hojas para imprimir</b><small>Genera hojas por grado y tema, con clave de respuestas.</small></span></a>' +
        "</section>"
    };
  }
  function mathPract(g) {
    mvCss();
    if (!g) {
      var h = hero({ k: "MOVA Math", h: "Prácticas", p: "Elige tu grado y encuentra lo que necesitas practicar.", c: "#C7B5FF", art: { ch: "tri" } });
      ["Primaria", "Secundaria", "Preparatoria"].forEach(function (lv) {
        h += '<div class="mv-sec"><i style="background:' + MLVC[lv] + '"></i>' + lv + '</div><div class="mv-grades">' + MG.filter(function (x) { return x.lv === lv; }).map(function (x) {
          return '<a class="mv-gr" href="#/matematicas/practicas/' + x.g + '" style="box-shadow:inset 0 -6px 0 ' + MLVC[lv] + ',0 10px 26px -18px rgba(54,40,120,.5)"><b>' + x.n + "</b><small>" + x.sub + "</small></a>";
        }).join("") + "</div>";
      });
      return { title: "Prácticas de matemáticas", html: '<section class="wrap ms">' + h + "</section>" };
    }
    var G = MG.filter(function (x) { return x.g === g; })[0];
    if (!G) return null;
    var out = hero({ k: G.lv, h: G.full, p: "Tus prácticas de matemáticas.", c: MHC[G.lv], art: { ch: "tri" } });
    ["exam", "grado", "nivel"].forEach(function (sk) {
      var items = G.plan.filter(function (x) { return x[0] === sk; }); if (!items.length) return;
      out += '<div class="mv-sh"><b>' + MSEC[sk][0] + "</b><small>" + MSEC[sk][1] + "</small></div>";
      items.forEach(function (it) {
        var P = MPR[it[1]];
        out += '<a class="mv-pc" href="' + P.file + "?nivel=" + it[2] + "&g=" + G.g + '"><img src="' + P.img + '" alt="" loading="lazy"><span><b>' + esc(P.title) + "</b><small>" + esc(P.desc) + '</small><em class="c3" style="background:#DCF4EA;color:#1F6E4E">' + (it[2] === "base" ? "Nivelación" : "Mi grado") + " · " + P.n + " ejercicios" + "</em></span></a>";
      });
    });
    var qs = MT.filter(function (t) { return t.levels.indexOf(G.q) >= 0; });
    out += '<div class="mv-sh"><b>Práctica rápida por tema</b><small>10 ejercicios nuevos cada vez. Elige el nivel ' + LVS[G.q] + ".</small></div>" +
      '<div class="mp-grid">' + qs.map(function (t) { return card("#/matematicas/" + t.id, "math-" + t.id + ".webp", t.name, t.desc, [["Nivel " + LVS[G.q], LVC[G.q]]]); }).join("") + "</div>";
    return { title: "Prácticas · " + G.full, html: '<section class="wrap ms">' + out + "</section>" };
  }
  function mathGames() {
    mvCss();
    return {
      title: "Juegos de matemáticas",
      html: '<section class="wrap ms">' +
        hero({ k: "MOVA Math", h: "Juegos", p: "Elige un juego y aprende jugando.", c: "#D3F36B", art: { ch: "tri" } }) +
        '<div class="mp-grid">' + MGAMES.map(function (x) { return card("juego-" + x[0] + ".html", "thumb-" + x[0] + ".webp", x[1], x[2], x[3]); }).join("") + "</div></section>"
    };
  }
  function mathSub(v, p) {
    var T = MT.filter(function (x) { return x.id === p[0]; })[0];
    if (p[0] === "imprimir") v.html = reHead(v.html, { back: "-", k: "MOVA Math", c: "#F9B4DC", art: { ch: "tri" } });
    else if (T) v.html = reHead(v.html, { back: "-", k: "Matemáticas", c: "#FFE1EA", art: { img: "math-" + T.id + ".webp", frame: 1 } });
    v.html = seg(v.html);
    return v;
  }

  /* ---------- Lectoescritura ---------- */
  var LEC = { silabas: "#FFC7E2", palabras: "#FFE58A", trabadas: "#C9D2FF", oraciones: "#BDF0D8", ortografia: "#E6E2FF", parrafo: "#FFD9C2" };
  function leHome() {
    var D = DT;
    return {
      title: "Lectoescritura",
      html: '<section class="wrap ms">' +
        hero({ k: "Lectoescritura", h: "Leo y escribo con Mochi", p: "Dictado con audio para practicar la escritura y lecturas cronometradas para medir la fluidez lectora.", c: "#FFE58A", art: { img: "mochi-lee.webp", w: "38%" } }) +
        '<nav class="ms-seg" aria-label="Lectoescritura"><a href="#/lectoescritura" aria-current="page">Dictado</a><a href="#/lectoescritura/fluidez">Fluidez lectora</a></nav>' +
        '<h2 class="ms-h">Elige tu nivel de dictado</h2><p class="ms-sub">Escucha a Mochi, escribe lo que oyes y revisa tus respuestas.</p>' +
        '<div class="mp-grid">' + D.map(function (d) { return card("#/lectoescritura/dictado/" + d.id, "le-" + d.id + ".webp", d.name, "", [[d.grade, "c2"], ["10 por ronda", "c4"]]); }).join("") + "</div></section>"
    };
  }
  function leSub(v, p) {
    if (p[0] === "fluidez" && !p[1]) { v.html = reHead(noOldMochi(v.html), { k: "Lectoescritura", h: "Fluidez lectora", back: "-", c: "#BDF0D8", art: { img: "mochi-lee.webp", w: "38%" } }); v.html = seg(v.html); }
    else if (p[0] === "dictado" && p[1]) { var d = DT.filter(function (x) { return x.id === p[1]; })[0]; v.html = reHead(v.html, { back: "-", k: "Dictado", c: (d && LEC[d.id]) || "#FFE58A", art: d ? { img: "le-" + d.id + ".webp", frame: 1 } : null }); }
    else if (p[0] === "fluidez" && p[1]) v.html = reHead(v.html, { back: "-", k: "Fluidez lectora", c: "#BDF0D8", art: { ch: "mochi" } });
    return v;
  }

  /* ---------- Instalación ---------- */
  function wrap(name, fn) {
    var prev = ROUTES[name]; if (!prev || prev.__ms) return;
    var w = function (p) { p = p || []; var v = prev(p); try { return fn(v, p, prev) || v; } catch (e) { return v; } };
    w.__ms = true; for (var k in prev) if (Object.prototype.hasOwnProperty.call(prev, k)) w[k] = prev[k]; ROUTES[name] = w;
  }
  function install() {
    if (typeof ROUTES !== "object" || ROUTES.__ms) return false;
    ROUTES.__ms = true;
    wrap("library", function (v, p) { if (!p[0]) return readHub(v); if (p[0] === "en" && !p[1]) return readList(v); });
    wrap("lecturas", function (v, p) { if (!p[0]) return lecturas(v); });
    wrap("matematicas", function (v, p) { if (!p[0]) return mathHome(); if (p[0] === "practicas") return mathPract(p[1]); if (p[0] === "juegos") return mathGames(); return mathSub(v, p); });
    wrap("lectoescritura", function (v, p) { return !p[0] ? leHome() : leSub(v, p); });
    return true;
  }
  /* Mochi nuevo en los ejercicios de dictado y fluidez */
  function newMochi() {
    if (!/^#\/lectoescritura/.test(location.hash)) return;
    document.querySelectorAll(".mguide > div:first-child, #d-medal, #f-medal, .lehero .mfloat").forEach(function (el) {
      if (el.getAttribute("data-ms") === "1" || !el.querySelector("svg")) return;
      el.setAttribute("data-ms", "1"); el.innerHTML = CH.mochi;
    });
  }
  new MutationObserver(newMochi).observe(document.documentElement, { childList: true, subtree: true });
  function boot() { if (install() && typeof router === "function" && /^#\/(library|lecturas|matematicas|lectoescritura)/.test(location.hash)) router(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
