import { useContext } from 'react';
import { FormContext } from './FormContext';

export const useFormContext = () => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error(
      'Missing FormContext, please use inside a FormContext Provider',
    );
  }

  return formContext;
};

export default useFormContext;
