import React, { SVGProps } from 'react';

          const IconAsterisk02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4V20M18 6L6 18M20 12H4M18 18L6 6"/></svg>
          );

          export default IconAsterisk02;