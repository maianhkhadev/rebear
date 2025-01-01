import React, { SVGProps } from 'react';

          const IconPilcrow01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4V20M16 4H18M16 4H10.5C8.01472 4 6 6.01472 6 8.5C6 10.9853 8.01472 13 10.5 13H16V4ZM14 20H18"/></svg>
          );

          export default IconPilcrow01;