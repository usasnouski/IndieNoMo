import React from 'react';

const SearchIcon = ({ svgClass}) => {
  return (
    <svg className={svgClass} viewBox="0 0 26 26" width="100%" height="100%">
      <path d="M25.48 21.96l-4.693-4.587.107-.107c1.067-1.707 1.813-3.84
        1.813-5.973C22.6 5.213 17.587.2 11.507.2 5.32.2.307 5.213.307
        11.4c0 6.187 5.013 11.2 11.2 11.2 2.133 0 4.16-.64 5.76-1.707l4.693
        4.587a1.16 1.16 0 0 0 1.6 0l1.92-1.92a1.16 1.16 0 0 0 0-1.6zM3.507
        11.4c0-4.48 3.52-8 8-8 4.373 0 8 3.52 8 8 0 4.373-3.52 8-8 8-4.48-.107-8-3.627-8-8z"
        fillRule="evenodd"/>
    </svg>
  );
}

export default SearchIcon;
