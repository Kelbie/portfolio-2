// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';
import P from './common/P';
import Title from './common/Title';

export interface Props {
  className?: string;
  title: string;
  description: string;
  tags: Array<string>;
}

function Project({className, title, description, tags}: Props) {
  return <div className={className}>
      <img src="" alt="" />
      <Title>{title}</Title>
      <P>{description}</P>
      <div className="tags">
        {tags.map((tag) => {
        return <span key={tag}>#{tag}</span>;
      })}
      </div>
    </div>;
}

export default styled(Project)`
  width: min-content;

  img {
    position: relative;
    z-index: 1000;
    width: 300px;
    height: 169px;
    background: #1B2A38;
  }

  .tags {
    display: flex;
    gap: 1ch;
    span {
      color: rgba(255,255,255.8);
    }
  }
`;
