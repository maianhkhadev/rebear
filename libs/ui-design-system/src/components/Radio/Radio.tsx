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
  value?: string;
  size?: RadioSizes;
  onChange?: (value: string) => void;
};

export const Radio = forwardRef<
  HTMLInputElement,
  RadioProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function Radio(props, ref) {
  const { value, className, size, children, onChange, ...rest } = props;

  const classes = clsx([
    ClassNames.Radio,
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <>
      <input
        ref={ref}
        type="radio"
        className={classes}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label>{children}</label>
    </>
  );
});

Radio.defaultProps = {
  value: undefined,
  size: RadioSize.Medium,
  onChange: undefined,
};

export default Radio;
