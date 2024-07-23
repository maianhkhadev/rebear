import { SVGProps } from 'react';

const IconNavigationDocCenter = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M3 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2h5a2 2 0 0 1 2 2v6a1 1 0 1 1-2 0v-2h-8a1 1 0 1 1 0-2h8V7h-5.5A1.5 1.5 0 0 1 12 5.5V5H5v3.5a1 1 0 0 1-2 0V5Z" />
      <path d="M6.293 10.793a1 1 0 0 1 1.414 1.414L6.455 13.46H13a1 1 0 1 1 0 2H6.373l1.334 1.334a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.415l3-3ZM16.293 14.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l1.334-1.334H11a1 1 0 0 1 0-2h6.545l-1.252-1.252a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default IconNavigationDocCenter;
