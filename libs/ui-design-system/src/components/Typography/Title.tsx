import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Typography.constants';
import './Title.scss';

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Title = forwardRef<
  HTMLHeadingElement,
  TitleProps & HTMLProps<HTMLHeadingElement>
>(function Title(props, ref) {
  const { level, className, children, ...rest } = props;

  const classes = clsx([ClassNames.Title, className]);

  if (level === 1) {
    return (
      <h1 ref={ref} className={classes} {...rest}>
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2 ref={ref} className={classes} {...rest}>
        {children}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3 ref={ref} className={classes} {...rest}>
        {children}
      </h3>
    );
  }

  if (level === 4) {
    return (
      <h4 ref={ref} className={classes} {...rest}>
        {children}
      </h4>
    );
  }

  if (level === 5) {
    return (
      <h5 ref={ref} className={classes} {...rest}>
        {children}
      </h5>
    );
  }

  return (
    <h6 ref={ref} className={classes} {...rest}>
      {children}
    </h6>
  );
});

export default Title;
