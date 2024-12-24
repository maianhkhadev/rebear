export const ClassNames = {
  TextArea: 'rebear-text-area',
}

export const TextAreaVariant = {
  Primary: 'primary',
  Error: 'error',
}

export type TextAreaVariants = typeof TextAreaVariant[keyof typeof TextAreaVariant];

export const ClassNameVariantMapping = new Map([
  [TextAreaVariant.Primary, 'rebear-text-area-primary'],
  [TextAreaVariant.Error, 'rebear-text-area-error'],
]);

export const TextAreaSize = {
  MD: 'md',
  LG: 'lg',
}

export type TextAreaSizes = typeof TextAreaSize[keyof typeof TextAreaSize];

export const ClassNameSizeMapping = new Map([
  [TextAreaSize.MD, 'rebear-text-area-md'],
  [TextAreaSize.LG, 'rebear-text-area-lg'],
]);