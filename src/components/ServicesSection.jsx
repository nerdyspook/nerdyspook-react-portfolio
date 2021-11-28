import React from 'react';
import styled from 'styled-components';
import { IoIosDesktop } from 'react-icons/io';
import { IoCodeSharp } from 'react-icons/io5';
import { MdOutlinePhonelinkSetup } from 'react-icons/md';

import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyle = styled.div`
  padding: 10rem 0;

  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media screen and (max-width: 767px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyle>
      <div className="container">
        <SectionTitle heading="<Services &nbsp;/>" subheading="what i can do" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<IoIosDesktop />}
            title="Web Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<IoCodeSharp />}
            title="Web Dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdOutlinePhonelinkSetup />}
            title="App Dev"
            desc="I develop mobile application. I create mobile app with eye catching UI."
          />
        </div>
      </div>
    </ServicesItemStyle>
  );
}
