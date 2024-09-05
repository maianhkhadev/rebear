import type { StoryObj } from '@storybook/react';
import { Row } from './Row';
import { Col } from './Col';

const meta = {
  title: 'Grid',
  render: ({ ...args }) => (
    <Row gutter={24}>
      <Col span={6}>Col 1</Col>
      <Col span={6}>Col 2</Col>
      <Col span={6}>Col 3</Col>
      <Col span={6}>Col 4</Col>
    </Row>
  ),
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
