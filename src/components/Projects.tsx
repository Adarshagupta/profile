import React from 'react';
import { CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: 'Terminal Fx - Quant Algo Terminal',
      subtitle: 'Jane Street Hackathon',
      period: 'Mar 2024 - Present',
      description: 'Architected and built a scalable AI customer support SaaS platform as a cloud-native microservices ecosystem, using an event-driven architecture with WebSockets and Redis to deliver real-time features like live agent tracking and instant message status updates.',
      keyFeatures: [
        'Event-driven architecture with WebSockets and Redis Pub/Sub for scalable message delivery',
        'Cloud-native microservices ecosystem with PostgreSQL, Redis, and Celery',
        'Real-time features including live agent tracking and instant message status updates',
        'Asynchronous task processing and seamless service integration'
      ],
      techStack: ['WebSocket', 'Python', 'Go', 'FastAPI', 'PostgreSQL', 'TimescaleDB', 'Backtrader', 'Kafka', 'Docker'],
      icon: <ChartBarIcon className="h-8 w-8" />,
      color: 'bg-blue-600',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Fortexa.tech',
      subtitle: 'Crypto High Frequency Trading Algorithm',
      period: 'Feb 2025 - Present',
      description: 'Developed a personal project to explore algorithmic trading, implementing strategies like mean reversion and momentum using real-time Binance data. Built and backtested machine learning models to predict market movements.',
      keyFeatures: [
        'Real-time algorithmic trading strategies (mean reversion, momentum)',
        'Machine learning models for market prediction (LSTM, Random Forest)',
        'Event-driven architecture with real-time dashboard',
        'Backtesting engine with comprehensive performance metrics'
      ],
      techStack: ['Pandas', 'NumPy', 'SciPy', 'LSTM', 'Random Forest', 'Gradient Boosting', 'Flask', 'AsyncIO', 'SocketIO', 'Black-Scholes'],
      icon: <CodeBracketIcon className="h-8 w-8" />,
      color: 'bg-green-600',
      gradient: 'from-green-600 to-green-700'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notable Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions in quantitative finance and algorithmic trading
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    {project.icon}
                  </div>
                  <span className="text-white/80 text-sm font-medium">{project.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
                <p className="text-white/90 text-sm font-medium">{project.subtitle}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
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

export default Projects; 