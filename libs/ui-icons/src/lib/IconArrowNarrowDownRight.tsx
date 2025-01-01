import React, { SVGProps } from 'react';

          const IconArrowNarrowDownRight = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6L18 18M18 18V10M18 18H10"/></svg>
          );

          export default IconArrowNarrowDownRight;