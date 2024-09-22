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
  AvatarSize,
  avatarSizeClassMapping,
  AvatarSizes,
} from './Avatar.constants';

export type AvatarProps = {
  avatarSize?: AvatarSize;
  darkMode?: boolean;
  avatarUrl?: string;
  initials?: string;
  icon?: ReactElement;
} & Omit<HTMLProps<HTMLDivElement>, 'children'>;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  props,
  ref
) {
  const {
    className,
    avatarSize,
    avatarUrl,
    initials,
    darkMode,
    icon,
    ...otherProps
  } = props;

  const classes = clsx([
    AvatarClassNames.container,
    avatarSize &&
      avatarSizeClassMapping.has(avatarSize) &&
      avatarSizeClassMapping.get(avatarSize),
    darkMode && AvatarClassNames.darkMode,
    className,
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
    </div>
  );
});

Avatar.defaultProps = {
  avatarSize: AvatarSizes.M,
  darkMode: false,
  avatarUrl: undefined,
  initials: undefined,
  icon: undefined,
};

export default Avatar;
