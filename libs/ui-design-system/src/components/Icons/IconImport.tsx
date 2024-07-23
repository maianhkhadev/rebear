import { SVGProps } from 'react';

const IconImport = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M12 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Z" />
      <path d="M16.707 11.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0Z" />
      <path d="M12.707 16.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414Z" />
      <path d="M3 11a1 1 0 0 1 1 1v7h16v-7a1 1 0 1 1 2 0v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default IconImport;
