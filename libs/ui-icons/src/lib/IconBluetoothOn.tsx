import React, { SVGProps } from 'react';

          const IconBluetoothOn = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 7L18 17L12 22V2L18 7L6 17"/></svg>
          );

          export default IconBluetoothOn;