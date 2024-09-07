import { SVGProps } from 'react';

const IconDocumentTypeXml = ({
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
        d="M4 12.8a.8.8 0 0 1 .8-.8h14.4a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8v-5.6ZM6.494 18H5.275l1.378-2.266v-.018L5.275 13.49h1.34l.829 1.528h.031l.822-1.528h1.275l-1.437 2.237v.016L9.56 18H8.272l-.878-1.462h-.028L6.494 18Zm4.562 0h-1.01v-4.51h1.307l1.09 3.06h.06l1.088-3.06h1.303V18h-1.007v-2.872h-.065L12.797 18h-.653l-1.025-2.872h-.063V18Zm4.572 0h3.062v-.922h-1.915v-3.587h-1.147V18Z"
      />
    </g>
  </svg>
);

export default IconDocumentTypeXml;
