import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Form/Checkbox',
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => (
    <>
      <Checkbox name="languages" value="vi" disabled checked>Tiếng Việt</Checkbox>
      <Checkbox name="languages" value="en">English</Checkbox>
    </>
  ),
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};