import React from 'react';
import Wrapper from './Wrapper';

export default () => {
  return (
    <Wrapper>
      <div className="header">SERVICES</div>
      <div className="content">
        <div className="col">
          <div className="col_header">Design</div>
          <div className="description">
            Balancing functionality and creativity to deliver brand and digital experiences that
            enhance your projects vision
          </div>
          <div className="features">
            <div className="item">UI/UX Design</div>
            <div className="item">Visual Design</div>
            <div className="item">Project Management</div>
            <div className="item">Business solutions consultancy</div>
          </div>
        </div>
        <div className="col">
          <div className="col_header">Engineering</div>
          <div className="description">
            Pushing digital development boundaries while creating functional experiences that work
            for our partners and their customers
          </div>
          <div className="features">
            <div className="item">Web Development</div>
            <div className="item">Technical Support</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
