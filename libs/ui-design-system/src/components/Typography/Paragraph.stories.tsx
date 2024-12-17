import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: 'Typography/Paragraph',
  render: ({ ...args }) => (
    <>
      <Paragraph size="md">
        Paragraph MD: Rebear Design, a design language for background applications, is refined
        by Rebear Team.
      </Paragraph>

      <Paragraph size="sm">
        Paragraph SM: Rebear Design, a design language for background applications, is refined
        by Rebear Team.
      </Paragraph>
    </>
  ),
};
export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {},
};
