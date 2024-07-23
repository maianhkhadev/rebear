import { SVGProps } from 'react';

const IconKickstart = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.584 3.031c.16.006.3.01.416.01h1v1c0 .116.005.255.01.415.036 1.077.103 3.096-.99 5.282-.46.918-1.11 1.849-2.02 2.76v4.543a1 1 0 0 1-.758.97l-4 1a1 1 0 0 1-1.242-.97v-1.714c-.523.224-1.075.442-1.658.654l-.599.218-.45-.45-2-2-.45-.451.217-.598c.212-.584.43-1.136.654-1.659H6a1 1 0 0 1-.97-1.242l1-4A1 1 0 0 1 7 6.04h4.544c.91-.91 1.84-1.56 2.759-2.02 2.186-1.092 4.205-1.025 5.281-.99ZM14 15.373c.74-.395 1.404-.801 2-1.216v2.103l-2 .5v-1.387ZM9.885 8.04H7.78l-.5 2h1.388c.394-.74.8-1.403 1.216-2Zm-.723 5.748 1.09 1.09c4.915-1.898 7.038-4.154 7.979-6.035.735-1.47.803-2.789.79-3.823-1.035-.014-2.353.054-3.824.79-1.88.94-4.137 3.063-6.035 7.978ZM16 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7.293 7.748a1 1 0 1 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l2-2Zm4-.414a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Zm-5-3.586a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default IconKickstart;
