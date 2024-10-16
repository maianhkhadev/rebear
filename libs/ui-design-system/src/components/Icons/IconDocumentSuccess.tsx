import { SVGProps } from 'react';

const IconDocumentSuccess = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1a1 1 0 1 0 0-2H7V4h5.586L17 8.414v2.627a1 1 0 1 0 2 0V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Z" />
      <path d="M21.707 14.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L15 19.586l5.293-5.293a1 1 0 0 1 1.414 0Z" />
    </g>
  </svg>
);

export default IconDocumentSuccess;
