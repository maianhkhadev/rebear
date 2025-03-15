import React, { SVGProps } from 'react';

          const IconPilcrow02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 4V20M19.5 4H9C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12H14M14 4V20M12 20H19.5"/></svg>
          );

          export default IconPilcrow02;