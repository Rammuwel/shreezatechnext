"use client";

import PageTemplate from '../../components/PageTemplate';

export default function CSRPage() {
  return (
    <PageTemplate title="CSR">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] flex items-center bg-[#13072e] overflow-hidden">
        <div className="absolute inset-0">
           <img 
              src="https://cdn.novactech.com/uploads/creating_social_impact_7d56d9f966.webp" 
              alt="CSR Banner" 
              className="w-full h-full object-cover opacity-60" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0724] to-transparent"></div>
        </div>
        
        <div className="max-w-[1300px] w-full mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl md:text-6xl font-light text-white mb-4 leading-tight max-w-3xl">
            <span className="text-[#3b82f6]">Creating</span> Social Impact Initiatives for a Lasting Change
          </h1>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-10 md:py-20 lg:py-24 bg-white relative z-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-[40px] font-medium text-[#113264] mb-8 leading-tight">
            Our commitment to building brighter futures
          </h2>
          <p className="text-[18px] text-gray-700 leading-relaxed font-light mb-12">
            At Novac, we strongly believe that progress is meaningful only when it uplifts the community around us. Guided by our CSR team, we are deeply committed to contributing towards community development through impactful CSR initiatives. With a strong focus on education and skill development, we strive to create opportunities that empower individuals and build a stronger society for a brighter tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://cdn.novactech.com/uploads/CSR_Policy_74993ce6d5.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-[#0d61fb] to-[#04a0cb] text-white font-medium rounded-md w-full sm:w-auto hover:opacity-90 transition-opacity"
            >
              CSR Policy
            </a>
            <a 
              href="https://cdn.novactech.com/uploads/Constitution_of_CSR_Committee_ccf2f028ee.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-[#0d61fb] to-[#04a0cb] text-white font-medium rounded-md w-full sm:w-auto hover:opacity-90 transition-opacity"
            >
              CSR Committee
            </a>
          </div>
        </div>
      </section>
      
      {/* Glimpse into our CSR Initiatives */}
      <section className="py-10 md:py-20 lg:py-24 bg-[#f8f9fc] relative z-20 border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-[40px] font-medium text-[#113264] mb-12 leading-tight">
            Glimpse into our CSR Initiatives
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://cdn.novactech.com/uploads/CSR_Projects_Approved_FY_25_9b44f88e39.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-4 bg-white border border-[#04a0cb] text-black font-medium w-full sm:w-auto hover:shadow-lg transition-shadow"
            >
              CSR Programs (FY 24-25)
            </a>
            <a 
              href="https://cdn.novactech.com/uploads/CSR_Projects_Approved_FY_24_fcd15f2329.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-4 bg-white border border-[#04a0cb] text-black font-medium w-full sm:w-auto hover:shadow-lg transition-shadow"
            >
              CSR Programs (FY 23-24)
            </a>
          </div>
        </div>
      </section>
      
    </PageTemplate>
  );
}
