import { SVGProps } from 'react';

const IconSave = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.828a3 3 0 0 0-.879-2.12l-2.828-2.83A3 3 0 0 0 15.172 3H5Zm10.5 9a1.5 1.5 0 0 1 1.5 1.5V19h2V8.828a1 1 0 0 0-.293-.707L15.88 5.293A1 1 0 0 0 15.172 5H15v2.5A1.5 1.5 0 0 1 13.5 9h-5A1.5 1.5 0 0 1 7 7.5V5H5v14h2v-5.5A1.5 1.5 0 0 1 8.5 12h7Zm-.5 7H9v-5h6v5ZM13 5H9v2h4V5Z"
      fill="currentColor"
    />
  </svg>
);

export default IconSave;
