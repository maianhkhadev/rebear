import React, { forwardRef, HTMLProps } from 'react';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import { FormLabel } from './FormLabel';
import { useFormContext } from './useFormContext';
import { ClassNames } from './Form.constants';

export type FormItemProps = {
  name: string;
  label?: string;
};

export const FormItem = forwardRef<
  HTMLDivElement,
  FormItemProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function FormItem(props, ref) {
  const { name, label, className, children, ...rest } = props;
  const { control } = useFormContext();

  const classes = clsx([ClassNames.FormItem, className]);

  return (
    <div ref={ref} className={classes} {...rest}>
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <Controller
              name={name}
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                const props = {
                  ...child.props,
                  ...field,
                };

                return React.cloneElement(child, props);
              }}
            />
          );
        }
        return child;
      })}
    </div>
  );
});

FormItem.defaultProps = {
  label: undefined,
};

export default FormItem;
