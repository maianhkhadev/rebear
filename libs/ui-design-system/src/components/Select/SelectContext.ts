import { createContext, ReactNode } from 'react';

export type SelectData = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (value: string) => void;
  register: (value: string, text: ReactNode) => void;
  unregister: (value: string) => void;
};

export const SelectContext = createContext<SelectData | undefined>(undefined);
