import { SVGProps } from 'react';

const IconNavigationLoyalty = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.149 4.229c-1.587-.596-3.683-.239-5.442 1.52l-2.5 2.5a1.121 1.121 0 0 0 1.586 1.586l1-1a1 1 0 0 1 1.414 0l5.148 5.148C20.37 12.515 21 10.87 21 9.043c0-2.639-1.29-4.23-2.851-4.814Zm-.067 11.31L13.5 10.956l-.293.292a3.121 3.121 0 0 1-4.414-4.414l1.733-1.733C7.26 2.8 3 5.175 3 9.042c0 2.015 1.285 4.276 3.232 6.37 1.773 1.905 3.959 3.524 5.773 4.505 1.972-1.025 4.287-2.49 6.077-4.379ZM11.996 3.7C7.35.015 1 3.508 1 9.042c0 2.786 1.715 5.524 3.768 7.731 2.08 2.237 4.677 4.11 6.785 5.164a1 1 0 0 0 .894 0c2.382-1.191 5.54-3.114 7.777-5.799 1.608-1.93 2.776-4.3 2.776-7.096 0-3.362-1.71-5.771-4.149-6.686-2.167-.813-4.731-.377-6.854 1.344Z"
      fill="currentColor"
    />
  </svg>
);

export default IconNavigationLoyalty;
