import React from 'react';

import styled from 'styled-components';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import Hero from '../assets/images/hero.jpg';
import Ptext from './Ptext';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyle = styled.div`
  .typing {
    width: 14ch;
    animation: typing 3s steps(14), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 5px solid;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4.9rem;
    position: relative;

    span {
      display: inline-block;
      width: 98%;
    }

    .hero__name {
      font-size: 9.2rem;
      letter-spacing: 1rem;
      font-family: 'Montserrat SemiBold';
      color: var(--heading-color);
    }
  }

  .hero__image {
    max-width: 90vw;
    width: 100%;
    height: 750px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }

  .hero__info {
    margin-top: -23rem;
    color: var(--black);
  }

  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    position: absolute;
    bottom: 20px;
    width: 30px;
  }

  .hero__social {
    left: 10px;
  }

  .hero__scrollDown {
    right: 10px;
  }

  .hero__social__icons li {
    margin-top: 1rem;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 30px;
    p {
      font-size: 1.6rem;
      font-weight: 800;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.6rem;
      text-transform: uppercase;
      color: #064e3b;
      margin-bottom: 1rem;
    }

    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .hero__scrollDown {
    img {
      max-height: 85px;
    }
  }

  @media screen and (max-width: 1024px) {
    .hero__heading {
      width: 100%;

      .typing {
        width: 15ch;

        animation: typing 3s steps(15, end), blink-caret 0.75s step-end infinite;

        // animation: typewriter 4s steps(44) 1s 1 normal both,
        //   blinkTextCursor 500ms steps(44) infinite normal;

        // animation: typing 10s steps(14), blink 0.5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
      }

      @keyframes typing {
        from {
          width: 0;
        }
      }

      @keyframes blink {
        50% {
          border-color: transparent;
        }
      }

      font-size: 1.4rem;
      margin-bottom: -3.2rem;

      .hero__name {
        font-size: 6.5rem;
        letter-spacing: 0.45rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .hero {
      max-height: 100vh;
    }

    .hero__heading {
      width: 100%;

      .typing {
        width: 100%;

        animation: typing 3s steps(14, end), blink-caret 0.75s step-end infinite;

        // animation: typing 3s steps(14), blink 0.5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
      }

      @keyframes typing {
        from {
          width: 0;
        }
      }

      @keyframes blink {
        50% {
          border-color: transparent;
        }
      }

      font-size: 1.4rem;
      margin-bottom: -1.7rem;

      .hero__name {
        font-size: 3rem;
        letter-spacing: 0.32rem;
      }
    }

    .hero__image {
      height: 700px;
    }

    .hero__social {
      left: 0px;
      bottom: 2%;
      width: 18px;

      .hero__social__indicator {
        width: 18px;
        p {
          font-size: 1.2rem;
        }

        img {
          max-height: 30px;
        }
      }
    }

    .hero__scrollDown {
      right: 0px;
      width: 18px;
      gap: 1rem;
      bottom: 2%;

      p {
        font-size: 1.2rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>
              Hello, I am
              <br />
            </span>
            <span className="hero__name typing">Susanto Mahato</span>
          </h1>
          <div className="hero__image">
            <img src={Hero} alt="" />
          </div>
          <div className="hero__info">
            <Ptext>
              I am a Computer Science Engineering student and Full-Stack
              developer based in India with a passion for building digital
              services/stuff I want. I have a knack for all things launching
              products, from planning and designing all the way to solving
              real-life problems with code. When not online I love to travel to
              new places.
            </Ptext>
            <Button btnLink="/projects" btnText="my projects" outline={false} />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__icons">
              <ul>
                <li>
                  <a
                    href="https://github.com/nerdyspook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/susanto-mahato-761118168"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/nerdyspook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
