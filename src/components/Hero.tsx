import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin } from 'lucide-react';
import myPhoto from '/assets/vasu.jpg'; 
import ResumePDF from '/assets/resume.pdf';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16" id="about">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Profile Photo Section - Now at top for mobile */}
          <div 
            className="flex justify-center items-center order-first lg:order-last mb-8 lg:mb-0"
            data-aos="fade-down"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800">
              <img
                src={myPhoto}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                style={{ objectPosition: "top center" }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div data-aos="fade-up" className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4">
              <span className="block">BHOLU</span>
              <span className="block">
                <span className="text-red-500">Y</span>ADAV
              </span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8">
              <TypeAnimation
                sequence={[
                  ' Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'React Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              <TypeAnimation
                sequence={[
                  "I’m a full-stack web developer and CSE student with hands-on experience in building real-world projects using React, TypeScript, Node.js, Spring Boot, and MySQL/MongoDB. I specialize in creating responsive UIs, secure backends, and deploying full-stack apps with modern tools like Vercel and Render.",
                  10000,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-8">
              <a 
                href="#contact"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Message
              </a>

              <a 
                href={ResumePDF}
                download="Bholu_Yadav_Resume.pdf"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>

              <a 
                href="https://github.com/O-bholu"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
                GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/bholu-yadav-b64b3a293/"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
