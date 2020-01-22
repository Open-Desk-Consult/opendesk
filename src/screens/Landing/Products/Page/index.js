import React from 'react';
import SplitText from 'react-pose-text';

const wordPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1, delay: ({ wordIndex }) => wordIndex * 250 },
};

export default ({ category, image, name, description, index, length }) => {
  const max_digits = length.toString().length;
  const length_prefix = max_digits <= 1 ? '0' : '';

  let index_prefix = '';
  const needed = max_digits + 1 - index.toString().length;

  for (let i = 0; i < needed; i++) {
    index_prefix += '0';
  }

  return (
    <>
      <div className="main">
        <div className="header">PRODUCTS</div>
        <div className="content">
          <div className="intro">{name}</div>
          <div className="intro-project">
            <SplitText initialPose="exit" pose="enter" {...{ wordPoses }}>
              {description}
            </SplitText>
          </div>
          <div className="class-project">{category}</div>
        </div>
      </div>
      <div className="project-main">
        <a href="/product" style={{ justifyContent: 'center', display: 'flex' }}>
          <img className="project-img" src={image} />
        </a>
        <div className="nav-counter">
          <div>{`${index_prefix}${index}`}</div>
          <div>/</div>
          <div>{`${length_prefix}${length}`}</div>
        </div>
      </div>
    </>
  );
};
