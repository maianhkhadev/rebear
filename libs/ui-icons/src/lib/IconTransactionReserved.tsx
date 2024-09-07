import { SVGProps } from 'react';

const IconTransactionReserved = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M10 10v5h1.135v-1.802h.626L12.726 15H14L12.857 13c.273-.118.49-.294.649-.53.165-.24.247-.544.247-.912 0-.399-.088-.71-.263-.936a1.393 1.393 0 0 0-.702-.475 3.083 3.083 0 0 0-.973-.146H10Zm1.722 2.3h-.587v-1.402h.587c.299 0 .525.048.68.145.16.097.239.269.239.514s-.08.432-.24.56c-.154.123-.38.184-.679.184Z" />
      <path d="M7.833 3.667c-.92 0-1.666.746-1.666 1.667v13.333c0 .92.746 1.667 1.666 1.667h8.334c.92 0 1.666-.747 1.666-1.667V9.012c0-.442-.175-.866-.488-1.178l-3.678-3.679a1.667 1.667 0 0 0-1.179-.488H7.833Zm0 1.667h4.655l3.679 3.678v9.655H7.833V5.334Z" />
    </g>
  </svg>
);

export default IconTransactionReserved;
