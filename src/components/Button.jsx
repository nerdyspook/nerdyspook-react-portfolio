import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;

  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 1rem 3rem;
    border-radius: 0.8rem;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'var(--black)')};
  }

  @media screen and (max-width: 768px) {
    .button {
      font-size: 1.5rem;
      padding: 0.5rem 2rem;
    }
  }
`;

export default function Button({
  btnLink = 'test',
  btnText = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
