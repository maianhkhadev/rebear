import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  FloatingPortal,
  FloatingFocusManager,
  useMergeRefs,
} from '@floating-ui/react';
import { useInstallFloating } from './useInstallFloating';
import { ClassNames } from './Dropdown.constants';

export type DropdownProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Dropdown = forwardRef<
  HTMLDivElement,
  DropdownProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function Modal(props, ref) {
  const { open, onOpenChange, className, children } = props;
  const floatingData = useInstallFloating({ open, onOpenChange });
  const { context, refs, floatingProps } = floatingData;

  const mergeRef = useMergeRefs([refs.setFloating, ref]);

  const classes = clsx([ClassNames.Dropdown, className]);

  return (
    <FloatingPortal>
      {open && (
        <FloatingFocusManager context={context}>
          <div ref={mergeRef} className={classes} {...floatingProps}>
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  );
});

export default Dropdown;
