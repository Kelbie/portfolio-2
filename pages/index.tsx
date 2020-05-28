// rome-ignore lint/importDefaultBasename
import React from 'react';

import Project from '../components/Project';
import Skill from '../components/Skill';
import Border from '../components/Border';
import Section from '../components/Section';
import P from '../components/common/P';

import {default as styled} from 'styled-components';
import Gradient from '../components/Gradient';
import Post from '../components/Post';
import Title from '../components/common/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBriefcase, faRss, faCode, faInfo, faInfoCircle, faTools } from "@fortawesome/free-solid-svg-icons";
import { faOsi, faDev, faReact, faNodeJs, faHtml5, faCss3, faPython, faAdobe, faGit, faDocker, faJs } from '@fortawesome/free-brands-svg-icons';

export interface Props {
  className?: string;
}

interface Project {
  title: string;
  img?: string;
  description: string;
  tags: string[];
  links?: { github?: string, website?: string, vscode?: string };
}

const projects: Project[] = [
  {
    title: "StudentLog",
    img: "/StudentLog.png",
    description: `StudentLog is a website which allows students to find internship or new grad gobs relevant to their careers as well as using the built-in dynamic CV builder. The website has other functionality such as a timetable viewer and student an accommodation board.`,
    tags: ["react", "graphql", "node", "redux"],
    links: {
      github: "https://github.com/KevinKelbie/student-log",
      website: "https://studentlog.io/",
    }
  },
  {
    title: "Statechain Server & Explorer",
    description: `An off-chain scaling solution for Blockchain-based cryptocurrencies.`,
    img: "/Statechain.png",
    tags: [],
    links: {
      github: "",
      website: "https://statechain.info/"
    }
  },
  {
    title: "VSCode Bitcoin Extension",
    description: `A VSCode Extension with rich support for Bitcoin Script including features such as IntelliSense, linting, debugging, code formatting, and code executing on the Bitcoin network.`,
    tags: [],
    links: {
      github: "https://github.com/KevinKelbie/vscode-bitcoin",
    }
  },
  {
    title: "Bitcoin GraphQL Proxy",
    img: "/BitcoinGraphQL.png",
    description: `An API that extends the functionality of the Bitcoin Core API which is the defacto api for Bitcoin. It allows for more fine-grain control over the result of the output which makes for more efficient queries.`,
    tags: ["bitcoin", "graphql", "node", "postgresql"],
    links: {
      github: "https://github.com/KevinKelbie/bitcoin-graphql",
    }
  },
  {
    title: "Korean Typing Game",
    description: `A Korean Typing Game designed to help people learn how to type in Korean by breaking down the syllabic blocks into individual syllables to make them easier to identify.`,
    tags: [],
    links: {}
  },
  {
    title: "Github Enhancement Suite",
    description: `The GitHub Enhancement Suite is a set of miscellaneous tools to enhance a developers GitHub experience.`,
    tags: [],
    links: {}
  },
  {
    title: "University Key Manager",
    description: `A Key Manager which was built to replace a cumbersome excel document which was previously being used.`,
    tags: ["react", "firebase", "material ui", "scss"]
  },
  {
    title: "Cryptocurrency Wallet & Exchange",
    description: `This application allows users to send, receive and sell their cryptocurrencies for other cryptocurrencies.`,
    tags: ["node", "express", "jquery"]
  }
]

function Index({className}: Props) {
  return <div className={className}>
      <div className="sections">
        <Section>
          <div className="inline">
            <FontAwesomeIcon icon={faInfoCircle} />
            <h3>ABOUT</h3>
          </div>
          <div>
            <P>Hi, my name is Kevin Kelbie and I'm a 4th year student at Robert Gordon University studying Computing (Application Software Development).</P>
            <P>In my free time, I like to work on programming projects some of which you can see below.</P>
            <div className="inline" style={{display: "inline"}}>
              <P style={{marginRight: "12px", display: "inline"}}>If you need to contact me you can send me an email at:</P><a href="">kevin@kelbie.dev</a>
            </div>
          </div>
        </Section>
        <Section>
          <div className="inline">
            <FontAwesomeIcon icon={faTools} />
            <h3>SKILLS</h3>
          </div>
          <div>
            <Skill name={"React"} icon={faReact} />
            <Skill name={"Node"} icon={faNodeJs} />
            <Skill name={"HTML5"} icon={faHtml5} />
            <Skill name={"CSS3"} icon={faCss3} />
            <Skill name={"Python"} icon={faPython} />
            <Skill name={"Adobe XD"} icon={faAdobe} />
            <Skill name={"Git"} icon={faGit} />
            <Skill name={"Docker"} icon={faDocker} />
            <Skill name={"TypeScript"} svg={
              <svg viewBox="0 0 64 64" width="16" height="16"><path fill={"#9db2c9"} d="M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z"/></svg>
            } />
            <Skill name={"JavaScript"} icon={faJs} />
          </div>
        </Section>
        <div className="h">
          <Section>
            <div className="inline">
              <FontAwesomeIcon icon={faBriefcase} />
              <h3>WORK</h3>
            </div>
            <div className="grid">
              <div className="line"></div>
              {
                [
                  {
                    company: "Robert Gordon University",
                    title: "Software Developer",
                    year: "2020"
                  },
                  {
                    company: "Agile Resource",
                    title: "Software Developer",
                    year: "2019"
                  }
                ].map(({company, title, year}, index) => {
                  return <>
                    <div className="dot" style={{gridRow: index*4}}></div>
                    <Title>{company}</Title>
                    <P>{title}</P>
                    <P>{year}</P>
                  </>
                })
              }
            </div>
          </Section>
          <Section>
            <div className="inline">
              <FontAwesomeIcon icon={faBookOpen} />
              <h3>EDUCATION</h3>
            </div>
            <div className="grid">
            <div className="line"></div>
              {
                [
                  {
                    company: "Robert Gordon University",
                    title: "BSc (Hons) in Computing (Application Software Development), First Class",
                    year: "2020"
                  },
                  {
                    company: "North East Scotland College",
                    title: "HND in Computing",
                    year: "2018"
                  }
                ].map(({company, title, year}, index) => {
                  return <>
                    <div className="dot" style={{gridRow: index*4}}></div>
                    <Title>{company}</Title>
                    <P>{title}</P>
                    <P>{year}</P>
                  </>
                })
              }
            </div>
          </Section>
        </div>
          <Section>
            <div className="inline">
              <FontAwesomeIcon icon={faCode} />
              <h3>PROJECTS</h3>
              <P>({projects.length})</P>
            </div>
            <div className="horizontal">
              {
                projects.map(project => {
                  return <Project 
                  title={project.title}
                  video={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
                  img={project.img}
                  description={project.description}
                  tags={project.tags}
                  links={project.links} />
                })  
              }
              </div>
          </Section>
          <Section>
            <div className="inline">
              <FontAwesomeIcon icon={faOsi} />
              <h3>OPEN SOURCE</h3>
            </div>
            <div className="horizontal">
              <Project title="Rome"
              img="/Rome.png"
              description={`I am a core contributor on the Rome team.`}
              tags={['typescript']} />
            </div>
          </Section>
          <Section>
            <div className="inline">
              <FontAwesomeIcon icon={faRss} />
              <h3>BLOG</h3>
            </div>
            <div className="vertical">
              <Post url={"student-authentication-using-azure-nodejs"} title={'Student Authentication using Azure & Node.js'}
              summary={<>
                <P>
                  Suppose you want to offer students a discount on your website how would you do that? You could authenticate their email address but that takes them off the website because they must leave the page to go look at their email. What if you could log them in with a student portal they are familiar with.
                </P>
                <P>
                  That's where Azure Active Directory comes to the rescue!
                </P>
              </>}
              tags={['Azure', 'NodeJS']} />
            </div>
          </Section>
        </div>
      </div>;
}

export default styled(Index)`
  margin-top: 24px;
  
  .kevin-kelbie {
    z-index: 10;
  }

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-column-gap: 1ch;

    > * {
      grid-column: 2;
      margin: 0;
    }

    > .line {
      position: absolute;
      grid-column: 1;
      grid-row: 1 / span 6;
      width: 4px;
      
      background: #9db2c9;
      height: 100%;
      opacity: 0.2;
      margin-left: 2px;
      border-radius: 100px;
      
    }

    > .dot {
      grid-column: 1;
      width: 8px;
      height: 8px;
      background: #9db2c9;
      border-radius: 100%;
      align-self: center;
    }
  }

  .project-block {
    padding-right: max(32px, calc(50vw - 800px / 2));
    height: 1px;
  }

  .inline {
    display: flex;
    align-items: baseline;
    > * {
      margin-right: 6px;
    }
  }

  .inline > svg {
    width: 16px;
    height: 16px;
  }

  ${Section} > h3, .inline > h3 {
    position:relative;
    z-index: 1001;
  }

  div.button {
    display: inline-block;
    padding: 8px;
    border-radius: 8px;
    background: white;
    color: black;

    > div {
      color: #15202b;
      font-weight: 500;
    }
  }

  .container {
    max-width: 800px;
    margin: auto;
  }

  .sections {
    display: flex;
    flex-direction: column;
    > * {
      margin-bottom: 64px;
    } 
  }

  @media only screen and (max-width: 600px) {
    .h {
      flex-direction: column;
      > :first-child {
        margin-bottom: 64px;
        margin-right: 0px;
      }
    }
  }

  .h {
    display: flex;

    > :first-child {
      margin-right: 32px;
    }
    
    > * {
      flex-basis: 100%;
    }
  }

  .horizontal {
    position: relative;
    width: 100vw;
    overflow: scroll;
    overflow-y: hidden;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    white-space: nowrap;
    
    > div {
      display: inline-block;
      margin-right: 32px;
      white-space: wrap;
    }

    > div:last-child {
      margin-right: 0px;
    }
    
    > div:first-child {
      margin-left: max(32px, calc(50vw - 800px / 2));
    }

  }

  .vertical {
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: 32px;
    }
  }
`;
