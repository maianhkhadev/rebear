import { SVGProps } from 'react';

const IconArrowLeft = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 10.959a1 1 0 1 1 0 2H7.373l4.334 4.334a1 1 0 0 1-1.414 1.414L4.296 12.71l-.003-.003a1.002 1.002 0 0 1-.092-1.309c.028-.037.059-.072.092-.105l.003-.003 5.997-5.997a1 1 0 1 1 1.414 1.414L7.455 10.96H19Z"
      fill="currentColor"
    />
  </svg>
);

export default IconArrowLeft;
