import React from 'react';
import Wrapper from './Wrapper';

import logo from '../../assets/images/logo.png';

export default ({ page }) => {
  return (
    <Wrapper>
      <img src={logo} className="logo" alt="logo" />
      <div className="menu">
        <div
          className="item"
          style={{
            transform: page === 'HOME' ? 'scale(1.05)' : 'scale(1)',
            fontWeight: page === 'HOME' ? 'bold' : 'inherit',
          }}
        >
          HOME
        </div>
        <div
          className="item"
          style={{
            transform: page === 'SERVICES' ? 'scale(1.05)' : 'scale(1)',
            fontWeight: page === 'SERVICES' ? 'bold' : 'inherit',
          }}
        >
          SERVICES
        </div>
        <div
          className="item"
          style={{
            transform: page === 'PROJECTS' ? 'scale(1.05)' : 'scale(1)',
            fontWeight: page === 'PROJECTS' ? 'bold' : 'inherit',
          }}
        >
          PROJECTS
        </div>
        <div
          className="item"
          style={{
            transform: page === 'CONTACT' ? 'scale(1.05)' : 'scale(1)',
            fontWeight: page === 'CONTACT' ? 'bold' : 'inherit',
          }}
        >
          CONTACT
        </div>
      </div>
    </Wrapper>
  );
};
