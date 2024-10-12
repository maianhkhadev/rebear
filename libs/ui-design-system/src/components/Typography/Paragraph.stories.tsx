import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: 'Typography/Paragraph',
  argTypes: {
    size: {
      options: ['md', 'sm'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => (
    <Paragraph {...args}>
      Rebear Design, a design language for background applications, is refined
      by Rebear Team.
    </Paragraph>
  ),
};
export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {},
};
