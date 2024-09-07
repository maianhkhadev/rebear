import { SVGProps } from 'react';

const IconAccessibility = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 10 4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 12 2c.55 0 1.02.196 1.412.587C13.804 2.98 14 3.45 14 4s-.196 1.02-.588 1.412A1.926 1.926 0 0 1 12 6ZM9 22V9c-1-.083-2.017-.208-3.05-.375A29.652 29.652 0 0 1 3 8l.5-2c1.3.35 2.683.604 4.15.763C9.117 6.92 10.567 7 12 7c1.433 0 2.883-.08 4.35-.237A27.17 27.17 0 0 0 20.5 6l.5 2c-.933.25-1.917.458-2.95.625A40.03 40.03 0 0 1 15 9v13h-2v-6h-2v6H9Z"
      fill="currentColor"
    />
  </svg>
);

export default IconAccessibility;
