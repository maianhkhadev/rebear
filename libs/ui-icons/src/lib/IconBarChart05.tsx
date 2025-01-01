import React, { SVGProps } from 'react';

          const IconBarChart05 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17V21M15 8V21M9 13V21M21 3V21"/></svg>
          );

          export default IconBarChart05;