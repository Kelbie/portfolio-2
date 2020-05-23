// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons";

export interface Props {
  className?: string;
  img: string;
}

function Img({className, img}: Props) {
  return <div className={className}>
    <FontAwesomeIcon icon={faLink} />
    <img src={img} alt=""/>
  </div> 
  
}

export default styled(Img)`
  width: 300px;
  height: 169px;
  position: relative;
  z-index: 1000;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  background: black;
  

  &:hover {
    svg {
      opacity: 0.75;
    }
  }
  
  svg {
    transition: 0.4s ease 0s;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    font-size: 64px;
    opacity: 0;
  }

  > img {
    transition: 0.4s ease 0s;
    width: 100%;
    height: 100%;
  }
`;
