import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Chip',
  render: ({ ...args }) => <Chip {...args}>Chip</Chip>,
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {},
};
