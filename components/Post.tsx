// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';
import Title from './common/Title';
import P from './common/P';
import Tag from './common/Tag';

export interface Props {
  className?: string;
  title: string;
  summary: string;
  tags: Array<string>;
  url: string;
}

function Post({className, title, summary, tags = [], url}: Props) {
  return <div className={className}>
      <a href={"/blog/" + url}>{title}</a>
      <P>{summary}</P>
      <div className="tags">
        {tags.map((tag: string) => {
        return <Tag key={tag}>#{tag}</Tag>;
      })}
      </div>
    </div>;
}

export default styled(Post)`
  img {
    width: 192px;
    height: 108px;
    background: #1B2A38;
  }

  .tags {
    display: flex;
    gap: 1ch;
  }
`;
