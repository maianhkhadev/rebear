
export const ClassNames = {
  Container: 'rebear-select-container',
  Select: 'rebear-select',
  SelectDropdown: 'rebear-select-dropdown',
  SelectOption: 'rebear-select-option',
  PrefixIcon: 'rebear-select-prefix-icon',
  SuffixIcon: 'rebear-select-suffix-icon',
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
  MD: 'md',
  LG: 'lg',
}

export type SelectSizes = typeof SelectSize[keyof typeof SelectSize];

export const ClassNameSizeMapping = new Map([
  [SelectSize.MD, 'rebear-select-md'],
  [SelectSize.LG, 'rebear-select-lg'],
]);