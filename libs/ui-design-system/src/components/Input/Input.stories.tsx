import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { IconX } from 'rebear-icons';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <Input {...args} suffixIcon={<IconX />} />,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};
