import React, { SVGProps } from 'react';

          const IconChevronDownDouble = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13L12 18L17 13M7 6L12 11L17 6"/></svg>
          );

          export default IconChevronDownDouble;