import React from 'react';

const QrCode: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#255b95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="6" height="6" fill="#e0e7ef" />
    <rect x="15" y="3" width="6" height="6" fill="#e0e7ef" />
    <rect x="3" y="15" width="6" height="6" fill="#e0e7ef" />
    <rect x="15" y="15" width="6" height="6" fill="#e0e7ef" />
    <rect x="10" y="10" width="4" height="4" />
  </svg>
);

export default QrCode; 