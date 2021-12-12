import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';

import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const ProjectStyles = styled.div`
  padding: 10rem 0;

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }

  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }

  .projects__searchBar input {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 0.6rem;
    outline: none;
    border: none;
  }

  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2.8rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }

  @media screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');

  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);

    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle
          heading="<Projects &nbsp;/>"
          subheading="lets have a look at my projects"
        />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              placeholder="Search projects here..."
              value={searchText}
              onChange={handleChange}
            />
            <MdOutlineSearch className="searchIcon" />
          </form>
        </div>

        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}
