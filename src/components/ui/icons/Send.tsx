import React from 'react';

const Send: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="2,21 23,12 2,3 6,12 2,21" fill="#e0e7ef" />
    <line x1="6" y1="12" x2="23" y2="12" />
  </svg>
);

export default Send; 