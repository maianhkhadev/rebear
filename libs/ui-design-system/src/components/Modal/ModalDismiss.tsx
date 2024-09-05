import { ButtonIcon } from '../Button';
import IconClose from '../Icons/IconClose';
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
      icon={<IconClose />}
      onClick={handleClick}
    />
  );
};

export default ModalDismiss;
