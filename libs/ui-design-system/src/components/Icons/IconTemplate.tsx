import { SVGProps } from 'react';

const IconTemplate = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 19.041a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14Zm5 0v-10H4v10h3Zm2-10v10h11v-10H9Zm3 2a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm-7-11h16v2H4v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default IconTemplate;
