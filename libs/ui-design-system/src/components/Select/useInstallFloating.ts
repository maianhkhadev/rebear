import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  size,
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

  const { refs, context, floatingStyles } = useFloating({
    open,
    onOpenChange,
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
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
    floatingStyles,
    referenceProps: {
      ...getReferenceProps(),
    },
    floatingProps: {
      style: floatingStyles,
      ...getFloatingProps(),
    },
  };
};

export default useInstallFloating;
