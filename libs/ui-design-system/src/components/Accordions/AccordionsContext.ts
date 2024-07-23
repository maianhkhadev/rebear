import { createContext } from 'react';

export type AccordionsData = {
  selectedId: number | string | undefined;
  setSelectedId: (id: number | string | undefined) => void;
  getNextAccordionId: () => number;
  subscribe: (id: number) => void;
  unsubscribe: (id: number) => void;
};

export const AccordionsContext = createContext<AccordionsData | undefined>(
  undefined,
);
