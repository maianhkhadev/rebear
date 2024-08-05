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
import { FloatingPortal, FloatingFocusManager } from '@floating-ui/react';
import { useInstallFloating } from './useInstallFloating';
import { SelectContext } from './SelectContext';
import IconChevronDown from '../Icons/IconChevronDown';
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
  value?: string;
  variant?: SelectVariants;
  size?: SelectSizes;
  prefixIcon?: ReactElement;
  onChange?: (value: string) => void;
};

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps & Omit<HTMLProps<HTMLSelectElement>, 'size'>
>(function Select(props, ref) {
  const {
    value,
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
  const optionsRef = useRef<Map<string, ReactNode>>(new Map());
  const [selectedText, setSelectedText] = useState<ReactNode>();
  
  const contextValue = useMemo(
    () => ({
      open,
      onOpenChange,
      onChange: (value: string) => {
        onChange && onChange(value);

        const node = optionsRef.current.get(value);
        setSelectedText(node)
      },
      register: (value: string, text: ReactNode) => {
        optionsRef.current.set(value, text);
      },
      unregister: (value: string) => {
        optionsRef.current.delete(value);
      },
    }),
    [open, onOpenChange]
  );

  const classes = clsx([
    ClassNames.Select,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <SelectContext.Provider value={contextValue}>
      <select ref={ref} value={value} hidden {...rest} />

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
  prefixIcon: undefined,
  onChange: undefined,
};

export default Select;
