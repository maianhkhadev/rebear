import React, { SVGProps } from 'react';

          const IconCurrencyRupee = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3H18M6 8H18M14.5 21L6 13H9C15.667 13 15.667 3 9 3"/></svg>
          );

          export default IconCurrencyRupee;