import { SVGProps } from 'react';

const IconOptions = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M8 6c0-.552.42-1 .938-1h10.124c.518 0 .938.448.938 1s-.42 1-.938 1H8.938C8.42 7 8 6.552 8 6ZM8 12c0-.552.42-1 .938-1h10.124c.518 0 .938.448.938 1s-.42 1-.938 1H8.938C8.42 13 8 12.552 8 12ZM8.938 17C8.42 17 8 17.448 8 18s.42 1 .938 1h10.124c.518 0 .938-.448.938-1s-.42-1-.938-1H8.938ZM6.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </g>
  </svg>
);

export default IconOptions;
