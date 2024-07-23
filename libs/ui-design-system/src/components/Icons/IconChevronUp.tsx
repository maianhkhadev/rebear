import { SVGProps } from 'react';

const IconChevronUp = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.293 9.293-.005.005-4.995 4.995a1 1 0 0 0 1.414 1.414L12 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0Z"
      fill="currentColor"
    />
  </svg>
);

export default IconChevronUp;
