import type { Meta, StoryObj } from '@storybook/react';
import { Display } from './Display';

const meta: Meta<typeof Display> = {
  component: Display,
  title: 'Typography/Display',
  render: ({ ...args }) => (
    <>
      <Display size="md">Display MD: Rebear Design.</Display>
      <Display size="sm">Display SM: Rebear Design.</Display>
    </>
  ),
};
export default meta;
type Story = StoryObj<typeof Display>;

export const Default: Story = {
  args: {},
};
