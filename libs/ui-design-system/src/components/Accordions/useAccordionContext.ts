import { useContext } from 'react';
import { AccordionContext } from './AccordionContext';

export const useAccordionContext = () => {
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error(
      'Missing AccordionContext, please use the Accordion component inside a AccordionContainer',
    );
  }

  return accordionContext;
};

export default useAccordionContext;
