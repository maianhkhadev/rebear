import { createContext } from 'react';

export type FormItemData = {
  validateRules: string[];
};

export const FormItemContext = createContext<FormItemData | undefined>(
  undefined
);
