import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Wrapper from './Wrapper';

export default () => {
  return (
    <Wrapper>
      <FullPage>
        <Slide>
          <Home />
        </Slide>
        <Slide>
          <Services />
        </Slide>
        <Slide>
          <Projects />
        </Slide>
        <Slide>
          <Contact />
        </Slide>
      </FullPage>
    </Wrapper>
  );
};
