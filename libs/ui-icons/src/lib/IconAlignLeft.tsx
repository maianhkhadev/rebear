import React, { SVGProps } from 'react';

          const IconAlignLeft = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10H3M20 6H3M20 14H3M16 18H3"/></svg>
          );

          export default IconAlignLeft;