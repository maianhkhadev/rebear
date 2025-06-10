import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { isChecked } from './utils';
import { ClassNames, CheckboxSize, CheckboxSizes } from './Checkbox.constants';

export type CheckboxGroupProps = {
  name?: string;
  defaultValue?: string[] | number[];
  value?: string[] | number[];
  size?: CheckboxSizes;
  onChange?: (value: string[] | number[]) => void;
};

export const CheckboxGroup = forwardRef<
  HTMLInputElement,
  CheckboxGroupProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function RadioGroup(props, ref) {
  const { className, children, value, ...rest } = props;

  const classes = clsx([ClassNames.CheckboxGroup, className]);

  return (
    <div className={classes} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            ...rest,
          });
        }
        return child;
      })}
    </div>
  );
});

CheckboxGroup.defaultProps = {
  value: undefined,
  size: CheckboxSize.MD,
  onChange: undefined,
};

export default CheckboxGroup;
