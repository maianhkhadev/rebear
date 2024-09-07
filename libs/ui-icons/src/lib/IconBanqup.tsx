import { SVGProps } from 'react';

const IconBanqup = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="m5.037 8.898 2.38 7.506 6.105 4.165.055-.018 5.611-7.54V11.42L8.442 4.052 5.037 8.898ZM7.887 1 2.6 8.526l2.937 9.264L13.175 23l1.762-.579 6.463-8.684v-3.474L7.887 1Z" />
      <path d="m5.037 8.898 2.38 7.506 6.105 4.165.055-.018 5.611-7.54V11.42L8.442 4.052 5.037 8.898ZM7.887 1 2.6 8.526l2.937 9.264L13.175 23l1.762-.579 6.463-8.684v-3.474L7.887 1Z" />
    </g>
  </svg>
);

export default IconBanqup;
