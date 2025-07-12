import React from 'react';
import Image from 'next/image';

const MainContent = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-start justify-between">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
                I help brands with intent—and proven results
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Building high-impact systems and AI solutions that engage users, 
                drive growth, and deliver measurable outcomes.
              </p>
            </div>
            <a href="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
              <span className="font-medium">WORK WITH ME</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-12">
            {/* Terminal Fx Project */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl h-96 mb-8 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Quantitative Trading Platform</p>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-3">Terminal Fx</h3>
              <p className="text-gray-600 mb-6 text-lg">Quant algo terminal for Jane Street Hackathon</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Python</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">FastAPI</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">PostgreSQL</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">WebSocket</span>
              </div>
            </div>

            {/* Fortexa Project */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl h-96 mb-8 overflow-hidden relative">
                <Image 
                  src="/fortexa.png" 
                  alt="Fortexa.tech - Crypto high frequency trading algorithm"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-3">Fortexa.tech</h3>
              <p className="text-gray-600 mb-6 text-lg">Crypto high frequency trading algorithm</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">LSTM</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Flask</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">Random Forest</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">WebSocket</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-center text-gray-500 text-sm mb-12 uppercase tracking-wider font-medium">
            COMPANIES I&apos;VE WORKED WITH
          </p>
          <div className="flex items-center justify-center space-x-16">
            <div className="text-gray-400 text-lg font-medium">Cartonify</div>
            <div className="text-gray-400 text-lg font-medium">TrybookAI</div>
            <div className="text-gray-400 text-lg font-medium">SeaArt AI</div>
            <div className="text-gray-400 text-lg font-medium">IIT Guwahati</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-5xl font-light text-gray-900">Services</h2>
            <a href="/services" className="text-gray-900 font-medium flex items-center space-x-2 hover:space-x-3 transition-all">
              <span>ALL SERVICES</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="text-xl text-gray-600 mb-20 max-w-4xl leading-relaxed">
            Shaping digital experiences through AI, development, and strategy—where 
            technical vision meets innovation, scalability, and user impact.
          </p>

          <div className="grid grid-cols-2 gap-20">
            <div>
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-10 h-10">
                  <svg className="w-full h-full text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-light text-gray-900">Full-Stack Development</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                I create scalable applications and systems that handle real-world complexity, 
                making them faster, smarter, and more intuitive — designed to fit 
                seamlessly into production environments.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-10 h-10">
                  <svg className="w-full h-full text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-light text-gray-900">AI & Machine Learning</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                I build AI-driven solutions that enhance user experiences and business processes, 
                bringing intelligent automation to life with precision, creativity, and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-green-400 rounded-3xl p-16 text-center">
            <h2 className="text-5xl font-light text-gray-900 mb-4">Have an idea?</h2>
            <p className="text-2xl text-gray-900">Let&apos;s bring it to life.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent; 