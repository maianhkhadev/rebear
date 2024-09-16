import React, { forwardRef, HTMLProps } from 'react';
import { clsx } from 'clsx';
import { ClassNames } from './Breadcrumbs.constants';
import './Breadcrumbs.scss';

export const Breadcrumbs = forwardRef<
  HTMLUListElement,
  HTMLProps<HTMLUListElement>
>(function Breadcrumbs(props, ref) {
  const { className, children, ...rest } = props;

  const classes = clsx([ClassNames.Breadcrumbs, className]);

  return (
    <ul ref={ref} className={classes} {...rest}>
      {children}
    </ul>
  );
});

export default Breadcrumbs;
