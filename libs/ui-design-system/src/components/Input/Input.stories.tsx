import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { IconClose } from 'rebear-icons';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <Input {...args} suffixIcon={<IconClose />} />,
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
