import { SVGProps } from 'react';

const IconSend = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 20V4l19 8-19 8Zm2-3 11.85-5L5 7v3.5l6 1.5-6 1.5V17Z"
      fill="#4E51A7"
    />
  </svg>
);

export default IconSend;
