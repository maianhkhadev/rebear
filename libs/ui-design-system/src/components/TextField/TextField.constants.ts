
export const ClassNames = {
  TextField: 'rebear-text-field',
}

export const TextFieldVariant = {
  Primary: 'primary',
  Error: 'error',
}

export type TextFieldVariants = typeof TextFieldVariant[keyof typeof TextFieldVariant];

export const ClassNameVariantMapping = new Map([
  [TextFieldVariant.Primary, 'rebear-text-field-primary'],
  [TextFieldVariant.Error, 'rebear-text-field-error'],
]);

export const TextFieldSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

export type TextFieldSizes = typeof TextFieldSize[keyof typeof TextFieldSize];

export const ClassNameSizeMapping = new Map([
  [TextFieldSize.Small, 'rebear-text-field-small'],
  [TextFieldSize.Medium, 'rebear-text-field-medium'],
  [TextFieldSize.Large, 'rebear-text-field-large'],
]);