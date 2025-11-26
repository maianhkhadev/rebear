import type { Meta, StoryObj } from '@storybook/react';
import { Markdown } from './Markdown';

const meta: Meta<typeof Markdown> = {
  component: Markdown,
  title: 'Form/Markdown',
  render: ({ ...args }) => <Markdown {...args} />,
};
export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  args: {
    defaultValue: '<p>Xin chào <strong>Lexical</strong>!</p>',
    onChange: (html) => console.log(html),
  },
};
