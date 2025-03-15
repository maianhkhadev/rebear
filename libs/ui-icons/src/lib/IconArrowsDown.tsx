import React, { SVGProps } from 'react';

          const IconArrowsDown = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 4V15M17 15L13 11M17 15L21 11M7 4V20M7 20L3 16M7 20L11 16"/></svg>
          );

          export default IconArrowsDown;