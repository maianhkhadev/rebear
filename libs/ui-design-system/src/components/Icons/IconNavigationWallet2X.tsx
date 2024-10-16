import { SVGProps } from 'react';

const IconNavigationWallet2X = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2h-2V7a1 1 0 0 0-1-1H5a1 1 0 0 0 0 2h12v2H5a3 3 0 0 1-3-3Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10v15a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3h2v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7h2v1h21a3 3 0 0 1 3 3v3h-2v-3a1 1 0 0 0-1-1H4Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 16a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6Z"
      />
      <path d="M24.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 18.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
  </svg>
);

export default IconNavigationWallet2X;
