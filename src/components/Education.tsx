import React from 'react';
import { 
  AcademicCapIcon, 
  TrophyIcon, 
  StarIcon,
  BuildingLibraryIcon 
} from '@heroicons/react/24/outline';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institute: 'IIT, Guwahati',
      board: 'IIT',
      cgpa: '8.2 (Till 2nd Sem)',
      icon: <AcademicCapIcon className="h-6 w-6" />
    },
    {
      degree: 'Senior Secondary',
      institute: 'VS Niketan Secondary School',
      board: 'National Education Board',
      cgpa: '88.88%',
      icon: <BuildingLibraryIcon className="h-6 w-6" />
    }
  ];

  const awards = [
    {
      title: 'Google Startup Grant',
      description: 'Received US $450k from Google for AI research and development',
      icon: <StarIcon className="h-6 w-6" />,
      color: 'bg-green-600'
    },
    {
      title: 'Solidus Ai Tech Hack-AI-Thon-Layer2',
      description: 'Third Runner-up among national finalists',
      icon: <TrophyIcon className="h-6 w-6" />,
      color: 'bg-yellow-600'
    },
    {
      title: 'Google Cloud AI for Impact Hackathon (APAC)',
      description: 'Shortlisted among Top 4 teams in Asia',
      icon: <TrophyIcon className="h-6 w-6" />,
      color: 'bg-blue-600'
    },
    {
      title: 'Head of Website Department',
      description: 'Lead the development for sports council event',
      icon: <StarIcon className="h-6 w-6" />,
      color: 'bg-purple-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and recognition in technology competitions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <div className="text-blue-600">
                        {edu.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-2">
                        {edu.institute}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-gray-600 text-sm">
                          {edu.board}
                        </p>
                        <p className="text-gray-900 font-semibold">
                          {edu.cgpa}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <TrophyIcon className="h-8 w-8 text-yellow-600 mr-3" />
              Awards & Recognition
            </h3>
            
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className={`${award.color} rounded-lg p-3`}>
                      <div className="text-white">
                        {award.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {award.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Highlights</h3>
          <p className="text-lg mb-6">
            Some key achievements from my academic and professional journey
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">8.2</div>
              <div className="text-sm">CGPA at IIT</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">$450K</div>
              <div className="text-sm">Google Grant</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold">Top 4</div>
              <div className="text-sm">APAC Finalist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 