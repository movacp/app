/* =====================================================================
   MOVA · About Us (#/mova), For families (#/familias) y vitrina About Us
   en Home. Rediseño octubre 2026 (v43).
   ===================================================================== */
(function () {
  var CH = {"bloom": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 138 C96 156.0 90 166.0 92 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 138 C124 156.0 128 166.0 127 178\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"180\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M80 98 C62 104 50 92 48 74\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"74\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M142 100 C152 104 160 102 168 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"68\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"86\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"134\" cy=\"116\" r=\"30\" fill=\"#9C8BFF\"/><circle cx=\"110\" cy=\"92\" r=\"26\" fill=\"#9C8BFF\"/><circle cx=\"80\" cy=\"62\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M87 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M92 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M113 84 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M118 87 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M107 85 q3 -4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M94 106 Q110 122 126 106\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"84\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"136\" cy=\"100\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/></svg>", "beat": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M124 150 C126 168.0 130 178.0 129 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"132\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M66 112 C50 114 42 104 44 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M154 112 C166 112 174 106 178 96\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"178\" cy=\"96\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M112 48 C146 46 156 78 156 106 C156 138 136 152 110 152 C84 152 64 138 64 106 C64 74 80 50 112 48z\" fill=\"#C8EE4A\"/><circle cx=\"88\" cy=\"74\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><path d=\"M66 98 C56 28 164 24 154 98\" stroke=\"#1A1B2E\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"68\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"68\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"152\" cy=\"104\" r=\"12\" fill=\"#FFB8DC\" stroke=\"#1A1B2E\" stroke-width=\"2.2\"/><circle cx=\"152\" cy=\"104\" r=\"3.4\" fill=\"#1A1B2E\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M117 103 q5 5 10 0\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M30 128 L30 108 L38 105\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"26.5\" cy=\"128.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/><path d=\"M190 70 L190 52\" stroke=\"#1A1B2E\" stroke-width=\"1.9\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"186.5\" cy=\"70.5\" rx=\"4.4\" ry=\"3.4\" fill=\"#1A1B2E\"/></svg>", "tri": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 152 C96 170.0 90 180.0 92 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 152 C124 170.0 128 180.0 127 192\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"194\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M70 128 C56 130 46 120 46 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 128 C158 128 164 124 168 118\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"168\" cy=\"118\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M110 44 L168 146 L52 146Z\" fill=\"#FF9FCB\" stroke=\"#FF9FCB\" stroke-width=\"26\" stroke-linejoin=\"round\"/><circle cx=\"104\" cy=\"76\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><path d=\"M88 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M93 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M112 108 h20 q0 12 -10 12 q-10 0 -10 -12z\" fill=\"#1A1B2E\"/><path d=\"M117 111 q3 -1.6 6 0\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\" opacity=\".6\"/><path d=\"M108 109 q2 -4 4 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M104 126 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"126\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(170 118) rotate(-35)\"><rect x=\"-4\" y=\"-30\" width=\"8\" height=\"30\" rx=\"2\" fill=\"#FFD54A\"/><rect x=\"-4\" y=\"-35\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#FF8FC8\"/><path d=\"M-4 0 L0 8 L4 0z\" fill=\"#F4E1C1\"/><path d=\"M-1.3 5.4 L0 8 L1.3 5.4z\" fill=\"#1A1B2E\"/></g></svg>", "nova": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 150 C96 168.0 90 178.0 92 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 150 C124 168.0 128 178.0 127 190\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"192\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M110.0 40.0 L127.6 73.7 L165.2 80.1 L138.5 107.3 L144.1 144.9 L110.0 128.0 L75.9 144.9 L81.5 107.3 L54.8 80.1 L92.4 73.7Z\" fill=\"#FFD54A\" stroke=\"#FFD54A\" stroke-width=\"20\" stroke-linejoin=\"round\"/><circle cx=\"94\" cy=\"74\" r=\"6\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><circle cx=\"122\" cy=\"94\" r=\"9\" fill=\"#fff\" fill-opacity=\".35\" stroke=\"#1A1B2E\" stroke-width=\"2\"/><path d=\"M107 93 q3 -2.4 6 0\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"98\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"95\" r=\"2.6\" fill=\"#1A1B2E\"/><path d=\"M104 108 q0 6 6 6 q6 0 6 -6\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"108\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M68 112 C64 124 72 132 82 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"82\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M152 112 C156 124 148 132 138 134\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"138\" cy=\"134\" r=\"3.6\" fill=\"#1A1B2E\"/><g transform=\"translate(110 136)\"><path d=\"M-30 -8 Q-15 -13 0 -6 L0 13 Q-15 6 -30 11z\" fill=\"#fff\"/><path d=\"M30 -8 Q15 -13 0 -6 L0 13 Q15 6 30 11z\" fill=\"#F3F0FF\"/><path d=\"M-30 -8 Q-15 -13 0 -6 Q15 -13 30 -8 L30 11 Q15 6 0 13 Q-15 6 -30 11z\" stroke=\"#1A1B2E\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M0 -6 L0 13\" stroke=\"#1A1B2E\" stroke-width=\"1.8\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>", "echo": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M98 136 C96 155.8 90 166.8 92 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"89\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M122 136 C124 155.8 128 166.8 127 180\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"130\" cy=\"182\" rx=\"6.2\" ry=\"4\" fill=\"#1A1B2E\"/><path d=\"M72 112 C56 114 46 104 46 88\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"46\" cy=\"88\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M150 114 C160 116 168 112 174 104\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"174\" cy=\"104\" r=\"3.6\" fill=\"#1A1B2E\"/><circle cx=\"86\" cy=\"96\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"82\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"136\" cy=\"98\" r=\"26\" fill=\"#93A6FF\"/><circle cx=\"110\" cy=\"112\" r=\"30\" fill=\"#93A6FF\"/><circle cx=\"88\" cy=\"118\" r=\"22\" fill=\"#93A6FF\"/><circle cx=\"134\" cy=\"120\" r=\"22\" fill=\"#93A6FF\"/><path d=\"M84 134 L74 152 L100 138z\" fill=\"#93A6FF\"/><circle cx=\"96\" cy=\"72\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"98\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><circle cx=\"122\" cy=\"102\" r=\"2.9\" fill=\"#1A1B2E\"/><path d=\"M103 110 q0 7 7 7 q7 0 7 -7\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"86\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"134\" cy=\"112\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><g transform=\"translate(148 30)\"><rect width=\"50\" height=\"30\" rx=\"15\" fill=\"#fff\"/><path d=\"M12 27 L9 38 L21 28z\" fill=\"#fff\"/><text x=\"25\" y=\"20.5\" font-family=\"Bricolage Grotesque,sans-serif\" font-weight=\"700\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1A1B2E\">Hi!</text></g></svg>", "mochi": "<svg viewBox=\"0 0 220 220\" aria-hidden=\"true\"><path d=\"M70 70 L62 30 L94 52z\" fill=\"#4A93F0\" stroke=\"#4A93F0\" stroke-width=\"6\" stroke-linejoin=\"round\"/><path d=\"M150 70 L158 30 L126 52z\" fill=\"#4A93F0\" stroke=\"#4A93F0\" stroke-width=\"6\" stroke-linejoin=\"round\"/><path d=\"M58 112 C58 70 80 48 110 48 C140 48 162 70 162 112 L162 158 q-9 12 -18 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 q-9 12 -17 0 Z\" fill=\"#6FB2FF\"/><circle cx=\"84\" cy=\"70\" r=\"7\" fill=\"#fff\" opacity=\".28\"/><circle cx=\"94\" cy=\"98\" r=\"11\" fill=\"#fff\"/><circle cx=\"95.5\" cy=\"99.5\" r=\"5.6\" fill=\"#1A1B2E\"/><circle cx=\"97.4\" cy=\"97\" r=\"1.8\" fill=\"#fff\"/><circle cx=\"126\" cy=\"98\" r=\"11\" fill=\"#fff\"/><circle cx=\"127.5\" cy=\"99.5\" r=\"5.6\" fill=\"#1A1B2E\"/><circle cx=\"129.4\" cy=\"97\" r=\"1.8\" fill=\"#fff\"/><path d=\"M100 117 q10 9 20 0\" stroke=\"#1A1B2E\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M103.5 119.3 l2 4.2 l2 -3.2z\" fill=\"#fff\"/><path d=\"M116.5 119.3 l-2 4.2 l-2 -3.2z\" fill=\"#fff\"/><ellipse cx=\"80\" cy=\"114\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><ellipse cx=\"140\" cy=\"114\" rx=\"5\" ry=\"3\" fill=\"#FF8FC0\" opacity=\".55\"/><path d=\"M60 124 C48 128 42 138 44 148\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"44\" cy=\"148\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M160 116 C172 110 178 98 176 84\" stroke=\"#1A1B2E\" stroke-width=\"2.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"176\" cy=\"84\" r=\"3.6\" fill=\"#1A1B2E\"/><path d=\"M182 78 q4 4 2 9\" stroke=\"#1A1B2E\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M187 72 q6 6 3 14\" stroke=\"#1A1B2E\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path transform=\"translate(40 52) scale(0.8)\" d=\"M0-12C1.6-3 3-1.6 12 0 3 1.6 1.6 3 0 12-1.6 3-3 1.6-12 0-3-1.6-1.6-3 0-12z\" fill=\"#FFD54A\"/><path transform=\"translate(180 150) scale(0.6)\" d=\"M0-12C1.6-3 3-1.6 12 0 3 1.6 1.6 3 0 12-1.6 3-3 1.6-12 0-3-1.6-1.6-3 0-12z\" fill=\"#FF8FC8\"/><ellipse cx=\"110\" cy=\"182\" rx=\"40\" ry=\"5\" fill=\"#16182A\" opacity=\".06\"/></svg>"};
  var css = `
.mab{--ink:#15192B;--lime:#D3F36B;--pink:#FF8FC0;--lila:#E6E2FF;--peri:#93A6FF;--butter:#FFE58A;--mint:#BDF0D8;--paper:#F5F3FA;font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:var(--ink)}
.mab h1,.mab h2,.mab h3,.mab h4{font-family:'Bricolage Grotesque','Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;color:inherit;margin:0}
.mab p{margin:0}
.mab .sec{margin-top:34px}
.mab .sec-h{font-size:26px;line-height:1.08;margin-bottom:6px}
.mab .sec-p{color:#4A4E66;font-size:15px;line-height:1.5;margin-bottom:16px}
.mab .k{display:inline-block;font:800 11.5px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:8px 12px;border-radius:999px}
.mab .hero{position:relative;overflow:hidden;border-radius:30px;padding:26px 24px 28px;background:var(--ink);color:#fff;margin-top:4px}
.mab .hero h1{font-size:36px;line-height:1.02;margin:14px 0 10px;max-width:15ch}
.mab .hero p{color:#C9C3F2;font-size:15.5px;line-height:1.5;max-width:30ch}
.mab .hero .ring{position:absolute;right:-70px;top:-70px;width:220px;height:220px;border-radius:50%;border:36px solid #2A2D52}
.mab .hero .dt{position:absolute;border-radius:50%}
.mab .hero .chars{position:relative;display:flex;justify-content:flex-end;align-items:flex-end;gap:0;margin:6px -8px -14px 0;height:150px}
.mab .hero .chars span{display:block;width:160px;height:160px}
.mab .hero .chars span+span{width:140px;height:140px}
.mab .char svg{display:block;width:100%;height:100%;overflow:visible}
.mab .logo{display:flex;align-items:center;gap:10px;position:relative;z-index:1}
.mab .logo img{width:44px;height:44px;border-radius:12px}
.mab .logo b{font:700 15px/1.1 'Bricolage Grotesque',sans-serif;color:#fff!important}.mab .logo b em{font-style:normal;color:var(--lime)}
.mab .pil{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.mab .pil div{border-radius:22px;padding:16px 14px}
.mab .pil i{display:grid;place-items:center;width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,.7);margin-bottom:10px}
.mab .pil i svg{width:22px;height:22px}
.mab .pil h4{font-size:16.5px;line-height:1.15;margin-bottom:4px}
.mab .pil p{font-size:13.5px;line-height:1.4;color:#3C4058}
.mab .std{border-radius:26px;padding:22px;background:var(--peri);margin-top:12px;position:relative;overflow:hidden}
.mab .std .b{display:flex;gap:6px;margin-bottom:12px}.mab .std .b span{background:var(--ink);color:var(--lime);font:800 12px/1 'Plus Jakarta Sans';padding:7px 11px;border-radius:999px;letter-spacing:.08em}
.mab .std h3{font-size:22px;margin-bottom:8px}.mab .std p{font-size:14.5px;line-height:1.5;color:#1E2340}
.mab .progs{display:grid;gap:14px}
@media(min-width:820px){.mab .progs{grid-template-columns:1fr 1fr}.mab .pil{grid-template-columns:repeat(4,1fr)}}
.mab .pg{background:#fff;border-radius:28px;overflow:hidden;box-shadow:0 14px 32px -22px rgba(21,25,43,.4);border:1px solid #ECE8F5}
.mab .pg .top{display:flex;align-items:center;gap:14px;padding:18px 18px 16px;background:var(--pc)}
.mab .pg .top i{display:grid;place-items:center;width:50px;height:50px;border-radius:16px;background:#fff;color:var(--ink);flex:none}
.mab .pg .top i svg{width:26px;height:26px}
.mab .pg h3{font-size:21px;line-height:1.1}
.mab .pg small{display:block;font-size:13px;color:#3C4058;margin-top:2px;font-weight:600}
.mab .pg .bd{padding:16px 18px 20px}
.mab .pg .bd>p{font-size:14.5px;line-height:1.55;color:#4A4E66}
.mab .pg ul{list-style:none;padding:0;margin:12px 0 0;display:grid;gap:7px}
.mab .pg li{display:flex;gap:9px;font-size:14px;line-height:1.4;font-weight:600}
.mab .pg li:before{content:"";flex:none;width:18px;height:18px;border-radius:50%;margin-top:1px;background:var(--pc) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2315192B' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12.5l4 4 8-9'/%3E%3C/svg%3E") center/12px no-repeat}
.mab .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.mab .chips span{font-size:12.5px;font-weight:600;padding:5px 11px;border-radius:999px;background:#F2EFF8;color:#4A4E66}
.mab .wa{display:inline-flex;align-items:center;gap:8px;margin-top:16px;padding:12px 18px;border-radius:999px;background:var(--ink);color:#fff;font-weight:800;font-size:14.5px;text-decoration:none}
.mab .wa svg{width:18px;height:18px;color:var(--lime);fill:currentColor}
.mab .band{position:relative;overflow:hidden;border-radius:28px;padding:24px 22px;background:var(--lime);margin-top:16px}
.mab .band h3{font-size:24px;margin-bottom:6px}.mab .band p{font-size:15px;line-height:1.5;color:#2A2F14;max-width:34ch}
.mab .band .char{position:absolute;right:-14px;bottom:-22px;width:140px;height:140px}
.mab .ct{display:grid;gap:10px}
.mab .ct a{display:flex;align-items:center;gap:14px;background:#fff;border-radius:22px;padding:14px 16px;text-decoration:none;color:var(--ink);box-shadow:0 10px 26px -20px rgba(21,25,43,.4);border:1px solid #ECE8F5}
.mab .ct i{display:grid;place-items:center;width:44px;height:44px;border-radius:14px;flex:none}
.mab .ct i svg{width:22px;height:22px}
.mab .ct small{display:block;font-size:12px;color:#6A6F85;font-weight:600}.mab .ct b{font-size:15.5px}
.mab .doors{display:grid;gap:10px}
.mab .doors a{display:flex;align-items:center;gap:14px;background:#fff;border-radius:22px;padding:12px 16px 12px 12px;text-decoration:none;color:var(--ink);border:1px solid #ECE8F5}
.mab .doors .char{width:52px;height:52px;border-radius:16px;padding:4px;flex:none}
.mab .doors b{display:block;font-size:16px;font-family:'Bricolage Grotesque',sans-serif}.mab .doors small{font-size:13px;color:#6A6F85}
.mab .doors .ch{margin-left:auto;font-size:22px;color:#9A9DB0}
.mab .priv{display:flex;justify-content:center;margin:30px 0 8px}
.mab .priv a{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:700;color:#4A4E66;text-decoration:none;background:#fff;border:1px solid #E4E0EE;padding:9px 16px;border-radius:999px}
.mab .priv svg{width:16px;height:16px}
/* familias */
.mab .fhero{position:relative;overflow:hidden;border-radius:30px;padding:26px 24px 0;background:var(--pink);margin-top:4px}
.mab .fhero h1{font-size:40px;line-height:1;margin:14px 0 12px}
.mab .fhero h1 em{font-style:normal;color:#fff}
.mab .fhero p{font-size:15.5px;line-height:1.55;color:#3A1F2E;max-width:32ch}
.mab .fhero .chars{display:flex;justify-content:flex-end;align-items:flex-end;gap:0;height:150px;margin:0 -8px 0 0}
.mab .fhero .chars span{width:160px;height:160px}.mab .fhero .chars span+span{width:140px;height:140px}
.mab .fhero .dt{position:absolute;border-radius:50%}
.mab .stg{display:grid;gap:12px}
@media(min-width:820px){.mab .stg{grid-template-columns:repeat(3,1fr)}.mab .ideas{grid-template-columns:1fr 1fr}}
.mab .st{display:flex;gap:14px;border-radius:24px;padding:18px 16px;background:var(--sc)}
.mab .st .n{flex:none;font:800 28px/1 'Bricolage Grotesque';min-width:62px}
.mab .st .n small{display:block;font:800 10.5px/1.2 'Plus Jakarta Sans';letter-spacing:.1em;text-transform:uppercase;margin-top:6px;opacity:.75}
.mab .st h4{font-size:18px;margin-bottom:4px}.mab .st p{font-size:14px;line-height:1.45;color:#3C4058}
.mab .st .chips span{background:rgba(255,255,255,.75);color:var(--ink)}
.mab .ideas{display:grid;gap:12px}
.mab .idea{display:flex;align-items:center;gap:14px;background:#fff;border-radius:24px;padding:12px 16px 12px 12px;border:1px solid #ECE8F5;box-shadow:0 10px 26px -22px rgba(21,25,43,.4)}
.mab .idea .char{flex:none;width:76px;height:76px;border-radius:20px;padding:6px}
.mab .idea h4{font-size:17px;margin-bottom:3px}.mab .idea p{font-size:14px;line-height:1.45;color:#4A4E66}
.mab .tips{display:grid;gap:10px}
.mab .tip{display:flex;gap:14px;align-items:flex-start;border-radius:22px;padding:16px;background:#fff;border:1px solid #ECE8F5}
.mab .tip .nm{flex:none;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font:800 17px 'Bricolage Grotesque'}
.mab .tip h4{font-size:16.5px;margin-bottom:3px}.mab .tip p{font-size:14px;line-height:1.45;color:#4A4E66}
.mab .fclose{position:relative;overflow:hidden;border-radius:28px;padding:24px 22px 26px;background:var(--ink);color:#fff;margin-top:30px}
.mab .fclose p{font:700 20px/1.3 'Bricolage Grotesque',sans-serif;max-width:24ch}
.mab .fclose small{display:block;margin-top:12px;font-size:13.5px;color:#C9C3F2}.mab .fclose a{color:var(--lime);font-weight:700}
.mab .fclose .char{position:absolute;right:-12px;bottom:-22px;width:130px;height:130px}
.rh-card[data-c="lime"] .rh-badge,.rh-card[data-c="lime"] .rh-go{background:#D3F36B;color:#1A1B2E}
.rh-card[data-c="butter"] .rh-badge{background:#FFE58A;color:#1A1B2E}.rh-card[data-c="butter"] .rh-go{background:#1A1B2E;color:#FFE58A}
.rh-card[data-c="peri"] .rh-badge{background:#1A1B2E;color:#D3F36B}.rh-card[data-c="peri"] .rh-go{background:#1A1B2E;color:#fff}
.lh{position:relative;overflow:hidden;border-radius:30px;padding:24px 22px 22px;background:#15192B;color:#fff;margin:4px 0 18px;font-family:'Plus Jakarta Sans',sans-serif}
.lh .ring{position:absolute;right:-70px;top:-70px;width:210px;height:210px;border-radius:50%;border:34px solid #2A2D52}
.lh .dt{position:absolute;border-radius:50%}
.lh .k{position:relative;display:inline-block;font:800 11.5px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:8px 12px;border-radius:999px;background:#D3F36B;color:#15192B}
.lh h1{position:relative;font:700 34px/1.02 'Bricolage Grotesque',sans-serif;letter-spacing:-.02em;margin:14px 0 10px;color:#fff;max-width:13ch}
.lh h1 em{font-style:normal;color:#D3F36B}
.lh p{position:relative;margin:0;color:#C9C3F2;font-size:15px;line-height:1.5;max-width:32ch}
.lh .pills{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}
.lh .pills a{display:grid;gap:8px;justify-items:start;padding:12px;border-radius:18px;text-decoration:none;color:#15192B}
.lh .pills i{display:grid;place-items:center;width:34px;height:34px;border-radius:12px;background:rgba(255,255,255,.75)}
.lh .pills svg{width:19px;height:19px}
.lh .pills b{font:700 14px/1.1 'Bricolage Grotesque',sans-serif}
.lh .pills small{font-size:11.5px;font-weight:600;opacity:.75;margin-top:-4px}
.lh-sec{font:700 24px/1.1 'Bricolage Grotesque',sans-serif;letter-spacing:-.02em;color:#15192B;margin:6px 0 14px}
.mab-fam{display:block;position:relative;overflow:hidden;border-radius:28px;padding:22px 22px 0;background:#FF8FC0;color:#15192B;text-decoration:none;font-family:'Plus Jakarta Sans',sans-serif;box-shadow:0 18px 40px -24px rgba(21,25,43,.45)}
.mab-fam .blob{position:absolute;right:-50px;top:-50px;width:150px;height:150px;border-radius:50%;background:#FFB8DC}
.mab-fam .dt{position:absolute;border-radius:50%}
.mab-fam .k{position:relative;display:inline-block;font:800 11.5px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:8px 12px;border-radius:999px;background:#15192B;color:#D3F36B}
.mab-fam h3{position:relative;font:700 30px/1.02 'Bricolage Grotesque',sans-serif;letter-spacing:-.02em;margin:14px 0 8px;color:#15192B}
.mab-fam h3 em{font-style:normal;color:#fff}
.mab-fam p{position:relative;margin:0;font-size:14.5px;line-height:1.5;color:#3A1F2E;max-width:30ch}
.mab-fam .cta{position:relative;display:inline-flex;margin-top:16px;padding:11px 18px;border-radius:999px;background:#15192B;color:#fff;font-weight:800;font-size:14.5px}
.mab-fam .chars{position:relative;display:flex;justify-content:flex-end;align-items:flex-end;height:126px;margin:4px -10px 0 0}
.mab-fam .chars .char{display:block;width:130px;height:130px}
.mab-fam .chars .char+.char{width:112px;height:112px}
/* vitrina About Us en Home */
.mab-vit{display:block;position:relative;overflow:hidden;border-radius:28px;padding:22px 22px 24px;background:#15192B;color:#fff;text-decoration:none;font-family:'Plus Jakarta Sans',sans-serif;box-shadow:0 18px 40px -24px rgba(21,25,43,.6)}
.mab-vit .ring{position:absolute;right:-60px;top:-60px;width:190px;height:190px;border-radius:50%;border:30px solid #2A2D52}
.mab-vit .logo{display:flex;align-items:center;gap:10px;position:relative}
.mab-vit .logo img{width:42px;height:42px;border-radius:12px}
.mab-vit .logo b{font:700 14.5px/1.1 'Bricolage Grotesque',sans-serif;color:#fff!important}.mab-vit .logo b em{font-style:normal;color:#D3F36B}
.mab-vit h3{font:700 30px/1.02 'Bricolage Grotesque',sans-serif;letter-spacing:-.02em;margin:16px 0 8px;color:#fff;position:relative}
.mab-vit p{font-size:14.5px;line-height:1.5;color:#C9C3F2;max-width:28ch;position:relative;margin:0}
.mab-vit .tg{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;max-width:78%;position:relative}
.mab-vit .tg span{font-size:12px;font-weight:700;padding:5px 11px;border-radius:999px;background:#2A2D52;color:#E6E2FF}
.mab-vit .cta{display:inline-flex;margin-top:16px;padding:11px 18px;border-radius:999px;background:#D3F36B;color:#15192B;font-weight:800;font-size:14.5px;position:relative}
.mab-vit .char{position:absolute;right:-18px;bottom:-22px;width:160px;height:160px}
.rh-card.ll-soon{cursor:default}.rh-card.ll-soon:hover,.rh-card.ll-soon:active{transform:none}
.rh-card.ll-soon .rh-art{background:#1A1B2E}.rh-card.ll-soon .rh-art svg{display:block;width:100%;height:100%}
.rh-card.ll-soon .rh-badge{background:#D3F36B;color:#1A1B2E}
.rh-card.ll-soon .ll-tag{position:absolute;right:12px;top:12px;font:800 11.5px/1 'Plus Jakarta Sans',sans-serif;letter-spacing:.06em;padding:8px 12px;border-radius:999px;background:#FF8FC0;color:#1A1B2E}
.rh-card.ll-soon .rh-go{background:#F2EFF8;color:#1A1B2E;gap:8px}
.rh-card.ll-soon .rh-go i{width:8px;height:8px;border-radius:50%;background:#FF8FC0;display:inline-block}
`;
  var st = document.createElement("style"); st.id = "mova-about"; st.textContent = css; document.head.appendChild(st);

  var I = {
    users: '<circle cx="9" cy="8" r="3.4"/><path d="M3 19c.8-3 3.2-4.6 6-4.6s5.2 1.6 6 4.6"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 14.6c2.3.3 3.9 1.8 4.5 4.4"/>',
    heart: '<path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    lock: '<rect x="5" y="10" width="14" height="10" rx="2.5"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/>'
  };
  var sv = function (p, sw) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 1.9) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"; };
  var WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>';
  var e = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var ch = function (k, cls, st) { return '<span class="char' + (cls ? " " + cls : "") + '"' + (st ? ' style="' + st + '"' : "") + ">" + (CH[k] || "") + "</span>"; };
  var LOGO = '<div class="logo"><img src="icon-192.png" alt=""><b>MOVA<br><em>Centro Pedagógico</em></b></div>';
  var PCOL = ["#FFC7E2", "#D3F36B", "#C9D2FF", "#FFE58A", "#E6E2FF", "#BDF0D8"];
  var wl = function (n) { try { return waLink(n); } catch (x) { return "https://wa.me/528123426038"; } };

  function aboutHtml() {
    var progs = (typeof PROGRAMS !== "undefined" ? PROGRAMS : []).map(function (g, i) {
      var icon = ""; try { icon = pIco(g.icon); } catch (x) {}
      return '<article class="pg" style="--pc:' + PCOL[i % PCOL.length] + '"><div class="top"><i>' + icon + '</i><div><h3>' + e(g.name) + "</h3><small>" + e(g.sub) + '</small></div></div><div class="bd"><p>' + e(g.text) + "</p><ul>" + g.points.map(function (x) { return "<li>" + e(x) + "</li>"; }).join("") + '</ul><div class="chips">' + g.chips.map(function (x) { return "<span>" + e(x) + "</span>"; }).join("") + '</div><a class="wa" href="' + wl(g.name) + '" target="_blank" rel="noopener">' + WA + " Pedir informes</a></div></article>";
    }).join("");
    var C = typeof CONTACT === "object" ? CONTACT : { address: "Av. Constituyentes de N.L. #111, Col. Lindavista", maps: "https://maps.app.goo.gl/rdoxm6E2kgavVpQF7", phone: "812 342 6038", whatsapp: "https://wa.me/528123426038" };
    var pil = [["users", "Grupos reducidos", "Cada alumno tiene voz y espacio en clase.", "#FFC7E2"], ["heart", "Atención personalizada", "Conocemos a cada alumno y adaptamos el acompañamiento.", "#E6E2FF"], ["chart", "Avance medible", "Medimos el progreso de cada alumno de forma continua.", "#FFE58A"], ["chat", "Evaluación y acompañamiento", "Retroalimentación constante para alumnos y familias.", "#BDF0D8"]];
    return '<div class="mab wrap">' +
      '<section class="hero"><span class="ring"></span><span class="dt" style="width:14px;height:14px;background:#FF8FC0;right:40px;top:150px"></span><span class="dt" style="width:10px;height:10px;background:#FFD54A;right:110px;top:60px"></span>' +
      LOGO + '<span class="k" style="background:#D3F36B;color:#15192B;margin-top:18px">About us</span><h1>Educación bilingüe con atención personalizada</h1><p>En MOVA acompañamos a cada alumno en su proceso de aprendizaje, con seguimiento cercano y a su propio ritmo.</p>' +
      '<div class="chars">' + ch("bloom") + ch("beat") + "</div></section>" +
      '<section class="sec"><div class="pil">' + pil.map(function (p) { return '<div style="background:' + p[3] + '"><i>' + sv(I[p[0]]) + "</i><h4>" + p[1] + "</h4><p>" + p[2] + "</p></div>"; }).join("") + "</div>" +
      '<div class="std"><div class="b"><span>CEFR</span><span>GSE</span></div><h3>Un mismo estándar internacional</h3><p>Todos nuestros programas se rigen bajo el mismo sistema de medición: el <b>CEFR</b> (Common European Framework of Reference) y la <b>Global Scale of English</b>, los mismos estándares que utilizan certificaciones internacionales como Cambridge y TOEFL.</p></div></section>' +
      '<section class="sec"><h2 class="sec-h">Nuestros programas</h2><p class="sec-p">Inglés, lectoescritura, matemáticas y preparación para exámenes internacionales.</p><div class="progs">' + progs + "</div>" +
      '<div class="band">' + ch("tri") + '<h3>¿Cuál es tu programa ideal?</h3><p>Escríbenos por WhatsApp y con gusto te orientamos para elegir el programa adecuado para ti o para tu hijo.</p><a class="wa" href="' + wl("sus programas") + '" target="_blank" rel="noopener">' + WA + " Escribir por WhatsApp</a></div></section>" +
      '<section class="sec"><h2 class="sec-h" style="margin-bottom:14px">Visítanos</h2><div class="ct"><a href="' + C.maps + '" target="_blank" rel="noopener"><i style="background:#FFC7E2">' + sv(I.pin) + "</i><span><small>Dirección</small><b>" + e(C.address) + '</b></span></a><a href="' + C.whatsapp + '" target="_blank" rel="noopener"><i style="background:#D3F36B">' + WA.replace("<svg", '<svg style="fill:#15192B"') + "</i><span><small>WhatsApp</small><b>" + e(C.phone) + "</b></span></a></div></section>" +
      '<section class="sec"><h2 class="sec-h" style="margin-bottom:14px">More from MOVA</h2><div class="doors"><a href="#/familias">' + ch("bloom", "", "background:#FFC7E2") + '<span><b>For families</b><small>Ideas para disfrutar la app en casa.</small></span><span class="ch">›</span></a><a href="#/shop">' + ch("nova", "", "background:#FFE58A") + '<span><b>Shop</b><small>Coming soon</small></span><span class="ch">›</span></a></div></section>' +
      '<div class="priv mva-priv"><a href="aviso-privacidad.html">' + sv(I.lock, 2) + "Aviso de privacidad</a></div></div>";
  }

  function famHtml() {
    var stg = [["6–8", "MOVA Kids", "Los más pequeños", "Escuchar palabras, ver dibujos y descubrir las letras con Mochi.", ["Flashcards", "Aprende a leer con Mochi", "Lecturas Kids"], "#D3F36B"], ["9–12", "MOVA Children", "Primaria", "Historias divertidas, juegos de palabras y retos de matemáticas.", ["Lecturas Children", "Juegos", "Para imprimir"], "#E6E2FF"], ["12–17", "MOVA Teens", "Secundaria y prepa", "Lecturas sobre temas que les interesan y retos para medir su nivel.", ["Lecturas Teens", "Level Up", "TOEFL Practice"], "#FFC7E2"]];
    var ideas = [["echo", "#C9D2FF", "Un cuento antes de dormir", "Escojan una lectura, léanla juntos y platiquen qué pasó."], ["beat", "#FFE58A", "Un reto en familia", "Jueguen una partida juntos y vean quién encuentra más palabras."], ["bloom", "#FFC7E2", "Escúchense leer", "Graben una lectura en voz alta y escúchenla juntos. Suele dar mucha risa y mucho orgullo."], ["tri", "#BDF0D8", "Imprimir y colorear", "Dibujos para colorear y hojas de práctica para disfrutar con lápiz y colores, lejos de la pantalla."]];
    var tips = [["#C9D2FF", "El audio los acompaña", "Muchas actividades se pueden escuchar, así que nadie tiene que saber pronunciar perfecto."], ["#D3F36B", "Déjense enseñar", "Pídanle que les explique una palabra nueva. A los niños les encanta ser el maestro."], ["#FFC7E2", "Celebren cada logro", "Una historia terminada o una palabra nueva merecen un “¡qué bien!”."]];
    return '<div class="mab wrap">' +
      '<section class="fhero"><span class="dt" style="width:160px;height:160px;background:#FFB8DC;right:-50px;top:-50px"></span><span class="dt" style="width:14px;height:14px;background:#15192B;right:150px;top:40px"></span><span class="dt" style="width:10px;height:10px;background:#D3F36B;left:220px;top:120px"></span>' +
      '<span class="k" style="background:#15192B;color:#D3F36B;position:relative">Para familias</span><h1 style="position:relative">Aprender <em>jugando</em>, aprender <em>juntos</em></h1><p style="position:relative">MOVA Learning Studio es un rincón para practicar inglés, matemáticas y lectoescritura con historias, juegos y pequeños retos. No es una tarea más: es un ratito para compartir con sus hijos, en el momento que mejor les funcione.</p>' +
      '<div class="chars">' + ch("beat") + ch("bloom") + "</div></section>" +
      '<section class="sec"><h2 class="sec-h">¿Qué les puede gustar?</h2><p class="sec-p">Algunas ideas según la edad. Pueden explorar libremente: aquí cada quien va a su ritmo.</p><div class="stg">' +
      stg.map(function (s) { return '<div class="st" style="--sc:' + s[5] + '"><div class="n">' + s[0] + "<small>" + s[1] + "</small></div><div><h4>" + s[2] + "</h4><p>" + s[3] + '</p><div class="chips">' + s[4].map(function (c) { return "<span>" + c + "</span>"; }).join("") + "</div></div></div>"; }).join("") + "</div></section>" +
      '<section class="sec"><h2 class="sec-h">Ideas para un ratito juntos</h2><p class="sec-p">Escojan la que más les guste. Cinco minutos o media hora, lo que les acomode.</p><div class="ideas">' +
      ideas.map(function (d) { return '<div class="idea">' + ch(d[0], "", "background:" + d[1]) + "<div><h4>" + d[2] + "</h4><p>" + d[3] + "</p></div></div>"; }).join("") + "</div></section>" +
      '<section class="sec"><h2 class="sec-h">¿Y si yo no hablo inglés?</h2><p class="sec-p">¡Mejor aún! Pueden descubrirlo juntos.</p><div class="tips">' +
      tips.map(function (t, i) { return '<div class="tip"><span class="nm" style="background:' + t[0] + '">' + (i + 1) + "</span><div><h4>" + t[1] + "</h4><p>" + t[2] + "</p></div></div>"; }).join("") + "</div></section>" +
      '<div class="fclose">' + ch("mochi") + '<p>Aquí no hay calificaciones ni pendientes. Solo historias, juegos y momentos para disfrutar en familia.</p><small>Con cariño, MOVA Centro Pedagógico · <a href="https://wa.me/528123426038" target="_blank" rel="noopener">Escríbanos por WhatsApp</a></small></div></div>';
  }


  function learnHtml() {
    var c = function (href, img, col, badge, title, text, chips, go) {
      return '<a class="rh-card" href="' + href + '" data-c="' + col + '"><div class="rh-art" aria-hidden="true"><img src="' + img + '.webp" srcset="' + img + '.webp 900w, ' + img + '-hd.webp 1600w" sizes="(min-width:820px) 50vw, 100vw" alt="" loading="eager"><span class="rh-badge">' + badge + '</span></div><div class="rh-body"><h2>' + title + "</h2><p>" + text + '</p><div class="chips">' + chips.map(function (x) { return '<span class="chip">' + x + "</span>"; }).join("") + '</div><span class="rh-go">' + go + "</span></div></a>";
    };
    return '<section class="wrap"><div class="lh"><span class="ring"></span><span class="dt" style="width:12px;height:12px;background:#FF8FC0;right:34px;top:140px"></span><span class="dt" style="width:9px;height:9px;background:#FFE58A;right:120px;top:46px"></span>' +
      '<span class="k">Learn</span><h1>Understand it, then <em>practice it</em></h1><p>Clear explanations of every grammar topic, cards to review vocabulary and math practice step by step.</p><div class="pills">' +
      '<a href="#/structures" style="background:#C9D2FF"><i>' + sv('<path d="M4 6h16M4 12h10M4 18h7"/>') + '</i><b>Grammar</b><small>Structures</small></a>' +
      '<a href="#/flashcards" style="background:#FFC7E2"><i>' + sv('<rect x="7" y="3" width="13" height="15" rx="2.5"/><path d="M4 7v11a3 3 0 0 0 3 3h9"/>') + '</i><b>Vocabulary</b><small>Flashcards</small></a>' +
      '<a href="#/matematicas" style="background:#FFE58A"><i>' + sv('<path d="M5 7h6M8 4v6M14 7h5M5 17l5-5M10 17l-5-5M14 15h5M14 19h5"/>') + '</i><b>Math</b><small>Matemáticas</small></a>' +
      '</div></div><h2 class="lh-sec">Choose what to study</h2></section>' +
      '<section class="wrap" style="margin-top:-8px"><div class="rh-grid">' +
      '<div class="rh-card ll-soon" aria-label="Listening Lab, coming soon"><div class="rh-art"><svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="600" height="300" fill="#1A1B2E"/><circle cx="530" cy="40" r="100" fill="none" stroke="#2C3060" stroke-width="34"/><circle cx="455" cy="70" r="9" fill="#FFE58A"/><circle cx="70" cy="250" r="9" fill="#FF8FC0"/><circle cx="560" cy="250" r="7" fill="#BDF0D8"/><g transform="translate(70,105)"><rect x="0" y="45" width="13" height="21" rx="6.5" fill="#D3F36B"/><rect x="30" y="30" width="13" height="51" rx="6.5" fill="#D3F36B"/><rect x="60" y="9" width="13" height="93" rx="6.5" fill="#D3F36B"/><rect x="90" y="36" width="13" height="39" rx="6.5" fill="#D3F36B"/><rect x="120" y="18" width="13" height="75" rx="6.5" fill="#C9D2FF"/><rect x="150" y="0" width="13" height="111" rx="6.5" fill="#C9D2FF"/><rect x="180" y="24" width="13" height="63" rx="6.5" fill="#C9D2FF"/><rect x="210" y="39" width="13" height="33" rx="6.5" fill="#FF8FC0"/><rect x="240" y="15" width="13" height="81" rx="6.5" fill="#FF8FC0"/><rect x="270" y="33" width="13" height="45" rx="6.5" fill="#FF8FC0"/><rect x="300" y="46" width="13" height="18" rx="6.5" fill="#FF8FC0"/></g><g transform="translate(400,120)"><path d="M14 60 A56 56 0 0 1 126 60" fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round"/><rect x="0" y="56" width="34" height="58" rx="15" fill="#D3F36B"/><rect x="106" y="56" width="34" height="58" rx="15" fill="#D3F36B"/></g></svg><span class="rh-badge">Listening</span><span class="ll-tag">Coming soon</span></div><div class="rh-body"><h2>Listening Lab</h2><p>Real conversations by stage and level: listen, answer and review with the transcript.</p><div class="chips"><span class="chip">MOVA Kids · 6–8</span><span class="chip">MOVA Children · 9–12</span><span class="chip">MOVA Teens · 12–17</span></div><span class="rh-go"><i></i>Available in December</span></div></div>' +
      c("#/structures", "thumb-learn-structures", "peri", "Grammar", "Structures", "Present Simple, Past Continuous, Present Perfect, Adverbs of Frequency and more, with examples and a quick check.", ["Kids &amp; Children · en español", "Teens · in English"], "Explore structures →") +
      c("#/flashcards", "thumb-learn-flashcards", "coral", "Vocabulary", "Flashcards", "Cards to review vocabulary by stage: flip, listen and practice.", ["MOVA Kids · 6–8", "MOVA Children · 9–12", "MOVA Teens · 12–17"], "Open flashcards →") +
      c("#/matematicas", "thumb-learn-math", "butter", "Matemáticas", "Matemáticas", "Práctica por tema y nivel, con explicación paso a paso de cada respuesta.", ["Primaria", "Secundaria", "Prepa"], "Empezar a practicar →") +
      "</div></section>";
  }

  var VIT = '<section class="wrap section" aria-labelledby="about-h"><div class="section-head"><h2 id="about-h">About Us</h2></div><a class="mab-vit" href="#/mova"><span class="ring"></span>' + LOGO + '<h3>Conoce MOVA</h3><p>Educación bilingüe con atención personalizada. Descubre todos nuestros programas.</p><div class="tg"><span>Inglés</span><span>Lectoescritura</span><span>Matemáticas</span><span>TOEFL</span><span>EXCI</span></div><span class="cta">See our programs →</span>' + ch("bloom") + "</a></section>";

  var FAMV = '<section class="wrap section" aria-labelledby="fam-h" data-fam-img="1"><div class="section-head"><h2 id="fam-h">For families</h2></div><a class="mab-fam" href="#/familias" data-fam-img="1"><span class="blob"></span><span class="dt" style="width:12px;height:12px;background:#15192B;right:150px;top:34px"></span><span class="dt" style="width:9px;height:9px;background:#D3F36B;right:70px;top:120px"></span><span class="k">Para familias</span><h3>Aprender <em>jugando</em>, aprender <em>juntos</em></h3><p>Ideas sencillas para disfrutar la app en casa con sus hijos.</p><span class="cta">Conocer más →</span><span class="chars">' + ch("beat") + ch("bloom") + '</span></a></section>';
  var done = false;
  function install() {
    if (done) return true;
    if (typeof ROUTES !== "object" || !ROUTES.__mr) return false;
    done = true;
    ROUTES.mova = function () { return { title: "About Us", html: aboutHtml() }; };
    ROUTES.familias = function () { return { title: "For families", html: famHtml() }; };
    ROUTES.learn = learnRoute;
    var prevHome = ROUTES[""];
    ROUTES[""] = function (p) {
      var v = prevHome(p) || { html: "" }, pm = v.mount;
      return { title: v.title, html: v.html, mount: function (root) {
        try { if (pm) pm(root); } catch (x) { console.error(x); }
        [].slice.call(root.querySelectorAll("section")).forEach(function (s) {
          var h = s.querySelector(".section-head h2, h2");
          if (h && /Featured activities/i.test(h.textContent)) s.outerHTML = VIT;
          else if (h && /^\s*For families\s*$/i.test(h.textContent) && !s.querySelector(".mab-fam")) s.outerHTML = FAMV;
        });
        if (!root.querySelector(".mab-vit")) { var m = root.querySelector(".mr-more") || root; m.insertAdjacentHTML("beforeend", VIT); }
      } };
    };
    var k = location.hash.replace(/^#\/?/, "").split("/")[0];
    if ((k === "" || k === "mova" || k === "familias" || k === "learn") && typeof router === "function") router();
    return true;
  }
  function learnRoute() { return { title: "Learn", html: learnHtml() }; }
  learnRoute.__mab = true;
  window.addEventListener("load", function () {
    setTimeout(function () {
      if (typeof ROUTES === "object" && !(ROUTES.learn && ROUTES.learn.__mab)) {
        ROUTES.learn = learnRoute;
        if (/^#\/learn\/?$/.test(location.hash) && typeof router === "function") router();
      }
    }, 0);
  });
  var tries = 0; (function loop() { if (!install() && tries++ < 80) setTimeout(loop, 50); })();
})();
