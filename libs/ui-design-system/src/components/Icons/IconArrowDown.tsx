import { SVGProps } from 'react';

const IconArrowDown = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 4a1 1 0 0 0-1 1v11.586l-4.293-4.293a1 1 0 0 0-1.414 1.414l5.994 5.995.006.005a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L13 16.586V5a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default IconArrowDown;
