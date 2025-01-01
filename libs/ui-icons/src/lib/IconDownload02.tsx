import React, { SVGProps } from 'react';

          const IconDownload02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3"/></svg>
          );

          export default IconDownload02;