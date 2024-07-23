import { SVGProps } from 'react';

const IconFolderDefault = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 18V8h-9.586a3 3 0 0 1-2.121-.879L7.172 6H4v12h16Zm2-10a2 2 0 0 0-2-2h-9.586a1 1 0 0 1-.707-.293L8.586 4.586A2 2 0 0 0 7.172 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8Z"
      fill="currentColor"
    />
  </svg>
);

export default IconFolderDefault;
