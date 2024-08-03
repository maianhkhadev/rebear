export const ClassNames = {
  Modal: 'rebear-modal',
  ModalDismiss: 'rebear-modal-dismiss',
  ModalActions: 'rebear-modal-actions',
  Backdrop: 'rebear-modal-backdrop',
};

export const ModalSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
};

export type ModalSizes = (typeof ModalSize)[keyof typeof ModalSize];

export const ClassNameSizeMapping = new Map([
  [ModalSize.Small, 'rebear-modal-small'],
  [ModalSize.Medium, 'rebear-modal-medium'],
  [ModalSize.Large, 'rebear-modal-large'],
]);
