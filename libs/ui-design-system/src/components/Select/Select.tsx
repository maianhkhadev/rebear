import {
  forwardRef,
  HTMLProps,
  ReactElement,
  ReactNode,
  ChangeEvent,
  useState,
  useMemo,
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
  variant?: SelectVariants;
  size?: SelectSizes;
  prefixIcon?: ReactElement;
};

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps & Omit<HTMLProps<HTMLSelectElement>, 'size'>
>(function Select(props, ref) {
  const { className, variant, size, prefixIcon, children, ...rest } =
    props;
  const [open, onOpenChange] = useState(false);
  const floatingData = useInstallFloating({ open, onOpenChange });
  const { context, refs, referenceProps, floatingProps } = floatingData;
  const [selectedText, setSelectedText] = useState<ReactNode>();

  const contextValue = useMemo(
    () => ({
      open,
      onOpenChange,
      setSelectedText,
      onSelect: (
        value: string | number | readonly string[] | undefined,
        text: ReactNode
      ) => {
        setSelectedText(text);

        const event = new Event('change', { bubbles: true });
        const selectElement = document.querySelector('select');
        
        if (selectElement) {
          selectElement.value = value as string;
          selectElement.dispatchEvent(event);
        }
      },
    }),
    [open, onOpenChange, setSelectedText]
  );

  const classes = clsx([
    ClassNames.Select,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <SelectContext.Provider value={contextValue}>
      <select ref={ref} hidden {...rest}>
        {children}
      </select>

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
};

export default Select;
