import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { IconCheck } from 'rebear-icons';
import {
  ClassNames,
  CheckboxSize,
  CheckboxSizes,
  ClassNameSizeMapping,
} from './Checkbox.constants';

export type CheckboxProps = {
  size?: CheckboxSizes;
};

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function Checkbox(props, ref) {
  const { className, size = CheckboxSize.MD, children, ...rest } = props;

  const classes = clsx([
    ClassNames.Checkbox,
    size && ClassNameSizeMapping.get(size),
    className,
  ]);
  
  return (
    <label className={classes}>
      <input type="checkbox" {...rest} ref={ref} />
      <span className={ClassNames.CheckboxMarker}>
        <IconCheck />
      </span>
      <span className={ClassNames.CheckboxLabel}>{children}</span>
    </label>
  );
});

export default Checkbox;
