import React from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';
import Partners from './Partners';
import Projects from './Projects';
import Services from './Services';
import Wrapper from './Wrapper';
import styled from 'styled-components';

const StyledSlide = styled(Slide)`
  //width: calc(100vw - 200px);
`;

export default ({ routes, setPage }) => {
  const handleScroll = (name, props, state, newState) => {
    const { activeSlide } = newState;
    setPage(routes[activeSlide]);
  };

  const slides = [
    <StyledSlide>
      <Home />
    </StyledSlide>,
    <StyledSlide>
      <Services />
    </StyledSlide>,
    <StyledSlide>
      <Products />
    </StyledSlide>,
    <StyledSlide>
      <Projects />
    </StyledSlide>,
    <StyledSlide>
      <Partners />
    </StyledSlide>,
    <StyledSlide>
      <Contact />
    </StyledSlide>,
  ];

  const fullpage_options = {
    scrollSensitivity: 7,
    touchSensitivity: 7,
    enableArrowKeys: true,
    onSlideChangeEnd: handleScroll,
    slides,
  };

  return (
    <Wrapper>
      <Fullpage {...fullpage_options} />
    </Wrapper>
  );
};
