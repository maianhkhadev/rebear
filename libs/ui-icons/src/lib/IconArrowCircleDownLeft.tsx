import React, { SVGProps } from 'react';

          const IconArrowCircleDownLeft = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.00019 9.00005V15.0001M9.00019 15.0001H15.0002M9.00019 15.0001L15.0002 8.99994M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/></svg>
          );

          export default IconArrowCircleDownLeft;