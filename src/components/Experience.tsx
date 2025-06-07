import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Parul University',
      position: 'Full Stack Developer',
      duration: 'Jan 2023 - Present',
      description: 'Led the development of a comprehensive SaaS platform that improved client productivity by 35%. Implemented CI/CD pipelines that reduced deployment time by 40%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      company: 'CodeSoftech',
      position: 'Frontend Developer',
      duration: 'Jun 2024 - Present',
      description: 'Developed and maintained multiple client-facing web applications with a focus on performance and accessibility. Reduced load time by 60% through code optimization.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Firebase']
    },
    {
      company: 'WebCraft Studios',
      position: 'UI/UX Designer & Developer',
      duration: 'Mar 2018 - May 2020',
      description: 'Created intuitive user interfaces for various web and mobile applications. Collaborated with stakeholders to transform requirements into functional designs.',
      technologies: ['Figma', 'JavaScript', 'React Native', 'CSS']
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16"
          data-aos="fade-up"
        >
          Experience
        </h2>
        
        <div className="relative space-y-8 sm:space-y-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 transform -translate-x-1/2 hidden md:block"></div>
              
              {/* Content */}
              <div className={`bg-gray-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12 md:order-first'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold">{experience.position}</h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={14} className="mr-1 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{experience.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-3 sm:mb-4 text-red-400">
                  <Briefcase size={14} className="mr-2 sm:w-4 sm:h-4" />
                  <span className="text-sm sm:text-base">{experience.company}</span>
                </div>
                
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 sm:px-3 py-1 text-xs bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Empty div for layout on odd indexes */}
              <div className={index % 2 === 0 ? 'hidden md:block' : ''}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;