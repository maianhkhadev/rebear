import { forwardRef, HTMLProps, useMemo } from 'react';
import clsx from 'clsx';
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs
} from '@floating-ui/react';
import { ModalSize, ModalSizes, ClassNameSizeMapping } from './Modal.constant';
import { ModalContext } from './ModalContext';
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
  const { refs, context } = useFloating({
    open,
    onOpenChange: onOpenChange,
  });
  const mergeRef = useMergeRefs([refs.setFloating, ref]);


  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
  const role = useRole(context);
  const { getFloatingProps } = useInteractions([click, dismiss, role]);

  const value = useMemo(() => ({
    open,
    onOpenChange
  }), [open, onOpenChange]);

  const classes = clsx([
    'rebear-modal',
    size && ClassNameSizeMapping.get(size),
  ]);

  return (
    <ModalContext.Provider value={value}>
      <FloatingPortal>
        {open && (
          <FloatingOverlay className="rebear-modal-backdrop" lockScroll>
            <FloatingFocusManager context={context}>
              <div
                ref={mergeRef}
                className={classes}
                {...getFloatingProps()}
              >
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
