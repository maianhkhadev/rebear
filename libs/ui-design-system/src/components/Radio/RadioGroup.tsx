import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames, RadioSize, RadioSizes } from './Radio.constants';
import './Radio.scss';

export type RadioGroupProps = {
  name: string;
  defaultValue?: string | number;
  value?: string | number;
  size?: RadioSizes;
};

export const RadioGroup = forwardRef<
  HTMLInputElement,
  RadioGroupProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function RadioGroup(props, ref) {
  const { className, children, ...rest } = props;

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // const value = event.target.value;
  //   // console.log(event.target)
  //   onChange && onChange(event)
  // }

  const classes = clsx([ClassNames.RadioGroup, className]);

  return (
    <div className={classes} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const props = {
            ...child.props,
            ...rest
          };

          return React.cloneElement(child, props);
        }
        return child;
      })}
    </div>
  );
});

RadioGroup.defaultProps = {
  size: RadioSize.Medium,
  onChange: undefined,
};

export default RadioGroup;
