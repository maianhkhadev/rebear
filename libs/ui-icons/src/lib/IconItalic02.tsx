import React, { SVGProps } from 'react';

          const IconItalic02 = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.25 4L7.25 20M16.75 4L10.75 20M19.5 4L9.5 4M14.5 20H4.5"/></svg>
          );

          export default IconItalic02;