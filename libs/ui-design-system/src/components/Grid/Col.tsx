import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Grid.constants';
import './Col.scss';

export type ColProps = {
  span?: number;
  sm?: number;
  md?: number;
  l?: number;
  xl?: number;
  xxl?: number;
  gutter?: number;
};

export const Col = forwardRef<
  HTMLDivElement,
  ColProps & HTMLProps<HTMLDivElement>
>(function Col(props, ref) {
  const { className, span, sm, md, l, xl, xxl, gutter, children } = props;

  const style = useMemo(() => {
    if (gutter && gutter > 0) {
      const value = gutter / 2;
      return { paddingLeft: `${value}px`, paddingRight: `${value}px` };
    }

    return {};
  }, [gutter]);

  const classes = clsx([
    ClassNames.Col,
    span && `rebear-col-${span}`,
    sm && `rebear-col-sm-${sm}`,
    md && `rebear-col-md-${md}`,
    l && `rebear-col-l-${l}`,
    xl && `rebear-col-xl-${xl}`,
    xxl && `rebear-col-xxl-${xxl}`,
    className,
  ]);

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
});

Col.defaultProps = {
  span: undefined,
  sm: undefined,
  md: undefined,
  l: undefined,
  xl: undefined,
  xxl: undefined,
  gutter: undefined,
};

export default Col;
