import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { SelectOption } from './SelectOption';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
  render: ({ ...args }) => (
    <Select {...args}>
      <SelectOption>Option 1</SelectOption>
      <SelectOption>Option 2</SelectOption>
      <SelectOption>Option 3</SelectOption>
      <SelectOption>Option 4</SelectOption>
    </Select>
  ),
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
