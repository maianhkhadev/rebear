import React, { SVGProps } from 'react';

          const IconArrowRight = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
          );

          export default IconArrowRight;