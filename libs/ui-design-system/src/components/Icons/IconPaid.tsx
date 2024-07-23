import { SVGProps } from 'react';

const IconPaid = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd">
      <path
        d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a1 1 0 1 0-2 0v8H4v-7h6a1.5 1.5 0 0 0 0-3H4V6h4a1 1 0 0 0 0-2H4Zm2 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm10-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"
        fill="currentColor"
      />
      <path
        d="M22.707 1.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L16 6.586l5.293-5.293a1 1 0 0 1 1.414 0Z"
        fill="#50E2D1"
      />
    </g>
  </svg>
);

export default IconPaid;
