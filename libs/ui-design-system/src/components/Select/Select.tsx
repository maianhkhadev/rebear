import {
  forwardRef,
  HTMLProps,
  ReactElement,
  ReactNode,
  useState,
  useMemo,
  useRef,
} from 'react';
import clsx from 'clsx';
import { IconChevronDown } from 'rebear-icons';
import { FloatingPortal, FloatingFocusManager } from '@floating-ui/react';
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
  value: string | number | undefined;
  variant?: SelectVariants;
  size?: SelectSizes;
  prefixIcon?: ReactElement;
  multiple?: boolean;
  onChange: (value: string | number) => void;
};

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps & Omit<HTMLProps<HTMLSelectElement>, 'size' | 'onChange'>
>(function Select(props, ref) {
  const {
    className,
    variant,
    size,
    prefixIcon,
    children,
    onChange,
    ...rest
  } = props;
  const [open, onOpenChange] = useState(false);
  const floatingData = useInstallFloating({ open, onOpenChange });
  const { context, refs, referenceProps, floatingProps } = floatingData;
  const optionsRef = useRef<Map<string | number, string>>(new Map());

  const contextValue = useMemo(
    () => ({
      onSelect: (value: string | number) => {
        onChange && onChange(value);
        onOpenChange(false);
      },
      register: (value: string | number, text: string) => {
        optionsRef.current.set(value, text);
      },
      unregister: (value: string | number) => {
        optionsRef.current.delete(value);
      },
    }),
    []
  );

  const selectedText = useMemo(() => {
    if (rest.value) {
      return optionsRef.current.get(rest.value);
    }

    return '';
  }, [rest.value]);

  const classes = clsx([
    ClassNames.Select,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <SelectContext.Provider value={contextValue}>
      <select ref={ref} hidden {...rest} />

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
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </SelectContext.Provider>
  );
});

Select.defaultProps = {
  variant: SelectVariant.Primary,
  size: SelectSize.Medium,
  prefixIcon: undefined,
  multiple: false,
};

export default Select;
