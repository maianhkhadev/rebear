import React, { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Grid.constants';
import './Row.scss';

export type RowProps = {
  gutter?: number;
};

export const Row = forwardRef<
  HTMLDivElement,
  RowProps & HTMLProps<HTMLDivElement>
>(function Row(props, ref) {
  const { className, gutter, children } = props;

  const style = useMemo(() => {
    if (gutter && gutter > 0) {
      const value = gutter / 2;
      return { marginLeft: `-${value}px`, marginRight: `-${value}px` };
    }

    return {};
  }, [gutter]);

  const classes = clsx([ClassNames.Row, className]);

  return (
    <div ref={ref} className={classes} style={style}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const props = { ...child.props, gutter };
          return React.cloneElement(child, props);
        }
        return child;
      })}
    </div>
  );
});

Row.defaultProps = {
  gutter: undefined,
};

export default Row;
