import React, { SVGProps } from 'react';

          const IconCurrencyEthereum = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11.0001L12 13L20 11M4 11.0001L12 2M4 11.0001L12 9.00008M20 11L12 2M20 11L12 9.00008M12 2V9.00008M5.5 15L12.0001 22L18.5 15L12 16.5L5.5 15Z"/></svg>
          );

          export default IconCurrencyEthereum;