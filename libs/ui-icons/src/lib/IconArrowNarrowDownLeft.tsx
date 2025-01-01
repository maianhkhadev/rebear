import React, { SVGProps } from 'react';

          const IconArrowNarrowDownLeft = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 18H14M6 18V10"/></svg>
          );

          export default IconArrowNarrowDownLeft;