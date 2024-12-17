import React, { forwardRef, HTMLProps, ReactNode } from 'react';
import { RegisterOptions, FieldValues } from 'react-hook-form';
import clsx from 'clsx';
import { FormLabel } from './FormLabel';
import { useFormContext } from './useFormContext';
import { ClassNames } from './Form.constants';

export type FormItemProps = {
  name: string;
  label?: ReactNode | string;
  rules?: RegisterOptions<FieldValues, string>;
};

export const FormItem = forwardRef<
  HTMLDivElement,
  FormItemProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function FormItem(props, ref) {
  const { name, label, rules, className, children, ...rest } = props;
  const { register } = useFormContext();

  const classes = clsx([ClassNames.FormItem, className]);

  return (
    <div ref={ref} className={classes} {...rest}>
      {label && <FormLabel>{label}</FormLabel>}

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const props = {
            ...child.props,
            ...register(name, rules),
          };
          return React.cloneElement(child, props);
        }
        return child;
      })}
    </div>
  );
});

FormItem.defaultProps = {
  label: undefined,
  rules: {},
};

export default FormItem;
