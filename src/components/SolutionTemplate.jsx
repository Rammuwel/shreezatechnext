"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home as HomeIcon, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function SolutionTemplate({
  breadcrumb,
  hero,
  challenge,
  architecture,
  features,
  roi,
  caseStudies,
  compliance,
  faq,
  cta
}) {
  return (
    <div className="font-sans text-gray-800 selection:bg-[#00A2FF] selection:text-white pt-[80px]">
      
      {/* 1. GLASSMORPHISM HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#040026]">
        {/* Background Video or Image Layer */}
        <div className="absolute inset-0 z-0">
          <img src={hero.bgImage} alt="Hero Background" className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040026]/80 via-transparent to-[#040026]"></div>
        </div>

        {/* Abstract Geometry */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0A3A7A] rounded-full mix-blend-screen filter blur-[120px] opacity-50 z-0 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[120px] opacity-20 z-0"></div>

        <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full pt-12 pb-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 text-left" data-aos="fade-right">
            {hero.badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#00A2FF' }}></span>
                <span className="text-white text-sm font-bold tracking-widest uppercase">{hero.badge}</span>
              </div>
            )}
            <h1 className="text-[50px] md:text-[70px] lg:text-[85px] leading-[1.05] font-normal mb-8 text-white tracking-tight">
              {hero.title1} <br />
              <span className={`text-transparent bg-clip-text font-bold drop-shadow-2xl ${hero.title2Gradient || 'bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]'}`}>
                {hero.title2}
              </span>
            </h1>
            <p className="text-[20px] md:text-[24px] font-light text-gray-300 mb-12 max-w-2xl leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href={hero.primaryButton.href} className="inline-flex items-center justify-center px-10 py-5 bg-[#D4AF37] text-white font-bold text-[18px] hover:bg-[#0A3A7A] hover:text-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 rounded-sm group">
                {hero.primaryButton.text}
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </div>

          <div className="lg:w-2/5 w-full" data-aos="fade-left" data-aos-delay="200">
            {/* Glassmorphism Data Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00A2FF] to-transparent opacity-20 blur-2xl"></div>
              <h3 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                <Activity size={16} /> Live Impact Metrics
              </h3>
              <div className="space-y-6">
                {hero.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                      <p className="text-white font-bold text-2xl">{stat.value}</p>
                    </div>
                    <div className="text-[#00A2FF] font-semibold text-sm bg-[#00A2FF]/10 px-2 py-1 rounded">
                      {stat.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMB */}
      <div className="w-full bg-[#040026] border-b border-white/10 relative z-20">
        <div className="max-w-[1300px] mx-auto flex py-4 px-6 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex items-center text-[13px] text-gray-400 font-medium">
            <Link href="/" className="hover:text-white transition-colors focus-visible:outline-none rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={14} />
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-600" />
            <Link href={breadcrumb.parentHref} className="hover:text-white transition-colors focus-visible:outline-none rounded">
              {breadcrumb.parentLabel}
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-600" />
            <span className="text-[#00A2FF] font-bold" aria-current="page">{breadcrumb.label}</span>
          </nav>
        </div>
      </div>

      {/* 3. THE INDUSTRY CHALLENGE (DARK MODE SPLIT) */}
      {challenge && (
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#020014] text-white relative">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div data-aos="fade-right">
              <h4 className="text-[#00A2FF] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
                <span className="w-8 h-px bg-[#00A2FF]"></span> The Challenge
              </h4>
              <h2 className="text-[36px] md:text-[50px] font-normal leading-[1.1] mb-8">
                {challenge.title1} <span className="font-bold text-[#D4AF37]">{challenge.title2}</span>
              </h2>
              <div className="text-gray-400 text-[18px] leading-[1.8] space-y-6 mb-10">
                {challenge.description.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <ul className="space-y-4">
                {challenge.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-300 font-medium">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-[#0A3A7A]/40 to-transparent absolute -inset-10 blur-3xl -z-10"></div>
              <img src={challenge.image} alt="Industry Challenge" className="rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 relative z-10 w-full object-cover" />
              {/* Floating Stat Box */}
              <div className="absolute -bottom-10 -left-10 bg-[#040026] border border-[#00A2FF]/30 p-6 rounded-2xl shadow-2xl z-20 animate-[bounce_5s_infinite]">
                <p className="text-[40px] font-bold text-[#00A2FF] mb-1">{challenge.floatingStat.value}</p>
                <p className="text-gray-400 text-sm">{challenge.floatingStat.label}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. BENTO-BOX FEATURE GRID */}
      {features && (
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h4 className="text-[#0A3A7A] font-bold tracking-widest uppercase mb-4 text-sm">Capabilities</h4>
              <h2 className="text-[36px] md:text-[50px] font-bold text-[#111] leading-[1.1] mb-6">
                {features.title1} <span className="text-[#00A2FF]">{features.title2}</span>
              </h2>
              <p className="text-[18px] text-gray-600 max-w-3xl mx-auto">{features.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
              {features.bentoCards.map((card, idx) => (
                <div key={idx} className={`bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,162,255,0.1)] transition-all duration-300 group overflow-hidden relative ${card.span || 'col-span-1 md:col-span-1'}`} data-aos="fade-up" data-aos-delay={(idx+1)*50}>
                  {/* Decorative Background Element */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#0A3A7A] mb-6 group-hover:bg-[#00A2FF] group-hover:text-white transition-colors">
                        {card.icon}
                      </div>
                      <h3 className="text-[22px] font-bold text-gray-900 mb-3">{card.title}</h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3">{card.description}</p>
                    </div>
                    {card.link && (
                      <div className="flex items-center text-[#00A2FF] font-bold text-sm mt-4 group/link cursor-pointer w-fit">
                        Explore <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CORE ARCHITECTURE BLUEPRINT */}
      {architecture && (
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#0A3A7A] text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
           <div className="max-w-[1300px] mx-auto relative z-10 text-center">
             <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4 text-sm">System Architecture</h4>
             <h2 className="text-[36px] md:text-[50px] font-normal leading-[1.1] mb-16">
               {architecture.title}
             </h2>
             
             <div className="bg-[#040026]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-16 text-left relative overflow-hidden" data-aos="zoom-in">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A2FF] via-[#D4AF37] to-[#00A2FF]"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  {architecture.layers.map((layer, idx) => (
                    <div key={idx} className="relative">
                      {idx < architecture.layers.length - 1 && (
                        <div className="hidden md:block absolute top-8 right-[-3rem] w-12 h-px bg-white/20 border-dashed border-b border-white/20"></div>
                      )}
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#00A2FF] mb-6">
                        {layer.icon}
                      </div>
                      <h3 className="text-[24px] font-bold text-white mb-4">{layer.title}</h3>
                      <ul className="space-y-3">
                        {layer.items.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300 font-medium text-sm">
                            <CheckCircle2 size={16} className="text-[#D4AF37] mr-3 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </section>
      )}

      {/* 6. ROI & BUSINESS IMPACT */}
      {roi && (
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-[1300px] mx-auto">
             <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-[36px] md:text-[46px] font-bold text-[#0A3A7A] leading-[1.1] mb-6">
                {roi.title1} <span className="text-[#D4AF37]">{roi.title2}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roi.metrics.map((metric, idx) => (
                <div key={idx} className="text-center p-8 border border-gray-100 rounded-2xl hover:shadow-[0_20px_40px_rgba(10,58,122,0.08)] transition-all" data-aos="fade-up" data-aos-delay={(idx+1)*100}>
                  <div className="text-[60px] font-light text-[#00A2FF] mb-2">{metric.value}</div>
                  <h4 className="text-[18px] font-bold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-gray-500 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. CASE STUDIES SLIDER */}
      {caseStudies && (
        <section className="py-24 lg:py-32 bg-[#020014] text-white overflow-hidden relative">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
            <div>
              <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4 text-sm">Success Stories</h4>
              <h2 className="text-[36px] md:text-[50px] font-normal leading-[1.1]">
                {caseStudies.title}
              </h2>
            </div>
          </div>

          <div className="pl-6 lg:pl-12">
            <Swiper
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1.2}
              breakpoints={{
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 }
              }}
              className="w-full pb-16"
            >
              {caseStudies.studies.map((study, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group block relative rounded-3xl overflow-hidden h-[450px]">
                    <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020014] via-[#020014]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="text-[#00A2FF] font-bold text-sm mb-3 uppercase tracking-wider">{study.industry}</div>
                      <h3 className="text-[24px] font-bold text-white mb-4 line-clamp-2">{study.title}</h3>
                      <div className="flex gap-6 border-t border-white/20 pt-4 mt-4">
                        {study.stats.map((stat, i) => (
                          <div key={i}>
                            <div className="text-xl font-bold text-[#D4AF37]">{stat.value}</div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-widest">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* 8. COMPLIANCE & INTEGRATIONS */}
      {compliance && (
        <section className="py-20 bg-gray-50 border-y border-gray-200 overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center">
            <h4 className="text-gray-500 font-bold tracking-widest uppercase mb-10 text-sm">{compliance.title}</h4>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {compliance.logos.map((logo, idx) => (
                <img key={idx} src={logo} alt={`Partner ${idx}`} className="h-12 object-contain" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. INTERACTIVE FAQ */}
      {faq && (
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-[36px] md:text-[46px] font-bold text-[#0A3A7A] leading-[1.1] mb-6">
                Technical <span className="text-[#D4AF37]">FAQ</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              {faq.questions.map((q, idx) => (
                <details key={idx} className="group bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 [&_summary::-webkit-details-marker]:hidden" data-aos="fade-up" data-aos-delay={idx*50}>
                  <summary className="flex cursor-pointer items-center justify-between p-6 text-gray-900 font-bold text-[18px]">
                    {q.question}
                    <span className="relative ml-4 flex h-6 w-6 shrink-0 items-center justify-center bg-gray-50 rounded-full group-open:bg-[#00A2FF]/10 transition-colors">
                      <span className="absolute h-0.5 w-3 bg-gray-500 group-open:bg-[#00A2FF] transition-transform duration-300 group-open:rotate-180"></span>
                      <span className="absolute h-3 w-0.5 bg-gray-500 group-open:bg-[#00A2FF] transition-transform duration-300 group-open:rotate-90"></span>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    <p>{q.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. GRAND CTA SECTION */}
      {cta && (
        <section className="bg-[#0A3A7A] py-24 lg:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-20 object-cover mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040026] to-transparent opacity-90"></div>

          <div className="max-w-[1000px] mx-auto text-center relative z-10" data-aos="zoom-in">
            <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-6">{cta.subtitle}</h4>
            <h2 className="text-[40px] md:text-[64px] font-normal text-white mb-8 leading-[1.1] tracking-tight">
              {cta.title1} <span className="font-bold text-[#00A2FF]">{cta.title2}</span>
            </h2>
            <p className="text-blue-100 mb-12 text-[18px] md:text-[22px] max-w-2xl mx-auto leading-relaxed">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href={cta.button1.href} className="w-full sm:w-auto px-12 py-5 bg-[#D4AF37] text-white font-bold text-[18px] hover:bg-[#0A3A7A] hover:text-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 rounded-sm">
                {cta.button1.text}
              </Link>
              {cta.button2 && (
                <Link href={cta.button2.href} className="w-full sm:w-auto px-12 py-5 border border-white/30 text-white font-bold text-[18px] hover:bg-white/10 transition-colors rounded-sm">
                  {cta.button2.text}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
