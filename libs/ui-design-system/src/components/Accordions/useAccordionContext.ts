import { useContext } from 'react';
import { AccordionContext } from './AccordionContext';

export const useAccordionContext = () => {
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error(
      'Missing AccordionContext, please use inside a AccordionContext Provider',
    );
  }

  return accordionContext;
};

export default useAccordionContext;
