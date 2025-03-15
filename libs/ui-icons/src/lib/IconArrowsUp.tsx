import React, { SVGProps } from 'react';

          const IconArrowsUp = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20V4M7 4L3 8M7 4L11 8M17 20V9M17 9L13 13M17 9L21 13"/></svg>
          );

          export default IconArrowsUp;