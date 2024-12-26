import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'Carousel',
  render: ({ ...args }) => (
    <Carousel {...args}>
      <div style={{ width: '100%', height: '50vh', backgroundColor: 'yellow' }} />
      <div style={{ width: '100%', height: '50vh', backgroundColor: 'red' }} />
      <div style={{ width: '100%', height: '50vh', backgroundColor: 'green' }} />
    </Carousel>
  ),
};
export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {},
};
