export const ModalSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

export type ModalSizes = typeof ModalSize[keyof typeof ModalSize];

export const ClassNameSizeMapping = new Map([
  [ModalSize.Small, 'rebear-modal-small'],
  [ModalSize.Medium, 'rebear-modal-medium'],
  [ModalSize.Large, 'rebear-modal-large'],
]);