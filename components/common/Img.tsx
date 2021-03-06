// rome-ignore lint/importDefaultBasename
import React, { useState } from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPlay } from "@fortawesome/free-solid-svg-icons";

import ReactPlayer from "react-player";


export interface Props {
  className?: string;
  img: string;
  video?: string;
  play: any;
  setPlay: any;
}

function Img({className, img, video, play, setPlay}: Props) {
  return <div className={className} onClick={() => setPlay(true)}>
      {
        video !== undefined ?
          play === false ? <FontAwesomeIcon icon={faPlay} /> : null : null
      }
      {
        video === undefined ? <FontAwesomeIcon icon={faLink} /> : null
      }
      {
        video && play ?
        <ReactPlayer url={video} playing width="100%" height="100%" config={{
          youtube: {
            playerVars: { version: 3, modestbranding: 1, controls: 1, rel: 0, showinfo: 0 },
          }
        }} /> : <>
          <img src={img} alt=""/>
        </>
      }
  </div> 
  
}

export default styled(Img)`
  /* width: 300px; */
  /* height: 169px; */
  width: 100%;
  position: relative;
  z-index: 1000;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  background: black;
  border: 1px solid #0f161d;
  padding-top: 56.25%;
  

  &:hover {
    svg {
      opacity: 0.99;
    }
    img {
      opacity: 0.66;
      filter: blur(1px);
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
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    transition: 0.4s ease 0s;
    width: 100%;
    height: 100%;
  }
  
  >div {
    position: absolute;
    top: 0;
  }
`;
