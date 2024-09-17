export const ClassNames = {
  Alert: 'rebear-alert',
  Content: 'rebear-alert-content',
  Title: 'rebear-alert-title',
  Description: 'rebear-alert-description',
  Actions: 'rebear-alert-actions',
  Shadow: 'rebear-alert-shadow',
  HasDismiss: 'rebear-alert-has-dismiss',
  Dismiss: 'rebear-alert-dismiss',
  Icon: 'rebear-alert-icon',
  Info: 'rebear-alert-info',
  Warning: 'rebear-alert-warning',
  Error: 'rebear-alert-error',
  Success: 'rebear-alert-success',
};

export const AlertTypes = {
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
  Success: 'success',
} as const;

export type AlertType = (typeof AlertTypes)[keyof typeof AlertTypes];

export const alertTypeClassesMap = new Map<AlertType, string>([
  [AlertTypes.Info, ClassNames.Info],
  [AlertTypes.Warning, ClassNames.Warning],
  [AlertTypes.Error, ClassNames.Error],
  [AlertTypes.Success, ClassNames.Success],
]);
