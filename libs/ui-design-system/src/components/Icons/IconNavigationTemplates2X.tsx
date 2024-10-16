import { SVGProps } from 'react';

const IconNavigationTemplates2X = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M14 23a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 13a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-7Zm0 2h7v3h-7v-3Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7Zm3-1a1 1 0 0 0-1 1v2h22V7a1 1 0 0 0-1-1H6ZM5 25V11h5v15H6a1 1 0 0 1-1-1Zm7 1h14a1 1 0 0 0 1-1V11H12v15Z"
      />
    </g>
  </svg>
);

export default IconNavigationTemplates2X;
