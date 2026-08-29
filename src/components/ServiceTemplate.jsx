"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ServiceTemplate({
  breadcrumb,
  hero,
  stats,
  philosophy,
  ecosystem,
  security,
  expertise,
  process,
  benefits,
  faq,
  cta
}) {
  return (
    <div className="font-sans text-gray-800 selection:bg-[#ffb916] selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="min-h-[450px] md:min-h-[600px] lg:h-[70vh] w-full relative overflow-hidden bg-[#040026] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={hero.slides?.[0]?.image || hero.bgImage} alt="Hero Background" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040026] via-[#040026]/80 to-transparent"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center pt-32 md:pt-48 relative z-10 w-full">
          <div className="max-w-4xl" data-aos="fade-right">

            <h1 className="text-[24px] leading-[32px] md:text-[56px] md:leading-[64px] font-normal mb-4 md:mb-6 text-white text-balance">
              {hero.slides?.[0]?.title1 || hero.title1} <br />
              <span className={hero.slides?.[0]?.title2Gradient || hero.title2Gradient || "text-[#ffb916] font-normal"}>
                {hero.slides?.[0]?.title2 || hero.title2}
              </span>
            </h1>
            {(hero.slides?.[0]?.description || hero.description) && (
              <p className="text-[16px] leading-[26px] md:text-[20px] md:leading-[34px] font-normal text-gray-300 max-w-2xl mb-8 md:mb-10 text-balance">
                {hero.slides?.[0]?.description || hero.description}
              </p>
            )}

          </div>
        </div>
      </section>

      {/* 2. BREADCRUMB */}
      <div className="w-full bg-white relative z-20 border-0 border-transparent outline-none shadow-none">
        <div className="max-w-[1300px] mx-auto flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center py-4 px-6 lg:px-12 gap-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-start text-[13px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#0A3A7A] transition-colors focus-visible:outline-none rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={14} />
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-300" />
            <Link href={breadcrumb.parentHref || "/services"} className="hover:text-[#0A3A7A] transition-colors focus-visible:outline-none rounded">
              {breadcrumb.parentLabel || "Services"}
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-300" />
            <span className="text-[#0A3A7A] font-bold" aria-current="page">{breadcrumb.label}</span>
          </nav>
        </div>
      </div>

      {/* 3. CORE PHILOSOPHY / FUTURE-PROOF SECTION */}
      {philosophy && (
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 -z-10"></div>

          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
            <div className="lg:col-span-6 space-y-8" data-aos="fade-right">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-[#ffb916]"></div>
                <span className="text-[#0A3A7A] font-bold tracking-widest uppercase text-sm">{philosophy.tagline || 'Our Philosophy'}</span>
              </div>
              <h2 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-normal text-[#111] leading-[1.1]">
                {philosophy.title1} <span className="text-[#0A3A7A] font-bold">{philosophy.title2}</span>
              </h2>
              <div className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] text-gray-600 space-y-6">
                {Array.isArray(philosophy.description)
                  ? philosophy.description.map((p, i) => <p key={i}>{p}</p>)
                  : <p>{philosophy.description}</p>}
              </div>

              {philosophy.points && (
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {philosophy.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={20} className="text-[#0A3A7A]" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-bold mb-1">{point.title}</h4>
                        <p className="text-sm text-gray-500">{point.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-6 relative h-[600px] hidden md:block" data-aos="fade-left">
              <div className="absolute top-0 right-10 w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(10,58,122,0.15)] z-20 transform hover:-translate-y-4 transition-transform duration-700">
                <img src={philosophy.image1} alt="Philosophy Main" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3A7A]/40 to-transparent mix-blend-multiply"></div>
              </div>
              <div className="absolute bottom-10 left-10 w-[300px] h-[350px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-30 border-8 border-white transform hover:scale-105 transition-transform duration-700">
                <img src={philosophy.image2} alt="Philosophy Overlay" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ffb916]/30 to-[#0A3A7A]/30 mix-blend-overlay"></div>
              </div>
              <div className="absolute top-20 left-0 w-32 h-32 bg-[radial-gradient(#ffb916_2px,transparent_2px)] [background-size:16px_16px] opacity-30 z-10 animate-pulse"></div>
            </div>
          </div>
        </section>
      )}

      {/* 4. UNIFIED DEVELOPMENT APPROACH (CARDS) */}
      {ecosystem && (
        <section id="capabilities" className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-[#f8fbff] relative">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-20" data-aos="fade-up">
              <h2 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-bold text-[#0A3A7A] mb-6">
                {ecosystem.title1} <span className="text-[#ffb916]">{ecosystem.title2}</span>
              </h2>
              <p className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] text-gray-600">
                {ecosystem.description}
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-${Math.min(ecosystem.cards.length, 3)} gap-10 justify-center`}>
              {ecosystem.cards.map((card, index) => (
                <div key={index} className="group bg-white rounded-[24px] p-10 text-left shadow-[0_10px_40px_rgba(10,58,122,0.05)] border border-transparent hover:border-[#0A3A7A]/10 hover:shadow-[0_20px_50px_rgba(10,58,122,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center text-[#0A3A7A] group-hover:scale-110 group-hover:text-[#ffb916] transition-all shadow-sm relative z-10">
                    {card.icon}
                  </div>
                  <h3 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-4 relative z-10">{card.title}</h3>
                  <p className="text-[16px] text-gray-600 leading-[1.8] mb-8 relative z-10">
                    {card.description}
                  </p>
                  <ul className="space-y-3 relative z-10">
                    {card.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#ffb916] rounded-full mr-3"></div>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SECURITY & COMPLIANCE */}
      {security && (
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-[#040026] text-white relative overflow-hidden">
          <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[#0A3A7A] rounded-full mix-blend-screen filter blur-[150px] opacity-60"></div>
          <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-[#ffb916] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

          <div className="max-w-[1300px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
              <div className="lg:col-span-5" data-aos="fade-right">
                <h2 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-bold text-white mb-6">
                  {security.title1.split('<br/>').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
                  <span className="text-[#00A2FF]">{security.title2}</span>
                </h2>
                <p className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] text-gray-400 mb-10">
                  {security.description}
                </p>
                {security.button && (
                  <Link href={security.button.href} className="inline-flex items-center justify-center text-center w-full sm:w-auto px-4 py-3 md:px-8 md:py-4 text-sm md:text-base bg-[#ffb916] border-2 border-[#ffb916] cursor-pointer text-white font-bold transition-all group hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1] transform hover:-translate-y-1 hover:shadow-lg">
                    <span>{security.button.text}</span>
                    <ChevronRight className="ml-2 shrink-0 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                )}
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {security.cards.map((card, i) => (
                  <div key={i} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md rounded-2xl" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                    <div className="mb-6">{card.icon}</div>
                    <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4">{card.title}</h3>
                    <p className="text-[15px] text-gray-400 leading-[1.6]">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. SOLUTIONS FOCUS */}
      {expertise && (
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-white">
          <div className="max-w-[1300px] mx-auto text-center mb-20" data-aos="fade-up">
            <h2 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-bold text-[#0A3A7A] mb-6">
              {expertise.title}
            </h2>
            <p className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] text-gray-600 max-w-2xl mx-auto">
              {expertise.description}
            </p>
          </div>

          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-gray-200 pb-24">
            {expertise.cards.map((card, i) => (
              <div key={i} className="text-center group" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className="w-full h-[250px] bg-gray-50 rounded-2xl mb-8 overflow-hidden relative">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#0A3A7A]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-4 group-hover:text-[#ffb916] transition-colors">{card.title}</h3>
                <p className="text-[16px] text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. DELIVERY PROCESS */}
      {process && (
        <section className="pb-24 lg:pb-32 pt-12 lg:pt-16 px-6 lg:px-12 bg-[#040026] text-white relative overflow-hidden">
          <style>{`
              .hide-scroll::-webkit-scrollbar {
                 display: none;
              }
              .hide-scroll {
                 -ms-overflow-style: none;
                 scrollbar-width: none;
              }
           `}</style>
          <div className="max-w-[1300px] mx-auto relative z-10">
            <h2 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-normal text-white text-center mb-10" data-aos="fade-up">
              {process.title1} <span className="font-bold text-[#ffb916]">{process.title2}</span>
            </h2>

            <div className="relative mx-auto max-w-5xl h-[650px] overflow-y-auto pr-4 scroll-smooth hide-scroll">
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-[0.02] z-0 top-0 bottom-0 sticky">
                <span className="text-[350px] font-black leading-none font-sans tracking-tighter text-white">&lt;/&gt;</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24 relative z-10 pt-2 pb-10 pl-6 border-l border-white/10 ml-4 md:ml-0 md:border-none md:pl-0">
                {process.steps.map((step, index) => (
                  <div key={index} className="text-left relative">
                    <div className="absolute -left-[35px] top-4 w-4 h-4 bg-[#ffb916] rounded-full shadow-[0_0_15px_#ffb916] md:hidden"></div>
                    <div className="text-[80px] font-light leading-none mb-4 text-white/10 -mt-8 -ml-4 absolute -z-10 select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className="text-[22px] md:text-[26px] font-bold text-[#ffb916] mb-4">{step.title}</h3>
                    <p className="text-[16px] text-gray-300 leading-[1.8]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. BUSINESS BENEFITS GRID */}
      {benefits && (
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-white border-t border-gray-100">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-bold text-[#0A3A7A] mb-6">
                {benefits.title1} <span className="text-[#ffb916]">{benefits.title2}</span>
              </h2>
              <p className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] text-gray-600 max-w-3xl mx-auto">{benefits.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.cards.map((card, idx) => (
                <div key={idx} className="bg-gray-50 rounded-[20px] p-8 hover:bg-blue-50 transition-colors duration-300 group" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0A3A7A] mb-6 group-hover:scale-110 group-hover:text-[#ffb916] transition-all">
                    {card.icon}
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. FAQ SECTION */}
      {faq && (
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-[#f8fbff]">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-bold text-[#0A3A7A] mb-6">
                Frequently Asked <span className="text-[#ffb916]">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faq.questions.map((q, idx) => (
                <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden" data-aos="fade-up" data-aos-delay={idx * 50}>
                  <summary className="flex cursor-pointer items-center justify-between p-6 text-gray-900 font-bold text-[16px] md:text-[18px]">
                    {q.question}
                    <span className="relative ml-4 flex h-6 w-6 shrink-0 items-center justify-center">
                      <span className="absolute h-0.5 w-4 bg-[#ffb916] transition-transform duration-300 group-open:rotate-180"></span>
                      <span className="absolute h-4 w-0.5 bg-[#ffb916] transition-transform duration-300 group-open:rotate-90"></span>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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
        <section className="bg-[#0A3A7A] py-10 md:py-20 lg:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/services-hero.jpg')] opacity-10 object-cover mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040026] to-transparent opacity-80"></div>

          <div className="max-w-[1000px] mx-auto text-center relative z-10" data-aos="zoom-in">
            <h4 className="text-[#ffb916] font-bold tracking-widest uppercase mb-6">{cta.subtitle}</h4>
            <h2 className="text-[24px] leading-[32px] md:text-[56px] md:leading-[64px] font-normal text-white mb-8 tracking-tight">
              {cta.title1} <span className="font-bold text-[#ffb916]">{cta.title2}</span>
            </h2>
            <p className="text-blue-100 mb-12 text-[16px] leading-[26px] md:text-[22px] md:leading-[32px] max-w-2xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6" data-aos="fade-up" data-aos-delay="200">
              {(cta.button1 || cta.primaryButton) && (
                <Link href={cta.button1?.href || cta.primaryButton?.href || "/contact-us"} className="inline-block text-center w-full sm:w-auto px-6 py-3 md:px-10 md:py-4 text-sm md:text-base bg-white text-[#0A3A7A] font-bold rounded shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300">
                  {cta.button1?.text || cta.primaryButton?.text}
                </Link>
              )}
              {(cta.button2 || cta.secondaryButton) && (
                <Link href={cta.button2?.href || cta.secondaryButton?.href || "/contact-us"} className="inline-block text-center w-full sm:w-auto px-6 py-3 md:px-10 md:py-4 text-sm md:text-base bg-transparent border border-white/30 text-white font-bold rounded transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                  {cta.button2?.text || cta.secondaryButton?.text}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

