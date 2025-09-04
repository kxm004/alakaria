import React from 'react';

const Scale: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v18" />
    <path d="M6 21h12" />
    <path d="M3 7l6 2" />
    <path d="M21 7l-6 2" />
    <ellipse cx="6" cy="15" rx="3" ry="6" fill="#e0e7ef" />
    <ellipse cx="18" cy="15" rx="3" ry="6" fill="#e0e7ef" />
  </svg>
);

export default Scale; 