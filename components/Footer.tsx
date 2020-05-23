// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

export interface Props {
    className?: string;
}

function Footer({className}: Props) {
  return <footer className={className}>
      1
    </footer>;
}

export default styled(Footer)`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: white;
  height: 100vh;
  margin-bottom: -32px;
  z-index: 999;
`;
