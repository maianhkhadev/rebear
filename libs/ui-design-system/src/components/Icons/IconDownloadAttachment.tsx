import { SVGProps } from 'react';

const IconDownloadAttachment = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.043 11.688a4.256 4.256 0 0 0 0 6.014 4.245 4.245 0 0 0 5.259.597c.129.502.39.977.782 1.37l.308.308a6.243 6.243 0 0 1-7.762-.86 6.259 6.259 0 0 1 0-8.844l3.356-3.36L9.4 5.496l1.766-1.768a4.493 4.493 0 0 1 6.36 0 4.503 4.503 0 0 1 1.196 4.225 2.982 2.982 0 0 0-1.966-.38 2.503 2.503 0 0 0-.643-2.43 2.496 2.496 0 0 0-3.533 0l-1.767 1.768L9.4 8.327l-3.357 3.361Zm6.041 3.736c.174-.174.364-.322.564-.444l1.556-1.558v-2.83l-1.271 1.273-3.003 3.007a.749.749 0 1 1-1.06-1.061l4.416-4.422c.39-.391.39-1.025 0-1.415a.999.999 0 0 0-1.413 0l-4.417 4.422a2.754 2.754 0 0 0 0 3.89 2.746 2.746 0 0 0 3.887 0l.298-.297c.122-.201.27-.391.443-.565Zm6.118-4.881a1 1 0 1 0-1.999 0v7.63l-1.292-1.293a.998.998 0 0 0-1.413 0c-.39.39-.39 1.024 0 1.415l2.998 3.002a.999.999 0 0 0 1.413 0l2.998-3.002c.39-.39.39-1.024 0-1.415a.998.998 0 0 0-1.413 0l-1.292 1.294v-7.631Z"
      fill="currentColor"
    />
  </svg>
);

export default IconDownloadAttachment;
