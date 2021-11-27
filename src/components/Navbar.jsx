import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdClose, MdMenu } from 'react-icons/md';
import styled from 'styled-components';

const NavbarStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: var(--dark-bg);

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 0.5rem;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
      // font-size: 2.2rem;
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;

    cursor: pointer;
    outline: none;

    display: none;
  }

  .closeNavIcon {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mobile-menu-icon {
      display: block;
    }

    .navItems {
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      max-width: 300px;
      width: 90%;
      border-radius: 1rem;

      position: absolute;
      right: 1rem;
      top: var(--top);

      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;

        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarStyles>
      <div className="mobile-menu-icon">
        <MdMenu />
      </div>
      <ul className="navItems">
        <div className="closeNavIcon">
          <MdClose />
        </div>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavbarStyles>
  );
}
