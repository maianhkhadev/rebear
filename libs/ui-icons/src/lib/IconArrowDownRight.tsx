import React, { SVGProps } from 'react';

          const IconArrowDownRight = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7L17 17M17 17V7M17 17H7"/></svg>
          );

          export default IconArrowDownRight;