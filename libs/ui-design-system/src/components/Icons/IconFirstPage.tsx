import { SVGProps } from 'react';

const IconFirstPage = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0V7Zm8.293-.666-4.997 4.997-.003.003a1 1 0 0 0 0 1.414l.003.003 4.997 4.997a1 1 0 0 0 1.414-1.414l-4.293-4.293 4.293-4.293a1 1 0 0 0-1.414-1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default IconFirstPage;
