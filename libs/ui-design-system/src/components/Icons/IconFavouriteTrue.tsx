import { SVGProps } from 'react';

const IconFavouriteTrue = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M10.655 3.216c.55-1.115 2.14-1.115 2.69 0l2.258 4.575 5.049.734c1.23.178 1.721 1.69.831 2.558l-3.653 3.561.862 5.029c.21 1.225-1.076 2.16-2.176 1.581L12 18.88l-4.516 2.374c-1.1.578-2.386-.356-2.176-1.581l.862-5.029-3.653-3.56c-.89-.869-.4-2.38.831-2.56l5.049-.733 2.258-4.575Z" />
      <path d="M10.655 3.216c.55-1.115 2.14-1.115 2.69 0l2.258 4.575 5.049.734c1.23.178 1.721 1.69.831 2.558l-3.653 3.561.862 5.029c.21 1.225-1.076 2.16-2.176 1.581L12 18.88l-4.516 2.374c-1.1.578-2.386-.356-2.176-1.581l.862-5.029-3.653-3.56c-.89-.869-.4-2.38.831-2.56l5.049-.733 2.258-4.575Z" />
    </g>
  </svg>
);

export default IconFavouriteTrue;
