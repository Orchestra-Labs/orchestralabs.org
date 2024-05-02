import React from 'react';

export const SquareArrowUpRight: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 2.25v1.5H3.75v10.5h10.5V10.5h1.5V15a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 3 2.25h4.5Zm5.69 1.5H9.75v-1.5h6v6h-1.5V4.81L9 10.06 7.94 9l5.25-5.25Z"
      fill="currentColor"
    />
  </svg>
);
