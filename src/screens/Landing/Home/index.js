import React from 'react';
import SplitText from 'react-pose-text';

import Wrapper from './Wrapper';
import Image from '../../../assets/images/hero-home.png';

const wordPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1, delay: ({ wordIndex }) => wordIndex * 250 },
};

export default () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="text">
          <SplitText initialPose="exit" pose="enter" {...{ wordPoses }}>
            Our operation and activity is efficiently and effectively conducted without conflict to
            our values
          </SplitText>
        </div>
        <div className="hero_container">
          <img src={Image} className="hero" />
        </div>
      </div>
    </Wrapper>
  );
};
