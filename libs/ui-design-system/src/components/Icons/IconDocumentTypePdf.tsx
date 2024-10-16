import { SVGProps } from 'react';

const IconDocumentTypePdf = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path d="M6.4 5.6A1.6 1.6 0 0 1 8 4h4.469a1.6 1.6 0 0 1 1.131.469L17.131 8c.3.3.469.707.469 1.131V11.2H16V9.131L12.469 5.6H8v5.6H6.4V5.6ZM7.586 15.474h.422c.231 0 .401-.054.51-.163a.625.625 0 0 0 .17-.462c0-.2-.061-.34-.184-.422-.122-.081-.297-.122-.523-.122h-.395v1.17ZM11.723 16.862h.068c.213 0 .406-.037.579-.11a.823.823 0 0 0 .408-.387c.104-.186.156-.45.156-.795 0-.345-.052-.606-.156-.782a.763.763 0 0 0-.409-.368 1.563 1.563 0 0 0-.578-.102h-.068v2.544Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12.8a.8.8 0 0 1 .8-.8h14.4a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8v-5.6Zm2.417 5v-4.42h1.618a2.8 2.8 0 0 1 .891.136c.272.09.49.242.653.456.167.213.251.505.251.877 0 .358-.084.653-.251.884-.163.226-.381.394-.653.503a2.27 2.27 0 0 1-.864.163h-.476V17.8h-1.17Zm4.137 0v-4.42h1.306c.448 0 .843.075 1.183.224.344.146.612.379.802.7.19.323.286.744.286 1.266 0 .52-.095.947-.286 1.278a1.74 1.74 0 0 1-.782.72c-.33.155-.71.232-1.136.232h-1.373Zm4.363 0v-4.42H17.8v.98h-1.714v.842h1.47v.98h-1.47V17.8h-1.17Z"
      />
    </g>
  </svg>
);

export default IconDocumentTypePdf;
