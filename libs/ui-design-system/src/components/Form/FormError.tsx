import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { Footnote } from '../Typography';
import { ClassNames } from './Form.constants';

export type FormErrorProps = {
  name: string;
};

export const FormError = (props: FormErrorProps) => {
  const { name } = props;
  const { formState } = useFormContext();
  const { errors } = formState;

  const classes = clsx([ClassNames.FormError]);

  return (
    <Footnote className={classes}>
      {errors?.[name]?.message?.toString()}
    </Footnote>
  );
};

export default FormError;
