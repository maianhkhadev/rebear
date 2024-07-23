import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
  render: ({ ...args }) => <TextField {...args} />,
};
export default meta;
type Story = StoryObj<typeof TextField>;

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
