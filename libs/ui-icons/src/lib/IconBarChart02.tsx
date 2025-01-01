import React, { SVGProps } from 'react';

          const IconBarChart02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 20V4M6 20V16M12 20V10"/></svg>
          );

          export default IconBarChart02;