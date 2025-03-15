import React, { SVGProps } from 'react';

          const IconFilterLines = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12H18M3 6H21M9 18H15"/></svg>
          );

          export default IconFilterLines;