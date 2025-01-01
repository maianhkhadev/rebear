import React, { SVGProps } from 'react';

          const IconMenu01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12H21M3 6H21M3 18H21"/></svg>
          );

          export default IconMenu01;