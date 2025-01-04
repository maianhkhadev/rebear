import { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { IconInfoCircle } from 'rebear-icons';
import {
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs,
} from '@floating-ui/react';
import { useInstallFloating } from './useInstallFloating';
import { ModalDismiss } from './ModalDismiss';
import { ModalActions } from './ModalActions';
import { Button } from '../Button';
import {
  ClassNames,
  ModalVariant,
  ModalVariants,
  ClassNameVariantMapping,
} from './Modal.constants';
import './Modal.scss';

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant?: ModalVariants;
  width?: number;
  onConfirm?: () => void;
}

export const ConfirmationModal = forwardRef<
  HTMLDivElement,
  ModalProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function ConfirmationModal(props, ref) {
  const { open, onOpenChange, width, variant, onConfirm, className, children } =
    props;
  const floatingData = useInstallFloating({ open, onOpenChange });
  const { context, refs, floatingProps } = floatingData;

  const mergeRef = useMergeRefs([refs.setFloating, ref]);

  const handleClose = () => {
    onOpenChange(false);
  };

  const classes = clsx([
    ClassNames.ConfirmationModal,
    variant && ClassNameVariantMapping.get(variant),
    className,
  ]);

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
              <span className={ClassNames.ModalIcon}>
                <IconInfoCircle />
              </span>

              <ModalDismiss onOpenChange={onOpenChange} />

              {children}

              <ModalActions>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>

                {onConfirm && (
                  <Button variant="primary" onClick={onConfirm}>
                    Confirm
                  </Button>
                )}
              </ModalActions>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </FloatingPortal>
  );
});

ConfirmationModal.defaultProps = {
  variant: ModalVariant.Info,
  width: 400,
};

export default ConfirmationModal;
