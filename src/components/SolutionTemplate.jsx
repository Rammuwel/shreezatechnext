"use client";
import React, { useState } from 'react';
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
  process,
  aiFuture,
  caseStudies,
  compliance,
  faq,
  cta
}) {
  const [activeTab, setActiveTab] = useState('capabilities');

  return (
    <div className="font-sans text-gray-800 selection:bg-[#ffb916] selection:text-white ">

      {/* 1. GLASSMORPHISM HERO SECTION */}
      <section className="relative min-h-[450px] md:min-h-[600px] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-[#040026]">
        {/* Background Video or Image Layer */}
        <div className="absolute inset-0 z-0">
          <img src={hero.bgImage} alt="Hero Background" className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040026]/80 via-transparent to-[#040026]"></div>
        </div>

        {/* Abstract Geometry */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0A3A7A] rounded-full mix-blend-screen filter blur-[120px] opacity-50 z-0 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#ffb916] rounded-full mix-blend-screen filter blur-[120px] opacity-20 z-0"></div>

        <div className="max-w-[1300px] mx-auto px-6 relative z-10 w-full pt-32 lg:pt-48 pb-24 flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="lg:w-3/5 text-left" data-aos="fade-right">

            <h1 className="text-[50px] md:text-[70px] lg:text-[85px] leading-[1.05] font-normal mb-8 text-white tracking-tight">
              {hero.title1} <br />
              <span className={`text-transparent bg-clip-text font-bold ${hero.title2Gradient || 'bg-gradient-to-r from-[#ffb916] to-[#00f2fe]'}`}>
                {hero.title2}
              </span>
            </h1>
            <p className="text-[20px] md:text-[24px] font-light text-gray-300 mb-12 max-w-2xl leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-6">
              {hero.primaryButton && (
                <Link href={hero.primaryButton.href} className="inline-flex items-center justify-center gap-2 bg-[#ffb916] text-[#0A3A7A] px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
                  {hero.primaryButton.text} <ArrowRight size={20} />
                </Link>
              )}
            </div>
          </div>


        </div>
      </section>

      {/* 2. BREADCRUMB */}
      <div className={`w-full ${challenge ? 'bg-[#f8fbff]' : 'bg-white'} relative z-20 border-0 border-transparent outline-none shadow-none`}>
        <div className="max-w-[1300px] mx-auto flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center py-4 px-6 lg:px-12 gap-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-start text-[13px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#ffb916] transition-colors focus-visible:outline-none rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={14} />
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-600" />
            <Link href={breadcrumb.parentHref} className="hover:text-[#ffb916] transition-colors focus-visible:outline-none rounded">
              {breadcrumb.parentLabel}
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-600" />
            <span className="text-[#ffb916] font-bold" aria-current="page">{breadcrumb.label}</span>
          </nav>
        </div>
      </div>

      {/* 3. THE INDUSTRY CHALLENGE (PROFESSIONAL B2B LAYOUT) */}
      {challenge && (
        <section className="pt-16 pb-24 lg:pt-20 lg:pb-32 px-6 lg:px-12 text-[#212529] bg-[#f8fbff] relative overflow-hidden">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Left Side: Content & Pain Points Grid */}
            <div className="flex flex-col justify-center order-2 lg:order-1" data-aos="fade-right">
              <div className="mb-12">
                <h4 className="text-[#0A3A7A] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#0A3A7A]"></span> The Challenge
                </h4>
                <h2 className="text-[36px] md:text-[46px] leading-[1.2] font-light mb-6 text-[#212529]">
                  {challenge.title1} <span className="font-bold text-[#0A3A7A] block">{challenge.title2}</span>
                </h2>

                <div className="text-gray-600 text-[18px] leading-[1.8] space-y-6 border-l-4 border-[#ffb916] pl-6 py-2">
                  {challenge.description.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>

              {/* Pain Points as Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {challenge.painPoints.map((point, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Novac-style Diagonal Overlap Graphic */}
            <div className="relative h-[450px] md:h-[600px] w-full hidden lg:block order-1 lg:order-2" data-aos="fade-left">
              <div className="absolute inset-0 w-full h-full">

                {/* Main Image (Parallelogram leaning left) */}
                <div
                  className="absolute left-[10%] top-0 w-[80%] h-full z-10 overflow-hidden"
                  style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0% 100%)' }}
                >
                  <img
                    src={challenge.image}
                    alt="Industry Challenge"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Left Translucent Triangle (Pointing Down) */}
                <div
                  className="absolute left-[5%] top-0 w-[40%] h-full z-20 bg-[#ffb916] opacity-50 mix-blend-multiply"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                ></div>

                {/* Right Translucent Triangle (Pointing Up) */}
                <div
                  className="absolute right-[5%] bottom-0 w-[40%] h-full z-20 bg-[#ffb916] opacity-50 mix-blend-multiply"
                  style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
                ></div>

              </div>
            </div>

            {/* Mobile version of image */}
            <div className="relative h-[300px] w-full lg:hidden rounded-2xl overflow-hidden shadow-lg order-1 mb-8" data-aos="fade-up">
              <img
                src={challenge.image}
                alt="Industry Challenge"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </section>
      )}

      {/* 3.5. QUANTIFIABLE IMPACT (ROI) */}
      {roi && (
        <section className="py-10 md:py-16 px-6 lg:px-12 bg-white border-b border-gray-100">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-[36px] md:text-[42px] font-bold text-[#0A3A7A] leading-[1.1] mb-4">
                {roi.title1} <span className="text-[#ffb916]">{roi.title2}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roi.metrics.map((metric, idx) => (
                <div key={idx} className="text-center p-8 border border-gray-100 rounded-2xl hover:shadow-[0_20px_40px_rgba(10,58,122,0.08)] transition-all bg-white" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                  <div className="text-[60px] font-light text-[#ffb916] mb-2">{metric.value}</div>
                  <h4 className="text-[18px] font-bold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-gray-500 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. COMBINED CAPABILITIES & ARCHITECTURE TABS */}
      {(features || architecture) && (
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1300px] mx-auto">

            {/* Unified Header & Tab Toggle */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h4 className="text-[#0A3A7A] font-bold tracking-widest uppercase mb-4 text-sm">Capabilities & Architecture</h4>
              <h2 className="text-[36px] md:text-[50px] font-bold text-[#111] leading-[1.1] mb-10">
                {features?.title1 || architecture?.title} <span className="text-[#ffb916]">{features?.title2 || ''}</span>
              </h2>

              {/* Tab Toggle */}
              {features && architecture && (
                <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 shadow-sm mb-6">
                  <button
                    onClick={() => setActiveTab('capabilities')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'capabilities' ? 'bg-[#0A3A7A] text-white shadow-md' : 'text-gray-500 hover:text-[#0A3A7A]'}`}
                  >
                    Business Capabilities
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'architecture' ? 'bg-[#0A3A7A] text-white shadow-md' : 'text-gray-500 hover:text-[#0A3A7A]'}`}
                  >
                    Technical Architecture
                  </button>
                </div>
              )}
            </div>

            {/* TAB 1: Capabilities */}
            {activeTab === 'capabilities' && features && (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in zoom-in duration-500">
                {features.bentoCards.map((card, idx) => (
                  <div key={idx} className={`bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,162,255,0.1)] transition-all duration-300 group overflow-hidden relative ${card.span || 'col-span-1 md:col-span-1'}`} data-aos="fade-up" data-aos-delay={(idx + 1) * 50}>
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#0A3A7A] mb-6 group-hover:bg-[#ffb916] group-hover:text-white transition-colors">
                          {card.icon}
                        </div>
                        <h3 className="text-[22px] font-bold text-gray-900 mb-3">{card.title}</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: Architecture */}
            {activeTab === 'architecture' && architecture && (
              <div className="bg-[#040026] text-white rounded-3xl p-10 lg:p-16 relative overflow-hidden animate-in fade-in zoom-in duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffb916] via-[#ffb916] to-[#ffb916]"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  {architecture.layers.map((layer, idx) => (
                    <div key={idx} className="relative">
                      {idx < architecture.layers.length - 1 && (
                        <div className="hidden md:block absolute top-8 right-[-3rem] w-12 h-px bg-white/20 border-dashed border-b border-white/20"></div>
                      )}
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#ffb916] mb-6">
                        {layer.icon}
                      </div>
                      <h3 className="text-[24px] font-bold text-white mb-4">{layer.title}</h3>
                      <ul className="space-y-3">
                        {layer.items.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300 font-medium text-sm">
                            <CheckCircle2 size={16} className="text-[#ffb916] mr-3 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      )}


      {/* 5.5. PROCESS SECTION */}
      {process && (
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-[#020012] text-white relative overflow-hidden">
          <div className="max-w-[1300px] mx-auto relative z-10 text-center">
            <h4 className="text-[#ffb916] font-bold tracking-widest uppercase mb-4 text-sm">Our Process</h4>
            <h2 className="text-[36px] md:text-[50px] font-bold text-white leading-[1.1] mb-16">
              {process.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.steps?.map((step, idx) => (
                <div key={idx} className="relative p-6 border border-white/10 rounded-3xl hover:shadow-[0_20px_50px_rgba(255,185,22,0.1)] transition-all bg-white/5 backdrop-blur-sm text-left group">
                  <div className="text-[60px] font-bold text-white/5 absolute right-4 top-4 group-hover:text-[#ffb916]/20 transition-colors">0{idx + 1}</div>
                  <h3 className="text-[20px] font-bold text-white mb-3 relative z-10">{step.title}</h3>
                  <p className="text-gray-400 text-sm relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* 6.5. AI & FUTURE INNOVATION */}
      {aiFuture && (
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-white text-[#212529] relative overflow-hidden border-t border-gray-100">
          <div className="max-w-[1300px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h4 className="text-[#0A3A7A] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#0A3A7A]"></span> Future Ready
                </h4>
                <h2 className="text-[36px] md:text-[50px] font-normal leading-[1.1] mb-6 text-[#212529]">
                  {aiFuture.title1} <span className="font-bold text-[#0A3A7A] block">{aiFuture.title2}</span>
                </h2>
                <p className="text-gray-600 text-[18px] leading-[1.8] mb-8">{aiFuture.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aiFuture.features?.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#ffb916]" size={20} />
                      <span className="text-sm font-medium text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="aspect-square rounded-full bg-gradient-to-tr from-[#ffb916]/10 to-transparent absolute inset-0 blur-3xl -z-10"></div>
                {/* Modern Layered Hologram Stack Effect (Static) */}
                <div className="relative z-10 w-full h-[450px]">

                  {/* Decorative Tech Ring */}
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 border-[16px] border-[#ffb916]/20 rounded-full scale-110"></div>

                  {/* Back Layer (Echo) */}
                  <div className="absolute top-[10%] -right-[5%] w-[85%] h-[85%] rounded-3xl overflow-hidden opacity-40 blur-[2px] translate-x-4 rotate-[3deg]">
                    <img src={aiFuture.image || "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-70" />
                    <div className="absolute inset-0 bg-[#0A3A7A] mix-blend-overlay"></div>
                  </div>

                  {/* Middle Layer (Accent Border) */}
                  <div className="absolute top-[5%] left-[5%] w-[85%] h-[85%] rounded-3xl border-2 border-[#ffb916] opacity-100 -translate-x-2 -translate-y-2 -rotate-[2deg] z-10"></div>

                  {/* Front Layer (Main Image) */}
                  <div className="absolute top-0 left-0 w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(10,58,122,0.15)] -translate-x-4 -translate-y-4 z-20">
                    <img src={aiFuture.image || "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. CASE STUDIES SLIDER */}
      {caseStudies && (
        <section className="py-10 md:py-20 lg:py-32 bg-[#020012] text-white overflow-hidden relative">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
            <div>
              <h4 className="text-[#ffb916] font-bold tracking-widest uppercase mb-4 text-sm">Success Stories</h4>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020012] via-[#020012]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="text-[#ffb916] font-bold text-sm mb-3 uppercase tracking-wider">{study.industry}</div>
                      <h3 className="text-[24px] font-bold text-white mb-4 line-clamp-2">{study.title}</h3>
                      <div className="flex gap-6 border-t border-white/20 pt-4 mt-4">
                        {study.stats.map((stat, i) => (
                          <div key={i}>
                            <div className="text-xl font-bold text-[#ffb916]">{stat.value}</div>
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
        <section className="py-12 md:py-20 bg-gray-50 border-y border-gray-200 overflow-hidden">
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
        <section className="py-10 md:py-20 lg:py-32 px-6 lg:px-12 bg-white">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-[36px] md:text-[46px] font-bold text-[#0A3A7A] leading-[1.1] mb-6">
                Technical <span className="text-[#ffb916]">FAQ</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faq.questions.map((q, idx) => (
                <details key={idx} className="group bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 [&_summary::-webkit-details-marker]:hidden" data-aos="fade-up" data-aos-delay={idx * 50}>
                  <summary className="flex cursor-pointer items-center justify-between p-6 text-gray-900 font-bold text-[18px]">
                    {q.question}
                    <span className="relative ml-4 flex h-6 w-6 shrink-0 items-center justify-center bg-gray-50 rounded-full group-open:bg-[#ffb916]/10 transition-colors">
                      <span className="absolute h-0.5 w-3 bg-gray-500 group-open:bg-[#ffb916] transition-transform duration-300 group-open:rotate-180"></span>
                      <span className="absolute h-3 w-0.5 bg-gray-500 group-open:bg-[#ffb916] transition-transform duration-300 group-open:rotate-90"></span>
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
        <section className="bg-[#0A3A7A] py-10 md:py-20 lg:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-20 object-cover mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040026] to-transparent opacity-90"></div>

          <div className="max-w-[1000px] mx-auto text-center relative z-10" data-aos="zoom-in">
            <h4 className="text-[#ffb916] font-bold tracking-widest uppercase mb-6">{cta.subtitle}</h4>
            <h2 className="text-[40px] md:text-[64px] font-normal text-white mb-8 leading-[1.1] tracking-tight">
              {cta.title1} <span className="font-bold text-[#ffb916]">{cta.title2}</span>
            </h2>
            <p className="text-blue-100 mb-12 text-[18px] md:text-[22px] max-w-2xl mx-auto leading-relaxed">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {cta.button1 && (
                <Link href={cta.button1.href} className="w-full sm:w-auto px-12 py-5 bg-[#ffb916] text-white font-bold text-[18px] hover:bg-[#0A3A7A] hover:text-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 rounded-sm">
                  {cta.button1.text}
                </Link>
              )}
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
