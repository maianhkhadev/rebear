import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from './Caption';

const meta: Meta<typeof Caption> = {
  component: Caption,
  title: 'Typography/Caption',
  argTypes: {
    size: {
      options: ['md', 'sm'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => (
    <Caption {...args}>
      Rebear Design, a design language for background applications, is refined
      by Rebear Team.
    </Caption>
  ),
};
export default meta;
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {},
};
