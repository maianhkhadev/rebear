import { SVGProps } from 'react';

const IconTag = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="m21 12-4.35 6.15a1.91 1.91 0 0 1-.712.625A2.02 2.02 0 0 1 15 19H5c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 17V7c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 5 5h10c.333 0 .646.075.938.225.291.15.529.358.712.625L21 12Zm-2.45 0L15 7H5v10h10l3.55-5ZM5 12v5V7v5Z"
      fill="currentColor"
    />
  </svg>
);

export default IconTag;
