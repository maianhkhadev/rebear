import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Form.constants';
import './Form.scss';

export type FormProps = {};

export const Form = forwardRef<
  HTMLFormElement,
  FormProps & Omit<HTMLProps<HTMLFormElement>, 'size'>
>(function Form(props, ref) {
  const { className, children, ...rest } = props;

  const classes = clsx([ClassNames.Form, className]);

  return (
    <form ref={ref} className={classes} {...rest}>
      {children}
    </form>
  );
});

export default Form;
