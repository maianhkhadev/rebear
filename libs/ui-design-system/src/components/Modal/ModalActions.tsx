import { forwardRef, HTMLProps } from 'react';
import { ClassNames } from './Modal.constants';

export const ModalActions = forwardRef<
  HTMLElement,
  HTMLProps<HTMLElement>
>(function ModalActions(props, ref) {
  const { children } = props

  return (
    <footer ref={ref} className={ClassNames.ModalActions}>
      {children}
    </footer>
  );
});

export default ModalActions;