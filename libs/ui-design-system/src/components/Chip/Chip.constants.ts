export const ClassNames = {
  Chip: 'rebear-chip',
};

export const ChipVariant = {
  Primary: 'primary',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
  Info: 'info',
}

export type ChipVariants = typeof ChipVariant[keyof typeof ChipVariant];

export const ClassNameVariantMapping = new Map([
  [ChipVariant.Primary, 'rebear-chip-primary'],
  [ChipVariant.Success, 'rebear-chip-success'],
  [ChipVariant.Warning, 'rebear-chip-warning'],
  [ChipVariant.Danger, 'rebear-chip-danger'],
  [ChipVariant.Info, 'rebear-chip-info'],
]);