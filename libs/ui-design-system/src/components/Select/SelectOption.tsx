import { useEffect, forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { useSelectContext } from './useSelectContext';
import { ClassNames } from './Select.constants';
import './Select.scss';

export type SelectOptionProps = {
  value: string | number;
  label: string;
};

export const SelectOption = forwardRef<
  HTMLOptionElement,
  SelectOptionProps & HTMLProps<HTMLOptionElement>
>(function SelectOption(props, ref) {
  const { value, className, label, children, ...rest } = props;
  const { onSelect, register, unregister } = useSelectContext();

  useEffect(() => {
    register(value, label);

    return () => {
      unregister(value);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleClick = () => {
    onSelect(value);
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
      {children || label}
    </option>
  );
});

export default SelectOption;
