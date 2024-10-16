import { SVGProps } from 'react';

const IconReset = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.207 1.293a1 1 0 1 0-1.414 1.414L12.086 4H12a8 8 0 1 0 8 8 1 1 0 1 0-2 0 6 6 0 1 1-6-6h.086l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3Z"
      fill="currentColor"
    />
  </svg>
);

export default IconReset;
