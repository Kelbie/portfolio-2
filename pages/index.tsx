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
import { faBookOpen, faBriefcase, faRss, faCode, faInfo, faInfoCircle, faTools, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faOsi, faDev, faReact, faNodeJs, faHtml5, faCss3, faPython, faAdobe, faGit, faDocker, faJs } from '@fortawesome/free-brands-svg-icons';

export interface Props {
  className?: string;
}

interface Project {
  title: string;
  img?: string;
  video?: string;
  description: string;
  tags: string[];
  links?: { github?: string, website?: string, vscode?: string };
}

const projects: Project[] = [
  {
    title: "StudentLog",
    img: "/StudentLog.png",
    video: "https://youtu.be/j8Ma9xcLlm0",
    description: `StudentLog is a website which allows students to find internship or new grad gobs relevant to their careers as well as using the built-in dynamic CV builder. The website has other functionality such as a timetable viewer and student an accommodation board.`,
    tags: ["react", "graphql", "node", "redux", "postgresql"],
    links: {
      github: "https://github.com/KevinKelbie/student-log",
      website: "https://studentlog.io/",
    }
  },
  {
    title: "Statechain Server & Explorer",
    description: `An off-chain scaling solution for Blockchain-based cryptocurrencies.`,
    img: "/Statechain.png",
    video: "https://www.youtube.com/watch?v=3tdQJ4k8goE",
    tags: ["react", "node", "express", "postgresql", "graphql"],
    links: {
      github: "",
      website: "https://statechain.info/"
    }
  },
  {
    title: "VSCode Bitcoin Extension",
    description: `A VSCode Extension with rich support for Bitcoin Script including features such as IntelliSense, linting, debugging, code formatting, and code executing on the Bitcoin network.`,
    video: "https://youtu.be/A1wjnfsDRJs",
    img: "/VSCodeBitcoin.png",
    tags: ["typescript", "miniscript"],
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
    tags: ["react"],
    links: {}
  },
  {
    title: "Github Enhancement Suite",
    description: `The GitHub Enhancement Suite is a set of miscellaneous tools to enhance a developers GitHub experience.`,
    tags: ["react"],
    links: {}
  },
  {
    title: "University Key Manager",
    img: "/RGUKeyManager.png",
    description: `A Key Manager which was built to replace a cumbersome excel document which was previously being used.`,
    tags: ["react", "firebase", "material ui", "scss"]
  },
  {
    title: "Cryptocurrency Wallet & Exchange",
    img: "/Index.png",
    links: { github: "https://github.com/KevinKelbie/index" },
    description: `This application allows users to send, receive and sell their cryptocurrencies for other cryptocurrencies.`,
    tags: ["node", "express", "jquery", "ejs"]
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
            <Skill name={"JavaScript"} icon={faJs} />
            <Skill name={"TypeScript"} svg={
              <svg viewBox="0 0 64 64" width="16" height="16"><path fill={"#9db2c9"} d="M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z"/></svg>
            } />
            <Skill name={"Node"} icon={faNodeJs} />
            <Skill name={"HTML5"} icon={faHtml5} />
            <Skill name={"CSS3"} icon={faCss3} />
            <Skill name={"PostgreSQL"} svg={
              <svg width="432.071pt" height="445.383pt" viewBox="0 0 432.071 445.383" xmlns="http://www.w3.org/2000/svg">
                <g id="orginal" style={{"fillRule":"nonzero","clipRule":"nonzero","stroke":"#000000","strokeMiterlimit": "4"}}></g>
                <g id="Layer_x0020_3" style={{"fillRule":"nonzero","clipRule":"nonzero","fill":"none","stroke":"#15202B","strokeWidth":"12.4651","strokeLinecap":"round","strokeLinejoin":"round","strokeMiterlimit":"4"}}>
                <path style={{"fill":"#15202B","stroke":"#15202B","strokeWidth":"37.3953","strokeLinecap":"butt","strokeLinejoin":"miter"}} d="M323.205,324.227c2.833-23.601,1.984-27.062,19.563-23.239l4.463,0.392c13.517,0.615,31.199-2.174,41.587-7c22.362-10.376,35.622-27.7,13.572-23.148c-50.297,10.376-53.755-6.655-53.755-6.655c53.111-78.803,75.313-178.836,56.149-203.322    C352.514-5.534,262.036,26.049,260.522,26.869l-0.482,0.089c-9.938-2.062-21.06-3.294-33.554-3.496c-22.761-0.374-40.032,5.967-53.133,15.904c0,0-161.408-66.498-153.899,83.628c1.597,31.936,45.777,241.655,98.47,178.31    c19.259-23.163,37.871-42.748,37.871-42.748c9.242,6.14,20.307,9.272,31.912,8.147l0.897-0.765c-0.281,2.876-0.157,5.689,0.359,9.019c-13.572,15.167-9.584,17.83-36.723,23.416c-27.457,5.659-11.326,15.734-0.797,18.367c12.768,3.193,42.305,7.716,62.268-20.224    l-0.795,3.188c5.325,4.26,4.965,30.619,5.72,49.452c0.756,18.834,2.017,36.409,5.856,46.771c3.839,10.36,8.369,37.05,44.036,29.406c29.809-6.388,52.6-15.582,54.677-101.107"/>
                <path style={{"fill":"#9db2c9","stroke":"none"}} d="M402.395,271.23c-50.302,10.376-53.76-6.655-53.76-6.655c53.111-78.808,75.313-178.843,56.153-203.326c-52.27-66.785-142.752-35.2-144.262-34.38l-0.486,0.087c-9.938-2.063-21.06-3.292-33.56-3.496c-22.761-0.373-40.026,5.967-53.127,15.902    c0,0-161.411-66.495-153.904,83.63c1.597,31.938,45.776,241.657,98.471,178.312c19.26-23.163,37.869-42.748,37.869-42.748c9.243,6.14,20.308,9.272,31.908,8.147l0.901-0.765c-0.28,2.876-0.152,5.689,0.361,9.019c-13.575,15.167-9.586,17.83-36.723,23.416    c-27.459,5.659-11.328,15.734-0.796,18.367c12.768,3.193,42.307,7.716,62.266-20.224l-0.796,3.188c5.319,4.26,9.054,27.711,8.428,48.969c-0.626,21.259-1.044,35.854,3.147,47.254c4.191,11.4,8.368,37.05,44.042,29.406c29.809-6.388,45.256-22.942,47.405-50.555    c1.525-19.631,4.976-16.729,5.194-34.28l2.768-8.309c3.192-26.611,0.507-35.196,18.872-31.203l4.463,0.392c13.517,0.615,31.208-2.174,41.591-7c22.358-10.376,35.618-27.7,13.573-23.148z"/>
                <path d="M215.866,286.484c-1.385,49.516,0.348,99.377,5.193,111.495c4.848,12.118,15.223,35.688,50.9,28.045c29.806-6.39,40.651-18.756,45.357-46.051c3.466-20.082,10.148-75.854,11.005-87.281"/>
                <path d="M173.104,38.256c0,0-161.521-66.016-154.012,84.109c1.597,31.938,45.779,241.664,98.473,178.316c19.256-23.166,36.671-41.335,36.671-41.335"/>
                <path d="M260.349,26.207c-5.591,1.753,89.848-34.889,144.087,34.417c19.159,24.484-3.043,124.519-56.153,203.329"/>
                <path style={{"strokeLinejoin":"bevel"}} d="M348.282,263.953c0,0,3.461,17.036,53.764,6.653c22.04-4.552,8.776,12.774-13.577,23.155c-18.345,8.514-59.474,10.696-60.146-1.069c-1.729-30.355,21.647-21.133,19.96-28.739c-1.525-6.85-11.979-13.573-18.894-30.338    c-6.037-14.633-82.796-126.849,21.287-110.183c3.813-0.789-27.146-99.002-124.553-100.599c-97.385-1.597-94.19,119.762-94.19,119.762"/>
                <path d="M188.604,274.334c-13.577,15.166-9.584,17.829-36.723,23.417c-27.459,5.66-11.326,15.733-0.797,18.365c12.768,3.195,42.307,7.718,62.266-20.229c6.078-8.509-0.036-22.086-8.385-25.547c-4.034-1.671-9.428-3.765-16.361,3.994z"/>
                <path d="M187.715,274.069c-1.368-8.917,2.93-19.528,7.536-31.942c6.922-18.626,22.893-37.255,10.117-96.339c-9.523-44.029-73.396-9.163-73.436-3.193c-0.039,5.968,2.889,30.26-1.067,58.548c-5.162,36.913,23.488,68.132,56.479,64.938"/>
                <path style={{"fill":"#FFFFFF","strokeWidth":"4.155","strokeLinecap":"butt","strokeLinejoin":"miter"}} d="M172.517,141.7c-0.288,2.039,3.733,7.48,8.976,8.207c5.234,0.73,9.714-3.522,9.998-5.559c0.284-2.039-3.732-4.285-8.977-5.015c-5.237-0.731-9.719,0.333-9.996,2.367z"/>
                <path style={{"fill":"#FFFFFF","strokeWidth":"2.0775","strokeLinecap":"butt","strokeLinejoin":"miter"}} d="M331.941,137.543c0.284,2.039-3.732,7.48-8.976,8.207c-5.238,0.73-9.718-3.522-10.005-5.559c-0.277-2.039,3.74-4.285,8.979-5.015c5.239-0.73,9.718,0.333,10.002,2.368z"/>
                <path d="M350.676,123.432c0.863,15.994-3.445,26.888-3.988,43.914c-0.804,24.748,11.799,53.074-7.191,81.435"/>
                <path style={{"strokeWidth":"3"}} d="M0,60.232"/>
                </g>
              </svg>
            } />
            <Skill name={"Python"} icon={faPython} />
            <Skill name={"Adobe XD"} icon={faAdobe} />
            <Skill name={"Git"} icon={faGit} />
            <Skill name={"Docker"} icon={faDocker} />
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
                    <P className="year">{year}</P>
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
                    <P className="year">{year}</P>
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
                  video={project.video}
                  img={project.img}
                  description={project.description}
                  tags={project.tags}
                  links={project.links} />
                })  
              }
              </div>
          </Section>
          <div className="h">


          <Section>
            <div className="inline">
              <FontAwesomeIcon icon={faOsi} />
              <h3>OPEN SOURCE</h3>
            </div>
              <Project title="Rome"
              img="/Rome.png"
              description={`I am a core contributor on the Rome team.`}
              links={{github: "https://github.com/romejs/rome", website: "https://romejs.dev"}}
              tags={['typescript']} />
          </Section>
          <Section>
            <div className="inline">
              <FontAwesomeIcon icon={faCoffee} />
              <h3>HACKATHONS</h3>
            </div>
              <Project title="RGUNetZero"
              video={"https://youtu.be/3jv-3uo-xhk"}
              img={"/RGUNetZero.png"}
              links={{github: "https://github.com/KevinKelbie/rgu-hack-climate-website"}}
              description={`RGUNetZero was a website created in an RGU hackathon where the goal was to create a website that helped display the issues climate change has on our world.`}
              tags={['react']} />
          </Section>
          </div>
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

    
    p:nth-of-type(2) {
      margin-bottom: 32px;
    }

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

  @media only screen and (max-width: 690px) {
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
    /* 
    overflow-y: hidden;
    */
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
