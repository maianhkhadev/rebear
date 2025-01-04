/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '../Typography';
import { ConfirmationModal } from './ConfirmationModal';
import { ModalTitle } from './ModalTitle';
import { ModalContent } from './ModalContent';
import { Button } from '../Button';

const Demo = (props: any) => {
  const [open, onOpenChange] = useState(false);

  const handleClick = () => {
    onOpenChange(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Show Modal
      </Button>

      <ConfirmationModal
        open={open}
        onOpenChange={onOpenChange}
        onConfirm={() => {}}
        {...props}
      >
        <ModalTitle>
          <Title level={5}>Confirmation modal title</Title>
        </ModalTitle>
        <ModalContent>Confirmation modal content</ModalContent>
      </ConfirmationModal>
    </>
  );
};

const meta: Meta<typeof ConfirmationModal> = {
  component: ConfirmationModal,
  title: 'Modal/ConfirmationModal',
  render: ({ ...args }) => <Demo {...args} />,
};
export default meta;
type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
  args: {},
};

export const VariantInfo: Story = {
  args: {
    variant: 'info',
  },
};

export const VariantWarning: Story = {
  args: {
    variant: 'warning',
  },
};

export const VariantSuccess: Story = {
  args: {
    variant: 'success',
  },
};

export const VariantError: Story = {
  args: {
    variant: 'error',
  },
};
