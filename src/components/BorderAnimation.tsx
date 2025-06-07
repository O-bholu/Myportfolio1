import { ReactNode, useState } from 'react';

interface BorderAnimationProps {
  children: ReactNode;
}

const BorderAnimation = ({ children }: BorderAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div 
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 transition-all duration-300 ${
          isHovered ? 'w-full' : 'w-0'
        }`} 
      />
    </div>
  );
};

export default BorderAnimation;