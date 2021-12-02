import React from 'react';

import Ptext from '../components/Ptext';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';

export default function About() {
  return (
    <div>
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
      </div>
    </div>
  );
}
