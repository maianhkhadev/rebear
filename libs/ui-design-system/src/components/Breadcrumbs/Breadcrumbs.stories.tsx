import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
  render: ({ ...args }) => (
    <Breadcrumbs {...args}>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Users</Breadcrumb>
      <Breadcrumb>Create User</Breadcrumb>
    </Breadcrumbs>
  ),
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {},
};
