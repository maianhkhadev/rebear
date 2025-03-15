import React, { SVGProps } from 'react';

          const IconMenu04 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12H21M3 6H21M9 18H21"/></svg>
          );

          export default IconMenu04;