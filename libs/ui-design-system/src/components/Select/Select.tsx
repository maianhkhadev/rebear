import { forwardRef, HTMLProps, ReactElement, useState, useMemo } from 'react';
import clsx from 'clsx';
import { IconChevronDown } from 'rebear-icons';
import { FloatingPortal, FloatingFocusManager } from '@floating-ui/react';
import { SelectOption } from './SelectOption';
import { useInstallFloating } from './useInstallFloating';
import {
  ClassNames,
  SelectVariant,
  SelectVariants,
  ClassNameVariantMapping,
  SelectSize,
  SelectSizes,
  ClassNameSizeMapping,
} from './Select.constants';

export type SelectOptions = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  value?: string | number | undefined;
  variant?: SelectVariants;
  size?: SelectSizes;
  prefixIcon?: ReactElement;
  multiple?: boolean;
  options: SelectOptions[];
  onChange?: (value: string | number) => void;
};

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps & Omit<HTMLProps<HTMLSelectElement>, 'size' | 'onChange'>
>(function Select(props, ref) {
  const {
    className,
    value,
    variant = SelectVariant.Primary,
    size = SelectSize.MD,
    prefixIcon,
    children,
    options = [],
    onChange,
    ...rest
  } = props;
  const [open, onOpenChange] = useState(false);
  const floatingData = useInstallFloating({ open, onOpenChange });
  const { context, refs, referenceProps, floatingProps } = floatingData;

  const selectedText = useMemo(() => {
    const option = options.find((option) => option.value === value);
    return option?.label ?? '';
  }, [value, options]);

  const onSelect = (value: string | number) => {
    onChange && onChange(value);
    onOpenChange(false);
  };

  const classes = clsx([
    ClassNames.Select,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <div>
      <select ref={ref} value={value} hidden onChange={() => {}} {...rest} />

      <div className={ClassNames.Container}>
        {prefixIcon && (
          <span className={ClassNames.PrefixIcon}>{prefixIcon}</span>
        )}

        <div ref={refs.setReference} className={classes} {...referenceProps}>
          {selectedText}
        </div>

        <span className={ClassNames.SuffixIcon}>
          <IconChevronDown />
        </span>
      </div>

      {open && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className={ClassNames.SelectDropdown}
              {...floatingProps}
            >
              {options.map((option) => (
                <SelectOption
                  key={option.value}
                  value={option.value}
                  onSelect={onSelect}
                >
                  {option.label}
                </SelectOption>
              ))}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </div>
  );
});

export default Select;
