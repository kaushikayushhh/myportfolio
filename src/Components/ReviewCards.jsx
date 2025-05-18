import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const rating = new Array(5).fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' }
});

const ReviewCards = ({ content, imgSrc, name, company }) => {
  return (
    <motion.div 
    initial={{opacity:0,y:30}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1}}

    className="bg-zinc-800 text-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
      {/* Star Rating */}
      <div className="flex text-yellow-400 mb-4 text-xl">
        {rating.map(({ icon, style }, key) => (
          <span key={key} className="material-symbols-rounded" style={style}>
            {icon}
          </span>
        ))}
      </div>

      {/* Review Content */}
      <p className="text-gray-300 italic mb-6">"{content}"</p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={imgSrc}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

ReviewCards.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
};

export default ReviewCards;
