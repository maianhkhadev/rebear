import { SVGProps } from 'react';

const IconArrowCornerDownRight = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 13H7a3 3 0 0 1-3-3V6a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default IconArrowCornerDownRight;
