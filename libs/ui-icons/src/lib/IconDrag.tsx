import { SVGProps } from 'react';

const IconDrag = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.53 4.51a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.061l.72-.72v4.44H6.81l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h4.44v4.44l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72v-4.44h4.44l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72h-4.44v-4.44l.72.72a.75.75 0 1 0 1.06-1.06l-2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default IconDrag;
