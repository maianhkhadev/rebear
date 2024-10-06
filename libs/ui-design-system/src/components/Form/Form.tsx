import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { FormContext } from './FormContext';
import { ClassNames } from './Form.constants';
import { Input } from '../Input';
import { Select, SelectOption } from '../Select';
import { RadioGroup, Radio } from '../Radio';
import { Button } from '../Button';
import './Form.scss';

export type FormProps = {};

export const Form = forwardRef<
  HTMLFormElement,
  FormProps & HTMLProps<HTMLFormElement>
>(function Form(props, ref) {
  const { className, children, ...rest } = props;
  const { register, control, handleSubmit } = useForm();

  const contextValue = useMemo(
    () => ({
      register,
      control,
    }),
    [register, control]
  );

  const onSubmit = (values: unknown) => {
    console.log(11111);
    console.log(values);
  };

  const classes = clsx([ClassNames.Form, className]);

  return (
    <FormContext.Provider value={contextValue}>
      <form
        ref={ref}
        className={classes}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return <Input {...field} />;
          }}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field }) => {
            return (
              <Select {...field}>
                <SelectOption value="1" label="1" />
                <SelectOption value="2" label="2" />
                <SelectOption value="3" label="3" />
                <SelectOption value="4" label="4" />
              </Select>
            );
          }}
        />

        <RadioGroup {...register('gender')}>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup>

        {/* <CheckboxGroup {...register('languages')} /> */}

        <input type="submit" />
      </form>
    </FormContext.Provider>
  );
});

export default Form;
