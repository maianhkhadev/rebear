import type { Meta, StoryObj } from '@storybook/react';
import { Password } from './Password';

const meta: Meta<typeof Password> = {
  component: Password,
  title: 'Form/Password',
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <Password {...args} />,
};
export default meta;
type Story = StoryObj<typeof Password>;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

