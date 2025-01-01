import React, { SVGProps } from 'react';

          const IconDotsVertical = ({
            size = 20,
            ...props
          }: SVGProps<SVGSVGElement> & {
            size?: number;
          }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13C12.5523 13 13 12.5523 13 12 13 11.4477 12.5523 11 12 11 11.4477 11 11 11.4477 11 12 11 12.5523 11.4477 13 12 13ZM12 6C12.5523 6 13 5.55228 13 5 13 4.44772 12.5523 4 12 4 11.4477 4 11 4.44772 11 5 11 5.55228 11.4477 6 12 6ZM12 20C12.5523 20 13 19.5523 13 19 13 18.4477 12.5523 18 12 18 11.4477 18 11 18.4477 11 19 11 19.5523 11.4477 20 12 20Z"/></svg>
          );

          export default IconDotsVertical;