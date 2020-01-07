import React from 'react';
import { Slide, HorizontalSlider } from 'fullpage-react';
import Wrapper from './Wrapper';

const slides = [
  <Slide style={{ backgroundColor: 'red' }}>
    <p>Horizontal 1</p>
  </Slide>,
  <Slide style={{ backgroundColor: 'yellow' }}>
    <p>Horizontal 2</p>
  </Slide>,
  <Slide style={{ backgroundColor: 'green' }}>
    <p>Horizontal 3</p>
  </Slide>
];

export default () => {


  const sliderProps = {
    name: 'horizontalSlider1',
    infinite: false,
    slides,
  };

  return (
    <Wrapper>
      <HorizontalSlider id="projects-slider" {...sliderProps} />
    </Wrapper>
  );
};
