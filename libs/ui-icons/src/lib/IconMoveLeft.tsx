import { SVGProps } from 'react';

const IconMoveLeft = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M10.293 6.293a1 1 0 1 1 1.414 1.414L7.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5Zm7 0a1 1 0 1 1 1.414 1.414L14.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5Z" />
      <path d="M10.293 6.293a1 1 0 1 1 1.414 1.414L7.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5Zm7 0a1 1 0 1 1 1.414 1.414L14.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5Z" />
    </g>
  </svg>
);

export default IconMoveLeft;
