
export const ClassNames = {
  Radio: 'rebear-radio',
}

export const RadioSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

export type RadioSizes = typeof RadioSize[keyof typeof RadioSize];

export const ClassNameSizeMapping = new Map([
  [RadioSize.Small, 'rebear-radio-small'],
  [RadioSize.Medium, 'rebear-radio-medium'],
  [RadioSize.Large, 'rebear-radio-large'],
]);