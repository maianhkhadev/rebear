import { SVGProps } from 'react';

const IconFavoritesAdd = ({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.916 9.015-1.62 1.585v.018a5.889 5.889 0 0 1 2.442 1.83 5.91 5.91 0 0 1-.988 8.29 5.88 5.88 0 0 1-5.83.837 5.888 5.888 0 0 1-2.44-1.835 5.91 5.91 0 0 1-1.195-2.812l-4.347 2.27a.452.452 0 0 1-.657-.477l.974-5.68L2.139 9.02a.454.454 0 0 1 .249-.776l5.692-.827 2.545-5.166a.454.454 0 0 1 .81 0l2.54 5.166 5.693.822a.452.452 0 0 1 .248.776ZM3.43 9.011l3.623 3.545a.454.454 0 0 1 .127.418l-.856 4.993 3.899-2.052a5.915 5.915 0 0 1 2.247-4.487 5.88 5.88 0 0 1 4.88-1.128l1.318-1.29-5.013-.73a.452.452 0 0 1-.34-.25L11.05 3.49 8.786 8.03a.454.454 0 0 1-.34.25l-5.017.73Zm9.912 11.215a4.972 4.972 0 0 0 6.29-.62 5 5 0 0 0-1.616-8.145 4.97 4.97 0 0 0-5.429 1.082 4.998 4.998 0 0 0-1.08 5.442 4.99 4.99 0 0 0 1.835 2.241Zm3.22-4.606h2.264a.452.452 0 0 1 .453.454.455.455 0 0 1-.453.454h-2.264v2.27a.455.455 0 0 1-.453.454.452.452 0 0 1-.453-.454v-2.27h-2.264a.452.452 0 0 1-.453-.454.454.454 0 0 1 .453-.454h2.264v-2.27a.455.455 0 0 1 .453-.454.452.452 0 0 1 .453.454v2.27Z"
      />
      <path d="m18.295 10.6-.262-.269-.113.11v.159h.375Zm1.621-1.585-.26-.27-.002.002.262.268Zm-1.62 1.603h-.376v.254l.236.094.14-.348Zm2.442 1.83.295-.232-.295.232Zm1.202 2.809-.371.053.37-.053Zm-.362 3.035.349.14-.349-.14ZM19.75 20.74l-.232-.295.232.295Zm-2.803 1.202-.054-.372.054.372Zm-3.028-.366-.14.348.14-.348Zm-2.438-1.835.295-.231-.295.23Zm-1.196-2.812.371-.053-.074-.525-.47.245.173.333Zm-4.347 2.27-.174-.333.174.332Zm-.243.05-.027.374.027-.374Zm-.233-.085-.22.303.22-.303Zm-.18-.442-.37-.064v.002l.37.062Zm.973-5.68.37.064.033-.194-.141-.137-.262.268ZM2.139 9.02l.262-.268-.002-.002-.26.27Zm-.125-.216.363-.092-.363.092Zm.008-.25.357.114-.357-.114Zm.138-.208-.242-.286.242.286Zm.228-.102-.054-.372.054.372Zm5.692-.827.054.372.195-.029.087-.177-.336-.166Zm2.545-5.166-.336-.166.336.166Zm.167-.183.197.319-.197-.319Zm.476 0-.198.319.198-.319Zm.167.183.337-.165-.001-.001-.336.166Zm2.54 5.166-.336.166.087.177.196.029.053-.372Zm5.693.822.053-.371-.053.371Zm.366.31-.358.115.358-.115ZM7.052 12.556l.262-.268-.262.268ZM3.429 9.011l-.054-.371-.75.109.542.53.262-.268Zm3.74 3.738.358-.11-.358.11Zm.01.225-.368-.077-.002.013.37.064Zm-.856 4.993-.37-.063-.128.749.672-.354-.174-.332Zm3.899-2.052.174.332.195-.102.006-.22-.375-.01Zm.623-2.495-.335-.168.335.168Zm3.938-3.102-.084-.365.084.365Zm2.566-.018-.08.366.198.043.144-.141-.262-.268Zm1.318-1.29.262.269.542-.53-.75-.11-.054.372Zm-5.013-.73-.056.37.002.001.054-.371Zm-.2-.083.222-.302-.223.302Zm-.14-.167.338-.164-.002-.003-.336.167ZM11.05 3.49l.336-.167-.336-.672-.335.672.335.168ZM8.786 8.03l-.335-.167-.002.003.337.164Zm-.139.167.222.302-.222-.302Zm-.2.083.054.371h.001l-.055-.371Zm4.894 11.946.209-.311-.209.311Zm6.29-.62.265.264-.266-.265Zm.619-6.306-.312.208.312-.208Zm-2.235-1.84-.144.347.144-.346Zm-6.509 6.525.347-.143-.347.143Zm5.055-2.365h-.375v.375h.375v-.375Zm2.584.775.266.265-.266-.265Zm-2.584.133v-.375h-.375v.375h.375Zm-.133 2.59-.265-.264.265.265Zm-.64 0 .266-.264-.266.265Zm-.133-2.59h.375v-.375h-.375v.375Zm-2.584-.133.266-.265-.266.265Zm0-.642.266.265-.266-.265Zm2.584-.133v.375h.375v-.375h-.375Zm.133-2.59-.265-.265.265.264Zm2.77-2.162 1.62-1.585-.524-.536-1.62 1.584.524.537Zm.112-.25V10.6h-.75v.018h.75Zm2.363 1.598a6.263 6.263 0 0 0-2.598-1.946l-.279.696c.9.36 1.688.95 2.287 1.713l.59-.463Zm1.278 2.988a6.283 6.283 0 0 0-1.278-2.988l-.59.463c.6.763.987 1.67 1.126 2.631l.742-.106Zm-.384 3.227a6.29 6.29 0 0 0 .384-3.227l-.742.106a5.539 5.539 0 0 1-.339 2.843l.697.278Zm-1.945 2.602a6.276 6.276 0 0 0 1.945-2.602l-.697-.278a5.525 5.525 0 0 1-1.712 2.291l.464.59ZM17 22.313a6.255 6.255 0 0 0 2.982-1.279l-.464-.589c-.761.6-1.666.988-2.625 1.125l.107.743Zm-3.22-.39a6.248 6.248 0 0 0 3.22.39l-.107-.743a5.5 5.5 0 0 1-2.834-.342l-.28.696Zm-2.595-1.951a6.263 6.263 0 0 0 2.594 1.952l.28-.696a5.514 5.514 0 0 1-2.283-1.718l-.59.462Zm-1.271-2.99a6.285 6.285 0 0 0 1.271 2.99l.591-.462a5.535 5.535 0 0 1-1.12-2.634l-.742.105ZM6.11 19.53l4.348-2.27-.348-.665-4.347 2.27.347.665Zm-.443.092a.826.826 0 0 0 .444-.093l-.348-.664a.077.077 0 0 1-.042.009l-.054.748Zm-.426-.156c.125.09.272.145.426.156l.054-.748a.076.076 0 0 1-.04-.015l-.44.607Zm-.28-.356a.829.829 0 0 0 .28.356l.44-.607a.079.079 0 0 1-.026-.034l-.694.285Zm-.05-.45a.83.83 0 0 0 .05.45l.694-.285a.08.08 0 0 1-.005-.043l-.74-.123Zm.973-5.681-.973 5.678.739.127.974-5.679-.74-.127Zm-4.008-3.69 4.116 4.021.524-.536-4.116-4.022-.524.536Zm-.227-.394a.83.83 0 0 0 .228.395l.521-.54a.08.08 0 0 1-.022-.038l-.727.183Zm.015-.456a.83.83 0 0 0-.015.456l.727-.183a.08.08 0 0 1 .002-.044l-.714-.229Zm.253-.379a.829.829 0 0 0-.253.38l.714.228a.08.08 0 0 1 .024-.036l-.485-.572Zm.416-.188a.827.827 0 0 0-.416.188l.485.572a.077.077 0 0 1 .039-.017l-.108-.743Zm5.692-.826-5.692.826.108.743 5.692-.826-.108-.743Zm2.262-4.96L7.743 7.252l.673.331 2.545-5.166-.673-.331Zm.306-.337a.829.829 0 0 0-.305.336l.671.333a.079.079 0 0 1 .03-.031l-.396-.638Zm.436-.124a.827.827 0 0 0-.436.124l.395.638a.077.077 0 0 1 .04-.012v-.75Zm.436.124a.827.827 0 0 0-.436-.124v.75c.014 0 .028.004.04.012l.396-.638Zm.305.336a.829.829 0 0 0-.305-.336l-.396.638a.079.079 0 0 1 .03.031l.671-.333Zm2.541 5.167-2.54-5.166-.673.33 2.54 5.167.673-.331Zm5.409.616-5.692-.822-.107.743 5.692.821.107-.742Zm.416.188a.828.828 0 0 0-.416-.188l-.108.742a.077.077 0 0 1 .04.018l.484-.572Zm.254.379a.83.83 0 0 0-.254-.38l-.485.573c.011.01.02.022.024.036l.715-.23Zm.014.455a.83.83 0 0 0-.014-.455l-.715.229a.08.08 0 0 1 .002.044l.727.182Zm-.228.395a.83.83 0 0 0 .228-.395l-.727-.182a.08.08 0 0 1-.022.037l.521.54ZM7.314 12.288 3.692 8.743l-.525.536 3.623 3.545.524-.536Zm.213.352a.829.829 0 0 0-.213-.352l-.525.536c.01.01.017.02.02.034l.718-.218Zm.019.41a.83.83 0 0 0-.019-.41l-.717.218a.08.08 0 0 1 .002.04l.734.152Zm-.854 4.98.856-4.993-.739-.127-.856 4.994.74.127Zm3.355-2.447-3.899 2.052.35.664 3.898-2.052-.349-.663Zm.463-2.33a6.288 6.288 0 0 0-.663 2.653l.75.019c.02-.813.22-1.61.584-2.337l-.67-.336Zm1.727-2.12a6.273 6.273 0 0 0-1.727 2.12l.67.335a5.524 5.524 0 0 1 1.52-1.865l-.463-.59Zm2.462-1.18a6.255 6.255 0 0 0-2.462 1.18l.464.59a5.506 5.506 0 0 1 2.167-1.04l-.17-.73Zm2.73-.02a6.248 6.248 0 0 0-2.73.02l.169.73a5.497 5.497 0 0 1 2.402-.017l.158-.733Zm.976-1.19-1.318 1.289.524.536 1.318-1.29-.524-.535ZM13.6 8.65l5.013.73.108-.741-5.013-.731-.108.742Zm-.369-.152c.108.08.234.132.367.152l.112-.742a.077.077 0 0 1-.034-.014l-.445.604Zm-.254-.305c.059.121.146.226.254.305l.445-.604a.078.078 0 0 1-.024-.029l-.675.328Zm-2.262-4.536 2.264 4.54.671-.335-2.264-4.54-.671.335Zm-1.593 4.54 2.264-4.54-.671-.335-2.264 4.54.67.335Zm-.253.301a.829.829 0 0 0 .254-.305l-.674-.328a.079.079 0 0 1-.024.029l.444.604Zm-.367.152a.827.827 0 0 0 .367-.152l-.444-.604a.077.077 0 0 1-.034.014l.111.742Zm-5.019.73 5.018-.73-.108-.742-5.018.73.108.743Zm12.625 11.312c-.91 0-1.8-.271-2.558-.779l-.418.624c.881.59 1.917.905 2.976.905v-.75Zm3.257-1.353a4.6 4.6 0 0 1-3.257 1.353v.75a5.35 5.35 0 0 0 3.788-1.573l-.531-.53Zm1.35-3.266c0 1.225-.486 2.4-1.35 3.266l.53.53a5.374 5.374 0 0 0 1.57-3.796h-.75Zm-.777-2.566c.506.76.776 1.653.776 2.566h.75c0-1.061-.314-2.1-.902-2.982l-.624.416Zm-2.067-1.7c.841.349 1.56.94 2.067 1.7l.624-.416a5.36 5.36 0 0 0-2.404-1.978l-.287.693Zm-2.661-.264a4.594 4.594 0 0 1 2.66.263l.288-.693a5.344 5.344 0 0 0-3.095-.305l.147.736Zm-2.358 1.264a4.602 4.602 0 0 1 2.358-1.264l-.147-.735a5.352 5.352 0 0 0-2.742 1.47l.53.53Zm-1.261 2.365a4.622 4.622 0 0 1 1.26-2.365l-.53-.53a5.372 5.372 0 0 0-1.466 2.75l.736.145Zm.262 2.669a4.63 4.63 0 0 1-.262-2.669l-.736-.146a5.38 5.38 0 0 0 .305 3.101l.693-.286Zm1.697 2.073a4.615 4.615 0 0 1-1.697-2.073l-.693.286a5.366 5.366 0 0 0 1.972 2.41l.418-.623Zm5.275-4.67h-2.264v.75h2.264v-.75Zm.586.243a.827.827 0 0 0-.586-.243v.75c.02 0 .04.008.055.023l.53-.53Zm.242.586a.83.83 0 0 0-.242-.586l-.531.53a.08.08 0 0 1 .023.056h.75Zm-.242.586a.83.83 0 0 0 .242-.586h-.75a.08.08 0 0 1-.023.056l.53.53Zm-.586.243c.22 0 .43-.087.586-.243l-.531-.53a.077.077 0 0 1-.055.023v.75Zm-2.264 0h2.264v-.75h-2.264v.75Zm.375 1.895v-2.27h-.75v2.27h.75Zm-.242.586a.83.83 0 0 0 .242-.586h-.75a.08.08 0 0 1-.023.056l.531.53Zm-.586.243c.22 0 .43-.088.586-.243l-.531-.53a.077.077 0 0 1-.055.023v.75Zm-.585-.243a.827.827 0 0 0 .585.243v-.75a.077.077 0 0 1-.054-.023l-.531.53Zm-.243-.586c0 .22.087.43.243.586l.53-.53a.08.08 0 0 1-.023-.056h-.75Zm0-2.27v2.27h.75v-2.27h-.75Zm-1.889.375h2.264v-.75h-2.264v.75Zm-.585-.243a.827.827 0 0 0 .585.243v-.75a.077.077 0 0 1-.054-.023l-.531.53Zm-.242-.586c0 .22.086.43.242.586l.53-.53a.08.08 0 0 1-.023-.056h-.75Zm.242-.586a.83.83 0 0 0-.242.586h.75a.08.08 0 0 1 .023-.056l-.531-.53Zm.585-.243c-.22 0-.43.088-.585.243l.53.53a.077.077 0 0 1 .055-.023v-.75Zm2.264 0h-2.264v.75h2.264v-.75Zm-.375-1.894v2.27h.75v-2.27h-.75Zm.243-.586a.83.83 0 0 0-.243.585h.75a.08.08 0 0 1 .024-.056l-.531-.53Zm.585-.244c-.22 0-.43.088-.585.244l.53.53a.077.077 0 0 1 .055-.024v-.75Zm.586.244a.828.828 0 0 0-.586-.244v.75c.02 0 .04.009.055.023l.531-.53Zm.242.585a.83.83 0 0 0-.242-.585l-.531.53a.08.08 0 0 1 .023.056h.75Zm0 2.27v-2.27h-.75v2.27h.75Z" />
    </g>
  </svg>
);

export default IconFavoritesAdd;
