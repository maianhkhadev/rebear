import { createContext } from 'react';

export type SelectData = {
  onSelect: (value: string | number) => void;
  register: (value: string | number, text: string) => void;
  unregister: (value: string | number) => void;

};

export const SelectContext = createContext<SelectData | undefined>(undefined);
