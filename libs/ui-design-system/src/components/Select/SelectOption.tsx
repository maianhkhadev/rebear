import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Select.constants';
import './Select.scss';

export const SelectOption = forwardRef<
  HTMLOptionElement,
  HTMLProps<HTMLOptionElement>
>(function SelectOption(props, ref) {
  const { value, className, children, onChange, ...rest } = props;

  const classes = clsx([ClassNames.SelectOption, className]);

  return (
    <option ref={ref} className={classes} value={value} {...rest}>
      {children}
    </option>
  );
});

export default SelectOption;
