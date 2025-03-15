import React, { SVGProps } from 'react';

          const IconMenu05 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8.5H21M3 15.5H21"/></svg>
          );

          export default IconMenu05;