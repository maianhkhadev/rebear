import { useContext } from 'react';
import { FormItemContext } from './FormItemContext';

export const useFormItemContext = () => {
  const formItemContext = useContext(FormItemContext);

  if (!formItemContext) {
    throw new Error(
      'Missing FormItemContext, please use inside a FormItemContext Provider',
    );
  }

  return formItemContext;
};

export default useFormItemContext;
