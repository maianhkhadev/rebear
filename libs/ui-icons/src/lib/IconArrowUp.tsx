import { SVGProps } from 'react';

const IconArrowUp = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 19a1 1 0 1 0 2 0V7.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-.005.005-5.995 5.995a1 1 0 0 0 1.414 1.414L11 7.414V19Z"
      fill="currentColor"
    />
  </svg>
);

export default IconArrowUp;
