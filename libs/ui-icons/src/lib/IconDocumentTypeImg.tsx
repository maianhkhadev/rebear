import { SVGProps } from 'react';

const IconDocumentTypeImg = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M8 4a1.6 1.6 0 0 0-1.6 1.6v5.6H8V5.6h4.469L16 9.131V11.2h1.6V9.131A1.6 1.6 0 0 0 17.131 8L13.6 4.469A1.6 1.6 0 0 0 12.469 4H8Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12.8a.8.8 0 0 1 .8-.8h14.4a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8v-5.6Zm11.815 5.322c1.275 0 2.047-.76 2.047-2v-.581h-1.931v.787h.825l-.003.075c-.031.463-.39.769-.913.769-.656 0-1.08-.55-1.08-1.44v-.007c0-.875.383-1.406 1.024-1.406.453 0 .8.237.897.615l.006.029h1.131l-.003-.032c-.115-.918-.93-1.562-2.03-1.562-1.354 0-2.192.906-2.192 2.369v.006c0 1.481.835 2.378 2.222 2.378ZM7.491 18H6.344v-4.51h1.147V18Zm1.743 0H8.225v-4.51h1.306l1.09 3.06h.06l1.088-3.06h1.303V18h-1.006v-2.872H12L10.975 18h-.653l-1.025-2.872h-.063V18Z"
      />
    </g>
  </svg>
);

export default IconDocumentTypeImg;
