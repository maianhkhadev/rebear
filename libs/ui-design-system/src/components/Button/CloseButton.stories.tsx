import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './CloseButton';

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
  title: 'Button/CloseButton',
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <CloseButton {...args} />,
};
export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {},
};
