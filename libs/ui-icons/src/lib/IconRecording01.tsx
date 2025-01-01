import React, { SVGProps } from 'react';

          const IconRecording01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14"/></svg>
          );

          export default IconRecording01;