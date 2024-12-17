
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
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XL2: '2xl'
}

export type InputSizes = typeof InputSize[keyof typeof InputSize];

export const ClassNameSizeMapping = new Map([
  [InputSize.SM, 'rebear-input-sm'],
  [InputSize.MD, 'rebear-input-md'],
  [InputSize.LG, 'rebear-input-lg'],
  [InputSize.XL, 'rebear-input-xl'],
  [InputSize.XL2, 'rebear-input-2xl'],
]);