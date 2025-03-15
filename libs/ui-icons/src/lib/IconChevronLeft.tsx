import React, { SVGProps } from 'react';

          const IconChevronLeft = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18L9 12L15 6"/></svg>
          );

          export default IconChevronLeft;