import React, { SVGProps } from 'react';

          const IconArrowLeft = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
          );

          export default IconArrowLeft;