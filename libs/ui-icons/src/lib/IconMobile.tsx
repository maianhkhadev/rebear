import { SVGProps } from 'react';

const IconMobile = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7.714 22c-.471 0-.875-.178-1.21-.534A1.805 1.805 0 0 1 6 20.182V3.818c0-.5.168-.928.504-1.284.335-.356.739-.534 1.21-.534h8.572c.471 0 .875.178 1.21.534.336.356.504.784.504 1.284v16.364c0 .5-.168.928-.504 1.284-.335.356-.739.534-1.21.534H7.714Zm0-2.727v.909h8.572v-.91H7.714Zm0-1.819h8.572V6.545H7.714v10.91Zm0-12.727h8.572v-.909H7.714v.91Z"
      fill="currentColor"
    />
  </svg>
);

export default IconMobile;
