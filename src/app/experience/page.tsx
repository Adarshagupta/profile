'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StaggeredAnimation from '@/components/StaggeredAnimation';

const Experience = () => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Header />
      <div className="ml-80 pt-20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Hero Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-4xl">
              <motion.h1 
                className="text-5xl font-light text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Experience
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My professional journey in technology, AI, and innovation.
              </motion.p>
            </div>
          </motion.section>

          {/* Work Experience */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-light text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Work Experience
            </motion.h2>
            <div className="space-y-12">
              {/* Cursor AI */}
              <motion.div 
                className="bg-gray-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900">Cursor AI</h3>
                    <p className="text-lg text-gray-600">AI Engineer</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <p className="text-sm">2024 - Present</p>
                    <p className="text-sm">Remote</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Achievements:</h4>
                  <StaggeredAnimation className="space-y-2 text-gray-600" delay={0.7}>
                    <li>• Developed advanced AI-powered code completion features</li>
                    <li>• Improved model accuracy by 35% through fine-tuning techniques</li>
                    <li>• Implemented real-time collaborative editing capabilities</li>
                    <li>• Optimized inference pipeline reducing latency by 40%</li>
                  </StaggeredAnimation>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Machine Learning", "TypeScript", "Neural Networks"].map((skill, index) => (
                    <motion.span 
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Outlier */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900">Outlier</h3>
                    <p className="text-lg text-gray-600">AI Trainer & Data Scientist</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <p className="text-sm">2024 - Present</p>
                    <p className="text-sm">Remote</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Trained and fine-tuned large language models for specialized domains</li>
                    <li>• Developed data annotation frameworks improving training quality by 50%</li>
                    <li>• Created automated evaluation pipelines for model performance</li>
                    <li>• Collaborated with cross-functional teams on AI safety protocols</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">LLM Training</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Data Science</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">AI Safety</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Model Evaluation</span>
                </div>
              </div>

              {/* Cartonify */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900">Cartonify</h3>
                    <p className="text-lg text-gray-600">Founding Member & CTO</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <p className="text-sm">2025 - Present</p>
                    <p className="text-sm">India</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Built scalable platform architecture serving 10,000+ users</li>
                    <li>• Developed optimization algorithms reducing packaging waste by 30%</li>
                    <li>• Led technical team of 8 developers and designers</li>
                    <li>• Delivered MVP 2 weeks ahead of schedule</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AWS</span>
                </div>
              </div>

              {/* TrybookAI */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900">TrybookAI.com</h3>
                    <p className="text-lg text-gray-600">Software Engineer</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <p className="text-sm">2025</p>
                    <p className="text-sm">Remote</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Developed comprehensive NLP pipeline for automated content generation</li>
                    <li>• Improved model performance by 40% through advanced fine-tuning</li>
                    <li>• Built responsive React frontend with seamless user experience</li>
                    <li>• Implemented real-time collaboration features for content creation</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">FastAPI</span>
                </div>
              </div>

              {/* SeaArt AI */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900">SeaArt AI</h3>
                    <p className="text-lg text-gray-600">Software Engineer Intern</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <p className="text-sm">2024</p>
                    <p className="text-sm">Remote</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Enhanced AI art generation models, improving output quality by 25%</li>
                    <li>• Optimized inference pipeline reducing processing time by 30%</li>
                    <li>• Contributed to user interface improvements increasing user engagement</li>
                    <li>• Collaborated with research team on novel generative AI techniques</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Computer Vision</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Deep Learning</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">PyTorch</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Technical Skills</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Python</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">JavaScript/TypeScript</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-14"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">React/Next.js</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-14"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Node.js</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">AI/ML</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Machine Learning</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Deep Learning</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-14"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">NLP</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-14"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Computer Vision</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Infrastructure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">AWS</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-12"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Docker</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-12"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">PostgreSQL</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-14"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Redis</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-12">Education</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900">Indian Institute of Technology, Guwahati</h3>
                  <p className="text-lg text-gray-600">Bachelor of Technology in Computer Science</p>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">
                  <p className="text-sm">2023 - 2027</p>
                  <p className="text-sm">CGPA: 8.2/10</p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Relevant Coursework:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Machine Learning</li>
                  <li>• Database Systems</li>
                  <li>• Computer Networks</li>
                  <li>• Software Engineering</li>
                  <li>• System Design</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Dean's List</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Research Assistant</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Coding Club Member</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience; 