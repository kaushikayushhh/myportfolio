import React from 'react';
import { motion } from 'framer-motion';

const aboutItems = [
  {
    label: 'Projects Done',
    number: 5,
  },
  {
    label: 'Certificates',
    number: 10,
  },{
    label: 'Clients',
    number: 20,
  },
];

const About = () => {
  return (
    <section 
    
    id="about" className="py-16 bg-zinc-900 text-white">
      <div 
      className="max-w-5xl mx-auto px-6"
     >
        <motion.div 
         initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:2}}
    viewport={{once:false}}
      
        
        className="bg-zinc-800/50 p-6 md:p-12 rounded-2xl text-center">
          <p className="text-zinc-300 mb-8 md:text-lg leading-relaxed">
            I am a conversant and diligent individual with a keen interest in computers and technology, supported by a strong academic background.
            I hold a Bachelor of Computer Applications, and I'm currently pursuing my Master's in Computer Applications
            from ABES Engineering College. My passion lies in software development and cloud computing—creating scalable and innovative solutions. 
            I thrive in collaborative environments and enjoy solving complex challenges with creativity and analytical thinking.
          </p>

          {/* Stats */}
          <div className="flex flex-row sm:flex-row justify-center items-center gap-10 mt-10">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 flex justify-center items-center">
                  <span>{number}</span>
                  <span className="text-xl ml-1">+</span>
                </div>
                <p className="mt-2 text-zinc-300">{label}</p>
              </div>
            ))}
          </div>

          {/* Optional Logo at Bottom */}
          <div className="mt-10 flex justify-center items-center">
            <img src="/src/assets/images/logo.svg" alt="Logo" width={40} height={40} />
            <h1>Feel free to Contact Me</h1>
          </div>
      </motion.div>
        </div>
    </section>
  );
};

export default About;
