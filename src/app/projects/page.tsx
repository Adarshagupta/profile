'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Image from 'next/image';
import StaggeredAnimation from '@/components/StaggeredAnimation';

const Projects = () => {
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
                My Projects
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                A showcase of my work in AI, FinTech, and full-stack development.
              </motion.p>
            </div>
          </motion.section>

          {/* Featured Projects */}
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
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Terminal Fx */}
              <motion.div 
                className="bg-gray-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-medium text-gray-900">Terminal Fx</h3>
                  <motion.span 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    FinTech
                  </motion.span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Quantitative trading platform built for Jane Street Hackathon. Features real-time market data analysis, 
                  algorithmic trading strategies, and risk management systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "FastAPI", "React", "WebSocket"].map((tech, index) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    GitHub →
                  </motion.a>
                </div>
              </motion.div>

              {/* Fortexa */}
              <motion.div 
                className="bg-gray-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-medium text-gray-900">Fortexa.tech</h3>
                  <motion.span 
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    AI/ML
                  </motion.span>
                </div>
                <motion.div 
                  className="relative w-full h-48 mb-6 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/fortexa.png"
                    alt="Fortexa crypto trading platform"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cryptocurrency high-frequency trading platform powered by LSTM neural networks and Random Forest algorithms. 
                  Achieved 23% profit increase through advanced predictive modeling.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "TensorFlow", "LSTM", "Random Forest"].map((tech, index) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    GitHub →
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Other Projects */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.h2 
              className="text-3xl font-light text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Other Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "TrybookAI",
                  description: "AI-powered book creation platform with advanced NLP capabilities",
                  tech: ["Python", "NLP", "React", "FastAPI"],
                  category: "AI/ML"
                },
                {
                  title: "Cartonify",
                  description: "Innovative packaging solutions with optimization algorithms",
                  tech: ["Python", "Optimization", "React", "TypeScript"],
                  category: "SaaS"
                },
                {
                  title: "SeaArt AI",
                  description: "AI art generation system with 25% quality improvement",
                  tech: ["Python", "Computer Vision", "Deep Learning"],
                  category: "AI/ML"
                },
                {
                  title: "Mumbai Navigator",
                  description: "Smart navigation system for Mumbai's public transport",
                  tech: ["React Native", "Maps API", "Node.js"],
                  category: "Mobile"
                },
                {
                  title: "Infinity Chat",
                  description: "Real-time messaging platform with advanced features",
                  tech: ["React", "Socket.io", "Node.js", "MongoDB"],
                  category: "Web App"
                },
                {
                  title: "University API",
                  description: "RESTful API for university management system",
                  tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
                  category: "Backend"
                }
              ].map((project, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
                    <motion.span 
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.3 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      View →
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      GitHub →
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Awards Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <motion.h2 
              className="text-3xl font-light text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Awards & Recognition
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Google Startup Grant",
                  description: "$450,000 funding for innovative AI project",
                  icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                  color: "yellow"
                },
                {
                  title: "Solidus AI Tech",
                  description: "3rd place in AI innovation challenge",
                  icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
                  color: "blue"
                },
                {
                  title: "Google Cloud",
                  description: "Top 4 team in APAC region",
                  icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
                  color: "green"
                }
              ].map((award, index) => (
                <motion.div 
                  key={award.title}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 + index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-${award.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className={`w-8 h-8 text-${award.color}-600`} fill="currentColor" viewBox="0 0 24 24">
                      <path d={award.icon}/>
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Projects; 