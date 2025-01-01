import React, { SVGProps } from 'react';

          const IconChevronSelectorVertical = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 15L12 20L17 15M7 9L12 4L17 9"/></svg>
          );

          export default IconChevronSelectorVertical;