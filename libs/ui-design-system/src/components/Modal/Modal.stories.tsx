import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ModalDismiss } from './ModalDismiss';
import { ModalTitle } from './ModalTitle';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';
import { Button } from '../Button';

const Demo = () => {
  const [open, onOpenChange] = useState(false);

  const handleClick = () => {
    onOpenChange(true);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Show Modal
      </Button>

      <Modal open={open} onOpenChange={onOpenChange}>
        <ModalTitle>
          Modal title <ModalDismiss />
        </ModalTitle>
        <ModalContent>Modal content</ModalContent>
        <ModalActions>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Confirm</Button>
        </ModalActions>
      </Modal>
    </>
  );
};

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
  render: ({ ...args }) => <Demo {...args} />,
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};
