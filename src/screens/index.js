import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Wrapper from './Wrapper';

export default ({ routes, setPage }) => {
  const handleScroll = ({ to }) => setPage(routes[to]);

  return (
    <Wrapper>
      <FullPage afterChange={handleScroll}>
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
