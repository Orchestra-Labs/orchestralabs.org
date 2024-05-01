import React from 'react';

export const Copy: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 5.5v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 20.5l.003-14c0-.552.45-1 1.006-1H7Zm-1.998 2L5 19.5h10v-12H5.002ZM9 5.5h8v10h2v-12H9v2Z"
      fill="currentColor"
    />
  </svg>
);
