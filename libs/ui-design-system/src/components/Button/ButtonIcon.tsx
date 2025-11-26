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

export type ButtonIconProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  error?: boolean;
  icon: ReactElement;
};

export const ButtonIcon = forwardRef<
  HTMLButtonElement,
  ButtonIconProps & Omit<HTMLProps<HTMLButtonElement>, 'size'>
>(function ButtonIcon(props, ref) {
  const {
    variant = ButtonVariant.Primary,
    size = ButtonSize.MD,
    error = false,
    icon,
    className,
    ...rest
  } = props;

  const classes = clsx([
    ClassNames.ButtonIcon,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    error && ClassNames.Error,
    className,
  ]);

  return (
    <button {...rest} ref={ref} type="button" className={classes}>
      {icon}
    </button>
  );
});

export default ButtonIcon;
