import React, { SVGProps } from 'react';

          const IconArrowNarrowDown = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V20M12 20L18 14M12 20L6 14"/></svg>
          );

          export default IconArrowNarrowDown;