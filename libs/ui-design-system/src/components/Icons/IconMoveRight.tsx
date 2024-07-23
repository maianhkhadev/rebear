import { SVGProps } from 'react';

const IconMoveRight = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M6.707 6.293a1 1 0 0 0-1.414 1.414L9.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Zm7 0a1 1 0 1 0-1.414 1.414L16.586 12l-4.293 4.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Z" />
      <path d="M6.707 6.293a1 1 0 0 0-1.414 1.414L9.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Zm7 0a1 1 0 1 0-1.414 1.414L16.586 12l-4.293 4.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5Z" />
    </g>
  </svg>
);

export default IconMoveRight;
