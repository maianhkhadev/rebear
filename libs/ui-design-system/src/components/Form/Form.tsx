import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { FormContext } from './FormContext';
import { ClassNames } from './Form.constants';
import './Form.scss';

export type FormProps = {};

export const Form = forwardRef<
  HTMLFormElement,
  FormProps & Omit<HTMLProps<HTMLFormElement>, 'size'>
>(function Form(props, ref) {
  const { className, children, ...rest } = props;
  const { register, handleSubmit } = useForm();

  

  const contextValue = useMemo(
    () => ({
      register,
    }),
    [register]
  );

  const classes = clsx([ClassNames.Form, className]);

  const onSubmit = (values: unknown) => {
    console.log(values)
  }

  return (
    <FormContext.Provider value={contextValue}>
      <form ref={ref} className={classes} {...rest} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext.Provider>
  );
});

export default Form;
