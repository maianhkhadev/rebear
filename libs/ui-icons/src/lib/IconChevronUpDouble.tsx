import React, { SVGProps } from 'react';

          const IconChevronUpDouble = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 18L12 13L7 18M17 11L12 6L7 11"/></svg>
          );

          export default IconChevronUpDouble;