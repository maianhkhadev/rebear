import React, { SVGProps } from 'react';

          const IconArrowUpLeft = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17L7 7M7 7V17M7 7H17"/></svg>
          );

          export default IconArrowUpLeft;