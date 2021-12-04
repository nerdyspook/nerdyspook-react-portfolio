import React from 'react';
import styled from 'styled-components';

import Ptext from './Ptext';

const AboutItemStyles = styled.div`
  display: flex;
  align-item: center;
  justify-content: flex-start;
  position: relative;

  margin-top: 3rem;

  .title {
    font-size: 2.4rem;
  }

  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 0.6rem 1.2rem;
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .items {
      position: initial;
      gap: 1rem;
    }
    .item {
      padding: 0.3rem 0.5rem;
    }

    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML5', 'CSS3'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <Ptext light>{item}</Ptext>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
