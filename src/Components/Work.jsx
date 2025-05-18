import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    imgSrc: '/src/assets/images/project-1.jpg',
    title: 'Portfolio Website',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    projectLink: 'https://github.com/kaushikayushhh/portfolio',
  },
  {
    imgSrc: '/src/assets/images/project-2.jpg',
    title: 'Edvanta: Business solution',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    projectLink: 'https://github.com/kaushikayushhh/Edvanta',
  },
  {
    imgSrc: '/src/assets/images/project-3.jpg',
    title: 'NestEdge: ReaEstate',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    projectLink: 'https://github.com/kaushikayushhh/NestEdge',
  },
];

const Work = () => {
  return (
    <section className="py-16 bg-zinc-900 text-white flex justify-center  max-w-5xl mx-auto " id="projects">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="headline-2 max-w-max text-3xl lg:text-4xl lg:leading-tight font-semibold m-3">My portfolio highlights</h2>
 <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                Explore my projects and technologies I use to create exceptional, high-performing websites & applications.
            </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              tags={project.tags}
              projectLink={project.projectLink}
              classes="hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
