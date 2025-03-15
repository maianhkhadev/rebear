import React, { SVGProps } from 'react';

          const IconMaximize01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10L21 3M21 3H15M21 3V9M10 14L3 21M3 21H9M3 21L3 15"/></svg>
          );

          export default IconMaximize01;