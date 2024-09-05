import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  TextAreaVariant,
  TextAreaVariants,
  ClassNameVariantMapping,
  TextAreaSize,
  TextAreaSizes,
  ClassNameSizeMapping,
} from './TextArea.constants';
import './TextArea.scss';

export type TextAreaProps = {
  variant?: TextAreaVariants;
  size?: TextAreaSizes;
};

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & Omit<HTMLProps<HTMLTextAreaElement>, 'size'>
>(function TextArea(props, ref) {
  const { className, variant, size, ...rest } = props;

  const classes = clsx([
    ClassNames.TextArea,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <textarea className={classes} {...rest} ref={ref} />
  );
});

TextArea.defaultProps = {
  variant: TextAreaVariant.Primary,
  size: TextAreaSize.Medium,
};

export default TextArea;
