import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home', key: 'home' },
    { label: 'About', href: '#about', key: 'about' },
    { label: 'Projects', href: '#projects', key: 'projects' },
    { label: 'Reviews', href: '#reviews', key: 'reviews' },
  ];

  const linkClass = (key) =>
    `transition-colors duration-200 ${
      activeLink === key ? 'text-red-500' : 'text-black'
    } hover:text-red-900`;

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="/src/assets/images/logo.svg" width={40} height={40} alt="Logo" />
        </div>

        {/* Hamburger Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <motion.div
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
        className="hidden sm:flex space-x-6 bg-zinc-50 text-black py-2 px-6 font-medium rounded-lg">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setActiveLink(link.key)}
              className={linkClass(link.key)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div 
        initial={{opacity:0,x:10}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
        className="hidden sm:block bg-zinc-50 text-black px-4 py-2 rounded-full font-medium">
          <a href="#contact">Contact me</a>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
                initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}

        className="sm:hidden mt-4 bg-amber-50 text-black space-y-3 space-x-5 p-4 rounded-lg font-medium">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => {
                setActiveLink(link.key);
                setIsMobileMenuOpen(false);
              }}
              className={linkClass(link.key)}
            >
              {link.label}
            </a>
          ))}
         <a href="#contact" className="block bg-zinc-100 w-full mt-3 py-2 rounded-full">Contact me</a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
