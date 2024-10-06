import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { isChecked } from './utils';
import { ClassNames, RadioSize, RadioSizes } from './Radio.constants';
import './Radio.scss';

export type RadioGroupProps = {
  name: string;
  defaultValue?: string | number;
  value?: string | number;
  size?: RadioSizes;
  onChange?: (value?: string | number) => void;
};

export const RadioGroup = forwardRef<
  HTMLDivElement,
  RadioGroupProps & Omit<HTMLProps<HTMLDivElement>, 'size' | 'onChange'>
>(function RadioGroup(props, ref) {
  const { name, className, children, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange && onChange(value)
  }

  const classes = clsx([ClassNames.RadioGroup, className]);

  return (
    <div className={classes} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const props = {
            name,
            ...child.props,
            onChange: handleChange
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
