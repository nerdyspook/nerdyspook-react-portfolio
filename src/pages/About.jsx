import React from 'react';
import styled from 'styled-components';

import Ptext from '../components/Ptext';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .left {
    flex: 3;
  }

  .right {
    flex: 2;
  }

  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;

    span {
      background-color: var(--deep-dark);
      padding: 0.5rem 1rem;
      border-radius: 0.8rem;
    }
  }

  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }

  .about__info {
    margin-bottom: 4rem;

    .para {
      max-width: 100%;
    }
  }

  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }

    .about__info__heading {
      font-size: 3rem;
    }

    .about__heading {
      font-size: 2.8rem;
    }
    .about__subheading {
      font-size: 2rem;
      span {
        padding: 0.15rem 0.8rem;
      }
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hello, I am <span>Susanto Mahato</span>
            </p>
            <h2 className="about__heading">A FullStack Web Developer</h2>

            <div className="about__info">
              <Ptext light>
                I am from West Bengal, India. A place is renowned for its
                culture and heritage. Since my childhood, I find myself
                passionate about art and design. I try to design stuff that is
                both aesthetically pleasing and easy to use.
                <br />
                <br />I did my Bachelor's in Computer Science from Acharya
                Institute of Technology, Bengaluru, India. I started coding
                during my college days and found my interest in building
                products that people can use in their daily lives.
                <br />
                <br />I desire to be a world-class Software Developer who
                renders solutions for various problems, with building
                applications, being a great people manager and a great mentor to
                upcoming developers in the technology industry. I also want to
                use storytelling as a medium to assist other people in tech to
                find their bearing on their journey to becoming.
              </Ptext>
            </div>
            <Button btnText="Download Resume" btnLink="#" />
          </div>

          <div className="right">
            <img src={AboutImg} alt="susanto pic" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['The Assembly of God Church School']}
            />
            <AboutInfoItem
              title="High School"
              items={['A.G.P.N Convent School']}
            />
            <AboutInfoItem
              title="University"
              items={['Visvesvaraya Technological University']}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">Skills</h1>
            <AboutInfoItem
              title="Front-End"
              items={['HTML5', 'CSS3', 'JavaScript', 'React']}
            />
            <AboutInfoItem
              title="Back-End"
              items={['Node', 'Express', 'Django']}
            />
            <AboutInfoItem title="Design" items={['Figma', 'Adobe XD']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
