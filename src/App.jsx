// rome-ignore lint/importDefaultBasename
import React from 'react';
import './styles.css';

import Project from './components/Project.jsx';

function Section({className, label, children, ...props}) {
  return <section className={className}>
    <h1>{label}</h1>
    {children}
  </section>;
}

export default function App() {
  return <div className="App">
      <h1>Kevin Kelbie</h1>
      <Section label={'projects'}>
        <Project title="title"
      description="description"
      tags={['tag', 'tag2', 'tag3']} />
      </Section>
    </div>;
}
