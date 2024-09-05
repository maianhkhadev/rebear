import { forwardRef, HTMLProps } from 'react';
import { ClassNames } from './Modal.constants';

export const ModalContent = forwardRef<
  HTMLElement,
  HTMLProps<HTMLElement>
>(function ModalContent(props, ref) {
  const { children } = props

  return (
    <main ref={ref} className={ClassNames.ModalContent}>
      {children}
    </main>
  );
});

export default ModalContent;