import { SVGProps } from 'react';

const IconAutotransactions = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414V9.5a1 1 0 1 1-2 0V8.414L12.586 4H7v16h3.5a1 1 0 1 1 0 2H7a2 2 0 0 1-2-2V4Z"
      />
      <path d="M15 21v-8l6 4-6 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.528 12.118a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 14 21v-8a1 1 0 0 1 .528-.882ZM16 14.868v4.263L19.197 17 16 14.868Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.586L18.414 7A2 2 0 0 1 19 8.414V9.5a1 1 0 1 1-2 0V8.414L12.586 4H7v16h3.5a1 1 0 1 1 0 2H7a2 2 0 0 1-2-2V4Z"
      />
      <path d="M15 21v-8l6 4-6 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.528 12.118a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 14 21v-8a1 1 0 0 1 .528-.882ZM16 14.868v4.263L19.197 17 16 14.868Z"
      />
    </g>
  </svg>
);

export default IconAutotransactions;
