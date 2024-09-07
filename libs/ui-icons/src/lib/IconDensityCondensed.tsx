import { SVGProps } from 'react';

const IconDensityCondensed = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5.75a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5Zm0 10.5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Zm-1-6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 2.5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
      fill="currentColor"
    />
  </svg>
);

export default IconDensityCondensed;
