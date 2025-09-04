import React from 'react';

const Mail: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="#e0e7ef" />
    <polyline points="3,7 12,13 21,7" fill="none" />
  </svg>
);

export default Mail; 