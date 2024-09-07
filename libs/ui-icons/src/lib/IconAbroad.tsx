import { SVGProps } from 'react';

const IconAbroad = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8.75 22v-1.05l2-1.5v-6.275L2 15.75V14.3l8.75-5.15v-5.9c0-.35.12-.646.363-.888C11.354 2.121 11.65 2 12 2s.646.12.887.362c.242.242.363.538.363.888v5.9L22 14.3v1.45l-8.75-2.575v6.275l2 1.5V22L12 21.075 8.75 22Z"
      fill="currentColor"
    />
  </svg>
);

export default IconAbroad;
