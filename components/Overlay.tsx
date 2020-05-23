// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

export interface Props {
	className?: string;
	index: number;
	blendMode: string;
	opacity: number;
}

function Overlay({className}: Props) {
  return <div className={className}></div>;
}

export default styled(Overlay)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	z-index: ${props => props.index};


	opacity: ${props => props.opacity};
	mix-blend-mode: ${props => props.blendMode};
	pointer-events: none;

	background: linear-gradient(179deg, #34D0F5, #347EF5, #4D5CCE);
`;
