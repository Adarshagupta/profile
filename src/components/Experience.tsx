import React from 'react';
import { CalendarIcon, MapPinIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      title: 'Founding Member',
      company: 'Cartonify',
      location: 'Bangalore, Karnataka',
      period: 'Jan 2025 - Present',
      description: [
        'Built and deployed machine learning models for real-world use cases such as image classification and text summarization using Python, scikit-learn, and PyTorch',
        'Worked with a team to clean and preprocess large datasets (CSV, JSON, image formats), improving model accuracy by ensuring better data quality and feature selection',
        'Integrated trained models into backend APIs using Flask and FastAPI, allowing real-time inference for users through web and mobile applications'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'TrybookAI.com',
      location: 'Bangalore, Karnataka',
      period: 'Jan 2025 - June 2025',
      description: [
        'Built and scaled the backend infrastructure for a document automation platform from scratch — including user auth, tenant-aware APIs, background workers, PDF generation, and deployment — now used by 30K+ monthly users',
        'Architected and deployed production infrastructure on Kubernetes with Prometheus, Grafana, and HSM-based secure telemetry',
        'Designed asynchronous job queues using Celery and Redis to handle high-volume PDF generation, with real-time job tracking via WebSockets; reduced time-to-response by 70 percent under load'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'SeaArt AI',
      location: 'Remote, Singapore',
      period: 'Jul 2024 - Dec 2024',
      description: [
        'Developed backend services for a digital art platform in Flask, including media upload APIs, image rendering jobs, and asset delivery; enabled seamless file handling and CDN caching to support large art uploads',
        'Optimized PyTorch and TensorFlow models for faster rendering, achieving 40% speed gains and smoother UX for 10K+ users'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building scalable systems and AI-powered solutions across startups and tech companies
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                      <div className="flex items-center text-gray-600 mb-1">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <ChevronRightIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 