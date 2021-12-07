import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';

import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const ProjectStyles = styled.div`
  padding: 10rem 0;
`;

export default function Projects() {
  const [projectData, setProjectData] = useState(ProjectInfo);

  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle
          heading="<Projects &nbsp;/>"
          subheading="lets have a look at my projects"
        />
        <div className="projects__searchbar">
          <form>
            <input type="text" />
            <MdOutlineSearch />
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
