import React, { SVGProps } from 'react';

          const IconAlignJustify = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10H3M21 18H3M21 6H3M21 14H3"/></svg>
          );

          export default IconAlignJustify;