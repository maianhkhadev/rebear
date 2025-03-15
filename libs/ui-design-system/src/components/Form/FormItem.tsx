import React, { ReactElement, ReactNode,  } from 'react';
import { Controller, RegisterOptions, FieldValues, useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { FormLabel } from './FormLabel';
import { FormError } from './FormError';
import { ClassNames } from './Form.constants';

export type FormItemProps = {
  name: string;
  label?: ReactNode;
  element: ReactElement;
  rules?: RegisterOptions<FieldValues, string>;
};

export const FormItem = (props: FormItemProps) => {
  const { name, label, element } = props;
  const { control } = useFormContext();

  const classes = clsx([ClassNames.FormItem]);

  return (
    <div className={classes}>
      {label && <FormLabel>{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => {

          return (
            React.cloneElement(element, field)
          )
        }}
      />

      <FormError name={name} />
    </div>
  );
};

FormItem.defaultProps = {
  label: undefined,
  rules: {},
};

export default FormItem;
