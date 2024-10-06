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

export type ButtonIconProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  icon: ReactElement;
};

export const ButtonIcon = forwardRef<
  HTMLButtonElement,
  ButtonIconProps & Omit<HTMLProps<HTMLButtonElement>, 'size'>
>(function ButtonIcon(props, ref) {
  const { variant, size, icon, className, ...rest } = props;

  const classes = clsx([
    ClassNames.ButtonIcon,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <button {...rest} ref={ref} type="button" className={classes}>
      {icon}
    </button>
  );
});

ButtonIcon.defaultProps = {
  variant: ButtonVariant.Primary,
  size: ButtonSize.MD,
};

export default ButtonIcon;
