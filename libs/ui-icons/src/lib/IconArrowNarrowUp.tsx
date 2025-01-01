import React, { SVGProps } from 'react';

          const IconArrowNarrowUp = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20V4M12 4L6 10M12 4L18 10"/></svg>
          );

          export default IconArrowNarrowUp;