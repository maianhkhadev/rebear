import type { Meta, StoryObj } from '@storybook/react';
import { Footnote } from './Footnote';

const meta: Meta<typeof Footnote> = {
  component: Footnote,
  title: 'Typography/Footnote',
  render: ({ ...args }) => (
      <Footnote>
        Rebear Design, a design language for background applications, is refined
        by Rebear Team.
      </Footnote>
  ),
};
export default meta;
type Story = StoryObj<typeof Footnote>;

export const Default: Story = {
  args: {},
};
