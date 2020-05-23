// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';
import Gradient from './Gradient';

export interface Props {
  className?: string;
}

function Header({className}: Props) {
  return <Gradient className={className} side={"top"}>
    <h1>Kevin Kelbie</h1>
  </Gradient>
}

export default styled(Header)`
  position: sticky;
  z-index: 1002;

  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;

  h1 {
    padding-left: max(32px, calc(50vw - 800px / 2));
    position: relative;
    z-index: 100;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;
