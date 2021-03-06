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
  icon?: any;
  svg?: any;
}

function Skill({className, name, icon, svg}: Props) {
  return <div className={className}>
      <div style={{display: 'flex'}}>
        {icon && 
          <FontAwesomeIcon icon={icon} />
        }
        {
          svg && svg
        }
        {name}
      </div>
    </div>;
}

export default styled(Skill)`
  display: inline-block;
  div {
    padding: 16px;
    display: inline-block;
    border-radius: 8px;
    border: 1px solid #0f161d;
    background: #15202b;
    z-index: 999;
    position: relative;
    margin-right: 8px;
    margin-bottom: 8px;
    color: transparent;
  
    > *:first-child {
      margin-right: 8px;
      align-self: center;
    }
  }

  position: relative;

  &::after {
    content: "${props => props.name}";
    z-index: 1000;
    position: absolute;
    right: 25px;
    bottom: 25px;
  }

  svg {
    width: 16px;
    height: 16px;
  }

`;
