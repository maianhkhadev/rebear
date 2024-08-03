import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from '@floating-ui/react';

export type InstallFloatingProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const useInstallFloating = (props: InstallFloatingProps) => {
  const { open, onOpenChange } = props;

  const { refs, context } = useFloating({ open, onOpenChange });

  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
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
