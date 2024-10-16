import { SVGProps } from 'react';

const IconConfiguration = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.485 6.734 8.66 4.909A4.105 4.105 0 1 1 4.909 8.66l1.825 1.825a2.653 2.653 0 1 0 3.751-3.751ZM8.074 9.146 5.126 6.197l-.012-.012a.947.947 0 0 0-1.54.25 6 6 0 0 0 7.025 8.348l5.337 5.337a3 3 0 0 0 4.243-4.242l-5.37-5.37a6 6 0 0 0-8.373-6.935.947.947 0 0 0-.25 1.54l.012.012 2.947 2.948a.758.758 0 1 1-1.071 1.072Zm5.84 3.297 4.85 4.85a1 1 0 0 1-1.414 1.414l-4.84-4.84a6.035 6.035 0 0 0 1.405-1.424Z"
      fill="currentColor"
    />
  </svg>
);

export default IconConfiguration;
