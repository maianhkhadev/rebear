import { SVGProps } from 'react';

const IconLastPage = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm-4.295 5.332.002.002a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l4.293-4.293-4.293-4.293a1 1 0 0 1 1.414-1.414l4.998 4.998Z"
      fill="currentColor"
    />
  </svg>
);

export default IconLastPage;
