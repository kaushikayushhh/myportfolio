import React from 'react';
import { Linkedin, Instagram, Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-gray-300 py-12 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand Info */}
        <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}

        >
          <h2 className="text-5xl font-bold text-red-500 tracking-tight hover:text-red-900">Let's Work Together</h2>
          <p className="text-zinc-400 mt-3 max-w-sm leading-relaxed">
            Crafting clean, scalable code and elegant user interfaces to bring ideas to life.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
        
         initial={{opacity:0,x:20}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-base">
            {[
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
              { name: "Reviews", href: "#reviews" },
            ].map((link) => (
              <li key={link.name}>
                <motion.a
               
                  href={link.href}
                  className="hover:text-white transition-all duration-200 ease-in-out hover:pl-1"
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
          <motion.div className="flex gap-5 items-center"
          variants={containerVariant}
            initial="hidden"
            whileInView="show"
          >
            {[
              {
                href: "mailto:kaushik.ak8171@gmail.com",
                icon: Mail,
                color: "hover:bg-rose-600",
              },
              {
                href: "https://linkedin.com/in/ayush-kaushik-ba5516329e",
                icon: Linkedin,
                color: "hover:bg-blue-600",
              },
              {
                href: "https://github.com/kaushikayushhh",
                icon: Github,
                color: "hover:bg-zinc-700",
              },
              {
                href: "https://instagram.com/kaushik.ayushh",
                icon: Instagram,
                color: "hover:bg-pink-600",
              },
            ].map(({ href, icon: Icon, color }, i) => (
              <motion.a
              variants={itemVariants}
              

                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-zinc-700 transition-transform duration-200 hover:scale-110 ${color} shadow-md`}
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-zinc-500 text-sm mt-12 border-t border-zinc-700 pt-6">
        &copy; {new Date().getFullYear()} Ayush Kaushik. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
