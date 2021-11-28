import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;

    display: inline-block;
    border: 3px solid var(--gray-2);
    border-radius: 1.2rem;

    img {
      height: 100%;
      border-radius: 1.2rem;
    }
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 1.2rem;
  }

  .projectItem__title {
    font-size: 2.2rem;
  }

  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }

    .projectItem__img {
      width: 100%;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project name',
  desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae
    eveniet harum commodi laboriosam eaque labore ipsam voluptate, optio
    enim amet officiis totam dolore ipsum earum ullam tempore nulla
    soluta?`,
}) {
  return (
    <ProjectItemStyle>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project" />
      </Link>
      <div className="projectItem__info">
        <Link to="">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
