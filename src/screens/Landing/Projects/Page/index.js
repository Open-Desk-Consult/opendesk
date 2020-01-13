import React from 'react';
import { Link } from 'react-router-dom';

export default ({ category, image, description, index, length }) => {
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
        <div className="header">PROJECTS</div>
        <div className="content">
          <div className="intro">Here's some work we're proud to be part of:</div>
          <div className="intro-project">{description}</div>
          <div className="class-project">{category}</div>
        </div>
      </div>
      <div className="project-main">
        <Link to="/project" style={{ justifyContent: 'center', display: 'flex' }}>
          <img className="project-img" src={image} />
        </Link>
        <div className="nav-counter">
          <div>{`${index_prefix}${index}`}</div>
          <div>/</div>
          <div>{`${length_prefix}${length}`}</div>
        </div>
      </div>
    </>
  );
};
