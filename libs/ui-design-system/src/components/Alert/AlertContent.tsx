import React, { HTMLProps, forwardRef } from 'react';
import { clsx } from 'clsx';
import { ClassNames } from './Alert.constants';

export const AlertContent = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>(function AlertContent(props, ref) {
  const { children, className, ...otherProps } = props;

  const classes = clsx([ClassNames.Content, className]);

  return (
    <div ref={ref} className={classes} {...otherProps}>
      {children}
    </div>
  );
});

export default AlertContent;
