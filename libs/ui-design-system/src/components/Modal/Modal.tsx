import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import {
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs,
} from '@floating-ui/react';
import { useInstallFloating } from './useInstallFloating';
import { ModalDismiss } from './ModalDismiss';
import { ClassNames } from './Modal.constants';
import './Modal.scss';

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  width?: number;
}

export const Modal = forwardRef<
  HTMLDivElement,
  ModalProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function Modal(props, ref) {
  const { open, onOpenChange, width, className, children } = props;
  const floatingData = useInstallFloating({ open, onOpenChange });
  const { context, refs, floatingProps } = floatingData;

  const mergeRef = useMergeRefs([refs.setFloating, ref]);

  const classes = clsx([ClassNames.Modal, className]);

  return (
    <FloatingPortal>
      {open && (
        <FloatingOverlay className={ClassNames.Backdrop} lockScroll>
          <FloatingFocusManager context={context}>
            <div
              ref={mergeRef}
              className={classes}
              {...floatingProps}
              style={{ width: `${width}px` }}
            >
              <ModalDismiss onOpenChange={onOpenChange} />

              {children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </FloatingPortal>
  );
});

Modal.defaultProps = {
  width: 520,
};

export default Modal;
