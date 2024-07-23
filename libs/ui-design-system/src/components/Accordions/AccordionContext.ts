import { createContext } from 'react';

export type AccordionData = {
  accordionId: number;
};

export const AccordionContext = createContext<AccordionData | undefined>(
  undefined,
);
