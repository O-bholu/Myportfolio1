import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sentio',
      description: 'Sentio is designed to track and monitor your AO process. It deploys Sentinels which are responsible for overlooking and analyzing any interactions with AO. Sentio provides a comprehensive security solution.',
      image: `https://picsum.photos/seed/sentio/800/600`,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
    },
    {
      id: 2,
      title: 'CGPA Predictor',
      description: 'A responsive CGPA predictor app built with React, TypeScript, Vite, and TailwindCSS. It features modular components, interactive charts, and fast performance for accurate CGPA estimation across devices..',
      image: '/assets/project2.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      links: {
        github: 'https://github.com/O-bholu/CGPA_Prediction_App',
        live: 'https://example.com',
      },
    },
    {
      id: 3,
      title: 'CodeTogether',
      description: 'This project is a powerful real-time collaborative code editor designed to enhance the way developers, students, and teams write and run code together. It combines the functionality of a modern code editor with advanced features like multi-user collaboration, AI assistance, live chat, and screen sharing, all in one seamless platform.',
      image: '/assets/project3.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Socket.IO.'],
      links: {
        github: 'https://github.com/O-bholu/CodeTogether1',
        live: 'https://example.com',
      },
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16"
          data-aos="fade-up"
        >
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2 duration-300 hover:border hover:border-red-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2 bg-gray-800/30"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                
                <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 sm:px-3 py-1 text-xs bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;