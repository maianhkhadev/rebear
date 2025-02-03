
export const ClassNames = {
  Button: 'rebear-button',
  PrefixIcon: 'rebear-button-prefix-icon',
  SuffixIcon: 'rebear-button-suffix-icon',
  Block: 'rebear-button-block',
  Error: 'rebear-button-error',
  ButtonIcon: 'rebear-button-icon',
};

export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
  SecondaryColor: 'secondary-color',
  Tertiary: 'tertiary',
  TertiaryColor: 'tertiary-color',
}

export type ButtonVariants = typeof ButtonVariant[keyof typeof ButtonVariant];

export const ClassNameVariantMapping = new Map([
  [ButtonVariant.Primary, 'rebear-button-primary'],
  [ButtonVariant.Secondary, 'rebear-button-secondary'],
  [ButtonVariant.SecondaryColor, 'rebear-button-secondary-color'],
  [ButtonVariant.Tertiary, 'rebear-button-tertiary'],
  [ButtonVariant.TertiaryColor, 'rebear-button-tertiary-color'],
]);

export const ButtonSize = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XL2: '2xl'
}

export type ButtonSizes = typeof ButtonSize[keyof typeof ButtonSize];

export const ClassNameSizeMapping = new Map([
  [ButtonSize.SM, 'rebear-button-sm'],
  [ButtonSize.MD, 'rebear-button-md'],
  [ButtonSize.LG, 'rebear-button-lg'],
  [ButtonSize.XL, 'rebear-button-xl'],
  [ButtonSize.XL2, 'rebear-button-2xl'],
]);