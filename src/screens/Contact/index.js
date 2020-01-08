import React from 'react';
import Wrapper from './Wrapper';
import Image from '../../assets/images/hero-contact.jpg';

export default () => {
  return (
    <Wrapper>
      <div className="header">CONTACT</div>
      <div className="content">
        <div className="main">
          <div className="text">Let's do something amazing!</div>
          <img className="hero" src={Image} />
        </div>
        <div className="info">
          <div className="minor">+2348117461318</div>
          <div className="minor">info@opendeskng.com</div>
          <div className="major">LAGOS</div>
          <div className="minor">18, Military Street, Onikan, Lagos, Nigeria</div>
        </div>
      </div>
    </Wrapper>
  );
};
