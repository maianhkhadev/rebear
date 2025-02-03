import type { Meta, StoryObj } from '@storybook/react';
import { IconInfoCircle } from 'rebear-icons';
import { ButtonIcon } from './ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
  component: ButtonIcon,
  title: 'Button/ButtonIcon',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'secondary-color', 'tertiary', 'tertiary-color'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <ButtonIcon {...args} />,
};
export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  args: {
    icon: <IconInfoCircle />,
  },
};

export const Error: Story = {
  args: {
    icon: <IconInfoCircle />,
    error: true
  },
};
