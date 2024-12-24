import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { FormItem } from './FormItem';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
// import { RadioGroup, Radio } from '../Radio';
import { Button } from '../Button';

const DemoForm = () => {
  const handleSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem
        name="fullname"
        label="Full name"
        rules={{ required: 'Full name is required' }}
      >
        <Input />
      </FormItem>

      <FormItem name="note" label="Note">
        <TextArea rows={4} />
      </FormItem>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Form',
  render: ({ ...args }) => <DemoForm {...args} />,
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {};
