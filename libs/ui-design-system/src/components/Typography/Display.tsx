import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  DisplaySize,
  DisplaySizes,
  ClassNameDisplaySizeMapping,
} from './Typography.constants';

export type DisplayProps = {
  size?: DisplaySizes;
};

export const Display = forwardRef<
  HTMLParagraphElement,
  DisplayProps & Omit<HTMLProps<HTMLParagraphElement>, 'size'>
>(function Paragraph(props, ref) {
  const { size = DisplaySize.MD, className, children, ...rest } = props;

  const classes = clsx([
    ClassNames.Display,
    size && ClassNameDisplaySizeMapping.get(size),
    className,
  ]);

  return (
    <p ref={ref} className={classes} {...rest}>
      {children}
    </p>
  );
});

export default Display;
