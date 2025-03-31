import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { SelectOption } from './SelectOption';

const Demo = () => {
  const [value, setValue] = useState<string | number | undefined>(1);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <Select
      value={value}
      options={[
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
        { value: 3, label: 'Option 3' },
        { value: 4, label: 'Option 4' },
      ]}
      onChange={handleChange}
    />
  );
};

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Form/Select',
  render: ({ ...args }) => <Demo {...args} />,
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
