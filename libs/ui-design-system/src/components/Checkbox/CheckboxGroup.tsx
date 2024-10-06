import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { isChecked } from './utils';
import { ClassNames, CheckboxSize, CheckboxSizes } from './Checkbox.constants';
import './Checkbox.scss';

export type CheckboxGroupProps = {
  name: string;
  defaultValue?: string[] | number[];
  value?: string[] | number[];
  size?: CheckboxSizes;
  onChange?: (value: string[] | number[]) => void;
};

export const CheckboxGroup = forwardRef<
  HTMLDivElement,
  CheckboxGroupProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function RadioGroup(props, ref) {
  const {
    className,
    children,
    onChange,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const classes = clsx([ClassNames.CheckboxGroup, className]);

  return (
    <div className={classes} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const props = {
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

CheckboxGroup.defaultProps = {
  value: undefined,
  size: CheckboxSize.Medium,
  onChange: undefined,
};

export default CheckboxGroup;
