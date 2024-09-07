import { SVGProps } from 'react';

const IconAtm = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.375 15v-4.5h-2.25V9h6v1.5h-2.25V15h-1.5ZM2 15v-5c0-.283.096-.52.288-.713A.968.968 0 0 1 3 9h3c.283 0 .52.096.713.287.191.192.287.43.287.713v5H5.5v-1.5h-2V15H2Zm1.5-3h2v-1.5h-2V12Zm12 3v-5c0-.283.096-.52.287-.713A.968.968 0 0 1 16.5 9H21c.283 0 .52.096.712.287.192.192.288.43.288.713v5h-1.5v-4.5h-1V14H18v-3.5h-1V15h-1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default IconAtm;
