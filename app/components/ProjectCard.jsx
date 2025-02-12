import React from 'react';

export const ProjectCard = ({ image, title, tags }) => {
  return (
    <div className=" h-full bg-white rounded-xl overflow-hidden shadow-md mx-2 ">
      <img
        src={image}
        alt={title}
        className="w-full h-72 md:h-80 object-cover"
      />

      <div className="px-4 py-5">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-primary bg-orange-100 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
