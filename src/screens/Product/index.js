import React from 'react';
import Wrapper from './Wrapper';
import hero from '../../assets/images/product-hero.jpg';
import pattern from '../../assets/images/product-pattern.png';

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
          </div>
        </div>
        <img className="product_image" alt="product-hero" src={hero} />
      </div>
      <img className="pattern" src={pattern} alt="pattern" />
      <div className="section bottom_section">
        <div className="gallery">
          <img className="product_image" alt="product-hero" src={hero} />
          <div className="text">
            lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet et
            dolor magnus libra mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem
            ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet et dolor
            magnus libra mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum
            dolor sit amet et dolor magnus libra mango. lorem ipsum dolor sit amet et dolor magnus
            libra mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit
          </div>
          <img className="product_image" alt="product-hero" src={hero} />
        </div>
        <div className="outro">
          lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet et dolor
          magnus libra mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum
          dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet et dolor magnus
          libra mango lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit
          amet et dolor magnus libra mango. lorem ipsum dolor sit amet et dolor magnus libra mango
          lorem ipsum dolor sit amet et dolor magnus libra mango lorem ipsum dolor sit amet et dolor
        </div>
      </div>
    </Wrapper>
  );
};
