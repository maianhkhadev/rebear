import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { isChecked } from './utils';
import { ClassNames, CheckboxSize, CheckboxSizes } from './Checkbox.constants';
import './Checkbox.scss';

export type RadioGroupProps = {
  name: string;
  defaultValue?: string[] | number[];
  value?: string[] | number[];
  size?: CheckboxSizes;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxGroup = forwardRef<
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

  const classes = clsx([ClassNames.CheckboxGroup, className]);

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
            const defaultChecked = isChecked(defaultValue, child.props.value);
            props.defaultChecked = defaultChecked;
          }

          if (value) {
            const checked = isChecked(value, child.props.value);
            props.checked = checked;
          }

          return React.cloneElement(child, props);
        }
        return child;
      })}
    </div>
  );
});

CheckboxGroup.defaultProps = {
  value: undefined,
  size: CheckboxSize.Medium,
  onChange: undefined,
};

export default CheckboxGroup;
