import type { Meta, StoryObj } from '@storybook/react';
import { IconClose } from 'rebear-icons';
import { Button } from './Button';
import { ButtonIcon } from './ButtonIcon';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => (
    <div>
      <Button {...args}>Primary</Button>
      <ButtonIcon icon={<IconClose />} {...args} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};
