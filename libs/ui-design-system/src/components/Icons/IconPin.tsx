import { SVGProps } from 'react';

const IconPin = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="m16 11 2 2v2h-5v6l-1 1-1-1v-6H6v-2l2-2V4H7V2h10v2h-1v7Zm-7.15 2h6.3L14 11.85V4h-4v7.85L8.85 13Z"
      fill="currentColor"
    />
  </svg>
);

export default IconPin;
