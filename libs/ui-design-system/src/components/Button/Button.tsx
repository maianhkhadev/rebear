import { forwardRef, HTMLProps } from 'react';
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
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & Omit<HTMLProps<HTMLButtonElement>, 'size'>
>(function Button(props, ref) {
  const { variant, size, block, children, ...rest } = props;

  const classes = clsx([
    ClassNames.Button,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    block && ClassNames.Block,
  ]);

  return (
    <button {...rest} ref={ref} type="button" className={classes}>
      {children}
    </button>
  );
});

Button.defaultProps = {
  variant: ButtonVariant.Primary,
  size: ButtonSize.Medium,
  block: false,
};

export default Button;
