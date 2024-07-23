import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  ChipVariant,
  ChipVariants,
  ClassNameVariantMapping,
} from './Chip.constants';
import './Chip.scss';

export type ChipProps = {
  variant?: ChipVariants;
};

export const Chip = forwardRef<
  HTMLSpanElement,
  ChipProps & HTMLProps<HTMLSpanElement>
>(function Chip(props, ref) {
  const { variant, children } = props;

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

Chip.defaultProps = {
  variant: ChipVariant.Primary,
};

export default Chip;
