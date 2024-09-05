import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  RadioSize,
  RadioSizes,
  ClassNameSizeMapping,
} from './Radio.constants';
import './Radio.scss';

export type RadioProps = {
  size?: RadioSizes;
};

export const Radio = forwardRef<
  HTMLInputElement,
  RadioProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function Radio(props, ref) {
  const { className, size, children, ...rest } = props;

  const classes = clsx([
    ClassNames.Radio,
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <label className={classes}>
      <input type="radio" {...rest} ref={ref} defaultChecked />
      <span className={ClassNames.RadioMarker} />
      <span className={ClassNames.RadioLabel}>{children}</span>
    </label>
  );
});

Radio.defaultProps = {
  size: RadioSize.Medium,
};

export default Radio;
