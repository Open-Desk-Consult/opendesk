import React from 'react';
import ProjectPage from './ProjectPage';
import Wrapper from './Wrapper';
import ReactSnapScroll from 'react-snap-scroll';
import Image from '../../assets/images/project-1.jpg';

const project_data = [
  {
    category: 'ENGINEERING',
    image: Image,
    description:
      'A fleet management system to allow efficient monitoring and traffic data analysis',
  },
  {
    category: 'DESIGN AND ENGINEERING',
    image: Image,
    description:
      'A personnel management system for the management of company assets and expatriate contracts',
  },
];

export default () => {
  return (
    <div style={{ height: '100vh' }}>
      <ReactSnapScroll orientation="horizontal" transition="scale-down-up">
        {project_data.map((item, index) => (
          <Wrapper key={index}>
            <ProjectPage index={index + 1} length={project_data.length} {...item} />
          </Wrapper>
        ))}
      </ReactSnapScroll>
    </div>
  );
};
