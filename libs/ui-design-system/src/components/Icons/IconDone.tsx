import { SVGProps } from 'react';

const IconDone = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd">
      <path
        d="M14.757 7H7v10h10v-3.757l2-2V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9.757l-2 2Z"
        fill="currentColor"
      />
      <path
        d="M19.707 6.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L12 12.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
        fill="#50E2D1"
      />
    </g>
  </svg>
);

export default IconDone;
