// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

export interface Props {
  className?: string;
  children: string;
}

function Title({className, children}: Props) {
  return <h3 className={className}>
      {children}
    </h3>;
}

export default styled(Title)`
  position: relative;
  z-index: 1000;
  font-weight: normal;
`;
