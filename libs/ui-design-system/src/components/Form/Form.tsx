import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { ClassNames } from './Form.constants';

export type FormProps = {
  defaultValues: FieldValues;
  onSubmit: (values: unknown) => void;
};

export const Form = forwardRef<
  HTMLFormElement,
  FormProps & HTMLProps<HTMLFormElement>
>(function Form(props, ref) {
  const { defaultValues, className, onSubmit, children, ...rest } = props;
  const methods = useForm({ defaultValues });

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
