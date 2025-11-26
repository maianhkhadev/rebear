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

type InstallFloatingProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const useInstallFloating = (props: InstallFloatingProps) => {
  const { open, onOpenChange } = props;

  const { refs, context } = useFloating({
    open,
    onOpenChange,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `100px`,
          });
        },
        padding: 10,
      }),
    ],
  });

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
