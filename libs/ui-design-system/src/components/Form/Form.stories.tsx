import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { FormItem } from './FormItem';
import { FormLabel } from './FormLabel';
import { TextField } from '../TextField';

const DemoForm = () => {

  return (
    <Form>
      <FormItem>
        <FormLabel>First name</FormLabel>
        <TextField />
      </FormItem>

      <FormItem>
        <FormLabel>Last name</FormLabel>
        <TextField />
      </FormItem>

      <FormItem>
        <FormLabel>Email</FormLabel>
        <TextField />
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
