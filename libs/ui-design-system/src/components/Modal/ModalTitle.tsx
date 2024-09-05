import { forwardRef, HTMLProps } from 'react';
import { ClassNames } from './Modal.constants';

export const ModalTitle = forwardRef<
  HTMLElement,
  HTMLProps<HTMLElement>
>(function ModalTitle(props, ref) {
  const { children } = props

  return (
    <header ref={ref} className={ClassNames.ModalTitle}>
      {children}
    </header>
  );
});

export default ModalTitle;