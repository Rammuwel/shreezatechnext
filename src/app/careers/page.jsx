"use client";

import PageTemplate from '../../components/PageTemplate';

const jobs = [
  {
    title: "Content Acquisition Specialist",
    department: "Digital Learning Solutions",
    experience: "2-6 years",
    location: "Chennai"
  },
  {
    title: "Associate / Senior Associate - Instructional Designer",
    department: "Digital Learning Solutions",
    experience: "2-7 years",
    location: "Chennai"
  },
  {
    title: "Project Manager - eLearning",
    department: "Digital Learning Solutions",
    experience: "7-12 years",
    location: "Chennai"
  }
];

export default function CareersPage() {
  return (
    <PageTemplate title="Careers">
      {/* Hero Section */}
      <section className="relative bg-[#0b061e] pt-32 pb-24 overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#10092c] z-0"></div>
        <div className="relative z-10 text-center max-w-[900px] px-6">
          <h1 className="text-2xl md:text-6xl text-white font-light mb-6 leading-tight">
            Let's <span className="text-blue-500 font-medium">Grow</span> Together
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-10">
            We are building a culture at Novac, where talented minds <br className="hidden md:block" /> can do their best!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-3 rounded text-[16px] hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
            Join us
          </button>
        </div>
        
        {/* Placeholder for the collage mentioned in screenshot */}
        <div className="relative z-10 w-full mt-20 px-6 max-w-[1400px]">
          <div className="flex gap-4 justify-center items-end h-[300px] opacity-70">
             {/* Simulating the collage from screenshot using basic colored rectangles since we don't have exact image paths handy */}
             <div className="w-[200px] h-[150px] bg-white/10 rounded-t-lg hidden md:block"></div>
             <div className="w-[250px] h-[250px] bg-white/20 rounded-t-lg"></div>
             <div className="w-[300px] h-[300px] bg-white/30 rounded-t-lg z-20"></div>
             <div className="w-[250px] h-[220px] bg-white/20 rounded-t-lg"></div>
             <div className="w-[200px] h-[180px] bg-white/10 rounded-t-lg hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Indulge and Grow */}
      <section className="py-10 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-5xl font-light text-black leading-snug md:leading-tight mb-6">
              Indulge and Grow <br className="hidden md:block" /> With Novac Family
            </h2>
            <p className="text-[17px] text-gray-600 font-light leading-relaxed mb-6">
              We extensively spend time searching for talented individuals who can think outside of the box, relentlessly pursuing goals, and grow alongside the company's interests. We empower you to do your best in a thriving environment where you can express your personality's eclectic parts at Novac.
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-100 rounded-lg overflow-hidden h-[400px]">
             <img src="https://cdn.novactech.com/uploads/family1_24afb3b93a.webp" alt="Novac Family" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-10 md:py-20 lg:py-24 bg-[#0b0c10]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <h2 className="text-xl md:text-4xl text-white font-light">Open positions</h2>
            <div className="flex gap-4">
               <select className="bg-transparent border border-gray-600 text-white px-4 py-2 w-[200px] rounded focus:outline-none focus:border-blue-500">
                 <option>Department</option>
               </select>
               <select className="bg-transparent border border-gray-600 text-white px-4 py-2 w-[200px] rounded focus:outline-none focus:border-blue-500">
                 <option>Location</option>
               </select>
               <button className="border border-gray-600 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-white/10 transition">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700 text-white text-[16px] font-medium">
                  <th className="py-6 px-4 font-normal">Position</th>
                  <th className="py-6 px-4 font-normal">Department</th>
                  <th className="py-6 px-4 font-normal">Experience</th>
                  <th className="py-6 px-4 font-normal">Location</th>
                  <th className="py-6 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-white/5 transition-colors group cursor-pointer text-gray-300">
                    <td className="py-8 px-4 text-[17px] group-hover:text-white transition-colors">{job.title}</td>
                    <td className="py-8 px-4 font-light">{job.department}</td>
                    <td className="py-8 px-4 font-light">{job.experience}</td>
                    <td className="py-8 px-4 font-light">{job.location}</td>
                    <td className="py-8 px-4 text-right">
                      <button className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
             <button className="text-[#f89520] font-medium flex items-center gap-2 mx-auto hover:text-[#e0861c] transition-colors group">
               Load More
               <span className="w-8 h-8 rounded-full border border-[#f89520] flex items-center justify-center group-hover:bg-[#f89520] group-hover:text-white transition-all">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </span>
             </button>
          </div>
        </div>
      </section>

      {/* Partake in Our Culture */}
      <section className="py-10 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 bg-gray-100 overflow-hidden">
             <img src="https://cdn.novactech.com/uploads/culture1_7bc2916077.webp" alt="Culture" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-5xl font-light text-black leading-snug md:leading-tight mb-8">
              <span className="text-blue-600">Partake</span> in Our Culture
            </h2>
            <p className="text-[20px] text-gray-800 font-light leading-relaxed mb-6">
              We set out to build the industry's foremost culture - a giving work culture that cares about the work and the people. A culture that celebrates individual achievements and creates lifelong friendships.
            </p>
            <p className="text-[17px] text-gray-600 font-light leading-relaxed mb-6">
              We are awarded India's Best Companies to Work for 2023 by Great Place to Work Institute and The Economic Times.
            </p>
            <p className="text-[17px] text-gray-600 font-light leading-relaxed">
              The above further cements the diverse and inclusive work culture at Novac and has honored to follow through our employees and customers' commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Diversity and Inclusion */}
      <section className="py-10 md:py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2 bg-gray-100 overflow-hidden">
             <img src="https://cdn.novactech.com/uploads/culture2_31bcb1ef42.webp" alt="Diversity" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-4xl font-light text-black leading-snug md:leading-tight mb-8">
              Our Commitment to <br className="md:hidden" /> <span className="text-blue-600">Diversity And Inclusion</span>
            </h2>
            <p className="text-[17px] text-gray-600 font-light leading-relaxed mb-6">
              A diverse and inclusive work environment drives quality creativity, higher productivity, and unrivaled performance. Our team of diverse employees and their novel ideas are a significant factor in our success.
            </p>
            <p className="text-[17px] text-gray-600 font-light leading-relaxed mb-10">
              We strive to build an organization that reflects the diversity of the world in which we live and work - an organization that represents a wide range of people across gender, race, ethnicity, sexual orientation, religion, and experiences. We dedicate to bringing Novac to the forefront of diversity and open for all employees to feel safe and welcome.
            </p>
            
            <h3 className="text-lg md:text-2xl font-light text-black mb-4">Women in Technology.</h3>
            <p className="text-[17px] text-gray-600 font-light leading-relaxed">
              Technology knows no gender, and we at Novac, take pride in increasing opportunities for women, who collectively represent 40% of Novac's entire employee strength. With our work-life balance on the fore, women stay at Novac longer, grow as leaders and develop their careers in Technology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Fun@Work */}
      <section className="py-10 md:py-20 lg:py-24 bg-[#0a071f]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-10 mb-16">
             <div className="md:w-1/3">
               <h2 className="text-xl md:text-5xl font-light text-blue-500 leading-tight">
                 Fun@Work.
               </h2>
             </div>
             <div className="md:w-2/3">
               <h3 className="text-[22px] font-light text-white leading-relaxed mb-4">
                 Work and play are not distinctive in life; they blur between lines. <br/> At Novac, we bring work and play under the same roof.
               </h3>
               <p className="text-[17px] text-gray-400 font-light leading-relaxed">
                 We believe in celebrating life at work. Fun@Work initiative at Novac is a kaleidoscope of happy faces, festive moments, fun-filled fests, the shuttle wars, cricket face-offs etc. Creating a perfect work-life balance is our key to happiness and success.
               </p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-4">
             <img src="https://cdn.novactech.com/uploads/fun_work1_e5475a6085.webp" alt="Fun" className="w-full h-[200px] object-cover rounded" />
             <img src="https://cdn.novactech.com/uploads/fun_work2_ad1846e576.webp" alt="Fun" className="w-full h-[200px] object-cover rounded" />
             <img src="https://cdn.novactech.com/uploads/fun_work3_4b5d4fc3dd.webp" alt="Fun" className="w-full h-[200px] object-cover rounded" />
             <img src="https://cdn.novactech.com/uploads/fun_work4_245f755700.webp" alt="Fun" className="w-full h-[200px] object-cover rounded" />
          </div>
        </div>
      </section>

    </PageTemplate>
  );
}
