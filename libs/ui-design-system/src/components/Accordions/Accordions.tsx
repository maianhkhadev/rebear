import React, { forwardRef, HTMLProps, useRef, useMemo, useState } from 'react';
import { AccordionsContext, AccordionsData } from './AccordionsContext';
import { ClassNames } from './Accordions.constants';
import './Accordions.scss';

export const Accordions = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function Accordions(props, ref) {
    const { children } = props;
    const currentAccordionId = useRef<number>(1);
    const accordionIds = useRef(new Set<number>());
    const [selectedId, setSelectedId] = useState<string | number | undefined>();

    const value = useMemo<AccordionsData>(
      () => ({
        selectedId,
        setSelectedId,
        getNextAccordionId: () => {
          const newValue = currentAccordionId.current;
          currentAccordionId.current = newValue + 1;
          return newValue;
        },
        subscribe: (id: number) => {
          if (accordionIds.current.size === 0) {
            setSelectedId(id);
          }

          accordionIds.current.add(id);
        },
        unsubscribe: (id: number) => {
          accordionIds.current.delete(id);
        },
      }),
      [selectedId, setSelectedId]
    );

    return (
      <AccordionsContext.Provider value={value}>
        <div ref={ref} className={ClassNames.Accordions}>
          {children}
        </div>
      </AccordionsContext.Provider>
    );
  }
);

export default Accordions;
