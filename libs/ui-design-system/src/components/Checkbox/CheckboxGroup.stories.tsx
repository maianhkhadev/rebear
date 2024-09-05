import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: 'CheckboxGroup',
  render: ({ ...args }) => (
    <CheckboxGroup name="gender" defaultValue="male">
      <Checkbox value="male">Male</Checkbox>
      <Checkbox value="female">Female</Checkbox>
      <Checkbox value="other">Other</Checkbox>
    </CheckboxGroup>
  ),
};
export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {},
};
