import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const About = () => {
  const highlights = [
    'Computer Science student at IIT Guwahati',
    'Full-Stack Developer specializing in Python, JavaScript, and TypeScript',
    'Machine Learning Engineer with experience in PyTorch and TensorFlow',
    'Built systems serving 30K+ monthly users',
    'Experience in fintech and algorithmic trading',
    'Recipient of $450K Google Startup Grant'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a Computer Science student at IIT Guwahati with a passion for building scalable systems and AI solutions. 
              Over the past few years, I've had the opportunity to work with several companies, from early-stage startups to 
              established tech companies, where I've developed my skills in full-stack development and machine learning.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My experience spans backend infrastructure, microservices architecture, and machine learning model deployment. 
              I enjoy tackling complex technical challenges and have worked on projects ranging from document automation platforms 
              to algorithmic trading systems.
            </p>
            
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">At a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2024</div>
                  <div className="text-blue-100">Started at IIT</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">30K+</div>
                  <div className="text-blue-100">Users Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-blue-100">Major Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 