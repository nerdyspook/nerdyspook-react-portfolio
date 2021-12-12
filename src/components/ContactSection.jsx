import React from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle heading="<Contact &nbsp;/>" subheading="Get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">Left</div>
          <div className="right">Contact Form</div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
