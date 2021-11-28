import React from 'react';
import { IoIosDesktop } from 'react-icons/io';
import styled from 'styled-components';

import Ptext from './Ptext';

const ItemStyle = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }

  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }

  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <IoIosDesktop />,
  title = 'Title',
  desc = 'description',
}) {
  return (
    <ItemStyle>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <Ptext light>{desc}</Ptext>
    </ItemStyle>
  );
}
