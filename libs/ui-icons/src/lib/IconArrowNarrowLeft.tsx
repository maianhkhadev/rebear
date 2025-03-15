import React, { SVGProps } from 'react';

          const IconArrowNarrowLeft = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4M4 12L10 18M4 12L10 6"/></svg>
          );

          export default IconArrowNarrowLeft;