import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'Carousel',
  render: ({ ...args }) => (
    <Carousel {...args}>
      <div style={{ width: '100%', height: '50vh', backgroundColor: '#364d79' }} />
      <div style={{ width: '100%', height: '50vh', backgroundColor: '#364d79' }} />
      <div style={{ width: '100%', height: '50vh', backgroundColor: '#364d79' }} />
    </Carousel>
  ),
};
export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {},
};
