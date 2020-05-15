// rome-ignore lint/importDefaultBasename
import React from 'react';
import './styles.css';

import Project from './components/Project';
import Border from './components/Border';
import Section from './components/Section';

import {default as styled} from 'styled-components';
import Gradient from './components/Gradient';
import Post from './components/Post';
import Footer from './components/Footer';

export interface Props {
  className?: string;
}

function App({className}: Props) {
  return <div className={className}>
    <div className="container">
      <Gradient side="left" />
      <Border />
      <h1>Kevin Kelbie</h1>
      <div className="sections">
        <Section>
          <h1>PROJECTS</h1>
          <div className="horizontal">
            <Project title="StudentLog"
            description={`Student Portal for creating CVs/Resumes and finding student jobs.`}
            tags={['tag', 'tag2', 'tag3']} />
          <Project title="Statechain Server &amp; Explorer"
            description={`Student Portal for creating CVs/Resumes and finding student jobs.`}
            tags={['tag', 'tag2', 'tag3']} />
          <Project title="VSCode Bitcoin Extension"
            description={`Student Portal for creating CVs/Resumes and finding student jobs.`}
            tags={['tag', 'tag2', 'tag3']} />
          <Project title="University Key Manager"
            description={`Student Portal for creating CVs/Resumes and finding student jobs.`}
            tags={['tag', 'tag2', 'tag3']} />
          <Project title="Bitcoin GraphQL Proxy"
            description={`Student Portal for creating CVs/Resumes and finding student jobs.`}
            tags={['tag', 'tag2', 'tag3']} />
          <Project title="Korean Typing Game"
            description={`Student Portal for creating CVs/Resumes and finding student jobs.`}
            tags={['tag', 'tag2', 'tag3']} />
          <Project title="Github Enhancement Suite"
            description={`Student Portal for creating CVs/Resumes and finding student jobs.`}
            tags={['tag', 'tag2', 'tag3']} />
          </div>
          <div className="button">
            <div>VIEW ON GITHUB</div>
          </div>
        </Section>
        <Section>
          <h1>OPEN SOURCE</h1>
          <div className="horizontal">
            <Project title="RomeJS"
            description={`Student Portal for creating CVs/Resumes and finding student jobs.`}
            tags={['tag', 'tag2', 'tag3']} />
          </div>
        </Section>
        <Section>
          <h1>BLOG</h1>
          <Post title={'Student Authentication using Azure & Node.js'}
          summary={'Suppose you want to offer students a discount on your website how would you do that? You could authenticate their email address but that takes them off the website because they must leave the page to go look at their email. What if you could log them in with a student portal they are familiar with.'}
          tags={['tag']} />
        </Section>
      </div>
      <div className="button">
        <div>TOP</div>
      </div>
      <Gradient side="right" />
      <Footer />
    </div>
    </div>;
}

export default styled(App)`
  padding: 32px;
  position: relative;
  background: #15202b;
  min-height: 100vh;

  h1 {
    position: relative;
    z-index:  1000;
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
    max-width: 1200px;
    margin: auto;
  }

  .container::before {
    content: "";
    position: fixed;
    background: var(--gradient);
    opacity: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    pointer-events: none;
    z-index:1000;
    overflow: hidden;
    mix-blend-mode: darken;
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 64px;
    
  }

  &::after {
    content: "";
    position: fixed;
    background: var(--gradient);
    opacity: 0.1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    mix-blend-mode: screen;
    pointer-events: none;
    z-index:1000;
  }

  .horizontal {

    position: relative;
    display: flex;
    width: 100vw;
    gap: 32px;
    overflow: scroll;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    

    > div:first-child {
      padding-left: max(32px, calc(50vw - 1200px / 2));
    }

    > div:last-child {
      
      padding-right: 32px;
    }
  }
`;
