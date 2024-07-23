
export const ClassNames = {
  Button: 'rebear-button',
  Block: 'rebear-button-block',
};

export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
  Info: 'info',
  OutlinePrimary: 'outline-primary',
  OutlineSecondary: 'outline-secondary',
  OutlineSuccess: 'outline-success',
  OutlineWarning: 'outline-warning',
  OutlineError: 'outline-error',
  OutlineInfo: 'outline-info',
}

export type ButtonVariants = typeof ButtonVariant[keyof typeof ButtonVariant];

export const ClassNameVariantMapping = new Map([
  [ButtonVariant.Primary, 'rebear-button-primary'],
  [ButtonVariant.Secondary, 'rebear-button-secondary'],
  [ButtonVariant.Success, 'rebear-button-success'],
  [ButtonVariant.Warning, 'rebear-button-warning'],
  [ButtonVariant.Error, 'rebear-button-error'],
  [ButtonVariant.Info, 'rebear-button-info'],
  [ButtonVariant.OutlinePrimary, 'rebear-button-outline-primary'],
  [ButtonVariant.OutlineSecondary, 'rebear-button-outline-secondary'],
  [ButtonVariant.OutlineSuccess, 'rebear-button-outline-success'],
  [ButtonVariant.OutlineWarning, 'rebear-button-outline-warning'],
  [ButtonVariant.OutlineError, 'rebear-button-outline-error'],
  [ButtonVariant.OutlineInfo, 'rebear-button-outline-info'],
]);

export const ButtonSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

export type ButtonSizes = typeof ButtonSize[keyof typeof ButtonSize];

export const ClassNameSizeMapping = new Map([
  [ButtonSize.Small, 'rebear-button-small'],
  [ButtonSize.Medium, 'rebear-button-medium'],
  [ButtonSize.Large, 'rebear-button-large'],
]);