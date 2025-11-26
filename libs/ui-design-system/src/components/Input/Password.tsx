import { forwardRef, HTMLProps } from 'react';
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

export type PasswordProps = {
  variant?: InputVariants;
  size?: InputSizes;
};

export const Password = forwardRef<
  HTMLInputElement,
  PasswordProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function Password(props, ref) {
  const {
    className,
    variant = InputVariant.Primary,
    size = InputSize.MD,
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
      <input type="password" className={classes} {...rest} ref={ref} />
    </div>
  );
});

export default Password;
