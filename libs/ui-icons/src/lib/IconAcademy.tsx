import { SVGProps } from 'react';

const IconAcademy = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.395 20.602a1 1 0 0 1-.954 0l-6-3.257a1 1 0 0 1-.523-.88v-5.404l-2.4-1.32a1 1 0 0 1 .003-1.754l8.918-4.865a1 1 0 0 1 .958 0l10 5.455a1 1 0 0 1 .521.878v6.406a1 1 0 1 1-2 0v-5.9l-2 1.1v5.405a1 1 0 0 1-.523.879l-6 3.257Zm-.477-8.041 6.85-3.7-6.85-3.7-6.85 3.7 6.85 3.7Zm0 6.025 5-2.7V12.11L12.4 14.596a1 1 0 0 1-.964 0L6.918 12.11v3.775l5 2.7Z"
      fill="currentColor"
    />
  </svg>
);

export default IconAcademy;
