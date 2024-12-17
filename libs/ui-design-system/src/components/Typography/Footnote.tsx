import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import { ClassNames } from './Typography.constants';
import './Footnote.scss';

type FootnoteProps = {
  weight?: 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100
}

export const Footnote = forwardRef<
  HTMLSpanElement,
  FootnoteProps & HTMLProps<HTMLSpanElement>
>(function Footnote(props, ref) {
  const { className, weight, children, ...rest } = props;

  const style = useMemo(() => {
    if (weight) {
      return { fontWeight: weight }
    }

    return {}
  }, [weight])

  const classes = clsx([ClassNames.Footnote, className]);

  return (
    <span ref={ref} className={classes} {...rest} style={style}>
      {children}
    </span>
  );
});

export default Footnote;
