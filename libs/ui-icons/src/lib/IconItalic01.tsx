import React, { SVGProps } from 'react';

          const IconItalic01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H10M14 20H5M15 4L9 20"/></svg>
          );

          export default IconItalic01;