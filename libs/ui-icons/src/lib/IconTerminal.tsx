import React, { SVGProps } from 'react';

          const IconTerminal = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17L10 11L4 5M12 19H20"/></svg>
          );

          export default IconTerminal;