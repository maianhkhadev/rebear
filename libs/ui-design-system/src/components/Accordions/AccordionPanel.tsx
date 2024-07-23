import React, { forwardRef, HTMLProps } from 'react';
import { clsx } from 'clsx';
import { ClassNames } from './Accordions.constants';

export const AccordionPanel = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>(function AccordionPanel(props, ref) {
  const { id, className, children } = props;

  const classes = clsx(ClassNames.AccordionPanel, className);

  return (
    <div className={ClassNames.AccordionTransition}>
      <main ref={ref} id={id} className={classes}>
        {children}
      </main>
    </div>
  );
});

export default AccordionPanel;
