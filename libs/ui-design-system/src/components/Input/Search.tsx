import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  ClassNames,
  InputVariant,
  InputVariants,
  ClassNameVariantMapping,
  InputSize,
  InputSizes,
  ClassNameSizeMapping,
} from './Input.constants';
import './Input.scss';

export type SearchProps = {
  variant?: InputVariants;
  size?: InputSizes;
};

export const Search = forwardRef<
  HTMLInputElement,
  SearchProps & Omit<HTMLProps<HTMLInputElement>, 'size'>
>(function Search(props, ref) {
  const { className, variant, size, ...rest } = props;

  const classes = clsx([
    ClassNames.Input,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <div className={ClassNames.Container}>
      <input type="text" className={classes} {...rest} ref={ref} />
    </div>
  );
});

Search.defaultProps = {
  variant: InputVariant.Primary,
  size: InputSize.MD,
};

export default Search;
