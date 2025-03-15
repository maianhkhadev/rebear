import React, { SVGProps } from 'react';

          const IconChevronUp = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 15L12 9L6 15"/></svg>
          );

          export default IconChevronUp;