import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  TextFieldVariant,
  TextFieldVariants,
  ClassNameVariantMapping,
  TextFieldSize,
  TextFieldSizes,
  ClassNameSizeMapping,
} from './TextField.constants';
import './TextField.scss';

export type TextFieldProps = {
  value?: string;
  variant?: TextFieldVariants;
  size?: TextFieldSizes;
  onChange?: (value: string) => void;
};

export const TextField = forwardRef<
  HTMLInputElement,
  TextFieldProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function TextField(props, ref) {
  const { value, className, variant, size, onChange, ...rest } = props;

  const classes = clsx([
    ClassNames.TextField,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <input
      ref={ref}
      type="text"
      className={classes}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
});

TextField.defaultProps = {
  value: undefined,
  variant: TextFieldVariant.Primary,
  size: TextFieldSize.Medium,
  onChange: undefined,
};

export default TextField;
