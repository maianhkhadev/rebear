import { SVGProps } from 'react';

const IconIdea = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M12 5.5a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 15.041v-1.376a6.5 6.5 0 1 0-8 0v1.376a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1Zm-1.232-2.952-.768.6v1.352h-4V12.69l-.768-.6a4.5 4.5 0 1 1 5.536 0Z"
      />
      <path d="M10 20.041a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM8 18.041a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" />
    </g>
  </svg>
);

export default IconIdea;
