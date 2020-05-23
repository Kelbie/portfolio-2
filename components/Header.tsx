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
  return <Gradient className={className} side={"top"}>
    <h1>Kevin Kelbie</h1>
    <div className="links">
      <a href={"https://www.linkedin.com/in/kelbie/"}>
        <FontAwesomeIcon  icon={faLinkedin} />
      </a>
      <a href={"https://github.com/KevinKelbie/"}>
        <FontAwesomeIcon  icon={faGithub} />
      </a>
    </div>
  </Gradient>
}

export default styled(Header)`
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

  h1 {
    padding-left: max(32px, calc(50vw - 800px / 2));
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
    padding-right: max(32px, calc(50vw - 800px / 2));
  }

  a {
    margin-left: 16px;
    height: max-content;
    font-size: 24px;
  }
`;
