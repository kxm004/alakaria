import React from 'react';

const Users: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="8" r="4" fill="#e0e7ef" />
    <circle cx="16" cy="8" r="4" fill="#e0e7ef" />
    <ellipse cx="12" cy="18" rx="8" ry="4" fill="#e0e7ef" />
  </svg>
);

export default Users; 