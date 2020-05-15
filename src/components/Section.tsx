// rome-ignore lint/importDefaultBasename
import React, {ReactChildren} from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

export interface Props {
  className?: string;
  // rome-ignore lint/noExplicitAny
  children: Array<any>;
}

function Section({className, children}: Props) {
  return <section className={className}>
    {children}
  </section>;
}

export default styled(Section)`
    
`;
