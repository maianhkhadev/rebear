import { SVGProps } from 'react';

const IconGoTo = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M14 3a1 1 0 1 0 0 2h3.586l-5.793 5.793a1 1 0 0 0 1.414 1.414L19 6.414V10a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-6Z" />
      <path d="M4 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v4H5V7h4a1 1 0 0 0 0-2H4Z" />
    </g>
  </svg>
);

export default IconGoTo;
