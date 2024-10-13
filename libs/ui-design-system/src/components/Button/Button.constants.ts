
export const ClassNames = {
  Button: 'rebear-button',
  PrefixIcon: 'rebear-button-prefix-icon',
  SuffixIcon: 'rebear-button-suffix-icon',
  Block: 'rebear-button-block',
  ButtonIcon: 'rebear-button-icon',
};

export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Link: 'link'
}

export type ButtonVariants = typeof ButtonVariant[keyof typeof ButtonVariant];

export const ClassNameVariantMapping = new Map([
  [ButtonVariant.Primary, 'rebear-button-primary'],
  [ButtonVariant.Secondary, 'rebear-button-secondary'],
  [ButtonVariant.Tertiary, 'rebear-button-tertiary'],
  [ButtonVariant.Link, 'rebear-button-link'],
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