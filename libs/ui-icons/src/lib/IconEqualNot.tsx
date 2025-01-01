import React, { SVGProps } from 'react';

          const IconEqualNot = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9H19M5 15H19M19 5L5 19"/></svg>
          );

          export default IconEqualNot;