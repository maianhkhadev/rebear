import { SVGProps } from 'react';

const IconDragMobile = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M3.75 12a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.75 8.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.75 15.75A.75.75 0 0 1 4.5 15h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" />
    </g>
  </svg>
);

export default IconDragMobile;
