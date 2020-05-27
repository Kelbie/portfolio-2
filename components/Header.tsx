// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';
import Gradient from './Gradient';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBriefcase, faRss, faCode, faInfo, faInfoCircle, faLink } from "@fortawesome/free-solid-svg-icons";
import { faOsi, faDev, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export interface Props {
  className?: string;
}

function Header({className}: Props) {
  return <div className={className}>
    <div>
      <h1>Kevin Kelbie</h1>
      <div className="links">
        <a href={"https://www.linkedin.com/in/kelbie/"}>
          <FontAwesomeIcon  icon={faLinkedin} />
        </a>
        <a href={"https://github.com/KevinKelbie/"}>
          <FontAwesomeIcon  icon={faGithub} />
        </a>
      </div>
    </div>
  </div>
}

export default styled(Header)`
  top: 0px;
  background: rgba(21, 33, 44, 0.96);
  z-index: 1002;
  position: absolute;
  pointer-events: none;
  top: 0;
  border-bottom: 1px solid #0f161d;

  position: sticky;
  z-index: 1002;
  pointer-events: auto;

  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;

  display: flex;
  justify-content: space-between;

  left: 0;

  > div {
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 32px;
  }

  h1 {
    /* padding-left: max(32px, calc(50vw - 800px / 2)); */
    position: relative;
    z-index: 100;
    padding-top: 32px;
    padding-bottom: 32px;
    font-size: 24px;
  }

  .links {
    display: flex;
    height: max-content;
    align-self: center;
    /* padding-right: max(32px, calc(50vw - 800px / 2)); */
  }

  a {
    margin-left: 16px;
    height: max-content;
    
    svg {
      width: 24px !important;
      height: 24px;
    }
  }
`;
