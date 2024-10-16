import { SVGProps } from 'react';

const IconAmountDueGreaterThan30Days = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 4a2 2 0 0 1 2-2h5.586a2 2 0 0 1 1.414.586L20.914 7a2 2 0 0 1 .586 1.414V20a2 2 0 0 1-2 2h-2v-2h2V8.414L15.086 4H9.5v2.009l-2 .007V4Zm0 5a1 1 0 0 0-2 0v1h-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V9a1 1 0 1 0-2 0v1h-3V9Zm6 4.818h-9V20h9v-6.182Z"
      fill="currentColor"
    />
  </svg>
);

export default IconAmountDueGreaterThan30Days;
