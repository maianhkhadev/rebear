import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Typography/Title',
  render: ({ ...args }) => (
    <>
      <Title level={1}>H1. Rebear Design</Title>
      <Title level={2}>H2. Rebear Design</Title>
      <Title level={3}>H3.Rebear Design</Title>
      <Title level={4}>H4. Rebear Design</Title>
      <Title level={5}>H5. Rebear Design</Title>
      <Title level={6}>H6. Rebear Design</Title>
    </>
  ),
};
export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {},
};
