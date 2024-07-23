import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error("Missing ModalContext, please use Modal component inside Provider");
  }

  return context;
};

export default useModalContext;