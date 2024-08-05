import { forwardRef, HTMLProps, ReactElement } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  InputVariant,
  InputVariants,
  ClassNameVariantMapping,
  InputSize,
  InputSizes,
  ClassNameSizeMapping,
} from './Input.constants';
import './Input.scss';

export type InputProps = {
  value?: string;
  variant?: InputVariants;
  size?: InputSizes;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onChange?: (value: string) => void;
};

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function Input(props, ref) {
  const {
    value,
    className,
    variant,
    size,
    prefixIcon,
    suffixIcon,
    onChange,
    ...rest
  } = props;

  const classes = clsx([
    ClassNames.Input,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <div className={ClassNames.Container}>
      {prefixIcon && (
        <span className={ClassNames.PrefixIcon}>{prefixIcon}</span>
      )}

      <input
        ref={ref}
        type="text"
        className={classes}
        value={value}
        onChange={onChange}
        {...rest}
      />

      {suffixIcon && (
        <span className={ClassNames.SuffixIcon}>{suffixIcon}</span>
      )}
    </div>
  );
});

Input.defaultProps = {
  value: undefined,
  variant: InputVariant.Primary,
  size: InputSize.Medium,
  prefixIcon: undefined,
  suffixIcon: undefined,
  onChange: undefined,
};

export default Input;
