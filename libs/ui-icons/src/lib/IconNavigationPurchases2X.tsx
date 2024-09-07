import { SVGProps } from 'react';

const IconNavigationPurchases2X = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M18 12.834a1 1 0 0 0 .707-.293l3.333-3.334a1 1 0 0 0-1.414-1.414L19 9.42V1.833a1 1 0 0 0-2 0V9.42l-1.626-1.626a1 1 0 1 0-1.415 1.414l3.334 3.334a1 1 0 0 0 .707.293ZM12.5 24a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9 25.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM22.5 24a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM19 25.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" />
      <path d="M3 4.5a1 1 0 0 1 1-1h3.18a2 2 0 0 1 1.961 1.608L11.82 18.5h12.416l2.8-10.263a1 1 0 0 1 1.929.526l-2.8 10.263a2 2 0 0 1-1.929 1.474H11.82a2 2 0 0 1-1.961-1.608L7.18 5.5H4a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default IconNavigationPurchases2X;
