import { Code, Palette, Globe, Database, Server, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Expert in React, Angular, and Vue.js with a strong focus on creating responsive and performant web applications.',
      technologies: ['React', 'Angular', 'TypeScript', 'Vue.js', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Proficient in building robust server-side applications with a variety of technologies and frameworks.',
      technologies: ['Node.js', 'Express', 'Servlet', 'Spring Boot', 'Hibernate', 'ASP.NET']
    },
    {
      icon: <Database size={24} />,
      title: 'Database Management',
      description: 'Experience with various database systems, both SQL and NoSQL, for efficient data storage and retrieval.',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Supabase']
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
      technologies: ['Figma', 'Tailwind CSS', 'Sketch', 'Photoshop', 'Adobe XD', 'Material UI']
    },
    {
      icon: <Globe size={24} />,
      title: 'DevOps',
      description: 'Setting up CI/CD pipelines and managing cloud infrastructure for seamless deployment and scaling.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions', 'Jenkins']
    },
    {
      icon: <Cpu size={24} />,
      title: 'Operating Systems',
      description: 'Understanding of core OS concepts including process management, memory allocation, and file systems.',
      technologies: ['Linux', 'Windows', 'Unix', 'Shell Scripting', 'Process Scheduling', 'Memory Management']

    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16"
          data-aos="fade-up"
        >
          Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-purple-500 mr-3 sm:mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{skill.title}</h3>
              </div>
              
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.slice(0, 4).map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 sm:px-3 py-1 text-xs bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {skill.technologies.length > 4 && (
                  <span className="px-2 sm:px-3 py-1 text-xs bg-gray-700 rounded-full">
                    +{skill.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;