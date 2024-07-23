import { SVGProps } from 'react';

const IconDragSixDot = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 7 18c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 9 16c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 9 20Zm6 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 13 18c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 15 16c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.926 1.926 0 0 1 15 20Zm-6-6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 7 12c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 9 10c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 9 14Zm6 0c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 13 12c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 15 10c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412 0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 15 14ZM9 8c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 7 6c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 9 4c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 9 8Zm6 0c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 13 6c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 15 4c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412 0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0 1 15 8Z"
      fill="currentColor"
    />
  </svg>
);

export default IconDragSixDot;
