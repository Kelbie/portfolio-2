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
  title: string;
  description: string;
  tags: Array<string>;
  img: string;
  video?: string;
  links: { vscode?: string, website?: string, github?: string };
}

function Project({className, title, description, tags, img, links, video}: Props) {
  return <div className={className}>
      <Img img={img} video={video} />
      <Title>{title}</Title>
      <P>{description}</P>
      <div className="tags">
        {tags.map((tag) => {
        return <Tag key={tag}>#{tag}</Tag>;
      })}
      </div>
      <div className="links">
        {
          links?.github &&
            <a href={links.github}>
              <FontAwesomeIcon  icon={faGithub} />
            </a>
        }
        {
          links?.website &&
            <a href={links.website}>
              <FontAwesomeIcon  icon={faLink} />
            </a>
        }
        {
          links?.vscode &&
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#29b6f6"/><stop offset="1" stopColor="#13b2f6"/></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"/><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stopColor="#0076bb"/><stop offset=".257" stopColor="#0069b0"/><stop offset=".28" stopColor="#0069b0"/><stop offset=".424" stopColor="#0069b0"/><stop offset=".491" stopColor="#0072b7"/><stop offset=".577" stopColor="#0076bb"/><stop offset=".795" stopColor="#0076bb"/><stop offset="1" stopColor="#006eb9"/></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"/><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"/></svg>
            </a>
        }
      </div>
    </div>;
}

export default styled(Project)`
  .links {
    display: flex;
  }

  a {
    margin-right: 8px;
  }

  a > svg {
    display: inline-block;
    height: 16px;
    width: 1em;
    vertical-align: -0.125em;
    * {
      fill: #9DB2C9;
    }
  }

  width: 300px;
  &:hover {
    /* transform: translateY(8px); */
    > :first-child {
      margin-top: 8px;
    }

    ${Img} img {
      opacity: 0.66;
      filter: blur(1px);
    }
    margin-bottom: -8px;
  }

  transition: 0.4s ease 0s;
  > :first-child {
    transition: 0.4s ease 0s;
  }

  padding-bottom: 24px;


  .tags {
    > * {
      display: inline-block;
      margin-right: 8px;
    }
  }
`;
