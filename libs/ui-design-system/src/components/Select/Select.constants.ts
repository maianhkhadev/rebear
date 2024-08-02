
export const ClassNames = {
  Select: 'rebear-select',
  SelectDropdown: 'rebear-select-dropdown',
  SelectOption: 'rebear-select-option',
}

export const SelectVariant = {
  Primary: 'primary',
  Error: 'error',
}

export type SelectVariants = typeof SelectVariant[keyof typeof SelectVariant];

export const ClassNameVariantMapping = new Map([
  [SelectVariant.Primary, 'rebear-select-primary'],
  [SelectVariant.Error, 'rebear-select-error'],
]);

export const SelectSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

export type SelectSizes = typeof SelectSize[keyof typeof SelectSize];

export const ClassNameSizeMapping = new Map([
  [SelectSize.Small, 'rebear-select-small'],
  [SelectSize.Medium, 'rebear-select-medium'],
  [SelectSize.Large, 'rebear-select-large'],
]);