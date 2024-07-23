import { SVGProps } from 'react';

const IconCheck = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.207 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L9.5 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
      fill="currentColor"
    />
  </svg>
);

export default IconCheck;
