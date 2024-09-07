import { SVGProps } from 'react';

const IconEmail = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm17.964 0 .036.041V6h-.036ZM5.472 6h13.056L12 11.712 5.472 6ZM4.036 6 4 6.041V6h.036Zm8.623 7.794L20 7.37V18H4V7.37l7.341 6.424a1 1 0 0 0 1.318 0Z"
      fill="currentColor"
    />
  </svg>
);

export default IconEmail;
