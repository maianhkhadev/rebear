import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { FormContext } from './FormContext';
import { ClassNames } from './Form.constants';
import { Input } from '../Input';
import { CheckboxGroup, Checkbox } from '../Checkbox';
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
              <RadioGroup {...field}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </RadioGroup>
            );
          }}
        />

        {/* <RadioGroup {...register('gender')}>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup> */}

        <Controller
          name="languages"
          control={control}
          render={({ field }) => {
            return (
              <CheckboxGroup {...field}>
                <Checkbox value="vi">
                  Tiếng Việt
                </Checkbox>
                <Checkbox value="en">
                  English
                </Checkbox>
              </CheckboxGroup>
            );
          }}
        />

        <input type="submit" />
      </form>
    </FormContext.Provider>
  );
});

export default Form;
