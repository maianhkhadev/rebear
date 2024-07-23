import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'TextArea',
  render: ({ ...args }) => <TextArea {...args} />,
};
export default meta;
type Story = StoryObj<typeof TextArea>;

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
