import { SVGProps } from 'react';

const IconDocumentTypeXmlActive = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x={4} y={12} width={16} height={7.2} rx={1} fill="currentColor" />
    <g fill="#fff">
      <path d="M5 18h1.272l.91-1.622h.03L8.127 18H9.47l-1.487-2.502v-.017L9.484 13h-1.33l-.858 1.694h-.033L6.4 13H5l1.438 2.467v.02L5 18ZM9.98 18h1.053v-3.184h.065L12.168 18h.682l1.07-3.184h.068V18h1.05v-5h-1.36l-1.135 3.392h-.062L11.343 13H9.98v5ZM15.804 18H19v-1.022h-2V13h-1.196v5Z" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.56 5.6A2.01 2.01 0 0 0 9.2 4h3.269a1.6 1.6 0 0 1 1.131.469L17.131 8c.3.3.469.707.469 1.131V11.2H16V9.131L12.469 5.6H9.56ZM8 7.16a2.009 2.009 0 0 1-1.6-.36v4.4H8V7.16Z"
      fill="currentColor"
    />
    <circle cx={7.5} cy={5} r={1.5} fill="#2DDCC8" />
  </svg>
);

export default IconDocumentTypeXmlActive;
