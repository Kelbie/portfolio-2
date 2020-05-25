// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';
import P from './common/P';
import Tag from './common/Tag';
import Title from './common/Title';
import Img from './common/Img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBriefcase, faRss, faCode, faInfo, faInfoCircle, faLink } from "@fortawesome/free-solid-svg-icons";
import { faOsi, faDev, faGithub } from '@fortawesome/free-brands-svg-icons';


export interface Props {
  className?: string;
  name: string;
  icon: any;
}

function Skill({className, name, icon}: Props) {
  return <div className={className}>
      <FontAwesomeIcon icon={icon} />
      {name}
    </div>;
}

export default styled(Skill)`
  padding: 16px;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #0f161d;
  background: #15202b;
  z-index: 10000;
  position: relative;
  margin-right: 8px;
  margin-bottom: 8px;

  > *:first-child {
    margin-right: 8px;
  }

`;
