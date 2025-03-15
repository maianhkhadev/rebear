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

export interface ConfirmationModalProps {
  isLoading?: boolean;
  showIcon?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant?: ModalVariants;
  onConfirm?: () => void;
}

export const ConfirmationModal = forwardRef<
  HTMLDivElement,
  ConfirmationModalProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function ConfirmationModal(props, ref) {
  const {
    open,
    onOpenChange,
    isLoading,
    variant,
    showIcon,
    onConfirm,
    className,
    children,
  } = props;
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
            <div ref={mergeRef} className={classes} {...floatingProps}>
              {showIcon && (
                <span className={ClassNames.ModalIcon}>
                  <IconInfoCircle />
                </span>
              )}

              <ModalDismiss onOpenChange={onOpenChange} />

              {children}

              <ModalActions>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>

                {onConfirm && (
                  <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={onConfirm}
                  >
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
  isLoading: false,
  variant: ModalVariant.Info,
  showIcon: true,
};

export default ConfirmationModal;
