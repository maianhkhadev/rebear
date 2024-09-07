import { SVGProps } from 'react';

const IconTransfer = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M21.206 14.282a1 1 0 0 1 .002 1.415l-5.01 5.02a1 1 0 1 1-1.416-1.413l5.01-5.02a1 1 0 0 1 1.414-.002Z" />
      <path d="M2.5 14.99a1 1 0 0 1 1-1h17a1 1 0 0 1 0 2h-17a1 1 0 0 1-1-1ZM9.216 3.282a1 1 0 0 1 .002 1.415l-5.01 5.02a1 1 0 0 1-1.416-1.413l5.01-5.02a1 1 0 0 1 1.414-.002Z" />
      <path d="M2.5 9.01a1 1 0 0 1 1-1h17a1 1 0 0 1 0 2h-17a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default IconTransfer;
