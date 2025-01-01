import React, { SVGProps } from 'react';

          const IconAlignTop01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3H3M12 21V7M12 7L5 14M12 7L19 14"/></svg>
          );

          export default IconAlignTop01;