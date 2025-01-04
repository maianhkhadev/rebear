import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '../Typography';
import { Modal } from './Modal';
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
          <Title level={5}>Modal title</Title>
        </ModalTitle>
        <ModalContent>Modal content</ModalContent>
        <ModalActions>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Submit</Button>
        </ModalActions>
      </Modal>
    </>
  );
};

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal/Modal',
  render: ({ ...args }) => <Demo {...args} />,
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};
