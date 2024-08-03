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
  variant?: ButtonVariants;
  size?: ButtonSizes;
  block?: boolean;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & Omit<HTMLProps<HTMLButtonElement>, 'size'>
>(function Button(props, ref) {
  const { variant, size, block, prefixIcon, suffixIcon, children, ...rest } =
    props;

  const classes = clsx([
    ClassNames.Button,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    block && ClassNames.Block,
  ]);

  return (
    <button {...rest} ref={ref} type="button" className={classes}>
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
  variant: ButtonVariant.Primary,
  size: ButtonSize.Medium,
  block: false,
  prefixIcon: undefined,
  suffixIcon: undefined,
};

export default Button;
