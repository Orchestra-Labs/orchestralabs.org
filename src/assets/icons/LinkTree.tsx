import React from 'react';

export const LinkTree: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    viewBox="0 0 400 530"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.241L417 173.268v70.502H290.252l90.183 87.63L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
      fill="currentColor"
    />
  </svg>
);
