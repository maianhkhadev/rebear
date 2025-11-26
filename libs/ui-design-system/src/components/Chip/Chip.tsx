import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  ChipVariant,
  ChipVariants,
  ClassNameVariantMapping,
} from './Chip.constants';

export type ChipProps = {
  variant?: ChipVariants;
};

export const Chip = forwardRef<
  HTMLSpanElement,
  ChipProps & HTMLProps<HTMLSpanElement>
>(function Chip(props, ref) {
  const { variant = ChipVariant.Primary, children } = props;

  const classes = clsx([
    ClassNames.Chip,
    variant && ClassNameVariantMapping.get(variant),
  ]);

  return (
    <span ref={ref} className={classes}>
      {children}
    </span>
  );
});

export default Chip;
