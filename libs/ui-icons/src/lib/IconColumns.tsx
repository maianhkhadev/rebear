import { SVGProps } from 'react';

const IconColumns = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 18h4V6H4v12Zm6 0h4V6h-4v12Zm6 0h4V6h-4v12ZM4 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 4 4h16c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 20 20H4Z"
      fill="currentColor"
    />
  </svg>
);

export default IconColumns;
