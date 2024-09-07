import { SVGProps } from 'react';

const IconStatusActivate = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Zm-4.268.954C8.342 2.665 9 3.144 9 3.82v.761A8.003 8.003 0 0 0 12 20a8 8 0 0 0 3-15.419V3.82c0-.675.657-1.155 1.268-.866A10.001 10.001 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-3.996 2.344-7.445 5.732-9.046Z"
      fill="currentColor"
    />
  </svg>
);

export default IconStatusActivate;
