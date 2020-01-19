import React from 'react';
import { Fullpage } from 'fullpage-react';

import Wrapper from './Wrapper';
import logo from '../../assets/images/logo.png';

export default ({ page }) => {
  const changePage = index => {
    Fullpage.changeFullpageSlide(index);
  };

  return (
    <Wrapper>
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <div className="menu">
        <div
          className="item"
          style={{
            color: page === 'HOME' ? 'black' : '#646464',
            fontWeight: page === 'HOME' ? 'bold' : 'inherit',
          }}
          onClick={() => changePage(0)}
        >
          HOME
        </div>
        <div
          className="item"
          style={{
            color: page === 'SERVICES' ? 'black' : '#646464',
            fontWeight: page === 'SERVICES' ? 'bold' : 'inherit',
          }}
          onClick={() => changePage(1)}
        >
          SERVICES
        </div>
        <div
          className="item"
          style={{
            color: page === 'PRODUCTS' ? 'black' : '#646464',
            fontWeight: page === 'PRODUCTS' ? 'bold' : 'inherit',
          }}
          onClick={() => changePage(2)}
        >
          PRODUCTS
        </div>
        <div
          className="item"
          style={{
            color: page === 'SERVICES' ? 'black' : '#646464',
            fontWeight: page === 'PROJECTS' ? 'bold' : 'inherit',
          }}
          onClick={() => changePage(3)}
        >
          PROJECTS
        </div>
        <div
          className="item"
          style={{
            color: page === 'PARTNERS' ? 'black' : '#646464',
            fontWeight: page === 'PARTNERS' ? 'bold' : 'inherit',
          }}
          onClick={() => changePage(4)}
        >
          PARTNERS
        </div>
        <div
          className="item"
          style={{
            color: page === 'SERVICES' ? 'black' : '#646464',
            fontWeight: page === 'CONTACT' ? 'bold' : 'inherit',
          }}
          onClick={() => changePage(5)}
        >
          CONTACT
        </div>
      </div>
    </Wrapper>
  );
};
