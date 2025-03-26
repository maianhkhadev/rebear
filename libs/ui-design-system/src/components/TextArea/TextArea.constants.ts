export const ClassNames = {
  TextArea: 'rebear-textarea',
}

export const TextAreaVariant = {
  Primary: 'primary',
  Error: 'error',
}

export type TextAreaVariants = typeof TextAreaVariant[keyof typeof TextAreaVariant];

export const ClassNameVariantMapping = new Map([
  [TextAreaVariant.Primary, 'rebear-textarea-primary'],
  [TextAreaVariant.Error, 'rebear-textarea-error'],
]);

export const TextAreaSize = {
  MD: 'md',
  LG: 'lg',
}

export type TextAreaSizes = typeof TextAreaSize[keyof typeof TextAreaSize];

export const ClassNameSizeMapping = new Map([
  [TextAreaSize.MD, 'rebear-textarea-md'],
  [TextAreaSize.LG, 'rebear-textarea-lg'],
]);