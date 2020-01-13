import React from 'react';
import Page from './Page';
import Wrapper from './Wrapper';
import ReactSnapScroll from 'react-snap-scroll';
import img1 from '../../../assets/images/project-1.jpg';
import img2 from '../../../assets/images/project-2.jpg';
import img3 from '../../../assets/images/project-3.jpg';

const project_data = [
  {
    category: 'ENGINEERING',
    image: img1,
    description:
      'A fleet management system to allow efficient monitoring and traffic data analysis',
  },
  {
    category: 'DESIGN AND ENGINEERING',
    image: img2,
    description:
      'A personnel management system for the management of company assets and expatriate contracts',
  },
  {
    category: 'DESIGN',
    image: img3,
    description:
      'A multi-tenant software solution for pan-african telecommunications and internet service providers',
  },
];

export default () => {
  return (
    <div style={{ height: '100vh' }}>
      <ReactSnapScroll orientation="horizontal" transition="scale-down-up">
        {project_data.map((item, index) => (
          <Wrapper key={index}>
            <Page index={index + 1} length={project_data.length} {...item} />
          </Wrapper>
        ))}
      </ReactSnapScroll>
    </div>
  );
};
