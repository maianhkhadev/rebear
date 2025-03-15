import React, { SVGProps } from 'react';

          const IconChevronRightDouble = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 17L11 12L6 7M13 17L18 12L13 7"/></svg>
          );

          export default IconChevronRightDouble;