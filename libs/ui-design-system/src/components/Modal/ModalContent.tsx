import { forwardRef, HTMLProps } from 'react';

export const ModalContent = forwardRef<
  HTMLElement,
  HTMLProps<HTMLElement>
>(function ModalContent(props, ref) {
  const { children } = props

  return (
    <main ref={ref} className="rebear-modal-content">
      {children}
    </main>
  );
});

export default ModalContent;