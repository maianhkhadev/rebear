import { SVGProps } from 'react';

const IconArrowRight = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10.959a1 1 0 1 0 0 2h11.627l-4.334 4.334a1 1 0 0 0 1.414 1.414l5.997-5.997.003-.003a1.002 1.002 0 0 0 0-1.414l-.003-.003-5.997-5.997a1 1 0 1 0-1.414 1.414l4.252 4.252H5Z"
      fill="currentColor"
    />
  </svg>
);

export default IconArrowRight;
