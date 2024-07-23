import { SVGProps } from 'react';

const IconComputer = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2.944 21a.944.944 0 1 1 0-1.889h19.112a.944.944 0 0 1 0 1.889H2.944Zm1.92-2.833c-.525 0-.975-.185-1.349-.555a1.81 1.81 0 0 1-.56-1.334V5.888c0-.519.186-.963.56-1.333C3.89 4.185 4.34 4 4.864 4h15.272c.525 0 .975.185 1.349.555.373.37.56.814.56 1.334v10.389c0 .52-.187.964-.56 1.334-.374.37-.824.555-1.349.555H4.864Zm0-1.89h15.272V5.89H4.864v10.389Z"
      fill="currentColor"
    />
  </svg>
);

export default IconComputer;
