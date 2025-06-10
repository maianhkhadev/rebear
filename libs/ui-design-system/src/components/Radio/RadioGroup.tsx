import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames, RadioSize, RadioSizes } from './Radio.constants';

export type RadioGroupProps = {
  name?: string;
  defaultValue?: string | number;
  value?: string | number;
  size?: RadioSizes;
};

export const RadioGroup = forwardRef<
  HTMLInputElement,
  RadioGroupProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function RadioGroup(props, ref) {
  const { className, children, value, ...rest } = props;

  const classes = clsx([ClassNames.RadioGroup, className]);

  return (
    <div className={classes} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {

          return React.cloneElement(child, {
            ...child.props,
            ...rest,
            checked: child.props.value === value
          });
        }
        return child;
      })}
    </div>
  );
});

RadioGroup.defaultProps = {
  size: RadioSize.MD,
  onChange: undefined,
};

export default RadioGroup;
