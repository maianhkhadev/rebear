import { createContext } from 'react';
import { UseFormRegister, FieldValues, Control } from "react-hook-form"

export type FormData = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
};

export const FormContext = createContext<FormData | undefined>(
  undefined
);
