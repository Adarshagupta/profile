import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Header />
      <div className="ml-80 pt-20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
                Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                I help businesses build cutting-edge AI solutions, develop scalable web applications, 
                and optimize their technical architecture.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-12">What I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">AI/ML Development</h3>
                <p className="text-gray-600 mb-4">
                  Build intelligent systems using machine learning, natural language processing, 
                  and computer vision technologies.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Custom ML model development</li>
                  <li>• NLP and text analysis</li>
                  <li>• Computer vision solutions</li>
                  <li>• Model deployment and optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Full-Stack Development</h3>
                <p className="text-gray-600 mb-4">
                  Create modern web applications with responsive design, 
                  robust backend systems, and seamless user experiences.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• React/Next.js applications</li>
                  <li>• Node.js backend systems</li>
                  <li>• Database design and optimization</li>
                  <li>• API development and integration</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">System Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Design scalable, secure, and maintainable system architectures 
                  that grow with your business needs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Cloud architecture design</li>
                  <li>• Microservices architecture</li>
                  <li>• Performance optimization</li>
                  <li>• Security best practices</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Technical Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Strategic technical guidance to help you make informed decisions 
                  about technology stack, architecture, and implementation.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Technology stack selection</li>
                  <li>• Code review and optimization</li>
                  <li>• Technical due diligence</li>
                  <li>• Team mentoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Startup Technical Advisory</h3>
                <p className="text-gray-600 mb-4">
                  Guide early-stage startups through technical challenges, 
                  from MVP development to scaling strategies.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• MVP development strategy</li>
                  <li>• Technical roadmap planning</li>
                  <li>• Scalability planning</li>
                  <li>• Technology risk assessment</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Performance Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Optimize your existing applications for better performance, 
                  scalability, and user experience.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Code optimization</li>
                  <li>• Database performance tuning</li>
                  <li>• Frontend optimization</li>
                  <li>• Infrastructure scaling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-12">My Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-medium text-lg">1</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  Understand your needs, challenges, and goals through detailed consultation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-medium text-lg">2</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600 text-sm">
                  Develop a comprehensive technical strategy and implementation roadmap.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-medium text-lg">3</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600 text-sm">
                  Execute the plan with regular updates and transparent communication.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-medium text-lg">4</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Deploy the solution with documentation, training, and ongoing support.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-12">Investment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Consulting</h3>
                <div className="mb-6">
                  <span className="text-3xl font-light text-gray-900">$150</span>
                  <span className="text-gray-600">/hour</span>
                </div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• Technical consultation</li>
                  <li>• Code review</li>
                  <li>• Architecture planning</li>
                  <li>• Strategy development</li>
                </ul>
                <a href="/contact" className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="text-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Project-Based</h3>
                <div className="mb-6">
                  <span className="text-3xl font-light text-gray-900">Custom</span>
                  <span className="text-gray-600">/project</span>
                </div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• Full project development</li>
                  <li>• End-to-end delivery</li>
                  <li>• Regular updates</li>
                  <li>• Post-launch support</li>
                </ul>
                <a href="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Retainer</h3>
                <div className="mb-6">
                  <span className="text-3xl font-light text-gray-900">$5,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• Ongoing technical support</li>
                  <li>• Priority availability</li>
                  <li>• Monthly strategy sessions</li>
                  <li>• Code maintenance</li>
                </ul>
                <a href="/contact" className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Contact Me
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">How do you approach new projects?</h3>
                <p className="text-gray-600">
                  I start with a thorough discovery phase to understand your business needs, technical requirements, 
                  and constraints. Then I develop a detailed strategy and implementation plan with clear milestones and deliverables.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">What technologies do you work with?</h3>
                <p className="text-gray-600">
                  I specialize in Python, JavaScript/TypeScript, React, Node.js, and various AI/ML frameworks. 
                  I also work with cloud platforms like AWS, databases, and modern development tools.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Do you work with startups?</h3>
                <p className="text-gray-600">
                  Absolutely! I have extensive experience working with startups and understand the unique challenges 
                  of early-stage companies. I can help with MVP development, technical strategy, and scaling decisions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">What's your typical project timeline?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on complexity and scope. Simple projects might take 2-4 weeks, 
                  while complex AI systems or full-stack applications can take 2-6 months. I provide detailed 
                  estimates during the discovery phase.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Do you provide ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, I offer various support options including bug fixes, feature updates, performance monitoring, 
                  and technical consultation. We can discuss the best support model for your needs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services; 