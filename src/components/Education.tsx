import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Intermediate (10+2) in PCM',
      school: 'J.P. Inter College, S J P Nagar',
      year: '2020 - 2022',
     description: 'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills..'
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Parul University, Vadodara',
      year: '2022 - 2026',
      description: 'Pursuing in-depth studies in full stack development, data structures, algorithms, operating systems, and database management. Actively involved in practical projects and software development.'
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16"
          data-aos="fade-up"
        >
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-sm sm:text-base text-gray-400">{edu.school}</p>
              <p className="text-sm sm:text-base text-gray-400">{edu.year}</p>
              <p className="text-sm sm:text-base text-gray-400 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 