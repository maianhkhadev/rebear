export const ClassNames = {
  Modal: 'rebear-modal',
  ConfirmationModal: 'rebear-confirmation-modal',
  ModalIcon: 'rebear-modal-icon',
  ModalDismiss: 'rebear-modal-dismiss',
  ModalTitle: 'rebear-modal-header',
  ModalContent: 'rebear-modal-content',
  ModalActions: 'rebear-modal-actions',
  Backdrop: 'rebear-modal-backdrop',
};

export const ModalVariant = {
  Info: 'info',
  Warning: 'warning',
  Success: 'success',
  Error: 'error',
};

export type ModalVariants = (typeof ModalVariant)[keyof typeof ModalVariant];

export const ClassNameVariantMapping = new Map([
  [ModalVariant.Info, 'rebear-modal-info'],
  [ModalVariant.Warning, 'rebear-modal-warning'],
  [ModalVariant.Success, 'rebear-modal-success'],
  [ModalVariant.Error, 'rebear-modal-error'],
]);
