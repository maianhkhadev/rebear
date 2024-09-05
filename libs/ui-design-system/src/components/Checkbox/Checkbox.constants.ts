
export const ClassNames = {
  CheckboxGroup: 'rebear-checkbox-group',
  Checkbox: 'rebear-checkbox',
  CheckboxMarker: 'rebear-checkbox-marker',
  CheckboxLabel: 'rebear-checkbox-label',
}

export const CheckboxSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

export type CheckboxSizes = typeof CheckboxSize[keyof typeof CheckboxSize];

export const ClassNameSizeMapping = new Map([
  [CheckboxSize.Small, 'rebear-checkbox-small'],
  [CheckboxSize.Medium, 'rebear-checkbox-medium'],
  [CheckboxSize.Large, 'rebear-checkbox-large'],
]);