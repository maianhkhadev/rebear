import { SVGProps } from 'react';

const IconFolderAdd = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M4 4a2 2 0 0 0-2 2v6a1 1 0 1 0 2 0V6h3.586l1.707 1.707A1 1 0 0 0 10 8h10v10h-6a1 1 0 1 0 0 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9.586L8.707 4.293A1 1 0 0 0 8 4H4Z" />
      <path d="M7 12.041a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2H8v3a1 1 0 1 1-2 0v-3H3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);

export default IconFolderAdd;
