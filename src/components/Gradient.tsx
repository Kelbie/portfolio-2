// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

export interface Props {
  className?: string;
  side: 'left' | 'right';
}

function Gradient({className, side}: Props) {
  return <svg className={`${className} ${side}`} height="100%">
  <defs>
      <linearGradient id="linear-gradient" x2="1">
          <stop offset="0%" stopColor="hsl(210, 34%, 13%)" />
          <stop offset="100%" stopColor="hsla(210, 34%, 13%, 0)" />
      </linearGradient>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#linear-gradient)" />
  </svg>;
}

export default styled(Gradient)`
    z-index: 999;
    position: absolute;
    width: max(32px, calc(50vw - 1200px / 2));
    &.left {
        left: 4px;
    }
    &.right {
        transform: rotate(180deg);
        right: 4px;
    }
    top: 0;
`;
