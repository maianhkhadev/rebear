import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'Radio',
  render: ({ ...args }) => (
    <>
      <Radio name="radio" value={1}>
        Radio 1
      </Radio>
      <Radio name="radio" value={2}>
        Radio 2
      </Radio>
    </>
  ),
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
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
