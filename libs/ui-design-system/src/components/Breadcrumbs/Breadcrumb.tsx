import React, { forwardRef, HTMLProps } from 'react';
import { clsx } from 'clsx';
import { ClassNames } from './Breadcrumbs.constants';
import { IconChevronRight } from 'rebear-icons';

export const Breadcrumb = forwardRef<HTMLLIElement, HTMLProps<HTMLLIElement>>(
  function Breadcrumb(props, ref) {
    const { className, children, ...rest } = props;

    const classes = clsx([ClassNames.Breadcrumb, className]);

    return (
      <li ref={ref} className={classes} {...rest}>
        <div>{children}</div>
        <IconChevronRight className={ClassNames.BreadcrumbDivider} />
      </li>
    );
  }
);

export default Breadcrumb;
