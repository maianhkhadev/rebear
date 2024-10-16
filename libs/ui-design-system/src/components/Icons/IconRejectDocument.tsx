import { SVGProps } from 'react';

const IconRejectDocument = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M5 3.959a2 2 0 0 1 2-2h5.586A2 2 0 0 1 14 2.545l4.414 4.414A2 2 0 0 1 19 8.373V19.96a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1v-17Zm2 16h10V8.373L12.586 3.96H7v16Z" />
      <path d="M9.293 10.293a1 1 0 0 1 1.414 0L12 11.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 13l1.293 1.293a1 1 0 0 1-1.414 1.414L12 14.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 13l-1.293-1.293a1 1 0 0 1 0-1.414Z" />
    </g>
  </svg>
);

export default IconRejectDocument;
