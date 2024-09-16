export const AvatarClassNames = {
  container: 'btx-avatar',
  s: 'btx-avatar-s',
  m: 'btx-avatar-m',
  l: 'btx-avatar-l',
  xl: 'btx-avatar-xl',
  xxl: 'btx-avatar-xxl',
  darkMode: 'btx-avatar-dark-mode',
  uploadPhoto: 'btx-avatar-change-photo',
  initialsStyle1: 'btx-avatar-initials-style1',
  initialsStyle2: 'btx-avatar-initials-style2',
  initialsStyle3: 'btx-avatar-initials-style3',
  initialsStyle4: 'btx-avatar-initials-style4',
  initialsStyle5: 'btx-avatar-initials-style5',
  payments: 'btx-avatar-app-payments',
  financials: 'btx-avatar-app-financials',
  sales: 'btx-avatar-app-sales',
  invoices: 'btx-avatar-app-invoices',
  partner: 'btx-avatar-app-partner',
  universal: 'btx-avatar-app-universal',
};

export const changePhotoIconSize = 16;

export const AvatarDataTestIds = {
  container: 'btx-avatar',
  changeIconContainer: 'btx-change-icon-container',
};

export const AvatarSizes = {
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl',
} as const;

export type AvatarSize = (typeof AvatarSizes)[keyof typeof AvatarSizes];

export const avatarSizeClassMapping = new Map<AvatarSize, string>([
  [AvatarSizes.S, AvatarClassNames.s],
  [AvatarSizes.M, AvatarClassNames.m],
  [AvatarSizes.L, AvatarClassNames.l],
  [AvatarSizes.XL, AvatarClassNames.xl],
  [AvatarSizes.XXL, AvatarClassNames.xxl],
]);

export const avatarIconSizeMapping = new Map<AvatarSize, number>([
  [AvatarSizes.S, 16],
  [AvatarSizes.M, 20],
  [AvatarSizes.L, 28],
  [AvatarSizes.XL, 32],
  [AvatarSizes.XXL, 48],
]);

export const AvatarInitialsStyles = {
  Style1: 'initials-style1',
  Style2: 'initials-style2',
  Style3: 'initials-style3',
  Style4: 'initials-style4',
  Style5: 'initials-style5',
} as const;

export type AvatarInitialsStyle =
  (typeof AvatarInitialsStyles)[keyof typeof AvatarInitialsStyles];

export const avatarInitialsStyleClassMapping = new Map<
  AvatarInitialsStyle,
  string
>([
  [AvatarInitialsStyles.Style1, AvatarClassNames.initialsStyle1],
  [AvatarInitialsStyles.Style2, AvatarClassNames.initialsStyle2],
  [AvatarInitialsStyles.Style3, AvatarClassNames.initialsStyle3],
  [AvatarInitialsStyles.Style4, AvatarClassNames.initialsStyle4],
  [AvatarInitialsStyles.Style5, AvatarClassNames.initialsStyle5],
]);

export const AvatarAppsStyles = {
  Payments: 'payments',
  PaymentAccounts: 'payment_accounts',
  Financials: 'financials',
  Sales: 'sales',
  Invoices: 'invoices',
  Partner: 'partner',
  Universal: 'universal',
} as const;

export type AvatarAppStyle =
  (typeof AvatarAppsStyles)[keyof typeof AvatarAppsStyles];

export const avatarAppsStyleClassMapping = new Map<AvatarAppStyle, string>([
  [AvatarAppsStyles.Payments, AvatarClassNames.payments],
  [AvatarAppsStyles.PaymentAccounts, AvatarClassNames.payments],
  [AvatarAppsStyles.Financials, AvatarClassNames.financials],
  [AvatarAppsStyles.Sales, AvatarClassNames.sales],
  [AvatarAppsStyles.Invoices, AvatarClassNames.invoices],
  [AvatarAppsStyles.Partner, AvatarClassNames.partner],
  [AvatarAppsStyles.Universal, AvatarClassNames.universal],
]);
