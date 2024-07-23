import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Form.constants';

export type FormLabelProps = {};

export const FormLabel = forwardRef<
  HTMLLabelElement,
  FormLabelProps & HTMLProps<HTMLLabelElement>
>(function FormLabel(props, ref) {
  const { className, children, ...rest } = props;

  const classes = clsx([ClassNames.FormLabel, className]);

  return (
    <label ref={ref} className={classes} {...rest}>
      {children}
    </label>
  );
});

export default FormLabel;
