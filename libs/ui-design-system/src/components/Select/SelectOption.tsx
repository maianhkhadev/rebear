import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { useSelectContext } from './useSelectContext';
import { ClassNames } from './Select.constants';
import './Select.scss';

export const SelectOption = forwardRef<
  HTMLOptionElement,
  HTMLProps<HTMLOptionElement>
>(function SelectOption(props, ref) {
  const { value, className, children, ...rest } = props;
  const { onSelect, onOpenChange } = useSelectContext();

  const handleClick = () => {
    onSelect(value, children);
    onOpenChange(false);
  };

  const classes = clsx([ClassNames.SelectOption, className]);

  return (
    <option
      ref={ref}
      className={classes}
      value={value}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </option>
  );
});

export default SelectOption;
