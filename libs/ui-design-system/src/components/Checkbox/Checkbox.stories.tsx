import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
  render: ({ ...args }) => (
    <>
      <Checkbox name="radio" value={1}>
        Checkbox 1
      </Checkbox>
      <Checkbox name="radio" value={2}>
        Checkbox 2
      </Checkbox>
    </>
  ),
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

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
