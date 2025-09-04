import React from 'react';

const Phone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="2" width="12" height="20" rx="4" fill="#e0e7ef" />
    <circle cx="12" cy="18" r="1" />
  </svg>
);

export default Phone; 