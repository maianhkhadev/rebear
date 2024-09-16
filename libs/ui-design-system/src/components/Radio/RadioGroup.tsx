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
  const { className, children, ...rest } = props;

  const classes = clsx([ClassNames.RadioGroup, className]);

  return (
    <div className={classes} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const aaaa = {
            ...rest,
            ...child.props,
            
          };
          console.log(aaaa)
          return React.cloneElement(child, aaaa);
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
