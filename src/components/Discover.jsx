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
            <h2 className="text-[22px] md:text-[42px] leading-[1.25] font-normal text-[#212529] mb-8">
              Get to know about <br className="hidden lg:block" />
              Shreezatech's <br className="hidden lg:block" />
              Comprehensive World <br className="hidden lg:block" />
              of Offerings
            </h2>
            
            <p className="text-[#212529] text-[15px] md:text-[20px] leading-[34px] font-normal mb-8">
              Welcome to the forefront of financial innovation, where technology converges with lending expertise to create an unparalleled digital lending experience. Our Fintech solutions are poised to reshape the way lenders empower their borrowers, forging a new era of seamless and efficient lending.
            </p>
            
            <p className="text-gray-700 text-[14px] md:text-[18px] leading-[30px] font-normal">
              Introducing <strong>Shreezatech Cloud Solutions</strong> - A comprehensive suite of enterprise management tools designed to streamline operations, mitigate risk, and accelerate growth for forward-thinking financial institutions.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
