export const ClassNames = {
  Markdown: 'rebear-markdown',
}

export const MarkdownVariant = {
  Primary: 'primary',
  Error: 'error',
}

export type MarkdownVariants = typeof MarkdownVariant[keyof typeof MarkdownVariant];

export const ClassNameVariantMapping = new Map([
  [MarkdownVariant.Primary, 'rebear-markdown-primary'],
  [MarkdownVariant.Error, 'rebear-markdown-error'],
]);

export const MarkdownSize = {
  MD: 'md',
  LG: 'lg',
}

export type MarkdownSizes = typeof MarkdownSize[keyof typeof MarkdownSize];

export const ClassNameSizeMapping = new Map([
  [MarkdownSize.MD, 'rebear-markdown-md'],
  [MarkdownSize.LG, 'rebear-markdown-lg'],
]);

export const theme = {
  code: 'editor-code',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    h5: 'editor-heading-h5',
  },
  image: 'editor-image',
  link: 'editor-link',
  list: {
    listitem: 'editor-listitem',
    nested: {
      listitem: 'editor-nested-listitem',
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
  },
  paragraph: 'editor-paragraph',
  placeholder: 'editor-placeholder',
  quote: 'editor-quote',
  text: {
    bold: 'editor-text-bold',
    code: 'editor-text-code',
    hashtag: 'editor-text-hashtag',
    italic: 'editor-text-italic',
    overflowed: 'editor-text-overflowed',
    strikethrough: 'editor-text-strikethrough',
    underline: 'editor-text-underline',
    underlineStrikethrough: 'editor-text-underlineStrikethrough',
  },
}