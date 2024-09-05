import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { SelectOption } from './SelectOption';

const Demo = () => {
  const [value, setValue] = useState<string | number | readonly string[] | undefined>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Select value={value} onChange={handleChange}>
      <SelectOption value={1}>Option 1</SelectOption>
      <SelectOption value={2}>Option 2</SelectOption>
      <SelectOption value={3}>Option 3</SelectOption>
      <SelectOption value={4}>Option 4</SelectOption>
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
