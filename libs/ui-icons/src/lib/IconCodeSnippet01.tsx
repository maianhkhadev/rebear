import React, { SVGProps } from 'react';

          const IconCodeSnippet01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18L22 12L16 6M8 6L2 12L8 18"/></svg>
          );

          export default IconCodeSnippet01;