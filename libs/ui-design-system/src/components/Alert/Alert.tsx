import React, { forwardRef, HTMLProps } from 'react';
import { clsx } from 'clsx';
import { IconX, IconAlertCircle } from 'rebear-icons';
import { ButtonIcon } from '../Button';
import {
  ClassNames,
  AlertType,
  AlertTypes,
  alertTypeClassesMap,
} from './Alert.constants';
import './Alert.scss';

export const AlertIconsMapping = new Map<AlertType, JSX.Element>([
  [AlertTypes.Info, <IconAlertCircle key="info" role="img" />],
  [AlertTypes.Warning, <IconAlertCircle key="warning" role="img" />],
  [AlertTypes.Error, <IconAlertCircle key="error" role="img" />],
  [AlertTypes.Success, <IconAlertCircle key="success" role="img" />],
]);

export type AlertProps = {
  type: AlertType;
  hasShadow?: boolean;
  onClose?: () => void;
};

export const Alert = forwardRef<
  HTMLDivElement,
  AlertProps & HTMLProps<HTMLDivElement>
>(function Alert(props, ref) {
  const { type, className, hasShadow, children, onClose, ...otherProps } =
    props;

  const alertClasses = clsx([
    ClassNames.Alert,
    type && alertTypeClassesMap.get(type),
    hasShadow && ClassNames.Shadow,
    className,
  ]);
  const contentClasses = clsx([onClose && ClassNames.HasDismiss]);

  return (
    <div className={alertClasses} {...otherProps} ref={ref}>
      <div className={ClassNames.Icon}>{AlertIconsMapping.get(type)}</div>

      <div className={contentClasses}>
        {children}

        {onClose && (
          <ButtonIcon
            className={ClassNames.Dismiss}
            icon={<IconX />}
            onClick={onClose}
          />
        )}
      </div>
    </div>
  );
});

export default Alert;

Alert.defaultProps = {
  hasShadow: false,
  onClose: undefined,
};
