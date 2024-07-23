import { SVGProps } from 'react';

const IconFilterFalse = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm3 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm4 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default IconFilterFalse;
