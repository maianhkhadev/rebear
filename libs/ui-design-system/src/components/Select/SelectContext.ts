import { createContext } from 'react';

export type SelectData = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChange?: (value: string | number | readonly string[] | undefined) => void;
};

export const SelectContext = createContext<SelectData | undefined>(undefined);
