import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  ParagraphSize,
  ParagraphSizes,
  ClassNameParagraphSizeMapping,
} from './Typography.constants';
import './Paragraph.scss';

export type ParagraphProps = {
  size?: ParagraphSizes;
};

export const Paragraph = forwardRef<
  HTMLParagraphElement,
  ParagraphProps & Omit<HTMLProps<HTMLParagraphElement>, 'size'>
>(function Paragraph(props, ref) {
  const { size, className, children, ...rest } = props;

  const classes = clsx([
    ClassNames.Paragraph,
    size && ClassNameParagraphSizeMapping.get(size),
    className,
  ]);

  return (
    <p ref={ref} className={classes} {...rest}>
      {children}
    </p>
  );
});

Paragraph.defaultProps = {
  size: ParagraphSize.MD,
};

export default Paragraph;
