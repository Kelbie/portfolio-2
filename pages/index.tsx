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
import { faOsi, faDev, faReact, faNodeJs, faHtml5, faCss3, faPython, faAdobe, faGit, faDocker } from '@fortawesome/free-brands-svg-icons';

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
    tags: ["react", "graphql", "node"],
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
    description: `A library that extends the functionality of the Bitcoin Core API which is the defacto api for Bitcoin. It allows for more fine-grain control over the result of the output which makes for more efficient queries.`,
    tags: ["bitcoin", "graphql", "node", "postgresql"],
    links: {
      github: "https://github.com/KevinKelbie/bitcoin-graphql",
    }
  },
  {
    title: "Korean Typing Game",
    description: ``,
    tags: [],
    links: {}
  },
  {
    title: "Github Enhancement Suite",
    description: ``,
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
            <br />
            <P>In my free time, I like to work on programming projects some of which you can see below.</P>
            <br />
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
                    title: "Fullstack Developer",
                    year: "2020"
                  },
                  {
                    company: "Agile Resource",
                    title: "Fullstack Developer",
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
            </div>
            <div className="horizontal">
              {
                projects.map(project => {
                  return <Project title={project.title}
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
              <Post title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              summary={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mihi enim erit isdem istis fortasse iam utendum. Sed haec quidem liberius ab eo dicuntur et saepius. Idemne potest esse dies saepius, qui semel fuit? An hoc usque quaque, aliter in vita? Ac tamen hic mallet non dolere.

                Duo Reges: constructio interrete. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Erat enim Polemonis. Quod eo liquidius faciet, si perspexerit rerum inter eas verborumne sit controversia. Nunc de hominis summo bono quaeritur; Intrandum est igitur in rerum naturam et penitus quid ea postulet pervidendum; Id quaeris, inquam, in quo, utrum respondero, verses te huc atque illuc necesse est. Omnium enim rerum principia parva sunt, sed suis progressionibus usa augentur nec sine causa; Post enim Chrysippum eum non sane est disputatum. Isto modo, ne si avia quidem eius nata non esset.
              `}
              tags={['tag']} />
              <Post title={'Honesta oratio, Socratica, Platonis etiam. Satis est ad hoc responsum.'}
              summary={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant. Quod quidem iam fit etiam in Academia. Hoc ille tuus non vult omnibusque ex rebus voluptatem quasi mercedem exigit. Recte, inquit, intellegis. Hic, qui utrumque probat, ambobus debuit uti, sicut facit re, neque tamen dividit verbis. Bona autem corporis huic sunt, quod posterius posui, similiora. At ille pellit, qui permulcet sensum voluptate. Duo Reges: constructio interrete. Nihil illinc huc pervenit. Quamquam id quidem licebit iis existimare, qui legerint.

                Apparet statim, quae sint officia, quae actiones. Aut, Pylades cum sis, dices te esse Orestem, ut moriare pro amico? Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Hoc est non dividere, sed frangere. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. Quae cum dixisset, finem ille. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem.
              `}
              tags={['tag']} />
              <Post title={'Hoc sic expositum dissimile est superiori.'}
              summary={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulsi recurrant? At habetur! Et ego id scilicet nesciebam! Sed ut sit, etiamne post mortem coletur? Teneo, inquit, finem illi videri nihil dolere.

                Et ille ridens: Video, inquit, quid agas; Quae cum magnifice primo dici viderentur, considerata minus probabantur. Ego vero volo in virtute vim esse quam maximam; Duo Reges: constructio interrete. Isto modo, ne si avia quidem eius nata non esset. Faceres tu quidem, Torquate, haec omnia; Quod ea non occurrentia fingunt, vincunt Aristonem;
              `}
              tags={['tag']} />
              <Post title={'Hos contra singulos dici est melius.'}
              summary={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Quod si ita sit, cur opera philosophiae sit danda nescio. Quae fere omnia appellantur uno ingenii nomine, easque virtutes qui habent, ingeniosi vocantur.

                At certe gravius. Duo Reges: constructio interrete. Qui potest igitur habitare in beata vita summi mali metus? Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius. Ubi ut eam caperet aut quando? Nam, ut saepe iam dixi, in infirma aetate inbecillaque mente vis naturae quasi per caliginem cernitur;
              `}
              tags={['tag']} />
            </div>
          </Section>
        </div>
      </div>;
}

export default styled(Index)`
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
    display: flex;
    width: 100vw;
    overflow: scroll;
    overflow-y: hidden;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    flex: 1;
    
    > div {
      margin-right: 32px;
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
