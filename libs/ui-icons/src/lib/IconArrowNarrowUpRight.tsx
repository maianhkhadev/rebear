import React, { SVGProps } from 'react';

          const IconArrowNarrowUpRight = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M18 6H10M18 6V14"/></svg>
          );

          export default IconArrowNarrowUpRight;