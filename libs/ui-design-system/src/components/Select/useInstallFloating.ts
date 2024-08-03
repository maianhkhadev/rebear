import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from '@floating-ui/react';

export type InstallFloatingProps = {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export const useInstallFloating = (props: InstallFloatingProps) => {
  const { open, onOpenChange } = props;

  const { refs, context } = useFloating({
    open,
    onOpenChange,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return {
    context,
    refs,
    referenceProps: {
      ...getReferenceProps(),
    },
    floatingProps: {
      ...getFloatingProps(),
    },
  };
};

export default useInstallFloating;
