'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/experience', label: 'EXPERIENCE' },
    { href: '/services', label: 'SERVICES' },
    { href: '/blog', label: 'BLOG' },
  ];

  return (
    <motion.header 
      className="fixed top-0 right-0 left-80 z-40 bg-white border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={item.href}
                  className={`font-medium transition-colors relative ${
                    isActive(item.href) 
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-gray-900"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact"
              className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
            >
              LET'S TALK
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 