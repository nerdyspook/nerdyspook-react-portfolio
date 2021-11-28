import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div``;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
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
