import React, { SVGProps } from 'react';

          const IconHash01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8H20M4 16H20M8 3V21M16 3V21"/></svg>
          );

          export default IconHash01;