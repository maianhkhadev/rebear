import { ButtonIcon, ButtonVariant, ButtonSize } from '../Button';
import { IconX } from 'rebear-icons';
import { ClassNames } from './Modal.constants';

export interface ModalDismissProps {
  onOpenChange: (open: boolean) => void;
}

export const ModalDismiss = (props: ModalDismissProps) => {
  const { onOpenChange } = props;

  const handleClick = () => {
    onOpenChange(false);
  };

  return (
    <ButtonIcon
      className={ClassNames.ModalDismiss}
      variant={ButtonVariant.Tertiary}
      size={ButtonSize.SM}
      icon={<IconX />}
      onClick={handleClick}
    />
  );
};

export default ModalDismiss;
