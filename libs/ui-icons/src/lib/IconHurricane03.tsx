import React, { SVGProps } from 'react';

          const IconHurricane03 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 4H3M20 8L6 8M18 12L9 12M15 16L8 16M17 20H12"/></svg>
          );

          export default IconHurricane03;