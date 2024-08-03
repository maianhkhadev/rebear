import { ButtonIcon } from '../Button';
import IconClose from '../Icons/IconClose';
import { useModalContext } from './useModalContext';
import { ClassNames } from './Modal.constant';

export const ModalDismiss = () => {
  const { onOpenChange } = useModalContext();

  const handleClick = () => {
    onOpenChange(false);
  };

  return (
    <ButtonIcon
      className={ClassNames.ModalDismiss}
      variant="primary"
      size="small"
      icon={<IconClose />}
      onClick={handleClick}
    />
  );
};

export default ModalDismiss;
