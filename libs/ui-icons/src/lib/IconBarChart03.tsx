import React, { SVGProps } from 'react';

          const IconBarChart03 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 20V4M18 20V16M12 20V10"/></svg>
          );

          export default IconBarChart03;