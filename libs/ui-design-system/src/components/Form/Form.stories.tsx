import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { FormItem } from './FormItem';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Select } from '../Select';
import { CheckboxGroup, Checkbox } from '../Checkbox';
import { RadioGroup, Radio } from '../Radio';
import { Button } from '../Button';

const DemoForm = () => {
  const handleSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <Form
      defaultValues={{ fullname: '', note: '', country: '', gender: 'male', languages: [] }}
      onSubmit={handleSubmit}
    >
      <FormItem
        name="fullname"
        label="Full name"
        element={<Input />}
        rules={{ required: 'Full name is required' }}
      />

      <FormItem name="note" label="Note" element={<TextArea rows={4} />} />

      <FormItem
        name="country"
        label="Country"
        element={
          <Select
            options={[
              { value: 'vn', label: 'Vietnam' },
              { value: 'th', label: 'Thailand' },
              { value: 'ro', label: 'Romania' },
              { value: 'sg', label: 'Singapore' },
            ]}
          />
        }
      />

      <FormItem
        name="gender"
        label="Gender"
        element={
          <RadioGroup>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </RadioGroup>
        }
      />

      <FormItem
        name="languages"
        label="Languages"
        element={
          <CheckboxGroup>
            <Checkbox value="vi">Tiếng Việt</Checkbox>
            <Checkbox value="en">English</Checkbox>
            <Checkbox value="th">Thailand</Checkbox>
          </CheckboxGroup>
        }
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Form/Form',
  render: ({ ...args }) => <DemoForm {...args} />,
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {};
