import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import ProjectPage from './ProjectPage';
import Wrapper from './Wrapper';
import ReactSnapScroll from 'react-snap-scroll';

export default () => {
  return (
    <div style={{ height: '100vh' }}>
      <ReactSnapScroll
        indexChanged={f => console.log(f)}
        orientation="horizontal"
        customTransition="move-left-right"
        customDuration={{ enter: 1000, exit: 1000 }}
      >
        <Wrapper>
          <ProjectPage />
        </Wrapper>
        <Wrapper>
          <ProjectPage />
        </Wrapper>
        <Wrapper>
          <ProjectPage />
        </Wrapper>
      </ReactSnapScroll>
    </div>
  );
};
