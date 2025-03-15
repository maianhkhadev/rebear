import React, { SVGProps } from 'react';

          const IconExpand02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9"/></svg>
          );

          export default IconExpand02;