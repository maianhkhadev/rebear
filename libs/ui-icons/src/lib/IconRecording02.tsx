import React, { SVGProps } from 'react';

          const IconRecording02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10L3 14M7.5 11V13M12 6V18M16.5 3V21M21 10V14"/></svg>
          );

          export default IconRecording02;