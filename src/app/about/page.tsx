'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StaggeredAnimation from '@/components/StaggeredAnimation';

const About = () => {
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
                About Me
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I&apos;m a Computer Science student at IIT Guwahati with a passion for building 
                innovative solutions that make a real impact.
              </motion.p>
            </div>
          </motion.section>

          {/* Story Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8">My Story</h2>
                <StaggeredAnimation className="space-y-6 text-gray-600 leading-relaxed" delay={0.5}>
                  <p>
                    My journey into technology began with curiosity about how things work. 
                    From dismantling gadgets as a kid to building complex AI systems today, 
                    I&apos;ve always been driven by the desire to create and innovate.
                  </p>
                  <p>
                    Currently pursuing Computer Science at IIT Guwahati, I&apos;ve had the privilege 
                    of working with cutting-edge technologies and collaborating with brilliant minds. 
                    My experience spans from founding member roles at startups to contributing 
                    to AI research projects.
                  </p>
                  <p>
                    I believe in the power of technology to solve real-world problems. Whether 
                    it&apos;s developing high-frequency trading algorithms or creating AI-powered 
                    customer service solutions, I&apos;m passionate about building systems that 
                    make a measurable difference.
                  </p>
                </StaggeredAnimation>
              </motion.div>
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="bg-gray-50 p-8 rounded-2xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Quick Facts</h3>
                  <motion.ul 
                    className="space-y-3 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>🎓 Computer Science @ IIT Guwahati</motion.li>
                    <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>💰 $450k Google Startup Grant recipient</motion.li>
                    <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>🏆 Multiple hackathon winner</motion.li>
                    <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>🚀 Founded/co-founded 3 startups</motion.li>
                    <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>📍 Based in India, working globally</motion.li>
                  </motion.ul>
                </motion.div>
                <motion.div 
                  className="bg-gray-50 p-8 rounded-2xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "AI/ML", bg: "bg-blue-100", text: "text-blue-800" },
                      { name: "FinTech", bg: "bg-green-100", text: "text-green-800" },
                      { name: "Algorithms", bg: "bg-purple-100", text: "text-purple-800" },
                      { name: "System Design", bg: "bg-orange-100", text: "text-orange-800" },
                      { name: "Web3", bg: "bg-pink-100", text: "text-pink-800" }
                    ].map((interest, index) => (
                      <motion.span
                        key={interest.name}
                        className={`px-3 py-1 ${interest.bg} ${interest.text} rounded-full text-sm cursor-pointer`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {interest.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.h2 
              className="text-3xl font-light text-gray-900 mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              What Drives Me
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  title: "Innovation",
                  description: "Constantly exploring new technologies and approaches to solve complex problems in unique ways.",
                  color: "blue"
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Impact",
                  description: "Building solutions that create real value and make a meaningful difference in people's lives.",
                  color: "green"
                },
                {
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  title: "Learning",
                  description: "Committed to continuous growth and staying at the forefront of technological advancement.",
                  color: "purple"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-${value.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className={`w-8 h-8 text-${value.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.h2 
              className="text-3xl font-light text-gray-900 mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              My Journey
            </motion.h2>
            <div className="space-y-12">
              {[
                {
                  year: "2025 - Present",
                  title: "Founding Member at Cartonify",
                  description: "Building innovative packaging solutions",
                  color: "blue"
                },
                {
                  year: "2025",
                  title: "SWE at TrybookAI.com",
                  description: "Developed AI-powered book creation platform",
                  color: "green"
                },
                {
                  year: "2024",
                  title: "Software Engineer Intern at SeaArt AI",
                  description: "Contributed to AI art generation systems",
                  color: "purple"
                },
                {
                  year: "2023",
                  title: "Started Computer Science at IIT Guwahati",
                  description: "Began my formal journey in technology",
                  color: "orange"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className={`flex-shrink-0 w-4 h-4 bg-${item.color}-600 rounded-full mt-1`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.9 + index * 0.2 }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2.0 + index * 0.2 }}
                  >
                    <h3 className="text-xl font-medium text-gray-900">{item.year}</h3>
                    <p className="text-gray-600 mb-2">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About; 