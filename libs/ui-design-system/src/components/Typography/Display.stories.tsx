import type { Meta, StoryObj } from '@storybook/react';
import { Display } from './Display';

const meta: Meta<typeof Display> = {
  component: Display,
  title: 'Typography/Display',
  argTypes: {
    size: {
      options: ['md', 'sm'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <Display {...args}>Rebear Design.</Display>,
};
export default meta;
type Story = StoryObj<typeof Display>;

export const Default: Story = {
  args: {},
};
