import React from 'react';
import styled from 'styled-components';

const Pstyle = styled.div`
  max-width: 700px;
  margin: 0 auto;
  font-size: ${(props) => props.size}rem;
  line-height: 1.3em;

  p {
    color: ${(props) => (props.light ? 'var(--gray-1)' : 'var(--black)')};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0 0.5rem;
  }
`;

export default function Ptext({ children, light = false, size = 1.8 }) {
  return (
    <Pstyle light={light} size={size} className="para">
      <p>{children}</p>
    </Pstyle>
  );
}
