import React from 'react';
import styled from 'styled-components';

import Ptext from './Ptext';
import FooterColumn from './FooterColumn';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);

  .container {
    display: flex;
    gap: 3rem;
  }

  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--deep-dark);
    padding: 3rem 0;
    margin-top: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;

      & > div {
        margin-top: 5rem;
      }
    }

    .footer__col1 .para {
      max-width: 100%;
    }

    .copyright {
      margin: 0;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Susanto Mahato</h1>
          <Ptext light>
            A freelance web designer and developer from West Bengal, India. I
            always make websites that have unique designs and also has a good
            performance rate.
          </Ptext>
        </div>
        <div className="footer__col2">
          <FooterColumn
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumn
            heading="Contact Info"
            links={[
              {
                title: '+91 8436094459',
                path: 'tel:+918436094459',
              },
              {
                title: 'sushantomahato1@gmail.com',
                path: 'mailto:sushantomahato1@gmail.com',
              },
              {
                title: 'Purulia, West Bengal, India',
                path: 'https://www.google.com/maps/place/Purulia,+West+Bengal/@23.3307423,86.3273686,13z/data=!3m1!4b1!4m5!3m4!1s0x39f67d8536b0f1fd:0xdc1033bd1a93d07b!8m2!3d23.3322026!4d86.3616405',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumn
            heading="Social Links"
            links={[
              {
                title: 'Linkedin',
                path: '',
              },
              {
                title: 'Twitter',
                path: '',
              },
              {
                title: 'Github',
                path: '',
              },
            ]}
          />
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <Ptext light>Created with love by NerdySpook ♥️</Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}
