import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => (
    <Button {...args}>Primary</Button>
  ),
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    danger: true
  },
};
