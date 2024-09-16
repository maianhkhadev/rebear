export const ClassNames = {
  Switch: 'rebear-switch',
  SwitchMarker: 'rebear-switch-marker',
};

export const SwitchSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

export type SwitchSizes = typeof SwitchSize[keyof typeof SwitchSize];

export const ClassNameSizeMapping = new Map([
  [SwitchSize.Small, 'rebear-switch-small'],
  [SwitchSize.Medium, 'rebear-switch-medium'],
  [SwitchSize.Large, 'rebear-switch-large'],
]);