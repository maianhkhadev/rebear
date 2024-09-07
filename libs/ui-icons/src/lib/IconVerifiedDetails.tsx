import { SVGProps } from 'react';

const IconVerifiedDetails = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd">
      <g fill="#50E2D1">
        <path d="M10.707 16.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L4 21.586l5.293-5.293a1 1 0 0 1 1.414 0Z" />
        <path d="M10.707 16.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L4 21.586l5.293-5.293a1 1 0 0 1 1.414 0Z" />
      </g>
      <g fill="currentColor">
        <path d="M3 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-5a1 1 0 1 1 0-2h5V3H5v10a1 1 0 1 1-2 0V3Z" />
        <path d="M12 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
        <path d="M13.148 13.228a3 3 0 0 0-3.27.65 1 1 0 0 1-1.414-1.414A5 5 0 0 1 17 16a1 1 0 1 1-2 0 3 3 0 0 0-1.852-2.772Z" />
      </g>
    </g>
  </svg>
);

export default IconVerifiedDetails;
