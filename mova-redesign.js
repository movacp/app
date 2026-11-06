/* MOVA Learning Studio · rediseño premium (Fase 1) */
(function () {
  "use strict";
  var CH = {"bloom": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 138 C96 156.0 90 166.0 92 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 138 C124 156.0 128 166.0 127 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M80 98 C62 104 50 92 48 74\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"74\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M142 100 C152 104 160 102 168 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"86\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"110\" cy=\"92\" r=\"26\" fill=\"#9C8BFF\"/><circle cx=\"80\" cy=\"62\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M87 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M92 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M113 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M118 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M107 85 q3 -4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M94 106 Q110 122 126 106\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"84\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"136\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/></svg>", "echo": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 136 C96 155.8 90 166.8 92 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 136 C124 155.8 128 166.8 127 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M72 112 C56 114 46 104 46 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 114 C160 116 168 112 174 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"174\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"96\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"82\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"136\" cy=\"98\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"112\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"88\" cy=\"118\" r=\"22\" fill=\"#93A6FF\"/><circle cx=\"134\" cy=\"120\" r=\"22\" fill=\"#93A6FF\"/><path d=\"M84 134 L74 152 L100 138z\" fill=\"#93A6FF\"/><circle cx=\"96\" cy=\"72\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(148 30)\"><rect width=\"50\" height=\"30\" rx=\"15\" fill=\"#fff\"/><path d=\"M12 27 L9 38 L21 28z\" fill=\"#fff\"/><text x=\"25\" y=\"20.5\" font-family=\"Bricolage Grotesque,sans-serif\" font-weight=\"700\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1A1B2E\">Hi!</text></g></svg>", "nova": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 150 C124 168.0 128 178.0 127 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M110.0 40.0 L127.6 73.7 L165.2 80.1 L138.5 107.3 L144.1 144.9 L110.0 128.0 L75.9 144.9 L81.5 107.3 L54.8 80.1 L92.4 73.7Z\" fill=\"#FFD54A\" stroke=\"#FFD54A\" stroke-width=\"20\" stroke-linejoin=\"round\"/><circle cx=\"94\" cy=\"74\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><circle cx=\"122\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><path d=\"M107 93 q3 -2.4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"98\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><path d=\"M104 108 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M68 112 C64 124 72 132 82 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"82\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M152 112 C156 124 148 132 138 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"138\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><g transform=\"translate(110 136)\"><path d=\"M-30 -8 Q-15 -13 0 -6 L0 13 Q-15 6 -30 11z\" fill=\"#fff\"/><path d=\"M30 -8 Q15 -13 0 -6 L0 13 Q15 6 30 11z\" fill=\"#F3F0FF\"/><path d=\"M-30 -8 Q-15 -13 0 -6 Q15 -13 30 -8 L30 11 Q15 6 0 13 Q-15 6 -30 11z\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M0 -6 L0 13\" stroke=\"#1A1B2E\" stroke-width=\"1.8\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>", "beat": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M124 150 C126 168.0 130 178.0 129 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"132\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M66 112 C50 114 42 104 44 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M154 112 C166 112 174 106 178 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"178\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M112 48 C146 46 156 78 156 106 C156 138 136 152 110 152 C84 152 64 138 64 106 C64 74 80 50 112 48z\" fill=\"#C8EE4A\"/><circle cx=\"88\" cy=\"74\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M66 98 C56 28 164 24 154 98\" stroke=\"#1A1B2E\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"68\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"68\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"152\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"152\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M117 103 q5 5 10 0\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M30 128 L30 108 L38 105\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"26.5\" cy=\"128.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/><path d=\"M190 70 L190 52\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"186.5\" cy=\"70.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/></svg>", "beatDark": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#E6E2FF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#E6E2FF\"/><path d=\"M124 150 C126 168.0 130 178.0 129 190\" stroke=\"#E6E2FF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"132\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#E6E2FF\"/><path d=\"M66 112 C50 114 42 104 44 88\" stroke=\"#E6E2FF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"88\" r=\"3.6\" fill=\"#E6E2FF\"/><path d=\"M154 112 C166 112 174 106 178 96\" stroke=\"#E6E2FF\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"178\" cy=\"96\" r=\"3.6\" fill=\"#E6E2FF\"/><path d=\"M112 48 C146 46 156 78 156 106 C156 138 136 152 110 152 C84 152 64 138 64 106 C64 74 80 50 112 48z\" fill=\"#C8EE4A\"/><circle cx=\"88\" cy=\"74\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M66 98 C56 28 164 24 154 98\" stroke=\"#E6E2FF\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"68\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"68\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"152\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"152\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M117 103 q5 5 10 0\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M30 128 L30 108 L38 105\" stroke=\"#E6E2FF\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"26.5\" cy=\"128.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#E6E2FF\"/><path d=\"M190 70 L190 52\" stroke=\"#E6E2FF\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"186.5\" cy=\"70.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#E6E2FF\"/></svg>", "tri": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 152 C96 170.0 90 180.0 92 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 152 C124 170.0 128 180.0 127 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M70 128 C56 130 46 120 46 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 128 C158 128 164 124 168 118\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"118\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M110 44 L168 146 L52 146Z\" fill=\"#FF9FCB\" stroke=\"#FF9FCB\" stroke-width=\"26\" stroke-linejoin=\"round\"/><circle cx=\"104\" cy=\"76\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M88 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M93 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M112 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M117 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M108 109 q2 -4 4 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 126 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(170 118) rotate(-35)\"><rect x=\"-4\" y=\"-30\" width=\"8\" height=\"30\" rx=\"2\" fill=\"#FFD54A\"/><rect x=\"-4\" y=\"-35\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#FF8FC8\"/><path d=\"M-4 0 L0 8 L4 0z\" fill=\"#F4E1C1\"/><path d=\"M-1.3 5.4 L0 8 L1.3 5.4z\" fill=\"#1A1B2E\"/></g></svg>", "mochi": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M70 70 L62 30 L94 52z\" fill=\"#4A93F0\" stroke=\"#4A93F0\" stroke-width=\"6\" stroke-linejoin=\"round\"/><path d=\"M150 70 L158 30 L126 52z\" fill=\"#4A93F0\" stroke=\"#4A93F0\" stroke-width=\"6\" stroke-linejoin=\"round\"/><path d=\"M58 112 C58 70 80 48 110 48 C140 48 162 70 162 112 L162 158 q-9 12 -18 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 Z\" fill=\"#6FB2FF\"/><circle cx=\"84\" cy=\"70\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"94\" cy=\"98\" r=\"11\" fill=\"#fff\"/><circle cx=\"95.5\" cy=\"99.5\" r=\"5.6\" fill=\"#1A1B2E\"/><circle cx=\"97.4\" cy=\"97\" r=\"1.8\" fill=\"#fff\"/><circle cx=\"126\" cy=\"98\" r=\"11\" fill=\"#fff\"/><circle cx=\"127.5\" cy=\"99.5\" r=\"5.6\" fill=\"#1A1B2E\"/><circle cx=\"129.4\" cy=\"97\" r=\"1.8\" fill=\"#fff\"/><path d=\"M100 117 q10 9 20 0\" stroke=\"#1A1B2E\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103.5 119.3 l2 4.2 l2 -3.2z\" fill=\"#fff\"/><path d=\"M116.5 119.3 l-2 4.2 l-2 -3.2z\" fill=\"#fff\"/><ellipse cx=\"80\" cy=\"114\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"140\" cy=\"114\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M60 124 C48 128 42 138 44 148\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"148\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M160 116 C172 110 178 98 176 84\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"176\" cy=\"84\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M182 78 q4 4 2 9\" stroke=\"#1A1B2E\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M187 72 q6 6 3 14\" stroke=\"#1A1B2E\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path transform=\"translate(40 52) scale(0.8)\" d=\"M0-12C1.6-3 3-1.6 12 0 3 1.6 1.6 3 0 12-1.6 3-3 1.6-12 0-3-1.6-1.6-3 0-12z\" fill=\"#FFD54A\"/><path transform=\"translate(180 150) scale(0.6)\" d=\"M0-12C1.6-3 3-1.6 12 0 3 1.6 1.6 3 0 12-1.6 3-3 1.6-12 0-3-1.6-1.6-3 0-12z\" fill=\"#FF8FC8\"/><ellipse cx=\"110\" cy=\"182\" rx=\"40\" ry=\"5\" fill=\"#16182A\" opacity=\".06\"/></svg>"};
  var LU = "<div class=\"mr-lu\"><small>PLACEMENT TEST</small><b>Level Up</b><p>Find your level on the CEFR scale.</p>\n<div class=\"stack\"><div><em>A1</em><i></i></div><div><em>A2</em><i></i><i></i></div><div class=\"on\"><em>B1</em><i></i><i></i><i></i></div><div><em>B2</em><i></i><i></i><i></i><i></i></div><div><em>C1</em><i></i><i></i><i></i><i></i><i></i></div><div><em>C2</em><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div>", TF = "<div class=\"mr-tf\"><small>EXAM PREP</small><b>TOEFL Practice</b><p>Structure, reading and listening.</p>\n<div class=\"secs2\"><div><span>Structure</span><i><em style=\"width:72%\"></em></i></div><div><span>Reading</span><i><em style=\"width:58%\"></em></i></div><div><span>Listening</span><i><em style=\"width:44%\"></em></i></div></div></div>", TWP = "M0-12C1.6-3 3-1.6 12 0 3 1.6 1.6 3 0 12-1.6 3-3 1.6-12 0-3-1.6-1.6-3 0-12z";
  var IC = {
    home: '<path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1z"/>',
    bolt: '<path d="M13 3L5 13h6l-1 8 8-10h-6z"/>',
    book: '<path d="M3 6c3-1.5 6-1.5 9 1 3-2.5 6-2.5 9-1v12c-3-1.5-6-1.5-9 1-3-2.5-6-2.5-9-1z"/><path d="M12 7v12"/>',
    pad: '<rect x="3" y="7" width="18" height="11" rx="5"/><path d="M8 10.5v4M6 12.5h4"/><circle cx="16" cy="11.5" r=".6" fill="currentColor"/><circle cx="17.5" cy="13.8" r=".6" fill="currentColor"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5"/><path d="M22 9v6"/>',
    me: '<circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c1.2-3.6 4-5 7-5s5.8 1.4 7 5"/>',
    back: '<path d="M15 5l-7 7 7 7"/>'
  };
  function ico(n, s) { return '<svg viewBox="0 0 24 24" width="' + (s || 21) + '" height="' + (s || 21) + '" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + "</svg>"; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function user() { try { return window.MovaAuth && MovaAuth.user ? MovaAuth.user() : null; } catch (e) { return null; } }
  function initials(n) { return String(n || "?").replace(/\./g, "").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase(); }
  function account() { var c = document.querySelector(".mva-chip"); if (c) c.click(); else if (window.MovaAuth && MovaAuth.login) MovaAuth.login(); }

  /* Fuentes y estilos */
  document.documentElement.dataset.theme = "light";
  var fl = document.createElement("link"); fl.rel = "stylesheet";
  fl.href = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
  document.head.appendChild(fl);
  var st = document.createElement("style"); st.id = "mova-redesign"; st.textContent = ".mva-card{font-family:'Plus Jakarta Sans',system-ui,sans-serif!important;background:#fff!important;border-radius:28px!important;color:#15192B!important;box-shadow:0 30px 80px rgba(54,40,120,.25)!important}.mva-card .mva-band{display:none!important}.mva-card h2,.mva-card h3{font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif!important;color:#15192B!important}.mva-x{background:#F2EFF8!important;color:#15192B!important;border-radius:999px!important}.mvp-top{position:relative;display:flex;align-items:center;gap:14px;padding:22px 20px 18px!important;margin:-1px -1px 6px!important;border-radius:26px 26px 22px 22px;background:linear-gradient(135deg,#EDE8FF,#F7F1FF 60%,#FFE9F4)!important}.mvp-bloom{width:84px;height:84px;flex:none;margin:-6px 0 -10px -4px}.mvp-top .mva-badge{position:absolute;right:56px;top:18px;width:34px!important;height:34px!important;font-size:13px!important;background:#15192B!important;color:#D3F36B!important}.mvp-who span{color:#7B5CF0!important;font-weight:800!important;letter-spacing:.06em;text-transform:uppercase;font-size:11px!important}.mvp-who em{background:#D3F36B!important;color:#15192B!important;border-radius:999px!important;font-style:normal!important;font-weight:700!important}.mvp-tile{border-radius:20px!important;border:0!important}.mvp-tile:nth-child(1){background:#E7ECFF!important}.mvp-tile:nth-child(1) .mvp-ti{background:#8FA2FF!important}.mvp-tile:nth-child(2){background:#FFE6F2!important}.mvp-tile:nth-child(2) .mvp-ti{background:#FF8FC8!important}.mvp-tile:nth-child(3){background:#EEE8FF!important}.mvp-tile:nth-child(3) .mvp-ti{background:#B9A6FF!important}.mvp-tile:nth-child(4){background:#FFF6D1!important}.mvp-tile:nth-child(4) .mvp-ti{background:#FFD66B!important}.mvp-tile b{font-family:'Bricolage Grotesque',sans-serif!important;color:#15192B!important}.mvp-level{background:#16274A!important;color:#fff!important;border-radius:20px!important}.mvp-level b,.mvp-level small{color:#fff!important}.mvp-lk{background:#D3F36B!important;color:#15192B!important;border-radius:999px!important}.mvp-b{border-radius:18px!important;background:#F5F3FA!important;border:0!important}.mvp-list>div{border-radius:14px!important;background:#F5F3FA!important;border:0!important}.mva-retos{background:#15192B!important;background-image:none!important;border-radius:26px!important}.mva-retos .ic{background:#D3F36B!important;color:#15192B!important}.mva-retos em{background:#D3F36B!important;color:#15192B!important}" + "\n:root,:root[data-theme=\"dark\"],:root[data-theme=\"light\"]{--paper:#F5F3FA;--surface:#FFFFFF;--surface-2:#ECE9F3;--ink:#15192B;--ink-2:#4E5268;--ink-3:#6A6F85;--line:#E4E0EE;--font-ui:\"Plus Jakarta Sans\",\"Poppins\",system-ui,-apple-system,\"Segoe UI\",sans-serif;color-scheme:light}\nbody{background:var(--paper)!important;font-family:var(--font-ui)}\nh1,h2,.section-head h2,.page-head h1{font-family:\"Bricolage Grotesque\",\"Plus Jakarta Sans\",sans-serif;letter-spacing:-.02em}\nbody::before{display:none!important}\n@media (max-width:1399px){.topbar{display:none!important}}\n.mr-home{padding:14px 16px 6px;max-width:560px;margin:0 auto}\n@media (min-width:860px){.mr-home{max-width:1080px;padding-top:24px}.mr-grid2{display:grid;grid-template-columns:1.1fr 1fr;gap:18px;align-items:start}}\n.mr-top{display:flex;align-items:center;gap:10px;margin:2px 2px 12px}\n.mr-av{width:44px;height:44px;border-radius:50%;background:#7B5CF0;color:#fff;display:flex;align-items:center;justify-content:center;line-height:1;font-weight:800;font-size:15px;letter-spacing:.5px;flex:none;position:relative;border:0;cursor:pointer;font-family:inherit;padding:0}\n.mr-av::after{content:\"\";position:absolute;right:-1px;bottom:-1px;width:12px;height:12px;border-radius:50%;background:#D3F36B;border:2px solid var(--paper)}\n.mr-ghost{width:44px;height:44px;border-radius:50%;background:#fff;display:grid;place-items:center;flex:none;color:#15192B}\n.mr-hi small{display:block;font-size:12px;color:#6A6F85;font-weight:600}.mr-hi b{font-size:16px;font-weight:800;color:#15192B}\n.mr-login{margin-left:auto;display:inline-flex;align-items:center;gap:7px;background:#15192B;color:#fff;border-radius:999px;padding:10px 17px;font-weight:700;font-size:13.5px;border:0;cursor:pointer;font-family:inherit}\n.mr-hero{background:#D3F36B;border-radius:30px;padding:22px 20px 20px;position:relative;overflow:hidden;min-height:250px;color:#15192B}\n.mr-hero .brand{font-size:12px;font-weight:700;display:flex;align-items:center;gap:8px;position:relative;z-index:1}\n.mr-hero h1{font-family:\"Bricolage Grotesque\",sans-serif;font-weight:800;font-size:44px;line-height:1;letter-spacing:-1.6px;margin:14px 0 12px;position:relative;z-index:1;color:#15192B}\n.mr-hero h1 span{position:relative;display:inline-block}\n.mr-hero h1 svg.wv{position:absolute;left:0;bottom:-6px;width:96%;height:8px;overflow:visible}\n.mr-hero p{font-size:13.5px;line-height:1.5;margin:0 0 16px;max-width:20ch;font-weight:500;position:relative;z-index:1;color:#15192B}\n.mr-pill{display:inline-flex;align-items:center;gap:8px;border:1.8px solid #15192B;border-radius:999px;padding:9px 15px;font-weight:700;font-size:13.5px;background:#fff;color:#15192B;text-decoration:none;position:relative;z-index:1}\n.mr-hero .pipc{position:absolute;right:-10px;top:24px;width:172px;z-index:0}.mr-hero .pipc svg{width:100%;height:auto;display:block}\n.mr-hero .tw{position:absolute;z-index:0;line-height:0}\n.mr-gon{background:#15192B;color:#fff;border-radius:28px;padding:18px;margin-top:12px;position:relative;overflow:hidden}\n.mr-gon .tg{display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:800;letter-spacing:.6px;color:#D3F36B}\n.mr-gon .tg i{width:7px;height:7px;border-radius:50%;background:#FF6FB5;box-shadow:0 0 0 4px rgba(255,111,181,.25)}\n.mr-gon h2{font-family:\"Bricolage Grotesque\",sans-serif;font-weight:800;font-size:30px;letter-spacing:-.8px;margin:4px 0 2px;color:#fff}\n.mr-gon p{margin:0;font-size:13px;color:#C6C9DA;max-width:20ch;line-height:1.45}\n.mr-gon .bt{position:absolute;right:-8px;top:-4px;width:126px}.mr-gon .bt svg{width:100%;height:auto;display:block}\n.mr-code{display:flex;gap:8px;margin-top:16px}\n.mr-code input{flex:1;min-width:0;height:54px;border-radius:15px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.2);text-align:center;font-family:\"Bricolage Grotesque\",sans-serif;font-weight:800;font-size:24px;color:#fff;outline:none}\n.mr-code input:focus{border-color:#D3F36B}\n.mr-join{margin-top:10px;display:flex;justify-content:center;align-items:center;gap:8px;background:#D3F36B;color:#15192B;border-radius:16px;padding:14px;font-weight:800;font-size:15px;text-decoration:none;border:0;width:100%;font-family:inherit;cursor:pointer}\n.mr-sub{display:block;text-align:center;margin-top:10px;font-size:12.5px;font-weight:700;color:#C6C9DA;text-decoration:underline;text-underline-offset:3px}\n.mr-sec{margin-top:24px}\n.mr-sec h2{font-family:\"Bricolage Grotesque\",sans-serif;font-weight:800;font-size:23px;letter-spacing:-.5px;margin:0 2px 12px;color:#15192B}\n.mr-qk{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}\n.mr-qk a{border-radius:22px;padding:10px 8px 12px;display:flex;flex-direction:column;align-items:center;text-align:center;text-decoration:none;color:#15192B}\n.mr-qk .ia{width:100%;height:70px;display:flex;align-items:center;justify-content:center}.mr-qk .ia svg{height:100%;width:auto}\n.mr-qk b{font-size:13.5px;font-weight:800;margin-top:4px;line-height:1.15}\n.mr-qk small{font-size:10.5px;font-weight:600;opacity:.7;line-height:1.25}\n@media (min-width:860px){.mr-qk{grid-template-columns:repeat(6,1fr)}}\n.mr-tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n@media (min-width:860px){.mr-tiles{grid-template-columns:repeat(4,1fr)}}\n.mr-tiles>a{text-decoration:none;color:inherit;display:block}\n.mr-t{border-radius:26px;padding:12px;position:relative;overflow:hidden;min-height:200px;display:flex;flex-direction:column;color:#15192B;height:100%;box-sizing:border-box}\n.mr-t .art{height:86px;border-radius:18px;background:rgba(255,255,255,.45);display:flex;align-items:center;justify-content:center;overflow:hidden}.mr-t .art svg{height:100%;width:auto}\n.mr-t b{font-family:\"Bricolage Grotesque\",sans-serif;font-weight:800;font-size:20px;letter-spacing:-.3px;margin:12px 2px 3px;line-height:1.05}\n.mr-t p{font-size:12px;margin:0 2px;line-height:1.45;font-weight:500;opacity:.8}\n.mr-lu{background:#16274A;color:#fff;border-radius:26px;padding:14px;min-height:200px;height:100%;box-sizing:border-box;display:flex;flex-direction:column}\n.mr-lu small{font-size:10.5px;font-weight:700;color:#AEBBD6;letter-spacing:.3px}\n.mr-lu b{font-family:\"Bricolage Grotesque\",sans-serif;font-weight:800;font-size:25px;line-height:1;margin:6px 0 4px;letter-spacing:-.5px}\n.mr-lu p{font-size:11.5px;color:#C9D3E6;margin:0;line-height:1.4}\n.mr-lu .stack{display:flex;gap:3px;align-items:flex-end;margin-top:auto;padding-top:10px}\n.mr-lu .stack div{flex:1;display:flex;flex-direction:column;gap:2px}\n.mr-lu .stack i{display:block;height:5px;border-radius:2px;background:rgba(255,255,255,.2)}\n.mr-lu .stack em{font-style:normal;font-size:8px;font-weight:700;text-align:center;color:#AEBBD6;margin-bottom:2px}\n.mr-lu .stack div.on i{background:#D3F36B}.mr-lu .stack div.on em{color:#D3F36B}\n.mr-tf{background:#15192B;color:#fff;border-radius:26px;padding:14px;min-height:200px;height:100%;box-sizing:border-box;display:flex;flex-direction:column}\n.mr-tf small{font-size:10.5px;font-weight:700;color:#A4A9BF;letter-spacing:.3px}\n.mr-tf b{font-family:\"Bricolage Grotesque\",sans-serif;font-weight:800;font-size:22px;line-height:1.02;margin:6px 0 4px;letter-spacing:-.5px}\n.mr-tf p{font-size:11.5px;color:#C3C7D6;margin:0;line-height:1.4}\n.mr-tf .secs2{margin-top:auto;padding-top:10px;display:flex;flex-direction:column;gap:7px}\n.mr-tf .secs2 div{display:grid;grid-template-columns:52px 1fr;gap:6px;align-items:center;font-size:9.5px;font-weight:700;color:#A4A9BF}\n.mr-tf .secs2 i{display:block;height:6px;border-radius:6px;background:rgba(255,255,255,.12);overflow:hidden}\n.mr-tf .secs2 em{display:block;height:100%;border-radius:6px;background:#FFA86B}\n.mr-more{margin-top:8px}\n/* back bar */\n.mr-back{max-width:1080px;margin:0 auto;padding:14px 16px 0;display:flex;align-items:center;gap:10px}\n.mr-back a{display:inline-flex;align-items:center;gap:10px;text-decoration:none;color:#15192B}\n.mr-back .c{width:44px;height:44px;border-radius:50%;background:#fff;border:1.6px solid #15192B;display:grid;place-items:center;flex:none}\n.mr-back small{display:block;font-size:11.5px;color:#6A6F85;font-weight:600;line-height:1.1}.mr-back b{display:block;font-family:\"Bricolage Grotesque\",sans-serif;font-weight:800;font-size:19px;line-height:1.1}\n.mr-back .mr-av{margin-left:auto}\n/* tabbar */\n@media (max-width:1399px){\n.tabbar{background:transparent!important;border:0!important;padding:0 12px calc(env(safe-area-inset-bottom,0px) + 10px)!important;pointer-events:none}\n.tabbar ul{pointer-events:auto;background:#15192B;border-radius:26px;padding:7px;height:auto!important;grid-template-columns:repeat(6,1fr)!important;box-shadow:0 12px 30px -12px rgba(21,25,43,.5)}\n.tabbar a,.tabbar button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 0 7px;border-radius:19px;color:#9AA0B8!important;font-size:10px;white-space:nowrap;letter-spacing:-.01em;font-weight:700;text-decoration:none;background:none;border:0;width:100%;font-family:inherit;cursor:pointer}\n.tabbar a[aria-current=\"page\"]{background:#D3F36B;color:#15192B!important}\n.tabbar a[aria-current=\"page\"]::after{display:none!important}\n.tabbar svg{width:21px;height:21px}\nmain{padding-bottom:calc(var(--tabbar-h) + 60px)!important}\n}\n/* My Progress modal accents */\n.mva-badge{background:#7B5CF0!important;color:#fff!important;border:3px solid #D3F36B;display:flex!important;align-items:center;justify-content:center;line-height:1}\n"; document.head.appendChild(st);
  var tc = document.querySelector('meta[name="theme-color"]'); if (tc) tc.setAttribute("content", "#F5F3FA");

  function tw(r, t, w, c) { return '<span class="tw" style="right:' + r + "px;top:" + t + 'px"><svg width="' + w + '" viewBox="-12 -12 24 24"><path d="' + TWP + '" fill="' + c + '"/></svg></span>'; }
  var TWK = [[16,16,18,"#fff"],[120,14,9,"#fff"],[64,8,7,"#fff"],[154,40,11,"#FF8FC8"],[6,92,8,"#fff"],[148,128,8,"#fff"],[12,176,12,"#fff"],[90,206,9,"#fff"],[30,236,7,"#FF8FC8"],[140,232,10,"#fff"],[60,262,7,"#fff"]].map(function (a) { return tw.apply(null, a); }).join("");
  var WAVE = '<svg class="wv" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="mrg" x1="0" x2="1"><stop offset="0" stop-color="#7B5CF0"/><stop offset=".3" stop-color="#FF6FB5"/><stop offset=".55" stop-color="#FF9A5C"/><stop offset=".8" stop-color="#2FBF8F"/><stop offset="1" stop-color="#4F6BFF"/></linearGradient></defs><path d="M2 6 Q14 1 26 5 T50 5 T74 5 T98 4" stroke="url(#mrg)" stroke-width="1.5" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>';

  function topRow() {
    var u = user();
    if (u) {
      var first = String(u.name || "").split(/\s+/)[0];
      return '<div class="mr-top"><button class="mr-av" type="button" data-mr="me" aria-label="My Progress">' + esc(initials(u.name)) + '</button><div class="mr-hi"><small>Welcome back</small><b>Hi, ' + esc(first) + "!</b></div></div>";
    }
    return '<div class="mr-top"><span class="mr-ghost">' + ico("me", 20) + '</span><div class="mr-hi"><small>Welcome to</small><b>MOVA Studio</b></div><button class="mr-login" type="button" data-mr="me">Log in</button></div>';
  }
  function homeHtml() {
    return '<div class="mr-home">' + topRow() +
      '<div class="mr-grid2"><div class="mr-hero"><div class="brand">MOVA Learning Studio</div>' +
      '<h1 aria-label="Learn. Explore. Grow."><span>Learn.' + WAVE + '</span><br><span>Explore.' + WAVE + '</span><br><span>Grow.' + WAVE + "</span></h1>" +
      "<p>Everything you learn at MOVA, now at home too.</p>" +
      '<a class="mr-pill" href="#mr-find">Start exploring →</a><span class="pipc">' + CH.bloom + "</span>" + TWK + "</div>" +
      '<div class="mr-gon" id="mr-gon"><span class="bt">' + CH.beatDark + '</span><span class="tg"><i></i>LIVE CHALLENGE</span><h2>Game On!</h2><p>Got a code from your teacher? Type it here.</p>' +
      '<div class="mr-code">' + [0, 1, 2, 3].map(function (i) { return '<input inputmode="numeric" pattern="[0-9]*" maxlength="1" aria-label="Code digit ' + (i + 1) + '">'; }).join("") + "</div>" +
      '<button class="mr-join" type="button" data-mr="join">Join the game →</button><a class="mr-sub" href="juego-retos.html">Create a challenge or practice solo</a></div></div>' +
      '<div class="mr-sec" id="mr-find"><h2>Find it fast</h2><div class="mr-qk">' +
      '<a href="#/lectoescritura" style="background:#FFF1C9"><span class="ia">' + CH.mochi + "</span><b>Lectoescritura</b><small>Leo y escribo</small></a>" +
      '<a href="#/library/en" style="background:#E6DEFF"><span class="ia">' + CH.echo + "</span><b>English</b><small>Grammar · Vocab</small></a>" +
      '<a href="#/matematicas" style="background:#FFE1EA"><span class="ia">' + CH.tri + "</span><b>Math</b><small>Numbers &amp; problems</small></a>" +
      '<a href="#/games" style="background:#ECFBC8"><span class="ia">' + CH.beat + "</span><b>Games</b><small>Games &amp; escape rooms</small></a>" +
      '<a href="#/library" style="background:#DDF7EB"><span class="ia">' + CH.nova + "</span><b>Readings</b><small>Read Aloud</small></a>" +
      '<a href="#/exams" style="background:#E8EBF5"><span class="ia">' + EXAM + "</span><b>Exams</b><small>Level Up · TOEFL</small></a>" +
      "</div></div>" +
      '<div class="mr-sec"><h2>Explore</h2><div class="mr-tiles">' +
      '<a href="#/library/en"><div class="mr-t" style="background:#C7B5FF"><div class="art">' + CH.echo + "</div><b>English</b><p>Readings, grammar, flashcards and games.</p></div></a>" +
      '<a href="juego-level-up.html">' + LU + "</a>" +
      '<a href="juego-toefl-practice.html">' + TF + "</a>" +
      '<a href="#/matematicas"><div class="mr-t" style="background:#F9B4DC"><div class="art">' + CH.tri + "</div><b>Math</b><p>Fractions, signs, geometry and problems.</p></div></a>" +
      "</div></div></div>";
  }
  var EXAM = '<svg viewBox="0 0 220 220" aria-hidden="true"><rect x="44" y="40" width="132" height="140" rx="26" fill="#16274A"/><text x="110" y="122" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="56" fill="#D3F36B">A2</text>' +
    [0, 1, 2, 3, 4].map(function (i) { return '<rect x="' + (64 + i * 20) + '" y="' + (150 - i * 4) + '" width="14" height="' + (8 + i * 4) + '" rx="3" fill="' + (i < 3 ? "#D3F36B" : "#3A4A70") + '"/>'; }).join("") + "</svg>";

  function bindHome(root) {
    var ins = [].slice.call(root.querySelectorAll(".mr-code input"));
    function val() { return ins.map(function (x) { return x.value; }).join(""); }
    function go() { var v = val(); if (v.length === 4) location.href = "juego-retos.html?code=" + v; else if (ins[0]) ins[v.length].focus(); }
    ins.forEach(function (inp, i) {
      inp.addEventListener("input", function () {
        var v = inp.value.replace(/\D/g, "");
        if (v.length > 1) { v.split("").slice(0, 4 - i).forEach(function (d, j) { ins[i + j].value = d; }); ins[Math.min(3, i + v.length)].focus(); }
        else { inp.value = v; if (v && i < 3) ins[i + 1].focus(); }
        if (val().length === 4) go();
      });
      inp.addEventListener("keydown", function (e) { if (e.key === "Backspace" && !inp.value && i > 0) ins[i - 1].focus(); if (e.key === "Enter") go(); });
    });
    var j = root.querySelector('[data-mr="join"]'); if (j) j.onclick = go;
    var pill = root.querySelector(".mr-pill"); if (pill) pill.onclick = function (e) { e.preventDefault(); var f = document.getElementById("mr-find"); if (f) f.scrollIntoView({ behavior: "smooth", block: "start" }); };
  }

  /* Rutas */
  var NAMES = { library: "Read", learn: "Learn", games: "Play", resources: "Print & Learn", matematicas: "Math", lectoescritura: "Lectoescritura", flashcards: "Flashcards", structures: "Grammar", lecturas: "Lecturas", holidays: "This season", familias: "For families", saved: "Saved", shop: "Shop", mova: "MOVA", exams: "Exams", coloring: "Coloring", wordsearch: "Word search" };
  function install() {
    if (typeof ROUTES !== "object" || ROUTES.__mr) return false;
    ROUTES.__mr = true;
    var prevHome = ROUTES[""];
    ROUTES[""] = function (p) {
      var v = prevHome(p) || { html: "" }, pm = v.mount;
      return { title: v.title, html: homeHtml() + '<div class="mr-more">' + v.html + "</div>", mount: function (root) {
        try { if (pm) pm(root); } catch (e) { console.error(e); }
        var more = root.querySelector(".mr-more");
        if (more) {
          var h = more.querySelector("section.hero"); if (h) h.remove();
          [].slice.call(more.querySelectorAll('a[href^="#/library/"]')).forEach(function (l) { var c = l.closest("article, .item, li"); if (c && more.contains(c)) c.remove(); });
          [].slice.call(more.querySelectorAll("section")).forEach(function (s) { if (s.querySelector('a[href="juego-level-up.html"]') && s.querySelector('a[href="#/matematicas"]')) s.remove(); });
        }
        bindHome(root);
      } };
    };
    ROUTES.exams = function () {
      return { title: "Exams", html: '<section class="wrap section page-head"><h1>Exams</h1><p class="lead">Find your level and get ready for international exams.</p></section><section class="wrap"><div class="mr-tiles" style="max-width:560px"><a href="juego-level-up.html">' + LU + '</a><a href="juego-toefl-practice.html">' + TF + "</a></div></section>" };
    };
    return true;
  }

  function backBar() {
    var main = document.getElementById("main"); if (!main) return;
    var old = document.querySelector(".mr-back"); if (old) old.remove();
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!parts.length) return;
    var parentHref = "#/", parentName = "Home";
    if (parts.length > 1 && parts[0] !== "library") { parentHref = "#/" + parts[0]; parentName = NAMES[parts[0]] || "Back"; }
    else if (parts.length > 1 && parts[0] === "library" && parts.length > 2) { parentHref = "#/library/" + parts[1]; parentName = "Read"; }
    if (parts.length === 1 && /^(structures|flashcards)$/.test(parts[0])) { parentHref = "#/learn"; parentName = "Learn"; }
    var u = user();
    var d = document.createElement("div"); d.className = "mr-back no-print";
    d.innerHTML = '<a href="' + parentHref + '" aria-label="Back to ' + esc(parentName) + '"><span class="c">' + ico("back", 18) + "</span><span><small>Back to</small><b>" + esc(parentName) + "</b></span></a>" +
      (u ? '<button class="mr-av" type="button" data-mr="me" aria-label="My Progress">' + esc(initials(u.name)) + "</button>" : "");
    main.parentNode.insertBefore(d, main);
  }

  function tabbar() {
    var ul = document.querySelector(".tabbar ul"); if (!ul) return;
    ul.innerHTML =
      '<li><a href="#/" data-nav="">' + ico("home") + "<span>Home</span></a></li>" +
      '<li><a href="juego-retos.html">' + ico("bolt") + "<span>Game On</span></a></li>" +
      '<li><a href="#/library" data-nav="library">' + ico("book") + "<span>Read</span></a></li>" +
      '<li><a href="#/learn" data-nav="learn">' + ico("cap") + "<span>Learn</span></a></li>" +
      '<li><a href="#/games" data-nav="games">' + ico("pad") + "<span>Play</span></a></li>" +
      '<li><button type="button" data-mr="me">' + ico("me") + "<span>Me</span></button></li>";
    var key = (location.hash.replace(/^#\/?/, "").split("/")[0]) || "";
    [].slice.call(ul.querySelectorAll("[data-nav]")).forEach(function (a) { if (a.dataset.nav === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest('[data-mr="me"]'); if (!t) return;
    e.preventDefault(); account();
  });

  function retoNames() {
    [].slice.call(document.querySelectorAll(".mva-retos")).forEach(function (a) {
      if (a.dataset.mr) return; a.dataset.mr = "1";
      var b = a.querySelector("b"), s = a.querySelector("b + span"), em = a.querySelector("em");
      if (b) b.textContent = "Game On!"; if (s) s.textContent = "Play live with your classmates"; if (em) em.textContent = "Play";
    });
  }
  setInterval(retoNames, 800);
  function boot() {
    var fresh = install();
    tabbar();
    if (fresh && typeof router === "function") router();
    backBar();
    requestAnimationFrame(function () { document.documentElement.classList.remove("mr-boot"); });
  }
  window.addEventListener("hashchange", function () { setTimeout(function () { backBar(); tabbar(); }, 0); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  /* refrescar saludo cuando cambie la sesión */
  var lastU = null;
  setInterval(function () {
    var u = user(), k = u ? u.username : "";
    if (k !== lastU) { var first = lastU === null; lastU = k; if (!first) { if (!location.hash || /^#\/?$/.test(location.hash)) { if (typeof router === "function") router(); } backBar(); } }
  }, 1500);
})();

/* ---------- Ventana para instalar la app (heymova.mx) ---------- */
(function () {
  var KEY = "mova_install_later", SESS = "mova_install_seen";
  var UA = navigator.userAgent || "";
  function standalone() { return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true; }
  function snoozed() { try { return Date.now() < Number(localStorage.getItem(KEY) || 0); } catch (e) { return false; } }
  function snooze(days) { try { localStorage.setItem(KEY, String(Date.now() + (days || 3) * 864e5)); } catch (e) {} }
  var ipad = /iPad/.test(UA) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var ios = /iPhone|iPod/.test(UA) || ipad;
  var android = /Android/i.test(UA);
  var inapp = /Instagram|FBAN|FBAV|FB_IAB|TikTok|musical_ly|BytedanceWebview|Line\/|Snapchat|Pinterest|LinkedInApp/i.test(UA);
  var iosOther = ios && /CriOS|FxiOS|EdgiOS|OPiOS|GSA\//.test(UA), iosChrome = ios && /CriOS/.test(UA);
  var BLOOM = "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 138 C96 156.0 90 166.0 92 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 138 C124 156.0 128 166.0 127 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M80 98 C62 104 50 92 48 74\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"74\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M142 100 C152 104 160 102 168 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"86\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"110\" cy=\"92\" r=\"26\" fill=\"#9C8BFF\"/><circle cx=\"80\" cy=\"62\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M87 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M92 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M113 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M118 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M107 85 q3 -4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M94 106 Q110 122 126 106\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"84\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"136\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/></svg>";
  var I = {
    share: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M8 10.5H6.5A1.5 1.5 0 0 0 5 12v7.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5H16"/></svg>',
    dots: '<svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><circle cx="12" cy="5" r="2.2"/><circle cx="12" cy="12" r="2.2"/><circle cx="12" cy="19" r="2.2"/></svg>',
    hdots: '<svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><circle cx="5" cy="12" r="2.2"/><circle cx="12" cy="12" r="2.2"/><circle cx="19" cy="12" r="2.2"/></svg>',
    plus: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#15192B" stroke-width="2.2" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
    down: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#15192B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/></svg>',
    globe: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#3D35C6" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#15192B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>'
  };
  var css = ".mi-back{position:fixed;inset:0;z-index:9998;background:rgba(21,25,43,.42);display:flex;align-items:flex-end;justify-content:center;padding:12px;padding-bottom:calc(12px + env(safe-area-inset-bottom,0px));animation:miF .25s ease}" +
    ".mi-card{position:relative;width:100%;max-width:420px;background:#fff;border-radius:30px;overflow:hidden;box-shadow:0 24px 70px rgba(54,40,120,.32);font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:#15192B;animation:miU .4s cubic-bezier(.2,.9,.3,1.2)}" +
    ".mi-hero{position:relative;background:#D7F36A;padding:18px 20px 16px;min-height:96px}" +
    ".mi-hero .mi-brand{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:700;color:#15192B}.mi-hero .mi-brand img{width:30px;height:30px;border-radius:9px}" +
    ".mi-hero h3{margin:10px 0 0;font:800 25px/1.08 'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;max-width:68%}" +
    ".mi-ch{position:absolute;right:10px;top:6px;width:104px;height:104px;animation:miBob 1.8s ease-in-out infinite alternate}.mi-ch svg{width:100%;height:100%}" +
    ".mi-x{position:absolute;right:10px;top:10px;width:34px;height:34px;border:0;border-radius:50%;background:rgba(255,255,255,.75);display:grid;place-items:center;cursor:pointer;z-index:2;font-size:20px;line-height:1;color:#15192B}" +
    ".mi-body{padding:16px 18px 18px}.mi-body>p{margin:0 0 12px;font-size:14.5px;line-height:1.5;color:#4A4E66}" +
    ".mi-st{display:flex;align-items:center;gap:12px;background:#F5F3FA;border-radius:20px;padding:11px 12px;margin-top:8px}" +
    ".mi-n{flex:none;width:32px;height:32px;border-radius:50%;background:#15192B;color:#D7F36A;display:grid;place-items:center;font:800 15px 'Bricolage Grotesque',sans-serif}" +
    ".mi-st div{flex:1;min-width:0}.mi-st b{display:block;font-size:15px;line-height:1.25}.mi-st small{display:block;font-size:12.5px;line-height:1.35;color:#6B6F86;margin-top:1px}" +
    ".mi-ic{flex:none;width:44px;height:44px;border-radius:14px;background:#2F80FF;display:grid;place-items:center;box-shadow:0 0 0 4px #DDE9FF}" +
    ".mi-ic.soft{background:#EEEAFE;box-shadow:none}" +
    ".mi-chip{flex:none;display:inline-flex;align-items:center;gap:6px;border:2.5px solid #D7F36A;border-radius:14px;padding:8px 10px;font-size:13px;font-weight:700;background:#fff;white-space:nowrap}" +
    ".mi-url{display:flex;align-items:center;gap:8px;margin-top:10px;background:#F5F3FA;border-radius:999px;padding:6px 6px 6px 14px;font-weight:800;font-size:15px}.mi-url span{flex:1}" +
    ".mi-copy{border:0;border-radius:999px;background:#15192B;color:#fff;font:800 13px 'Plus Jakarta Sans',sans-serif;padding:9px 14px;cursor:pointer}" +
    ".mi-btns{display:flex;gap:10px;margin-top:16px}.mi-btns button{flex:1;height:52px;border-radius:999px;font:800 15.5px 'Plus Jakarta Sans',sans-serif;border:0;cursor:pointer}" +
    ".mi-go{background:#15192B;color:#fff;box-shadow:0 4px 0 #D7F36A}.mi-no{background:#F2EFF8;color:#15192B}" +
    ".mi-ok{display:flex;align-items:center;gap:8px;margin-top:12px;font-size:13px;font-weight:700;color:#4A4E66}.mi-ok i{flex:none;width:24px;height:24px;border-radius:50%;background:#D7F36A;display:grid;place-items:center}" +
    "@keyframes miU{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}@keyframes miF{from{opacity:0}to{opacity:1}}@keyframes miBob{to{transform:translateY(-4px) rotate(3deg)}}";
  function step(n, t, s, right) { return '<div class="mi-st"><span class="mi-n">' + n + "</span><div><b>" + t + "</b>" + (s ? "<small>" + s + "</small>" : "") + "</div>" + (right || "") + "</div>"; }
  function content(kind) {
    if (kind === "inapp") return {
      t: "Ábrela en tu navegador",
      p: "Desde " + (/Instagram/i.test(UA) ? "Instagram" : /FBAN|FBAV|FB_IAB/i.test(UA) ? "Facebook" : /TikTok|musical_ly|Bytedance/i.test(UA) ? "TikTok" : "esta app") + " no se puede instalar. Ábrela en " + (ios ? "Safari" : "Chrome") + " y ahí te mostramos cómo.",
      s: step(1, "Toca " + (ios ? "···" : "⋮") + " arriba a la derecha", "", '<span class="mi-ic">' + (ios ? I.hdots : I.dots) + "</span>") +
         step(2, ios ? "«Abrir en el navegador externo»" : "«Abrir en Chrome»", ios ? "En algunas versiones dice «Abrir en Safari»." : "En algunas versiones dice «Abrir en el navegador»."),
      extra: '<div class="mi-url"><span>heymova.mx</span><button type="button" class="mi-copy">Copiar</button></div>',
      go: null
    };
    if (kind === "prompt") return {
      t: "Instala MOVA en tu " + (/(tablet|SM-T|Tab)/i.test(UA) ? "tablet" : "celular"),
      p: "Ábrela desde tu pantalla de inicio como cualquier app. Carga más rápido y guarda tu avance.",
      s: "", extra: '<div class="mi-ok"><i>' + I.check + "</i>Lecturas, juegos, Game On y My Progress</div>", go: "Instalar"
    };
    if (kind === "android") return {
      t: "Instala MOVA en 2 pasos",
      p: "Así la abres desde tu pantalla de inicio como cualquier app.",
      s: step(1, "Toca el menú ⋮", "Los tres puntitos, arriba a la derecha.", '<span class="mi-ic">' + I.dots + "</span>") +
         step(2, "«Instalar app»", "O «Agregar a la pantalla principal».", '<span class="mi-chip">' + I.down + "Instalar</span>"),
      go: null
    };
    if (kind === "iosother") return {
      t: "Ábrela en Safari",
      p: "En iPhone y iPad, MOVA se instala desde Safari. Copia el enlace y pégalo en Safari.",
      s: "", extra: '<div class="mi-url"><span>heymova.mx</span><button type="button" class="mi-copy">Copiar</button></div>', go: null
    };
    return {
      t: "Instala MOVA en 3 pasos",
      p: "Así la abres desde tu pantalla de inicio como cualquier app.",
      s: step(1, "Toca Compartir", iosChrome ? "Arriba a la derecha, junto a la dirección." : ipad ? "Arriba a la derecha. Si no lo ves, toca ··· primero." : "Abajo en la barra. Si no lo ves, toca ··· primero.", '<span class="mi-ic">' + I.share + "</span>") +
         step(2, "«Agregar a inicio»", "Desliza el menú hacia abajo hasta encontrarlo.", '<span class="mi-chip">' + I.plus + "Agregar</span>") +
         step(3, "Toca «Agregar»", "Arriba a la derecha. ¡Listo!"),
      go: null
    };
  }
  function show(kind) {
    if (document.getElementById("mi-back") || standalone()) return;
    if (!document.getElementById("mi-css")) { var s = document.createElement("style"); s.id = "mi-css"; s.textContent = css; document.head.appendChild(s); }
    var c = content(kind);
    var b = document.createElement("div"); b.className = "mi-back"; b.id = "mi-back";
    b.innerHTML = '<div class="mi-card" role="dialog" aria-modal="true" aria-label="Instalar MOVA">' +
      '<div class="mi-hero"><div class="mi-brand"><img src="icon-192.png" alt="">MOVA Learning Studio</div><h3>' + c.t + '</h3><div class="mi-ch">' + BLOOM + "</div></div>" +
      '<div class="mi-body"><p>' + c.p + "</p>" + c.s + (c.extra || "") +
      '<div class="mi-btns"><button type="button" class="mi-no">' + (c.go ? "Ahora no" : "Entendido") + "</button>" + (c.go ? '<button type="button" class="mi-go">' + c.go + "</button>" : "") + "</div></div></div>";
    document.body.appendChild(b);
    try { sessionStorage.setItem(SESS, "1"); } catch (e) {}
    function close() { b.remove(); }
    b.addEventListener("click", function (e) { if (e.target === b) { snooze(kind === "inapp" ? .02 : 3); close(); } });
    b.querySelector(".mi-no").onclick = function () { snooze(kind === "inapp" ? .02 : 3); close(); };
    var cp = b.querySelector(".mi-copy");
    if (cp) cp.onclick = function () {
      var url = "https://heymova.mx", btn = this;
      var ok = function () { btn.textContent = "¡Copiado!"; };
      try { navigator.clipboard.writeText(url).then(ok, function () { prompt("Copia este enlace:", url); }); } catch (e) { prompt("Copia este enlace:", url); }
    };
    var go = b.querySelector(".mi-go");
    if (go) go.onclick = function () {
      var evt = window.__installEvt; close();
      if (!evt) return;
      evt.prompt();
      Promise.resolve(evt.userChoice).then(function (r) { if (r && r.outcome !== "accepted") snooze(3); window.__installEvt = null; }).catch(function () {});
    };
  }
  window.MOVA_INSTALL = function () { var k = inapp ? "inapp" : window.__installEvt ? "prompt" : ios ? (iosOther && !iosChrome ? "iosother" : "ios") : "android"; try { localStorage.removeItem(KEY); } catch (e) {} show(k); };
  function seen() { try { return sessionStorage.getItem(SESS) === "1"; } catch (e) { return false; } }
  function auto() {
    if (standalone() || seen() || document.getElementById("mi-back")) return;
    if (inapp) return show("inapp");
    if (snoozed()) return;
    if (window.__installEvt) return show("prompt");
    if (ios) return show(iosOther && !iosChrome ? "iosother" : "ios");
    if (android) return show("android");
  }
  window.addEventListener("beforeinstallprompt", function () { setTimeout(function () { if (!document.getElementById("mi-back") && !standalone() && !snoozed() && !seen()) show("prompt"); }, 1500); });
  window.addEventListener("appinstalled", function () { var b = document.getElementById("mi-back"); if (b) b.remove(); });
  window.addEventListener("load", function () {
    /* En Android esperamos un poco a que Chrome ofrezca la instalación automática */
    setTimeout(auto, inapp || ios ? 1800 : 4500);
  });
})();
