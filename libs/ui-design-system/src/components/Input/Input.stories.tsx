import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import IconClose from '../Icons/IconClose';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  render: ({ ...args }) => <Input {...args} suffixIcon={<IconClose />} />,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};
