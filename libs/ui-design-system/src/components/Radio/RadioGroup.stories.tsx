import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'RadioGroup',
  render: ({ ...args }) => (
    <RadioGroup name="gender" defaultValue="male">
      <Radio value="male">Male</Radio>
      <Radio value="female">Female</Radio>
      <Radio value="other">Other</Radio>
    </RadioGroup>
  ),
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {},
};
