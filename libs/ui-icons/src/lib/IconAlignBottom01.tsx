import React, { SVGProps } from 'react';

          const IconAlignBottom01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21H21M12 3V17M12 17L19 10M12 17L5 10"/></svg>
          );

          export default IconAlignBottom01;