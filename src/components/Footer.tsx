import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-4 sm:py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div>
            <a href="#" className="text-xl sm:text-2xl font-bold">
              <span className="text-red-500">B</span>
              <span className="text-white">HOLU.</span>
            </a>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-xs sm:text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500 sm:w-4 sm:h-4" /> using React & Tailwind CSS
            </p>
          </div>
          
          <div>
            <p className="text-gray-400 text-xs sm:text-sm">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;