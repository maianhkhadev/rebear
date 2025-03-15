import React, { SVGProps } from 'react';

          const IconChevronSelectorHorizontal = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7L4 12L9 17M15 7L20 12L15 17"/></svg>
          );

          export default IconChevronSelectorHorizontal;