import { SVGProps } from 'react';

const IconNavigationTemplates = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M11 16a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1ZM12 11a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4ZM20 5H4v2h16V5ZM4 19V9h3v10H4Zm5 0V9h11v10H9Z"
      />
    </g>
  </svg>
);

export default IconNavigationTemplates;
