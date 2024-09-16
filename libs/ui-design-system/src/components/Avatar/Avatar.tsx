import React, {
  cloneElement,
  CSSProperties,
  forwardRef,
  HTMLProps,
  ReactElement,
} from 'react';
import { clsx } from 'clsx';
import {
  AvatarClassNames,
  AvatarDataTestIds,
  avatarIconSizeMapping,
  AvatarInitialsStyle,
  avatarInitialsStyleClassMapping,
  AvatarSize,
  avatarSizeClassMapping,
  AvatarSizes,
  changePhotoIconSize,
} from './Avatar.constants';

export type AvatarProps = {
  avatarSize?: AvatarSize;
  darkMode?: boolean;
  avatarUrl?: string;
  initials?: string;
  icon?: ReactElement;
  hasUpload?: boolean;
  initialsStyle?: AvatarInitialsStyle;
  children?: React.ReactNode;
} &
  Omit<HTMLProps<HTMLDivElement>, 'children'>;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  props,
  ref,
) {
  const {
    className,
    avatarSize,
    avatarUrl,
    initials,
    darkMode,
    icon,
    hasUpload,
    initialsStyle,
    children,
    ...otherProps
  } = props;

  const spacingClasses = useSpacing({
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginMd,
    marginTopMd,
    marginRightMd,
    marginBottomMd,
    marginLeftMd,
  });

  const classes = clsx([
    AvatarClassNames.container,
    className,
    avatarSize &&
      avatarSizeClassMapping.has(avatarSize) &&
      avatarSizeClassMapping.get(avatarSize),
    initials &&
      initialsStyle &&
      avatarInitialsStyleClassMapping.has(initialsStyle) &&
      avatarInitialsStyleClassMapping.get(initialsStyle),
    darkMode && AvatarClassNames.darkMode,
    spacingClasses,
  ]);

  const avatarStyles: CSSProperties = avatarUrl
    ? { backgroundImage: `url(${avatarUrl})` }
    : {};

  return (
    <div
      {...otherProps}
      ref={ref}
      className={classes}
      style={avatarStyles}
      data-testid={AvatarDataTestIds.container}
    >
      {!avatarUrl && initials && <span>{initials}</span>}
      {!avatarUrl &&
        !initials &&
        icon &&
        cloneElement(icon, {
          size: avatarIconSizeMapping.get(avatarSize as AvatarSize),
          color: 'var(--btx-neutral-600)',
        })}
      {hasUpload && avatarSize === AvatarSizes.XXL && (
        <div
          className="btx-avatar-change-photo"
          data-testid={AvatarDataTestIds.changeIconContainer}
        >
          <IconChangePhoto size={changePhotoIconSize} />
        </div>
      )}
      {children}
    </div>
  );
});

Avatar.defaultProps = {
  avatarSize: AvatarSizes.M,
  darkMode: false,
  avatarUrl: undefined,
  initials: undefined,
  icon: undefined,
  hasUpload: false,
  initialsStyle: undefined,
  children: undefined,
};

export default Avatar;
