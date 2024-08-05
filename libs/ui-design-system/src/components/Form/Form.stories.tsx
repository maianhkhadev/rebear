import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';
import { Input } from '../Input';

const DemoForm = () => {

  return (
    <Form>
      <FormItem>
        <FormLabel>First name</FormLabel>
        <Input />
      </FormItem>

      <FormItem>
        <FormLabel>Last name</FormLabel>
        <Input />
      </FormItem>

      <FormItem>
        <FormLabel>Email</FormLabel>
        <Input />
      </FormItem>
    </Form>
  )
}

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Form',
  render: ({ ...args }) => <DemoForm {...args} />,
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {};
