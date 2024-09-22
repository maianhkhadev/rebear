import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { SelectOption } from './SelectOption';

const Demo = () => {
  const [value, setValue] = useState<string | number | undefined>();

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <Select value={value} onChange={handleChange}>
      <SelectOption value={1} label="Option 1" />
      <SelectOption value={2} label="Option 2" />
      <SelectOption value={3} label="Option 3" />
      <SelectOption value={4} label="Option 4" />
    </Select>
  );
};

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
  render: ({ ...args }) => <Demo {...args} />,
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
