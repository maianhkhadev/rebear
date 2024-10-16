import { SVGProps } from 'react';

const IconNavigationInsights2X = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M6 6a1 1 0 0 0-2 0v20a1 1 0 0 0 1 1h22a1 1 0 1 0 0-2H6V6Z" />
      <path d="M24.187 9.846a2 2 0 1 1 1.639 1.147l-5.013 7.161a2 2 0 1 1-3.745.328l-2.55-2.55a2.006 2.006 0 0 1-.711.059l-2.986 4.18a2 2 0 1 1-1.628-1.162l2.986-4.18a2 2 0 1 1 3.753-.31l2.55 2.549a2.006 2.006 0 0 1 .692-.06l5.013-7.162Z" />
    </g>
  </svg>
);

export default IconNavigationInsights2X;
