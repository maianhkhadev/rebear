import React, { SVGProps } from 'react';

          const IconCodeSnippet02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21"/></svg>
          );

          export default IconCodeSnippet02;