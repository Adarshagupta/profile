'use client';

import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Prazwol Gupta
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & Machine Learning Engineer
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Computer Science student at IIT Guwahati with experience building scalable systems and AI solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">30K+</div>
              <div className="text-sm text-gray-600">Monthly Users</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">70%</div>
              <div className="text-sm text-gray-600">Performance Gains</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">$450K</div>
              <div className="text-sm text-gray-600">Google Grant</div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ChevronDownIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 