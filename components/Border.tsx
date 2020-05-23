// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

export interface Props {
  className?: string;
  index: number;
}

function Border({className}: Props) {
  return <div className={className}>
      <svg>
        <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D0F5" />
          <stop offset="50%" stopColor="#347EF5" />
          <stop offset="100%" stopColor="#4D5CCE" />
        </linearGradient>
      </defs>
      <rect x="0"
      y="0"
      width="100%"
      height="100%"
      stroke="url(#linear)"
      strokeWidth="8px"
      rx="8"
      ry="8"
      fill="none" />
      </svg>
  </div>;
}

export default styled(Border)`
	content: "";
	position: fixed;
	left: 0px;
	top: 0;
	bottom: 0;
	height: 100%;
	pointer-events: none;
  z-index: ${props => props.index};
  width: 100vw;
  svg {
    width: 100%;
    height: 100%;
  }
`;
