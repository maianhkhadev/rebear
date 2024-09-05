import { createContext, ReactNode } from 'react';

export type SelectData = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (
    value: string | number | readonly string[] | undefined,
    text: ReactNode
  ) => void;
};

export const SelectContext = createContext<SelectData | undefined>(undefined);
