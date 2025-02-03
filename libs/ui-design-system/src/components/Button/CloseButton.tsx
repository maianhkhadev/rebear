import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { IconX } from 'rebear-icons';
import {
  ClassNames,
  ButtonVariant,
  ClassNameVariantMapping,
  ButtonSize,
  ButtonSizes,
  ClassNameSizeMapping,
} from './Button.constants';
import './Button.scss';

export type ButtonIconProps = {
  size?: ButtonSizes;
};

export const CloseButton = forwardRef<
  HTMLButtonElement,
  ButtonIconProps & Omit<HTMLProps<HTMLButtonElement>, 'size'>
>(function CloseButton(props, ref) {
  const { size, className, ...rest } = props;

  const classes = clsx([
    ClassNames.ButtonIcon,
    ClassNameVariantMapping.get(ButtonVariant.Tertiary),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <button {...rest} ref={ref} type="button" className={classes}>
      {<IconX />}
    </button>
  );
});

CloseButton.defaultProps = {
  size: ButtonSize.MD,
};

export default CloseButton;
