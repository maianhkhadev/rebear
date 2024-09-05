import { createContext } from 'react';
import { UseFormRegister, FieldValues } from "react-hook-form"

export type FormData = {
  register: UseFormRegister<FieldValues>;
};

export const FormContext = createContext<FormData | undefined>(
  undefined
);
