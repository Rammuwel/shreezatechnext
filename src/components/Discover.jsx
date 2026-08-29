import React from 'react';

export default function Discover() {
  return (
    <section id="discover" className="py-10 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Creative Geometric Graphic */}
          <div className="relative h-[400px] md:h-[550px] w-full hidden md:block" data-aos="fade-right">
            <div className="absolute inset-0 flex justify-center items-center">
              
              {/* Left Teal Triangle */}
              <div 
                className="absolute left-[5%] top-[10%] w-[30%] h-[80%] bg-[#E0F2F1] z-0"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
              ></div>

              {/* Main Image in a V-shape Mask */}
              <div 
                className="absolute left-[20%] top-[5%] w-[60%] h-[90%] z-10 bg-white"
                style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 30% 100%)' }}
              >
                <img 
                  src="/images/discover-tech-1.jpg" 
                  alt="Professional" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Teal Triangle */}
              <div 
                className="absolute right-[5%] bottom-[10%] w-[35%] h-[75%] bg-[#4DB6AC] z-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
              ></div>

            </div>
          </div>

          {/* Mobile version of image */}
          <div className="relative h-[300px] w-full md:hidden rounded-lg overflow-hidden mb-8 shadow-md" data-aos="fade-up">
            <img 
              src="/images/discover-tech-2.jpg" 
              alt="Professional" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-normal text-[#212529] mb-8">
              Why <span className="font-bold text-[#0A3A7A]">Shreeza Tech?</span>
            </h2>
            
            <p className="text-[#212529] text-[16px] leading-[26px] md:text-[20px] md:leading-[34px] font-normal mb-8">
              We combine deep industry expertise with cutting-edge technology to build solutions that drive measurable business results.
            </p>
            
            <p className="text-gray-700 text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] font-normal">
              Whether you need to streamline operations with AI, modernize legacy systems, or launch a breakthrough digital product, our team of seasoned engineers and strategists is dedicated to delivering excellence at every step of your digital journey.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
