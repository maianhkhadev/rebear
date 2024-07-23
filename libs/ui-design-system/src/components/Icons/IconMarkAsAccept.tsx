import { SVGProps } from 'react';

const IconMarkAsAccept = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd">
      <g fill="currentColor">
        <path d="M5 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414V20a2 2 0 0 1-2 2h-3a1 1 0 1 1 0-2h3V8.414L12.586 4H7v9a1 1 0 1 1-2 0V4Z" />
        <path d="M5 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414V20a2 2 0 0 1-2 2h-3a1 1 0 1 1 0-2h3V8.414L12.586 4H7v9a1 1 0 1 1-2 0V4Z" />
      </g>
      <g fill="#50E2D1">
        <path d="M12.707 14.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6 19.586l5.293-5.293a1 1 0 0 1 1.414 0Z" />
        <path d="M12.707 14.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6 19.586l5.293-5.293a1 1 0 0 1 1.414 0Z" />
      </g>
    </g>
  </svg>
);

export default IconMarkAsAccept;
