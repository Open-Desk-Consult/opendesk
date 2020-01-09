import React from 'react';
import Wrapper from './Wrapper';
import Image from '../../assets/images/hero-home.png';

export default () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="text">
          Our operation and activity is efficiently and effectively conducted without conflict to
          our values
        </div>
        <div className="hero_container">
          <img src={Image} className="hero" />
        </div>
      </div>
    </Wrapper>
  );
};
