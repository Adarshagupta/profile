import React from 'react';
import { 
  CodeBracketIcon, 
  CloudIcon, 
  CpuChipIcon, 
  CommandLineIcon 
} from '@heroicons/react/24/outline';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <CodeBracketIcon className="h-6 w-6" />,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C'],
      color: 'bg-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <CommandLineIcon className="h-6 w-6" />,
      skills: ['NestJS', 'FastAPI', 'Flask', 'React Native', 'Next.js'],
      color: 'bg-green-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: <CloudIcon className="h-6 w-6" />,
      skills: ['Docker', 'Kubernetes', 'AWS', 'Redis', 'PostgreSQL', 'CI/CD'],
      color: 'bg-purple-600'
    },
    {
      title: 'AI & Systems',
      icon: <CpuChipIcon className="h-6 w-6" />,
      skills: ['PyTorch', 'OpenCV', 'NLP', 'Computer Vision'],
      color: 'bg-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className={`${category.color} rounded-lg p-3 w-fit mb-4`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? category.color : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg mb-6">
              Constantly exploring new technologies and methodologies to stay at the forefront of innovation
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Distributed Systems
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Quantitative Finance
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Blockchain
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 