import React from 'react';

const Award: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6" fill="#e0e7ef" />
    <path d="M8 21l4-4 4 4" stroke="#255b95" fill="none" />
    <path d="M12 14v-2" stroke="#255b95" />
  </svg>
);

export default Award; 