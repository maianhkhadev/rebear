import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'Form/Search',
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <Search {...args} />,
};
export default meta;
type Story = StoryObj<typeof Search>;

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

