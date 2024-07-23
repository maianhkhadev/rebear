import { SVGProps } from 'react';

const IconNavigationInbox = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M13 3a1 1 0 1 0-2 0v7.586L9.707 9.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 10.586V3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14a2 2 0 0 1 2-2h1.444a2 2 0 0 1 2 2v2h9.112v-2a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Zm2 0v6h16v-6h-1.444v2a2 2 0 0 1-2 2H7.444a2 2 0 0 1-2-2v-2H4Z"
      />
    </g>
  </svg>
);

export default IconNavigationInbox;
