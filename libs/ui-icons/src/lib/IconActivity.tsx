import React, { SVGProps } from 'react';

          const IconActivity = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12H18L15 21L9 3L6 12H2"/></svg>
          );

          export default IconActivity;