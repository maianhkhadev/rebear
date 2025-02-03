import { forwardRef, HTMLProps, ReactElement } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  ButtonVariant,
  ButtonVariants,
  ClassNameVariantMapping,
  ButtonSize,
  ButtonSizes,
  ClassNameSizeMapping,
} from './Button.constants';
import './Button.scss';

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariants;
  size?: ButtonSizes;              
  block?: boolean;
  error?: boolean;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & Omit<HTMLProps<HTMLButtonElement>, 'size'>
>(function Button(props, ref) {
  const {
    type,
    variant,
    size,
    block,
    error,
    prefixIcon,
    suffixIcon,
    className,
    children,
    ...rest
  } = props;

  const classes = clsx([
    ClassNames.Button,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    block && ClassNames.Block,
    error && ClassNames.Error,
    className,
  ]);

  return (
    <button ref={ref} type={type} className={classes} {...rest}>
      {prefixIcon && (
        <span className={ClassNames.PrefixIcon}>{prefixIcon}</span>
      )}

      {children}

      {suffixIcon && (
        <span className={ClassNames.SuffixIcon}>{suffixIcon}</span>
      )}
    </button>
  );
});

Button.defaultProps = {
  type: undefined,
  variant: ButtonVariant.Primary,
  size: ButtonSize.MD,
  block: false,
  error: false,
  prefixIcon: undefined,
  suffixIcon: undefined,
};

export default Button;
