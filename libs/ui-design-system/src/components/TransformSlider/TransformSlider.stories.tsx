import type { Meta, StoryObj } from '@storybook/react';
import { TransformSlider } from './TransformSlider';
import beforesrc from './before-src.jpg';
import aftersrc from './after-src.jpg';

const meta: Meta<typeof TransformSlider> = {
  component: TransformSlider,
  title: 'TransformSlider',
  render: ({ ...args }) => <TransformSlider {...args} />,
};
export default meta;
type Story = StoryObj<typeof TransformSlider>;

export const Default: Story = {
  args: {
    beforePhoto: beforesrc,
    afterPhoto: aftersrc
  },
};
