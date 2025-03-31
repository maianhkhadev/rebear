
export const ClassNames = {
  CheckboxGroup: 'rebear-checkbox-group',
  Checkbox: 'rebear-checkbox',
  CheckboxMarker: 'rebear-checkbox-marker',
  CheckboxLabel: 'rebear-checkbox-label',
}

export const CheckboxSize = {
  MD: 'md',
  LG: 'lg',
}

export type CheckboxSizes = typeof CheckboxSize[keyof typeof CheckboxSize];

export const ClassNameSizeMapping = new Map([
  [CheckboxSize.MD, 'rebear-checkbox-md'],
  [CheckboxSize.LG, 'rebear-checkbox-lg'],
]);