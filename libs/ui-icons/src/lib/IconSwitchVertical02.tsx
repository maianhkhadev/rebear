import React, { SVGProps } from 'react';

          const IconSwitchVertical02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V20M7 20L3 16M7 20L11 16M17 20V4M17 4L13 8M17 4L21 8"/></svg>
          );

          export default IconSwitchVertical02;