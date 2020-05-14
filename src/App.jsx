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

function Border() {
  return <div className="border">
    <svg>
    <defs>
      <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f6d371" />
        <stop offset="10%" stopColor="#f27a21" />
        <stop offset="50%" stopColor="#cf2872" />
        <stop offset="90%" stopColor=" #912eb9" />
        <stop offset="100%" stopColor="#4d58ce" />
      </linearGradient>
    </defs>
    <rect x="0"
      y="0"
      width="100%"
      height="100%"
      stroke="url(#linear)"
      strokeWidth="0.4em"
      fill="none" />
    </svg>
  </div>;
}

export default function App() {
  return <div className="App">
      <Border />
      <h1>Kevin Kelbie</h1>
      <Section label={'projects'}>
        <Project title="title"
      description="description"
      tags={['tag', 'tag2', 'tag3']} />
      </Section>
    </div>;
}
