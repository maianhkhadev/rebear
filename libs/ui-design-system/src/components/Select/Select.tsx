import { forwardRef, HTMLProps, useState, useMemo } from 'react';
import clsx from 'clsx';
import {
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react';
import { useInstallFloating } from './useInstallFloating';
import { SelectContext } from './SelectContext';
import {
  ClassNames,
  SelectVariant,
  SelectVariants,
  ClassNameVariantMapping,
  SelectSize,
  SelectSizes,
  ClassNameSizeMapping,
} from './Select.constants';
import './Select.scss';

export type SelectProps = {
  value?: string | number | readonly string[] | undefined;
  variant?: SelectVariants;
  size?: SelectSizes;
  onChange?: (value: string | number | readonly string[] | undefined) => void;
};

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps & Omit<HTMLProps<HTMLSelectElement>, 'size'>
>(function Select(props, ref) {
  const { value, className, variant, size, children, onChange, ...rest } =
    props;
  const [open, onOpenChange] = useState(false);
  const floatingData = useInstallFloating({ open, onOpenChange });
  const { context, refs, referenceProps, floatingProps } = floatingData;

  const mergedRef = useMergeRefs([refs.setReference, ref]);

  const contextValue = useMemo(
    () => ({
      open,
      onOpenChange,
      onChange,
    }),
    [open, onOpenChange, onChange]
  );

  const classes = clsx([
    ClassNames.Select,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <SelectContext.Provider value={contextValue}>
      <select
        ref={mergedRef}
        {...referenceProps}
        className={classes}
        value={value}
        onChange={onChange}
        {...rest}
      />

      <FloatingPortal>
        {open && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className={ClassNames.SelectDropdown}
              {...floatingProps}
            >
              {children}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </SelectContext.Provider>
  );
});

Select.defaultProps = {
  value: undefined,
  variant: SelectVariant.Primary,
  size: SelectSize.Medium,
  onChange: undefined,
};

export default Select;
