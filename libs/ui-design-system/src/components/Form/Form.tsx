import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { FormContext } from './FormContext';
import { ClassNames } from './Form.constants';
import './Form.scss';

export type FormProps = {
  onSubmit: (values: unknown) => void;
};

export const Form = forwardRef<
  HTMLFormElement,
  FormProps & HTMLProps<HTMLFormElement>
>(function Form(props, ref) {
  const { className, onSubmit, children, ...rest } = props;
  const { register, handleSubmit } = useForm();

  const contextValue = useMemo(
    () => ({
      register,
    }),
    [register]
  );

  const classes = clsx([ClassNames.Form, className]);

  return (
    <FormContext.Provider value={contextValue}>
      <form
        ref={ref}
        className={classes}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
});

export default Form;
