import React from 'react';
import styled from 'styled-components';

import { MdPlace } from 'react-icons/md';
import Ptext from './Ptext';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;

  border-radius: 8px;
  margin-bottom: 2rem;

  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 0.8rem;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
  }
  svg {
    width: 2.2rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'this is an info',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <Ptext light>{text}</Ptext>
      </div>
    </ItemStyles>
  );
}
