import React from 'react';
import Page from './Page';
import Wrapper from './Wrapper';
import ReactSnapScroll from 'react-snap-scroll';
import img1 from '../../../assets/images/project-1.jpg';
import img2 from '../../../assets/images/project-2.jpg';
import img3 from '../../../assets/images/project-3.jpg';

const project_data = [
  {
    category: 'Developed for Shell Nigeria PLC',
    image: img1,
    name: 'T & L (Thrift and Loan Fund Administration)',
    description:
      'Platform to manage all loans and repayments in one place efficiently',
  },
  {
    category: 'Developed for Shell Nigeria PLC',
    image: img2,
    name: 'SDMIS(Sustainable Development Management Information System)',
    description:
      'A business consultant working on analysis, planning, implementation and evaluation of projects',
  },
  {
    category: 'Developed for Shell Nigeria PLC',
    image: img3,
    name: 'Nigeria Content Management System',
    description:
      'A platform primarily used to manage the creation and modification of digital content',
  },
  {
    category: 'Developed for Shell Nigeria PLC',
    image: img3,
    name: 'PCSIS',
    description:
      'A personnel management system for the management of company assets and expatriate contracts',
  },
  {
    category: 'Developed for DPR and conference organizers',
    image: img3,
    name: 'International HSE Biennial Conference on the Oil and Gas Industry In Nigeria',
    description:
      'A business consultant working on analysis, planning, implementation and evaluation of projects',
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
