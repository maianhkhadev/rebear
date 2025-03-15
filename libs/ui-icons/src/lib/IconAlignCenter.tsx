import React, { SVGProps } from 'react';

          const IconAlignCenter = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 10H6M21 6H3M21 14H3M18 18H6"/></svg>
          );

          export default IconAlignCenter;