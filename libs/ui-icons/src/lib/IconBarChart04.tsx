import React, { SVGProps } from 'react';

          const IconBarChart04 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 11L3 21M15 11L15 21M9 3L9 21M21 3V21"/></svg>
          );

          export default IconBarChart04;