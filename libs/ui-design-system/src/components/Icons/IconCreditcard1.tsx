import { SVGProps } from 'react';

const IconCreditcard1 = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={14.5} cy={15} r={2} fill="#50E2D1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 6H4v2h16V6ZM4 18v-7h16v7H4ZM4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm3 10a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2H7Zm10 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="currentColor"
    />
  </svg>
);

export default IconCreditcard1;
