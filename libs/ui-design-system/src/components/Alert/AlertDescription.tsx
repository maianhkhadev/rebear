import React, { HTMLProps, forwardRef } from 'react';
import { clsx } from 'clsx';
import { ClassNames } from './Alert.constants';

export const AlertDescription = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>(function AlertTitle(props, ref) {
  const { children, className, ...otherProps } = props;

  const classes = clsx([ClassNames.Description, className]);

  return (
    <div ref={ref} className={classes} {...otherProps}>
      {children}
    </div>
  );
});

export default AlertDescription;
