import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div className={`p-4 rounded-xl shadow-md bg-zinc-800 text-white ${classes}`}>
      <figure className="mb-4">
        <img
          src={imgSrc}
          loading="lazy"
          className="w-full h-48 object-cover rounded-lg"
          alt={title}
        />
      </figure>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((label, key) => (
          <span key={key} className="bg-zinc-600 text-white text-xs px-2 py-1 rounded">
            {label}
          </span>
        ))}
      </div>

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-blue-400 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

ProjectCard.defaultProps = {
  classes: '',
};

export default ProjectCard;
