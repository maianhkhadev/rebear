import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Typography/Title',
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <Title {...args}>Rebear Design</Title>,
};
export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {},
};
