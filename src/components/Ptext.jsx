import React from 'react';
import styled from 'styled-components';

const Pstyle = styled.div`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;

  p {
    color: var(--black);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0 0.5rem;
  }
`;

export default function Ptext({ children }) {
  return (
    <Pstyle>
      <p>{children}</p>
    </Pstyle>
  );
}
