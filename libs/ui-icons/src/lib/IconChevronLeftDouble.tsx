import React, { SVGProps } from 'react';

          const IconChevronLeftDouble = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17L13 12L18 7M11 17L6 12L11 7"/></svg>
          );

          export default IconChevronLeftDouble;