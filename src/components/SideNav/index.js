import React from 'react';
import Wrapper from './Wrapper';

import logo from '../../assets/images/logo.png';

export default () => {
  return (
    <Wrapper>
      <img src={logo} className="logo" alt="logo" />
      <div className="menu">
        <div className="item">HOME</div>
        <div className="item">SERVICES</div>
        <div className="item">PROJECTS</div>
        <div className="item">CONTACT</div>
      </div>
    </Wrapper>
  );
};
