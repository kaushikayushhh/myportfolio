import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'MCA (Master of Computer Applications)',
      institution: 'A.B.E.S Engineering College',
      year: '2024 - Present',
    },
    {
      degree: 'M.E.R.N  Full-stack web development',
      institution: 'Ducat Gurgaon',
      year: '2022 - 2023',
    },
    {
      degree: 'BCA (Bachelor of Computer Applications)',
      institution: 'Vivek College of Education',
      year: '2019 - 2022',
    }, 
    {
      degree: 'Intermediate',
      institution: 'O.P.S Sr. Sec. School',
      year: '2018-2019',
    }, 
    {
      degree: 'High-School',
      institution: 'O.P.S Sr. Sec. School',
      year: '2016-2017',
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section className="max-w-2xl mx-auto px-10 py-10">
      <h2 className="headline-2 max-w-max text-3xl lg:text-4xl lg:leading-tight font-semibold m-3">
        My Education
      </h2>
      <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
        Relentless dedication turned every step—BCA, and MCA—into milestones. From code to classrooms and back, each qualification reflects my passion, persistence, and pursuit of excellence in both tech and learning.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="relative border-l-4 rounded-4xl border-rose-700 pl-6 space-y-10"
      >
        {educationData.map((edu, index) => (
          <motion.div key={index} variants={itemVariants} className="relative group">
            <div className="absolute -left-[1.1rem] top-0 bg-zinc-800 z-10 rounded-full p-2 border-2 border-zinc-600">
              <GraduationCap className="w-5 h-5 text-rose-400" />
            </div>
            <div className="bg-zinc-800 px-5 py-2 rounded-xl shadow-md transition duration-300 group-hover:scale-[1.02]">
              <h3 className="text-lg font-semibold text-white p-2">{edu.degree}</h3>
              <p className="text-zinc-400">{edu.institution}</p>
              <p className="text-zinc-500 text-sm">{edu.year}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
