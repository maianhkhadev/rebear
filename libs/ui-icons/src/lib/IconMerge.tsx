import { SVGProps } from 'react';

const IconMerge = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.4 21 5 19.6l4.825-4.85A3.95 3.95 0 0 0 11 11.925v-5.1L9.4 8.4 8 7l4-4 4 4-1.4 1.4L13 6.825v5.1a3.95 3.95 0 0 0 1.175 2.825L19 19.6 17.6 21 12 15.4 6.4 21Z"
      fill="currentColor"
    />
  </svg>
);

export default IconMerge;
