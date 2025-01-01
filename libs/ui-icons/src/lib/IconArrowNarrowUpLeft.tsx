import React, { SVGProps } from 'react';

          const IconArrowNarrowUpLeft = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18L6 6M6 6V14M6 6H14"/></svg>
          );

          export default IconArrowNarrowUpLeft;