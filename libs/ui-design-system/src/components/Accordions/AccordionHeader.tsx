import React, { forwardRef, HTMLProps } from 'react';
import { clsx } from 'clsx';
import { IconChevronDown } from 'rebear-icons';
import { useAccordionsContext } from './useAccordionsContext';
import { useAccordionContext } from './useAccordionContext';
import { ClassNames } from './Accordions.constants';

export const AccordionHeader = forwardRef<
  HTMLButtonElement,
  HTMLProps<HTMLButtonElement>
>(function AccordionHeader(props, ref) {
  const { id, className, children } = props;
  const { selectedId, setSelectedId } = useAccordionsContext();
  const { accordionId } = useAccordionContext();

  const classes = clsx(ClassNames.AccordionHeader, className);

  const onClick = () => {
    const newId = selectedId === accordionId ? undefined : accordionId;
    setSelectedId(newId);
  };

  return (
    <button
      ref={ref}
      id={id}
      type="button"
      className={classes}
      onClick={onClick}
    >
      {children}

      <IconChevronDown className={ClassNames.Icon} />
    </button>
  );
});

export default AccordionHeader;
