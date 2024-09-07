import { SVGProps } from 'react';

const IconLock = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3Zm-3.536-.536A5 5 0 0 0 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-8.536-3.536ZM12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2H6v8h12v-8Z"
      fill="currentColor"
    />
  </svg>
);

export default IconLock;
