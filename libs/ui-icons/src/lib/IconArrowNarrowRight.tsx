import React, { SVGProps } from 'react';

          const IconArrowNarrowRight = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H20M20 12L14 6M20 12L14 18"/></svg>
          );

          export default IconArrowNarrowRight;