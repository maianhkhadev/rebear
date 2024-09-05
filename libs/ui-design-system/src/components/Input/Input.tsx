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
  variant?: InputVariants;
  size?: InputSizes;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
};

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function Input(props, ref) {
  const { className, variant, size, prefixIcon, suffixIcon, ...rest } = props;

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

      <input type="text" className={classes} {...rest} ref={ref} />

      {suffixIcon && (
        <span className={ClassNames.SuffixIcon}>{suffixIcon}</span>
      )}
    </div>
  );
});

Input.defaultProps = {
  variant: InputVariant.Primary,
  size: InputSize.Medium,
  prefixIcon: undefined,
  suffixIcon: undefined,
};

export default Input;
