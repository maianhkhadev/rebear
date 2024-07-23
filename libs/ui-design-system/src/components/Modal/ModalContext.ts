import { createContext } from 'react';

export type ModalData = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ModalContext = createContext<ModalData | undefined>(undefined);