import React, {
  forwardRef,
  HTMLProps,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { clsx } from 'clsx';
import { ClassNames } from './Accordions.constants';
import { AccordionContext, AccordionData } from './AccordionContext';
import { useAccordionsContext } from './useAccordionsContext';

export const Accordion = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function Accordion(props, ref) {
    const { className, children, ...rest } = props;
    const { selectedId, subscribe, unsubscribe, getNextAccordionId } =
      useAccordionsContext();
    const accordionId = getNextAccordionId();
    const idRef = useRef<number>(accordionId);

    useEffect(() => {
      const id = idRef.current;
      subscribe(id);

      return () => {
        unsubscribe(id);
      };
    }, []);

    const value = useMemo<AccordionData>(
      () => ({
        accordionId: idRef.current,
      }),
      [idRef]
    );

    const classes = clsx(
      ClassNames.Accordion,
      selectedId === idRef.current && ClassNames.Active,
      className
    );

    return (
      <AccordionContext.Provider value={value}>
        <div ref={ref} className={classes} {...rest}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

export default Accordion;
