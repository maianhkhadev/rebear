import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  DisplaySize,
  DisplaySizes,
  ClassNameDisplaySizeMapping,
} from './Typography.constants';
import './Display.scss';

export type DisplayProps = {
  size?: DisplaySizes;
};

export const Display = forwardRef<
  HTMLParagraphElement,
  DisplayProps & Omit<HTMLProps<HTMLParagraphElement>, 'size'>
>(function Paragraph(props, ref) {
  const { size, className, children, ...rest } = props;

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

Display.defaultProps = {
  size: DisplaySize.MD,
};

export default Display;
