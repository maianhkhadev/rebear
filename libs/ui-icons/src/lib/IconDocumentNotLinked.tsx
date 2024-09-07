import { SVGProps } from 'react';

const IconDocumentNotLinked = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M7 2a2 2 0 0 0-2 2v6a1 1 0 1 0 2 0V4h5.586L17 8.414V20h-4a1 1 0 1 0 0 2h4a2 2 0 0 0 2-2V8.414A2 2 0 0 0 18.414 7L14 2.586A2 2 0 0 0 12.586 2H7Z" />
      <path d="M2.293 15.293a1 1 0 0 1 1.414 0L5.5 17.086l1.793-1.793a1 1 0 0 1 1.414 1.414L6.914 18.5l1.793 1.793a1 1 0 1 1-1.414 1.414L5.5 19.914l-1.793 1.793a1 1 0 0 1-1.414-1.414L4.086 18.5l-1.793-1.793a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default IconDocumentNotLinked;
