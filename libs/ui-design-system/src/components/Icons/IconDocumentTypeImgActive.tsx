import { SVGProps } from 'react';

const IconDocumentTypeImgActive = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12a1 1 0 0 0-1 1v5.2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H5Zm12.862 4.122c0 1.24-.772 2-2.047 2-1.387 0-2.221-.897-2.221-2.378v-.006c0-1.463.837-2.37 2.19-2.37 1.1 0 1.916.645 2.031 1.563l.003.032h-1.13l-.007-.028c-.097-.379-.444-.616-.897-.616-.64 0-1.025.531-1.025 1.406v.006c0 .891.425 1.441 1.081 1.441.522 0 .882-.306.913-.769l.003-.075h-.825v-.787h1.931v.581ZM8.225 18h1.01v-2.872h.062L10.322 18h.653L12 15.128h.066V18h1.006v-4.51h-1.303l-1.088 3.06h-.06l-1.09-3.06H8.225V18Zm-.734 0H6.344v-4.51h1.147V18Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.6 5.6h2.869L16 9.131V11.2h1.6V9.131A1.6 1.6 0 0 0 17.131 8L13.6 4.469A1.6 1.6 0 0 0 12.469 4h-3.48c.38.425.611.985.611 1.6ZM7.2 8c.28 0 .55-.048.8-.137V11.2H6.4V7.863c.25.089.52.137.8.137Z"
      fill="currentColor"
    />
    <circle cx={7.2} cy={5.6} r={1.6} fill="#2DDCC8" />
  </svg>
);

export default IconDocumentTypeImgActive;
