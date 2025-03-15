import React, { SVGProps } from 'react';

          const IconUpload02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 3H3M18 13L12 7M12 7L6 13M12 7V21"/></svg>
          );

          export default IconUpload02;