import React from 'react';
import Wrapper from './Wrapper';
import hero from '../../assets/images/product-hero.jpg';

export default () => {
  return (
    <Wrapper>
      <div className="section top_section">
        <div className="content">
          <div className="header">Fleet Management System</div>
          <div className="text">
            lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet et
            dolor magnus libra mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem
            ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet et dolor
            magnus libra mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum
            dolor sit amet et dolor magnus libra mango. lorem ipsum dolor sit amet et dolor magnus
            libra mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit
            amet et dolor magnus libra mango. lorem ipsum dolor sit amet et dolor magnus libra
            mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet
            et dolor magnus libra mango. lorem ipsum dolor sit amet et dolor magnus libra mango
            lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet et
            dolor magnus libra mango
          </div>
        </div>
        <img className="product_image" alt="product-hero" src={hero} />
      </div>
      <div className="section">Section 2</div>
      <div className="section">Section 3</div>
    </Wrapper>
  );
};
