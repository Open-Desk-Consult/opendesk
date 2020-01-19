import React from 'react';
import Page from './Page';
import Wrapper from './Wrapper';
import ReactSnapScroll from 'react-snap-scroll';
import img1 from '../../../assets/images/project-1.jpg';
import img2 from '../../../assets/images/project-2.jpg';
import img3 from '../../../assets/images/project-3.jpg';

const product_data = [
  {
    category: 'DESIGN AND ENGINEERING',
    image: img1,
    name: 'T.ALERT',
    description: 'Bank Transaction alert Solution for both email and SMS',
  },
  {
    category: 'DESIGN AND ENGINEERING',
    image: img2,
    name: 'FLITRACK',
    description: 'Fleet management solution for vehicle tracking and management',
  },
  {
    category: 'DESIGN AND ENGINEERING',
    image: img3,
    name: 'BAYA',
    description: 'Estate management solution',
  },
  {
    category: 'DESIGN AND ENGINEERING',
    image: img3,
    name: 'PETREL',
    description:
      'Fund administrator and management solution for Thrifting, Loan, Withdrawal, Corperative, etc',
  },
  {
    category: 'DESIGN AND ENGINEERING',
    image: img3,
    name: 'MICA',
    description: 'Mobile app for hailing Cab',
  },
];

export default () => {
  return (
    <div style={{ height: '100vh' }}>
      <ReactSnapScroll orientation="horizontal" transition="scale-down-up">
        {product_data.map((item, index) => (
          <Wrapper key={index}>
            <Page index={index + 1} length={product_data.length} {...item} />
          </Wrapper>
        ))}
      </ReactSnapScroll>
    </div>
  );
};
