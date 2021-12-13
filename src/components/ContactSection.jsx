import React from 'react';
import styled from 'styled-components';

import { MdPhone, MdEmail } from 'react-icons/md';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import ContactForm from './ContactForm';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle heading="<Contact &nbsp;/>" subheading="Get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdPhone />} text="+91 8436094459" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="sushantomahato1@gmail.com"
            />
            <ContactInfoItem text="West Bengal, India" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
