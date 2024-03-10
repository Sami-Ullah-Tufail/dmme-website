"use client"
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Dropdown = ({ menuName, options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className=" box-border text-white px-4 py-2 rounded"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {menuName}
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 bg-white border border-gray-300 shadow-md z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          {options.map((option, index) => (
            <a
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              
              href={option.href}
            >
              {option.manus}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  menuName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Dropdown;
