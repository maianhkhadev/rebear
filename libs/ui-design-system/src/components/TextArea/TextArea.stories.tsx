import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Form/TextArea',
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
  },
  render: ({ ...args }) => <TextArea {...args} />,
};
export default meta;
type Story = StoryObj<typeof TextArea>;

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
