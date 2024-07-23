import { SVGProps } from 'react';

const IconChevronDown = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.29 15.704-4.997-4.997a1 1 0 0 1 1.414-1.414L12 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.417-.003Z"
      fill="currentColor"
    />
  </svg>
);

export default IconChevronDown;
