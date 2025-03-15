import React, { SVGProps } from 'react';

          const IconAlignLeft01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3V21M21 12H7M7 12L14 19M7 12L14 5"/></svg>
          );

          export default IconAlignLeft01;