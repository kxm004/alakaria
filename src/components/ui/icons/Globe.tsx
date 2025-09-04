import React from 'react';

const Globe: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" fill="#e0e7ef" />
    <ellipse cx="12" cy="12" rx="6" ry="10" fill="none" />
    <ellipse cx="12" cy="12" rx="10" ry="6" fill="none" />
  </svg>
);

export default Globe; 