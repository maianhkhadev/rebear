import { useContext } from 'react';
import { SelectContext } from './SelectContext';

export const useSelectContext = () => {
  const selectContext = useContext(SelectContext);

  if (!selectContext) {
    throw new Error(
      'Missing SelectContext, please use inside a SelectContext Provider'
    );
  }

  return selectContext;
};

export default useSelectContext;
