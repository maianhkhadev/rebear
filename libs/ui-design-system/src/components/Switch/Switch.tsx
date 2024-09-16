import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  SwitchSize,
  SwitchSizes,
  ClassNameSizeMapping,
} from './Switch.constants';
import './Switch.scss';

export type SwitchProps = {
  size?: SwitchSizes;
};

export const Switch = forwardRef<
  HTMLInputElement,
  SwitchProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function Switch(props, ref) {
  const { className, size, children, ...rest } = props;

  const classes = clsx([
    ClassNames.Switch,
    size && ClassNameSizeMapping.get(size),
    className,
  ]);
  
  return (
    <label className={classes}>
      <input type="checkbox" {...rest} ref={ref} />
      <span className={ClassNames.SwitchMarker} />
    </label>
  );
});

Switch.defaultProps = {
  size: SwitchSize.Medium,
};

export default Switch;
