import { SVGProps } from 'react';

const IconTasks = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.156 4.084A3.001 3.001 0 0 1 11 2.041h2c1.322 0 2.445.856 2.844 2.043h1.533a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H6.623a2 2 0 0 1-2-2V6.084a2 2 0 0 1 2-2h1.533ZM13 8.041c1.29 0 2.39-.814 2.814-1.957h1.563V20H6.623V6.084h1.563A3.001 3.001 0 0 0 11 8.041h2Zm-2-4a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1 6a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Zm-1 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default IconTasks;
