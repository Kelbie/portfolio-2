// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

export interface Props {
  className?: string;
	side: 'left' | 'right' | 'top';
	children: any[];
}

function Gradient({className, side, children}: Props) {
  return <div className={`${className} ${side}`}>
		{children}
  </div>;
}

export default styled(Gradient)`
    z-index: 1002;
    position: absolute;
		pointer-events: none;
    top: 0;
    &.left {
				position: fixed;
				width: max(32px, calc(50vw - 800px / 2));
        left: 4px;
				background-image: linear-gradient(to right, hsl(210, 34%, 13%), hsla(210, 34%, 13%, 0));
				height: 100vh;
    }
    &.right {
				position: fixed;
				width: max(32px, calc(50vw - 800px / 2));
        transform: rotate(180deg);
				background-image: linear-gradient(to right, hsl(210, 34%, 13%), hsla(210, 34%, 13%, 0));
        right: 4px;
				height: 100vh;
    }
		&.top {
			/* width: 100%; */
			left: 0;
			height: 100px;
			top: 0px;
			background-image: linear-gradient(to bottom, hsl(210, 34%, 13%), hsla(210, 34%, 13%, 1), hsla(210, 34%, 13%,0.5));
		}
`;
