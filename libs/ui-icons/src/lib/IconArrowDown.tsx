import React, { SVGProps } from 'react';

          const IconArrowDown = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V19M12 19L19 12M12 19L5 12"/></svg>
          );

          export default IconArrowDown;