import { SVGProps } from 'react';

const IconRemove = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M11 11H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-7Z" fill="currentColor" />
  </svg>
);

export default IconRemove;
