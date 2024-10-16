import { SVGProps } from 'react';

const IconChevronLeft = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.293 17.707a1 1 0 0 0 1.414-1.414L10.414 12l4.293-4.293a1 1 0 0 0-1.414-1.414L8.296 11.29l-.003.003a1.006 1.006 0 0 0-.256.435 1 1 0 0 0 .256.98c.002 0 .004.003.005.005l4.995 4.994Z"
      fill="currentColor"
    />
  </svg>
);

export default IconChevronLeft;
