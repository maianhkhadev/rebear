import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: 'CheckboxGroup',
  render: ({ ...args }) => (
    <CheckboxGroup name="languages">
      <Checkbox value="vi">Tiếng Việt</Checkbox>
      <Checkbox value="en">English</Checkbox>
    </CheckboxGroup>
  ),
};
export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {},
};
