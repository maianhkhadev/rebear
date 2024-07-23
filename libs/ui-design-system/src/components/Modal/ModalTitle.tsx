import { forwardRef, HTMLProps } from 'react';

export const ModalTitle = forwardRef<
  HTMLElement,
  HTMLProps<HTMLElement>
>(function ModalTitle(props, ref) {
  const { children } = props

  return (
    <header ref={ref} className="rebear-modal-header">
      {children}
    </header>
  );
});

export default ModalTitle;