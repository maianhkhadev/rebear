import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import {
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs,
} from '@floating-ui/react';
import { useInstallFloating } from './useInstallFloating';
import { ModalContext } from './ModalContext';
import {
  ClassNames,
  ModalSize,
  ModalSizes,
  ClassNameSizeMapping,
} from './Modal.constant';
import './Modal.scss';

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size?: ModalSizes;
}

export const Modal = forwardRef<
  HTMLDivElement,
  ModalProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function Modal(props, ref) {
  const { open, onOpenChange, size, children } = props;
  const floatingData = useInstallFloating({ open, onOpenChange });
  const { context, refs, floatingProps } = floatingData;

  const mergeRef = useMergeRefs([refs.setFloating, ref]);

  const contextValue = useMemo(
    () => ({
      open,
      onOpenChange,
    }),
    [open, onOpenChange]
  );

  const classes = clsx([
    ClassNames.Modal,
    size && ClassNameSizeMapping.get(size),
  ]);

  return (
    <ModalContext.Provider value={contextValue}>
      <FloatingPortal>
        {open && (
          <FloatingOverlay className={ClassNames.Backdrop} lockScroll>
            <FloatingFocusManager context={context}>
              <div ref={mergeRef} className={classes} {...floatingProps}>
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </ModalContext.Provider>
  );
});

Modal.defaultProps = {
  size: ModalSize.Medium,
};

export default Modal;
