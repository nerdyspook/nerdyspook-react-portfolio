import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .section-title {
    text-align: left;
  }

  .para {
    margin-top: 2rem;
    margin-left: 0;
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }

    .aboutSection__right {
      flex: 3;
    }
  }

  @media screen and (max-width: 767px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }

    .aboutSection__right {
      margin-top: 3rem;
    }

    .section-title {
      text-align: center;
    }

    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }

    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;

      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="<About me&nbsp; />"
          />
          <Ptext light>
            I am a Fullstack web developer/designer from West Bengal, India. I
            try to create responsive and aesthetically pleasing websites or web
            apps. I am currently learning UI UX and web3.0 for better
            understanding of the domain.
          </Ptext>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="about" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
