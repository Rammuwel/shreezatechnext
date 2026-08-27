Created At: 2026-08-21T04:25:57+05:30
Completed At: 2026-08-21T04:25:57+05:30
File Path: `file:///c:/Users/shrir/shreezatech/src/components/SolutionTemplate.jsx`
Total Lines: 449
Total Bytes: 25211
Showing lines 1 to 449
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: "use client";
2: import React, { useState } from 'react';
3: import Link from 'next/link';
4: import { ChevronRight, Home as HomeIcon, CheckCircle2, ArrowRight, Activity, Database, XCircle } from 'lucide-react';
5: import { Swiper, SwiperSlide } from 'swiper/react';
6: import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
7: import 'swiper/css';
8: import 'swiper/css/pagination';
9: import 'swiper/css/effect-fade';
10: 
11: function ArchitectureSection({ architecture }) {
12:   const [active, setActive] = useState(0);
13:   const layer = architecture.layers[active];
14: 
15:   return (
16:     <section className="py-24 lg:py-32 bg-[#040026] relative overflow-hidden">
17:       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(0,162,255,0.08),transparent_60%)] pointer-events-none"></div>
18: 
19:       <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
20:         <div className="mb-14" data-aos="fade-up">
21:           <span className="text-[#00A2FF] text-xs font-bold tracking-[0.2em] uppercase">
22:             {architecture.subtitle || 'System Architecture'}
23:           </span>
24:           <h2 className="mt-2 text-[36px] md:text-[48px] font-extrabold text-white leading-tight tracking-tight">
25:             {architecture.title}
26:           </h2>
27:         </div>
28: 
29:         <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
30: 
31:           {/* LEFT: Tab list */}
32:           <div className="bg-white/5 backdrop-blur-sm flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible">
33:             {architecture.layers.map((l, idx) => (
34:               <button
35:                 key={idx}
36:                 onClick={() => setActive(idx)}
37:                 className={`group flex items-center gap-4 px-6 py-5 text-left transition-all duration-300 border-b border-white/5 relative w-full shrink-0 ${
38:                   active === idx
39:                     ? 'bg-[#00A2FF] text-white'
40:                     : 'text-gray-400 hover:text-white hover:bg-white/5'
41:                 }`}
42:               >
43:                 {active === idx && (
44:                   <span className="hidden lg:block absolute right-0 top-0 h-full w-1 bg-white/30 rounded-l-full"></span>
45:                 )}
46:                 <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
47:                   active === idx ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500 group-hover:text-white'
48:                 }`}>
49:                   {React.cloneElement(l.icon, { className: 'w-5 h-5' })}
50:                 </span>
51:                 <span className="font-semibold text-sm leading-snug">{l.title}</span>
52:               </button>
53:             ))}
54:           </div>
55: 
56:           {/* RIGHT: Content Panel */}
57:           <div className="bg-white/[0.03] p-8 lg:p-14 flex flex-col justify-center min-h-[400px]">
58:             <div key={active}>
59:               <div className="flex items-center gap-4 mb-8">
60:                 <div className="w-14 h-14 rounded-2xl bg-[#00A2FF] flex items-center justify-center text-white">
61:                   {React.cloneElement(layer.icon, { className: 'w-7 h-7' })}
62:                 </div>
63:                 <h3 className="text-[24px] md:text-[28px] font-bold text-white">{layer.title}</h3>
64:               </div>
65:               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
66:                 {layer.items.map((item, i) => (
67:                   <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/5 rounded-xl p-4">
68:                     <CheckCircle2 size={18} className="text-[#00A2FF] shrink-0 mt-0.5" />
69:                     <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
70:                   </li>
71:                 ))}
72:               </ul>
73:               <div className="mt-8 flex items-center gap-3">
74:                 <span className="text-5xl font-black text-white/5 select-none">
75:                   {String(active + 1).padStart(2, '0')}
76:                 </span>
77:                 <div className="flex-1 h-px bg-white/10"></div>
78:                 <span className="text-xs text-gray-500 uppercase tracking-widest">
79:                   Layer {active + 1} of {architecture.layers.length}
80:                 </span>
81:               </div>
82:             </div>
83:           </div>
84: 
85:         </div>
86:       </div>
87:     </section>
88:   );
89: }
90: 
91: export default function SolutionTemplate({
92:   breadcrumb,
93:   hero,
94:   trustRibbon,
95:   challenge,
96:   architecture,
97:   features,
98:   roi,
99:   caseStudies,
100:   compliance,
101:   faq,
102:   cta
103: }) {
104:   return (
105:     <div className="font-sans text-gray-800 selection:bg-[#00A2FF] selection:text-white pt-0">
106: 
107:       {/* 1. HERO SECTION */}
108:       <section className="h-[50vh] min-h-[400px] w-full relative overflow-hidden bg-[#081229] flex items-center border-b border-[#ffffff10]">
109:         <div className="absolute inset-0 z-0">
110:           <img src={hero.bgImage} alt="Hero Background" className="w-full h-full object-cover opacity-20 grayscale" />
111:           {/* gradient removed per user request */}
112:         </div>
113: 
114:         <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 w-full">
115:           <div className="max-w-4xl" data-aos="fade-right">
116:             {hero.badge && (
117:               <div className="inline-block px-4 py-1.5 rounded-full border border-[#ffb916]/30 bg-[#ffb916]/10 text-[#ffb916] text-sm font-medium mb-6">
118:                 {hero.badge}
119:               </div>
120:             )}
121:             <h1 className="text-[48px] md:text-[64px] leading-[1.1] font-light mb-6 text-white tracking-tight">
122:               {hero.title1} <br />
123:               <span className="text-[#ffb916] font-semibold">{hero.title2}</span>
124:             </h1>
125:             <p className="text-[18px] md:text-[20px] text-gray-400 max-w-2xl leading-[1.6] font-light">
126:               {hero.description}
127:             </p>
128:             {(hero.primaryButton || hero.secondaryButton) && (
129:               <div className="mt-8 flex flex-wrap gap-4">
130:                 {hero.primaryButton && (
131:                   <Link href={hero.primaryButton.href} className="inline-flex items-center justify-center px-8 py-3 bg-[#ffb916] border-2 border-[#ffb916] cursor-pointer text-white font-medium transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1]">
132:                     {hero.primaryButton.text}
133:                     <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
134:                   </Link>
135:                 )}
136:                 {hero.secondaryButton && (
137:                   <Link href={hero.secondaryButton.href} className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors group">
138:                     {hero.secondaryButton.text}
139:                     <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
140:                   </Link>
141:                 )}
142:               </div>
143:             )}
144:           </div>
145:         </div>
146:       </section>
147: 
148:       {/* 2. BREADCRUMB */}
149:       <div className="w-full bg-gray-50 relative z-20">
150:         <div className="max-w-[1300px] mx-auto flex py-4 px-6 lg:px-12">
151:           <nav aria-label="Breadcrumb" className="flex items-center text-[13px] text-gray-500 font-medium">
152:             <Link href="/" className="hover:text-gray-900 transition-colors focus-visible:outline-none rounded px-1 -ml-1 flex items-center">
153:               <HomeIcon size={14} />
154:             </Link>
155:             <ChevronRight size={14} className="mx-2 text-gray-400" />
156:             <Link href={breadcrumb.parentHref} className="hover:text-gray-900 transition-colors focus-visible:outline-none rounded">
157:               {breadcrumb.parentLabel}
158:             </Link>
159:             <ChevronRight size={14} className="mx-2 text-gray-400" />
160:             <span className="text-[#154EA1] font-bold" aria-current="page">{breadcrumb.label}</span>
161:           </nav>
162:         </div>
163:       </div>
164: 
165:       {/* 3. THE INDUSTRY CHALLENGE (DARK MODE SPLIT) */}
166:       {challenge && (
167:         <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50 text-gray-800 relative">
168:           <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
169:             <div data-aos="fade-right">
170:               <h4 className="text-[#00A2FF] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
171:                 <span className="w-8 h-px bg-[#00A2FF]"></span> The Challenge
172:               </h4>
173:               <h2 className="text-[36px] md:text-[50px] font-normal leading-[1.1] mb-8">
174:                 {challenge.title1} <span className="font-bold text-[#ffb916]">{challenge.title2}</span>
175:               </h2>
176:               <div className="text-gray-400 text-[18px] leading-[1.8] space-y-6 mb-10">
177:                 {challenge.description.map((p, i) => <p key={i}>{p}</p>)}
178:               </div>
179:               {/* Redesigned Pain Points or Comparison */}
180:               {challenge.comparison ? (
181:                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
182:                   {/* Legacy */}
183:                   <div className="bg-red-50/40 p-5 rounded-2xl border border-red-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
184:                     <h5 className="text-red-700 font-bold mb-4 flex items-center gap-2 text-[15px]">
185:                       <XCircle size={18} className="text-red-500" /> {challenge.comparison.legacy.title}
186:                     </h5>
187:                     <ul className="space-y-3">
188:                       {challenge.comparison.legacy.items.map((item, i) => (
189:                         <li key={i} className="flex items-start gap-2.5 text-red-900/70 text-[14px] font-medium leading-snug">
190:                           <span className="mt-0.5 text-red-400 shrink-0 text-[10px]">✕</span> {item}
191:                         </li>
192:                       ))}
193:                     </ul>
194:                   </div>
195:                   {/* Cloud */}
196:                   <div className="bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative">
197:                     {/* VS Badge */}
198:                     <div className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full items-center justify-center text-[10px] font-bold text-gray-400 shadow-sm border border-gray-100 z-10">VS</div>
199: 
200:                     <h5 className="text-emerald-700 font-bold mb-4 flex items-center gap-2 text-[15px]">
201:                       <CheckCircle2 size={18} className="text-emerald-500" /> {challenge.comparison.cloud.title}
202:                     </h5>
203:                     <ul className="space-y-3">
204:                       {challenge.comparison.cloud.items.map((item, i) => (
205:                         <li key={i} className="flex items-start gap-2.5 text-emerald-900/70 text-[14px] font-medium leading-snug">
206:                           <span className="mt-0.5 text-emerald-400 shrink-0 text-[10px]">✓</span> {item}
207:                         </li>
208:                       ))}
209:                     </ul>
210:                   </div>
211:                 </div>
212:               ) : challenge.painPoints && (
213:                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
214:                   {challenge.painPoints.map((point, i) => (
215:                     <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,162,255,0.08)] transition-all flex items-start gap-4 group">
216:                       <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
217:                         <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
218:                       </div>
219:                       <p className="text-gray-700 font-medium text-[15px] leading-snug pt-1">{point}</p>
220:                     </div>
221:                   ))}
222:                 </div>
223:               )}
224:             </div>
225:             <div className="relative flex justify-center mt-12 lg:mt-0" data-aos="fade-left">
226:               {/* Geometric Composition Container */}
227:               <div className="relative w-full max-w-[450px] aspect-[4/4.5] mx-auto mt-4">
228: 
229:                 {/* Left Geometric Shape (Light Cyan) */}
230:                 <div className="absolute -left-6 sm:-left-12 bottom-4 w-[75%] h-[75%] bg-[#E0F2F1] z-0 [clip-path:polygon(35%_15%,_100%_100%,_0%_100%)] transition-transform duration-700 hover:-translate-x-2"></div>
231: 
232:                 {/* Right Geometric Shape (Teal) */}
233:                 <div className="absolute -right-6 sm:-right-12 top-0 w-[80%] h-[75%] bg-[#4DB6AC] z-0 [clip-path:polygon(0%_10%,_100%_10%,_70%_100%)] transition-transform duration-700 hover:translate-x-2"></div>
234: 
235:                 {/* Main Image (Inverted Trapezoid) */}
236:                 <div className="absolute inset-0 z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]">
237:                   <img
238:                     src={challenge.image}
239:                     alt="Industry Challenge"
240:                     className="w-full h-full object-cover [clip-path:polygon(10%_0%,_100%_0%,_65%_100%,_25%_100%)] transition-transform duration-700"
241:                   />
242:                 </div>
243: 
244:                 {/* Glassmorphic Floating Stat Box */}
245:                 {challenge.floatingStat && (
246:                   <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-gray-100 p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] z-30 min-w-[220px] text-center animate-[bounce_7s_infinite]">
247:                     <p className="text-[36px] font-bold text-[#0A3A7A] mb-1 leading-none">{challenge.floatingStat.value}</p>
248:                     <div className="w-12 h-1 bg-[#ffb916] mx-auto mb-2"></div>
249:                     <p className="text-gray-600 text-[13px] font-medium leading-relaxed">{challenge.floatingStat.label}</p>
250:                   </div>
251:                 )}
252:               </div>
253:             </div>
254:           </div>
255:         </section>
256:       )}
257: 
258:       {/* 4. BENTO-BOX FEATURE GRID */}
259:       {features && (
260:         <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-t border-gray-200">
261:           <div className="max-w-[1300px] mx-auto">
262:             <div className="text-center mb-16" data-aos="fade-up">
263:               <h4 className="text-[#0A3A7A] font-bold tracking-widest uppercase mb-4 text-sm">Capabilities</h4>
264:               <h2 className="text-[36px] md:text-[50px] font-bold text-[#111] leading-[1.1] mb-6">
265:                 {features.title1} <span className="text-[#00A2FF]">{features.title2}</span>
266:               </h2>
267:               <p className="text-[18px] text-gray-600 max-w-3xl mx-auto">{features.description}</p>
268:             </div>
269: 
270:             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
271:               {features.bentoCards.map((card, idx) => (
272:                 <div key={idx} className={`bg-gray-50 rounded-[24px] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,162,255,0.1)] transition-all duration-300 group overflow-hidden relative ${card.span || 'col-span-1 md:col-span-1'}`} data-aos="fade-up" data-aos-delay={(idx + 1) * 50}>
273:                   {/* Decorative Background Element */}
274:                   <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
275: 
276:                   <div className="relative z-10 flex flex-col h-full justify-between">
277:                     <div>
278:                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0A3A7A] mb-6 group-hover:bg-[#00A2FF] group-hover:text-white transition-colors">
279:                         {card.icon}
280:                       </div>
281:                       <h3 className="text-[22px] font-bold text-gray-900 mb-3">{card.title}</h3>
282:                       <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3">{card.description}</p>
283:                     </div>
284:                     {card.link && (
285:                       <div className="flex items-center text-[#00A2FF] font-bold text-sm mt-4 group/link cursor-pointer w-fit">
286:                         Explore <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
287:                       </div>
288:                     )}
289:                   </div>
290:                 </div>
291:               ))}
292:             </div>
293:           </div>
294:         </section>
295:       )}
296: 
297:       {/* 5. CORE ARCHITECTURE — INTERACTIVE TABS */}
298:       {architecture && (
299:         <ArchitectureSection architecture={architecture} />
300:       )}
301: 
302:       {/* 6. ROI & BUSINESS IMPACT */}
303:       {roi && (
304:         <section className="py-24 px-6 lg:px-12 bg-white">
305:           <div className="max-w-[1300px] mx-auto">
306:             <div className="text-center mb-16" data-aos="fade-up">
307:               <h2 className="text-[36px] md:text-[46px] font-bold text-[#0A3A7A] leading-[1.1] mb-6">
308:                 {roi.title1} <span className="text-[#ffb916]">{roi.title2}</span>
309:               </h2>
310:             </div>
311:             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
312:               {roi.metrics.map((metric, idx) => (
313:                 <div key={idx} className="text-center p-8 border border-gray-100 rounded-2xl hover:shadow-[0_20px_40px_rgba(10,58,122,0.08)] transition-all" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
314:                   <div className="text-[60px] font-light text-[#00A2FF] mb-2">{metric.value}</div>
315:                   <h4 className="text-[18px] font-bold text-gray-900 mb-2">{metric.title}</h4>
316:                   <p className="text-gray-500 text-sm">{metric.description}</p>
317:                 </div>
318:               ))}
319:             </div>
320:           </div>
321:         </section>
322:       )}
323: 
324:       {/* 7. CASE STUDIES SLIDER */}
325:       {caseStudies && (
326:         <section className="py-24 lg:py-32 bg-[#020014] text-white overflow-hidden relative">
327:           <div className="max-w-[1300px] mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
328:             <div>
329:               <h4 className="text-[#ffb916] font-bold tracking-widest uppercase mb-4 text-sm">Success Stories</h4>
330:               <h2 className="text-[36px] md:text-[50px] font-normal leading-[1.1]">
331:                 {caseStudies.title}
332:               </h2>
333:             </div>
334:           </div>
335: 
336:           <div className="pl-6 lg:pl-12">
337:             <Swiper
338:               modules={[Pagination]}
339:               spaceBetween={40}
340:               slidesPerView={1.2}
341:               breakpoints={{
342:                 768: { slidesPerView: 2.2 },
343:                 1024: { slidesPerView: 3.2 }
344:               }}
345:               className="w-full pb-16"
346:             >
347:               {caseStudies.studies.map((study, idx) => (
348:                 <SwiperSlide key={idx}>
349:                   <div className="group block relative rounded-3xl overflow-hidden h-[450px]">
350:                     <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
351:                     <div className="absolute inset-0 bg-gradient-to-t from-[#020014] via-[#020014]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
352: 
353:                     <div className="absolute bottom-0 left-0 w-full p-8">
354:                       <div className="text-[#00A2FF] font-bold text-sm mb-3 uppercase tracking-wider">{study.industry}</div>
355:                       <h3 className="text-[24px] font-bold text-white mb-4 line-clamp-2">{study.title}</h3>
356:                       <div className="flex gap-6 border-t border-white/20 pt-4 mt-4">
357:                         {study.stats.map((stat, i) => (
358:                           <div key={i}>
359:                             <div className="text-xl font-bold text-[#ffb916]">{stat.value}</div>
360:                             <div className="text-[11px] text-gray-400 uppercase tracking-widest">{stat.label}</div>
361:                           </div>
362:                         ))}
363:                       </div>
364:                     </div>
365:                   </div>
366:                 </SwiperSlide>
367:               ))}
368:             </Swiper>
369:           </div>
370:         </section>
371:       )}
372: 
373:       {/* 8. COMPLIANCE & INTEGRATIONS */}
374:       {compliance && (
375:         <section className="py-20 bg-gray-50 border-y border-gray-200 overflow-hidden">
376:           <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center">
377:             <h4 className="text-gray-500 font-bold tracking-widest uppercase mb-10 text-sm">{compliance.title}</h4>
378:             <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
379:               {compliance.logos.map((logo, idx) => (
380:                 <img key={idx} src={logo} alt={`Partner ${idx}`} className="h-12 object-contain" />
381:               ))}
382:             </div>
383:           </div>
384:         </section>
385:       )}
386: 
387:       {/* 9. INTERACTIVE FAQ */}
388:       {faq && (
389:         <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
390:           <div className="max-w-[900px] mx-auto">
391:             <div className="text-center mb-16" data-aos="fade-up">
392:               <h2 className="text-[36px] md:text-[46px] font-bold text-[#0A3A7A] leading-[1.1] mb-6">
393:                 Technical <span className="text-[#ffb916]">FAQ</span>
394:               </h2>
395:             </div>
396: 
397:             <div className="space-y-4">
398:               {faq.questions.map((q, idx) => (
399:                 <details key={idx} className="group bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 [&_summary::-webkit-details-marker]:hidden" data-aos="fade-up" data-aos-delay={idx * 50}>
400:                   <summary className="flex cursor-pointer items-center justify-between p-6 text-gray-900 font-bold text-[18px]">
401:                     {q.question}
402:                     <span className="relative ml-4 flex h-6 w-6 shrink-0 items-center justify-center bg-gray-50 rounded-full group-open:bg-[#00A2FF]/10 transition-colors">
403:                       <span className="absolute h-0.5 w-3 bg-gray-500 group-open:bg-[#00A2FF] transition-transform duration-300 group-open:rotate-180"></span>
404:                       <span className="absolute h-3 w-0.5 bg-gray-500 group-open:bg-[#00A2FF] transition-transform duration-300 group-open:rotate-90"></span>
405:                     </span>
406:                   </summary>
407:                   <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
408:                     <p>{q.answer}</p>
409:                   </div>
410:                 </details>
411:               ))}
412:             </div>
413:           </div>
414:         </section>
415:       )}
416: 
417:       {/* 10. GRAND CTA SECTION */}
418:       {cta && (
419:         <section className="bg-[#0A3A7A] py-24 lg:py-32 px-6 relative overflow-hidden">
420:           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-20 object-cover mix-blend-overlay"></div>
421:           <div className="absolute inset-0 bg-gradient-to-t from-[#040026] to-transparent opacity-90"></div>
422: 
423:           <div className="max-w-[1000px] mx-auto text-center relative z-10" data-aos="zoom-in">
424:             <h4 className="text-[#ffb916] font-bold tracking-widest uppercase mb-6">{cta.subtitle}</h4>
425:             <h2 className="text-[40px] md:text-[64px] font-normal text-white mb-8 leading-[1.1] tracking-tight">
426:               {cta.title1} <span className="font-bold text-[#00A2FF]">{cta.title2}</span>
427:             </h2>
428:             <p className="text-blue-100 mb-12 text-[18px] md:text-[22px] max-w-2xl mx-auto leading-relaxed">
429:               {cta.description}
430:             </p>
431:             <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
432:               <Link href={cta.button1.href} className="w-full sm:w-auto px-12 py-5 bg-[#ffb916] border-2 border-[#ffb916] cursor-pointer text-white font-bold text-[18px] transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 rounded-sm hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1]">
433:                 {cta.button1.text}
434:               </Link>
435:               {cta.button2 && (
436:                 <Link href={cta.button2.href} className="w-full sm:w-auto px-12 py-5 border border-white/30 text-white font-bold text-[18px] hover:bg-white/10 transition-colors rounded-sm">
437:                   {cta.button2.text}
438:                 </Link>
439:               )}
440:             </div>
441:           </div>
442:         </section>
443:       )}
444: 
445:     </div>
446:   );
447: }
448: 
449: 
The above content shows the entire, complete file contents of the requested file.
