
export const ClassNames = {
  RadioGroup: 'rebear-radio-group',
  Radio: 'rebear-radio',
  RadioMarker: 'rebear-radio-marker',
  RadioLabel: 'rebear-radio-label',
}

export const RadioSize = {
  MD: 'md',
  LG: 'lg',
}

export type RadioSizes = typeof RadioSize[keyof typeof RadioSize];

export const ClassNameSizeMapping = new Map([
  [RadioSize.MD, 'rebear-radio-md'],
  [RadioSize.LG, 'rebear-radio-lg'],
]);