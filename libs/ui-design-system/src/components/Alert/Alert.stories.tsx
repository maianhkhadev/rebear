import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { AlertContent } from './AlertContent';
import { AlertTitle } from './AlertTitle';
import { AlertDescription } from './AlertDescription';
import { AlertActions } from './AlertActions';
import { AlertTypes } from './Alert.constants';
import { Button } from '../Button';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  render: ({ ...args }) => (
    <Alert {...args} onClose={() => {}}>
      <AlertContent>
        <AlertTitle>
          We’ve just released a new feature (informational messages)!
        </AlertTitle>
        <AlertDescription>
          This is supporting text. It should only contain 1 to 2 sentences.
        </AlertDescription>
      </AlertContent>

      <AlertActions>
        <Button variant="primary">
          Action button
        </Button>
        <Button variant="secondary">Dismiss</Button>
      </AlertActions>
    </Alert>
  ),
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {},
};


export const Info: Story = {
  args: {
    type: AlertTypes.Info,
  },
};

export const Success: Story = {
  args: {
    type: AlertTypes.Success,
  },
};

export const Warning: Story = {
  args: {
    type: AlertTypes.Warning,
  },
};

export const Error: Story = {
  args: {
    type: AlertTypes.Error,
  },
};
