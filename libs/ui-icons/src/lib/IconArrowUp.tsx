import React, { SVGProps } from 'react';

          const IconArrowUp = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5M12 5L5 12M12 5L19 12"/></svg>
          );

          export default IconArrowUp;