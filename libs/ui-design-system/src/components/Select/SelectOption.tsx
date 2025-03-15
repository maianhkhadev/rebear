import { HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Select.constants';
import './Select.scss';

export type SelectOptionProps = {
  value: string | number;
  onSelect: (value: string | number) => void;
} & Omit<HTMLProps<HTMLOptionElement>, 'onSelect'>;

export const SelectOption = (props: SelectOptionProps) => {
  const { value, className, children, onSelect, ...rest } = props;

  const handleClick = () => {
    onSelect(value);
  };

  const classes = clsx([ClassNames.SelectOption, className]);

  return (
    <option className={classes} value={value} onClick={handleClick} {...rest}>
      {children}
    </option>
  );
};

export default SelectOption;
