import { useContext } from 'react';
import { AccordionsContext } from './AccordionsContext';

export const useAccordionsContext = () => {
  const accordionsContext = useContext(AccordionsContext);

  if (!accordionsContext) {
    throw new Error(
      'Missing AccordionsContext, please use inside a AccordionsContext Provider',
    );
  }

  return accordionsContext;
};

export default useAccordionsContext;
