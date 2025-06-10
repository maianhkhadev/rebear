import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Typography.constants';

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100
};

export const Title = forwardRef<
  HTMLHeadingElement,
  TitleProps & HTMLProps<HTMLHeadingElement>
>(function Title(props, ref) {
  const { level, weight, className, children, ...rest } = props;

  const style = useMemo(() => {
    if (weight) {
      return { fontWeight: weight }
    }

    return {}
  }, [weight])

  const classes = clsx([ClassNames.Title, className]);

  if (level === 1) {
    return (
      <h1 ref={ref} className={classes} {...rest} style={style}>
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2 ref={ref} className={classes} {...rest} style={style}>
        {children}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3 ref={ref} className={classes} {...rest} style={style}>
        {children}
      </h3>
    );
  }

  if (level === 4) {
    return (
      <h4 ref={ref} className={classes} {...rest} style={style}>
        {children}
      </h4>
    );
  }

  if (level === 5) {
    return (
      <h5 ref={ref} className={classes} {...rest} style={style}>
        {children}
      </h5>
    );
  }

  return (
    <h6 ref={ref} className={classes} {...rest} style={style}>
      {children}
    </h6>
  );
});

export default Title;
