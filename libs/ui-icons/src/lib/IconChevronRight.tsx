import { SVGProps } from 'react';

const IconChevronRight = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M10.707 18.207a1 1 0 0 1-1.414-1.414l4.293-4.293-4.293-4.293a1 1 0 1 1 1.414-1.414l4.997 4.997.003.003a1.006 1.006 0 0 1 .256.435 1 1 0 0 1-.256.98c-.002 0-.004.003-.005.005l-4.995 4.994Z" />
      <path d="M10.707 18.207a1 1 0 0 1-1.414-1.414l4.293-4.293-4.293-4.293a1 1 0 1 1 1.414-1.414l4.997 4.997.003.003a1.006 1.006 0 0 1 .256.435 1 1 0 0 1-.256.98c-.002 0-.004.003-.005.005l-4.995 4.994Z" />
    </g>
  </svg>
);

export default IconChevronRight;
