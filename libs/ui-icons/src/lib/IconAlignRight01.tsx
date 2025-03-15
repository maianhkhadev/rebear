import React, { SVGProps } from 'react';

          const IconAlignRight01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19"/></svg>
          );

          export default IconAlignRight01;