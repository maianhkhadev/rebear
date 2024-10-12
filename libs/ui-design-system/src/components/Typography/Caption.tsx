import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Typography.constants';
import './Caption.scss';

export const Caption = forwardRef<
  HTMLTableCaptionElement,
  HTMLProps<HTMLTableCaptionElement>
>(function Caption(props, ref) {
  const { className, children, ...rest } = props;

  const classes = clsx([ClassNames.Caption, className]);

  return (
    <caption ref={ref} className={classes} {...rest}>
      {children}
    </caption>
  );
});

export default Caption;
