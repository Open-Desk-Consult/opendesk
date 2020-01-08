import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import ProjectPage from './ProjectPage';
import Wrapper from './Wrapper';

export default () => {
  return (
    <div style={{ height: '100vh' }}>
      <HorizontalScroll pageLock={true} reverseScroll={true} style={{ scrollSnapType : 'x mandatory'}}>
        <Wrapper>
          <ProjectPage />
        </Wrapper>
        <Wrapper>
          <ProjectPage />
        </Wrapper>
        <Wrapper>
          <ProjectPage />
        </Wrapper>
      </HorizontalScroll>
    </div>
  );
};
