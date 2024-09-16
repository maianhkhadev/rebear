import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { FormItem } from './FormItem';
import { Input } from '../Input';
import { Select, SelectOption } from '../Select';
import { RadioGroup, Radio } from '../Radio';
import { Button } from '../Button';

const DemoForm = () => {
  return (
    <Form>
      <FormItem name="fullname" label="Full name">
        <Input />
      </FormItem>

      <FormItem name="email" label="Email">
        <Input />
      </FormItem>

      {/* <FormItem name="country" label="Country">
        <Select>
          <SelectOption value="vn">Vietnam</SelectOption>
          <SelectOption value="us">USA</SelectOption>
          <SelectOption value="th">Thailand</SelectOption>
          <SelectOption value="kr">Korea</SelectOption>
        </Select>
      </FormItem>

      <FormItem name="gender" label="Gender">
        <RadioGroup name="gender">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup>
      </FormItem> */}

      <Button type="submit" variant="success">
        Submit
      </Button>
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
