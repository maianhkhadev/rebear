import React, { HTMLProps, forwardRef } from 'react';
import { clsx } from 'clsx';
import { ClassNames } from './Alert.constants';

export const AlertActions = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>(function AlertActions(props, ref) {
  const { children, className, ...otherProps } = props;

  const classes = clsx([ClassNames.Actions, className]);

  return (
    <div className={classes} {...otherProps} ref={ref}>
      {children}
    </div>
  );
});

export default AlertActions;
