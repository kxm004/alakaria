import React from 'react';

const MapPin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="10" rx="6" ry="8" fill="#e0e7ef" />
    <circle cx="12" cy="10" r="2.5" />
    <path d="M12 18v4" />
  </svg>
);

export default MapPin; 