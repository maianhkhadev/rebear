import { SVGProps } from 'react';

const IconLogIn = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 19a1 1 0 0 0 1 1h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-7a1 1 0 1 0 0 2h7v12h-7a1 1 0 0 0-1 1Zm-5-7a1 1 0 0 1 1-1h5.545L9.293 9.748a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.627 13H5a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default IconLogIn;
