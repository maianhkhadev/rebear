import { forwardRef, HTMLProps } from 'react';

export const ModalActions = forwardRef<
  HTMLElement,
  HTMLProps<HTMLElement>
>(function ModalActions(props, ref) {
  const { children } = props

  return (
    <footer ref={ref} className="rebear-modal-actions">
      {children}
    </footer>
  );
});

export default ModalActions;