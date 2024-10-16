import { SVGProps } from 'react';

const IconAmountTotalDollar = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 2a2 2 0 0 0-2 2v1.999a1 1 0 0 0 2 0v-2h5.586L18.5 8.413v11.582h-4a1 1 0 1 0 0 2h4a2 2 0 0 0 2-2V8.413a2 2 0 0 0-.586-1.414L15.5 2.586A2 2 0 0 0 14.086 2H8.5Zm-.08 12.532c2.055.39 3 1.485 3 2.88 0 1.694-1.29 2.893-3.315 3.058V22h-1.11v-1.53c-2.1-.165-3.435-1.304-3.495-3.464l2.115-.21c.03 1.245.645 1.755 1.38 1.92v-2.4l-.435-.075c-2.025-.345-2.805-1.47-2.805-2.969 0-1.62 1.275-2.73 3.24-2.894v-1.38h1.11v1.395c1.86.165 3.21 1.155 3.21 2.984l-2.1.195c0-.84-.435-1.275-1.11-1.424v2.324l.315.06Zm-1.425-2.415c-.69.12-1.125.495-1.125 1.05 0 .495.18.855 1.125 1.095v-2.145Zm1.11 6.614c.705-.12 1.17-.51 1.17-1.095 0-.525-.3-.9-1.17-1.125v2.22Z"
      fill="currentColor"
    />
  </svg>
);

export default IconAmountTotalDollar;
