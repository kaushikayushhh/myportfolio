import React from 'react';
import ReviewCards from './ReviewCards';
import { motion } from 'framer-motion';

const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: '/src/assets/images/people-1.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: '/src/assets/images/people-2.jpg',
    company: 'NexaWave'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: '/src/assets/images/people-3.jpg',
    company: 'CodeCraft'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: '/src/assets/images/people-4.jpg',
    company: 'BrightWeb'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: '/src/assets/images/people-5.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: '/src/assets/images/people-6.jpg',
    company: 'Skyline Digital'
  }
];

const Review = () => {
  return (
    <section className='py-5 bg-zinc-900 text-white flex justify-center  max-w-5xl mx-auto' id='reviews'>
      <div className="max-w-6xl mx-auto px-4">
              <h2 className="headline-2 max-w-max text-3xl lg:text-4xl lg:leading-tight font-semibold m-3">What our customers say</h2>
 <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
            We're proud to share heartfelt reviews from our valued customers, showcasing how much they genuinely appreciate and love our work.
            </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCards
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
