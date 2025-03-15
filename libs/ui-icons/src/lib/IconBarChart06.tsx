import React, { SVGProps } from 'react';

          const IconBarChart06 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8V21M21 17V21M3 3V21M15 13V21"/></svg>
          );

          export default IconBarChart06;