import { SVGProps } from 'react';

const IconResend = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4.3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5.5a1 1 0 1 0 0-2H5V7.617l6.35 5.442a1 1 0 0 0 1.3 0L19 7.617V8.5a1 1 0 1 0 2 0V6.3a2 2 0 0 0-2-2H5Zm7 6.683L6.537 6.3h10.926L12 10.983Zm6.443 3.249.151-.042a2.962 2.962 0 0 0-3.37 1.413c-.834 1.467-.333 3.336 1.096 4.175 1.42.832 3.242.345 4.072-1.114a.861.861 0 0 1 1.184-.317c.41.241.54.762.312 1.164-1.295 2.279-4.179 3.072-6.44 1.747-2.25-1.32-3.01-4.231-1.72-6.502 1.185-2.085 3.697-2.927 5.848-2.041l-.09-.338a.86.86 0 0 1 1.663-.437l.605 2.288a.858.858 0 0 1-.606 1.047l-2.252.613a.858.858 0 1 1-.453-1.656Z"
      fill="currentColor"
    />
  </svg>
);

export default IconResend;
