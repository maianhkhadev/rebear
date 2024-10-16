import { SVGProps } from 'react';

const IconAlert = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.5a1 1 0 0 0-1 1v1c0 .033.002.066.005.099A5.002 5.002 0 0 0 7 9.5v2.041c0 .608-1.11 2.497-1.98 3.883-.426.678.057 1.576.858 1.576h12.244c.8 0 1.284-.898.858-1.576-.87-1.386-1.98-3.274-1.98-3.883V9.5c0-2.42-1.72-4.44-4.005-4.901.003-.033.005-.066.005-.099v-1a1 1 0 0 0-1-1Zm3 9v-2a3 3 0 0 0-6 0v2.041c0 .59-.223 1.152-.34 1.434a13.4 13.4 0 0 1-.56 1.16c-.151.281-.316.574-.485.865h8.77c-.17-.291-.334-.584-.484-.865-.208-.388-.408-.79-.562-1.16-.116-.282-.339-.844-.339-1.434V11.5Zm-4 7a1 1 0 1 0 2 0h2a3 3 0 0 1-6 0h2Z"
      fill="currentColor"
    />
  </svg>
);

export default IconAlert;
