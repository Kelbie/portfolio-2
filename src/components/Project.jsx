// rome-ignore lint/importDefaultBasename
import React from 'react';

// rome-ignore lint/importDefaultBasename
import styled from 'styled-components';

function Project({className, title, description, tags, ...props}) {
  return <div className={className}>
      <img src="" alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="tags">
        {tags.map((tag) => {
        return <span key={tag}>#{tag}</span>;
      })}
      </div>
    </div>;
}

export default styled(Project)`
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
