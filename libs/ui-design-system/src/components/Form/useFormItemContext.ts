import { useContext } from 'react';
import { FormItemContext } from './FormItemContext';

export const useFormItemContext = () => {
  const formItemContext = useContext(FormItemContext);

  if (!formItemContext) {
    throw new Error(
      'Missing FormItemContext, please use the FormItem component inside a Context',
    );
  }

  return formItemContext;
};

export default useFormItemContext;
