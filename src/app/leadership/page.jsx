"use client";

import PageTemplate from '../../components/PageTemplate';

const boardOfDirectors = [
  {
    name: "Ram M",
    role: "Founder & CEO",
    image: "/images/founder.png",
    desc: "As the visionary Founder and CEO of Shreeza Tech, Ram M has been the driving force behind the company's innovation and growth strategies. With a deep passion for digital transformation and technology-led business models, he continues to shape the future of enterprise software solutions."
  },
  {
    name: "N.S. Nanda Kishore",
    role: "Managing Director & Chief Executive Officer",
    image: "https://cdn.novactech.com/uploads/teamimg11_5ac8c98706.webp",
    desc: "Nanda Kishore plays a pivotal role in guiding the company's mission to empower businesses to transform their technology models.\n\nA graduate in Electronics and Communications Engineering from Osmania University, he progressed from an Executive Trainee to CTO at Shriram Group, where he led various technology initiatives..."
  },
  {
    name: "C. Mahesh",
    role: "Joint Managing Director & Chief Operating Officer",
    image: "https://cdn.novactech.com/uploads/teamimg21_7ec0618d0c.webp",
    desc: "Mahesh is committed to fostering a client-centric culture while driving the company's quest for technological excellence.\n\nA mechanical engineering graduate from Calicut University and an Associate Member of the Insurance Institute of India, he brings over 32 years of experience in the Financial Services and Insurance industry..."
  },
  {
    name: "Ajay Thomas John",
    role: "Director",
    image: "https://cdn.novactech.com/uploads/Ajay_Thomas_0c288c1524.webp",
    desc: "Ajay Thomas John is an accomplished business and digital leader with over 20 years of experience in the financial services industry. At Novac, he spearheads the company’s digital transformation initiatives.\n\nIn his previous stints, Ajay held senior roles at Bajaj Finance Ltd, where he led Corporate Strategy and Fintech..."
  },
  {
    name: "Vani Narayanan",
    role: "Independent Director",
    image: "https://cdn.novactech.com/uploads/Vani_Narayanan_091ed1245c.webp",
    desc: "Vani Narayanan is a distinguished corporate leader with a wealth of over 30 years of experience in various entities in financial services sector including Commercial Bank, leading Development Financial Institution in India (IDBI) and some NBFCs.\n\nVani's academic credentials include a degree in Mathematics (Hons.) from University of Kolkata and PGDM from IIM Bangalo..."
  },
  {
    name: "R. Seshadri",
    role: "Independent Director",
    image: "https://cdn.novactech.com/uploads/Seshadri_Profile_149dcf6e12.png",
    desc: "Mr. R. Seshadri is currently Company Secretary and Director Quick2Shelf Food Solutions Private Limited. Quick2Shelf operates in the food and allied vertical offering distribution solutions for various corporates.\n\nHe was, for a decade the Executive Director of TAKE Solutions Ltd a niche software firm specializing in supply chain and healthcare verticals."
  }
];

const executiveLeadership = [
  {
    name: "K. Parthasarathy",
    role: "Executive Director and Chief Delivery Officer",
    image: "https://cdn.novactech.com/uploads/teamimg31_682f60f373.png",
    desc: "K. Parthasarathy leads the delivery of all client services across verticals, including digital, technology and operations.\n\nParthasarathy's skill set lies in his business leadership, technology delivery, operations management, and consulting skills as one of the central leaders within Novac."
  },
  {
    name: "R. Sridhar",
    role: "Chief Compliance Officer",
    image: "https://cdn.novactech.com/uploads/r_sridhar_cco_88bfed2d07.png",
    desc: "R. Sridhar, as the Chief Compliance Officer at Novac, responsible for defining and sustaining the organization’s compliance, quality, and security frameworks.\n\nHe holds a Bachelor’s degree in Business Administration from the University of Madras and brings over 25 years of experience in the IT industry."
  },
  {
    name: "M. Panakala Raju",
    role: "Chief Software Officer",
    image: "https://cdn.novactech.com/uploads/m_panakala_raju_cso_4c53893e26.png",
    desc: "Panakala Raju plays a key role in strengthening Novac’s lending platforms through software engineering and data-led system design as a Senior Vice President and Chief Software Officer.\n\nHe holds a Bachelor’s degree in Commerce from Nagarjuna University and a Postgraduate Program in Artificial Intelligence and Machine Learning from Caltech."
  },
  {
    name: "D. Dinesh",
    role: "Chief Technology Officer",
    image: "https://cdn.novactech.com/uploads/Mr_D_Dinesh_02_b7e21c4b53.png",
    desc: "As the Chief Technology Officer at Novac, Dinesh leads the organization’s technology strategy and innovation roadmap, driving initiatives that are evaluated, adopted, and scaled across the enterprise.\n\nWith over 25 years of experience in the software industry and an M.Tech in Software Engineering from BITS Pilani..."
  },
  {
    name: "Unnikrishnan CK",
    role: "Chief Product Officer",
    image: "https://cdn.novactech.com/uploads/unnikrishnan_ck_cpo_3bba336fc2.png",
    desc: "Bringing over 22 years of experience in product transformation, customer experience excellence, and strategic business growth across the BFSI sector, Unnikrishnan leads product strategy at Novac as its Chief Product Officer.\n\nHe holds an MBA from Symbiosis University, Pune, and brings over 22 years of experience in the BFSI sector."
  }
];

export default function LeadershipPage() {

  const renderProfile = (person, index) => {
    const isEven = index % 2 === 0;

    return (
      <div key={index} className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
        {/* Image Side */}
        <div className="w-full md:w-[350px] shrink-0">
          <div className="bg-[#f0f4ff] overflow-hidden">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <h3 className="text-3xl font-light text-black mb-1">{person.name}</h3>
          <h4 className="text-[17px] text-gray-500 font-light mb-6">{person.role}</h4>

          <p className="text-[16px] text-[#444] font-light leading-[1.8] whitespace-pre-line mb-8">
            {person.desc}
          </p>

          <button className="flex items-center gap-2 text-black font-light text-[15px] group w-fit">
            Know More
            <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path></svg>
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <PageTemplate title="Leadership">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] flex items-center bg-[#13072e] overflow-hidden bg-gradient-to-tr from-[#0a071f] via-[#151142] to-[#201c64]">
        <div className="max-w-[1300px] w-full mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            Meet Our <br /> <span className="text-[#3b82f6]">Leadership</span> Team
          </h1>
          <p className="text-lg md:text-[21px] text-gray-300 font-light max-w-2xl leading-relaxed">
            Empowering Businesses with Digital Transformation Solution from Leader's of Tomorrow
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[18px] md:text-[22px] text-gray-800 font-light leading-[1.8]">
            We are fortunate to have a leadership team of seasoned industry experts who have come together to shape a young company. With their years of experience and hard work, they have set the tone for our continued growth and success. They have cultivated our culture of excellence and determination and inspired us to learn, grow, and reach new heights. With them at the helm, we are confident of achieving our goals and thriving as a company.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-[32px] font-medium tracking-wide uppercase text-black mb-16 border-b pb-4">
            Board Of Directors
          </h2>

          <div className="flex flex-col">
            {boardOfDirectors.map((person, index) => renderProfile(person, index))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-[32px] font-medium tracking-wide uppercase text-black mb-16 border-b pb-4">
            Executive Leadership
          </h2>

          <div className="flex flex-col">
            {executiveLeadership.map((person, index) => renderProfile(person, index))}
          </div>
        </div>
      </section>

    </PageTemplate>
  );
}
