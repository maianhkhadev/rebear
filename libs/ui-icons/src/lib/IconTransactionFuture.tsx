import { SVGProps } from 'react';

const IconTransactionFuture = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.833 3.667c-.92 0-1.666.746-1.666 1.667v13.333c0 .92.746 1.667 1.666 1.667h8.334c.92 0 1.666-.747 1.666-1.667V9.012c0-.442-.175-.866-.488-1.178l-3.678-3.679a1.667 1.667 0 0 0-1.179-.488H7.833Zm0 1.667h4.655l3.679 3.678v9.655H7.833V5.334Z"
      />
      <path d="M11 15v-5h3v.951h-1.927v1.158h1.65v.951h-1.65V15H11Z" />
    </g>
  </svg>
);

export default IconTransactionFuture;
