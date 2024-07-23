import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Form.constants';

export type FormItemProps = {};

export const FormItem = forwardRef<
  HTMLDivElement,
  FormItemProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function FormItem(props, ref) {
  const { className, children, ...rest } = props;

  const classes = clsx([ClassNames.FormItem, className]);

  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
});

export default FormItem;
