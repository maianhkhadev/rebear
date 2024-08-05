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
import { DropdownContext } from './DropdownContext';
import IconChevronDown from '../Icons/IconChevronDown';
import {
  ClassNames,
  SelectVariant,
  SelectVariants,
  ClassNameVariantMapping,
  SelectSize,
  SelectSizes,
  ClassNameSizeMapping,
} from './Dropdown.constants';
import './Dropdown.scss';

export type DropdownProps = {
};

export const Dropdown = forwardRef<
  HTMLDivElement,
  DropdownProps & HTMLProps<HTMLDivElement>
>(function Dropdown(props, ref) {
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
  
  const contextValue = useMemo(
    () => ({
      open,
      onOpenChange,
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
    <DropdownContext.Provider value={contextValue}>
      

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
    </DropdownContext.Provider>
  );
});

Dropdown.defaultProps = {

};

export default Dropdown;
