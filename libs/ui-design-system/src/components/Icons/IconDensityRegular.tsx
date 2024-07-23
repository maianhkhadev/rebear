import { SVGProps } from 'react';

const IconDensityRegular = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5Zm0 8a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Zm-1-3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 7a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
      fill="currentColor"
    />
  </svg>
);

export default IconDensityRegular;
