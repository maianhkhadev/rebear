import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error(
      'Missing ModalContext, please use inside a ModalContext Provider'
    );
  }

  return modalContext;
};

export default useModalContext;
