import React, { SVGProps } from 'react';

          const IconAlignRight = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10H8M21 6H4M21 14H4M21 18H8"/></svg>
          );

          export default IconAlignRight;