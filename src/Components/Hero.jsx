import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

import heroImage from '../assets/images/main_head1.png'; // Adjust path based on your structure

// Parent and child animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <motion.div>
      <div className="px-6 sm:px-10 md:px-16 py-10 sm:py-6 md:py-4">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-center md:text-left flex-1"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-red-400">
              Ayush Kaushik
            </h1>
            <div className="text-4xl sm:text-7xl text-gray-200 mb-6 font-semibold leading-tight">
              <p>Building Scalable</p>
              <p>Modern Projects</p>
              <p>For the Future!</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
              <a
                href="/ayush_resume.pdf" download="ayush_resume.pdf"
                className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"

              >
                Download CV
              </a>
              <a
                href="#contact"
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-300 transition"
              >
                Contact Me
              </a>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect
              </h3>
              <motion.div
                className="flex gap-5 items-center justify-center md:justify-start mt-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
              >
                {[
                  {
                    href: 'mailto:kaushik.ak8171@gmail.com',
                    icon: Mail,
                    color: 'hover:bg-rose-600',
                    label: 'Email',
                  },
                  {
                    href: 'https://linkedin.com/in/ayush-kaushik-ba5516329',
                    icon: Linkedin,
                    color: 'hover:bg-blue-600',
                    label: 'LinkedIn',
                  },
                  {
                    href: 'https://github.com/kaushikayushhh',
                    icon: Github,
                    color: 'hover:bg-black text-white',
                    label: 'GitHub',
                  },
                  {
                    href: 'https://instagram.com/kaushik.ayushh',
                    icon: Instagram,
                    color: 'hover:bg-pink-600',
                    label: 'Instagram',
                  },
                ].map(({ href, icon: Icon, color, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    variants={itemVariants}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-zinc-700 hover:scale-110 transition-transform duration-200 shadow-md ${color}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="flex-1 flex justify-center m-2 p-2"
          >
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-red-400 via-red-400/40 to-transparent rounded-[60px] overflow-hidden">
              <img
                src={heroImage}
                alt="Portrait of Ayush Kaushik"
                className="w-full max-w-sm md:max-w-md"
              />
            </figure>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
