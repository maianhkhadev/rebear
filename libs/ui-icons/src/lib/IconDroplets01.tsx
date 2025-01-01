import React, { SVGProps } from 'react';

          const IconDroplets01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 16C22 19.3137 19.3137 22 16 22 12.6863 22 10 19.3137 10 16 10 11.6863 16 2 16 2 16 2 22 11.6863 22 16ZM8 9C8 10.6569 6.65685 12 5 12 3.34315 12 2 10.6569 2 9 2 6.84315 5 2 5 2 5 2 8 6.84315 8 9Z"/></svg>
          );

          export default IconDroplets01;