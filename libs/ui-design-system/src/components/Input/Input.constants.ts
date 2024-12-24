
export const ClassNames = {
  Container: 'rebear-input-container',
  Input: 'rebear-input',
  PrefixIcon: 'rebear-input-prefix-icon',
  SuffixIcon: 'rebear-input-suffix-icon',
}

export const InputVariant = {
  Primary: 'primary',
  Error: 'error',
}

export type InputVariants = typeof InputVariant[keyof typeof InputVariant];

export const ClassNameVariantMapping = new Map([
  [InputVariant.Primary, 'rebear-input-primary'],
  [InputVariant.Error, 'rebear-input-error'],
]);

export const InputSize = {
  MD: 'md',
  LG: 'lg',
}

export type InputSizes = typeof InputSize[keyof typeof InputSize];

export const ClassNameSizeMapping = new Map([
  [InputSize.MD, 'rebear-input-md'],
  [InputSize.LG, 'rebear-input-lg'],
]);