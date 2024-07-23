import { SVGProps } from 'react';

const IconMoreHorizontal = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm5-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
      <path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm5-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    </g>
  </svg>
);

export default IconMoreHorizontal;
