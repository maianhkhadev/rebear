import { ButtonIcon } from '../Button';
import { IconXClose } from 'rebear-icons';
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
      variant="secondary"
      size="small"
      icon={<IconXClose />}
      onClick={handleClick}
    />
  );
};

export default ModalDismiss;
