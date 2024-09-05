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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroup = forwardRef<
  HTMLDivElement,
  RadioGroupProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function RadioGroup(props, ref) {
  const {
    name,
    defaultValue,
    value,
    className,
    size,
    children,
    onChange,
    ...rest
  } = props;

  const classes = clsx([ClassNames.RadioGroup, className]);

  return (
    <div className={classes} {...rest} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const props = {
            ...child.props,
            name,
            size,
            onChange,
          };

          if (defaultValue) {
            const defaultChecked = isChecked(defaultValue, props.value);
            props.defaultChecked = defaultChecked;
          }

          if (value) {
            const checked = isChecked(value, props.value);
            props.checked = checked;
          }

          return React.cloneElement(child, props);
        }
        return child;
      })}
    </div>
  );
});

RadioGroup.defaultProps = {
  size: RadioSize.Medium,
};

export default RadioGroup;
