import React, { SVGProps } from 'react';

          const IconBarChart01 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 20V10M12 20V4M6 20V14"/></svg>
          );

          export default IconBarChart01;