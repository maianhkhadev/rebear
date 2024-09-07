import { SVGProps } from 'react';

const IconNavigationTasks2X = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M20 11.5a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8ZM21 16.5a1 1 0 0 0-1-1h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1ZM20 19.5a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3.5h-4a3.001 3.001 0 0 0-2.83 2H9a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-19a2 2 0 0 0-2-2h-2.17a3.001 3.001 0 0 0-2.83-2Zm-4 6a3.001 3.001 0 0 1-2.83-2H9v19h14v-19h-2.17a3.001 3.001 0 0 1-2.83 2h-4Zm4-4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h4Z"
      />
    </g>
  </svg>
);

export default IconNavigationTasks2X;
