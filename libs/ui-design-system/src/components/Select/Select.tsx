import { forwardRef, HTMLProps, useState } from 'react';
import clsx from 'clsx';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react';
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
  onChange?: (value: string) => void;
};

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps & Omit<HTMLProps<HTMLSelectElement>, 'size'>
>(function Select(props, ref) {
  const { value, className, variant, size, children, onChange, ...rest } =
    props;
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const classes = clsx([
    ClassNames.Select,
    variant && ClassNameVariantMapping.get(variant),
    size && ClassNameSizeMapping.get(size),
    className,
  ]);

  return (
    <>
      <select
        ref={refs.setReference}
        {...getReferenceProps()}
        className={classes}
        value={value}
        onChange={onChange}
        {...rest}
      />

      <FloatingPortal>
        {isOpen && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              className={ClassNames.SelectDropdown}
              {...getFloatingProps()}
            >
              {children}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
});

Select.defaultProps = {
  value: undefined,
  variant: SelectVariant.Primary,
  size: SelectSize.Medium,
  onChange: undefined,
};

export default Select;
