export const ClassNames = {
  Title: 'rebear-title',
  Paragraph: 'rebear-paragraph',
  Caption: 'rebear-caption',
};

export const ParagraphSize = {
  SM: 'sm',
  MD: 'md',
}

export type ParagraphSizes = typeof ParagraphSize[keyof typeof ParagraphSize];

export const ClassNameSizeMapping = new Map([
  [ParagraphSize.SM, 'rebear-paragraph-sm'],
  [ParagraphSize.MD, 'rebear-paragraph-md'],
]);