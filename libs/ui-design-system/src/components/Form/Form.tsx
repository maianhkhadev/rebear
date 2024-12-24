import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { useForm, FormProvider } from 'react-hook-form';
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
  const methods = useForm();

  const classes = clsx([ClassNames.Form, className]);

  return (
    <FormProvider {...methods}>
      <form
        ref={ref}
        className={classes}
        onSubmit={methods.handleSubmit(onSubmit)}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
});

export default Form;
