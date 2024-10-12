export const ClassNames = {
  Display: 'rebear-display',
  Title: 'rebear-title',
  Paragraph: 'rebear-paragraph',
  Caption: 'rebear-caption',
};

export const ParagraphSize = {
  SM: 'sm',
  MD: 'md',
}

export type ParagraphSizes = typeof ParagraphSize[keyof typeof ParagraphSize];

export const ClassNameParagraphSizeMapping = new Map([
  [ParagraphSize.SM, 'rebear-paragraph-sm'],
  [ParagraphSize.MD, 'rebear-paragraph-md'],
]);

export const DisplaySize = {
  SM: 'sm',
  MD: 'md',
}

export type DisplaySizes = typeof DisplaySize[keyof typeof DisplaySize];

export const ClassNameDisplaySizeMapping = new Map([
  [DisplaySize.SM, 'rebear-display-sm'],
  [DisplaySize.MD, 'rebear-display-md'],
]);