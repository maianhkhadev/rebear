import React, { HTMLProps, forwardRef } from 'react';
import { clsx } from 'clsx';
import { ClassNames } from './Alert.constants';

export const AlertTitle = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function AlertTitle(props, ref) {
    const { children, className, ...otherProps } = props;

    const classes = clsx([ClassNames.Title, className]);

    return (
      <div ref={ref} className={classes} {...otherProps}>
        {children}
      </div>
    );
  },
);

export default AlertTitle;
