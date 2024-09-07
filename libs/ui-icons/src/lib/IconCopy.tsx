import { SVGProps } from 'react';

const IconCopy = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3a2 2 0 0 0-2 2v8a1 1 0 1 0 2 0V5h8a1 1 0 1 0 0-2H5Zm4 4.041a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H9Zm0 2h9v9H9v-9Z"
      fill="currentColor"
    />
  </svg>
);

export default IconCopy;
