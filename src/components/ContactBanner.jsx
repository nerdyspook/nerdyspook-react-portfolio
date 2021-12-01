import React from 'react';
import styled from 'styled-components';

import Ptext from './Ptext';
import Button from './Button';

const ContactBannerStyle = styled.div`
  padding: 10rem 0;

  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }

  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 1.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner__wrapper">
          <Ptext light>Would like to collaborate?</Ptext>
          <h3 className="contactBanner__heading">
            Let's get to know eachother
          </h3>
          <Button btnText="Contact Me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}
