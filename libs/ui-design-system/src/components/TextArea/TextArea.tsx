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
  value?: string;
  variant?: TextAreaVariants;
  size?: TextAreaSizes;
  onChange?: (value: string) => void;
};

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & Omit<HTMLProps<HTMLTextAreaElement>, 'size'>
>(function TextArea(props, ref) {
  const { value, className, variant, size, onChange, ...rest } = props;

  const classes = clsx([
    ClassNames.TextArea,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <textarea ref={ref} className={classes} onChange={onChange} {...rest}>
      {value}
    </textarea>
  );
});

TextArea.defaultProps = {
  value: undefined,
  variant: TextAreaVariant.Primary,
  size: TextAreaSize.Medium,
  onChange: undefined,
};

export default TextArea;
